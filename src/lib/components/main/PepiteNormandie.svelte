<script>
	import { t } from 'svelte-i18n';
	import { Rocket, Award, TrendingUp, Users, Lightbulb } from 'lucide-svelte';
</script>

<section id="pepite-normandie">
	<div class="pepite-title">
		<Rocket size={32} />
		<h2>{$t('pepite.title')}</h2>
	</div>
	<div class="pepite-logos">
		<img src="https://www.pepite-normandie.fr/wp-content/uploads/sites/61/2024/02/LOGO_PEPITE_normandie_RVB.png" alt="Logo Pépite Normandie" class="pepite-logo" />
		<img src="https://www.enseignementsup-recherche.gouv.fr/sites/default/files/site_logo/2025-10/MESRE_RVB.png" alt="Logo Ministère de l'Enseignement Supérieur et de la Recherche" class="mesr-logo" />
	</div>
	<p>{@html $t('pepite.intro')}</p>
	<h3>{$t('pepite.objectives_title')}</h3>
	<div class="engagement-points">
		<div class="engagement-item">
			<Award size={26} />
			<div>
				<h4>{$t('pepite.obj1_title')}</h4>
				<p>{$t('pepite.obj1_desc')}</p>
			</div>
		</div>
		<div class="engagement-item">
			<TrendingUp size={26} />
			<div>
				<h4>{$t('pepite.obj2_title')}</h4>
				<p>{$t('pepite.obj2_desc')}</p>
			</div>
		</div>
		<div class="engagement-item">
			<Users size={26} />
			<div>
				<h4>{$t('pepite.obj3_title')}</h4>
				<p>{$t('pepite.obj3_desc')}</p>
			</div>
		</div>
		<div class="engagement-item">
			<Lightbulb size={26} />
			<div>
				<h4>{$t('pepite.obj4_title')}</h4>
				<p>{$t('pepite.obj4_desc')}</p>
			</div>
		</div>
	</div>
	<p>{$t('pepite.conclusion')}</p>
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
    #pepite-normandie .pepite-title :global(svg){
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
    :global([data-theme="dark"]) #pepite-normandie .mesr-logo{
        filter: brightness(0) invert(1);
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
        text-justify: inter-word;
        word-spacing: -0.05em;
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
        background-color: var(--bg-primary);
        border-radius: 12px;
        border: 1px solid var(--border-color);
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
    }
    #pepite-normandie .engagement-item:hover{
        transform: translateY(-3px);
        box-shadow: 0 8px 16px rgba(5, 12, 156, 0.1);
        border-color: var(--primary);
    }
    #pepite-normandie .engagement-item :global(svg){
        color: var(--primary-text);
        flex-shrink: 0;
        margin-top: 2px;
        transition: transform 0.3s ease;
    }
    #pepite-normandie .engagement-item:hover :global(svg){
        transform: scale(1.1);
    }
    #pepite-normandie .engagement-item h4{
        margin: 0 0 10px 0;
        font-size: 16px;
        font-weight: 600;
        color: var(--text-primary);
    }
    #pepite-normandie .engagement-item p{
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        text-align: justify;
        text-justify: inter-word;
        word-spacing: -0.05em;
        color: var(--text-secondary);
    }
</style>
