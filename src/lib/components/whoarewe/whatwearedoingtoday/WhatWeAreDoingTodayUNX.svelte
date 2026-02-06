<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<h4>{$t('whoarewe.today_unx.subtitle')}</h4>
<p>
	{@html $t('whoarewe.today_unx.intro')}
</p>

<h5>{$t('whoarewe.today_unx.how_title')}</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.how_header_layer')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.how_header_tech')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.how_header_role')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.layer1_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer1_tech')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer1_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.layer2_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer2_tech')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer2_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.layer3_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer3_tech')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer3_role')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.layer4_label')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.layer4_tech')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.layer4_role')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.today_unx.security')}
</p>

<h4>{$t('whoarewe.today_unx.opensource_subtitle')}</h4>
<p>{$t('whoarewe.today_unx.opensource_intro')}</p>
<ul>
	<li><p>{@html $t('whoarewe.today_unx.opensource_point1')}</p></li>
	<li><p>{@html $t('whoarewe.today_unx.opensource_point2')}</p></li>
	<li><p>{@html $t('whoarewe.today_unx.opensource_point3')}</p></li>
	<li><p>{@html $t('whoarewe.today_unx.opensource_point4')}</p></li>
</ul>
<p>{$t('whoarewe.today_unx.opensource_policy')}</p>
<blockquote>
	<p>
		{@html $t('whoarewe.today_unx.opensource_quote')}
	</p>
</blockquote>

<h5>{$t('whoarewe.today_unx.public_private_title')}</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_header_category')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_header_status')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_header_why')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_site_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_site_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_site_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_vff_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_vff_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_vff_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_raiemus_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_raiemus_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_raiemus_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_orch_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_orch_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_orch_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_security_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_security_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_security_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_brand_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_brand_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_brand_why')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_panel_cat')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.pp_panel_status')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.pp_panel_why')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.today_unx.pp_conclusion')}
</p>

<h4>{$t('whoarewe.today_unx.association_subtitle')}</h4>
<p>
	{@html $t('whoarewe.today_unx.association_intro')}
</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_header_offer')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_header_who')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_header_return')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_offer1')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;" rowspan="3">{$t('whoarewe.today_unx.association_who')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;" rowspan="3">{@html $t('whoarewe.today_unx.association_return')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_offer2')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.association_offer3')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.today_unx.association_p1')}
</p>
<p>
	{@html $t('whoarewe.today_unx.association_p2')}
</p>

<h4>{$t('whoarewe.today_unx.projects_subtitle')}</h4>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.projects_header_project')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.projects_header_description')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.projects_header_status')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_vff_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_vff_desc')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_vff_status')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_raiemus_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_raiemus_desc')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_raiemus_status')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_orch_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_orch_desc')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_orch_status')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_panel_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_panel_desc')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_panel_status')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.today_unx.project_game_name')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_game_desc')}</td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.today_unx.project_game_status')}</td>
	</tr>
	</tbody>
</table>

<p>
	{@html $t('whoarewe.today_unx.projects_conclusion')}
</p>

<h4>{$t('whoarewe.today_unx.difference_subtitle')}</h4>
<ul>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff1')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff2')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff3')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff4')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff5')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff6')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff7')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff8')}
		</p>
	</li>
	<li>
		<p>
			{@html $t('whoarewe.today_unx.diff9')}
		</p>
	</li>
</ul>
