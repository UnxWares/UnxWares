import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

register('fr', () => import('./locales/fr.json'));
register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));
register('nl', () => import('./locales/nl.json'));
register('es', () => import('./locales/es.json'));
register('it', () => import('./locales/it.json'));

const LOCALE_STORAGE_KEY = 'unxwares-locale';
const availableLocales = ['fr', 'en', 'de', 'nl', 'es', 'it'];

// Normaliser la locale du navigateur vers nos locales disponibles
function getNormalizedLocale() {
	const browserLocale = getLocaleFromNavigator();
	if (!browserLocale) return 'fr';

	// Extraire le code de langue principal (en-US -> en, fr-FR -> fr, etc.)
	const lang = browserLocale.split('-')[0].toLowerCase();

	// Vérifier si cette langue est disponible
	return availableLocales.includes(lang) ? lang : 'fr';
}

// Récupérer la langue initiale (localStorage > navigateur > fallback)
function getInitialLocale() {
	if (typeof window !== 'undefined') {
		const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
		if (savedLocale && availableLocales.includes(savedLocale)) {
			return savedLocale;
		}
	}
	return getNormalizedLocale();
}

const initialLocale = getInitialLocale();

init({
	fallbackLocale: 'fr',
	initialLocale,
});

// Définir le cookie initial pour le serveur
if (typeof window !== 'undefined' && initialLocale) {
	document.cookie = `locale=${initialLocale}; path=/; max-age=31536000; SameSite=Lax`;
}

// Sauvegarder la langue dans localStorage et cookie quand elle change
locale.subscribe((value) => {
	if (typeof window !== 'undefined' && value) {
		localStorage.setItem(LOCALE_STORAGE_KEY, value);
		// Définir aussi un cookie pour le serveur (expire dans 1 an)
		document.cookie = `locale=${value}; path=/; max-age=31536000; SameSite=Lax`;
	}
});
