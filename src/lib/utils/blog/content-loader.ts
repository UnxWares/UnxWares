import { readFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';
import type { BlogPost } from './github-fetcher';
import type { CachedTranslation } from './cache-manager';

export interface LoadedPost extends BlogPost {
	readingTime?: number;
}

/**
 * Get path to blog content directory
 */
function getContentPath(): string {
	return join(process.cwd(), 'src/lib/content/blog');
}

/**
 * Load blog metadata index
 */
export function loadBlogMetadata(): BlogPost[] {
	const metadataPath = join(getContentPath(), 'metadata.json');

	if (!existsSync(metadataPath)) {
		console.warn('Blog metadata not found. Run fetch-blog script first.');
		return [];
	}

	try {
		const data = JSON.parse(readFileSync(metadataPath, 'utf-8'));
		return data;
	} catch (error) {
		console.error('Error loading blog metadata:', error);
		return [];
	}
}

/**
 * Load a single blog post for a specific locale
 */
export function loadBlogPost(slug: string, locale: string = 'fr'): LoadedPost | null {
	// Try to load translation first
	if (locale !== 'fr') {
		const translationPath = join(getContentPath(), 'translations', locale, `${slug}.json`);

		if (existsSync(translationPath)) {
			try {
				const cached = JSON.parse(readFileSync(translationPath, 'utf-8')) as CachedTranslation;
				return {
					slug: cached.slug,
					frontmatter: cached.frontmatter,
					content: cached.content
				};
			} catch (error) {
				console.error(`Error loading translation ${locale}/${slug}:`, error);
				// Fall through to French version
			}
		}
	}

	// Fallback to French version
	const frenchPath = join(getContentPath(), 'posts', `${slug}.md`);

	if (!existsSync(frenchPath)) {
		return null;
	}

	try {
		const metadata = loadBlogMetadata();
		const post = metadata.find((p) => p.slug === slug);

		if (!post) {
			return null;
		}

		// Read raw markdown content
		const content = readFileSync(frenchPath, 'utf-8');
		// Remove frontmatter from content
		const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');

		return {
			...post,
			content: contentWithoutFrontmatter
		};
	} catch (error) {
		console.error(`Error loading post ${slug}:`, error);
		return null;
	}
}

/**
 * Load all blog posts for a specific locale
 */
export function loadAllBlogPosts(locale: string = 'fr'): LoadedPost[] {
	const metadata = loadBlogMetadata();

	return metadata
		.map((post) => loadBlogPost(post.slug, locale))
		.filter((post): post is LoadedPost => post !== null);
}

/**
 * Load paginated blog posts
 */
export function loadPaginatedPosts(
	locale: string = 'fr',
	page: number = 1,
	perPage: number = 10
): {
	posts: LoadedPost[];
	total: number;
	totalPages: number;
	currentPage: number;
} {
	const allPosts = loadAllBlogPosts(locale);

	// Sort by date (newest first)
	const sortedPosts = allPosts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date).getTime();
		const dateB = new Date(b.frontmatter.date).getTime();
		return dateB - dateA;
	});

	const total = sortedPosts.length;
	const totalPages = Math.ceil(total / perPage);
	const startIndex = (page - 1) * perPage;
	const endIndex = startIndex + perPage;

	return {
		posts: sortedPosts.slice(startIndex, endIndex),
		total,
		totalPages,
		currentPage: page
	};
}

/**
 * Load posts by category
 */
export function loadPostsByCategory(category: string, locale: string = 'fr'): LoadedPost[] {
	const allPosts = loadAllBlogPosts(locale);

	return allPosts
		.filter((post) => post.frontmatter.category.toLowerCase() === category.toLowerCase())
		.sort((a, b) => {
			const dateA = new Date(a.frontmatter.date).getTime();
			const dateB = new Date(b.frontmatter.date).getTime();
			return dateB - dateA;
		});
}

/**
 * Load posts by tag
 */
export function loadPostsByTag(tag: string, locale: string = 'fr'): LoadedPost[] {
	const allPosts = loadAllBlogPosts(locale);

	return allPosts
		.filter((post) =>
			post.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
		)
		.sort((a, b) => {
			const dateA = new Date(a.frontmatter.date).getTime();
			const dateB = new Date(b.frontmatter.date).getTime();
			return dateB - dateA;
		});
}

/**
 * Get all unique categories
 */
export function getAllCategories(locale: string = 'fr'): string[] {
	const allPosts = loadAllBlogPosts(locale);
	const categories = new Set(allPosts.map((post) => post.frontmatter.category));
	return Array.from(categories).sort();
}

/**
 * Get all unique tags
 */
export function getAllTags(locale: string = 'fr'): string[] {
	const allPosts = loadAllBlogPosts(locale);
	const tags = new Set(allPosts.flatMap((post) => post.frontmatter.tags));
	return Array.from(tags).sort();
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(locale: string = 'fr', limit: number = 3): LoadedPost[] {
	const allPosts = loadAllBlogPosts(locale);

	return allPosts
		.filter((post) => post.frontmatter.featured)
		.sort((a, b) => {
			const dateA = new Date(a.frontmatter.date).getTime();
			const dateB = new Date(b.frontmatter.date).getTime();
			return dateB - dateA;
		})
		.slice(0, limit);
}
