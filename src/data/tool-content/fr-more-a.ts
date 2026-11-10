import type { ToolContentEntry } from "../toolContent";

// French (fr) long-form tool content, slice A.

export const toolContentFrMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "Convertisseur HEIC en JPG : ouvrez vos photos d'iPhone partout",
    intro: [
      "Les iPhone et les iPad enregistrent par défaut les photos au format HEIC : un format qui compresse très bien, mais que beaucoup de logiciels courants refusent d'ouvrir, des vieux PC Windows à certains formulaires d'envoi et éditeurs photo. Le convertisseur HEIC en JPG de ConvertBrio règle le problème en un instant : vous envoyez la photo, et vous récupérez un JPG standard qui s'ouvre dans n'importe quel navigateur, application ou appareil, sans extension ni pack de codecs.",
      "Aucun réglage à modifier sur votre téléphone, rien à installer. La conversion conserve la photo à sa résolution d'origine et respecte l'orientation, pour que les photos en portrait ne ressortent pas couchées. Le résultat est un simple JPG que vous pouvez envoyer par e-mail, déposer sur un portail administratif ou d'emploi, insérer dans un document ou ouvrir dans n'importe quel éditeur photo.",
    ],
    howTo: [
      {
        step: "Placez le fichier HEIC sur votre appareil",
        detail:
          "Transférez la photo depuis votre iPhone par AirDrop, par e-mail ou par câble, ou téléchargez-la depuis iCloud. Le fichier porte l'extension .heic ou .heif.",
      },
      {
        step: "Envoyez-le dans le convertisseur",
        detail: "Glissez le fichier dans la zone d'envoi ou parcourez vos dossiers. Une photo par conversion, jusqu'à 100 Mo.",
      },
      {
        step: "Cliquez sur Convertir",
        detail:
          "ConvertBrio décode l'image HEIC et la réencode en JPG pleine résolution, en corrigeant la rotation d'après la balise d'orientation intégrée.",
      },
      {
        step: "Téléchargez le JPG",
        detail: "Le fichier converti se télécharge automatiquement et s'ouvre dans n'importe quel navigateur, visionneuse, client de messagerie ou formulaire d'envoi.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi les fichiers HEIC posent problème",
        body: [
          "Le HEIC (High Efficiency Image Container) stocke une photo dans un fichier environ deux fois plus léger qu'un JPG de qualité équivalente, ce qui explique qu'Apple en ait fait le format par défaut d'iOS en 2017. La contrepartie, c'est la compatibilité : le HEIC repose sur le codec HEVC, que de nombreux sites web, anciennes versions de Windows, appareils Android et applications tierces ne savent pas décoder, ou gèrent de façon inégale.",
          "Si vous avez déjà envoyé une photo d'iPhone sur un formulaire et obtenu une erreur « type de fichier non pris en charge », vu une vignette vide ou entendu un collègue dire que l'image ne s'ouvre pas, le HEIC est presque toujours en cause. Convertir en JPG supprime complètement cette dépendance.",
        ],
      },
      {
        heading: "HEIC et JPG en un coup d'œil",
        body: "Les deux formats sont avec perte, mais ils ont été conçus à vingt-cinq ans d'écart et ne prennent pas en charge les mêmes choses.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Taille du fichier", "Environ 50 % plus léger à qualité égale", "Plus lourd, mais compris partout"],
            ["Compatibilité", "Appareils Apple, navigateurs et systèmes récents uniquement", "Tous les appareils, navigateurs, applications et formulaires"],
            ["Transparence", "Prise en charge", "Non prise en charge"],
            ["Images multiples / données de profondeur", "Pris en charge (Live Photos, profondeur du mode Portrait)", "Une seule image à plat"],
            ["Idéal pour", "Le stockage sur les appareils Apple", "Partager, envoyer et modifier partout"],
          ],
        },
      },
      {
        heading: "La conversion fait-elle perdre en qualité ?",
        body: "Il y a une passe de recompression, car le HEIC et le JPG reposent sur des calculs différents, mais avec la qualité JPG par défaut de ConvertBrio, la différence n'est visible ni à la taille d'affichage normale ni à l'impression. La résolution de la photo (son nombre de mégapixels) ne change pas. Si vous comptez retoucher beaucoup la photo ensuite, convertissez-la plutôt en PNG avec le Convertisseur d'Images pour éviter d'ajouter une seconde passe avec perte.",
      },
      {
        heading: "Convertir plusieurs photos d'iPhone",
        body: "Cet outil convertit un fichier HEIC par envoi. Pour un lot, le plus rapide est de configurer l'appareil photo de votre iPhone pour qu'il prenne désormais des JPG (Réglages → Appareil photo → Formats → Le plus compatible) et d'utiliser ce convertisseur pour les photos HEIC déjà présentes dans votre photothèque. Pour regrouper plusieurs photos d'iPhone dans un seul fichier après conversion, Image en PDF accepte directement le HEIC et assemble plusieurs images en un seul PDF.",
      },
      {
        heading: "Confidentialité",
        body: "Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase), et sont chiffrés pendant leur transfert.",
      },
    ],
    relatedTools: [
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
      { label: "Image en PDF", href: "/fr/tools/image-to-pdf" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
      { label: "Redimensionner une Image", href: "/fr/tools/resize-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion des photos HEIC d'iPhone en JPG.",
    faq: [
      {
        question: "Pourquoi ma photo d'iPhone ne s'ouvre-t-elle pas sur mon ordinateur ?",
        answer:
          "Elle est probablement enregistrée en HEIC, le format photo par défaut d'Apple depuis iOS 11. De nombreux PC Windows, téléphones Android, anciennes applications et sites web ne prennent pas en charge le HEIC. En la convertissant en JPG avec ConvertBrio, vous pouvez l'ouvrir partout.",
      },
      {
        question: "La conversion de HEIC en JPG fait-elle perdre en qualité ?",
        answer:
          "Il y a une légère recompression lors du réencodage en JPG, puisque le HEIC et le JPG utilisent des méthodes de compression différentes, mais avec la qualité par défaut de ConvertBrio, elle n'est pas visible à l'œil nu en affichage normal, et la résolution reste identique.",
      },
      {
        question: "Ma photo va-t-elle ressortir pivotée ou couchée ?",
        answer:
          "Non. ConvertBrio lit la balise d'orientation du fichier HEIC et applique la bonne rotation dans le JPG, si bien que les photos en portrait comme en paysage ressortent dans le bon sens.",
      },
      {
        question: "Puis-je convertir le HEIC en PNG plutôt qu'en JPG ?",
        answer:
          "Oui, utilisez l'outil général Convertisseur d'Images et choisissez PNG comme format de sortie si vous voulez un fichier sans perte, ou si vous prévoyez de retoucher l'image à plusieurs reprises et d'éviter une seconde compression avec perte.",
      },
      {
        question: "Comment empêcher mon iPhone de prendre des photos en HEIC ?",
        answer:
          "Sur votre iPhone, ouvrez Réglages → Appareil photo → Formats et choisissez « Le plus compatible ». Les nouvelles photos seront enregistrées en JPG. Celles qui sont déjà dans votre photothèque restent en HEIC et doivent toujours être converties.",
      },
      {
        question: "HEIF et HEIC, est-ce la même chose ?",
        answer:
          "Pour notre usage, oui en pratique. Le HEIF est la norme de conteneur ; le HEIC est l'implémentation d'Apple avec compression HEVC. Cet outil accepte les fichiers .heic comme .heif.",
      },
    ],
  },

  "jpg-to-png": {
    title: "Convertisseur JPG en PNG : ajoutez la transparence et gardez tous les détails",
    intro:
      "Le JPG est parfait pour les photos légères à partager, mais il ne gère pas la transparence et perd un peu de qualité à chaque nouvel enregistrement. Le convertisseur JPG en PNG de ConvertBrio transforme votre JPG en PNG sans perte en quelques secondes : c'est le format qu'il vous faut avant de retoucher une image, de la placer sur un fond coloré ou de l'utiliser comme logo ou icône.",
    sections: [
      {
        heading: "Quand convertir un JPG en PNG",
        body: "Convertissez en PNG dès que vous avez besoin d'un canal alpha (la transparence), par exemple pour détourer un logo de son fond, ou dès que vous allez retoucher une image à plusieurs reprises et voulez éviter la perte de génération due aux enregistrements successifs en JPG. Le PNG est aussi le choix le plus sûr pour les captures d'écran, les schémas et tout ce qui contient du texte net ou des bords francs, car la compression du JPG peut introduire du flou et des artefacts autour des détails fins.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre JPG, et ConvertBrio le décode puis le réencode en PNG en conservant chaque pixel à l'identique. Comme le JPG ne stocke pas de transparence au départ, le PNG obtenu aura un fond opaque, à moins que vous ne le supprimiez séparément : la conversion porte sur le format et la qualité, pas sur la suppression automatique de l'arrière-plan.",
      },
      {
        heading: "Quelle taille de fichier prévoir",
        body: "Les fichiers PNG sont généralement plus lourds que le JPG d'origine, car le PNG n'écarte aucune donnée, contrairement à la compression avec perte du JPG. Pour les photos riches en détails ou en textures, attendez-vous à un PNG plusieurs fois plus gros que le JPG de départ : c'est la contrepartie normale d'une qualité sans perte.",
      },
    ],
    relatedTools: [
      { label: "PNG en JPG", href: "/fr/tools/png-to-jpg" },
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
      { label: "Recadrer une Image", href: "/fr/tools/crop-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images JPG en PNG.",
    faq: [
      {
        question: "Le passage de JPG à PNG ajoute-t-il automatiquement de la transparence ?",
        answer:
          "Non. Les fichiers JPG ne stockent pas de transparence : la conversion en PNG produit donc une image opaque, d'apparence identique. Le PNG vous donne simplement un format sans perte sur lequel travailler, par exemple avant de retoucher l'image ou d'ajouter de la transparence dans un éditeur.",
      },
      {
        question: "Pourquoi mon PNG est-il tellement plus gros que le JPG d'origine ?",
        answer:
          "Le PNG utilise une compression sans perte, qui préserve chaque pixel au lieu d'écarter des détails comme le fait le JPG. Cette fidélité se paie par un fichier plus lourd : c'est normal, et non le signe d'un problème.",
      },
      {
        question: "Le PNG est-il meilleur que le JPG ?",
        answer:
          "Aucun des deux n'est meilleur dans l'absolu : le PNG convient aux graphiques, aux logos et à tout ce qui demande de la transparence ou des détails sans perte, tandis que le JPG est préférable pour les photos, quand un fichier léger compte plus que la fidélité au pixel près.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "Convertisseur JPG en WEBP : des fichiers plus légers pour des sites plus rapides",
    intro:
      "Le WEBP a été conçu par Google précisément pour accélérer le chargement des pages web : il produit en général des fichiers 25 à 35 % plus légers qu'un JPG de qualité visuelle équivalente. Le convertisseur JPG en WEBP de ConvertBrio réencode votre photo en quelques secondes, un gain rapide pour quiconque optimise des images pour un site web, une newsletter ou une application.",
    sections: [
      {
        heading: "Pourquoi convertir en WEBP",
        body: "Si la vitesse de chargement compte, que ce soit pour le référencement, les mobinautes ou simplement un site plus réactif, le WEBP est l'un des gains les plus faciles à obtenir. Il offre la même plage de qualité que le JPG avec des fichiers nettement plus légers, et les navigateurs modernes (Chrome, Firefox, Safari, Edge) l'affichent tous nativement : pour la plupart des publics, il n'y a donc plus de compromis de compatibilité aujourd'hui.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre JPG, et ConvertBrio le convertit automatiquement en WEBP, en gardant la même résolution et en appliquant l'algorithme de compression du WEBP à la place de celui du JPG. Le téléchargement est prêt en quelques secondes et peut être déposé directement dans le dossier d'images d'un site ou dans un système de gestion de contenu.",
      },
      {
        heading: "Quand le JPG reste un meilleur choix",
        body: "Si votre image doit fonctionner dans des logiciels ou des contextes qui ne prennent pas en charge le WEBP, comme certains anciens clients de messagerie, certains outils de création ou des flux d'impression, gardez aussi une version JPG sous la main. Pour un usage web courant, en revanche, le WEBP est le choix par défaut le plus efficace.",
      },
    ],
    relatedTools: [
      { label: "PNG en WEBP", href: "/fr/tools/png-to-webp" },
      { label: "WEBP en JPG", href: "/fr/tools/webp-to-jpg" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images JPG en WEBP.",
    faq: [
      {
        question: "De combien le WEBP est-il plus léger que le JPG ?",
        answer:
          "Les fichiers WEBP sont généralement 25 à 35 % plus légers qu'un JPG visuellement équivalent, ce qui en a fait un choix courant pour les images de sites web où la vitesse de chargement compte.",
      },
      {
        question: "Tous les navigateurs prennent-ils en charge le WEBP ?",
        answer:
          "Oui, tous les grands navigateurs modernes, dont Chrome, Firefox, Safari et Edge, affichent nativement le WEBP. On peut l'utiliser sans risque pour la publication web courante.",
      },
      {
        question: "Mon image sera-t-elle différente après la conversion en WEBP ?",
        answer:
          "Avec les réglages par défaut de ConvertBrio, la différence visuelle est négligeable pour la plupart des photos. La compression du WEBP est plus efficace que celle du JPG : il peut donc atteindre la même qualité avec un fichier plus petit.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "Convertisseur JPG en AVIF : la compression d'image de nouvelle génération",
    intro:
      "L'AVIF est le format d'image le plus efficace parmi ceux largement pris en charge aujourd'hui : il réduit souvent un JPG de 50 % ou plus à qualité visuelle égale. Le convertisseur JPG en AVIF de ConvertBrio se charge de l'encodage à votre place, et offre aux propriétaires de sites et aux développeurs un moyen simple d'adopter ce format sans outils en ligne de commande ni chaîne de build.",
    sections: [
      {
        heading: "Ce qui distingue l'AVIF",
        body: "L'AVIF repose sur la technologie de compression d'image du codec vidéo AV1, nettement plus avancée que celle du JPG. Concrètement, les fichiers AVIF peuvent être bien plus petits qu'un JPG pour un rendu tout aussi bon, ce qui est précieux pour tout site qui cherche à alléger ses pages et à améliorer ses temps de chargement.",
      },
      {
        heading: "Comment convertir un JPG en AVIF",
        body: "Vous envoyez votre fichier JPG, et ConvertBrio produit une version AVIF à la même résolution. Aucun logiciel à installer, et le résultat se télécharge automatiquement dès la fin du traitement.",
      },
      {
        heading: "Prise en charge par les navigateurs et les logiciels",
        body: "Tous les grands navigateurs modernes savent afficher l'AVIF, mais certains logiciels plus anciens, éditeurs d'images et réseaux sociaux ne l'acceptent pas encore à l'envoi. Si vous publiez sur votre propre site, l'AVIF est généralement sans risque ; si vous envoyez le fichier vers un service dont vous ignorez la compatibilité, gardez une version JPG ou WEBP de secours.",
      },
    ],
    relatedTools: [
      { label: "PNG en AVIF", href: "/fr/tools/png-to-avif" },
      { label: "AVIF en JPG", href: "/fr/tools/avif-to-jpg" },
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images JPG en AVIF.",
    faq: [
      {
        question: "L'AVIF est-il meilleur que le WEBP ?",
        answer:
          "L'AVIF compresse en général plus efficacement que le WEBP, avec souvent des fichiers plus petits à qualité égale. Le WEBP bénéficie d'une compatibilité un peu plus large avec les anciens outils, mais pour les navigateurs modernes, l'AVIF est généralement le meilleur choix en poids de fichier.",
      },
      {
        question: "Tous les sites peuvent-ils utiliser des images AVIF ?",
        answer:
          "Tous les grands navigateurs modernes savent afficher l'AVIF, mais certains systèmes de gestion de contenu, régies publicitaires et anciens outils n'acceptent pas encore l'envoi de fichiers AVIF. Vérifiez les exigences de votre plateforme si vous rencontrez des problèmes d'envoi.",
      },
      {
        question: "De combien mon fichier sera-t-il plus petit ?",
        answer:
          "Cela varie selon l'image, mais l'AVIF réduit couramment le poids de 50 % ou plus par rapport à un JPG de même qualité, ce qui en fait l'un des formats les plus efficaces pour alléger les pages.",
      },
    ],
  },

  "png-to-jpg": {
    title: "Convertisseur PNG en JPG : allégez vos images pour le web et l'e-mail",
    intro:
      "Les fichiers PNG conservent chaque pixel, ce qui convient aux graphiques mais est souvent excessif pour des photos : on obtient des fichiers bien plus lourds que nécessaire. Le convertisseur PNG en JPG de ConvertBrio compresse votre image en un JPG plus léger et plus facile à partager, idéal pour les pièces jointes, les pages web et partout où la taille d'envoi est limitée.",
    sections: [
      {
        heading: "Quand convertir un PNG en JPG",
        body: "Si votre PNG est une photo (et non un graphique avec transparence ou du texte aux bords nets), le convertir en JPG réduit presque toujours nettement le fichier, sans perte de qualité visible. C'est particulièrement utile pour les pièces jointes limitées en taille, les pages web où la vitesse de chargement compte, ou tout formulaire qui refuse les fichiers volumineux.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez le PNG, et ConvertBrio le réencode en JPG à la qualité par défaut, qui équilibre petite taille de fichier et fidélité visuelle. Comme le JPG ne gère pas la transparence, les zones transparentes du PNG d'origine seront remplies par un fond uni dans le fichier obtenu.",
      },
      {
        heading: "Ce que vous perdez (et ce que vous gardez)",
        body: "La conversion en JPG supprime la transparence et applique une compression avec perte : ce n'est donc pas le bon choix pour des logos ou des graphiques qui nécessitent un fond transparent. Pour des photos ordinaires, la compression passe presque inaperçue et la réduction de taille est généralement importante, souvent de 50 à 80 % par rapport au PNG d'origine.",
      },
    ],
    relatedTools: [
      { label: "JPG en PNG", href: "/fr/tools/jpg-to-png" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
      { label: "Redimensionner une Image", href: "/fr/tools/resize-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images PNG en JPG.",
    faq: [
      {
        question: "Pourquoi mon fichier PNG est-il si volumineux ?",
        answer:
          "Le PNG utilise une compression sans perte : il stocke chaque pixel exactement au lieu d'écarter des détails comme le fait le JPG. Cela le rend idéal pour les graphiques, mais souvent bien plus lourd que nécessaire pour des photos ordinaires.",
      },
      {
        question: "Que deviennent les zones transparentes lors de la conversion en JPG ?",
        answer:
          "Le JPG ne gère pas la transparence : les parties transparentes de votre PNG seront donc remplies par une couleur unie (généralement du blanc) dans le fichier converti.",
      },
      {
        question: "De combien le JPG sera-t-il plus léger ?",
        answer:
          "Cela dépend de l'image, mais les photos diminuent généralement de 50 à 80 % lorsqu'on les convertit de PNG en JPG à la qualité par défaut, car la compression du JPG est spécialement adaptée au contenu photographique.",
      },
    ],
  },

  "png-to-webp": {
    title: "Convertisseur PNG en WEBP : une compression efficace pour le web, transparence conservée",
    intro:
      "Le WEBP prend en charge la compression avec et sans perte : il peut donc remplacer le PNG pour des graphiques qui exigent de la transparence, tout en réduisant nettement le poids. Le convertisseur PNG en WEBP de ConvertBrio réencode votre image en quelques secondes et conserve la transparence là où le PNG d'origine en avait.",
    sections: [
      {
        heading: "Pourquoi le WEBP bat le PNG en poids de fichier",
        body: "Même en mode sans perte, le WEBP compresse généralement plus efficacement que le PNG et produit des fichiers plus petits à partir de la même image source. Pour des graphiques, des icônes et des captures d'écran destinés à un site web, cela se traduit directement par des pages plus rapides, sans renoncer à la transparence ni à la précision des détails.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre PNG, et ConvertBrio le convertit automatiquement en WEBP. Les zones transparentes du fichier d'origine sont conservées dans le WEBP : les logos et icônes dotés d'un canal alpha se convertissent proprement, sans aucune retouche manuelle.",
      },
      {
        heading: "Où utiliser le résultat",
        body: "Le WEBP est pris en charge nativement par tous les grands navigateurs modernes, ce qui en fait un choix sûr pour les images de sites web, les favicons et les éléments d'interface. Si vous avez besoin du fichier pour l'impression, pour d'anciens logiciels ou pour une plateforme dont la prise en charge du WEBP est incertaine, gardez le PNG d'origine en sauvegarde.",
      },
    ],
    relatedTools: [
      { label: "JPG en WEBP", href: "/fr/tools/jpg-to-webp" },
      { label: "WEBP en PNG", href: "/fr/tools/webp-to-png" },
      { label: "PNG en AVIF", href: "/fr/tools/png-to-avif" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images PNG en WEBP.",
    faq: [
      {
        question: "La conversion de PNG en WEBP conserve-t-elle la transparence ?",
        answer:
          "Oui. Le WEBP prend en charge un canal alpha comme le PNG : tout fond transparent de votre fichier d'origine est donc reporté dans l'image WEBP convertie.",
      },
      {
        question: "Le WEBP est-il toujours plus léger que le PNG ?",
        answer:
          "En général, oui : même en mode sans perte, la compression du WEBP est le plus souvent plus efficace que celle du PNG, si bien que la plupart des images diminuent nettement après conversion.",
      },
      {
        question: "Puis-je reconvertir le WEBP en PNG plus tard ?",
        answer:
          "Oui, utilisez le convertisseur WEBP en PNG de ConvertBrio chaque fois que vous avez besoin du fichier au format PNG pour un logiciel qui ne gère pas le WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "Convertisseur PNG en AVIF : la compression maximale pour vos graphiques",
    intro:
      "L'AVIF compresse les graphiques et les photos bien plus fortement que le PNG tout en gérant la transparence : c'est l'un des formats les plus économes en espace pour les images web aujourd'hui. Le convertisseur PNG en AVIF de ConvertBrio réalise la conversion instantanément, sans logiciel d'encodage.",
    sections: [
      {
        heading: "Pourquoi choisir l'AVIF plutôt que le PNG",
        body: "La compression sans perte du PNG laisse les fichiers plus lourds que nécessaire dans bien des cas. L'AVIF, bâti sur une technologie de compression issue des codecs vidéo modernes, peut réduire spectaculairement la même image, parfois de 80 % ou plus, tout en conservant la transparence et la qualité visuelle : un gain majeur pour les performances d'un site.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre fichier PNG, et ConvertBrio produit une version AVIF en préservant la transparence et la résolution. La conversion s'effectue en quelques secondes pour des tailles d'image courantes.",
      },
      {
        heading: "Notes de compatibilité",
        body: "L'AVIF s'affiche correctement dans toutes les versions actuelles de Chrome, Firefox, Safari et Edge. Certains anciens outils, clients de messagerie et logiciels de création peuvent ne pas encore le gérer : il convient donc surtout à un usage direct sur un site web, plutôt qu'à des fichiers que vous transmettez à des systèmes tiers de compatibilité inconnue.",
      },
    ],
    relatedTools: [
      { label: "PNG en WEBP", href: "/fr/tools/png-to-webp" },
      { label: "AVIF en PNG", href: "/fr/tools/avif-to-png" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images PNG en AVIF.",
    faq: [
      {
        question: "L'AVIF gère-t-il les fonds transparents ?",
        answer:
          "Oui, l'AVIF prend en charge un canal alpha : la transparence de votre PNG d'origine est donc correctement reportée dans le fichier AVIF converti.",
      },
      {
        question: "De combien mon fichier AVIF sera-t-il plus léger ?",
        answer:
          "Les résultats varient selon le contenu de l'image, mais l'AVIF réduit fréquemment les fichiers PNG de 70 à 80 % ou plus, ce qui en fait l'un des formats les plus efficaces actuellement disponibles pour le web.",
      },
      {
        question: "Dois-je utiliser l'AVIF ou le WEBP pour mon site ?",
        answer:
          "L'AVIF compresse généralement mieux : autant l'employer là où votre plateforme le permet. Le WEBP reste une alternative solide, un peu plus largement compatible, si vous rencontrez des restrictions d'envoi avec l'AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "Convertisseur WEBP en JPG : ouvrez vos images WEBP partout",
    intro:
      "Les images WEBP téléchargées depuis des sites web ne s'ouvrent pas toujours correctement dans d'anciennes visionneuses photo, certains outils de création ou des applications qui attendent un format standard. Le convertisseur WEBP en JPG de ConvertBrio transforme n'importe quel fichier WEBP en JPG qui s'ouvre partout : plus besoin de se demander si ce sera compatible.",
    sections: [
      {
        heading: "Pourquoi certains fichiers WEBP ne s'ouvrent pas",
        body: "Le WEBP est un format relativement récent : les navigateurs le gèrent tous, mais certaines visionneuses photo de bureau, d'anciennes versions d'éditeurs d'images et quelques applications ne le reconnaissent toujours pas. Si vous avez enregistré une image depuis un site web et qu'elle ne s'ouvre pas là où vous le voulez, la convertir en JPG est le dépannage le plus rapide.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre fichier WEBP, et ConvertBrio le décode puis le réencode en JPG. Le résultat s'ouvre dans tous les navigateurs, visionneuses photo et outils de retouche : c'est le format le plus sûr pour un partage large ou une pièce jointe.",
      },
      {
        heading: "À quoi s'attendre",
        body: "Si le WEBP d'origine avait un fond transparent, cette transparence sera remplie par une couleur unie dans le JPG obtenu, car le JPG ne gère pas les canaux alpha. Pour les photos ordinaires et les images web sans transparence, la conversion est visuellement imperceptible.",
      },
    ],
    relatedTools: [
      { label: "WEBP en PNG", href: "/fr/tools/webp-to-png" },
      { label: "JPG en WEBP", href: "/fr/tools/jpg-to-webp" },
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images WEBP en JPG.",
    faq: [
      {
        question: "Pourquoi ne puis-je pas ouvrir un fichier WEBP sur mon ordinateur ?",
        answer:
          "Certaines anciennes visionneuses photo, certains éditeurs d'images et certaines versions de systèmes d'exploitation ne gèrent pas nativement le WEBP, alors que tous les navigateurs modernes le font. La conversion en JPG règle aussitôt le problème.",
      },
      {
        question: "Vais-je perdre la transparence en convertissant un WEBP en JPG ?",
        answer:
          "Oui, le JPG ne gère pas la transparence : les zones transparentes du WEBP d'origine apparaîtront donc en couleur unie dans le fichier converti. Utilisez plutôt WEBP en PNG si vous devez conserver la transparence.",
      },
      {
        question: "Le JPG converti peut-il être partagé ou envoyé sans risque ?",
        answer:
          "Oui, le JPG est le format d'image le plus universellement compatible : le fichier converti s'ouvrira correctement dans pratiquement toute application, tout appareil ou formulaire d'envoi.",
      },
    ],
  },

  "webp-to-png": {
    title: "Convertisseur WEBP en PNG : conservez la transparence et la qualité",
    intro:
      "Quand une image WEBP a un fond transparent, comme un logo, une icône ou un graphique exporté, la convertir en JPG n'est pas envisageable. Le convertisseur WEBP en PNG de ConvertBrio préserve cette transparence et produit un fichier sans perte, qui fonctionne dans les outils de création, les anciens logiciels et partout où le PNG est le format attendu.",
    sections: [
      {
        heading: "Quand choisir le PNG plutôt que le JPG",
        body: "Si votre fichier WEBP contient des pixels transparents ou semi-transparents, la conversion en PNG s'impose : c'est le seul des deux formats courants qui conserve un canal alpha intact. Le PNG est aussi le choix le plus sûr si vous prévoyez de retoucher l'image, car il n'introduit pas d'artefacts de compression.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez le fichier WEBP, et ConvertBrio le convertit en PNG sans perte, en gardant transparence et résolution exactement telles quelles. Cela fonctionne que le WEBP ait été au départ avec ou sans perte : le PNG obtenu conserve toujours tout le détail de l'image décodée.",
      },
      {
        heading: "À propos de la taille du fichier",
        body: "Les fichiers PNG sont généralement plus lourds que les WEBP, car la compression du WEBP est plus efficace. Pour les graphiques et les icônes, l'écart est le plus souvent faible ; pour de grandes photos, le PNG peut être nettement plus gros, un compromis raisonnable quand la transparence ou la qualité sans perte est la priorité.",
      },
    ],
    relatedTools: [
      { label: "WEBP en JPG", href: "/fr/tools/webp-to-jpg" },
      { label: "PNG en WEBP", href: "/fr/tools/png-to-webp" },
      { label: "Recadrer une Image", href: "/fr/tools/crop-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images WEBP en PNG.",
    faq: [
      {
        question: "La conversion de WEBP en PNG conserve-t-elle le fond transparent ?",
        answer:
          "Oui. Si votre fichier WEBP a de la transparence, ConvertBrio la préserve à l'identique dans le PNG converti, puisque les deux formats gèrent les canaux alpha.",
      },
      {
        question: "Dois-je choisir le PNG ou le JPG pour mon fichier WEBP ?",
        answer:
          "Choisissez le PNG si l'image comporte de la transparence ou si vous comptez la retoucher. Choisissez le JPG s'il s'agit d'une simple photo et que vous voulez le fichier le plus léger possible pour le partage.",
      },
      {
        question: "La qualité de l'image va-t-elle changer ?",
        answer:
          "Non, le PNG est un format sans perte : la conversion de WEBP en PNG n'écarte aucun détail supplémentaire par rapport à ce que le fichier WEBP d'origine contenait déjà.",
      },
    ],
  },

  "webp-to-avif": {
    title: "Convertisseur WEBP en AVIF : gagnez encore en compression",
    intro:
      "L'AVIF surpasse fréquemment le WEBP en efficacité de compression : réencoder une image WEBP existante en AVIF peut donc l'alléger davantage, sans perte de qualité visible. Le convertisseur WEBP en AVIF de ConvertBrio fait ce changement en une seule étape.",
    sections: [
      {
        heading: "Pourquoi réencoder du WEBP en AVIF",
        body: "Si vous utilisez déjà le WEBP pour les performances web, l'AVIF mérite d'être testé comme étape suivante : il compresse en général mieux la même image source, en particulier pour les photos et les graphiques complexes. La différence se remarque surtout sur les images grandes et riches en détails.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre fichier WEBP, et ConvertBrio le décode puis le réencode en AVIF, en conservant la transparence s'il y en a. Le résultat se télécharge automatiquement et peut être utilisé partout où votre plateforme accepte les images AVIF.",
      },
      {
        heading: "À vérifier avant de passer à l'AVIF",
        body: "L'AVIF est pris en charge par tous les grands navigateurs actuels, mais assurez-vous que votre système de gestion de contenu et les outils tiers de votre chaîne de travail acceptent l'envoi de fichiers AVIF avant de remplacer le WEBP sur tout un site. Pour les projets personnels et les sites modernes, la transition se fait généralement sans heurt.",
      },
      {
        heading: "Limites et confidentialité",
        body: "Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
      },
    ],
    relatedTools: [
      { label: "JPG en AVIF", href: "/fr/tools/jpg-to-avif" },
      { label: "AVIF en WEBP", href: "/fr/tools/avif-to-webp" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images WEBP en AVIF.",
    faq: [
      {
        question: "Cela vaut-il la peine de convertir du WEBP en AVIF ?",
        answer:
          "Si votre objectif est le fichier le plus léger possible et que votre plateforme gère l'AVIF, oui : l'AVIF compresse souvent mieux que le WEBP sur la même image, surtout pour les photos.",
      },
      {
        question: "La conversion conserve-t-elle la transparence ?",
        answer:
          "Oui, l'AVIF gère la transparence comme le WEBP : tout canal alpha de votre fichier d'origine est préservé dans l'image convertie.",
      },
      {
        question: "Puis-je reconvertir en WEBP si besoin ?",
        answer:
          "Oui, utilisez le convertisseur d'images de ConvertBrio pour repasser de l'AVIF au WEBP, ou à tout autre format pris en charge, quand vous le souhaitez.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "Convertisseur AVIF en JPG : faites s'ouvrir vos images AVIF partout",
    intro:
      "La compression efficace de l'AVIF est idéale pour les sites modernes, mais bien des applications, appareils anciens et outils photo ne savent toujours pas l'ouvrir. Le convertisseur AVIF en JPG de ConvertBrio décode l'image et la réenregistre en JPG, un format qui fonctionne dans pratiquement tous les logiciels que vous croiserez.",
    sections: [
      {
        heading: "Pourquoi convertir un AVIF en JPG",
        body: "Si un fichier AVIF ne s'ouvre pas dans votre visionneuse photo, votre logiciel de retouche ou le formulaire d'envoi d'un site, le JPG est la solution de repli la plus sûre : il est pris en charge à peu près partout, des logiciels vieux de plusieurs décennies aux appareils les plus récents. C'est la raison la plus courante de s'éloigner de l'AVIF.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez le fichier AVIF, et ConvertBrio le décode puis réencode l'image en JPG à pleine résolution. Le téléchargement est prêt en quelques secondes et s'ouvre aussitôt dans n'importe quel navigateur, visionneuse ou application de retouche.",
      },
      {
        heading: "Ce qui change lors de la conversion",
        body: "Le JPG ne gère pas la transparence : si le fichier AVIF avait un fond transparent, il sera rempli par une couleur unie dans le résultat. Pour les photos classiques sans transparence, le rendu visuel est pratiquement identique à la source.",
      },
    ],
    relatedTools: [
      { label: "AVIF en PNG", href: "/fr/tools/avif-to-png" },
      { label: "AVIF en WEBP", href: "/fr/tools/avif-to-webp" },
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images AVIF en JPG.",
    faq: [
      {
        question: "Pourquoi mon fichier AVIF ne s'ouvre-t-il pas ?",
        answer:
          "L'AVIF est un format récent : les navigateurs modernes le gèrent, mais de nombreuses applications plus anciennes, visionneuses photo et certains outils de retouche ne le font pas encore. La conversion en JPG rend le fichier ouvrable partout immédiatement.",
      },
      {
        question: "La conversion en JPG fait-elle perdre en qualité d'image ?",
        answer:
          "Il y a une légère recompression, puisque l'AVIF et le JPG utilisent des algorithmes différents, mais avec la qualité par défaut de ConvertBrio, elle n'est pas visible à l'usage courant.",
      },
      {
        question: "Puis-je convertir l'AVIF en PNG à la place ?",
        answer:
          "Oui, utilisez le convertisseur AVIF en PNG si vous voulez un fichier sans perte ou si vous devez conserver la transparence, que le JPG ne peut pas contenir.",
      },
    ],
  },

  "avif-to-png": {
    title: "Convertisseur AVIF en PNG : une sortie sans perte, transparence préservée",
    intro:
      "Quand une image AVIF a un fond transparent ou que vous avez besoin d'une exactitude au pixel près pour la retoucher, le PNG est le format cible qu'il vous faut. Le convertisseur AVIF en PNG de ConvertBrio décode votre fichier et produit un PNG sans perte en quelques secondes, en gardant toute transparence intacte.",
    sections: [
      {
        heading: "Quand le PNG est le meilleur choix",
        body: "Choisissez le PNG plutôt que le JPG dès que l'AVIF source comporte de la transparence, du texte net ou des détails fins que vous ne voulez pas voir adoucis par une compression avec perte. C'est aussi le format intermédiaire le plus sûr si vous prévoyez d'ouvrir l'image dans un outil de création pour la retoucher.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre fichier AVIF, et ConvertBrio le décode puis le réencode en PNG sans perte, en préservant la résolution, les couleurs et la transparence exactement comme dans le fichier d'origine.",
      },
      {
        heading: "Taille de fichier à prévoir",
        body: "Comme le PNG ne compresse pas aussi fortement que l'AVIF, le fichier converti sera en général nettement plus lourd que la source, souvent plusieurs fois plus. Ce compromis est normal et s'accompagne d'un résultat sans perte, très largement compatible.",
      },
      {
        heading: "Limites et confidentialité",
        body: "Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
      },
    ],
    relatedTools: [
      { label: "AVIF en JPG", href: "/fr/tools/avif-to-jpg" },
      { label: "PNG en AVIF", href: "/fr/tools/png-to-avif" },
      { label: "Redimensionner une Image", href: "/fr/tools/resize-image" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images AVIF en PNG.",
    faq: [
      {
        question: "La conversion d'AVIF en PNG préserve-t-elle la transparence ?",
        answer:
          "Oui. Si votre fichier AVIF possède un canal alpha, ConvertBrio reporte cette transparence à l'identique dans le PNG converti.",
      },
      {
        question: "Pourquoi mon fichier PNG est-il beaucoup plus gros que l'AVIF ?",
        answer:
          "Le PNG est un format sans perte et ne compresse pas aussi efficacement que l'AVIF : une hausse de taille après conversion est donc normale et attendue.",
      },
      {
        question: "Le PNG est-il un bon format pour retoucher des images ?",
        answer:
          "Oui : comme le PNG n'applique aucune compression avec perte, c'est un format intermédiaire plus sûr que le JPG ou l'AVIF quand vous comptez ouvrir un fichier dans un éditeur et le réenregistrer plusieurs fois.",
      },
    ],
  },

  "avif-to-webp": {
    title: "Convertisseur AVIF en WEBP : élargissez la compatibilité sans perdre en efficacité",
    intro:
      "Le WEBP est un peu plus largement pris en charge que l'AVIF par les anciens outils et plateformes, tout en offrant une forte compression : c'est un compromis pratique quand l'AVIF n'est pas pleinement géré. Le convertisseur AVIF en WEBP de ConvertBrio fait le changement instantanément.",
    sections: [
      {
        heading: "Pourquoi convertir un AVIF en WEBP",
        body: "Si une plateforme, une extension ou un logiciel refuse les fichiers AVIF mais accepte le WEBP, la conversion est la solution la plus rapide : vous gardez l'essentiel du gain d'efficacité de l'AVIF tout en gagnant en compatibilité. C'est fréquent avec d'anciens systèmes de gestion de contenu ou des intégrations tierces.",
      },
      {
        heading: "Comment fonctionne la conversion",
        body: "Vous envoyez votre fichier AVIF, et ConvertBrio le décode puis le réencode en WEBP, en préservant la transparence et la résolution. Le traitement prend quelques secondes et le fichier se télécharge automatiquement.",
      },
      {
        heading: "Compromis de compression",
        body: "Les fichiers WEBP sont généralement un peu plus lourds que l'AVIF équivalent à qualité visuelle égale, la compression de l'AVIF étant en règle générale plus avancée. L'écart est le plus souvent assez faible pour que le gain de compatibilité en vaille la peine dans la plupart des cas.",
      },
      {
        heading: "Limites et confidentialité",
        body: "Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
      },
    ],
    relatedTools: [
      { label: "WEBP en AVIF", href: "/fr/tools/webp-to-avif" },
      { label: "AVIF en JPG", href: "/fr/tools/avif-to-jpg" },
      { label: "Convertisseur d'Images", href: "/fr/tools/image-converter" },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images AVIF en WEBP.",
    faq: [
      {
        question: "Pourquoi convertir l'AVIF en WEBP plutôt que de garder l'AVIF ?",
        answer:
          "Certaines plateformes et certains anciens outils acceptent le WEBP mais pas l'AVIF. La conversion vous donne une compatibilité plus large tout en conservant l'essentiel du gain de poids que l'AVIF apportait au départ.",
      },
      {
        question: "Le fichier sera-t-il plus lourd après la conversion ?",
        answer:
          "Légèrement, dans la plupart des cas : la compression du WEBP est un peu moins efficace que celle de l'AVIF, attendez-vous donc à une hausse modeste plutôt que spectaculaire.",
      },
      {
        question: "La transparence est-elle conservée de l'AVIF au WEBP ?",
        answer:
          "Oui, les deux formats gèrent les canaux alpha : toute transparence de votre fichier AVIF d'origine est préservée dans le WEBP converti.",
      },
    ],
  },

  "resize-image": {
    title: "Comment réduire la taille en pixels d'une photo ?",
    intro: [
      "Saisissez la largeur et la hauteur maximales souhaitées, en pixels, et ConvertBrio réduit la photo pour qu'elle tienne dans ces dimensions. La taille en pixels est le nombre de pixels en largeur et en hauteur d'une image (par exemple 4000 × 3000). La diminuer rend l'image plus petite à l'écran et réduit aussi le poids du fichier, sans logiciel de retouche.",
      "L'outil conserve les proportions de la photo : il ne peut donc ni l'étirer ni l'écraser, et il ne fait que réduire les images : il n'agrandira pas une photo au-delà de sa taille d'origine. Si vous avez besoin d'une largeur et d'une hauteur exactes qui diffèrent de la forme de la photo, ou d'une taille maximale en Ko, utilisez Redimensionner Photo et Signature. Pour agrandir une petite photo, utilisez l'Agrandisseur par IA.",
    ],
    howTo: [
      {
        step: "Envoyez votre image",
        detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF, jusqu'à 100 Mo.",
      },
      {
        step: "Saisissez une largeur, une hauteur, ou les deux",
        detail:
          "Tapez la taille en pixels voulue. Vous pouvez n'en remplir qu'une : laissez l'autre vide et elle sera calculée d'après les proportions de la photo. Si vous remplissez les deux, la photo est réduite pour tenir dans ce cadre.",
      },
      {
        step: "Redimensionnez et téléchargez",
        detail: "ConvertBrio réduit l'image et le fichier se télécharge automatiquement.",
      },
      {
        step: "Vérifiez le résultat",
        detail:
          "Ouvrez le fichier téléchargé et regardez ses dimensions (clic droit > Propriétés sous Windows, Lire les informations sur Mac). Zoomez à 100 % pour vérifier qu'il reste net.",
      },
    ],
    sections: [
      {
        heading: "Dimensions courantes pour lesquelles on redimensionne",
        body: "Si vous ne savez pas quelle taille il vous faut, voici les spécifications pour lesquelles les gens viennent le plus souvent ici.",
        table: {
          headers: ["Usage", "Taille typique (px)"],
          rows: [
            ["Publication Instagram (carrée)", "1080 × 1080"],
            ["Story / reel Instagram", "1080 × 1920"],
            ["Image partagée sur Facebook / LinkedIn", "1200 × 630"],
            ["Miniature YouTube", "1280 × 720"],
            ["Photo de profil LinkedIn", "400 × 400 (min)"],
            ["Photo d'identité (2 × 2 po à 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Exemple : de 4000 × 3000 à 1200 × 900",
        body: "Une photo de téléphone typique fait 4000 × 3000 pixels (une forme en 4:3). Pour l'amener à 1200 pixels de large, saisissez 1200 dans la case largeur et laissez la hauteur vide : la hauteur est calculée à 900, ce qui donne 1200 × 900. Si vous saisissez plutôt 1200 × 1200, la photo est réduite pour tenir dans ce carré, ce qui donne de nouveau 1200 × 900, et non un carré déformé. Le nouveau fichier compte 9 fois moins de pixels : il est donc bien plus léger à stocker et à envoyer.",
      },
      {
        heading: "Comment redimensionner une image sans la déformer ?",
        body: [
          "La déformation survient quand un outil force une photo dans un cadre de forme différente, et qu'un visage ou un cercle devient ovale. Cet outil l'évite en conservant le rapport d'aspect d'origine (la proportion largeur-hauteur) : le résultat tient dans la largeur et la hauteur que vous saisissez, et la dimension restante est calculée pour vous.",
          "Cela signifie que le résultat peut être plus petit que le cadre saisi dans une direction. Si un formulaire exige une forme précise comme 600 × 600, recadrez d'abord la photo en carré avec l'outil Recadrer une Image, puis redimensionnez-la. Le recadrage supprime les bords ; le redimensionnement seul ne le fait jamais. Pour obtenir une largeur et une hauteur exactes en une seule étape, avec recadrage ou marges blanches, utilisez Redimensionner Photo et Signature.",
        ],
        table: {
          headers: ["En partant de 4000 × 3000", "Ce que vous obtenez", "Rendu correct ?"],
          rows: [
            ["Largeur 1200, hauteur vide", "1200 × 900", "Oui : proportions conservées"],
            ["Largeur 1200, hauteur 1200", "1200 × 900", "Oui : tient dans le cadre, sans déformation"],
            ["Recadrer en carré, puis redimensionner à 1200 × 1200", "1200 × 1200", "Oui : bords recadrés, rien de déformé"],
            ["Forcer 1200 × 1200 sans recadrer (autres outils)", "1200 × 1200", "Non : l'image est écrasée"],
          ],
        },
      },
      {
        heading: "Réduire les pixels, est-ce réduire le poids du fichier ?",
        body: [
          "Les deux sont liés, sans être identiques. La taille en pixels est le nombre de pixels de l'image. Le poids du fichier est le nombre d'octets qu'il occupe, et il dépend du nombre de pixels et de la force de la compression. Moins de pixels donne généralement un fichier plus léger, mais diviser les deux dimensions par deux ne divise pas exactement le fichier par quatre, car la compression et le contenu de l'image comptent aussi.",
          "Choisissez selon l'objectif : pour s'adapter à un emplacement dans une page ou aux dimensions exigées par une plateforme, redimensionnez. Pour passer sous une limite d'envoi en Ko ou en Mo, compressez, ou redimensionnez d'abord puis passez par Compresser une Image pour le dernier effort. Redimensionner d'abord évite au compresseur de trop forcer, et la qualité se maintient mieux. Pour atteindre à la fois une taille en pixels exacte et une limite en Ko, utilisez Redimensionner Photo et Signature.",
        ],
      },
      {
        heading: "Dépannage",
        list: [
          "La photo n'a pas grossi : cet outil ne fait que réduire. Utilisez l'Agrandisseur par IA pour agrandir.",
          "Le résultat n'a pas exactement la taille saisie : la photo a été réduite pour tenir dans votre cadre sans changer de forme. Recadrez d'abord, ou utilisez Redimensionner Photo et Signature pour des dimensions exactes.",
          "Le fichier est encore trop lourd en Ko : compressez-le après le redimensionnement, ou fixez une cible dans Redimensionner Photo et Signature.",
          "Une photo HEIC est ressortie en JPG : l'outil ne peut pas enregistrer en HEIC, elle est donc renvoyée en JPG. Une photo prise avec un appareil ou un téléphone garde son orientation à l'endroit.",
          "La photo paraît floue : réduire fortement une photo puis l'afficher en grand la fera paraître molle. Redimensionnez à la taille à laquelle vous l'afficherez réellement.",
        ],
        body: "Si le résultat n'est pas celui que vous attendiez, vérifiez d'abord ces points.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont chiffrés pendant leur transfert et traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase). Une image par envoi, jusqu'à 100 Mo, gratuit, sans compte.",
      },
    ],
    relatedTools: [
      { label: "Recadrer une Image", href: "/fr/tools/crop-image" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
      { label: "Agrandisseur par IA", href: "/fr/tools/ai-upscaler" },
      { label: "Pivoter une Image", href: "/fr/tools/rotate-image" },
    ],
    faqDescription: "Questions fréquentes sur le redimensionnement d'images à des dimensions précises.",
    faq: [
      {
        question: "Comment redimensionner une image à des dimensions précises en pixels ?",
        answer:
          "Envoyez votre image à l'outil de redimensionnement de ConvertBrio, saisissez la largeur et la hauteur voulues en pixels, puis téléchargez le fichier redimensionné. Cela fonctionne pour tous les formats d'image que l'outil accepte.",
      },
      {
        question: "Le redimensionnement va-t-il déformer mon image ?",
        answer:
          "Seulement si la nouvelle largeur et la nouvelle hauteur ne respectent pas le rapport d'aspect d'origine. Pour éviter l'étirement, gardez la même proportion largeur-hauteur que l'image source, ou recadrez d'abord l'image à la forme voulue.",
      },
      {
        question: "Le redimensionnement réduit-il aussi le poids du fichier ?",
        answer:
          "Oui : moins de pixels, c'est moins de données à stocker, et la réduction allège donc généralement beaucoup le fichier. Pour le résultat le plus léger possible, faites suivre le redimensionnement de l'outil Compresser une Image.",
      },
      {
        question: "Puis-je agrandir une petite image sans qu'elle devienne floue ?",
        answer:
          "Pas avec un simple redimensionnement : l'agrandissement étale les pixels existants et adoucit l'image. Utilisez plutôt l'Agrandisseur par IA, qui reconstruit les détails avec un modèle entraîné et donne un agrandissement bien plus net.",
      },
      {
        question: "Le format du fichier change-t-il quand je redimensionne ?",
        answer:
          "L'outil renvoie l'image dans un format web standard. Si vous avez besoin d'un format de sortie précis, passez ensuite le fichier redimensionné dans le Convertisseur d'Images.",
      },
    ],
  },

  "crop-image": {
    title: "Recadrer une image : ne gardez que la zone dont vous avez besoin",
    intro:
      "Parfois, il ne s'agit pas de réduire toute l'image : il faut supprimer tout ce qui se trouve en dehors d'une zone précise, que ce soit pour détacher un sujet, retirer un arrière-plan gênant ou respecter le rapport d'aspect exigé par une plateforme. L'outil de recadrage de ConvertBrio vous permet d'indiquer une zone exacte par coordonnées en pixels et de récupérer uniquement cette portion.",
    sections: [
      {
        heading: "Comment recadrer une image",
        body: "Envoyez votre image et saisissez les coordonnées gauche et haut du point de départ du recadrage, ainsi que la largeur et la hauteur de la zone à conserver. ConvertBrio découpe l'image selon ce rectangle exact et écarte tout ce qui se trouve en dehors.",
      },
      {
        heading: "Trouver les bonnes coordonnées",
        body: "Les coordonnées se mesurent en pixels à partir du coin supérieur gauche de l'image : un éditeur d'images ou un outil d'aperçu qui affiche la position des pixels peut vous aider à repérer la zone exacte avant l'envoi. Si vous voulez simplement réduire toute l'image plutôt que d'en découper une partie, utilisez plutôt Redimensionner une Image.",
      },
      {
        heading: "Usages courants du recadrage",
        body: "Le recadrage sert à retirer l'arrière-plan indésirable d'une photo, à isoler un sujet, à obtenir le rapport d'aspect exigé pour une photo de profil ou une bannière, ou à réduire un document numérisé à sa seule zone utile. C'est une alternative précise au redimensionnement quand le but est de retrancher plutôt que de réduire.",
      },
    ],
    relatedTools: [
      { label: "Redimensionner une Image", href: "/fr/tools/resize-image" },
      { label: "Pivoter une Image", href: "/fr/tools/rotate-image" },
      { label: "Compresser une Image", href: "/fr/tools/compress-image" },
    ],
    faqDescription: "Questions fréquentes sur le recadrage d'images à une zone précise.",
    faq: [
      {
        question: "Comment recadrer une image sur une zone précise ?",
        answer:
          "Envoyez votre image à l'outil de recadrage de ConvertBrio et saisissez les coordonnées de départ à gauche et en haut, plus la largeur et la hauteur de la zone à conserver, mesurées en pixels depuis le coin supérieur gauche.",
      },
      {
        question: "Quelle est la différence entre recadrer et redimensionner ?",
        answer:
          "Le redimensionnement réduit ou agrandit toute l'image à de nouvelles dimensions, tandis que le recadrage découpe et ne garde qu'une zone rectangulaire précise, en écartant le reste. Utilisez le recadrage quand vous voulez retirer une partie de l'image plutôt que de réduire l'ensemble.",
      },
      {
        question: "Comment connaître les coordonnées en pixels à saisir ?",
        answer:
          "Ouvrez l'image dans un outil d'aperçu ou un éditeur qui affiche la position des pixels au survol : cela vous aidera à repérer les coordonnées de la zone à conserver avant de les saisir dans ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Pivoter une image : redressez les photos couchées ou à l'envers",
    intro:
      "Les photos prises avec un téléphone ou numérisées avec un scanner se retrouvent parfois tournées dans le mauvais sens. L'outil de rotation de ConvertBrio fait pivoter une image de 90, 180 ou 270 degrés en un clic, et corrige les problèmes d'orientation sans ouvrir un éditeur photo complet.",
    sections: [
      {
        heading: "Comment pivoter une image",
        body: "Envoyez l'image, choisissez 90, 180 ou 270 degrés dans la liste déroulante, et ConvertBrio applique la rotation et renvoie le fichier corrigé. Une rotation de 90 degrés redresse une image couchée, tandis que 180 degrés remet à l'endroit une image à l'envers.",
      },
      {
        heading: "Pourquoi des photos se retrouvent mal orientées",
        body: "Cela arrive en général quand un appareil photo ou un scanner n'intègre pas les bonnes métadonnées d'orientation, ou quand ces métadonnées sont supprimées lors d'un envoi ou d'un transfert. Les données de l'image ne sont pas touchées : elle s'affiche simplement dans le mauvais sens tant qu'on ne la fait pas pivoter.",
      },
      {
        heading: "Pivoter des documents numérisés",
        body: "Les pages passées dans un scanner de travers ou à l'envers comptent parmi les cas les plus fréquents pour cet outil. Faire pivoter l'image avant un traitement ultérieur, comme la conversion en PDF ou l'OCR, garantit que le document final se lit correctement.",
      },
    ],
    relatedTools: [
      { label: "Recadrer une Image", href: "/fr/tools/crop-image" },
      { label: "Pivoter un PDF", href: "/fr/tools/rotate-pdf" },
      { label: "JPG en PDF", href: "/fr/tools/jpg-to-pdf" },
    ],
    faqDescription: "Questions fréquentes sur la rotation d'images en ligne.",
    faq: [
      {
        question: "Comment faire pivoter une photo couchée ?",
        answer:
          "Envoyez l'image à l'outil de rotation de ConvertBrio et choisissez 90 ou 270 degrés, selon le sens dans lequel elle doit tourner pour s'afficher correctement.",
      },
      {
        question: "Pourquoi ma photo est-elle à l'envers ou couchée au départ ?",
        answer:
          "Cela vient généralement de métadonnées d'orientation absentes ou incorrectes de l'appareil photo ou du scanner qui l'a capturée : le contenu de l'image est intact, il suffit de la faire pivoter pour qu'elle s'affiche correctement.",
      },
      {
        question: "Puis-je faire pivoter l'image d'un document numérisé avant de la convertir en PDF ?",
        answer:
          "Oui : faites d'abord pivoter l'image avec cet outil, puis utilisez JPG en PDF pour l'assembler en un document PDF correctement orienté.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Pivoter un PDF en ligne : redressez les pages couchées de n'importe quel document",
    intro:
      "Les documents passés dans un scanner dans le mauvais sens ressortent souvent couchés ou à l'envers. L'outil Pivoter un PDF de ConvertBrio fait tourner toutes les pages d'un document de 90, 180 ou 270 degrés en une seule passe, et corrige l'orientation de tout le fichier d'un coup.",
    sections: [
      {
        heading: "Comment pivoter un PDF",
        body: "Envoyez votre PDF, choisissez un angle de rotation, 90, 180 ou 270 degrés, et ConvertBrio l'applique à chaque page du document. Le résultat se télécharge sous la forme d'un PDF corrigé, au contenu identique, simplement bien orienté.",
      },
      {
        heading: "Pourquoi cela arrive avec les documents numérisés",
        body: "Les pages couchées ou à l'envers sont un effet secondaire courant de la numérisation de documents papier, surtout quand les pages sont placées dans le scanner avec une orientation différente de celle prévue. Faire pivoter le PDF terminé est plus rapide que de renumériser les pages d'origine.",
      },
      {
        heading: "Pivoter seulement certaines pages",
        body: "L'outil de rotation de ConvertBrio applique la même rotation à toutes les pages du fichier. Si seules certaines pages doivent être corrigées, divisez d'abord le PDF avec Diviser un PDF, faites pivoter individuellement les pages concernées, puis réassemblez le tout avec Fusionner des PDF.",
      },
    ],
    relatedTools: [
      { label: "Diviser un PDF", href: "/fr/tools/split-pdf" },
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "Pivoter une Image", href: "/fr/tools/rotate-image" },
    ],
    faqDescription: "Questions fréquentes sur la rotation des pages d'un PDF en ligne.",
    faq: [
      {
        question: "Comment faire pivoter toutes les pages d'un PDF ?",
        answer:
          "Envoyez votre document à l'outil Pivoter un PDF de ConvertBrio et choisissez un angle de rotation : chaque page du fichier est tournée de la même valeur dans le résultat téléchargé.",
      },
      {
        question: "Puis-je faire pivoter une seule page plutôt que tout le document ?",
        answer:
          "Pas directement avec cet outil, qui fait tourner toutes les pages de la même façon. Pour ne pivoter que certaines pages, divisez d'abord le PDF, faites pivoter les pages voulues, puis fusionnez de nouveau le fichier.",
      },
      {
        question: "Pourquoi mes pages numérisées ressortent-elles couchées ?",
        answer:
          "Cela arrive généralement quand les pages sont placées dans le scanner avec une orientation différente de celle prévue. Faire pivoter le PDF obtenu est plus rapide que de renumériser le document d'origine.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Déverrouiller un PDF : supprimez les restrictions du mot de passe propriétaire",
    intro:
      "Certains PDF sont verrouillés par un mot de passe propriétaire qui restreint l'impression, la copie ou la modification, même quand vous avez tous les droits de modifier le document. L'outil Déverrouiller un PDF de ConvertBrio supprime ces restrictions des fichiers que vous êtes autorisé à modifier, et vous en rend le plein contrôle.",
    sections: [
      {
        heading: "Comment déverrouiller un PDF",
        body: "Envoyez le PDF restreint, et ConvertBrio supprime les restrictions de niveau propriétaire qui bloquent l'impression, la copie et la modification. Le fichier déverrouillé se télécharge avec le même contenu, sans les restrictions d'autorisation.",
      },
      {
        heading: "Mot de passe propriétaire et mot de passe d'ouverture",
        body: "Cet outil supprime les restrictions du mot de passe propriétaire : celles qui limitent ce que vous pouvez faire d'un fichier que vous pouvez déjà ouvrir. Il ne cherche pas à contourner un mot de passe d'ouverture (utilisateur) qui empêche toute consultation du PDF ; pour cela, il faut le mot de passe réel, détenu par la personne qui a créé le fichier.",
      },
      {
        heading: "Quand utiliser cet outil",
        body: "Le déverrouillage est utile pour les documents que vous avez créés ou que vous avez explicitement le droit de modifier, mais qui ont été exportés avec des restrictions activées par défaut, comme des rapports issus de certains logiciels ou des formulaires dont la modification a été verrouillée sans intention. Ne déverrouillez que des fichiers que vous avez légalement le droit de modifier.",
      },
    ],
    relatedTools: [
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "PDF en Word", href: "/fr/tools/pdf-to-word" },
    ],
    faqDescription: "Questions fréquentes sur la suppression des restrictions par mot de passe d'un PDF.",
    faq: [
      {
        question: "Quelle différence y a-t-il entre déverrouiller et déchiffrer un PDF ?",
        answer:
          "Le déverrouillage supprime les restrictions de niveau propriétaire sur l'impression, la copie ou la modification d'un fichier que vous pouvez déjà ouvrir. Il ne contourne pas un mot de passe exigé simplement pour consulter le document : cela demande le mot de passe réel.",
      },
      {
        question: "Est-il légal de déverrouiller un PDF ?",
        answer:
          "Supprimer les restrictions d'un document qui vous appartient ou que vous avez explicitement la permission de modifier ne pose pas de problème. N'utilisez cet outil que sur des fichiers que vous avez légalement le droit de modifier.",
      },
      {
        question: "Le déverrouillage modifiera-t-il le contenu de mon PDF ?",
        answer:
          "Non, l'outil ne supprime que les restrictions d'autorisation. Le texte, les images et la mise en page du document restent exactement identiques.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Ajouter des numéros de page à un PDF en ligne",
    intro:
      "Rapports, manuels et contrats ont souvent besoin de pages numérotées pour s'y référer et s'y repérer. L'outil Ajouter des Numéros de Page de ConvertBrio les appose automatiquement sur chaque page de votre PDF, sans logiciel de publication assistée par ordinateur.",
    sections: [
      {
        heading: "Comment ajouter des numéros de page",
        body: "Envoyez votre PDF, et ConvertBrio appose un numéro séquentiel sur chaque page, à partir de la première page du document. Le fichier numéroté se télécharge prêt à imprimer, à partager ou à remettre.",
      },
      {
        heading: "Pourquoi les numéros de page comptent",
        body: "Des pages numérotées permettent aux lecteurs de citer bien plus facilement des passages précis, notamment dans les longs contrats, les articles universitaires ou les manuels, où l'on doit renvoyer à la « page 14 » ou accéder directement à une partie donnée du document.",
      },
      {
        heading: "Combiner avec d'autres outils PDF",
        body: "Si vous assemblez un document à partir de plusieurs sources, fusionnez d'abord les fichiers avec Fusionner des PDF, puis ajoutez les numéros de page au résultat combiné, pour que la numérotation reflète la structure du document final plutôt que celle de chaque morceau.",
      },
      {
        heading: "Style de numérotation et limites",
        body: "Les numéros sont apposés en bas au centre de chaque page, dans un style sans empattement simple, à partir de 1 : il n'existe pour l'instant aucune option pour changer la position, le numéro de départ ou un format du type « Page X sur Y ». Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé dès qu'il a été lu pour le traitement. Le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
      },
    ],
    relatedTools: [
      { label: "Fusionner des PDF", href: "/fr/tools/merge-pdf" },
      { label: "Compresser un PDF", href: "/fr/tools/compress-pdf" },
      { label: "Word en PDF", href: "/fr/tools/word-to-pdf" },
    ],
    faqDescription: "Questions fréquentes sur l'ajout de numéros de page à un PDF.",
    faq: [
      {
        question: "Comment ajouter des numéros de page à un PDF ?",
        answer:
          "Envoyez votre document à l'outil Ajouter des Numéros de Page de ConvertBrio : il appose automatiquement un numéro séquentiel sur chaque page avant que vous ne téléchargiez le résultat.",
      },
      {
        question: "Puis-je changer la position ou le numéro de départ ?",
        answer:
          "Pas pour le moment : les numéros sont toujours placés en bas au centre, à partir de 1. Si vous avez besoin d'une autre position, d'un autre numéro de départ ou d'un format « Page X sur Y », utilisez un logiciel d'édition de PDF pour un contrôle complet.",
      },
      {
        question: "Cet outil renumérote-t-il les pages qui sont déjà numérotées ?",
        answer:
          "Il appose un nouveau numéro séquentiel sur chaque page. Si votre document comporte déjà des numéros imprimés dans le contenu lui-même, les deux apparaîtront : l'outil convient donc surtout aux documents sans numéros de page existants.",
      },
    ],
  },
};
