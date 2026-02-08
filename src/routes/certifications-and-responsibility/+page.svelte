<script>
	import { t } from 'svelte-i18n';
	import Separator from '$lib/components/Separator.svelte';
	import ContactCTA from '$lib/components/ContactCTA.svelte';
</script>

<svelte:head>
	<title>{$t('certifications_page.title')}</title>

	<meta property="og:title" content={$t('certifications_page.title')}>
	<meta name="twitter:title" content={$t('certifications_page.title')}>

	<meta property="og:url" content="https://www.unxwares.com/certifications-and-responsibility">
	<meta name="twitter:site" content="https://www.unxwares.com/certifications-and-responsibility">
</svelte:head>

<main>
	<section class="hero-section">
		<div class="hero-icon">
			<i class="bi bi-shield-check"></i>
		</div>
		<h1>{$t('certifications_page.h1')}</h1>
		<p class="intro">{$t('certifications_page.intro')}</p>
	</section>

	<Separator />

	<!-- Compliance & Certifications -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-award"></i>
			<h2>{$t('certifications_page.compliance_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.compliance_intro')}</p>

			<div class="cards-grid">
				<div class="cert-card">
					<div class="card-icon">
						<i class="bi bi-shield-lock-fill"></i>
					</div>
					<h3>{$t('certifications_page.rgpd_title')}</h3>
					<p>{$t('certifications_page.rgpd_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon">
						<i class="bi bi-lock-fill"></i>
					</div>
					<h3>{$t('certifications_page.iso_title')}</h3>
					<p>{$t('certifications_page.iso_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon">
						<i class="bi bi-cloud-check-fill"></i>
					</div>
					<h3>{$t('certifications_page.cncf_title')}</h3>
					<p>{$t('certifications_page.cncf_desc')}</p>
				</div>
		</div>
	</section>

	<Separator />

	<!-- Environmental Responsibility -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-tree"></i>
			<h2>{$t('certifications_page.responsibility_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.responsibility_intro')}</p>

			<div class="cards-grid">
				<div class="cert-card">
					<div class="card-icon green">
						<i class="bi bi-recycle"></i>
					</div>
					<h3>{$t('certifications_page.refurbished_title')}</h3>
					<p>{$t('certifications_page.refurbished_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon green">
						<i class="bi bi-lightning-charge-fill"></i>
					</div>
					<h3>{$t('certifications_page.energy_title')}</h3>
					<p>{$t('certifications_page.energy_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon green">
						<i class="bi bi-geo-alt-fill"></i>
					</div>
					<h3>{$t('certifications_page.local_title')}</h3>
					<p>{$t('certifications_page.local_desc')}</p>
				</div>
		</div>
	</section>

	<Separator />

	<!-- Transparency & Ethics -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-eye"></i>
			<h2>{$t('certifications_page.transparency_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.transparency_intro')}</p>

			<div class="cards-grid">
				<div class="cert-card">
					<div class="card-icon orange">
						<i class="bi bi-code-square"></i>
					</div>
					<h3>{$t('certifications_page.opensource_title')}</h3>
					<p>{$t('certifications_page.opensource_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon orange">
						<i class="bi bi-currency-euro"></i>
					</div>
					<h3>{$t('certifications_page.pricing_title')}</h3>
					<p>{$t('certifications_page.pricing_desc')}</p>
				</div>

				<div class="cert-card">
					<div class="card-icon orange">
						<i class="bi bi-people-fill"></i>
					</div>
					<h3>{$t('certifications_page.support_title')}</h3>
					<p>{$t('certifications_page.support_desc')}</p>
				</div>
		</div>
	</section>

	<Separator />

	<!-- CNCF Stack & Open Source Tools -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-box-seam"></i>
			<h2>{$t('certifications_page.cncf_stack_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.cncf_stack_intro')}</p>

		<div class="cards-grid">
			<div class="cert-card">
				<div class="card-icon purple">
					<i class="bi bi-heptagon-fill"></i>
				</div>
				<h3>{$t('certifications_page.kubernetes_title')}</h3>
				<p>{$t('certifications_page.kubernetes_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon purple">
					<i class="bi bi-database-fill"></i>
				</div>
				<h3>{$t('certifications_page.longhorn_title')}</h3>
				<p>{$t('certifications_page.longhorn_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon purple">
					<i class="bi bi-cloud-fill"></i>
				</div>
				<h3>{$t('certifications_page.cloudstack_title')}</h3>
				<p>{$t('certifications_page.cloudstack_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon purple">
					<i class="bi bi-bar-chart-line-fill"></i>
				</div>
				<h3>{$t('certifications_page.prometheus_title')}</h3>
				<p>{$t('certifications_page.prometheus_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon purple">
					<i class="bi bi-gear-fill"></i>
				</div>
				<h3>{$t('certifications_page.other_tools_title')}</h3>
				<p>{$t('certifications_page.other_tools_desc')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Open Source Credo -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-heart-fill"></i>
			<h2>{$t('certifications_page.opensource_credo_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.opensource_credo_intro')}</p>

		<div class="cards-grid cards-grid-4">
			<div class="cert-card">
				<div class="card-icon teal">
					<i class="bi bi-lightbulb-fill"></i>
				</div>
				<h3>{$t('certifications_page.why_opensource_title')}</h3>
				<p>{$t('certifications_page.why_opensource_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon teal">
					<i class="bi bi-git"></i>
				</div>
				<h3>{$t('certifications_page.our_contributions_title')}</h3>
				<p>{$t('certifications_page.our_contributions_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon teal">
					<i class="bi bi-graph-up-arrow"></i>
				</div>
				<h3>{$t('certifications_page.opensource_business_title')}</h3>
				<p>{$t('certifications_page.opensource_business_desc')}</p>
			</div>

			<div class="cert-card">
				<div class="card-icon teal">
					<i class="bi bi-exclamation-triangle-fill"></i>
				</div>
				<h3>{$t('certifications_page.proprietary_critique_title')}</h3>
				<p>{$t('certifications_page.proprietary_critique_desc')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Concrete Commitments -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-check-circle"></i>
			<h2>{$t('certifications_page.commitment_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.commitment_intro')}</p>

		<div class="commitments-list">
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_1')}</p>
			</div>
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_2')}</p>
			</div>
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_3')}</p>
			</div>
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_4')}</p>
			</div>
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_5')}</p>
			</div>
			<div class="commitment-item">
				<i class="bi bi-check-lg"></i>
				<p>{$t('certifications_page.commitment_6')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Roadmap -->
	<section class="content-section">
		<div class="section-header">
			<i class="bi bi-calendar-check"></i>
			<h2>{$t('certifications_page.roadmap_title')}</h2>
		</div>
		<p class="section-intro">{$t('certifications_page.roadmap_intro')}</p>

		<div class="roadmap-timeline">
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>Q4 2025</h3>
					<p>{$t('certifications_page.roadmap_q4_2025')}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>Q1 2026</h3>
					<p>{$t('certifications_page.roadmap_q1_2026')}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>Q3 2026</h3>
					<p>{$t('certifications_page.roadmap_q3_2026')}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>Q4 2026</h3>
					<p>{$t('certifications_page.roadmap_q4_2026')}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>2027</h3>
					<p>{$t('certifications_page.roadmap_2027')}</p>
				</div>
			</div>
			<div class="timeline-item">
				<div class="timeline-marker"></div>
				<div class="timeline-content">
					<h3>2028</h3>
					<p>{$t('certifications_page.roadmap_2028')}</p>
				</div>
			</div>
		</div>
	</section>

	<Separator />

	<ContactCTA />
</main>

<style>
	.hero-section {
		text-align: center;
		margin: 0;
	}

	.hero-icon {
		width: 100px;
		height: 100px;
		margin: 0 auto 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(5, 12, 156, 0.08);
		border-radius: 50%;
	}

	.hero-icon i {
		font-size: 50px;
		color: #050c9c;
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
	}

	.hero-section h1 {
		font-size: 42px;
		font-weight: 600;
		margin: 0 0 20px 0;
	}

	.intro {
		font-size: 18px;
		color: #666;
		line-height: 1.8;
		text-align: center;
	}

	.content-section {
		margin: 0;
	}

	.section-header {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 20px;
	}

	.section-header i {
		font-size: 32px;
		color: #050c9c;
	}

	.section-header h2 {
		font-size: 28px;
		font-weight: 600;
		margin: 0;
		text-align: center;
	}

	.section-intro {
		text-align: center;
		font-size: 16px;
		color: #5a5a5a;
		margin: 0 0 50px 0;
		line-height: 1.8;
	}

	.cards-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 40px;
	}

	.cards-grid-4 {
		grid-template-columns: repeat(2, 1fr);
	}

	.cert-card {
		background: white;
		padding: 30px;
		border-radius: 12px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
		text-align: center;
	}

	.cert-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.card-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 20px auto;
		background: #f0f2ff;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-icon.green {
		background: #e8f5e9;
	}

	.card-icon.orange {
		background: #fff3e0;
	}

	.card-icon.purple {
		background: #f3e8ff;
	}

	.card-icon.teal {
		background: #e0f2f1;
	}

	.card-icon i {
		font-size: 28px;
		color: #050c9c;
	}

	.card-icon.green i {
		color: #22c55e;
	}

	.card-icon.orange i {
		color: #f97316;
	}

	.card-icon.purple i {
		color: #9333ea;
	}

	.card-icon.teal i {
		color: #0d9488;
	}

	.cert-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #1a1a1a;
	}

	.cert-card p {
		font-size: 14px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}

	@media (max-width: 1024px) {
		.cards-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero-section h1 {
			font-size: 32px;
		}

		.section-header h2 {
			font-size: 22px;
		}

		.tagline {
			font-size: 16px;
		}
	}

	@media (max-width: 640px) {
		.cards-grid {
			grid-template-columns: 1fr;
		}

		.cards-grid-4 {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 548px) {
		.hero-section h1 {
			font-size: 26px;
		}

		.section-header h2 {
			font-size: 20px;
		}

		.intro {
			font-size: 16px;
		}

		.section-intro {
			font-size: 15px;
		}
	}

	@media (max-width: 380px) {
		.cert-card {
			padding: 20px;
		}

		.card-icon {
			width: 50px;
			height: 50px;
		}

		.card-icon i {
			font-size: 24px;
		}

		.cert-card h3 {
			font-size: 16px;
		}

		.cert-card p {
			font-size: 13px;
		}
	}

	/* Commitments List */
	.commitments-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 900px;
		margin: 0 auto;
	}

	.commitment-item {
		display: flex;
		align-items: flex-start;
		gap: 15px;
		padding: 20px;
		background: white;
		border-left: 4px solid #050c9c;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.commitment-item:hover {
		transform: translateX(5px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.1);
	}

	.commitment-item i {
		font-size: 24px;
		color: #050c9c;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.commitment-item p {
		margin: 0;
		font-size: 15px;
		line-height: 1.6;
		color: #1a1a1a;
		text-align: left;
	}

	/* Roadmap Timeline */
	.roadmap-timeline {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
		padding-left: 40px;
	}

	.roadmap-timeline::before {
		content: '';
		position: absolute;
		left: 15px;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(to bottom, #050c9c, #3b82f6);
	}

	.timeline-item {
		position: relative;
		margin-bottom: 40px;
	}

	.timeline-marker {
		position: absolute;
		left: -33px;
		top: 5px;
		width: 16px;
		height: 16px;
		background: #050c9c;
		border: 3px solid white;
		border-radius: 50%;
		box-shadow: 0 0 0 3px rgba(5, 12, 156, 0.2);
	}

	.timeline-content {
		padding: 20px;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
	}

	.timeline-content:hover {
		transform: translateY(-3px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.1);
		border-color: #050c9c;
	}

	.timeline-content h3 {
		font-size: 18px;
		font-weight: 700;
		color: #050c9c;
		margin: 0 0 10px 0;
	}

	.timeline-content p {
		margin: 0;
		font-size: 14px;
		line-height: 1.6;
		color: #4a4a4a;
		text-align: left;
	}

	@media (max-width: 548px) {
		.commitment-item {
			padding: 15px;
		}

		.commitment-item i {
			font-size: 20px;
		}

		.commitment-item p {
			font-size: 14px;
		}

		.roadmap-timeline {
			padding-left: 30px;
		}

		.timeline-marker {
			left: -28px;
			width: 12px;
			height: 12px;
		}

		.roadmap-timeline::before {
			left: 10px;
			width: 2px;
		}

		.timeline-content {
			padding: 15px;
		}

		.timeline-content h3 {
			font-size: 16px;
		}

		.timeline-content p {
			font-size: 13px;
		}
	}
</style>
