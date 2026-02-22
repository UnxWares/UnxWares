export interface ReadingTimeResult {
	text: string;
	minutes: number;
	time: number;
	words: number;
}

/**
 * Calculate reading time for content (browser-compatible)
 * Assumes 200 words per minute reading speed
 */
export function calculateReadingTime(content: string): ReadingTimeResult {
	// Remove HTML tags and markdown syntax
	const plainText = content
		.replace(/<[^>]*>/g, '')
		.replace(/[#*`_~\[\]()]/g, '')
		.replace(/!\[.*?\]\(.*?\)/g, '')
		.replace(/\[.*?\]\(.*?\)/g, '');

	// Count words (split by whitespace)
	const words = plainText.trim().split(/\s+/).length;

	// Calculate reading time (200 words per minute)
	const minutes = Math.ceil(words / 200);
	const time = minutes * 60 * 1000; // in milliseconds

	return {
		text: `${minutes} min read`,
		minutes,
		time,
		words
	};
}

/**
 * Get localized reading time text
 */
export function getLocalizedReadingTime(minutes: number, locale: string): string {
	const translations: Record<string, { min: string; mins: string }> = {
		fr: { min: 'min', mins: 'mins' },
		en: { min: 'min', mins: 'mins' },
		de: { min: 'Min', mins: 'Min' },
		nl: { min: 'min', mins: 'min' },
		es: { min: 'min', mins: 'mins' },
		it: { min: 'min', mins: 'min' }
	};

	const t = translations[locale] || translations['en'];
	const unit = minutes === 1 ? t.min : t.mins;

	return `${minutes} ${unit}`;
}
