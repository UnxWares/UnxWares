import { fetchLegalDocument, markdownToHtml } from '$lib/utils/legal-fetcher';

export const prerender = false;

export async function load({ cookies }) {
	const locale = cookies.get('locale') || 'fr';

	try {
		const markdown = await fetchLegalDocument('LegalNotices', locale);
		const html = await markdownToHtml(markdown);

		return {
			content: html,
			locale
		};
	} catch (error) {
		console.error('Error loading legal notices:', error);
		return {
			content: '<p>Erreur lors du chargement des mentions légales.</p>',
			locale
		};
	}
}
