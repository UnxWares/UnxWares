<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h3>{$t('whoarewe.howbegan.title')}</h3>
<p>
	{@html $t('whoarewe.howbegan.intro')}
</p>

<h4>{$t('whoarewe.howbegan.awareness_title')}</h4>
<p>{@html $t('whoarewe.howbegan.awareness_intro')}</p>
<blockquote>
	<p>
		{@html $t('whoarewe.howbegan.awareness_quote')}
	</p>
</blockquote>

<h4>{$t('whoarewe.howbegan.hardware_title')}</h4>
<p>
	{@html $t('whoarewe.howbegan.hardware_intro')}
</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_table_header_period')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_table_header_hardware')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_table_header_context')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_before2023')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_i5')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_i5_context')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_2023')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_ryzen')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_ryzen_context')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_20242025')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_pro')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.howbegan.hardware_pro_context')}</td>
	</tr>
	</tbody>
</table>

<p>{@html $t('whoarewe.howbegan.birth')}</p>

<h4>{$t('whoarewe.howbegan.vff_title')}</h4>
<p>
	{@html $t('whoarewe.howbegan.vff_intro')}
</p>

<h4>{$t('whoarewe.howbegan.summum_title')}</h4>
<p>
	{$t('whoarewe.howbegan.summum_intro')}
</p>
<ul>
	<li>
		<p>
			{@html $t('whoarewe.howbegan.summum_point1')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.howbegan.summum_point2')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.howbegan.summum_point3')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.howbegan.summum_point4')}
		</p>
	</li>
</ul>
<p>
	{@html $t('whoarewe.howbegan.summum_outro')}
</p>
