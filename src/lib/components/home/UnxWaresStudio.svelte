<section class="unxwares-studio">
	<div class="section-header">
		<i class="bi bi-code-slash"></i>
		<h2>UnxWares Studio</h2>
	</div>
	<p class="intro">
		<strong>UnxWares Studio</strong> est notre division de développement créatif. Nous réalisons vos
		projets numériques de A à Z avec une équipe de passionnés : développeurs internes et freelances
		certifiés, tous rémunérés justement.
	</p>

	<div class="services-grid">
		<div class="service-card">
			<i class="bi bi-globe"></i>
			<h3>Sites web & Applications</h3>
			<p>
				Sites vitrines, e-commerce, applications web responsive et performantes. Technologies
				modernes (Svelte, React, Vue.js) pour une expérience utilisateur optimale.
			</p>
		</div>

		<div class="service-card">
			<i class="bi bi-phone"></i>
			<h3>Applications mobiles</h3>
			<p>
				Développement d'applications natives et cross-platform (iOS, Android) avec React Native,
				Flutter ou solutions natives selon vos besoins.
			</p>
		</div>

		<div class="service-card">
			<i class="bi bi-diagram-3"></i>
			<h3>APIs & Backend</h3>
			<p>
				Conception d'APIs REST ou GraphQL robustes, microservices, architecture cloud-native.
				Node.js, Python, Go selon les besoins du projet.
			</p>
		</div>

		<div class="service-card">
			<i class="bi bi-window-desktop"></i>
			<h3>Logiciels & Progiciels</h3>
			<p>
				Applications desktop multi-plateformes, outils métiers sur-mesure, solutions d'automatisation
				et d'optimisation de processus.
			</p>
		</div>

		<div class="service-card">
			<i class="bi bi-controller"></i>
			<h3>Jeux vidéo</h3>
			<p>
				Développement de jeux vidéo indépendants, prototypes, serious games et expériences
				interactives avec Unity, Unreal ou Godot.
			</p>
		</div>

		<div class="service-card">
			<i class="bi bi-palette"></i>
			<h3>UI/UX Design</h3>
			<p>
				Conception d'interfaces utilisateur modernes et ergonomiques, prototypage, tests
				utilisateurs pour garantir la meilleure expérience.
			</p>
		</div>
	</div>

	<div class="methodology">
		<h3>Notre méthode de travail</h3>
		<div class="method-steps">
			<div class="step">
				<div class="step-number">1</div>
				<h4>Écoute & Analyse</h4>
				<p>Nous prenons le temps de comprendre vos besoins et vos objectifs</p>
			</div>
			<div class="step">
				<div class="step-number">2</div>
				<h4>Conception</h4>
				<p>Design et architecture technique avec validation à chaque étape</p>
			</div>
			<div class="step">
				<div class="step-number">3</div>
				<h4>Développement</h4>
				<p>Réalisation avec méthodes agiles et revues régulières</p>
			</div>
			<div class="step">
				<div class="step-number">4</div>
				<h4>Livraison & Suivi</h4>
				<p>Déploiement, formation et maintenance évolutive</p>
			</div>
		</div>
	</div>

	<div class="team-values">
		<div class="value-item">
			<i class="bi bi-people-fill"></i>
			<div>
				<h4>Équipe passionnée</h4>
				<p>Développeurs internes et freelances certifiés par nos soins</p>
			</div>
		</div>
		<div class="value-item">
			<i class="bi bi-cash-coin"></i>
			<div>
				<h4>Rémunération juste</h4>
				<p>Nous garantissons un salaire équitable à tous nos collaborateurs</p>
			</div>
		</div>
		<div class="value-item">
			<i class="bi bi-clipboard-check"></i>
			<div>
				<h4>Gestion complète</h4>
				<p>Nous gérons tout le projet pour que vous puissiez vous concentrer sur votre métier</p>
			</div>
		</div>
	</div>

	<div class="cta-buttons">
		<a href="/contact" class="btn-primary">
			<i class="bi bi-envelope"></i> Discuter de votre projet
		</a>
		<a href="/portfolio" class="btn-secondary">
			<i class="bi bi-briefcase"></i> Voir nos réalisations
		</a>
	</div>
</section>

<style>
	.unxwares-studio {
		margin: 40px 0;
		padding: 30px;
		background: linear-gradient(135deg, rgba(111, 66, 193, 0.05) 0%, rgba(111, 66, 193, 0.02) 100%);
		border-radius: 15px;
		border-left: 4px solid #6f42c1;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
	}

	.section-header i {
		font-size: 32px;
		color: #6f42c1;
	}

	.section-header h2 {
		margin: 0;
		color: #6f42c1;
		font-size: 28px;
	}

	.intro {
		text-align: justify;
		line-height: 1.8;
		margin-bottom: 25px;
		font-size: 16px;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
		margin: 30px 0;
	}

	.service-card {
		background: white;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.service-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 20px rgba(111, 66, 193, 0.2);
	}

	.service-card i {
		font-size: 36px;
		color: #6f42c1;
		margin-bottom: 15px;
		display: block;
	}

	.service-card h3 {
		margin: 10px 0 15px 0;
		color: #050c9c;
		font-size: 18px;
	}

	.service-card p {
		margin: 0;
		color: #666;
		font-size: 14px;
		line-height: 1.6;
	}

	.methodology {
		margin: 40px 0;
		padding: 30px;
		background: white;
		border-radius: 10px;
	}

	.methodology h3 {
		text-align: center;
		color: #050c9c;
		margin: 0 0 30px 0;
	}

	.method-steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 25px;
	}

	.step {
		text-align: center;
	}

	.step-number {
		width: 50px;
		height: 50px;
		background: #6f42c1;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: bold;
		margin: 0 auto 15px;
	}

	.step h4 {
		margin: 10px 0;
		color: #050c9c;
	}

	.step p {
		margin: 0;
		color: #666;
		font-size: 14px;
		line-height: 1.5;
	}

	.team-values {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
		margin: 30px 0;
	}

	.value-item {
		display: flex;
		align-items: start;
		gap: 15px;
		background: white;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	.value-item i {
		font-size: 32px;
		color: #6f42c1;
		flex-shrink: 0;
	}

	.value-item h4 {
		margin: 0 0 8px 0;
		color: #050c9c;
		font-size: 16px;
	}

	.value-item p {
		margin: 0;
		color: #666;
		font-size: 14px;
		line-height: 1.5;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		margin-top: 30px;
		gap: 15px;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-secondary {
		text-decoration: none;
		border: 0;
		border-radius: 10px;
		font-size: 15px;
		text-transform: uppercase;
		padding: 12px 30px;
		display: inline-block;
		outline: none;
		transition: transform 0.3s ease 0s;
		transform: initial;
		color: #fff;
		font-weight: bold;
		font-family: Gabarito, Poppins, sans-serif;
	}

	.btn-primary {
		background-color: #6f42c1;
	}

	.btn-secondary {
		background-color: #050c9c;
	}

	.btn-primary:hover, .btn-secondary:hover {
		transform: scale(0.95);
	}

	.btn-primary:focus {
		outline: none;
		box-shadow: 0 0 0 2px white, 0 0 0 4px #6f42c1;
	}

	.btn-secondary:focus {
		outline: none;
		box-shadow: 0 0 0 2px white, 0 0 0 4px #050c9c;
	}

	.btn-primary i, .btn-secondary i {
		margin-right: 8px;
	}

	@media (max-width: 768px) {
		.unxwares-studio {
			padding: 20px;
		}

		.section-header h2 {
			font-size: 22px;
		}

		.section-header i {
			font-size: 26px;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.method-steps {
			grid-template-columns: 1fr;
		}

		.team-values {
			grid-template-columns: 1fr;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn-primary, .btn-secondary {
			width: 100%;
			text-align: center;
		}
	}
</style>
