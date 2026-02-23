<script lang="ts">
	import { t } from 'svelte-i18n';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import BlogPagination from '$lib/components/blog/BlogPagination.svelte';
	import CategoryFilter from '$lib/components/blog/CategoryFilter.svelte';
	import { FileText, Rss } from 'lucide-svelte';

	let { data } = $props();

	let posts = $derived(data.posts);
	let total = $derived(data.total);
	let totalPages = $derived(data.totalPages);
	let currentPage = $derived(data.currentPage);
	let categories = $derived(data.categories);
</script>

<svelte:head>
	<title>{$t('blog.title')} - UnxWares</title>
	<meta name="description" content={$t('blog.description')} />
	<link rel="alternate" type="application/rss+xml" title="UnxWares Blog RSS" href="/blog/rss.xml" />
	<link
		rel="alternate"
		type="application/atom+xml"
		title="UnxWares Blog Atom"
		href="/blog/atom.xml"
	/>
</svelte:head>

<div class="blog-page">
	<div class="blog-header">
		<h1>{$t('blog.title')}</h1>
		<p class="blog-description">{$t('blog.description')}</p>

		<div class="feed-links">
			<a href="/blog/rss.xml" class="feed-link" target="_blank" rel="noopener noreferrer">
				<Rss size={18} />
				<span>RSS</span>
			</a>
			<a href="/blog/atom.xml" class="feed-link" target="_blank" rel="noopener noreferrer">
				<Rss size={18} />
				<span>Atom</span>
			</a>
		</div>
	</div>

	<CategoryFilter {categories} currentCategory={null} />

	{#if posts.length > 0}
		<div class="blog-grid">
			{#each posts as post}
				<BlogCard {post} />
			{/each}
		</div>

		<BlogPagination {currentPage} {totalPages} baseUrl="/blog" />
	{:else}
		<div class="no-posts">
			<FileText size={64} />
			<p>{$t('blog.no_posts')}</p>
		</div>
	{/if}
</div>

<style>
	.blog-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8rem 1.5rem 3rem;
	}

	.blog-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.blog-header h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--text-primary);
	}

	.blog-description {
		font-size: 1.25rem;
		color: var(--text-secondary);
		max-width: 600px;
		margin: 0 auto 1.5rem;
	}

	.feed-links {
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		margin-top: 1.5rem;
	}

	.feed-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--primary-text);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 600;
		transition: all 0.2s ease;
	}

	.feed-link:hover {
		background: var(--primary);
		color: white;
		border-color: var(--primary);
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(5, 12, 156, 0.2);
	}

	.feed-link :global(svg) {
		flex-shrink: 0;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.no-posts {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--text-secondary);
	}

	.no-posts :global(svg) {
		margin-bottom: 1rem;
		opacity: 0.5;
	}

	.no-posts p {
		font-size: 1.25rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.blog-page {
			padding: 6rem 1rem 2rem;
		}

		.blog-header h1 {
			font-size: 2rem;
		}

		.blog-description {
			font-size: 1rem;
		}

		.feed-links {
			flex-wrap: wrap;
		}

		.blog-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
