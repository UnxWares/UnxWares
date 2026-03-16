<script>
	import { t } from 'svelte-i18n';
	import { theme } from '$lib/stores/theme';

	$: logoBase = $theme === 'dark' ? '/images/partners/dark' : '/images/partners/white';
</script>

<section id="tech-logos">
	<h2>{$t('techlogos.title')}</h2>
	<p class="logos-intro">
		{$t('techlogos.intro')}
	</p>
	<div class="logos-grid">
		<figure class="logo-item">
			<img src="{logoBase}/hp.png" alt="HP" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/hpe.png" alt="HPE" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/fortinet.png" alt="Fortinet" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/mikrotik.png" alt="MikroTik" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/kubernetes.png" alt="Kubernetes" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/docker.png" alt="Docker" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/proxmox.png" alt="Proxmox" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/postgres.png" alt="PostgreSQL" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/rust.png" alt="Rust" />
		</figure>
		<figure class="logo-item">
			<img src="{logoBase}/go.png" alt="Go" />
		</figure>
	</div>
</section>

<style>
	#tech-logos{
		margin: 0;
		padding: 25px 40px;
		background-color: var(--bg-secondary);
		border-radius: 12px;
	}
	@media (max-width: 768px) {
		#tech-logos{
			margin: 0;
			padding: 20px 30px;
		}
	}
	#tech-logos h2{
		text-align: center;
		margin: 0 0 12px 0;
		font-size: 28px;
	}
	@media (max-width: 768px) {
		#tech-logos h2{
			font-size: 22px;
		}
	}
	.logos-intro{
		text-align: center;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0 auto 40px auto;
		max-width: 650px;
	}
	.logos-grid{
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		align-items: center;
		justify-content: center;
	}
	@media (max-width: 1024px) {
		.logos-grid{
			gap: 25px;
		}
	}
	@media (max-width: 768px) {
		.logos-grid{
			gap: 20px;
		}
	}
	.logo-item{
		width: 140px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		margin: 0;
		transition: all 0.3s ease;
	}
	@media (max-width: 1024px) {
		.logo-item{
			width: 130px;
		}
	}
	@media (max-width: 768px) {
		.logo-item{
			width: 120px;
			height: 50px;
		}
	}
	@media (max-width: 480px) {
		.logo-item{
			width: 110px;
		}
	}
	.logo-item:hover{
		transform: scale(1.1);
	}
	.logo-item img{
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
		filter: grayscale(100%) opacity(0.6);
		transition: all 0.3s ease;
	}
	.logo-item:hover img{
		filter: grayscale(0%) opacity(1);
	}
</style>
