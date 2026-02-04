<script lang="ts">
	import '../styles/app.css';
	import Background from "$lib/components/Background.svelte";
	import Navbar from '$lib/components/Navbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	let { children } = $props();

	let previousPath = $state($page.url.pathname);

	$effect(() => {
		const currentPath = $page.url.pathname;
		if (currentPath !== previousPath && currentPath !== '/') {
			setTimeout(() => {
				const viewportHeight = window.innerHeight;
				window.scrollTo({
					top: viewportHeight,
					behavior: 'smooth'
				});
			}, 100);
		}
		previousPath = currentPath;
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

<Background />
<Navbar />
<Header />
{#key $page.url.pathname}
	<div class="page-content" in:fade={{ duration: 300, delay: 150 }} out:fade={{ duration: 150 }}>
		{@render children()}
	</div>
{/key}
<Footer />

<style>
	.page-content {
		min-height: 50vh;
	}
</style>