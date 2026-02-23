<script>
	import { page } from '$app/stores';
	import { t } from 'svelte-i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { ChevronDown, Cloud, Code, Users, ShieldCheck, Network, FileText, Lock, ClipboardCheck, ShoppingCart, X, Menu } from 'lucide-svelte';

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let activeDropdown = $state(null);

	$effect(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		if (!mobileMenuOpen) {
			activeDropdown = null;
		}
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		activeDropdown = null;
	}

	// Empêcher le scroll quand le menu mobile est ouvert
	let scrollPosition = 0;
	$effect(() => {
		if (mobileMenuOpen) {
			scrollPosition = window.scrollY;
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollPosition}px`;
			document.body.style.width = '100%';
			document.body.style.height = '100vh';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			document.body.style.height = '';
			window.scrollTo({ top: scrollPosition, behavior: 'instant' });
		}
	});

	function toggleDropdown(id) {
		activeDropdown = activeDropdown === id ? null : id;
	}
</script>

<div class="navbar-wrapper">
	<nav class="navbar" class:scrolled class:menu-open={mobileMenuOpen}>
		<div class="navbar-container">
			<a href="/" class="navbar-brand" onclick={closeMobileMenu}>
				<img src="/favicon.png" alt="UnxWares Logo" class="logo" />
				<span class="brand-name">UnxWares</span>
			</a>

			<div class="navbar-center" class:mobile-open={mobileMenuOpen}>
				<div class="mobile-menu-header">
					<img src="/favicon.png" alt="UnxWares Logo" class="mobile-logo" />
					<span class="mobile-brand-name">UnxWares</span>
				</div>

				<div class="mobile-lang-switcher">
					<ThemeToggle />
					<LanguageSwitcher />
				</div>

				<a href="/" class="nav-link" class:active={$page.url.pathname === '/'} onclick={closeMobileMenu}>
					{$t('navbar.home')}
				</a>

				<a href="/blog" class="nav-link" class:active={$page.url.pathname.startsWith('/blog')} onclick={closeMobileMenu}>
					{$t('navbar.blog')}
				</a>

				<div class="nav-item-wrapper">
					<button class="nav-item" class:active={activeDropdown === 'product'} onclick={() => toggleDropdown('product')}>
						<span>{$t('navbar.product')}</span>
						<ChevronDown size={12} class={activeDropdown === 'product' ? 'chevron rotated' : 'chevron'} />
					</button>
					{#if activeDropdown === 'product'}
						<div class="dropdown-menu">
							<a href="/uw-cloud" class="dropdown-item" class:active={$page.url.pathname === '/uw-cloud'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<Cloud size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.cloud')}</span>
									<span class="dropdown-item-desc">{$t('navbar.cloud_desc')}</span>
								</div>
							</a>
							<a href="/uw-studio" class="dropdown-item" class:active={$page.url.pathname === '/uw-studio'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<Code size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.studio')}</span>
									<span class="dropdown-item-desc">{$t('navbar.studio_desc')}</span>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<div class="nav-item-wrapper">
					<button class="nav-item" class:active={activeDropdown === 'company'} onclick={() => toggleDropdown('company')}>
						<span>{$t('navbar.company')}</span>
						<ChevronDown size={12} class={activeDropdown === 'company' ? 'chevron rotated' : 'chevron'} />
					</button>
					{#if activeDropdown === 'company'}
						<div class="dropdown-menu">
							<a href="/whoarewe" class="dropdown-item" class:active={$page.url.pathname === '/whoarewe'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<Users size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.about')}</span>
									<span class="dropdown-item-desc">{$t('navbar.about_desc')}</span>
								</div>
							</a>
							<a href="/certifications-and-responsibility" class="dropdown-item" class:active={$page.url.pathname === '/certifications-and-responsibility'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<ShieldCheck size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.certifications')}</span>
									<span class="dropdown-item-desc">{$t('navbar.certifications_desc')}</span>
								</div>
							</a>
							<a href="/datacenter" class="dropdown-item" class:active={$page.url.pathname === '/datacenter'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<Network size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.infrastructure')}</span>
									<span class="dropdown-item-desc">{$t('navbar.infrastructure_desc')}</span>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<div class="nav-item-wrapper">
					<button class="nav-item" class:active={activeDropdown === 'legal'} onclick={() => toggleDropdown('legal')}>
						<span>{$t('navbar.legal')}</span>
						<ChevronDown size={12} class={activeDropdown === 'legal' ? 'chevron rotated' : 'chevron'} />
					</button>
					{#if activeDropdown === 'legal'}
						<div class="dropdown-menu">
							<a href="/legal" class="dropdown-item" class:active={$page.url.pathname === '/legal'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<FileText size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.legal_notice')}</span>
									<span class="dropdown-item-desc">{$t('navbar.legal_notice_desc')}</span>
								</div>
							</a>
							<a href="/privacy" class="dropdown-item" class:active={$page.url.pathname === '/privacy'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<Lock size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.privacy')}</span>
									<span class="dropdown-item-desc">{$t('navbar.privacy_desc')}</span>
								</div>
							</a>
							<a href="/use-conditions" class="dropdown-item" class:active={$page.url.pathname === '/use-conditions'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<ClipboardCheck size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.terms')}</span>
									<span class="dropdown-item-desc">{$t('navbar.terms_desc')}</span>
								</div>
							</a>
							<a href="/sales-conditions" class="dropdown-item" class:active={$page.url.pathname === '/sales-conditions'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<ShoppingCart size={20} />
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.sales')}</span>
									<span class="dropdown-item-desc">{$t('navbar.sales_desc')}</span>
								</div>
							</a>
						</div>
					{/if}
				</div>
			</div>

			<div class="navbar-actions">
				<ThemeToggle />
				<LanguageSwitcher />
				<a href="https://customers.unxwares.com" target="_blank" rel="noopener noreferrer" class="btn-primary customer-portal-btn">{$t('navbar.customer_portal')}</a>
			</div>

			<button class="mobile-menu-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
	</nav>
</div>

<style>

	.navbar-wrapper {
		position: fixed !important;
		top: 20px !important;
		left: 0;
		right: 0;
		z-index: 9999 !important;
		display: flex !important;
		justify-content: center;
		pointer-events: none;
		visibility: visible !important;
		opacity: 1 !important;
	}

	.navbar {
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 16px;
		transition: all 0.2s ease-in-out;
		box-shadow: var(--shadow-sm);
		pointer-events: all;
	}

	.navbar.scrolled {
		box-shadow: var(--shadow-md);
	}

	.navbar-container {
		padding: 0 24px;
		height: 64px;
		display: flex;
		align-items: center;
	}

	.navbar-brand {
		display: flex;
		align-items: center;
		gap: 10px;
		text-decoration: none;
		transition: opacity 0.2s ease-in-out;
		flex-shrink: 0;
		height: 38px;
		margin-right: 60px;
	}

	.navbar-brand:hover {
		opacity: 0.8;
	}

	.logo {
		width: 38px;
		height: 38px;
		flex-shrink: 0;
	}

	.brand-name {
		font-family: 'Poppins', sans-serif;
		font-size: 24px;
		color: var(--primary-text);
		font-weight: 700;
		line-height: 1;
		margin: 0;
		padding: 0;
		transform: translateY(-1px);
	}

	.navbar-center {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1;
		margin-right: 60px;
	}

	.nav-item-wrapper {
		position: relative;
	}

	.nav-link {
		display: flex;
		align-items: center;
		padding: 10px 16px;
		text-decoration: none;
		color: var(--text-primary);
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		white-space: nowrap;
	}

	.nav-link:hover {
		background: var(--hover-bg);
	}

	.nav-link.active {
		background: var(--active-bg);
		color: var(--primary-text);
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 16px;
		background: none;
		border: none;
		color: var(--text-primary);
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		white-space: nowrap;
	}

	.nav-item:hover {
		background: var(--hover-bg);
	}

	.nav-item.active {
		background: var(--active-bg);
		color: var(--primary-text);
	}

	:global(.chevron) {
		transition: transform 0.2s ease-in-out;
	}

	:global(.chevron.rotated) {
		transform: rotate(180deg);
	}

	.dropdown-menu {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		min-width: 280px;
		background: var(--bg-primary);
		border-radius: 12px;
		box-shadow: var(--shadow-md);
		border: 1px solid var(--border-color);
		padding: 8px;
		animation: dropdownFadeIn 0.2s ease-in-out;
		z-index: 100;
	}

	@keyframes dropdownFadeIn {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.dropdown-item {
		display: flex;
		align-items: flex-start;
		gap: 12px;
		padding: 12px;
		text-decoration: none;
		color: var(--text-primary);
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
	}

	.dropdown-item:hover {
		background: var(--hover-bg);
	}

	.dropdown-item.active {
		background: var(--active-bg);
	}

	.dropdown-item :global(svg) {
		color: var(--primary-text);
		margin-top: 2px;
		flex-shrink: 0;
	}

	.dropdown-item-content {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.dropdown-item-label {
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.dropdown-item-desc {
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
		color: var(--text-secondary);
		line-height: 1.4;
	}

	.navbar-actions {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-shrink: 0;
	}

	.btn-primary {
		padding: 10px 20px;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: 700;
		color: white;
		background: #050c9c;
		text-decoration: none;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 2px 8px rgba(5, 12, 156, 0.2);
	}

	.btn-primary:hover {
		background: #040a7a;
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.3);
	}

	.mobile-menu-toggle {
		display: none;
		background: none;
		border: none;
		font-size: 24px;
		color: var(--text-primary);
		cursor: pointer;
		padding: 8px;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
	}

	.mobile-menu-toggle:hover {
		background: var(--hover-bg);
	}

	@media (max-width: 1100px) {
		.navbar-container {
			padding: 0 20px;
			gap: 24px;
		}

		.navbar-center {
			gap: 4px;
		}

		.nav-link,
		.nav-item {
			padding: 8px 12px;
			font-size: 14px;
		}
	}

	.mobile-lang-switcher,
	.mobile-menu-header {
		display: none;
	}

	@media (max-width: 900px) {
		.navbar-wrapper {
			top: 16px;
			left: 16px;
			right: 16px;
		}

		.navbar {
			position: relative;
			z-index: 10003;
		}

		.navbar-container {
			justify-content: space-between;
			position: relative;
			z-index: 10003;
		}

		.navbar-brand {
			margin-right: 0;
		}

		.navbar-actions {
			display: none;
		}

		.mobile-menu-header {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 12px;
			padding: 0;
			margin: 0 auto 10px auto;
		}

		.mobile-logo {
			width: 50px;
			height: 50px;
		}

		.mobile-brand-name {
			font-family: 'Poppins', sans-serif;
			font-size: 32px;
			color: var(--primary-text);
			font-weight: 700;
		}

		.mobile-lang-switcher {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 12px;
			padding: 0;
			margin: 0 auto 24px auto;
		}

		.mobile-menu-toggle {
			display: block;
			z-index: 10004;
			position: relative;
		}

		.navbar-center {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100vw;
			height: 100vh;
			background: var(--bg-primary);
			display: block;
			overflow-y: auto;
			overflow-x: hidden;
			-webkit-overflow-scrolling: touch;
			scrollbar-width: none;
			-ms-overflow-style: none;
			padding: 0 20px;
			box-sizing: border-box;
			transform: translateY(-100%);
			opacity: 0;
			pointer-events: none;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 10001;
		}

		.navbar-center::-webkit-scrollbar {
			width: 0;
			display: none;
		}

		.navbar-center::before {
			content: '';
			display: block;
			height: 100px;
		}

		.navbar-center::after {
			content: '';
			display: block;
			height: 50px;
		}

		.navbar-center.mobile-open {
			transform: translateY(0);
			opacity: 1;
			pointer-events: all;
		}

		.nav-link {
			font-size: 18px;
			font-weight: 600;
			padding: 14px 32px;
			width: auto;
			min-width: 280px;
			text-align: center;
			border-radius: 12px;
			margin: 0 auto 12px auto;
			background: var(--bg-secondary);
			border: 2px solid transparent;
			transition: all 0.25s ease;
			display: block;
		}

		.nav-link:active {
			transform: scale(0.97);
		}

		.nav-link.active {
			background: var(--primary);
			color: white;
			border-color: var(--primary);
		}

		.nav-item-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: auto;
			padding: 0;
			margin: 0 auto 12px auto;
		}

		.nav-item {
			font-size: 18px;
			font-weight: 600;
			padding: 14px 32px;
			width: auto;
			min-width: 280px;
			text-align: center;
			justify-content: center;
			gap: 10px;
			border-radius: 12px;
			background: var(--bg-secondary);
			border: 2px solid transparent;
			transition: all 0.25s ease;
		}

		.nav-item:active {
			transform: scale(0.97);
		}

		.nav-item.active {
			background: var(--primary);
			color: white;
			border-color: var(--primary);
		}

		.nav-item.active :global(.chevron) {
			color: white;
		}

		.dropdown-menu {
			position: static;
			box-shadow: none;
			border: none;
			background: transparent;
			border-radius: 0;
			margin: 8px 0 0 0;
			padding: 0;
			width: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 8px;
			animation: fadeIn 0.3s ease;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		.dropdown-item {
			padding: 12px 24px;
			border-radius: 10px;
			margin: 0 auto;
			gap: 10px;
			background: var(--bg-primary);
			border: 1px solid var(--border-color);
			min-width: 240px;
			max-width: 280px;
			transition: all 0.2s ease;
		}

		.dropdown-item:active {
			transform: scale(0.97);
		}

		.dropdown-item.active {
			background: var(--active-bg);
			border-color: var(--primary);
		}

		.dropdown-item :global(svg) {
			color: var(--primary-text);
		}

		.dropdown-item-content {
			text-align: center;
		}

		.dropdown-item-label {
			font-size: 15px;
			font-weight: 600;
		}

		.dropdown-item-desc {
			font-size: 12px;
			color: var(--text-tertiary);
		}
	}

	@media (max-width: 480px) {
		.navbar-wrapper {
			top: 10px;
			left: 10px;
			right: 10px;
		}

		.navbar-container {
			padding: 0 14px;
			height: 54px;
		}

		.brand-name {
			font-size: 17px;
		}

		.logo {
			width: 30px;
			height: 30px;
		}

		.navbar-center {
			padding: 0 16px;
			box-sizing: border-box;
		}

		.navbar-center::before {
			height: 90px;
		}

		.mobile-logo {
			width: 42px;
			height: 42px;
		}

		.mobile-brand-name {
			font-size: 28px;
		}

		.mobile-menu-header {
			padding: 0;
			margin: 0 0 8px 0;
		}

		.mobile-lang-switcher {
			padding: 0;
			margin: 0 0 20px 0;
		}

		.mobile-lang-switcher :global(.lang-dropdown) {
			left: 50%;
			right: auto;
			transform: translateX(-50%);
		}

		.nav-link,
		.nav-item {
			font-size: 16px;
			padding: 12px 28px;
			min-width: 260px;
		}

		.dropdown-item {
			padding: 10px 20px;
			min-width: 220px;
		}

		.dropdown-item-label {
			font-size: 14px;
		}

		.dropdown-item-desc {
			font-size: 11px;
		}
	}

	@media (max-width: 360px) {
		.nav-link,
		.nav-item {
			font-size: 15px;
			padding: 10px 20px;
			min-width: 0;
			width: 100%;
			max-width: 240px;
		}

		.dropdown-item {
			padding: 10px 16px;
			min-width: 0;
			width: 100%;
			max-width: 200px;
		}
	}
</style>
