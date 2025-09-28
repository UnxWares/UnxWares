<svelte:head>
	<title>UnxWares - Welcome</title>

	<meta property="og:title" content="UnxWares - Welcome">
	<meta name="twitter:title" content="UnxWares - Welcome">

	<meta property="og:url" content="https://www.unxwares.com">
	<meta name="twitter:site" content="https://www.unxwares.com">
</svelte:head>

<main>
	<section id="short-whoareus">
		<div class="unxwares-title">
			<img src="/favicon.png" alt="UnxWares favicon" />
			<h1>UnxWares - Bienvenue ✨</h1>
		</div>
		<p>Nous sommes UnxWares, une entreprise française, implantée plus précisément en Normandie,
			avec un centre de données situé à Caen. Nous réalisons un travail conséquent pour permettre
			à quiconque souhaite bénéficier de notre expertise, même avec un budget parfois limité.
		</p>
		<p>
			C’est pourquoi nous proposons, via UnxWares Cloud, des solutions d’hébergement prêtes
			à l’emploi ainsi que sur-mesure, afin que nos clients puissent sélectionner l’option
			la mieux adaptée à leurs besoins, à un prix équitable.
		</p>
		<p>
			Grâce à la passion et à la créativité de l’équipe UnxWares Studio, nous assurons également
			la création complète de vos projets, qu’il s’agisse de sites web, logiciels, progiciels,
			APIs, applications ou jeux vidéo. Pour la réalisation de ces projets, nous collaborons avec
			une équipe interne exceptionnelle ainsi qu’avec des développeurs indépendants que nous
			certifions. Nous leur garantissons une rémunération juste et prenons en charge la gestion
			complète du projet, afin qu’ils puissent se concentrer pleinement sur la réalisation technique.
		</p>
		<p>
			Nous aspirons à être un modèle d’excellence et d’éthique dans notre secteur, et c’est pourquoi
			nous mettons un point d’honneur à allier qualité, transparence et innovation dans toutes
			nos prestations.
		</p>
		<p>
			Découvrez-en plus sur nous, nos certifications, notre engagement, notre infrastructure
			et les technologies que nous mettons en œuvre pour vous satisfaire en parcourant ce site,
			avec notamment une reconstitution visuelle de notre infrastructure, et en découvrants nos
			choix techniques et partenaires éthiques.
		</p>
		<div class="short-whoareus-buttons">
			<a href="/whoareus"><i class="bi bi-people"></i> Notre histoire</a>
			<a href="/certifications-and-responsibility"><i class="bi bi-globe-europe-africa-fill"></i> Certifications et Engagement</a>
		</div>
	</section>
</main>

<style>
    main #short-whoareus {
        width: 65%;
        max-width: 1064px;
    }
    main #short-whoareus .unxwares-title{
        display: flex;
        align-items: center;
        justify-content: center;
				margin-bottom: 20px;
				font-size: 26px;
    }
		main #short-whoareus .unxwares-title img{
        width:120px;
				height:120px;
		}
    @media (max-width: 1238px) {
        main #short-whoareus .unxwares-title{
            font-size: 22px;
        }
        main #short-whoareus .unxwares-title img{
            width:100px;
            height:100px;
        }
    }
    @media (max-width: 1048px) {
        main #short-whoareus .unxwares-title{
            font-size: 18px;
        }
        main #short-whoareus .unxwares-title img{
            width:70px;
            height:70px;
        }
    }
    @media (max-width: 842px) {
        main #short-whoareus .unxwares-title{
            font-size: 14px;
        }
        main #short-whoareus .unxwares-title img{
            width:50px;
            height:50px;
        }
    }
    @media (max-width: 658px) {
        main #short-whoareus .unxwares-title{
            font-size: 12px;
        }
        main #short-whoareus .unxwares-title img{
            width:35px;
            height:35px;
        }
    }
    @media (max-width: 548px) {
        main #short-whoareus .unxwares-title{
            font-size: 10px;
        }
        main #short-whoareus {
            width: 75%;
        }
    }
    @media (max-width: 406px) {
        main #short-whoareus {
            width: 85%;
        }
    }
    main #short-whoareus .unxwares-title h1{
        margin: 0 0 0 10px;
    }
    main #short-whoareus p{
        text-align: justify;
    }
    main #short-whoareus .short-whoareus-buttons{
        text-align: center;
				margin-top: 30px;
    }
    main #short-whoareus .short-whoareus-buttons a{
        text-decoration: none;
        border: 0;
        border-radius: 10px;
        font-size: 15px;
        text-transform: uppercase;
        padding: 9px 26px;
        margin: 5px 15px 18px;
        display: inline-block;
        outline: none;
        transition: transform .3s ease 0s;
        transform: initial;
        color: #fff;
				font-weight: bold;
        background-color: #050c9c;
        font-family: Gabarito, Poppins, sans-serif;
    }
    main #short-whoareus .short-whoareus-buttons a i{
				margin-right: 5px;
    }
    main #short-whoareus .short-whoareus-buttons a:hover{
        text-decoration: none;
        transform: scale(.95);
    }
    main #short-whoareus .short-whoareus-buttons a:focus{
        outline: none;
        box-shadow:
                0 0 0 2px white,
                0 0 0 4px #050c9c;
    }
</style>