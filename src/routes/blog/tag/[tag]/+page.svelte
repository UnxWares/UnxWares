<script lang="ts">
	import { t } from 'svelte-i18n';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import { ChevronRight, Tag, FileText } from 'lucide-svelte';

	let { data } = $props();

	let posts = $derived(data.posts);
	let tag = $derived(data.tag);
	let allTags = $derived(data.allTags);
</script>

<svelte:head>
	<title>{tag} - {$t('blog.title')} - UnxWares</title>
	<meta name="description" content={$t('blog.tag_description', { values: { tag } })} />
</svelte:head>

<div class="tag-page">
	<div class="tag-header">
		<nav class="breadcrumb">
			<a href="/">{$t('navbar.home')}</a>
			<ChevronRight size={16} />
			<a href="/blog">{$t('blog.title')}</a>
			<ChevronRight size={16} />
			<span>{tag}</span>
		</nav>

		<h1>
			<Tag size={32} />
			{tag}
		</h1>
		<p class="tag-description">
			{$t('blog.posts_with_tag', { values: { count: posts.length, tag } })}
		</p>
	</div>

	{#if allTags.length > 0}
		<div class="tags-cloud">
			<h3 class="tags-title">{$t('blog.all_tags')}</h3>
			<div class="tags-list">
				{#each allTags as t}
					<a
						href="/blog/tag/{encodeURIComponent(t)}"
						class="tag-badge"
						class:active={t === tag}
					>
						<Tag size={14} />
						{t}
					</a>
				{/each}
			</div>
		</div>
	{/if}

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
	.tag-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 8rem 1.5rem 3rem;
	}

	.tag-header {
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

	.tag-header h1 {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		color: var(--text-primary, #212529);
	}

	.tag-header h1 :global(svg) {
		color: #050c9c;
	}

	.tag-description {
		font-size: 1.125rem;
		color: var(--text-secondary, #495057);
		margin: 0;
	}

	.tags-cloud {
		background: var(--bg-secondary);
		border-radius: 12px;
		padding: 1.5rem;
		margin-bottom: 3rem;
	}

	.tags-title {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		color: var(--text-primary, #212529);
	}

	.tags-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.375rem 0.75rem;
		background: var(--bg-primary);
		border: 1px solid #dee2e6;
		border-radius: 6px;
		color: #050c9c;
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.tag-badge:hover {
		background: #050c9c;
		color: white;
		border-color: #050c9c;
		transform: translateY(-2px);
		box-shadow: 0 2px 6px rgba(5, 12, 156, 0.2);
	}

	.tag-badge.active {
		background: #050c9c;
		color: white;
		border-color: #050c9c;
	}

	.tag-badge :global(svg) {
		flex-shrink: 0;
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
		.tag-page {
			padding: 6rem 1rem 2rem;
		}

		.tag-header h1 {
			font-size: 1.75rem;
		}

		.tag-description {
			font-size: 1rem;
		}

		.blog-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
