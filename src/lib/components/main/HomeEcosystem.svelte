<script>
	import { t } from 'svelte-i18n';
	import { Layers, Train, ArrowRight, Cpu, Users } from 'lucide-svelte';
</script>

<section class="home-ecosystem">
	<div class="section-header">
		<Layers size={32} />
		<h2>{$t('ecosystem.title')}</h2>
	</div>
	<p class="intro">
		{$t('ecosystem.intro')}
	</p>

	<div class="projects-grid">
		<a href="" target="_blank" class="project-card vff">
			<div class="card-icon">
				<Train size={24} />
			</div>
			<div class="card-content">
				<h3>{$t('ecosystem.vff_title')}</h3>
				<span class="tag">{$t('ecosystem.vff_tag')}</span>
				<p>{$t('ecosystem.vff_desc')}</p>
			</div>
			<div class="card-arrow">
				<ArrowRight size={24} />
			</div>
		</a>

		<div class="project-card raiemus">
			<div class="card-icon">
				<Cpu size={24} />
			</div>
			<div class="card-content">
				<h3>{$t('ecosystem.raiemus_title')}</h3>
				<span class="tag">{$t('ecosystem.raiemus_tag')}</span>
				<p>{$t('ecosystem.raiemus_desc')}</p>
			</div>
		</div>

		<div class="project-card asso">
			<div class="card-icon">
				<Users size={24} />
			</div>
			<div class="card-content">
				<h3>{$t('ecosystem.asso_title')}</h3>
				<span class="tag">{$t('ecosystem.asso_tag')}</span>
				<p>{$t('ecosystem.asso_desc')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	.home-ecosystem {
		margin: 0;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
		justify-content: center;
	}

	.section-header :global(svg) {
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}

	.section-header h2 {
		margin: 0;
		font-size: 28px;
		text-align: center;
	}
	@media (max-width: 768px) {
		.section-header h2 {
			font-size: 22px;
		}
	}

	.intro {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 40px;
		color: var(--text-secondary);
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 25px;
	}

	.project-card {
		background: var(--bg-primary);
		border-radius: 12px;
		padding: 25px;
		display: flex;
		align-items: flex-start;
		gap: 20px;
		text-decoration: none;
		color: inherit;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-md);
		border-color: var(--primary);
	}

	.card-icon {
		width: 50px;
		height: 50px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.project-card.vff .card-icon { background: rgba(30, 60, 220, 0.1);  color: #1E3CDC; }
	.project-card.raiemus .card-icon { background: rgba(80, 120, 255, 0.1); color: #5078FF; }
	.project-card.asso .card-icon { background: rgba(140, 170, 255, 0.1); color: #8CAAFF; }

	.card-content {
		flex: 1;
	}

	.card-content h3 {
		margin: 0 0 5px 0;
		font-size: 18px;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.tag {
		font-size: 10px;
		text-transform: uppercase;
		padding: 3px 8px;
		border-radius: 4px;
		font-weight: 700;
		letter-spacing: 0.5px;
		background: var(--bg-secondary);
		color: var(--text-secondary);
		display: inline-block;
		margin-bottom: 8px;
	}

	.project-card.vff .tag { background: rgba(30, 60, 220, 0.1);  color: #1E3CDC; }
	.project-card.raiemus .tag { background: rgba(80, 120, 255, 0.1); color: #5078FF; }
	.project-card.asso .tag { background: rgba(140, 170, 255, 0.1); color: #8CAAFF; }

	.card-content p {
		margin: 0;
		font-size: 14px;
		color: var(--text-secondary);
		line-height: 1.5;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.card-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-text);
		opacity: 0;
		transform: translateX(-10px);
		transition: all 0.3s ease;
	}

	.project-card:hover .card-arrow {
		opacity: 1;
		transform: translateX(0);
	}

	@media (max-width: 768px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
