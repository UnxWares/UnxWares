<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-webdb">
	<h2>
		{$t('datacenter.webdb.title')}
	</h2>
	<!-- <figure>
		<img src="" alt="" width="100%"/>
	</figure> -->
	<p>
		{$t('datacenter.webdb.intro_p1')}
	</p>
	<p>
		{$t('datacenter.webdb.intro_p2')}
	</p>
	<p>
		{$t('datacenter.webdb.intro_p3')}
	</p>
	<p>
		{$t('datacenter.webdb.intro_p4')}
	</p>
	<p>
		{$t('datacenter.webdb.intro_p5')}
	</p>
	<!-- Introduction -->
	<p>{@html $t('datacenter.webdb.description')}</p>

	<!-- Tableau des performances – Gamme WebDB -->
	<table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif;">
		<thead>
		<tr style="background-color:#f2f2f2; text-align:left;">
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.table_header_component')}</th>
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.table_header_details')}</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.cpu_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.cpu_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.ram_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.ram_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.storage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.storage_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.network_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.network_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.virtualization_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.virtualization_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.redundancy_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.redundancy_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.webdb.usage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.webdb.usage_value')}</td>
		</tr>
		</tbody>
	</table>
</section>
