import matter from 'gray-matter';

export interface BlogPost {
	slug: string;
	frontmatter: {
		title: string;
		date: string;
		author: string;
		authorEmail?: string;
		category: string;
		tags: string[];
		description: string;
		excerpt: string;
		image?: string;
		imageAlt?: string;
		featured?: boolean;
		draft?: boolean;
	};
	content: string;
}

export interface GitHubFile {
	name: string;
	path: string;
	sha: string;
	size: number;
	url: string;
	download_url: string;
	type: 'file' | 'dir';
}

/**
 * Fetch all markdown files from GitHub repository
 */
export async function fetchBlogPosts(): Promise<BlogPost[]> {
	const repo = 'UnxWares/BlogArticles';
	const branch = 'main';
	const token = process.env.GITHUB_TOKEN;

	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json'
	};

	if (token) {
		headers['Authorization'] = `token ${token}`;
	}

	// Fetch repository contents
	const apiUrl = `https://api.github.com/repos/${repo}/contents?ref=${branch}`;

	try {
		const response = await fetch(apiUrl, { headers });

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
		}

		const files = (await response.json()) as GitHubFile[];

		// Filter markdown files
		const markdownFiles = files.filter(
			(file) => file.type === 'file' && file.name.endsWith('.md')
		);

		// Fetch and parse each markdown file
		const posts = await Promise.all(
			markdownFiles.map(async (file) => {
				const contentResponse = await fetch(file.download_url);
				const rawContent = await contentResponse.text();

				// Parse frontmatter
				const { data: frontmatter, content } = matter(rawContent);

				// Extract slug from filename (remove .md extension)
				const slug = file.name.replace(/\.md$/, '');

				return {
					slug,
					frontmatter: {
						title: frontmatter.title || 'Untitled',
						date: frontmatter.date || new Date().toISOString().split('T')[0],
						author: frontmatter.author || 'Unknown',
						authorEmail: frontmatter.authorEmail,
						category: frontmatter.category || 'General',
						tags: frontmatter.tags || [],
						description: frontmatter.description || '',
						excerpt: frontmatter.excerpt || '',
						image: frontmatter.image,
						imageAlt: frontmatter.imageAlt,
						featured: frontmatter.featured || false,
						draft: frontmatter.draft || false
					},
					content
				} as BlogPost;
			})
		);

		// Filter out drafts
		return posts.filter((post) => !post.frontmatter.draft);
	} catch (error) {
		console.error('Error fetching blog posts from GitHub:', error);
		throw error;
	}
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
	const posts = await fetchBlogPosts();
	return posts.find((post) => post.slug === slug) || null;
}
