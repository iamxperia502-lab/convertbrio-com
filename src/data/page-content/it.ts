import type { LocalePages, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsIt, hubUiIt } from "./it-hubs";

const privacy: StaticPageDoc = {
  seoTitle: "Informativa sulla privacy | ConvertBrio",
  title: "Informativa sulla privacy",
  description:
    "Come ConvertBrio raccoglie, usa e protegge i tuoi dati e i tuoi file, compreso per quanto tempo vengono conservati i caricamenti e quando vengono eliminati.",
  eyebrow: "Ultimo aggiornamento: 23 settembre 2026",
  heading: "Informativa sulla privacy",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio («noi» o «nostro») offre strumenti online per convertire, comprimere e migliorare i file. ConvertBrio è gestito in modo indipendente da Subham Sharma, con sede in India. Questa informativa spiega quali informazioni raccogliamo, come le usiamo e quali scelte hai a disposizione. Si applica a convertbrio.com e a tutti i suoi strumenti.",
      ],
    },
    {
      heading: "1. Chi siamo",
      paragraphs: [
        "ConvertBrio è gestito in modo indipendente da Subham Sharma, dall’India. Per qualsiasi domanda sulla privacy, richiesta di rettifica o esercizio dei tuoi diritti, scrivi a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o usa la nostra <a href=\"/contact\">pagina di contatto</a>.",
      ],
    },
    {
      heading: "2. Informazioni che raccogliamo",
      paragraphs: ["Raccogliamo:"],
      list: [
        "<strong>Informazioni dell’account</strong> che ci fornisci, come nome e indirizzo email.",
        "<strong>Messaggi inviati tramite il modulo di contatto</strong>, compresi il testo e l’email di risposta che indichi.",
        "<strong>Dati tecnici</strong> come indirizzo IP, tipo di browser, tipo di dispositivo e sistema operativo, raccolti automaticamente per far funzionare il servizio in sicurezza e diagnosticare i problemi.",
        "<strong>Dati di utilizzo</strong>, ad esempio quali strumenti e pagine visiti e come interagisci con essi.",
        "<strong>Log di sicurezza</strong> usati per individuare abusi, limitare il numero di richieste e mantenere il servizio affidabile.",
      ],
    },
    {
      heading: "3. I file che carichi",
      paragraphs: [
        "I file che carichi vengono trasmessi tramite una connessione cifrata (HTTPS/TLS). Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati in modo automatico sui server dei nostri provider di hosting (Vercel e Supabase), senza alcuna revisione umana. Non esaminiamo manualmente, non condividiamo e non usiamo il contenuto dei tuoi file per scopi diversi dalla consegna del risultato richiesto. Questo vale anche per gli strumenti di IA, come il miglioramento delle immagini, l’upscaling e la rimozione dello sfondo: i file caricati servono solo a produrre il tuo output e non vengono mai usati per addestrare o migliorare alcun modello.",
      ],
    },
    {
      heading: "4. Come usiamo le informazioni",
      paragraphs: [
        "Usiamo le informazioni raccolte per gestire e migliorare ConvertBrio, offrire assistenza, monitorare abusi e incidenti di sicurezza, comprendere l’utilizzo aggregato del prodotto e adempiere agli obblighi di legge. Non vendiamo i tuoi dati personali.",
      ],
    },
    {
      heading: "5. Cookie e tecnologie simili",
      paragraphs: [
        "Noi e i nostri fornitori di servizi utilizziamo cookie e tecnologie simili (come il local storage) per le seguenti finalità:",
      ],
      list: [
        "<strong>Essenziali</strong>: mantenerti connesso e ricordare preferenze di base, come il tema.",
        "<strong>Analisi</strong>: capire l’utilizzo aggregato tramite Google Analytics e Microsoft Clarity, per sapere quali strumenti sono utili e dove il prodotto presenta problemi.",
        "<strong>Pubblicità</strong>: se e quando mostreremo annunci pubblicitari (ad esempio tramite Google AdSense), Google e altri fornitori terzi usano cookie, compreso il cookie pubblicitario di Google, per mostrare annunci in base alle tue visite precedenti a questo o ad altri siti web. Questi cookie consentono a Google e ai suoi partner di mostrarti annunci personalizzati. Puoi disattivare la pubblicità personalizzata visitando le <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Impostazioni annunci di Google</a>, oppure, in generale, su <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener noreferrer\">aboutads.info</a>.",
      ],
    },
    {
      paragraphs: [
        "Dove richiesto (anche per i visitatori dello SEE, del Regno Unito e della Svizzera), chiediamo il tuo consenso prima di impostare cookie non essenziali di analisi o pubblicità, tramite il banner mostrato alla prima visita. Puoi cambiare la tua scelta in qualsiasi momento con il link «Gestisci preferenze cookie» nel piè di pagina di ogni pagina. Rifiutare i cookie non essenziali non ti impedisce di usare gli strumenti di ConvertBrio.",
      ],
    },
    {
      heading: "6. Servizi di terze parti che utilizziamo",
      paragraphs: [
        "ConvertBrio si affida ai seguenti fornitori di servizi, ciascuno dei quali riceve solo le informazioni necessarie allo svolgimento della propria funzione:",
      ],
      list: [
        "<strong>Vercel</strong>: ospita il sito ed esegue le conversioni dei file sui propri server (le conversioni non avvengono in locale nel tuo browser); conserva brevemente il file originale caricato in un archivio privato Vercel Blob finché non viene letto per la conversione ed eliminato.",
        "<strong>Supabase</strong>: conserva gli account e, in via temporanea, il risultato convertito del tuo file fino all’eliminazione automatica.",
        "<strong>Google Analytics e Google Tag Manager</strong>: analisi aggregate dell’utilizzo, soggette alla tua scelta sui cookie.",
        "<strong>Microsoft Clarity</strong>: analisi aggregate dell’utilizzo e informazioni sulle sessioni, soggette alla tua scelta sui cookie.",
        "<strong>Google AdSense</strong>: pubblicità, una volta attivata sul sito, soggetta alla tua scelta sui cookie.",
      ],
    },
    {
      paragraphs: [
        "Non vendiamo né condividiamo queste informazioni con alcun fornitore oltre a quanto necessario per lo svolgimento della funzione indicata.",
      ],
    },
    {
      heading: "7. Base giuridica e diritti degli interessati (SEE, Regno Unito e Svizzera)",
      paragraphs: [
        "Dove si applicano il GDPR o il GDPR del Regno Unito, trattiamo le tue informazioni sulla base dell’esecuzione del contratto con te (fornirti gli strumenti che usi), dei nostri legittimi interessi (sicurezza, prevenzione delle frodi e miglioramento del servizio) e del tuo consenso (cookie di analisi e pubblicità). Hai il diritto di accedere ai tuoi dati personali, rettificarli, cancellarli, limitarne il trattamento o opporti ad esso, di riceverne una copia in formato portabile e di revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento effettuato prima della revoca. Hai inoltre il diritto di proporre reclamo all’autorità di controllo per la protezione dei dati del tuo Paese. Per esercitare uno qualsiasi di questi diritti, scrivi a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "8. Diritti sulla privacy negli Stati Uniti",
      paragraphs: [
        "Se risiedi in uno Stato degli Stati Uniti con una legge generale sulla privacy (come California, Colorado, Connecticut, Virginia o altri), puoi avere il diritto di sapere, accedere, cancellare o correggere i tuoi dati personali e di rifiutarne la vendita o la «condivisione» (anche per la pubblicità comportamentale cross-context, in cui alcuni Stati fanno rientrare i cookie pubblicitari). Non vendiamo dati personali. Se mostriamo pubblicità tramite Google AdSense, ciò può essere considerato «condivisione» ai sensi di alcune leggi statali; puoi rifiutarla in qualsiasi momento con il link per le preferenze sui cookie nel piè di pagina, la pagina <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Impostazioni annunci di Google</a> oppure inviando dal tuo browser un segnale Global Privacy Control (GPC), che consideriamo come richiesta di opt-out. Per esercitare questi diritti, scrivi a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "9. Trasferimenti internazionali di dati",
      paragraphs: [
        "ConvertBrio è gestito dall’India e si avvale di fornitori di servizi (tra cui Vercel e Supabase) che possono trattare i dati in altri Paesi, compresi gli Stati Uniti. Quando trasferiamo dati personali a livello internazionale, facciamo affidamento sulle garanzie contrattuali e tecniche di tali fornitori per proteggerli in modo coerente con questa informativa.",
      ],
    },
    {
      heading: "10. Conservazione dei dati",
      paragraphs: [
        "Il file originale che carichi viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore, indipendentemente dal fatto che tu lo scarichi o meno. I file vengono elaborati in modo automatico sui server dei nostri provider di hosting (Vercel e Supabase), senza alcuna revisione umana. Le informazioni dell’account sono conservate finché l’account resta attivo, più un breve periodo successivo per adempiere a obblighi legali o di sicurezza. I log di sicurezza e di utilizzo sono conservati solo per il tempo necessario alle finalità sopra descritte, dopodiché vengono eliminati o resi anonimi.",
      ],
    },
    {
      heading: "11. Privacy dei minori",
      paragraphs: [
        "ConvertBrio è destinato a utenti di età pari o superiore a 18 anni e non si rivolge ai minori. Non raccogliamo consapevolmente dati personali di persone con meno di 18 anni. Se ritieni che un minore ci abbia fornito dati personali, scrivi a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> e li cancelleremo.",
      ],
    },
    {
      heading: "12. Modifiche a questa informativa",
      paragraphs: [
        "Potremmo aggiornare questa informativa di tanto in tanto. In caso di modifiche sostanziali, aggiorneremo la data di «ultimo aggiornamento» in cima a questa pagina e, se opportuno, daremo un avviso aggiuntivo.",
      ],
    },
    {
      heading: "13. Contattaci",
      paragraphs: [
        "Domande su questa informativa o richieste di esercizio dei tuoi diritti sulla privacy possono essere inviate a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oppure tramite la nostra <a href=\"/contact\">pagina di contatto</a>.",
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: "Termini di servizio | ConvertBrio",
  title: "Termini di servizio",
  description:
    "Le condizioni che regolano l’uso degli strumenti e dei servizi gratuiti di ConvertBrio, tra cui uso consentito, limiti e responsabilità dell’utente.",
  eyebrow: "Ultimo aggiornamento: 25 agosto 2026",
  heading: "Termini di servizio",
  blocks: [
    {
      paragraphs: [
        "I presenti Termini di servizio («Termini») regolano l’accesso e l’utilizzo di ConvertBrio. Utilizzando i nostri strumenti, accetti questi Termini.",
      ],
    },
    {
      heading: "1. Utilizzo di ConvertBrio",
      paragraphs: [
        "Puoi usare ConvertBrio per convertire, comprimere e migliorare file di tua proprietà o che hai il diritto di elaborare. Per utilizzare il servizio devi avere almeno 18 anni.",
      ],
    },
    {
      heading: "2. Uso consentito",
      paragraphs: [
        "Ti impegni a non caricare contenuti illeciti, che violino diritti altrui o dannosi, a non cercare di compromettere il funzionamento del servizio e a non usare strumenti automatizzati per aggirare i limiti di richieste senza il nostro permesso scritto.",
      ],
    },
    {
      heading: "3. I tuoi contenuti",
      paragraphs: [
        "Mantieni tutti i diritti sui file che carichi. Non rivendichiamo alcuna proprietà sui tuoi contenuti e li elaboriamo solo per fornirti la conversione o il miglioramento richiesti.",
      ],
    },
    {
      heading: "4. Servizi a pagamento",
      paragraphs: [
        "Al momento ConvertBrio non offre abbonamenti a pagamento. Se in futuro verranno introdotti servizi a pagamento, prezzi, frequenza di fatturazione, condizioni di rinnovo e di disdetta saranno mostrati prima dell’acquisto. Questi Termini saranno aggiornati prima che i servizi a pagamento diventino disponibili.",
      ],
    },
    {
      heading: "5. Disponibilità del servizio",
      paragraphs: [
        "Ci impegniamo a mantenere ConvertBrio disponibile e affidabile, ma non garantiamo un accesso ininterrotto. Possiamo modificare o sospendere alcune funzioni con un ragionevole preavviso.",
      ],
    },
    {
      heading: "6. Esclusione di garanzie e limitazione di responsabilità",
      paragraphs: [
        "ConvertBrio è fornito «così com’è», senza garanzie di alcun tipo. Nei limiti massimi consentiti dalla legge, ConvertBrio non è responsabile per danni indiretti o consequenziali derivanti dall’uso del servizio.",
      ],
    },
    {
      heading: "7. Modifiche ai Termini",
      paragraphs: [
        "Possiamo aggiornare questi Termini di tanto in tanto. Se continui a usare ConvertBrio dopo l’entrata in vigore delle modifiche, accetti i Termini rivisti.",
      ],
    },
    {
      heading: "8. Contattaci",
      paragraphs: [
        "Domande su questi Termini possono essere inviate a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oppure tramite la nostra <a href=\"/contact\">pagina di contatto</a>.",
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: "Fiducia e sicurezza | ConvertBrio",
  title: "Fiducia e sicurezza",
  description:
    "Come ConvertBrio tratta i tuoi file, come segnalare abusi o problemi di sicurezza e come gestiamo le correzioni alle guide pubblicate.",
  eyebrow: "Ultimo aggiornamento: 23 settembre 2026",
  heading: "Fiducia e sicurezza",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio è gestito in modo indipendente da Subham Sharma, con sede in India. Questa pagina riassume come trattiamo i tuoi file, come segnalare un abuso o un problema di sicurezza e come gestiamo le correzioni alle guide pubblicate. Per i dettagli legali completi, consulta la nostra <a href=\"/privacy\">Informativa sulla privacy</a> e i <a href=\"/terms\">Termini di servizio</a>.",
      ],
    },
    {
      heading: "Come vengono trattati i tuoi file",
      paragraphs: [
        "I file vengono trasmessi tramite una connessione cifrata (HTTPS/TLS). Ogni conversione è un processo automatico: nessuno apre, esamina o legge manualmente il contenuto del tuo file in nessun momento, nemmeno per gli strumenti di IA come il miglioramento delle immagini, l’upscaling e la rimozione dello sfondo, per i quali i file caricati servono solo a produrre il tuo output e mai ad addestrare o migliorare alcun modello.",
        "Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati in modo automatico sui server dei nostri provider di hosting (Vercel e Supabase), senza alcuna revisione umana.",
      ],
    },
    {
      heading: "Segnalare abusi o usi impropri",
      paragraphs: [
        "I servizi di caricamento file possono essere usati in modo improprio: per elaborare contenuti su cui non si hanno diritti, o per altri abusi. Se ritieni che un file elaborato tramite ConvertBrio riguardi contenuti illegali, violazioni del copyright o altre forme di uso improprio, segnalalo tramite <a href=\"/contact\">il nostro modulo di contatto</a> oppure scrivendo a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>. Non mostriamo pubblicamente i nomi dei file caricati né i risultati, ed esaminiamo le segnalazioni di abuso direttamente, senza passare da una coda automatica.",
        "Strumenti come Sbloccare PDF sono pensati solo per rimuovere le restrizioni a livello di proprietario da documenti che hai già il diritto di modificare: consulta lo <a href=\"/tools/unlock-pdf\">strumento Sbloccare PDF</a> e la nostra guida sulle <a href=\"/blog/pdf-password-restrictions-explained\">restrizioni con password nei PDF</a> per sapere esattamente cosa fa e cosa no. Non sono progettati né destinati ad aggirare la protezione di file che non possiedi o che non sei autorizzato a modificare.",
      ],
    },
    {
      heading: "Segnalare un problema di sicurezza",
      paragraphs: [
        "Se trovi una vulnerabilità di sicurezza in ConvertBrio, di qualsiasi tipo, da un problema di controllo degli accessi a un modo per vedere i dati di un altro utente, segnalala a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o tramite <a href=\"/contact\">il modulo di contatto</a> prima di renderla pubblica. Essendo un progetto gestito in modo indipendente, i tempi di risposta non saranno quelli del team di sicurezza di una grande azienda, ma ogni segnalazione viene letta e presa sul serio.",
      ],
    },
    {
      heading: "Correzioni a guide e articoli",
      paragraphs: [
        "Gli articoli del <a href=\"/blog\">blog di ConvertBrio</a> sono scritti per essere accurati e pratici e vengono rivisti prima della pubblicazione. Se noti un errore di fatto, un’affermazione superata o qualcosa che non corrisponde più al comportamento reale di uno strumento, faccelo sapere tramite <a href=\"/contact\">il modulo di contatto</a>: le correzioni vengono apportate direttamente nell’articolo, non di nascosto, e la data indicata nella pagina riflette l’ultimo aggiornamento sostanziale.",
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: "Contatti | ConvertBrio",
  title: "Contatti",
  description:
    "Mettiti in contatto con il team di ConvertBrio per assistenza, suggerimenti o richieste di collaborazione.",
  eyebrow: "Contatti",
  heading: "Mettiti in contatto",
  intro: "Domande, suggerimenti o la richiesta di un nuovo strumento? Leggiamo ogni messaggio.",
  supportHeading: "Assistenza generale",
  businessHeading: "Aziende e collaborazioni",
  responseNote: "In genere rispondiamo entro un giorno lavorativo.",
  nameLabel: "Nome",
  emailLabel: "Email",
  subjectLabel: "Oggetto",
  messageLabel: "Messaggio",
  sendLabel: "Invia messaggio",
};

const blogIndex: BlogIndexDoc = {
  seoTitle: "Guide su file, formati e conversione | ConvertBrio",
  title: "Blog",
  description:
    "Guide pratiche su formati di file, PDF, immagini e conversione di documenti: come funzionano, cosa li fa ridurre o rompere e come risolvere i problemi più comuni.",
  eyebrow: "Blog",
  heading: "Guide su file, formati e conversione",
  intro: "Risposte pratiche ai problemi con i file in cui le persone si imbattono davvero, senza fronzoli e senza riempitivi.",
  englishNote: "Per ora le guide sono pubblicate in inglese.",
  empty: "Ancora nessun articolo, torna a trovarci presto.",
  dateLocale: "it-IT",
};

export const pagesIt: LocalePages | undefined = {
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsIt,
  hubUi: hubUiIt,
};
