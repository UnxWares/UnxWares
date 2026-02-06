<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h3>{$t('whoarewe.whycreated.title')}</h3>

<h4>{$t('whoarewe.whycreated.findings_title')}</h4>
<p>{$t('whoarewe.whycreated.findings_intro')}</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.findings_table_header_problem')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.findings_table_header_response')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding1_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding1_response')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding2_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding2_response')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding3_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding3_response')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding4_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding4_response')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding5_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding5_response')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.finding6_problem')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.finding6_response')}</td>
	</tr>
	</tbody>
</table>

<p>{@html $t('whoarewe.whycreated.conclusion')}</p>

<h4>{$t('whoarewe.whycreated.wanted_title')}</h4>
<p>{@html $t('whoarewe.whycreated.wanted_intro')}</p>
<ul>
	<li>
		<p>
			{@html $t('whoarewe.whycreated.wanted1')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.whycreated.wanted2')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.whycreated.wanted3')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.whycreated.wanted4')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.whycreated.wanted5')}
		</p>
	</li>
</ul>

<h4>{$t('whoarewe.whycreated.positioning_title')}</h4>
<p>{$t('whoarewe.whycreated.positioning')}</p>
<blockquote>
	<p>{@html $t('whoarewe.whycreated.positioning_quote')}</p>
</blockquote>

<h4>{$t('whoarewe.whycreated.values_title')}</h4>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.values_table_header_value')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.values_table_header_meaning')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value1_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value1_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value2_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value2_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value3_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value3_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value4_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value4_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value5_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value5_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value6_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value6_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value7_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value7_meaning')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.whycreated.value8_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.whycreated.value8_meaning')}</td>
	</tr>
	</tbody>
</table>
