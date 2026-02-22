<script>
	import Typed from 'typed.js';
	import { t, locale } from 'svelte-i18n';
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ChevronsDown } from 'lucide-svelte';

	const greetings = {
		fr: 'Salut toi &#x1F44B;, Nous sommes <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000',
		en: 'Hi there &#x1F44B;, We are <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000',
		de: 'Hallo &#x1F44B;, Wir sind <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000',
		nl: 'Hallo &#x1F44B;, Wij zijn <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000',
		es: 'Hola &#x1F44B;, Somos <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000',
		it: 'Ciao &#x1F44B;, Siamo <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000'
	};

	const allLanguages = ['fr', 'en', 'de', 'nl', 'es', 'it'];

	let typedInstance;

	$effect(() => {
		const currentLang = $locale || 'fr';

		// Réorganiser pour commencer par la langue actuelle
		const orderedLanguages = [currentLang, ...allLanguages.filter(lang => lang !== currentLang)];
		const orderedStrings = orderedLanguages.map(lang => greetings[lang]);

		// Détruire l'instance précédente si elle existe
		if (typedInstance) {
			typedInstance.destroy();
		}

		typedInstance = new Typed('.typing', {
			strings: orderedStrings,
			typeSpeed: 140,
			backSpeed: 30,
			loop: true,
			showCursor: false,
			contentType: 'html'
		});

		return () => {
			if (typedInstance) {
				typedInstance.destroy();
			}
		};
	});

	$effect(() => {
		const button = document.querySelector(".scroll-button");
		if (button) {
			const handleClick = () => {
				const current = window.scrollY;
				const viewportHeight = window.innerHeight;
				const target = Math.min(
					Math.floor((current + viewportHeight) / viewportHeight) * viewportHeight,
					document.body.scrollHeight - viewportHeight
				)+15;

				window.scrollTo({
					top: target,
					behavior: "smooth"
				});
			};

			button.addEventListener("click", handleClick);

			return () => {
				button.removeEventListener("click", handleClick);
			};
		}
	});
</script>

<header>
	<figure in:scale={{ duration: 800, delay: 150, easing: quintOut, start: 0.8 }}>
		<img src="/images/unxwares_logotype.png" alt="logo" />
		<h6 class="poppins-regular typing"></h6>
	</figure>
	<div class="scroll-button" in:fade={{ duration: 600, delay: 800 }}>
			<span class="poppins-regular"><ChevronsDown size={24} /> <span>{$t('header.discover')}</span></span>
	</div>
</header>

<style>
    header{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        flex-direction: column;
        font-size: 20px;
        position: relative;
        z-index: 0;
    }

    header figure{
        margin: 0 0 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: auto;
    }

    header figure img{
        max-width: 40vw;
    }

    .typing {
        min-height: 66px;
        font-size: 40px;
        display: block;
        text-align: center;
        max-width: 90vw;
        line-height: 1.4;
    }

    header .scroll-button{
        position: absolute;
        z-index: 3;
        bottom: 75px;
        left: 50%;
        cursor: pointer;
        animation-name: go-to-bottom-anim;
        animation-duration: 3.5s;
        animation-iteration-count: infinite;
        padding: 0 15px;
        border-radius: 16px;
        border: 3px solid #ffffff;
    }
    header .scroll-button span{
        color: #ffffff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        height: 66px;
        align-items: center;
        transition: all 0.3s ease-in-out;
				gap: 8px;
    }
    @keyframes go-to-bottom-anim {
        0% {
            transform: scale(1) translateX(-50%);
        }
        50% {
            transform: translate3d(0, -12px, 0) scale(1.01) translateX(-50%);
        }
        100% {
            transform: scale(1) translateX(-50%);
        }
    }

		@media only screen and (max-width: 1024px) {
        header figure img{
            max-width: 60vw;
        }
		}

    @media only screen and (max-width: 682px) {

				.typing {
						font-size: 36px;
						min-height: 100px;
				}

        header{
						font-size: 16px;
				}

        header .scroll-button span{
						font-size: 24px;
            height: 62px;
        }

        header figure img{
            max-width: 80vw;
        }
    }

    @media only screen and (max-width: 582px) {

        .typing {
            font-size: 30px;
            min-height: 90px;
        }

        header{
            font-size: 14px;
        }

        header .scroll-button span{
            font-size: 20px;
            height: 57px;
        }

    }

    @media only screen and (max-width: 512px) {
        .typing {
            font-size: 26px;
            min-height: 80px;
        }
        header{
            font-size: 11px;
        }

        header .scroll-button span{
            font-size: 18px;
            height: 54px;
        }

        header .scroll-button{
            bottom: 45px;
        }
    }

    @media only screen and (max-width: 418px) {
        .typing {
            font-size: 22px;
            min-height: 70px;
        }
        header {
            font-size: 9px;
        }

        header .scroll-button span {
            font-size: 12px;
            height: 45px;
        }

				header .scroll-button{
            bottom: 35px;
				}
    }

    @media only screen and (max-width: 340px) {
        .typing {
            font-size: 16px;
            min-height: 60px;
        }
        header {
            font-size: 8px;
        }

        header .scroll-button span {
            font-size: 12px;
            height: 35px;
        }

    }

		@media only screen and (max-height: 618px){
				header .scroll-button{
						bottom: 50px;
				}

				header .scroll-button span{
						height: 50px;
        }
		}

    @media only screen and (max-height: 452px){

        header figure{
						margin-bottom: 110px;
        }

        header .scroll-button{
            bottom: 28px;
        }

        header .scroll-button span{
            height: 44px;
        }
    }

    @media only screen and (max-height: 376px){
        header .scroll-button{
            bottom: 20px;
        }

        header .scroll-button span{
            height: 40px;
            font-size: 18px;
        }

        header {
            font-size: 14px;
        }
        .typing {
            font-size: 28px;
            min-height: 85px;
        }
    }
</style>