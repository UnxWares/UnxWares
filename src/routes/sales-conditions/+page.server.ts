import { fetchLegalDocument, markdownToHtml } from '$lib/utils/legal-fetcher';

export const prerender = false;

export async function load({ cookies }) {
	const locale = cookies.get('locale') || 'fr';

	try {
		const markdown = await fetchLegalDocument('SalesConditions', locale);
		const html = await markdownToHtml(markdown);

		return {
			content: html,
			locale
		};
	} catch (error) {
		console.error('Error loading sales conditions:', error);
		return {
			content: '<p>Erreur lors du chargement des conditions de vente.</p>',
			locale
		};
	}
}
