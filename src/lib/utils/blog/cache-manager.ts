import { createHash } from 'crypto';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';

export interface CachedTranslation {
	slug: string;
	hash: string;
	locale: string;
	translatedAt: string;
	frontmatter: Record<string, any>;
	content: string;
}

/**
 * Calculate MD5 hash of content for cache invalidation
 */
export function calculateHash(content: string): string {
	return createHash('md5').update(content).digest('hex');
}

/**
 * Get path to translation cache file
 */
export function getCachePath(locale: string, slug: string): string {
	return join(process.cwd(), 'src/lib/content/blog/translations', locale, `${slug}.json`);
}

/**
 * Check if a cached translation exists and is valid
 */
export function getCachedTranslation(
	locale: string,
	slug: string,
	currentHash: string
): CachedTranslation | null {
	const cachePath = getCachePath(locale, slug);

	if (!existsSync(cachePath)) {
		return null;
	}

	try {
		const cached = JSON.parse(readFileSync(cachePath, 'utf-8')) as CachedTranslation;

		// Check if hash matches (content hasn't changed)
		if (cached.hash === currentHash) {
			return cached;
		}

		return null;
	} catch (error) {
		console.error(`Error reading cache for ${locale}/${slug}:`, error);
		return null;
	}
}

/**
 * Save translation to cache
 */
export function saveCachedTranslation(translation: CachedTranslation): void {
	const cachePath = getCachePath(translation.locale, translation.slug);

	// Ensure directory exists
	const dir = dirname(cachePath);
	if (!existsSync(dir)) {
		mkdirSync(dir, { recursive: true });
	}

	try {
		writeFileSync(cachePath, JSON.stringify(translation, null, 2), 'utf-8');
	} catch (error) {
		console.error(`Error saving cache for ${translation.locale}/${translation.slug}:`, error);
		throw error;
	}
}

/**
 * Check if translation needs update
 */
export function needsTranslation(locale: string, slug: string, currentHash: string): boolean {
	const cached = getCachedTranslation(locale, slug, currentHash);
	return cached === null;
}
