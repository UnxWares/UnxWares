<script>
	import { t } from 'svelte-i18n';
	import { Gem } from 'lucide-svelte';
</script>

<section id="why-unxwares">
	<div class="section-title">
		<Gem size={32} />
		<h2>{$t('why.title')}</h2>
	</div>
	<div class="why-content">
		<p class="intro-text">{$t('why.intro')}</p>

		<div class="differentiators">
			<div class="diff-item">
				<h3>{$t('why.diff1_title')}</h3>
				<p>{$t('why.diff1_desc')}</p>
			</div>

			<div class="diff-item">
				<h3>{$t('why.diff2_title')}</h3>
				<p>{$t('why.diff2_desc')}</p>
			</div>

			<div class="diff-item">
				<h3>{$t('why.diff3_title')}</h3>
				<p>{$t('why.diff3_desc')}</p>
			</div>

			<div class="diff-item">
				<h3>{$t('why.diff4_title')}</h3>
				<p>{$t('why.diff4_desc')}</p>
			</div>
		</div>
	</div>
</section>

<style>
	#why-unxwares{
		margin: 0;
	}
	#why-unxwares .section-title{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 25px;
	}
	#why-unxwares .section-title :global(svg){
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}
	#why-unxwares .section-title h2{
		text-align: center;
		margin: 0;
		font-size: 28px;
	}
	@media (max-width: 768px) {
		#why-unxwares .section-title h2{
			font-size: 22px;
		}
	}
	.why-content{
		display: flex;
		flex-direction: column;
		gap: 35px;
	}
	.intro-text{
		text-align: center;
		font-size: 16px;
		line-height: 1.8;
		color: #5a5a5a;
		margin: 0 auto 20px auto;
		max-width: 850px;
	}
	.differentiators{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
	@media (max-width: 768px) {
		.differentiators{
			grid-template-columns: 1fr;
			gap: 25px;
		}
	}
	.diff-item{
		padding: 30px;
		background-color: #fafbfc;
		border-radius: 10px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
	}
	.diff-item:hover{
		border-color: #050c9c;
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.08);
	}
	.diff-item h3{
		font-size: 18px;
		font-weight: 600;
		margin: 0 0 12px 0;
		color: #1a1a1a;
	}
	.diff-item p{
		font-size: 15px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0;
		text-align: justify;
		text-justify: inter-word;
		word-spacing: -0.05em;
	}
</style>
