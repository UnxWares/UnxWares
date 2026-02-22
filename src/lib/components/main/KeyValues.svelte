<script>
	import { ShieldCheck, Eye, Headphones, Banknote } from 'lucide-svelte';
</script>

<section id="key-values">
	<div class="values-grid">
		<div class="value-item">
			<ShieldCheck size={36} />
			<h3>Souveraineté Garantie</h3>
			<p>Infrastructure 100% française hébergée à Caen, indépendante des GAFAM et du Cloud Act.</p>
		</div>
		<div class="value-item">
			<Eye size={36} />
			<h3>Transparence Totale</h3>
			<p>Documentation publique de notre infrastructure, technologies et choix techniques.</p>
		</div>
		<div class="value-item">
			<Headphones size={36} />
			<h3>Support Humain</h3>
			<p>Des techniciens passionnés qui comprennent vos besoins, pas des réponses automatisées.</p>
		</div>
		<div class="value-item">
			<Banknote size={36} />
			<h3>Prix Justes</h3>
			<p>Tarification forfaitaire claire basée sur les coûts réels, sans frais cachés.</p>
		</div>
	</div>
</section>

<style>
	#key-values{
		margin: 70px 0;
	}
	.values-grid{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
	@media (max-width: 768px) {
		.values-grid{
			grid-template-columns: 1fr;
			gap: 25px;
		}
		#key-values{
			margin: 50px 0;
		}
	}
	.value-item{
		text-align: center;
		padding: 30px 20px;
	}
	.value-item :global(svg){
		color: #050c9c;
		margin-bottom: 15px;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	.value-item h3{
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #1a1a1a;
	}
	.value-item p{
		font-size: 14px;
		line-height: 1.6;
		color: #4a4a4a;
		margin: 0;
	}
</style>
