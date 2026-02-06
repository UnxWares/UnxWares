<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-network">
	<h2>
		{$t('datacenter.network.title')}
	</h2>
	<!-- <figure>
		<img src="" alt="" width="100%"/>
	</figure> -->
	<p>
		{$t('datacenter.network.intro_p1')}
	</p>
	<p>
		{$t('datacenter.network.intro_p2')}
	</p>
	<p>
		{$t('datacenter.network.intro_p3')}
	</p>
	<h3>
		{$t('datacenter.network.architecture_title')}
	</h3>
	<p>{$t('datacenter.network.architecture_intro')}</p>
	<ul>
		<figure>
			<img src="/images/uw-cloud/infrastructure/fortinet_fortigate_100e.png" alt="" width="100%"/>
		</figure>
		<li>
			<p>
				{@html $t('datacenter.network.fortinet_desc')}
			</p>
		</li>
		<figure>
			<img src="/images/uw-cloud/infrastructure/mikrotik_ccr2004.png" alt="" width="100%"/>
		</figure>
		<li>
			<p>
				{@html $t('datacenter.network.mikrotik_ccr_desc')}
			</p>
		</li>
		<figure>
			<img src="/images/uw-cloud/infrastructure/mikrotik_crs317.png" alt="" width="100%"/>
		</figure>
		<li>
			<p>
				{@html $t('datacenter.network.mikrotik_crs_desc')}
			</p>
		</li>
	</ul>
	<p>
		{$t('datacenter.network.architecture_conclusion')}
	</p>
</section>
