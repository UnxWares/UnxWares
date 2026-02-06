<script>
	import { t } from 'svelte-i18n';
</script>

<section id="uw-cloud-internal">
	<h2>
		{$t('datacenter.internal.title')}
	</h2>
	<figure>
		<img src="/images/uw-cloud/infrastructure/hp_proliant_dl360p_gen8.png" alt="HP Proliant DL360p Gen8 front" width="100%"/>
	</figure>
	<p>
		{$t('datacenter.internal.intro_p1')}
	</p>
	<p>
		{$t('datacenter.internal.intro_p2')}
	</p>
	<p>
		{$t('datacenter.internal.intro_p3')}
	</p>
	<table style="width:100%; border-collapse: collapse; font-family: Arial, sans-serif;">
		<thead>
		<tr style="background-color:#f2f2f2; text-align:left;">
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.table_header_component')}</th>
			<th style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.table_header_details')}</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.cpu_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.cpu_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.ram_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.ram_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.storage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.storage_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.network_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.network_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.virtualization_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.virtualization_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.redundancy_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.redundancy_value')}</td>
		</tr>
		<tr>
			<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('datacenter.internal.usage_label')}</td>
			<td style="padding: 12px; border: 1px solid #ddd;">{$t('datacenter.internal.usage_value')}</td>
		</tr>
		</tbody>
	</table>
</section>
