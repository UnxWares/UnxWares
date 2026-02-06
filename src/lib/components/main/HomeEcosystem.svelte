<section class="home-ecosystem">
	<div class="section-header">
		<i class="bi bi-layers-fill"></i>
		<h2>L'Écosystème UnxWares</h2>
	</div>
	<p class="intro">
		UnxWares ne se limite pas à l'hébergement et au développement. Nous construisons un ensemble
		cohérent de projets et d'initiatives pour enrichir le paysage numérique libre et souverain.
	</p>

	<div class="projects-grid">
		<a href="" target="_blank" class="project-card vff">
			<div class="card-icon">
				<i class="bi bi-train-freight-front"></i>
			</div>
			<div class="card-content">
				<h3>VFF Project</h3>
				<span class="tag">Communautaire</span>
				<p>
					L'encyclopédie ferroviaire collaborative française de référence.
					Cartographie précise, archives et données ouvertes sur le monde du rail.
				</p>
			</div>
			<div class="card-arrow">
				<i class="bi bi-arrow-right-short"></i>
			</div>
		</a>

		<div class="project-card raiemus">
			<div class="card-icon">
				<i class="bi bi-cpu"></i>
			</div>
			<div class="card-content">
				<h3>Raiemus</h3>
				<span class="tag">Open Source</span>
				<p>
					Un système d'exploitation léger et optimisé pour le RDP (Remote Desktop Protocol),
					pensé pour la performance et la simplicité.
				</p>
			</div>
			<!-- No link yet, simplified -->
		</div>

		<div class="project-card asso">
			<div class="card-icon">
				<i class="bi bi-people"></i>
			</div>
			<div class="card-content">
				<h3>Association OpenSource</h3>
				<span class="tag">Bientôt</span>
				<p>
					Une structure dédiée pour accompagner gratuitement étudiants et indépendants
					dans la concrétisation de leurs projets numériques.
				</p>
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

	.section-header i {
		font-size: 32px;
		color: #333;
	}

	.section-header h2 {
		margin: 0;
		color: #333;
		font-size: 28px;
		text-align: center;
	}

	.intro {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 40px;
		color: #555;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 25px;
	}

	.project-card {
		background: white;
		border-radius: 12px;
		padding: 25px;
		display: flex;
		align-items: flex-start;
		gap: 20px;
		text-decoration: none;
		color: inherit;
		border: 1px solid rgba(0,0,0,0.05);
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0,0,0,0.08);
		border-color: rgba(5, 12, 156, 0.2);
	}

	.card-icon {
		width: 50px;
		height: 50px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
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
		color: #333;
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
		background: #f0f0f0;
		color: #666;
		display: inline-block;
		margin-bottom: 8px;
	}

	.project-card.vff .tag { background: rgba(30, 60, 220, 0.1);  color: #1E3CDC; }
	.project-card.raiemus .tag { background: rgba(80, 120, 255, 0.1); color: #5078FF; }
	.project-card.asso .tag { background: rgba(140, 170, 255, 0.1); color: #8CAAFF; }

	.card-content p {
		margin: 0;
		font-size: 14px;
		color: #666;
		line-height: 1.5;
		text-align: left;
	}

	.card-arrow {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #050c9c;
		font-size: 24px;
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
