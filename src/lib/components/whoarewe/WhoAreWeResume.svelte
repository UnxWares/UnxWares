<script lang="ts">
	import { t } from 'svelte-i18n';
</script>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; table-layout: fixed; word-wrap: break-word;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.resume.table_header_aspect')}</th>
		<th style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.resume.table_header_presentation')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.identity_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.identity_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.origins_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.origins_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.dna_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.dna_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.poles_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">
			<ul style="margin: 0; padding-left: 18px;">
				<li>{@html $t('whoarewe.resume.poles_value_uwc')}</li>
				<li>{@html $t('whoarewe.resume.poles_value_uws')}</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.philosophy_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.philosophy_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.technologies_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.resume.technologies_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.projects_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.projects_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.opensource_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.opensource_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.workmethod_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.workmethod_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.values_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.resume.values_value')}</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>{$t('whoarewe.resume.vision_label')}</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">{$t('whoarewe.resume.vision_value')}</td>
	</tr>
	</tbody>
</table>

<h4 style="margin: 30px 0 15px 0;">{$t('whoarewe.resume.keydates_title')}</h4>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 10px; border: 1px solid #ddd; width: 150px;">{$t('whoarewe.resume.keydates_header_date')}</th>
		<th style="padding: 10px; border: 1px solid #ddd;">{$t('whoarewe.resume.keydates_header_event')}</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>10/02/2022</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{$t('whoarewe.resume.keydates_20220210')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>19/10/2023</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.keydates_20231019_birth')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>19/10/2023</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{$t('whoarewe.resume.keydates_20231019_vff')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>2024</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.keydates_2024')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>2024-2025</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{$t('whoarewe.resume.keydates_20242025')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>03/06/2025</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.keydates_20250603')}</td>
	</tr>
	<tr>
		<td style="padding: 10px; border: 1px solid #ddd;"><strong>2025+</strong></td>
		<td style="padding: 10px; border: 1px solid #ddd;">{@html $t('whoarewe.resume.keydates_2025plus')}</td>
	</tr>
	</tbody>
</table>
