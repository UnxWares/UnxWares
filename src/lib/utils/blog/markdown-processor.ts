import { marked } from 'marked';

// Configure marked options
marked.setOptions({
	gfm: true, // GitHub Flavored Markdown
	breaks: true // Convert \n to <br>
});

/**
 * Process markdown content to HTML
 */
export async function processMarkdown(content: string): Promise<string> {
	try {
		const html = await marked.parse(content);
		return html;
	} catch (error) {
		console.error('Error processing markdown:', error);
		return content;
	}
}

/**
 * Strip HTML tags from content (useful for excerpts)
 */
export function stripHtml(html: string): string {
	return html.replace(/<[^>]*>/g, '');
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, maxLength: number = 200): string {
	const stripped = stripHtml(content);
	const cleaned = stripped.replace(/\s+/g, ' ').trim();

	if (cleaned.length <= maxLength) {
		return cleaned;
	}

	// Find last complete word within maxLength
	const truncated = cleaned.substring(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');

	if (lastSpace > 0) {
		return truncated.substring(0, lastSpace) + '...';
	}

	return truncated + '...';
}
