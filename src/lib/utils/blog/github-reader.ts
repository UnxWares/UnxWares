import matter from 'gray-matter';
import { env } from '$env/dynamic/private';

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

interface GitHubFile {
	name: string;
	path: string;
	sha: string;
	download_url: string;
	type: 'file' | 'dir';
}

const GITHUB_REPO = 'UnxWares/BlogArticles';
const GITHUB_BRANCH = 'main';
const GITHUB_TOKEN = env.GITHUB_TOKEN;

/**
 * List all markdown files from GitHub repo
 */
export async function listBlogPosts(): Promise<BlogPost[]> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json'
	};

	if (GITHUB_TOKEN) {
		headers['Authorization'] = `token ${GITHUB_TOKEN}`;
	}

	const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents?ref=${GITHUB_BRANCH}`;

	try {
		const response = await fetch(apiUrl, { headers });

		if (!response.ok) {
			console.error(`GitHub API error: ${response.status} ${response.statusText}`);
			return [];
		}

		const files = (await response.json()) as GitHubFile[];

		// Filter markdown files
		const markdownFiles = files.filter(
			(file) => file.type === 'file' && file.name.endsWith('.md')
		);

		// Fetch and parse each markdown file
		const posts = await Promise.all(
			markdownFiles.map(async (file) => {
				try {
					const contentResponse = await fetch(file.download_url);
					const rawContent = await contentResponse.text();

					const { data: frontmatter, content } = matter(rawContent);

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
				} catch (error) {
					console.error(`Error fetching ${file.name}:`, error);
					return null;
				}
			})
		);

		// Filter out errors and drafts
		return posts.filter((post): post is BlogPost => post !== null && !post.frontmatter.draft);
	} catch (error) {
		console.error('Error listing blog posts:', error);
		return [];
	}
}

/**
 * Get a single blog post by slug
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {

	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json'
	};

	if (GITHUB_TOKEN) {
		headers['Authorization'] = `token ${GITHUB_TOKEN}`;
	}

	const fileUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${slug}.md`;

	try {
		const response = await fetch(fileUrl);

		if (!response.ok) {
			return null;
		}

		const rawContent = await response.text();
		const { data: frontmatter, content } = matter(rawContent);

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
		};
	} catch (error) {
		console.error(`Error fetching post ${slug}:`, error);
		return null;
	}
}
