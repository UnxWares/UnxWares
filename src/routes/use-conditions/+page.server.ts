import { fetchLegalDocument, markdownToHtml } from '$lib/utils/legal-fetcher';
import { serverT } from '$lib/utils/server-t';

export const prerender = false;

export async function load({ locals, setHeaders }) {
	const locale = locals.locale || 'fr';

	// Définir les headers de cache pour éviter les problèmes de cache de langue
	setHeaders({
		'cache-control': 'private, no-cache, must-revalidate'
	});

	try {
		const markdown = await fetchLegalDocument('UseConditions', locale);
		const html = await markdownToHtml(markdown);

		return {
			content: html,
			locale,
			ogTitle: `${serverT(locale, 'footer.terms')} - UnxWares`
		};
	} catch (error) {
		console.error('Error loading use conditions:', error);
		return {
			content: '<p>Erreur lors du chargement des conditions d\'utilisation.</p>',
			locale,
			ogTitle: `${serverT(locale, 'footer.terms')} - UnxWares`
		};
	}
}
