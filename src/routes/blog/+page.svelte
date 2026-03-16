<script lang="ts">
	import { t } from 'svelte-i18n';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import BlogPagination from '$lib/components/blog/BlogPagination.svelte';
	import CategoryFilter from '$lib/components/blog/CategoryFilter.svelte';
	import { FileText, Rss, ChevronDown } from 'lucide-svelte';

	let { data } = $props();

	let posts = $derived(data.posts);
	let total = $derived(data.total);
	let totalPages = $derived(data.totalPages);
	let currentPage = $derived(data.currentPage);
	let categories = $derived(data.categories);

	const SUPPORTED_LOCALES = ['fr', 'en', 'de', 'nl', 'es', 'it'] as const;
	const LOCALE_LABELS: Record<string, string> = {
		fr: 'Français',
		en: 'English',
		de: 'Deutsch',
		nl: 'Nederlands',
		es: 'Español',
		it: 'Italiano'
	};

	const LOCALE_FLAGS: Record<string, string> = {
		fr: '🇫🇷',
		en: '🇬🇧',
		de: '🇩🇪',
		nl: '🇳🇱',
		es: '🇪🇸',
		it: '🇮🇹'
	};

	let openDropdown = $state<'rss' | 'atom' | null>(null);

	function toggleDropdown(type: 'rss' | 'atom') {
		openDropdown = openDropdown === type ? null : type;
	}

	function closeDropdowns() {
		openDropdown = null;
	}

	$effect(() => {
		if (openDropdown === null) return;
		function handleClickOutside(e: MouseEvent) {
			const target = e.target as Element;
			if (!target.closest('.feed-dropdown')) closeDropdowns();
		}
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'Escape') closeDropdowns();
		}
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<svelte:head>
	<title>{$t('blog.title')} - UnxWares</title>
	<meta name="description" content={$t('blog.description')} />
	{#each SUPPORTED_LOCALES as loc}
		<link rel="alternate" type="application/rss+xml" title="UnxWares Blog RSS ({LOCALE_LABELS[loc]})" href="/blog/rss.xml?lang={loc}" />
		<link rel="alternate" type="application/atom+xml" title="UnxWares Blog Atom ({LOCALE_LABELS[loc]})" href="/blog/atom.xml?lang={loc}" />
	{/each}
</svelte:head>

<div class="blog-page">
	<div class="blog-header">
		<h1>{$t('blog.title')}</h1>
		<p class="blog-description">{$t('blog.description')}</p>

		<div class="feed-links">
			<!-- RSS dropdown -->
			<div class="feed-dropdown">
				<button
					class="feed-link"
					class:open={openDropdown === 'rss'}
					onclick={() => toggleDropdown('rss')}
					aria-expanded={openDropdown === 'rss'}
					aria-haspopup="menu"
				>
					<Rss size={18} />
					<span>RSS</span>
					<ChevronDown size={14} class="chevron" />
				</button>
				{#if openDropdown === 'rss'}
					<div class="feed-dropdown-menu" role="menu">
						{#each SUPPORTED_LOCALES as loc}
							<a
								href="/blog/rss.xml?lang={loc}"
								class="feed-dropdown-item"
								target="_blank"
								rel="noopener noreferrer"
								onclick={closeDropdowns}
								role="menuitem"
							>
								{LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]}
							</a>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Atom dropdown -->
			<div class="feed-dropdown">
				<button
					class="feed-link"
					class:open={openDropdown === 'atom'}
					onclick={() => toggleDropdown('atom')}
					aria-expanded={openDropdown === 'atom'}
					aria-haspopup="menu"
				>
					<Rss size={18} />
					<span>Atom</span>
					<ChevronDown size={14} class="chevron" />
				</button>
				{#if openDropdown === 'atom'}
					<div class="feed-dropdown-menu" role="menu">
						{#each SUPPORTED_LOCALES as loc}
							<a
								href="/blog/atom.xml?lang={loc}"
								class="feed-dropdown-item"
								target="_blank"
								rel="noopener noreferrer"
								onclick={closeDropdowns}
								role="menuitem"
							>
								{LOCALE_FLAGS[loc]} {LOCALE_LABELS[loc]}
							</a>
						{/each}
					</div>
				{/if}
			</div>
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
		flex-wrap: wrap;
	}

	.feed-dropdown {
		position: relative;
	}

	.feed-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		color: var(--text-primary);
		text-decoration: none;
		font-size: 0.875rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.feed-link:hover,
	.feed-link.open {
		background: var(--primary);
		color: white;
		border-color: var(--primary);
		box-shadow: 0 4px 8px rgba(5, 12, 156, 0.2);
	}

	.feed-link :global(svg) {
		flex-shrink: 0;
	}

	.feed-link :global(.chevron) {
		transition: transform 0.2s ease;
	}

	.feed-link.open :global(.chevron) {
		transform: rotate(180deg);
	}

	.feed-dropdown-menu {
		position: absolute;
		top: calc(100% + 6px);
		left: 50%;
		transform: translateX(-50%);
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		overflow: hidden;
		z-index: 100;
		min-width: 130px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	}

	.feed-dropdown-item {
		display: block;
		padding: 0.5rem 1rem;
		color: var(--text-primary);
		text-decoration: none;
		font-size: 0.875rem;
		transition: background 0.15s ease;
		white-space: nowrap;
	}

	.feed-dropdown-item:hover {
		background: var(--primary);
		color: white;
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
