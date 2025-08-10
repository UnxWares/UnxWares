<footer class="poppins-regular">
	<div class="footer-infos">
		<div class="banner">
			<figure>
				<img src="/images/unxwares_logotype.png" alt="UnxWares Logotype in the footer" />
			</figure>
		</div>
		<div class="footer-links">
			<ul class="general-links">
				<h3>Liens rapides</h3>
				<li class="idk">
					<a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
				</li>
				<li class="idk">
					<a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
				</li>
				<li class="idk">
					<a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
				</li>
				<li class="idk">
					<a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
				</li>
				<hr>
				<li class="idk">
					<a href="#"><i class="bi bi-cursor"></i> Must be determined</a>
				</li>
			</ul>
			<ul class="contact-links">
				<h3>Nous retrouver</h3>
				<li class="discord">
					<a href="https://www.discord.com/invite/6SwTfXBx4h"><i class="bi bi-discord"></i> Discord</a>
				</li>
				<li class="instagram">
					<a href="https://www.instagram.com/unxwares"><i class="bi bi-instagram"></i> Instagram</a>
				</li>
				<li class="twitter-x">
					<a href="https://bsky.app/profile/unxwares.bsky.social"><i class="bi bi-bluesky"></i> Bluesky</a>
				</li>
				<li class="github">
					<a href="https://www.github.com/UnxWares"><i class="bi bi-github"></i> GitHub</a>
				</li>
				<li class="unxwares">
					<a href="https://www.unxwares.com/datacenter"><img src="/images/unxwares_insigne_baw.png" alt="UnxWares blanck and white icon in a button in the footer"> Centre de données</a>
				</li>
			</ul>
			<ul class="legal-links">
				<h3>Légal</h3>
				<li class="legal">
					<a href="/legal"><i class="bi bi-folder"></i> Mentions légales</a>
				</li>
				<li class="privacy">
					<a href="/privacy"><i class="bi bi-bell-slash"></i> Confidentialité</a>
				</li>
				<li class="use-conditions">
					<a href="/use-conditions"><i class="bi bi-check2-circle"></i> CGU</a>
				</li>
			</ul>
		</div>
	</div>
	<hr>
	<div class="copyright">
		<p>UnxWares Studio & Cloud - UnxWares © 2023-2025 - Tous droits réservés</p>
		<p>Développé et propulsé par <a href="https://www.unxwares.studio/"><img src="/favicon.png" alt="UnxWares icon in the coryright"> UnxWares</a>.</p>
	</div>
</footer>

<style>
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0 0 8px #D3D3D3;
				background-color: #ffffff;
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
        color: black;
    }
    footer .footer-infos .footer-links .general-links hr{
        width: 100%;
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
    footer hr{
        margin: 3px 0;
        width: 80%;
        border: none;
        border-top: 1px double #333;
        color: #333;
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
        color: black;
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
