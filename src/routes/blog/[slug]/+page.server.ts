import { getBlogPost } from '$lib/utils/blog/github-reader';
import { translateBlogPost } from '$lib/utils/blog/runtime-translator';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';
import { error } from '@sveltejs/kit';

export const prerender = false;

export async function load({ params, cookies }) {
	const currentLocale = cookies.get('locale') || 'fr';

	// Fetch post from GitHub
	const post = await getBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Article not found');
	}

	// Translate if needed
	const { frontmatter, content } =
		currentLocale === 'fr'
			? { frontmatter: post.frontmatter, content: post.content }
			: await translateBlogPost(post, currentLocale);

	// Convert Markdown to HTML
	const htmlContent = await processMarkdown(content);

	return {
		post: {
			slug: post.slug,
			frontmatter,
			content: htmlContent
		}
	};
}
