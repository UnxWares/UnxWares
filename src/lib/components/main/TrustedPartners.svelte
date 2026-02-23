<script>
	import { t } from 'svelte-i18n';
	import { theme } from '$lib/stores/theme';
</script>

<section id="trusted-partners">
	<h2>{$t('partners.title')}</h2>
	<p class="partners-intro">
		{$t('partners.intro')}
	</p>
	<div class="partners-grid">
		<div class="partner-card">
			<div class="partner-logo">
				{#if $theme === 'dark'}
					<img src="https://netario.fr/images/logos/logo_white.svg" alt="Netario" />
				{:else}
					<img src="https://panel-cloud.netario.fr/client/assets/logo_custom.svg" alt="Netario" />
				{/if}
			</div>
			<p class="partner-desc">{$t('partners.netario_desc')}</p>
		</div>

		<div class="partner-card">
			<div class="partner-logo">
				<img src="https://www.teysalpi.ch/wp/wp-content/uploads/2025/10/vertical-blue.png" alt="Infomaniak" />
			</div>
			<p class="partner-desc">{$t('partners.infomaniak_desc')}</p>
		</div>

		<div class="partner-card">
			<div class="partner-logo">
				<img src="https://www.bouyguestelecom-pro.fr/media/logo/stores/1/logo-bte_3.png" alt="Bouygues Entreprise" />
			</div>
			<p class="partner-desc">{$t('partners.bouygues_desc')}</p>
		</div>

		<div class="partner-card">
			<div class="partner-logo">
				<img src="https://www.bouyguestelecom-solution.fr/wp-content/uploads/2025/06/logo-BTBusiness-Solution.png" alt="Bouygues Cyberdéfense" />
			</div>
			<p class="partner-desc">{$t('partners.cyberdefense_desc')}</p>
		</div>
	</div>
</section>

<style>
	#trusted-partners {
		margin: 0;
		padding: 25px 40px;
		background-color: var(--bg-secondary);
		border-radius: 12px;
	}

	@media (max-width: 768px) {
		#trusted-partners {
			margin: 0;
			padding: 20px 30px;
		}
	}

	#trusted-partners h2 {
		text-align: center;
		margin: 0 0 12px 0;
		font-size: 28px;
	}

	@media (max-width: 768px) {
		#trusted-partners h2 {
			font-size: 22px;
		}
	}

	.partners-intro {
		text-align: center;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0 auto 40px auto;
		max-width: 650px;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}

	@media (max-width: 968px) {
		.partners-grid {
			grid-template-columns: 1fr;
			gap: 25px;
		}
	}

	.partner-card {
		background: var(--bg-primary);
		padding: 30px;
		border-radius: 10px;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.partner-card:hover {
		border-color: var(--primary);
		box-shadow: 0 4px 16px rgba(5, 12, 156, 0.1);
		transform: translateY(-3px);
	}

	.partner-logo {
		width: 100%;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.partner-logo img {
		max-width: 180px;
		max-height: 80px;
		object-fit: contain;
		filter: grayscale(100%) opacity(0.7);
		transition: all 0.3s ease;
	}

	.partner-card:hover .partner-logo img {
		filter: grayscale(0%) opacity(1);
	}

	:global([data-theme="dark"]) .partner-logo img {
		filter: grayscale(100%) opacity(0.7);
	}

	:global([data-theme="dark"]) .partner-card:hover .partner-logo img {
		filter: grayscale(0%) opacity(1);
	}

	.partner-desc {
		text-align: center;
		font-size: 14px;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	@media (max-width: 768px) {
		.partner-card {
			padding: 25px;
		}

		.partner-logo {
			height: 70px;
			margin-bottom: 15px;
		}

		.partner-logo img {
			max-width: 150px;
			max-height: 70px;
		}

		.partner-desc {
			font-size: 13px;
		}
	}

	@media (max-width: 480px) {
		.partner-logo {
			height: 60px;
		}

		.partner-logo img {
			max-width: 130px;
			max-height: 60px;
		}
	}
</style>
