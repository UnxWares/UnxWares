<script lang="ts">
	let { content }: { content: string } = $props();

	$effect(() => {
		// Appliquer le padding global pour compenser la navbar
		document.documentElement.style.scrollPaddingTop = '120px';
		
		// Gérer le scroll au chargement initial (après que le loading screen disparaisse)
		if (window.location.hash) {
			const id = window.location.hash.substring(1);
			const element = document.getElementById(id);
			if (element) {
				// Petit délai pour laisser le temps au navigateur de faire son rendu
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
				}, 100);
			}
		}

		return () => {
			document.documentElement.style.scrollPaddingTop = '';
		};
	});
</script>

<div class="legal-container">
	<div class="legal-content">
		{@html content}
	</div>
</div>

<style>
	.legal-container {
		max-width: 1096px;
		margin: 0 auto;
		padding: 8rem 1.5rem 3rem;
	}

	.legal-content {
		font-size: 1rem;
		line-height: 1.8;
		color: var(--text-primary);
	}

	/* Typography */
	.legal-content :global(h1) {
		font-size: 2.5rem;
		font-weight: 700;
		margin: 2rem 0 1.5rem 0;
		color: var(--primary-text);
		line-height: 1.2;
	}

	.legal-content :global(h2) {
		font-size: 2rem;
		font-weight: 600;
		margin: 2.5rem 0 1rem 0;
		color: var(--primary-text);
		line-height: 1.3;
	}

	.legal-content :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 2rem 0 1rem 0;
		color: var(--text-primary);
		line-height: 1.4;
	}

	.legal-content :global(h4) {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1.5rem 0 0.75rem 0;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.legal-content :global(p) {
		margin-bottom: 1.25rem;
		color: var(--text-secondary);
	}

	/* Links */
	.legal-content :global(a) {
		color: var(--primary-text);
		text-decoration: underline;
		transition: color 0.2s ease;
	}

	.legal-content :global(a:hover) {
		color: var(--primary-hover);
	}

	/* Lists */
	.legal-content :global(ul),
	.legal-content :global(ol) {
		margin-bottom: 1.5rem;
		padding-left: 2rem;
	}

	.legal-content :global(li) {
		margin-bottom: 0.75rem;
		color: var(--text-secondary);
	}

	.legal-content :global(li::marker) {
		color: var(--primary-text);
	}

	/* Nested lists */
	.legal-content :global(ul ul),
	.legal-content :global(ol ol),
	.legal-content :global(ul ol),
	.legal-content :global(ol ul) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	/* Strong/Bold */
	.legal-content :global(strong) {
		font-weight: 600;
		color: var(--text-primary);
	}

	/* Emphasis */
	.legal-content :global(em) {
		font-style: italic;
	}

	/* Horizontal rule */
	.legal-content :global(hr) {
		margin: 2.5rem 0;
		border: none;
		border-top: 2px solid var(--border-color);
	}

	/* Tables */
	.legal-content :global(table) {
		width: 100%;
		margin: 1.5rem 0;
		border-collapse: collapse;
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		overflow: hidden;
	}

	.legal-content :global(th),
	.legal-content :global(td) {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-color);
		text-align: left;
	}

	.legal-content :global(th) {
		background-color: var(--bg-secondary);
		font-weight: 600;
		color: var(--primary-text);
	}

	.legal-content :global(td) {
		color: var(--text-secondary);
	}

	/* Code */
	.legal-content :global(code) {
		padding: 0.2rem 0.4rem;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 0.25rem;
		font-family: 'Courier New', monospace;
		font-size: 0.875em;
		color: var(--primary-text);
	}

	.legal-content :global(pre) {
		margin: 1.5rem 0;
		padding: 1rem;
		background-color: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		overflow-x: auto;
	}

	.legal-content :global(pre code) {
		padding: 0;
		background-color: transparent;
		border: none;
		font-size: 0.9rem;
	}

	/* Blockquotes */
	.legal-content :global(blockquote) {
		margin: 1.5rem 0;
		padding: 1rem 1.5rem;
		border-left: 4px solid var(--primary);
		background-color: var(--bg-secondary);
		font-style: italic;
	}

	.legal-content :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.legal-container {
			padding: 6rem 1rem 2rem;
		}

		.legal-content {
			font-size: 0.95rem;
		}

		.legal-content :global(h1) {
			font-size: 2rem;
		}

		.legal-content :global(h2) {
			font-size: 1.5rem;
		}

		.legal-content :global(h3) {
			font-size: 1.25rem;
		}

		.legal-content :global(h4) {
			font-size: 1.1rem;
		}

		.legal-content :global(ul),
		.legal-content :global(ol) {
			padding-left: 1.5rem;
		}

		.legal-content :global(table) {
			font-size: 0.875rem;
		}

		.legal-content :global(th),
		.legal-content :global(td) {
			padding: 0.5rem 0.75rem;
		}
	}
</style>
