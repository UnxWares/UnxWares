<script>
	import ShortWhoAreWe from '$lib/components/main/ShortWhoAreWe.svelte';
	import WhyUnxWares from '$lib/components/main/WhyUnxWares.svelte';
	import OurServices from '$lib/components/main/OurServices.svelte';
	import TechStack from '$lib/components/main/TechStack.svelte';
	import TechLogos from '$lib/components/main/TechLogos.svelte';
	import TrustedPartners from '$lib/components/main/TrustedPartners.svelte';
	import PepiteNormandie from '$lib/components/main/PepiteNormandie.svelte';
	import HomeEcosystem from '$lib/components/main/HomeEcosystem.svelte';
	import Separator from '$lib/components/Separator.svelte';
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$t('pages.home.title')}</title>

	<meta property="og:title" content="{$t('pages.home.title')}">
	<meta name="twitter:title" content="{$t('pages.home.title')}">

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

	<Separator />

	<TechLogos />

	<Separator />

	<TrustedPartners />

	<Separator />

	<PepiteNormandie />

	<Separator />

	<HomeEcosystem />
</main>