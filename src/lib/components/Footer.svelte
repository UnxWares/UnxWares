<script>
	import { t } from 'svelte-i18n';
	import { CloudFog, Code, UserCog, BarChart, Globe, MessageCircle, Instagram, Cloud as CloudIcon, Github, Folder, BellOff, CheckCircle2, Mail } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="poppins-regular">
	<div class="footer-infos">
		<div class="banner">
			<figure>
				<img src="/images/unxwares_logotype.png" alt="UnxWares Logotype in the footer" />
			</figure>
		</div>
		<div class="footer-links">
			<ul class="general-links">
				<h3>{$t('footer.quick_links')}</h3>
				<li class="unxwares uw-cloud">
					<a href="https://www.unxwares.cloud"><CloudFog size={16} /> {$t('footer.cloud_platform')}</a>
				</li>
				<li class="unxwares uw-studio">
					<a href="https://www.unxwares.studio"><Code size={16} /> {$t('footer.dev_studio')}</a>
				</li>
				<li class="unxwares uw-clientarea">
					<a href="https://customers.unxwares.com"><UserCog size={16} /> {$t('footer.client_area')}</a>
				</li>
				<li class="unxwares uw-status">
					<a href="https://status.unxwares.com"><BarChart size={16} /> {$t('footer.service_status')}</a>
				</li>
				<li class="unxwares uw-car">
					<a href="/certifications-and-responsibility" data-sveltekit-preload-data="hover"><Globe size={16} /> {$t('footer.certifications')}</a>
				</li>
			</ul>
			<ul class="contact-links">
				<h3>{$t('footer.find_us')}</h3>
				<li class="discord">
					<a href="https://www.discord.com/invite/PPRacEf7yB"><MessageCircle size={16} /> Discord</a>
				</li>
				<li class="instagram">
					<a href="https://www.instagram.com/unxwares"><Instagram size={16} /> Instagram</a>
				</li>
				<li class="bluesky">
					<a href="https://bsky.app/profile/unxwares.bsky.social"><CloudIcon size={16} /> Bluesky</a>
				</li>
				<li class="github">
					<a href="https://www.github.com/UnxWares"><Github size={16} /> GitHub</a>
				</li>
				<li class="unxwares">
					<a href="/datacenter" data-sveltekit-preload-data="hover"><img src="/images/unxwares_insigne_baw.png" alt="UnxWares blanck and white icon in a button in the footer"> {$t('footer.datacenter')}</a>
				</li>
			</ul>
			<ul class="legal-links">
				<h3>{$t('footer.legal')}</h3>
				<li class="legal">
					<a href="/legal" data-sveltekit-preload-data="hover"><Folder size={16} /> {$t('footer.legal_notice')}</a>
				</li>
				<li class="privacy">
					<a href="/privacy" data-sveltekit-preload-data="hover"><BellOff size={16} /> {$t('footer.privacy')}</a>
				</li>
				<li class="use-conditions">
					<a href="/use-conditions" data-sveltekit-preload-data="hover"><CheckCircle2 size={16} /> {$t('footer.terms')}</a>
				</li>
				<li class="sales-conditions">
					<a href="/sales-conditions" data-sveltekit-preload-data="hover"><CheckCircle2 size={16} /> {$t('footer.sales')}</a>
				</li>
				<li class="unxwares uw-contact">
					<a href="/contact" data-sveltekit-preload-data="hover"><Mail size={16} /> {$t('footer.contact')}</a>
				</li>
			</ul>
		</div>
	</div>
	<hr>
	<div class="copyright">
		<p>{$t('footer.copyright').replace('2025', currentYear)}</p>
		<p>{$t('footer.powered_by')} <a href="https://www.unxwares.studio/"><img src="/favicon.png" alt="UnxWares icon in the coryright"> UnxWares</a>.</p>
	</div>
</footer>

<style>
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-top: 1px solid var(--border-color);
				background-color: var(--bg-primary);
				padding-top: 40px;
    }
    footer > *{
        width: 80%;
    }
    footer .footer-infos{
        display: flex;
        justify-content: center;
        margin: 30px 0;
        align-items: center;
    }
    footer .footer-infos .banner{
        display: flex;
        align-items: center;
				justify-content: center;
        width: 45%;
    }
    footer .footer-infos .banner figure img{
        height: 100px;
    }
    footer .footer-infos .footer-links{
        display: flex;
        width: 50%;
        justify-content: space-around;
    }
    footer .footer-infos .footer-links ul{
        padding: 0;
    }
    footer .footer-infos .footer-links ul h3 {
        margin: 0 0 10px 0;
    }
    footer .footer-infos .footer-links ul li{
        display: block;
    }
    footer .footer-infos .footer-links ul li a{
        text-decoration: none;
        color: var(--text-primary);
    }

    footer .footer-infos .footer-links .contact-links .unxwares a{
        display: flex;
        align-items: center;
    }

    footer .footer-infos .footer-links .contact-links .unxwares a img{
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }

    :global([data-theme="dark"]) footer .footer-infos .footer-links .contact-links .unxwares a img {
        filter: brightness(10);
    }
    footer hr{
        margin: 3px 0;
        width: 80%;
        border: none;
        border-top: 1px double var(--border-color);
        color: var(--text-secondary);
    }
    footer .copyright{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer .copyright p{
        display: flex;
        align-items: center;
        font-size: 16px;
				margin: 5px;
    }
    footer .copyright p a{
        text-decoration: none;
        display: flex;
        align-items: center;
        color: var(--text-primary);
    }
    footer .copyright p a img{
        width: 25px;
        height: 25px;
        margin: 0 4px;
    }
		
		@media screen and (max-width: 1482px) {
        footer > *{
            width: 90%;
        }

        footer hr{
						width: 90%;
        }

				footer .footer-infos .footer-links{
						width: 55%;
						justify-content: space-evenly;
        }
    }

    @media screen and (max-width: 1182px) {
				footer .footer-infos{
						flex-direction: column;
				}

				footer .footer-infos .footer-links{
						width: 100%;
        }

				footer .copyright{
						flex-direction: column;
        }

        footer .copyright p{
						text-align: center;
        }

        footer hr{
            width: 75%;
        }
    }

    @media screen and (max-width: 768px) {
        footer hr{
            width: 85%;
        }
    }

    @media screen and (max-width: 674px) {
        footer > *{
            width: 100%;
        }

        footer .footer-infos .banner figure img{
						height: 70px;
        }

				footer .footer-infos .footer-links{
						width: 50%;
						flex-direction: column;
						font-size: 1.2rem;
        }

				footer .copyright p:first-child{
						width: 70%;
        }

        footer hr{
            width: 70%;
        }
    }

    @media screen and (max-width: 458px) {
        footer .footer-infos .footer-links {
            width: 70%;
        }

        footer .copyright p:first-child{
            width: 80%;
        }

        footer hr{
            width: 80%;
        }
    }

</style>
