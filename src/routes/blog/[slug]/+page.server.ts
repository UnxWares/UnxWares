import { getBlogPost } from '$lib/utils/blog/github-reader';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';
import { error } from '@sveltejs/kit';

export const prerender = false;

const VALID_LOCALES = ['fr', 'en', 'de', 'nl', 'es', 'it'];

export async function load({ params, url, locals, cookies }) {
	// Explicit ?lang= param takes priority (for social sharing with a specific language)
	const langParam = url.searchParams.get('lang');
	const currentLocale =
		langParam && VALID_LOCALES.includes(langParam)
			? langParam
			: (locals.locale ?? cookies.get('locale') ?? 'fr');

	// Fetch post from GitHub in the right locale (with fallback)
	const post = await getBlogPost(params.slug, currentLocale);

	if (!post) {
		throw error(404, 'Article not found');
	}

	// Convert Markdown to HTML
	const htmlContent = await processMarkdown(post.content);

	return {
		post: {
			slug: post.slug,
			frontmatter: post.frontmatter,
			content: htmlContent
		},
		locale: currentLocale
	};
}
