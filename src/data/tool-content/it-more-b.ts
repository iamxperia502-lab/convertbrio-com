import type { ToolContentEntry } from "../toolContent";

// Italian (it) long-form tool content, slice B. Links point to the /it/ tool pages.

export const toolContentItMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "Convertitore da PDF a PNG: esporta le pagine senza perdere nitidezza",
    intro:
      "Quando ti serve una pagina PDF come immagine senza perdere nitidezza, per schemi, schermate o pagine ricche di testo, il PNG è il formato di esportazione migliore rispetto al JPG. Il convertitore da PDF a PNG di ConvertBrio trasforma ogni pagina in un file immagine senza perdita di qualità.",
    sections: [
      {
        heading: "Come convertire un PDF in PNG",
        body: "Carica il tuo PDF e ConvertBrio renderizza ogni pagina come immagine PNG alla massima qualità. I PDF con più pagine producono un PNG per pagina, scaricati insieme come set completo.",
      },
      {
        heading: "Perché scegliere il PNG al posto del JPG",
        body: "La compressione senza perdita del PNG mantiene testo fine, disegni al tratto e bordi netti, senza l'effetto di sfocatura che la compressione del JPG può introdurre. Conta soprattutto per le pagine con testo piccolo, diagrammi tecnici o contenuti che pensi di ingrandire o modificare ulteriormente.",
      },
      {
        heading: "Quanto pesano i file",
        body: "Le esportazioni PNG sono in genere più pesanti dei JPG equivalenti, soprattutto per le pagine con molti dettagli visivi. Se le dimensioni contano più della nitidezza al pixel, per esempio per una condivisione informale o per la pubblicazione online, PDF in JPG può essere la scelta più pratica.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione delle pagine PDF in immagini PNG.",
    faq: [
      {
        question: "Perché usare il PNG invece del JPG per una pagina PDF?",
        answer:
          "Il PNG è senza perdita, quindi mantiene testo e dettagli fini più nitidi del JPG, la cui compressione può ammorbidire leggermente testo piccolo e disegni al tratto. Usa il PNG quando la chiarezza conta più delle dimensioni del file.",
      },
      {
        question: "PDF in PNG converte anche i documenti con più pagine?",
        answer:
          "Sì, ogni pagina del PDF viene renderizzata come immagine PNG a sé, quindi un documento con più pagine produce un'immagine per pagina.",
      },
      {
        question: "I file PNG saranno più grandi delle esportazioni JPG?",
        answer:
          "In genere sì, perché il PNG non scarta i dettagli come fa la compressione con perdita del JPG. Per una condivisione informale in cui contano di più le dimensioni, PDF in JPG può essere l'opzione migliore.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Convertitore da Immagine a PDF: unisci le foto in un unico documento",
    intro:
      "Che tu debba inviare pagine scansionate, creare un portfolio fotografico o trasformare degli scontrini in un unico file da condividere, lo strumento Immagine in PDF di ConvertBrio unisce una o più immagini (JPG, PNG, WEBP, HEIC, AVIF o GIF) in un solo documento PDF, nell'ordine che scegli.",
    sections: [
      {
        heading: "Come convertire le immagini in PDF",
        body: "Carica una o più immagini in uno dei formati più comuni, disponile nell'ordine in cui vuoi che compaiano e ConvertBrio le unisce in un unico PDF con un'immagine per pagina. Il risultato si scarica pronto da condividere, stampare o inviare.",
      },
      {
        heading: "Usi più comuni",
        body: "È il modo più semplice per inviare documenti d'identità scansionati, riunire in un solo file per una pratica le foto HEIC di scontrini o contratti scattate con l'iPhone, o trasformare una serie di immagini in un documento facile da condividere, senza software di grafica o di modifica dei PDF.",
      },
      {
        heading: "Unire molte immagini in una volta",
        body: "Puoi caricare più immagini in un'unica operazione, gratis e senza bisogno di un account.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini in PDF.",
    faq: [
      {
        question: "Posso unire più immagini in un unico PDF?",
        answer:
          "Sì, carica quante immagini ti servono in un'unica operazione e ConvertBrio le unisce in un PDF in cui ogni immagine occupa una pagina, nell'ordine che hai stabilito.",
      },
      {
        question: "Funziona con le foto HEIC dell'iPhone?",
        answer:
          "Sì, Immagine in PDF accetta direttamente le foto HEIC e HEIF, oltre a JPG, PNG, WEBP, AVIF e GIF, quindi non devi convertire prima le foto dell'iPhone.",
      },
      {
        question: "Quali formati di immagine accetta questo strumento?",
        answer:
          "Immagine in PDF accetta immagini JPG, PNG, WEBP, HEIC, HEIF, AVIF e GIF, tutte unite in un unico PDF.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Convertitore da Word a JPG: esporta le pagine del documento come immagini",
    intro:
      "A volte di un documento Word ti serve una pagina sotto forma di immagine anziché di file modificabile: per un'anteprima, per un post sui social o per inserirla in uno strumento che non gestisce i documenti. Il convertitore da Word a JPG di ConvertBrio esporta ogni pagina del tuo file DOCX come immagine JPG.",
    sections: [
      {
        heading: "Come convertire Word in JPG",
        body: "Carica il tuo file DOCX e ConvertBrio renderizza ogni pagina come immagine JPG, mantenendo impaginazione e formattazione come apparirebbero in stampa. I documenti con più pagine producono un'immagine per pagina.",
      },
      {
        heading: "Usi più comuni",
        body: "È utile per creare in pochi secondi un'anteprima visiva di un documento, per condividere una singola pagina come immagine sui social o in una chat, o per inserire la pagina di un documento in un sito web o in una presentazione dove un file vero e proprio non è pratico.",
      },
      {
        heading: "PNG per un testo più nitido",
        body: "Se la pagina che esporti contiene testo piccolo o dettagli fini che vuoi mantenere perfettamente nitidi, usa invece Word in PNG: il formato senza perdita del PNG evita la lieve sfocatura che la compressione del JPG può introdurre ai bordi del testo.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di documenti Word in immagini JPG.",
    faq: [
      {
        question: "Come trasformo la pagina di un documento Word in un'immagine?",
        answer:
          "Carica il tuo file DOCX nello strumento Word in JPG di ConvertBrio: renderizza ogni pagina del documento come immagine JPG che puoi scaricare.",
      },
      {
        question: "Funziona con i documenti di più pagine?",
        answer:
          "Sì, ogni pagina del documento viene esportata come immagine JPG a sé, quindi un file con più pagine produce un set completo di immagini.",
      },
      {
        question: "Meglio JPG o PNG per un documento con testo piccolo?",
        answer:
          "Il PNG mantiene più nitidi testo piccolo e dettagli fini, perché è senza perdita. Usa Word in PNG se la nitidezza del testo conta più dei file più leggeri del JPG.",
      },
    ],
  },

  "word-to-png": {
    title: "Convertitore da Word a PNG: esporta le pagine con chiarezza senza perdita",
    intro:
      "Quando la pagina di un documento Word deve diventare un'immagine senza perdere nitidezza, per diagrammi dettagliati, tabelle o caratteri piccoli, il PNG è il formato di esportazione migliore rispetto al JPG. Il convertitore da Word a PNG di ConvertBrio renderizza ogni pagina del tuo file DOCX come immagine PNG senza perdita di qualità.",
    sections: [
      {
        heading: "Come convertire Word in PNG",
        body: "Carica il tuo file DOCX e ConvertBrio renderizza ogni pagina come immagine PNG alla massima qualità, mantenendo dettagli fini e nitidezza del testo. I documenti con più pagine producono un PNG per pagina.",
      },
      {
        heading: "Perché il PNG per i documenti ricchi di dettagli",
        body: "La compressione senza perdita del PNG evita la sfocatura attorno a testo e linee sottili che la compressione del JPG può introdurre. Conta soprattutto per le pagine con tabelle, diagrammi, caratteri piccoli o contenuti che pensi di ingrandire.",
      },
      {
        heading: "Quando il JPG può essere meglio",
        body: "Se le dimensioni contano più della nitidezza al pixel, per condivisioni rapide o anteprime informali, Word in JPG produce un file più leggero con una differenza di qualità visiva minima nella maggior parte dei documenti.",
      },
      {
        heading: "Impaginazione, download e limiti",
        body: "Il tuo DOCX viene prima impaginato su una pagina A4 standard, quindi formattazioni complesse tipiche di Word, come intestazioni e piè di pagina, note a piè di pagina o formati di pagina insoliti, possono apparire leggermente diverse rispetto a Word. Un documento di una sola pagina si scarica come un singolo PNG; quelli con più pagine si scaricano come file ZIP con un PNG per pagina. I caricamenti sono limitati a 100 MB. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di documenti Word in immagini PNG.",
    faq: [
      {
        question: "Perché scegliere il PNG invece del JPG per la pagina di un documento?",
        answer:
          "Il PNG è senza perdita, quindi mantiene testo, tabelle e diagrammi più nitidi del JPG, la cui compressione può ammorbidire leggermente i dettagli fini. Scegli il PNG quando la chiarezza conta più di tutto.",
      },
      {
        question: "Word in PNG supporta i documenti con più pagine?",
        answer:
          "Sì, ogni pagina del tuo file DOCX viene renderizzata come immagine PNG separata. Un documento di una sola pagina si scarica direttamente come PNG; più pagine si scaricano insieme in un file ZIP.",
      },
      {
        question: "La formattazione esatta del documento verrà mantenuta?",
        answer:
          "Testo, titoli, elenchi, tabelle e immagini vengono riportati, ma impaginazioni molto complesse tipiche di Word (intestazioni e piè di pagina personalizzati, formati di pagina insoliti) possono apparire leggermente diverse, perché la pagina viene ricostruita su un layout A4 standard anziché essere renderizzata da Word stesso.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Convertitore da Excel a PDF: blocca l'impaginazione del foglio di calcolo prima di condividerlo",
    intro:
      "Un foglio di calcolo può apparire diverso a seconda di larghezza delle colonne, caratteri o versione del software con cui viene aperto: un problema quando un report finanziario, una fattura o una tabella di dati devono avere lo stesso aspetto ovunque. Il convertitore da Excel a PDF di ConvertBrio trasforma il tuo foglio di calcolo in un PDF fisso, pronto per la stampa, che si vede in modo identico su qualsiasi dispositivo o software.",
    sections: [
      {
        heading: "Come convertire Excel in PDF",
        body: "Carica il tuo file .xls o .xlsx e ConvertBrio renderizza ogni foglio come una pagina (o un gruppo di pagine) in un PDF, mantenendo dati, formattazione delle celle e celle unite. Il file convertito si scarica automaticamente ed è pronto da inviare per e-mail, stampare o archiviare.",
      },
      {
        heading: "Perché convertire in PDF prima di condividere",
        body: "Il PDF è il formato standard per i documenti definitivi perché si visualizza in modo identico su ogni dispositivo e sistema operativo, a differenza di un foglio di calcolo, che può cambiare impaginazione o aspetto a seconda di ciò che è installato. La conversione blocca l'impaginazione prima che un report, una fattura o una tabella di dati escano dalla tua scrivania e fa sì che il destinatario non abbia bisogno di Excel per vederli.",
      },
      {
        heading: "Casi d'uso più comuni",
        body: "Questo strumento si usa spesso per condividere report finanziari e fatture con chi non ha Excel, per archiviare un'istantanea fissa di un foglio di calcolo prima che cambi ancora, e per preparare tabelle di dati da stampare o distribuire ufficialmente.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di fogli di calcolo Excel in PDF.",
    faq: [
      {
        question: "Come converto un file Excel in PDF?",
        answer:
          "Carica il tuo file .xls o .xlsx nello strumento Excel in PDF di ConvertBrio: genera una versione PDF formattata pronta da scaricare, senza bisogno di installare Microsoft Excel.",
      },
      {
        question: "La formattazione e le formule del foglio di calcolo resteranno uguali?",
        answer:
          "Formattazione delle celle, celle unite e impaginazione vengono mantenute. Le formule si convertono nell'ultimo valore calcolato anziché restare formule attive, perché un PDF è un documento fisso e statico, non un foglio di calcolo modificabile.",
      },
      {
        question: "E se il foglio di calcolo ha più fogli?",
        answer:
          "Ogni foglio della cartella di lavoro viene convertito e collocato su una pagina a sé (o su un gruppo di pagine) nel PDF risultante, nello stesso ordine del file originale.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "Convertitore da PowerPoint a PDF: condividi le slide senza PowerPoint",
    intro: [
      "Condividere una presentazione con chi non ha PowerPoint, bloccare la versione finale prima della revisione o alleggerire una presentazione enorme perché possa davvero essere inviata per e-mail: di solito si parte dalla conversione del .pptx in PDF. Il convertitore da PowerPoint a PDF di ConvertBrio lo fa nel browser, gratis, con una pagina per slide e senza filigrana.",
      "Un PDF si apre su qualsiasi dispositivo, non può essere modificato per sbaglio e, per le presentazioni ricche di immagini, è spesso molto più leggero del .pptx originale una volta passato anche da Comprimere PDF.",
    ],
    howTo: [
      {
        step: "Salva la presentazione come .pptx",
        detail: "In PowerPoint, File → Salva con nome → Presentazione di PowerPoint (.pptx). Il vecchio formato .ppt non è supportato.",
      },
      {
        step: "Carica il file",
        detail: "Trascinalo nel riquadro o sfoglia. Un file per volta, fino a 100 MB.",
      },
      {
        step: "Converti in PDF",
        detail: "ConvertBrio renderizza ogni slide come pagina intera. Il PDF si scarica automaticamente.",
      },
      {
        step: "Se serve, comprimilo",
        detail: "Se la presentazione è ricca di immagini e il PDF è ancora pesante, passalo da Comprimere PDF per ricodificare le immagini incorporate.",
      },
    ],
    sections: [
      {
        heading: "Perché convertire in PDF prima di condividere",
        body: "Un .pptx richiede PowerPoint o un visualizzatore compatibile e può apparire diverso a seconda dei caratteri installati sul computer del destinatario: gli elenchi puntati si spostano, il testo esce dalla casella, un carattere personalizzato viene sostituito da uno generico. Un PDF è fisso: ciò che invii è esattamente ciò che vedono, su un telefono, su un Mac o su un portatile aziendale bloccato e senza Office.",
      },
      {
        heading: "Come alleggerire una presentazione PowerPoint",
        body: [
          "Uno strumento dedicato per comprimere PowerPoint mantenendo il file modificabile è ancora in sviluppo. Nel frattempo, il modo più affidabile per ridurre il peso di una presentazione da inviare per e-mail è questo percorso in due passaggi:",
          "Converti qui il .pptx in PDF, poi passa il PDF da Comprimere PDF. Così ogni foto e schermata incorporata viene ricodificata con una qualità efficiente e le immagini sovradimensionate vengono ridotte, ed è lì che sta quasi tutto il peso di una presentazione pesante. Ottieni un file condivisibile e visibile ovunque, di solito una frazione delle dimensioni originali. Il compromesso è che il risultato è un PDF, non una presentazione modificabile.",
        ],
      },
      {
        heading: "Cosa viene mantenuto e cosa no",
        body: "Testo, immagini e impaginazione delle slide si convertono senza problemi. Animazioni e transizioni non esistono in un PDF statico, quindi vengono eliminate. Grafici, SmartArt e tabelle incorporate sono resi come appaiono sulla slide, ma non sono interattivi. Se la tua presentazione si basa molto su comparse progressive e animazioni, controlla il PDF prima di inviarlo per capire come si legge senza movimento.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il file è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il PDF risultante viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un .pptx per volta, fino a 100 MB, gratis, senza account e senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di presentazioni PowerPoint in PDF.",
    faq: [
      {
        question: "Come converto gratis un file PowerPoint in PDF?",
        answer:
          "Carica il tuo .pptx nello strumento PowerPoint in PDF di ConvertBrio: genera un PDF con una pagina per slide, pronto da scaricare, senza installare PowerPoint, senza account e senza filigrana.",
      },
      {
        question: "Come comprimo una presentazione PowerPoint per inviarla per e-mail?",
        answer:
          "Converti qui il .pptx in PDF, poi passa quel PDF da Comprimere PDF. Ricodifica le immagini incorporate, che sono la parte più pesante di una presentazione grande. Il risultato è molto più leggero, anche se è un PDF e non una presentazione modificabile.",
      },
      {
        question: "Animazioni e transizioni vengono mantenute?",
        answer:
          "No, un PDF è statico, quindi animazioni e transizioni vengono eliminate. Testo, immagini, grafici e impaginazione restano come appaiono su ogni slide.",
      },
      {
        question: "Funziona con i vecchi file .ppt?",
        answer:
          "Solo con il formato moderno .pptx. Apri il file in PowerPoint e salvalo come .pptx (File → Salva con nome), poi converti.",
      },
      {
        question: "Posso mettere due slide per pagina PDF o usare un layout per dispense?",
        answer:
          "Al momento no, il convertitore renderizza una slide intera per pagina. Per layout in stile dispensa, esporta direttamente da PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Unire Documenti: combina Word, Excel e PowerPoint in un unico PDF",
    intro:
      "Riunire in un solo PDF file Word, Excel e PowerPoint di tipo diverso di solito significa convertirli uno per uno e poi unirli a mano. Lo strumento Unire Documenti di ConvertBrio fa tutto il processo in un solo passaggio.",
    sections: [
      {
        heading: "Come unire i documenti",
        body: "Carica più file, in qualsiasi combinazione di Word, Excel, PowerPoint e PDF, e ConvertBrio converte ciascuno in PDF e li riunisce in un unico documento ordinato. Il PDF unito si scarica automaticamente, pronto da inviare per e-mail, stampare o archiviare.",
      },
      {
        heading: "Perché unire tutto in un solo PDF",
        body: "Un unico PDF è più facile da condividere, rivedere e archiviare di una serie sparsa di file in formati diversi, e garantisce che il destinatario veda tutto nell'ordine previsto, senza bisogno di avere Word, Excel o PowerPoint installati.",
      },
      {
        heading: "Mantenere l'ordine dei documenti",
        body: "I file vengono uniti nell'ordine in cui li carichi, quindi disponi la selezione prima del caricamento se il documento finale richiede una sequenza precisa: per esempio, una copertina, poi una relazione, poi i dati di supporto in un foglio di calcolo.",
      },
      {
        heading: "Limiti e privacy",
        body: "Puoi unire fino a 25 file, per una dimensione complessiva di 100 MB, in una sola operazione. Ogni file viene convertito ed elaborato sui server, non nel tuo browser. I file originali vengono eliminati subito dopo essere stati letti per la conversione. Il risultato unito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana.",
      },
    ],
    faqDescription: "Domande frequenti sull'unione di file Word, Excel e PowerPoint in un unico PDF.",
    faq: [
      {
        question: "Quali tipi di file posso unire?",
        answer:
          "Qualsiasi combinazione di file Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx) e PDF nello stesso caricamento: ogni file non PDF viene prima convertito in PDF, poi tutti vengono uniti.",
      },
      {
        question: "In che ordine vengono uniti i file?",
        answer:
          "I file vengono uniti nell'ordine in cui li carichi. Disponi prima la selezione se ti serve una sequenza precisa nel documento finale.",
      },
      {
        question: "Funziona con i vecchi file .doc/.ppt/.xls?",
        answer:
          "I vecchi formati .doc e .ppt non sono supportati: salva prima quei file come .docx o .pptx. I vecchi fogli di calcolo .xls funzionano, perché la conversione Excel di ConvertBrio legge nativamente quel formato.",
      },
    ],
  },

  "remove-background": {
    title: "Rimozione sfondo con IA: ritagli trasparenti in automatico",
    intro: [
      "Ritagliare un soggetto dal suo sfondo di solito richiede software di grafica e una mascheratura manuale attenta a ogni ciocca di capelli. Lo strumento di ConvertBrio per rimuovere lo sfondo con l'IA fa tutto in automatico: carica una foto e in pochi secondi ottieni il soggetto su sfondo trasparente, in un PNG pronto da inserire su qualsiasi nuovo sfondo.",
      "È gratis, non richiede un account e non aggiunge filigrane. Il modello è open source e il trattamento è automatico, senza revisione umana.",
    ],
    howTo: [
      {
        step: "Carica una foto",
        detail: "JPG, PNG, WEBP, HEIC o AVIF, fino a 100 MB. Funziona meglio con un soggetto ben distinto su uno sfondo abbastanza semplice.",
      },
      {
        step: "Lascia lavorare il modello",
        detail: "L'IA individua il soggetto principale, una persona, un prodotto o un oggetto, e cancella tutto il resto.",
      },
      {
        step: "Scarica il PNG trasparente",
        detail: "Il ritaglio si scarica come PNG con sfondo trasparente, che puoi inserire in un sito web, in una grafica o su un colore pieno.",
      },
    ],
    sections: [
      {
        heading: "Cosa puoi fare con il ritaglio",
        body: "",
        list: [
          "Mettere la foto di un prodotto su uno sfondo bianco pulito o con i colori del marchio per la scheda di un negozio online",
          "Inserire un ritratto in una pagina del team, in un badge o in una slide",
          "Creare un adesivo, un logo o una grafica senza sfondo rettangolare",
          "Inserire un soggetto in una scena diversa",
          "Creare una foto in stile tessera, anche se il Creatore di Foto Tessera si occupa in un solo passaggio di dimensioni e sfondo bianco",
        ],
      },
      {
        heading: "Come ottenere bordi più puliti",
        body: "I risultati sono migliori quando il soggetto si stacca chiaramente da ciò che ha dietro: buona luce, sfondo abbastanza semplice e un contrasto ragionevole ai bordi. Il modello può avere difficoltà con capelli sottili e sfuggenti, oggetti trasparenti o in vetro, confini a basso contrasto (un cappotto grigio davanti a un muro grigio) e foto con più persone sovrapposte. Se un bordo viene ruvido, di solito basta una foto di partenza più pulita; per piccoli ritocchi, ritaglia il risultato con lo strumento Ritagliare Immagine.",
      },
      {
        heading: "Privacy",
        body: "Il modello di rimozione dello sfondo è open source e il trattamento è automatico, senza revisione umana. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il ritaglio risultante viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati sui server dei nostri provider di hosting (Vercel e Supabase). I caricamenti sono limitati a 100 MB.",
      },
    ],
    faqDescription: "Domande frequenti sullo strumento di ConvertBrio per rimuovere lo sfondo con l'IA.",
    faq: [
      {
        question: "La rimozione dello sfondo è gratuita?",
        answer:
          "Sì, senza account, senza filigrana e senza limiti al numero di foto. I caricamenti possono arrivare a 100 MB.",
      },
      {
        question: "Che formato di output otterrò?",
        answer:
          "Un PNG con sfondo trasparente: il formato standard senza perdita per le immagini senza uno sfondo pieno. Aprilo in qualsiasi editor per posizionarlo su un nuovo sfondo.",
      },
      {
        question: "Funziona con qualsiasi tipo di foto?",
        answer:
          "È pensato per soggetti comuni come persone, prodotti e oggetti su uno sfondo abbastanza chiaro. Scene disordinate, oggetti in vetro, capelli sottili e bordi a basso contrasto sono più difficili e possono richiedere una foto di partenza più pulita.",
      },
      {
        question: "Funziona su foto con più soggetti?",
        answer:
          "È ottimizzato per un solo soggetto principale ben distinto. Con più soggetti sovrapposti i bordi possono risultare meno precisi.",
      },
      {
        question: "La mia foto viene inviata al servizio di IA di un'altra azienda?",
        answer:
          "No. Il modello è open source e il trattamento è automatico, senza revisione umana. Il file originale viene eliminato subito dopo essere stato letto; il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Creatore di Foto Tessera: strumento online gratuito per foto formato passaporto",
    intro: [
      "Una foto per documenti a norma richiede uno sfondo bianco uniforme, il soggetto centrato e di dimensioni corrette e le misure fisiche giuste: di solito serve passare da una farmacia o da uno studio fotografico. Il creatore di foto tessera di ConvertBrio fa tutte e tre le cose in automatico: carica un selfie o qualsiasi ritratto chiaro e in pochi secondi ottieni una foto da 2×2 pollici pronta da stampare, con uno sfondo bianco pulito.",
      "È gratis, senza account e senza filigrana, e ogni passaggio, dal riconoscimento del volto alla rimozione dello sfondo, è automatico, senza revisione umana.",
    ],
    howTo: [
      {
        step: "Scatta un ritratto semplice",
        detail:
          "Di fronte, espressione neutra, luce uniforme, testa e spalle inquadrate con un po' di spazio attorno. Un selfie scattato con il telefono davanti a una parete chiara va benissimo.",
      },
      {
        step: "Caricalo",
        detail: "Una persona per foto, fino a 100 MB. Le foto di gruppo e i primi piani molto stretti non vengono elaborati.",
      },
      {
        step: "Lascia che lo strumento costruisca la foto",
        detail:
          "ConvertBrio individua il volto, lo ritaglia e lo centra con le proporzioni da passaporto, rimuove lo sfondo e lo riempie di bianco pieno.",
      },
      {
        step: "Scarica e stampa a 2×2 pollici",
        detail:
          "Ottieni un'immagine da 1200×1200 pixel a 600 DPI: le dimensioni di 2×2 pollici usate per le foto di passaporto e visto di Stati Uniti e India.",
      },
    ],
    sections: [
      {
        heading: "Come funziona",
        body: "Carica una foto e ConvertBrio individua il volto, lo ritaglia e lo centra con le proporzioni standard da passaporto, rimuove lo sfondo originale e lo sostituisce con un bianco pieno, quindi produce una foto da 2×2 pollici a 600 DPI (1200×1200 pixel), il formato usato sia per le foto di passaporto e visto degli Stati Uniti sia per quelle dell'India. Non c'è nulla da posizionare o regolare a mano.",
      },
      {
        heading: "Formati delle foto tessera per paese",
        body: "Lo strumento produce il formato 2×2 pollici (51×51 mm). È esattamente il requisito di alcuni paesi e un buon punto di partenza da rifilare per altri; controlla sempre le specifiche aggiornate del tuo governo prima dell'invio.",
        table: {
          headers: ["Paese", "Formato richiesto", "Va bene l'output 2×2 in?"],
          rows: [
            ["Stati Uniti", "2 × 2 in (51 × 51 mm)", "Sì, direttamente"],
            ["India", "2 × 2 in (51 × 51 mm)", "Sì, direttamente"],
            ["Regno Unito", "35 × 45 mm", "Da ritagliare dall'output 2×2"],
            ["Schengen / UE", "35 × 45 mm", "Da ritagliare dall'output 2×2"],
            ["Canada", "50 × 70 mm", "Da ritagliare di nuovo; proporzioni diverse"],
            ["Australia", "35 × 45 mm", "Da ritagliare dall'output 2×2"],
          ],
        },
      },
      {
        heading: "Come ottenere il risultato migliore",
        body: "Usa una foto ben illuminata, di fronte, con tutta la testa e le spalle visibili e un po' di spazio attorno: un selfie scattato con il telefono davanti a una parete semplice funziona bene. Evita foto in cui la testa è tagliata troppo vicino ai bordi, perché lo strumento ha bisogno di spazio sopra la testa e attorno alle spalle per calcolare un ritaglio dalle proporzioni corrette. Una persona per foto; le foto di gruppo o i primi piani molto ritagliati non vengono elaborati correttamente.",
      },
      {
        heading: "Cosa questo strumento non garantisce",
        body: "Produce una foto dall'aspetto professionale, di dimensioni corrette e centrata, con un vero sfondo bianco: non è una verifica di conformità certificata. Non controlla l'uniformità dell'illuminazione, l'espressione, i riflessi degli occhiali né gli altri criteri che una revisione ufficiale ICAO o governativa verifica a mano. Per una richiesta di passaporto con requisiti di accettazione rigidi, considera il risultato un ottimo punto di partenza e confrontalo con i requisiti fotografici aggiornati del tuo paese prima dell'invio.",
      },
      {
        heading: "Privacy",
        body: "Riconoscimento del volto e rimozione dello sfondo usano modelli open source e il trattamento è automatico, senza revisione umana. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato generato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati sui server dei nostri provider di hosting (Vercel e Supabase).",
      },
    ],
    faqDescription: "Domande frequenti sul creatore di foto tessera di ConvertBrio.",
    faq: [
      {
        question: "Che dimensioni ha la foto prodotta?",
        answer:
          "Una foto da 2×2 pollici (1200×1200 pixel) a 600 DPI: il formato standard per le foto di passaporto e visto di Stati Uniti e India.",
      },
      {
        question: "È gratuito?",
        answer:
          "Sì. Caricare una foto e generare una foto formato tessera con sfondo bianco non richiede né un account né un pagamento.",
      },
      {
        question: "Questa foto verrà sicuramente accettata per la mia richiesta di passaporto?",
        answer:
          "Produce una foto di dimensioni corrette, centrata e con un vero sfondo bianco, il che copre i motivi di rifiuto più comuni. Non esegue una verifica di conformità ufficiale completa (illuminazione, espressione, riflessi degli occhiali), quindi confrontala con i requisiti aggiornati del tuo paese prima di presentare una richiesta ufficiale.",
      },
      {
        question: "Cosa fare se segnala che non è stato trovato nessun volto, o più di un volto?",
        answer:
          "Usa una foto chiara, di fronte e ben illuminata, con una sola persona nell'inquadratura. Foto di gruppo, profili laterali o immagini molto scure o sfocate possono impedire il corretto riconoscimento del volto.",
      },
      {
        question: "Perché mi segnala che non c'è abbastanza spazio attorno al volto?",
        answer:
          "Lo strumento ha bisogno di un margine visibile sopra la testa e attorno alle spalle nella foto originale per calcolare un ritaglio dalle proporzioni corrette. Se la tua foto è già ritagliata strettamente sul volto, scattane una nuova un po' più da lontano.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "Miglioramento Immagine con IA",
    intro:
      "Le foto spente, sottoesposte o leggermente sfocate di solito hanno bisogno di una regolazione automatica coerente più che di una modifica manuale. Il miglioratore di immagini di ConvertBrio bilancia in automatico esposizione e colore e rende più nitidi i dettagli in un solo passaggio, senza cursori da regolare.",
    sections: [
      {
        heading: "Cosa fa questo strumento",
        body: "Miglioramento Immagine con IA applica alla tua foto una serie fissa e automatica di regolazioni: estende il contrasto per sfruttare tutta la gamma tonale, aumenta leggermente saturazione e luminosità e rende più nitidi i dettagli, ottenendo un risultato migliore e coerente senza che tu debba regolare le singole impostazioni.",
      },
      {
        heading: "Come funziona",
        body: "Carica un'immagine e ConvertBrio la fa passare attraverso una pipeline automatica di elaborazione (normalizzazione del contrasto, colore e nitidezza) direttamente sui nostri server: un algoritmo deterministico, non un modello di IA generativa, ed è per questo che i risultati sono coerenti e l'elaborazione è rapida.",
      },
      {
        heading: "Cosa non può correggere",
        body: "È un passaggio di miglioramento, non uno strumento per aumentare la risoluzione o restaurare: non recupera con nitidezza i dettagli da un'immagine a risoluzione molto bassa, non corregge il mosso o le foto fuori fuoco e non ricostruisce i dettagli mancanti. Per aumentare la risoluzione con un modello di super-risoluzione addestrato, usa invece Upscaler con IA.",
      },
    ],
    faqDescription: "Domande frequenti sul miglioratore di immagini di ConvertBrio.",
    faq: [
      {
        question: "Che tipo di miglioramenti applica?",
        answer:
          "Estende automaticamente il contrasto, aumenta leggermente colore e luminosità e rende più nitidi i dettagli: una passata di regolazione fissa e coerente, anziché una modifica manuale foto per foto.",
      },
      {
        question: "In cosa si differenzia da Upscaler con IA?",
        answer:
          "Miglioramento Immagine con IA applica regolazioni automatiche alla stessa risoluzione con una pipeline di elaborazione fissa. Upscaler con IA è uno strumento a parte che usa un modello di super-risoluzione addestrato per aumentare la risoluzione dell'immagine e ricostruirne i dettagli.",
      },
      {
        question: "C'è un limite alle dimensioni del file?",
        answer:
          "I caricamenti sono limitati a 100 MB. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato migliorato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana.",
      },
    ],
  },

  "ai-upscaler": {
    title: "Upscaler con IA: aumenta la risoluzione senza sfocatura",
    intro: [
      "Ingrandire un'immagine piccola o a bassa risoluzione con un normale ridimensionamento significa solo distribuire i pixel esistenti su un'area maggiore, lasciandola morbida e a blocchi. L'upscaler con IA di ConvertBrio usa un modello di super-risoluzione addestrato per aumentare la risoluzione di circa 4 volte, ricostruendo dettagli plausibili (bordi, texture, strutture fini) invece di limitarsi a stirare ciò che c'è.",
    ],
    howTo: [
      {
        step: "Carica l'immagine da ingrandire",
        detail: "Funziona meglio con una foto reale. JPG, PNG, WEBP, HEIC o AVIF, fino a 100 MB.",
      },
      {
        step: "Avvia l'ingrandimento",
        detail:
          "Un modello di IA integrato ricostruisce i dettagli a circa 4 volte la risoluzione dell'originale, lavorando a riquadri per gestire la memoria. Richiede qualche secondo in più di una semplice conversione.",
      },
      {
        step: "Scarica il PNG",
        detail: "Il risultato è sempre un PNG a 4 volte la risoluzione dell'originale (eventualmente ridotto in precedenza).",
      },
    ],
    sections: [
      {
        heading: "Ingrandimento con IA o ridimensionamento",
        body: "Lo strumento Ridimensionare Immagine cambia le dimensioni in pixel con un'interpolazione standard: perfetto per rimpicciolire un'immagine, ma non può aggiungere dettagli che nel file non ci sono, quindi ingrandendo il risultato appare sfocato. L'ingrandimento con IA è l'approccio opposto: il modello ha imparato come appaiono i dettagli di una foto reale e ne dipinge una versione convincente ad alta risoluzione. Usa il ridimensionamento per rimpicciolire, l'upscaler per ingrandire.",
      },
      {
        heading: "Quando è più utile",
        body: "",
        list: [
          "Ingrandire una foto vecchia, piccola o a bassa risoluzione per stamparla",
          "Preparare un'immagine in formato web per uno schermo grande o ad alta densità di pixel",
          "Recuperare dimensioni utilizzabili da una foto molto ritagliata",
          "Rendere più nitida un'immagine leggermente morbida (anche se Miglioramento Immagine con IA è più adatto per ritoccare mantenendo le stesse dimensioni)",
        ],
      },
      {
        heading: "Cosa aspettarsi",
        body: "I risultati sono migliori sulle fotografie naturali: persone, luoghi, oggetti. Il modello può avere difficoltà con testo fitto, disegni al tratto nitidi, schermate e grafiche molto stilizzate, a volte inventando texture che non c'erano. Le immagini sorgente a risoluzione molto alta vengono ridotte prima dell'ingrandimento per mantenere l'elaborazione ragionevole, quindi caricare una foto già grande non porta molto vantaggio. È una ricostruzione, non il recupero dei veri dettagli originali.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato ingrandito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana e senza servizi di IA di terze parti. I caricamenti sono limitati a 100 MB.",
      },
    ],
    faqDescription: "Domande frequenti sull'upscaler di immagini con IA di ConvertBrio.",
    faq: [
      {
        question: "In cosa l'ingrandimento con IA è diverso dal semplice ridimensionare un'immagine più grande?",
        answer:
          "Il normale ridimensionamento stira i pixel esistenti, sfocando il risultato. L'ingrandimento con IA ricostruisce dettagli plausibili con un modello addestrato, producendo un ingrandimento molto più nitido.",
      },
      {
        question: "Di quanto ingrandisce l'immagine?",
        answer:
          "Di circa 4 volte la risoluzione dell'originale (che viene prima ridotto se è molto grande). Il risultato è un PNG.",
      },
      {
        question: "Funziona con testo o schermate?",
        answer:
          "È tarato per le fotografie. Testo fitto, disegni al tratto e schermate possono uscire con dettagli inventati o impastati: per questi casi un semplice ridimensionamento è spesso più sicuro.",
      },
      {
        question: "C'è un limite alle dimensioni del file?",
        answer:
          "I caricamenti sono limitati a 100 MB. Il file originale viene eliminato subito dopo essere stato letto; il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore.",
      },
      {
        question: "Perché l'elaborazione ha richiesto un po' di tempo?",
        answer:
          "Il modello gira sui nostri server ed elabora le immagini grandi a riquadri per gestire la memoria, quindi richiede qualche secondo in più di una semplice conversione di formato.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "Comprimere un PDF a una dimensione precisa in KB o MB",
    intro: [
      "I portali di caricamento, le candidature di lavoro e i sistemi di posta rifiutano spesso un PDF oltre un limite rigido: 200 KB, 500 KB, 2 MB. Questo strumento prende quel limite come dato di partenza. Inserisci la dimensione massima e ConvertBrio comprime il tuo PDF per passaggi successivi, misurando la dimensione reale del file dopo ognuno, finché non rientra.",
      "A differenza di un compressore generico che si limita a ridurre il file il più possibile, questo strumento lavora verso il tuo numero e ti dice la verità sul risultato. Mostra la dimensione raggiunta e, se il tuo limite è troppo basso per essere rispettato senza rovinare le pagine, lo dice invece di far finta di niente.",
    ],
    howTo: [
      { step: "Carica il PDF", detail: "Un file per volta, fino a 100 MB." },
      { step: "Inserisci la dimensione massima", detail: "Digita il numero indicato nel modulo, poi scegli KB o MB." },
      { step: "Comprimi", detail: "Proviamo impostazioni via via più forti e ci fermiamo al primo risultato che rientra nel tuo limite." },
      { step: "Controlla la dimensione raggiunta", detail: "Il messaggio del risultato mostra la dimensione ottenuta. Scarica il file, oppure prova con un limite più alto se l'obiettivo non è stato raggiunto." },
    ],
    sections: [
      {
        heading: "Come funziona la ricerca della dimensione esatta",
        body: "Un solo passaggio raramente centra un numero preciso, quindi lo strumento percorre una scala di impostazioni. Ogni passo ricodifica le foto incorporate nel file originale a una risoluzione e a una qualità inferiori rispetto al precedente, partendo con delicatezza e diventando via via più deciso. Dopo ogni passo si misura il file effettivamente prodotto. Ottieni il primo risultato pari o inferiore al tuo limite, il che significa che conservi tutta la qualità che il tuo obiettivo consente.",
      },
      {
        heading: "Quando un obiettivo non è raggiungibile",
        body: "Alcuni PDF semplicemente non si riducono molto: i file fatti di grafica vettoriale o di solo testo sono già piccoli, e un limite di 20 KB per una scansione di 40 pagine non è realistico. Se anche l'impostazione più forte lascia il file sopra il limite, lo strumento non dichiara mai di esserci riuscito. Restituisce la versione più piccola che è riuscito a ottenere, ne mostra la dimensione e suggerisce alternative, come un limite più alto o la divisione del PDF in più parti.",
      },
      {
        heading: "Cosa viene modificato",
        body: "Le immagini JPEG incorporate vengono ricompresse e, se molto grandi, ridotte, e le proprietà del documento come titolo e autore vengono cancellate. Testo, caratteri e impaginazione restano intatti. I PDF di scansioni fatte di foto ne traggono il maggior vantaggio, mentre dimensioni obiettivo molto piccole renderanno le immagini visibilmente più morbide.",
      },
      {
        heading: "Privacy e limiti",
        body: "I file sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato compresso viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. I PDF protetti da password non possono essere elaborati.",
      },
    ],
    faqDescription: "Domande frequenti sulla compressione di un PDF a una dimensione massima in KB o MB.",
    faq: [
      { question: "Come comprimo un PDF sotto i 200 KB?", answer: "Carica il PDF, inserisci 200 e scegli KB, poi comprimi. Lo strumento prova impostazioni più forti finché il file non rientra, oppure ti dice la dimensione più piccola raggiungibile se 200 KB non è realistico per quel documento." },
      { question: "Raggiunge sempre la dimensione esatta che ho indicato?", answer: "No. Porta il file al limite o sotto quando è possibile senza una perdita di qualità inaccettabile. Quando non lo è, vedrai la dimensione più piccola raggiunta, anziché un falso successo." },
      { question: "Il risultato si ferma esattamente sul mio limite?", answer: "Si ferma al limite o sotto, di solito un po' al di sotto, perché le impostazioni cambiano a gradini e non in modo continuo." },
      { question: "Perché il mio PDF si è ridotto appena?", answer: "I PDF fatti soprattutto di testo e forme vettoriali sono già compatti. I risparmi maggiori vengono dai PDF che contengono foto o pagine scansionate." },
      { question: "C'è una differenza di qualità rispetto al normale strumento Comprimere PDF?", answer: "Comprimere PDF applica un solo livello fisso. Questo strumento parte dallo stesso livello e diventa più deciso solo se il tuo limite lo richiede." },
      { question: "Il mio documento viene conservato?", answer: "No. Il file originale viene eliminato subito dopo essere stato letto; il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore, e nessuna persona lo esamina." },
    ],
  },

  "photo-signature-resizer": {
    title: "Ridimensionare Foto e Firma: pixel esatti e dimensione massima del file",
    intro: [
      "I moduli di candidatura raramente accettano una foto così com'è uscita dal telefono. Chiedono una larghezza e un'altezza precise in pixel e un file non più pesante di un certo numero di KB. Questo strumento produce esattamente questo: inserisci le dimensioni e il limite di peso indicati nel modulo e scarica un JPG che rispetta entrambi.",
      "Gestisce sia le foto sia le firme. Scegli un rapporto d'aspetto o un preset per compilare le dimensioni, decidi se ritagliare o aggiungere margini bianchi quando l'immagine ha una forma diversa e imposta i KB massimi. Le dimensioni che inserisci non vengono mai modificate per rispettare il peso del file: si abbassa solo la qualità JPEG.",
    ],
    howTo: [
      { step: "Carica la foto o la firma", detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF." },
      { step: "Imposta le dimensioni", detail: "Scegli un preset o inserisci larghezza e altezza in pixel. Scegli un rapporto d'aspetto se il modulo ne specifica uno." },
      { step: "Aggiungi il limite di peso del file", detail: "Inserisci i KB massimi, oppure lascia vuoto per mantenere un'alta qualità." },
      { step: "Scegli tra ritaglio e margini", detail: "Il ritaglio riempie esattamente le dimensioni; i margini bianchi mantengono l'intera immagine all'interno, e sono adatti alle firme." },
      { step: "Ridimensiona e controlla il risultato", detail: "Il messaggio del risultato conferma i pixel esatti e i KB finali." },
    ],
    sections: [
      {
        heading: "Prima le dimensioni esatte, poi il peso del file",
        body: "L'immagine viene prima ridimensionata esattamente alla larghezza e all'altezza richieste. Poi lo strumento cerca la qualità JPEG più alta che mantiene il file sotto il tuo limite, in modo che le dimensioni restino fisse. Se il limite è troppo basso anche alla qualità minima, lo strumento lo dice e mostra la dimensione raggiunta, senza dichiarare un successo. In quel caso prova con dimensioni leggermente più piccole.",
      },
      {
        heading: "Preset e valori personalizzati",
        body: "I preset coprono dimensioni in pixel che si possono riprodurre con precisione, come una foto tessera da 35 × 45 mm a 300 DPI (413 × 531 px) o una foto da 2 × 2 pollici a 300 DPI (600 × 600 px). I portali sono diversi, quindi confronta sempre con le istruzioni del tuo modulo e usa i campi personalizzati se non coincidono con un preset.",
      },
      {
        heading: "Ritaglio o margini",
        body: "Quando l'immagine non ha la stessa forma delle dimensioni richieste, il ritaglio riempie l'inquadratura e taglia i bordi, concentrandosi sulla parte più in evidenza dell'immagine. I margini mantengono tutto e riempiono lo spazio rimasto di bianco. Scegli i margini per le firme su carta, così non viene tagliato nessun tratto di inchiostro.",
      },
      {
        heading: "Firme",
        body: "Fotografa o scansiona la tua firma su carta bianca semplice con una buona luce, caricala e usa il preset firma 3:1 o le dimensioni che preferisci. L'inchiostro nero su bianco si comprime in file molto piccoli.",
      },
    ],
    faqDescription: "Domande frequenti sul ridimensionamento di una foto o di una firma per un modulo online.",
    faq: [
      { question: "Come ridimensiono una foto a 200 × 230 pixel sotto i 20 KB?", answer: "Carica la foto, inserisci 200 come larghezza, 230 come altezza e 20 come KB massimi, poi ridimensiona. Il messaggio del risultato conferma la dimensione esatta." },
      { question: "Cambia le dimensioni per rispettare il limite di KB?", answer: "No. Le dimensioni restano esattamente quelle inserite e si abbassa solo la qualità JPEG." },
      { question: "Cosa succede se il limite non può essere raggiunto?", answer: "Vedrai un messaggio con la dimensione più piccola ottenuta. Prova con dimensioni più piccole o con un limite più alto." },
      { question: "Il risultato è sempre un JPG?", answer: "Sì, perché la maggior parte dei moduli richiede il JPG. Il file ha un nome che include le dimensioni, così lo ritrovi facilmente." },
      { question: "Posso mantenere la forma originale della foto?", answer: "Sì. Scegli l'opzione dei margini bianchi e l'intera immagine entra nelle dimensioni richieste." },
      { question: "Rispetta le regole del portale del mio esame o del mio visto?", answer: "Produce esattamente i pixel e la dimensione massima che inserisci. I requisiti variano da portale a portale e possono cambiare, quindi verifica i numeri sul portale stesso." },
    ],
  },

  "batch-image-compressor": {
    title: "Compressore di Immagini in Batch: comprimi tante foto a una sola dimensione obiettivo",
    intro: [
      "Comprimere le foto una alla volta è lento quando un modulo, un annuncio o un sito ne richiede venti sotto lo stesso limite. Carica l'intero gruppo, inserisci un'unica dimensione obiettivo in KB e ConvertBrio comprime ogni immagine perché rientri.",
      "Ogni file viene gestito per conto suo, quindi un file problematico non blocca mai gli altri. Ottieni un report per file, download singoli per ogni immagine e uno ZIP dell'intero lotto.",
    ],
    howTo: [
      { step: "Seleziona le immagini", detail: "Trascina fino a 50 immagini alla volta, fino a 100 MB in totale." },
      { step: "Inserisci la dimensione obiettivo", detail: "Un unico limite in KB vale per tutte le immagini." },
      { step: "Comprimi", detail: "Ogni immagine viene elaborata in modo indipendente: si abbassa prima la qualità e le dimensioni si riducono solo se necessario." },
      { step: "Scarica", detail: "Salva i singoli file dall'elenco, oppure scarica tutto come ZIP." },
    ],
    sections: [
      {
        heading: "Risultati per file, non tutto o niente",
        body: "L'elenco dei risultati mostra ogni file, la dimensione raggiunta e se è rimasto entro l'obiettivo. Se un'immagine non riesce a scendere sotto il limite senza una perdita di qualità estrema, viene segnalata come sopra l'obiettivo, anziché passare in silenzio. Un file che non può essere letto affatto viene segnalato come non riuscito, mentre gli altri si completano normalmente.",
      },
      {
        heading: "Come viene compressa ogni immagine",
        body: "Per ogni immagine, lo strumento cerca la qualità più alta che rientra nel tuo obiettivo nello stesso formato (JPG resta JPG, WEBP resta WEBP). Se anche la qualità minima è troppo pesante, riduce le dimensioni a piccoli passi. Le foto HEIC degli iPhone vengono convertite in JPG perché HEIC non è un formato di output supportato. Le GIF animate mantengono solo il primo fotogramma.",
      },
      {
        heading: "Quando usare il lotto e quando il singolo file",
        body: "Usa lo strumento Comprimere Immagine per un solo file. Usa il lotto quando molte immagini condividono lo stesso limite, per esempio per caricare le foto di un catalogo prodotti, una serie di documenti su un portale o le foto per un'e-mail.",
      },
    ],
    faqDescription: "Domande frequenti sulla compressione di più immagini alla stessa dimensione.",
    faq: [
      { question: "Quante immagini posso comprimere in una volta?", answer: "Fino a 50 immagini, purché il totale sia inferiore a 100 MB." },
      { question: "Tutte le immagini raggiungono sicuramente l'obiettivo?", answer: "No. Ogni risultato viene misurato e ogni immagine che resta sopra l'obiettivo viene segnalata, così sai quali richiedono attenzione." },
      { question: "Posso scaricare i file uno per uno?", answer: "Sì. Ogni immagine riuscita ha un proprio link di download ed è disponibile anche lo ZIP." },
      { question: "Cosa succede se un file è danneggiato?", answer: "Viene segnalato come non riuscito mentre gli altri vengono elaborati normalmente." },
      { question: "Cambia il formato delle mie immagini?", answer: "No, tranne per le foto HEIC, che diventano JPG." },
      { question: "Le mie immagini vengono conservate?", answer: "I file originali vengono eliminati subito dopo essere stati letti; i risultati vengono eliminati da una pulizia giornaliera, in genere entro circa 24 ore, e nessuna persona li esamina." },
    ],
  },

  "image-to-text": {
    title: "Immagine in Testo: estrai il testo da una foto o da una schermata",
    intro: [
      "Foto di documenti, schermate, lavagne e cartelli contengono tutti del testo che non puoi selezionare. Immagine in Testo usa il riconoscimento ottico dei caratteri (OCR) per leggere quel testo e restituirtelo come caratteri che puoi copiare, cercare e modificare.",
      "Carica un'immagine, scegli la lingua del testo e il testo riconosciuto compare nella pagina, pronto da copiare. Contemporaneamente si scarica anche un semplice file .txt.",
    ],
    howTo: [
      { step: "Carica un'immagine", detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF. Una foto nitida e dritta dà i risultati migliori." },
      { step: "Scegli la lingua", detail: "Seleziona la lingua in cui è scritto il testo per ottenere la massima precisione." },
      { step: "Estrai il testo", detail: "Il riconoscimento viene eseguito sui server." },
      { step: "Copia o scarica", detail: "Seleziona il testo nella pagina, usa Copia testo oppure apri il file .txt scaricato." },
    ],
    sections: [
      {
        heading: "Cosa ottieni",
        body: "Il testo riconosciuto come semplici caratteri, in ordine di lettura, con le interruzioni di riga mantenute. È testo semplice, quindi caratteri, colori e impaginazione non vengono mantenuti. Se vuoi un documento modificabile con paragrafi, usa invece Scansione in Word.",
      },
      {
        heading: "Come ottenere risultati precisi",
        body: "La qualità del riconoscimento segue la qualità dell'immagine. Usa una foto nitida, ben illuminata e scattata di fronte, di testo stampato, a una risoluzione in cui le lettere siano chiaramente leggibili. Elimina bordi e sfondo con un ritaglio e scegli la lingua corretta.",
      },
      {
        heading: "Limiti da mettere in conto",
        body: "La scrittura a mano non viene riconosciuta in modo affidabile. Immagini a bassa risoluzione, sfocatura, riflessi, inclinazione e caratteri decorativi riducono la precisione. Tabelle e impaginazioni a più colonne possono uscire in ordine confuso, perché l'OCR legge riga per riga. Rileggi sempre il risultato prima di farci affidamento.",
      },
      {
        heading: "Privacy",
        body: "Le immagini sono cifrate durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Il testo riconosciuto viene mostrato solo a te.",
      },
    ],
    faqDescription: "Domande frequenti sull'estrazione di testo dalle immagini con l'OCR.",
    faq: [
      { question: "Come copio il testo da un'immagine?", answer: "Carica l'immagine, avvia l'estrazione e usa Copia testo sul risultato. Lo stesso testo si scarica anche come file .txt." },
      { question: "Funziona con le schermate?", answer: "Sì. Le schermate di testo stampato o mostrato a schermo di solito vengono riconosciute con grande precisione." },
      { question: "Riesce a leggere la scrittura a mano?", answer: "Non in modo affidabile. L'OCR è pensato per il testo stampato e digitato." },
      { question: "Quali lingue sono supportate?", answer: "Inglese, portoghese, spagnolo, francese, tedesco, italiano e indonesiano." },
      { question: "Perché il mio testo è confuso?", answer: "Tabelle e pagine a più colonne possono essere lette nell'ordine sbagliato. Ritaglia l'immagine una colonna alla volta." },
      { question: "E per un PDF?", answer: "Usa Scansione in Word per un PDF scansionato, oppure OCR per PDF per renderlo ricercabile." },
    ],
  },

  "scan-to-word": {
    title: "Come converto un documento scansionato in un file Word modificabile?",
    intro: [
      "Usa il riconoscimento ottico dei caratteri (OCR). Una scansione o la foto di una pagina è un'immagine, quindi Word non ha alcun testo da modificare finché l'OCR non legge le lettere presenti nell'immagine. Scansione in Word fa proprio questo e costruisce un vero documento Word (DOCX) contenente il testo riconosciuto, che puoi poi modificare, formattare e salvare.",
      "Carica la foto di una pagina o un PDF scansionato, scegli la lingua del testo e scarica il DOCX. È pensato per estrarre le parole dai documenti cartacei come lettere, contratti e moduli stampati. Ti dà il testo, non una copia dell'aspetto grafico della pagina, quindi metti in conto di rileggere e di riapplicare la formattazione che ti serve.",
    ],
    howTo: [
      { step: "Scansiona o fotografa la pagina", detail: "Piatta, illuminata in modo uniforme e ripresa di fronte dà il risultato migliore. Va bene anche un'app di scansione per telefono che salva un PDF o un JPG." },
      { step: "Carica l'immagine o il PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF o un PDF. File fino a 100 MB; PDF fino a 50 pagine." },
      { step: "Scegli la lingua", detail: "Inglese, portoghese, spagnolo, francese, tedesco, italiano o indonesiano. La scelta giusta aiuta accenti e caratteri speciali a uscire correttamente." },
      { step: "Scarica il DOCX", detail: "Aprilo in Word, Google Docs o LibreOffice, poi rileggilo confrontandolo con l'originale e correggi le parole lette male." },
    ],
    sections: [
      {
        heading: "Posso scansionare direttamente in Word?",
        body: [
          "Non in un solo passaggio su questo sito, e nemmeno in Word stesso: ConvertBrio non si collega a uno scanner, quindi prima crei la scansione con il tuo scanner o con un'app per telefono, poi carichi qui il file.",
          "Aiuta distinguere due cose diverse. Inserire una scansione in Word (Inserisci > Immagini) colloca la pagina nel documento come immagine: sembra giusta, ma non puoi modificare le parole. Convertire la scansione con l'OCR, come fa questo strumento, legge i caratteri e ti restituisce testo modificabile. Scegli l'inserimento se ti basta che la pagina compaia in un documento; scegli la conversione se ti serve modificare, copiare o cercare le parole.",
        ],
      },
      {
        heading: "Prima e dopo: cosa aspettarsi",
        body: "Un esempio della trasformazione, partendo da una lettera scansionata:",
        table: {
          headers: ["", "La tua scansione (prima)", "Il file Word (dopo)"],
          rows: [
            ["Cos'è", "Un'immagine di una lettera stampata", "Un DOCX contenente il testo della lettera"],
            ["Selezionare una frase", "Impossibile", "Funziona come in qualsiasi testo Word"],
            ["Ricerca con Ctrl+F / Cmd+F", "Non trova nulla", "Trova ogni occorrenza"],
            ["Impaginazione", "Esattamente come stampata", "Paragrafi semplici; una pagina della scansione segue l'altra, con un'interruzione di pagina in mezzo"],
            ["Logo dell'intestazione, timbri, foto", "Visibili", "Non inclusi"],
          ],
        },
      },
      {
        heading: "Come controllare e correggere il risultato",
        body: "L'OCR è preciso sul testo stampato pulito ma non è mai perfetto, quindi rileggi prima di fare affidamento sul file. Apri il DOCX accanto alla scansione originale e leggi entrambi.",
        list: [
          "Controlla prima numeri, date, importi e nomi: le cifre sono i caratteri letti male più spesso (0 e O, 1 e l, 5 e S).",
          "Cerca parole divise o unite nel punto sbagliato e simboli estranei dove una macchia o una piega ha attraversato il testo.",
          "Esegui il correttore ortografico di Word: una parola senza senso spesso segnala una lettura errata.",
          "Riapplica a mano titoli, grassetti, tabelle e colonne dove ti servono.",
        ],
      },
      {
        heading: "Cosa contiene il file Word",
        body: "Il testo riconosciuto, suddiviso in paragrafi, con una pagina della scansione che segue l'altra. È un documento di testo modificabile, non una copia dell'aspetto della pagina. Caratteri, colonne, immagini e tabelle dell'originale non vengono riprodotti.",
      },
      {
        heading: "Perché la formattazione cambia dopo la conversione?",
        body: "Perché lo strumento legge le lettere, non l'impaginazione. Ricostruisce i paragrafi a partire dalle righe che trova e non ricrea il design della pagina. Per questo vedrai queste differenze:",
        list: [
          "Le tabelle escono come righe di testo, non come celle. Ricrea la tabella in Word e copia i valori.",
          "Le colonne vengono lette riga per riga, quindi il testo di due colonne può mescolarsi. Ritaglia o scansiona una colonna alla volta se l'ordine conta.",
          "Caratteri, dimensioni, colori e spaziatura vengono sostituiti dai valori predefiniti di Word. Seleziona il testo e ridagli lo stile.",
          "Immagini, loghi e firme non vengono riportati. Reinseriscili dal file originale.",
          "Una scansione storta, in ombra o a bassa risoluzione produce più errori. Rifalla piatta a circa 300 DPI invece di provare a riparare un risultato scadente.",
          "Una pagina di lato o capovolta si legge male. Le foto vengono raddrizzate usando l'orientamento salvato dalla fotocamera, ma una scansione senza quel dato va ruotata prima del caricamento.",
        ],
      },
      {
        heading: "Se ricevi un errore o un risultato vuoto",
        body: "Se lo strumento non trova testo leggibile lo dice, invece di restituire un file vuoto. In quel caso prova con un'immagine più nitida e a risoluzione più alta di testo stampato, raddrizza la pagina e assicurati che la lingua corrisponda al documento. I PDF di oltre 50 pagine vengono rifiutati; dividili prima in più parti con lo strumento Dividere PDF.",
      },
      {
        heading: "Scansione in Word o PDF in Word",
        body: "PDF in Word serve per i PDF che contengono già testo vero e cerca di mantenere la formattazione. Scansione in Word serve per le immagini di testo, dove non c'è alcun testo da convertire finché l'OCR non lo legge. Se nel tuo PDF riesci a selezionare le parole, usa invece PDF in Word.",
      },
      {
        heading: "Limiti",
        body: "La precisione dipende dalla scansione. Scrittura a mano, scansioni a bassa risoluzione o storte, stampa sbiadita e impaginazioni complesse come tabelle e colonne vengono spesso riconosciute male. Metti in conto di rileggere ogni documento. Se lo strumento non trova testo leggibile, te lo dice invece di restituire un file vuoto.",
      },
      {
        heading: "Privacy",
        body: "I caricamenti sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di scansioni in documenti Word modificabili.",
    faq: [
      { question: "Come converto un documento scansionato in Word?", answer: "Carica la scansione come immagine o PDF, scegli la lingua e scarica il DOCX creato dallo strumento. Rileggilo confrontandolo con l'originale, perché l'OCR può leggere male alcuni caratteri." },
      { question: "Posso scansionare un documento direttamente in Word?", answer: "Non direttamente. Scansiona prima la pagina con uno scanner o un'app per telefono, poi carica qui il file. Inserire una scansione in Word come immagine la lascia non modificabile; convertirla con l'OCR ti dà testo modificabile." },
      { question: "Come converto più foto di pagine in un unico file Word?", answer: "Unisci le foto in un unico PDF con Immagine in PDF, poi carica qui quel PDF. Il testo di ogni pagina segue quello della precedente, fino a 50 pagine." },
      { question: "Perché la mia tabella o l'impaginazione a colonne è sparita?", answer: "Lo strumento restituisce il testo riconosciuto come semplici paragrafi, quindi tabelle e colonne non vengono ricostruite. Ricreale in Word a partire dal testo." },
      { question: "Il file Word avrà lo stesso aspetto della mia scansione?", answer: "No. Ottieni il testo riconosciuto come paragrafi modificabili. Impaginazione, caratteri e immagini non vengono riprodotti." },
      { question: "Gestisce i PDF con più pagine?", answer: "Sì, fino a 50 pagine. Il testo di ogni pagina segue quello della precedente." },
      { question: "Legge la scrittura a mano?", answer: "Non in modo affidabile. È fatto per il testo stampato." },
      { question: "Devo usare questo strumento o PDF in Word?", answer: "Usa Scansione in Word quando il PDF è una scansione o una foto. Usa PDF in Word quando riesci già a selezionare il testo." },
      { question: "È gratuito?", answer: "Sì, senza bisogno di un account." },
    ],
  },

  "pdf-page-organizer": {
    title: "Organizzatore di Pagine PDF: riordina, ruota ed elimina le pagine in modo visivo",
    intro: [
      "Riorganizzare un PDF è più facile quando le pagine si vedono. Carica un file e ogni pagina compare come miniatura. Sposta le pagine in un nuovo ordine, ruota quelle scansionate di lato, rimuovi quelle che non ti servono e salva il risultato come nuovo PDF.",
      "Tutto funziona sia con i pulsanti sia con il trascinamento, quindi puoi organizzare le pagine anche da tastiera o da telefono.",
    ],
    howTo: [
      { step: "Carica il PDF", detail: "Le miniature di ogni pagina compaiono nella pagina." },
      { step: "Riordina", detail: "Trascina una pagina in una nuova posizione, oppure usa i pulsanti con le frecce sotto di essa." },
      { step: "Ruota o rimuovi", detail: "Usa il pulsante di rotazione per girare una pagina in senso orario. Usa il pulsante di rimozione per eliminarla; puoi ripristinarla prima di salvare." },
      { step: "Crea il nuovo PDF", detail: "Se hai rimosso delle pagine ti verrà chiesta una conferma. Il file originale non viene mai modificato." },
    ],
    sections: [
      {
        heading: "Anteprima prima di confermare",
        body: "Le miniature vengono disegnate nel tuo browser, quindi vedi esattamente quale pagina è quale prima che qualcosa venga caricato per l'elaborazione. Le pagine rimosse restano a schermo, attenuate, e si possono ripristinare finché non crei il file.",
      },
      {
        heading: "Comandi accessibili",
        body: "Ogni azione ha un pulsante con un'etichetta: sposta prima, sposta dopo, ruota, rimuovi o ripristina. Il trascinamento è un extra, non un obbligo, quindi lo strumento funziona con la tastiera e con uno screen reader.",
      },
      {
        heading: "Eliminare le pagine in sicurezza",
        body: "Prima di creare un PDF con delle pagine rimosse, lo strumento ti chiede di confermare quante pagine verranno eliminate. Il nuovo file è separato dall'originale, che resta intatto sul tuo dispositivo.",
      },
      {
        heading: "Limiti",
        body: "File fino a 100 MB. I PDF protetti da password non possono essere aperti. I PDF molto lunghi richiedono più tempo per l'anteprima, perché ogni miniatura viene renderizzata una dopo l'altra.",
      },
    ],
    faqDescription: "Domande frequenti sul riordino, la rotazione e l'eliminazione delle pagine di un PDF.",
    faq: [
      { question: "Come riordino le pagine di un PDF?", answer: "Caricalo, poi trascina le miniature in un nuovo ordine o usa i pulsanti per spostare prima e dopo, e crea il nuovo PDF." },
      { question: "Posso farlo senza mouse?", answer: "Sì. Ogni azione ha un pulsante che puoi raggiungere e premere con la tastiera." },
      { question: "Posso annullare l'eliminazione di una pagina?", answer: "Sì. Le pagine rimosse restano visibili con un pulsante Ripristina finché non crei il file." },
      { question: "Modifica il mio file originale?", answer: "No. Ottieni un nuovo PDF e l'originale resta com'era." },
      { question: "Posso ruotare una sola pagina?", answer: "Sì. La rotazione si applica alla singola pagina che scegli, di 90 gradi a ogni clic." },
      { question: "Perché il mio PDF non si carica?", answer: "I PDF protetti da password e quelli danneggiati non possono essere visualizzati in anteprima. Rimuovi prima la password." },
    ],
  },

  "metadata-remover": {
    title: "Rimozione Metadati: elimina i dati nascosti da foto, PDF e file Office",
    intro: [
      "I file contengono informazioni che non vedi. Una foto scattata con il telefono può registrare dove e quando è stata scattata e con quale dispositivo. Un PDF o un documento Word può memorizzare il nome dell'autore, l'azienda e il software usato. Rimozione Metadati cancella questi dati nascosti prima che tu condivida il file.",
      "Funziona su foto, PDF e file Word, Excel e PowerPoint e non cambia mai il formato del file: un JPG resta un JPG, un DOCX resta un DOCX.",
    ],
    howTo: [
      { step: "Carica un file", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX o PPTX." },
      { step: "Controlla cosa verrà rimosso", detail: "Le categorie per ogni tipo di file sono elencate nella pagina." },
      { step: "Pulisci il file", detail: "I metadati vengono rimossi e il messaggio del risultato riassume cosa è stato cancellato." },
      { step: "Scarica la copia pulita", detail: "Mantiene il nome del tuo file con -clean aggiunto." },
    ],
    sections: [
      {
        heading: "Cosa viene rimosso",
        body: "Per le foto: i dettagli EXIF come modello di fotocamera e telefono, data di scatto e posizione GPS, oltre ai dati XMP e IPTC. Per i PDF: titolo, autore, oggetto, parole chiave, creatore, produttore, date e metadati XMP. Per Word, Excel e PowerPoint: autore, ultima modifica di, titolo, azienda, date e dettagli dell'applicazione.",
      },
      {
        heading: "Cosa resta",
        body: "Il contenuto visibile non viene toccato: l'immagine, le pagine, il testo. Alcuni dati strutturali servono a mantenere valido un file e restano. I contenuti che puoi vedere o che si trovano nel corpo del documento, come commenti, modifiche registrate, fogli nascosti o un nome scritto su una pagina, non sono metadati e non vengono rimossi. Controllali separatamente.",
      },
      {
        heading: "Le foto mantengono orientamento e colore",
        body: "Le foto vengono ruotate nel loro orientamento corretto prima che il tag di orientamento venga rimosso, così non finiscono di lato. Il profilo colore viene mantenuto affinché i colori non cambino.",
      },
      {
        heading: "Privacy",
        body: "I file sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. La copia pulita viene eliminata da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana.",
      },
    ],
    faqDescription: "Domande frequenti sulla rimozione dei metadati nascosti dai file.",
    faq: [
      { question: "Come rimuovo la posizione GPS da una foto?", answer: "Carica la foto. Lo strumento elimina i dati EXIF, comprese le coordinate GPS, e restituisce una copia pulita nello stesso formato." },
      { question: "Rimuovere i metadati riduce la qualità?", answer: "L'immagine viene ricodificata nel suo stesso formato, quindi un JPG può cambiare di una quantità minima. Non viene ridimensionata né convertita." },
      { question: "Può rimuovere l'autore da un documento Word?", answer: "Sì. Cancella autore, ultima modifica di, azienda e titolo memorizzati nelle proprietà del documento." },
      { question: "Resta qualcosa?", answer: "Restano i dati strutturali necessari a un file valido, il contenuto visibile e cose come commenti o modifiche registrate all'interno di un documento." },
      { question: "Quali formati sono supportati?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX e PPTX." },
      { question: "Modifica il mio file originale?", answer: "No. Scarichi una copia pulita separata." },
    ],
  },
};
