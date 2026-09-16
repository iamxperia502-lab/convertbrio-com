import type { Locale } from "./i18n";
import type { ToolMeta } from "./i18n-strings";

/**
 * Localised name / description / SEO metadata per tool slug, per locale.
 * Only the 12 LOCALIZED_TOOL_SLUGS need entries. Missing entries fall back
 * to the English values in data/tools.ts.
 */
export const toolMetaByLocale: Partial<Record<Locale, Record<string, ToolMeta>>> = {
  pt: {
    "compress-pdf": {
      name: "Comprimir PDF",
      description: "Reduza o tamanho de um PDF re-codificando as imagens e removendo metadados.",
      seoTitle: "Comprimir PDF Online Grátis: Reduzir Tamanho de PDF | ConvertBrio",
      seoDescription: "Comprima PDF online de graça para reduzir o tamanho do arquivo e enviar por e-mail ou em portais. Sem cadastro, sem marca d'água, sem instalar nada.",
    },
    "compress-image": {
      name: "Comprimir Imagem",
      description: "Reduza uma imagem para um tamanho exato em KB: como 100 KB para um formulário ou visto.",
      seoTitle: "Comprimir Imagem para um Tamanho Exato (KB) | ConvertBrio",
      seoDescription: "Comprima uma imagem JPG, PNG, WEBP ou HEIC para um limite exato em KB: 100 KB para vistos, concursos e portais do governo. Grátis, sem cadastro.",
    },
    "merge-pdf": {
      name: "Juntar PDF",
      description: "Combine vários arquivos PDF em um só documento, na ordem que você quiser.",
      seoTitle: "Juntar PDF Online Grátis: Unir Arquivos PDF | ConvertBrio",
      seoDescription: "Junte vários PDFs em um único documento, na ordem que você escolher. Grátis, sem cadastro, sem marca d'água. Os arquivos são apagados automaticamente.",
    },
    "split-pdf": {
      name: "Dividir PDF",
      description: "Separe um PDF em páginas individuais para extrair ou reorganizar.",
      seoTitle: "Dividir PDF Online Grátis: Separar Páginas de PDF | ConvertBrio",
      seoDescription: "Divida um PDF em páginas individuais online, de graça. Extraia uma página ou separe o documento em vários arquivos, baixados em um ZIP. Sem cadastro.",
    },
    "pdf-to-word": {
      name: "PDF para Word",
      description: "Converta um PDF em um documento Word (DOCX) editável, mantendo o formato básico.",
      seoTitle: "Converter PDF para Word (DOCX Editável) Grátis | ConvertBrio",
      seoDescription: "Transforme um PDF em um documento Word editável: parágrafos, títulos, negrito, tabelas simples e imagens preservados. Grátis, sem cadastro.",
    },
    "word-to-pdf": {
      name: "Word para PDF",
      description: "Converta um documento Word (.docx) em um PDF pronto para impressão que abre em qualquer lugar.",
      seoTitle: "Converter Word para PDF Grátis Online: Sem Cadastro | ConvertBrio",
      seoDescription: "Converta um documento Word (.docx) em um PDF que preserva a formatação e abre igual em qualquer dispositivo. Grátis, sem conta, sem marca d'água.",
    },
    "pdf-to-jpg": {
      name: "PDF para JPG",
      description: "Exporte cada página do PDF como uma imagem JPG.",
      seoTitle: "PDF para JPG: Converter Páginas de PDF em Imagens Grátis | ConvertBrio",
      seoDescription: "Converta cada página de um PDF em uma imagem JPG online, de graça. Uma imagem por página, pronta para compartilhar ou publicar. Sem cadastro.",
    },
    "jpg-to-pdf": {
      name: "JPG para PDF",
      description: "Combine uma ou mais imagens em um único PDF, na ordem que você escolher.",
      seoTitle: "JPG para PDF: Juntar Imagens em um Único PDF Grátis | ConvertBrio",
      seoDescription: "Converta imagens JPG e PNG em um único PDF online, de graça. Junte várias fotos ou páginas digitalizadas em um documento, em ordem. Sem cadastro.",
    },
    "image-converter": {
      name: "Conversor de Imagem",
      description: "Converta imagens entre JPG, PNG, WEBP, AVIF, HEIC e GIF.",
      seoTitle: "Conversor de Imagem Online Grátis: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Converta imagens entre JPG, PNG, WEBP, AVIF, HEIC e GIF no navegador. Grátis, sem cadastro, os arquivos são apagados automaticamente após a conversão.",
    },
    "ocr-pdf": {
      name: "OCR de PDF",
      description: "Torne um PDF digitalizado pesquisável e leve o texto para o Word.",
      seoTitle: "OCR de PDF Grátis: Documento Digitalizado para Texto e Word | ConvertBrio",
      seoDescription: "Aplique OCR em um PDF digitalizado para torná-lo pesquisável e levar o texto para o Word. Reconhecimento de texto online e grátis, sem cadastro.",
    },
    "compress-powerpoint": {
      name: "Comprimir PowerPoint",
      description: "Reduza o tamanho de uma apresentação PowerPoint re-codificando as imagens dos slides.",
      seoTitle: "Comprimir PowerPoint Online Grátis: Reduzir Tamanho de PPTX | ConvertBrio",
      seoDescription: "Comprima uma apresentação PowerPoint (.pptx) online, de graça. Re-codifica as imagens para reduzir o arquivo para e-mail, mantendo os slides editáveis.",
    },
    "compress-word": {
      name: "Comprimir Word",
      description: "Reduza o tamanho de um documento Word re-codificando as imagens embutidas.",
      seoTitle: "Comprimir Documento Word Online Grátis: Reduzir Tamanho de DOCX | ConvertBrio",
      seoDescription: "Comprima um documento Word (.docx) online, de graça. Re-codifica as imagens embutidas para reduzir o arquivo para e-mail, mantendo o texto intacto.",
    },
  },

  es: {
    "compress-pdf": {
      name: "Comprimir PDF",
      description: "Reduce el tamaño de un PDF recodificando las imágenes y quitando metadatos.",
      seoTitle: "Comprimir PDF Online Gratis: Reducir el Tamaño del PDF | ConvertBrio",
      seoDescription: "Comprime PDF online gratis para reducir el tamaño del archivo y enviarlo por correo o subirlo a un portal. Sin registro, sin marca de agua, sin instalar nada.",
    },
    "compress-image": {
      name: "Comprimir Imagen",
      description: "Reduce una imagen a un tamaño exacto en KB: como 100 KB para un formulario o visado.",
      seoTitle: "Comprimir Imagen a un Tamaño Exacto (KB) | ConvertBrio",
      seoDescription: "Comprime una imagen JPG, PNG, WEBP o HEIC a un límite exacto en KB: 100 KB para visados, oposiciones y portales del gobierno. Gratis, sin registro.",
    },
    "merge-pdf": {
      name: "Unir PDF",
      description: "Combina varios archivos PDF en un solo documento, en el orden que quieras.",
      seoTitle: "Unir PDF Online Gratis: Combinar Archivos PDF | ConvertBrio",
      seoDescription: "Une varios PDF en un único documento, en el orden que elijas. Gratis, sin registro, sin marca de agua. Los archivos se eliminan automáticamente.",
    },
    "split-pdf": {
      name: "Dividir PDF",
      description: "Separa un PDF en páginas individuales para extraer o reorganizar.",
      seoTitle: "Dividir PDF Online Gratis: Separar Páginas de PDF | ConvertBrio",
      seoDescription: "Divide un PDF en páginas individuales online, gratis. Extrae una página o separa el documento en varios archivos, descargados en un ZIP. Sin registro.",
    },
    "pdf-to-word": {
      name: "PDF a Word",
      description: "Convierte un PDF en un documento Word (DOCX) editable, manteniendo el formato básico.",
      seoTitle: "Convertir PDF a Word (DOCX Editable) Gratis | ConvertBrio",
      seoDescription: "Transforma un PDF en un documento Word editable: párrafos, títulos, negrita, tablas simples e imágenes preservados. Gratis, sin registro.",
    },
    "word-to-pdf": {
      name: "Word a PDF",
      description: "Convierte un documento Word (.docx) en un PDF listo para imprimir que se abre en cualquier lugar.",
      seoTitle: "Convertir Word a PDF Gratis Online: Sin Registro | ConvertBrio",
      seoDescription: "Convierte un documento Word (.docx) en un PDF que conserva el formato y se ve igual en cualquier dispositivo. Gratis, sin cuenta, sin marca de agua.",
    },
    "pdf-to-jpg": {
      name: "PDF a JPG",
      description: "Exporta cada página del PDF como una imagen JPG.",
      seoTitle: "PDF a JPG: Convertir Páginas de PDF en Imágenes Gratis | ConvertBrio",
      seoDescription: "Convierte cada página de un PDF en una imagen JPG online, gratis. Una imagen por página, lista para compartir o publicar. Sin registro.",
    },
    "jpg-to-pdf": {
      name: "JPG a PDF",
      description: "Combina una o varias imágenes en un solo PDF, en el orden que elijas.",
      seoTitle: "JPG a PDF: Unir Imágenes en un Solo PDF Gratis | ConvertBrio",
      seoDescription: "Convierte imágenes JPG y PNG en un único PDF online, gratis. Une varias fotos o páginas escaneadas en un documento, en orden. Sin registro.",
    },
    "image-converter": {
      name: "Conversor de Imágenes",
      description: "Convierte imágenes entre JPG, PNG, WEBP, AVIF, HEIC y GIF.",
      seoTitle: "Conversor de Imágenes Online Gratis: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Convierte imágenes entre JPG, PNG, WEBP, AVIF, HEIC y GIF en el navegador. Gratis, sin registro, los archivos se eliminan automáticamente tras la conversión.",
    },
    "ocr-pdf": {
      name: "OCR de PDF",
      description: "Haz que un PDF escaneado sea buscable y lleva el texto a Word.",
      seoTitle: "OCR de PDF Gratis: Documento Escaneado a Texto y Word | ConvertBrio",
      seoDescription: "Aplica OCR a un PDF escaneado para hacerlo buscable y llevar el texto a Word. Reconocimiento de texto online y gratis, sin registro.",
    },
    "compress-powerpoint": {
      name: "Comprimir PowerPoint",
      description: "Reduce el tamaño de una presentación de PowerPoint recodificando las imágenes de las diapositivas.",
      seoTitle: "Comprimir PowerPoint Online Gratis: Reducir Tamaño de PPTX | ConvertBrio",
      seoDescription: "Comprime una presentación de PowerPoint (.pptx) online, gratis. Recodifica las imágenes para reducir el archivo para correo, manteniendo las diapositivas editables.",
    },
    "compress-word": {
      name: "Comprimir Word",
      description: "Reduce el tamaño de un documento Word recodificando las imágenes incrustadas.",
      seoTitle: "Comprimir Documento Word Online Gratis: Reducir Tamaño de DOCX | ConvertBrio",
      seoDescription: "Comprime un documento Word (.docx) online, gratis. Recodifica las imágenes incrustadas para reducir el archivo para correo, manteniendo el texto intacto.",
    },
  },

  fr: {
    "compress-pdf": {
      name: "Compresser un PDF",
      description: "Réduisez la taille d'un PDF en réencodant les images et en supprimant les métadonnées.",
      seoTitle: "Compresser un PDF en Ligne Gratuit: Réduire la Taille d'un PDF | ConvertBrio",
      seoDescription: "Compressez un PDF en ligne gratuitement pour réduire la taille du fichier et l'envoyer par e-mail ou sur un portail. Sans inscription, sans filigrane, sans installation.",
    },
    "compress-image": {
      name: "Compresser une Image",
      description: "Réduisez une image à une taille exacte en Ko: comme 100 Ko pour un formulaire ou un visa.",
      seoTitle: "Compresser une Image à une Taille Exacte (Ko) | ConvertBrio",
      seoDescription: "Compressez une image JPG, PNG, WEBP ou HEIC à une limite exacte en Ko: 100 Ko pour les visas, concours et portails administratifs. Gratuit, sans inscription.",
    },
    "merge-pdf": {
      name: "Fusionner des PDF",
      description: "Combinez plusieurs fichiers PDF en un seul document, dans l'ordre de votre choix.",
      seoTitle: "Fusionner des PDF en Ligne Gratuit: Combiner des Fichiers PDF | ConvertBrio",
      seoDescription: "Fusionnez plusieurs PDF en un seul document, dans l'ordre que vous choisissez. Gratuit, sans inscription, sans filigrane. Les fichiers sont supprimés automatiquement.",
    },
    "split-pdf": {
      name: "Diviser un PDF",
      description: "Séparez un PDF en pages individuelles pour extraire ou réorganiser.",
      seoTitle: "Diviser un PDF en Ligne Gratuit: Séparer les Pages d'un PDF | ConvertBrio",
      seoDescription: "Divisez un PDF en pages individuelles en ligne, gratuitement. Extrayez une page ou séparez le document en plusieurs fichiers, téléchargés dans un ZIP. Sans inscription.",
    },
    "pdf-to-word": {
      name: "PDF en Word",
      description: "Convertissez un PDF en document Word (DOCX) modifiable, en conservant la mise en forme de base.",
      seoTitle: "Convertir un PDF en Word (DOCX Modifiable) Gratuit | ConvertBrio",
      seoDescription: "Transformez un PDF en document Word modifiable: paragraphes, titres, gras, tableaux simples et images préservés. Gratuit, sans inscription.",
    },
    "word-to-pdf": {
      name: "Word en PDF",
      description: "Convertissez un document Word (.docx) en PDF prêt à imprimer qui s'ouvre partout.",
      seoTitle: "Convertir Word en PDF Gratuit en Ligne: Sans Inscription | ConvertBrio",
      seoDescription: "Convertissez un document Word (.docx) en PDF qui conserve la mise en forme et s'affiche à l'identique sur tout appareil. Gratuit, sans compte, sans filigrane.",
    },
    "pdf-to-jpg": {
      name: "PDF en JPG",
      description: "Exportez chaque page du PDF sous forme d'image JPG.",
      seoTitle: "PDF en JPG: Convertir les Pages d'un PDF en Images Gratuit | ConvertBrio",
      seoDescription: "Convertissez chaque page d'un PDF en image JPG en ligne, gratuitement. Une image par page, prête à partager ou publier. Sans inscription.",
    },
    "jpg-to-pdf": {
      name: "JPG en PDF",
      description: "Combinez une ou plusieurs images en un seul PDF, dans l'ordre de votre choix.",
      seoTitle: "JPG en PDF: Réunir des Images en un Seul PDF Gratuit | ConvertBrio",
      seoDescription: "Convertissez des images JPG et PNG en un seul PDF en ligne, gratuitement. Réunissez plusieurs photos ou pages scannées en un document, dans l'ordre. Sans inscription.",
    },
    "image-converter": {
      name: "Convertisseur d'Images",
      description: "Convertissez des images entre JPG, PNG, WEBP, AVIF, HEIC et GIF.",
      seoTitle: "Convertisseur d'Images en Ligne Gratuit: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Convertissez des images entre JPG, PNG, WEBP, AVIF, HEIC et GIF dans le navigateur. Gratuit, sans inscription, les fichiers sont supprimés automatiquement après conversion.",
    },
    "ocr-pdf": {
      name: "OCR de PDF",
      description: "Rendez un PDF scanné consultable et récupérez le texte dans Word.",
      seoTitle: "OCR de PDF Gratuit: Document Scanné en Texte et Word | ConvertBrio",
      seoDescription: "Appliquez l'OCR à un PDF scanné pour le rendre consultable et récupérer le texte dans Word. Reconnaissance de texte en ligne et gratuite, sans inscription.",
    },
    "compress-powerpoint": {
      name: "Compresser un PowerPoint",
      description: "Réduisez la taille d'une présentation PowerPoint en réencodant les images des diapositives.",
      seoTitle: "Compresser un PowerPoint en Ligne Gratuit: Réduire la Taille d'un PPTX | ConvertBrio",
      seoDescription: "Compressez une présentation PowerPoint (.pptx) en ligne, gratuitement. Réencode les images pour réduire le fichier pour l'e-mail, en gardant les diapositives modifiables.",
    },
    "compress-word": {
      name: "Compresser un Document Word",
      description: "Réduisez la taille d'un document Word en réencodant les images intégrées.",
      seoTitle: "Compresser un Document Word en Ligne Gratuit: Réduire la Taille d'un DOCX | ConvertBrio",
      seoDescription: "Compressez un document Word (.docx) en ligne, gratuitement. Réencode les images intégrées pour réduire le fichier pour l'e-mail, en gardant le texte intact.",
    },
  },

  de: {
    "compress-pdf": {
      name: "PDF komprimieren",
      description: "Reduziere die Größe eines PDFs, indem die Bilder neu kodiert und Metadaten entfernt werden.",
      seoTitle: "PDF komprimieren Online Kostenlos: PDF-Größe reduzieren | ConvertBrio",
      seoDescription: "Komprimiere ein PDF online kostenlos, um die Dateigröße für E-Mail oder Portale zu verringern. Ohne Anmeldung, ohne Wasserzeichen, ohne Installation.",
    },
    "compress-image": {
      name: "Bild komprimieren",
      description: "Verkleinere ein Bild auf eine exakte Größe in KB: etwa 100 KB für ein Formular oder Visum.",
      seoTitle: "Bild auf eine exakte Größe komprimieren (KB) | ConvertBrio",
      seoDescription: "Komprimiere ein JPG-, PNG-, WEBP- oder HEIC-Bild auf ein exaktes KB-Limit: 100 KB für Visa, Bewerbungen und Behördenportale. Kostenlos, ohne Anmeldung.",
    },
    "merge-pdf": {
      name: "PDF zusammenfügen",
      description: "Füge mehrere PDF-Dateien in der gewünschten Reihenfolge zu einem Dokument zusammen.",
      seoTitle: "PDF zusammenfügen Online Kostenlos: PDF-Dateien zusammenführen | ConvertBrio",
      seoDescription: "Füge mehrere PDFs in der von dir gewählten Reihenfolge zu einem Dokument zusammen. Kostenlos, ohne Anmeldung, ohne Wasserzeichen. Dateien werden automatisch gelöscht.",
    },
    "split-pdf": {
      name: "PDF teilen",
      description: "Teile ein PDF in einzelne Seiten, um sie zu extrahieren oder neu zu ordnen.",
      seoTitle: "PDF teilen Online Kostenlos: PDF-Seiten trennen | ConvertBrio",
      seoDescription: "Teile ein PDF online kostenlos in einzelne Seiten. Extrahiere eine Seite oder trenne das Dokument in mehrere Dateien, als ZIP heruntergeladen. Ohne Anmeldung.",
    },
    "pdf-to-word": {
      name: "PDF in Word",
      description: "Wandle ein PDF in ein bearbeitbares Word-Dokument (DOCX) um und behalte die Grundformatierung.",
      seoTitle: "PDF in Word umwandeln (bearbeitbares DOCX) Kostenlos | ConvertBrio",
      seoDescription: "Verwandle ein PDF in ein bearbeitbares Word-Dokument: Absätze, Überschriften, Fettdruck, einfache Tabellen und Bilder bleiben erhalten. Kostenlos, ohne Anmeldung.",
    },
    "word-to-pdf": {
      name: "Word in PDF",
      description: "Wandle ein Word-Dokument (.docx) in ein druckfertiges PDF um, das sich überall öffnet.",
      seoTitle: "Word in PDF umwandeln Kostenlos Online: Ohne Anmeldung | ConvertBrio",
      seoDescription: "Wandle ein Word-Dokument (.docx) in ein PDF um, das die Formatierung beibehält und auf jedem Gerät gleich aussieht. Kostenlos, ohne Konto, ohne Wasserzeichen.",
    },
    "pdf-to-jpg": {
      name: "PDF in JPG",
      description: "Exportiere jede PDF-Seite als JPG-Bild.",
      seoTitle: "PDF in JPG: PDF-Seiten in Bilder umwandeln Kostenlos | ConvertBrio",
      seoDescription: "Wandle jede Seite eines PDFs online kostenlos in ein JPG-Bild um. Ein Bild pro Seite, bereit zum Teilen oder Veröffentlichen. Ohne Anmeldung.",
    },
    "jpg-to-pdf": {
      name: "JPG in PDF",
      description: "Füge ein oder mehrere Bilder in der gewünschten Reihenfolge zu einem PDF zusammen.",
      seoTitle: "JPG in PDF: Bilder zu einem PDF zusammenfügen Kostenlos | ConvertBrio",
      seoDescription: "Wandle JPG- und PNG-Bilder online kostenlos in ein einziges PDF um. Füge mehrere Fotos oder gescannte Seiten in Reihenfolge zu einem Dokument zusammen. Ohne Anmeldung.",
    },
    "image-converter": {
      name: "Bildkonverter",
      description: "Konvertiere Bilder zwischen JPG, PNG, WEBP, AVIF, HEIC und GIF.",
      seoTitle: "Bildkonverter Online Kostenlos: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Konvertiere Bilder zwischen JPG, PNG, WEBP, AVIF, HEIC und GIF im Browser. Kostenlos, ohne Anmeldung, Dateien werden nach der Konvertierung automatisch gelöscht.",
    },
    "ocr-pdf": {
      name: "OCR für PDF",
      description: "Mache ein gescanntes PDF durchsuchbar und übernimm den Text in Word.",
      seoTitle: "OCR für PDF Kostenlos: Gescanntes Dokument in Text und Word | ConvertBrio",
      seoDescription: "Wende OCR auf ein gescanntes PDF an, um es durchsuchbar zu machen und den Text in Word zu übernehmen. Texterkennung online und kostenlos, ohne Anmeldung.",
    },
    "compress-powerpoint": {
      name: "PowerPoint komprimieren",
      description: "Reduziere die Größe einer PowerPoint-Präsentation, indem die Folienbilder neu kodiert werden.",
      seoTitle: "PowerPoint komprimieren Online Kostenlos: PPTX-Größe reduzieren | ConvertBrio",
      seoDescription: "Komprimiere eine PowerPoint-Präsentation (.pptx) online kostenlos. Bilder werden neu kodiert, um die Datei für E-Mail zu verkleinern, die Folien bleiben bearbeitbar.",
    },
    "compress-word": {
      name: "Word-Dokument komprimieren",
      description: "Reduziere die Größe eines Word-Dokuments, indem die eingebetteten Bilder neu kodiert werden.",
      seoTitle: "Word-Dokument komprimieren Online Kostenlos: DOCX-Größe reduzieren | ConvertBrio",
      seoDescription: "Komprimiere ein Word-Dokument (.docx) online kostenlos. Eingebettete Bilder werden neu kodiert, um die Datei für E-Mail zu verkleinern, der Text bleibt unverändert.",
    },
  },

  it: {
    "compress-pdf": {
      name: "Comprimere PDF",
      description: "Riduci le dimensioni di un PDF ricodificando le immagini e rimuovendo i metadati.",
      seoTitle: "Comprimere PDF Online Gratis: Ridurre le Dimensioni di un PDF | ConvertBrio",
      seoDescription: "Comprimi un PDF online gratis per ridurre le dimensioni del file e inviarlo via e-mail o su un portale. Senza registrazione, senza filigrana, senza installare nulla.",
    },
    "compress-image": {
      name: "Comprimere Immagine",
      description: "Riduci un'immagine a una dimensione esatta in KB: come 100 KB per un modulo o un visto.",
      seoTitle: "Comprimere Immagine a una Dimensione Esatta (KB) | ConvertBrio",
      seoDescription: "Comprimi un'immagine JPG, PNG, WEBP o HEIC a un limite esatto in KB: 100 KB per visti, concorsi e portali della pubblica amministrazione. Gratis, senza registrazione.",
    },
    "merge-pdf": {
      name: "Unire PDF",
      description: "Combina più file PDF in un unico documento, nell'ordine che preferisci.",
      seoTitle: "Unire PDF Online Gratis: Combinare File PDF | ConvertBrio",
      seoDescription: "Unisci più PDF in un unico documento, nell'ordine che scegli. Gratis, senza registrazione, senza filigrana. I file vengono eliminati automaticamente.",
    },
    "split-pdf": {
      name: "Dividere PDF",
      description: "Separa un PDF in pagine singole per estrarle o riordinarle.",
      seoTitle: "Dividere PDF Online Gratis: Separare le Pagine di un PDF | ConvertBrio",
      seoDescription: "Dividi un PDF in pagine singole online, gratis. Estrai una pagina o separa il documento in più file, scaricati in un ZIP. Senza registrazione.",
    },
    "pdf-to-word": {
      name: "PDF in Word",
      description: "Converti un PDF in un documento Word (DOCX) modificabile, mantenendo la formattazione di base.",
      seoTitle: "Convertire PDF in Word (DOCX Modificabile) Gratis | ConvertBrio",
      seoDescription: "Trasforma un PDF in un documento Word modificabile: paragrafi, titoli, grassetto, tabelle semplici e immagini preservati. Gratis, senza registrazione.",
    },
    "word-to-pdf": {
      name: "Word in PDF",
      description: "Converti un documento Word (.docx) in un PDF pronto per la stampa che si apre ovunque.",
      seoTitle: "Convertire Word in PDF Gratis Online: Senza Registrazione | ConvertBrio",
      seoDescription: "Converti un documento Word (.docx) in un PDF che mantiene la formattazione e appare identico su ogni dispositivo. Gratis, senza account, senza filigrana.",
    },
    "pdf-to-jpg": {
      name: "PDF in JPG",
      description: "Esporta ogni pagina del PDF come immagine JPG.",
      seoTitle: "PDF in JPG: Convertire le Pagine di un PDF in Immagini Gratis | ConvertBrio",
      seoDescription: "Converti ogni pagina di un PDF in un'immagine JPG online, gratis. Un'immagine per pagina, pronta da condividere o pubblicare. Senza registrazione.",
    },
    "jpg-to-pdf": {
      name: "JPG in PDF",
      description: "Combina una o più immagini in un unico PDF, nell'ordine che scegli.",
      seoTitle: "JPG in PDF: Unire Immagini in un Unico PDF Gratis | ConvertBrio",
      seoDescription: "Converti immagini JPG e PNG in un unico PDF online, gratis. Unisci più foto o pagine scansionate in un documento, in ordine. Senza registrazione.",
    },
    "image-converter": {
      name: "Convertitore di Immagini",
      description: "Converti immagini tra JPG, PNG, WEBP, AVIF, HEIC e GIF.",
      seoTitle: "Convertitore di Immagini Online Gratis: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Converti immagini tra JPG, PNG, WEBP, AVIF, HEIC e GIF nel browser. Gratis, senza registrazione, i file vengono eliminati automaticamente dopo la conversione.",
    },
    "ocr-pdf": {
      name: "OCR per PDF",
      description: "Rendi un PDF scansionato ricercabile e porta il testo in Word.",
      seoTitle: "OCR per PDF Gratis: Documento Scansionato in Testo e Word | ConvertBrio",
      seoDescription: "Applica l'OCR a un PDF scansionato per renderlo ricercabile e portare il testo in Word. Riconoscimento del testo online e gratuito, senza registrazione.",
    },
    "compress-powerpoint": {
      name: "Comprimere PowerPoint",
      description: "Riduci le dimensioni di una presentazione PowerPoint ricodificando le immagini delle diapositive.",
      seoTitle: "Comprimere PowerPoint Online Gratis: Ridurre le Dimensioni di un PPTX | ConvertBrio",
      seoDescription: "Comprimi una presentazione PowerPoint (.pptx) online, gratis. Ricodifica le immagini per ridurre il file per l'e-mail, mantenendo le diapositive modificabili.",
    },
    "compress-word": {
      name: "Comprimere Documento Word",
      description: "Riduci le dimensioni di un documento Word ricodificando le immagini incorporate.",
      seoTitle: "Comprimere Documento Word Online Gratis: Ridurre le Dimensioni di un DOCX | ConvertBrio",
      seoDescription: "Comprimi un documento Word (.docx) online, gratis. Ricodifica le immagini incorporate per ridurre il file per l'e-mail, mantenendo il testo intatto.",
    },
  },

  id: {
    "compress-pdf": {
      name: "Kompres PDF",
      description: "Kurangi ukuran PDF dengan mengodekan ulang gambar dan menghapus metadata.",
      seoTitle: "Kompres PDF Online Gratis: Perkecil Ukuran PDF | ConvertBrio",
      seoDescription: "Kompres PDF online gratis untuk memperkecil ukuran file agar bisa dikirim lewat email atau diunggah ke portal. Tanpa daftar, tanpa watermark, tanpa instal.",
    },
    "compress-image": {
      name: "Kompres Gambar",
      description: "Perkecil gambar ke ukuran KB yang tepat: misalnya 100 KB untuk formulir atau visa.",
      seoTitle: "Kompres Gambar ke Ukuran KB yang Tepat | ConvertBrio",
      seoDescription: "Kompres gambar JPG, PNG, WEBP, atau HEIC ke batas KB yang tepat: 100 KB untuk visa, seleksi CPNS, dan portal pemerintah. Gratis, tanpa daftar.",
    },
    "merge-pdf": {
      name: "Gabung PDF",
      description: "Gabungkan beberapa file PDF menjadi satu dokumen, dalam urutan yang kamu mau.",
      seoTitle: "Gabung PDF Online Gratis: Menggabungkan File PDF | ConvertBrio",
      seoDescription: "Gabungkan beberapa PDF menjadi satu dokumen, dalam urutan yang kamu pilih. Gratis, tanpa daftar, tanpa watermark. File dihapus otomatis.",
    },
    "split-pdf": {
      name: "Pisah PDF",
      description: "Pisahkan PDF menjadi halaman terpisah untuk diambil atau disusun ulang.",
      seoTitle: "Pisah PDF Online Gratis: Memisahkan Halaman PDF | ConvertBrio",
      seoDescription: "Pisahkan PDF menjadi halaman terpisah secara online, gratis. Ambil satu halaman atau pecah dokumen menjadi beberapa file, diunduh dalam ZIP. Tanpa daftar.",
    },
    "pdf-to-word": {
      name: "PDF ke Word",
      description: "Ubah PDF menjadi dokumen Word (DOCX) yang bisa diedit, dengan format dasar tetap terjaga.",
      seoTitle: "Konversi PDF ke Word (DOCX yang Bisa Diedit) Gratis | ConvertBrio",
      seoDescription: "Ubah PDF menjadi dokumen Word yang bisa diedit: paragraf, judul, tebal, tabel sederhana, dan gambar tetap terjaga. Gratis, tanpa daftar.",
    },
    "word-to-pdf": {
      name: "Word ke PDF",
      description: "Ubah dokumen Word (.docx) menjadi PDF siap cetak yang bisa dibuka di mana saja.",
      seoTitle: "Konversi Word ke PDF Gratis Online: Tanpa Daftar | ConvertBrio",
      seoDescription: "Ubah dokumen Word (.docx) menjadi PDF yang mempertahankan format dan tampil sama di perangkat apa pun. Gratis, tanpa akun, tanpa watermark.",
    },
    "pdf-to-jpg": {
      name: "PDF ke JPG",
      description: "Ekspor setiap halaman PDF sebagai gambar JPG.",
      seoTitle: "PDF ke JPG: Konversi Halaman PDF Menjadi Gambar Gratis | ConvertBrio",
      seoDescription: "Ubah setiap halaman PDF menjadi gambar JPG secara online, gratis. Satu gambar per halaman, siap dibagikan atau diunggah. Tanpa daftar.",
    },
    "jpg-to-pdf": {
      name: "JPG ke PDF",
      description: "Gabungkan satu atau beberapa gambar menjadi satu PDF, dalam urutan yang kamu pilih.",
      seoTitle: "JPG ke PDF: Menggabungkan Gambar Menjadi Satu PDF Gratis | ConvertBrio",
      seoDescription: "Ubah gambar JPG dan PNG menjadi satu PDF secara online, gratis. Gabungkan beberapa foto atau halaman hasil scan menjadi satu dokumen, berurutan. Tanpa daftar.",
    },
    "image-converter": {
      name: "Konverter Gambar",
      description: "Konversi gambar antara JPG, PNG, WEBP, AVIF, HEIC, dan GIF.",
      seoTitle: "Konverter Gambar Online Gratis: JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
      seoDescription: "Konversi gambar antara JPG, PNG, WEBP, AVIF, HEIC, dan GIF di browser. Gratis, tanpa daftar, file dihapus otomatis setelah konversi.",
    },
    "ocr-pdf": {
      name: "OCR PDF",
      description: "Buat PDF hasil scan bisa dicari dan pindahkan teksnya ke Word.",
      seoTitle: "OCR PDF Gratis: Dokumen Hasil Scan ke Teks dan Word | ConvertBrio",
      seoDescription: "Terapkan OCR pada PDF hasil scan agar bisa dicari dan teksnya bisa dipindahkan ke Word. Pengenalan teks online dan gratis, tanpa daftar.",
    },
    "compress-powerpoint": {
      name: "Kompres PowerPoint",
      description: "Kurangi ukuran presentasi PowerPoint dengan mengodekan ulang gambar pada slide.",
      seoTitle: "Kompres PowerPoint Online Gratis: Perkecil Ukuran PPTX | ConvertBrio",
      seoDescription: "Kompres presentasi PowerPoint (.pptx) online, gratis. Mengodekan ulang gambar untuk memperkecil file agar bisa dikirim email, slide tetap bisa diedit.",
    },
    "compress-word": {
      name: "Kompres Word",
      description: "Kurangi ukuran dokumen Word dengan mengodekan ulang gambar yang tertanam.",
      seoTitle: "Kompres Dokumen Word Online Gratis: Perkecil Ukuran DOCX | ConvertBrio",
      seoDescription: "Kompres dokumen Word (.docx) online, gratis. Mengodekan ulang gambar yang tertanam untuk memperkecil file agar bisa dikirim email, teks tetap utuh.",
    },
  },
};
