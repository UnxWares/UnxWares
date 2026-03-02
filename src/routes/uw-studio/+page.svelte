<script>
	import { t } from 'svelte-i18n';
	import StudioHero from '$lib/components/studio/StudioHero.svelte';
	import WhatWeCreate from '$lib/components/studio/WhatWeCreate.svelte';
	import NeoLanguages from '$lib/components/studio/NeoLanguages.svelte';
	import StudioProjects from '$lib/components/studio/StudioProjects.svelte';
	import StudioCTA from '$lib/components/studio/StudioCTA.svelte';
	import { Separator } from '@unxwares/ui-core';
</script>

<svelte:head>
	<title>{$t('pages.studio.title')}</title>

	<meta property="og:title" content="{$t('pages.studio.title')}">
	<meta name="twitter:title" content="{$t('pages.studio.title')}">

	<meta property="og:url" content="https://www.unxwares.com/uw-studio">
	<meta name="twitter:site" content="https://www.unxwares.com/uw-studio">
</svelte:head>

<main>
	<StudioHero />

	<Separator icon="/favicon.png" />

	<WhatWeCreate />

	<Separator icon="/favicon.png" />

	<NeoLanguages />

	<Separator icon="/favicon.png" />

	<StudioProjects />

	<StudioCTA />
</main>
