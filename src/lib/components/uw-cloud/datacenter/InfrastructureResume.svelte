<script>
	import { t } from 'svelte-i18n';
</script>

<h1>{$t('datacenter.resume.title')}</h1>
<p>
	{$t('datacenter.resume.intro_p1')}
</p>
<p>
	{$t('datacenter.resume.intro_p2')}
</p>
<h2>{$t('datacenter.resume.numbers_title')}</h2>
<ul>
	<li>
		<p>{@html $t('datacenter.resume.number1')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number2')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number3')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number4')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number5')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number6')}</p>
	</li>
	<li>
		<p>{@html $t('datacenter.resume.number7')}</p>
	</li>
</ul>

<style>

</style>
