<script lang="ts">
	import { t } from 'svelte-i18n';
	import LegalContent from '$lib/components/LegalContent.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('footer.privacy')} - UnxWares</title>
	<meta name="description" content={$t('footer.privacy')} />
	<meta property="og:title" content="{$t('footer.privacy')} - UnxWares" />
	<meta name="twitter:title" content="{$t('footer.privacy')} - UnxWares" />
	<meta property="og:url" content="https://www.unxwares.com/privacy" />
	<meta name="twitter:site" content="https://www.unxwares.com/privacy" />
</svelte:head>

<LegalContent content={data.content} />