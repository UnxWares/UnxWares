<section id="our-services">
	<h2>Nos Services</h2>
	<div class="services-container">
		<div class="service-card cloud">
			<div class="service-header">
				<div class="service-icon">
					<i class="bi bi-cloud-fill"></i>
				</div>
				<h3>UnxWares Cloud</h3>
			</div>
			<p class="service-tagline">
				Du cloud sans être un géant. De la souveraineté sans le prix fort.
			</p>
			<div class="service-features">
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Infrastructure Souveraine</strong> – Datacenter à Caen, 100% France, RGPD natif</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Infogérance Incluse</strong> – Nous gérons la maintenance, vous gérez votre métier</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Kubernetes & Cloud Native</strong> – Clusters HA certifiés CNCF, orchestrateur maison</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Prix Transparent</strong> – Forfaitaire, sans frais cachés d'entrée/sortie</span>
				</div>
			</div>
			<p class="service-description">
				Nous proposons des solutions d'hébergement prêtes à l'emploi et sur-mesure, de l'infrastructure simple
				aux clusters Kubernetes haute disponibilité. Notre infrastructure est pensée pour la durabilité
				et la performance, avec du matériel de qualité et une architecture réseau optimisée.
			</p>
			<a href="/datacenter" class="service-link">
				Découvrir notre infrastructure <i class="bi bi-arrow-right"></i>
			</a>
		</div>

		<div class="service-card studio">
			<div class="service-header">
				<div class="service-icon">
					<i class="bi bi-code-slash"></i>
				</div>
				<h3>UnxWares Studio</h3>
			</div>
			<p class="service-tagline">
				Du logiciel sans renier la souveraineté. De l'expertise sans le TJM prohibitif.
			</p>
			<div class="service-features">
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Technologies Modernes</strong> – Rust, Go, Zig : les langages de demain</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Développeurs Certifiés</strong> – Équipe interne et freelances qualifiés</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Gestion Complète</strong> – De la conception au déploiement, nous gérons tout</span>
				</div>
				<div class="feature">
					<i class="bi bi-check-circle-fill"></i>
					<span><strong>Éthique & Qualité</strong> – Rémunération juste des développeurs, code de qualité</span>
				</div>
			</div>
			<p class="service-description">
				Création complète de vos projets : sites web, logiciels, progiciels, APIs, applications et jeux vidéo.
				Nous collaborons avec une équipe interne exceptionnelle et des développeurs indépendants certifiés
				que nous rémunérons justement. Notre expertise sur les néo-langages nous permet d'accompagner
				les entreprises dans leur modernisation technologique avec des solutions performantes et sécurisées.
			</p>
			<a href="/uw-studio" class="service-link">
				Découvrir nos projets <i class="bi bi-arrow-right"></i>
			</a>
		</div>
	</div>
</section>

<style>
	#our-services{
		margin: 0;
	}
	#our-services h2{
		text-align: center;
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 50px;
	}
	@media (max-width: 768px) {
		#our-services h2{
			font-size: 24px;
			margin-bottom: 35px;
		}
	}
	.services-container{
		display: grid;
		grid-template-columns: 1fr;
		gap: 40px;
	}
	.service-card{
		padding: 40px 35px;
		border: 1px solid #e8e8e8;
		border-radius: 12px;
		transition: all 0.3s ease;
		background-color: #ffffff;
	}
	.service-card:hover{
		transform: translateY(-3px);
		box-shadow: 0 10px 25px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}
	.service-header{
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 15px;
	}
	.service-icon{
		width: 50px;
		height: 50px;
		border-radius: 10px;
		background-color: #f0f2ff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.service-icon i{
		font-size: 24px;
		color: #050c9c;
	}
	.service-card h3{
		font-size: 22px;
		font-weight: 600;
		margin: 0;
		color: #1a1a1a;
	}
	.service-tagline{
		font-size: 16px;
		font-style: italic;
		color: #050c9c;
		margin: 0 0 25px 0;
		line-height: 1.6;
	}
	.service-features{
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 25px;
	}
	.feature{
		display: flex;
		align-items: flex-start;
		gap: 12px;
	}
	.feature i{
		color: #050c9c;
		font-size: 16px;
		margin-top: 3px;
		flex-shrink: 0;
	}
	.feature span{
		font-size: 14px;
		line-height: 1.7;
		color: #4a4a4a;
	}
	.service-description{
		font-size: 15px;
		line-height: 1.8;
		color: #4a4a4a;
		margin: 0 0 25px 0;
		text-align: left;
		padding-top: 20px;
		border-top: 1px solid #f0f0f0;
	}
	.service-link{
		display: inline-flex;
		align-items: center;
		gap: 8px;
		color: #050c9c;
		text-decoration: none;
		font-weight: 600;
		font-size: 15px;
		transition: gap 0.2s ease;
	}
	.service-link:hover{
		gap: 12px;
	}
	.service-link i{
		font-size: 14px;
	}
</style>
