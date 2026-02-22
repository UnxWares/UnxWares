<script lang="ts">
	import { t } from 'svelte-i18n';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import CategoryFilter from '$lib/components/blog/CategoryFilter.svelte';
	import { ChevronRight, Folder, FileText } from 'lucide-svelte';

	let { data } = $props();

	let posts = $derived(data.posts);
	let category = $derived(data.category);
	let allCategories = $derived(data.allCategories);
</script>

<svelte:head>
	<title>{category} - {$t('blog.title')} - UnxWares</title>
	<meta name="description" content={$t('blog.category_description', { values: { category } })} />
</svelte:head>

<div class="category-page">
	<div class="category-header">
		<nav class="breadcrumb">
			<a href="/">{$t('navbar.home')}</a>
			<ChevronRight size={16} />
			<a href="/blog">{$t('blog.title')}</a>
			<ChevronRight size={16} />
			<span>{category}</span>
		</nav>

		<h1>
			<Folder size={32} />
			{category}
		</h1>
		<p class="category-description">
			{$t('blog.posts_in_category', { values: { count: posts.length, category } })}
		</p>
	</div>

	<CategoryFilter categories={allCategories} currentCategory={category} />

	{#if posts.length > 0}
		<div class="blog-grid">
			{#each posts as post}
				<BlogCard {post} />
			{/each}
		</div>
	{:else}
		<div class="no-posts">
			<FileText size={64} />
			<p>{$t('blog.no_posts')}</p>
		</div>
	{/if}
</div>

<style>
	.category-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8rem 1.5rem 3rem;
	}

	.category-header {
		margin-bottom: 3rem;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
		color: var(--text-muted, #6c757d);
		flex-wrap: wrap;
	}

	.breadcrumb a {
		color: #050c9c;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb a:hover {
		color: #040a7a;
	}

	.breadcrumb span {
		color: var(--text-primary, #212529);
		font-weight: 500;
	}

	.category-header h1 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: var(--text-primary, #212529);
	}

	.category-header h1 :global(svg) {
		color: #050c9c;
	}

	.category-description {
		font-size: 1.125rem;
		color: var(--text-secondary, #495057);
		margin: 0;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
	}

	.no-posts {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--text-muted, #6c757d);
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
		.category-page {
			padding: 6rem 1rem 2rem;
		}

		.category-header h1 {
			font-size: 1.75rem;
		}

		.category-description {
			font-size: 1rem;
		}

		.blog-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
