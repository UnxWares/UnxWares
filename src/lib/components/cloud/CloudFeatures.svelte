<script>
	import { t } from 'svelte-i18n';
</script>

<section id="cloud-features">
	<div class="section-title">
		<i class="bi bi-cloud-fill"></i>
		<h2>{$t('cloud_page.services.title')}</h2>
	</div>

	<p class="intro-text">{$t('cloud_page.services.intro')}</p>

	<div class="features-grid">
		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-server"></i>
			</div>
			<h3>{$t('cloud_page.services.vps_title')}</h3>
			<p>{$t('cloud_page.services.vps_desc')}</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-hdd-stack"></i>
			</div>
			<h3>{$t('cloud_page.services.storage_title')}</h3>
			<p>{$t('cloud_page.services.storage_desc')}</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-database"></i>
			</div>
			<h3>{$t('cloud_page.services.database_title')}</h3>
			<p>{$t('cloud_page.services.database_desc')}</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-shield-lock"></i>
			</div>
			<h3>{$t('cloud_page.services.network_title')}</h3>
			<p>{$t('cloud_page.services.network_desc')}</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-grid-3x3"></i>
			</div>
			<h3>{$t('cloud_page.services.kubernetes_title')}</h3>
			<p>{$t('cloud_page.services.kubernetes_desc')}</p>
		</div>

		<div class="feature-card">
			<div class="feature-icon">
				<i class="bi bi-gear-fill"></i>
			</div>
			<h3>{$t('cloud_page.services.custom_title')}</h3>
			<p>{$t('cloud_page.services.custom_desc')}</p>
		</div>
	</div>
</section>

<style>
	#cloud-features {
		margin: 0;
	}

	.section-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 25px;
	}

	.section-title i {
		font-size: 32px;
		animation: float 3s ease-in-out infinite;
		color: #050c9c;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}

	.section-title h2 {
		text-align: center;
		margin: 0;
		font-size: 28px;
	}

	@media (max-width: 768px) {
		.section-title h2 {
			font-size: 22px;
		}
	}

	.intro-text {
		text-align: center;
		font-size: 16px;
		line-height: 1.8;
		color: #5a5a5a;
		margin: 0 auto 50px auto;
		max-width: 850px;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
	}

	@media (max-width: 1024px) {
		.features-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.features-grid {
			grid-template-columns: 1fr;
		}
	}

	.feature-card {
		background: white;
		padding: 30px;
		border-radius: 12px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
		text-align: center;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.feature-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 20px auto;
		background: #f0f2ff;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.feature-icon i {
		font-size: 28px;
		color: #050c9c;
	}

	.feature-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #1a1a1a;
	}

	.feature-card p {
		font-size: 14px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	@media (max-width: 380px) {
		.feature-card {
			padding: 20px;
		}

		.feature-icon {
			width: 50px;
			height: 50px;
		}

		.feature-icon i {
			font-size: 24px;
		}

		.feature-card h3 {
			font-size: 16px;
		}

		.feature-card p {
			font-size: 13px;
		}
	}
</style>
