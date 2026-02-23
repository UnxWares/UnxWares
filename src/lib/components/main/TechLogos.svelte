<script>
	import { t } from 'svelte-i18n';
	import { theme } from '$lib/stores/theme';
</script>

<section id="tech-logos">
	<h2>{$t('techlogos.title')}</h2>
	<p class="logos-intro">
		{$t('techlogos.intro')}
	</p>
	<div class="logos-grid">
		<figure class="logo-item">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png" alt="HP" />
		</figure>
		<figure class="logo-item">
			{#if $theme === 'dark'}
				<img src="https://companieslogo.com/img/orig/HPE_BIG.D-edfece68.png" alt="HPE" />
			{:else}
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Hewlett_Packard_Enterprise_logo.svg/2560px-Hewlett_Packard_Enterprise_logo.svg.png" alt="HPE" />
			{/if}
		</figure>
		<figure class="logo-item">
			{#if $theme === 'dark'}
				<img src="https://companieslogo.com/img/orig/FTNT_BIG.D-c3df2045.png" alt="Fortinet" />
			{:else}
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/2560px-Fortinet_logo.svg.png" alt="Fortinet" />
			{/if}
		</figure>
		<figure class="logo-item mikrotik-logo">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/MikroTik_Logo_%282022%29.svg/1280px-MikroTik_Logo_%282022%29.svg.png" alt="MikroTik" />
		</figure>
		<figure class="logo-item">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/2109px-Kubernetes_logo_without_workmark.svg.png" alt="Kubernetes" />
		</figure>
		<figure class="logo-item">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2560px-Docker_%28container_engine%29_logo.svg.png" alt="Docker" />
		</figure>
		<figure class="logo-item">
			{#if $theme === 'dark'}
				<img src="https://newsletter.proxmox.com/uploads/Proxmox-logo-white-orange-800_1.png" alt="Proxmox" />
			{:else}
				<img src="https://www.proxmox.com/images/proxmox/Proxmox-logo-800.png" alt="Proxmox" />
			{/if}
		</figure>
		<figure class="logo-item">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" alt="PostgreSQL" />
		</figure>
		<figure class="logo-item">
			{#if $theme === 'dark'}
				<img src="https://www.nicepng.com/png/full/34-348422_community-spotlight-rust-programming-language.png" alt="Rust" />
			{:else}
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/2048px-Rust_programming_language_black_logo.svg.png" alt="Rust" />
			{/if}
		</figure>
		<figure class="logo-item">
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/2560px-Go_Logo_Blue.svg.png" alt="Go" />
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
	:global([data-theme="dark"]) .logo-item img{
		filter: grayscale(100%) opacity(0.6);
	}
	:global([data-theme="dark"]) .logo-item:hover img{
		filter: grayscale(0%) opacity(1);
	}
	:global([data-theme="dark"]) .mikrotik-logo img{
		filter: grayscale(100%) opacity(0.6) brightness(0) invert(1);
	}
	:global([data-theme="dark"]) .mikrotik-logo:hover img{
		filter: grayscale(0%) opacity(1) brightness(0) invert(1);
	}
</style>
