<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-services">
	<h2>
		{$t('datacenter.services.title')}
	</h2>
	<figure>
		<img src="/images/uw-cloud/infrastructure/hp_proliant_dl360_gen9.png" alt="HP Proliant DL360 Gen9 front" width="100%"/>
	</figure>
	<p>{$t('datacenter.services.intro_p1')}
	</p>
	<p>
		{$t('datacenter.services.intro_p2')}
	</p>
	<p>
		{$t('datacenter.services.intro_p3')}
	</p>
	<p>
		{$t('datacenter.services.intro_p4')}
	</p>
	<table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif;">
		<thead>
		<tr style="background-color:#f2f2f2; text-align:left;">
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.table_header_component')}</th>
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.table_header_details')}</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.cpu_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.cpu_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.ram_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.ram_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.storage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.storage_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.network_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.network_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.virtualization_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.virtualization_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.redundancy_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.redundancy_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.services.usage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.services.usage_value')}</td>
		</tr>
		</tbody>
	</table>
</section>
