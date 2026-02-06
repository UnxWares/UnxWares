<script>
	import { locale, locales } from 'svelte-i18n';

	let dropdownOpen = $state(false);

	const languageNames = {
		fr: 'Français',
		en: 'English',
		de: 'Deutsch',
		nl: 'Nederlands',
		es: 'Español'
	};

	const languageFlags = {
		fr: '🇫🇷',
		en: '🇬🇧',
		de: '🇩🇪',
		nl: '🇳🇱',
		es: '🇪🇸'
	};

	function switchLanguage(lang) {
		locale.set(lang);
		dropdownOpen = false;
	}

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function closeDropdown(event) {
		if (!event.target.closest('.language-switcher')) {
			dropdownOpen = false;
		}
	}

	$effect(() => {
		if (dropdownOpen) {
			document.addEventListener('click', closeDropdown);
			return () => document.removeEventListener('click', closeDropdown);
		}
	});
</script>

<div class="language-switcher">
	<button class="lang-button" onclick={toggleDropdown}>
		<span class="flag">{languageFlags[$locale]}</span>
		<span class="lang-code">{$locale?.toUpperCase()}</span>
		<i class="bi bi-chevron-down" class:rotated={dropdownOpen}></i>
	</button>

	{#if dropdownOpen}
		<div class="lang-dropdown">
			{#each $locales as lang}
				<button
					class="lang-option"
					class:active={$locale === lang}
					onclick={() => switchLanguage(lang)}
				>
					<span class="flag">{languageFlags[lang]}</span>
					<span class="lang-name">{languageNames[lang]}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.language-switcher {
		position: relative;
		display: flex;
		align-items: center;
	}

	.lang-button {
		background: transparent;
		border: 1px solid rgba(0, 0, 0, 0.15);
		color: #1a1a1a;
		padding: 6px 12px;
		border-radius: 6px;
		cursor: pointer;
		font-size: 13px;
		font-weight: 600;
		transition: all 0.2s ease;
		font-family: 'Poppins', sans-serif;
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.lang-button:hover {
		background: rgba(0, 0, 0, 0.04);
		border-color: rgba(0, 0, 0, 0.25);
	}

	.flag {
		font-size: 16px;
		line-height: 1;
	}

	.lang-code {
		min-width: 20px;
	}

	.lang-button i {
		font-size: 10px;
		transition: transform 0.2s ease;
	}

	.lang-button i.rotated {
		transform: rotate(180deg);
	}

	.lang-dropdown {
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		min-width: 160px;
		background: white;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
		border: 1px solid rgba(0, 0, 0, 0.08);
		padding: 6px;
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

	.lang-option {
		width: 100%;
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px 12px;
		background: transparent;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-family: 'Poppins', sans-serif;
		font-size: 14px;
		font-weight: 500;
		color: #1a1a1a;
		transition: all 0.2s ease;
		text-align: left;
	}

	.lang-option:hover {
		background: rgba(0, 0, 0, 0.04);
	}

	.lang-option.active {
		background: rgba(5, 12, 156, 0.08);
		color: #050c9c;
		font-weight: 600;
	}

	.lang-name {
		flex: 1;
	}

	@media (max-width: 768px) {
		.lang-button {
			padding: 8px 14px;
			font-size: 14px;
			border-color: rgba(0, 0, 0, 0.2);
		}

		.lang-dropdown {
			min-width: 180px;
		}

		.lang-option {
			padding: 12px 14px;
			font-size: 15px;
		}
	}
</style>
