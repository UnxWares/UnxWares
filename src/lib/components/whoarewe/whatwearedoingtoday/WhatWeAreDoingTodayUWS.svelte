<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h4>{$t('whoarewe.today_uws.subtitle')}</h4>
<p>
	{@html $t('whoarewe.today_uws.intro_p1')}
</p>
<p>
	{@html $t('whoarewe.today_uws.intro_p2')}
</p>

<h5>{$t('whoarewe.today_uws.tech_title')}</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_header_tech')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_header_usage')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_header_examples')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_go_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_go_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_go_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_rust_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_rust_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_rust_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_laravel_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_laravel_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_laravel_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_svelte_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_svelte_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_svelte_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_ue5_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_ue5_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_ue5_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_flutter_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_flutter_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_flutter_examples')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.tech_other_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_other_usage')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.tech_other_examples')}</td>
	</tr>
	</tbody>
</table>

<h5>{$t('whoarewe.today_uws.why_title')}</h5>
<p>
	{@html $t('whoarewe.today_uws.why_intro')}
</p>
<blockquote>
	<p>
		{$t('whoarewe.today_uws.why_quote')}
	</p>
</blockquote>
<p>
	{@html $t('whoarewe.today_uws.why_p1')}
</p>
<p>
	{@html $t('whoarewe.today_uws.why_p2')}
</p>

<h5>{$t('whoarewe.today_uws.freelance_title')}</h5>
<p>
	{@html $t('whoarewe.today_uws.freelance_intro')}
</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.freelance_table_header_step')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.freelance_table_header_how')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step1_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.freelance_step1_desc')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step2_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step2_desc')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step3_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step3_desc')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step4_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step4_desc')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step5_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.freelance_step5_desc')}</td>
	</tr>
	</tbody>
</table>

<h5>{$t('whoarewe.today_uws.whowins_title')}</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.whowins_header_who')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.whowins_header_benefit')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.whowins_client_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.whowins_client_benefit')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.whowins_freelance_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.whowins_freelance_benefit')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_uws.whowins_unxwares_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_uws.whowins_unxwares_benefit')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.today_uws.approach')}
</p>
