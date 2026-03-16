/**
 * Server-side synchronous translator.
 * Uses direct JSON imports (bundled at build time) — works in SSR without async.
 * svelte-i18n uses dynamic imports and initializes with French on the server,
 * so $t() in <svelte:head> always returns French for crawlers. Use this instead.
 */
import fr from '$lib/i18n/locales/fr.json';
import en from '$lib/i18n/locales/en.json';
import de from '$lib/i18n/locales/de.json';
import nl from '$lib/i18n/locales/nl.json';
import es from '$lib/i18n/locales/es.json';
import it from '$lib/i18n/locales/it.json';

type LocaleData = Record<string, unknown>;

const LOCALES: Record<string, LocaleData> = { fr, en, de, nl, es, it };

function resolve(data: LocaleData, key: string): string | undefined {
	const parts = key.split('.');
	let current: unknown = data;
	for (const part of parts) {
		if (typeof current !== 'object' || current === null) return undefined;
		current = (current as Record<string, unknown>)[part];
	}
	return typeof current === 'string' ? current : undefined;
}

export function serverT(locale: string, key: string): string {
	const data = LOCALES[locale] ?? LOCALES.fr;
	return resolve(data, key) ?? resolve(LOCALES.fr, key) ?? key;
}
