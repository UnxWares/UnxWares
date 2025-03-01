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
				window.location.href = "https://github.com/UnxWares";
			});
		}
	})
</script>

<header>
	<figure>
		<img src="/images/unxwares_logotype.png" alt="logo" />
		<h1 class="segoe-regular typing"></h1>
	</figure>
		<div class="scroll-button">
			<span><i class="bi bi-chevron-double-down"></i> ‎ Découvrez-nous</span>
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
    }

    header figure{
        margin: 0 0 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: auto;
        font-size: 40px;
    }

    header figure img{
        max-width: 40vw;
    }

    .typing {
        min-height: 66px;
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
</style>