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

const LOCALE_FOLDERS: Record<string, string> = {
	fr: 'FR',
	en: 'EN',
	de: 'DE',
	es: 'ES',
	it: 'IT',
	nl: 'NL'
};

function getFolder(locale: string): string {
	return LOCALE_FOLDERS[locale] ?? 'FR';
}

function buildHeaders(): Record<string, string> {
	const headers: Record<string, string> = {
		Accept: 'application/vnd.github.v3+json'
	};
	if (GITHUB_TOKEN) {
		headers['Authorization'] = `token ${GITHUB_TOKEN}`;
	}
	return headers;
}

function parseFrontmatter(frontmatter: Record<string, unknown>, slug: string): BlogPost['frontmatter'] {
	return {
		title: (frontmatter.title as string) || 'Untitled',
		date: (frontmatter.date as string) || new Date().toISOString().split('T')[0],
		author: (frontmatter.author as string) || 'Unknown',
		authorEmail: frontmatter.authorEmail as string | undefined,
		category: (frontmatter.category as string) || 'General',
		tags: (frontmatter.tags as string[]) || [],
		description: (frontmatter.description as string) || '',
		excerpt: (frontmatter.excerpt as string) || '',
		image: frontmatter.image as string | undefined,
		imageAlt: frontmatter.imageAlt as string | undefined,
		featured: (frontmatter.featured as boolean) || false,
		draft: (frontmatter.draft as boolean) || false
	};
}

async function fetchPostsFromFolder(folder: string): Promise<BlogPost[]> {
	const headers = buildHeaders();
	const apiUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${folder}?ref=${GITHUB_BRANCH}`;

	const response = await fetch(apiUrl, { headers });
	if (!response.ok) return [];

	const files = (await response.json()) as GitHubFile[];
	const markdownFiles = files.filter(
		(file) => file.type === 'file' && file.name.endsWith('.md')
	);

	if (markdownFiles.length === 0) return [];

	const posts = await Promise.all(
		markdownFiles.map(async (file) => {
			try {
				const contentResponse = await fetch(file.download_url);
				const rawContent = await contentResponse.text();
				const { data: frontmatter, content } = matter(rawContent);
				const slug = file.name.replace(/\.md$/, '');

				return {
					slug,
					frontmatter: parseFrontmatter(frontmatter, slug),
					content
				} as BlogPost;
			} catch (error) {
				console.error(`Error fetching ${file.name}:`, error);
				return null;
			}
		})
	);

	return posts.filter((post): post is BlogPost => post !== null && !post.frontmatter.draft);
}

/**
 * List all markdown files from GitHub repo for a given locale.
 * Falls back to FR, then EN if the locale folder is empty.
 */
export async function listBlogPosts(locale: string = 'fr'): Promise<BlogPost[]> {
	const folder = getFolder(locale);

	try {
		const posts = await fetchPostsFromFolder(folder);
		if (posts.length > 0) return posts;

		// Fallback to FR
		if (folder !== 'FR') {
			const frPosts = await fetchPostsFromFolder('FR');
			if (frPosts.length > 0) return frPosts;
		}

		// Fallback to EN
		if (folder !== 'EN') {
			return await fetchPostsFromFolder('EN');
		}

		return [];
	} catch (error) {
		console.error('Error listing blog posts:', error);
		return [];
	}
}

/**
 * Get a single blog post by slug for a given locale.
 * Falls back to FR, then EN if the article is not found.
 */
export async function getBlogPost(slug: string, locale: string = 'fr'): Promise<BlogPost | null> {
	const folder = getFolder(locale);
	const foldersToTry = [folder];

	if (folder !== 'FR') foldersToTry.push('FR');
	if (folder !== 'EN' && !foldersToTry.includes('EN')) foldersToTry.push('EN');

	for (const f of foldersToTry) {
		try {
			const fileUrl = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${f}/${slug}.md`;
			const response = await fetch(fileUrl);

			if (!response.ok) continue;

			const rawContent = await response.text();
			const { data: frontmatter, content } = matter(rawContent);

			return {
				slug,
				frontmatter: parseFrontmatter(frontmatter, slug),
				content
			};
		} catch (error) {
			console.error(`Error fetching post ${slug} from ${f}:`, error);
		}
	}

	return null;
}
