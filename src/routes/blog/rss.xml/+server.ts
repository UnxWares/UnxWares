import { listBlogPosts } from '$lib/utils/blog/github-reader';
import { generateRSSFeed } from '$lib/utils/blog/feed-generator';

export const prerender = false;

export async function GET({ url, locals }) {
	const validLocales = ['fr', 'en', 'de', 'nl', 'es', 'it'];

	// ?lang= param > detected user locale (Accept-Language) > french fallback
	const langParam = url.searchParams.get('lang');
	const locale = langParam ?? locals.locale ?? 'fr';
	const targetLocale = validLocales.includes(locale) ? locale : 'fr';

	// Fetch posts from GitHub in the right locale
	const allPosts = await listBlogPosts(targetLocale);

	// Sort by date (newest first) and limit to 20
	const posts = allPosts
		.sort((a, b) => {
			return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
		})
		.slice(0, 20)
		.map((post) => ({
			slug: post.slug,
			frontmatter: post.frontmatter,
			content: post.content
		}));

	// Generate RSS feed
	const rss = generateRSSFeed(posts, targetLocale);

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'max-age=3600, public'
		}
	});
}
