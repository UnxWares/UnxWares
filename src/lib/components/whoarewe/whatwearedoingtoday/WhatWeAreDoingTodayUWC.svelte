<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h3>{$t('whoarewe.today_uwc.title')}</h3>

<h4>{$t('whoarewe.today_uwc.subtitle')}</h4>
<p>{@html $t('whoarewe.today_uwc.intro')}</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.table_header_component')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.table_header_details')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.location_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.location_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.internal_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.internal_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.network_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.network_value')}</td>
	</tr>
	</tbody>
</table>

<h5>{$t('whoarewe.today_uwc.ranges_title')}</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.ranges_header_range')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.ranges_header_hardware')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.ranges_header_usage')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.range_services_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_services_hardware')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_services_usage')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.range_webdb_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_webdb_hardware')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_webdb_usage')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.range_games_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_games_hardware')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.range_games_usage')}</td>
	</tr>
	</tbody>
</table>

<h5>{$t('whoarewe.today_uwc.philosophy_title')}</h5>
<p>
	{@html $t('whoarewe.today_uwc.philosophy')}
</p>

<h5>{$t('whoarewe.today_uwc.alignment_title')}</h5>
<p>
	{@html $t('whoarewe.today_uwc.alignment_p1')}
</p>
<p>
	{@html $t('whoarewe.today_uwc.alignment_p2')}
</p>
<p>
	{@html $t('whoarewe.today_uwc.alignment_p3')}
</p>

<h5>{$t('whoarewe.today_uwc.stack_title')}</h5>
<p>{$t('whoarewe.today_uwc.stack_intro')}</p>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_header_tech')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_header_role')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_proxmox_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_proxmox_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_k8s_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_k8s_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_observability_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_observability_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_backup_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_backup_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_gitops_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_gitops_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uwc.stack_fortinet_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uwc.stack_fortinet_role')}</td>
	</tr>
	</tbody>
</table>

<h5>{$t('whoarewe.today_uwc.sla_title')}</h5>
<p>
	{@html $t('whoarewe.today_uwc.sla')}
</p>
