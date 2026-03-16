<script>
	import { t } from 'svelte-i18n';
	import CloudHero from '$lib/components/cloud/CloudHero.svelte';
	import CloudFeatures from '$lib/components/cloud/CloudFeatures.svelte';
	import CloudInfrastructure from '$lib/components/cloud/CloudInfrastructure.svelte';
	import CloudCTA from '$lib/components/cloud/CloudCTA.svelte';
	import { Separator } from '@unxwares/ui-core';
	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('pages.cloud.title')}</title>

	<meta property="og:title" content={data.ogTitle}>
	<meta name="twitter:title" content={data.ogTitle}>

	<meta property="og:url" content="https://www.unxwares.com/uw-cloud">
	<meta name="twitter:site" content="https://www.unxwares.com/uw-cloud">
</svelte:head>

<main>
	<CloudHero />

	<Separator icon="/favicon.png" />

	<CloudFeatures />

	<Separator icon="/favicon.png" />

	<CloudInfrastructure />

	<CloudCTA />
</main>
