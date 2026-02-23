<script lang="ts">
	let { content }: { content: string } = $props();
</script>

<div class="blog-content">
	{@html content}
</div>

<style>
	.blog-content {
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--text-primary, #212529);
	}

	/* Typography */
	.blog-content :global(h1),
	.blog-content :global(h2),
	.blog-content :global(h3),
	.blog-content :global(h4),
	.blog-content :global(h5),
	.blog-content :global(h6) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-weight: 600;
		line-height: 1.3;
		color: var(--text-primary, #212529);
	}

	.blog-content :global(h1) {
		font-size: 2rem;
	}

	.blog-content :global(h2) {
		font-size: 1.75rem;
	}

	.blog-content :global(h3) {
		font-size: 1.5rem;
	}

	.blog-content :global(h4) {
		font-size: 1.25rem;
	}

	.blog-content :global(p) {
		margin-bottom: 1.5rem;
	}

	/* Links */
	.blog-content :global(a) {
		color: #050c9c;
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	.blog-content :global(a:hover) {
		color: #040a7a;
	}

	/* Lists */
	.blog-content :global(ul),
	.blog-content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.blog-content :global(li) {
		margin-bottom: 0.5rem;
	}

	/* Code */
	.blog-content :global(code) {
		padding: 0.2rem 0.4rem;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color, #dee2e6);
		border-radius: 0.25rem;
		font-family: 'Courier New', monospace;
		font-size: 0.875em;
		color: var(--code-color, #d63384);
	}

	.blog-content :global(pre) {
		margin-bottom: 1.5rem;
		padding: 1rem;
		background-color: var(--bg-code, #282c34);
		border-radius: 0.5rem;
		overflow-x: auto;
	}

	.blog-content :global(pre code) {
		padding: 0;
		background-color: transparent;
		border: none;
		color: var(--code-light, #abb2bf);
		font-size: 0.9rem;
	}

	/* Blockquotes */
	.blog-content :global(blockquote) {
		margin: 1.5rem 0;
		padding: 1rem 1.5rem;
		border-left: 4px solid #050c9c;
		background-color: var(--bg-secondary);
		font-style: italic;
	}

	.blog-content :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	/* Images */
	.blog-content :global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 0.5rem;
		margin: 1.5rem 0;
	}

	/* Tables */
	.blog-content :global(table) {
		width: 100%;
		margin-bottom: 1.5rem;
		border-collapse: collapse;
	}

	.blog-content :global(th),
	.blog-content :global(td) {
		padding: 0.75rem;
		border: 1px solid var(--border-color, #dee2e6);
		text-align: left;
	}

	.blog-content :global(th) {
		background-color: var(--bg-secondary);
		font-weight: 600;
	}

	/* Horizontal rule */
	.blog-content :global(hr) {
		margin: 2rem 0;
		border: none;
		border-top: 2px solid var(--border-color, #dee2e6);
	}

	@media (max-width: 768px) {
		.blog-content {
			font-size: 1rem;
		}

		.blog-content :global(h1) {
			font-size: 1.75rem;
		}

		.blog-content :global(h2) {
			font-size: 1.5rem;
		}

		.blog-content :global(h3) {
			font-size: 1.25rem;
		}
	}
</style>
