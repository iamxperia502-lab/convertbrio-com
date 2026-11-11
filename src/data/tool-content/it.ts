import type { ToolContentEntry } from "../toolContent";

// Italian (it) long-form tool content. Links point to the /it/ tool pages.

export const toolContentIt: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "Comprimere PDF online: riduci le dimensioni per e-mail e portali",
    intro: [
      "I PDF grandi, soprattutto quelli pieni di pagine scansionate o foto ad alta risoluzione, superano il limite degli allegati, sono lenti da caricare e vengono rifiutati dai portali che limitano le dimensioni dei file. Il compressore PDF di ConvertBrio ricodifica le immagini incorporate nel documento con una qualità e una risoluzione più efficienti e rimuove i metadati inutili, così le stesse pagine tornano in un file più piccolo.",
      "È gratis, funziona senza registrazione e senza filigrana. La compressione è senza perdita per testo e grafica vettoriale, restano nitidi, e riguarda solo le foto e le scansioni incorporate, dove un calo di qualità minimo e quasi sempre invisibile si traduce in una forte riduzione delle dimensioni.",
    ],
    howTo: [
      { step: "Carica il PDF", detail: "Trascina il file nel riquadro o clicca per sfogliare. Un PDF per volta, fino a 100 MB." },
      {
        step: "Clicca su Comprimi",
        detail:
          "ConvertBrio individua le immagini incorporate, ricodifica ognuna con una qualità più efficiente, riduce quelle più grandi del necessario e rimuove i metadati inutilizzati.",
      },
      {
        step: "Scarica e controlla le dimensioni",
        detail:
          "Il PDF compresso si scarica automaticamente. Aprilo per verificare che le pagine restino leggibili; se supera ancora il limite, vedi i consigli qui sotto su scansioni e divisione delle pagine.",
      },
    ],
    sections: [
      {
        heading: "Come funziona la compressione PDF",
        body: [
          "Le dimensioni di un PDF sono quasi sempre dominate da una sola cosa: le immagini incorporate. Testo, font e disegni vettoriali sono minuscoli in confronto. Per questo il compressore di ConvertBrio agisce dove sta il peso: trova le immagini fotografiche nel file, le ricodifica con un JPEG più efficiente e riduce la scala di ogni immagine la cui risoluzione supera di molto ciò che uno schermo o una stampante userebbe.",
          "Tutto ciò che non è una foto resta intatto: il testo resta selezionabile e nitido, i loghi e i grafici vettoriali mantengono bordi puliti e il layout non si sposta. I metadati senza funzione vengono scartati per recuperare un po' di spazio.",
        ],
      },
      {
        heading: "Quali PDF si riducono di più",
        body: "La riduzione dipende interamente da cosa rende grande il tuo file.",
        table: {
          headers: ["Tipo di PDF", "Risultato tipico"],
          rows: [
            ["Documento scansionato (foto delle pagine)", "Grande riduzione: spesso il 40–70% più piccolo"],
            ["Report con foto o screenshot", "Riduzione moderata, varia con il numero di immagini"],
            ["Presentazione esportata in PDF", "Riduzione moderata se le diapositive contengono foto"],
            ["PDF solo testo (contratto, ebook, fattura)", "Poco cambiamento: già compatto"],
            ["PDF con immagini in PNG o CMYK", "Limitata: quei tipi vengono ignorati per non alterare i colori"],
          ],
        },
      },
      {
        heading: "Comprimere un PDF senza perdere qualità",
        body: "Per qualsiasi PDF quasi tutto testo, la compressione è praticamente senza perdita: non perdi nulla di visibile. Per i PDF scansionati o ricchi di immagini, le immagini vengono ricodificate, quindi c'è un compromesso di qualità reale ma piccolo. In pratica, una pagina scansionata compressa con questo strumento resta leggibile a schermo e si stampa bene; la differenza si nota solo con uno zoom forte su una foto.",
      },
      {
        heading: "Portare un PDF sotto una dimensione precisa (100 KB, 500 KB, 2 MB)",
        body: [
          "Questo strumento fa una passata di compressione efficiente, non più tentativi fino a un numero esatto; non garantisce quindi un valore preciso in kilobyte. Ma alcune cose aiutano quando il limite è rigido:",
          "Se il tuo PDF è un documento scansionato, spesso cala molto in una sola passata: provalo per primo. Se supera ancora, dividilo in meno pagine con lo strumento Dividere PDF e comprimi ogni parte, oppure esporta solo le pagine necessarie. Se il peso viene da una o due foto enormi, comprimere quelle immagini a parte con Comprimere Immagine (che ha un obiettivo esatto di dimensione) prima di ricostruire il PDF dà il miglior controllo.",
        ],
      },
      {
        heading: "Comprimere o dividere",
        body: "La compressione riduce il peso di ogni pagina. La divisione riduce il numero di pagine. Se il tuo PDF da 30 MB ha 300 pagine di testo, la compressione aiuterà poco: dividerlo in sezioni con Dividere PDF è la risposta. Se sono 10 pagine scansionate da 3 MB ciascuna, la compressione è esattamente lo strumento giusto. Si completano a vicenda.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il tuo PDF è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un file per volta, fino a 100 MB, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti su come comprimere le dimensioni di un PDF online.",
    faq: [
      {
        question: "Come comprimere un PDF online gratis?",
        answer:
          "Carica il documento nello strumento Comprimere PDF di ConvertBrio e clicca su Comprimi. Ricodifica le immagini incorporate e rimuove i metadati inutili per ridurre il file, che si scarica automaticamente: senza account, senza filigrana, senza e-mail.",
      },
      {
        question: "Si può comprimere un PDF senza perdere qualità?",
        answer:
          "Il testo e il contenuto vettoriale non vengono mai degradati: restano perfettamente nitidi. Solo le foto e le scansioni vengono ricodificate, con un piccolo calo di qualità di solito invisibile alle dimensioni di visualizzazione normali.",
      },
      {
        question: "Come rendere un PDF più leggero per inviarlo via e-mail?",
        answer:
          "Passalo una volta nello strumento. La maggior parte dei limiti e-mail è di 20–25 MB; un documento scansionato o un report ricco di immagini di solito scende ben sotto. Se è ancora troppo grande, dividilo in parti con Dividere PDF.",
      },
      {
        question: "Posso comprimere un PDF a esattamente 100 KB o 300 KB?",
        answer:
          "Questo strumento non mira a una dimensione esatta: fa una passata efficiente. Per limiti rigidi, comprimi prima un PDF scansionato qui, riduci il numero di pagine con Dividere PDF se serve, oppure comprimi a parte le immagini incorporate più grandi con Comprimere Immagine, che accetta un obiettivo esatto in KB.",
      },
      {
        question: "Perché il mio PDF quasi non si è ridotto?",
        answer:
          "Probabilmente è già compatto: un PDF quasi tutto testo ha pochissimo da rimuovere. I file con scansioni ad alta risoluzione o foto incorporate hanno le riduzioni maggiori.",
      },
      {
        question: "La compressione cambia il layout o il testo?",
        answer:
          "No. Dimensioni della pagina, posizione del testo, font e testo selezionabile sono tutti preservati. Cambia solo la dimensione del file.",
      },
    ],
  },

  "compress-image": {
    title: "Compressore di immagini: riduci le dimensioni senza perdere qualità",
    intro: [
      "Che sia per superare un limite di caricamento, velocizzare un sito web o smettere di riempire lo spazio, il compressore di immagini di ConvertBrio riduce le dimensioni del file mantenendo l'immagine nitida. Tu controlli il risultato: imposti un livello di qualità o dai una dimensione target esatta in kilobyte e lasci che lo strumento la raggiunga.",
      "Questa modalità a dimensione target è il motivo per cui la maggior parte delle persone arriva qui. I portali per visti, i concorsi, le iscrizioni universitarie e i moduli della pubblica amministrazione spesso limitano una foto o una scansione a 100 KB, 200 KB o 50 KB. Invece di esportare a qualità indovinate finché una non va bene, scrivi il limite una volta e scarichi un file sotto di esso.",
    ],
    howTo: [
      { step: "Carica l'immagine", detail: "Trascina un JPG, PNG, WEBP, HEIC o AVIF, fino a 100 MB. Le foto HEIC da iPhone sono accettate direttamente." },
      {
        step: "Imposta una dimensione target o un livello di qualità",
        detail:
          "Scrivi la dimensione massima in KB (ad esempio 100). Lascia vuoto per usare il cursore della qualità, dove valori più bassi generano file più piccoli.",
      },
      {
        step: "Comprimi",
        detail:
          "ConvertBrio ricodifica l'immagine e, in modalità target, regola la qualità, poi le dimensioni se la qualità non basta, finché il file non rientra sotto il tuo limite.",
      },
      { step: "Scarica il risultato", detail: "Il file compresso si scarica automaticamente. Verifica che sia accettabile; se è troppo sfocato, alza il target e ripeti." },
    ],
    sections: [
      {
        heading: "Come funziona la compressione delle immagini",
        body: [
          "JPG, WEBP e AVIF sono formati con perdita: riducono il file scartando dati d'immagine che l'occhio umano ha meno probabilità di notare: sfumature di colore sottili, texture fine nelle aree movimentate, dettaglio ad alta frequenza. Abbassare la qualità dice al codificatore di scartare di più, generando un file più piccolo con un ammorbidimento e artefatti sempre più visibili.",
          "Il PNG è senza perdita e comprime in modo diverso: può solo impacchettare i pixel esatti in modo più efficiente, quindi una foto salvata in PNG quasi non si riduce. Se carichi un PNG nel compressore e vuoi una riduzione vera, convertirlo prima in JPG o WEBP (con il Convertitore di Immagini) fa molto più di qualsiasi compressione PNG.",
        ],
      },
      {
        heading: "Ridurre un'immagine a una dimensione esatta (come 100 KB)",
        body: "Scrivi il tuo limite nel campo dimensione target e ConvertBrio lavora a ritroso: cerca la qualità più alta possibile con una ricerca binaria tra il 10% e il 95%, ricontrollando la dimensione a ogni tentativo, e riduce le dimensioni solo se anche la qualità al 10% supera ancora: in quel caso la larghezza cala del 15% alla volta, fino a sei volte. Il risultato è la versione più grande e nitida della tua immagine che rientra ancora sotto il tetto.",
        list: [
          "Foto per visto o passaporto: spesso 100 KB, o un intervallo da 10 KB a 240 KB",
          "Portali della pubblica amministrazione e del fisco: comunemente 100 KB o 200 KB per scansione",
          "Siti di concorsi e candidature: spesso da 50 KB a 500 KB per foto o certificato",
          "Avatar di forum e marketplace: in genere intorno a 1–2 MB",
        ],
      },
      {
        heading: "Quanto si può comprimere prima che si veda?",
        body: "La maggior parte delle fotografie perde il 40–60% delle dimensioni senza differenza visibile alle dimensioni di visualizzazione normali, perché i primi dati che il codificatore scarta sono davvero difficili da vedere. Oltre, le aree piatte come i cieli iniziano a fare bande e i bordi del testo e il dettaglio fine diventano grezzi. Il metodo pratico è partire vicino alla parte alta dell'intervallo di qualità e scendere gradualmente guardando l'immagine.",
      },
      {
        heading: "Comprimere o ridimensionare",
        body: "La compressione mantiene le stesse dimensioni in pixel e riduce quanto costa ogni pixel. Il ridimensionamento riduce il numero di pixel stesso. Per una foto grande sia nelle dimensioni che nel peso, ridimensionare alla dimensione che serve davvero, e poi comprimere, genera un file molto più piccolo con meno perdita visibile.",
      },
      {
        heading: "Privacy e limiti",
        body: "Ogni caricamento è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Questo strumento comprime un'immagine per volta, fino a 100 MB, gratis, senza account e senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti su comprimere e ridurre le dimensioni delle immagini.",
    faq: [
      {
        question: "Come ridurre un'immagine sotto i 100 KB?",
        answer:
          "Carica l'immagine nel compressore di ConvertBrio e imposta la dimensione target a 100 KB. Lo strumento abbassa la qualità, e le dimensioni se serve, finché il file non rientra in quel limite, ideale per moduli e caricamenti di documenti con tetto rigido.",
      },
      {
        question: "Comprimere renderà l'immagine peggiore?",
        answer:
          "Con una compressione moderata, la maggior parte delle persone non nota differenza. La perdita di qualità si vede solo con impostazioni aggressive; meglio verificare il risultato che comprimere alla dimensione più piccola possibile per impostazione predefinita.",
      },
      {
        question: "Il mio PNG quasi non si è ridotto, perché?",
        answer:
          "Il PNG è senza perdita, quindi c'è poco margine per comprimere una fotografia salvata al suo interno. Converti prima il PNG in JPG o WEBP con il Convertitore di Immagini; solo questo spesso taglia le dimensioni del 70% o più.",
      },
      {
        question: "Il compressore mantiene le dimensioni dell'immagine?",
        answer:
          "Sì, a meno che tu non usi la modalità dimensione target e il file non rientri ancora dopo la riduzione massima della qualità, nel qual caso riduce anche le dimensioni come ultima risorsa.",
      },
      {
        question: "Si possono comprimere più immagini alla volta?",
        answer:
          "Comprimere un'immagine per volta è gratis e senza account. Questo strumento non elabora ancora più immagini in un'unica passata.",
      },
    ],
  },

  "merge-pdf": {
    title: "Unire PDF online: combina più PDF in un unico file",
    intro: [
      "Unire pagine scansionate, fatture, report o capitoli in un unico documento di solito richiede software desktop o un abbonamento a pagamento. Lo strumento di unione di ConvertBrio lo fa online, senza installare nulla: carica più PDF, mettili nell'ordine che vuoi e scarica un file combinato in pochi secondi.",
      "Ogni pagina di ogni file viene mantenuta esattamente com'è: nessuna ricompressione, nessuna perdita di qualità, nessuna filigrana. L'unico cambiamento è che file separati diventano uno solo.",
    ],
    howTo: [
      { step: "Carica due o più PDF", detail: "Trascinali tutti insieme o selezionane diversi nell'esplora file. Ogni file può arrivare a 100 MB." },
      {
        step: "Mettili in ordine",
        detail: "Il documento combinato segue l'ordine dell'elenco dei file; organizzali come deve leggersi il PDF finale: copertina prima, allegati per ultimi.",
      },
      { step: "Unisci e scarica", detail: "Clicca su Converti. ConvertBrio accoda le pagine di ogni file in sequenza e il PDF combinato si scarica automaticamente." },
    ],
    sections: [
      {
        heading: "Motivi comuni per unire i PDF",
        body: "È una delle operazioni PDF più usate, di solito per uno di questi casi:",
        list: [
          "Combinare pagine scansionate separatamente in un unico documento",
          "Assemblare un report, un contratto o una proposta in più parti",
          "Raccogliere più fatture o ricevute per un'unica nota spese",
          "Unire i capitoli di un manuale, un libro o una dispensa",
          "Allegare una lettera di presentazione al CV come un unico file",
        ],
      },
      {
        heading: "Impostare bene l'ordine delle pagine",
        body: "L'ordine del file combinato è definito dall'ordine di caricamento dei file; organizza l'elenco prima di convertire. Se uno dei PDF di origine ha le proprie pagine nell'ordine sbagliato, risolvilo prima: dividilo in pagine singole con Dividere PDF e poi unisci tutto nella sequenza che serve.",
      },
      {
        heading: "Dopo l'unione",
        body: "Un documento combinato è spesso il momento in cui vorrai ridurre le dimensioni, se le origini erano ricche di immagini (Comprimere PDF). Farlo sul file finale garantisce che la compressione rifletta l'intero documento.",
      },
      {
        heading: "Privacy e limiti",
        body: "I file sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Più file per unione, fino a 100 MB ciascuno, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sull'unione di più file PDF in uno solo.",
    faq: [
      {
        question: "Come unire file PDF online gratis?",
        answer:
          "Apri lo strumento Unire PDF di ConvertBrio, carica due o più PDF, organizzali nell'ordine che vuoi e scarica il file combinato: senza account, senza installare software, senza filigrana.",
      },
      {
        question: "Posso controllare l'ordine delle pagine nel PDF combinato?",
        answer:
          "Sì: i file vengono uniti nell'ordine in cui sono elencati, con le pagine di ciascuno in sequenza. Organizza i file prima di convertire.",
      },
      {
        question: "Unire riduce la qualità dei miei PDF?",
        answer:
          "No. Le pagine vengono copiate così come sono, senza ricompressione. Il file combinato pesa all'incirca la somma degli originali.",
      },
      {
        question: "Si possono unire immagini e PDF?",
        answer:
          "Converti prima le immagini in PDF con JPG in PDF, poi unisci quel PDF con gli altri qui.",
      },
      {
        question: "C'è un limite a quanti PDF posso combinare?",
        answer:
          "Puoi unire più file in una volta, fino a 100 MB ciascuno. I lavori molto grandi riescono meglio in due fasi.",
      },
    ],
  },

  "split-pdf": {
    title: "Dividere PDF online: separa un documento in pagine singole",
    intro: [
      "Devi estrarre una pagina da un PDF più grande o spezzare un documento multipagina in file separati? Lo strumento di divisione di ConvertBrio separa ogni pagina del tuo PDF in un file proprio, pronto da scaricare e usare in modo indipendente.",
      "È gratis, funziona senza registrazione e senza filigrana. Il risultato arriva come uno ZIP con una pagina per file.",
    ],
    howTo: [
      { step: "Carica il tuo PDF", detail: "Trascinalo nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Dividi", detail: "ConvertBrio spezza il documento in file di una pagina, uno per pagina dell'originale." },
      { step: "Scarica lo ZIP", detail: "Il risultato arriva come un unico ZIP con ogni pagina come PDF separato, pronto da estrarre." },
    ],
    sections: [
      {
        heading: "Quando dividere ha senso",
        body: "Casi comuni: estrarre una pagina di firma da un contratto, separare i capitoli di un libro scansionato, isolare una fattura da un lotto, o spezzare un report grande in sezioni più piccole da condividere.",
      },
      {
        heading: "Riunire le pagine più tardi",
        body: "Se dividi un PDF e poi devi ricombinare alcune o tutte le pagine in un nuovo documento, lo strumento Unire PDF di ConvertBrio le rimette insieme nell'ordine che scegli.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il file è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Limite di 100 MB per file.",
      },
    ],
    faqDescription: "Domande frequenti sulla divisione di un PDF in pagine singole.",
    faq: [
      {
        question: "Come dividere un PDF in pagine separate?",
        answer:
          "Carica il tuo PDF nello strumento Dividere PDF di ConvertBrio, e separa ogni pagina in un file singolo, tutti raccolti in un unico download ZIP.",
      },
      {
        question: "Posso estrarre solo una pagina da un PDF?",
        answer:
          "Sì: la divisione spezza il documento in pagine singole dentro uno ZIP, quindi prendi la pagina che ti serve e ignori il resto.",
      },
      {
        question: "Posso rimettere insieme le pagine dopo?",
        answer:
          "Sì, usa lo strumento Unire PDF di ConvertBrio per ricombinare le pagine risultanti in un nuovo documento nell'ordine che serve.",
      },
    ],
  },

  "pdf-to-word": {
    title: "Convertire PDF in Word: trasforma un PDF in un documento modificabile",
    intro: [
      "Devi modificare il testo di un PDF ma non hai il file di origine? Il convertitore PDF in Word di ConvertBrio ricostruisce il tuo PDF come un DOCX modificabile, paragrafi, grassetto e corsivo, titoli, tabelle semplici e immagini inclusi, che si apre in Microsoft Word, Google Docs o LibreOffice.",
      "È gratis, senza registrazione e senza filigrana. I documenti semplici si convertono bene; più la pagina originale è complessa visivamente, più aggiusterai dopo.",
    ],
    howTo: [
      {
        step: "Verifica se il PDF ha testo reale",
        detail:
          "Aprilo e prova a selezionare una frase con il cursore. Se ci riesci, passa al passaggio 2. Se il testo è un'immagine scansionata, passalo prima da OCR per PDF.",
      },
      { step: "Carica il PDF", detail: "Trascinalo nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Converti in DOCX", detail: "ConvertBrio ricostruisce il contenuto come documento Word, testo, titoli, tabelle di base e immagini, e si scarica automaticamente." },
      { step: "Apri e modifica in Word", detail: "Il DOCX si apre in Word, Google Docs o qualsiasi editor compatibile. Rivedi il layout e aggiusta ciò che la conversione non ha posizionato alla perfezione." },
    ],
    sections: [
      {
        heading: "Cosa si mantiene e cosa richiede ritocchi",
        body: "Saperlo in anticipo fa risparmiare tempo.",
        table: {
          headers: ["Elemento", "Risultato della conversione"],
          rows: [
            ["Paragrafi, grassetto, corsivo", "Mantenuti in modo affidabile"],
            ["Titoli ed elenchi di base", "Mantenuti nella maggior parte dei documenti"],
            ["Tabelle semplici", "Mantenute; bordi e spaziatura possono richiedere aggiustamenti"],
            ["Immagini in linea e a tutta larghezza", "Mantenute e posizionate nel flusso"],
            ["Layout a più colonne", "Appiattiti a una colonna: metti in conto di rifare il layout"],
            ["Intestazioni, piè di pagina, numeri di pagina", "Possono finire nel corpo o sparire"],
          ],
        },
      },
      {
        heading: "Convertire un documento scansionato in Word",
        body: "Se il tuo PDF è una scansione, una foto di ogni pagina anziché testo reale, questo convertitore non ha testo da estrarre e produrrà un documento vuoto o solo di immagini. Passa la scansione prima dallo strumento OCR per PDF: riconosce il testo stampato e aggiunge uno strato di testo. Poi converti quel PDF con OCR qui per ottenere un DOCX modificabile.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il PDF è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un documento per volta, fino a 100 MB, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di file PDF in documenti Word modificabili.",
    faq: [
      {
        question: "Come convertire un PDF in un documento Word modificabile?",
        answer:
          "Carica il tuo PDF nello strumento PDF in Word di ConvertBrio, e ricostruisce il contenuto, testo, titoli, tabelle semplici e immagini, in un DOCX che apri e modifichi in Microsoft Word o Google Docs.",
      },
      {
        question: "Come convertire un documento scansionato in Word?",
        answer:
          "Passa la scansione prima da OCR per PDF di ConvertBrio per riconoscere il testo e aggiungere uno strato di testo. Poi converti quel PDF qui per ottenere un DOCX modificabile. Una scansione pura non ha testo che questo strumento possa estrarre.",
      },
      {
        question: "I layout complessi e le immagini si convertono correttamente?",
        answer:
          "Paragrafi, grassetto e corsivo, titoli, tabelle semplici e immagini si mantengono. I layout a più colonne e le pagine molto elaborate vengono appiattiti e andranno rifatti.",
      },
      {
        question: "Il file convertito è un .docx vero?",
        answer:
          "Sì, un .docx standard che si apre in Microsoft Word, Google Docs, LibreOffice e Pages.",
      },
      {
        question: "Aggiungete una filigrana?",
        answer: "No. Il DOCX è pulito, senza filigrana, badge o metadati aggiunti.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Convertire Word in PDF: blocca la formattazione per la condivisione",
    intro: [
      "Un documento Word può apparire diverso a seconda dei font, della versione di Word o del sistema in cui viene aperto: un vero problema quando un CV, un contratto o un report deve apparire identico per chi lo riceve. Il convertitore Word in PDF di ConvertBrio trasforma il tuo DOCX in un PDF pronto per la stampa che appare uguale ovunque e non può essere modificato per sbaglio.",
      "È gratis, funziona senza registrazione, non serve Microsoft Word installato e non aggiunge filigrana.",
    ],
    howTo: [
      { step: "Salva il documento come .docx", detail: "In Word, usa File → Salva con nome e scegli Documento di Word (.docx). I file .doc vecchi non sono accettati." },
      { step: "Carica il file", detail: "Trascina il .docx nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Converti e scarica", detail: "ConvertBrio impagina il documento e genera il PDF. Il file si scarica automaticamente, pronto da inviare via e-mail, stampare o caricare." },
    ],
    sections: [
      {
        heading: "Perché convertire in PDF prima di inviare",
        body: "Il PDF è lo standard per i documenti finiti perché appare uguale su ogni dispositivo, senza dipendere dal fatto che il destinatario abbia Word o i font giusti. Un file Word, invece, può riorganizzare i paragrafi, spostare le interruzioni di pagina o sostituire i font su un'altra macchina: proprio ciò che non vuoi quando un selezionatore apre il tuo CV.",
      },
      {
        heading: "Come viene gestita la formattazione",
        body: "Testo, font, titoli, elenchi, tabelle, immagini in linea e formato pagina si mantengono. Funzioni molto specifiche di Word, intestazioni e piè di pagina personalizzati, note a piè di pagina, revisioni, possono apparire un po' diverse perché il documento viene impaginato di nuovo, non da Word stesso.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il tuo documento è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un .docx per volta, fino a 100 MB, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di documenti Word in PDF.",
    faq: [
      {
        question: "Come convertire un documento Word in PDF gratis?",
        answer:
          "Carica il tuo .docx nello strumento Word in PDF di ConvertBrio e genera un PDF formattato pronto da scaricare: senza installare Microsoft Word, senza account, senza filigrana.",
      },
      {
        question: "La mia formattazione resterà uguale dopo la conversione?",
        answer:
          "Sì, per i documenti standard: layout, font, titoli, tabelle e immagini si mantengono, e a differenza di un file Word il PDF appare uguale su ogni dispositivo.",
      },
      {
        question: "Funziona con i file .doc?",
        answer:
          "Solo con il formato moderno .docx. Apri un .doc vecchio in Word e salvalo come .docx (File → Salva con nome), poi converti.",
      },
      {
        question: "Posso riconvertire il PDF in Word dopo?",
        answer:
          "Sì, usa lo strumento PDF in Word di ConvertBrio. Nota che riportare un PDF a layout fisso in testo modificabile è approssimativo per i layout complessi.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "Convertire PDF in JPG: esporta ogni pagina come immagine",
    intro: [
      "A volte serve una pagina di PDF come immagine: per metterla in una diapositiva, pubblicarla sui social, allegarla dove i PDF non sono accettati o estrarre un grafico da un report lungo. Il convertitore PDF in JPG di ConvertBrio renderizza ogni pagina del tuo file come un JPG separato.",
      "È gratis, senza registrazione e senza filigrana. Un PDF di una pagina restituisce un unico JPG; uno multipagina restituisce un set di immagini, una per pagina.",
    ],
    howTo: [
      { step: "Carica il tuo PDF", detail: "Trascinalo nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Converti", detail: "ConvertBrio renderizza ogni pagina in un JPG ad alta risoluzione. I documenti più lunghi impiegano un po' di più perché ogni pagina viene renderizzata singolarmente." },
      { step: "Scarica le immagini", detail: "Una singola pagina si scarica come JPG; più pagine si scaricano insieme, così hai l'intero documento in immagini." },
    ],
    sections: [
      {
        heading: "Usi comuni",
        body: "",
        list: [
          "Inserire una pagina di PDF in una diapositiva di PowerPoint o Google Presentazioni",
          "Pubblicare una pagina o un certificato sui social o in un'app di messaggistica",
          "Caricare pagine di documento in un modulo che accetta solo immagini",
          "Estrarre un diagramma, un grafico o una figura da un report per riutilizzarlo",
        ],
      },
      {
        heading: "JPG o PNG?",
        body: "Scegli JPG per pagine fotografiche e per la dimensione file più piccola: è lo standard giusto per la condivisione. Scegli PDF in PNG quando la pagina è quasi tutta testo, tabelle o tratti e la vuoi ben nitida, o quando serve uno sfondo trasparente.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il tuo PDF è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un file per volta, fino a 100 MB, gratis, senza account.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di pagine di PDF in immagini JPG.",
    faq: [
      {
        question: "PDF in JPG converte tutte le pagine?",
        answer:
          "Sì: ogni pagina del tuo PDF viene renderizzata come un JPG separato, quindi un documento multipagina produce un'immagine per pagina.",
      },
      {
        question: "Meglio JPG o PNG per una pagina con testo?",
        answer:
          "Il PNG mantiene testo e tratti più nitidi perché è senza perdita; il JPG genera un file più piccolo con un dettaglio un po' più morbido. Usa PNG quando la nitidezza del testo conta di più.",
      },
      {
        question: "Posso riconvertire le immagini in PDF dopo?",
        answer:
          "Sì, usa lo strumento JPG in PDF di ConvertBrio per ricombinare le immagini in un unico PDF quando serve.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "Convertire JPG in PDF: unisci le immagini in un unico documento",
    intro: [
      "Che sia per inviare pagine scansionate, creare un portfolio semplice o trasformare una pila di ricevute in un unico file, lo strumento JPG in PDF di ConvertBrio combina una o più immagini in un unico PDF, nell'ordine che scegli, con un'immagine per pagina.",
      "È il modo standard per trasformare le foto di carta in qualcosa che si può inviare. La maggior parte dei portali vuole un PDF, non una cartella di JPG: questo lo risolve in un passaggio, gratis e senza filigrana.",
    ],
    howTo: [
      { step: "Fotografa o raccogli le immagini", detail: "Per le pagine di documento, fotografa frontalmente e con buona luce così il testo è leggibile. JPG e PNG sono accettati." },
      { step: "Caricale tutte insieme", detail: "Trascina tutte le immagini nel riquadro o selezionane diverse. Dimensione combinata fino a 100 MB." },
      { step: "Imposta l'ordine delle pagine", detail: "Il PDF segue l'ordine in cui sono elencate le immagini; organizza pagina 1, pagina 2 e così via." },
      { step: "Converti e scarica", detail: "ConvertBrio mette ogni immagine su una pagina propria e il PDF finale si scarica automaticamente." },
    ],
    sections: [
      {
        heading: "Usi comuni",
        body: "",
        list: [
          "Inviare un documento, una carta d'identità, un passaporto o un certificato scansionato",
          "Combinare più foto di ricevuta o fattura per una nota spese",
          "Restituire un contratto firmato a mano come un unico file",
          "Trasformare un insieme di screenshot in un documento da condividere",
        ],
      },
      {
        heading: "Un documento pulito da foto del telefono",
        body: "Per risultati leggibili, riempi l'inquadratura con la pagina, tieni la fotocamera parallela per evitare la forma a trapezio e usa luce uniforme senza ombre sul testo. Se una foto è ruotata, correggila prima di convertire. Se il PDF risultante è troppo grande per un limite di caricamento, passalo da Comprimere PDF dopo.",
      },
      {
        heading: "Privacy e limiti",
        body: "Le immagini sono cifrate durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Più immagini per volta, 100 MB combinati, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini JPG in un PDF.",
    faq: [
      {
        question: "Si possono combinare più immagini in un unico PDF?",
        answer:
          "Sì: carica tutte le immagini JPG o PNG che ti servono in una volta, e ConvertBrio le combina in un PDF con ogni immagine su una pagina propria, nell'ordine che organizzi.",
      },
      {
        question: "Come convertire la foto di un documento in PDF?",
        answer:
          "Carica la foto su JPG in PDF e diventa un PDF di una pagina che puoi inviare, stampare o condividere. Carica più foto per trasformare un documento multipagina in un unico PDF.",
      },
      {
        question: "Il mio PDF è troppo grande da inviare, cosa faccio?",
        answer:
          "Le foto del telefono sono ad alta risoluzione, quindi il PDF può risultare grande. Passalo da Comprimere PDF, che ricodifica le immagini incorporate e di solito taglia parecchio le dimensioni.",
      },
    ],
  },

  "image-converter": {
    title: "Convertitore di immagini: converti tra qualsiasi formato online",
    intro: [
      "Il convertitore di immagini di ConvertBrio sposta una foto, un grafico o uno screenshot tra JPG, PNG, WEBP, AVIF, HEIC e GIF in un passaggio. Niente da installare, nessun account da creare: carica un file, scegli il formato e scarica il risultato in pochi secondi.",
      "Il motivo più comune per convertire un'immagine è la compatibilità: una foto HEIC da iPhone che Windows non apre, un WEBP salvato da un sito che un editor rifiuta, o un AVIF che un vecchio client di posta non mostra.",
    ],
    howTo: [
      { step: "Carica la tua immagine", detail: "Trascina un file JPG, PNG, WEBP, AVIF, HEIC o GIF nel riquadro, o clicca per sfogliare. Fino a 100 MB." },
      { step: "Scegli il formato di uscita", detail: "Seleziona JPG, PNG, WEBP, AVIF o GIF. In caso di dubbio, JPG va bene per le foto e PNG per grafica con trasparenza o testo nitido." },
      { step: "Converti e scarica", detail: "Clicca su Converti. ConvertBrio decodifica l'originale e lo ricodifica nel formato scelto, e il file si scarica automaticamente." },
    ],
    sections: [
      {
        heading: "Scegliere il formato di uscita giusto",
        body: "Non esiste un formato immagine migliore: la scelta giusta dipende da dove va il file.",
        table: {
          headers: ["Devi…", "Convertire in", "Perché"],
          rows: [
            ["Allegare una foto a un'e-mail o un modulo", "JPG", "Si apre ovunque, file piccolo, nessun rischio di incompatibilità"],
            ["Mantenere uno sfondo trasparente", "PNG o WEBP", "JPG e il vecchio GIF appiattiscono la trasparenza su un colore pieno"],
            ["Velocizzare le immagini del tuo sito", "WEBP o AVIF", "Molto più piccoli di JPG/PNG a parità di qualità visiva"],
            ["Aprire una foto di iPhone su Windows", "JPG", "Il supporto HEIC su Windows è incostante; JPG è garantito"],
            ["Caricare su un sito che rifiuta WEBP o AVIF", "JPG o PNG", "I due formati accettati da ogni modulo di caricamento"],
          ],
        },
      },
      {
        heading: "Cosa succede a trasparenza e animazione",
        body: "La trasparenza si mantiene quando entrambi i formati supportano un canale alfa (PNG, WEBP, AVIF). Convertire un'immagine trasparente in JPG riempie le aree trasparenti di bianco. I GIF animati vengono convertiti in un unico fotogramma fisso.",
      },
      {
        heading: "Privacy e limiti",
        body: "Ogni caricamento è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. File fino a 100 MB, gratis, senza account e senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sul convertitore di immagini di ConvertBrio.",
    faq: [
      {
        question: "Tra quali formati immagine posso convertire?",
        answer:
          "Il convertitore legge JPG, PNG, WEBP, AVIF, HEIC e GIF, ed esporta in JPG, PNG, WEBP, AVIF o GIF. Copre praticamente ogni formato di fotocamere, telefoni, screenshot e programmi di design.",
      },
      {
        question: "Convertire ridurrà la qualità della mia immagine?",
        answer:
          "Convertire tra formati senza perdita come PNG mantiene ogni pixel. Convertire in un formato con perdita come JPG o WEBP applica la compressione una volta, ma alla qualità predefinita la differenza è raramente visibile.",
      },
      {
        question: "Convertire cambia le dimensioni dell'immagine?",
        answer:
          "No. Il convertitore mantiene la larghezza e l'altezza esatte dell'originale. Se devi anche cambiare le dimensioni, usa uno strumento di ridimensionamento dopo.",
      },
      {
        question: "Aggiungete una filigrana?",
        answer: "No. Il file convertito è pulito, a piena risoluzione, senza filigrana o badge.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR per PDF: rendi un documento scansionato ricercabile e modificabile",
    intro: [
      "Una pagina scansionata o la foto di un documento è solo un'immagine per il computer: non puoi cercare, copiare il testo né portare il documento scansionato in Word senza ridigitare ogni riga. Il riconoscimento ottico dei caratteri (OCR) risolve questo: legge il testo dentro l'immagine e lo trasforma in caratteri veri, selezionabili.",
      "È lo strumento che le persone cercano quando cercano come trasformare un documento scansionato in testo modificabile. Scansiona o fotografa le pagine, salvale come PDF, passale qui e copia il testo, oppure invia il PDF ricercabile allo strumento PDF in Word.",
    ],
    howTo: [
      { step: "Scansiona o fotografa il documento come PDF", detail: "Usa uno scanner o un'app di scansione del telefono (che salva direttamente in PDF). Pagine dritte, piatte e ben illuminate danno il miglior riconoscimento." },
      { step: "Carica il PDF su OCR per PDF", detail: "Un file per volta, fino a 100 MB. I documenti multipagina funzionano: ogni pagina viene elaborata." },
      { step: "Avvia il riconoscimento", detail: "ConvertBrio legge ogni pagina e costruisce uno strato di testo dietro l'immagine originale. I documenti più grandi impiegano più tempo perché ogni pagina passa singolarmente." },
      { step: "Porta il testo in Word", detail: "Apri il PDF restituito, seleziona tutto (Ctrl/Cmd+A) e incolla in Word, oppure invia il PDF ricercabile a PDF in Word per un DOCX che mantiene la formattazione di base." },
    ],
    sections: [
      {
        heading: "Cosa restituisce OCR per PDF",
        body: "Un PDF identico a quello caricato, stesse immagini di pagina, stesso layout, ma con uno strato di testo dietro l'immagine. Questo significa che puoi cercare con Ctrl+F, evidenziare e copiare passaggi e selezionare l'intero documento per spostare il testo in un posto modificabile. L'aspetto della pagina non cambia.",
      },
      {
        heading: "Portare un documento scansionato in Word",
        body: [
          "Ci sono due strade, a seconda di quanta formattazione devi mantenere.",
          "Per il testo semplice, fai l'OCR del PDF qui, aprilo e copia il testo direttamente in un documento Word vuoto. Veloce, e funziona per lettere, appunti e pagine a colonna singola.",
          "Per un documento che deve mantenere titoli, paragrafi e tabelle semplici, passa il PDF con OCR dallo strumento PDF in Word dopo. Ricostruisce il contenuto riconosciuto come un DOCX modificabile.",
        ],
      },
      {
        heading: "Ottenere la migliore precisione",
        body: "La qualità dell'OCR segue la qualità della scansione. Pagine pulite, ad alto contrasto, scansionate a 300 DPI o fotografate frontalmente e ben illuminate vengono riconosciute quasi alla perfezione. La precisione cala con l'inclinazione, le ombre, la bassa risoluzione o i font insoliti. La scrittura a mano non viene riconosciuta in modo affidabile.",
      },
      {
        heading: "Privacy e limiti",
        body: "Il tuo documento è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un PDF per volta, fino a 100 MB, gratis, senza account.",
      },
    ],
    faqDescription: "Domande frequenti sull'OCR di un PDF e sul portare il testo scansionato in Word.",
    faq: [
      {
        question: "Come portare un documento scansionato in Word?",
        answer:
          "Salva la scansione come PDF, passala da OCR per PDF per aggiungere uno strato di testo, poi copia il testo direttamente in Word, oppure invia il PDF con OCR allo strumento PDF in Word per un DOCX modificabile che mantiene la formattazione di base.",
      },
      {
        question: "Si può scansionare un documento in testo modificabile gratis?",
        answer:
          "Sì. OCR per PDF è gratis e senza account. Riconosce il testo di ogni pagina scansionata così puoi selezionarlo, copiarlo e riutilizzarlo.",
      },
      {
        question: "L'OCR cambia l'aspetto del mio documento?",
        answer:
          "No. L'immagine della pagina originale viene mantenuta esattamente; il testo riconosciuto viene aggiunto come strato invisibile sopra, quindi visivamente non cambia nulla.",
      },
      {
        question: "Riconosce la scrittura a mano?",
        answer: "Non in modo affidabile. L'OCR è fatto per testo stampato e digitato. Gli appunti a mano possono essere riconosciuti solo in parte.",
      },
      {
        question: "Il mio PDF ha già testo selezionabile, serve ancora l'OCR?",
        answer:
          "No. Se puoi già evidenziare il testo con il cursore, il PDF ha uno strato di testo vero e puoi andare direttamente a PDF in Word.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Comprimere PowerPoint online: riduci un .pptx per l'e-mail",
    intro: [
      "I file PowerPoint crescono in fretta: qualche foto dal telefono, un paio di screenshot, un grafico esportato, e un .pptx supera i 40 MB e non parte via e-mail. Lo strumento Comprimere PowerPoint di ConvertBrio apre la presentazione, ricodifica le immagini al suo interno con qualità e risoluzione efficienti, e restituisce un .pptx più piccolo che resta pienamente modificabile.",
      "È gratis, funziona senza registrazione e senza filigrana. Il testo delle diapositive, il layout, le animazioni, i grafici e le note restano intatti: solo le foto e gli screenshot incorporati vengono ricodificati.",
    ],
    howTo: [
      { step: "Salva la presentazione come .pptx", detail: "In PowerPoint, File → Salva con nome → Presentazione di PowerPoint (.pptx). Il formato .ppt vecchio non è accettato." },
      { step: "Caricala", detail: "Trascina il .pptx nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Comprimi", detail: "ConvertBrio trova ogni immagine incorporata, riduce la scala di quelle più grandi di ciò che una diapositiva mostra, e le ricodifica. Testo e contenuto vettoriale vengono lasciati intatti." },
      { step: "Scarica il .pptx più piccolo", detail: "Aprilo in PowerPoint per verificare che le diapositive siano a posto, poi invialo via e-mail o caricalo." },
    ],
    sections: [
      {
        heading: "Perché i file PowerPoint diventano così grandi",
        body: "I telefoni moderni scattano foto da 12 a 48 megapixel, diversi megabyte ciascuna. Incollane quattro tra le diapositive e la presentazione porta ~20 MB di immagini prima di una sola parola di testo. PowerPoint mantiene ogni immagine alla risoluzione piena di inserimento, anche se la diapositiva ne mostra solo una versione piccola.",
      },
      {
        heading: "Cosa cambia lo strumento e cosa no",
        body: "",
        list: [
          "Ricodificate: immagini JPEG e PNG incorporate, ridotte se maggiori di ~1800px sul lato lungo",
          "Intatti: tutto il testo, i font, il layout delle diapositive, le animazioni, le transizioni e le note",
          "Intatti: grafici, tabelle, SmartArt e forme vettoriali",
          "Il file resta un .pptx normale e modificabile: nulla viene appiattito",
        ],
      },
      {
        heading: "Quanto diventerà più piccolo?",
        body: "Dipende da quante immagini ha la presentazione. Una presentazione costruita attorno a foto e screenshot ad alta risoluzione cala spesso del 40–70%. Una quasi tutta testo, con un logo e qualche piccola immagine, non cambia molto.",
      },
      {
        heading: "Per un file ancora più piccolo: converti in PDF",
        body: "Se la presentazione è finita e il destinatario non deve modificarla, convertirla in PDF e poi comprimere quel PDF di solito produce il file più piccolo di tutti, e si apre su ogni dispositivo senza PowerPoint. Il compromesso: non è più una presentazione modificabile.",
      },
      {
        heading: "Privacy e limiti",
        body: "La tua presentazione è cifrata durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un .pptx per volta, fino a 100 MB, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla riduzione delle dimensioni di una presentazione PowerPoint.",
    faq: [
      {
        question: "Come comprimere un PowerPoint per l'e-mail?",
        answer:
          "Carica il .pptx nello strumento Comprimere PowerPoint di ConvertBrio. Ricodifica le immagini incorporate e restituisce una presentazione più piccola e ancora modificabile: gratis, senza registrazione, senza filigrana.",
      },
      {
        question: "Il file compresso resta modificabile?",
        answer:
          "Sì. L'output è un .pptx normale che apri e modifichi in PowerPoint. Solo le immagini incorporate vengono ricodificate; testo, layout, animazioni e note non cambiano.",
      },
      {
        question: "La compressione abbasserà la qualità delle mie diapositive?",
        answer:
          "Testo e forme vettoriali restano perfettamente nitidi. Le foto vengono ricodificate con un piccolo calo di qualità, quasi sempre invisibile; la differenza si nota solo con uno zoom forte su un'immagine su uno schermo grande.",
      },
      {
        question: "La mia presentazione quasi non si è ridotta, perché?",
        answer:
          "Probabilmente è già leggera: una presentazione quasi tutta testo ha pochi dati di immagine da rimuovere.",
      },
      {
        question: "Funziona con i file .ppt?",
        answer:
          "Solo il formato moderno .pptx. Apri un .ppt vecchio in PowerPoint e salvalo come .pptx (File → Salva con nome), poi comprimi.",
      },
    ],
  },

  "compress-word": {
    title: "Comprimere documento Word online: riduci un .docx per l'e-mail",
    intro: [
      "Un documento Word che non parte via e-mail porta quasi sempre immagini a piena risoluzione. Una sola foto dal telefono incollata in un report può pesare 5 MB da sola; qualcuna e un .docx quasi tutto testo supera i 30 MB. Lo strumento Comprimere Documento Word di ConvertBrio apre il documento, ricodifica le immagini al suo interno con qualità e risoluzione efficienti, e restituisce un .docx più piccolo che resta pienamente modificabile.",
      "È gratis, funziona senza registrazione e senza filigrana. Testo, titoli, tabelle, stili e layout restano intatti: solo le foto e gli screenshot incorporati vengono ricodificati.",
    ],
    howTo: [
      { step: "Salva il documento come .docx", detail: "In Word, File → Salva con nome → Documento di Word (.docx). Il formato .doc vecchio non è accettato." },
      { step: "Caricalo", detail: "Trascina il .docx nel riquadro o sfoglia. Un file per volta, fino a 100 MB." },
      { step: "Comprimi", detail: "ConvertBrio trova ogni immagine incorporata, riduce la scala di quelle più grandi di ciò che una pagina mostra, e le ricodifica. Testo e contenuto vettoriale vengono lasciati intatti." },
      { step: "Scarica il .docx più piccolo", detail: "Aprilo in Word per verificare che sia a posto, poi invialo via e-mail o caricalo." },
    ],
    sections: [
      {
        heading: "Perché i file Word diventano così grandi",
        body: "Word incorpora ogni immagine alla risoluzione di inserimento: una foto da 24 megapixel resta a 24 megapixel anche se la pagina la mostra larga due centimetri. Il testo, in confronto, è minuscolo. Comprimere un documento Word significa quindi ricodificare e ridurre la scala delle immagini al suo interno.",
      },
      {
        heading: "Cosa cambia lo strumento e cosa no",
        body: "",
        list: [
          "Ricodificate: immagini JPEG e PNG incorporate, ridotte se maggiori di ~1800px sul lato lungo",
          "Intatti: tutto il testo del corpo, i titoli, gli stili, gli elenchi e le tabelle",
          "Intatti: layout della pagina, intestazioni e piè di pagina, note a piè di pagina e campi",
          "Il file resta un .docx normale e modificabile",
        ],
      },
      {
        heading: "Se è ancora troppo grande",
        body: [
          "Per un documento finito che stai per inviare, Word in PDF seguito da Comprimere PDF di solito produce il file più piccolo, e non può essere modificato per sbaglio.",
          "Un documento grande nonostante poche immagini può portare revisioni e cronologia delle versioni (accetta o rifiuta tutte le modifiche e disattiva le revisioni), font incorporati (File → Opzioni → Salvataggio → deseleziona «Incorpora caratteri nel file»), o contenuto incollato come oggetti Excel o web.",
        ],
      },
      {
        heading: "Privacy e limiti",
        body: "Il tuo documento è cifrato durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. Un .docx per volta, fino a 100 MB, gratis, senza account, senza filigrana.",
      },
    ],
    faqDescription: "Domande frequenti sulla riduzione delle dimensioni di un documento Word.",
    faq: [
      {
        question: "Come rendere un documento Word più piccolo per l'e-mail?",
        answer:
          "Carica il .docx nello strumento Comprimere Documento Word di ConvertBrio. Ricodifica le immagini incorporate e restituisce un documento più piccolo e ancora modificabile: gratis, senza registrazione, senza filigrana. Per il file più piccolo, converti in PDF e comprimi quel PDF.",
      },
      {
        question: "Il file compresso resta modificabile?",
        answer:
          "Sì. L'output è un .docx normale che apri e modifichi in Word, Google Docs o LibreOffice. Solo le immagini incorporate vengono ricodificate.",
      },
      {
        question: "La compressione cambia il mio testo o la formattazione?",
        answer: "No. Solo le immagini sono interessate. Testo, titoli, tabelle, stili e layout della pagina non cambiano.",
      },
      {
        question: "Il mio documento è quasi tutto testo ma è ancora grande, perché?",
        answer:
          "Controlla revisioni e cronologia delle versioni, font incorporati o contenuto incollato come oggetti Excel/web completi. Ognuno può aggiungere diversi megabyte indipendentemente dalle immagini.",
      },
      {
        question: "Funziona con i vecchi file .doc?",
        answer: "Solo il formato moderno .docx. Apri il .doc in Word e salvalo come .docx (File → Salva con nome), poi comprimi.",
      },
    ],
  },
};
