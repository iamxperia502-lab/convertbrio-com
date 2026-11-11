import type { Locale } from "./i18n";

/**
 * About-page copy for every language. Strings marked (HTML) may contain inline
 * links written with ENGLISH root-relative paths (e.g. href="/contact"); the page
 * rewrites them to the language's own URLs. Tokens: {name} = founder name,
 * {count} = number of live tools.
 */
export interface AboutStrings {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  /** Job title used in the Person schema and under the founder's name. */
  role: string;
  founderHeading: string;
  /** (HTML) Intro paragraph under the founder heading. */
  founderIntro: string;
  /** Photo alt text. */
  photoAlt: string;
  whyHeading: string;
  whyP1: string;
  /** (HTML) Links to Compress Image, Compress PDF to a Size Limit, Photo & Signature Resizer. */
  whyP2: string;
  values: { title: string; desc: string }[];
  howHeading: string;
  howP1: string;
  /** (HTML) Canonical deletion/hosting statement plus links to Privacy and Trust. */
  howP2: string;
  businessHeading: string;
  contactHeading: string;
  /** (HTML) */
  contactP1: string;
  /** (HTML) */
  linkedinLine: string;
  /** (HTML) The single mention of the development services. */
  servicesLine: string;
  /** Used for the Person image alt-less JSON-LD name of the page. */
  schemaName: string;
}

const en: AboutStrings = {
  title: "About",
  description: "ConvertBrio is a free online file converter built and run by Subham Sharma: fast, private tools for images, PDFs, and documents.",
  eyebrow: "About ConvertBrio",
  heading: "File tools that get out of your way",
  intro: "ConvertBrio started with a simple idea: converting a file shouldn't require installing software, creating an account, or waiting in a queue.",
  role: "Founder and developer",
  founderHeading: "Who builds ConvertBrio",
  founderIntro:
    'ConvertBrio is independently built and run by {name}. There is no large team behind it: the same person who writes the code reads the messages that come in through the <a href="/contact">contact page</a>.',
  photoAlt: "Portrait of {name}, founder of ConvertBrio",
  whyHeading: "Why ConvertBrio exists",
  whyP1:
    "Plenty of everyday paperwork now happens in a web form, and those forms are strict: a photo under a set number of KB, a signature of an exact size, a PDF that must stay below a limit. A phone camera or a scanner produces files many times larger than that, and the usual fixes mean installing software, signing up, or accepting a watermark on the result.",
  whyP2:
    'ConvertBrio was built to remove that friction. The <a href="/tools/compress-image">Compress Image</a>, <a href="/tools/compress-pdf-to-size">Compress PDF to a Size Limit</a>, and <a href="/tools/photo-signature-resizer">Photo &amp; Signature Resizer</a> tools aim for the limit you enter and tell you honestly when a file can\'t reach it. Around those sit the other jobs people run into: converting formats, merging and splitting PDFs, and cleaning up photos.',
  values: [
    { title: "Fast by default", desc: "Every tool is built to process files in seconds, not minutes, no matter the queue." },
    { title: "Private by design", desc: "Files are encrypted in transit and deleted automatically. We never sell or review your data." },
    { title: "Genuinely useful AI", desc: "AI tools that solve real problems, enhancement, restoration, and cleanup, not gimmicks." },
  ],
  howHeading: "How it works and how your files are handled",
  howP1:
    "You upload a file in your browser, a tool converts it on the server, and you download the result. {count} tools are live today, with more added regularly. Where AI genuinely improves a result, like enhancing a low-resolution photo, we use it; where it wouldn't help, we leave it out.",
  howP2:
    'Your original file is deleted right after it is read for conversion. The converted result is deleted by a daily cleanup, typically within about 24 hours. Files are processed on our hosting providers\' servers (Vercel and Supabase), automatically, with no human review. The details are in the <a href="/privacy">Privacy Policy</a> and on the <a href="/trust">Trust &amp; Security</a> page.',
  businessHeading: "Business details",
  contactHeading: "Get in touch",
  contactP1:
    'Feedback, a security concern, or a tool you\'d like to see? Use the <a href="/contact">contact form</a> or write to <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. You can also find ConvertBrio on LinkedIn, Instagram, Facebook, and Threads:',
  linkedinLine: '{name} is also on <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} also takes on development work for clients at <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "About ConvertBrio",
};

const pt: AboutStrings = {
  title: "Sobre",
  description: "O ConvertBrio é um conversor de arquivos online gratuito, criado e mantido por Subham Sharma: ferramentas rápidas e privadas para imagens, PDFs e documentos.",
  eyebrow: "Sobre o ConvertBrio",
  heading: "Ferramentas de arquivo que não atrapalham",
  intro: "O ConvertBrio nasceu de uma ideia simples: converter um arquivo não deveria exigir instalar programas, criar uma conta ou esperar numa fila.",
  role: "Fundador e desenvolvedor",
  founderHeading: "Quem faz o ConvertBrio",
  founderIntro:
    'O ConvertBrio é criado e mantido de forma independente por {name}. Não há uma grande equipe por trás: a mesma pessoa que escreve o código lê as mensagens que chegam pela <a href="/contact">página de contato</a>.',
  photoAlt: "Retrato de {name}, fundador do ConvertBrio",
  whyHeading: "Por que o ConvertBrio existe",
  whyP1:
    "Muita papelada do dia a dia hoje acontece em formulários na web, e eles são rígidos: uma foto abaixo de um certo número de KB, uma assinatura de tamanho exato, um PDF que não pode passar de um limite. A câmera do celular ou o scanner geram arquivos muitas vezes maiores, e as soluções de sempre exigem instalar programas, fazer cadastro ou aceitar uma marca d'água no resultado.",
  whyP2:
    'O ConvertBrio foi criado para tirar esse atrito. As ferramentas <a href="/tools/compress-image">Comprimir Imagem</a>, <a href="/tools/compress-pdf-to-size">Comprimir PDF para um Tamanho</a> e <a href="/tools/photo-signature-resizer">Redimensionar Foto e Assinatura</a> buscam o limite que você informa e avisam com honestidade quando um arquivo não consegue chegar lá. Em volta delas estão os outros trabalhos do dia a dia: converter formatos, juntar e dividir PDFs e melhorar fotos.',
  values: [
    { title: "Rápido por padrão", desc: "Cada ferramenta foi feita para processar arquivos em segundos, não em minutos, sem fila." },
    { title: "Privado desde a origem", desc: "Os arquivos são criptografados no envio e apagados automaticamente. Nunca vendemos nem revisamos os seus dados." },
    { title: "IA realmente útil", desc: "Ferramentas de IA que resolvem problemas reais, como melhoria, restauração e limpeza de imagens, sem firulas." },
  ],
  howHeading: "Como funciona e como tratamos os seus arquivos",
  howP1:
    "Você envia um arquivo pelo navegador, uma ferramenta o converte no servidor e você baixa o resultado. Hoje há {count} ferramentas no ar, e novas são adicionadas com regularidade. Onde a IA melhora de fato o resultado, como ao melhorar uma foto de baixa resolução, nós a usamos; onde ela não ajudaria, deixamos de fora.",
  howP2:
    'Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana. Os detalhes estão na <a href="/privacy">Política de Privacidade</a> e na página <a href="/trust">Confiança e Segurança</a>.',
  businessHeading: "Dados da empresa",
  contactHeading: "Fale conosco",
  contactP1:
    'Tem um comentário, uma preocupação de segurança ou uma ferramenta que gostaria de ver? Use o <a href="/contact">formulário de contato</a> ou escreva para <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. Você também encontra o ConvertBrio no LinkedIn, Instagram, Facebook e Threads:',
  linkedinLine: '{name} também está no <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} também faz trabalhos de desenvolvimento para clientes em <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "Sobre o ConvertBrio",
};

const es: AboutStrings = {
  title: "Acerca de",
  description: "ConvertBrio es un conversor de archivos online gratuito, creado y gestionado por Subham Sharma: herramientas rápidas y privadas para imágenes, PDF y documentos.",
  eyebrow: "Acerca de ConvertBrio",
  heading: "Herramientas de archivos que no estorban",
  intro: "ConvertBrio nació de una idea sencilla: convertir un archivo no debería exigir instalar programas, crear una cuenta ni esperar en una cola.",
  role: "Fundador y desarrollador",
  founderHeading: "Quién hace ConvertBrio",
  founderIntro:
    'ConvertBrio está creado y gestionado de forma independiente por {name}. No hay un gran equipo detrás: la misma persona que escribe el código lee los mensajes que llegan por la <a href="/contact">página de contacto</a>.',
  photoAlt: "Retrato de {name}, fundador de ConvertBrio",
  whyHeading: "Por qué existe ConvertBrio",
  whyP1:
    "Mucho del papeleo cotidiano ocurre ya en formularios web, y esos formularios son estrictos: una foto por debajo de cierto número de KB, una firma de tamaño exacto, un PDF que no puede superar un límite. La cámara del móvil o un escáner generan archivos muchas veces más grandes, y las soluciones habituales implican instalar programas, registrarse o aceptar una marca de agua en el resultado.",
  whyP2:
    'ConvertBrio se creó para quitar esa fricción. Las herramientas <a href="/tools/compress-image">Comprimir Imagen</a>, <a href="/tools/compress-pdf-to-size">Comprimir PDF a un Tamaño</a> y <a href="/tools/photo-signature-resizer">Redimensionar Foto y Firma</a> apuntan al límite que indicas y te dicen con honestidad cuándo un archivo no puede alcanzarlo. A su alrededor están los demás trabajos habituales: convertir formatos, unir y dividir PDF y retocar fotos.',
  values: [
    { title: "Rápido por defecto", desc: "Cada herramienta está pensada para procesar archivos en segundos, no en minutos, sin colas." },
    { title: "Privado por diseño", desc: "Los archivos se cifran al enviarlos y se eliminan automáticamente. Nunca vendemos ni revisamos tus datos." },
    { title: "IA realmente útil", desc: "Herramientas de IA que resuelven problemas reales, como mejorar, restaurar y limpiar imágenes, sin trucos de feria." },
  ],
  howHeading: "Cómo funciona y cómo tratamos tus archivos",
  howP1:
    "Subes un archivo desde el navegador, una herramienta lo convierte en el servidor y descargas el resultado. Hoy hay {count} herramientas en funcionamiento y se añaden más con regularidad. Donde la IA mejora de verdad un resultado, como al mejorar una foto de baja resolución, la usamos; donde no ayudaría, la dejamos fuera.",
  howP2:
    'Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se borra con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan automáticamente en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), sin revisión humana. Los detalles están en la <a href="/privacy">Política de privacidad</a> y en la página <a href="/trust">Confianza y seguridad</a>.',
  businessHeading: "Datos de la empresa",
  contactHeading: "Ponte en contacto",
  contactP1:
    '¿Tienes comentarios, una preocupación de seguridad o una herramienta que te gustaría ver? Usa el <a href="/contact">formulario de contacto</a> o escribe a <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. También puedes encontrar ConvertBrio en LinkedIn, Instagram, Facebook y Threads:',
  linkedinLine: '{name} también está en <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} también realiza trabajos de desarrollo para clientes en <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "Acerca de ConvertBrio",
};

const fr: AboutStrings = {
  title: "À propos",
  description: "ConvertBrio est un convertisseur de fichiers en ligne gratuit, conçu et exploité par Subham Sharma : des outils rapides et privés pour les images, les PDF et les documents.",
  eyebrow: "À propos de ConvertBrio",
  heading: "Des outils de fichiers qui ne vous gênent pas",
  intro: "ConvertBrio est né d'une idée simple : convertir un fichier ne devrait pas exiger d'installer un logiciel, de créer un compte ou de faire la queue.",
  role: "Fondateur et développeur",
  founderHeading: "Qui construit ConvertBrio",
  founderIntro:
    'ConvertBrio est conçu et exploité de manière indépendante par {name}. Il n\'y a pas de grande équipe derrière : la personne qui écrit le code lit aussi les messages reçus via la <a href="/contact">page de contact</a>.',
  photoAlt: "Portrait de {name}, fondateur de ConvertBrio",
  whyHeading: "Pourquoi ConvertBrio existe",
  whyP1:
    "Une grande part des démarches du quotidien passe désormais par des formulaires web, et ces formulaires sont stricts : une photo sous un certain nombre de Ko, une signature d'une taille précise, un PDF qui ne doit pas dépasser une limite. Un appareil photo de téléphone ou un scanner produisent des fichiers bien plus lourds, et les solutions habituelles supposent d'installer un logiciel, de s'inscrire ou d'accepter un filigrane sur le résultat.",
  whyP2:
    'ConvertBrio a été créé pour supprimer cette friction. Les outils <a href="/tools/compress-image">Compresser une Image</a>, <a href="/tools/compress-pdf-to-size">Compresser un PDF à une Taille Précise</a> et <a href="/tools/photo-signature-resizer">Redimensionner Photo et Signature</a> visent la limite que vous indiquez et vous disent honnêtement quand un fichier ne peut pas l\'atteindre. Autour d\'eux, on trouve les autres tâches courantes : convertir des formats, fusionner et diviser des PDF, retoucher des photos.',
  values: [
    { title: "Rapide par défaut", desc: "Chaque outil est conçu pour traiter les fichiers en quelques secondes, pas en minutes, sans file d'attente." },
    { title: "Privé par conception", desc: "Les fichiers sont chiffrés pendant le transfert et supprimés automatiquement. Nous ne vendons ni ne consultons jamais vos données." },
    { title: "Une IA vraiment utile", desc: "Des outils d'IA qui résolvent de vrais problèmes, comme l'amélioration, la restauration et le nettoyage d'images, sans gadgets." },
  ],
  howHeading: "Comment ça marche et comment vos fichiers sont traités",
  howP1:
    "Vous envoyez un fichier depuis votre navigateur, un outil le convertit sur le serveur et vous téléchargez le résultat. {count} outils sont disponibles aujourd'hui, et d'autres s'ajoutent régulièrement. Lorsque l'IA améliore réellement un résultat, par exemple pour une photo en basse résolution, nous l'utilisons ; lorsqu'elle n'aiderait pas, nous nous en passons.",
  howP2:
    'Votre fichier d\'origine est supprimé dès qu\'il a été lu pour la conversion. Le résultat converti est supprimé par un nettoyage quotidien, en général sous 24 heures environ. Les fichiers sont traités automatiquement sur les serveurs de nos hébergeurs (Vercel et Supabase), sans intervention humaine. Les détails figurent dans la <a href="/privacy">Politique de confidentialité</a> et sur la page <a href="/trust">Confiance et sécurité</a>.',
  businessHeading: "Informations sur l'entreprise",
  contactHeading: "Nous contacter",
  contactP1:
    'Un retour, un problème de sécurité ou un outil que vous aimeriez voir ? Utilisez le <a href="/contact">formulaire de contact</a> ou écrivez à <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. Vous pouvez aussi retrouver ConvertBrio sur LinkedIn, Instagram, Facebook et Threads :',
  linkedinLine: '{name} est aussi sur <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} réalise aussi des travaux de développement pour des clients sur <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "À propos de ConvertBrio",
};

const de: AboutStrings = {
  title: "Über uns",
  description: "ConvertBrio ist ein kostenloser Online-Dateikonverter, entwickelt und betrieben von Subham Sharma: schnelle, private Tools für Bilder, PDFs und Dokumente.",
  eyebrow: "Über ConvertBrio",
  heading: "Datei-Tools, die nicht im Weg stehen",
  intro: "ConvertBrio begann mit einer einfachen Idee: Eine Datei umzuwandeln sollte weder Software-Installation noch ein Konto noch Warten in einer Warteschlange erfordern.",
  role: "Gründer und Entwickler",
  founderHeading: "Wer ConvertBrio baut",
  founderIntro:
    'ConvertBrio wird unabhängig von {name} entwickelt und betrieben. Hinter dem Projekt steht kein großes Team: Dieselbe Person, die den Code schreibt, liest auch die Nachrichten, die über die <a href="/contact">Kontaktseite</a> eingehen.',
  photoAlt: "Porträt von {name}, Gründer von ConvertBrio",
  whyHeading: "Warum es ConvertBrio gibt",
  whyP1:
    "Viel Alltagsbürokratie läuft inzwischen über Webformulare, und die sind streng: ein Foto unter einer bestimmten Anzahl KB, eine Unterschrift in exakter Größe, ein PDF, das unter einem Limit bleiben muss. Eine Handykamera oder ein Scanner erzeugt Dateien, die um ein Vielfaches größer sind, und die üblichen Lösungen bedeuten Software installieren, sich registrieren oder ein Wasserzeichen im Ergebnis akzeptieren.",
  whyP2:
    'ConvertBrio wurde gebaut, um diese Reibung zu beseitigen. Die Tools <a href="/tools/compress-image">Bild komprimieren</a>, <a href="/tools/compress-pdf-to-size">PDF auf Zielgröße komprimieren</a> und <a href="/tools/photo-signature-resizer">Foto &amp; Unterschrift anpassen</a> steuern das von Ihnen eingegebene Limit an und sagen ehrlich, wenn eine Datei es nicht erreichen kann. Darum herum finden sich die übrigen alltäglichen Aufgaben: Formate umwandeln, PDFs zusammenfügen und teilen, Fotos aufbereiten.',
  values: [
    { title: "Schnell von Haus aus", desc: "Jedes Tool ist darauf ausgelegt, Dateien in Sekunden statt Minuten zu verarbeiten, ganz ohne Warteschlange." },
    { title: "Privat von Grund auf", desc: "Dateien werden verschlüsselt übertragen und automatisch gelöscht. Wir verkaufen oder prüfen Ihre Daten nie." },
    { title: "KI, die wirklich nützt", desc: "KI-Tools, die echte Probleme lösen, etwa Bildverbesserung, Restaurierung und Bereinigung, keine Spielereien." },
  ],
  howHeading: "So funktioniert es und so gehen wir mit Ihren Dateien um",
  howP1:
    "Sie laden eine Datei im Browser hoch, ein Tool wandelt sie auf dem Server um, und Sie laden das Ergebnis herunter. Aktuell sind {count} Tools online, regelmäßig kommen weitere hinzu. Wo KI ein Ergebnis wirklich verbessert, etwa bei einem Foto mit niedriger Auflösung, setzen wir sie ein; wo sie nicht helfen würde, lassen wir sie weg.",
  howP2:
    'Ihre Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet, ohne menschliche Prüfung. Die Einzelheiten stehen in der <a href="/privacy">Datenschutzerklärung</a> und auf der Seite <a href="/trust">Vertrauen &amp; Sicherheit</a>.',
  businessHeading: "Angaben zum Unternehmen",
  contactHeading: "Kontakt aufnehmen",
  contactP1:
    'Feedback, ein Sicherheitsanliegen oder ein Tool-Wunsch? Nutzen Sie das <a href="/contact">Kontaktformular</a> oder schreiben Sie an <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. ConvertBrio finden Sie auch auf LinkedIn, Instagram, Facebook und Threads:',
  linkedinLine: '{name} ist auch auf <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a> zu finden.',
  servicesLine: '{name} übernimmt außerdem Entwicklungsarbeiten für Kunden unter <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "Über ConvertBrio",
};

const it: AboutStrings = {
  title: "Chi siamo",
  description: "ConvertBrio è un convertitore di file online gratuito, creato e gestito da Subham Sharma: strumenti veloci e riservati per immagini, PDF e documenti.",
  eyebrow: "Chi è ConvertBrio",
  heading: "Strumenti per i file che non intralciano",
  intro: "ConvertBrio è nato da un'idea semplice: convertire un file non dovrebbe richiedere di installare software, creare un account o aspettare in coda.",
  role: "Fondatore e sviluppatore",
  founderHeading: "Chi costruisce ConvertBrio",
  founderIntro:
    'ConvertBrio è creato e gestito in modo indipendente da {name}. Non c\'è un grande team dietro: la stessa persona che scrive il codice legge i messaggi che arrivano dalla <a href="/contact">pagina dei contatti</a>.',
  photoAlt: "Ritratto di {name}, fondatore di ConvertBrio",
  whyHeading: "Perché esiste ConvertBrio",
  whyP1:
    "Molte pratiche di ogni giorno ormai passano da moduli web, e quei moduli sono rigidi: una foto sotto un certo numero di KB, una firma di dimensioni esatte, un PDF che non deve superare un limite. La fotocamera dello smartphone o uno scanner producono file molto più grandi, e le soluzioni abituali richiedono di installare programmi, registrarsi o accettare una filigrana sul risultato.",
  whyP2:
    'ConvertBrio è nato per eliminare questo attrito. Gli strumenti <a href="/tools/compress-image">Comprimere Immagine</a>, <a href="/tools/compress-pdf-to-size">Comprimere PDF a una Dimensione</a> e <a href="/tools/photo-signature-resizer">Ridimensionare Foto e Firma</a> puntano al limite che inserisci e ti dicono onestamente quando un file non riesce a raggiungerlo. Intorno ci sono gli altri lavori di tutti i giorni: convertire formati, unire e dividere PDF, sistemare le foto.',
  values: [
    { title: "Veloce per impostazione", desc: "Ogni strumento è pensato per elaborare i file in pochi secondi, non in minuti, senza code." },
    { title: "Riservato per progetto", desc: "I file sono cifrati durante il trasferimento ed eliminati automaticamente. Non vendiamo né esaminiamo mai i tuoi dati." },
    { title: "IA davvero utile", desc: "Strumenti di IA che risolvono problemi reali, come miglioramento, restauro e pulizia delle immagini, senza trucchi da fiera." },
  ],
  howHeading: "Come funziona e come trattiamo i tuoi file",
  howP1:
    "Carichi un file dal browser, uno strumento lo converte sul server e scarichi il risultato. Oggi gli strumenti attivi sono {count}, e ne aggiungiamo altri con regolarità. Dove l'IA migliora davvero un risultato, come nel potenziare una foto a bassa risoluzione, la usiamo; dove non servirebbe, la lasciamo fuori.",
  howP2:
    'Il file originale viene eliminato subito dopo essere stato letto per la conversione. Il risultato convertito viene eliminato da una pulizia giornaliera, in genere entro circa 24 ore. I file vengono elaborati automaticamente sui server dei nostri provider di hosting (Vercel e Supabase), senza revisione umana. I dettagli sono nell\'<a href="/privacy">Informativa sulla privacy</a> e nella pagina <a href="/trust">Fiducia e sicurezza</a>.',
  businessHeading: "Dati dell'attività",
  contactHeading: "Contattaci",
  contactP1:
    'Hai un suggerimento, una segnalazione di sicurezza o uno strumento che vorresti vedere? Usa il <a href="/contact">modulo di contatto</a> o scrivi a <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. Puoi trovare ConvertBrio anche su LinkedIn, Instagram, Facebook e Threads:',
  linkedinLine: '{name} è anche su <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} si occupa anche di sviluppo per clienti su <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "Chi è ConvertBrio",
};

const id: AboutStrings = {
  title: "Tentang",
  description: "ConvertBrio adalah konverter file online gratis yang dibuat dan dijalankan oleh Subham Sharma: alat cepat dan privat untuk gambar, PDF, dan dokumen.",
  eyebrow: "Tentang ConvertBrio",
  heading: "Alat file yang tidak merepotkan",
  intro: "ConvertBrio berawal dari ide sederhana: mengonversi file tidak seharusnya mengharuskan Anda memasang perangkat lunak, membuat akun, atau mengantre.",
  role: "Pendiri dan pengembang",
  founderHeading: "Siapa di balik ConvertBrio",
  founderIntro:
    'ConvertBrio dibangun dan dijalankan secara mandiri oleh {name}. Tidak ada tim besar di baliknya: orang yang menulis kodenya juga membaca pesan yang masuk lewat <a href="/contact">halaman kontak</a>.',
  photoAlt: "Potret {name}, pendiri ConvertBrio",
  whyHeading: "Mengapa ConvertBrio ada",
  whyP1:
    "Banyak urusan administrasi sehari-hari kini lewat formulir web, dan formulir itu ketat: foto di bawah sekian KB, tanda tangan dengan ukuran persis, PDF yang tidak boleh melewati batas tertentu. Kamera ponsel atau pemindai menghasilkan file yang jauh lebih besar, dan solusi yang biasa berarti memasang program, mendaftar, atau menerima watermark pada hasilnya.",
  whyP2:
    'ConvertBrio dibuat untuk menghilangkan hambatan itu. Alat <a href="/tools/compress-image">Kompres Gambar</a>, <a href="/tools/compress-pdf-to-size">Kompres PDF ke Ukuran Tertentu</a>, dan <a href="/tools/photo-signature-resizer">Ubah Ukuran Foto &amp; Tanda Tangan</a> mengejar batas yang Anda masukkan dan jujur memberi tahu jika sebuah file tidak bisa mencapainya. Di sekitarnya ada pekerjaan lain yang sering dijumpai: mengonversi format, menggabung dan memisah PDF, serta merapikan foto.',
  values: [
    { title: "Cepat sejak awal", desc: "Setiap alat dibuat untuk memproses file dalam hitungan detik, bukan menit, tanpa antrean." },
    { title: "Privat sejak dirancang", desc: "File dienkripsi saat dikirim dan dihapus otomatis. Kami tidak pernah menjual atau meninjau data Anda." },
    { title: "AI yang benar-benar berguna", desc: "Alat AI yang menyelesaikan masalah nyata, seperti peningkatan, pemulihan, dan pembersihan gambar, bukan sekadar gimmick." },
  ],
  howHeading: "Cara kerjanya dan cara kami menangani file Anda",
  howP1:
    "Anda mengunggah file lewat browser, sebuah alat mengonversinya di server, lalu Anda mengunduh hasilnya. Saat ini ada {count} alat yang aktif, dan yang baru ditambahkan secara berkala. Jika AI benar-benar memperbaiki hasil, seperti meningkatkan foto beresolusi rendah, kami memakainya; jika tidak membantu, kami tidak menggunakannya.",
  howP2:
    'File asli dihapus segera setelah dibaca untuk konversi. Hasil konversi dihapus oleh pembersihan harian, biasanya dalam sekitar 24 jam. File diproses otomatis di server penyedia hosting kami (Vercel dan Supabase), tanpa tinjauan manusia. Rinciannya ada di <a href="/privacy">Kebijakan Privasi</a> dan di halaman <a href="/trust">Kepercayaan &amp; Keamanan</a>.',
  businessHeading: "Data usaha",
  contactHeading: "Hubungi kami",
  contactP1:
    'Punya masukan, kekhawatiran soal keamanan, atau alat yang ingin Anda lihat? Gunakan <a href="/contact">formulir kontak</a> atau kirim email ke <a href="mailto:hello@convertbrio.com">hello@convertbrio.com</a>. ConvertBrio juga ada di LinkedIn, Instagram, Facebook, dan Threads:',
  linkedinLine: '{name} juga ada di <a href="{url}" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
  servicesLine: '{name} juga menerima pekerjaan pengembangan untuk klien di <a href="https://convertbrio.info" target="_blank" rel="noopener">convertbrio.info</a>.',
  schemaName: "Tentang ConvertBrio",
};

export const aboutByLocale: Record<Locale, AboutStrings> = { en, pt, es, fr, de, it, id };
