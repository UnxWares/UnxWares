<section id="pepite-normandie">
	<div class="pepite-title">
		<i class="bi bi-rocket-takeoff-fill"></i>
		<h2>Notre Candidature Pépite Normandie</h2>
	</div>
	<div class="pepite-logos">
		<img src="https://www.pepite-normandie.fr/wp-content/uploads/sites/61/2024/02/LOGO_PEPITE_normandie_RVB.png" alt="Logo Pépite Normandie" class="pepite-logo" />
		<img src="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/site_logo/2025-10/MESRE_RVB.png" alt="Logo Ministère de l'Enseignement Supérieur et de la Recherche" class="mesr-logo" />
	</div>
	<p>
		UnxWares a candidaté au programme <strong>Pépite Normandie</strong>, le dispositif national
		d'accompagnement à l'entrepreneuriat étudiant. Notre dossier est actuellement en cours de
		traitement. Cet accompagnement nous apportera l'expertise et les ressources techniques et
		entrepreneuriales nécessaires pour structurer notre projet et passer d'une expertise technique
		à une véritable entreprise viable.
	</p>
	<h3>Les Objectifs de cet Accompagnement</h3>
	<div class="engagement-points">
		<div class="engagement-item">
			<i class="bi bi-award-fill"></i>
			<div>
				<h4>Statut National Étudiant-Entrepreneur (SNEE)</h4>
				<p>Une reconnaissance officielle qui crédibilisera notre démarche auprès des fournisseurs
					et de nos premiers clients B2B.</p>
			</div>
		</div>
		<div class="engagement-item">
			<i class="bi bi-graph-up-arrow"></i>
			<div>
				<h4>De la Technique à l'Entrepreneuriat</h4>
				<p>Développer nos compétences en gestion, business et vente pour transformer
					notre expertise technique en entreprise pérenne.</p>
			</div>
		</div>
		<div class="engagement-item">
			<i class="bi bi-people-fill"></i>
			<div>
				<h4>Mentorat et Professionnalisation</h4>
				<p>L'accompagnement Pépite nous permettra d'être challengés, de sortir de notre bulle
					technique et d'adopter la posture de dirigeants responsables.</p>
			</div>
		</div>
		<div class="engagement-item">
			<i class="bi bi-lightbulb-fill"></i>
			<div>
				<h4>Ressources et Expertise</h4>
				<p>Accès à un réseau d'experts, de ressources techniques et entrepreneuriales pour
					structurer et développer notre projet de manière viable.</p>
			</div>
		</div>
	</div>
	<p>
		Cet accompagnement sera essentiel pour UnxWares : l'expertise et les ressources de Pépite
		Normandie nous permettront de construire une entreprise éthique et viable, alliant excellence
		technique et rigueur entrepreneuriale. Notre ambition est de devenir un acteur de référence
		du cloud souverain en France, et Pépite Normandie sera le levier qui rendra cette ambition
		réalisable.
	</p>
</section>

<style>
    #pepite-normandie{
        margin: 0;
    }
    #pepite-normandie .pepite-title{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-bottom: 45px;
    }
    #pepite-normandie .pepite-title i{
        font-size: 32px;
        color: #050c9c;
        animation: float 3s ease-in-out infinite;
    }
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
    }
    #pepite-normandie .pepite-title h2{
        text-align: center;
        margin: 0;
        font-size: 28px;
    }
    @media (max-width: 768px) {
        #pepite-normandie .pepite-title h2{
            font-size: 22px;
        }
    }
    #pepite-normandie .pepite-logos{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
        margin: 50px 0 60px 0;
        flex-wrap: wrap;
    }
    #pepite-normandie .pepite-logo,
    #pepite-normandie .mesr-logo{
        height: 85px;
        width: auto;
        transition: transform 0.3s ease, filter 0.3s ease;
        filter: grayscale(0);
    }
    #pepite-normandie .pepite-logo:hover,
    #pepite-normandie .mesr-logo:hover{
        transform: scale(1.05);
    }
    @media (max-width: 768px) {
        #pepite-normandie .pepite-logos{
            gap: 40px;
            margin: 35px 0 45px 0;
        }
    }
    @media (max-width: 548px) {
        #pepite-normandie .pepite-logo,
        #pepite-normandie .mesr-logo{
            height: 65px;
        }
        #pepite-normandie .pepite-logos{
            gap: 30px;
            margin: 30px 0 40px 0;
        }
        #pepite-normandie{
            margin-top: 60px;
        }
    }
    #pepite-normandie h3{
        text-align: center;
        margin: 55px 0 40px 0;
        font-size: 22px;
        font-weight: 600;
    }
    #pepite-normandie p{
        text-align: justify;
        margin-bottom: 25px;
        line-height: 1.8;
        font-size: 16px;
    }
    #pepite-normandie p:last-child{
        margin-bottom: 0;
    }
    #pepite-normandie .engagement-points{
        display: grid;
        grid-template-columns: 1fr;
        gap: 25px;
        margin: 35px 0 40px 0;
    }
    @media (min-width: 768px) {
        #pepite-normandie .engagement-points{
            grid-template-columns: 1fr 1fr;
            gap: 25px;
        }
    }
    #pepite-normandie .engagement-item{
        display: flex;
        gap: 18px;
        align-items: flex-start;
        padding: 25px;
        background-color: #ffffff;
        border-radius: 12px;
        border: 1px solid #e8e8e8;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    }
    #pepite-normandie .engagement-item:hover{
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(5, 12, 156, 0.1);
        border-color: #050c9c;
    }
    #pepite-normandie .engagement-item i{
        font-size: 26px;
        color: #050c9c;
        flex-shrink: 0;
        margin-top: 2px;
        transition: transform 0.3s ease;
    }
    #pepite-normandie .engagement-item:hover i{
        transform: scale(1.1);
    }
    #pepite-normandie .engagement-item h4{
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
    }
    #pepite-normandie .engagement-item p{
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        text-align: left;
        color: #4a4a4a;
    }
</style>
