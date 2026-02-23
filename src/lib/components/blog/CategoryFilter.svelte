<script lang="ts">
	import { t } from 'svelte-i18n';

	let {
		categories = [],
		currentCategory = null
	}: { categories?: string[]; currentCategory?: string | null } = $props();
</script>

{#if categories.length > 0}
	<div class="category-filter">
		<a
			href="/blog"
			class="category-chip"
			class:active={currentCategory === null}
			aria-current={currentCategory === null ? 'page' : undefined}
		>
			{$t('blog.all_categories')}
		</a>
		{#each categories as category}
			<a
				href="/blog/category/{encodeURIComponent(category)}"
				class="category-chip"
				class:active={currentCategory === category}
				aria-current={currentCategory === category ? 'page' : undefined}
			>
				{category}
			</a>
		{/each}
	</div>
{/if}

<style>
	.category-filter {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.category-chip {
		padding: 0.5rem 1rem;
		background-color: var(--bg-secondary);
		border: 2px solid var(--border-color, #dee2e6);
		border-radius: 2rem;
		font-weight: 500;
		color: var(--text-primary, #212529);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.category-chip:hover {
		background-color: #d9e3ff;
		border-color: #050c9c;
		color: #050c9c;
	}

	.category-chip.active {
		background-color: #050c9c;
		border-color: #050c9c;
		color: white;
	}
</style>
