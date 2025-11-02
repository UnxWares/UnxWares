<script>
	import WhoAreWeResume from '$lib/components/whoarewe/WhoAreWeResume.svelte';
	import WhatWeRemember from '$lib/components/whoarewe/WhatWeRemember.svelte';
	import WhatIsIt from '$lib/components/whoarewe/WhatIsIt.svelte';
</script>

<svelte:head>
	<title>UnxWares - Qui sommes-nous</title>

	<meta property="og:title" content="UnxWares - Qui sommes-nous">
	<meta name="twitter:title" content="UnxWares - Qui sommes-nous">

	<meta property="og:url" content="https://www.unxwares.com/whoarewe">
	<meta name="twitter:site" content="https://www.unxwares.com/whoarewe">
</svelte:head>

<main>
	<article>
		<h1>Notre identité : Qui sommes-nous, quelle est notre histoire ?</h1>
		<p>En lien avec nos valeurs, il est primordial pour nous que vous nous connaissiez, qu'on soit transparent avec vous, car nous pensons, et nous croyons qu'une vraie relation avec nos clients et notre communauté est nécessaire au bon fonctionnement de l'internet de demain</p>

		<h2 style="margin: 25px 0;">Un léger résumé</h2>
		<WhoAreWeResume/>

		<h2 style="margin: 25px 0;">Notre histoire : la vraie</h2>
		<WhatIsIt/>
		<WhatWeRemember/>
	</article>
</main>

<style>

</style>