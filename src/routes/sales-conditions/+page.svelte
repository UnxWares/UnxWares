<script lang="ts">
	import { t } from 'svelte-i18n';
	import LegalContent from '$lib/components/LegalContent.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('footer.sales')} - UnxWares</title>
	<meta name="description" content={$t('footer.sales')} />
	<meta property="og:title" content={data.ogTitle} />
	<meta name="twitter:title" content={data.ogTitle} />
	<meta property="og:url" content="https://www.unxwares.com/sales-conditions" />
	<meta name="twitter:site" content="https://www.unxwares.com/sales-conditions" />
</svelte:head>

<LegalContent content={data.content} />