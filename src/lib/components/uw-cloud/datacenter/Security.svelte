<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-security">
	<h2>
		{$t('datacenter.security.title')}
	</h2>
	<h3>
		{$t('datacenter.security.sovereignty_title')}
	</h3>
	<p>
		{$t('datacenter.security.sovereignty_p1')}
	</p>
	<p>
		{$t('datacenter.security.sovereignty_p2')}
	</p>
	<h3>
		{$t('datacenter.security.depth_title')}
	</h3>
	<p>
		{$t('datacenter.security.depth_intro')}
	</p>
	<ul>
		<li>
			<p>
				{@html $t('datacenter.security.perimeter_label')} {$t('datacenter.security.perimeter_desc')}
			</p>
			<p>
				{@html $t('datacenter.security.isolation_label')} {$t('datacenter.security.isolation_desc')}
			</p>
			<p>
				{@html $t('datacenter.security.monitoring_label')} {$t('datacenter.security.monitoring_desc')}
			</p>
		</li>
	</ul>
	<h3>
		{$t('datacenter.security.backup_title')}
	</h3>
	<p>
		{$t('datacenter.security.backup_intro')}
	</p>
	<ul>
		<li>
			<p>
				{@html $t('datacenter.security.backup_level1_label')} {$t('datacenter.security.backup_level1_desc')}
			</p>
		</li>
		<li>
			<p>
				{@html $t('datacenter.security.backup_level2_label')} {$t('datacenter.security.backup_level2_desc')}
			</p>
		</li>
		<li>
			<p>
				{@html $t('datacenter.security.backup_level3_label')} {$t('datacenter.security.backup_level3_desc')}
			</p>
		</li>
	</ul>
	<h3>
		{$t('datacenter.security.sla_title')}
	</h3>
	<p>
		{$t('datacenter.security.sla_desc')}
	</p>
</section>
