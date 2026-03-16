import { getBlogPost } from '$lib/utils/blog/github-reader';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load({ params, cookies }) {
	const currentLocale = cookies.get('locale') || 'fr';

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
		}
	};
}
