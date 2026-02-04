<section class="unxwares-cloud">
	<div class="section-header">
		<i class="bi bi-cloud-fill"></i>
		<h2>UnxWares Cloud</h2>
	</div>
	<p class="intro">
		<strong>UnxWares Cloud</strong> est notre solution d'hébergement souverain, basée sur une infrastructure
		professionnelle située en Normandie. Nous proposons des solutions clés en main et sur-mesure,
		adaptées à tous les besoins et tous les budgets.
	</p>

	<div class="features-grid">
		<div class="feature-card">
			<i class="bi bi-server"></i>
			<h3>Infrastructure professionnelle</h3>
			<p>
				Datacenter en Normandie (Caen) avec serveurs HPE ProLiant et équipements réseau Fortinet
				et MikroTik. Réseau 10 Gb/s fibre OM4 pour des performances optimales.
			</p>
		</div>

		<div class="feature-card">
			<i class="bi bi-hdd-rack"></i>
			<h3>Trois gammes de services</h3>
			<ul>
				<li><strong>Services</strong> : hébergement Kubernetes pour tous types d'applications</li>
				<li><strong>WebDB</strong> : bases de données et sites lourds (Threadripper + NVMe)</li>
				<li><strong>Games</strong> : serveurs de jeux haute performance (Ryzen 9 9900X)</li>
			</ul>
		</div>

		<div class="feature-card">
			<i class="bi bi-shield-lock"></i>
			<h3>Sécurité et conformité</h3>
			<p>
				Conformité RGPD, données hébergées en France, sauvegardes multi-niveaux (Longhorn +
				Infomaniak Swiss Backup + Proxmox Backup). SLA de 99,5%.
			</p>
		</div>

		<div class="feature-card">
			<i class="bi bi-recycle"></i>
			<h3>Engagement écologique</h3>
			<p>
				Matériel reconditionné récent (moins de 10 ans) pour réduire l'empreinte carbone tout
				en maintenant des performances professionnelles.
			</p>
		</div>
	</div>

	<div class="tech-stack">
		<h3>Technologies utilisées</h3>
		<div class="tech-badges">
			<span class="badge">Proxmox</span>
			<span class="badge">Kubernetes</span>
			<span class="badge">Grafana</span>
			<span class="badge">Loki</span>
			<span class="badge">Helm</span>
			<span class="badge">ArgoCD</span>
		</div>
	</div>

	<div class="cta-buttons">
		<a href="/datacenter" class="btn-primary">
			<i class="bi bi-diagram-3"></i> Découvrir notre infrastructure
		</a>
	</div>
</section>

<style>
	.unxwares-cloud {
		margin: 40px 0;
		padding: 30px;
		background: linear-gradient(135deg, rgba(13, 110, 253, 0.05) 0%, rgba(13, 110, 253, 0.02) 100%);
		border-radius: 15px;
		border-left: 4px solid #0d6efd;
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 20px;
	}

	.section-header i {
		font-size: 32px;
		color: #0d6efd;
	}

	.section-header h2 {
		margin: 0;
		color: #0d6efd;
		font-size: 28px;
	}

	.intro {
		text-align: justify;
		line-height: 1.8;
		margin-bottom: 25px;
		font-size: 16px;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
		margin: 30px 0;
	}

	.feature-card {
		background: white;
		padding: 25px;
		border-radius: 10px;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 5px 20px rgba(13, 110, 253, 0.2);
	}

	.feature-card i {
		font-size: 36px;
		color: #0d6efd;
		margin-bottom: 15px;
		display: block;
	}

	.feature-card h3 {
		margin: 10px 0 15px 0;
		color: #050c9c;
		font-size: 18px;
	}

	.feature-card p, .feature-card ul {
		margin: 0;
		color: #666;
		font-size: 14px;
		line-height: 1.6;
	}

	.feature-card ul {
		padding-left: 20px;
	}

	.feature-card li {
		margin: 8px 0;
	}

	.tech-stack {
		margin: 30px 0;
		padding: 20px;
		background: white;
		border-radius: 10px;
		text-align: center;
	}

	.tech-stack h3 {
		margin: 0 0 20px 0;
		color: #050c9c;
	}

	.tech-badges {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		justify-content: center;
	}

	.badge {
		background: #0d6efd;
		color: white;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 14px;
		font-weight: 600;
	}

	.cta-buttons {
		display: flex;
		justify-content: center;
		margin-top: 30px;
		gap: 15px;
		flex-wrap: wrap;
	}

	.btn-primary {
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
		background-color: #0d6efd;
		font-family: Gabarito, Poppins, sans-serif;
	}

	.btn-primary:hover {
		transform: scale(0.95);
	}

	.btn-primary:focus {
		outline: none;
		box-shadow: 0 0 0 2px white, 0 0 0 4px #0d6efd;
	}

	.btn-primary i {
		margin-right: 8px;
	}

	@media (max-width: 768px) {
		.unxwares-cloud {
			padding: 20px;
		}

		.section-header h2 {
			font-size: 22px;
		}

		.section-header i {
			font-size: 26px;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>