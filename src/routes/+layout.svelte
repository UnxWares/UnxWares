<script lang="ts">
	import '../styles/app.css';
	import '$lib/i18n';
	import { isLoading, locale } from 'svelte-i18n';
	import { theme } from '$lib/stores/theme';
	import Background from "$lib/components/Background.svelte";
	import Navbar from '$lib/components/Navbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	let { children } = $props();

	let previousPath = $state($page.url.pathname);
	let headerKey = $state(0);

	// Détermine si la vidéo doit être chargée sur la page actuelle
	// Vidéo affichée uniquement sur la page d'accueil et la page 404
	let showBackground = $derived($page.url.pathname === '/' || $page.error !== null);

	$effect(() => {
		const currentPath = $page.url.pathname;
		if (currentPath !== previousPath) {
			window.scrollTo({ top: 0, behavior: 'instant' });
			// Incrémenter la clé pour forcer le re-rendu du Header quand on revient sur /
			if (currentPath === '/') {
				headerKey++;
			}
			previousPath = currentPath;
		}
	});

	// Update HTML lang attribute when locale changes
	$effect(() => {
		if ($locale && typeof document !== 'undefined') {
			document.documentElement.lang = $locale;
		}
	});

	// Initialize theme on mount
	$effect(() => {
		if (browser) {
			const stored = localStorage.getItem('theme');
			if (stored === 'light' || stored === 'dark') {
				document.documentElement.setAttribute('data-theme', stored);
			} else {
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				const initialTheme = prefersDark ? 'dark' : 'light';
				document.documentElement.setAttribute('data-theme', initialTheme);
			}
		}
	});

	// Update theme attribute when theme changes
	$effect(() => {
		if (browser) {
			document.documentElement.setAttribute('data-theme', $theme);
		}
	});

	// Add/remove class to body when showing background video
	$effect(() => {
		if (browser) {
			if (showBackground) {
				document.body.classList.add('has-video-background');
				document.documentElement.classList.add('has-video-background');
			} else {
				document.body.classList.remove('has-video-background');
				document.documentElement.classList.remove('has-video-background');
			}
		}
	});
</script>
<svelte:head>
	<meta name="description" content="Bienvenue chez UnxWares. Nous sommes une entreprise innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta name="keywords" content="UnxWares, UnxWares Studio, UnxWares Cloud, développement informatique, création de sites web, développement d'applications, jeux vidéo, hébergement cloud, datacentres, datacenters, infrastructure IT, services cloud, solutions numériques, innovation technologique, SaaS, PaaS, IaaS, cybersécurité, hébergement web, développement logiciel, entreprise tech, transformation digitale">
	<meta name="author" content="Baptiste Gosselin, David Gheghea">
	<meta name="robots" content="index, follow">

	<meta property="og:description" content="Bienvenue chez UnxWares. Nous sommes une entreprise innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta property="og:image" content="/images/unxwares_insigne.png">
	<meta property="og:type" content="website">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:description" content="Bienvenue chez UnxWares. Nous sommes une entreprise innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta name="twitter:image" content="/images/unxwares_insigne.png">
</svelte:head>

{#if $isLoading}
	<div class="loading-screen">
		<div class="loading-spinner"></div>
	</div>
{:else}
	<Background show={showBackground} />
	<Navbar />
	{#if $page.url.pathname === '/'}
		{#key headerKey}
			<Header />
		{/key}
	{/if}
	{#key $page.url.pathname}
		<div class="page-content" in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
			{@render children()}
		</div>
	{/key}
	<Footer />
{/if}

<style>
	.page-content {
		min-height: 50vh;
	}

	.loading-screen {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		background-color: var(--bg-primary);
	}

	.loading-spinner {
		width: 50px;
		height: 50px;
		border: 4px solid var(--spinner-bg);
		border-top: 4px solid var(--spinner-color);
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
</style>