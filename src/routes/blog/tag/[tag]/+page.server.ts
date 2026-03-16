import { listBlogPosts } from '$lib/utils/blog/github-reader';
import { calculateReadingTime } from '$lib/utils/blog/reading-time';
import { processMarkdown } from '$lib/utils/blog/markdown-processor';

export const prerender = false;

export async function load({ params, cookies }) {
	const currentLocale = cookies.get('locale') || 'fr';
	const tag = decodeURIComponent(params.tag);

	// Fetch all posts from GitHub in the right locale
	const allPosts = await listBlogPosts(currentLocale);

	// Filter by tag
	const tagPosts = allPosts.filter((p) =>
		p.frontmatter.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
	);

	// Sort by date
	const sortedPosts = tagPosts.sort((a, b) => {
		return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
	});

	// Convert to HTML
	const posts = await Promise.all(
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

	// Get all unique tags
	const allTags = [...new Set(allPosts.flatMap((p) => p.frontmatter.tags))].sort();

	return {
		posts,
		tag,
		allTags
	};
}
