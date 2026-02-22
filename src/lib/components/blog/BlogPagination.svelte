<script lang="ts">
	import { t } from 'svelte-i18n';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	let {
		currentPage,
		totalPages,
		baseUrl = '/blog'
	}: { currentPage: number; totalPages: number; baseUrl?: string } = $props();

	let pages = $derived(Array.from({ length: totalPages }, (_, i) => i + 1));
	let hasPrevious = $derived(currentPage > 1);
	let hasNext = $derived(currentPage < totalPages);

	function getPageUrl(page: number): string {
		return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
	}
</script>

{#if totalPages > 1}
	<nav class="pagination" aria-label="Blog pagination">
		<div class="pagination-controls">
			{#if hasPrevious}
				<a href={getPageUrl(currentPage - 1)} class="pagination-button" rel="prev">
					<ChevronLeft size={20} />
					{$t('blog.previous')}
				</a>
			{:else}
				<span class="pagination-button disabled">
					<ChevronLeft size={20} />
					{$t('blog.previous')}
				</span>
			{/if}

			<div class="pagination-pages">
				{#each pages as page}
					{#if page === currentPage}
						<span class="pagination-page active" aria-current="page">{page}</span>
					{:else if page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2}
						<a href={getPageUrl(page)} class="pagination-page">{page}</a>
					{:else if page === currentPage - 3 || page === currentPage + 3}
						<span class="pagination-ellipsis">...</span>
					{/if}
				{/each}
			</div>

			{#if hasNext}
				<a href={getPageUrl(currentPage + 1)} class="pagination-button" rel="next">
					{$t('blog.next')}
					<ChevronRight size={20} />
				</a>
			{:else}
				<span class="pagination-button disabled">
					{$t('blog.next')}
					<ChevronRight size={20} />
				</span>
			{/if}
		</div>
	</nav>
{/if}

<style>
	.pagination {
		margin-top: 3rem;
	}

	.pagination-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.pagination-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background-color: var(--bg-secondary, #f8f9fa);
		border: 1px solid var(--border-color, #dee2e6);
		border-radius: 0.375rem;
		font-weight: 500;
		color: var(--text-primary, #212529);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.pagination-button:not(.disabled):hover {
		background-color: #050c9c;
		border-color: #050c9c;
		color: white;
	}

	.pagination-button.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.pagination-pages {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.pagination-page {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.375rem;
		font-weight: 500;
		color: var(--text-primary, #212529);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.pagination-page:hover {
		background-color: var(--bg-secondary, #f8f9fa);
	}

	.pagination-page.active {
		background-color: #050c9c;
		color: white;
	}

	.pagination-ellipsis {
		padding: 0 0.25rem;
		color: var(--text-muted, #6c757d);
	}

	@media (max-width: 768px) {
		.pagination-controls {
			flex-direction: column;
		}

		.pagination-pages {
			order: -1;
		}
	}
</style>
