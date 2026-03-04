<script>
	import { t } from 'svelte-i18n';
	import WhoAreWeResume from '$lib/components/whoarewe/WhoAreWeResume.svelte';
	import WhatWeRemember from '$lib/components/whoarewe/WhatWeRemember.svelte';
	import WhatIsIt from '$lib/components/whoarewe/WhatIsIt.svelte';
	import HowItAllBegan from '$lib/components/whoarewe/HowItAllBegan.svelte';
	import WhyItWasCreated from '$lib/components/whoarewe/WhyItWasCreated.svelte';
	import WhatWeAreDoingTodayUWC from '$lib/components/whoarewe/whatwearedoingtoday/WhatWeAreDoingTodayUWC.svelte';
	import WhatWeAreDoingTodayUWS from '$lib/components/whoarewe/whatwearedoingtoday/WhatWeAreDoingTodayUWS.svelte';
	import WhatWeAreDoingTodayUNX from '$lib/components/whoarewe/whatwearedoingtoday/WhatWeAreDoingTodayUNX.svelte';
	import PepiteNormandie from '$lib/components/main/PepiteNormandie.svelte';
	import { CTASection, Separator } from '@unxwares/ui-core';
	import { Mail, MessageCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{$t('pages.whoarewe.title')}</title>

	<meta property="og:title" content={$t('pages.whoarewe.title')}>
	<meta name="twitter:title" content={$t('pages.whoarewe.title')}>

	<meta property="og:url" content="https://www.unxwares.com/whoarewe">
	<meta name="twitter:site" content="https://www.unxwares.com/whoarewe">
</svelte:head>

<main>
	<article>
		<h1>{$t('pages.whoarewe.h1')}</h1>
		<p>{$t('pages.whoarewe.intro')}</p>

		<Separator icon="/favicon.png" />

		<h2 style="margin: 25px 0;">{$t('pages.whoarewe.summary_title')}</h2>
		<WhoAreWeResume/>

		<Separator icon="/favicon.png" />

		<h2 style="margin: 25px 0;">{$t('pages.whoarewe.story_title')}</h2>

		<div class="story-section">
			<WhatIsIt/>
		</div>

		<div class="story-section">
			<HowItAllBegan/>
		</div>

		<div class="story-section">
			<WhyItWasCreated/>
		</div>

		<div class="story-section">
			<WhatWeAreDoingTodayUWC/>
		</div>

		<div class="story-section">
			<WhatWeAreDoingTodayUWS/>
		</div>

		<div class="story-section">
			<WhatWeAreDoingTodayUNX/>
		</div>

		<div class="story-section">
			<WhatWeRemember/>
		</div>

		<Separator icon="/favicon.png" />

		<PepiteNormandie/>

		<Separator icon="/favicon.png" />

		<CTASection
			title={$t('contact_cta.title')}
			description={$t('contact_cta.description')}
			actions={[
				{
					label: $t('contact_cta.button'),
					href: '/contact',
					icon: Mail,
					variant: 'primary'
				},
				{
					label: 'Discord',
					href: 'https://discord.gg/PPRacEf7yB',
					icon: MessageCircle,
					variant: 'secondary',
					external: true
				}
			]}
		/>
	</article>
</main>

<style>
	.story-section {
		margin: 40px 0;
	}
	.story-section:first-of-type {
		margin-top: 20px;
	}
	.story-section:last-of-type {
		margin-bottom: 20px;
	}

	article :global(h1) {
		margin: 30px 0 20px;
	}

	article :global(h2) {
		margin: 35px 0 20px;
	}

	article :global(h3) {
		margin: 30px 0 15px;
	}

	article :global(h4) {
		margin: 25px 0 12px;
	}

	article :global(p) {
		margin: 15px 0;
		line-height: 1.8;
	}

	article :global(ul),
	article :global(ol) {
		margin: 20px 0;
		padding-left: 30px;
	}

	article :global(li) {
		margin: 12px 0;
		line-height: 1.7;
	}

	article :global(li p) {
		margin: 0;
		display: inline;
	}

	article :global(table) {
		margin: 25px 0 !important;
	}
</style>