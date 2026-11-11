import type { LocalePages, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsFr, hubUiFr } from "./fr-hubs";

const privacy: StaticPageDoc = {
  seoTitle: "Politique de confidentialité | ConvertBrio",
  title: "Politique de confidentialité",
  description:
    "Comment ConvertBrio collecte, utilise et protège vos données et vos fichiers, y compris la durée de conservation des fichiers envoyés et le moment de leur suppression.",
  eyebrow: "Dernière mise à jour : 23 septembre 2026",
  heading: "Politique de confidentialité",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio (« nous », « notre ») propose des outils en ligne pour convertir, compresser et améliorer des fichiers. ConvertBrio est exploité de manière indépendante par Subham Sharma, basé en Inde. Cette politique explique quelles informations nous collectons, comment nous les utilisons et quels choix s'offrent à vous. Elle s'applique à convertbrio.com et à tous les outils qui s'y trouvent.",
      ],
    },
    {
      heading: "1. Qui sommes-nous",
      paragraphs: [
        "ConvertBrio est exploité de manière indépendante par Subham Sharma, depuis l'Inde. Pour toute question sur la confidentialité, toute demande de rectification ou d'exercice de vos droits, écrivez à <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> ou utilisez notre <a href=\"/contact\">page de contact</a>.",
      ],
    },
    {
      heading: "2. Informations que nous collectons",
      paragraphs: ["Nous collectons :"],
      list: [
        "<strong>Les informations de compte</strong> que vous nous fournissez, comme votre nom et votre adresse e-mail.",
        "<strong>Les messages du formulaire de contact</strong>, y compris le texte et l'adresse e-mail de réponse que vous indiquez.",
        "<strong>Les données techniques</strong> telles que l'adresse IP, le type de navigateur, le type d'appareil et le système d'exploitation, collectées automatiquement pour faire fonctionner le service en toute sécurité et diagnostiquer les problèmes.",
        "<strong>Les données d'utilisation</strong>, par exemple les outils et les pages que vous consultez et la façon dont vous les utilisez.",
        "<strong>Les journaux de sécurité</strong>, utilisés pour détecter les abus, limiter le nombre de requêtes et préserver la fiabilité du service.",
      ],
    },
    {
      heading: "3. Les fichiers que vous envoyez",
      paragraphs: [
        "Les fichiers que vous envoyez sont transmis via une connexion chiffrée (HTTPS/TLS). Votre fichier d'origine est supprimé juste après avoir été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, en général dans un délai d'environ 24 heures. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), de façon automatique, sans aucune relecture humaine. Nous ne consultons, ne partageons ni n'utilisons manuellement le contenu de vos fichiers à une autre fin que de vous fournir le résultat demandé, y compris pour les outils d'IA comme l'amélioration d'image, l'agrandissement et la suppression d'arrière-plan : les fichiers envoyés servent uniquement à produire votre résultat et ne sont jamais utilisés pour entraîner ou améliorer un modèle.",
      ],
    },
    {
      heading: "4. Comment nous utilisons les informations",
      paragraphs: [
        "Nous utilisons les informations collectées pour faire fonctionner et améliorer ConvertBrio, assurer l'assistance, surveiller les abus et les incidents de sécurité, comprendre l'usage global du produit et respecter nos obligations légales. Nous ne vendons pas vos informations personnelles.",
      ],
    },
    {
      heading: "5. Cookies et technologies similaires",
      paragraphs: [
        "Nous et nos prestataires utilisons des cookies et des technologies similaires (comme le stockage local) aux fins suivantes :",
      ],
      list: [
        "<strong>Essentiels</strong> : vous garder connecté et mémoriser des préférences de base comme le thème.",
        "<strong>Analytiques</strong> : comprendre l'usage global via Google Analytics et Microsoft Clarity, afin de savoir quels outils sont utiles et où le produit rencontre des problèmes.",
        "<strong>Publicitaires</strong> : si nous affichons des publicités (par exemple via Google AdSense), Google et d'autres fournisseurs tiers utilisent des cookies, notamment le cookie publicitaire de Google, pour diffuser des annonces en fonction de vos visites précédentes sur ce site ou sur d'autres. Ces cookies permettent à Google et à ses partenaires de vous proposer des annonces personnalisées. Vous pouvez désactiver la publicité personnalisée sur <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Paramètres des annonces Google</a>, ou de façon générale sur <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener noreferrer\">aboutads.info</a>.",
      ],
    },
    {
      paragraphs: [
        "Lorsque la loi l'exige (notamment pour les visiteurs de l'EEE, du Royaume-Uni et de la Suisse), nous demandons votre consentement avant de déposer des cookies analytiques ou publicitaires non essentiels, au moyen de la bannière de consentement affichée lors de votre première visite. Vous pouvez modifier votre choix à tout moment avec le lien « Gérer les préférences de cookies » en pied de chaque page. Refuser les cookies non essentiels ne vous empêche pas d'utiliser les outils de ConvertBrio.",
      ],
    },
    {
      heading: "6. Services tiers que nous utilisons",
      paragraphs: [
        "ConvertBrio s'appuie sur les prestataires suivants, qui ne reçoivent chacun que les informations nécessaires à leur fonction :",
      ],
      list: [
        "<strong>Vercel</strong> : héberge le site et exécute les conversions de fichiers sur ses serveurs (les conversions n'ont pas lieu localement dans votre navigateur). Il conserve brièvement votre fichier d'origine dans un espace Vercel Blob privé, jusqu'à sa lecture pour la conversion, puis le supprime.",
        "<strong>Supabase</strong> : stocke les comptes et conserve temporairement le résultat converti de votre fichier jusqu'à sa suppression automatique.",
        "<strong>Google Analytics et Google Tag Manager</strong> : statistiques d'usage globales, soumises à votre choix en matière de cookies.",
        "<strong>Microsoft Clarity</strong> : statistiques d'usage globales et analyse des sessions, soumises à votre choix en matière de cookies.",
        "<strong>Google AdSense</strong> : publicité, une fois activée sur le site, soumise à votre choix en matière de cookies.",
      ],
    },
    {
      paragraphs: [
        "Nous ne vendons ni ne partageons ces informations avec un prestataire au-delà de ce qui est nécessaire à l'exercice de la fonction indiquée.",
      ],
    },
    {
      heading: "7. Base juridique et vos droits (EEE, Royaume-Uni et Suisse)",
      paragraphs: [
        "Lorsque le RGPD ou le RGPD britannique s'applique, nous traitons vos informations sur la base de l'exécution de notre contrat avec vous (fournir les outils que vous utilisez), de nos intérêts légitimes (sécurité, prévention de la fraude et amélioration du service) et de votre consentement (cookies analytiques et publicitaires). Vous avez le droit d'accéder à vos données personnelles, de les rectifier, de les supprimer, d'en limiter le traitement ou de vous y opposer, d'en recevoir une copie dans un format portable et de retirer votre consentement à tout moment, sans que cela affecte les traitements effectués avant ce retrait. Vous avez également le droit d'introduire une réclamation auprès de l'autorité de protection des données de votre pays. Pour exercer l'un de ces droits, écrivez à <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a>.",
      ],
    },
    {
      heading: "8. Droits en matière de confidentialité dans les États américains",
      paragraphs: [
        "Si vous résidez dans un État américain doté d'une loi complète sur la protection de la vie privée (comme la Californie, le Colorado, le Connecticut, la Virginie ou d'autres), vous pouvez avoir le droit de savoir, d'accéder à vos informations personnelles, de les supprimer ou de les corriger, et de vous opposer à leur vente ou à leur « partage » (notamment à des fins de publicité comportementale inter-contextes, catégorie dans laquelle certains États classent les cookies publicitaires). Nous ne vendons pas d'informations personnelles. Si nous affichons de la publicité via Google AdSense, cela peut être considéré comme du « partage » au regard de certaines lois d'État ; vous pouvez vous y opposer à tout moment via le lien de préférences de cookies en pied de page, la page <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Paramètres des annonces Google</a>, ou en envoyant depuis votre navigateur un signal Global Privacy Control (GPC), que nous traitons comme une demande d'opposition. Pour exercer ces droits, écrivez à <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a>.",
      ],
    },
    {
      heading: "9. Transferts internationaux de données",
      paragraphs: [
        "ConvertBrio est exploité depuis l'Inde et fait appel à des prestataires (dont Vercel et Supabase) susceptibles de traiter des données dans d'autres pays, notamment aux États-Unis. Lorsque nous transférons des informations personnelles à l'international, nous nous appuyons sur les garanties contractuelles et techniques de ces prestataires pour les protéger conformément à la présente politique.",
      ],
    },
    {
      heading: "10. Conservation des données",
      paragraphs: [
        "Votre fichier d'origine est supprimé juste après avoir été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, en général dans un délai d'environ 24 heures, que vous l'ayez téléchargé ou non. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), de façon automatique, sans aucune relecture humaine. Les informations de compte sont conservées tant que votre compte est actif, puis pendant une durée limitée afin de respecter des obligations légales ou de sécurité. Les journaux de sécurité et d'utilisation ne sont conservés que le temps nécessaire aux finalités décrites ci-dessus, puis supprimés ou anonymisés.",
      ],
    },
    {
      heading: "11. Protection des mineurs",
      paragraphs: [
        "ConvertBrio s'adresse aux personnes âgées de 18 ans et plus et ne vise pas les enfants. Nous ne collectons pas sciemment d'informations personnelles auprès de personnes de moins de 18 ans. Si vous pensez qu'un enfant nous a transmis des informations personnelles, écrivez à <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> et nous les supprimerons.",
      ],
    },
    {
      heading: "12. Modifications de cette politique",
      paragraphs: [
        "Nous pouvons mettre à jour cette politique de temps à autre. En cas de modification importante, nous actualiserons la date de « dernière mise à jour » en haut de cette page et, le cas échéant, vous en informerons de manière complémentaire.",
      ],
    },
    {
      heading: "13. Nous contacter",
      paragraphs: [
        "Pour toute question sur cette politique ou pour exercer vos droits en matière de confidentialité, écrivez à <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> ou passez par notre <a href=\"/contact\">page de contact</a>.",
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: "Conditions d'utilisation | ConvertBrio",
  title: "Conditions d'utilisation",
  description:
    "Les conditions qui régissent l'utilisation des outils et services gratuits de ConvertBrio, notamment l'usage acceptable, les limites et vos responsabilités.",
  eyebrow: "Dernière mise à jour : 25 août 2026",
  heading: "Conditions d'utilisation",
  blocks: [
    {
      paragraphs: [
        "Les présentes conditions d'utilisation (les « Conditions ») régissent votre accès à ConvertBrio et son utilisation. En utilisant nos outils, vous acceptez ces Conditions.",
      ],
    },
    {
      heading: "1. Utiliser ConvertBrio",
      paragraphs: [
        "Vous pouvez utiliser ConvertBrio pour convertir, compresser et améliorer des fichiers dont vous êtes propriétaire ou que vous avez le droit de traiter. Vous devez avoir au moins 18 ans pour utiliser le service.",
      ],
    },
    {
      heading: "2. Usage acceptable",
      paragraphs: [
        "Vous vous engagez à ne pas envoyer de contenu illicite, contrefaisant ou malveillant, à ne pas tenter de perturber le service et à ne pas recourir à des outils automatisés pour contourner les limites de requêtes sans notre autorisation écrite.",
      ],
    },
    {
      heading: "3. Votre contenu",
      paragraphs: [
        "Vous conservez tous les droits sur les fichiers que vous envoyez. Nous ne revendiquons aucune propriété sur votre contenu et ne le traitons que pour fournir la conversion ou l'amélioration que vous demandez.",
      ],
    },
    {
      heading: "4. Services payants",
      paragraphs: [
        "ConvertBrio ne propose actuellement aucun abonnement payant. Si des services payants sont lancés, leurs tarifs, leur fréquence de facturation, leurs conditions de renouvellement et d'annulation seront affichés avant l'achat. Ces Conditions seront mises à jour avant que des services payants ne soient disponibles.",
      ],
    },
    {
      heading: "5. Disponibilité du service",
      paragraphs: [
        "Nous nous efforçons de maintenir ConvertBrio disponible et fiable, mais ne garantissons pas un accès ininterrompu. Nous pouvons modifier ou retirer des fonctionnalités moyennant un préavis raisonnable.",
      ],
    },
    {
      heading: "6. Exclusion de garantie et limitation de responsabilité",
      paragraphs: [
        "ConvertBrio est fourni « en l'état », sans garantie d'aucune sorte. Dans toute la mesure permise par la loi, ConvertBrio ne saurait être tenu responsable des dommages indirects ou consécutifs résultant de votre utilisation du service.",
      ],
    },
    {
      heading: "7. Modifications des Conditions",
      paragraphs: [
        "Nous pouvons mettre à jour ces Conditions de temps à autre. Continuer à utiliser ConvertBrio après l'entrée en vigueur des modifications vaut acceptation des Conditions révisées.",
      ],
    },
    {
      heading: "8. Nous contacter",
      paragraphs: [
        "Pour toute question sur ces Conditions, écrivez à <a href=\"mailto:legal@convertbrio.com\">legal@convertbrio.com</a> ou passez par notre <a href=\"/contact\">page de contact</a>.",
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: "Confiance et sécurité | ConvertBrio",
  title: "Confiance et sécurité",
  description:
    "Comment ConvertBrio traite vos fichiers, comment signaler un abus ou un problème de sécurité, et comment sont gérées les corrections des guides publiés.",
  eyebrow: "Dernière mise à jour : 23 septembre 2026",
  heading: "Confiance et sécurité",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio est exploité de manière indépendante par Subham Sharma, basé en Inde. Cette page résume la façon dont nous traitons vos fichiers, la marche à suivre pour signaler un abus ou un problème de sécurité, et notre manière de gérer les corrections des guides publiés. Pour le détail juridique complet, consultez notre <a href=\"/privacy\">politique de confidentialité</a> et nos <a href=\"/terms\">conditions d'utilisation</a>.",
      ],
    },
    {
      heading: "Comment vos fichiers sont traités",
      paragraphs: [
        "Les fichiers sont transmis via une connexion chiffrée (HTTPS/TLS). Chaque conversion s'exécute comme un processus automatisé : personne n'ouvre, ne relit ni ne consulte manuellement le contenu de votre fichier, à aucun moment, y compris pour les outils d'IA comme l'amélioration d'image, l'agrandissement et la suppression d'arrière-plan, où les fichiers envoyés servent uniquement à produire votre résultat et jamais à entraîner ou améliorer un modèle.",
        "Votre fichier d'origine est supprimé juste après avoir été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, en général dans un délai d'environ 24 heures, que vous l'ayez téléchargé ou non. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase), de façon automatique, sans aucune relecture humaine.",
      ],
    },
    {
      heading: "Signaler un abus ou une utilisation détournée",
      paragraphs: [
        "Les services d'envoi de fichiers peuvent être détournés : pour traiter un contenu sur lequel on n'a pas de droits, ou pour d'autres abus. Si vous pensez qu'un fichier traité via ConvertBrio relève d'un contenu illégal, d'une atteinte au droit d'auteur ou d'une autre forme d'abus, signalez-le via <a href=\"/contact\">notre formulaire de contact</a> ou à <a href=\"mailto:abuse@convertbrio.com\">abuse@convertbrio.com</a>. Nous n'affichons jamais publiquement les noms de fichiers envoyés ni les résultats, et nous examinons les signalements directement, sans passer par une file automatisée.",
        "Des outils comme Déverrouiller un PDF sont conçus uniquement pour retirer les restrictions de niveau propriétaire des documents que vous avez déjà le droit de modifier ; consultez l'<a href=\"/tools/unlock-pdf\">outil Déverrouiller un PDF</a> et notre guide sur les <a href=\"/blog/pdf-password-restrictions-explained\">restrictions de mot de passe des PDF</a> pour savoir précisément ce que cela couvre et ce que cela ne couvre pas. Ils ne sont ni conçus ni destinés à contourner la protection de fichiers dont vous n'êtes pas propriétaire ou que vous n'êtes pas autorisé à modifier.",
      ],
    },
    {
      heading: "Signaler un problème de sécurité",
      paragraphs: [
        "Si vous découvrez une faille de sécurité dans ConvertBrio, qu'il s'agisse d'un problème de contrôle d'accès ou d'un moyen de voir les données d'un autre utilisateur, signalez-la à <a href=\"mailto:security@convertbrio.com\">security@convertbrio.com</a> ou via <a href=\"/contact\">le formulaire de contact</a> avant toute divulgation publique. Projet exploité de manière indépendante, nous ne pouvons pas promettre les délais de réponse de l'équipe sécurité d'une grande entreprise, mais chaque signalement est lu et pris au sérieux.",
      ],
    },
    {
      heading: "Corrections des guides et des articles",
      paragraphs: [
        "Les articles du <a href=\"/blog\">blog de ConvertBrio</a> sont rédigés pour être exacts et pratiques, et sont relus avant publication. Si vous repérez une erreur factuelle, une affirmation dépassée ou un point qui ne correspond plus au comportement réel d'un outil, faites-le-nous savoir via <a href=\"/contact\">le formulaire de contact</a> : les corrections sont faites directement dans l'article, sans discrétion, et la date affichée sur la page indique la dernière mise à jour substantielle.",
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: "Contact | ConvertBrio",
  title: "Contact",
  description:
    "Contactez l'équipe ConvertBrio pour une demande d'assistance, un retour ou une proposition de partenariat.",
  eyebrow: "Contact",
  heading: "Prenons contact",
  intro: "Une question, un retour ou une idée d'outil ? Nous lisons chaque message.",
  supportHeading: "Assistance générale",
  businessHeading: "Entreprises et partenariats",
  responseNote: "Nous répondons généralement sous un jour ouvré.",
  nameLabel: "Nom",
  emailLabel: "E-mail",
  subjectLabel: "Objet",
  messageLabel: "Message",
  sendLabel: "Envoyer le message",
};

const blogIndex: BlogIndexDoc = {
  seoTitle: "Guides sur les fichiers, formats et conversions | ConvertBrio",
  title: "Blog",
  description:
    "Des guides pratiques sur les formats de fichiers, les PDF, les images et la conversion de documents : comment ils fonctionnent, ce qui les alourdit ou les abîme vraiment, et comment résoudre les problèmes courants.",
  eyebrow: "Blog",
  heading: "Guides sur les fichiers, les formats et la conversion",
  intro:
    "Des réponses concrètes aux problèmes de fichiers que l'on rencontre vraiment, sans fioritures ni remplissage.",
  englishNote: "Nos guides sont actuellement publiés en anglais.",
  empty: "Aucun article pour le moment, revenez bientôt.",
  dateLocale: "fr-FR",
};

export const pagesFr: LocalePages | undefined = {
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsFr,
  hubUi: hubUiFr,
};
