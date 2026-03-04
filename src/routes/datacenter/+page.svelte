<script lang="ts">
	import { t } from 'svelte-i18n';
	import InfrastructureResume from '$lib/components/uw-cloud/datacenter/InfrastructureResume.svelte'
	import Internal from '$lib/components/uw-cloud/datacenter/Internal.svelte';
	import Services from '$lib/components/uw-cloud/datacenter/Services.svelte';
	import WebDB from '$lib/components/uw-cloud/datacenter/WebDB.svelte';
	import Games from '$lib/components/uw-cloud/datacenter/Games.svelte';
	import Network from '$lib/components/uw-cloud/datacenter/Network.svelte';
	import Security from '$lib/components/uw-cloud/datacenter/Security.svelte';
	import Ecology from '$lib/components/uw-cloud/datacenter/Ecology.svelte';
</script>

<svelte:head>
	<title>{$t('pages.datacenter.title')}</title>

	<meta property="og:title" content={$t('pages.datacenter.title')}>
	<meta name="twitter:title" content={$t('pages.datacenter.title')}>

	<meta property="og:url" content="https://www.unxwares.com/datacenter">
	<meta name="twitter:site" content="https://www.unxwares.com/datacenter">
</svelte:head>

<main>
	<article>
		<InfrastructureResume/>
		<hr>
		<Internal/>
		<hr>
		<Services/>
		<hr>
		<WebDB/>
		<hr>
		<Games/>
		<hr>
		<Network/>
		<hr>
		<Security/>
		<hr>
		<Ecology/>
	</article>
</main>

<style>
	hr {
		margin: 60px auto;
		border: none;
		border-top: 1px solid var(--border-color);
		opacity: 0.5;
	}

	article :global(section) {
		margin: 40px 0;
	}

	article :global(h1) {
		margin: 30px 0 20px;
	}

	article :global(h2) {
		margin: 35px 0 20px;
	}

	article :global(h3) {
		margin: 30px 0 15px;
	}

	article :global(p) {
		margin: 15px 0;
		line-height: 1.8;
	}

	article :global(ul),
	article :global(ol) {
		margin: 20px 0;
		padding-left: 30px;
	}

	article :global(li) {
		margin: 12px 0;
		line-height: 1.7;
	}

	article :global(li p) {
		margin: 0;
		display: inline;
	}

	article :global(table) {
		margin: 25px 0;
	}

	article :global(figure) {
		margin: 30px 0;
	}

	article :global(img) {
		margin: 15px 0;
	}
</style>