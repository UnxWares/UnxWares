<script>
	import { t } from 'svelte-i18n';
</script>

<section id="cloud-infrastructure">
	<div class="section-title">
		<i class="bi bi-diagram-3"></i>
		<h2>{$t('cloud_page.infrastructure.title')}</h2>
	</div>

	<p class="intro-text">{$t('cloud_page.infrastructure.intro')}</p>

	<div class="infrastructure-highlight">
		<div class="highlight-card">
			<div class="highlight-icon">
				<i class="bi bi-building"></i>
			</div>
			<h3>{$t('cloud_page.infrastructure.hardware_title')}</h3>
			<p>{$t('cloud_page.infrastructure.hardware_desc')}</p>
		</div>

		<div class="highlight-card">
			<div class="highlight-icon">
				<i class="bi bi-flag-fill"></i>
			</div>
			<h3>{$t('cloud_page.infrastructure.sovereignty_title')}</h3>
			<p>{$t('cloud_page.infrastructure.sovereignty_desc')}</p>
		</div>

		<div class="highlight-card">
			<div class="highlight-icon">
				<i class="bi bi-gear-wide-connected"></i>
			</div>
			<h3>{$t('cloud_page.infrastructure.orchestration_title')}</h3>
			<p>{$t('cloud_page.infrastructure.orchestration_desc')}</p>
		</div>
	</div>

	<div class="infrastructure-cta">
		<a href="/datacenter" class="infrastructure-link">
			<i class="bi bi-arrow-right-circle-fill"></i>
			Découvrir notre infrastructure
		</a>
	</div>
</section>

<style>
	#cloud-infrastructure {
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
		animation: pulse 2s ease-in-out infinite;
		color: #050c9c;
	}

	@keyframes pulse {
		0%, 100% { transform: scale(1); }
		50% { transform: scale(1.05); }
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

	.infrastructure-highlight {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-bottom: 50px;
	}

	@media (max-width: 968px) {
		.infrastructure-highlight {
			grid-template-columns: 1fr;
		}
	}

	.highlight-card {
		background: linear-gradient(135deg, #050c9c 0%, #0711c4 100%);
		padding: 40px;
		border-radius: 16px;
		text-align: center;
		transition: all 0.3s ease;
		box-shadow: 0 4px 16px rgba(5, 12, 156, 0.2);
	}

	.highlight-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 24px rgba(5, 12, 156, 0.3);
	}

	.highlight-icon {
		width: 70px;
		height: 70px;
		margin: 0 auto 20px auto;
		background: rgba(255, 255, 255, 0.15);
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		backdrop-filter: blur(10px);
	}

	.highlight-icon i {
		font-size: 32px;
		color: white;
	}

	.highlight-card h3 {
		font-size: 20px;
		font-weight: 600;
		margin: 0 0 15px 0;
		color: white;
	}

	.highlight-card p {
		font-size: 15px;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.9);
		margin: 0;
	}

	.infrastructure-cta {
		text-align: center;
	}

	.infrastructure-link {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 16px 32px;
		background: white;
		color: #050c9c;
		text-decoration: none;
		border-radius: 10px;
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
		font-weight: 600;
		transition: all 0.3s ease;
		border: 2px solid #050c9c;
	}

	.infrastructure-link:hover {
		background: #050c9c;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(5, 12, 156, 0.3);
	}

	.infrastructure-link i {
		font-size: 20px;
		transition: transform 0.3s ease;
	}

	.infrastructure-link:hover i {
		transform: translateX(3px);
	}

	@media (max-width: 548px) {
		.infrastructure-link {
			width: 100%;
			justify-content: center;
		}
	}
</style>
