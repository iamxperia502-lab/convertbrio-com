import type { Locale } from "./i18n";

export interface ToolFormStrings {
  dropSingle: string;
  dropMultiple: string;
  sizeLimit: string;
  sizeLimitTotal: string;
  uploading: string;
  processing: string;
  chooseFirst: string;
  genericError: string;
  errorNetwork: string;
  errorUpload: string;
  errorTooLarge: string;
  errorUnsupported: string;
  errorConversion: string;
  errorDownload: string;
  feedbackQuestion: string;
  feedbackYes: string;
  feedbackNo: string;
  feedbackReasonLabel: string;
  feedbackThanks: string;
  feedbackReasons: { quality: string; formatting: string; size: string; download: string; other: string };
  downloadResult: string;
  /** `{file}` is replaced with the filename. */
  doneTemplate: string;
  /** `{file}` is replaced with the filename. */
  downloadTemplate: string;
  /** `{n}` is replaced with the count. */
  filesSelectedTemplate: string;
  reupload: string;
  convert: string;
  replaceHint: string;
  convertTo: string;
  targetSizeKb: string;
  targetSizeHint: string;
  quality: string;
  qualityHint: string;
  width: string;
  height: string;
  left: string;
  top: string;
  rotate: string;
}

export interface UIStrings {
  nav: {
    convert: string;
    compress: string;
    pdf: string;
    image: string;
    document: string;
    ai: string;
    allTools: string;
    blog: string;
    signIn: string;
    getStarted: string;
    dashboard: string;
    signOut: string;
    primaryLabel: string;
    skipToContent: string;
    myWork: string;
    openMenu: string;
    closeMenu: string;
    themeDark: string;
    themeLight: string;
    homeAria: string;
    otherWork: string;
    mobileLabel: string;
    languageLabel: string;
  };
  footer: {
    tagline: string;
    convert: string;
    compress: string;
    tools: string;
    company: string;
    legal: string;
    about: string;
    blog: string;
    contact: string;
    privacy: string;
    terms: string;
    trust: string;
    rights: string;
    manageCookies: string;
  };
  tool: {
    eyebrowTool: string;
    eyebrowGuide: string;
    faqSuffix: string;
    relatedHeading: string;
    howToHeading: string;
    oneClickInDev: string;
    comingSoon: string;
    browseOtherTools: string;
    form: ToolFormStrings;
  };
}

export interface ToolMeta {
  name: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      convert: "Convert", compress: "Compress", pdf: "PDF Tools", image: "Image Tools",
      document: "Document Tools", ai: "AI Tools", allTools: "All Tools", blog: "Blog",
      signIn: "Sign In", getStarted: "Get Started", dashboard: "Dashboard", signOut: "Sign Out",
      primaryLabel: "Primary", mobileLabel: "Mobile", languageLabel: "Language",
      skipToContent: "Skip to content", myWork: "My Work", openMenu: "Open menu", closeMenu: "Close menu",
      themeDark: "Switch to dark mode", themeLight: "Switch to light mode", homeAria: "ConvertBrio home", otherWork: "Check out my other work",
    },
    footer: {
      tagline: "Convert. Compress. Enhance.", convert: "Convert", compress: "Compress",
      tools: "Tools", company: "Company", legal: "Legal", about: "About", blog: "Blog",
      contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Service",
      trust: "Trust & Security", rights: "All rights reserved.", manageCookies: "Manage cookie preferences",
    },
    tool: {
      eyebrowTool: "Tool", eyebrowGuide: "Guide", faqSuffix: "FAQ", relatedHeading: "Related Tools",
      howToHeading: "How to use this tool", oneClickInDev: "One-click tool in development",
      comingSoon: "Coming soon", browseOtherTools: "Browse other tools",
      form: {
        dropSingle: "Drop a file here, or browse", dropMultiple: "Drop files here, or browse",
        sizeLimit: "Up to 100 MB", sizeLimitTotal: "Up to 100 MB total",
        uploading: "Uploading…", processing: "Processing…", chooseFirst: "Choose a file first.",
        genericError: "Something went wrong. Try again.", downloadResult: "Download result",
        errorNetwork: "We couldn't reach the upload service. Check your connection, turn off any content blocker or tracking protection for this site, and try again.",
        errorUpload: "The upload didn't finish. Please try again; if it keeps failing, try another browser or disable content blockers for this site.",
        errorTooLarge: "This file is larger than the 100 MB limit. Choose a smaller file.",
        errorUnsupported: "This file type isn't supported by this tool. Check the accepted formats and try again.",
        errorConversion: "We couldn't convert this file. Please try again, or try a different file.",
        errorDownload: "The download couldn't start. Use the Download button below.",
        feedbackQuestion: "Did this result work for you?", feedbackYes: "Yes", feedbackNo: "No",
        feedbackReasonLabel: "What went wrong?", feedbackThanks: "Thanks for the feedback.",
        feedbackReasons: { quality: "Quality", formatting: "Formatting", size: "File size", download: "Download", other: "Other" },
        doneTemplate: "Done, {file} downloaded. If it didn't start, use the button below.",
        downloadTemplate: "Download {file}", filesSelectedTemplate: "{n} files selected",
        reupload: "Reupload", convert: "Convert", replaceHint: "Drop or browse to replace",
        convertTo: "Convert to", targetSizeKb: "Target size (KB)",
        targetSizeHint: "We'll adjust quality, and dimensions if needed, to fit this limit. Leave blank to use the quality slider instead.",
        quality: "Quality (used if no target size)", qualityHint: "",
        width: "Width (px)", height: "Height (px)", left: "Left (px)", top: "Top (px)", rotate: "Rotate",
      },
    },
  },

  pt: {
    nav: {
      convert: "Converter", compress: "Comprimir", pdf: "PDF", image: "Imagem",
      document: "Documento", ai: "IA", allTools: "Todas as ferramentas", blog: "Blog",
      signIn: "Entrar", getStarted: "Começar", dashboard: "Painel", signOut: "Sair",
      primaryLabel: "Principal", mobileLabel: "Móvel", languageLabel: "Idioma",
      skipToContent: "Ir para o conteúdo", myWork: "Meu trabalho", openMenu: "Abrir menu", closeMenu: "Fechar menu",
      themeDark: "Mudar para o modo escuro", themeLight: "Mudar para o modo claro", homeAria: "Página inicial do ConvertBrio", otherWork: "Conheça meus outros trabalhos",
    },
    footer: {
      tagline: "Converta. Comprima. Melhore.", convert: "Converter", compress: "Comprimir",
      tools: "Ferramentas", company: "Empresa", legal: "Jurídico", about: "Sobre", blog: "Blog",
      contact: "Contato", privacy: "Política de Privacidade", terms: "Termos de Serviço",
      trust: "Confiança e Segurança", rights: "Todos os direitos reservados.", manageCookies: "Gerenciar preferências de cookies",
    },
    tool: {
      eyebrowTool: "Ferramenta", eyebrowGuide: "Guia", faqSuffix: "Perguntas frequentes",
      relatedHeading: "Ferramentas relacionadas", howToHeading: "Como usar esta ferramenta",
      oneClickInDev: "Ferramenta automática em desenvolvimento", comingSoon: "Em breve",
      browseOtherTools: "Ver outras ferramentas",
      form: {
        dropSingle: "Solte um arquivo aqui ou procure", dropMultiple: "Solte os arquivos aqui ou procure",
        sizeLimit: "Até 100 MB", sizeLimitTotal: "Até 100 MB no total",
        uploading: "Enviando…", processing: "Processando…", chooseFirst: "Escolha um arquivo primeiro.",
        genericError: "Algo deu errado. Tente novamente.", downloadResult: "Baixar resultado",
        errorNetwork: "Não foi possível acessar o serviço de envio. Verifique sua conexão, desative bloqueadores de conteúdo ou proteção contra rastreamento neste site e tente novamente.",
        errorUpload: "O envio não foi concluído. Tente novamente; se continuar falhando, use outro navegador ou desative bloqueadores de conteúdo neste site.",
        errorTooLarge: "Este arquivo excede o limite de 100 MB. Escolha um arquivo menor.",
        errorUnsupported: "Este tipo de arquivo não é compatível com esta ferramenta. Confira os formatos aceitos e tente novamente.",
        errorConversion: "Não foi possível converter este arquivo. Tente novamente ou use outro arquivo.",
        errorDownload: "Não foi possível iniciar o download. Use o botão de download abaixo.",
        feedbackQuestion: "Este resultado funcionou para você?", feedbackYes: "Sim", feedbackNo: "Não",
        feedbackReasonLabel: "O que deu errado?", feedbackThanks: "Obrigado pelo feedback.",
        feedbackReasons: { quality: "Qualidade", formatting: "Formatação", size: "Tamanho do arquivo", download: "Download", other: "Outro" },
        doneTemplate: "Pronto, {file} baixado. Se não começou, use o botão abaixo.",
        downloadTemplate: "Baixar {file}", filesSelectedTemplate: "{n} arquivos selecionados",
        reupload: "Reenviar", convert: "Converter", replaceHint: "Solte ou procure para substituir",
        convertTo: "Converter para", targetSizeKb: "Tamanho alvo (KB)",
        targetSizeHint: "Ajustamos a qualidade, e as dimensões, se necessário, para caber neste limite. Deixe em branco para usar o controle de qualidade.",
        quality: "Qualidade (usada se não houver tamanho alvo)", qualityHint: "",
        width: "Largura (px)", height: "Altura (px)", left: "Esquerda (px)", top: "Topo (px)", rotate: "Girar",
      },
    },
  },

  es: {
    nav: {
      convert: "Convertir", compress: "Comprimir", pdf: "PDF", image: "Imagen",
      document: "Documento", ai: "IA", allTools: "Todas las herramientas", blog: "Blog",
      signIn: "Iniciar sesión", getStarted: "Empezar", dashboard: "Panel", signOut: "Cerrar sesión",
      primaryLabel: "Principal", mobileLabel: "Móvil", languageLabel: "Idioma",
      skipToContent: "Saltar al contenido", myWork: "Mi trabajo", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
      themeDark: "Cambiar al modo oscuro", themeLight: "Cambiar al modo claro", homeAria: "Inicio de ConvertBrio", otherWork: "Descubre mis otros trabajos",
    },
    footer: {
      tagline: "Convierte. Comprime. Mejora.", convert: "Convertir", compress: "Comprimir",
      tools: "Herramientas", company: "Empresa", legal: "Legal", about: "Acerca de", blog: "Blog",
      contact: "Contacto", privacy: "Política de privacidad", terms: "Términos del servicio",
      trust: "Confianza y seguridad", rights: "Todos los derechos reservados.", manageCookies: "Gestionar preferencias de cookies",
    },
    tool: {
      eyebrowTool: "Herramienta", eyebrowGuide: "Guía", faqSuffix: "Preguntas frecuentes",
      relatedHeading: "Herramientas relacionadas", howToHeading: "Cómo usar esta herramienta",
      oneClickInDev: "Herramienta automática en desarrollo", comingSoon: "Próximamente",
      browseOtherTools: "Ver otras herramientas",
      form: {
        dropSingle: "Suelta un archivo aquí o examina", dropMultiple: "Suelta los archivos aquí o examina",
        sizeLimit: "Hasta 100 MB", sizeLimitTotal: "Hasta 100 MB en total",
        uploading: "Subiendo…", processing: "Procesando…", chooseFirst: "Elige un archivo primero.",
        genericError: "Algo salió mal. Inténtalo de nuevo.", downloadResult: "Descargar resultado",
        errorNetwork: "No pudimos conectar con el servicio de subida. Revisa tu conexión, desactiva bloqueadores de contenido o la protección contra rastreo en este sitio e inténtalo de nuevo.",
        errorUpload: "La subida no se completó. Inténtalo de nuevo; si sigue fallando, prueba otro navegador o desactiva los bloqueadores de contenido en este sitio.",
        errorTooLarge: "Este archivo supera el límite de 100 MB. Elige un archivo más pequeño.",
        errorUnsupported: "Esta herramienta no admite este tipo de archivo. Revisa los formatos aceptados e inténtalo de nuevo.",
        errorConversion: "No pudimos convertir este archivo. Inténtalo de nuevo o prueba con otro archivo.",
        errorDownload: "No se pudo iniciar la descarga. Usa el botón de descarga de abajo.",
        feedbackQuestion: "¿Te sirvió este resultado?", feedbackYes: "Sí", feedbackNo: "No",
        feedbackReasonLabel: "¿Qué salió mal?", feedbackThanks: "Gracias por tus comentarios.",
        feedbackReasons: { quality: "Calidad", formatting: "Maquetación", size: "Tamaño del archivo", download: "Descarga", other: "Otro" },
        doneTemplate: "Listo, {file} descargado. Si no empezó, usa el botón de abajo.",
        downloadTemplate: "Descargar {file}", filesSelectedTemplate: "{n} archivos seleccionados",
        reupload: "Volver a subir", convert: "Convertir", replaceHint: "Suelta o examina para reemplazar",
        convertTo: "Convertir a", targetSizeKb: "Tamaño objetivo (KB)",
        targetSizeHint: "Ajustamos la calidad, y las dimensiones si hace falta, para caber en este límite. Déjalo en blanco para usar el control de calidad.",
        quality: "Calidad (se usa si no hay tamaño objetivo)", qualityHint: "",
        width: "Ancho (px)", height: "Alto (px)", left: "Izquierda (px)", top: "Arriba (px)", rotate: "Girar",
      },
    },
  },

  fr: {
    nav: {
      convert: "Convertir", compress: "Compresser", pdf: "PDF", image: "Image",
      document: "Document", ai: "IA", allTools: "Tous les outils", blog: "Blog",
      signIn: "Se connecter", getStarted: "Commencer", dashboard: "Tableau de bord", signOut: "Se déconnecter",
      primaryLabel: "Principal", mobileLabel: "Mobile", languageLabel: "Langue",
      skipToContent: "Aller au contenu", myWork: "Mon travail", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
      themeDark: "Passer en mode sombre", themeLight: "Passer en mode clair", homeAria: "Accueil ConvertBrio", otherWork: "Découvrez mes autres projets",
    },
    footer: {
      tagline: "Convertir. Compresser. Améliorer.", convert: "Convertir", compress: "Compresser",
      tools: "Outils", company: "Entreprise", legal: "Mentions légales", about: "À propos", blog: "Blog",
      contact: "Contact", privacy: "Politique de confidentialité", terms: "Conditions d'utilisation",
      trust: "Confiance et sécurité", rights: "Tous droits réservés.", manageCookies: "Gérer les préférences de cookies",
    },
    tool: {
      eyebrowTool: "Outil", eyebrowGuide: "Guide", faqSuffix: "FAQ",
      relatedHeading: "Outils associés", howToHeading: "Comment utiliser cet outil",
      oneClickInDev: "Outil automatique en développement", comingSoon: "Bientôt disponible",
      browseOtherTools: "Voir les autres outils",
      form: {
        dropSingle: "Déposez un fichier ici, ou parcourez", dropMultiple: "Déposez les fichiers ici, ou parcourez",
        sizeLimit: "Jusqu'à 100 Mo", sizeLimitTotal: "Jusqu'à 100 Mo au total",
        uploading: "Envoi…", processing: "Traitement…", chooseFirst: "Choisissez d'abord un fichier.",
        genericError: "Une erreur s'est produite. Réessayez.", downloadResult: "Télécharger le résultat",
        errorNetwork: "Impossible de joindre le service d'envoi. Vérifiez votre connexion, désactivez les bloqueurs de contenu ou la protection contre le pistage pour ce site, puis réessayez.",
        errorUpload: "L'envoi n'a pas abouti. Réessayez ; si le problème persiste, essayez un autre navigateur ou désactivez les bloqueurs de contenu pour ce site.",
        errorTooLarge: "Ce fichier dépasse la limite de 100 Mo. Choisissez un fichier plus petit.",
        errorUnsupported: "Ce type de fichier n'est pas pris en charge par cet outil. Vérifiez les formats acceptés et réessayez.",
        errorConversion: "Nous n'avons pas pu convertir ce fichier. Réessayez ou essayez un autre fichier.",
        errorDownload: "Le téléchargement n'a pas pu démarrer. Utilisez le bouton de téléchargement ci-dessous.",
        feedbackQuestion: "Ce résultat vous convient-il ?", feedbackYes: "Oui", feedbackNo: "Non",
        feedbackReasonLabel: "Qu'est-ce qui n'a pas fonctionné ?", feedbackThanks: "Merci pour votre retour.",
        feedbackReasons: { quality: "Qualité", formatting: "Mise en forme", size: "Taille du fichier", download: "Téléchargement", other: "Autre" },
        doneTemplate: "Terminé, {file} téléchargé. Si le téléchargement n'a pas démarré, utilisez le bouton ci-dessous.",
        downloadTemplate: "Télécharger {file}", filesSelectedTemplate: "{n} fichiers sélectionnés",
        reupload: "Renvoyer", convert: "Convertir", replaceHint: "Déposez ou parcourez pour remplacer",
        convertTo: "Convertir en", targetSizeKb: "Taille cible (Ko)",
        targetSizeHint: "Nous ajustons la qualité, et les dimensions si nécessaire, pour respecter cette limite. Laissez vide pour utiliser le curseur de qualité.",
        quality: "Qualité (utilisée sans taille cible)", qualityHint: "",
        width: "Largeur (px)", height: "Hauteur (px)", left: "Gauche (px)", top: "Haut (px)", rotate: "Pivoter",
      },
    },
  },

  de: {
    nav: {
      convert: "Konvertieren", compress: "Komprimieren", pdf: "PDF", image: "Bild",
      document: "Dokument", ai: "KI", allTools: "Alle Tools", blog: "Blog",
      signIn: "Anmelden", getStarted: "Loslegen", dashboard: "Dashboard", signOut: "Abmelden",
      primaryLabel: "Hauptmenü", mobileLabel: "Mobil", languageLabel: "Sprache",
      skipToContent: "Zum Inhalt springen", myWork: "Meine Arbeit", openMenu: "Menü öffnen", closeMenu: "Menü schließen",
      themeDark: "Zum dunklen Modus wechseln", themeLight: "Zum hellen Modus wechseln", homeAria: "ConvertBrio Startseite", otherWork: "Meine anderen Projekte ansehen",
    },
    footer: {
      tagline: "Konvertieren. Komprimieren. Verbessern.", convert: "Konvertieren", compress: "Komprimieren",
      tools: "Tools", company: "Unternehmen", legal: "Rechtliches", about: "Über uns", blog: "Blog",
      contact: "Kontakt", privacy: "Datenschutzerklärung", terms: "Nutzungsbedingungen",
      trust: "Vertrauen & Sicherheit", rights: "Alle Rechte vorbehalten.", manageCookies: "Cookie-Einstellungen verwalten",
    },
    tool: {
      eyebrowTool: "Tool", eyebrowGuide: "Anleitung", faqSuffix: "FAQ",
      relatedHeading: "Verwandte Tools", howToHeading: "So verwendest du dieses Tool",
      oneClickInDev: "Ein-Klick-Tool in Entwicklung", comingSoon: "Demnächst",
      browseOtherTools: "Andere Tools ansehen",
      form: {
        dropSingle: "Datei hier ablegen oder durchsuchen", dropMultiple: "Dateien hier ablegen oder durchsuchen",
        sizeLimit: "Bis zu 100 MB", sizeLimitTotal: "Bis zu 100 MB insgesamt",
        uploading: "Wird hochgeladen…", processing: "Wird verarbeitet…", chooseFirst: "Wähle zuerst eine Datei.",
        genericError: "Etwas ist schiefgelaufen. Bitte erneut versuchen.", downloadResult: "Ergebnis herunterladen",
        errorNetwork: "Der Upload-Dienst war nicht erreichbar. Prüfe deine Verbindung, deaktiviere Inhaltsblocker oder Tracking-Schutz für diese Website und versuche es erneut.",
        errorUpload: "Der Upload wurde nicht abgeschlossen. Versuche es erneut; wenn es weiter fehlschlägt, nutze einen anderen Browser oder deaktiviere Inhaltsblocker für diese Website.",
        errorTooLarge: "Diese Datei überschreitet das Limit von 100 MB. Wähle eine kleinere Datei.",
        errorUnsupported: "Dieser Dateityp wird von diesem Tool nicht unterstützt. Prüfe die zulässigen Formate und versuche es erneut.",
        errorConversion: "Diese Datei konnte nicht konvertiert werden. Versuche es erneut oder nutze eine andere Datei.",
        errorDownload: "Der Download konnte nicht gestartet werden. Nutze die Download-Schaltfläche unten.",
        feedbackQuestion: "Hat dir dieses Ergebnis geholfen?", feedbackYes: "Ja", feedbackNo: "Nein",
        feedbackReasonLabel: "Was ist schiefgelaufen?", feedbackThanks: "Danke für dein Feedback.",
        feedbackReasons: { quality: "Qualität", formatting: "Formatierung", size: "Dateigröße", download: "Download", other: "Sonstiges" },
        doneTemplate: "Fertig, {file} heruntergeladen. Falls nicht gestartet, nutze den Button unten.",
        downloadTemplate: "{file} herunterladen", filesSelectedTemplate: "{n} Dateien ausgewählt",
        reupload: "Erneut hochladen", convert: "Konvertieren", replaceHint: "Ablegen oder durchsuchen zum Ersetzen",
        convertTo: "Konvertieren zu", targetSizeKb: "Zielgröße (KB)",
        targetSizeHint: "Wir passen Qualität, und bei Bedarf die Abmessungen, an, damit die Datei unter dieses Limit passt. Leer lassen, um den Qualitätsregler zu nutzen.",
        quality: "Qualität (ohne Zielgröße verwendet)", qualityHint: "",
        width: "Breite (px)", height: "Höhe (px)", left: "Links (px)", top: "Oben (px)", rotate: "Drehen",
      },
    },
  },

  it: {
    nav: {
      convert: "Converti", compress: "Comprimi", pdf: "PDF", image: "Immagine",
      document: "Documento", ai: "IA", allTools: "Tutti gli strumenti", blog: "Blog",
      signIn: "Accedi", getStarted: "Inizia", dashboard: "Dashboard", signOut: "Esci",
      primaryLabel: "Principale", mobileLabel: "Mobile", languageLabel: "Lingua",
      skipToContent: "Vai al contenuto", myWork: "Il mio lavoro", openMenu: "Apri il menu", closeMenu: "Chiudi il menu",
      themeDark: "Passa alla modalità scura", themeLight: "Passa alla modalità chiara", homeAria: "Home di ConvertBrio", otherWork: "Scopri i miei altri lavori",
    },
    footer: {
      tagline: "Converti. Comprimi. Migliora.", convert: "Converti", compress: "Comprimi",
      tools: "Strumenti", company: "Azienda", legal: "Note legali", about: "Chi siamo", blog: "Blog",
      contact: "Contatti", privacy: "Informativa sulla privacy", terms: "Termini di servizio",
      trust: "Fiducia e sicurezza", rights: "Tutti i diritti riservati.", manageCookies: "Gestisci le preferenze dei cookie",
    },
    tool: {
      eyebrowTool: "Strumento", eyebrowGuide: "Guida", faqSuffix: "Domande frequenti",
      relatedHeading: "Strumenti correlati", howToHeading: "Come usare questo strumento",
      oneClickInDev: "Strumento automatico in sviluppo", comingSoon: "In arrivo",
      browseOtherTools: "Vedi altri strumenti",
      form: {
        dropSingle: "Trascina un file qui o sfoglia", dropMultiple: "Trascina i file qui o sfoglia",
        sizeLimit: "Fino a 100 MB", sizeLimitTotal: "Fino a 100 MB in totale",
        uploading: "Caricamento…", processing: "Elaborazione…", chooseFirst: "Scegli prima un file.",
        genericError: "Qualcosa è andato storto. Riprova.", downloadResult: "Scarica il risultato",
        errorNetwork: "Impossibile raggiungere il servizio di caricamento. Controlla la connessione, disattiva i blocchi dei contenuti o la protezione dal tracciamento per questo sito e riprova.",
        errorUpload: "Il caricamento non è stato completato. Riprova; se continua a fallire, usa un altro browser o disattiva i blocchi dei contenuti per questo sito.",
        errorTooLarge: "Questo file supera il limite di 100 MB. Scegli un file più piccolo.",
        errorUnsupported: "Questo tipo di file non è supportato da questo strumento. Controlla i formati accettati e riprova.",
        errorConversion: "Non siamo riusciti a convertire questo file. Riprova o usa un altro file.",
        errorDownload: "Impossibile avviare il download. Usa il pulsante di download qui sotto.",
        feedbackQuestion: "Questo risultato ha funzionato per te?", feedbackYes: "Sì", feedbackNo: "No",
        feedbackReasonLabel: "Cosa non ha funzionato?", feedbackThanks: "Grazie per il feedback.",
        feedbackReasons: { quality: "Qualità", formatting: "Formattazione", size: "Dimensione del file", download: "Download", other: "Altro" },
        doneTemplate: "Fatto, {file} scaricato. Se non è partito, usa il pulsante qui sotto.",
        downloadTemplate: "Scarica {file}", filesSelectedTemplate: "{n} file selezionati",
        reupload: "Ricarica", convert: "Converti", replaceHint: "Trascina o sfoglia per sostituire",
        convertTo: "Converti in", targetSizeKb: "Dimensione target (KB)",
        targetSizeHint: "Regoliamo la qualità, e le dimensioni se serve, per rientrare in questo limite. Lascia vuoto per usare il cursore della qualità.",
        quality: "Qualità (usata senza dimensione target)", qualityHint: "",
        width: "Larghezza (px)", height: "Altezza (px)", left: "Sinistra (px)", top: "Alto (px)", rotate: "Ruota",
      },
    },
  },

  id: {
    nav: {
      convert: "Konversi", compress: "Kompres", pdf: "PDF", image: "Gambar",
      document: "Dokumen", ai: "AI", allTools: "Semua alat", blog: "Blog",
      signIn: "Masuk", getStarted: "Mulai", dashboard: "Dasbor", signOut: "Keluar",
      primaryLabel: "Utama", mobileLabel: "Seluler", languageLabel: "Bahasa",
      skipToContent: "Lompat ke konten", myWork: "Karya saya", openMenu: "Buka menu", closeMenu: "Tutup menu",
      themeDark: "Beralih ke mode gelap", themeLight: "Beralih ke mode terang", homeAria: "Beranda ConvertBrio", otherWork: "Lihat karya saya yang lain",
    },
    footer: {
      tagline: "Konversi. Kompres. Tingkatkan.", convert: "Konversi", compress: "Kompres",
      tools: "Alat", company: "Perusahaan", legal: "Hukum", about: "Tentang", blog: "Blog",
      contact: "Kontak", privacy: "Kebijakan Privasi", terms: "Ketentuan Layanan",
      trust: "Kepercayaan & Keamanan", rights: "Semua hak dilindungi.", manageCookies: "Kelola preferensi cookie",
    },
    tool: {
      eyebrowTool: "Alat", eyebrowGuide: "Panduan", faqSuffix: "Pertanyaan umum",
      relatedHeading: "Alat terkait", howToHeading: "Cara memakai alat ini",
      oneClickInDev: "Alat satu klik sedang dikembangkan", comingSoon: "Segera hadir",
      browseOtherTools: "Lihat alat lain",
      form: {
        dropSingle: "Letakkan file di sini, atau jelajahi", dropMultiple: "Letakkan file di sini, atau jelajahi",
        sizeLimit: "Hingga 100 MB", sizeLimitTotal: "Hingga 100 MB total",
        uploading: "Mengunggah…", processing: "Memproses…", chooseFirst: "Pilih file dulu.",
        genericError: "Terjadi kesalahan. Coba lagi.", downloadResult: "Unduh hasil",
        errorNetwork: "Layanan unggah tidak dapat dijangkau. Periksa koneksi Anda, nonaktifkan pemblokir konten atau perlindungan pelacakan untuk situs ini, lalu coba lagi.",
        errorUpload: "Unggahan tidak selesai. Coba lagi; jika terus gagal, gunakan browser lain atau nonaktifkan pemblokir konten untuk situs ini.",
        errorTooLarge: "File ini melebihi batas 100 MB. Pilih file yang lebih kecil.",
        errorUnsupported: "Jenis file ini tidak didukung oleh alat ini. Periksa format yang diterima lalu coba lagi.",
        errorConversion: "Kami tidak dapat mengonversi file ini. Coba lagi atau gunakan file lain.",
        errorDownload: "Unduhan tidak dapat dimulai. Gunakan tombol unduh di bawah.",
        feedbackQuestion: "Apakah hasil ini berhasil untuk Anda?", feedbackYes: "Ya", feedbackNo: "Tidak",
        feedbackReasonLabel: "Apa yang salah?", feedbackThanks: "Terima kasih atas masukan Anda.",
        feedbackReasons: { quality: "Kualitas", formatting: "Tata letak", size: "Ukuran file", download: "Unduhan", other: "Lainnya" },
        doneTemplate: "Selesai, {file} diunduh. Jika tidak mulai, gunakan tombol di bawah.",
        downloadTemplate: "Unduh {file}", filesSelectedTemplate: "{n} file dipilih",
        reupload: "Unggah ulang", convert: "Konversi", replaceHint: "Letakkan atau jelajahi untuk mengganti",
        convertTo: "Konversi ke", targetSizeKb: "Ukuran target (KB)",
        targetSizeHint: "Kami menyesuaikan kualitas, dan dimensi jika perlu, agar muat di bawah batas ini. Kosongkan untuk memakai penggeser kualitas.",
        quality: "Kualitas (dipakai jika tanpa ukuran target)", qualityHint: "",
        width: "Lebar (px)", height: "Tinggi (px)", left: "Kiri (px)", top: "Atas (px)", rotate: "Putar",
      },
    },
  },
};

// Per-locale tool name / description / SEO title & description. Behaviour
// fields (kind, operation, accept, …) always come from data/tools.ts.
export { toolMetaByLocale } from "./i18n-tool-meta-merged";
