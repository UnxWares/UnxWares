import { listBlogPosts } from '$lib/utils/blog/github-reader';
import { translateBlogPost } from '$lib/utils/blog/runtime-translator';
import { generateRSSFeed } from '$lib/utils/blog/feed-generator';

export const prerender = false;

export async function GET({ url }) {
	const locale = url.searchParams.get('lang') || 'fr';

	// Validate locale
	const validLocales = ['fr', 'en', 'de', 'nl', 'es', 'it'];
	const targetLocale = validLocales.includes(locale) ? locale : 'fr';

	// Fetch posts from GitHub
	const allPosts = await listBlogPosts();

	// Sort by date (newest first) and limit to 20
	const sortedPosts = allPosts
		.sort((a, b) => {
			return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
		})
		.slice(0, 20);

	// Translate if needed
	const posts = await Promise.all(
		sortedPosts.map(async (post) => {
			const { frontmatter, content } =
				targetLocale === 'fr'
					? { frontmatter: post.frontmatter, content: post.content }
					: await translateBlogPost(post, targetLocale);

			return {
				slug: post.slug,
				frontmatter,
				content
			};
		})
	);

	// Generate RSS feed
	const rss = generateRSSFeed(posts, targetLocale);

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'max-age=3600, public'
		}
	});
}
