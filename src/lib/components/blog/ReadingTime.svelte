<script lang="ts">
	import { locale } from 'svelte-i18n';
	import { getLocalizedReadingTime } from '$lib/utils/blog/reading-time';
	import { Clock } from 'lucide-svelte';

	let { minutes }: { minutes: number } = $props();

	let readingTimeText = $derived(getLocalizedReadingTime(minutes, $locale || 'fr'));
</script>

<span class="reading-time">
	<Clock size={16} />
	{readingTimeText}
</span>

<style>
	.reading-time {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-size: 0.875rem;
		color: var(--text-muted, #6c757d);
	}
</style>
