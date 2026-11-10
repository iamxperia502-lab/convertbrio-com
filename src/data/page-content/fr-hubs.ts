import type { HubDoc, HubUiStrings } from "./types";

export const hubsFr: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "Outils PDF",
    h1: "Outils PDF: fusionner, diviser, organiser, compresser et convertir",
    seoTitle: "Outils PDF Gratuits: Fusionner, Diviser, Compresser | ConvertBrio",
    description:
      "Fusionnez, divisez, réorganisez, pivotez, déverrouillez, compressez et convertissez vos PDF en ligne. Outils PDF ConvertBrio gratuits, sans inscription.",
    intro: [
      "Un PDF est fait pour s'afficher de la même façon partout, ce qui le rend aussi pénible à modifier. Ces outils couvrent les besoins les plus courants: regrouper plusieurs fichiers, séparer des pages, remettre les pages dans le bon ordre, alléger un fichier pour respecter une limite d'envoi, et transformer des pages en images ou des images en pages.",
      "Chaque outil fonctionne depuis votre navigateur, accepte des fichiers jusqu'à 100 Mo et ne demande aucun compte. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans les 24 heures environ. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase). Choisissez la tâche ci-dessous, ou suivez l'un des parcours si votre besoin demande plusieurs étapes.",
    ],
    workflows: [
      {
        title: "Préparer un PDF pour un envoi avec limite de taille",
        steps: [
          "Supprimez les pages inutiles grâce à l'organiseur visuel.",
          "Réduisez-le à la limite exacte que le formulaire autorise.",
        ],
      },
      {
        title: "Transformer des photos de téléphone en un seul PDF",
        steps: [
          "Réunissez les photos dans un seul PDF.",
          "Réduisez la taille si le fichier est trop lourd pour un e-mail.",
        ],
      },
      {
        title: "Assembler un rapport à partir de plusieurs documents",
        steps: [
          "Fusionnez les PDF séparés dans l'ordre voulu.",
          "Ajoutez des numéros de page au document terminé.",
        ],
      },
    ],
    chooser: {
      heading: "Quel outil PDF choisir?",
      body: "Utilisez Fusionner des PDF pour assembler des fichiers et Diviser un PDF pour séparer chaque page. Si vous voulez ne garder que certaines pages, changer leur ordre ou redresser une page couchée, l'Organiseur de Pages PDF vous permet de voir chaque page avant d'agir. Pour les limites de taille, Compresser un PDF applique un niveau standard, tandis que Compresser un PDF à une Taille Précise vise un objectif en Ko ou en Mo et indique la taille atteinte.",
    },
  },
  image: {
    name: "Outils Image",
    h1: "Outils Image: convertir, redimensionner, compresser et retoucher vos photos",
    seoTitle: "Outils Image Gratuits: Convertir, Redimensionner | ConvertBrio",
    description:
      "Convertissez HEIC, JPG, PNG, WEBP et AVIF, redimensionnez au pixel près, compressez à une taille en Ko, recadrez, pivotez et supprimez l'arrière-plan. Gratuit, sans inscription.",
    intro: [
      "La plupart des problèmes d'image se résument à trois causes: le format n'est pas accepté, les dimensions en pixels ne conviennent pas, ou le fichier est trop lourd. Les outils ci-dessous règlent chacun de ces cas directement, que vous prépariez une photo de profil, un dossier de candidature ou des images pour un site web.",
      "Les conversions conservent la résolution d'origine et les outils de compression visent la taille que vous choisissez. Aucun filigrane n'est ajouté. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans les 24 heures environ. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
    ],
    workflows: [
      {
        title: "Préparer une photo pour un formulaire de candidature",
        steps: [
          "Redimensionnez-la aux pixels exacts et à la limite en Ko demandés par le formulaire.",
          "Effacez les données de localisation et de l'appareil photo avant l'envoi.",
        ],
      },
      {
        title: "Ouvrir une photo d'iPhone n'importe où",
        steps: [
          "Convertissez la photo HEIC en JPG.",
          "Compressez-la si le fichier est encore trop volumineux pour être envoyé.",
        ],
      },
      {
        title: "Optimiser un lot d'images pour un site web",
        steps: [
          "Convertissez-les dans un format moderne comme le WEBP.",
          "Compressez tout le lot selon une taille cible unique.",
        ],
      },
    ],
    chooser: {
      heading: "Quel outil d'image choisir?",
      body: "Utilisez le Convertisseur d'Images quand le format pose problème, Redimensionner une Image pour les dimensions en pixels, et Compresser une Image quand seul le poids du fichier compte. Redimensionner Photo et Signature règle les pixels exacts et la limite en Ko en une seule étape, ce que demandent la plupart des formulaires de candidature. Pour traiter plusieurs fichiers à la fois, utilisez le Compresseur d'Images par Lot.",
    },
  },
  document: {
    name: "Outils Document",
    h1: "Outils Document: Word, Excel, PowerPoint, PDF et texte",
    seoTitle: "Outils Document Gratuits: Word, Excel, PowerPoint, PDF | ConvertBrio",
    description:
      "Convertissez Word, Excel et PowerPoint vers et depuis le PDF, compressez des fichiers Office, extrayez le texte de vos scans et supprimez les métadonnées cachées. Gratuit, sans inscription.",
    intro: [
      "Les documents circulent entre des personnes qui n'utilisent pas les mêmes logiciels. Ces outils assurent le passage entre Word, Excel, PowerPoint et PDF, allègent les fichiers Office trop lourds pour un e-mail, extraient le texte des scans et suppriment les informations d'auteur que les fichiers embarquent à votre insu.",
      "Chaque outil précise ce qu'il conserve et ce qu'il ne peut pas faire, par exemple que la conversion d'un PDF en Word ne peut pas reconstituer parfaitement une mise en page complexe. Les fichiers sont chiffrés pendant le transfert. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans les 24 heures environ. Les fichiers sont traités automatiquement, sans relecture humaine, sur les serveurs de nos hébergeurs (Vercel et Supabase).",
    ],
    workflows: [
      {
        title: "Envoyer un document Word qui ne peut pas être modifié",
        steps: [
          "Convertissez-le en PDF pour que la mise en page reste figée.",
          "Effacez d'abord les informations d'auteur et d'entreprise si nécessaire.",
        ],
      },
      {
        title: "Modifier un document dont vous n'avez que le scan",
        steps: [
          "Convertissez le scan en fichier Word modifiable.",
          "Enregistrez la version corrigée au format PDF.",
        ],
      },
      {
        title: "Envoyer par e-mail une présentation trop lourde",
        steps: ["Compressez le PowerPoint à une taille qui passe dans un e-mail."],
      },
    ],
    chooser: {
      heading: "PDF en Word ou Numérisation en Word?",
      body: "Si vous pouvez sélectionner les mots de votre PDF, utilisez PDF en Word, qui conserve la mise en forme au plus près. Si le PDF n'est que l'image d'une page, il n'y a aucun texte à convertir tant qu'il n'a pas été reconnu: utilisez alors Numérisation en Word.",
    },
  },
  compress: {
    name: "Outils de Compression",
    h1: "Outils de compression: réduire la taille des PDF, images et fichiers Office",
    seoTitle: "Compression de Fichiers Gratuite: PDF, Image, Office | ConvertBrio",
    description:
      "Réduisez la taille de vos PDF, photos, fichiers Word et PowerPoint pour respecter une limite d'e-mail ou d'envoi, avec objectifs en Ko et en Mo. Gratuit, sans inscription.",
    intro: [
      "Les formulaires en ligne, les messageries et les sites web imposent tous des limites de taille, et la bonne façon d'alléger un fichier dépend de son contenu. Les photos se compressent en baissant la qualité ou les dimensions, les PDF s'allègent surtout en réencodant les images qu'ils contiennent, et les fichiers Office embarquent des médias qui peuvent être réduits séparément.",
      "Lorsqu'un outil vise une taille cible, il mesure le résultat réel et vous indique la taille atteinte, y compris quand l'objectif ne peut pas être tenu sans abîmer le fichier.",
    ],
    workflows: [
      {
        title: "Faire passer un PDF scanné sous la limite d'un portail",
        steps: [
          "Compressez le PDF à la taille autorisée par le portail.",
          "S'il est encore trop lourd, divisez-le en plusieurs parties.",
        ],
      },
      {
        title: "Alléger de nombreuses photos pour un seul envoi",
        steps: ["Compressez tout le lot selon une seule cible en Ko."],
      },
    ],
    chooser: {
      heading: "De combien un fichier peut-il rétrécir?",
      body: "Cela dépend du contenu. Les PDF et PowerPoint riches en photos s'allègent beaucoup, alors que les PDF composés uniquement de texte sont déjà compacts. Viser une taille très petite coûte en qualité: partez donc de la limite dont vous avez réellement besoin plutôt que du plus petit chiffre possible.",
    },
  },
  ocr: {
    name: "Outils OCR",
    h1: "Outils OCR: extraire le texte des scans, photos et PDF",
    seoTitle: "Outils OCR Gratuits: Image en Texte, Scan en Word | ConvertBrio",
    description:
      "Utilisez l'OCR pour copier le texte d'une image, transformer un scan en fichier Word modifiable ou rendre un PDF scanné consultable. Gratuit, sans inscription, avec des précisions honnêtes sur la fiabilité.",
    intro: [
      "Un scan ou une photo de texte n'est qu'une image. La reconnaissance optique de caractères (OCR) en lit les lettres et vous restitue un vrai texte, sélectionnable. L'outil à choisir dépend de ce que vous voulez obtenir: du texte brut à copier, un fichier Word modifiable, ou le même PDF rendu consultable.",
      "L'OCR est fiable sur du texte imprimé net et en haute résolution, et nettement moins sur l'écriture manuscrite, les scans de mauvaise qualité et les tableaux complexes. Chaque page d'outil explique à quoi s'attendre.",
    ],
    workflows: [
      {
        title: "Transformer une lettre scannée en document modifiable",
        steps: [
          "Convertissez le scan en Word.",
          "Relisez, puis enregistrez au format PDF.",
        ],
      },
      {
        title: "Rendre consultable une archive de scans",
        steps: [
          "Lancez l'OCR pour ajouter une couche de texte à chaque PDF.",
          "Allégez le PDF consultable pour le stockage.",
        ],
      },
    ],
    chooser: {
      heading: "Quel outil OCR choisir?",
      body: "Image en Texte convient à une photo ou une capture d'écran dont vous voulez seulement les mots, qui s'affichent sur la page pour être copiés. Numérisation en Word produit un DOCX modifiable à partir d'une page scannée ou d'un PDF. OCR PDF conserve vos pages telles quelles et ajoute une couche de texte invisible pour que le PDF devienne consultable.",
    },
  },
  ai: {
    name: "Outils IA",
    h1: "Outils IA: améliorer, agrandir et détourer vos photos",
    seoTitle: "Outils Photo IA Gratuits: Améliorer, Agrandir, Détourer | ConvertBrio",
    description:
      "Améliorez, agrandissez et détourez vos photos grâce à l'IA, ou créez une photo d'identité. Gratuit, sans inscription, avec des précisions honnêtes sur les limites de chaque outil.",
    intro: [
      "Ces outils s'appuient sur des modèles d'apprentissage automatique pour des tâches difficiles à faire à la main: redonner du piqué à une photo terne, agrandir une petite image sans la transformer en bouillie, et séparer une personne de son arrière-plan.",
      "Les résultats de l'IA dépendent de la source. Une photo nette donne un résultat net, et aucun outil ici ne peut retrouver un détail qui n'a jamais été capturé. Chaque page explique dans quels cas l'outil fonctionne bien et dans quels cas il montre ses limites.",
    ],
    workflows: [
      {
        title: "Améliorer une petite photo terne",
        steps: [
          "Équilibrez les couleurs et la netteté.",
          "Agrandissez-la pour l'impression ou un affichage plus grand.",
        ],
      },
      {
        title: "Obtenir une image de produit ou de profil propre",
        steps: [
          "Supprimez l'arrière-plan.",
          "Compressez le résultat pour le web.",
        ],
      },
    ],
    chooser: {
      heading: "Amélioration ou agrandissement?",
      body: "Amélioration d'Image par IA corrige les couleurs et la netteté en gardant la même taille. Agrandisseur par IA augmente les dimensions en pixels. Si une photo est à la fois petite et terne, améliorez-la d'abord, puis agrandissez-la.",
    },
  },
};

export const hubUiFr: HubUiStrings = {
  allTemplate: "Tous les {name}",
  workflows: "Parcours recommandés",
  guides: "Guides",
  otherCategories: "Autres catégories d'outils",
  allTools: "Tous les outils",
  home: "Accueil",
  toolLibrary: "Bibliothèque d'outils",
  allToolsIntro: "Tous les outils ConvertBrio, classés par catégorie. De nouveaux outils sont ajoutés régulièrement.",
  categoriesLabel: "Catégories d'outils",
  categoryGuide: "Guide de la catégorie",
  moreTools: "Autres outils",
  moreToolsDesc: "Outils complémentaires hébergés sur d'autres sites ConvertBrio.",
  categoryDescs: {
    convert: "Passez un fichier d'un format à un autre.",
    compress: "Réduisez la taille des fichiers sans sacrifier la qualité.",
    pdf: "Fusionnez, divisez, modifiez et protégez vos documents PDF.",
    image: "Convertissez, redimensionnez, recadrez et retouchez vos images.",
    document: "Passez du Word, Excel, PowerPoint au PDF et inversement.",
    ai: "Améliorez et restaurez vos images grâce à des modèles d'IA.",
  },
};
