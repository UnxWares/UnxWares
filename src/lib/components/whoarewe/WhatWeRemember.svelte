<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h3>{$t('whoarewe.remember.title')}</h3>

<p>
	{@html $t('whoarewe.remember.intro')}
</p>
<ul>
	<li><p>{$t('whoarewe.remember.point1')}</p></li>
	<li><p>{$t('whoarewe.remember.point2')}</p></li>
	<li><p>{$t('whoarewe.remember.point3')}</p></li>
	<li><p>{$t('whoarewe.remember.point4')}</p></li>
</ul>

<p>
	{@html $t('whoarewe.remember.ecosystem_intro')}
</p>
<ul>
	<li><p>{$t('whoarewe.remember.eco_point1')}</p></li>
	<li><p>{$t('whoarewe.remember.eco_point2')}</p></li>
	<li><p>{$t('whoarewe.remember.eco_point3')}</p></li>
	<li><p>{@html $t('whoarewe.remember.eco_point4')}</p></li>
</ul>

<p>
	{@html $t('whoarewe.remember.mission')}
</p>

<p>
	{$t('whoarewe.remember.identity1')}
	<br>
	{$t('whoarewe.remember.identity2')}
</p>

<p>
	{$t('whoarewe.remember.identity3')}
	<br>
	{@html $t('whoarewe.remember.identity4')}
</p>

<p><strong>
	{$t('whoarewe.remember.tagline1')}
	<br>
	{$t('whoarewe.remember.tagline2')}
	<br>
	{$t('whoarewe.remember.tagline3')}
	<br>
	{$t('whoarewe.remember.tagline4')}
</strong></p>
<span class="welcome-era">{$t('whoarewe.remember.welcome')} <img src="images/unxwares_logotype.png" alt="UnxWares"/></span>

<style>
	.welcome-era {
		font-size: 50px;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.welcome-era img {
		height: 50px;
	}

	@media (max-width: 768px) {
		.welcome-era {
			font-size: 36px;
			flex-direction: column;
			align-items: flex-start;
		}

		.welcome-era img {
			height: 40px;
		}
	}

	@media (max-width: 480px) {
		.welcome-era {
			font-size: 28px;
		}

		.welcome-era img {
			height: 32px;
		}
	}
</style>
