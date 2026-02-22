<script lang="ts">
	import { Tag } from 'lucide-svelte';
	let { tags = [], clickable = true }: { tags?: string[]; clickable?: boolean } = $props();
</script>

{#if tags.length > 0}
	<div class="blog-tags">
		{#each tags as tag}
			{#if clickable}
				<a href="/blog/tag/{encodeURIComponent(tag)}" class="tag">
					<Tag size={12} />
					{tag}
				</a>
			{:else}
				<span class="tag">
					<Tag size={12} />
					{tag}
				</span>
			{/if}
		{/each}
	</div>
{/if}

<style>
	.blog-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.25rem 0.75rem;
		background-color: var(--bg-secondary, #f8f9fa);
		border: 1px solid var(--border-color, #dee2e6);
		border-radius: 1rem;
		font-size: 0.875rem;
		color: var(--text-primary, #212529);
		text-decoration: none;
		transition: all 0.2s ease;
	}

	a.tag:hover {
		background-color: #050c9c;
		color: white;
		border-color: #050c9c;
	}
</style>
