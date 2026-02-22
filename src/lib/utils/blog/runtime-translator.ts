import type { BlogPost } from './github-reader';
import { env } from '$env/dynamic/private';

// Simple in-memory cache
const translationCache = new Map<string, { content: string; frontmatter: any; timestamp: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

interface TranslateRequest {
	q: string;
	source: string;
	target: string;
	format?: 'text' | 'html';
	api_key?: string;
}

interface TranslateResponse {
	translatedText: string;
}

const LOCALE_MAP: Record<string, string> = {
	en: 'en',
	de: 'de',
	nl: 'nl',
	es: 'es',
	it: 'it'
};

/**
 * Translate text using LibreTranslate
 */
async function translateText(text: string, targetLocale: string): Promise<string> {
	const apiUrl = env.LIBRETRANSLATE_API_URL || 'https://libretranslate.com/translate';
	const apiKey = env.LIBRETRANSLATE_API_KEY;

	if (!text || text.trim().length === 0) {
		return text;
	}

	const requestBody: TranslateRequest = {
		q: text,
		source: 'fr',
		target: LOCALE_MAP[targetLocale] || targetLocale,
		format: 'text'
	};

	if (apiKey) {
		requestBody.api_key = apiKey;
	}

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error(`Translation API error: ${response.status} - ${errorText}`);
			console.error('Request was:', JSON.stringify(requestBody, null, 2));
			return text; // Return original on error
		}

		const data = (await response.json()) as TranslateResponse;
		return data.translatedText;
	} catch (error) {
		console.error('Translation error:', error);
		return text; // Return original on error
	}
}

/**
 * Translate blog post on-the-fly with caching
 */
export async function translateBlogPost(
	post: BlogPost,
	locale: string
): Promise<{ frontmatter: BlogPost['frontmatter']; content: string }> {
	// If French, return as-is
	if (locale === 'fr') {
		return {
			frontmatter: post.frontmatter,
			content: post.content
		};
	}

	// If no API key configured, return original content (translation disabled)
	const apiKey = env.LIBRETRANSLATE_API_KEY;
	if (!apiKey) {
		console.warn('Translation disabled: LIBRETRANSLATE_API_KEY not configured');
		return {
			frontmatter: post.frontmatter,
			content: post.content
		};
	}

	// Check cache
	const cacheKey = `${post.slug}-${locale}`;
	const cached = translationCache.get(cacheKey);

	if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
		return {
			frontmatter: cached.frontmatter,
			content: cached.content
		};
	}

	// Translate
	try {
		const [translatedTitle, translatedDescription, translatedExcerpt, translatedContent] =
			await Promise.all([
				translateText(post.frontmatter.title, locale),
				translateText(post.frontmatter.description, locale),
				translateText(post.frontmatter.excerpt, locale),
				translateText(post.content, locale)
			]);

		const translatedFrontmatter = {
			...post.frontmatter,
			title: translatedTitle,
			description: translatedDescription,
			excerpt: translatedExcerpt
		};

		// Cache the result
		translationCache.set(cacheKey, {
			frontmatter: translatedFrontmatter,
			content: translatedContent,
			timestamp: Date.now()
		});

		return {
			frontmatter: translatedFrontmatter,
			content: translatedContent
		};
	} catch (error) {
		console.error(`Translation failed for ${post.slug}:`, error);
		// Return original on error
		return {
			frontmatter: post.frontmatter,
			content: post.content
		};
	}
}

/**
 * Clear translation cache (useful for revalidation)
 */
export function clearTranslationCache() {
	translationCache.clear();
}
