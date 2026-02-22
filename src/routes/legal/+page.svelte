<script lang="ts">
	import { t } from 'svelte-i18n';
	import LegalContent from '$lib/components/LegalContent.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('footer.legal')} - UnxWares</title>
	<meta name="description" content={$t('footer.legal')} />
	<meta property="og:title" content="{$t('footer.legal')} - UnxWares" />
	<meta name="twitter:title" content="{$t('footer.legal')} - UnxWares" />
	<meta property="og:url" content="https://www.unxwares.com/legal" />
	<meta name="twitter:site" content="https://www.unxwares.com/legal" />
</svelte:head>

<LegalContent content={data.content} />