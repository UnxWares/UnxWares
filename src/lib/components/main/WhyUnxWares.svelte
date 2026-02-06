<section id="why-unxwares">
	<h2>Ce qui nous différencie</h2>
	<div class="why-content">
		<p class="intro-text">
			Le marché actuel vous force à choisir entre les géants américains (performants mais opaques et soumis au Cloud Act),
			le low-cost (accessible mais sans garantie de qualité ni support) ou la complexité technique (Kubernetes est devenu
			incontournable, mais difficile à maîtriser). Nous proposons une alternative.
		</p>

		<div class="differentiators">
			<div class="diff-item">
				<h3>Infrastructure Souveraine & Managée</h3>
				<p>
					Datacenter à Caen, infrastructure certifiée CNCF, infogérance incluse. Nous développons nos propres
					technologies d'orchestration pour maîtriser performance et coûts, sans dépendance à des licences propriétaires.
				</p>
			</div>

			<div class="diff-item">
				<h3>Expertise Technique Rare</h3>
				<p>
					Développement et conseil sur les néo-langages (Rust, Go, Zig) en pénurie critique sur le marché.
					Accompagnement des entreprises dans leur transition vers le Cloud Native avec une équipe qui comprend
					vraiment ces technologies.
				</p>
			</div>

			<div class="diff-item">
				<h3>Transparence & Prix Justes</h3>
				<p>
					Documentation publique de notre infrastructure, tarification forfaitaire sans frais cachés,
					technologies et choix techniques expliqués. Pas de marketing trompeur, juste de la technique solide.
				</p>
			</div>

			<div class="diff-item">
				<h3>Vision Open Source</h3>
				<p>
					Notre modèle s'inspire d'Odoo : le code sera libre pour l'apprentissage et les petits projets,
					les entreprises paient pour l'infogérance et le support SLA. La communauté contribue et audite,
					créant un cercle vertueux de qualité et de sécurité.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	#why-unxwares{
		margin: 0;
	}
	#why-unxwares h2{
		text-align: center;
		font-size: 28px;
		font-weight: 600;
		margin-bottom: 25px;
	}
	@media (max-width: 768px) {
		#why-unxwares h2{
			font-size: 24px;
			margin-bottom: 20px;
		}
	}
	.why-content{
		display: flex;
		flex-direction: column;
		gap: 35px;
	}
	.intro-text{
		text-align: center;
		font-size: 16px;
		line-height: 1.8;
		color: #5a5a5a;
		margin: 0 auto 20px auto;
		max-width: 850px;
	}
	.differentiators{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
	@media (max-width: 768px) {
		.differentiators{
			grid-template-columns: 1fr;
			gap: 25px;
		}
	}
	.diff-item{
		padding: 30px;
		background-color: #fafbfc;
		border-radius: 10px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
	}
	.diff-item:hover{
		border-color: #050c9c;
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.08);
	}
	.diff-item h3{
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #1a1a1a;
	}
	.diff-item p{
		font-size: 15px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0;
		text-align: left;
	}
</style>
