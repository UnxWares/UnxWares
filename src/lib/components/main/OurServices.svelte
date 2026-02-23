<script>
	import { t } from 'svelte-i18n';
	import { Grid3x3, Cloud, Code, CheckCircle, ArrowRight } from 'lucide-svelte';
</script>

<section id="our-services">
	<div class="section-title">
		<Grid3x3 size={32} />
		<h2>{$t('services.title')}</h2>
	</div>
	<div class="services-container">
		<div class="service-card cloud">
			<div class="service-header">
				<div class="service-icon">
					<Cloud size={24} />
				</div>
				<h3>{$t('services.cloud_title')}</h3>
			</div>
			<p class="service-tagline">
				{$t('services.cloud_tagline')}
			</p>
			<div class="service-features">
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.cloud_feat1')}</strong> – {$t('services.cloud_feat1_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.cloud_feat2')}</strong> – {$t('services.cloud_feat2_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.cloud_feat3')}</strong> – {$t('services.cloud_feat3_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.cloud_feat4')}</strong> – {$t('services.cloud_feat4_desc')}</span>
				</div>
			</div>
			<p class="service-description">
				{$t('services.cloud_desc')}
			</p>
			<a href="/datacenter" class="service-link">
				{$t('services.cloud_link')} <ArrowRight size={14} />
			</a>
		</div>

		<div class="service-card studio">
			<div class="service-header">
				<div class="service-icon">
					<Code size={24} />
				</div>
				<h3>{$t('services.studio_title')}</h3>
			</div>
			<p class="service-tagline">
				{$t('services.studio_tagline')}
			</p>
			<div class="service-features">
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.studio_feat1')}</strong> – {$t('services.studio_feat1_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.studio_feat2')}</strong> – {$t('services.studio_feat2_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.studio_feat3')}</strong> – {$t('services.studio_feat3_desc')}</span>
				</div>
				<div class="feature">
					<CheckCircle size={16} />
					<span><strong>{$t('services.studio_feat4')}</strong> – {$t('services.studio_feat4_desc')}</span>
				</div>
			</div>
			<p class="service-description">
				{$t('services.studio_desc')}
			</p>
			<a href="/uw-studio" class="service-link">
				{$t('services.studio_link')} <ArrowRight size={14} />
			</a>
		</div>
	</div>
</section>

<style>
	#our-services{
		margin: 0;
	}
	#our-services .section-title{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 50px;
	}
	#our-services .section-title :global(svg){
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}
	#our-services .section-title h2{
		text-align: center;
		margin: 0;
		font-size: 28px;
	}
	@media (max-width: 768px) {
		#our-services .section-title{
			margin-bottom: 35px;
		}
		#our-services .section-title h2{
			font-size: 22px;
		}
	}
	.services-container{
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;
	}
	.service-card{
		padding: 40px 35px;
		border: 1px solid var(--border-color);
		border-radius: 12px;
		transition: all 0.3s ease;
		background-color: var(--bg-primary);
	}
	.service-card:hover{
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(5, 12, 156, 0.1);
		border-color: var(--primary);
	}
	.service-header{
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}
	.service-icon{
		width: 50px;
		height: 50px;
		border-radius: 10px;
		background-color: var(--primary-light);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.service-icon :global(svg){
		color: var(--primary-text);
	}
	.service-card h3{
		font-size: 22px;
		font-weight: 600;
		margin: 0;
		color: var(--text-primary);
	}
	.service-tagline{
		font-size: 16px;
		font-style: italic;
		color: var(--primary-text);
		margin: 0 0 25px 0;
		line-height: 1.6;
	}
	.service-features{
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 25px;
	}
	.feature{
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}
	.feature :global(svg){
		color: var(--primary-text);
		margin-top: 3px;
		flex-shrink: 0;
	}
	.feature span{
		font-size: 14px;
		line-height: 1.7;
		color: var(--text-secondary);
	}
	.service-description{
		font-size: 15px;
		line-height: 1.8;
		color: var(--text-secondary);
		margin: 0 0 25px 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
		padding-top: 20px;
		border-top: 1px solid var(--border-color);
	}
	.service-link{
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: var(--primary-text);
		text-decoration: none;
		font-weight: 600;
		font-size: 15px;
		transition: gap 0.2s ease;
	}
	.service-link:hover{
		gap: 12px;
	}
</style>
