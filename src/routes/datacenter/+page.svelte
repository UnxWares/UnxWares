<script lang="ts">
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
	<title>UnxWares - Datacenter</title>

	<meta property="og:title" content="UnxWares - Datacenter">
	<meta name="twitter:title" content="UnxWares - Datacenter">

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
	hr{
			margin: 40px auto;
	}
</style>