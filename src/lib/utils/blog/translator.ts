import type { BlogPost } from './github-fetcher';

const SUPPORTED_LOCALES = ['en', 'de', 'nl', 'es', 'it'] as const;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const LOCALE_MAP: Record<SupportedLocale, string> = {
	en: 'en',
	de: 'de',
	nl: 'nl',
	es: 'es',
	it: 'it'
};

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

/**
 * Translate text using LibreTranslate API
 */
async function translateText(
	text: string,
	targetLocale: SupportedLocale,
	format: 'text' | 'html' = 'text'
): Promise<string> {
	const apiUrl = process.env.LIBRETRANSLATE_API_URL || 'https://libretranslate.com/translate';
	const apiKey = process.env.LIBRETRANSLATE_API_KEY;

	const requestBody: TranslateRequest = {
		q: text,
		source: 'fr',
		target: LOCALE_MAP[targetLocale],
		format
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
			throw new Error(`LibreTranslate API error: ${response.status} - ${errorText}`);
		}

		const data = (await response.json()) as TranslateResponse;
		return data.translatedText;
	} catch (error) {
		console.error(`Translation error for locale ${targetLocale}:`, error);
		throw error;
	}
}

/**
 * Add delay between API calls to respect rate limits
 */
function delay(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Translate blog post frontmatter
 */
async function translateFrontmatter(
	frontmatter: BlogPost['frontmatter'],
	targetLocale: SupportedLocale
): Promise<BlogPost['frontmatter']> {
	// Wait between requests to avoid rate limiting
	await delay(500);

	const translatedTitle = await translateText(frontmatter.title, targetLocale);

	await delay(500);
	const translatedDescription = await translateText(frontmatter.description, targetLocale);

	await delay(500);
	const translatedExcerpt = await translateText(frontmatter.excerpt, targetLocale);

	// Translate tags if present
	let translatedTags = frontmatter.tags;
	if (frontmatter.tags && frontmatter.tags.length > 0) {
		await delay(500);
		const tagsText = frontmatter.tags.join(', ');
		const translatedTagsText = await translateText(tagsText, targetLocale);
		translatedTags = translatedTagsText.split(',').map((tag) => tag.trim());
	}

	return {
		...frontmatter,
		title: translatedTitle,
		description: translatedDescription,
		excerpt: translatedExcerpt,
		tags: translatedTags
	};
}

/**
 * Translate blog post content (Markdown)
 * Uses HTML format to preserve markdown structure
 */
async function translateContent(content: string, targetLocale: SupportedLocale): Promise<string> {
	// Split content into smaller chunks to avoid API limits
	const maxChunkSize = 5000;
	const chunks: string[] = [];

	// Split by paragraphs first
	const paragraphs = content.split('\n\n');
	let currentChunk = '';

	for (const paragraph of paragraphs) {
		if (currentChunk.length + paragraph.length > maxChunkSize && currentChunk.length > 0) {
			chunks.push(currentChunk);
			currentChunk = paragraph;
		} else {
			currentChunk += (currentChunk ? '\n\n' : '') + paragraph;
		}
	}

	if (currentChunk) {
		chunks.push(currentChunk);
	}

	// Translate each chunk
	const translatedChunks: string[] = [];

	for (let i = 0; i < chunks.length; i++) {
		console.log(`Translating chunk ${i + 1}/${chunks.length} for locale ${targetLocale}...`);
		await delay(1000); // 1 second between chunks
		const translatedChunk = await translateText(chunks[i], targetLocale, 'html');
		translatedChunks.push(translatedChunk);
	}

	return translatedChunks.join('\n\n');
}

/**
 * Translate a complete blog post to target locale
 */
export async function translateBlogPost(
	post: BlogPost,
	targetLocale: SupportedLocale
): Promise<{ frontmatter: BlogPost['frontmatter']; content: string }> {
	console.log(`Translating post "${post.frontmatter.title}" to ${targetLocale}...`);

	try {
		const [translatedFrontmatter, translatedContent] = await Promise.all([
			translateFrontmatter(post.frontmatter, targetLocale),
			translateContent(post.content, targetLocale)
		]);

		return {
			frontmatter: translatedFrontmatter,
			content: translatedContent
		};
	} catch (error) {
		console.error(`Failed to translate post ${post.slug} to ${targetLocale}:`, error);
		throw error;
	}
}

/**
 * Get list of supported locales (excluding source language 'fr')
 */
export function getSupportedLocales(): SupportedLocale[] {
	return [...SUPPORTED_LOCALES];
}
