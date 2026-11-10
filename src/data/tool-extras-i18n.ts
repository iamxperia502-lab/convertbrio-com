import type { Locale } from "./i18n";

/** UI strings for ToolExtras.astro and PdfOrganizer.astro (tool option panels). */
export interface ExtrasStrings {
  maxSize: string;
  unit: string;
  sizeHint: string;
  preset: string;
  customSize: string;
  presetHint: string;
  presetLabels: { passport: string; usPassport: string; photo: string; signature: string };
  aspectRatio: string;
  ratioLabels: { free: string; square: string; portrait: string; landscape: string; passport: string; strip: string; wide: string };
  width: string;
  height: string;
  maxFileSize: string;
  fit: string;
  fitCrop: string;
  fitPad: string;
  batchLabel: string;
  batchHint: string;
  ocrLanguage: string;
  ocrHint: string;
  languageNames: { eng: string; por: string; spa: string; fra: string; deu: string; ita: string; ind: string };
  metaTitle: string;
  metaPhotos: string;
  metaPdf: string;
  metaOffice: string;
  metaNote: string;
  org: {
    intro: string;
    goBack: string;
    confirmYes: string;
    /** {n} = page number */
    preview: string;
    restore: string;
    remove: string;
    restoreShort: string;
    moveEarlier: string;
    moveLater: string;
    rotate: string;
    /** {n} = page number */
    caption: string;
    /** {o} = original page number */
    was: string;
    removed: string;
    errPassword: string;
    errRead: string;
    keepOne: string;
    /** {n} = count */
    confirmOne: string;
    confirmMany: string;
  };
}

const en: ExtrasStrings = {
  maxSize: "Maximum size",
  unit: "Unit",
  sizeHint: "We compress in steps and check the real size after each one. If the limit is too small to reach without ruining the pages, we tell you the smallest size we got.",
  preset: "Preset",
  customSize: "Custom size",
  presetHint: "Presets are pixel sizes only. Check your form's exact requirement and use Custom if it differs.",
  presetLabels: {
    passport: "Passport photo, 35 × 45 mm at 300 DPI (413 × 531 px)",
    usPassport: "US passport / visa, 2 × 2 in at 300 DPI (600 × 600 px)",
    photo: "Photo, 3:4 (450 × 600 px)",
    signature: "Signature, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Aspect ratio",
  ratioLabels: { free: "Free (set both sizes)", square: "1:1 (square)", portrait: "3:4 (portrait)", landscape: "4:3 (landscape)", passport: "7:9 (35 × 45 mm passport)", strip: "3:1 (signature strip)", wide: "16:9 (widescreen)" },
  width: "Width (px)",
  height: "Height (px)",
  maxFileSize: "Maximum file size (KB, optional; 1 KB = 1,024 bytes)",
  fit: "If the photo has a different shape",
  fitCrop: "Crop to fill the size",
  fitPad: "Fit inside with white margins",
  batchLabel: "Target size for each image (KB; 1 KB = 1,024 bytes)",
  batchHint: "Every image is compressed on its own to this size. Quality drops first, and dimensions shrink only if needed. Files that can't reach the target are flagged.",
  ocrLanguage: "Language of the text",
  ocrHint: "Works best on sharp, high-resolution printed text. Handwriting, low-resolution scans, tables, and multi-column layouts are often recognized poorly. Always proofread the result.",
  languageNames: { eng: "English", por: "Portuguese", spa: "Spanish", fra: "French", deu: "German", ita: "Italian", ind: "Indonesian" },
  metaTitle: "What gets removed",
  metaPhotos: "Photos (JPG, PNG, WEBP, AVIF, TIFF): EXIF camera and date details, GPS location, XMP and IPTC data.",
  metaPdf: "PDF: title, author, subject, keywords, creator, producer, dates, and XMP metadata.",
  metaOffice: "Word, Excel, PowerPoint: author, last modified by, title, company, dates, and application details.",
  metaNote: "The file format never changes. Some structural data needed to keep a file valid stays, and visible content such as text, comments, or a signature drawn on a page is not altered.",
  org: {
    intro: "Use the buttons under each page to move, rotate, or remove it. You can also drag pages to reorder them. Removed pages stay visible and can be restored until you convert.",
    goBack: "Go back",
    confirmYes: "Remove pages and create PDF",
    preview: "Preview of original page {n}",
    restore: "Restore page {n}",
    remove: "Remove page {n}",
    restoreShort: "Restore",
    moveEarlier: "Move page {n} earlier",
    moveLater: "Move page {n} later",
    rotate: "Rotate page {n} clockwise",
    caption: "Page {n}",
    was: " (was {o})",
    removed: ", removed",
    errPassword: "This PDF is password-protected. Remove the password first, then organize its pages.",
    errRead: "We couldn't read this PDF. Check that it isn't corrupt and try again.",
    keepOne: "Keep at least one page.",
    confirmOne: "{n} page will be removed from the new PDF. Your original file isn't changed.",
    confirmMany: "{n} pages will be removed from the new PDF. Your original file isn't changed.",
  },
};

const pt: ExtrasStrings = {
  maxSize: "Tamanho máximo",
  unit: "Unidade",
  sizeHint: "Comprimimos em etapas e conferimos o tamanho real após cada uma. Se o limite for pequeno demais para ser atingido sem estragar as páginas, informamos o menor tamanho que conseguimos.",
  preset: "Predefinição",
  customSize: "Tamanho personalizado",
  presetHint: "As predefinições são apenas tamanhos em pixels. Confira a exigência exata do seu formulário e use Personalizado se for diferente.",
  presetLabels: {
    passport: "Foto de passaporte, 35 × 45 mm a 300 DPI (413 × 531 px)",
    usPassport: "Passaporte / visto dos EUA, 2 × 2 pol. a 300 DPI (600 × 600 px)",
    photo: "Foto 3x4 (450 × 600 px)",
    signature: "Assinatura, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Proporção",
  ratioLabels: { free: "Livre (defina as duas medidas)", square: "1:1 (quadrado)", portrait: "3:4 (retrato)", landscape: "4:3 (paisagem)", passport: "7:9 (passaporte 35 × 45 mm)", strip: "3:1 (faixa de assinatura)", wide: "16:9 (widescreen)" },
  width: "Largura (px)",
  height: "Altura (px)",
  maxFileSize: "Tamanho máximo do arquivo (KB, opcional; 1 KB = 1.024 bytes)",
  fit: "Se a foto tiver outro formato",
  fitCrop: "Cortar para preencher o tamanho",
  fitPad: "Ajustar por dentro com margens brancas",
  batchLabel: "Tamanho alvo de cada imagem (KB; 1 KB = 1.024 bytes)",
  batchHint: "Cada imagem é comprimida individualmente até esse tamanho. A qualidade cai primeiro e as dimensões só diminuem se for preciso. Os arquivos que não alcançam o alvo são sinalizados.",
  ocrLanguage: "Idioma do texto",
  ocrHint: "Funciona melhor com texto impresso nítido e em alta resolução. Escrita à mão, digitalizações de baixa resolução, tabelas e layouts em várias colunas costumam ser reconhecidos mal. Sempre revise o resultado.",
  languageNames: { eng: "Inglês", por: "Português", spa: "Espanhol", fra: "Francês", deu: "Alemão", ita: "Italiano", ind: "Indonésio" },
  metaTitle: "O que é removido",
  metaPhotos: "Fotos (JPG, PNG, WEBP, AVIF, TIFF): dados EXIF da câmera e da data, localização GPS, dados XMP e IPTC.",
  metaPdf: "PDF: título, autor, assunto, palavras-chave, criador, produtor, datas e metadados XMP.",
  metaOffice: "Word, Excel, PowerPoint: autor, última modificação por, título, empresa, datas e dados do aplicativo.",
  metaNote: "O formato do arquivo nunca muda. Alguns dados estruturais necessários para manter o arquivo válido permanecem, e o conteúdo visível, como texto, comentários ou uma assinatura desenhada na página, não é alterado.",
  org: {
    intro: "Use os botões abaixo de cada página para movê-la, girá-la ou removê-la. Você também pode arrastar as páginas para reordená-las. As páginas removidas continuam visíveis e podem ser restauradas até você converter.",
    goBack: "Voltar",
    confirmYes: "Remover páginas e criar PDF",
    preview: "Pré-visualização da página original {n}",
    restore: "Restaurar página {n}",
    remove: "Remover página {n}",
    restoreShort: "Restaurar",
    moveEarlier: "Mover página {n} para antes",
    moveLater: "Mover página {n} para depois",
    rotate: "Girar página {n} no sentido horário",
    caption: "Página {n}",
    was: " (era {o})",
    removed: ", removida",
    errPassword: "Este PDF está protegido por senha. Remova a senha primeiro e depois organize as páginas.",
    errRead: "Não foi possível ler este PDF. Verifique se ele não está corrompido e tente novamente.",
    keepOne: "Mantenha pelo menos uma página.",
    confirmOne: "{n} página será removida do novo PDF. Seu arquivo original não é alterado.",
    confirmMany: "{n} páginas serão removidas do novo PDF. Seu arquivo original não é alterado.",
  },
};

const es: ExtrasStrings = {
  maxSize: "Tamaño máximo",
  unit: "Unidad",
  sizeHint: "Comprimimos por pasos y comprobamos el tamaño real después de cada uno. Si el límite es demasiado pequeño para alcanzarlo sin estropear las páginas, te indicamos el tamaño más pequeño que conseguimos.",
  preset: "Ajuste predefinido",
  customSize: "Tamaño personalizado",
  presetHint: "Los ajustes predefinidos son solo tamaños en píxeles. Comprueba el requisito exacto de tu formulario y usa Personalizado si es distinto.",
  presetLabels: {
    passport: "Foto de pasaporte, 35 × 45 mm a 300 DPI (413 × 531 px)",
    usPassport: "Pasaporte / visa de EE. UU., 2 × 2 pulg. a 300 DPI (600 × 600 px)",
    photo: "Foto 3:4 (450 × 600 px)",
    signature: "Firma, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Relación de aspecto",
  ratioLabels: { free: "Libre (define ambas medidas)", square: "1:1 (cuadrado)", portrait: "3:4 (vertical)", landscape: "4:3 (horizontal)", passport: "7:9 (pasaporte 35 × 45 mm)", strip: "3:1 (franja de firma)", wide: "16:9 (panorámico)" },
  width: "Ancho (px)",
  height: "Alto (px)",
  maxFileSize: "Tamaño máximo del archivo (KB, opcional; 1 KB = 1.024 bytes)",
  fit: "Si la foto tiene otra forma",
  fitCrop: "Recortar para llenar el tamaño",
  fitPad: "Ajustar dentro con márgenes blancos",
  batchLabel: "Tamaño objetivo de cada imagen (KB; 1 KB = 1.024 bytes)",
  batchHint: "Cada imagen se comprime por separado hasta este tamaño. Primero baja la calidad y las dimensiones solo se reducen si hace falta. Los archivos que no llegan al objetivo se marcan.",
  ocrLanguage: "Idioma del texto",
  ocrHint: "Funciona mejor con texto impreso nítido y de alta resolución. La escritura a mano, los escaneos de baja resolución, las tablas y los diseños de varias columnas suelen reconocerse mal. Revisa siempre el resultado.",
  languageNames: { eng: "Inglés", por: "Portugués", spa: "Español", fra: "Francés", deu: "Alemán", ita: "Italiano", ind: "Indonesio" },
  metaTitle: "Qué se elimina",
  metaPhotos: "Fotos (JPG, PNG, WEBP, AVIF, TIFF): datos EXIF de la cámara y la fecha, ubicación GPS, datos XMP e IPTC.",
  metaPdf: "PDF: título, autor, asunto, palabras clave, creador, productor, fechas y metadatos XMP.",
  metaOffice: "Word, Excel, PowerPoint: autor, última modificación por, título, empresa, fechas y datos de la aplicación.",
  metaNote: "El formato del archivo nunca cambia. Se conservan algunos datos estructurales necesarios para que el archivo siga siendo válido, y el contenido visible, como el texto, los comentarios o una firma dibujada en la página, no se altera.",
  org: {
    intro: "Usa los botones bajo cada página para moverla, girarla o eliminarla. También puedes arrastrar las páginas para reordenarlas. Las páginas eliminadas siguen visibles y se pueden restaurar hasta que conviertas.",
    goBack: "Volver",
    confirmYes: "Eliminar páginas y crear PDF",
    preview: "Vista previa de la página original {n}",
    restore: "Restaurar página {n}",
    remove: "Eliminar página {n}",
    restoreShort: "Restaurar",
    moveEarlier: "Mover la página {n} antes",
    moveLater: "Mover la página {n} después",
    rotate: "Girar la página {n} en sentido horario",
    caption: "Página {n}",
    was: " (era {o})",
    removed: ", eliminada",
    errPassword: "Este PDF está protegido con contraseña. Quita primero la contraseña y luego organiza sus páginas.",
    errRead: "No pudimos leer este PDF. Comprueba que no esté dañado e inténtalo de nuevo.",
    keepOne: "Conserva al menos una página.",
    confirmOne: "Se eliminará {n} página del nuevo PDF. Tu archivo original no se modifica.",
    confirmMany: "Se eliminarán {n} páginas del nuevo PDF. Tu archivo original no se modifica.",
  },
};

const fr: ExtrasStrings = {
  maxSize: "Taille maximale",
  unit: "Unité",
  sizeHint: "Nous compressons par étapes et vérifions la taille réelle après chacune. Si la limite est trop basse pour être atteinte sans abîmer les pages, nous vous indiquons la plus petite taille obtenue.",
  preset: "Préréglage",
  customSize: "Taille personnalisée",
  presetHint: "Les préréglages sont uniquement des tailles en pixels. Vérifiez l'exigence exacte de votre formulaire et utilisez Personnalisé si elle diffère.",
  presetLabels: {
    passport: "Photo de passeport, 35 × 45 mm à 300 DPI (413 × 531 px)",
    usPassport: "Passeport / visa américain, 2 × 2 po à 300 DPI (600 × 600 px)",
    photo: "Photo 3:4 (450 × 600 px)",
    signature: "Signature, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Format",
  ratioLabels: { free: "Libre (définir les deux dimensions)", square: "1:1 (carré)", portrait: "3:4 (portrait)", landscape: "4:3 (paysage)", passport: "7:9 (passeport 35 × 45 mm)", strip: "3:1 (bandeau de signature)", wide: "16:9 (grand écran)" },
  width: "Largeur (px)",
  height: "Hauteur (px)",
  maxFileSize: "Taille maximale du fichier (Ko, facultatif ; 1 Ko = 1 024 octets)",
  fit: "Si la photo a une forme différente",
  fitCrop: "Recadrer pour remplir la taille",
  fitPad: "Ajuster à l'intérieur avec des marges blanches",
  batchLabel: "Taille cible de chaque image (Ko ; 1 Ko = 1 024 octets)",
  batchHint: "Chaque image est compressée séparément jusqu'à cette taille. La qualité baisse d'abord, et les dimensions ne diminuent que si nécessaire. Les fichiers qui n'atteignent pas la cible sont signalés.",
  ocrLanguage: "Langue du texte",
  ocrHint: "Fonctionne mieux sur du texte imprimé net et en haute résolution. L'écriture manuscrite, les numérisations basse résolution, les tableaux et les mises en page à plusieurs colonnes sont souvent mal reconnus. Relisez toujours le résultat.",
  languageNames: { eng: "Anglais", por: "Portugais", spa: "Espagnol", fra: "Français", deu: "Allemand", ita: "Italien", ind: "Indonésien" },
  metaTitle: "Ce qui est supprimé",
  metaPhotos: "Photos (JPG, PNG, WEBP, AVIF, TIFF) : données EXIF de l'appareil et de la date, position GPS, données XMP et IPTC.",
  metaPdf: "PDF : titre, auteur, sujet, mots-clés, créateur, producteur, dates et métadonnées XMP.",
  metaOffice: "Word, Excel, PowerPoint : auteur, dernière modification par, titre, société, dates et informations sur l'application.",
  metaNote: "Le format du fichier ne change jamais. Certaines données structurelles nécessaires à la validité du fichier sont conservées, et le contenu visible, comme le texte, les commentaires ou une signature dessinée sur une page, n'est pas modifié.",
  org: {
    intro: "Utilisez les boutons sous chaque page pour la déplacer, la faire pivoter ou la supprimer. Vous pouvez aussi faire glisser les pages pour les réorganiser. Les pages supprimées restent visibles et peuvent être restaurées jusqu'à la conversion.",
    goBack: "Retour",
    confirmYes: "Supprimer les pages et créer le PDF",
    preview: "Aperçu de la page d'origine {n}",
    restore: "Restaurer la page {n}",
    remove: "Supprimer la page {n}",
    restoreShort: "Restaurer",
    moveEarlier: "Déplacer la page {n} plus tôt",
    moveLater: "Déplacer la page {n} plus tard",
    rotate: "Faire pivoter la page {n} dans le sens horaire",
    caption: "Page {n}",
    was: " (était {o})",
    removed: ", supprimée",
    errPassword: "Ce PDF est protégé par un mot de passe. Supprimez d'abord le mot de passe, puis organisez ses pages.",
    errRead: "Nous n'avons pas pu lire ce PDF. Vérifiez qu'il n'est pas corrompu et réessayez.",
    keepOne: "Conservez au moins une page.",
    confirmOne: "{n} page sera supprimée du nouveau PDF. Votre fichier d'origine n'est pas modifié.",
    confirmMany: "{n} pages seront supprimées du nouveau PDF. Votre fichier d'origine n'est pas modifié.",
  },
};

const de: ExtrasStrings = {
  maxSize: "Maximale Größe",
  unit: "Einheit",
  sizeHint: "Wir komprimieren schrittweise und prüfen nach jedem Schritt die tatsächliche Größe. Ist das Limit zu klein, um es ohne Qualitätsverlust der Seiten zu erreichen, teilen wir dir die kleinste erreichte Größe mit.",
  preset: "Vorgabe",
  customSize: "Benutzerdefinierte Größe",
  presetHint: "Die Vorgaben sind nur Pixelgrößen. Prüfe die genauen Anforderungen deines Formulars und wähle Benutzerdefiniert, falls sie abweichen.",
  presetLabels: {
    passport: "Passfoto, 35 × 45 mm bei 300 DPI (413 × 531 px)",
    usPassport: "US-Reisepass / Visum, 2 × 2 Zoll bei 300 DPI (600 × 600 px)",
    photo: "Foto 3:4 (450 × 600 px)",
    signature: "Unterschrift, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Seitenverhältnis",
  ratioLabels: { free: "Frei (beide Maße angeben)", square: "1:1 (quadratisch)", portrait: "3:4 (Hochformat)", landscape: "4:3 (Querformat)", passport: "7:9 (Passfoto 35 × 45 mm)", strip: "3:1 (Unterschriftenstreifen)", wide: "16:9 (Breitbild)" },
  width: "Breite (px)",
  height: "Höhe (px)",
  maxFileSize: "Maximale Dateigröße (KB, optional; 1 KB = 1.024 Byte)",
  fit: "Wenn das Foto ein anderes Format hat",
  fitCrop: "Zuschneiden, um die Größe auszufüllen",
  fitPad: "Einpassen mit weißen Rändern",
  batchLabel: "Zielgröße pro Bild (KB; 1 KB = 1.024 Byte)",
  batchHint: "Jedes Bild wird einzeln auf diese Größe komprimiert. Zuerst sinkt die Qualität, die Abmessungen werden nur bei Bedarf verkleinert. Dateien, die das Ziel nicht erreichen, werden markiert.",
  ocrLanguage: "Sprache des Textes",
  ocrHint: "Funktioniert am besten bei scharfem, hochauflösendem Drucktext. Handschrift, Scans mit niedriger Auflösung, Tabellen und mehrspaltige Layouts werden oft schlecht erkannt. Lies das Ergebnis immer gegen.",
  languageNames: { eng: "Englisch", por: "Portugiesisch", spa: "Spanisch", fra: "Französisch", deu: "Deutsch", ita: "Italienisch", ind: "Indonesisch" },
  metaTitle: "Was entfernt wird",
  metaPhotos: "Fotos (JPG, PNG, WEBP, AVIF, TIFF): EXIF-Kamera- und Datumsangaben, GPS-Standort, XMP- und IPTC-Daten.",
  metaPdf: "PDF: Titel, Autor, Thema, Stichwörter, Ersteller, Produzent, Datumsangaben und XMP-Metadaten.",
  metaOffice: "Word, Excel, PowerPoint: Autor, zuletzt geändert von, Titel, Firma, Datumsangaben und Anwendungsdetails.",
  metaNote: "Das Dateiformat ändert sich nie. Einige strukturelle Daten, die für eine gültige Datei nötig sind, bleiben erhalten, und sichtbarer Inhalt wie Text, Kommentare oder eine auf die Seite gezeichnete Unterschrift wird nicht verändert.",
  org: {
    intro: "Verwende die Schaltflächen unter jeder Seite, um sie zu verschieben, zu drehen oder zu entfernen. Du kannst Seiten auch per Drag-and-drop neu anordnen. Entfernte Seiten bleiben sichtbar und können bis zur Umwandlung wiederhergestellt werden.",
    goBack: "Zurück",
    confirmYes: "Seiten entfernen und PDF erstellen",
    preview: "Vorschau der Originalseite {n}",
    restore: "Seite {n} wiederherstellen",
    remove: "Seite {n} entfernen",
    restoreShort: "Wiederherstellen",
    moveEarlier: "Seite {n} nach vorn verschieben",
    moveLater: "Seite {n} nach hinten verschieben",
    rotate: "Seite {n} im Uhrzeigersinn drehen",
    caption: "Seite {n}",
    was: " (war {o})",
    removed: ", entfernt",
    errPassword: "Dieses PDF ist passwortgeschützt. Entferne zuerst das Passwort und ordne dann die Seiten.",
    errRead: "Wir konnten dieses PDF nicht lesen. Prüfe, ob es nicht beschädigt ist, und versuche es erneut.",
    keepOne: "Behalte mindestens eine Seite.",
    confirmOne: "{n} Seite wird aus dem neuen PDF entfernt. Deine Originaldatei bleibt unverändert.",
    confirmMany: "{n} Seiten werden aus dem neuen PDF entfernt. Deine Originaldatei bleibt unverändert.",
  },
};

const it: ExtrasStrings = {
  maxSize: "Dimensione massima",
  unit: "Unità",
  sizeHint: "Comprimiamo per passaggi e controlliamo la dimensione reale dopo ciascuno. Se il limite è troppo basso per essere raggiunto senza rovinare le pagine, ti indichiamo la dimensione minima ottenuta.",
  preset: "Preimpostazione",
  customSize: "Dimensione personalizzata",
  presetHint: "Le preimpostazioni sono solo dimensioni in pixel. Controlla il requisito esatto del tuo modulo e usa Personalizzata se è diverso.",
  presetLabels: {
    passport: "Foto per passaporto, 35 × 45 mm a 300 DPI (413 × 531 px)",
    usPassport: "Passaporto / visto USA, 2 × 2 pollici a 300 DPI (600 × 600 px)",
    photo: "Foto 3:4 (450 × 600 px)",
    signature: "Firma, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Proporzioni",
  ratioLabels: { free: "Libero (imposta entrambe le misure)", square: "1:1 (quadrato)", portrait: "3:4 (verticale)", landscape: "4:3 (orizzontale)", passport: "7:9 (passaporto 35 × 45 mm)", strip: "3:1 (striscia della firma)", wide: "16:9 (widescreen)" },
  width: "Larghezza (px)",
  height: "Altezza (px)",
  maxFileSize: "Dimensione massima del file (KB, facoltativa; 1 KB = 1.024 byte)",
  fit: "Se la foto ha una forma diversa",
  fitCrop: "Ritaglia per riempire la dimensione",
  fitPad: "Adatta all'interno con margini bianchi",
  batchLabel: "Dimensione obiettivo per ogni immagine (KB; 1 KB = 1.024 byte)",
  batchHint: "Ogni immagine viene compressa singolarmente fino a questa dimensione. Scende prima la qualità, e le dimensioni si riducono solo se necessario. I file che non raggiungono l'obiettivo vengono segnalati.",
  ocrLanguage: "Lingua del testo",
  ocrHint: "Funziona meglio con testo stampato nitido e ad alta risoluzione. La scrittura a mano, le scansioni a bassa risoluzione, le tabelle e i layout a più colonne vengono spesso riconosciuti male. Rileggi sempre il risultato.",
  languageNames: { eng: "Inglese", por: "Portoghese", spa: "Spagnolo", fra: "Francese", deu: "Tedesco", ita: "Italiano", ind: "Indonesiano" },
  metaTitle: "Cosa viene rimosso",
  metaPhotos: "Foto (JPG, PNG, WEBP, AVIF, TIFF): dati EXIF della fotocamera e della data, posizione GPS, dati XMP e IPTC.",
  metaPdf: "PDF: titolo, autore, oggetto, parole chiave, creatore, produttore, date e metadati XMP.",
  metaOffice: "Word, Excel, PowerPoint: autore, ultima modifica di, titolo, azienda, date e dettagli dell'applicazione.",
  metaNote: "Il formato del file non cambia mai. Alcuni dati strutturali necessari a mantenere valido il file restano, e il contenuto visibile, come testo, commenti o una firma disegnata sulla pagina, non viene modificato.",
  org: {
    intro: "Usa i pulsanti sotto ogni pagina per spostarla, ruotarla o rimuoverla. Puoi anche trascinare le pagine per riordinarle. Le pagine rimosse restano visibili e possono essere ripristinate fino alla conversione.",
    goBack: "Indietro",
    confirmYes: "Rimuovi le pagine e crea il PDF",
    preview: "Anteprima della pagina originale {n}",
    restore: "Ripristina pagina {n}",
    remove: "Rimuovi pagina {n}",
    restoreShort: "Ripristina",
    moveEarlier: "Sposta la pagina {n} prima",
    moveLater: "Sposta la pagina {n} dopo",
    rotate: "Ruota la pagina {n} in senso orario",
    caption: "Pagina {n}",
    was: " (era {o})",
    removed: ", rimossa",
    errPassword: "Questo PDF è protetto da password. Rimuovi prima la password, poi organizza le pagine.",
    errRead: "Non siamo riusciti a leggere questo PDF. Verifica che non sia danneggiato e riprova.",
    keepOne: "Mantieni almeno una pagina.",
    confirmOne: "{n} pagina verrà rimossa dal nuovo PDF. Il file originale non viene modificato.",
    confirmMany: "{n} pagine verranno rimosse dal nuovo PDF. Il file originale non viene modificato.",
  },
};

const id: ExtrasStrings = {
  maxSize: "Ukuran maksimum",
  unit: "Satuan",
  sizeHint: "Kami mengompres secara bertahap dan memeriksa ukuran sebenarnya setelah setiap langkah. Jika batasnya terlalu kecil untuk dicapai tanpa merusak halaman, kami akan memberi tahu ukuran terkecil yang berhasil dicapai.",
  preset: "Preset",
  customSize: "Ukuran khusus",
  presetHint: "Preset hanya berupa ukuran piksel. Periksa persyaratan persis dari formulir Anda dan gunakan Khusus jika berbeda.",
  presetLabels: {
    passport: "Pas foto paspor, 35 × 45 mm pada 300 DPI (413 × 531 px)",
    usPassport: "Paspor / visa AS, 2 × 2 inci pada 300 DPI (600 × 600 px)",
    photo: "Foto 3:4 (450 × 600 px)",
    signature: "Tanda tangan, 3:1 (300 × 100 px)",
  },
  aspectRatio: "Rasio aspek",
  ratioLabels: { free: "Bebas (atur kedua ukuran)", square: "1:1 (persegi)", portrait: "3:4 (potret)", landscape: "4:3 (lanskap)", passport: "7:9 (paspor 35 × 45 mm)", strip: "3:1 (strip tanda tangan)", wide: "16:9 (layar lebar)" },
  width: "Lebar (px)",
  height: "Tinggi (px)",
  maxFileSize: "Ukuran file maksimum (KB, opsional; 1 KB = 1.024 byte)",
  fit: "Jika bentuk foto berbeda",
  fitCrop: "Potong agar memenuhi ukuran",
  fitPad: "Muat di dalam dengan margin putih",
  batchLabel: "Ukuran target untuk setiap gambar (KB; 1 KB = 1.024 byte)",
  batchHint: "Setiap gambar dikompres sendiri-sendiri hingga ukuran ini. Kualitas diturunkan lebih dulu, dan dimensi baru diperkecil jika perlu. File yang tidak mencapai target akan ditandai.",
  ocrLanguage: "Bahasa teks",
  ocrHint: "Paling baik untuk teks cetak yang tajam dan beresolusi tinggi. Tulisan tangan, pindaian beresolusi rendah, tabel, dan tata letak multi-kolom sering dikenali dengan buruk. Selalu periksa kembali hasilnya.",
  languageNames: { eng: "Inggris", por: "Portugis", spa: "Spanyol", fra: "Prancis", deu: "Jerman", ita: "Italia", ind: "Indonesia" },
  metaTitle: "Yang dihapus",
  metaPhotos: "Foto (JPG, PNG, WEBP, AVIF, TIFF): detail kamera dan tanggal EXIF, lokasi GPS, data XMP dan IPTC.",
  metaPdf: "PDF: judul, penulis, subjek, kata kunci, pembuat, produser, tanggal, dan metadata XMP.",
  metaOffice: "Word, Excel, PowerPoint: penulis, terakhir diubah oleh, judul, perusahaan, tanggal, dan detail aplikasi.",
  metaNote: "Format file tidak pernah berubah. Beberapa data struktural yang diperlukan agar file tetap valid akan tetap ada, dan konten yang terlihat seperti teks, komentar, atau tanda tangan yang digambar di halaman tidak diubah.",
  org: {
    intro: "Gunakan tombol di bawah setiap halaman untuk memindahkan, memutar, atau menghapusnya. Anda juga dapat menyeret halaman untuk mengurutkan ulang. Halaman yang dihapus tetap terlihat dan dapat dipulihkan sampai Anda mengonversi.",
    goBack: "Kembali",
    confirmYes: "Hapus halaman dan buat PDF",
    preview: "Pratinjau halaman asli {n}",
    restore: "Pulihkan halaman {n}",
    remove: "Hapus halaman {n}",
    restoreShort: "Pulihkan",
    moveEarlier: "Pindahkan halaman {n} lebih awal",
    moveLater: "Pindahkan halaman {n} lebih akhir",
    rotate: "Putar halaman {n} searah jarum jam",
    caption: "Halaman {n}",
    was: " (sebelumnya {o})",
    removed: ", dihapus",
    errPassword: "PDF ini dilindungi kata sandi. Hapus kata sandinya terlebih dahulu, lalu atur halamannya.",
    errRead: "Kami tidak dapat membaca PDF ini. Pastikan file tidak rusak, lalu coba lagi.",
    keepOne: "Sisakan setidaknya satu halaman.",
    confirmOne: "{n} halaman akan dihapus dari PDF baru. File asli Anda tidak diubah.",
    confirmMany: "{n} halaman akan dihapus dari PDF baru. File asli Anda tidak diubah.",
  },
};

export const extrasByLocale: Record<Locale, ExtrasStrings> = { en, pt, es, fr, de, it, id };
