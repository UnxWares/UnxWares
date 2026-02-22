<script>
	import { t } from 'svelte-i18n';
	import { CodeSquare, Zap, ShieldCheck, Wrench, Network, Hexagon, Box } from 'lucide-svelte';
</script>

<section id="neo-languages">
	<div class="section-title">
		<CodeSquare size={32} color="#050c9c" />
		<h2>{$t('studio_page.neolang.title')}</h2>
	</div>

	<p class="intro-text">{$t('studio_page.neolang.intro')}</p>

	<div class="why-neolang">
		<h3>{$t('studio_page.neolang.why_title')}</h3>
		<p>{$t('studio_page.neolang.why_intro')}</p>

		<div class="advantages">
			<div class="advantage-card">
				<Zap size={28} color="#050c9c" />
				<h4>{$t('studio_page.neolang.perf_title')}</h4>
				<p>{$t('studio_page.neolang.perf_desc')}</p>
			</div>
			<div class="advantage-card">
				<ShieldCheck size={28} color="#050c9c" />
				<h4>{$t('studio_page.neolang.security_title')}</h4>
				<p>{$t('studio_page.neolang.security_desc')}</p>
			</div>
			<div class="advantage-card">
				<Wrench size={28} color="#050c9c" />
				<h4>{$t('studio_page.neolang.modern_title')}</h4>
				<p>{$t('studio_page.neolang.modern_desc')}</p>
			</div>
			<div class="advantage-card">
				<Network size={28} color="#050c9c" />
				<h4>{$t('studio_page.neolang.concurrency_title')}</h4>
				<p>{$t('studio_page.neolang.concurrency_desc')}</p>
			</div>
		</div>
	</div>

	<div class="languages-grid">
		<div class="lang-card rust">
			<div class="lang-header">
				<div class="lang-icon">
					<Hexagon size={24} />
				</div>
				<div class="lang-title-group">
					<h3>{$t('studio_page.neolang.rust_title')}</h3>
					<p class="lang-subtitle">{$t('studio_page.neolang.rust_subtitle')}</p>
				</div>
			</div>
			<p class="lang-desc">{$t('studio_page.neolang.rust_desc')}</p>
			<div class="lang-use">
				<strong>Cas d'usage :</strong> {$t('studio_page.neolang.rust_use')}
			</div>
		</div>

		<div class="lang-card go">
			<div class="lang-header">
				<div class="lang-icon">
					<Box size={24} />
				</div>
				<div class="lang-title-group">
					<h3>{$t('studio_page.neolang.go_title')}</h3>
					<p class="lang-subtitle">{$t('studio_page.neolang.go_subtitle')}</p>
				</div>
			</div>
			<p class="lang-desc">{$t('studio_page.neolang.go_desc')}</p>
			<div class="lang-use">
				<strong>Cas d'usage :</strong> {$t('studio_page.neolang.go_use')}
			</div>
		</div>

		<div class="lang-card zig">
			<div class="lang-header">
				<div class="lang-icon">
					<Zap size={24} />
				</div>
				<div class="lang-title-group">
					<h3>{$t('studio_page.neolang.zig_title')}</h3>
					<p class="lang-subtitle">{$t('studio_page.neolang.zig_subtitle')}</p>
				</div>
			</div>
			<p class="lang-desc">{$t('studio_page.neolang.zig_desc')}</p>
			<div class="lang-use">
				<strong>Cas d'usage :</strong> {$t('studio_page.neolang.zig_use')}
			</div>
		</div>
	</div>
</section>

<style>
	#neo-languages {
		margin: 0;
	}

	.section-title {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 25px;
	}

	.section-title :global(svg) {
		animation: float 3s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}

	.section-title h2 {
		text-align: center;
		margin: 0;
		font-size: 28px;
	}

	@media (max-width: 768px) {
		.section-title h2 {
			font-size: 22px;
		}
	}

	.intro-text {
		text-align: center;
		font-size: 16px;
		line-height: 1.8;
		color: #5a5a5a;
		margin: 0 auto 50px auto;
		max-width: 850px;
	}

	.why-neolang {
		background: #f8f9fa;
		padding: 40px;
		border-radius: 12px;
		margin-bottom: 50px;
	}

	.why-neolang h3 {
		font-size: 22px;
		font-weight: 600;
		margin: 0 0 15px 0;
		text-align: center;
		color: #1a1a1a;
	}

	.why-neolang > p {
		text-align: center;
		margin: 0 0 35px 0;
		color: #4a4a4a;
		font-size: 15px;
	}

	.advantages {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}

	@media (max-width: 768px) {
		.advantages {
			grid-template-columns: 1fr;
		}

		.why-neolang {
			padding: 30px 20px;
		}
	}

	.advantage-card {
		background: white;
		padding: 25px;
		border-radius: 10px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
	}

	.advantage-card:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.advantage-card :global(svg) {
		margin-bottom: 15px;
		display: block;
	}

	.advantage-card h4 {
		font-size: 17px;
		font-weight: 600;
		margin: 0 0 10px 0;
		color: #1a1a1a;
	}

	.advantage-card p {
		font-size: 14px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.languages-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 25px;
		margin-top: 40px;
	}

	@media (max-width: 1024px) {
		.languages-grid {
			grid-template-columns: 1fr;
		}
	}

	.lang-card {
		background: white;
		padding: 35px;
		border-radius: 12px;
		border: 2px solid #e8e8e8;
		transition: all 0.3s ease;
	}

	.lang-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.lang-card.rust {
		border-color: #CE412B;
	}

	.lang-card.rust:hover {
		box-shadow: 0 8px 20px rgba(206, 65, 43, 0.2);
	}

	.lang-card.go {
		border-color: #00ADD8;
	}

	.lang-card.go:hover {
		box-shadow: 0 8px 20px rgba(0, 173, 216, 0.2);
	}

	.lang-card.zig {
		border-color: #F7A41D;
	}

	.lang-card.zig:hover {
		box-shadow: 0 8px 20px rgba(247, 164, 29, 0.2);
	}

	.lang-header {
		display: flex;
		align-items: flex-start;
		gap: 15px;
		margin-bottom: 20px;
	}

	.lang-icon {
		width: 50px;
		height: 50px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.rust .lang-icon {
		background: rgba(206, 65, 43, 0.1);
		color: #CE412B;
	}

	.go .lang-icon {
		background: rgba(0, 173, 216, 0.1);
		color: #00ADD8;
	}

	.zig .lang-icon {
		background: rgba(247, 164, 29, 0.1);
		color: #F7A41D;
	}

	.lang-title-group {
		flex: 1;
	}

	.lang-card h3 {
		font-size: 22px;
		font-weight: 700;
		margin: 0 0 5px 0;
		color: #1a1a1a;
	}

	.lang-subtitle {
		font-size: 13px;
		font-weight: 600;
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.rust .lang-subtitle {
		color: #CE412B;
	}

	.go .lang-subtitle {
		color: #00ADD8;
	}

	.zig .lang-subtitle {
		color: #F7A41D;
	}

	.lang-desc {
		font-size: 15px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0 0 20px 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	.lang-use {
		font-size: 14px;
		line-height: 1.6;
		color: #666;
		padding-top: 20px;
		border-top: 1px solid #f0f0f0;
	}

	.lang-use strong {
		color: #1a1a1a;
		font-weight: 600;
	}
</style>
