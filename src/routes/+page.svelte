<script>
	import ShortWhoAreWe from '$lib/components/main/ShortWhoAreWe.svelte';
	import PepiteNormandie from '$lib/components/main/PepiteNormandie.svelte';
	import HomeEcosystem from '$lib/components/main/HomeEcosystem.svelte';
</script>

<svelte:head>
	<title>UnxWares - Welcome</title>

	<meta property="og:title" content="UnxWares - Welcome">
	<meta name="twitter:title" content="UnxWares - Welcome">

	<meta property="og:url" content="https://www.unxwares.com">
	<meta name="twitter:site" content="https://www.unxwares.com">
</svelte:head>

<main>
	<ShortWhoAreWe />
	
	<div class="classic-separator">
		<span class="line"></span>
		<img src="/favicon.png" alt="" />
		<span class="line"></span>
	</div>

	<PepiteNormandie />

	<div class="classic-separator">
		<span class="line"></span>
		<img src="/favicon.png" alt="" />
		<span class="line"></span>
	</div>

	<HomeEcosystem />
</main>

<style>
	.classic-separator {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 900px;
		margin: 65px auto;
		gap: 20px;
		opacity: 0.6;
	}

	.classic-separator .line {
		height: 1px;
		flex: 1;
		background: linear-gradient(to var(--direction, right), transparent, rgba(0, 0, 0, 0.2));
	}

	.classic-separator .line:last-child {
		--direction: left;
	}

	.classic-separator img {
		width: 20px;
		height: 20px;
		filter: grayscale(100%);
	}
</style>