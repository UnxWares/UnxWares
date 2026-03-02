<script>
	import ShortWhoAreWe from '$lib/components/main/ShortWhoAreWe.svelte';
	import WhyUnxWares from '$lib/components/main/WhyUnxWares.svelte';
	import OurServices from '$lib/components/main/OurServices.svelte';
	import TechStack from '$lib/components/main/TechStack.svelte';
	import TechLogos from '$lib/components/main/TechLogos.svelte';
	import TrustedPartners from '$lib/components/main/TrustedPartners.svelte';
	import PepiteNormandie from '$lib/components/main/PepiteNormandie.svelte';
	import HomeEcosystem from '$lib/components/main/HomeEcosystem.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
	import { Separator } from '@unxwares/ui-core';
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

	<Separator icon="/favicon.png" />

	<WhyUnxWares />

	<Separator icon="/favicon.png" />

	<OurServices />

	<Separator icon="/favicon.png" />

	<TechStack />

	<Separator icon="/favicon.png" />

	<TechLogos />

	<Separator icon="/favicon.png" />

	<TrustedPartners />

	<Separator icon="/favicon.png" />

	<PepiteNormandie />

	<Separator icon="/favicon.png" />

	<HomeEcosystem />

	<Separator icon="/favicon.png" />

	<ContactCTA />
</main>