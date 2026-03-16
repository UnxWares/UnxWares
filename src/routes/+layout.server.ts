import type { LayoutServerLoad } from './$types';

const OG_LOCALE_MAP: Record<string, string> = {
	fr: 'fr_FR',
	en: 'en_US',
	de: 'de_DE',
	nl: 'nl_NL',
	es: 'es_ES',
	it: 'it_IT'
};

// Site-wide OG description per locale (no existing i18n key for this)
const SITE_OG_DESCRIPTIONS: Record<string, string> = {
	fr: "Entreprise innovante spécialisée dans le développement web, mobile et jeux vidéo avec UnxWares Studio, et l'hébergement cloud souverain avec UnxWares Cloud.",
	en: 'Innovative company specializing in web, mobile, and game development with UnxWares Studio, and sovereign cloud hosting with UnxWares Cloud.',
	de: 'Innovatives Unternehmen spezialisiert auf Web-, Mobile- und Spieleentwicklung mit UnxWares Studio sowie souveränes Cloud-Hosting mit UnxWares Cloud.',
	nl: 'Innovatief bedrijf gespecialiseerd in web-, mobiele en game-ontwikkeling met UnxWares Studio, en soevereine cloudhosting met UnxWares Cloud.',
	es: 'Empresa innovadora especializada en desarrollo web, móvil y videojuegos con UnxWares Studio, y alojamiento en la nube soberana con UnxWares Cloud.',
	it: 'Azienda innovativa specializzata in sviluppo web, mobile e videogiochi con UnxWares Studio, e hosting cloud sovrano con UnxWares Cloud.'
};

export const load: LayoutServerLoad = async ({ locals }) => {
	const locale = locals.locale ?? 'fr';
	return {
		locale,
		ogLocale: OG_LOCALE_MAP[locale] ?? 'fr_FR',
		ogDescription: SITE_OG_DESCRIPTIONS[locale] ?? SITE_OG_DESCRIPTIONS.fr
	};
};
