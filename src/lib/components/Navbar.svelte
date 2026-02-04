<script>
	import { page } from '$app/stores';

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
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
		activeDropdown = null;
	}

	function toggleDropdown(id) {
		activeDropdown = activeDropdown === id ? null : id;
	}

	const navItems = [
		{
			type: 'link',
			href: '/',
			label: 'Accueil',
		},
		{
			type: 'dropdown',
			id: 'product',
			label: 'Produit',
			items: [
				{ href: '/datacenter', label: 'Infrastructure', description: 'Notre datacenter en Normandie', icon: 'bi-diagram-3' },
				{ href: '/uw-cloud', label: 'UnxWares Cloud', description: 'Solutions d\'hébergement souverain', icon: 'bi-cloud' },
				{ href: '/uw-studio', label: 'UnxWares Studio', description: 'Développement sur-mesure', icon: 'bi-code-slash' },
			]
		},
		{
			type: 'dropdown',
			id: 'company',
			label: 'Entreprise',
			items: [
				{ href: '/whoarewe', label: 'Qui sommes-nous', description: 'Notre histoire et notre équipe', icon: 'bi-people' },
				{ href: '/certifications-and-responsibility', label: 'Certifications', description: 'Notre engagement éthique', icon: 'bi-shield-check' },
			]
		},
		{
			type: 'dropdown',
			id: 'legal',
			label: 'Légal',
			items: [
				{ href: '/legal', label: 'Mentions légales', description: 'Informations légales', icon: 'bi-file-text' },
				{ href: '/privacy', label: 'Confidentialité', description: 'Politique de confidentialité', icon: 'bi-lock' },
				{ href: '/use-conditions', label: 'Conditions d\'utilisation', description: 'CGU', icon: 'bi-clipboard-check' },
				{ href: '/sales-conditions', label: 'Conditions de vente', description: 'CGV', icon: 'bi-cart' },
			]
		},
	];
</script>

{#if activeDropdown || mobileMenuOpen}
	<div class="overlay" onclick={closeMobileMenu}></div>
{/if}

<div class="navbar-wrapper">
	<nav class="navbar" class:scrolled>
		<div class="navbar-container">
			<a href="/" class="navbar-brand" onclick={closeMobileMenu}>
				<img src="/favicon.png" alt="UnxWares Logo" class="logo" />
				<span class="brand-name">UnxWares</span>
			</a>

			<div class="navbar-center" class:mobile-open={mobileMenuOpen}>
				{#each navItems as item}
					{#if item.type === 'link'}
						<a
							href={item.href}
							class="nav-link"
							class:active={$page.url.pathname === item.href}
							onclick={closeMobileMenu}
						>
							{item.label}
						</a>
					{:else}
						<div class="nav-item-wrapper">
							<button
								class="nav-item"
								class:active={activeDropdown === item.id}
								onclick={() => toggleDropdown(item.id)}
							>
								<span>{item.label}</span>
								<i class="bi bi-chevron-down chevron" class:rotated={activeDropdown === item.id}></i>
							</button>

							{#if activeDropdown === item.id}
								<div class="dropdown-menu">
									{#each item.items as subItem}
										<a
											href={subItem.href}
											class="dropdown-item"
											class:active={$page.url.pathname === subItem.href}
											onclick={closeMobileMenu}
										>
											<i class="bi {subItem.icon}"></i>
											<div class="dropdown-item-content">
												<span class="dropdown-item-label">{subItem.label}</span>
												<span class="dropdown-item-desc">{subItem.description}</span>
											</div>
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>

			<div class="navbar-actions">
				<a href="/contact" class="btn-primary">Nous contacter</a>
			</div>

			<button class="mobile-menu-toggle" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<i class="bi {mobileMenuOpen ? 'bi-x-lg' : 'bi-list'}"></i>
			</button>
		</div>
	</nav>
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 999;
		animation: fadeIn 0.2s ease-in-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

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
			background: rgba(255, 255, 255, 0.98);
			backdrop-filter: blur(20px);
			-webkit-backdrop-filter: blur(20px);
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 12px;
			padding: 0;
			overflow-y: auto;
			transform: scale(0.95);
			opacity: 0;
			pointer-events: none;
			transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
			z-index: 10001;
		}

		.navbar-center.mobile-open {
			transform: scale(1);
			opacity: 1;
			pointer-events: all;
		}

		.nav-link {
			font-size: 22px;
			padding: 18px 32px;
			width: auto;
			text-align: left;
		}

		.nav-item-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			max-width: 400px;
		}

		.nav-item {
			font-size: 22px;
			padding: 18px 32px;
			width: 100%;
			text-align: left;
			justify-content: flex-start;
		}

		.dropdown-menu {
			position: static;
			box-shadow: none;
			border: 1px solid rgba(0, 0, 0, 0.1);
			background: rgba(255, 255, 255, 0.5);
			border-radius: 12px;
			margin-top: 12px;
			padding: 8px;
			width: 100%;
		}

		.dropdown-item {
			padding: 16px 24px;
			border-radius: 8px;
			margin: 4px 0;
		}

		.dropdown-item:hover {
			background: rgba(5, 12, 156, 0.08);
		}

		.dropdown-item i {
			font-size: 22px;
		}

		.dropdown-item-label {
			font-size: 17px;
		}

		.dropdown-item-desc {
			font-size: 14px;
		}
	}

	@media (max-width: 480px) {
		.navbar-wrapper {
			top: 12px;
			left: 12px;
			right: 12px;
		}

		.navbar-container {
			padding: 0 16px;
			height: 56px;
			gap: 16px;
		}

		.brand-name {
			font-size: 20px;
		}

		.logo {
			width: 32px;
			height: 32px;
		}

		.navbar-center {
			top: 84px;
			left: 12px;
			right: 12px;
		}
	}
</style>
