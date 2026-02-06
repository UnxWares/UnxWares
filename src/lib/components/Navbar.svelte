<script>
	import { page } from '$app/stores';
	import { t } from 'svelte-i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

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
			document.documentElement.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
			document.documentElement.style.overflow = '';
			window.scrollTo(0, scrollPosition);
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
					<LanguageSwitcher />
				</div>

				<a href="/" class="nav-link" class:active={$page.url.pathname === '/'} onclick={closeMobileMenu}>
					{$t('navbar.home')}
				</a>

				<div class="nav-item-wrapper">
					<button class="nav-item" class:active={activeDropdown === 'product'} onclick={() => toggleDropdown('product')}>
						<span>{$t('navbar.product')}</span>
						<i class="bi bi-chevron-down chevron" class:rotated={activeDropdown === 'product'}></i>
					</button>
					{#if activeDropdown === 'product'}
						<div class="dropdown-menu">
							<a href="/datacenter" class="dropdown-item" class:active={$page.url.pathname === '/datacenter'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-diagram-3"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.infrastructure')}</span>
									<span class="dropdown-item-desc">{$t('navbar.infrastructure_desc')}</span>
								</div>
							</a>
							<a href="/uw-cloud" class="dropdown-item" class:active={$page.url.pathname === '/uw-cloud'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-cloud"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.cloud')}</span>
									<span class="dropdown-item-desc">{$t('navbar.cloud_desc')}</span>
								</div>
							</a>
							<a href="/uw-studio" class="dropdown-item" class:active={$page.url.pathname === '/uw-studio'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-code-slash"></i>
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
						<i class="bi bi-chevron-down chevron" class:rotated={activeDropdown === 'company'}></i>
					</button>
					{#if activeDropdown === 'company'}
						<div class="dropdown-menu">
							<a href="/whoarewe" class="dropdown-item" class:active={$page.url.pathname === '/whoarewe'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-people"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.about')}</span>
									<span class="dropdown-item-desc">{$t('navbar.about_desc')}</span>
								</div>
							</a>
							<a href="/certifications-and-responsibility" class="dropdown-item" class:active={$page.url.pathname === '/certifications-and-responsibility'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-shield-check"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.certifications')}</span>
									<span class="dropdown-item-desc">{$t('navbar.certifications_desc')}</span>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<div class="nav-item-wrapper">
					<button class="nav-item" class:active={activeDropdown === 'legal'} onclick={() => toggleDropdown('legal')}>
						<span>{$t('navbar.legal')}</span>
						<i class="bi bi-chevron-down chevron" class:rotated={activeDropdown === 'legal'}></i>
					</button>
					{#if activeDropdown === 'legal'}
						<div class="dropdown-menu">
							<a href="/legal" class="dropdown-item" class:active={$page.url.pathname === '/legal'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-file-text"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.legal_notice')}</span>
									<span class="dropdown-item-desc">{$t('navbar.legal_notice_desc')}</span>
								</div>
							</a>
							<a href="/privacy" class="dropdown-item" class:active={$page.url.pathname === '/privacy'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-lock"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.privacy')}</span>
									<span class="dropdown-item-desc">{$t('navbar.privacy_desc')}</span>
								</div>
							</a>
							<a href="/use-conditions" class="dropdown-item" class:active={$page.url.pathname === '/use-conditions'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-clipboard-check"></i>
								<div class="dropdown-item-content">
									<span class="dropdown-item-label">{$t('navbar.terms')}</span>
									<span class="dropdown-item-desc">{$t('navbar.terms_desc')}</span>
								</div>
							</a>
							<a href="/sales-conditions" class="dropdown-item" class:active={$page.url.pathname === '/sales-conditions'} onclick={closeMobileMenu} data-sveltekit-preload-data="hover">
								<i class="bi bi-cart"></i>
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
				<LanguageSwitcher />
				<a href="/contact" class="btn-primary">{$t('navbar.contact')}</a>
			</div>

			<button class="mobile-menu-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<i class="bi {mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}"></i>
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
		background: white;
		border: 1px solid rgba(0, 0, 0, 0.08);
		border-radius: 16px;
		transition: all 0.2s ease-in-out;
		box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
		pointer-events: all;
	}

	.navbar.scrolled {
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
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
		color: #050c9c;
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
		color: #1a1a1a;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		white-space: nowrap;
	}

	.nav-link:hover {
		background: rgba(0, 0, 0, 0.04);
	}

	.nav-link.active {
		background: rgba(5, 12, 156, 0.08);
		color: #050c9c;
	}

	.nav-item {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 10px 16px;
		background: none;
		border: none;
		color: #1a1a1a;
		font-family: 'Poppins', sans-serif;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
		white-space: nowrap;
	}

	.nav-item:hover {
		background: rgba(0, 0, 0, 0.04);
	}

	.nav-item.active {
		background: rgba(5, 12, 156, 0.08);
		color: #050c9c;
	}

	.chevron {
		font-size: 12px;
		transition: transform 0.2s ease-in-out;
	}

	.chevron.rotated {
		transform: rotate(180deg);
	}

	.dropdown-menu {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		min-width: 280px;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
		border: 1px solid rgba(0, 0, 0, 0.08);
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
		color: #1a1a1a;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
	}

	.dropdown-item:hover {
		background: rgba(0, 0, 0, 0.04);
	}

	.dropdown-item.active {
		background: rgba(5, 12, 156, 0.08);
	}

	.dropdown-item i {
		font-size: 20px;
		color: #050c9c;
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
		color: #1a1a1a;
	}

	.dropdown-item-desc {
		font-family: 'Poppins', sans-serif;
		font-size: 13px;
		color: #666;
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
		color: #1a1a1a;
		cursor: pointer;
		padding: 8px;
		border-radius: 8px;
		transition: all 0.2s ease-in-out;
	}

	.mobile-menu-toggle:hover {
		background: rgba(0, 0, 0, 0.04);
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

		.navbar-container {
			justify-content: space-between;
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
			margin: 0 0 10px 0;
		}

		.mobile-logo {
			width: 50px;
			height: 50px;
		}

		.mobile-brand-name {
			font-family: 'Poppins', sans-serif;
			font-size: 32px;
			color: #050c9c;
			font-weight: 700;
		}

		.mobile-lang-switcher {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 0;
			margin: 0 0 24px 0;
		}

		.mobile-menu-toggle {
			display: block;
			z-index: 10002;
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
			background: white;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 12px;
			padding: 0;
			margin: 0;
			overflow: hidden;
			transform: translateY(-100%);
			opacity: 0;
			pointer-events: none;
			transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
			z-index: 10001;
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
			margin: 0;
			background: #f8f9fa;
			border: 2px solid transparent;
			transition: all 0.25s ease;
		}

		.nav-link:active {
			transform: scale(0.97);
		}

		.nav-link.active {
			background: #050c9c;
			color: white;
			border-color: #050c9c;
		}

		.nav-item-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: auto;
			padding: 0;
			margin: 0;
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
			background: #f8f9fa;
			border: 2px solid transparent;
			transition: all 0.25s ease;
		}

		.nav-item:active {
			transform: scale(0.97);
		}

		.nav-item.active {
			background: #050c9c;
			color: white;
			border-color: #050c9c;
		}

		.nav-item.active .chevron {
			color: white;
		}

		.nav-item .chevron {
			font-size: 14px;
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
			margin: 0;
			gap: 10px;
			background: #ffffff;
			border: 1px solid rgba(0, 0, 0, 0.08);
			min-width: 240px;
			transition: all 0.2s ease;
		}

		.dropdown-item:active {
			transform: scale(0.97);
		}

		.dropdown-item.active {
			background: rgba(5, 12, 156, 0.08);
			border-color: #050c9c;
		}

		.dropdown-item i {
			font-size: 18px;
			color: #050c9c;
		}

		.dropdown-item-content {
			text-align: left;
		}

		.dropdown-item-label {
			font-size: 15px;
			font-weight: 600;
		}

		.dropdown-item-desc {
			font-size: 12px;
			color: #777;
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
			padding: 0;
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
</style>
