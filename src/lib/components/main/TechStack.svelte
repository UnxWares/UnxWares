<script>
	import { t } from 'svelte-i18n';
	import { Layers, Server, Code2, Shield, Database } from 'lucide-svelte';
</script>

<section id="tech-stack">
	<div class="section-title">
		<Layers size={32} />
		<h2>{$t('techstack.title')}</h2>
	</div>
	<p class="tech-intro">
		{$t('techstack.intro')}
	</p>
	<div class="tech-categories">
		<div class="tech-category">
			<div class="category-header">
				<Server size={24} />
				<h4>{$t('techstack.infra_title')}</h4>
			</div>
			<p class="category-desc">
				{$t('techstack.infra_desc')}
			</p>
			<div class="tech-tags">
				<span class="tech-tag">Kubernetes</span>
				<span class="tech-tag">Docker</span>
				<span class="tech-tag">Containerd</span>
				<span class="tech-tag">Proxmox</span>
				<span class="tech-tag">Ceph</span>
			</div>
		</div>
		<div class="tech-category">
			<div class="category-header">
				<Code2 size={24} />
				<h4>{$t('techstack.dev_title')}</h4>
			</div>
			<p class="category-desc">
				{$t('techstack.dev_desc')}
			</p>
			<div class="tech-tags">
				<span class="tech-tag">Rust</span>
				<span class="tech-tag">Go</span>
				<span class="tech-tag">Zig</span>
				<span class="tech-tag">SvelteKit</span>
				<span class="tech-tag">Laravel</span>
				<span class="tech-tag">Node.js</span>
			</div>
		</div>
		<div class="tech-category">
			<div class="category-header">
				<Shield size={24} />
				<h4>{$t('techstack.network_title')}</h4>
			</div>
			<p class="category-desc">
				{$t('techstack.network_desc')}
			</p>
			<div class="tech-tags">
				<span class="tech-tag">Fortinet</span>
				<span class="tech-tag">RouterOS</span>
				<span class="tech-tag">MikroTik</span>
				<span class="tech-tag">WireGuard</span>
			</div>
		</div>
		<div class="tech-category">
			<div class="category-header">
				<Database size={24} />
				<h4>{$t('techstack.db_title')}</h4>
			</div>
			<p class="category-desc">
				{$t('techstack.db_desc')}
			</p>
			<div class="tech-tags">
				<span class="tech-tag">PostgreSQL</span>
				<span class="tech-tag">MariaDB</span>
				<span class="tech-tag">Redis</span>
				<span class="tech-tag">MongoDB</span>
				<span class="tech-tag">MinIO</span>
			</div>
		</div>
	</div>
</section>

<style>
	#tech-stack{
		margin: 0;
	}
	#tech-stack .section-title{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		margin-bottom: 15px;
	}
	#tech-stack .section-title :global(svg){
		animation: float 3s ease-in-out infinite;
	}
	@keyframes float {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}
	#tech-stack .section-title h2{
		text-align: center;
		margin: 0;
		font-size: 28px;
	}
	@media (max-width: 768px) {
		#tech-stack .section-title h2{
			font-size: 22px;
		}
	}
	.tech-intro{
		text-align: center;
		font-size: 16px;
		line-height: 1.7;
		color: #4a4a4a;
		margin: 0 auto 45px auto;
		max-width: 750px;
	}
	.tech-categories{
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}
	@media (max-width: 768px) {
		.tech-categories{
			grid-template-columns: 1fr;
			gap: 25px;
		}
	}
	.tech-category{
		padding: 30px;
		background-color: #fafbfc;
		border-radius: 12px;
		border: 1px solid #e8e8e8;
		transition: all 0.3s ease;
	}
	.tech-category:hover{
		border-color: #050c9c;
		box-shadow: 0 4px 12px rgba(5, 12, 156, 0.08);
	}
	.category-header{
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 12px;
	}
	.category-header :global(svg){
		color: #050c9c;
	}
	.tech-category h4{
		font-size: 18px;
		font-weight: 600;
		margin: 0;
		color: #1a1a1a;
	}
	.category-desc{
		font-size: 14px;
		line-height: 1.7;
		color: #5a5a5a;
		margin: 0 0 18px 0;
	}
	.tech-tags{
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.tech-tag{
		display: inline-block;
		padding: 7px 14px;
		background-color: #ffffff;
		border: 1px solid #d8d8d8;
		border-radius: 6px;
		font-size: 13px;
		color: #2a2a2a;
		font-weight: 500;
		transition: all 0.2s ease;
	}
	.tech-tag:hover{
		border-color: #050c9c;
		background-color: #f0f2ff;
		transform: translateY(-2px);
	}
</style>
