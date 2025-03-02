<script lang="ts">
	import '../styles/app.css';
	import Background from "$lib/components/Background.svelte";
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>
<svelte:head>
	<meta name="description" content="Bienvenue chez UnxWares. Nous sommes une entreprise Normande innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta name="keywords" content="UnxWares, UnxWares Studio, UnxWares Cloud, développement informatique, création de sites web, développement d'applications, jeux vidéo, hébergement cloud, datacentres, datacenters, infrastructure IT, services cloud, solutions numériques, innovation technologique, SaaS, PaaS, IaaS, cybersécurité, hébergement web, développement logiciel, entreprise tech, transformation digitale">
	<meta name="author" content="Baptiste Gosselin, David Gheghea">
	<meta name="robots" content="index, follow">

	<meta property="og:description" content="Bienvenue chez UnxWares. Nous sommes une entreprise Normande innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta property="og:image" content="/images/unxwares_insigne.png">
	<meta property="og:type" content="website">

	<meta name="twitter:card" content="summary">
	<meta name="twitter:description" content="Bienvenue chez UnxWares. Nous sommes une entreprise Normande innovante spécialisée dans le développement web, d'applications et de jeux avec UnxWares Studio, ainsi que dans l'hébergement cloud, l'infogérance et l'infrastructure IT avec UnxWares Cloud. Nous offrons des solutions numériques pour permettre la transformation digitale des entreprises">
	<meta name="twitter:image" content="/images/unxwares_insigne.png">
</svelte:head>

<Background />
<Header />

{@render children()}
