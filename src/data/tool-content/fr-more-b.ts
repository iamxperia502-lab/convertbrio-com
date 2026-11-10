import type { ToolContentEntry } from "../toolContent";

// French (fr) long-form tool content, slice B.

export const toolContentFrMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "Convertisseur PDF en PNG : exportez vos pages sans perte de détails",
    intro:
      "Quand vous avez besoin d'une page de PDF sous forme d'image sans perdre en netteté, pour des schémas, des captures d'écran ou des pages remplies de texte, le PNG est un meilleur format d'export que le JPG. Le convertisseur PDF en PNG de ConvertBrio transforme chaque page en fichier image sans perte.",
    sections: [
      {
        heading: "Comment convertir un PDF en PNG",
        body: "Envoyez votre PDF et ConvertBrio affiche chaque page en image PNG, en pleine qualité. Un PDF de plusieurs pages produit un PNG par page, téléchargés ensemble sous forme de lot.",
      },
      {
        heading: "Pourquoi choisir le PNG plutôt que le JPG",
        body: "La compression sans perte du PNG préserve le texte fin, les dessins au trait et les contours nets, sans l'adoucissement que peut provoquer la compression du JPG. C'est surtout utile pour les pages en petits caractères, les schémas techniques ou tout contenu que vous comptez agrandir ou retoucher.",
      },
      {
        heading: "Poids des fichiers",
        body: "Les exports PNG sont généralement plus lourds que leurs équivalents JPG, en particulier pour les pages très détaillées. Si le poids compte davantage que la netteté au pixel près, par exemple pour un partage informel ou une publication en ligne, PDF en JPG sera sans doute plus pratique.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de pages PDF en images PNG.",
    faq: [
      {
        question: "Pourquoi utiliser le PNG plutôt que le JPG pour une page de PDF ?",
        answer:
          "Le PNG est sans perte : il garde le texte et les détails fins plus nets que le JPG, dont la compression peut légèrement adoucir les petits caractères et les dessins au trait. Choisissez le PNG quand la netteté prime sur le poids du fichier.",
      },
      {
        question: "PDF en PNG convertit-il les documents de plusieurs pages ?",
        answer:
          "Oui, chaque page du PDF est affichée en image PNG distincte : un document de plusieurs pages donne donc une image par page.",
      },
      {
        question: "Les fichiers PNG seront-ils plus lourds que les exports JPG ?",
        answer:
          "En général, oui, car le PNG ne sacrifie pas les détails comme le fait la compression avec perte du JPG. Pour un partage informel où le poids compte davantage, PDF en JPG peut être une meilleure option.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Convertisseur d'image en PDF : réunissez vos photos dans un seul document",
    intro:
      "Que vous déposiez des pages numérisées, construisiez un portfolio photo ou transformiez des tickets de caisse en un seul fichier à partager, l'outil Image en PDF de ConvertBrio réunit une ou plusieurs images, JPG, PNG, WEBP, HEIC, AVIF ou GIF, dans un unique document PDF, dans l'ordre de votre choix.",
    sections: [
      {
        heading: "Comment convertir des images en PDF",
        body: "Envoyez une ou plusieurs images dans n'importe quel format courant, classez-les dans l'ordre souhaité, et ConvertBrio les assemble en un seul PDF avec une image par page. Le résultat se télécharge prêt à être partagé, imprimé ou déposé.",
      },
      {
        heading: "Usages courants",
        body: "C'est la méthode habituelle pour déposer des pièces d'identité numérisées, réunir dans un même fichier des photos HEIC d'iPhone de reçus ou de contrats pour un dossier, ou transformer une série d'images en un document simple à partager, sans logiciel de mise en page ni d'édition PDF.",
      },
      {
        heading: "Assembler beaucoup d'images à la fois",
        body: "Vous pouvez envoyer plusieurs images en une seule fois, gratuitement et sans créer de compte.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion d'images en PDF.",
    faq: [
      {
        question: "Puis-je réunir plusieurs images dans un seul PDF ?",
        answer:
          "Oui, envoyez autant d'images que nécessaire en une seule fois : ConvertBrio les assemble en un PDF où chaque image occupe sa propre page, dans l'ordre que vous avez choisi.",
      },
      {
        question: "Est-ce compatible avec les photos HEIC d'iPhone ?",
        answer:
          "Oui, Image en PDF accepte directement les photos HEIC et HEIF, ainsi que les JPG, PNG, WEBP, AVIF et GIF : inutile de convertir d'abord vos photos d'iPhone.",
      },
      {
        question: "Quels formats d'image cet outil accepte-t-il ?",
        answer:
          "Image en PDF accepte les images JPG, PNG, WEBP, HEIC, HEIF, AVIF et GIF, toutes réunies dans un seul PDF.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Convertisseur Word en JPG : exportez les pages d'un document en images",
    intro:
      "Il arrive qu'on ait besoin d'une page de document Word sous forme d'image plutôt que de fichier modifiable : pour une miniature d'aperçu, une publication sur les réseaux sociaux ou l'intégration dans un outil qui ne gère pas les documents. Le convertisseur Word en JPG de ConvertBrio exporte chaque page de votre fichier DOCX en image JPG.",
    sections: [
      {
        heading: "Comment convertir un fichier Word en JPG",
        body: "Envoyez votre fichier DOCX et ConvertBrio affiche chaque page en image JPG, en conservant la mise en page et la mise en forme du document telles qu'elles apparaîtraient à l'impression. Un document de plusieurs pages produit une image par page.",
      },
      {
        heading: "Usages courants",
        body: "C'est pratique pour créer rapidement un aperçu visuel d'un document, partager une seule page sous forme d'image sur les réseaux sociaux ou dans une messagerie, ou intégrer une page de document dans un site web ou une présentation lorsqu'un fichier actif n'est pas adapté.",
      },
      {
        heading: "Le PNG pour un texte plus net",
        body: "Si la page exportée contient de petits caractères ou des détails fins à garder parfaitement nets, utilisez plutôt Word en PNG : le format sans perte du PNG évite le léger adoucissement que la compression du JPG peut provoquer autour des bords du texte.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de documents Word en images JPG.",
    faq: [
      {
        question: "Comment transformer une page de document Word en image ?",
        answer:
          "Envoyez votre fichier DOCX à l'outil Word en JPG de ConvertBrio : il affiche chaque page du document en image JPG que vous pouvez télécharger.",
      },
      {
        question: "Est-ce que cela fonctionne pour les documents de plusieurs pages ?",
        answer:
          "Oui, chaque page du document est exportée dans sa propre image JPG : un fichier de plusieurs pages produit donc un jeu complet d'images.",
      },
      {
        question: "Vaut-il mieux choisir le JPG ou le PNG pour un document en petits caractères ?",
        answer:
          "Le PNG garde le petit texte et les détails fins plus nets, car il est sans perte. Utilisez Word en PNG si la netteté du texte compte plus que le poids réduit du JPG.",
      },
    ],
  },

  "word-to-png": {
    title: "Convertisseur Word en PNG : exportez vos pages avec une clarté sans perte",
    intro:
      "Quand une page de document Word doit devenir une image sans perdre en netteté, pour des schémas détaillés, des tableaux ou des mentions en petits caractères, le PNG est un meilleur format d'export que le JPG. Le convertisseur Word en PNG de ConvertBrio affiche chaque page de votre fichier DOCX en image PNG sans perte.",
    sections: [
      {
        heading: "Comment convertir un fichier Word en PNG",
        body: "Envoyez votre fichier DOCX et ConvertBrio affiche chaque page en image PNG, en pleine qualité, en préservant les détails fins et la netteté du texte. Un document de plusieurs pages produit un PNG par page.",
      },
      {
        heading: "Pourquoi le PNG pour les documents détaillés",
        body: "La compression sans perte du PNG évite l'adoucissement autour du texte et des traits fins que peut provoquer celle du JPG. C'est particulièrement utile pour les pages contenant des tableaux, des schémas, des petits caractères ou tout contenu que vous comptez agrandir.",
      },
      {
        heading: "Quand le JPG peut convenir mieux",
        body: "Si le poids du fichier compte davantage que la netteté au pixel près, pour un partage rapide ou un aperçu informel, Word en JPG produit un fichier plus léger, avec une différence de qualité visuelle mineure pour la plupart des documents.",
      },
      {
        heading: "Mise en page, téléchargements et limites",
        body: "Votre DOCX est d'abord mis en page sur une page A4 standard : une mise en forme complexe propre à Word, comme les en-têtes et pieds de page, les notes de bas de page ou les formats de page inhabituels, peut donc s'afficher légèrement différemment de Word. Un document d'une page se télécharge en un seul PNG ; un document de plusieurs pages se télécharge dans un fichier ZIP contenant un PNG par page. Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de documents Word en images PNG.",
    faq: [
      {
        question: "Pourquoi choisir le PNG plutôt que le JPG pour une page de document ?",
        answer:
          "Le PNG est sans perte : il garde le texte, les tableaux et les schémas plus nets que le JPG, dont la compression peut légèrement adoucir les détails fins. Choisissez le PNG quand la clarté prime.",
      },
      {
        question: "Word en PNG gère-t-il les documents de plusieurs pages ?",
        answer:
          "Oui, chaque page de votre fichier DOCX est affichée en image PNG distincte. Un document d'une page se télécharge directement en PNG ; plusieurs pages se téléchargent ensemble dans un fichier ZIP.",
      },
      {
        question: "La mise en forme exacte de mon document sera-t-elle conservée ?",
        answer:
          "Le texte, les titres, les listes, les tableaux et les images sont conservés, mais les mises en page très complexes propres à Word (en-têtes et pieds de page personnalisés, formats de page inhabituels) peuvent s'afficher légèrement différemment, car la page est reconstruite sur une mise en page A4 standard au lieu d'être rendue par Word lui-même.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Convertisseur Excel en PDF : figez la mise en page de votre tableur avant de le partager",
    intro:
      "Un tableur peut s'afficher différemment selon la largeur des colonnes, les polices ou la version du logiciel qui l'ouvre, ce qui pose problème quand un rapport financier, une facture ou un tableau de données doit rester identique partout. Le convertisseur Excel en PDF de ConvertBrio transforme votre tableur en PDF fixe, prêt à imprimer, qui s'affiche de la même façon quel que soit l'appareil ou le logiciel qui l'ouvre.",
    sections: [
      {
        heading: "Comment convertir un fichier Excel en PDF",
        body: "Envoyez votre fichier .xls ou .xlsx et ConvertBrio affiche chaque feuille sur une page (ou un ensemble de pages) du PDF, en conservant vos données, la mise en forme des cellules et les cellules fusionnées. Le fichier converti se télécharge automatiquement et peut être envoyé par e-mail, imprimé ou archivé.",
      },
      {
        heading: "Pourquoi convertir en PDF avant de partager",
        body: "Le PDF est le format de référence des documents finalisés, car il s'affiche à l'identique sur tous les appareils et systèmes d'exploitation, contrairement à un tableur, dont la mise en page peut bouger ou varier selon ce qui est installé. La conversion fige votre mise en page avant l'envoi d'un rapport, d'une facture ou d'un tableau, et votre destinataire n'a pas besoin d'Excel pour le consulter.",
      },
      {
        heading: "Cas d'usage courants",
        body: "Cet outil sert souvent à partager des rapports financiers et des factures avec des personnes qui n'ont pas Excel, à archiver un instantané figé d'un tableur avant qu'il ne change, et à préparer des tableaux de données pour l'impression ou une diffusion officielle.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de tableurs Excel en PDF.",
    faq: [
      {
        question: "Comment convertir un fichier Excel en PDF ?",
        answer:
          "Envoyez votre fichier .xls ou .xlsx à l'outil Excel en PDF de ConvertBrio : il génère une version PDF mise en forme, prête à télécharger, sans installer Microsoft Excel.",
      },
      {
        question: "La mise en forme et les formules de mon tableur resteront-elles identiques ?",
        answer:
          "La mise en forme des cellules, les cellules fusionnées et la mise en page sont conservées. Les formules sont converties en leur dernière valeur calculée au lieu de rester des formules actives, car un PDF est un document fixe et non un tableur modifiable.",
      },
      {
        question: "Et si mon tableur contient plusieurs feuilles ?",
        answer:
          "Chaque feuille de votre classeur est convertie et placée sur sa propre page (ou son propre ensemble de pages) dans le PDF obtenu, dans le même ordre que dans le fichier d'origine.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "Convertisseur PowerPoint en PDF : partagez vos diapositives sans PowerPoint",
    intro: [
      "Partager une présentation avec quelqu'un qui n'a pas PowerPoint, figer une version finale avant relecture, ou alléger un diaporama trop gros pour passer par e-mail : tout commence généralement par la conversion du .pptx en PDF. Le convertisseur PowerPoint en PDF de ConvertBrio le fait dans le navigateur, gratuitement, avec une page par diapositive et sans filigrane.",
      "Un PDF s'ouvre sur n'importe quel appareil, ne peut pas être modifié par accident et, pour les présentations riches en images, il est souvent bien plus léger que le .pptx d'origine une fois passé dans Compresser un PDF.",
    ],
    howTo: [
      {
        step: "Enregistrez votre présentation au format .pptx",
        detail: "Dans PowerPoint, Fichier → Enregistrer sous → Présentation PowerPoint (.pptx). L'ancien format .ppt n'est pas pris en charge.",
      },
      {
        step: "Envoyez le fichier",
        detail: "Glissez-le dans la zone ou parcourez vos dossiers. Un fichier à la fois, jusqu'à 100 Mo.",
      },
      {
        step: "Convertissez en PDF",
        detail: "ConvertBrio affiche chaque diapositive sur une page entière. Le PDF se télécharge automatiquement.",
      },
      {
        step: "Compressez-le si besoin",
        detail: "Si la présentation est riche en images et que le PDF reste volumineux, passez-le dans Compresser un PDF pour réencoder les images intégrées.",
      },
    ],
    sections: [
      {
        heading: "Pourquoi convertir en PDF avant de partager",
        body: "Un .pptx nécessite PowerPoint ou une visionneuse compatible, et son rendu peut varier selon les polices installées chez le destinataire : les puces se décalent, le texte déborde de son cadre, une police personnalisée est remplacée par une police générique. Un PDF est figé : ce que vous envoyez est exactement ce qu'on voit, sur un téléphone, un Mac ou un ordinateur professionnel verrouillé sans Office.",
      },
      {
        heading: "Alléger un PowerPoint",
        body: [
          "Un outil dédié, Compresser un PowerPoint, qui garde le fichier modifiable, est encore en cours de développement. En attendant, le moyen le plus fiable de réduire le poids d'une présentation avant de l'envoyer par e-mail est cette méthode en deux étapes :",
          "Convertissez le .pptx en PDF ici, puis passez le PDF dans Compresser un PDF. Chaque photo et capture d'écran intégrée est réencodée avec une qualité efficace et les images trop grandes sont réduites, ce qui concentre presque tout le poids d'une présentation lourde. Vous obtenez un fichier partageable, lisible partout, généralement bien plus petit que l'original. La contrepartie : le résultat est un PDF, pas une présentation modifiable.",
        ],
      },
      {
        heading: "Ce qui est conservé et ce qui ne l'est pas",
        body: "Le texte, les images et la mise en page des diapositives sont convertis proprement. Les animations et les transitions n'existent pas dans un PDF statique : elles sont donc supprimées. Les graphiques, SmartArt et tableaux intégrés s'affichent tels qu'ils apparaissent sur la diapositive, mais ne sont pas interactifs. Si votre présentation repose beaucoup sur des effets d'apparition et des animations, relisez le PDF avant de l'envoyer pour voir ce que donne le contenu sans mouvement.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Le fichier est chiffré pendant le transfert. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le PDF converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine. Un .pptx à la fois, jusqu'à 100 Mo, gratuit, sans compte, sans filigrane.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de présentations PowerPoint en PDF.",
    faq: [
      {
        question: "Comment convertir gratuitement un fichier PowerPoint en PDF ?",
        answer:
          "Envoyez votre .pptx à l'outil PowerPoint en PDF de ConvertBrio : il génère un PDF avec une page par diapositive, prêt à télécharger, sans installer PowerPoint, sans compte et sans filigrane.",
      },
      {
        question: "Comment compresser un PowerPoint pour l'envoyer par e-mail ?",
        answer:
          "Convertissez le .pptx en PDF ici, puis passez ce PDF dans Compresser un PDF. L'outil réencode les images intégrées, qui représentent l'essentiel du poids d'une grosse présentation. Le résultat est bien plus léger, mais c'est un PDF et non une présentation modifiable.",
      },
      {
        question: "Les animations et les transitions sont-elles conservées ?",
        answer:
          "Non, un PDF est statique : les animations et les transitions sont donc supprimées. Le texte, les images, les graphiques et la mise en page sont conservés tels qu'ils apparaissent sur chaque diapositive.",
      },
      {
        question: "Est-ce compatible avec les anciens fichiers .ppt ?",
        answer:
          "Seul le format moderne .pptx est pris en charge. Ouvrez le fichier dans PowerPoint et enregistrez-le en .pptx (Fichier → Enregistrer sous), puis convertissez-le.",
      },
      {
        question: "Puis-je mettre deux diapositives par page de PDF ou obtenir une mise en page de documents ?",
        answer:
          "Pas pour le moment : le convertisseur affiche une diapositive entière par page. Pour des mises en page de type documents, exportez directement depuis PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Fusionner des documents : réunissez Word, Excel et PowerPoint dans un seul PDF",
    intro:
      "Réunir des fichiers Word, Excel et PowerPoint dans un seul PDF oblige généralement à les convertir un par un, puis à les fusionner à la main. L'outil Fusionner des Documents de ConvertBrio fait tout le travail en une seule étape.",
    sections: [
      {
        heading: "Comment fusionner des documents",
        body: "Envoyez plusieurs fichiers, dans n'importe quelle combinaison de Word, Excel, PowerPoint et PDF : ConvertBrio convertit chacun en PDF et les assemble en un seul document ordonné. Le PDF fusionné se télécharge automatiquement, prêt à être envoyé par e-mail, imprimé ou archivé.",
      },
      {
        heading: "Pourquoi tout réunir dans un seul PDF",
        body: "Un PDF unique est plus simple à partager, à relire et à archiver qu'un ensemble de fichiers épars dans des formats différents. Il garantit aussi que le destinataire voit tout dans l'ordre prévu, sans avoir besoin de Word, d'Excel ou de PowerPoint.",
      },
      {
        heading: "Respecter l'ordre des documents",
        body: "Les fichiers sont assemblés dans l'ordre où vous les envoyez : classez donc votre sélection avant l'envoi si le document final doit suivre une séquence précise, par exemple une page de garde, puis un rapport, puis les données d'un tableur en annexe.",
      },
      {
        heading: "Limites et confidentialité",
        body: "Vous pouvez réunir jusqu'à 25 fichiers, pour une taille cumulée de 100 Mo, en une seule fois. Chaque fichier est converti et traité côté serveur, et non dans votre navigateur. Vos fichiers d'origine sont supprimés juste après leur lecture pour la conversion. Le PDF fusionné est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur la fusion de fichiers Word, Excel et PowerPoint en un seul PDF.",
    faq: [
      {
        question: "Quels types de fichiers puis-je réunir ?",
        answer:
          "Toute combinaison de fichiers Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx) et PDF dans le même envoi : chaque fichier qui n'est pas un PDF est d'abord converti en PDF, puis tous sont fusionnés.",
      },
      {
        question: "Dans quel ordre mes fichiers sont-ils fusionnés ?",
        answer:
          "Les fichiers sont assemblés dans l'ordre où vous les envoyez. Classez votre sélection au préalable si vous voulez une séquence précise dans le document final.",
      },
      {
        question: "Est-ce compatible avec les anciens fichiers .doc, .ppt et .xls ?",
        answer:
          "Les anciens formats .doc et .ppt ne sont pas pris en charge : enregistrez ces fichiers en .docx ou .pptx d'abord. Les anciens tableurs .xls fonctionnent, car la conversion Excel de ConvertBrio lit ce format nativement.",
      },
    ],
  },

  "remove-background": {
    title: "Suppression d'arrière-plan par IA : des détourages transparents automatiques",
    intro: [
      "Détourer un sujet de son arrière-plan demande d'ordinaire un logiciel de retouche et un masquage minutieux autour de chaque mèche de cheveux. Le suppresseur d'arrière-plan par IA de ConvertBrio s'en charge automatiquement : envoyez une photo et récupérez en quelques secondes le sujet sur fond transparent, sous forme de PNG prêt à être posé sur n'importe quel nouveau décor.",
      "C'est gratuit, sans compte et sans filigrane. Le modèle utilisé est open source et fonctionne de façon automatique, sans relecture humaine.",
    ],
    howTo: [
      {
        step: "Envoyez une photo",
        detail: "JPG, PNG, WEBP, HEIC ou AVIF, jusqu'à 100 Mo. Un sujet bien net devant un arrière-plan assez uni donne les meilleurs résultats.",
      },
      {
        step: "Laissez le modèle travailler",
        detail: "L'IA repère le sujet principal, personne, produit ou objet, et efface tout le reste.",
      },
      {
        step: "Téléchargez le PNG transparent",
        detail: "Le détourage se télécharge en PNG avec un arrière-plan transparent, que vous pouvez placer sur un site web, dans une création graphique ou sur une couleur unie.",
      },
    ],
    sections: [
      {
        heading: "Ce que vous pouvez faire du détourage",
        body: "",
        list: [
          "Placer une photo de produit sur un fond blanc ou aux couleurs de votre marque pour une fiche de boutique",
          "Insérer un portrait dans une page d'équipe, une carte d'identité ou une diapositive",
          "Créer un autocollant, un logo ou un visuel sans fond rectangulaire",
          "Intégrer un sujet dans une autre scène",
          "Créer une photo d'identité, même si le Créateur de Photo d'Identité s'occupe du format et du fond blanc en une seule étape",
        ],
      },
      {
        heading: "Obtenir des contours bien nets",
        body: "Les résultats sont meilleurs quand le sujet se détache clairement de ce qui se trouve derrière lui : bon éclairage, arrière-plan assez uni et contraste correct sur les bords. Le modèle peut avoir du mal avec les cheveux fins qui s'échappent, les objets transparents ou en verre, les contours peu contrastés (un manteau gris devant un mur gris) et les photos où plusieurs personnes se chevauchent. Si un contour sort irrégulier, une photo source plus propre règle généralement le problème ; pour de petites retouches, recadrez le résultat avec l'outil Recadrer une Image.",
      },
      {
        heading: "Confidentialité",
        body: "Le modèle de suppression d'arrière-plan est open source : votre photo n'est pas envoyée à une API d'IA externe et personne ne la consulte. Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur le suppresseur d'arrière-plan par IA de ConvertBrio.",
    faq: [
      {
        question: "Le suppresseur d'arrière-plan est-il gratuit ?",
        answer:
          "Oui, sans compte, sans filigrane et sans limite sur le nombre de photos. Les envois peuvent atteindre 100 Mo.",
      },
      {
        question: "Quel format de sortie vais-je obtenir ?",
        answer:
          "Un PNG avec un arrière-plan transparent, le format sans perte standard pour les images sans fond plein. Ouvrez-le dans n'importe quel éditeur pour le placer sur un nouveau décor.",
      },
      {
        question: "Cela fonctionne-t-il sur tous les types de photos ?",
        answer:
          "L'outil est conçu pour les sujets courants comme les personnes, les produits et les objets devant un arrière-plan assez dégagé. Les scènes encombrées, les objets en verre, les cheveux fins et les contours peu contrastés sont plus difficiles et peuvent nécessiter une photo source plus propre.",
      },
      {
        question: "Cela fonctionne-t-il sur des photos avec plusieurs sujets ?",
        answer:
          "L'outil est optimisé pour un seul sujet principal bien net. Plusieurs sujets qui se chevauchent peuvent donner des contours moins précis.",
      },
      {
        question: "Ma photo est-elle envoyée au service d'IA d'une autre entreprise ?",
        answer:
          "Non. Le modèle repose sur un logiciel open source et votre photo n'est pas envoyée à une API d'IA externe. Votre fichier d'origine est supprimé juste après sa lecture ; le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Créateur de photo d'identité : un outil gratuit en ligne pour vos photos au format passeport",
    intro: [
      "Une photo de passeport conforme exige un fond blanc uni, un sujet centré et à la bonne taille, et les bonnes dimensions physiques, ce qui implique normalement un passage en pharmacie ou chez un photographe. Le créateur de photo d'identité de ConvertBrio fait les trois automatiquement : envoyez un selfie ou n'importe quel portrait net, et récupérez en quelques secondes une photo de 2×2 pouces prête à imprimer, sur fond blanc uni.",
      "C'est gratuit, sans compte et sans filigrane. Chaque étape, détection du visage et suppression de l'arrière-plan, repose sur des modèles open source et s'effectue automatiquement, sans relecture humaine.",
    ],
    howTo: [
      {
        step: "Prenez un portrait simple",
        detail:
          "De face, expression neutre, éclairage uniforme, tête et épaules dans le cadre avec de l'espace autour. Un selfie pris au téléphone devant un mur clair convient très bien.",
      },
      {
        step: "Envoyez-le",
        detail: "Une personne par photo, jusqu'à 100 Mo. Les photos de groupe et les gros plans trop serrés ne seront pas traités.",
      },
      {
        step: "Laissez l'outil créer la photo",
        detail:
          "ConvertBrio repère votre visage, le recadre et le centre aux proportions d'une photo de passeport, supprime l'arrière-plan et le remplace par un blanc uni.",
      },
      {
        step: "Téléchargez et imprimez en 2×2 pouces",
        detail:
          "Vous obtenez une image de 1200×1200 pixels à 600 DPI : le format 2×2 pouces utilisé pour les photos de passeport et de visa des États-Unis et de l'Inde.",
      },
    ],
    sections: [
      {
        heading: "Comment ça marche",
        body: "Envoyez une photo : ConvertBrio détecte votre visage, le recadre et le centre selon les proportions standard d'une photo de passeport, supprime l'arrière-plan d'origine et le remplace par un blanc uni, puis produit une photo de 2×2 pouces à 600 DPI (1200×1200 pixels), le format utilisé pour les photos de passeport et de visa des États-Unis comme de l'Inde. Rien à positionner ni à ajuster manuellement.",
      },
      {
        heading: "Formats de photo de passeport selon les pays",
        body: "L'outil produit le format 2×2 pouces (51×51 mm). C'est exactement ce qu'exigent certains pays, et un bon point de départ que vous pouvez rogner pour d'autres ; vérifiez toujours les spécifications officielles en vigueur avant de déposer votre dossier.",
        table: {
          headers: ["Pays", "Format requis", "Le résultat 2×2 pouces convient-il ?"],
          rows: [
            ["États-Unis", "2 × 2 po (51 × 51 mm)", "Oui, directement"],
            ["Inde", "2 × 2 po (51 × 51 mm)", "Oui, directement"],
            ["Royaume-Uni", "35 × 45 mm", "À recadrer depuis le résultat 2×2"],
            ["Espace Schengen / UE", "35 × 45 mm", "À recadrer depuis le résultat 2×2"],
            ["Canada", "50 × 70 mm", "À recadrer à nouveau ; proportions différentes"],
            ["Australie", "35 × 45 mm", "À recadrer depuis le résultat 2×2"],
          ],
        },
      },
      {
        heading: "Obtenir le meilleur résultat",
        body: "Utilisez une photo bien éclairée, prise de face, où la tête et les épaules sont entièrement visibles avec un peu d'espace autour : un selfie au téléphone devant un mur uni fonctionne bien. Évitez les photos où la tête touche les bords, car l'outil a besoin de place au-dessus de la tête et autour des épaules pour calculer un recadrage aux bonnes proportions. Une personne par photo : les photos de groupe ou les gros plans trop serrés ne seront pas traités correctement.",
      },
      {
        heading: "Ce que cet outil ne garantit pas",
        body: "Il produit une photo d'allure professionnelle, à la bonne taille et centrée, avec un vrai fond blanc : ce n'est pas une vérification de conformité certifiée. Il ne contrôle ni l'uniformité de l'éclairage, ni l'expression, ni les reflets sur les lunettes, ni les autres critères qu'un examen officiel ICAO ou gouvernemental vérifie à la main. Pour une demande de passeport aux exigences strictes, considérez le résultat comme un excellent point de départ et vérifiez les conditions photo en vigueur dans votre pays avant de déposer votre dossier.",
      },
      {
        heading: "Confidentialité",
        body: "La détection du visage et la suppression de l'arrière-plan reposent sur des modèles open source : votre photo n'est pas envoyée à une API tierce et personne ne la consulte. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur le créateur de photo d'identité de ConvertBrio.",
    faq: [
      {
        question: "Quelle taille de photo cet outil produit-il ?",
        answer:
          "Une photo de 2×2 pouces (1200×1200 pixels) à 600 DPI : le format standard des photos de passeport et de visa des États-Unis et de l'Inde.",
      },
      {
        question: "Est-ce gratuit ?",
        answer:
          "Oui. Envoyer une photo et générer une photo au format passeport sur fond blanc ne demande ni compte ni paiement.",
      },
      {
        question: "Cette photo sera-t-elle forcément acceptée pour ma demande de passeport ?",
        answer:
          "Elle est à la bonne taille, centrée et sur un vrai fond blanc, ce qui couvre les motifs de refus les plus courants. Elle ne passe pas par un contrôle de conformité officiel complet (éclairage, expression, reflets sur les lunettes) : vérifiez donc les exigences en vigueur dans votre pays avant de déposer une demande officielle.",
      },
      {
        question: "Que faire si l'outil indique qu'aucun visage n'a été trouvé, ou plusieurs visages ?",
        answer:
          "Utilisez une photo nette, prise de face, bien éclairée, avec une seule personne dans le cadre. Les photos de groupe, de profil, ou très sombres ou floues peuvent empêcher la détection du visage.",
      },
      {
        question: "Pourquoi l'outil indique-t-il qu'il n'y a pas assez d'espace autour du visage ?",
        answer:
          "L'outil a besoin d'une marge visible au-dessus de la tête et autour des épaules dans la photo d'origine pour calculer un recadrage aux bonnes proportions. Si votre photo est déjà serrée sur le visage, prenez-en une nouvelle en vous plaçant un peu plus loin.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "Amélioration d'image par IA",
    intro:
      "Les photos ternes, sous-exposées ou légèrement floues demandent souvent un simple réglage automatique plutôt qu'une retouche manuelle. L'outil d'amélioration d'image de ConvertBrio équilibre automatiquement l'exposition et les couleurs et accentue les détails en une seule étape, sans curseurs à régler.",
    sections: [
      {
        heading: "Ce que fait cet outil",
        body: "L'amélioration d'image applique à votre photo un ensemble fixe de réglages automatiques : étirement du contraste pour exploiter toute la plage tonale, légère hausse de la saturation et de la luminosité, et accentuation des détails. Vous obtenez un résultat toujours amélioré, sans régler chaque paramètre vous-même.",
      },
      {
        heading: "Comment ça marche",
        body: "Envoyez une image et ConvertBrio la fait passer par une chaîne de traitement d'image automatique (normalisation du contraste, couleurs et accentuation) directement sur nos serveurs : un algorithme déterministe plutôt qu'un modèle d'IA générative, ce qui explique que les résultats soient réguliers et le traitement rapide.",
      },
      {
        heading: "Ce qu'il ne corrige pas",
        body: "C'est une passe d'amélioration, pas un outil d'augmentation de résolution ni de restauration : il ne récupérera pas nettement les détails d'une image de très faible résolution, ne corrigera pas un flou de bougé ou une mise au point ratée, et ne reconstituera pas les détails manquants. Pour augmenter la résolution avec un modèle de super-résolution entraîné, utilisez plutôt l'Agrandisseur par IA.",
      },
    ],
    faqDescription: "Questions fréquentes sur l'outil d'amélioration d'image de ConvertBrio.",
    faq: [
      {
        question: "Quels types d'améliorations apporte-t-il ?",
        answer:
          "Il étire automatiquement le contraste, relève légèrement les couleurs et la luminosité et accentue les détails : une passe de réglage fixe et régulière, sans retouche manuelle photo par photo.",
      },
      {
        question: "En quoi est-ce différent de l'Agrandisseur par IA ?",
        answer:
          "L'amélioration d'image applique des réglages automatiques à la même résolution, avec une chaîne de traitement fixe. L'Agrandisseur par IA est un outil distinct qui utilise un modèle de super-résolution entraîné pour augmenter la résolution d'une image et reconstruire les détails.",
      },
      {
        question: "Y a-t-il une limite de taille de fichier ?",
        answer:
          "Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé juste après sa lecture ; le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures.",
      },
    ],
  },

  "ai-upscaler": {
    title: "Agrandisseur d'image par IA : augmentez la résolution sans flou",
    intro: [
      "Agrandir une image petite ou de faible résolution avec un simple redimensionnement ne fait qu'étaler les pixels existants sur une plus grande surface, et le résultat est flou et pixellisé. L'agrandisseur par IA de ConvertBrio utilise un modèle de super-résolution entraîné pour multiplier la résolution par environ 4, en reconstituant des détails plausibles (contours, textures, structures fines) au lieu d'étirer ce qui existe.",
    ],
    howTo: [
      {
        step: "Envoyez l'image à agrandir",
        detail: "Une photo prise dans la vie réelle donne les meilleurs résultats. JPG, PNG, WEBP, HEIC ou AVIF, jusqu'à 100 Mo.",
      },
      {
        step: "Lancez l'agrandissement",
        detail:
          "Un modèle d'IA intégré reconstruit les détails à environ 4 fois la résolution de l'image d'origine, en travaillant par tuiles pour ménager la mémoire. Cela prend quelques secondes de plus qu'une simple conversion.",
      },
      {
        step: "Téléchargez le PNG",
        detail: "Le résultat est toujours un PNG à 4 fois la résolution de l'image d'entrée (éventuellement réduite au préalable).",
      },
    ],
    sections: [
      {
        heading: "Agrandissement par IA ou redimensionnement",
        body: "L'outil Redimensionner une Image modifie les dimensions en pixels par interpolation classique : parfait pour réduire une image, mais il ne peut pas ajouter des détails absents du fichier, si bien qu'un agrandissement paraît flou. L'agrandissement par IA suit l'approche inverse : le modèle a appris à quoi ressemblent les vrais détails d'une photo et en peint une version haute résolution convaincante. Redimensionnez pour réduire, utilisez l'agrandisseur pour agrandir.",
      },
      {
        heading: "Quand c'est le plus utile",
        body: "",
        list: [
          "Agrandir une photo ancienne, petite ou de faible résolution pour l'imprimer",
          "Préparer une image au format web pour un grand écran ou un écran haute densité",
          "Retrouver une taille exploitable à partir d'une photo très recadrée",
          "Affiner une image légèrement floue (même si l'Amélioration d'Image par IA convient mieux pour un nettoyage à taille égale)",
        ],
      },
      {
        heading: "À quoi s'attendre",
        body: "Les résultats sont les plus solides sur les photographies naturelles : personnes, lieux, objets. Le modèle peut avoir du mal avec le texte dense, les dessins au trait nets, les captures d'écran et les visuels très stylisés, et invente parfois des textures qui n'existaient pas. Les images source de très haute résolution sont réduites avant l'agrandissement pour que le traitement reste raisonnable : envoyer une photo déjà grande n'apporte donc pas grand-chose. C'est une reconstruction, pas une récupération des vrais détails d'origine.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Aucun service d'IA tiers n'est utilisé. Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur l'agrandisseur d'image par IA de ConvertBrio.",
    faq: [
      {
        question: "En quoi l'agrandissement par IA diffère-t-il d'un simple redimensionnement vers une taille supérieure ?",
        answer:
          "Le redimensionnement classique étire les pixels existants, ce qui rend le résultat flou. L'agrandissement par IA reconstruit des détails plausibles avec un modèle entraîné, pour un agrandissement bien plus net.",
      },
      {
        question: "De combien l'image est-elle agrandie ?",
        answer:
          "D'environ 4 fois la résolution de l'image d'entrée (d'abord réduite si elle est très grande). Le résultat est un PNG.",
      },
      {
        question: "Cela fonctionne-t-il sur du texte ou des captures d'écran ?",
        answer:
          "L'outil est conçu pour les photographies. Le texte dense, les dessins au trait et les captures d'écran peuvent présenter des détails inventés ou baveux : un simple redimensionnement est souvent plus sûr dans ces cas.",
      },
      {
        question: "Y a-t-il une limite de taille de fichier ?",
        answer:
          "Les envois sont limités à 100 Mo. Votre fichier d'origine est supprimé juste après sa lecture ; le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures.",
      },
      {
        question: "Pourquoi le traitement a-t-il pris un peu de temps ?",
        answer:
          "Le modèle traite les grandes images par tuiles pour ménager la mémoire, ce qui prend quelques secondes de plus qu'une simple conversion de format.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "Compresser un PDF à une taille précise en Ko ou en Mo",
    intro: [
      "Les portails de dépôt, les candidatures en ligne et les messageries refusent souvent un PDF qui dépasse une limite stricte : 200 Ko, 500 Ko, 2 Mo. Cet outil prend cette limite comme point de départ. Indiquez la taille maximale, et ConvertBrio compresse votre PDF par étapes, en mesurant la taille réelle du fichier après chacune, jusqu'à ce qu'il passe.",
      "Contrairement à un compresseur généraliste qui réduit le fichier autant que possible, cet outil vise votre chiffre et vous dit la vérité sur le résultat. Il affiche la taille atteinte et, si votre limite est trop basse pour être respectée sans massacrer les pages, il vous le dit au lieu de faire semblant.",
    ],
    howTo: [
      { step: "Envoyez votre PDF", detail: "Un fichier à la fois, jusqu'à 100 Mo." },
      { step: "Indiquez la taille maximale", detail: "Saisissez le chiffre demandé par le formulaire, puis choisissez Ko ou Mo." },
      { step: "Compressez", detail: "Nous essayons des réglages de plus en plus forts et nous nous arrêtons au premier résultat qui passe sous votre limite." },
      { step: "Vérifiez la taille obtenue", detail: "Le message de résultat indique la taille atteinte. Téléchargez le fichier, ou essayez une limite plus large si l'objectif n'a pas été atteint." },
    ],
    sections: [
      {
        heading: "Comment fonctionne la recherche de la taille exacte",
        body: "Une seule passe tombe rarement sur un chiffre précis : l'outil parcourt donc une échelle de réglages. À chaque étape, les photos intégrées du fichier d'origine sont réencodées à une résolution et une qualité inférieures à celles de l'étape précédente, en partant d'un réglage doux pour aller vers un réglage plus fort. Après chaque étape, le fichier obtenu est mesuré. Le premier résultat égal ou inférieur à votre limite est celui que vous récupérez : vous gardez ainsi autant de qualité que votre objectif le permet.",
      },
      {
        heading: "Quand l'objectif ne peut pas être atteint",
        body: "Certains PDF ne rétrécissent tout simplement pas beaucoup : les fichiers composés de graphiques vectoriels ou de texte brut sont déjà petits, et une limite de 20 Ko pour un scan de 40 pages n'est pas réaliste. Si même le réglage le plus fort laisse le fichier au-dessus de votre limite, l'outil n'annonce jamais de succès. Il renvoie la plus petite version qu'il a pu produire, affiche sa taille et propose des pistes, comme une limite plus large ou la division du PDF en plusieurs parties.",
      },
      {
        heading: "Ce qui est modifié",
        body: "Les images JPEG intégrées sont recompressées et, si elles sont très grandes, réduites, et les propriétés du document comme le titre et l'auteur sont effacées. Le texte, les polices et la mise en page ne sont pas touchés. Les PDF scannés composés de photos en profitent le plus, tandis que des tailles cibles très basses rendent les images visiblement plus floues.",
      },
      {
        heading: "Confidentialité et limites",
        body: "Les fichiers sont chiffrés pendant le transfert. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine. Les PDF protégés par mot de passe ne peuvent pas être traités.",
      },
    ],
    faqDescription: "Questions fréquentes sur la compression d'un PDF jusqu'à une taille maximale en Ko ou en Mo.",
    faq: [
      { question: "Comment compresser un PDF sous 200 Ko ?", answer: "Envoyez le PDF, saisissez 200, choisissez Ko, puis lancez la compression. L'outil essaie des réglages de plus en plus forts jusqu'à ce que le fichier passe, ou vous indique la plus petite taille atteignable si 200 Ko n'est pas réaliste pour ce document." },
      { question: "Atteint-il toujours ma taille exacte ?", answer: "Non. Il ramène le fichier à votre limite ou en dessous quand c'est possible sans perte de qualité inacceptable. Sinon, vous voyez la plus petite taille atteinte plutôt qu'un faux succès." },
      { question: "Le résultat atteint-il exactement ma limite ?", answer: "Il se situe à la limite ou en dessous, généralement un peu en dessous, car les réglages évoluent par paliers et non de façon continue." },
      { question: "Pourquoi mon PDF a-t-il à peine diminué ?", answer: "Les PDF composés surtout de texte et de formes vectorielles sont déjà compacts. Les plus grosses économies viennent des PDF qui contiennent des photos ou des pages numérisées." },
      { question: "Y a-t-il une différence de qualité avec l'outil Compresser un PDF habituel ?", answer: "Compresser un PDF applique un seul niveau fixe. Cet outil part du même niveau et ne passe à plus fort que si votre limite l'exige." },
      { question: "Mon document est-il conservé ?", answer: "Votre fichier d'origine est supprimé juste après sa lecture ; le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Aucun fichier n'est relu par une personne." },
    ],
  },

  "photo-signature-resizer": {
    title: "Redimensionner une photo et une signature : pixels exacts et taille de fichier maximale",
    intro: [
      "Les formulaires de candidature acceptent rarement une photo telle qu'elle sort de votre téléphone. Ils demandent une largeur et une hauteur précises en pixels et un fichier ne dépassant pas un certain nombre de Ko. Cet outil produit exactement cela : saisissez les dimensions et la limite de poids de votre formulaire, puis téléchargez un JPG qui respecte les deux.",
      "Il gère aussi bien les photos que les signatures. Choisissez un format d'image ou un préréglage pour remplir les dimensions, décidez de recadrer ou d'ajouter des marges blanches quand votre image n'a pas la même forme, et fixez le nombre de Ko maximal. Les dimensions que vous saisissez ne sont jamais modifiées pour respecter le poids : seule la qualité JPEG est abaissée.",
    ],
    howTo: [
      { step: "Envoyez votre photo ou votre signature", detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF." },
      { step: "Définissez la taille", detail: "Choisissez un préréglage ou saisissez la largeur et la hauteur en pixels. Sélectionnez un format d'image si votre formulaire en précise un." },
      { step: "Ajoutez la limite de poids", detail: "Saisissez le nombre de Ko maximal, ou laissez vide pour conserver une haute qualité." },
      { step: "Choisissez le recadrage ou les marges", detail: "Le recadrage remplit exactement la taille ; les marges blanches gardent toute l'image à l'intérieur, ce qui convient aux signatures." },
      { step: "Redimensionnez et vérifiez le résultat", detail: "Le message de résultat confirme les pixels exacts et le poids final en Ko." },
    ],
    sections: [
      {
        heading: "Des dimensions exactes, puis le poids du fichier",
        body: "L'image est d'abord redimensionnée exactement à la largeur et à la hauteur demandées. Ensuite, l'outil cherche la qualité JPEG la plus élevée qui maintient le fichier sous votre limite : les dimensions restent donc fixes. Si la limite est trop basse même à la qualité minimale, l'outil le dit et affiche la taille atteinte au lieu de prétendre avoir réussi. Dans ce cas, essayez des dimensions légèrement plus petites.",
      },
      {
        heading: "Préréglages et valeurs personnalisées",
        body: "Les préréglages couvrent des tailles en pixels reproductibles avec précision, comme une photo de passeport de 35 × 45 mm à 300 DPI (413 × 531 px) ou une photo de 2 × 2 pouces à 300 DPI (600 × 600 px). Les portails diffèrent : comparez toujours avec les consignes de votre formulaire et utilisez les champs personnalisés si elles diffèrent d'un préréglage.",
      },
      {
        heading: "Recadrer ou ajouter des marges",
        body: "Quand votre image n'a pas la même forme que la cible, le recadrage remplit le cadre et rogne les bords, en se concentrant sur la partie la plus marquante de l'image. L'ajout de marges conserve tout et remplit l'espace restant en blanc. Choisissez les marges pour les signatures sur papier afin qu'aucun trait d'encre ne soit coupé.",
      },
      {
        heading: "Signatures",
        body: "Photographiez ou numérisez votre signature sur une feuille blanche unie, avec une bonne lumière, envoyez-la, puis utilisez le préréglage de signature 3:1 ou votre propre taille. De l'encre noire sur fond blanc donne des fichiers très légers.",
      },
    ],
    faqDescription: "Questions fréquentes sur le redimensionnement d'une photo ou d'une signature pour un formulaire en ligne.",
    faq: [
      { question: "Comment redimensionner une photo en 200 × 230 pixels sous 20 Ko ?", answer: "Envoyez la photo, saisissez 200 pour la largeur, 230 pour la hauteur et 20 pour le nombre de Ko maximal, puis lancez le redimensionnement. Le message de résultat confirme la taille exacte." },
      { question: "Modifie-t-il les dimensions pour atteindre la limite en Ko ?", answer: "Non. Les dimensions restent exactement celles saisies et seule la qualité JPEG est abaissée." },
      { question: "Que se passe-t-il si la limite ne peut pas être atteinte ?", answer: "Un message vous indique la plus petite taille obtenue. Essayez des dimensions plus petites ou une limite plus élevée." },
      { question: "Le résultat est-il toujours un JPG ?", answer: "Oui, car la plupart des formulaires exigent du JPG. Le fichier porte ses dimensions dans son nom pour que vous le retrouviez facilement." },
      { question: "Puis-je conserver la forme d'origine de ma photo ?", answer: "Oui. Choisissez l'option des marges blanches et l'image entière tient dans la taille cible." },
      { question: "Cela respecte-t-il les règles de mon portail d'examen ou de visa ?", answer: "L'outil produit exactement les pixels et la taille maximale que vous saisissez. Les exigences varient selon les portails et peuvent changer : vérifiez les chiffres sur le portail lui-même." },
    ],
  },

  "batch-image-compressor": {
    title: "Compresseur d'images par lot : compressez plusieurs photos à une même taille cible",
    intro: [
      "Compresser les photos une par une est fastidieux quand un formulaire, une annonce ou un site en demande vingt sous la même limite. Envoyez tout le lot, saisissez une seule taille cible en Ko, et ConvertBrio compresse chaque image pour qu'elle y tienne.",
      "Chaque fichier est traité séparément : un fichier problématique ne bloque donc jamais les autres. Vous obtenez un rapport fichier par fichier, un téléchargement individuel pour chaque image et un ZIP de tout le lot.",
    ],
    howTo: [
      { step: "Sélectionnez vos images", detail: "Déposez jusqu'à 50 images à la fois, dans la limite de 100 Mo au total." },
      { step: "Saisissez la taille cible", detail: "Une seule limite en Ko s'applique à toutes les images." },
      { step: "Compressez", detail: "Chaque image est traitée indépendamment : la qualité est d'abord abaissée, et les dimensions ne sont réduites que si nécessaire." },
      { step: "Téléchargez", detail: "Enregistrez les fichiers un à un depuis la liste, ou téléchargez le tout dans un ZIP." },
    ],
    sections: [
      {
        heading: "Un résultat par fichier, pas du tout ou rien",
        body: "La liste des résultats affiche chaque fichier, la taille atteinte et s'il est resté dans la cible. Si une image ne peut pas passer sous la limite sans perte de qualité extrême, elle est signalée comme au-dessus de la cible au lieu de passer en silence. Un fichier illisible est signalé comme échoué, tandis que les autres se terminent normalement.",
      },
      {
        heading: "Comment chaque image est compressée",
        body: "Pour chaque image, l'outil cherche la qualité la plus élevée qui respecte votre cible dans le même format (un JPG reste un JPG, un WEBP reste un WEBP). Si même la qualité minimale est trop lourde, il réduit les dimensions par petits paliers. Les photos HEIC des iPhone sont converties en JPG, car le HEIC n'est pas un format de sortie pris en charge. Les GIF animés ne conservent que leur première image.",
      },
      {
        heading: "Quand utiliser le lot plutôt qu'un seul fichier",
        body: "Utilisez l'outil Compresser une Image pour un seul fichier. Utilisez le traitement par lot quand de nombreuses images partagent la même limite, par exemple pour envoyer une série de produits, un ensemble de documents sur un portail ou des photos par e-mail.",
      },
    ],
    faqDescription: "Questions fréquentes sur la compression de plusieurs images à une même taille.",
    faq: [
      { question: "Combien d'images puis-je compresser à la fois ?", answer: "Jusqu'à 50 images, tant que le total reste sous 100 Mo." },
      { question: "Toutes les images atteignent-elles forcément la cible ?", answer: "Non. Chaque résultat est mesuré, et toute image qui reste au-dessus de la cible est signalée pour que vous sachiez lesquelles demandent votre attention." },
      { question: "Puis-je télécharger les fichiers un par un ?", answer: "Oui. Chaque image traitée avec succès a son propre lien de téléchargement, et le ZIP est aussi disponible." },
      { question: "Que se passe-t-il si un fichier est corrompu ?", answer: "Il est signalé comme échoué pendant que les autres sont traités normalement." },
      { question: "Le format de mes images est-il modifié ?", answer: "Non, sauf pour les photos HEIC, qui deviennent des JPG." },
      { question: "Mes images sont-elles conservées ?", answer: "Vos fichiers d'origine sont supprimés juste après leur lecture ; les résultats sont supprimés par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Aucun fichier n'est relu par une personne." },
    ],
  },

  "image-to-text": {
    title: "Image en texte : extrayez le texte d'une photo ou d'une capture d'écran",
    intro: [
      "Les photos de documents, les captures d'écran, les tableaux blancs et les panneaux contiennent du texte que l'on ne peut pas sélectionner. Image en Texte utilise la reconnaissance optique de caractères (OCR) pour lire ce texte et vous le rendre sous forme de caractères que vous pouvez copier, rechercher et modifier.",
      "Envoyez une image, choisissez la langue du texte, et le texte reconnu s'affiche sur la page, prêt à être copié. Un fichier .txt brut se télécharge en même temps.",
    ],
    howTo: [
      { step: "Envoyez une image", detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF. Une photo nette et bien droite donne les meilleurs résultats." },
      { step: "Choisissez la langue", detail: "Sélectionnez la langue du texte pour une meilleure précision." },
      { step: "Extrayez le texte", detail: "La reconnaissance s'exécute automatiquement sur les serveurs de nos hébergeurs." },
      { step: "Copiez ou téléchargez", detail: "Sélectionnez le texte sur la page, utilisez Copier le texte, ou ouvrez le fichier .txt téléchargé." },
    ],
    sections: [
      {
        heading: "Ce que vous obtenez",
        body: "Le texte reconnu sous forme de caractères bruts, dans l'ordre de lecture, avec les sauts de ligne conservés. C'est du texte brut : les polices, les couleurs et la mise en page ne sont pas conservées. Si vous voulez un document modifiable avec des paragraphes, utilisez plutôt Numérisation en Word.",
      },
      {
        heading: "Obtenir des résultats précis",
        body: "La qualité de la reconnaissance suit celle de l'image. Utilisez une photo nette, bien éclairée et prise de face d'un texte imprimé, avec une résolution où les lettres restent clairement lisibles. Rognez les bordures et l'arrière-plan, et choisissez la bonne langue.",
      },
      {
        heading: "Limites à prévoir",
        body: "L'écriture manuscrite n'est pas reconnue de façon fiable. Les images de faible résolution, le flou, les reflets, l'inclinaison et les polices décoratives réduisent la précision. Les tableaux et les mises en page à plusieurs colonnes peuvent ressortir dans le désordre, car l'OCR lit ligne par ligne. Relisez toujours le résultat avant de vous y fier.",
      },
      {
        heading: "Confidentialité",
        body: "Les images sont chiffrées pendant le transfert. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine. Le texte reconnu ne s'affiche que pour vous.",
      },
    ],
    faqDescription: "Questions fréquentes sur l'extraction de texte à partir d'images grâce à l'OCR.",
    faq: [
      { question: "Comment copier le texte d'une image ?", answer: "Envoyez l'image, lancez l'extraction, puis utilisez Copier le texte sur le résultat. Le même texte se télécharge aussi en fichier .txt." },
      { question: "Cela fonctionne-t-il sur les captures d'écran ?", answer: "Oui. Les captures d'écran de texte imprimé ou affiché à l'écran sont généralement reconnues avec une très bonne précision." },
      { question: "Peut-il lire l'écriture manuscrite ?", answer: "Pas de façon fiable. L'OCR est conçu pour le texte imprimé et tapé." },
      { question: "Quelles langues sont prises en charge ?", answer: "L'anglais, le portugais, l'espagnol, le français, l'allemand, l'italien et l'indonésien." },
      { question: "Pourquoi mon texte est-il dans le désordre ?", answer: "Les tableaux et les pages à plusieurs colonnes peuvent être lus dans le mauvais ordre. Rognez l'image pour ne garder qu'une colonne à la fois." },
      { question: "Et pour un PDF ?", answer: "Utilisez Numérisation en Word pour un PDF numérisé, ou OCR de PDF pour le rendre consultable par recherche." },
    ],
  },

  "scan-to-word": {
    title: "Comment convertir un document numérisé en fichier Word modifiable ?",
    intro: [
      "Utilisez la reconnaissance optique de caractères (OCR). Un scan ou la photo d'une page est une image : Word n'a donc aucun texte à modifier tant que l'OCR n'a pas lu les lettres de l'image. Numérisation en Word s'en charge et construit un vrai document Word (DOCX) contenant le texte reconnu, que vous pouvez ensuite modifier, mettre en forme et enregistrer.",
      "Envoyez la photo d'une page ou un PDF numérisé, choisissez la langue du texte et téléchargez le DOCX. L'outil sert à extraire les mots de documents papier comme des courriers, des contrats et des formulaires imprimés. Vous obtenez le texte, pas une copie de la mise en page : prévoyez donc de relire et de refaire la mise en forme dont vous avez besoin.",
    ],
    howTo: [
      { step: "Numérisez ou photographiez la page", detail: "À plat, bien éclairée et prise de face, c'est le meilleur résultat. Une application de numérisation sur téléphone qui enregistre un PDF ou un JPG convient très bien." },
      { step: "Envoyez l'image ou le PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF ou PDF. Fichiers jusqu'à 100 Mo ; PDF jusqu'à 50 pages." },
      { step: "Choisissez la langue", detail: "Anglais, portugais, espagnol, français, allemand, italien ou indonésien. Le bon choix aide les accents et les caractères spéciaux à ressortir correctement." },
      { step: "Téléchargez le DOCX", detail: "Ouvrez-le dans Word, Google Docs ou LibreOffice, puis relisez-le en le comparant à l'original et corrigez les mots mal lus." },
    ],
    sections: [
      {
        heading: "Peut-on numériser directement dans Word ?",
        body: [
          "Pas en une seule étape sur ce site, ni dans Word lui-même : ConvertBrio ne se connecte pas à un scanner, vous créez donc d'abord le scan avec votre scanner ou une application mobile, puis vous envoyez le fichier ici.",
          "Il est utile de distinguer deux choses différentes. Insérer un scan dans Word (Insertion > Images) place la page dans le document sous forme d'image : elle s'affiche correctement, mais vous ne pouvez pas modifier les mots. Convertir le scan avec l'OCR, comme le fait cet outil, lit les caractères et vous donne du texte modifiable. Choisissez l'insertion si vous voulez seulement que la page apparaisse dans un document ; choisissez la conversion si vous devez modifier, copier ou rechercher les mots.",
        ],
      },
      {
        heading: "Avant et après : à quoi s'attendre",
        body: "Un exemple de la transformation, avec un courrier numérisé :",
        table: {
          headers: ["", "Votre scan (avant)", "Le fichier Word (après)"],
          rows: [
            ["De quoi il s'agit", "Une image d'un courrier imprimé", "Un DOCX contenant le texte du courrier"],
            ["Sélectionner une phrase", "Impossible", "Fonctionne comme n'importe quel texte Word"],
            ["Recherche avec Ctrl+F / Cmd+F", "Ne trouve rien", "Trouve toutes les occurrences"],
            ["Mise en page", "Exactement comme à l'impression", "Paragraphes simples ; une page du scan suit l'autre, avec un saut de page entre elles"],
            ["Logo de l'en-tête, tampons, photos", "Visibles", "Non inclus"],
          ],
        },
      },
      {
        heading: "Comment vérifier et corriger le résultat",
        body: "L'OCR est précis sur un texte imprimé propre, mais jamais parfait : relisez avant de vous fier au fichier. Ouvrez le DOCX à côté du scan d'origine et lisez les deux.",
        list: [
          "Vérifiez d'abord les nombres, les dates, les montants et les noms : les chiffres sont les caractères les plus souvent mal lus (0 et O, 1 et l, 5 et S).",
          "Repérez les mots coupés ou collés au mauvais endroit, et les symboles parasites là où une tache ou un pli traversait le texte.",
          "Lancez le correcteur orthographique de Word : un mot absurde signale souvent un mot mal lu.",
          "Refaites à la main les titres, le gras, les tableaux et les colonnes là où vous en avez besoin.",
        ],
      },
      {
        heading: "Ce que contient le fichier Word",
        body: "Le texte reconnu, découpé en paragraphes, une page du scan suivant l'autre. C'est un document texte modifiable, pas une copie de l'aspect de la page. Les polices, colonnes, images et tableaux de l'original ne sont pas reproduits.",
      },
      {
        heading: "Pourquoi la mise en forme change-t-elle après la conversion ?",
        body: "Parce que l'outil lit des lettres, pas une mise en page. Il reconstitue des paragraphes à partir des lignes qu'il trouve et ne reconstruit pas le design de la page. Voilà pourquoi vous verrez ces différences :",
        list: [
          "Les tableaux ressortent sous forme de lignes de texte, pas de cellules. Recréez le tableau dans Word et recopiez-y les valeurs.",
          "Les colonnes sont lues ligne par ligne : le texte de deux colonnes peut donc s'entremêler. Rognez ou numérisez une colonne à la fois si l'ordre compte.",
          "Les polices, tailles, couleurs et espacements sont remplacés par les valeurs par défaut de Word. Sélectionnez le texte et remettez-le en forme.",
          "Les images, logos et signatures ne sont pas reportés. Rajoutez-les depuis le fichier d'origine.",
          "Un scan de travers, ombré ou de faible résolution produit plus d'erreurs. Numérisez-le à nouveau à plat, à environ 300 DPI, plutôt que d'essayer de réparer un mauvais résultat.",
          "Une page couchée ou à l'envers se lit mal. Les photos sont redressées d'après l'orientation enregistrée par votre appareil, mais un scan sans cette information doit être pivoté avant l'envoi.",
        ],
      },
      {
        heading: "En cas d'erreur ou de résultat vide",
        body: "Si l'outil ne trouve aucun texte lisible, il vous le dit au lieu de renvoyer un fichier vide. Dans ce cas, essayez une image plus nette et de plus haute résolution d'un texte imprimé, redressez la page et vérifiez que la langue correspond au document. Les PDF de plus de 50 pages sont refusés ; divisez-les d'abord en plusieurs parties avec l'outil Diviser un PDF.",
      },
      {
        heading: "Numérisation en Word ou PDF en Word",
        body: "PDF en Word est fait pour les PDF qui contiennent déjà du vrai texte, et il essaie de conserver la mise en forme. Numérisation en Word est fait pour les images de texte, où il n'y a rien à convertir tant que l'OCR ne l'a pas lu. Si vous pouvez sélectionner des mots dans votre PDF, utilisez plutôt PDF en Word.",
      },
      {
        heading: "Limites",
        body: "La précision dépend du scan. L'écriture manuscrite, les scans de faible résolution ou de travers, les impressions pâles et les mises en page complexes comme les tableaux et les colonnes sont souvent mal reconnus. Prévoyez de relire chaque document. Si l'outil ne trouve aucun texte lisible, il vous le dit au lieu de renvoyer un fichier vide.",
      },
      {
        heading: "Confidentialité",
        body: "Les envois sont chiffrés pendant le transfert. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur la conversion de scans en documents Word modifiables.",
    faq: [
      { question: "Comment convertir un document numérisé en Word ?", answer: "Envoyez le scan sous forme d'image ou de PDF, choisissez la langue et téléchargez le DOCX créé par l'outil. Relisez-le en le comparant à l'original, car l'OCR peut mal lire certains caractères." },
      { question: "Puis-je numériser un document directement dans Word ?", answer: "Pas directement. Numérisez d'abord la page avec un scanner ou une application mobile, puis envoyez le fichier ici. Insérer un scan dans Word comme image le laisse non modifiable ; le convertir avec l'OCR vous donne du texte modifiable." },
      { question: "Comment convertir plusieurs photos de pages en un seul fichier Word ?", answer: "Réunissez les photos dans un seul PDF avec Image en PDF, puis envoyez ce PDF ici. Le texte de chaque page suit celui de la précédente, jusqu'à 50 pages." },
      { question: "Pourquoi mon tableau ou ma mise en colonnes a-t-il disparu ?", answer: "L'outil renvoie le texte reconnu sous forme de paragraphes simples : les tableaux et les colonnes ne sont donc pas reconstruits. Recréez-les dans Word à partir du texte." },
      { question: "Le fichier Word ressemblera-t-il à mon scan ?", answer: "Non. Vous obtenez le texte reconnu sous forme de paragraphes modifiables. La mise en page, les polices et les images ne sont pas reproduites." },
      { question: "Peut-il traiter des PDF de plusieurs pages ?", answer: "Oui, jusqu'à 50 pages. Le texte de chaque page suit celui de la précédente." },
      { question: "Lit-il l'écriture manuscrite ?", answer: "Pas de façon fiable. Il est conçu pour le texte imprimé." },
      { question: "Dois-je utiliser cet outil ou PDF en Word ?", answer: "Utilisez Numérisation en Word quand le PDF est un scan ou une photo. Utilisez PDF en Word quand vous pouvez déjà sélectionner le texte." },
      { question: "Est-ce gratuit ?", answer: "Oui, sans compte." },
    ],
  },

  "pdf-page-organizer": {
    title: "Organiseur de pages PDF : réordonnez, pivotez et supprimez des pages visuellement",
    intro: [
      "Réorganiser un PDF est plus simple quand on voit les pages. Envoyez un fichier et chaque page s'affiche sous forme de miniature. Déplacez les pages dans un nouvel ordre, pivotez celles qui ont été numérisées de côté, retirez celles dont vous n'avez pas besoin et enregistrez le résultat dans un nouveau PDF.",
      "Tout fonctionne avec des boutons comme avec le glisser-déposer : vous pouvez donc organiser vos pages au clavier ou sur un téléphone.",
    ],
    howTo: [
      { step: "Envoyez votre PDF", detail: "Les miniatures de toutes les pages s'affichent sur la page." },
      { step: "Réordonnez", detail: "Faites glisser une page vers un nouvel emplacement, ou utilisez les boutons fléchés situés dessous." },
      { step: "Pivotez ou retirez", detail: "Utilisez le bouton de rotation pour tourner une page dans le sens horaire. Utilisez le bouton de retrait pour l'écarter ; vous pouvez la rétablir avant d'enregistrer." },
      { step: "Créez le nouveau PDF", detail: "Si vous avez retiré des pages, une confirmation vous sera demandée. Votre fichier d'origine n'est jamais modifié." },
    ],
    sections: [
      {
        heading: "Un aperçu avant de valider",
        body: "Les miniatures sont dessinées dans votre navigateur : vous voyez donc exactement quelle page est laquelle avant que quoi que ce soit ne soit envoyé pour traitement. Les pages retirées restent à l'écran, estompées, et peuvent être rétablies tant que vous n'avez pas créé le fichier.",
      },
      {
        heading: "Des commandes accessibles",
        body: "Chaque action a un bouton étiqueté : déplacer avant, déplacer après, pivoter, retirer ou rétablir. Le glisser-déposer est un plus et non une obligation : l'outil fonctionne donc au clavier et avec un lecteur d'écran.",
      },
      {
        heading: "Supprimer des pages en toute sécurité",
        body: "Avant la création d'un PDF dont des pages ont été retirées, l'outil vous demande de confirmer combien de pages seront écartées. Le nouveau fichier est distinct de votre original, qui reste intact sur votre appareil.",
      },
      {
        heading: "Limites",
        body: "Fichiers jusqu'à 100 Mo. Les PDF protégés par mot de passe ne peuvent pas être ouverts. Les PDF très longs mettent plus de temps à s'afficher en aperçu, car chaque miniature est générée à tour de rôle.",
      },
    ],
    faqDescription: "Questions fréquentes sur la réorganisation, la rotation et la suppression de pages PDF.",
    faq: [
      { question: "Comment réordonner les pages d'un PDF ?", answer: "Envoyez-le, puis faites glisser les miniatures dans un nouvel ordre ou utilisez les boutons « avant » et « après », et créez le nouveau PDF." },
      { question: "Puis-je le faire sans souris ?", answer: "Oui. Chaque action a un bouton que vous pouvez atteindre et activer au clavier." },
      { question: "Puis-je annuler la suppression d'une page ?", answer: "Oui. Les pages retirées restent visibles avec un bouton Rétablir jusqu'à ce que vous créiez le fichier." },
      { question: "Mon fichier d'origine est-il modifié ?", answer: "Non. Vous obtenez un nouveau PDF et l'original reste tel quel." },
      { question: "Puis-je pivoter une seule page ?", answer: "Oui. La rotation s'applique à la page que vous choisissez, de 90 degrés à chaque clic." },
      { question: "Pourquoi mon PDF ne se charge-t-il pas ?", answer: "Les PDF protégés par mot de passe et les PDF endommagés ne peuvent pas être prévisualisés. Retirez d'abord le mot de passe." },
    ],
  },

  "metadata-remover": {
    title: "Suppresseur de métadonnées : effacez les données cachées des photos, PDF et fichiers Office",
    intro: [
      "Les fichiers transportent des informations que vous ne voyez pas. Une photo de téléphone peut enregistrer où et quand elle a été prise, et avec quel appareil. Un PDF ou un document Word peut conserver le nom de l'auteur, de l'entreprise et du logiciel utilisé. Le Suppresseur de Métadonnées efface ces données cachées avant que vous ne partagiez le fichier.",
      "Il fonctionne sur les photos, les PDF et les fichiers Word, Excel et PowerPoint, et ne change jamais le format du fichier : un JPG reste un JPG, un DOCX reste un DOCX.",
    ],
    howTo: [
      { step: "Envoyez un fichier", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX ou PPTX." },
      { step: "Consultez ce qui sera supprimé", detail: "Les catégories de chaque type de fichier sont listées sur la page." },
      { step: "Nettoyez le fichier", detail: "Les métadonnées sont supprimées et le message de résultat résume ce qui a été effacé." },
      { step: "Téléchargez la copie nettoyée", detail: "Elle conserve le nom de votre fichier, auquel -clean est ajouté." },
    ],
    sections: [
      {
        heading: "Ce qui est supprimé",
        body: "Pour les photos : les détails EXIF comme le modèle de l'appareil photo ou du téléphone, la date de prise de vue et la position GPS, ainsi que les données XMP et IPTC. Pour les PDF : le titre, l'auteur, le sujet, les mots-clés, le créateur, le producteur, les dates et les métadonnées XMP. Pour Word, Excel et PowerPoint : l'auteur, le dernier utilisateur ayant modifié le fichier, le titre, l'entreprise, les dates et les informations sur l'application.",
      },
      {
        heading: "Ce qui reste",
        body: "Le contenu visible n'est pas touché : l'image, les pages, le texte. Certaines données structurelles sont nécessaires pour qu'un fichier reste valide et sont conservées. Le contenu que vous pouvez voir ou qui se trouve dans le corps du document, comme les commentaires, les modifications suivies, les feuilles masquées ou un nom écrit sur une page, n'est pas une métadonnée et n'est pas supprimé. Vérifiez-le séparément.",
      },
      {
        heading: "Les photos gardent leur orientation et leurs couleurs",
        body: "Les photos sont pivotées dans leur orientation correcte avant que la balise d'orientation ne soit supprimée, pour qu'elles ne se retrouvent pas couchées. Le profil colorimétrique est conservé afin que les couleurs ne changent pas.",
      },
      {
        heading: "Confidentialité",
        body: "Les fichiers sont chiffrés pendant le transfert. Votre fichier d'origine est supprimé juste après sa lecture pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, généralement dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), automatiquement, sans relecture humaine.",
      },
    ],
    faqDescription: "Questions fréquentes sur la suppression des métadonnées cachées d'un fichier.",
    faq: [
      { question: "Comment supprimer la position GPS d'une photo ?", answer: "Envoyez la photo. L'outil supprime les données EXIF, y compris les coordonnées GPS, et renvoie une copie nettoyée dans le même format." },
      { question: "Supprimer les métadonnées réduit-il la qualité ?", answer: "L'image est réencodée dans son propre format : un JPG peut donc varier de façon infime. Elle n'est ni redimensionnée ni convertie." },
      { question: "Peut-il supprimer l'auteur d'un document Word ?", answer: "Oui. Il efface l'auteur, le dernier utilisateur ayant modifié le fichier, l'entreprise et le titre enregistrés dans les propriétés du document." },
      { question: "Reste-t-il quelque chose ?", answer: "Les données structurelles nécessaires à un fichier valide restent, de même que le contenu visible et des éléments comme les commentaires ou les modifications suivies à l'intérieur d'un document." },
      { question: "Quels formats sont pris en charge ?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX et PPTX." },
      { question: "Mon fichier d'origine est-il modifié ?", answer: "Non. Vous téléchargez une copie nettoyée distincte." },
    ],
  },
};
