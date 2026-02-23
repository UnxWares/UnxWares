<script>
	import { t } from 'svelte-i18n';
	import { Palette, Download, Type, Image, CheckCircle2, XCircle, LayoutGrid, Award, FileType } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
    import ContactCTA from '$lib/components/ContactCTA.svelte';
    import Separator from '$lib/components/Separator.svelte';

    let activeTab = 'logo'; // 'insigne', 'logo', 'logotype'
    let activeColorTab = 'light'; // 'light', 'dark'

    $: assets = {
        insigne: {
            title: $t('brand_kit.insigne_title'),
            description: $t('brand_kit.insigne_desc'),
            variants: [
                { name: $t('brand_kit.variant_color'), key: 'color', bg: 'light', description: $t('brand_kit.variant_color_desc') },
                { name: $t('brand_kit.variant_monochrome'), key: 'monochrome', bg: 'light', description: $t('brand_kit.variant_monochrome_desc') },
                { name: $t('brand_kit.variant_inverted'), key: 'inverted', bg: 'dark', description: $t('brand_kit.variant_inverted_desc') },
                { name: $t('brand_kit.variant_grayscale'), key: 'grayscale', bg: 'light', description: $t('brand_kit.variant_grayscale_desc') }
            ]
        },
        logo: {
            title: $t('brand_kit.logo_title'),
            description: $t('brand_kit.logo_desc'),
            variants: [
                { name: $t('brand_kit.variant_color'), key: 'color', bg: 'light', description: $t('brand_kit.variant_color_desc') },
                { name: $t('brand_kit.variant_monochrome'), key: 'monochrome', bg: 'light', description: $t('brand_kit.variant_monochrome_desc') },
                { name: $t('brand_kit.variant_inverted'), key: 'inverted', bg: 'dark', description: $t('brand_kit.variant_inverted_desc') },
                { name: $t('brand_kit.variant_grayscale'), key: 'grayscale', bg: 'light', description: $t('brand_kit.variant_grayscale_desc') }
            ]
        },
        logotype: {
            title: $t('brand_kit.logotype_title'),
            description: $t('brand_kit.logotype_desc'),
            variants: [
                { name: $t('brand_kit.variant_color'), key: 'color', bg: 'light', description: $t('brand_kit.variant_color_desc') },
                { name: $t('brand_kit.variant_monochrome'), key: 'monochrome', bg: 'light', description: $t('brand_kit.variant_monochrome_desc') },
                { name: $t('brand_kit.variant_inverted'), key: 'inverted', bg: 'dark', description: $t('brand_kit.variant_inverted_desc') },
                { name: $t('brand_kit.variant_grayscale'), key: 'grayscale', bg: 'light', description: $t('brand_kit.variant_grayscale_desc') }
            ]
        }
    };

    function downloadAsset(type, variant, format) {
        const link = document.createElement('a');
        link.href = `/brandkit/${type}/${variant}.${format}`;
        link.download = `unxwares-${type}-${variant}.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
</script>

<svelte:head>
	<title>{$t('brand_kit.title')} - UnxWares</title>
	<meta name="description" content="{$t('brand_kit.intro')}" />
</svelte:head>

<main>
	<section class="hero-section">
		<div class="hero-icon">
			<Award size={50} />
		</div>
		<h1>{$t('brand_kit.title')}</h1>
		<p class="intro">{$t('brand_kit.intro')}</p>
	</section>

    <Separator />

	<!-- Logos Section with Tabs -->
	<section class="content-section">
		<div class="section-header">
			<Image size={32} />
			<h2>{$t('brand_kit.logos_title')}</h2>
		</div>
		<p class="section-intro">{$t('brand_kit.logos_intro')}</p>

        <div class="tabs-container">
            <div class="tabs">
                <button 
                    class="tab-btn {activeTab === 'insigne' ? 'active' : ''}" 
                    on:click={() => activeTab = 'insigne'}
                >
                    {$t('brand_kit.tab_insigne')}
                </button>
                <button 
                    class="tab-btn {activeTab === 'logo' ? 'active' : ''}" 
                    on:click={() => activeTab = 'logo'}
                >
                    {$t('brand_kit.tab_logo')}
                </button>
                <button 
                    class="tab-btn {activeTab === 'logotype' ? 'active' : ''}" 
                    on:click={() => activeTab = 'logotype'}
                >
                    {$t('brand_kit.tab_logotype')}
                </button>
            </div>
        </div>

        {#key activeTab}
            <div class="tab-content" in:fade={{ duration: 300 }}>
                <div class="tab-header">
                    <h3>{assets[activeTab].title}</h3>
                    <p>{assets[activeTab].description}</p>
                </div>

                <div class="logos-grid">
                    {#each assets[activeTab].variants as variant}
                        <div class="logo-card">
                            <div class="logo-preview {variant.bg === 'dark' ? 'dark-bg' : ''}">
                                <img 
                                    src="/brandkit/{activeTab}/{variant.key}.svg" 
                                    alt="UnxWares {assets[activeTab].title} {variant.name}" 
                                />
                            </div>
                            <h3>{variant.name}</h3>
                            <p>{variant.description}</p>
                            <div class="download-buttons">
                                <button class="btn-download" on:click={() => downloadAsset(activeTab, variant.key, 'png')}>
                                    <Download size={16} />
                                    PNG
                                </button>
                                <button class="btn-download" on:click={() => downloadAsset(activeTab, variant.key, 'svg')}>
                                    <Download size={16} />
                                    SVG
                                </button>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        {/key}
	</section>

    <Separator />

	<!-- Brand Colors -->
	<section class="content-section">
		<div class="section-header">
			<Palette size={32} />
			<h2>{$t('brand_kit.colors_title')}</h2>
		</div>
		<p class="section-intro">{$t('brand_kit.colors_intro')}</p>

        <h3 class="subsection-title">{$t('brand_kit.colors_main')}</h3>
		<div class="colors-grid">
			<div class="color-card primary">
				<div class="color-preview" style="background: #050c9c;"></div>
				<div class="color-info">
					<h3>{$t('brand_kit.blue_primary')}</h3>
					<div class="color-codes">
						<span class="code">HEX: #050c9c</span>
						<span class="code">RGB: 5, 12, 156</span>
                        <span class="code">Variable: --primary</span>
					</div>
				</div>
			</div>

            <div class="color-card accent-dark">
				<div class="color-preview" style="background: #6b78ff;"></div>
				<div class="color-info">
					<h3>{$t('brand_kit.blue_accent_dark')}</h3>
					<div class="color-codes">
						<span class="code">HEX: #6b78ff</span>
						<span class="code">RGB: 107, 120, 255</span>
                        <span class="code">Variable: --primary-text (Dark)</span>
					</div>
				</div>
			</div>
        </div>

        <div class="tabs-container" style="margin-top: 60px;">
            <div class="tabs">
                <button 
                    class="tab-btn {activeColorTab === 'light' ? 'active' : ''}" 
                    on:click={() => activeColorTab = 'light'}
                >
                    {$t('brand_kit.tab_light')}
                </button>
                <button 
                    class="tab-btn {activeColorTab === 'dark' ? 'active' : ''}" 
                    on:click={() => activeColorTab = 'dark'}
                >
                    {$t('brand_kit.tab_dark')}
                </button>
            </div>
        </div>

        {#key activeColorTab}
            <div class="tab-content" in:fade={{ duration: 300 }}>
                {#if activeColorTab === 'light'}
                    <h3 class="subsection-title">{$t('brand_kit.colors_bg_light')}</h3>
                    <div class="colors-grid">
                        <div class="color-card bg-primary">
                            <div class="color-preview" style="background: #ffffff; border-bottom: 1px solid var(--border-color);"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_primary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #ffffff</span>
                                    <span class="code">Variable: --bg-primary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card bg-secondary">
                            <div class="color-preview" style="background: #f8f9fa;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_secondary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #f8f9fa</span>
                                    <span class="code">Variable: --bg-secondary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card bg-tertiary">
                            <div class="color-preview" style="background: #f0f2ff;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_tertiary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #f0f2ff</span>
                                    <span class="code">Variable: --bg-tertiary</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="subsection-title">{$t('brand_kit.colors_text_light')}</h3>
                    <div class="colors-grid">
                        <div class="color-card text-primary">
                            <div class="color-preview" style="background: #1a1a1a;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_primary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #1a1a1a</span>
                                    <span class="code">Variable: --text-primary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card text-secondary">
                            <div class="color-preview" style="background: #4a4a4a;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_secondary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #4a4a4a</span>
                                    <span class="code">Variable: --text-secondary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card text-tertiary">
                            <div class="color-preview" style="background: #666666;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_tertiary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #666666</span>
                                    <span class="code">Variable: --text-tertiary</span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}

                {#if activeColorTab === 'dark'}
                    <h3 class="subsection-title">{$t('brand_kit.colors_bg_dark')}</h3>
                    <div class="colors-grid">
                        <div class="color-card bg-primary-dark">
                            <div class="color-preview" style="background: #1a1a1a;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_primary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #1a1a1a</span>
                                    <span class="code">Variable: --bg-primary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card bg-secondary-dark">
                            <div class="color-preview" style="background: #242424;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_secondary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #242424</span>
                                    <span class="code">Variable: --bg-secondary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card bg-tertiary-dark">
                            <div class="color-preview" style="background: #2a2a3a;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.bg_tertiary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #2a2a3a</span>
                                    <span class="code">Variable: --bg-tertiary</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 class="subsection-title">{$t('brand_kit.colors_text_dark')}</h3>
                    <div class="colors-grid">
                        <div class="color-card text-primary-dark">
                            <div class="color-preview" style="background: #e5e5e5;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_primary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #e5e5e5</span>
                                    <span class="code">Variable: --text-primary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card text-secondary-dark">
                            <div class="color-preview" style="background: #c4c4c4;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_secondary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #c4c4c4</span>
                                    <span class="code">Variable: --text-secondary</span>
                                </div>
                            </div>
                        </div>

                        <div class="color-card text-tertiary-dark">
                            <div class="color-preview" style="background: #a0a0a0;"></div>
                            <div class="color-info">
                                <h3>{$t('brand_kit.text_tertiary')}</h3>
                                <div class="color-codes">
                                    <span class="code">HEX: #a0a0a0</span>
                                    <span class="code">Variable: --text-tertiary</span>
                                </div>
                            </div>
                        </div>
                    </div>
                {/if}
            </div>
        {/key}
	</section>

    <Separator />

    <!-- Mockups Section -->
    <section class="content-section">
        <div class="section-header">
            <LayoutGrid size={32} />
            <h2>{$t('brand_kit.mockups_title')}</h2>
        </div>
        <p class="section-intro">{$t('brand_kit.mockups_intro')}</p>

        <div class="mockups-grid">
            {#each [2, 3, 4, 5, 6, 7, 8, 9] as i}
                <div class="mockup-card">
                    <img src="/brandkit/mockups/{i}.png" alt="UnxWares Mockup {i}" loading="lazy" />
                    <div class="mockup-actions">
                        <a href="/brandkit/mockups/{i}.png" download="unxwares-mockup-{i}.png" class="btn-download">
                            <Download size={16} /> {$t('brand_kit.download')}
                        </a>
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <Separator />

	<!-- Typography -->
	<section class="content-section">
		<div class="section-header">
			<Type size={32} />
			<h2>{$t('brand_kit.typography_title')}</h2>
		</div>
		<p class="section-intro">{$t('brand_kit.typography_intro')}</p>

		<div class="typography-grid">
			<div class="typo-card">
				<h3>{$t('brand_kit.font_primary')}</h3>
				<div class="font-preview poppins">
					<span class="font-name">Poppins</span>
					<p class="sample-text" style="font-family: 'Poppins', sans-serif;">AaBbCcDd 123456</p>
					<p class="font-weights">{$t('brand_kit.font_primary_desc')}</p>
                    <p class="font-weights">{$t('brand_kit.weights_poppins')}</p>
				</div>
			</div>

            <div class="typo-card">
				<h3>{$t('brand_kit.font_secondary')}</h3>
				<div class="font-preview gabarito">
					<span class="font-name">Gabarito</span>
					<p class="sample-text" style="font-family: 'Gabarito', sans-serif;">UnxWares Cloud</p>
					<p class="font-weights">{$t('brand_kit.font_secondary_desc')}</p>
                    <p class="font-weights">{$t('brand_kit.weights_gabarito')}</p>
				</div>
			</div>

			<div class="typo-card">
				<h3>{$t('brand_kit.font_handwritten')}</h3>
				<div class="font-preview peanut">
					<span class="font-name">Peanut Butter</span>
					<p class="sample-text accent" style="font-family: 'Peanut', cursive;">Authentique & Humain</p>
					<p class="font-weights">{$t('brand_kit.font_handwritten_desc')}</p>
				</div>
			</div>
		</div>
	</section>

    <Separator />

	<!-- Usage Guidelines -->
	<section class="content-section">
		<div class="section-header">
			<CheckCircle2 size={32} />
			<h2>{$t('brand_kit.guidelines_title')}</h2>
		</div>
		<p class="section-intro">{$t('brand_kit.guidelines_intro')}</p>

		<div class="guidelines-grid">
			<div class="guideline-card do">
				<div class="guideline-icon">
					<CheckCircle2 size={32} />
				</div>
				<h3>{$t('brand_kit.do_title')}</h3>
				<ul>
					<li>{$t('brand_kit.do_1')}</li>
					<li>{$t('brand_kit.do_2')}</li>
					<li>{$t('brand_kit.do_3')}</li>
					<li>{$t('brand_kit.do_4')}</li>
					<li>{$t('brand_kit.do_5')}</li>
				</ul>
			</div>

			<div class="guideline-card dont">
				<div class="guideline-icon">
					<XCircle size={32} />
				</div>
				<h3>{$t('brand_kit.dont_title')}</h3>
				<ul>
					<li>{$t('brand_kit.dont_1')}</li>
					<li>{$t('brand_kit.dont_2')}</li>
					<li>{$t('brand_kit.dont_3')}</li>
					<li>{$t('brand_kit.dont_4')}</li>
					<li>{$t('brand_kit.dont_5')}</li>
				</ul>
			</div>
		</div>
	</section>

    <Separator />

	<!-- Credits -->
	<section class="content-section">
		<div class="credits-card">
			<div class="credits-content">
				<h2>{$t('brand_kit.credits_title')}</h2>
				<p>
					{@html $t('brand_kit.credits_p1')}
				</p>
				<p>
					{$t('brand_kit.credits_p2')}
				</p>
				<a href="https://infographiks.com/" target="_blank" rel="noopener noreferrer" class="btn-secondary">
					{$t('brand_kit.visit_infographiks')}
				</a>
			</div>
			<div class="credits-logo">
				<img src="/images/partners/infographiks-logo.svg" alt="Infographiks Logo" />
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
		margin: 0 0 40px 0;
		line-height: 1.8;
	}

    .subsection-title {
        font-size: 20px;
        font-weight: 600;
        margin: 40px 0 20px 0;
        color: var(--text-primary);
        padding-left: 10px;
        border-left: 4px solid var(--primary);
    }

    /* Tabs */
    .tabs-container {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    .tabs {
        display: flex;
        background: var(--bg-secondary);
        padding: 6px;
        border-radius: 12px;
        border: 1px solid var(--border-color);
        gap: 6px;
    }

    .tab-btn {
        padding: 10px 30px;
        border: none;
        background: transparent;
        color: var(--text-secondary);
        font-family: 'Poppins', sans-serif;
        font-size: 15px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .tab-btn:hover {
        color: var(--text-primary);
        background: var(--hover-bg);
    }

    .tab-btn.active {
        background: var(--bg-primary);
        color: var(--primary);
        font-weight: 600;
        box-shadow: var(--shadow-sm);
    }

    .tab-header {
        text-align: center;
        margin-bottom: 40px;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .tab-header h3 {
        font-size: 22px;
        margin-bottom: 10px;
    }

    .tab-header p {
        color: var(--text-secondary);
        font-size: 15px;
    }

	/* Colors Grid */
	.colors-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 25px;
	}

	.color-card {
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.3s ease;
	}

	.color-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
	}

	.color-preview {
		height: 120px;
		width: 100%;
	}

	.color-card.primary .color-preview {
		background: #050c9c;
	}

	.color-card.dark .color-preview {
		background: #1a1a1a;
	}

	.color-card.light .color-preview {
		background: #ffffff;
		border-bottom: 1px solid var(--border-color);
	}

	.color-card.secondary .color-preview {
		background: #4a4a4a;
	}

	.color-info {
		padding: 20px;
	}

	.color-info h3 {
		margin: 0 0 15px 0;
		font-size: 18px;
		font-weight: 600;
		color: var(--text-primary);
	}

	.color-codes {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.code {
		font-family: 'Courier New', monospace;
		font-size: 14px;
		color: var(--text-secondary);
		background: var(--bg-secondary);
		padding: 6px 12px;
		border-radius: 6px;
	}

	/* Logos Grid */
	.logos-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 30px;
	}

	.logo-card {
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		padding: 25px;
		text-align: center;
		transition: all 0.3s ease;
	}

	.logo-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: var(--primary);
	}

	.logo-preview {
		height: 140px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
		background: var(--bg-secondary);
		border-radius: 8px;
		padding: 20px;
	}

	.logo-preview.dark-bg {
		background: #1a1a1a;
        background-image: linear-gradient(45deg, #1f1f1f 25%, transparent 25%), 
                          linear-gradient(-45deg, #1f1f1f 25%, transparent 25%), 
                          linear-gradient(45deg, transparent 75%, #1f1f1f 75%), 
                          linear-gradient(-45deg, transparent 75%, #1f1f1f 75%);
        background-size: 20px 20px;
        background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
	}

	.logo-preview img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.logo-card h3 {
		font-size: 16px;
		font-weight: 600;
		margin: 0 0 5px 0;
		color: var(--text-primary);
	}

	.logo-card p {
		font-size: 13px;
		color: var(--text-secondary);
		margin: 0 0 20px 0;
        min-height: 40px;
	}

	.download-buttons {
		display: flex;
		gap: 10px;
		justify-content: center;
        flex-wrap: wrap;
	}

	.btn-download {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 8px 16px;
		background: var(--bg-secondary);
		border: 1px solid var(--border-color);
		border-radius: 6px;
		color: var(--text-primary);
		font-family: 'Poppins', sans-serif;
		font-size: 12px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-download:hover {
		background: var(--primary);
		color: white;
		border-color: var(--primary);
	}

	/* Typography */
	.typography-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.typo-card {
		background: var(--bg-primary);
		border: 1px solid var(--border-color);
		border-radius: 12px;
		padding: 30px;
		transition: all 0.3s ease;
	}

	.typo-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
		border-color: var(--primary);
	}

	.typo-card h3 {
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 20px 0;
		color: var(--text-primary);
	}

	.font-preview {
		background: var(--bg-secondary);
		padding: 25px;
		border-radius: 8px;
	}

	.font-name {
		font-size: 14px;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 1px;
		font-weight: 600;
	}

	.sample-text {
		font-size: 32px;
		margin: 15px 0;
		color: var(--text-primary);
	}

	.sample-text.accent {
		font-family: 'Peanut', cursive;
		color: var(--primary-text);
        font-size: 42px; /* Slightly larger for the handwritten font */
	}

	.font-preview.poppins .sample-text {
		font-family: 'Poppins', sans-serif;
	}

	.font-weights {
		font-size: 13px;
		color: var(--text-secondary);
		margin: 0;
	}

	/* Guidelines */
	.guidelines-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
	}

	.guideline-card {
		background: var(--bg-primary);
		border: 2px solid var(--border-color);
		border-radius: 12px;
		padding: 30px;
		transition: all 0.3s ease;
	}

	.guideline-card.do {
		border-color: #22c55e;
	}

	.guideline-card.dont {
		border-color: #ef4444;
	}

	.guideline-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.guideline-icon {
		margin-bottom: 20px;
	}

	.guideline-card.do .guideline-icon :global(svg) {
		color: #22c55e;
	}

	.guideline-card.dont .guideline-icon :global(svg) {
		color: #ef4444;
	}

	.guideline-card h3 {
		font-size: 20px;
		font-weight: 600;
		margin: 0 0 20px 0;
		color: var(--text-primary);
	}

	.guideline-card ul {
		margin: 0;
		padding-left: 20px;
	}

	.guideline-card li {
		font-size: 15px;
		line-height: 1.8;
		color: var(--text-secondary);
		margin-bottom: 12px;
	}

    /* Credits */
    .credits-card {
        background: #ffffff;
        border: 1px solid var(--border-color);
        border-radius: 12px;
        padding: 40px;
        display: flex;
        align-items: center;
        gap: 40px;
        color: #1a1a1a;
        box-shadow: var(--shadow-md);
        transition: all 0.3s ease;
    }

    :global([data-theme="dark"]) .credits-card {
        background: #000000;
        color: #ffffff;
        border-color: #333;
    }

    .credits-content {
        flex: 1;
    }

    .credits-content h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 20px 0;
        color: inherit;
    }

    .credits-content p {
        font-size: 16px;
        line-height: 1.8;
        margin: 0 0 20px 0;
        color: inherit;
        opacity: 0.9;
        text-align: left;
    }

    .credits-content strong {
        color: inherit;
        font-weight: 600;
        text-decoration: underline;
        text-decoration-color: var(--primary);
    }

    .credits-logo {
        flex-shrink: 0;
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        padding: 20px;
        transition: all 0.3s ease;
    }

    :global([data-theme="dark"]) .credits-logo {
        background: rgba(255, 255, 255, 0.05);
    }

    .credits-logo img {
        width: 100%;
        height: auto;
        transition: filter 0.3s ease;
        filter: brightness(0); /* Light mode: Force black */
    }

    :global([data-theme="dark"]) .credits-logo img {
        filter: none; /* Dark mode: Keep original (white) */
    }

    .btn-secondary {
        display: inline-flex;
        align-items: center;
        padding: 10px 24px;
        background: transparent;
        border: 1px solid #1a1a1a;
        color: #1a1a1a;
        text-decoration: none;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 600;
        transition: all 0.3s ease;
    }

    :global([data-theme="dark"]) .btn-secondary {
        border-color: #ffffff;
        color: #ffffff;
    }

    .btn-secondary:hover {
        background: #1a1a1a;
        color: #ffffff;
    }

    :global([data-theme="dark"]) .btn-secondary:hover {
        background: #ffffff;
        color: #000000;
    }

    @media (max-width: 768px) {
        .credits-card {
            flex-direction: column-reverse;
            text-align: center;
            padding: 30px;
        }

        .credits-content h2 {
            text-align: center;
        }

        .credits-content p {
            text-align: center;
        }

        .credits-logo {
            width: 100%;
            max-width: 200px;
        }
    }

	@media (max-width: 768px) {
		.hero-section h1 {
			font-size: 32px;
		}

		.section-header h2 {
			font-size: 22px;
		}

		.colors-grid,
		.logos-grid,
		.typography-grid,
		.guidelines-grid {
			grid-template-columns: 1fr;
		}
	}

    /* Mockups */
    .mockups-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
    }

    .mockup-card {
        background: var(--bg-primary);
        border: 1px solid var(--border-color);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s ease;
        position: relative;
        group: hover;
    }

    .mockup-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(5, 12, 156, 0.1);
        border-color: var(--primary);
    }

    .mockup-card img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease;
    }

    .mockup-card:hover img {
        transform: scale(1.02);
    }

    .mockup-actions {
        padding: 15px;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-color);
        display: flex;
        justify-content: center;
    }
</style>
