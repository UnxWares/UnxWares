<h3>3. Ce qu'on fait aujourd'hui</h3>

<h4>3.1 UnxWares Cloud : l'infra, la vraie</h4>
<p>Notre infrastructure est décrite en détail sur la <a href="/datacenter">page Datacenter</a> du site. Elle repose sur :</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Composant</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Détails</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Localisation</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Datacenter en <strong>Normandie (Caen)</strong> – hébergement souverain, conformité RGPD, data 100% en France</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Serveurs internes</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>HPE ProLiant Gen8</strong> pour l'ossature interne (admin, monitoring, orchestrations)</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Réseau</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>10 Gb/s fibre OM4</strong>, <strong>Fortinet FortiGate 100E</strong> + <strong>MikroTik CCR2004</strong> + <strong>CRS317 10G</strong> – un vrai réseau pro, pas un truc de lab</td>
	</tr>
	</tbody>
</table>

<h5>Nos gammes de services</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Gamme</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Matériel</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Usage</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Services</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">3× DL360 Gen9 + Kubernetes</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Hébergement client de tous types (Nextcloud, APIs, services autogérés...)</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>WebDB</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Threadripper + NVMe 990 EVO + 24 To HDD 7200rpm RAID10</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Bases de données / sites très lourds nécessitant de hauts débits</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Games</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Ryzen 9 9900X</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Workloads temps réel et serveurs de jeux</td>
	</tr>
	</tbody>
</table>

<h5>Notre philosophie matérielle</h5>
<p>
	Ce qu'il faut comprendre : on a volontairement pris du <strong>matériel reconditionné récent (moins de 10 ans)</strong>
	pour <strong>réduire l'empreinte carbone</strong> et <strong>rester dans un budget sain</strong>, sans rogner sur la perf.
	C'est assumé, c'est écrit sur le site, et ça nous rapproche plus d'<strong>Infomaniak</strong> que d'OVH ou de Scaleway
	dans la philosophie.
</p>

<h5>Notre alignement avec les standards</h5>
<p>
	De plus, on essaye le plus possible d'être dans la mouvance de la <strong>Linux Foundation</strong> et de la
	<strong>Cloud Native Computing Foundation (CNCF)</strong>, qui sont des organismes qui soutiennent les
	technologies qu'on utilise — des technologies open, transparentes, indépendantes des GAFAM.
</p>
<p>
	Ce qui fait que nous valorisons l'idée de <strong>souveraineté technologique sans dépendance aux GAFAM</strong>,
	ce qui rejoint la vision de la LF d'un écosystème ouvert et communautaire. De plus, la CNCF a certifié les
	technologies que nous utilisons pour notre cloud, comme Kubernetes, Helm, ArgoCD... ce qui prouve que nous
	essayons le plus possible de créer une <strong>infrastructure solide, qui respecte des standards</strong>,
	et qui n'est pas une infrastructure bancale comme chez certains autres hébergeurs.
</p>
<p>
	<em>(Nous précisons que nous n'affichons malheureusement pas les logos de ces grandes fondations car cela nécessite
	une souscription à l'année, que nous ne pouvons pas payer car nous voulons mettre cet argent, ces milliers d'euros,
	dans notre infrastructure et dans le bon développement d'UnxWares.)</em>
</p>

<h5>Notre stack technique</h5>
<p>Techniquement, notre cloud repose sur :</p>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Technologie</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Rôle</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Proxmox</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Virtualisation et gestion des clusters</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Kubernetes (K3s / Kubeadm)</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Scalabilité, découplage et orchestration de conteneurs</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Mimir / Grafana / Loki</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Couche d'observabilité moderne (métriques, logs, dashboards)</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Longhorn + Infomaniak Swiss Backup + Proxmox Backup</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Stratégie de sauvegarde multi-niveaux</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Helm / ArgoCD</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Déploiement et GitOps</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Fortinet FortiGate 100E</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Firewall et sécurité réseau</td>
	</tr>
	</tbody>
</table>

<h5>Notre engagement SLA</h5>
<p>
	<strong>SLA visé : 99,5%</strong> — honnête, réaliste, pas marketing. On ne vous promet pas 99,99% si on ne peut
	pas le tenir. On préfère être honnêtes sur nos capacités réelles.
</p>
