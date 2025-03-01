<script lang="ts">
	import '../styles/app.css';
	import Background from "$lib/components/Background.svelte";
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
</script>
<title>UnxWares - Welcome</title>
<Background />
<Header />

{@render children()}
