<script lang="ts">
	import { locale } from 'svelte-i18n';
	import type { LoadedPost } from '$lib/utils/blog/content-loader';
	import ReadingTime from './ReadingTime.svelte';
	import BlogTags from './BlogTags.svelte';
	import { calculateReadingTime } from '$lib/utils/blog/reading-time';
	import { UserCircle } from 'lucide-svelte';

	let { post }: { post: LoadedPost } = $props();

	let readingTime = $derived(calculateReadingTime(post.content));
	let formattedDate = $derived(
		new Date(post.frontmatter.date).toLocaleDateString($locale || 'fr', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<header class="blog-header">
	<div class="blog-header-meta">
		<span class="category">{post.frontmatter.category}</span>
		<time datetime={post.frontmatter.date}>{formattedDate}</time>
	</div>

	<h1 class="blog-header-title">{post.frontmatter.title}</h1>

	<p class="blog-header-description">{post.frontmatter.description}</p>

	<div class="blog-header-details">
		<div class="author">
			<UserCircle size={20} />
			<span>{post.frontmatter.author}</span>
		</div>
		<span class="divider">•</span>
		<ReadingTime minutes={readingTime.minutes} />
	</div>

	{#if post.frontmatter.tags.length > 0}
		<BlogTags tags={post.frontmatter.tags} clickable={true} />
	{/if}

	{#if post.frontmatter.image}
		<div class="blog-header-image">
			<img
				src={post.frontmatter.image}
				alt={post.frontmatter.imageAlt || post.frontmatter.title}
			/>
		</div>
	{/if}
</header>

<style>
	.blog-header {
		margin-bottom: 3rem;
	}

	.blog-header-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		font-size: 0.875rem;
		color: var(--text-muted, #6c757d);
	}

	.category {
		padding: 0.25rem 0.75rem;
		background-color: #d9e3ff;
		color: #050c9c;
		border-radius: 1rem;
		font-weight: 500;
	}

	.blog-header-title {
		margin: 0 0 1rem 0;
		font-size: 2.5rem;
		font-weight: 700;
		line-height: 1.2;
		color: var(--text-primary, #212529);
	}

	.blog-header-description {
		margin: 0 0 1.5rem 0;
		font-size: 1.25rem;
		color: var(--text-secondary, #495057);
		line-height: 1.6;
	}

	.blog-header-details {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
		font-size: 0.875rem;
		color: var(--text-muted, #6c757d);
		flex-wrap: wrap;
	}

	.author {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
	}

	.divider {
		color: var(--border-color, #dee2e6);
	}

	.blog-header-image {
		margin-top: 2rem;
		border-radius: 0.5rem;
		overflow: hidden;
		aspect-ratio: 16 / 9;
		background-color: var(--bg-secondary, #f8f9fa);
	}

	.blog-header-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (max-width: 768px) {
		.blog-header-title {
			font-size: 1.75rem;
		}

		.blog-header-description {
			font-size: 1rem;
		}
	}
</style>
