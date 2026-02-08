<script>
	import { page } from '$app/stores';
	import { t } from 'svelte-i18n';
</script>

<svelte:head>
	<title>404 - Page introuvable | UnxWares</title>
</svelte:head>

<section class="error-hero">
	<div class="error-content">
		<div class="error-icon">
			<i class="bi bi-exclamation-triangle-fill"></i>
		</div>

		<div class="error-number">404</div>
		<h1>Page introuvable</h1>

		<p class="error-message">
			Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
		</p>

		<div class="error-actions">
			<a href="/" class="btn-primary">
				<i class="bi bi-house-fill"></i>
				Retour à l'accueil
			</a>
			<a href="/contact" class="btn-secondary">
				<i class="bi bi-envelope-fill"></i>
				Nous contacter
			</a>
		</div>
	</div>
</section>

<section class="suggestions-section">
	<p class="suggestions-title">Peut-être cherchiez-vous :</p>
	<div class="suggestions-grid">
		<a href="/uw-cloud" class="suggestion-card">
			<i class="bi bi-cloud"></i>
			<span>UnxWares Cloud</span>
		</a>
		<a href="/uw-studio" class="suggestion-card">
			<i class="bi bi-code-slash"></i>
			<span>UnxWares Studio</span>
		</a>
		<a href="/datacenter" class="suggestion-card">
			<i class="bi bi-diagram-3"></i>
			<span>Notre Infrastructure</span>
		</a>
		<a href="/whoarewe" class="suggestion-card">
			<i class="bi bi-people"></i>
			<span>Qui sommes-nous</span>
		</a>
	</div>
</section>

<style>
	.error-hero {
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 80px 20px 60px;
		margin: 0;
	}

	.error-content {
		max-width: 800px;
		width: 100%;
		text-align: center;
	}

	.error-icon {
		margin: 0 auto 30px;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.error-icon i {
		font-size: 80px;
		color: #050c9c;
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.error-number {
		font-size: 120px;
		font-weight: 900;
		color: #050c9c;
		margin: 0 0 20px 0;
		line-height: 1;
		font-family: 'Poppins', sans-serif;
	}

	.error-hero h1 {
		font-size: 42px;
		font-weight: 700;
		color: #1a1a1a;
		margin: 0 0 25px 0;
		font-family: 'Poppins', sans-serif;
	}

	.error-message {
		font-size: 18px;
		color: #666;
		line-height: 1.8;
		margin: 0 0 40px 0;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.error-actions {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 40px;
	}

	.btn-primary,
	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 12px 28px;
		border-radius: 8px;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn-primary {
		background: #050c9c;
		color: white;
		box-shadow: 0 2px 8px rgba(5, 12, 156, 0.2);
	}

	.btn-primary:hover {
		background: #040a7a;
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.3);
	}

	.btn-secondary {
		background: transparent;
		color: #050c9c;
		border: 2px solid #050c9c;
	}

	.btn-secondary:hover {
		background: #050c9c;
		color: white;
		transform: translateY(-2px);
	}

	.suggestions-section {
		padding: 60px 20px 80px;
		margin: 0;
		background: #f8f9fa;
	}

	.suggestions-title {
		font-size: 20px;
		color: #4a4a4a;
		margin: 0 0 30px 0;
		font-weight: 600;
		text-align: center;
		font-family: 'Poppins', sans-serif;
	}

	.suggestions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 20px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.suggestion-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		padding: 30px 20px;
		background: white;
		color: #050c9c;
		text-decoration: none;
		border-radius: 12px;
		font-size: 16px;
		font-weight: 600;
		transition: all 0.3s ease;
		border: 2px solid transparent;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
	}

	.suggestion-card:hover {
		border-color: #050c9c;
		transform: translateY(-5px);
		box-shadow: 0 4px 16px rgba(5, 12, 156, 0.15);
	}

	.suggestion-card i {
		font-size: 32px;
	}

	@media (max-width: 768px) {
		.error-hero {
			padding: 60px 20px 40px;
			min-height: 60vh;
		}

		.error-icon i {
			font-size: 60px;
		}

		.error-number {
			font-size: 90px;
		}

		.error-hero h1 {
			font-size: 32px;
		}

		.error-message {
			font-size: 16px;
		}

		.suggestions-section {
			padding: 40px 20px 60px;
		}

		.suggestions-grid {
			grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
			gap: 15px;
		}

		.suggestion-card {
			padding: 25px 15px;
			font-size: 14px;
		}

		.suggestion-card i {
			font-size: 28px;
		}
	}

	@media (max-width: 548px) {
		.error-number {
			font-size: 70px;
		}

		.error-hero h1 {
			font-size: 26px;
		}

		.error-actions {
			flex-direction: column;
			width: 100%;
			max-width: 300px;
			margin-left: auto;
			margin-right: auto;
		}

		.btn-primary,
		.btn-secondary {
			width: 100%;
			justify-content: center;
		}

		.suggestions-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
