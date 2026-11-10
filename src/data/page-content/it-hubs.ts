import type { HubDoc, HubUiStrings } from "./types";

export const hubsIt: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "Strumenti PDF",
    h1: "Strumenti PDF: unire, dividere, organizzare, comprimere e convertire",
    seoTitle: "Strumenti PDF Gratis: Unisci, Dividi, Organizza e Comprimi | ConvertBrio",
    description:
      "Unisci, dividi, riordina, ruota, sblocca, comprimi e converti PDF online. Strumenti PDF ConvertBrio gratuiti e senza registrazione.",
    intro: [
      "I PDF nascono per apparire uguali ovunque, ed è proprio per questo che sono scomodi da modificare. Questi strumenti coprono i lavori che si presentano davvero: unire più file, separare le pagine, rimetterle nell'ordine giusto, ridurre un file fino al limite di un caricamento e trasformare le pagine in immagini o le immagini in pagine.",
      "Ogni strumento funziona nel browser, elabora file fino a 100 MB e non richiede un account. Il file originale viene eliminato subito dopo essere stato letto per la conversione; il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file sono elaborati automaticamente, senza revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase). Scegli l'operazione qui sotto, oppure segui uno dei flussi di lavoro se il tuo compito richiede più passaggi.",
    ],
    workflows: [
      {
        title: "Preparare un PDF per un caricamento con limite di peso",
        steps: [
          "Elimina le pagine che non ti servono con l'organizzatore visuale.",
          "Riducilo al limite esatto consentito dal modulo.",
        ],
      },
      {
        title: "Trasformare le foto del telefono in un unico PDF",
        steps: [
          "Unisci le foto in un solo PDF.",
          "Riduci le dimensioni se è troppo pesante per l'e-mail.",
        ],
      },
      {
        title: "Assemblare una relazione da più documenti",
        steps: [
          "Unisci i PDF separati nell'ordine giusto.",
          "Aggiungi i numeri di pagina al documento finito.",
        ],
      },
    ],
    chooser: {
      heading: "Quale strumento PDF devo usare?",
      body: "Usa Unire PDF per unire i file e Dividere PDF per separare ogni pagina. Se ti serve tenere solo alcune pagine, cambiarne l'ordine o correggere una pagina storta, l'Organizzatore di Pagine PDF ti fa vedere prima ogni pagina. Per i limiti di peso, Comprimere PDF applica un solo livello standard, mentre Comprimere PDF a una Dimensione lavora per raggiungere un obiettivo in KB o MB e indica la dimensione ottenuta.",
    },
  },
  image: {
    name: "Strumenti Immagine",
    h1: "Strumenti Immagine: convertire, ridimensionare, comprimere e ritoccare le foto",
    seoTitle: "Strumenti Immagine Gratis: Converti, Ridimensiona e Comprimi | ConvertBrio",
    description:
      "Converti HEIC, JPG, PNG, WEBP e AVIF, ridimensiona a pixel esatti, comprimi a un peso in KB, ritaglia, ruota e rimuovi lo sfondo. Strumenti immagine gratuiti e senza registrazione.",
    intro: [
      "La maggior parte dei problemi con le immagini si riduce a tre cose: il formato non è accettato, le dimensioni in pixel sono sbagliate o il file è troppo pesante. Gli strumenti qui risolvono ciascun problema in modo diretto, che tu stia preparando una foto profilo, compilando un modulo di candidatura o pubblicando immagini su un sito web.",
      "Le conversioni mantengono la risoluzione originale e gli strumenti di compressione lavorano fino a raggiungere la dimensione che scegli. Nessuna filigrana. Il file originale viene eliminato subito dopo essere stato letto per la conversione; il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file sono elaborati automaticamente, senza revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
    ],
    workflows: [
      {
        title: "Preparare una foto per un modulo di candidatura",
        steps: [
          "Ridimensionala ai pixel esatti e al limite in KB richiesti dal modulo.",
          "Elimina i dati di posizione e della fotocamera prima di caricarla.",
        ],
      },
      {
        title: "Aprire ovunque una foto dell'iPhone",
        steps: [
          "Converti la foto HEIC in JPG.",
          "Comprimila se il file è ancora troppo grande per essere inviato.",
        ],
      },
      {
        title: "Ottimizzare un gruppo di immagini per un sito web",
        steps: [
          "Converti in un formato moderno come WEBP.",
          "Comprimi l'intero gruppo alla stessa dimensione di destinazione.",
        ],
      },
    ],
    chooser: {
      heading: "Quale strumento immagine devo usare?",
      body: "Usa il Convertitore di Immagini quando il problema è il formato, Ridimensionare Immagine per le dimensioni in pixel e Comprimere Immagine quando conta solo il peso del file. Ridimensionare Foto e Firma imposta pixel esatti e limite in KB in un solo passaggio, ed è ciò che la maggior parte dei moduli richiede. Per più file insieme, usa il Compressore di Immagini in Batch.",
    },
  },
  document: {
    name: "Strumenti Documento",
    h1: "Strumenti Documento: Word, Excel, PowerPoint, PDF e testo",
    seoTitle: "Strumenti Documento Gratis: Word, Excel, PowerPoint e PDF | ConvertBrio",
    description:
      "Converti Word, Excel e PowerPoint da e verso PDF, comprimi i file Office, estrai il testo dalle scansioni e rimuovi i metadati nascosti. Strumenti documento gratuiti, senza registrazione.",
    intro: [
      "I documenti passano tra persone che usano software diversi. Questi strumenti traducono tra Word, Excel, PowerPoint e PDF, riducono i file Office troppo pesanti per l'e-mail, estraggono il testo dalle scansioni e rimuovono i dati dell'autore che i file portano con sé a tua insaputa.",
      "Ogni strumento dichiara cosa mantiene e cosa no: per esempio, riconvertire un PDF in Word non può ricostruire alla perfezione layout complessi. I caricamenti sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione; il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file sono elaborati automaticamente, senza revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
    ],
    workflows: [
      {
        title: "Inviare un documento Word non modificabile",
        steps: [
          "Convertilo in PDF per mantenere fisso il layout.",
          "Se serve, cancella prima i dati dell'autore e dell'azienda.",
        ],
      },
      {
        title: "Modificare un documento che hai solo in scansione",
        steps: [
          "Converti la scansione in un file Word modificabile.",
          "Salva la versione corretta come PDF.",
        ],
      },
      {
        title: "Inviare via e-mail una presentazione pesante",
        steps: ["Comprimi il PowerPoint fino a una dimensione adatta all'e-mail."],
      },
    ],
    chooser: {
      heading: "PDF in Word o Scansione in Word?",
      body: "Se riesci a selezionare le parole nel PDF, usa PDF in Word, che mantiene la formattazione il più fedelmente possibile. Se il PDF è l'immagine di una pagina, non c'è testo da convertire finché non viene riconosciuto: in quel caso usa Scansione in Word.",
    },
  },
  compress: {
    name: "Strumenti di Compressione",
    h1: "Strumenti di Compressione: ridurre il peso di PDF, immagini e file Office",
    seoTitle: "Strumenti di Compressione Gratis: PDF, Immagini e Office | ConvertBrio",
    description:
      "Riduci PDF, foto, file Word e PowerPoint per rispettare il limite di un'e-mail o di un caricamento, anche con obiettivi in KB e MB. Gratis, senza registrazione.",
    intro: [
      "Moduli di caricamento, sistemi di posta e siti web fissano tutti dei limiti di peso, e il modo giusto di ridurre un file dipende da cosa contiene. Le foto si comprimono abbassando la qualità o le dimensioni, i PDF si riducono soprattutto ricodificando le immagini che contengono, e i file Office includono contenuti multimediali incorporati che si possono ridurre separatamente.",
      "Quando uno strumento lavora verso un obiettivo, misura il risultato reale e ti dice la dimensione raggiunta, anche quando l'obiettivo non può essere centrato senza rovinare il file.",
    ],
    workflows: [
      {
        title: "Far rientrare un PDF scansionato nel limite di un portale",
        steps: [
          "Comprimi il PDF alla dimensione consentita dal portale.",
          "Se è ancora troppo grande, dividilo in più parti.",
        ],
      },
      {
        title: "Ridurre molte foto per un unico caricamento",
        steps: ["Comprimi l'intero gruppo a un'unica dimensione di destinazione in KB."],
      },
    ],
    chooser: {
      heading: "Quanto può ridursi un file?",
      body: "Dipende dal contenuto. I PDF e i PowerPoint ricchi di foto si riducono molto, mentre i PDF di solo testo sono già compatti. Scendere a una dimensione molto piccola costa qualità: parti dal limite che hai davvero, non dal numero più basso possibile.",
    },
  },
  ocr: {
    name: "Strumenti OCR",
    h1: "Strumenti OCR: estrarre il testo da scansioni, foto e PDF",
    seoTitle: "Strumenti OCR Gratis: Immagine in Testo, Scansione in Word, OCR PDF | ConvertBrio",
    description:
      "Usa l'OCR per copiare il testo da un'immagine, trasformare una scansione in un file Word modificabile o rendere ricercabile un PDF scansionato. Gratis, senza registrazione, con note oneste sulla precisione.",
    intro: [
      "Una scansione o la foto di un testo è soltanto un'immagine. Il riconoscimento ottico dei caratteri (OCR) legge le lettere al suo interno e ti restituisce vero testo selezionabile. Lo strumento da usare dipende da ciò che vuoi ottenere: testo semplice da copiare, un file Word modificabile o lo stesso PDF reso ricercabile.",
      "L'OCR è preciso sul testo stampato pulito e ad alta risoluzione, e molto meno su scrittura a mano, scansioni di bassa qualità e tabelle complesse. Ogni pagina degli strumenti spiega cosa aspettarsi.",
    ],
    workflows: [
      {
        title: "Trasformare una lettera scansionata in un documento modificabile",
        steps: [
          "Converti la scansione in Word.",
          "Rileggi il testo, poi salvalo come PDF.",
        ],
      },
      {
        title: "Rendere ricercabile un archivio di scansioni",
        steps: [
          "Esegui l'OCR per aggiungere un livello di testo a ogni PDF.",
          "Riduci il PDF ricercabile per l'archiviazione.",
        ],
      },
    ],
    chooser: {
      heading: "Quale strumento OCR devo usare?",
      body: "Immagine in Testo serve per una foto o uno screenshot quando vuoi solo le parole, che vengono mostrate nella pagina da copiare. Scansione in Word restituisce un DOCX modificabile da una pagina scansionata o da un PDF. OCR PDF mantiene le pagine originali esattamente come sono e aggiunge un livello di testo invisibile, così il PDF diventa ricercabile.",
    },
  },
  ai: {
    name: "Strumenti IA",
    h1: "Strumenti IA: migliorare, ingrandire e ritagliare le foto",
    seoTitle: "Strumenti IA per Foto Gratis: Migliora, Ingrandisci, Rimuovi Sfondo | ConvertBrio",
    description:
      "Migliora, ingrandisci e ritaglia le foto con l'IA, oppure crea una foto tessera. Gratis, senza registrazione, con note oneste su cosa può e non può fare ogni strumento.",
    intro: [
      "Questi strumenti usano modelli di apprendimento automatico per lavori difficili da fare a mano: rendere nitida una foto spenta, ingrandire una piccola immagine senza trasformarla in una macchia e separare una persona dal suo sfondo.",
      "I risultati dell'IA dipendono dal materiale di partenza. Una foto chiara dà un risultato chiaro, e nessuno di questi strumenti può recuperare dettagli che non sono mai stati catturati. Ogni pagina spiega dove uno strumento funziona bene e dove no.",
    ],
    workflows: [
      {
        title: "Migliorare una foto piccola e spenta",
        steps: [
          "Bilancia colori e nitidezza.",
          "Ingrandiscila per la stampa o per uno schermo più grande.",
        ],
      },
      {
        title: "Creare un'immagine pulita per un prodotto o un profilo",
        steps: [
          "Rimuovi lo sfondo.",
          "Comprimi il risultato per il web.",
        ],
      },
    ],
    chooser: {
      heading: "Miglioramento o upscaler?",
      body: "Il Miglioramento Immagine con IA corregge colori e nitidezza mantenendo le stesse dimensioni. L'Upscaler con IA aumenta le dimensioni in pixel. Se una foto è sia piccola sia spenta, miglioramela prima, poi ingrandiscila.",
    },
  },
};

export const hubUiIt: HubUiStrings = {
  allTemplate: "Tutti gli strumenti: {name}",
  workflows: "Flussi di lavoro",
  guides: "Guide",
  otherCategories: "Altre categorie di strumenti",
  allTools: "Tutti gli strumenti",
  home: "Home",
  toolLibrary: "Libreria di strumenti",
  allToolsIntro: "Tutti gli strumenti ConvertBrio, organizzati per categoria. Ne aggiungiamo di nuovi con regolarità.",
  categoriesLabel: "Categorie di strumenti",
  categoryGuide: "Guida alla categoria",
  moreTools: "Altri strumenti",
  moreToolsDesc: "Strumenti complementari su altri siti ConvertBrio.",
  categoryDescs: {
    convert: "Cambia qualsiasi file da un formato all'altro.",
    compress: "Riduci il peso dei file mantenendo intatta la qualità.",
    pdf: "Unisci, dividi, modifica e proteggi i documenti PDF.",
    image: "Converti, ridimensiona, ritaglia e ritocca le immagini.",
    document: "Sposta i contenuti tra Word, Excel, PowerPoint e PDF.",
    ai: "Migliora e restaura le immagini con modelli di IA.",
  },
};
