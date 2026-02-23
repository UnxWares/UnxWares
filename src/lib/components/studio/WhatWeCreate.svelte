<script>
	import { t } from 'svelte-i18n';
	import { Palette, Globe, Server, Monitor, Smartphone, Gamepad2, Settings } from 'lucide-svelte';
</script>

<section id="what-we-create">
	<div class="section-title">
		<Palette size={32} />
		<h2>{$t('studio_page.what.title')}</h2>
	</div>

	<p class="intro-text">{$t('studio_page.what.intro')}</p>

	<div class="creations-grid">
		<div class="creation-card">
			<div class="creation-icon">
				<Globe size={28} />
			</div>
			<h3>{$t('studio_page.what.web_title')}</h3>
			<p>{$t('studio_page.what.web_desc')}</p>
		</div>

		<div class="creation-card">
			<div class="creation-icon">
				<Server size={28} />
			</div>
			<h3>{$t('studio_page.what.backend_title')}</h3>
			<p>{$t('studio_page.what.backend_desc')}</p>
		</div>

		<div class="creation-card">
			<div class="creation-icon">
				<Monitor size={28} />
			</div>
			<h3>{$t('studio_page.what.software_title')}</h3>
			<p>{$t('studio_page.what.software_desc')}</p>
		</div>

		<div class="creation-card">
			<div class="creation-icon">
				<Smartphone size={28} />
			</div>
			<h3>{$t('studio_page.what.mobile_title')}</h3>
			<p>{$t('studio_page.what.mobile_desc')}</p>
		</div>

		<div class="creation-card">
			<div class="creation-icon">
				<Gamepad2 size={28} />
			</div>
			<h3>{$t('studio_page.what.games_title')}</h3>
			<p>{$t('studio_page.what.games_desc')}</p>
		</div>

		<div class="creation-card">
			<div class="creation-icon">
				<Settings size={28} />
			</div>
			<h3>{$t('studio_page.what.infra_title')}</h3>
			<p>{$t('studio_page.what.infra_desc')}</p>
		</div>
	</div>
</section>

<style>
	#what-we-create {
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
		color: var(--text-secondary);
		margin: 0 auto 50px auto;
		max-width: 850px;
	}

	.creations-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
	}

	@media (max-width: 1024px) {
		.creations-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.creations-grid {
			grid-template-columns: 1fr;
		}
	}

	.creation-card {
		background: var(--bg-primary);
		padding: 30px;
		border-radius: 12px;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
		text-align: center;
	}

	.creation-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.creation-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 20px auto;
		background: var(--bg-tertiary);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.creation-icon :global(svg) {
		color: #050c9c;
	}

	.creation-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: var(--text-primary);
	}

	.creation-card p {
		font-size: 14px;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}
</style>
