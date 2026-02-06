<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h3>{$t('whoarewe.whatisit.title')}</h3>
<p>
	{@html $t('whoarewe.whatisit.intro')}
</p>

<h4>{$t('whoarewe.whatisit.founders_title')}</h4>
<p>{$t('whoarewe.whatisit.founders_intro')}</p>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founders_table_header_founder')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founders_table_header_role')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founders_table_header_profile')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.founder_baptiste_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founder_baptiste_role')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founder_baptiste_profile')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.founder_david_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founder_david_role')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.founder_david_profile')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.whatisit.context')}
</p>

<h4>{$t('whoarewe.whatisit.objective_title')}</h4>
<p>
	{@html $t('whoarewe.whatisit.objective')}
</p>

<h4>{$t('whoarewe.whatisit.difference_title')}</h4>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff_table_header_others')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff_table_header_unxwares')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff1_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff1_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff2_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff2_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff3_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff3_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff4_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff4_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff5_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff5_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff6_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff6_unxwares')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whatisit.diff7_others')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whatisit.diff7_unxwares')}</td>
	</tr>
	</tbody>
</table>

<h4>{$t('whoarewe.whatisit.positioning_title')}</h4>
<p>
	{$t('whoarewe.whatisit.positioning_intro')}
</p>
<blockquote>
	<p>{@html $t('whoarewe.whatisit.positioning_quote')}</p>
</blockquote>
<p>
	{@html $t('whoarewe.whatisit.positioning_outro')}
</p>
