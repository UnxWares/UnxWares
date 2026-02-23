<script lang="ts">
	import { t, locale } from 'svelte-i18n';
	import type { LoadedPost } from '$lib/utils/blog/content-loader';
	import ReadingTime from './ReadingTime.svelte';
	import BlogTags from './BlogTags.svelte';
	import { calculateReadingTime } from '$lib/utils/blog/reading-time';
	import { ArrowRight } from 'lucide-svelte';

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

<article class="blog-card">
	{#if post.frontmatter.image}
		<a href="/blog/{post.slug}" class="blog-card-image">
			<img
				src={post.frontmatter.image}
				alt={post.frontmatter.imageAlt || post.frontmatter.title}
				loading="lazy"
			/>
		</a>
	{/if}

	<div class="blog-card-content">
		<div class="blog-card-meta">
			<span class="category">{post.frontmatter.category}</span>
			<span class="divider">•</span>
			<time datetime={post.frontmatter.date}>{formattedDate}</time>
			<span class="divider">•</span>
			<ReadingTime minutes={readingTime.minutes} />
		</div>

		<h2 class="blog-card-title">
			<a href="/blog/{post.slug}">
				{post.frontmatter.title}
			</a>
		</h2>

		<p class="blog-card-excerpt">
			{post.frontmatter.excerpt || post.frontmatter.description}
		</p>

		{#if post.frontmatter.tags.length > 0}
			<BlogTags tags={post.frontmatter.tags} clickable={true} />
		{/if}

		<a href="/blog/{post.slug}" class="read-more">
			{$t('blog.read_more')}
			<ArrowRight size={16} />
		</a>
	</div>
</article>

<style>
	.blog-card {
		display: flex;
		flex-direction: column;
		background-color: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 0.5rem;
		overflow: hidden;
		transition: all 0.3s ease;
		height: 100%;
	}

	.blog-card:hover {
		box-shadow: var(--shadow-md);
		transform: translateY(-2px);
	}

	.blog-card-image {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background-color: var(--bg-secondary);
	}

	.blog-card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.blog-card:hover .blog-card-image img {
		transform: scale(1.05);
	}

	.blog-card-content {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		flex: 1;
	}

	.blog-card-meta {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--text-secondary);
		flex-wrap: wrap;
	}

	.category {
		padding: 0.25rem 0.75rem;
		background-color: var(--primary-light);
		color: var(--primary-text);
		border-radius: 1rem;
		font-weight: 500;
	}

	.divider {
		color: var(--border-color);
	}

	.blog-card-title {
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.blog-card-title a {
		color: var(--text-primary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.blog-card-title a:hover {
		color: var(--primary-text);
	}

	.blog-card-excerpt {
		margin: 0;
		color: var(--text-secondary);
		line-height: 1.6;
		flex: 1;
	}

	.read-more {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--primary-text);
		font-weight: 500;
		text-decoration: none;
		margin-top: auto;
		transition: gap 0.2s ease;
	}

	.read-more:hover {
		gap: 0.75rem;
	}

	@media (max-width: 768px) {
		.blog-card-content {
			padding: 1rem;
		}

		.blog-card-title {
			font-size: 1.25rem;
		}
	}
</style>
