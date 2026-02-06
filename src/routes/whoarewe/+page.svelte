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

		<h2 style="margin: 25px 0;">{$t('pages.whoarewe.summary_title')}</h2>
		<WhoAreWeResume/>

		<h2 style="margin: 25px 0;">{$t('pages.whoarewe.story_title')}</h2>
		<WhatIsIt/>
		<HowItAllBegan/>
		<WhyItWasCreated/>
		<WhatWeAreDoingTodayUWC/>
		<WhatWeAreDoingTodayUWS/>
		<WhatWeAreDoingTodayUNX/>
		<WhatWeRemember/>
	</article>
</main>

<style>

</style>