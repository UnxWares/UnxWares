<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { Sun, Moon } from 'lucide-svelte';

	function toggleTheme() {
		theme.toggle();
	}
</script>

<button
	class="theme-toggle"
	onclick={toggleTheme}
	aria-label={$theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
>
	{#if $theme === 'light'}
		<Moon size={20} />
	{:else}
		<Sun size={20} />
	{/if}
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: none;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		padding: 0;
	}

	.theme-toggle:hover {
		background: var(--hover-bg);
	}

	.theme-toggle :global(svg) {
		transition: transform 0.2s ease-in-out;
	}

	.theme-toggle:hover :global(svg) {
		transform: rotate(20deg) scale(1.1);
	}
</style>
