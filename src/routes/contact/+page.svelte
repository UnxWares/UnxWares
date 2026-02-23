<script>
	import { t } from 'svelte-i18n';
	import Separator from '$lib/components/Separator.svelte';
	import { Mail, MessageCircle, AtSign, Mailbox, UserCog, Headphones, ShoppingCart, ShieldCheck, MapPin, Building2, Clock, Zap, Calendar } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{$t('contact_page.title')}</title>

	<meta property="og:title" content={$t('contact_page.title')}>
	<meta name="twitter:title" content={$t('contact_page.title')}>

	<meta property="og:url" content="https://www.unxwares.com/contact">
	<meta name="twitter:site" content="https://www.unxwares.com/contact">
</svelte:head>

<main>
	<section class="hero-section">
		<div class="hero-icon">
			<Mail size={50} />
		</div>
		<h1>{$t('contact_page.h1')}</h1>
		<p class="intro">{$t('contact_page.intro')}</p>
	</section>

	<Separator />

	<!-- Contact Methods -->
	<section class="content-section">
		<div class="section-header">
			<MessageCircle size={32} />
			<h2>{$t('contact_page.methods_title')}</h2>
		</div>
		<p class="section-intro">{$t('contact_page.methods_intro')}</p>

		<div class="contact-grid">
			<!-- Email -->
			<div class="contact-card">
				<div class="card-icon">
					<AtSign size={28} />
				</div>
				<h3>{$t('contact_page.email_title')}</h3>
				<p class="contact-detail">
					<a href="mailto:contact@unxwares.com">contact@unxwares.com</a>
				</p>
				<p class="contact-desc">{$t('contact_page.email_desc')}</p>
			</div>

			<!-- Discord -->
			<div class="contact-card">
				<div class="card-icon purple">
					<MessageCircle size={28} />
				</div>
				<h3>{$t('contact_page.discord_title')}</h3>
				<p class="contact-detail">
					<a href="https://discord.gg/PPRacEf7yB" target="_blank" rel="noopener noreferrer">discord.gg/PPRacEf7yB</a>
				</p>
				<p class="contact-desc">{$t('contact_page.discord_desc')}</p>
			</div>

			<!-- Mail -->
			<div class="contact-card">
				<div class="card-icon teal">
					<Mailbox size={28} />
				</div>
				<h3>{$t('contact_page.mail_title')}</h3>
				<p class="contact-detail address-text">
					UnxWares<br>
					78 Avenue des Champs-Élysées<br>
					Bureau 326<br>
					75008 Paris, France
				</p>
				<p class="contact-desc">{$t('contact_page.mail_desc')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Specialized Contacts -->
	<section class="content-section">
		<div class="section-header">
			<UserCog size={32} />
			<h2>{$t('contact_page.specialized_title')}</h2>
		</div>
		<p class="section-intro">{$t('contact_page.specialized_intro')}</p>

		<div class="contact-grid">
			<!-- Support -->
			<div class="contact-card">
				<div class="card-icon orange">
					<Headphones size={28} />
				</div>
				<h3>{$t('contact_page.support_title')}</h3>
				<p class="contact-detail">
					<a href="mailto:support@unxwares.com">support@unxwares.com</a>
				</p>
				<p class="contact-desc">{$t('contact_page.support_desc')}</p>
			</div>

			<!-- Sales -->
			<div class="contact-card">
				<div class="card-icon green">
					<ShoppingCart size={28} />
				</div>
				<h3>{$t('contact_page.sales_title')}</h3>
				<p class="contact-detail">
					<a href="mailto:sales@unxwares.com">sales@unxwares.com</a>
				</p>
				<p class="contact-desc">{$t('contact_page.sales_desc')}</p>
			</div>

			<!-- DPO -->
			<div class="contact-card">
				<div class="card-icon">
					<ShieldCheck size={28} />
				</div>
				<h3>{$t('contact_page.dpo_title')}</h3>
				<p class="contact-detail">
					<a href="mailto:dpo@unxwares.com">dpo@unxwares.com</a>
				</p>
				<p class="contact-desc">{$t('contact_page.dpo_desc')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Location -->
	<section class="content-section">
		<div class="section-header">
			<MapPin size={32} />
			<h2>{$t('contact_page.location_title')}</h2>
		</div>
		<p class="section-intro">{$t('contact_page.location_intro')}</p>

		<div class="location-card">
			<div class="location-content">
				<h3>{$t('contact_page.datacenter_title')}</h3>
				<p class="address">
					<Building2 size={24} />
					<span>Datacenter Caen - Normandie, France</span>
				</p>
				<p class="location-desc">{$t('contact_page.datacenter_desc')}</p>
			</div>
		</div>
	</section>

	<Separator />

	<!-- Response Times -->
	<section class="content-section">
		<div class="section-header">
			<Clock size={32} />
			<h2>{$t('contact_page.response_title')}</h2>
		</div>
		<p class="section-intro">{$t('contact_page.response_intro')}</p>

		<div class="response-list">
			<div class="response-item">
				<Zap size={28} />
				<div>
					<h4>{$t('contact_page.urgent_title')}</h4>
					<p>{$t('contact_page.urgent_desc')}</p>
				</div>
			</div>
			<div class="response-item">
				<Clock size={28} />
				<div>
					<h4>{$t('contact_page.normal_title')}</h4>
					<p>{$t('contact_page.normal_desc')}</p>
				</div>
			</div>
			<div class="response-item">
				<Calendar size={28} />
				<div>
					<h4>{$t('contact_page.sales_contact_title')}</h4>
					<p>{$t('contact_page.sales_contact_desc')}</p>
				</div>
			</div>
		</div>
	</section>
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

	.hero-icon :global(svg) {
		color: var(--primary-text);
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
		color: var(--text-secondary);
		line-height: 1.8;
		text-align: center;
		max-width: 800px;
		margin: 0 auto;
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

	.section-header :global(svg) {
		color: var(--primary-text);
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
		color: var(--text-secondary);
		margin: 0 0 50px 0;
		line-height: 1.8;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
		margin-top: 40px;
	}

	.contact-card {
		background: var(--bg-primary);
		padding: 30px;
		border-radius: 12px;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
		text-align: center;
	}

	.contact-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: var(--primary);
	}

	.card-icon {
		width: 60px;
		height: 60px;
		margin: 0 auto 20px auto;
		background: var(--bg-tertiary);
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-icon.purple {
		background: #f3e8ff;
	}

	.card-icon.orange {
		background: #fff3e0;
	}

	.card-icon.green {
		background: #e8f5e9;
	}

	.card-icon.teal {
		background: #e0f2f1;
	}

	.card-icon :global(svg) {
		color: var(--primary-text);
	}

	.card-icon.purple :global(svg) {
		color: #5865f2;
	}

	.card-icon.orange :global(svg) {
		color: #f97316;
	}

	.card-icon.green :global(svg) {
		color: #22c55e;
	}

	.card-icon.teal :global(svg) {
		color: #0d9488;
	}

	.contact-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 15px 0;
		color: var(--text-primary);
	}

	.contact-detail {
		margin: 0 0 15px 0;
		font-size: 16px;
		font-weight: 500;
	}

	.contact-detail a {
		color: var(--primary-text);
		text-decoration: none;
		transition: all 0.2s ease;
		word-break: break-all;
	}

	.contact-detail a:hover {
		color: var(--primary-hover);
		text-decoration: underline;
	}

	.address-text {
		font-size: 14px;
		line-height: 1.8;
		color: var(--primary-text);
		font-weight: 500;
	}

	.contact-desc {
		font-size: 14px;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0;
	}

	.location-card {
		max-width: 800px;
		margin: 0 auto;
		background: var(--bg-primary);
		padding: 40px;
		border-radius: 12px;
		border: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.location-card:hover {
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: var(--primary);
	}

	.location-content h3 {
		font-size: 22px;
		font-weight: 600;
		margin: 0 0 20px 0;
		color: var(--text-primary);
	}

	.address {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 18px;
		font-weight: 500;
		color: var(--primary-text);
		margin: 0 0 20px 0;
	}


	.location-desc {
		font-size: 15px;
		line-height: 1.7;
		color: var(--text-secondary);
		margin: 0;
	}

	.response-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 900px;
		margin: 0 auto;
	}

	.response-item {
		display: flex;
		align-items: flex-start;
		gap: 20px;
		padding: 25px;
		background: var(--bg-primary);
		border-left: 4px solid var(--primary);
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		transition: all 0.3s ease;
	}

	.response-item:hover {
		transform: translateX(5px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.1);
	}

	.response-item > :global(svg) {
		color: var(--primary-text);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.response-item h4 {
		margin: 0 0 8px 0;
		font-size: 18px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.response-item p {
		margin: 0;
		font-size: 15px;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	@media (max-width: 1024px) {
		.contact-grid {
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
	}

	@media (max-width: 640px) {
		.contact-grid {
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

		.location-card {
			padding: 25px;
		}

		.response-item {
			padding: 20px;
		}
	}

	@media (max-width: 380px) {
		.contact-card {
			padding: 20px;
		}

		.card-icon {
			width: 50px;
			height: 50px;
		}


		.contact-card h3 {
			font-size: 16px;
		}

		.contact-detail {
			font-size: 14px;
		}

		.contact-desc {
			font-size: 13px;
		}
	}
</style>
