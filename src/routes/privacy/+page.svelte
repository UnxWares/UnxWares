<script lang="ts">
	import { t } from 'svelte-i18n';
	import LegalContent from '$lib/components/LegalContent.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('footer.privacy')} - UnxWares</title>
	<meta name="description" content={$t('footer.privacy')} />
	<meta property="og:title" content={data.ogTitle} />
	<meta name="twitter:title" content={data.ogTitle} />
	<meta property="og:url" content="https://www.unxwares.com/privacy" />
	<meta name="twitter:site" content="https://www.unxwares.com/privacy" />
</svelte:head>

<LegalContent content={data.content} />