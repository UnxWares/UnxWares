<script>
	import { t } from 'svelte-i18n';
	import { Network, Building, Flag, Settings, ArrowRightCircle } from 'lucide-svelte';
</script>

<section id="cloud-infrastructure">
	<div class="section-title">
		<Network size={32} color="#050c9c" />
		<h2>{$t('cloud_page.infrastructure.title')}</h2>
	</div>

	<p class="intro-text">{$t('cloud_page.infrastructure.intro')}</p>

	<div class="infrastructure-highlight">
		<div class="highlight-card">
			<div class="highlight-icon">
				<Building size={32} color="white" />
			</div>
			<h3>{$t('cloud_page.infrastructure.hardware_title')}</h3>
			<p>{$t('cloud_page.infrastructure.hardware_desc')}</p>
		</div>

		<div class="highlight-card">
			<div class="highlight-icon">
				<Flag size={32} color="white" />
			</div>
			<h3>{$t('cloud_page.infrastructure.sovereignty_title')}</h3>
			<p>{$t('cloud_page.infrastructure.sovereignty_desc')}</p>
		</div>

		<div class="highlight-card">
			<div class="highlight-icon">
				<Settings size={32} color="white" />
			</div>
			<h3>{$t('cloud_page.infrastructure.orchestration_title')}</h3>
			<p>{$t('cloud_page.infrastructure.orchestration_desc')}</p>
		</div>
	</div>

	<div class="infrastructure-cta">
		<a href="/datacenter" class="infrastructure-link">
			<ArrowRightCircle size={20} />
			{$t('cloud_page.infrastructure.cta_link')}
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

	.section-title :global(svg) {
		animation: pulse 2s ease-in-out infinite;
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
		padding: 0 20px;
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
		max-width: 100%;
		box-sizing: border-box;
	}

	.infrastructure-link:hover {
		background: #050c9c;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 4px 16px rgba(5, 12, 156, 0.3);
	}

	.infrastructure-link :global(svg) {
		transition: transform 0.3s ease;
	}

	.infrastructure-link:hover :global(svg) {
		transform: translateX(3px);
	}

	@media (max-width: 548px) {
		.infrastructure-cta {
			padding: 0 30px;
		}

		.infrastructure-link {
			width: 100%;
			justify-content: center;
			font-size: 15px;
			padding: 14px 28px;
		}

		.highlight-card {
			padding: 30px 25px;
		}
	}

	@media (max-width: 480px) {
		.infrastructure-cta {
			padding: 0 20px;
		}

		.infrastructure-link {
			font-size: 14px;
			padding: 12px 20px;
			gap: 8px;
		}
	}

	@media (max-width: 380px) {
		.highlight-card {
			padding: 25px 20px;
		}

		.highlight-icon {
			width: 60px;
			height: 60px;
		}

		.highlight-card h3 {
			font-size: 18px;
		}

		.highlight-card p {
			font-size: 14px;
		}

		.infrastructure-cta {
			padding: 0 15px;
		}

		.infrastructure-link {
			font-size: 12px;
			padding: 10px 16px;
			gap: 6px;
			white-space: normal;
			text-align: center;
			line-height: 1.4;
		}

		.infrastructure-link :global(svg) {
			flex-shrink: 0;
		}
	}
</style>
