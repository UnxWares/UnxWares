/**
 * Utility to fetch legal documents from GitHub repository
 */

import { marked } from 'marked';

// Function to generate ID from text
// If the text starts with a number (e.g., "3. Title"), use just the number as ID
function generateId(text: string): string {
	// Check if text starts with a number followed by a dot and space
	const numberMatch = text.match(/^(\d+)\.\s/);
	if (numberMatch) {
		return numberMatch[1]; // Return just the number
	}

	// Otherwise, generate a slug
	return text
		.toLowerCase()
		.replace(/[^\w\s-]/g, '') // Remove special chars except word chars, spaces, and hyphens
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
		.trim();
}

// Configure custom renderer to add IDs to headers
const renderer = new marked.Renderer();
const originalHeading = renderer.heading.bind(renderer);

renderer.heading = function (args) {
	const text = args.text;
	const level = args.depth;
	const id = generateId(text);

	return `<h${level} id="${id}">${text}</h${level}>\n`;
};

marked.use({ renderer });

// Configure marked options
marked.setOptions({
	gfm: true, // GitHub Flavored Markdown
	breaks: true, // Convert \n to <br>
	mangle: false // Don't escape email addresses
});

const GITHUB_REPO = 'UnxWares/Legal-Docs';
const GITHUB_BRANCH = 'main';

export type LegalDocType = 'LegalNotices' | 'PrivacyPolicy' | 'SalesConditions' | 'UseConditions';

const LOCALE_MAP: Record<string, string> = {
	fr: 'FR',
	en: 'EN',
	de: 'DE',
	nl: 'NL',
	es: 'ES',
	it: 'IT'
};

/**
 * Fetch a legal document from GitHub
 */
export async function fetchLegalDocument(
	docType: LegalDocType,
	locale: string
): Promise<string> {
	const lang = LOCALE_MAP[locale] || 'FR';
	const filename = `${lang}-UnxWares-${docType}.md`;
	const fileUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${filename}`;

	try {
		const response = await fetch(fileUrl, {
			// Cache for 1 hour
			next: { revalidate: 3600 }
		});

		if (!response.ok) {
			console.error(`Failed to fetch legal document: ${filename}`);
			// Fallback to French if translation not found
			if (lang !== 'FR') {
				return fetchLegalDocument(docType, 'fr');
			}
			throw new Error(`Failed to fetch legal document: ${response.statusText}`);
		}

		const content = await response.text();
		return content;
	} catch (error) {
		console.error(`Error fetching legal document ${filename}:`, error);
		// Fallback to French
		if (lang !== 'FR') {
			return fetchLegalDocument(docType, 'fr');
		}
		throw error;
	}
}

/**
 * Convert markdown to HTML using marked
 */
export async function markdownToHtml(markdown: string): Promise<string> {
	try {
		// Convert markdown to HTML (HTML tags are preserved by default in marked)
		const html = await marked.parse(markdown);
		return html;
	} catch (error) {
		console.error('Error processing markdown:', error);
		return markdown;
	}
}
