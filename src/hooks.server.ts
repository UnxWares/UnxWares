import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Get locale from cookie or Accept-Language header
	let locale = event.cookies.get('locale');

	if (!locale) {
		// Fallback to browser's Accept-Language header
		const acceptLanguage = event.request.headers.get('accept-language');
		if (acceptLanguage) {
			// Parse Accept-Language header (e.g., "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7")
			const languages = acceptLanguage
				.split(',')
				.map(lang => lang.split(';')[0].trim().toLowerCase())
				.map(lang => lang.split('-')[0]); // Extract base language code

			// Find first matching supported language
			const supportedLocales = ['fr', 'en', 'de', 'nl', 'es', 'it'];
			locale = languages.find(lang => supportedLocales.includes(lang)) || 'fr';
		} else {
			locale = 'fr';
		}

		// Set the cookie so it's available for subsequent requests
		event.cookies.set('locale', locale, {
			path: '/',
			maxAge: 31536000, // 1 year
			sameSite: 'lax',
			httpOnly: false // Allow JavaScript to read it
		});
	}

	// Make locale available to server load functions
	event.locals.locale = locale;

	return resolve(event);
};
