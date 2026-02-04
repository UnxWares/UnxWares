<section class="what-is-unxwares">
	<div class="section-header">
		<i class="bi bi-info-circle"></i>
		<h2>Qu'est-ce qu'UnxWares ?</h2>
	</div>
	<p>
		<strong>UnxWares</strong> est une entreprise française de développement et d'hébergement informatique,
		implantée en Normandie avec un centre de données à Caen. Nous sommes nés de la volonté de deux
		passionnés de technologie qui aspiraient à créer une alternative souveraine, transparente et éthique
		dans le domaine de l'hébergement et du développement.
	</p>
	<p>
		Notre mission est simple : offrir des solutions techniques de qualité professionnelle, accessibles
		à tous, même avec un budget limité, tout en maintenant une exigence d'excellence et de transparence
		dans toutes nos prestations.
	</p>
	<div class="key-values">
		<div class="value-card">
			<i class="bi bi-shield-check"></i>
			<h3>Souveraineté</h3>
			<p>Hébergement en France, conformité RGPD, données maîtrisées</p>
		</div>
		<div class="value-card">
			<i class="bi bi-transparency"></i>
			<h3>Transparence</h3>
			<p>Infrastructure documentée, prix clairs, technologies ouvertes</p>
		</div>
		<div class="value-card">
			<i class="bi bi-gear-fill"></i>
			<h3>Excellence technique</h3>
			<p>Fondée par des techos passionnés, pour des techos exigeants</p>
		</div>
	</div>
</section>

<style>
	.what-is-unxwares {
		margin: 40px 0;
		padding: 30px;
		background: linear-gradient(135deg, rgba(5, 12, 156, 0.05) 0%, rgba(5, 12, 156, 0.02) 100%);
		border-radius: 15px;
		border-left: 4px solid #050c9c;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
	}

	.section-header i {
		font-size: 32px;
		color: #050c9c;
	}

	.section-header h2 {
		margin: 0;
		color: #050c9c;
		font-size: 28px;
	}

	.what-is-unxwares p {
		text-align: justify;
		line-height: 1.8;
		margin-bottom: 15px;
	}

	.key-values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin-top: 30px;
	}

	.value-card {
		background: white;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		text-align: center;
	}

	.value-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 20px rgba(5, 12, 156, 0.2);
	}

	.value-card i {
		font-size: 40px;
		color: #050c9c;
		margin-bottom: 15px;
	}

	.value-card h3 {
		margin: 10px 0;
		color: #050c9c;
		font-size: 20px;
	}

	.value-card p {
		margin: 0;
		color: #666;
		font-size: 14px;
		text-align: center;
	}

	@media (max-width: 768px) {
		.what-is-unxwares {
			padding: 20px;
		}

		.section-header h2 {
			font-size: 22px;
		}

		.section-header i {
			font-size: 26px;
		}

		.key-values {
			grid-template-columns: 1fr;
		}
	}
</style>