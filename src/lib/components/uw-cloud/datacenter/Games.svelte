<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-games">
	<h2>
		{$t('datacenter.games.title')}
	</h2>
	<!-- <figure>
		<img src="" alt="" width="100%"/>
	</figure> -->
	<p>
		{$t('datacenter.games.intro_p1')}
	</p>
	<p>
		{$t('datacenter.games.intro_p2')}
	</p>
	<p>
		{$t('datacenter.games.intro_p3')}
	</p>
	<p>
		{$t('datacenter.games.intro_p4')}
	</p>
	<p>
		{$t('datacenter.games.intro_p5')}
	</p>
	<table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif;">
		<thead>
		<tr style="background-color:#f2f2f2; text-align:left;">
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.table_header_component')}</th>
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.table_header_details')}</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.cpu_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.cpu_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.ram_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.ram_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.storage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.storage_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.network_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.network_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.virtualization_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.virtualization_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.redundancy_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.redundancy_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.games.usage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.games.usage_value')}</td>
		</tr>
		</tbody>
	</table>
</section>
