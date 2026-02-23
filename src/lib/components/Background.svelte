<script lang="ts">
	let { show = true } = $props();
</script>

{#if show}
	<video
		src="/videos/blured_video.mp4"
		autoplay
		muted
		loop
		playsinline
		class="background-video">
	</video>
{/if}

<style>
    .background-video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: calc(100vh + 300px);
        object-fit: cover;
        object-position: left top;
        z-index: -1;
        pointer-events: none;
    }
</style>