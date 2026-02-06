<script>
	import ShortWhoAreWe from '$lib/components/main/ShortWhoAreWe.svelte';
	import WhyUnxWares from '$lib/components/main/WhyUnxWares.svelte';
	import OurServices from '$lib/components/main/OurServices.svelte';
	import TechStack from '$lib/components/main/TechStack.svelte';
	import TechLogos from '$lib/components/main/TechLogos.svelte';
	import PepiteNormandie from '$lib/components/main/PepiteNormandie.svelte';
	import HomeEcosystem from '$lib/components/main/HomeEcosystem.svelte';
	import Separator from '$lib/components/Separator.svelte';
</script>

<svelte:head>
	<title>UnxWares - Welcome</title>

	<meta property="og:title" content="UnxWares - Welcome">
	<meta name="twitter:title" content="UnxWares - Welcome">

	<meta property="og:url" content="https://www.unxwares.com">
	<meta name="twitter:site" content="https://www.unxwares.com">
</svelte:head>

<main>
	<ShortWhoAreWe />

	<Separator />

	<WhyUnxWares />

	<Separator />

	<OurServices />

	<Separator />

	<TechStack />

	<TechLogos />

	<Separator />

	<PepiteNormandie />

	<Separator />

	<HomeEcosystem />
</main>