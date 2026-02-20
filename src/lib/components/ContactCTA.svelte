<script>
	import { t } from 'svelte-i18n';
</script>

<section class="contact-cta">
	<div class="cta-content">
		<h2>{$t('contact_cta.title')}</h2>
		<p>{$t('contact_cta.description')}</p>
		<div class="cta-buttons">
			<a href="/contact" class="btn-primary" data-sveltekit-preload-data="hover">
				<i class="bi bi-envelope-fill"></i>
				{$t('contact_cta.button')}
			</a>
			<a href="https://discord.gg/PPRacEf7yB" class="btn-secondary" target="_blank" rel="noopener noreferrer">
				<i class="bi bi-discord"></i>
				Discord
			</a>
		</div>
	</div>
</section>

<style>
	.contact-cta {
		background: linear-gradient(135deg, #050c9c 0%, #0408b8 100%);
		border-radius: 16px;
		padding: 60px 40px;
		margin: 0 auto;
		max-width: 1000px;
		text-align: center;
		box-shadow: 0 10px 40px rgba(5, 12, 156, 0.2);
	}

	.cta-content h2 {
		color: white;
		font-size: 32px;
		font-weight: 600;
		margin: 0 0 20px 0;
	}

	.cta-content p {
		color: rgba(255, 255, 255, 0.9);
		font-size: 18px;
		line-height: 1.6;
		margin: 0 0 30px 0;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.btn-primary,
	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 15px 35px;
		border-radius: 8px;
		font-size: 16px;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.btn-primary {
		background: white;
		color: #050c9c;
		border: 2px solid white;
	}

	.btn-primary:hover {
		background: transparent;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid rgba(255, 255, 255, 0.5);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: white;
		transform: translateY(-2px);
	}

	.btn-primary i,
	.btn-secondary i {
		font-size: 20px;
	}

	@media (max-width: 768px) {
		.contact-cta {
			padding: 40px 30px;
			margin: 60px auto;
		}

		.cta-content h2 {
			font-size: 26px;
		}

		.cta-content p {
			font-size: 16px;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.btn-primary,
		.btn-secondary {
			width: 80%;
			max-width: 300px;
			justify-content: center;
		}
	}

	@media (max-width: 548px) {
		.contact-cta {
			padding: 30px 20px;
			margin: 40px auto;
		}

		.cta-content h2 {
			font-size: 22px;
		}

		.cta-content p {
			font-size: 15px;
		}

		.btn-primary,
		.btn-secondary {
			padding: 12px 25px;
			font-size: 15px;
		}
	}
</style>
