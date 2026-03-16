import type { PageServerLoad } from './$types';
import { serverT } from '$lib/utils/server-t';

export const prerender = false;

export const load: PageServerLoad = async ({ locals }) => {
	const locale = locals.locale ?? 'fr';
	return {
		ogTitle: serverT(locale, 'pages.studio.title')
	};
};
