import type { ToolContentEntry } from "../toolContent";

export const toolContentItMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "Da HEIC a JPG: apri le foto dell'iPhone ovunque",
    intro: [
      "iPhone e iPad salvano le foto in HEIC per impostazione predefinita: un formato che comprime benissimo ma che molti programmi di uso quotidiano non riescono ad aprire, dai vecchi PC Windows ad alcuni moduli di caricamento e programmi di fotoritocco. Il convertitore HEIC in JPG di ConvertBrio risolve il problema in un attimo: carichi la foto e ottieni un normale JPG che si apre in qualsiasi browser, app o dispositivo, senza plugin né pacchetti di codec.",
      "Non devi cambiare alcuna impostazione sul telefono né installare nulla. La conversione mantiene la foto alla risoluzione originale e conserva l'orientamento, così le foto verticali non escono girate di lato. Il risultato è un semplice JPG che puoi inviare per e-mail, caricare su un portale della pubblica amministrazione o di lavoro, inserire in un documento o aprire con qualsiasi editor di foto.",
    ],
    howTo: [
      {
        step: "Porta il file HEIC sul tuo dispositivo",
        detail:
          "Trasferisci la foto dall'iPhone con AirDrop, e-mail o cavo, oppure scaricala da iCloud. Il file avrà l'estensione .heic o .heif.",
      },
      {
        step: "Caricalo nel convertitore",
        detail: "Trascina il file nel riquadro di caricamento o cercalo sul dispositivo. Una foto per conversione, fino a 100 MB.",
      },
      {
        step: "Clicca su Converti",
        detail:
          "ConvertBrio decodifica l'immagine HEIC e la ricodifica in JPG alla massima risoluzione, correggendo la rotazione in base al tag di orientamento incorporato.",
      },
      {
        step: "Scarica il JPG",
        detail: "Il file convertito si scarica automaticamente e si apre in qualsiasi browser, visualizzatore, client di posta o modulo di caricamento.",
      },
    ],
    sections: [
      {
        heading: "Perché i file HEIC danno problemi",
        body: [
          "HEIC (High Efficiency Image Container) memorizza una foto con circa la metà dello spazio di un JPG equivalente alla stessa qualità, ed è per questo che Apple ne ha fatto il formato predefinito di iOS nel 2017. Il prezzo da pagare è la compatibilità: HEIC si basa sul codec HEVC, che molti siti web, le versioni più vecchie di Windows, i dispositivi Android e le app di terze parti non sanno decodificare oppure gestiscono in modo incoerente.",
          "Se hai caricato una foto dell'iPhone in un modulo e hai ricevuto l'errore «tipo di file non supportato», hai visto un'anteprima vuota o un collega ti ha detto che l'immagine non si apre, quasi sempre la causa è l'HEIC. Convertendo in JPG questa dipendenza sparisce del tutto.",
        ],
      },
      {
        heading: "HEIC e JPG a confronto",
        body: "Entrambi i formati sono con perdita, ma sono stati progettati a distanza di un quarto di secolo e differiscono per ciò che supportano.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Dimensione del file", "~50% più piccolo a parità di qualità", "Più grande, ma compreso ovunque"],
            ["Compatibilità", "Solo dispositivi Apple e browser/sistemi più recenti", "Ogni dispositivo, browser, app e modulo"],
            ["Trasparenza", "Supportata", "Non supportata"],
            ["Immagini multiple / dati di profondità", "Supportati (Live Photo, profondità del ritratto)", "Solo una singola immagine piatta"],
            ["Ideale per", "Archiviazione sui dispositivi Apple", "Condividere, caricare e modificare ovunque"],
          ],
        },
      },
      {
        heading: "La conversione fa perdere qualità?",
        body: "C'è un solo passaggio di ricompressione, perché HEIC e JPG usano algoritmi diversi, ma con la qualità JPG predefinita di ConvertBrio la differenza non si nota alla visualizzazione normale né in stampa. La risoluzione della foto (il numero di megapixel) resta invariata. Se prevedi di modificare molto la foto in seguito, converti invece in PNG con il Convertitore di Immagini, per evitare una seconda compressione con perdita più avanti.",
      },
      {
        heading: "Convertire più foto dell'iPhone",
        body: "Questo strumento converte un file HEIC per volta. Per un gruppo di foto, la strada più rapida è impostare la fotocamera dell'iPhone per scattare in JPG d'ora in poi (Impostazioni → Fotocamera → Formati → Più compatibile) e usare questo convertitore per le foto HEIC già presenti nella libreria. Per riunire più foto dell'iPhone in un unico file dopo la conversione, Immagine in PDF accetta direttamente l'HEIC e combina più immagini in un solo PDF.",
      },
      {
        heading: "Privacy",
        body: "La foto viene cifrata durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase). Nulla viene conservato, indicizzato o usato per scopi diversi dalla conversione.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione delle foto HEIC dell'iPhone in JPG.",
    faq: [
      {
        question: "Perché la foto del mio iPhone non si apre sul computer?",
        answer:
          "Probabilmente è salvata in HEIC, il formato fotografico predefinito di Apple da iOS 11. Molti PC Windows, telefoni Android, app meno recenti e siti web non supportano l'HEIC. Convertendola in JPG con ConvertBrio la rendi apribile ovunque.",
      },
      {
        question: "Convertire da HEIC a JPG fa perdere qualità?",
        answer:
          "Nella ricodifica in JPG c'è una piccola ricompressione, perché HEIC e JPG usano metodi di compressione diversi, ma con la qualità predefinita di ConvertBrio non si nota a occhio nella visualizzazione normale e la risoluzione resta invariata.",
      },
      {
        question: "La mia foto uscirà ruotata o di lato?",
        answer:
          "No. ConvertBrio legge il tag di orientamento del file HEIC e applica la rotazione corretta al JPG, così le foto verticali e orizzontali escono dal lato giusto.",
      },
      {
        question: "Posso convertire HEIC in PNG invece che in JPG?",
        answer:
          "Sì, usa il Convertitore di Immagini generico e scegli PNG come formato di output se ti serve un file senza perdita, o se prevedi di modificare l'immagine più volte e vuoi evitare una seconda compressione con perdita.",
      },
      {
        question: "Come faccio a impedire all'iPhone di scattare foto in HEIC?",
        answer:
          "Sul tuo iPhone apri Impostazioni → Fotocamera → Formati e scegli «Più compatibile». Le nuove foto verranno salvate in JPG. Quelle già presenti nella libreria restano in HEIC e vanno ancora convertite.",
      },
      {
        question: "HEIF e HEIC sono la stessa cosa?",
        answer:
          "Per questo scopo, in pratica sì. HEIF è lo standard del contenitore; HEIC è l'implementazione di Apple con compressione HEVC. Questo strumento accetta sia file .heic sia file .heif.",
      },
    ],
  },

  "jpg-to-png": {
    title: "Da JPG a PNG: trasparenza e dettaglio senza perdita",
    intro:
      "Il JPG è ottimo per foto piccole e facili da condividere, ma non può contenere trasparenza e perde un po' di qualità a ogni nuovo salvataggio. Il convertitore JPG in PNG di ConvertBrio trasforma il tuo JPG in un PNG senza perdita in pochi secondi: il formato che serve prima di modificare ancora un'immagine, di appoggiarla su uno sfondo colorato o di usarla come logo o icona.",
    sections: [
      {
        heading: "Quando convertire da JPG a PNG",
        body: "Converti in PNG ogni volta che ti serve un canale alfa (la trasparenza), per esempio per ritagliare un logo dal suo sfondo, oppure quando stai per modificare più volte un'immagine e vuoi evitare la perdita di generazione dovuta ai ripetuti salvataggi in JPG. Il PNG è anche la scelta più sicura per screenshot, diagrammi e tutto ciò che contiene testo nitido o bordi netti, perché la compressione del JPG può introdurre sfocature e artefatti attorno ai dettagli fini.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il JPG e ConvertBrio lo decodifica e lo ricodifica come PNG, conservando ogni pixel esattamente com'è. Poiché il JPG in origine non memorizza la trasparenza, il PNG risultante avrà uno sfondo opaco, a meno che tu non lo rimuova a parte: la conversione riguarda formato e qualità, non la rimozione automatica dello sfondo.",
      },
      {
        heading: "Che dimensioni aspettarsi",
        body: "I file PNG sono in genere più grandi del JPG di partenza, perché il PNG non scarta dati come fa la compressione con perdita del JPG. Per le foto molto ricche di dettagli o di texture, aspettati un PNG di diverse volte più grande del JPG originale: è il compromesso normale per avere una qualità senza perdita.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini JPG in PNG.",
    faq: [
      {
        question: "Da JPG a PNG aggiunge la trasparenza in automatico?",
        answer:
          "No. I file JPG non memorizzano la trasparenza, quindi la conversione in PNG produce un'immagine opaca con lo stesso aspetto. Il PNG ti offre semplicemente un formato senza perdita su cui lavorare, per esempio prima di modificare l'immagine o di aggiungere la trasparenza in un editor.",
      },
      {
        question: "Perché il mio PNG è molto più grande del JPG originale?",
        answer:
          "Il PNG usa una compressione senza perdita, che conserva ogni pixel invece di scartare i dettagli come fa il JPG. Questa precisione si paga con un file più grande: è normale, non indica un problema.",
      },
      {
        question: "Il PNG è meglio del JPG?",
        answer:
          "Nessuno dei due è meglio in assoluto: il PNG è l'ideale per grafiche, loghi e tutto ciò che richiede trasparenza o dettaglio senza perdita, mentre il JPG è più adatto alle foto, dove contano più le dimensioni ridotte della precisione al pixel.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "Da JPG a WEBP: file più leggeri per siti più veloci",
    intro:
      "WEBP è stato creato da Google proprio per far caricare più in fretta le pagine web e produce di solito file più piccoli del 25-35% rispetto a un JPG di pari qualità visiva. Il convertitore JPG in WEBP di ConvertBrio ricodifica la tua foto in pochi secondi, un risultato rapido per chi ottimizza le immagini di un sito, di una newsletter o di un'app.",
    sections: [
      {
        heading: "Perché convertire in WEBP",
        body: "Se la velocità di caricamento conta, per la SEO, per chi naviga da mobile o semplicemente per un sito più reattivo, WEBP è uno dei miglioramenti più facili da ottenere. Supporta lo stesso intervallo di qualità del JPG producendo file sensibilmente più piccoli, e i browser moderni (Chrome, Firefox, Safari, Edge) lo visualizzano tutti in modo nativo, quindi oggi per la maggior parte del pubblico non ci sono compromessi sulla compatibilità.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il JPG e ConvertBrio lo converte automaticamente in WEBP, mantenendo la stessa risoluzione e applicando l'algoritmo di compressione di WEBP al posto di quello del JPG. Il download è pronto in pochi secondi e puoi inserirlo direttamente nella cartella immagini del tuo sito o nel sistema di gestione dei contenuti.",
      },
      {
        heading: "Quando il JPG può essere ancora la scelta migliore",
        body: "Se l'immagine deve funzionare in programmi o contesti che non supportano WEBP, come alcuni client di posta meno recenti, certi strumenti di grafica o flussi di stampa, tieni a portata di mano anche una versione JPG. Per l'uso generale sul web, invece, WEBP è l'opzione predefinita più efficiente.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini JPG in WEBP.",
    faq: [
      {
        question: "Quanto è più piccolo il WEBP rispetto al JPG?",
        answer:
          "I file WEBP sono in genere più piccoli del 25-35% rispetto a un JPG visivamente equivalente, ed è per questo che è diventato una scelta standard per le immagini dei siti in cui conta la velocità di caricamento.",
      },
      {
        question: "Tutti i browser supportano il WEBP?",
        answer:
          "Sì, tutti i principali browser moderni, inclusi Chrome, Firefox, Safari ed Edge, visualizzano il WEBP in modo nativo. Oggi si può usare senza problemi per la pubblicazione sul web in generale.",
      },
      {
        question: "L'immagine avrà un aspetto diverso dopo la conversione in WEBP?",
        answer:
          "Con le impostazioni predefinite di ConvertBrio, per la maggior parte delle foto la differenza visiva è trascurabile. La compressione di WEBP è più efficiente di quella del JPG, quindi può raggiungere la stessa qualità con un file più piccolo.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "Da JPG ad AVIF: la compressione di nuova generazione",
    intro:
      "AVIF è il formato d'immagine più efficiente tra quelli ampiamente supportati oggi e spesso riduce un JPG del 50% o più a parità di qualità visiva. Il convertitore JPG in AVIF di ConvertBrio si occupa della codifica al posto tuo, offrendo a chi gestisce un sito e agli sviluppatori un modo semplice per adottare il formato senza strumenti a riga di comando né pipeline di build.",
    sections: [
      {
        heading: "Cosa rende diverso l'AVIF",
        body: "AVIF si basa sulla tecnologia di compressione delle immagini del codec video AV1, molto più avanzata di quella usata dal JPG. In pratica significa che i file AVIF possono essere drasticamente più piccoli di un JPG pur avendo lo stesso aspetto, un vantaggio per qualsiasi sito che voglia alleggerire le pagine e migliorare i tempi di caricamento.",
      },
      {
        heading: "Come convertire da JPG ad AVIF",
        body: "Carichi il file JPG e ConvertBrio produce una versione AVIF con la stessa risoluzione. Non c'è alcun software da installare e il risultato si scarica automaticamente al termine dell'elaborazione.",
      },
      {
        heading: "Supporto di browser e programmi",
        body: "Tutti i principali browser moderni supportano la visualizzazione dell'AVIF, ma alcuni programmi meno recenti, editor di immagini e piattaforme social non lo accettano ancora in caricamento. Se pubblichi sul tuo sito, in generale l'AVIF è sicuro; se carichi in un posto di cui non conosci la compatibilità, tieni a portata di mano una versione JPG o WEBP di riserva.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini JPG in AVIF.",
    faq: [
      {
        question: "L'AVIF è meglio del WEBP?",
        answer:
          "In generale l'AVIF comprime in modo più efficiente del WEBP e spesso produce file più piccoli a parità di qualità. Il WEBP ha un supporto un po' più ampio sui sistemi meno recenti, ma per i browser moderni l'AVIF è di solito la scelta migliore per le dimensioni del file.",
      },
      {
        question: "Tutti i siti possono usare immagini AVIF?",
        answer:
          "Tutti i principali browser moderni supportano la visualizzazione dell'AVIF, ma alcuni sistemi di gestione dei contenuti, reti pubblicitarie e strumenti meno recenti non accettano ancora caricamenti in AVIF. Se hai problemi di caricamento, verifica i requisiti della tua piattaforma.",
      },
      {
        question: "Di quanto sarà più piccolo il mio file?",
        answer:
          "I risultati variano da immagine a immagine, ma l'AVIF riduce di solito le dimensioni del 50% o più rispetto a un JPG della stessa qualità, il che ne fa uno dei formati più efficaci per alleggerire le pagine.",
      },
    ],
  },

  "png-to-jpg": {
    title: "Da PNG a JPG: immagini più leggere per web ed e-mail",
    intro:
      "I file PNG conservano ogni pixel, il che è ottimo per le grafiche ma spesso eccessivo per le foto, con file molto più grandi del necessario. Il convertitore PNG in JPG di ConvertBrio comprime la tua immagine in un JPG più piccolo e più facile da condividere, ideale per gli allegati e-mail, le pagine web e ovunque i limiti di dimensione per il caricamento contino.",
    sections: [
      {
        heading: "Quando convertire da PNG a JPG",
        body: "Se il tuo PNG è una foto (e non una grafica con trasparenza o testo dai bordi netti), la conversione in JPG riduce quasi sempre il file in modo significativo senza perdite di qualità visibili. È particolarmente utile per gli allegati e-mail con limiti di dimensione, per le pagine web in cui conta la velocità di caricamento o per qualsiasi modulo di caricamento che rifiuta i file troppo grandi.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il PNG e ConvertBrio lo ricodifica in JPG con la qualità predefinita, che bilancia dimensioni ridotte e fedeltà visiva. Poiché il JPG non supporta la trasparenza, le eventuali aree trasparenti del PNG originale vengono riempite con uno sfondo uniforme nel file di output.",
      },
      {
        heading: "Cosa si perde (e cosa no)",
        body: "Convertendo in JPG si perde la trasparenza e si applica una compressione con perdita, quindi non è la scelta giusta per loghi o grafiche che richiedono uno sfondo trasparente. Per le normali foto la compressione è appena percettibile e la riduzione delle dimensioni è di solito notevole, spesso del 50-80% rispetto al PNG originale.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini PNG in JPG.",
    faq: [
      {
        question: "Perché il mio file PNG è così grande?",
        answer:
          "Il PNG usa una compressione senza perdita, cioè memorizza ogni pixel esattamente invece di scartare i dettagli come fa il JPG. Questo rende il PNG ideale per le grafiche, ma spesso molto più grande del necessario per le normali foto.",
      },
      {
        question: "Che fine fanno le aree trasparenti convertendo in JPG?",
        answer:
          "Il JPG non supporta la trasparenza, quindi le parti trasparenti del tuo PNG vengono riempite con un colore pieno (di solito il bianco) nel file convertito.",
      },
      {
        question: "Di quanto sarà più piccolo il JPG?",
        answer:
          "Dipende dall'immagine, ma le foto di solito si riducono del 50-80% passando da PNG a JPG con la qualità predefinita, perché la compressione del JPG è tarata proprio sui contenuti fotografici.",
      },
    ],
  },

  "png-to-webp": {
    title: "Da PNG a WEBP: compressione adatta al web, anche senza perdita",
    intro:
      "WEBP supporta sia la compressione con perdita sia quella senza perdita, quindi può sostituire il PNG nelle grafiche che richiedono trasparenza riducendo comunque in modo significativo le dimensioni del file. Il convertitore PNG in WEBP di ConvertBrio ricodifica la tua immagine in pochi secondi, mantenendo la trasparenza dove il PNG originale la prevedeva.",
    sections: [
      {
        heading: "Perché il WEBP batte il PNG per dimensioni",
        body: "Anche in modalità senza perdita, il WEBP comprime in genere meglio del PNG e produce file più piccoli dalla stessa immagine di partenza. Per grafiche, icone e screenshot destinati a un sito, questo si traduce direttamente in pagine più veloci senza rinunciare alla trasparenza né al dettaglio esatto.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il PNG e ConvertBrio lo converte automaticamente in WEBP. Le aree trasparenti del file originale vengono mantenute nel WEBP di output, quindi loghi e icone con canale alfa si convertono senza bisogno di alcun ritocco manuale.",
      },
      {
        heading: "Dove usare il risultato",
        body: "Il WEBP è supportato in modo nativo da tutti i principali browser moderni, ed è quindi una scelta sicura per le immagini del sito, le favicon e la grafica delle interfacce. Se ti serve il file per la stampa, per programmi meno recenti o per una piattaforma con un supporto WEBP poco chiaro, conserva il PNG originale come copia di riserva.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini PNG in WEBP.",
    faq: [
      {
        question: "Convertendo da PNG a WEBP si mantiene la trasparenza?",
        answer:
          "Sì. Il WEBP supporta il canale alfa proprio come il PNG, quindi qualsiasi sfondo trasparente del file originale passa all'immagine WEBP convertita.",
      },
      {
        question: "Il WEBP è sempre più piccolo del PNG?",
        answer:
          "Di solito sì: anche in modalità senza perdita, la compressione del WEBP è generalmente più efficiente di quella del PNG, quindi la maggior parte delle immagini si riduce in modo evidente dopo la conversione.",
      },
      {
        question: "Posso riconvertire il WEBP in PNG in un secondo momento?",
        answer:
          "Sì, usa il convertitore WEBP in PNG di ConvertBrio ogni volta che ti serve di nuovo il file in formato PNG per programmi che non supportano il WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "Da PNG ad AVIF: compressione massima per le grafiche",
    intro:
      "L'AVIF riesce a comprimere grafiche e foto molto più del PNG supportando comunque la trasparenza, ed è oggi uno dei formati più efficienti in termini di spazio per le immagini web. Il convertitore PNG in AVIF di ConvertBrio esegue la conversione all'istante, senza bisogno di software di codifica.",
    sections: [
      {
        heading: "Perché scegliere l'AVIF al posto del PNG",
        body: "La compressione senza perdita del PNG lascia i file più grandi del necessario in molti casi d'uso. L'AVIF, basato sulla moderna tecnologia di compressione dei codec video, può ridurre la stessa immagine in modo drastico, a volte dell'80% o più, mantenendo trasparenza e qualità visiva: un grande vantaggio per le prestazioni del sito.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file PNG e ConvertBrio produce una versione AVIF, mantenendo trasparenza e risoluzione. Per le dimensioni tipiche delle immagini la conversione si completa in pochi secondi.",
      },
      {
        heading: "Note sulla compatibilità",
        body: "L'AVIF viene visualizzato correttamente in tutte le versioni attuali di Chrome, Firefox, Safari ed Edge. Alcuni strumenti meno recenti, client di posta e software di grafica potrebbero non supportarlo ancora, quindi è più adatto all'uso diretto sul sito che ai file da consegnare a sistemi di terzi di cui non conosci la compatibilità.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini PNG in AVIF.",
    faq: [
      {
        question: "L'AVIF supporta gli sfondi trasparenti?",
        answer:
          "Sì, l'AVIF supporta il canale alfa, quindi la trasparenza del PNG originale passa correttamente al file AVIF convertito.",
      },
      {
        question: "Di quanto sarà più piccolo il mio file AVIF?",
        answer:
          "I risultati variano a seconda del contenuto dell'immagine, ma l'AVIF riduce spesso i file PNG del 70-80% o più, il che ne fa uno dei formati più efficienti oggi disponibili per il web.",
      },
      {
        question: "Per il mio sito devo usare AVIF o WEBP?",
        answer:
          "L'AVIF di solito comprime meglio, quindi vale la pena usarlo dove la tua piattaforma lo supporta. Il WEBP resta un'alternativa solida e un po' più compatibile se incontri limitazioni di caricamento con l'AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "Da WEBP a JPG: apri le immagini WEBP ovunque",
    intro:
      "Le immagini WEBP scaricate dai siti web non sempre si aprono bene nei visualizzatori di foto meno recenti, in alcuni strumenti di grafica o nelle app che si aspettano un formato standard. Il convertitore WEBP in JPG di ConvertBrio trasforma qualsiasi file WEBP in un JPG che si apre ovunque, senza dover indovinare la compatibilità.",
    sections: [
      {
        heading: "Perché a volte i file WEBP non si aprono",
        body: "WEBP è un formato relativamente recente e, anche se i browser lo supportano tutti, alcuni visualizzatori di foto per desktop, le versioni meno recenti degli editor di immagini e certe app ancora non lo riconoscono. Se hai salvato un'immagine da un sito e non si apre dove ti aspetti, convertirla in JPG è la soluzione più rapida.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file WEBP e ConvertBrio lo decodifica e lo ricodifica in JPG. Il risultato si apre in ogni browser, visualizzatore di foto e strumento di modifica, ed è il formato più sicuro da condividere ovunque o da allegare a un'e-mail.",
      },
      {
        heading: "Cosa aspettarsi",
        body: "Se il WEBP originale aveva uno sfondo trasparente, nel JPG di output la trasparenza verrà riempita con un colore pieno, perché il JPG non supporta i canali alfa. Per le normali foto e immagini web senza trasparenza, la conversione è visivamente impercettibile.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini WEBP in JPG.",
    faq: [
      {
        question: "Perché non riesco ad aprire un file WEBP sul computer?",
        answer:
          "Alcuni visualizzatori di foto, editor di immagini e versioni del sistema operativo meno recenti non supportano il WEBP in modo nativo, anche se ogni browser moderno lo fa. Convertendo in JPG risolvi subito il problema.",
      },
      {
        question: "Convertendo da WEBP a JPG perdo la trasparenza?",
        answer:
          "Sì, il JPG non supporta la trasparenza, quindi le eventuali aree trasparenti del WEBP originale appariranno come un colore pieno nel file convertito. Se devi mantenere la trasparenza, usa invece WEBP in PNG.",
      },
      {
        question: "Il JPG convertito si può condividere o caricare senza problemi?",
        answer:
          "Sì, il JPG è il formato d'immagine più compatibile in assoluto, quindi il file convertito si aprirà correttamente praticamente in qualsiasi app, dispositivo o modulo di caricamento.",
      },
    ],
  },

  "webp-to-png": {
    title: "Da WEBP a PNG: mantieni trasparenza e qualità",
    intro:
      "Quando un'immagine WEBP ha uno sfondo trasparente, come un logo, un'icona o una grafica esportata, convertirla in JPG non è un'opzione. Il convertitore WEBP in PNG di ConvertBrio mantiene quella trasparenza e produce un file senza perdita che funziona negli strumenti di grafica, nei programmi meno recenti e ovunque il PNG sia il formato richiesto.",
    sections: [
      {
        heading: "Quando scegliere il PNG al posto del JPG",
        body: "Se il tuo file WEBP ha pixel trasparenti o semitrasparenti, la conversione in PNG è la scelta giusta: tra i due è l'unico formato comune che conserva intatto il canale alfa. Il PNG è anche la scelta più sicura se prevedi di modificare ancora l'immagine, perché non introduce artefatti di compressione.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file WEBP e ConvertBrio lo converte in un PNG senza perdita, mantenendo trasparenza e risoluzione esattamente come erano. Funziona sia che il WEBP di partenza fosse con perdita sia che fosse senza perdita: il PNG di output conserva sempre tutto il dettaglio dell'immagine decodificata.",
      },
      {
        heading: "Considerazioni sulle dimensioni",
        body: "I file PNG sono in genere più grandi dei WEBP, perché la compressione del WEBP è più efficiente. Per grafiche e icone la differenza di solito è piccola; per le foto grandi il PNG può essere sensibilmente più pesante, un compromesso ragionevole quando la priorità sono la trasparenza o la qualità senza perdita.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini WEBP in PNG.",
    faq: [
      {
        question: "Da WEBP a PNG mantiene lo sfondo trasparente?",
        answer:
          "Sì. Se il tuo file WEBP ha la trasparenza, ConvertBrio la conserva esattamente nel PNG convertito, perché entrambi i formati supportano i canali alfa.",
      },
      {
        question: "Per il mio file WEBP devo usare PNG o JPG?",
        answer:
          "Scegli il PNG se l'immagine ha la trasparenza o se prevedi di modificarla ancora. Scegli il JPG se è una semplice foto e vuoi il file più piccolo possibile da condividere.",
      },
      {
        question: "La qualità dell'immagine cambierà?",
        answer:
          "No, il PNG è un formato senza perdita, quindi convertendo da WEBP a PNG non si scarta alcun dettaglio oltre a quello che il file WEBP originale già conteneva.",
      },
    ],
  },

  "webp-to-avif": {
    title: "Da WEBP ad AVIF: ancora più compressione",
    intro:
      "L'AVIF supera spesso il WEBP in efficienza di compressione, quindi ricodificare in AVIF un'immagine WEBP esistente può ridurla ulteriormente senza un calo di qualità visibile. Il convertitore WEBP in AVIF di ConvertBrio fa questo passaggio in un solo passo.",
    sections: [
      {
        heading: "Perché ricodificare il WEBP in AVIF",
        body: "Se usi già il WEBP per migliorare le prestazioni del sito, l'AVIF merita di essere provato come passo successivo: in genere comprime meglio la stessa immagine di partenza, in particolare per foto e grafiche complesse. La differenza si nota di più sulle immagini grandi e ricche di dettagli.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file WEBP e ConvertBrio lo decodifica e lo ricodifica in AVIF, mantenendo la trasparenza se presente. Il risultato si scarica automaticamente e può essere usato ovunque la tua piattaforma accetti immagini AVIF.",
      },
      {
        heading: "Cosa verificare prima di passare all'AVIF",
        body: "L'AVIF è supportato da tutti i principali browser attuali, ma prima di sostituire il WEBP su tutto il sito verifica che il tuo sistema di gestione dei contenuti e gli strumenti di terzi nel tuo flusso di lavoro accettino caricamenti in AVIF. Per i progetti personali e i siti moderni, il passaggio è di solito indolore.",
      },
      {
        heading: "Limiti e privacy",
        body: "I caricamenti sono limitati a 100 MB. I file vengono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini WEBP in AVIF.",
    faq: [
      {
        question: "Conviene convertire da WEBP ad AVIF?",
        answer:
          "Se il tuo obiettivo è ottenere il file più piccolo possibile e la tua piattaforma supporta l'AVIF, sì: l'AVIF comprime spesso meglio del WEBP sulla stessa immagine, soprattutto per le foto.",
      },
      {
        question: "La conversione mantiene la trasparenza?",
        answer:
          "Sì, l'AVIF supporta la trasparenza proprio come il WEBP, quindi qualsiasi canale alfa del file originale viene conservato nell'immagine convertita.",
      },
      {
        question: "Posso riconvertire in WEBP se mi serve?",
        answer:
          "Sì, usa il convertitore di immagini di ConvertBrio per passare da AVIF a WEBP o a qualsiasi altro formato supportato in qualsiasi momento.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "Da AVIF a JPG: fai aprire le immagini AVIF ovunque",
    intro:
      "La compressione efficiente dell'AVIF lo rende ottimo per i siti moderni, ma moltissime app, dispositivi meno recenti e strumenti per le foto non riescono ancora ad aprirlo. Il convertitore AVIF in JPG di ConvertBrio decodifica l'immagine e la risalva come JPG, che funziona praticamente in qualsiasi software in cui ti imbatterai.",
    sections: [
      {
        heading: "Perché convertire da AVIF a JPG",
        body: "Se un file AVIF non si apre nel tuo visualizzatore di foto, nel programma di modifica o nel modulo di caricamento di un sito, il JPG è la soluzione di ripiego più sicura: è supportato praticamente ovunque, dai programmi di vent'anni fa ai dispositivi più nuovi. È il motivo più comune per cui si abbandona l'AVIF.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file AVIF e ConvertBrio lo decodifica, poi ricodifica l'immagine in JPG alla massima risoluzione. Il download è pronto in pochi secondi e si apre subito in qualsiasi browser, visualizzatore o app di modifica.",
      },
      {
        heading: "Cosa cambia con la conversione",
        body: "Il JPG non supporta la trasparenza, quindi se il file AVIF aveva uno sfondo trasparente, nell'output verrà riempito con un colore pieno. Per le normali foto senza trasparenza, il risultato visivo è praticamente identico all'originale.",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini AVIF in JPG.",
    faq: [
      {
        question: "Perché il mio file AVIF non si apre?",
        answer:
          "L'AVIF è un formato più recente e, anche se i browser moderni lo supportano, molte app, visualizzatori di foto e alcuni strumenti di modifica meno recenti ancora no. Convertendo in JPG il file si apre subito ovunque.",
      },
      {
        question: "Convertire in JPG fa perdere qualità all'immagine?",
        answer:
          "C'è una piccola ricompressione, perché AVIF e JPG usano algoritmi diversi, ma con la qualità predefinita di ConvertBrio non si nota nell'uso normale.",
      },
      {
        question: "Posso convertire AVIF in PNG invece?",
        answer:
          "Sì, usa il convertitore AVIF in PNG se ti serve un file senza perdita o se devi mantenere la trasparenza, che il JPG non può contenere.",
      },
    ],
  },

  "avif-to-png": {
    title: "Da AVIF a PNG: output senza perdita con trasparenza conservata",
    intro:
      "Quando un'immagine AVIF ha uno sfondo trasparente o ti serve una precisione al pixel per modificarla ulteriormente, il PNG è il formato di destinazione giusto. Il convertitore AVIF in PNG di ConvertBrio decodifica il tuo file e produce in pochi secondi un PNG senza perdita, mantenendo intatta qualsiasi trasparenza.",
    sections: [
      {
        heading: "Quando il PNG è la scelta migliore",
        body: "Scegli il PNG al posto del JPG ogni volta che l'AVIF di partenza ha trasparenza, testo nitido o dettagli fini che non vuoi ammorbidire con una compressione con perdita. È anche il formato intermedio più sicuro se prevedi di aprire l'immagine in uno strumento di grafica per modificarla ancora.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file AVIF e ConvertBrio lo decodifica e lo ricodifica in un PNG senza perdita, mantenendo risoluzione, colori e trasparenza esattamente come nel file originale.",
      },
      {
        heading: "Dimensioni del file previste",
        body: "Poiché il PNG non comprime in modo così spinto come l'AVIF, il file convertito sarà in genere sensibilmente più grande dell'originale, spesso di diverse volte. È un compromesso previsto, che porta con sé il vantaggio di un output senza perdita e molto compatibile.",
      },
      {
        heading: "Limiti e privacy",
        body: "I caricamenti sono limitati a 100 MB. I file vengono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini AVIF in PNG.",
    faq: [
      {
        question: "Da AVIF a PNG mantiene la trasparenza?",
        answer:
          "Sì. Se il tuo file AVIF ha un canale alfa, ConvertBrio porta quella trasparenza esattamente nel PNG convertito.",
      },
      {
        question: "Perché il mio file PNG è molto più grande dell'AVIF?",
        answer:
          "Il PNG è un formato senza perdita e non comprime in modo efficiente come l'AVIF, quindi un aumento di dimensioni dopo la conversione è normale e previsto.",
      },
      {
        question: "Il PNG è un buon formato per modificare ancora le immagini?",
        answer:
          "Sì: poiché il PNG non applica compressione con perdita, è un formato intermedio più sicuro del JPG o dell'AVIF quando prevedi di aprire un file in un editor e risalvarlo più volte.",
      },
    ],
  },

  "avif-to-webp": {
    title: "Da AVIF a WEBP: più compatibilità senza perdere efficienza",
    intro:
      "Il WEBP ha un supporto un po' più ampio dell'AVIF tra strumenti e piattaforme meno recenti pur offrendo una buona compressione, il che lo rende un utile compromesso quando l'AVIF non è pienamente supportato. Il convertitore AVIF in WEBP di ConvertBrio fa il passaggio all'istante.",
    sections: [
      {
        heading: "Perché convertire da AVIF a WEBP",
        body: "Se una piattaforma, un plugin o un programma rifiuta i caricamenti in AVIF ma accetta il WEBP, convertire è la soluzione più rapida: mantieni gran parte del vantaggio di efficienza dell'AVIF ottenendo una compatibilità più ampia. Succede spesso lavorando con sistemi di gestione dei contenuti meno recenti o con integrazioni di terzi.",
      },
      {
        heading: "Come funziona la conversione",
        body: "Carichi il file AVIF e ConvertBrio lo decodifica e lo ricodifica in WEBP, mantenendo trasparenza e risoluzione. Il processo si completa in pochi secondi e il file si scarica automaticamente.",
      },
      {
        heading: "Compromessi sulla compressione",
        body: "I file WEBP sono in genere un po' più grandi dell'equivalente AVIF alla stessa qualità visiva, perché la compressione dell'AVIF è di norma più avanzata. La differenza è di solito abbastanza piccola da rendere conveniente il guadagno in compatibilità nella maggior parte dei casi.",
      },
      {
        heading: "Limiti e privacy",
        body: "I caricamenti sono limitati a 100 MB. I file vengono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
      },
    ],
    faqDescription: "Domande frequenti sulla conversione di immagini AVIF in WEBP.",
    faq: [
      {
        question: "Perché dovrei convertire da AVIF a WEBP invece di tenere l'AVIF?",
        answer:
          "Alcune piattaforme e strumenti meno recenti accettano il WEBP ma non l'AVIF. Convertendo ottieni una compatibilità più ampia mantenendo gran parte del vantaggio in dimensioni da cui era partito l'AVIF.",
      },
      {
        question: "Dopo la conversione le dimensioni del file aumentano?",
        answer:
          "In genere di poco: la compressione del WEBP è un po' meno efficiente di quella dell'AVIF, quindi aspettati un aumento modesto e non drastico.",
      },
      {
        question: "La trasparenza passa dall'AVIF al WEBP?",
        answer:
          "Sì, entrambi i formati supportano i canali alfa, quindi qualsiasi trasparenza del file AVIF originale viene conservata nel WEBP convertito.",
      },
    ],
  },

  "resize-image": {
    title: "Come si riducono le dimensioni in pixel di una foto?",
    intro: [
      "Inserisci la larghezza e l'altezza massime che desideri, in pixel, e ConvertBrio ridimensiona la foto in modo che stia dentro quei valori. Le dimensioni in pixel sono il numero di pixel in larghezza e in altezza di un'immagine (per esempio 4000 × 3000). Ridurle rende l'immagine più piccola sullo schermo e ne riduce anche il peso, senza bisogno di programmi di grafica.",
      "Lo strumento mantiene le proporzioni della foto, quindi non può stirare né schiacciare l'immagine, e rimpicciolisce soltanto: non ingrandisce una foto oltre le sue dimensioni originali. Se ti servono una larghezza e un'altezza esatte diverse dalla forma della foto, o una dimensione massima in KB, usa Ridimensionare Foto e Firma. Per ingrandire una foto piccola, usa Upscaler con IA.",
    ],
    howTo: [
      {
        step: "Carica la tua immagine",
        detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF, fino a 100 MB.",
      },
      {
        step: "Inserisci una larghezza, un'altezza o entrambe",
        detail:
          "Scrivi le dimensioni in pixel che vuoi. Puoi compilare un solo campo: lascia vuoto l'altro e verrà calcolato in base alle proporzioni della foto. Se compili entrambi, la foto viene ridimensionata per stare dentro quel riquadro.",
      },
      {
        step: "Ridimensiona e scarica",
        detail: "ConvertBrio rimpicciolisce l'immagine e il file si scarica automaticamente.",
      },
      {
        step: "Controlla il risultato",
        detail:
          "Apri il file scaricato e guarda le sue dimensioni (clic destro > Proprietà su Windows, Ottieni informazioni su Mac). Ingrandisci al 100% per verificare che sia ancora nitido.",
      },
    ],
    sections: [
      {
        heading: "Dimensioni comuni per cui si ridimensiona",
        body: "Se non sei sicuro della misura che ti serve, queste sono le specifiche per cui le persone arrivano più spesso qui.",
        table: {
          headers: ["Uso", "Dimensioni tipiche (px)"],
          rows: [
            ["Post di Instagram (quadrato)", "1080 × 1080"],
            ["Storia / reel di Instagram", "1080 × 1920"],
            ["Immagine condivisa su Facebook / LinkedIn", "1200 × 630"],
            ["Miniatura di YouTube", "1280 × 720"],
            ["Foto del profilo LinkedIn", "400 × 400 (min)"],
            ["Foto tessera (2 × 2 pollici a 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Esempio: da 4000 × 3000 a 1200 × 900",
        body: "Una tipica foto da telefono misura 4000 × 3000 pixel (formato 4:3). Per portarla a 1200 pixel di larghezza, scrivi 1200 nel campo larghezza e lascia vuota l'altezza: l'altezza viene calcolata in 900, ottenendo 1200 × 900. Se invece inserisci 1200 × 1200, la foto viene ridimensionata per stare dentro quel quadrato, e il risultato è di nuovo 1200 × 900, non un quadrato deformato. Il nuovo file ha 9 volte meno pixel, quindi è molto più leggero da archiviare e inviare.",
      },
      {
        heading: "Come ridimensiono un'immagine senza deformarla?",
        body: [
          "La deformazione avviene quando uno strumento forza una foto in un riquadro di forma diversa, e un volto o un cerchio diventano ovali. Questo strumento la evita mantenendo le proporzioni originali (il rapporto tra larghezza e altezza): il risultato sta dentro la larghezza e l'altezza che inserisci e la dimensione rimanente viene calcolata per te.",
          "Ciò significa che il risultato può essere più piccolo del riquadro che hai scritto in una delle due direzioni. Se un modulo richiede una forma esatta come 600 × 600, ritaglia prima la foto in un quadrato con lo strumento Ritagliare Immagine, poi ridimensionala. Il ritaglio elimina i bordi; il solo ridimensionamento non lo fa mai. Per ottenere larghezza e altezza esatte in un solo passaggio, con ritaglio o con margini bianchi, usa Ridimensionare Foto e Firma.",
        ],
        table: {
          headers: ["Partendo da 4000 × 3000", "Cosa ottieni", "Il risultato è corretto?"],
          rows: [
            ["Larghezza 1200, altezza vuota", "1200 × 900", "Sì: proporzioni mantenute"],
            ["Larghezza 1200, altezza 1200", "1200 × 900", "Sì: sta dentro il riquadro, non è deformata"],
            ["Ritaglio in un quadrato, poi ridimensionamento a 1200 × 1200", "1200 × 1200", "Sì: bordi ritagliati, nulla di distorto"],
            ["Forzare 1200 × 1200 senza ritagliare (altri strumenti)", "1200 × 1200", "No: l'immagine risulta schiacciata"],
          ],
        },
      },
      {
        heading: "Ridurre i pixel equivale a ridurre il peso del file?",
        body: [
          "Sono cose collegate ma non uguali. Le dimensioni in pixel indicano quanti pixel ha l'immagine. Il peso del file indica quanti byte occupa e dipende dal numero di pixel e da quanto l'immagine è compressa. Meno pixel di solito significa un file più piccolo, ma dimezzare entrambe le dimensioni non divide esattamente per quattro il file, perché contano anche la compressione e il contenuto dell'immagine.",
          "Scegli in base all'obiettivo: per adattarti a una misura in una pagina o alle dimensioni richieste da una piattaforma, ridimensiona. Per scendere sotto un limite di caricamento in KB o MB, comprimi, oppure ridimensiona prima e poi passa l'immagine in Comprimere Immagine per la riduzione finale. Ridimensionare prima significa che il compressore deve lavorare meno, quindi la qualità regge meglio. Per ottenere insieme una misura esatta in pixel e un limite in KB, usa Ridimensionare Foto e Firma.",
        ],
      },
      {
        heading: "Risoluzione dei problemi",
        list: [
          "La foto non è diventata più grande: questo strumento riduce soltanto. Per ingrandire usa Upscaler con IA.",
          "Il risultato non ha la misura esatta che ho scritto: la foto è stata ridimensionata per stare nel tuo riquadro senza cambiarne la forma. Ritaglia prima, oppure usa Ridimensionare Foto e Firma per dimensioni esatte.",
          "Il file è ancora troppo grande in KB: comprimilo dopo il ridimensionamento, oppure imposta un obiettivo in Ridimensionare Foto e Firma.",
          "Una foto HEIC è tornata come JPG: lo strumento non può salvare in HEIC, quindi la restituisce come JPG. Una foto scattata con fotocamera o telefono mantiene l'orientamento corretto.",
          "La foto appare sfocata: rimpicciolire molto una foto e poi guardarla ingrandita la fa sembrare sfocata. Ridimensionala alla misura con cui la mostrerai davvero.",
        ],
        body: "Se il risultato non è quello che ti aspettavi, controlla prima questi punti.",
      },
      {
        heading: "Privacy e limiti",
        body: "I caricamenti sono cifrati durante il trasferimento. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase). Un'immagine per caricamento, fino a 100 MB, gratis, senza account.",
      },
    ],
    faqDescription: "Domande frequenti su come ridimensionare le immagini a dimensioni esatte.",
    faq: [
      {
        question: "Come ridimensiono un'immagine a dimensioni esatte in pixel?",
        answer:
          "Carica l'immagine nello strumento di ridimensionamento di ConvertBrio, inserisci larghezza e altezza che ti servono in pixel e scarica il file ridimensionato. Funziona con qualsiasi formato di immagine accettato dallo strumento.",
      },
      {
        question: "Il ridimensionamento deforma l'immagine?",
        answer:
          "Solo se la nuova larghezza e la nuova altezza non rispettano le proporzioni originali. Per evitare la deformazione, mantieni lo stesso rapporto tra larghezza e altezza dell'immagine di partenza, oppure ritaglia prima l'immagine nella forma che ti serve.",
      },
      {
        question: "Il ridimensionamento riduce anche il peso del file?",
        answer:
          "Sì, meno pixel significano meno dati da memorizzare, quindi il rimpicciolimento di solito riduce molto il file. Per ottenere il risultato più piccolo possibile, fai seguire al ridimensionamento lo strumento Comprimere Immagine.",
      },
      {
        question: "Posso ingrandire un'immagine piccola senza che sembri sfocata?",
        answer:
          "Non con un semplice ridimensionamento: ingrandire stira i pixel esistenti e ammorbidisce l'immagine. Usa invece Upscaler con IA, che ricostruisce i dettagli con un modello addestrato e produce un ingrandimento molto più nitido.",
      },
      {
        question: "Il formato del file cambia quando ridimensiono?",
        answer:
          "Lo strumento restituisce l'immagine in un formato web standard. Se ti serve un formato di output preciso, passa il file ridimensionato nel Convertitore di Immagini.",
      },
    ],
  },

  "crop-image": {
    title: "Ritaglia immagine: taglia l'immagine sull'area che ti serve",
    intro:
      "A volte non devi rimpicciolire l'intera immagine: devi eliminare tutto ciò che sta fuori da un'area precisa, per isolare un soggetto, togliere lo sfondo che non serve o rispettare il rapporto d'aspetto richiesto da una piattaforma. Lo strumento di ritaglio di ConvertBrio ti permette di indicare un'area esatta tramite coordinate in pixel e di ottenere solo quella porzione.",
    sections: [
      {
        heading: "Come ritagliare un'immagine",
        body: "Carica l'immagine e inserisci le coordinate sinistra e superiore da cui deve partire il ritaglio, insieme alla larghezza e all'altezza dell'area da tenere. ConvertBrio taglia l'immagine esattamente su quel rettangolo e scarta tutto ciò che sta fuori.",
      },
      {
        heading: "Trovare le coordinate giuste",
        body: "Le coordinate si misurano in pixel dall'angolo in alto a sinistra dell'immagine, quindi un editor di immagini o un'anteprima che mostra la posizione in pixel può aiutarti a individuare l'area esatta prima del caricamento. Se vuoi solo ridimensionare l'intera immagine anziché ritagliarne una parte, usa invece Ridimensionare Immagine.",
      },
      {
        heading: "Usi comuni del ritaglio",
        body: "Il ritaglio serve a togliere lo sfondo indesiderato da una foto, a isolare un soggetto, a ottenere il rapporto d'aspetto richiesto per una foto profilo o un banner, o a ridurre un documento scansionato alla sola area del contenuto. È un'alternativa precisa al ridimensionamento quando l'obiettivo è sottrarre e non scalare.",
      },
    ],
    faqDescription: "Domande frequenti su come ritagliare le immagini in un'area specifica.",
    faq: [
      {
        question: "Come ritaglio un'immagine in un'area specifica?",
        answer:
          "Carica l'immagine nello strumento di ritaglio di ConvertBrio e inserisci le coordinate di partenza sinistra e superiore, più la larghezza e l'altezza dell'area da tenere, misurate in pixel dall'angolo in alto a sinistra.",
      },
      {
        question: "Qual è la differenza tra ritagliare e ridimensionare?",
        answer:
          "Il ridimensionamento porta l'intera immagine a nuove dimensioni, mentre il ritaglio taglia e conserva solo un'area rettangolare precisa, scartando tutto il resto. Usa il ritaglio quando vuoi togliere una parte dell'immagine anziché rimpicciolirla tutta.",
      },
      {
        question: "Come faccio a sapere quali coordinate in pixel inserire?",
        answer:
          "Apri l'immagine in un'anteprima o in un editor che mostra la posizione in pixel mentre passi il mouse: ti aiuterà a individuare le coordinate dell'area da tenere prima di inserirle in ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Ruota immagine: raddrizza le foto storte o capovolte",
    intro:
      "Le foto scattate con il telefono o scansionate da una stampante a volte finiscono ruotate nel verso sbagliato. Lo strumento di rotazione di ConvertBrio gira un'immagine di 90, 180 o 270 gradi con un clic, correggendo i problemi di orientamento senza dover aprire un editor di foto completo.",
    sections: [
      {
        heading: "Come ruotare un'immagine",
        body: "Carica l'immagine, scegli 90, 180 o 270 gradi dal menu a tendina e ConvertBrio applica la rotazione e restituisce il file corretto. Una rotazione di 90 gradi raddrizza un'immagine messa di lato, mentre 180 gradi rimette dritta un'immagine capovolta.",
      },
      {
        heading: "Perché le foto finiscono ruotate nel modo sbagliato",
        body: "Di solito succede quando una fotocamera o uno scanner non incorpora i metadati di orientamento corretti, oppure quando quei metadati vengono eliminati durante il caricamento o il trasferimento. I dati dell'immagine in sé non sono danneggiati: viene solo mostrata nella direzione sbagliata finché non la ruoti.",
      },
      {
        heading: "Ruotare i documenti scansionati",
        body: "Le pagine inserite nello scanner di lato o capovolte sono uno dei casi più comuni per questo strumento. Ruotare l'immagine prima di altre elaborazioni, come la conversione in PDF o l'OCR, garantisce che il documento finale si legga correttamente.",
      },
    ],
    faqDescription: "Domande frequenti su come ruotare le immagini online.",
    faq: [
      {
        question: "Come ruoto una foto messa di lato?",
        answer:
          "Carica l'immagine nello strumento di rotazione di ConvertBrio e scegli 90 o 270 gradi, a seconda della direzione in cui deve girare per essere mostrata correttamente.",
      },
      {
        question: "Perché la mia foto è capovolta o di lato fin dall'inizio?",
        answer:
          "Di solito dipende da metadati di orientamento mancanti o errati della fotocamera o dello scanner che l'ha acquisita: il contenuto dell'immagine è a posto, basta ruotarla per vederla nel verso giusto.",
      },
      {
        question: "Posso ruotare l'immagine di un documento scansionato prima di convertirla in PDF?",
        answer:
          "Sì, ruota prima l'immagine con questo strumento, poi usa JPG in PDF per combinarla in un documento PDF con l'orientamento corretto.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Ruotare PDF online: raddrizza le pagine storte di qualsiasi documento",
    intro:
      "I documenti scansionati inseriti nello scanner nel verso sbagliato escono spesso di lato o capovolti. Lo strumento Ruotare PDF di ConvertBrio gira ogni pagina del documento di 90, 180 o 270 gradi in un solo passaggio, correggendo l'orientamento di tutto il file in una volta.",
    sections: [
      {
        heading: "Come ruotare un PDF",
        body: "Carica il PDF, scegli un angolo di rotazione, 90, 180 o 270 gradi, e ConvertBrio lo applica a ogni pagina del documento. Il risultato si scarica come PDF corretto con lo stesso contenuto, solo con l'orientamento giusto.",
      },
      {
        heading: "Perché succede con i documenti scansionati",
        body: "Le pagine di lato o capovolte sono un effetto collaterale frequente della scansione di documenti cartacei, soprattutto quando le pagine vengono inserite nello scanner con un orientamento diverso da quello previsto. Ruotare il PDF finito è più rapido che scansionare di nuovo le pagine originali.",
      },
      {
        heading: "Ruotare solo alcune pagine",
        body: "Lo strumento di rotazione di ConvertBrio applica la stessa rotazione a ogni pagina del file. Se solo alcune pagine vanno corrette, dividi prima il PDF con Dividere PDF, ruota singolarmente le pagine interessate, poi riunisci tutto con Unire PDF.",
      },
    ],
    faqDescription: "Domande frequenti su come ruotare le pagine di un PDF online.",
    faq: [
      {
        question: "Come ruoto tutte le pagine di un PDF?",
        answer:
          "Carica il documento nello strumento Ruotare PDF di ConvertBrio, scegli un angolo di rotazione e ogni pagina del file verrà ruotata della stessa misura nel risultato scaricato.",
      },
      {
        question: "Posso ruotare una sola pagina invece dell'intero documento?",
        answer:
          "Non direttamente con questo strumento, perché ruota tutte le pagine in modo uniforme. Per ruotare solo alcune pagine, dividi prima il PDF, ruota le singole pagine che ti servono, poi riunisci di nuovo il file.",
      },
      {
        question: "Perché le mie pagine scansionate escono di lato?",
        answer:
          "Di solito succede quando le pagine vengono inserite nello scanner con un orientamento diverso da quello previsto. Ruotare il PDF risultante è più veloce che scansionare di nuovo il documento originale.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Sbloccare PDF: rimuovi le restrizioni della password del proprietario",
    intro:
      "Alcuni PDF sono bloccati da una password del proprietario che limita la stampa, la copia o la modifica, anche quando hai ogni diritto di modificare il documento. Lo strumento Sbloccare PDF di ConvertBrio rimuove queste restrizioni dai file che sei autorizzato a modificare, restituendoti il pieno controllo.",
    sections: [
      {
        heading: "Come sbloccare un PDF",
        body: "Carica il PDF con restrizioni e ConvertBrio rimuove le limitazioni a livello di proprietario che impediscono stampa, copia e modifica. Il file sbloccato si scarica con lo stesso contenuto, privo delle restrizioni sui permessi.",
      },
      {
        heading: "Password del proprietario e password di apertura",
        body: "Questo strumento rimuove le restrizioni della password del proprietario: quelle che limitano ciò che puoi fare con un file che puoi già aprire. Non tenta di aggirare una password di apertura (dell'utente) che impedisce del tutto la visualizzazione del PDF: per quella serve la password vera, che ha chi ha creato il file.",
      },
      {
        heading: "Quando usare questo strumento",
        body: "Lo sblocco è utile per i documenti che hai creato o che hai il diritto esplicito di modificare, ma che sono stati esportati con restrizioni attive per impostazione predefinita, come i report di alcuni programmi o i moduli che hanno bloccato la modifica senza volerlo. Sblocca solo i file che hai il diritto legale di modificare.",
      },
    ],
    faqDescription: "Domande frequenti su come rimuovere le restrizioni di password dai PDF.",
    faq: [
      {
        question: "Qual è la differenza tra sbloccare e decifrare un PDF?",
        answer:
          "Lo sblocco rimuove le restrizioni a livello di proprietario su stampa, copia o modifica da un file che puoi già aprire. Non aggira una password richiesta anche solo per visualizzare il documento: per quella serve la password vera.",
      },
      {
        question: "È legale sbloccare un PDF?",
        answer:
          "Rimuovere le restrizioni da un documento tuo, o che hai l'autorizzazione esplicita di modificare, va bene. Usa questo strumento solo su file che hai il diritto legale di modificare.",
      },
      {
        question: "Lo sblocco cambierà il contenuto del mio PDF?",
        answer:
          "No, lo strumento rimuove soltanto le restrizioni sui permessi. Testo, immagini e impaginazione del documento restano esattamente gli stessi.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Aggiungere numeri di pagina a un PDF online",
    intro:
      "Report, manuali e contratti hanno spesso bisogno di una numerazione progressiva delle pagine per il riferimento e la consultazione. Lo strumento Aggiungere Numeri di Pagina di ConvertBrio li applica automaticamente a ogni pagina del tuo PDF, senza bisogno di programmi di impaginazione.",
    sections: [
      {
        heading: "Come aggiungere i numeri di pagina",
        body: "Carica il PDF e ConvertBrio applica un numero progressivo a ogni pagina, partendo dalla prima del documento. Il file numerato si scarica pronto per essere stampato, condiviso o consegnato.",
      },
      {
        heading: "Perché i numeri di pagina sono importanti",
        body: "Le pagine numerate rendono molto più facile per chi legge rimandare a sezioni precise, soprattutto nei contratti lunghi, nei lavori accademici o nei manuali in cui serve citare «pagina 14» o raggiungere direttamente una parte del documento.",
      },
      {
        heading: "Abbinarlo ad altri strumenti PDF",
        body: "Se stai assemblando un documento da più fonti, unisci prima i file con Unire PDF, poi aggiungi i numeri di pagina al risultato combinato, così la numerazione riflette la struttura del documento finale e non quella di ogni singolo pezzo.",
      },
      {
        heading: "Stile della numerazione e limiti",
        body: "I numeri vengono applicati in basso al centro di ogni pagina, con un semplice carattere sans-serif, partendo da 1: al momento non c'è modo di cambiare la posizione, il numero iniziale o il formato, per esempio «Pagina X di Y». I caricamenti sono limitati a 100 MB. Il file originale viene eliminato subito dopo essere stato letto per l'elaborazione. Il risultato viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente, senza alcuna revisione umana, sui server dei nostri provider di hosting (Vercel e Supabase).",
      },
    ],
    faqDescription: "Domande frequenti su come aggiungere i numeri di pagina a un PDF.",
    faq: [
      {
        question: "Come aggiungo i numeri di pagina a un PDF?",
        answer:
          "Carica il documento nello strumento Aggiungere Numeri di Pagina di ConvertBrio: applica automaticamente un numero progressivo a ogni pagina prima che tu scarichi il risultato.",
      },
      {
        question: "Posso cambiare la posizione o il numero iniziale?",
        answer:
          "Al momento no: i numeri sono sempre in basso al centro, a partire da 1. Se ti serve un'altra posizione, un diverso numero iniziale o un formato «Pagina X di Y», usa un programma di modifica PDF per avere il pieno controllo.",
      },
      {
        question: "Questo strumento rinumera le pagine che hanno già dei numeri?",
        answer:
          "Applica un nuovo numero progressivo a ogni pagina. Se il documento ha già numeri stampati nel contenuto stesso, compariranno entrambi, quindi funziona meglio sui documenti privi di numeri di pagina.",
      },
    ],
  },
};
