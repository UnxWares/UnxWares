<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-ecology">
	<h2>
		{$t('datacenter.ecology.title')}
	</h2>
	<!-- <figure>
		<img src="" alt="" width="100%"/>
	</figure> -->
	<p>
		{$t('datacenter.ecology.intro')}
	</p>
	<h3>
		{$t('datacenter.ecology.refurbishing_title')}
	</h3>
	<p>
		{$t('datacenter.ecology.refurbishing_intro')}
	</p>
	<p>
		{@html $t('datacenter.ecology.impact_label')} {$t('datacenter.ecology.impact_desc')}
	</p>
	<p>
		{@html $t('datacenter.ecology.performance_label')} {$t('datacenter.ecology.performance_desc')}
	</p>
	<p>
		{@html $t('datacenter.ecology.economic_label')} {$t('datacenter.ecology.economic_desc')}
	</p>
</section>
