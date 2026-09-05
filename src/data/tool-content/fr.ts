import type { ToolContentEntry } from "../toolContent";

// French (fr) long-form tool content. Links point to the /fr/ tool pages.

export const toolContentFr: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "Compresser un PDF en ligne : réduire la taille pour l'e-mail et les portails",
    intro: [
      "Les PDF volumineux — surtout ceux remplis de pages scannées ou de photos haute résolution — dépassent la limite des pièces jointes, sont lents à envoyer et sont refusés par les portails qui limitent la taille des fichiers. Le compresseur de PDF de ConvertBrio réencode les images intégrées au document avec une qualité et une résolution plus efficaces et supprime les métadonnées inutiles, pour que les mêmes pages reviennent dans un fichier plus petit.",
      "C'est gratuit, ça fonctionne dans le navigateur sans inscription et sans filigrane. La compression est sans perte pour le texte et les graphiques vectoriels — ils restent nets — et n'affecte que les photos et les scans, où une baisse de qualité minime et presque toujours invisible se traduit par une forte réduction de taille.",
    ],
    howTo: [
      { step: "Envoyez le PDF", detail: "Glissez le fichier dans la zone ou cliquez pour parcourir. Un PDF à la fois, jusqu'à 100 Mo." },
      {
        step: "Cliquez sur Compresser",
        detail:
          "ConvertBrio localise les images intégrées, réencode chacune avec une qualité plus efficace, réduit celles qui sont plus grandes que nécessaire et supprime les métadonnées inutilisées.",
      },
      {
        step: "Téléchargez et vérifiez la taille",
        detail:
          "Le PDF compressé se télécharge automatiquement. Ouvrez-le pour vérifier que les pages restent lisibles ; s'il dépasse encore la limite, voyez les conseils ci-dessous sur les scans et le fractionnement des pages.",
      },
    ],
    sections: [
      {
        heading: "Comment fonctionne la compression PDF",
        body: [
          "La taille d'un PDF est presque toujours dominée par une seule chose : les images intégrées. Le texte, les polices et les dessins vectoriels sont minuscules en comparaison. Le compresseur de ConvertBrio agit donc là où se trouve le poids : il trouve les images photographiques dans le fichier, les réencode avec un JPEG plus efficace et réduit l'échelle de toute image dont la résolution dépasse largement ce qu'un écran ou une imprimante utiliserait.",
          "Tout ce qui n'est pas une photo reste intact : le texte reste sélectionnable et net, les logos et graphiques vectoriels gardent des bords propres et la mise en page ne bouge pas. Les métadonnées sans fonction sont supprimées pour récupérer un peu d'espace.",
        ],
      },
      {
        heading: "Quels PDF se réduisent le plus",
        body: "La réduction dépend entièrement de ce qui rend votre fichier volumineux.",
        table: {
          headers: ["Type de PDF", "Résultat typique"],
          rows: [
            ["Document scanné (photos des pages)", "Forte réduction — souvent 40 à 70 % plus petit"],
            ["Rapport avec photos ou captures d'écran", "Réduction modérée, variable selon le nombre d'images"],
            ["Présentation exportée en PDF", "Réduction modérée si les diapositives contiennent des photos"],
            ["PDF uniquement texte (contrat, ebook, facture)", "Peu de changement — déjà compact"],
            ["PDF avec des images en PNG ou CMJN", "Limitée — ces types sont ignorés pour ne pas altérer les couleurs"],
          ],
        },
      },
      {
        heading: "Compresser un PDF sans perte de qualité",
        body: "Pour tout PDF quasi entièrement composé de texte, la compression est pratiquement sans perte : vous ne perdez rien de visible. Pour les PDF scannés ou riches en images, les images sont réencodées, il y a donc un compromis de qualité réel mais faible. En pratique, une page scannée compressée avec cet outil reste lisible à l'écran et s'imprime bien ; la différence n'apparaît qu'en zoomant fortement sur une photo.",
      },
      {
        heading: "Passer un PDF sous une taille précise (100 Ko, 500 Ko, 2 Mo)",
        body: [
          "Cet outil effectue une passe de compression efficace, et non plusieurs essais jusqu'à un chiffre exact ; il ne garantit donc pas une valeur précise en kilo-octets. Mais certaines choses aident quand la limite est stricte :",
          "Si votre PDF est un document scanné, il baisse souvent beaucoup en une seule passe : essayez d'abord. S'il dépasse encore, divisez-le en moins de pages avec l'outil Diviser un PDF et compressez chaque partie, ou exportez uniquement les pages nécessaires. Si le poids vient d'une ou deux photos énormes, compresser ces images séparément avec Compresser une Image (qui a une taille cible exacte) avant de reconstruire le PDF offre le meilleur contrôle.",
        ],
      },
      {
        heading: "Compresser ou diviser",
        body: "La compression réduit le poids de chaque page. La division réduit le nombre de pages. Si votre PDF de 30 Mo compte 300 pages de texte, la compression aidera peu : le diviser en sections avec Diviser un PDF est la solution. Si ce sont 10 pages scannées de 3 Mo chacune, la compression est exactement le bon outil. Ils sont complémentaires.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre PDF est chiffré pendant l'envoi, traité automatiquement sur les serveurs de ConvertBrio sans intervention humaine, et l'original comme la copie compressée sont supprimés sous 24 heures. Un fichier à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Diviser un PDF", href: "/fr/tools/split-pdf" },
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
      { label: "PDF en Word", href: "/fr/tools/pdf-to-word" },
    ],
    faqDescription: "Questions fréquentes sur la compression de la taille d'un PDF en ligne.",
    faq: [
      {
        question: "Comment compresser un PDF en ligne gratuitement ?",
        answer:
          "Envoyez le document à l'outil Compresser un PDF de ConvertBrio et cliquez sur Compresser. Il réencode les images intégrées et supprime les métadonnées inutiles pour réduire le fichier, qui se télécharge automatiquement — sans compte, sans filigrane, sans e-mail.",
      },
      {
        question: "Peut-on compresser un PDF sans perte de qualité ?",
        answer:
          "Le texte et le contenu vectoriel ne sont jamais dégradés : ils restent parfaitement nets. Seules les photos et les scans sont réencodés, avec une légère baisse de qualité généralement invisible à la taille d'affichage normale.",
      },
      {
        question: "Comment rendre un PDF plus léger pour l'envoyer par e-mail ?",
        answer:
          "Passez-le une fois par l'outil. La plupart des limites d'e-mail sont de 20 à 25 Mo ; un document scanné ou un rapport riche en images passe généralement bien en dessous. S'il est encore trop lourd, divisez-le en parties avec Diviser un PDF.",
      },
      {
        question: "Puis-je compresser un PDF à exactement 100 Ko ou 300 Ko ?",
        answer:
          "Cet outil ne vise pas une taille exacte : il fait une passe efficace. Pour les limites strictes, compressez d'abord un PDF scanné ici, réduisez le nombre de pages avec Diviser un PDF si besoin, ou compressez séparément les plus grandes images intégrées avec Compresser une Image, qui accepte une cible exacte en Ko.",
      },
      {
        question: "Pourquoi mon PDF n'a-t-il presque pas diminué ?",
        answer:
          "Il est probablement déjà compact : un PDF quasi entièrement textuel a très peu à supprimer. Les fichiers avec des scans haute résolution ou des photos intégrées offrent les plus fortes réductions.",
      },
      {
        question: "La compression change-t-elle la mise en page ou le texte ?",
        answer:
          "Non. Les dimensions des pages, la position du texte, les polices et le texte sélectionnable sont tous préservés. Seule la taille du fichier change.",
      },
    ],
  },

  "compress-image": {
    title: "Compresseur d'images : réduire la taille sans perte de qualité",
    intro: [
      "Que ce soit pour passer une limite d'envoi, accélérer un site web ou arrêter de saturer le stockage, le compresseur d'images de ConvertBrio réduit la taille du fichier tout en gardant l'image nette. Vous contrôlez le résultat : vous fixez un niveau de qualité ou vous donnez une taille cible exacte en kilo-octets et l'outil s'y ajuste.",
      "Ce mode de taille cible est la raison pour laquelle la plupart des gens arrivent ici. Les portails de visa, les concours, les inscriptions universitaires et les formulaires administratifs limitent souvent une photo ou un scan à 100 Ko, 200 Ko ou 50 Ko. Au lieu d'exporter à des qualités devinées jusqu'à ce qu'une convienne, vous saisissez la limite une fois et téléchargez un fichier en dessous.",
    ],
    howTo: [
      { step: "Envoyez l'image", detail: "Glissez un JPG, PNG, WEBP, HEIC ou AVIF, jusqu'à 100 Mo. Les photos HEIC d'iPhone sont acceptées directement." },
      {
        step: "Fixez une taille cible ou un niveau de qualité",
        detail:
          "Saisissez la taille maximale en Ko (par exemple 100). Laissez vide pour utiliser le curseur de qualité, où des valeurs plus basses donnent des fichiers plus petits.",
      },
      {
        step: "Compressez",
        detail:
          "ConvertBrio réencode l'image et, en mode cible, ajuste la qualité — puis les dimensions si la qualité ne suffit pas — jusqu'à ce que le fichier passe sous votre limite.",
      },
      { step: "Téléchargez le résultat", detail: "Le fichier compressé se télécharge automatiquement. Vérifiez qu'il est acceptable ; s'il est trop flou, augmentez la cible et recommencez." },
    ],
    sections: [
      {
        heading: "Comment fonctionne la compression d'images",
        body: [
          "JPG, WEBP et AVIF sont des formats avec perte : ils réduisent le fichier en supprimant des données d'image que l'œil humain est le moins susceptible de remarquer — dégradés de couleur subtils, texture fine dans les zones chargées, détail haute fréquence. Baisser la qualité demande à l'encodeur d'en supprimer davantage, ce qui donne un fichier plus petit avec un adoucissement et des artefacts de plus en plus visibles.",
          "Le PNG est sans perte et se comprime différemment : il ne peut que ranger les pixels exacts plus efficacement, une photo enregistrée en PNG ne rétrécit donc presque pas. Si vous envoyez un PNG au compresseur et voulez une vraie réduction, le convertir d'abord en JPG ou WEBP (avec le Convertisseur d'Images) fait bien plus que n'importe quelle compression PNG.",
        ],
      },
      {
        heading: "Réduire une image à une taille exacte (comme 100 Ko)",
        body: "Saisissez votre limite dans le champ de taille cible et ConvertBrio travaille à rebours : il baisse la qualité du JPG/WEBP par paliers, en revérifiant la taille après chacun, et ne réduit les dimensions que si la plus basse qualité raisonnable dépasse encore. Le résultat est la version la plus grande et la plus nette de votre image qui tient encore sous le plafond.",
        list: [
          "Photo de visa ou de passeport — souvent 100 Ko, ou une plage de 10 Ko à 240 Ko",
          "Portails administratifs et fiscaux — généralement 100 Ko ou 200 Ko par scan",
          "Sites de concours et de candidatures — souvent de 50 Ko à 500 Ko pour une photo ou un certificat",
          "Avatars de forums et de marketplaces — en général autour de 1 à 2 Mo",
        ],
      },
      {
        heading: "Jusqu'où peut-on compresser avant que ça se voie ?",
        body: "La plupart des photographies perdent 40 à 60 % de leur taille sans différence visible à la taille d'affichage normale, car les premières données supprimées par l'encodeur sont vraiment difficiles à voir. Au-delà, les zones planes comme les ciels commencent à faire des bandes et les bords du texte et le détail fin deviennent crus. La méthode pratique est de partir près du haut de la plage de qualité et de descendre progressivement en regardant l'image.",
      },
      {
        heading: "Compresser ou redimensionner",
        body: "La compression garde les mêmes dimensions en pixels et réduit le coût de chaque pixel. Le redimensionnement réduit le nombre de pixels lui-même. Pour une photo à la fois grande en dimensions et en poids, redimensionner à la taille réellement nécessaire — puis compresser — donne un fichier bien plus petit avec moins de perte visible.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Chaque envoi est chiffré et supprimé automatiquement des serveurs de ConvertBrio sous 24 heures, que vous le téléchargiez ou non. Cet outil compresse une image à la fois, jusqu'à 100 Mo, gratuit, sans compte et sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "JPG en PDF", href: "/fr/tools/jpg-to-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la compression et la réduction de la taille des images.",
    faq: [
      {
        question: "Comment réduire une image à moins de 100 Ko ?",
        answer:
          "Envoyez l'image au compresseur de ConvertBrio et fixez la taille cible à 100 Ko. L'outil baisse la qualité — et les dimensions si besoin — jusqu'à ce que le fichier tienne dans cette limite, idéal pour les formulaires et envois de documents à plafond strict.",
      },
      {
        question: "Compresser va-t-il rendre mon image moins bonne ?",
        answer:
          "Avec une compression modérée, la plupart des gens ne voient pas de différence. La perte de qualité n'apparaît qu'aux réglages agressifs ; mieux vaut vérifier le résultat que compresser à la plus petite taille possible par défaut.",
      },
      {
        question: "Mon PNG n'a presque pas diminué, pourquoi ?",
        answer:
          "Le PNG est sans perte ; il y a donc peu de marge pour compresser une photographie qui y est stockée. Convertissez d'abord le PNG en JPG ou WEBP avec le Convertisseur d'Images ; à lui seul, cela réduit souvent la taille de 70 % ou plus.",
      },
      {
        question: "Le compresseur conserve-t-il les dimensions de l'image ?",
        answer:
          "Oui, sauf si vous utilisez le mode de taille cible et que le fichier ne tient toujours pas après la réduction maximale de qualité, auquel cas il réduit aussi les dimensions en dernier recours.",
      },
      {
        question: "Peut-on compresser plusieurs images à la fois ?",
        answer:
          "Compresser une image à la fois est gratuit et sans compte. Cet outil ne traite pas encore plusieurs images en une seule passe.",
      },
    ],
  },

  "merge-pdf": {
    title: "Fusionner des PDF en ligne : combiner plusieurs PDF en un seul fichier",
    intro: [
      "Réunir des pages scannées, des factures, des rapports ou des chapitres en un seul document demande généralement un logiciel de bureau ou un abonnement payant. L'outil de fusion de ConvertBrio le fait depuis le navigateur, sans rien installer : envoyez plusieurs PDF, mettez-les dans l'ordre souhaité et téléchargez un fichier combiné en quelques secondes.",
      "Chaque page de chaque fichier est conservée telle quelle : sans recompression, sans perte de qualité, sans filigrane. Le seul changement, c'est que des fichiers séparés deviennent un seul.",
    ],
    howTo: [
      { step: "Envoyez deux PDF ou plus", detail: "Glissez-les tous ensemble ou sélectionnez-en plusieurs dans l'explorateur. Chaque fichier peut faire jusqu'à 100 Mo." },
      {
        step: "Mettez-les dans l'ordre",
        detail: "Le document combiné suit l'ordre de la liste des fichiers ; organisez-les comme le PDF final doit se lire — page de garde en premier, annexes en dernier.",
      },
      { step: "Fusionnez et téléchargez", detail: "Cliquez sur Convertir. ConvertBrio ajoute les pages de chaque fichier à la suite et le PDF combiné se télécharge automatiquement." },
    ],
    sections: [
      {
        heading: "Raisons fréquentes de fusionner des PDF",
        body: "C'est l'une des opérations PDF les plus courantes, généralement pour l'un de ces cas :",
        list: [
          "Combiner des pages scannées séparément en un seul document",
          "Assembler un rapport, un contrat ou une proposition en plusieurs parties",
          "Regrouper plusieurs factures ou reçus pour une seule note de frais",
          "Réunir les chapitres d'un manuel, d'un livre ou d'un support de cours",
          "Joindre une lettre de motivation au CV en un seul fichier",
        ],
      },
      {
        heading: "Bien régler l'ordre des pages",
        body: "L'ordre du fichier combiné est défini par l'ordre d'envoi des fichiers ; organisez la liste avant de convertir. Si l'un des PDF source a ses propres pages dans le mauvais ordre, corrigez-le d'abord : divisez-le en pages isolées avec Diviser un PDF, puis fusionnez le tout dans la séquence voulue.",
      },
      {
        heading: "Après la fusion",
        body: "Un document combiné est souvent le moment où vous voudrez réduire la taille si les sources contenaient beaucoup d'images (Compresser un PDF). Le faire sur le fichier final garantit que la compression reflète le document entier.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Les fichiers sont chiffrés à l'envoi, fusionnés automatiquement sans intervention humaine, et tous — sources et résultat — sont supprimés sous 24 heures. Plusieurs fichiers par fusion, jusqu'à 100 Mo chacun, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Diviser un PDF", href: "/fr/tools/split-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "JPG en PDF", href: "/fr/tools/jpg-to-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la fusion de plusieurs fichiers PDF en un seul.",
    faq: [
      {
        question: "Comment fusionner des fichiers PDF en ligne gratuitement ?",
        answer:
          "Ouvrez l'outil Fusionner des PDF de ConvertBrio, envoyez deux PDF ou plus, organisez-les dans l'ordre souhaité et téléchargez le fichier combiné — sans compte, sans installer de logiciel, sans filigrane.",
      },
      {
        question: "Puis-je contrôler l'ordre des pages dans le PDF combiné ?",
        answer:
          "Oui : les fichiers sont fusionnés dans l'ordre où ils sont listés, les pages de chacun apparaissant à la suite. Organisez les fichiers avant de convertir.",
      },
      {
        question: "La fusion réduit-elle la qualité de mes PDF ?",
        answer:
          "Non. Les pages sont copiées telles quelles, sans recompression. Le fichier combiné pèse à peu près la somme des originaux.",
      },
      {
        question: "Peut-on fusionner des images et des PDF ?",
        answer:
          "Convertissez d'abord les images en PDF avec JPG en PDF, puis fusionnez ce PDF avec vos autres ici.",
      },
      {
        question: "Y a-t-il une limite au nombre de PDF à combiner ?",
        answer:
          "Vous pouvez fusionner plusieurs fichiers en une fois, jusqu'à 100 Mo chacun. Les gros travaux sont plus faciles en deux étapes.",
      },
    ],
  },

  "split-pdf": {
    title: "Diviser un PDF en ligne : séparer un document en pages individuelles",
    intro: [
      "Besoin d'extraire une page d'un PDF plus grand ou de découper un document multipage en fichiers séparés ? L'outil de division de ConvertBrio sépare chaque page de votre PDF dans son propre fichier, prêt à télécharger et à utiliser indépendamment.",
      "C'est gratuit, ça fonctionne dans le navigateur et sans filigrane. Le résultat arrive sous forme de ZIP contenant une page par fichier.",
    ],
    howTo: [
      { step: "Envoyez votre PDF", detail: "Glissez-le dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Divisez", detail: "ConvertBrio découpe le document en fichiers d'une page, un par page de l'original." },
      { step: "Téléchargez le ZIP", detail: "Le résultat arrive sous forme d'un seul ZIP contenant chaque page comme un PDF séparé, prêt à extraire." },
    ],
    sections: [
      {
        heading: "Quand la division a du sens",
        body: "Cas fréquents : extraire une page de signature d'un contrat, séparer les chapitres d'un livre scanné, isoler une facture d'un lot, ou découper un grand rapport en sections plus petites à partager.",
      },
      {
        heading: "Rassembler les pages plus tard",
        body: "Si vous divisez un PDF et devez ensuite recombiner certaines ou toutes les pages dans un nouveau document, l'outil Fusionner des PDF de ConvertBrio les réunit dans l'ordre de votre choix.",
      },
      {
        heading: "Confidentialité et limites",
        body: "L'envoi est chiffré, traité automatiquement sans intervention humaine, et l'original comme les pages résultantes sont supprimés des serveurs de ConvertBrio sous 24 heures. Limite de 100 Mo par fichier.",
      },
    ],
    relatedTools: [
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "PDF en JPG", href: "/fr/tools/pdf-to-jpg" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la division d'un PDF en pages individuelles.",
    faq: [
      {
        question: "Comment diviser un PDF en pages séparées ?",
        answer:
          "Envoyez votre PDF à l'outil Diviser un PDF de ConvertBrio, et il sépare chaque page dans un fichier individuel, tous réunis dans un seul téléchargement ZIP.",
      },
      {
        question: "Puis-je extraire une seule page d'un PDF ?",
        answer:
          "Oui : la division découpe le document en pages individuelles dans un ZIP, vous prenez donc la page voulue et ignorez le reste.",
      },
      {
        question: "Puis-je réassembler les pages ensuite ?",
        answer:
          "Oui, utilisez l'outil Fusionner des PDF de ConvertBrio pour recombiner les pages résultantes dans un nouveau document dans l'ordre voulu.",
      },
    ],
  },

  "pdf-to-word": {
    title: "Convertir un PDF en Word : transformer un PDF en document modifiable",
    intro: [
      "Besoin de modifier le texte d'un PDF sans avoir le fichier source ? Le convertisseur PDF en Word de ConvertBrio reconstruit votre PDF en un DOCX modifiable — paragraphes, gras et italique, titres, tableaux simples et images inclus — qui s'ouvre dans Microsoft Word, Google Docs ou LibreOffice.",
      "C'est gratuit, sans inscription et sans filigrane. Les documents simples se convertissent bien ; plus la page d'origine est visuellement complexe, plus vous ajusterez ensuite.",
    ],
    howTo: [
      {
        step: "Vérifiez si le PDF contient du vrai texte",
        detail:
          "Ouvrez-le et essayez de sélectionner une phrase avec le curseur. Si vous y arrivez, passez à l'étape 2. Si le texte est une image scannée, passez-le d'abord par OCR de PDF.",
      },
      { step: "Envoyez le PDF", detail: "Glissez-le dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Convertissez en DOCX", detail: "ConvertBrio reconstruit le contenu en document Word — texte, titres, tableaux de base et images — et il se télécharge automatiquement." },
      { step: "Ouvrez et modifiez dans Word", detail: "Le DOCX s'ouvre dans Word, Google Docs ou tout éditeur compatible. Vérifiez la mise en page et ajustez ce que la conversion n'a pas placé parfaitement." },
    ],
    sections: [
      {
        heading: "Ce qui est conservé et ce qui demande des retouches",
        body: "Le savoir à l'avance fait gagner du temps.",
        table: {
          headers: ["Élément", "Résultat de la conversion"],
          rows: [
            ["Paragraphes, gras, italique", "Conservés de façon fiable"],
            ["Titres et listes de base", "Conservés dans la plupart des documents"],
            ["Tableaux simples", "Conservés ; bordures et espacement peuvent demander un ajustement"],
            ["Images en ligne et pleine largeur", "Conservées et placées dans le flux"],
            ["Mises en page multicolonnes", "Aplaties en une colonne — prévoyez de refaire la mise en page"],
            ["En-têtes, pieds de page, numéros de page", "Peuvent passer dans le corps ou disparaître"],
          ],
        },
      },
      {
        heading: "Convertir un document scanné en Word",
        body: "Si votre PDF est un scan — une photo de chaque page plutôt que du vrai texte — ce convertisseur n'a aucun texte à extraire et produira un document vide ou uniquement composé d'images. Passez d'abord le scan par l'outil OCR de PDF : il reconnaît le texte imprimé et ajoute une couche de texte. Convertissez ensuite ce PDF OCR ici pour obtenir un DOCX modifiable.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Le PDF est chiffré à l'envoi, converti automatiquement sans intervention humaine, et les deux fichiers sont supprimés sous 24 heures. Un document à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Word en PDF", href: "/fr/tools/word-to-pdf" },
      { label: "OCR de PDF", href: "/fr/tools/ocr-pdf" },
      { label: "PDF en JPG", href: "/fr/tools/pdf-to-jpg" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la conversion de fichiers PDF en documents Word modifiables.",
    faq: [
      {
        question: "Comment convertir un PDF en document Word modifiable ?",
        answer:
          "Envoyez votre PDF à l'outil PDF en Word de ConvertBrio, et il reconstruit le contenu — texte, titres, tableaux simples et images — en un DOCX que vous ouvrez et modifiez dans Microsoft Word ou Google Docs.",
      },
      {
        question: "Comment convertir un document scanné en Word ?",
        answer:
          "Passez d'abord le scan par l'OCR de PDF de ConvertBrio pour reconnaître le texte et ajouter une couche de texte. Convertissez ensuite ce PDF ici pour obtenir un DOCX modifiable. Un scan brut n'a aucun texte que cet outil puisse extraire.",
      },
      {
        question: "Les mises en page complexes et les images se convertissent-elles correctement ?",
        answer:
          "Paragraphes, gras et italique, titres, tableaux simples et images sont conservés. Les mises en page multicolonnes et les pages très travaillées sont aplaties et devront être refaites.",
      },
      {
        question: "Le fichier converti est-il un vrai .docx ?",
        answer:
          "Oui, un .docx standard qui s'ouvre dans Microsoft Word, Google Docs, LibreOffice et Pages.",
      },
      {
        question: "Ajoutez-vous un filigrane ?",
        answer: "Non. Le DOCX est propre, sans filigrane, badge ni métadonnées ajoutées.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Convertir Word en PDF : figer la mise en forme pour le partage",
    intro: [
      "Un document Word peut s'afficher différemment selon les polices, la version de Word ou le système sur lequel il est ouvert — un vrai problème quand un CV, un contrat ou un rapport doit être identique pour tous ceux qui le reçoivent. Le convertisseur Word en PDF de ConvertBrio transforme votre DOCX en un PDF prêt à imprimer qui s'affiche partout à l'identique et ne peut pas être modifié par accident.",
      "C'est gratuit, ça fonctionne dans le navigateur, sans Microsoft Word installé et sans filigrane.",
    ],
    howTo: [
      { step: "Enregistrez le document en .docx", detail: "Dans Word, Fichier → Enregistrer sous et choisissez Document Word (.docx). Les fichiers .doc anciens ne sont pas acceptés." },
      { step: "Envoyez le fichier", detail: "Glissez le .docx dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Convertissez et téléchargez", detail: "ConvertBrio met en page le document et génère le PDF. Le fichier se télécharge automatiquement, prêt à envoyer par e-mail, imprimer ou téléverser." },
    ],
    sections: [
      {
        heading: "Pourquoi convertir en PDF avant d'envoyer",
        body: "Le PDF est le standard des documents finalisés parce qu'il s'affiche à l'identique sur tous les appareils, sans dépendre de Word ni des bonnes polices chez le destinataire. Un fichier Word, lui, peut réorganiser les paragraphes, décaler les sauts de page ou substituer des polices sur une autre machine — exactement ce qu'on ne veut pas quand un recruteur ouvre votre CV.",
      },
      {
        heading: "Comment la mise en forme est traitée",
        body: "Texte, polices, titres, listes, tableaux, images en ligne et format de page sont conservés. Les fonctions très spécifiques à Word — en-têtes et pieds de page personnalisés, notes de bas de page, suivi des modifications — peuvent s'afficher un peu différemment car le document est remis en page, et non par Word lui-même.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre document est chiffré à l'envoi, converti automatiquement sans intervention humaine, et les deux fichiers sont supprimés sous 24 heures. Un .docx à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "PDF en Word", href: "/fr/tools/pdf-to-word" },
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la conversion de documents Word en PDF.",
    faq: [
      {
        question: "Comment convertir un document Word en PDF gratuitement ?",
        answer:
          "Envoyez votre .docx à l'outil Word en PDF de ConvertBrio et il génère un PDF mis en forme prêt à télécharger — sans installer Microsoft Word, sans compte, sans filigrane.",
      },
      {
        question: "Ma mise en forme restera-t-elle identique après conversion ?",
        answer:
          "Oui, pour les documents standard : mise en page, polices, titres, tableaux et images sont conservés, et contrairement à un fichier Word le PDF s'affiche à l'identique sur tout appareil.",
      },
      {
        question: "Est-ce que ça marche avec les fichiers .doc ?",
        answer:
          "Uniquement le format moderne .docx. Ouvrez un .doc ancien dans Word et enregistrez-le en .docx (Fichier → Enregistrer sous), puis convertissez.",
      },
      {
        question: "Puis-je reconvertir le PDF en Word ensuite ?",
        answer:
          "Oui, utilisez l'outil PDF en Word de ConvertBrio. Notez que repasser un PDF à mise en page figée en texte modifiable est approximatif pour les mises en page complexes.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "Convertir un PDF en JPG : exporter chaque page en image",
    intro: [
      "Il arrive qu'on ait besoin d'une page de PDF comme image : pour l'insérer dans une diapositive, la publier sur les réseaux, la joindre là où les PDF ne sont pas acceptés ou extraire un graphique d'un long rapport. Le convertisseur PDF en JPG de ConvertBrio rend chaque page de votre fichier en un JPG séparé.",
      "C'est gratuit, sans inscription et sans filigrane. Un PDF d'une page renvoie un seul JPG ; un PDF multipage renvoie un jeu d'images, une par page.",
    ],
    howTo: [
      { step: "Envoyez votre PDF", detail: "Glissez-le dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Convertissez", detail: "ConvertBrio rend chaque page en un JPG haute résolution. Les documents plus longs prennent un peu plus de temps car chaque page est rendue individuellement." },
      { step: "Téléchargez les images", detail: "Une seule page se télécharge en un JPG ; plusieurs pages se téléchargent ensemble, vous avez donc le document entier en images." },
    ],
    sections: [
      {
        heading: "Usages courants",
        body: "",
        list: [
          "Insérer une page de PDF dans une diapositive PowerPoint ou Google Slides",
          "Publier une page ou un certificat sur les réseaux sociaux ou une application de messagerie",
          "Envoyer des pages de document dans un formulaire qui n'accepte que des images",
          "Extraire un schéma, un graphique ou une figure d'un rapport pour le réutiliser",
        ],
      },
      {
        heading: "JPG ou PNG ?",
        body: "Choisissez JPG pour les pages photographiques et pour la plus petite taille de fichier : c'est le bon standard pour le partage. Choisissez PNG quand la page est surtout du texte, des tableaux ou des traits et que vous la voulez très nette, ou quand vous avez besoin d'un fond transparent.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre PDF est chiffré à l'envoi, rendu automatiquement sans intervention humaine, et l'envoi comme les images sont supprimés sous 24 heures. Un fichier à la fois, jusqu'à 100 Mo, gratuit, sans compte.",
      },
    ],
    relatedTools: [
      { label: "JPG en PDF", href: "/fr/tools/jpg-to-pdf" },
      { label: "Diviser un PDF", href: "/fr/tools/split-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la conversion de pages de PDF en images JPG.",
    faq: [
      {
        question: "PDF en JPG convertit-il toutes les pages ?",
        answer:
          "Oui : chaque page de votre PDF est rendue en un JPG séparé, un document multipage produit donc une image par page.",
      },
      {
        question: "JPG ou PNG pour une page avec du texte ?",
        answer:
          "Le PNG garde le texte et les traits plus nets car il est sans perte ; le JPG donne un fichier plus petit avec un détail un peu plus doux. Utilisez PNG quand la netteté du texte compte le plus.",
      },
      {
        question: "Puis-je reconvertir les images en PDF ensuite ?",
        answer:
          "Oui, utilisez l'outil JPG en PDF de ConvertBrio pour recombiner des images en un seul PDF quand vous en avez besoin.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "Convertir JPG en PDF : réunir des images en un seul document",
    intro: [
      "Que ce soit pour envoyer des pages scannées, monter un portfolio simple ou transformer une pile de reçus en un seul fichier, l'outil JPG en PDF de ConvertBrio combine une ou plusieurs images en un seul PDF, dans l'ordre de votre choix, avec une image par page.",
      "C'est la façon standard de transformer des photos de papier en quelque chose qu'on peut envoyer. La plupart des portails veulent un PDF, pas un dossier de JPG : ceci le résout en une étape, gratuitement et sans filigrane.",
    ],
    howTo: [
      { step: "Photographiez ou rassemblez les images", detail: "Pour les pages de document, photographiez de face et avec une bonne lumière pour que le texte soit lisible. JPG et PNG sont acceptés." },
      { step: "Envoyez-les toutes ensemble", detail: "Glissez toutes les images dans la zone ou sélectionnez-en plusieurs. Taille combinée jusqu'à 100 Mo." },
      { step: "Fixez l'ordre des pages", detail: "Le PDF suit l'ordre dans lequel les images sont listées ; organisez page 1, page 2, et ainsi de suite." },
      { step: "Convertissez et téléchargez", detail: "ConvertBrio place chaque image sur sa propre page et le PDF final se télécharge automatiquement." },
    ],
    sections: [
      {
        heading: "Usages courants",
        body: "",
        list: [
          "Envoyer un document, une pièce d'identité, un passeport ou un certificat scanné",
          "Combiner plusieurs photos de reçu ou de facture pour une note de frais",
          "Renvoyer un contrat signé à la main en un seul fichier",
          "Transformer un ensemble de captures d'écran en un document à partager",
        ],
      },
      {
        heading: "Un document propre à partir de photos du téléphone",
        body: "Pour des résultats lisibles, remplissez le cadre avec la page, gardez l'appareil parallèle pour éviter la forme en trapèze et utilisez une lumière uniforme sans ombre sur le texte. Si la photo est pivotée, corrigez-la avant de convertir. Si le PDF obtenu est trop lourd pour une limite d'envoi, passez-le par Compresser un PDF ensuite.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Les images sont chiffrées à l'envoi, combinées automatiquement sans intervention humaine, et les sources comme le PDF final sont supprimés sous 24 heures. Plusieurs images à la fois, 100 Mo combinés, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "PDF en JPG", href: "/fr/tools/pdf-to-jpg" },
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images JPG en un PDF.",
    faq: [
      {
        question: "Peut-on combiner plusieurs images en un seul PDF ?",
        answer:
          "Oui : envoyez autant d'images JPG ou PNG que nécessaire en une fois, et ConvertBrio les combine en un PDF avec chaque image sur sa propre page, dans l'ordre que vous organisez.",
      },
      {
        question: "Comment convertir la photo d'un document en PDF ?",
        answer:
          "Envoyez la photo à JPG en PDF et elle devient un PDF d'une page que vous pouvez envoyer, imprimer ou partager. Envoyez plusieurs photos pour transformer un document multipage en un seul PDF.",
      },
      {
        question: "Mon PDF est trop lourd à envoyer, que faire ?",
        answer:
          "Les photos de téléphone sont en haute résolution, le PDF peut donc être lourd. Passez-le par Compresser un PDF, qui réencode les images intégrées et réduit souvent bien la taille.",
      },
    ],
  },

  "image-converter": {
    title: "Convertisseur d'images : convertir entre n'importe quel format en ligne",
    intro: [
      "Le convertisseur d'images de ConvertBrio fait passer une photo, un graphique ou une capture d'écran entre JPG, PNG, WEBP, AVIF, HEIC et GIF en une étape, directement dans le navigateur. Rien à installer, aucun compte à créer : envoyez un fichier, choisissez le format et téléchargez le résultat en quelques secondes.",
      "La raison la plus fréquente de convertir une image est la compatibilité : une photo HEIC d'iPhone que Windows n'ouvre pas, un WEBP enregistré depuis un site qu'un éditeur refuse, ou un AVIF qu'une ancienne messagerie n'affiche pas.",
    ],
    howTo: [
      { step: "Envoyez votre image", detail: "Glissez un fichier JPG, PNG, WEBP, AVIF, HEIC ou GIF dans la zone, ou cliquez pour parcourir. Jusqu'à 100 Mo." },
      { step: "Choisissez le format de sortie", detail: "Sélectionnez JPG, PNG, WEBP, AVIF ou GIF. En cas de doute, JPG convient aux photos et PNG aux graphiques avec transparence ou texte net." },
      { step: "Convertissez et téléchargez", detail: "Cliquez sur Convertir. ConvertBrio décode l'original et le réencode dans le format choisi, et le fichier se télécharge automatiquement." },
    ],
    sections: [
      {
        heading: "Choisir le bon format de sortie",
        body: "Il n'existe pas de meilleur format d'image : le bon choix dépend de la destination du fichier.",
        table: {
          headers: ["Vous devez…", "Convertir en", "Pourquoi"],
          rows: [
            ["Joindre une photo à un e-mail ou un formulaire", "JPG", "S'ouvre partout, fichier petit, aucun risque d'incompatibilité"],
            ["Garder un fond transparent", "PNG ou WEBP", "JPG et l'ancien GIF aplatissent la transparence sur une couleur unie"],
            ["Accélérer les images de votre propre site", "WEBP ou AVIF", "Bien plus petits que JPG/PNG à qualité visuelle égale"],
            ["Ouvrir une photo d'iPhone sous Windows", "JPG", "La prise en charge du HEIC sous Windows est irrégulière ; JPG est garanti"],
            ["Téléverser sur un site qui refuse WEBP ou AVIF", "JPG ou PNG", "Les deux formats acceptés par tout formulaire d'envoi"],
          ],
        },
      },
      {
        heading: "Ce qui arrive à la transparence et à l'animation",
        body: "La transparence est conservée quand les deux formats gèrent le canal alpha (PNG, WEBP, AVIF). Convertir une image transparente en JPG remplit les zones transparentes en blanc. Les GIF animés sont convertis en une seule image fixe.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Chaque envoi est chiffré et traité automatiquement sans intervention humaine. L'original comme l'image convertie sont supprimés des serveurs de ConvertBrio sous 24 heures. Fichiers jusqu'à 100 Mo, gratuit, sans compte et sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
      { label: "JPG en PDF", href: "/fr/tools/jpg-to-pdf" },
      { label: "PDF en JPG", href: "/fr/tools/pdf-to-jpg" },
    ],
    faqDescription: "Questions fréquentes sur le convertisseur d'images de ConvertBrio.",
    faq: [
      {
        question: "Entre quels formats d'image puis-je convertir ?",
        answer:
          "Le convertisseur lit JPG, PNG, WEBP, AVIF, HEIC et GIF, et exporte en JPG, PNG, WEBP, AVIF ou GIF. Cela couvre pratiquement tous les formats des appareils photo, téléphones, captures d'écran et logiciels de conception.",
      },
      {
        question: "La conversion réduit-elle la qualité de mon image ?",
        answer:
          "Convertir entre des formats sans perte comme PNG garde chaque pixel. Convertir vers un format avec perte comme JPG ou WEBP applique une compression une fois, mais à la qualité par défaut la différence est rarement visible.",
      },
      {
        question: "La conversion change-t-elle les dimensions de l'image ?",
        answer:
          "Non. Le convertisseur garde la largeur et la hauteur exactes de l'original. Si vous devez aussi changer la taille, utilisez un outil de redimensionnement ensuite.",
      },
      {
        question: "Ajoutez-vous un filigrane ?",
        answer: "Non. Le fichier converti est propre, en pleine résolution, sans filigrane ni badge.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR de PDF : rendre un document scanné consultable et modifiable",
    intro: [
      "Une page scannée ou la photo d'un document n'est qu'une image pour l'ordinateur : impossible de rechercher, de copier le texte ou de récupérer le document scanné dans Word sans tout retaper. La reconnaissance optique de caractères (OCR) résout ça : elle lit le texte dans l'image et le transforme en vrais caractères, sélectionnables.",
      "C'est l'outil que les gens cherchent quand ils cherchent comment transformer un document scanné en texte modifiable. Scannez ou photographiez les pages, enregistrez-les en PDF, passez-les ici et copiez le texte, ou envoyez le PDF consultable à l'outil PDF en Word.",
    ],
    howTo: [
      { step: "Scannez ou photographiez le document en PDF", detail: "Utilisez un scanner ou une appli de scan sur le téléphone (qui enregistre directement en PDF). Des pages droites, planes et bien éclairées donnent la meilleure reconnaissance." },
      { step: "Envoyez le PDF à OCR de PDF", detail: "Un fichier à la fois, jusqu'à 100 Mo. Les documents multipages fonctionnent : chaque page est traitée." },
      { step: "Lancez la reconnaissance", detail: "ConvertBrio lit chaque page et construit une couche de texte derrière l'image originale. Les documents plus grands prennent plus de temps car chaque page passe individuellement." },
      { step: "Récupérez le texte dans Word", detail: "Ouvrez le PDF renvoyé, sélectionnez tout (Ctrl/Cmd+A) et collez dans Word, ou envoyez le PDF consultable à PDF en Word pour un DOCX qui garde la mise en forme de base." },
    ],
    sections: [
      {
        heading: "Ce que l'OCR de PDF vous renvoie",
        body: "Un PDF identique à celui que vous avez envoyé — mêmes images de page, même mise en page — mais avec une couche de texte derrière l'image. Vous pouvez donc rechercher avec Ctrl+F, surligner et copier des passages, et sélectionner le document entier pour déplacer le texte vers un endroit modifiable. L'aspect de la page ne change pas.",
      },
      {
        heading: "Récupérer un document scanné dans Word",
        body: [
          "Deux chemins, selon la mise en forme à conserver.",
          "Pour du texte simple, faites l'OCR du PDF ici, ouvrez-le et copiez le texte directement dans un document Word vierge. Rapide, et efficace pour les lettres, les notes et les pages sur une colonne.",
          "Pour un document qui doit garder titres, paragraphes et tableaux simples, passez le PDF OCR par l'outil PDF en Word ensuite. Il reconstruit le contenu reconnu en un DOCX modifiable.",
        ],
      },
      {
        heading: "Obtenir la meilleure précision",
        body: "La qualité de l'OCR suit la qualité du scan. Des pages propres, à fort contraste, scannées à 300 DPI ou photographiées de face et bien éclairées sont reconnues presque parfaitement. La précision baisse avec l'inclinaison, les ombres, la basse résolution ou les polices inhabituelles. L'écriture manuscrite n'est pas reconnue de façon fiable.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre document est chiffré à l'envoi, traité automatiquement sans intervention humaine, et l'envoi comme le résultat OCR sont supprimés sous 24 heures. Un PDF à la fois, jusqu'à 100 Mo, gratuit, sans compte.",
      },
    ],
    relatedTools: [
      { label: "PDF en Word", href: "/fr/tools/pdf-to-word" },
      { label: "PDF en JPG", href: "/fr/tools/pdf-to-jpg" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
    ],
    faqDescription: "Questions fréquentes sur l'OCR d'un PDF et la récupération du texte scanné dans Word.",
    faq: [
      {
        question: "Comment récupérer un document scanné dans Word ?",
        answer:
          "Enregistrez le scan en PDF, passez-le par OCR de PDF pour ajouter une couche de texte, puis copiez le texte directement dans Word, ou envoyez le PDF OCR à l'outil PDF en Word pour un DOCX modifiable qui garde la mise en forme de base.",
      },
      {
        question: "Peut-on scanner un document en texte modifiable gratuitement ?",
        answer:
          "Oui. L'OCR de PDF est gratuit et sans compte. Il reconnaît le texte de chaque page scannée pour que vous puissiez le sélectionner, le copier et le réutiliser.",
      },
      {
        question: "L'OCR change-t-il l'aspect de mon document ?",
        answer:
          "Non. L'image de la page originale est conservée exactement ; le texte reconnu est ajouté en couche invisible par-dessus, rien ne change visuellement.",
      },
      {
        question: "Reconnaît-il l'écriture manuscrite ?",
        answer: "Pas de façon fiable. L'OCR est conçu pour le texte imprimé et dactylographié. Les notes manuscrites peuvent être reconnues seulement en partie.",
      },
      {
        question: "Mon PDF a déjà du texte sélectionnable, ai-je encore besoin de l'OCR ?",
        answer:
          "Non. Si vous pouvez déjà surligner le texte avec le curseur, le PDF a une vraie couche de texte et vous pouvez aller directement à PDF en Word.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Compresser un PowerPoint en ligne : réduire un .pptx pour l'e-mail",
    intro: [
      "Les fichiers PowerPoint grossissent vite : quelques photos de téléphone, deux captures d'écran, un graphique exporté, et un .pptx dépasse 40 Mo et ne passe plus par e-mail. L'outil Compresser un PowerPoint de ConvertBrio ouvre la présentation, réencode les images qu'elle contient avec une qualité et une résolution efficaces, et renvoie un .pptx plus petit qui reste entièrement modifiable.",
      "C'est gratuit, ça fonctionne dans le navigateur sans inscription et sans filigrane. Le texte des diapositives, la mise en page, les animations, les graphiques et les notes restent intacts — seules les photos et captures intégrées sont réencodées.",
    ],
    howTo: [
      { step: "Enregistrez la présentation en .pptx", detail: "Dans PowerPoint, Fichier → Enregistrer sous → Présentation PowerPoint (.pptx). Le format .ppt ancien n'est pas accepté." },
      { step: "Envoyez-la", detail: "Glissez le .pptx dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Compressez", detail: "ConvertBrio trouve chaque image intégrée, réduit l'échelle de celles qui dépassent ce qu'une diapositive affiche, et les réencode. Le texte et le contenu vectoriel sont laissés tels quels." },
      { step: "Téléchargez le .pptx plus petit", detail: "Ouvrez-le dans PowerPoint pour vérifier que les diapositives sont correctes, puis envoyez-le par e-mail ou téléversez-le." },
    ],
    sections: [
      {
        heading: "Pourquoi les fichiers PowerPoint deviennent si lourds",
        body: "Les téléphones modernes prennent des photos de 12 à 48 mégapixels, plusieurs mégaoctets chacune. Collez-en quatre sur les diapositives et la présentation transporte ~20 Mo d'images avant le moindre mot de texte. PowerPoint garde chaque image à la résolution complète de son insertion, même si la diapositive n'en montre qu'une petite version.",
      },
      {
        heading: "Ce que l'outil change et ce qu'il ne change pas",
        body: "",
        list: [
          "Réencodé : images JPEG et PNG intégrées, redimensionnées si elles dépassent ~1800 px sur le côté long",
          "Intact : tout le texte, les polices, la mise en page des diapositives, les animations, les transitions et les notes",
          "Intact : graphiques, tableaux, SmartArt et formes vectorielles",
          "Le fichier reste un .pptx normal et modifiable — rien n'est aplati",
        ],
      },
      {
        heading: "De combien va-t-il rétrécir ?",
        body: "Cela dépend du nombre d'images de la présentation. Une présentation bâtie autour de photos et captures haute résolution baisse souvent de 40 à 70 %. Une présentation quasi entièrement textuelle, avec un logo et quelques petites images, ne change pas beaucoup.",
      },
      {
        heading: "Pour un fichier encore plus petit : convertir en PDF",
        body: "Si la présentation est finalisée et que le destinataire n'a pas besoin de la modifier, la convertir en PDF puis compresser ce PDF produit souvent le plus petit fichier de tous, et il s'ouvre sur tout appareil sans PowerPoint. Le compromis : ce n'est plus une présentation modifiable.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre présentation est chiffrée à l'envoi, traitée automatiquement sur les serveurs de ConvertBrio sans intervention humaine, et l'envoi comme la copie compressée sont supprimés sous 24 heures. Un .pptx à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Compresser un Document Word", href: "/fr/tools/compress-word" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
    ],
    faqDescription: "Questions fréquentes sur la réduction de la taille d'une présentation PowerPoint.",
    faq: [
      {
        question: "Comment compresser un PowerPoint pour l'envoyer par e-mail ?",
        answer:
          "Envoyez le .pptx à l'outil Compresser un PowerPoint de ConvertBrio. Il réencode les images intégrées et renvoie une présentation plus petite et toujours modifiable — gratuit, sans inscription, sans filigrane.",
      },
      {
        question: "Le fichier compressé reste-t-il modifiable ?",
        answer:
          "Oui. La sortie est un .pptx normal que vous ouvrez et modifiez dans PowerPoint. Seules les images intégrées sont réencodées ; texte, mise en page, animations et notes ne changent pas.",
      },
      {
        question: "La compression va-t-elle baisser la qualité de mes diapositives ?",
        answer:
          "Le texte et les formes vectorielles restent parfaitement nets. Les photos sont réencodées avec une légère baisse de qualité, presque toujours invisible ; la différence n'apparaît qu'en zoomant fortement sur une image sur un grand écran.",
      },
      {
        question: "Ma présentation n'a presque pas rétréci, pourquoi ?",
        answer:
          "Elle est probablement déjà légère : une présentation quasi entièrement textuelle a peu de données d'image à supprimer.",
      },
      {
        question: "Est-ce que ça marche avec les fichiers .ppt ?",
        answer:
          "Uniquement le format moderne .pptx. Ouvrez un .ppt ancien dans PowerPoint et enregistrez-le en .pptx (Fichier → Enregistrer sous), puis compressez.",
      },
    ],
  },

  "compress-word": {
    title: "Compresser un document Word en ligne : réduire un .docx pour l'e-mail",
    intro: [
      "Un document Word qui ne passe pas par e-mail transporte presque toujours des images en pleine résolution. Une seule photo de téléphone collée dans un rapport peut peser 5 Mo à elle seule ; quelques-unes et un .docx quasi entièrement textuel dépasse 30 Mo. L'outil Compresser un Document Word de ConvertBrio ouvre le document, réencode les images qu'il contient avec une qualité et une résolution efficaces, et renvoie un .docx plus petit qui reste entièrement modifiable.",
      "C'est gratuit, ça fonctionne dans le navigateur sans inscription et sans filigrane. Texte, titres, tableaux, styles et mise en page restent intacts — seules les photos et captures intégrées sont réencodées.",
    ],
    howTo: [
      { step: "Enregistrez le document en .docx", detail: "Dans Word, Fichier → Enregistrer sous → Document Word (.docx). Le format .doc ancien n'est pas accepté." },
      { step: "Envoyez-le", detail: "Glissez le .docx dans la zone ou parcourez. Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Compressez", detail: "ConvertBrio trouve chaque image intégrée, réduit l'échelle de celles qui dépassent ce qu'une page affiche, et les réencode. Le texte et le contenu vectoriel sont laissés tels quels." },
      { step: "Téléchargez le .docx plus petit", detail: "Ouvrez-le dans Word pour vérifier qu'il est correct, puis envoyez-le par e-mail ou téléversez-le." },
    ],
    sections: [
      {
        heading: "Pourquoi les fichiers Word deviennent si lourds",
        body: "Word intègre chaque image à la résolution de son ajout : une photo de 24 mégapixels reste à 24 mégapixels même si la page l'affiche sur deux centimètres de large. Le texte, lui, est minuscule. Compresser un document Word, c'est donc réencoder et redimensionner les images qu'il contient.",
      },
      {
        heading: "Ce que l'outil change et ce qu'il ne change pas",
        body: "",
        list: [
          "Réencodé : images JPEG et PNG intégrées, redimensionnées si elles dépassent ~1800 px sur le côté long",
          "Intact : tout le texte du corps, les titres, les styles, les listes et les tableaux",
          "Intact : mise en page, en-têtes et pieds de page, notes de bas de page et champs",
          "Le fichier reste un .docx normal et modifiable",
        ],
      },
      {
        heading: "S'il est encore trop lourd",
        body: [
          "Pour un document finalisé que vous allez envoyer, Word en PDF suivi de Compresser un PDF produit souvent le plus petit fichier, et il ne peut pas être modifié par accident.",
          "Un document lourd malgré peu d'images peut porter un suivi des modifications et un historique de révisions (acceptez ou refusez toutes les modifications et désactivez le suivi), des polices intégrées (Fichier → Options → Enregistrement → décochez « Incorporer les polices dans le fichier »), ou du contenu collé comme objets Excel ou web.",
        ],
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre document est chiffré à l'envoi, traité automatiquement sur les serveurs de ConvertBrio sans intervention humaine, et l'envoi comme la copie compressée sont supprimés sous 24 heures. Un .docx à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    relatedTools: [
      { label: "Word en PDF", href: "/fr/tools/word-to-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "Compresser un PowerPoint", href: "/fr/tools/compress-powerpoint" },
    ],
    faqDescription: "Questions fréquentes sur la réduction de la taille d'un document Word.",
    faq: [
      {
        question: "Comment rendre un document Word plus léger pour l'envoyer par e-mail ?",
        answer:
          "Envoyez le .docx à l'outil Compresser un Document Word de ConvertBrio. Il réencode les images intégrées et renvoie un document plus petit et toujours modifiable — gratuit, sans inscription, sans filigrane. Pour le plus petit fichier, convertissez en PDF et compressez ce PDF.",
      },
      {
        question: "Le fichier compressé reste-t-il modifiable ?",
        answer:
          "Oui. La sortie est un .docx normal que vous ouvrez et modifiez dans Word, Google Docs ou LibreOffice. Seules les images intégrées sont réencodées.",
      },
      {
        question: "La compression change-t-elle mon texte ou ma mise en forme ?",
        answer: "Non. Seules les images sont affectées. Texte, titres, tableaux, styles et mise en page ne changent pas.",
      },
      {
        question: "Mon document est quasi entièrement textuel mais reste lourd, pourquoi ?",
        answer:
          "Vérifiez le suivi des modifications et l'historique de révisions, les polices intégrées ou le contenu collé comme objets Excel/web complets. Chacun peut ajouter plusieurs mégaoctets indépendamment des images.",
      },
      {
        question: "Est-ce que ça marche avec les anciens fichiers .doc ?",
        answer: "Uniquement le format moderne .docx. Ouvrez le .doc dans Word et enregistrez-le en .docx (Fichier → Enregistrer sous), puis compressez.",
      },
    ],
  },
};
