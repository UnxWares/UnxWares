import { listBlogPosts } from '$lib/utils/blog/github-reader';
import { calculateReadingTime } from '$lib/utils/blog/reading-time';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';

export const prerender = false;

export async function load({ url, cookies }) {
	const currentLocale = cookies.get('locale') || 'fr';
	const page = Number(url.searchParams.get('page')) || 1;
	const perPage = 10;

	// Fetch posts from GitHub in the right locale
	const allPosts = await listBlogPosts(currentLocale);

	// Sort by date (newest first)
	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
	});

	// Convert to HTML
	const processedPosts = await Promise.all(
		sortedPosts.map(async (post) => {
			const readingTime = calculateReadingTime(post.content);
			const htmlContent = await processMarkdown(post.content);

			return {
				slug: post.slug,
				frontmatter: post.frontmatter,
				content: htmlContent,
				readingTime: readingTime.minutes
			};
		})
	);

	// Pagination
	const total = processedPosts.length;
	const totalPages = Math.ceil(total / perPage);
	const startIndex = (page - 1) * perPage;
	const posts = processedPosts.slice(startIndex, startIndex + perPage);

	// Get unique categories
	const categories = [...new Set(allPosts.map((p) => p.frontmatter.category))].sort();

	return {
		posts,
		total,
		totalPages,
		currentPage: page,
		categories,
		locale: currentLocale
	};
}
