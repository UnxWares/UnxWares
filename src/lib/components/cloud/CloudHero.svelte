<script>
	import { t } from 'svelte-i18n';
	import { CloudCheck, SlidersHorizontal } from 'lucide-svelte';
</script>

<section id="cloud-hero">
	<div class="cloud-title">
		<img src="/favicon.png" alt="UnxWares Cloud" />
		<h1>{$t('pages.cloud.h1')}</h1>
	</div>

	<div class="hero-stats">
		<div class="stat-item">
			<div class="stat-number">99.5%</div>
			<div class="stat-label">{$t('cloud_page.hero.stat_availability')}</div>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-item">
			<div class="stat-number">1</div>
			<div class="stat-label">{$t('cloud_page.hero.stat_datacenter')}</div>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-item">
			<div class="stat-number">24/7</div>
			<div class="stat-label">{$t('cloud_page.hero.stat_support')}</div>
		</div>
	</div>

	<p class="tagline">{$t('cloud_page.hero.tagline')}</p>
	<p class="intro">{$t('cloud_page.hero.intro')}</p>

	<div class="hero-buttons">
		<a href="https://www.unxwares.cloud" target="_blank" rel="noopener noreferrer"><CloudCheck size={16} /> {$t('cloud_page.hero.cta_contact')}</a>
		<a href="https://www.unxwares.cloud/config" target="_blank" rel="noopener noreferrer"><SlidersHorizontal size={16} /> {$t('cloud_page.hero.cta_config')}</a>
	</div>
</section>

<style>
	#cloud-hero {
		margin: 0;
	}

	.cloud-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-bottom: 40px;
		font-size: 26px;
	}

	.cloud-title img {
		width: 120px;
		height: 120px;
		transition: transform 0.3s ease;
	}

	.cloud-title img:hover {
		transform: rotate(5deg) scale(1.05);
	}

	.cloud-title h1 {
		margin: 0;
		text-align: center;
		font-weight: 600;
	}

	@media (max-width: 1238px) {
		.cloud-title img {
			width: 100px;
			height: 100px;
		}
	}

	@media (max-width: 1048px) {
		.cloud-title img {
			width: 70px;
			height: 70px;
		}
	}

	@media (max-width: 842px) {
		.cloud-title img {
			width: 50px;
			height: 50px;
		}
	}

	@media (max-width: 658px) {
		.cloud-title img {
			width: 35px;
			height: 35px;
		}
	}

	@media (max-width: 548px) {
		.cloud-title {
			flex-direction: column;
			gap: 15px;
		}

		.cloud-title img {
			width: 80px;
			height: 80px;
		}

		.cloud-title h1 {
			font-size: 24px;
		}
	}

	.tagline {
		font-size: 18px;
		font-style: italic;
		color: var(--text-secondary);
		margin: 0 0 25px 0;
		text-align: center;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.tagline {
			font-size: 16px;
		}
	}

	.hero-stats {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 40px;
		margin: 0 auto 40px auto;
		max-width: 700px;
	}

	.stat-item {
		text-align: center;
	}

	.stat-number {
		font-size: 42px;
		font-weight: 800;
		color: #050c9c;
		line-height: 1;
		margin-bottom: 8px;
	}

	.stat-label {
		font-size: 14px;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.stat-divider {
		width: 1px;
		height: 50px;
		background: linear-gradient(to bottom, transparent, #e8e8e8, transparent);
	}

	@media (max-width: 768px) {
		.hero-stats {
			gap: 25px;
		}

		.stat-number {
			font-size: 36px;
		}

		.stat-label {
			font-size: 13px;
		}

		.stat-divider {
			height: 40px;
		}
	}

	@media (max-width: 548px) {
		.hero-stats {
			flex-direction: column;
			gap: 20px;
		}

		.stat-divider {
			width: 80px;
			height: 1px;
			background: linear-gradient(to right, transparent, #e8e8e8, transparent);
		}

		.stat-number {
			font-size: 32px;
		}
	}

	#cloud-hero p.intro {
		font-size: 16px;
		line-height: 1.8;
		color: var(--text-secondary);
		margin: 0 0 35px 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.hero-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
		margin-top: 35px;
		padding: 0 20px;
	}

	.hero-buttons a {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 12px 28px;
		background: #050c9c;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(5, 12, 156, 0.2);
		max-width: 100%;
		white-space: nowrap;
		box-sizing: border-box;
	}

	.hero-buttons a:hover {
		background: #040a7a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.3);
	}

	.hero-buttons a :global(svg) {
		font-size: 16px;
	}

	@media (max-width: 768px) {
		.hero-buttons {
			padding: 0 30px;
		}

		.hero-buttons a {
			font-size: 14px;
			padding: 11px 24px;
		}
	}

	@media (max-width: 548px) {
		.hero-buttons {
			gap: 15px;
			flex-direction: column;
			align-items: center;
			padding: 0 25px;
		}

		.hero-buttons a {
			padding: 12px 20px;
			font-size: 13px;
			width: 100%;
			max-width: 300px;
			justify-content: center;
		}
	}

	@media (max-width: 420px) {
		.hero-buttons {
			padding: 0 20px;
		}

		.hero-buttons a {
			font-size: 12px;
			padding: 11px 18px;
			gap: 8px;
			white-space: normal;
			text-align: center;
			line-height: 1.3;
		}

		.hero-buttons a :global(svg) {
			flex-shrink: 0;
		}
	}

	@media (max-width: 360px) {
		.hero-buttons {
			padding: 0 15px;
		}

		.hero-buttons a {
			font-size: 11px;
			padding: 10px 14px;
			gap: 6px;
		}

		.hero-buttons a :global(svg) {
			font-size: 13px;
		}
	}
</style>
