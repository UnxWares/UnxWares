import { listBlogPosts } from '$lib/utils/blog/github-reader';
import { translateBlogPost } from '$lib/utils/blog/runtime-translator';
import { calculateReadingTime } from '$lib/utils/blog/reading-time';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';

export const prerender = false;

export async function load({ url, cookies }) {
	const currentLocale = cookies.get('locale') || 'fr';
	const page = Number(url.searchParams.get('page')) || 1;
	const perPage = 10;

	// Fetch posts from GitHub
	const allPosts = await listBlogPosts();

	// Sort by date (newest first)
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
	});

	// Translate if needed and convert to HTML
	const translatedPosts = await Promise.all(
		sortedPosts.map(async (post) => {
			const { frontmatter, content } =
				currentLocale === 'fr'
					? { frontmatter: post.frontmatter, content: post.content }
					: await translateBlogPost(post, currentLocale);

			const readingTime = calculateReadingTime(content);
			const htmlContent = await processMarkdown(content);

			return {
				slug: post.slug,
				frontmatter,
				content: htmlContent,
				readingTime: readingTime.minutes
			};
		})
	);

	// Pagination
	const total = translatedPosts.length;
	const totalPages = Math.ceil(total / perPage);
	const startIndex = (page - 1) * perPage;
	const posts = translatedPosts.slice(startIndex, startIndex + perPage);

	// Get unique categories
	const categories = [...new Set(allPosts.map((p) => p.frontmatter.category))].sort();

	return {
		posts,
		total,
		totalPages,
		currentPage: page,
		categories
	};
}
