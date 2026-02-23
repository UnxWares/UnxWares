<script>
	import { t } from 'svelte-i18n';
	import { Rocket, ArrowRight } from 'lucide-svelte';
</script>

<section id="cloud-cta">
	<div class="cta-container">
		<div class="cta-left">
			<div class="cta-icon">
				<Rocket size={28} color="white" />
			</div>
			<div class="cta-text">
				<h3>{$t('cloud_page.cta.title')}</h3>
				<p>{$t('cloud_page.cta.desc')}</p>
			</div>
		</div>
		<div class="cta-right">
			<a href="https://www.unxwares.cloud" target="_blank" rel="noopener noreferrer" class="cta-button">
				{$t('cloud_page.cta.button')}
				<ArrowRight size={16} />
			</a>
		</div>
	</div>
</section>

<style>
	#cloud-cta {
		margin: 80px 0 0 0;
		padding: 0;
	}

	.cta-container {
		background: var(--bg-primary);
		border: 2px solid #050c9c;
		border-radius: 12px;
		padding: 40px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 40px;
		transition: all 0.3s ease;
	}

	.cta-container:hover {
		box-shadow: 0 4px 20px rgba(5, 12, 156, 0.15);
	}

	.cta-left {
		flex: 1;
		display: flex;
		gap: 25px;
		align-items: flex-start;
	}

	.cta-icon {
		width: 60px;
		height: 60px;
		background: #050c9c;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.cta-text {
		flex: 1;
	}

	h3 {
		font-size: 22px;
		font-weight: 600;
		color: var(--text-primary);
		margin: 0 0 12px 0;
		line-height: 1.3;
	}

	p {
		font-size: 15px;
		color: var(--text-secondary);
		line-height: 1.7;
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.cta-right {
		flex-shrink: 0;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 14px 28px;
		background: #050c9c;
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		transition: all 0.3s ease;
		white-space: nowrap;
	}

	.cta-button:hover {
		background: #040a7a;
		transform: translateX(5px);
	}

	.cta-button :global(svg) {
		transition: transform 0.3s ease;
	}

	.cta-button:hover :global(svg) {
		transform: translateX(3px);
	}

	@media (max-width: 968px) {
		.cta-container {
			flex-direction: column;
			align-items: stretch;
			text-align: center;
		}

		.cta-left {
			flex-direction: column;
			align-items: center;
		}

		.cta-text {
			text-align: center;
		}

		p {
			text-align: center;
		}

		.cta-right {
			display: flex;
			justify-content: center;
		}
	}

	@media (max-width: 548px) {
		.cta-container {
			padding: 30px 25px;
		}

		.cta-icon {
			width: 50px;
			height: 50px;
		}

		h3 {
			font-size: 19px;
		}

		p {
			font-size: 14px;
		}

		.cta-button {
			width: 100%;
			justify-content: center;
			padding: 12px 24px;
		}
	}

	@media (max-width: 380px) {
		.cta-container {
			padding: 25px 20px;
			gap: 25px;
		}

		.cta-left {
			gap: 20px;
		}

		h3 {
			font-size: 17px;
		}

		p {
			font-size: 13px;
		}

		.cta-button {
			font-size: 14px;
			padding: 10px 20px;
		}
	}
</style>
