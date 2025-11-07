<h3>3. Ce qu’on fait aujourd’hui</h3>

<h4>3.1 UnxWares Cloud : l’infra, la vraie</h4>
<p>Notre infrastructure est décrite en détail sur la page Datacenter du site. Elle repose sur :</p>
<ul>
	<li>
		<p>
			<strong>un datacenter en Normandie (Caen)</strong>, hébergement souverain, conformité RGPD,
			data en France
		</p>
	</li>
	<li>
		<p>
			<strong>des serveurs HPE ProLiant Gen8</strong> pour l’ossature interne (admin, monitoring,
			orchestrations)
		</p>
	</li>
	<li>
		<p>
			<strong>plusieurs gammes de services proposés</strong> avec un large choix, une grande
			robustesse, et la possibilité d'infogérence :
		</p>
		<ul>
			<li>
				<p>
					<strong>une gamme “Services”</strong> basée sur trois DL360 Gen9, et du Kubernetes pour
					l’hébergement client de touts types (services que vous autogérez comme par exemple votre
					propre service nextcloud, une api ...)
				</p>
			</li>
			<li>
				<p>
					<strong>une gamme “WebDB”</strong> dédiée aux bases de données / sites très lourds, avec
					un Threadripper + NVMe 990 EVO + 24 To de HDD 7200rpm RAID10 (hauts débits)
				</p>
			</li>
			<li>
				<p>
					<strong>une gamme “Games”</strong> avec un Ryzen 9 9900X pour les workloads temps réel et
					les serveurs de jeux.
				</p>
			</li>
		</ul>
		<p>
			Tout ça relié en 10 Gb/s fibre OM4, adossé à Fortinet FortiGate 100E + MikroTik CCR2004 +
			CRS317 10G — donc pas un truc de lab, un vrai réseau pro.
		</p>
	</li>
</ul>
<p>
	Ce qu’il faut comprendre : on a volontairement pris du matériel reconditionné récent (- de 10 ans)
	pour réduire l’empreinte carbone et rester dans un budget sain, sans rogner sur la perf. C’est
	assumé, c’est écrit sur le site, et ça nous rapproche plus d’Infomaniak que d’OVH ou de Scaleway
	dans la philosophie. De plus, on essaye le plus possible d'être dans la mouvance de la Linux
	Foundation et de la Cloud Native Computing Foundation, qui sont des organismes qui soutiennent les
	technologies qu'on utilise, des technologies open, transparentes, indépendantes des GAFAM par
	exemple, ce qui fait que nous valorisons l’idée de souveraineté technologique sans dépendance
	aux GAFAM, ce qui rejoint la vision de la LF d’un écosystème ouvert et communautaire, et qui de
	plus, ces organismes, notamment la CNCF, a certifié les technologies que nous utilisons pour notre
	cloud, comme Kubernetes, Helm, ArgoCD ..., ce qui prouve que nous essayons le plus possible de
	créer une infrastructure solide, qui respecte des codes, et qui n'est pas une infrastructure bancale
	comme pour certains autres hébergeurs. (Nous précisons que nous n'affichons malheureusement pas les
	logos de ces grandes fondations car cela nécessite une souscription à l'année, que nous ne pouvons
	pas payer car nous voulons mettre cet argent, ces milliers d'euros, dans notre infrastructure, et
	dans le bon développement de UnxWares)
</p>
<p>Techniquement, notre cloud repose sur :</p>
<ul>
	<li>
		<p><strong>Proxmox</strong> pour la virtualisation</p>
	</li>
	<li>
		<p><strong>Kubernetes</strong> pour la scalabilité et le découplage</p>
	</li>
	<li>
		<p><strong>une couche d’observabilité moderne</strong> (Mimir / Grafana / Loki)</p>
	</li>
	<li>
		<p><strong>une stratégie de sauvegarde multi-niveaux</strong> (Longhorn + Infomaniak Swiss Backup + Proxmox Backup)</p>
	</li>
	<li>
		<p><strong>un SLA visé à 99,5 %</strong> (honnête, réaliste, pas marketing)</p>
	</li>
</ul>