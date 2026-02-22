<script>
	import { t } from 'svelte-i18n';
	import { Folder } from 'lucide-svelte';
</script>

<section id="studio-projects">
	<div class="section-title">
		<Folder size={32} />
		<h2>{$t('studio_page.projects.title')}</h2>
	</div>

	<p class="intro-text">{$t('studio_page.projects.intro')}</p>

	<div class="projects-grid">
		<div class="project-card featured">
			<div class="project-tag">{$t('studio_page.projects.vff_tag')}</div>
			<h3>{$t('studio_page.projects.vff_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.vff_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.vff_tech')}</div>
		</div>

		<div class="project-card featured">
			<div class="project-tag">{$t('studio_page.projects.orchestrator_tag')}</div>
			<h3>{$t('studio_page.projects.orchestrator_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.orchestrator_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.orchestrator_tech')}</div>
		</div>

		<div class="project-card">
			<div class="project-tag">{$t('studio_page.projects.site_tag')}</div>
			<h3>{$t('studio_page.projects.site_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.site_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.site_tech')}</div>
		</div>

		<div class="project-card">
			<div class="project-tag">{$t('studio_page.projects.panel_tag')}</div>
			<h3>{$t('studio_page.projects.panel_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.panel_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.panel_tech')}</div>
		</div>

		<div class="project-card">
			<div class="project-tag">{$t('studio_page.projects.raiemus_tag')}</div>
			<h3>{$t('studio_page.projects.raiemus_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.raiemus_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.raiemus_tech')}</div>
		</div>

		<div class="project-card upcoming">
			<div class="project-tag">{$t('studio_page.projects.game_tag')}</div>
			<h3>{$t('studio_page.projects.game_title')}</h3>
			<p class="project-desc">{$t('studio_page.projects.game_desc')}</p>
			<div class="project-tech">{$t('studio_page.projects.game_tech')}</div>
		</div>
	</div>
</section>

<style>
	#studio-projects {
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
		color: #5a5a5a;
		margin: 0 auto 50px auto;
		max-width: 850px;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 25px;
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}

	.project-card {
		background: white;
		padding: 30px;
		border-radius: 12px;
		border: 2px solid #e8e8e8;
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.project-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.project-card.featured {
		border-color: #050c9c;
		background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
	}

	.project-card.upcoming {
		border-style: dashed;
		opacity: 0.9;
	}

	.project-tag {
		display: inline-block;
		padding: 5px 12px;
		background: #f0f2ff;
		color: #050c9c;
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		border-radius: 6px;
		margin-bottom: 15px;
		width: fit-content;
	}

	.project-card.featured .project-tag {
		background: #050c9c;
		color: white;
	}

	.project-card h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 0 0 15px 0;
		color: #1a1a1a;
	}

	.project-desc {
		font-size: 15px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0 0 20px 0;
		flex: 1;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.project-tech {
		font-size: 13px;
		color: #666;
		padding-top: 20px;
		border-top: 1px solid #f0f0f0;
		font-weight: 500;
	}
</style>
