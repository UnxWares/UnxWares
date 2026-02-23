<script lang="ts">
	import { t } from 'svelte-i18n';
	import BlogHeader from '$lib/components/blog/BlogHeader.svelte';
	import BlogContent from '$lib/components/blog/BlogContent.svelte';
	import { ChevronRight, ArrowLeft } from 'lucide-svelte';

	let { data } = $props();

	let post = $derived(data.post);
	let canonicalUrl = $derived(`https://unxwares.com/blog/${post.slug}`);
	let imageUrl = $derived(
		post.frontmatter.image
			? `https://unxwares.com${post.frontmatter.image}`
			: 'https://unxwares.com/og-image.jpg'
	);
</script>

<svelte:head>
	<title>{post.frontmatter.title} - UnxWares Blog</title>
	<meta name="description" content={post.frontmatter.description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.frontmatter.title} />
	<meta property="og:description" content={post.frontmatter.description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="article:published_time" content={post.frontmatter.date} />
	<meta property="article:author" content={post.frontmatter.author} />
	<meta property="article:section" content={post.frontmatter.category} />
	{#each post.frontmatter.tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.frontmatter.title} />
	<meta name="twitter:description" content={post.frontmatter.description} />
	<meta name="twitter:image" content={imageUrl} />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: post.frontmatter.title,
			description: post.frontmatter.description,
			image: imageUrl,
			datePublished: post.frontmatter.date,
			author: {
				'@type': 'Person',
				name: post.frontmatter.author,
				email: post.frontmatter.authorEmail
			},
			publisher: {
				'@type': 'Organization',
				name: 'UnxWares',
				url: 'https://unxwares.com'
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': canonicalUrl
			}
		})}
	</script>
</svelte:head>

<article class="blog-article">
	<div class="blog-article-container">
		<nav class="breadcrumb">
			<a href="/">{$t('navbar.home')}</a>
			<ChevronRight size={16} />
			<a href="/blog">{$t('blog.title')}</a>
			<ChevronRight size={16} />
			<span>{post.frontmatter.title}</span>
		</nav>

		<BlogHeader {post} />

		<BlogContent content={post.content} />

		<footer class="blog-article-footer">
			<a href="/blog" class="back-to-blog">
				<ArrowLeft size={20} />
				{$t('blog.back_to_list')}
			</a>
		</footer>
	</div>
</article>

<style>
	.blog-article {
		background-color: var(--bg-primary);
	}

	.blog-article-container {
		max-width: 1096px;
		margin: 0 auto;
		padding: 8rem 1.5rem 3rem;
	}

	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
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

	.blog-article-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid var(--border-color, #dee2e6);
	}

	.back-to-blog {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color, #dee2e6);
		border-radius: 0.5rem;
		color: var(--text-primary, #212529);
		font-weight: 500;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.back-to-blog:hover {
		background-color: #050c9c;
		border-color: #050c9c;
		color: white;
	}

	@media (max-width: 768px) {
		.blog-article-container {
			padding: 6rem 1rem 2rem;
		}

		.breadcrumb {
			font-size: 0.75rem;
		}
	}
</style>
