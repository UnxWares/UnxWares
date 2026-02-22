<script lang="ts">
	import { t } from 'svelte-i18n';
	import LegalContent from '$lib/components/LegalContent.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{$t('footer.terms')} - UnxWares</title>
	<meta name="description" content={$t('footer.terms')} />
	<meta property="og:title" content="{$t('footer.terms')} - UnxWares" />
	<meta name="twitter:title" content="{$t('footer.terms')} - UnxWares" />
	<meta property="og:url" content="https://www.unxwares.com/use-conditions" />
	<meta name="twitter:site" content="https://www.unxwares.com/use-conditions" />
</svelte:head>

<LegalContent content={data.content} />