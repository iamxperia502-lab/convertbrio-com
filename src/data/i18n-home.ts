import type { Locale } from "./i18n";

export interface HomeContent {
  seoTitle: string;
  description: string;
  /** Meta description for the localized /all-tools page — distinct from the homepage `description` above. */
  allToolsDescription: string;
  badge: string;
  heroTitle: string;
  heroIntro: string;
  ctaPrimary: string;
  ctaSecondary: string;
  popularHeading: string;
  popularSub: string;
  popularPanelLabel: string;
  categoriesHeading: string;
  categories: { id: string; title: string; desc: string }[];
  seoHeading: string;
  seoIntro: string;
  seoBlocks: { h3: string; html: string }[];
  faqHeading: string;
  faqSub: string;
  faq: { question: string; answer: string }[];
  ctaHeading: string;
  ctaSub: string;
  /** slug -> one-line blurb for the popular-tools grid */
  blurbs: Record<string, string>;
  extraCatalogueNote: string;
}

// Slugs shown in the homepage "popular tools" grid (all are localised).
export const HOME_POPULAR_SLUGS = [
  "compress-pdf",
  "compress-image",
  "merge-pdf",
  "pdf-to-word",
  "word-to-pdf",
  "jpg-to-pdf",
  "pdf-to-jpg",
  "ocr-pdf",
] as const;

const link = (href: string, text: string) =>
  `<a href="${href}" class="font-medium text-brand-600 underline underline-offset-2">${text}</a>`;

export const homepageByLocale: Record<Exclude<Locale, "en">, HomeContent> = {
  pt: {
    seoTitle: "ConvertBrio: Conversor e Compressor de Arquivos Online Grátis",
    description:
      "Converta, comprima e edite imagens, PDFs e documentos online, grátis, privado, sem cadastro. Inclui um compressor de imagem que atinge um tamanho exato em KB.",
    allToolsDescription:
      "Veja todas as ferramentas do ConvertBrio para converter, comprimir e melhorar imagens, PDFs e documentos.",
    badge: "Grátis, privado, sem cadastro",
    heroTitle: "Converta, comprima e edite seus arquivos, direto no navegador.",
    heroIntro:
      "Imagens, PDFs e documentos, sem instalar nada. Precisa de uma foto num tamanho exato em KB para um formulário ou portal? Nosso compressor atinge o KB alvo sem tentativa e erro.",
    ctaPrimary: "Comprimir PDF",
    ctaSecondary: "Ver todas as ferramentas",
    popularHeading: "As ferramentas mais usadas",
    popularSub: "Sem cadastro, sem marca d'água, original apagado logo após a leitura e resultado em cerca de 24 horas.",
    popularPanelLabel: "Ferramentas populares",
    categoriesHeading: "Por categoria",
    categories: [
      { id: "pdf", title: "Ferramentas PDF", desc: "Juntar, dividir, comprimir e converter PDFs." },
      { id: "image", title: "Ferramentas de imagem", desc: "Converter, redimensionar e comprimir imagens." },
      { id: "document", title: "Ferramentas de documento", desc: "Word ↔ PDF e compressão de Office." },
    ],
    seoHeading: "ConvertBrio: um conversor grátis para imagens, PDFs e documentos",
    seoIntro:
      "O ConvertBrio é um conversor de arquivos online e gratuito, feito para quem precisa converter, comprimir ou organizar um arquivo sem instalar programa nem criar conta. Envie do navegador e os servidores do ConvertBrio fazem a conversão em segundos.",
    seoBlocks: [
      {
        h3: "Comprimir PDF e imagem para um tamanho exato",
        html: `Portais de visto, sites de concurso e formulários do governo costumam limitar um anexo a um tamanho exato, como 100 KB ou 2 MB. A ferramenta ${link("/pt/tools/compress-image", "Comprimir Imagem")} aceita um alvo em KB e chega nele; a ferramenta ${link("/pt/tools/compress-pdf", "Comprimir PDF")} re-codifica as imagens embutidas para reduzir o arquivo mantendo o texto nítido.`,
      },
      {
        h3: "Trabalhar com PDFs",
        html: `${link("/pt/tools/merge-pdf", "Juntar PDF")} combina vários arquivos em um só; ${link("/pt/tools/split-pdf", "Dividir PDF")} separa um documento em páginas; ${link("/pt/tools/pdf-to-jpg", "PDF para JPG")} exporta cada página como imagem; e ${link("/pt/tools/jpg-to-pdf", "JPG para PDF")} transforma fotos de documentos em um PDF pronto para enviar.`,
      },
      {
        h3: "Documentos digitalizados e Word",
        html: `Para levar um documento digitalizado para o Word, use ${link("/pt/tools/ocr-pdf", "OCR de PDF")} para reconhecer o texto e depois ${link("/pt/tools/pdf-to-word", "PDF para Word")} para obter um DOCX editável. A privacidade vem de fábrica: todo envio é criptografado, o original é apagado logo após ser lido e o resultado em cerca de 24 horas.`,
      },
    ],
    faqHeading: "Perguntas frequentes",
    faqSub: "Respostas para as dúvidas mais comuns sobre converter, comprimir e organizar arquivos com o ConvertBrio.",
    faq: [
      { question: "O ConvertBrio é grátis?", answer: "Sim. Todas as ferramentas são gratuitas, sem cadastro, sem limite de uso e sem marca d'água. Arquivos de até 100 MB por conversão são aceitos sem custo." },
      { question: "Como comprimir um PDF online de graça?", answer: "Abra a ferramenta Comprimir PDF, envie o documento e clique em Comprimir. Ela re-codifica as imagens embutidas e remove metadados desnecessários para reduzir o arquivo, que é baixado automaticamente." },
      { question: "Meus arquivos estão seguros?", answer: "Todo arquivo enviado trafega por uma conexão criptografada e é processado automaticamente, sem revisão humana. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase)." },
      { question: "Consigo usar no celular?", answer: "Sim. Abra o ConvertBrio no navegador do celular ou tablet e todas as ferramentas funcionam igual ao computador, sem aplicativo para instalar." },
    ],
    ctaHeading: "Pronto para converter seu primeiro arquivo?",
    ctaSub: "Sem conta para começar, e todas as ferramentas são grátis.",
    blurbs: {
      "compress-pdf": "Reduza o tamanho de um PDF para e-mail ou envio em portais.",
      "compress-image": "Chegue a um tamanho exato em KB: 100 KB para vistos e concursos.",
      "merge-pdf": "Combine vários PDFs em um só documento, na ordem que quiser.",
      "pdf-to-word": "Transforme um PDF em um DOCX editável.",
      "word-to-pdf": "Converta um documento Word em um PDF que abre em qualquer lugar.",
      "jpg-to-pdf": "Junte fotos e digitalizações em um único PDF.",
      "pdf-to-jpg": "Exporte cada página do PDF como uma imagem.",
      "ocr-pdf": "Torne um PDF digitalizado pesquisável e leve o texto para o Word.",
    },
    extraCatalogueNote: "Precisa de outra ferramenta? O catálogo completo (em inglês) tem conversores para AVIF, WEBP, HEIC e ferramentas de IA.",
  },

  es: {
    seoTitle: "ConvertBrio: Conversor y Compresor de Archivos Online Gratis",
    description:
      "Convierte, comprime y edita imágenes, PDF y documentos online, gratis, privado, sin registro. Incluye un compresor de imagen que llega a un tamaño exacto en KB.",
    allToolsDescription:
      "Explora todas las herramientas de ConvertBrio para convertir, comprimir y mejorar imágenes, PDF y documentos.",
    badge: "Gratis, privado, sin registro",
    heroTitle: "Convierte, comprime y edita tus archivos, directamente en el navegador.",
    heroIntro:
      "Imágenes, PDF y documentos, sin instalar nada. ¿Necesitas una foto en un tamaño exacto en KB para un formulario o portal? Nuestro compresor llega al KB objetivo sin prueba y error.",
    ctaPrimary: "Comprimir PDF",
    ctaSecondary: "Ver todas las herramientas",
    popularHeading: "Las herramientas más usadas",
    popularSub: "Sin registro, sin marca de agua, el original se elimina justo tras leerlo y el resultado en unas 24 horas.",
    popularPanelLabel: "Herramientas populares",
    categoriesHeading: "Por categoría",
    categories: [
      { id: "pdf", title: "Herramientas PDF", desc: "Unir, dividir, comprimir y convertir PDF." },
      { id: "image", title: "Herramientas de imagen", desc: "Convertir, redimensionar y comprimir imágenes." },
      { id: "document", title: "Herramientas de documento", desc: "Word ↔ PDF y compresión de Office." },
    ],
    seoHeading: "ConvertBrio: un conversor gratis para imágenes, PDF y documentos",
    seoIntro:
      "ConvertBrio es un conversor de archivos online y gratuito, hecho para quien necesita convertir, comprimir u organizar un archivo sin instalar programas ni crear cuenta. Sube desde el navegador y los servidores de ConvertBrio hacen la conversión en segundos.",
    seoBlocks: [
      {
        h3: "Comprimir PDF e imagen a un tamaño exacto",
        html: `Los portales de visados, las webs de oposiciones y los formularios del gobierno suelen limitar un adjunto a un tamaño exacto, como 100 KB o 2 MB. La herramienta ${link("/es/tools/compress-image", "Comprimir Imagen")} acepta un objetivo en KB y llega a él; la herramienta ${link("/es/tools/compress-pdf", "Comprimir PDF")} recodifica las imágenes incrustadas para reducir el archivo manteniendo el texto nítido.`,
      },
      {
        h3: "Trabajar con PDF",
        html: `${link("/es/tools/merge-pdf", "Unir PDF")} combina varios archivos en uno; ${link("/es/tools/split-pdf", "Dividir PDF")} separa un documento en páginas; ${link("/es/tools/pdf-to-jpg", "PDF a JPG")} exporta cada página como imagen; y ${link("/es/tools/jpg-to-pdf", "JPG a PDF")} convierte fotos de documentos en un PDF listo para enviar.`,
      },
      {
        h3: "Documentos escaneados y Word",
        html: `Para llevar un documento escaneado a Word, usa ${link("/es/tools/ocr-pdf", "OCR de PDF")} para reconocer el texto y luego ${link("/es/tools/pdf-to-word", "PDF a Word")} para obtener un DOCX editable. La privacidad viene de serie: cada subida se cifra, el original se elimina justo tras leerlo y el resultado en unas 24 horas.`,
      },
    ],
    faqHeading: "Preguntas frecuentes",
    faqSub: "Respuestas a las dudas más comunes sobre convertir, comprimir y organizar archivos con ConvertBrio.",
    faq: [
      { question: "¿ConvertBrio es gratis?", answer: "Sí. Todas las herramientas son gratuitas, sin registro, sin límite de uso y sin marca de agua. Se aceptan archivos de hasta 100 MB por conversión, sin coste." },
      { question: "¿Cómo comprimir un PDF online gratis?", answer: "Abre la herramienta Comprimir PDF, sube el documento y haz clic en Comprimir. Recodifica las imágenes incrustadas y elimina metadatos innecesarios para reducir el archivo, que se descarga automáticamente." },
      { question: "¿Mis archivos están seguros?", answer: "Cada archivo subido viaja por una conexión cifrada y se procesa automáticamente, sin revisión humana. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se borra con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase)." },
      { question: "¿Puedo usarlo en el móvil?", answer: "Sí. Abre ConvertBrio en el navegador del móvil o la tablet y todas las herramientas funcionan igual que en el ordenador, sin app que instalar." },
    ],
    ctaHeading: "¿Listo para convertir tu primer archivo?",
    ctaSub: "Sin cuenta para empezar, y todas las herramientas son gratis.",
    blurbs: {
      "compress-pdf": "Reduce el tamaño de un PDF para correo o portales.",
      "compress-image": "Llega a un tamaño exacto en KB: 100 KB para visados y oposiciones.",
      "merge-pdf": "Combina varios PDF en un solo documento, en el orden que quieras.",
      "pdf-to-word": "Convierte un PDF en un DOCX editable.",
      "word-to-pdf": "Convierte un documento Word en un PDF que se abre en cualquier lugar.",
      "jpg-to-pdf": "Une fotos y escaneos en un solo PDF.",
      "pdf-to-jpg": "Exporta cada página del PDF como una imagen.",
      "ocr-pdf": "Haz que un PDF escaneado sea buscable y lleva el texto a Word.",
    },
    extraCatalogueNote: "¿Necesitas otra herramienta? El catálogo completo (en inglés) tiene conversores para AVIF, WEBP, HEIC y herramientas de IA.",
  },

  fr: {
    seoTitle: "ConvertBrio : convertisseur et compresseur de fichiers gratuit",
    description:
      "Convertissez, compressez et modifiez images, PDF et documents en ligne : gratuit, privé, sans inscription, avec un compresseur d'images à taille exacte en Ko.",
    allToolsDescription:
      "Parcourez tous les outils ConvertBrio pour convertir, compresser et améliorer des images, des PDF et des documents.",
    badge: "Gratuit, privé, sans inscription",
    heroTitle: "Convertissez, compressez et modifiez vos fichiers, directement dans le navigateur.",
    heroIntro:
      "Images, PDF et documents, sans rien installer. Besoin d'une photo à une taille exacte en Ko pour un formulaire ou un portail ? Notre compresseur atteint la cible en Ko sans essais successifs.",
    ctaPrimary: "Compresser un PDF",
    ctaSecondary: "Voir tous les outils",
    popularHeading: "Les outils les plus utilisés",
    popularSub: "Sans inscription, sans filigrane, original supprimé dès sa lecture, résultat sous 24 heures environ.",
    popularPanelLabel: "Outils populaires",
    categoriesHeading: "Par catégorie",
    categories: [
      { id: "pdf", title: "Outils PDF", desc: "Fusionner, diviser, compresser et convertir des PDF." },
      { id: "image", title: "Outils d'image", desc: "Convertir, redimensionner et compresser des images." },
      { id: "document", title: "Outils de document", desc: "Word ↔ PDF et compression Office." },
    ],
    seoHeading: "ConvertBrio : un convertisseur gratuit pour images, PDF et documents",
    seoIntro:
      "ConvertBrio est un convertisseur de fichiers en ligne et gratuit, conçu pour ceux qui doivent convertir, compresser ou organiser un fichier sans installer de logiciel ni créer de compte. Envoyez depuis le navigateur et les serveurs de ConvertBrio font la conversion en quelques secondes.",
    seoBlocks: [
      {
        h3: "Compresser un PDF et une image à une taille exacte",
        html: `Les portails de visa, les concours et les formulaires administratifs limitent souvent une pièce jointe à une taille exacte, comme 100 Ko ou 2 Mo. L'outil ${link("/fr/tools/compress-image", "Compresser une Image")} accepte une cible en Ko et l'atteint ; l'outil ${link("/fr/tools/compress-pdf", "Compresser un PDF")} réencode les images intégrées pour réduire le fichier en gardant le texte net.`,
      },
      {
        h3: "Travailler avec des PDF",
        html: `${link("/fr/tools/merge-pdf", "Fusionner des PDF")} combine plusieurs fichiers en un seul ; ${link("/fr/tools/split-pdf", "Diviser un PDF")} sépare un document en pages ; ${link("/fr/tools/pdf-to-jpg", "PDF en JPG")} exporte chaque page en image ; et ${link("/fr/tools/jpg-to-pdf", "JPG en PDF")} transforme des photos de documents en un PDF prêt à envoyer.`,
      },
      {
        h3: "Documents scannés et Word",
        html: `Pour récupérer un document scanné dans Word, utilisez ${link("/fr/tools/ocr-pdf", "OCR de PDF")} pour reconnaître le texte, puis ${link("/fr/tools/pdf-to-word", "PDF en Word")} pour obtenir un DOCX modifiable. La confidentialité est incluse : chaque envoi est chiffré, l'original est supprimé dès sa lecture et le résultat sous 24 heures environ.`,
      },
    ],
    faqHeading: "Questions fréquentes",
    faqSub: "Réponses aux questions les plus courantes sur la conversion, la compression et l'organisation de fichiers avec ConvertBrio.",
    faq: [
      { question: "ConvertBrio est-il gratuit ?", answer: "Oui. Tous les outils sont gratuits, sans inscription, sans limite d'usage et sans filigrane. Les fichiers jusqu'à 100 Mo par conversion sont acceptés sans frais." },
      { question: "Comment compresser un PDF en ligne gratuitement ?", answer: "Ouvrez l'outil Compresser un PDF, envoyez le document et cliquez sur Compresser. Il réencode les images intégrées et supprime les métadonnées inutiles pour réduire le fichier, qui se télécharge automatiquement." },
      { question: "Mes fichiers sont-ils sécurisés ?", answer: "Chaque fichier envoyé transite par une connexion chiffrée et est traité automatiquement, sans intervention humaine. Votre fichier d'origine est supprimé dès qu'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, en général sous 24 heures environ. Les fichiers sont traités sur les serveurs de nos hébergeurs (Vercel et Supabase)." },
      { question: "Puis-je l'utiliser sur mobile ?", answer: "Oui. Ouvrez ConvertBrio dans le navigateur du téléphone ou de la tablette et tous les outils fonctionnent comme sur ordinateur, sans application à installer." },
    ],
    ctaHeading: "Prêt à convertir votre premier fichier ?",
    ctaSub: "Aucun compte pour commencer, et tous les outils sont gratuits.",
    blurbs: {
      "compress-pdf": "Réduisez la taille d'un PDF pour l'e-mail ou les portails.",
      "compress-image": "Atteignez une taille exacte en Ko: 100 Ko pour les visas et concours.",
      "merge-pdf": "Combinez plusieurs PDF en un seul document, dans l'ordre voulu.",
      "pdf-to-word": "Transformez un PDF en un DOCX modifiable.",
      "word-to-pdf": "Convertissez un document Word en un PDF qui s'ouvre partout.",
      "jpg-to-pdf": "Réunissez photos et scans en un seul PDF.",
      "pdf-to-jpg": "Exportez chaque page du PDF en image.",
      "ocr-pdf": "Rendez un PDF scanné consultable et récupérez le texte dans Word.",
    },
    extraCatalogueNote: "Besoin d'un autre outil ? Le catalogue complet (en anglais) propose des convertisseurs AVIF, WEBP, HEIC et des outils d'IA.",
  },

  de: {
    seoTitle: "ConvertBrio: Kostenloser Online-Datei-Konverter und -Kompressor",
    description:
      "Konvertiere, komprimiere und bearbeite Bilder, PDFs und Dokumente online: kostenlos, privat, ohne Anmeldung, mit Bildkompressor für exakte KB-Ziele.",
    allToolsDescription:
      "Entdecke alle ConvertBrio-Tools zum Konvertieren, Komprimieren und Verbessern von Bildern, PDFs und Dokumenten.",
    badge: "Kostenlos, privat, ohne Anmeldung",
    heroTitle: "Konvertiere, komprimiere und bearbeite deine Dateien, direkt im Browser.",
    heroIntro:
      "Bilder, PDFs und Dokumente, ohne Installation. Brauchst du ein Foto in einer exakten Größe in KB für ein Formular oder Portal? Unser Kompressor trifft das KB-Ziel ohne Ausprobieren.",
    ctaPrimary: "PDF komprimieren",
    ctaSecondary: "Alle Tools ansehen",
    popularHeading: "Die meistgenutzten Tools",
    popularSub: "Ohne Anmeldung, ohne Wasserzeichen, Original wird nach dem Lesen gelöscht, das Ergebnis innerhalb von etwa 24 Stunden.",
    popularPanelLabel: "Beliebte Tools",
    categoriesHeading: "Nach Kategorie",
    categories: [
      { id: "pdf", title: "PDF-Tools", desc: "PDFs zusammenfügen, teilen, komprimieren und konvertieren." },
      { id: "image", title: "Bild-Tools", desc: "Bilder konvertieren, skalieren und komprimieren." },
      { id: "document", title: "Dokument-Tools", desc: "Word ↔ PDF und Office-Komprimierung." },
    ],
    seoHeading: "ConvertBrio: ein kostenloser Konverter für Bilder, PDFs und Dokumente",
    seoIntro:
      "ConvertBrio ist ein kostenloser Online-Datei-Konverter für alle, die eine Datei konvertieren, komprimieren oder ordnen müssen, ohne Software zu installieren oder ein Konto zu erstellen. Lade im Browser hoch, und die Server von ConvertBrio erledigen die Umwandlung in Sekunden.",
    seoBlocks: [
      {
        h3: "PDF und Bild auf eine exakte Größe komprimieren",
        html: `Visa-Portale, Bewerbungsseiten und Ämter begrenzen einen Anhang oft auf eine exakte Größe wie 100 KB oder 2 MB. Das Tool ${link("/de/tools/compress-image", "Bild komprimieren")} akzeptiert ein KB-Ziel und trifft es; das Tool ${link("/de/tools/compress-pdf", "PDF komprimieren")} kodiert die eingebetteten Bilder neu, um die Datei zu verkleinern und den Text scharf zu halten.`,
      },
      {
        h3: "Mit PDFs arbeiten",
        html: `${link("/de/tools/merge-pdf", "PDF zusammenfügen")} verbindet mehrere Dateien zu einer; ${link("/de/tools/split-pdf", "PDF teilen")} trennt ein Dokument in Seiten; ${link("/de/tools/pdf-to-jpg", "PDF in JPG")} exportiert jede Seite als Bild; und ${link("/de/tools/jpg-to-pdf", "JPG in PDF")} macht aus Dokumentfotos ein versandfertiges PDF.`,
      },
      {
        h3: "Gescannte Dokumente und Word",
        html: `Um ein gescanntes Dokument in Word zu bringen, nutze ${link("/de/tools/ocr-pdf", "OCR für PDF")}, um den Text zu erkennen, und dann ${link("/de/tools/pdf-to-word", "PDF in Word")}, um ein bearbeitbares DOCX zu erhalten. Datenschutz ist inbegriffen: Jeder Upload wird verschlüsselt, das Original wird nach dem Lesen gelöscht und das Ergebnis innerhalb von etwa 24 Stunden.`,
      },
    ],
    faqHeading: "Häufige Fragen",
    faqSub: "Antworten auf die häufigsten Fragen zum Konvertieren, Komprimieren und Ordnen von Dateien mit ConvertBrio.",
    faq: [
      { question: "Ist ConvertBrio kostenlos?", answer: "Ja. Alle Tools sind kostenlos, ohne Anmeldung, ohne Nutzungslimit und ohne Wasserzeichen. Dateien bis zu 100 MB pro Umwandlung sind kostenlos möglich." },
      { question: "Wie komprimiere ich eine PDF online kostenlos?", answer: "Öffne das Tool PDF komprimieren, lade das Dokument hoch und klicke auf Komprimieren. Es kodiert die eingebetteten Bilder neu und entfernt unnötige Metadaten, um die Datei zu verkleinern, die automatisch heruntergeladen wird." },
      { question: "Sind meine Dateien sicher?", answer: "Jede hochgeladene Datei läuft über eine verschlüsselte Verbindung und wird automatisch ohne menschliche Prüfung verarbeitet. Ihre Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet." },
      { question: "Kann ich es auf dem Handy nutzen?", answer: "Ja. Öffne ConvertBrio im Browser von Handy oder Tablet, und alle Tools funktionieren wie am Computer, ohne App-Installation." },
    ],
    ctaHeading: "Bereit, deine erste Datei zu konvertieren?",
    ctaSub: "Kein Konto für den Start nötig, und alle Tools sind kostenlos.",
    blurbs: {
      "compress-pdf": "Reduziere die Größe einer PDF für E-Mail oder Portale.",
      "compress-image": "Triff eine exakte Größe in KB: 100 KB für Visa und Bewerbungen.",
      "merge-pdf": "Verbinde mehrere PDFs in gewünschter Reihenfolge zu einem Dokument.",
      "pdf-to-word": "Mach aus einer PDF ein bearbeitbares DOCX.",
      "word-to-pdf": "Wandle ein Word-Dokument in ein PDF um, das überall aufgeht.",
      "jpg-to-pdf": "Fasse Fotos und Scans zu einer einzigen PDF zusammen.",
      "pdf-to-jpg": "Exportiere jede PDF-Seite als Bild.",
      "ocr-pdf": "Mach ein gescanntes PDF durchsuchbar und übernimm den Text in Word.",
    },
    extraCatalogueNote: "Brauchst du ein anderes Tool? Der vollständige Katalog (auf Englisch) hat Konverter für AVIF, WEBP, HEIC und KI-Tools.",
  },

  it: {
    seoTitle: "ConvertBrio: Convertitore e Compressore di File Online Gratis",
    description:
      "Converti, comprimi e modifica immagini, PDF e documenti online: gratis, privato, senza registrazione, con compressore di immagini a dimensione esatta in KB.",
    allToolsDescription:
      "Scopri tutti gli strumenti di ConvertBrio per convertire, comprimere e migliorare immagini, PDF e documenti.",
    badge: "Gratis, privato, senza registrazione",
    heroTitle: "Converti, comprimi e modifica i tuoi file, direttamente nel browser.",
    heroIntro:
      "Immagini, PDF e documenti, senza installare nulla. Ti serve una foto a una dimensione esatta in KB per un modulo o un portale? Il nostro compressore raggiunge il KB target senza tentativi.",
    ctaPrimary: "Comprimere PDF",
    ctaSecondary: "Vedi tutti gli strumenti",
    popularHeading: "Gli strumenti più usati",
    popularSub: "Senza registrazione, senza filigrana, originale eliminato dopo la lettura, risultato entro circa 24 ore.",
    popularPanelLabel: "Strumenti popolari",
    categoriesHeading: "Per categoria",
    categories: [
      { id: "pdf", title: "Strumenti PDF", desc: "Unire, dividere, comprimere e convertire PDF." },
      { id: "image", title: "Strumenti immagine", desc: "Convertire, ridimensionare e comprimere immagini." },
      { id: "document", title: "Strumenti documento", desc: "Word ↔ PDF e compressione Office." },
    ],
    seoHeading: "ConvertBrio: un convertitore gratis per immagini, PDF e documenti",
    seoIntro:
      "ConvertBrio è un convertitore di file online e gratuito, pensato per chi deve convertire, comprimere o organizzare un file senza installare programmi né creare un account. Carica dal browser e i server di ConvertBrio fanno la conversione in pochi secondi.",
    seoBlocks: [
      {
        h3: "Comprimere PDF e immagine a una dimensione esatta",
        html: `I portali per i visti, i concorsi e i moduli della pubblica amministrazione spesso limitano un allegato a una dimensione esatta, come 100 KB o 2 MB. Lo strumento ${link("/it/tools/compress-image", "Comprimere Immagine")} accetta un obiettivo in KB e lo raggiunge; lo strumento ${link("/it/tools/compress-pdf", "Comprimere PDF")} ricodifica le immagini incorporate per ridurre il file mantenendo il testo nitido.`,
      },
      {
        h3: "Lavorare con i PDF",
        html: `${link("/it/tools/merge-pdf", "Unire PDF")} combina più file in uno; ${link("/it/tools/split-pdf", "Dividere PDF")} separa un documento in pagine; ${link("/it/tools/pdf-to-jpg", "PDF in JPG")} esporta ogni pagina come immagine; e ${link("/it/tools/jpg-to-pdf", "JPG in PDF")} trasforma le foto dei documenti in un PDF pronto da inviare.`,
      },
      {
        h3: "Documenti scansionati e Word",
        html: `Per portare un documento scansionato in Word, usa ${link("/it/tools/ocr-pdf", "OCR per PDF")} per riconoscere il testo e poi ${link("/it/tools/pdf-to-word", "PDF in Word")} per ottenere un DOCX modificabile. La privacy è inclusa: ogni caricamento viene cifrato, l'originale viene eliminato dopo la lettura e il risultato entro circa 24 ore.`,
      },
    ],
    faqHeading: "Domande frequenti",
    faqSub: "Risposte alle domande più comuni su convertire, comprimere e organizzare file con ConvertBrio.",
    faq: [
      { question: "ConvertBrio è gratis?", answer: "Sì. Tutti gli strumenti sono gratuiti, senza registrazione, senza limiti d'uso e senza filigrana. Sono accettati file fino a 100 MB per conversione, senza costi." },
      { question: "Come comprimere un PDF online gratis?", answer: "Apri lo strumento Comprimere PDF, carica il documento e clicca su Comprimi. Ricodifica le immagini incorporate e rimuove i metadati inutili per ridurre il file, che si scarica automaticamente." },
      { question: "I miei file sono al sicuro?", answer: "Ogni file caricato viaggia su una connessione cifrata e viene elaborato automaticamente, senza revisione umana. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati sui server dei nostri provider di hosting (Vercel e Supabase)." },
      { question: "Posso usarlo sul telefono?", answer: "Sì. Apri ConvertBrio nel browser del telefono o del tablet e tutti gli strumenti funzionano come sul computer, senza app da installare." },
    ],
    ctaHeading: "Pronto a convertire il tuo primo file?",
    ctaSub: "Nessun account per iniziare, e tutti gli strumenti sono gratis.",
    blurbs: {
      "compress-pdf": "Riduci le dimensioni di un PDF per e-mail o portali.",
      "compress-image": "Raggiungi una dimensione esatta in KB: 100 KB per visti e concorsi.",
      "merge-pdf": "Combina più PDF in un unico documento, nell'ordine che vuoi.",
      "pdf-to-word": "Trasforma un PDF in un DOCX modificabile.",
      "word-to-pdf": "Converti un documento Word in un PDF che si apre ovunque.",
      "jpg-to-pdf": "Unisci foto e scansioni in un unico PDF.",
      "pdf-to-jpg": "Esporta ogni pagina del PDF come immagine.",
      "ocr-pdf": "Rendi un PDF scansionato ricercabile e porta il testo in Word.",
    },
    extraCatalogueNote: "Ti serve un altro strumento? Il catalogo completo (in inglese) ha convertitori per AVIF, WEBP, HEIC e strumenti di IA.",
  },

  id: {
    seoTitle: "ConvertBrio: Konverter dan Kompresor File Online Gratis",
    description:
      "Konversi, kompres, dan edit gambar, PDF, dan dokumen online, gratis, privat, tanpa daftar. Termasuk kompresor gambar yang mencapai ukuran KB yang tepat.",
    allToolsDescription:
      "Jelajahi semua alat ConvertBrio untuk mengonversi, mengompres, dan meningkatkan kualitas gambar, PDF, dan dokumen.",
    badge: "Gratis, privat, tanpa daftar",
    heroTitle: "Konversi, kompres, dan edit file Anda, langsung di browser.",
    heroIntro:
      "Gambar, PDF, dan dokumen, tanpa memasang apa pun. Butuh foto pada ukuran KB yang tepat untuk formulir atau portal? Kompresor kami mencapai target KB tanpa coba-coba.",
    ctaPrimary: "Kompres PDF",
    ctaSecondary: "Lihat semua alat",
    popularHeading: "Alat yang paling sering dipakai",
    popularSub: "Tanpa daftar, tanpa watermark, file asli dihapus setelah dibaca, hasil dalam sekitar 24 jam.",
    popularPanelLabel: "Alat populer",
    categoriesHeading: "Berdasarkan kategori",
    categories: [
      { id: "pdf", title: "Alat PDF", desc: "Gabung, pisah, kompres, dan konversi PDF." },
      { id: "image", title: "Alat gambar", desc: "Konversi, ubah ukuran, dan kompres gambar." },
      { id: "document", title: "Alat dokumen", desc: "Word ↔ PDF dan kompresi Office." },
    ],
    seoHeading: "ConvertBrio: konverter gratis untuk gambar, PDF, dan dokumen",
    seoIntro:
      "ConvertBrio adalah konverter file online dan gratis, dibuat untuk siapa saja yang perlu mengonversi, mengompres, atau menata file tanpa memasang program atau membuat akun. Unggah dari browser dan server ConvertBrio melakukan konversi dalam hitungan detik.",
    seoBlocks: [
      {
        h3: "Kompres PDF dan gambar ke ukuran yang tepat",
        html: `Portal visa, situs seleksi, dan formulir pemerintah sering membatasi lampiran ke ukuran tepat, seperti 100 KB atau 2 MB. Alat ${link("/id/tools/compress-image", "Kompres Gambar")} menerima target KB dan mencapainya; alat ${link("/id/tools/compress-pdf", "Kompres PDF")} mengodekan ulang gambar tertanam untuk memperkecil file sambil menjaga teks tetap tajam.`,
      },
      {
        h3: "Bekerja dengan PDF",
        html: `${link("/id/tools/merge-pdf", "Gabung PDF")} menyatukan beberapa file menjadi satu; ${link("/id/tools/split-pdf", "Pisah PDF")} memisahkan dokumen menjadi halaman; ${link("/id/tools/pdf-to-jpg", "PDF ke JPG")} mengekspor tiap halaman sebagai gambar; dan ${link("/id/tools/jpg-to-pdf", "JPG ke PDF")} mengubah foto dokumen menjadi PDF siap kirim.`,
      },
      {
        h3: "Dokumen hasil scan dan Word",
        html: `Untuk memindahkan dokumen hasil scan ke Word, pakai ${link("/id/tools/ocr-pdf", "OCR PDF")} untuk mengenali teks lalu ${link("/id/tools/pdf-to-word", "PDF ke Word")} untuk mendapat DOCX yang bisa diedit. Privasi sudah termasuk: setiap unggahan dienkripsi, file asli dihapus setelah dibaca, dan hasilnya dalam sekitar 24 jam.`,
      },
    ],
    faqHeading: "Pertanyaan umum",
    faqSub: "Jawaban untuk pertanyaan paling umum tentang mengonversi, mengompres, dan menata file dengan ConvertBrio.",
    faq: [
      { question: "Apakah ConvertBrio gratis?", answer: "Ya. Semua alat gratis, tanpa daftar, tanpa batas penggunaan, dan tanpa watermark. File hingga 100 MB per konversi diterima tanpa biaya." },
      { question: "Bagaimana cara kompres PDF online gratis?", answer: "Buka alat Kompres PDF, unggah dokumen, dan klik Kompres. Ia mengodekan ulang gambar tertanam dan menghapus metadata yang tidak perlu untuk memperkecil file, yang terunduh otomatis." },
      { question: "Apakah file saya aman?", answer: "Setiap file yang diunggah melewati koneksi terenkripsi dan diproses otomatis, tanpa tinjauan manusia. File asli dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses di server penyedia hosting kami (Vercel dan Supabase)." },
      { question: "Bisakah dipakai di ponsel?", answer: "Ya. Buka ConvertBrio di browser ponsel atau tablet dan semua alat berfungsi sama seperti di komputer, tanpa aplikasi untuk dipasang." },
    ],
    ctaHeading: "Siap mengonversi file pertama Anda?",
    ctaSub: "Tanpa akun untuk mulai, dan semua alat gratis.",
    blurbs: {
      "compress-pdf": "Perkecil ukuran PDF untuk email atau portal.",
      "compress-image": "Capai ukuran KB yang tepat: 100 KB untuk visa dan seleksi.",
      "merge-pdf": "Gabungkan beberapa PDF menjadi satu dokumen, sesuai urutan Anda.",
      "pdf-to-word": "Ubah PDF menjadi DOCX yang bisa diedit.",
      "word-to-pdf": "Ubah dokumen Word menjadi PDF yang terbuka di mana saja.",
      "jpg-to-pdf": "Satukan foto dan scan menjadi satu PDF.",
      "pdf-to-jpg": "Ekspor tiap halaman PDF sebagai gambar.",
      "ocr-pdf": "Buat PDF hasil scan bisa dicari dan pindahkan teksnya ke Word.",
    },
    extraCatalogueNote: "Butuh alat lain? Katalog lengkap (dalam bahasa Inggris) punya konverter AVIF, WEBP, HEIC, dan alat AI.",
  },
};
