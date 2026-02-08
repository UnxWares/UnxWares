<script>
	import { t } from 'svelte-i18n';
	import CloudHero from '$lib/components/cloud/CloudHero.svelte';
	import CloudFeatures from '$lib/components/cloud/CloudFeatures.svelte';
	import CloudInfrastructure from '$lib/components/cloud/CloudInfrastructure.svelte';
	import CloudCTA from '$lib/components/cloud/CloudCTA.svelte';
	import Separator from '$lib/components/Separator.svelte';
</script>

<svelte:head>
	<title>{$t('pages.cloud.title')}</title>

	<meta property="og:title" content="{$t('pages.cloud.title')}">
	<meta name="twitter:title" content="{$t('pages.cloud.title')}">

	<meta property="og:url" content="https://www.unxwares.com/uw-cloud">
	<meta name="twitter:site" content="https://www.unxwares.com/uw-cloud">
</svelte:head>

<main>
	<CloudHero />

	<Separator />

	<CloudFeatures />

	<Separator />

	<CloudInfrastructure />

	<CloudCTA />
</main>
