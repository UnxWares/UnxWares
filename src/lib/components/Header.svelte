<script>
	import Typed from 'typed.js';

	$effect(() => {
		const typed = new Typed('.typing', {
			strings: ['Hi there &#x1F44B;, We are <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000', 'Salut toi &#x1F44B;, Nous sommes <span style="color: #050c9c; font-family: Peanut, cursive;">UnxWares</span> ^5000'],
			typeSpeed: 140,
			backSpeed: 30,
			loop: true,
			showCursor: false,
			contentType: 'html'
		});

		const button = document.querySelector(".scroll-button");
		if (button) {
			button.addEventListener("click", () => {
				const current = window.scrollY;
				const viewportHeight = window.innerHeight;
				const target = Math.min(
					Math.floor((current + viewportHeight) / viewportHeight) * viewportHeight,
					document.body.scrollHeight - viewportHeight
				)+85;

				window.scrollTo({
					top: target,
					behavior: "smooth"
				});
			});
		}
	})
</script>

<header>
	<figure>
		<img src="/images/unxwares_logotype.png" alt="logo" />
		<h6 class="poppins-regular typing"></h6>
	</figure>
	<div class="scroll-button">
			<span class="poppins-regular"><i class="bi bi-chevron-double-down"></i> <span>Découvrez-nous</span></span>
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
        display: inline-block;
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
        }
    }
</style>