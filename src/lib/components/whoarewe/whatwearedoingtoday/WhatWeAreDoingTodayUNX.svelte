<h4>3.3 L'orchestrateur maison en Go</h4>
<p>
	Là où on se différencie vraiment, c'est qu'on
	<strong>n'utilise pas que des logiciels tiers pour faire tourner le cloud</strong>.
	On a développé <strong>notre propre orchestrateur en Go</strong>.
</p>

<h5>Comment ça marche</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Couche</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Technologie</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Rôle</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>1. Espace client</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Laravel</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Authentification, facturation, OIDC Provider, gestion des droits</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>2. Orchestrateur</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Go</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Réception des ordres du panel, coordination des actions sur l'infra</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>3. Couches d'infra</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Proxmox, Kubernetes, nodes</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Exécution des déploiements, gestion des VMs et conteneurs</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>4. API de déploiement</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Go</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Ne fait qu'une chose : <strong>déployer</strong>. Pas de logique métier, pour réduire la surface d'attaque</td>
	</tr>
	</tbody>
</table>

<p>
	Tout est <strong>segmenté par sécurité</strong> : pas de connexion directe DB → hyperviseur. Chaque
	couche ne parle qu'à la suivante. C'est une architecture <strong>moderne, modulaire, auditable</strong>,
	faite pour grandir.
</p>

<h4>3.4 L'open source chez nous</h4>
<p>Sur notre GitHub, on explique clairement notre position :</p>
<ul>
	<li><p><strong>oui, on publie beaucoup</strong>,</p></li>
	<li><p><strong>non, on ne donne pas tout</strong>,</p></li>
	<li><p><strong>oui, on veut que ça puisse être réutilisé</strong>,</p></li>
	<li><p><strong>non, on ne veut pas qu'on nous copie industriellement.</strong></p></li>
</ul>
<p>Donc on met systématiquement une mention du genre :</p>
<blockquote>
	<p>
		"Le code est publié, vous pouvez vous en inspirer, le modifier, contribuer, mais
		<strong>la propriété intellectuelle reste à UnxWares</strong>. Toute réutilisation en l'état à
		des fins commerciales est interdite."
	</p>
</blockquote>

<h5>Ce qui est public vs privé</h5>
<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Catégorie</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Statut</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Pourquoi</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Site principal (SvelteKit)</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Public</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Utile pour apprendre, peut inspirer d'autres devs</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">VFF-Project</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Public</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Projet communautaire, open data ferroviaire</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Raiemus</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Public</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Projet communautaire, OS léger pour tous</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Orchestrateur Go</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Privé</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Code critique, cœur business, surface d'attaque</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Modules de sécurité</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Privé</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Éviter l'exploitation de failles</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Identité visuelle / assets</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Privé</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Propriété intellectuelle, marque déposée</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Panel client Laravel</td>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Privé</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Logique métier, facturation, données sensibles</td>
	</tr>
	</tbody>
</table>

<p>
	Ça peut sembler paradoxal, mais c'est très simple : <strong>on est une entreprise</strong>, on doit
	protéger nos assets. <strong>On est pro-open source</strong>, on veut que les gens puissent apprendre,
	contribuer, se baser dessus. Mais <strong>on a du code critique</strong> → ça reste privé, pour éviter
	l'exploitation de failles. C'est logique.
</p>

<h4>3.5 L'association UnxWares OpenSource</h4>
<p>
	C'est pour ça qu'on veut créer <strong>l'association UnxWares OpenSource</strong> (association loi 1901,
	soutenue par UnxWares SAS) :
</p>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Ce qu'on offre</th>
		<th style="padding: 12px; border: 1px solid #ddd;">À qui</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Contrepartie</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Serveurs d'hébergement gratuits</td>
		<td style="padding: 12px; border: 1px solid #ddd;" rowspan="3">Étudiants, indépendants, jeunes devs sélectionnés</td>
		<td style="padding: 12px; border: 1px solid #ddd;" rowspan="3"><strong>5 à 10%</strong> de commission temporaire sur les revenus quand le projet marche, pour réinjecter dans la communauté et aider le suivant</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Licences (Steamworks, outils pro...)</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;">Git privé, accompagnement technique</td>
	</tr>
	</tbody>
</table>

<p>
	C'est un modèle très différent d'un incubateur classique :
	<strong>on n'achète pas la boîte, on ne prend pas le contrôle, on aide juste à démarrer.</strong>
</p>
<p>
	Ce modèle <strong>auto-soutenable</strong> veut rompre avec la logique de dépendance financière :
	<strong>aider, lancer, libérer.</strong>
</p>

<h4>3.6 Nos projets communautaires</h4>

<table style="width:100%; max-width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; margin: 20px 0;">
	<thead>
	<tr style="background-color:#f2f2f2; text-align:left;">
		<th style="padding: 12px; border: 1px solid #ddd;">Projet</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Description</th>
		<th style="padding: 12px; border: 1px solid #ddd;">Statut</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>VFF-Project</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Encyclopédie ferroviaire française communautaire — lignes ouvertes, fermées, plans d'époque, photos, archives, points kilométriques, tracés OSM au mètre. Open data, précision au mètre via <strong>OpenStreetMap</strong>.</td>
		<td style="padding: 12px; border: 1px solid #ddd;">En développement (quasi seul pour le moment), lancé en octobre 2023</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Raiemus</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Système d'exploitation basé sur <strong>ArchLinux</strong>, allégé et optimisé, pensé pour le <strong>RDP / PC déporté</strong>. Transforme un petit PC en terminal performant capable de se connecter à une machine plus puissante.</td>
		<td style="padding: 12px; border: 1px solid #ddd;">En pause (UnxWares prend beaucoup de temps), prévu pour ouverture communautaire</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Orchestrateur &amp; API</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Notre propre orchestrateur cloud en Go et l'API de déploiement associée — pensés pour être modulaires, sécurisés et documentés.</td>
		<td style="padding: 12px; border: 1px solid #ddd;">En développement actif, privé</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Panel client</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Espace client Laravel avec auth, facturation, OIDC Provider et gestion des droits. Interface pour tous les services UnxWares Cloud.</td>
		<td style="padding: 12px; border: 1px solid #ddd;">En développement actif, privé</td>
	</tr>
	<tr>
		<td style="padding: 12px; border: 1px solid #ddd;"><strong>Jeu vidéo (UE5)</strong></td>
		<td style="padding: 12px; border: 1px solid #ddd;">Notre propre jeu sous Unreal Engine 5. Plutôt que de rester dépendants de l'écosystème Minecraft Java qui, selon nous, ne va pas dans la bonne direction.</td>
		<td style="padding: 12px; border: 1px solid #ddd;">Prévu, en conception</td>
	</tr>
	</tbody>
</table>

<p>
	Ce qui caractérise nos projets communautaires : <strong>un projet utile, réutilisable, documenté,
	communautaire.</strong> C'est exactement ce qu'on veut pour la communauté UnxWares.
</p>

<h4>3.7 Ce qui nous différencie vraiment</h4>
<ul>
	<li>
		<p>
			<strong>On est d'abord des techies.</strong> On sait ce qu'est un FortiGate 100E, une fibre
			OM4, une latence vers Scaleway, on les a montés nous-mêmes.
		</p>
	</li>
	<li>
		<p>
			<strong>On n'a pas copié les prix de la concurrence.</strong> On est partis du besoin réel,
			pas d'une grille OVH-like.
		</p>
	</li>
	<li>
		<p>
			<strong>On publie du code.</strong> Pas juste une landing page.
		</p>
	</li>
	<li>
		<p>
			<strong>On a une vraie datacenter story</strong>, pas "on est dans le cloud" sans dire où. (→
			Caen, France, 10 Gb/s, sauvegardes multi-niveaux, Proxmox + Kubernetes.)
		</p>
	</li>
	<li>
		<p>
			<strong>On veut créer une communauté, pas juste des clients.</strong>
		</p>
	</li>
	<li>
		<p>
			<strong>On assume de protéger certaines briques.</strong> Le code critique reste privé,
			on l'assume, et c'est pour la sécurité de tout le monde.
		</p>
	</li>
	<li>
		<p>
			<strong>On fait du logiciel ET de l'infra.</strong> Peu d'acteurs font sérieusement les deux.
			Chez nous, le dev qui a codé l'API est le même qui comprend comment elle tourne sur le serveur.
		</p>
	</li>
	<li>
		<p>
			<strong>On privilégie le matériel reconditionné.</strong> Un choix écologique et responsable
			qui nous distingue des grands acteurs, sans compromettre la performance.
		</p>
	</li>
	<li>
		<p>
			<strong>On suit les standards de la CNCF et de la Linux Foundation.</strong> Pas par conformisme,
			mais parce que ce sont des technologies qui correspondent à notre vision d'un écosystème ouvert.
		</p>
	</li>
</ul>
