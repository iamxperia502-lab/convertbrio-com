import type { ToolContentEntry } from "../toolContent";

// German (de) long-form tool content, slice A. Links point to the /de/ tool pages.

export const toolContentDeMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "HEIC in JPG umwandeln: iPhone-Fotos überall öffnen",
    intro: [
      "iPhones und iPads speichern Fotos standardmäßig als HEIC – ein Format, das hervorragend komprimiert, sich aber in vielen alltäglichen Programmen nicht öffnen lässt: von älteren Windows-PCs über manche Upload-Formulare bis zu Bildbearbeitungen. Der HEIC-in-JPG-Konverter von ConvertBrio löst das sofort: Du lädst das Foto hoch und bekommst ein Standard-JPG zurück, das sich in jedem Browser, jeder App und auf jedem Gerät ohne Plugin oder Codec-Paket öffnen lässt.",
      "Du musst weder etwas am Handy umstellen noch etwas installieren. Die Konvertierung läuft automatisch auf den Servern unserer Hosting-Anbieter, behält die ursprüngliche Auflösung des Fotos bei und bewahrt die Ausrichtung, damit Hochformatfotos nicht seitlich liegen. Das Ergebnis ist ein einfaches JPG, das du per E-Mail verschicken, in ein Behörden- oder Bewerbungsportal hochladen, in ein Dokument einfügen oder in jedem Bildeditor öffnen kannst.",
    ],
    howTo: [
      {
        step: "HEIC-Datei auf dein Gerät bringen",
        detail:
          "Übertrage das Foto per AirDrop, E-Mail oder Kabel vom iPhone oder lade es aus iCloud herunter. Die Datei endet auf .heic oder .heif.",
      },
      {
        step: "Im Konverter hochladen",
        detail: "Ziehe die Datei in das Upload-Feld oder suche sie über den Dateidialog. Ein Foto pro Vorgang, bis zu 100 MB.",
      },
      {
        step: "Auf Konvertieren klicken",
        detail:
          "ConvertBrio dekodiert das HEIC-Bild und kodiert es in voller Auflösung als JPG neu; die Drehung wird dabei anhand der eingebetteten Ausrichtungsangabe korrigiert.",
      },
      {
        step: "JPG herunterladen",
        detail: "Die konvertierte Datei wird automatisch heruntergeladen und lässt sich in jedem Browser, Betrachter, E-Mail-Programm und Upload-Formular öffnen.",
      },
    ],
    sections: [
      {
        heading: "Warum HEIC-Dateien Probleme machen",
        body: [
          "HEIC (High Efficiency Image Container) speichert ein Foto bei gleicher Qualität in etwa halb so viel Platz wie ein JPG – deshalb hat Apple es 2017 zum Standard in iOS gemacht. Der Preis dafür ist die Reichweite: HEIC setzt den HEVC-Codec voraus, den viele Websites, ältere Windows-Versionen, Android-Geräte und Apps von Drittanbietern entweder gar nicht oder nur uneinheitlich verarbeiten können.",
          "Wenn du ein iPhone-Foto in ein Formular hochgeladen und die Meldung „Dateityp wird nicht unterstützt“ erhalten hast, nur eine leere Vorschau gesehen hast oder jemand dir sagte, das Bild lasse sich nicht öffnen, liegt es fast immer an HEIC. Die Umwandlung in JPG beseitigt diese Abhängigkeit vollständig.",
        ],
      },
      {
        heading: "HEIC und JPG im Vergleich",
        body: "Beide Formate arbeiten verlustbehaftet, wurden aber im Abstand von rund 25 Jahren entwickelt und unterscheiden sich in dem, was sie unterstützen.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Dateigröße", "Bei gleicher Qualität ca. 50 % kleiner", "Größer, aber überall verstanden"],
            ["Kompatibilität", "Nur Apple-Geräte, neueste Browser und Betriebssysteme", "Jedes Gerät, jeder Browser, jede App und jedes Formular"],
            ["Transparenz", "Unterstützt", "Nicht unterstützt"],
            ["Mehrere Bilder / Tiefendaten", "Unterstützt (Live Photos, Porträt-Tiefe)", "Nur ein einzelnes flaches Bild"],
            ["Am besten für", "Speicherplatz auf Apple-Geräten", "Teilen, Hochladen und Bearbeiten an jedem Ort"],
          ],
        },
      },
      {
        heading: "Geht bei der Umwandlung Qualität verloren?",
        body: "Es gibt eine erneute Komprimierung, weil HEIC und JPG unterschiedliche Rechenverfahren nutzen. Bei der Standard-JPG-Qualität von ConvertBrio ist der Unterschied in normaler Ansicht oder im Ausdruck aber nicht sichtbar. Die Auflösung (Megapixel) des Fotos bleibt unverändert. Wenn du das Foto danach stark bearbeiten willst, konvertiere es stattdessen mit dem Bildkonverter in PNG, damit später nicht noch eine verlustbehaftete Runde dazukommt.",
      },
      {
        heading: "Mehrere iPhone-Fotos umwandeln",
        body: "Dieses Tool wandelt pro Upload eine HEIC-Datei um. Für viele Fotos ist der schnellste Weg, die iPhone-Kamera künftig auf JPG umzustellen (Einstellungen → Kamera → Formate → Maximale Kompatibilität) und diesen Konverter für die HEIC-Fotos zu nutzen, die schon in deiner Mediathek liegen. Um mehrere iPhone-Fotos nach der Umwandlung in einer Datei zu bündeln, nimmt Bild in PDF HEIC direkt entgegen und fasst mehrere Bilder in einem PDF zusammen.",
      },
      {
        heading: "Datenschutz",
        body: "Das Foto wird beim Übertragen verschlüsselt. Deine Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    relatedTools: [
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
      { label: "Bild in PDF", href: "/de/tools/image-to-pdf" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
      { label: "Bildgröße ändern", href: "/de/tools/resize-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von iPhone-HEIC-Fotos in JPG.",
    faq: [
      {
        question: "Warum lässt sich mein iPhone-Foto am Computer nicht öffnen?",
        answer:
          "Wahrscheinlich ist es als HEIC gespeichert, dem Standard-Fotoformat von Apple seit iOS 11. Viele Windows-PCs, Android-Handys, ältere Programme und Websites unterstützen HEIC nicht. Wenn du es mit ConvertBrio in JPG umwandelst, lässt es sich überall öffnen.",
      },
      {
        question: "Geht bei der Umwandlung von HEIC in JPG Qualität verloren?",
        answer:
          "Beim erneuten Kodieren als JPG gibt es eine geringe Nachkomprimierung, weil HEIC und JPG unterschiedliche Verfahren nutzen. Bei der Standardqualität von ConvertBrio ist sie in normaler Ansicht mit dem Auge nicht zu erkennen, und die Auflösung bleibt gleich.",
      },
      {
        question: "Wird mein Foto gedreht oder liegt es seitlich?",
        answer:
          "Nein. ConvertBrio liest die Ausrichtungsangabe der HEIC-Datei aus und übernimmt die richtige Drehung ins JPG, sodass Hoch- und Querformatfotos richtig herum ankommen.",
      },
      {
        question: "Kann ich HEIC auch in PNG statt in JPG umwandeln?",
        answer:
          "Ja. Nutze den allgemeinen Bildkonverter und wähle PNG als Ausgabeformat, wenn du eine verlustfreie Datei brauchst oder das Bild mehrfach bearbeiten willst und eine zweite verlustbehaftete Komprimierung vermeiden möchtest.",
      },
      {
        question: "Wie sorge ich dafür, dass mein iPhone keine HEIC-Fotos mehr aufnimmt?",
        answer:
          "Öffne auf dem iPhone Einstellungen → Kamera → Formate und wähle „Maximale Kompatibilität“. Neue Fotos werden dann als JPG gespeichert. Fotos, die bereits in deiner Mediathek liegen, bleiben HEIC und müssen weiterhin umgewandelt werden.",
      },
      {
        question: "Ist HEIF dasselbe wie HEIC?",
        answer:
          "Für diesen Zweck im Grunde ja. HEIF ist der Container-Standard; HEIC ist Apples Umsetzung davon mit HEVC-Komprimierung. Dieses Tool akzeptiert sowohl .heic- als auch .heif-Dateien.",
      },
    ],
  },

  "jpg-to-png": {
    title: "JPG in PNG umwandeln: Transparenz und verlustfreie Details",
    intro:
      "JPG eignet sich hervorragend für kleine, leicht teilbare Fotos, kann aber keine Transparenz speichern und verliert bei jedem erneuten Speichern etwas Qualität. Der JPG-in-PNG-Konverter von ConvertBrio macht aus deinem JPG in Sekunden ein verlustfreies PNG – das Format, das du brauchst, bevor du ein Bild weiter bearbeitest, auf einen farbigen Hintergrund setzt oder als Logo oder Icon verwendest.",
    sections: [
      {
        heading: "Wann sich die Umwandlung von JPG in PNG lohnt",
        body: "Wandle in PNG um, sobald du einen Alphakanal (Transparenz) brauchst, etwa um ein Logo freizustellen, oder wenn du ein Bild mehrfach bearbeiten willst und den Generationsverlust vermeiden möchtest, der beim wiederholten Speichern von JPGs entsteht. PNG ist außerdem die sicherere Wahl für Screenshots, Diagramme und alles mit scharfem Text oder harten Kanten, da die JPG-Komprimierung um feine Details herum Unschärfe und Artefakte erzeugen kann.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst dein JPG hoch, ConvertBrio dekodiert es und kodiert es als PNG neu, wobei jedes Pixel exakt erhalten bleibt. Da ein JPG von vornherein keine Transparenz speichert, hat das PNG einen deckenden Hintergrund, solange du ihn nicht separat entfernst: Die Umwandlung betrifft Format und Qualität, nicht das automatische Freistellen.",
      },
      {
        heading: "Mit welcher Dateigröße du rechnen kannst",
        body: "PNG-Dateien sind meist größer als das JPG, aus dem sie entstanden sind, weil PNG keine Daten verwirft wie die verlustbehaftete JPG-Komprimierung. Bei Fotos mit vielen Details oder Texturen kann das PNG ein Vielfaches der Größe des Original-JPGs haben – das ist der normale Preis für verlustfreie Qualität.",
      },
    ],
    relatedTools: [
      { label: "PNG in JPG", href: "/de/tools/png-to-jpg" },
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
      { label: "Bild zuschneiden", href: "/de/tools/crop-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von JPG-Bildern in PNG.",
    faq: [
      {
        question: "Fügt JPG in PNG automatisch Transparenz hinzu?",
        answer:
          "Nein. JPG-Dateien speichern keine Transparenz, daher entsteht beim Umwandeln in PNG ein deckendes Bild mit demselben Aussehen. PNG liefert dir lediglich ein verlustfreies Format als Grundlage, etwa um in einem Bildeditor weiterzuarbeiten oder Transparenz hinzuzufügen.",
      },
      {
        question: "Warum ist mein PNG so viel größer als das ursprüngliche JPG?",
        answer:
          "PNG nutzt verlustfreie Komprimierung, die jedes Pixel bewahrt, statt Details zu verwerfen wie JPG. Diese Genauigkeit kostet eine größere Datei – das ist zu erwarten und kein Zeichen für ein Problem.",
      },
      {
        question: "Ist PNG besser als JPG?",
        answer:
          "Keines von beiden ist pauschal besser: PNG eignet sich am besten für Grafiken, Logos und alles, was Transparenz oder verlustfreie Details braucht, während JPG bei Fotos die bessere Wahl ist, wenn eine kleine Dateigröße wichtiger ist als pixelgenaue Genauigkeit.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "JPG in WEBP umwandeln: Kleinere Dateien für schnellere Websites",
    intro:
      "WEBP wurde von Google gezielt entwickelt, damit Webseiten schneller laden; die Dateien sind bei gleicher optischer Qualität typischerweise 25–35 % kleiner als ein vergleichbares JPG. Der JPG-in-WEBP-Konverter von ConvertBrio kodiert dein Foto in Sekunden neu – ein schneller Gewinn für alle, die Bilder für eine Website, einen E-Mail-Newsletter oder eine App optimieren.",
    sections: [
      {
        heading: "Warum in WEBP umwandeln",
        body: "Wenn die Ladegeschwindigkeit zählt – für SEO, mobile Nutzer oder einfach eine flottere Seite –, ist WEBP einer der einfachsten Hebel. Es unterstützt denselben Qualitätsbereich wie JPG und erzeugt dabei spürbar kleinere Dateien; moderne Browser (Chrome, Firefox, Safari, Edge) stellen es alle nativ dar, sodass für die meisten Zielgruppen heute kein Kompatibilitätsnachteil entsteht.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst dein JPG hoch, und ConvertBrio wandelt es automatisch in WEBP um, behält dabei die Auflösung bei und wendet den Komprimierungsalgorithmus von WEBP statt dem von JPG an. Der Download steht nach wenigen Sekunden bereit und lässt sich direkt in den Bilderordner einer Website oder in ein Content-Management-System übernehmen.",
      },
      {
        heading: "Wann JPG trotzdem die bessere Wahl sein kann",
        body: "Wenn dein Bild in Software oder Umgebungen funktionieren muss, die WEBP nicht unterstützen – etwa manche ältere E-Mail-Programme, bestimmte Design-Tools oder Druck-Workflows –, halte zusätzlich eine JPG-Version bereit. Für den allgemeinen Webeinsatz ist WEBP jedoch der effizientere Standard.",
      },
    ],
    relatedTools: [
      { label: "PNG in WEBP", href: "/de/tools/png-to-webp" },
      { label: "WEBP in JPG", href: "/de/tools/webp-to-jpg" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von JPG-Bildern in WEBP.",
    faq: [
      {
        question: "Wie viel kleiner ist WEBP gegenüber JPG?",
        answer:
          "WEBP-Dateien sind typischerweise 25–35 % kleiner als ein optisch gleichwertiges JPG, weshalb es sich als Standardwahl für Website-Bilder durchgesetzt hat, wenn es auf die Ladegeschwindigkeit ankommt.",
      },
      {
        question: "Unterstützen alle Browser WEBP?",
        answer:
          "Ja, alle gängigen modernen Browser, darunter Chrome, Firefox, Safari und Edge, stellen WEBP nativ dar. Für die allgemeine Veröffentlichung im Web ist es heute unbedenklich.",
      },
      {
        question: "Sieht mein Bild nach der Umwandlung in WEBP anders aus?",
        answer:
          "Bei den Standardeinstellungen von ConvertBrio ist der optische Unterschied bei den meisten Fotos vernachlässigbar. Die Komprimierung von WEBP ist effizienter als die von JPG und erreicht dieselbe Qualität bei kleinerer Dateigröße.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "JPG in AVIF umwandeln: Bildkomprimierung der nächsten Generation",
    intro:
      "AVIF ist das effizienteste breit unterstützte Bildformat, das es derzeit gibt, und verkleinert ein JPG bei gleicher optischer Qualität oft um 50 % oder mehr. Der JPG-in-AVIF-Konverter von ConvertBrio übernimmt die Kodierung für dich und gibt Website-Betreibern und Entwicklern eine einfache Möglichkeit, das Format ohne Kommandozeilenwerkzeuge oder Build-Pipelines einzusetzen.",
    sections: [
      {
        heading: "Was AVIF besonders macht",
        body: "AVIF basiert auf der Bildkomprimierungstechnik des AV1-Videocodecs, die deutlich fortschrittlicher ist als die von JPG. In der Praxis heißt das: AVIF-Dateien können drastisch kleiner sein als JPG und trotzdem genauso gut aussehen – ein Gewinn für jede Seite, die ihr Seitengewicht senken und die Ladezeiten verbessern will.",
      },
      {
        heading: "So wandelst du JPG in AVIF um",
        body: "Du lädst deine JPG-Datei hoch, und ConvertBrio liefert eine AVIF-Version in derselben Auflösung. Es ist keine Software nötig, und das Ergebnis wird nach der Verarbeitung automatisch heruntergeladen.",
      },
      {
        heading: "Unterstützung in Browsern und Programmen",
        body: "Alle gängigen modernen Browser können AVIF anzeigen, einige ältere Programme, Bildeditoren und soziale Plattformen akzeptieren es aber noch nicht als Upload. Wenn du auf deiner eigenen Website veröffentlichst, ist AVIF in der Regel unbedenklich; lädst du an einer Stelle mit unbekannter Kompatibilität hoch, halte ein JPG oder WEBP als Ausweichlösung bereit.",
      },
    ],
    relatedTools: [
      { label: "PNG in AVIF", href: "/de/tools/png-to-avif" },
      { label: "AVIF in JPG", href: "/de/tools/avif-to-jpg" },
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von JPG-Bildern in AVIF.",
    faq: [
      {
        question: "Ist AVIF besser als WEBP?",
        answer:
          "AVIF komprimiert im Allgemeinen effizienter als WEBP und erzeugt bei gleicher Qualität oft kleinere Dateien. WEBP hat etwas breitere Unterstützung in älteren Systemen, doch für moderne Browser ist AVIF hinsichtlich der Dateigröße meist die bessere Wahl.",
      },
      {
        question: "Kann jede Website AVIF-Bilder verwenden?",
        answer:
          "Alle gängigen modernen Browser können AVIF anzeigen, einige Content-Management-Systeme, Werbenetzwerke und ältere Werkzeuge akzeptieren AVIF-Uploads aber noch nicht. Wenn es beim Hochladen Probleme gibt, prüfe die Anforderungen deiner Plattform.",
      },
      {
        question: "Wie viel kleiner wird meine Datei?",
        answer:
          "Das Ergebnis hängt vom Bild ab, aber AVIF senkt die Dateigröße gegenüber einem gleich guten JPG häufig um 50 % oder mehr und zählt damit zu den wirksamsten Formaten, um das Seitengewicht zu verringern.",
      },
    ],
  },

  "png-to-jpg": {
    title: "PNG in JPG umwandeln: Bilder für Web und E-Mail verkleinern",
    intro:
      "PNG-Dateien bewahren jedes Pixel, was für Grafiken ideal ist, bei Fotos aber oft übertrieben – die Dateien sind dann viel größer als nötig. Der PNG-in-JPG-Konverter von ConvertBrio komprimiert dein Bild zu einem kleineren, leichter teilbaren JPG, ideal für E-Mail-Anhänge, Webseiten und überall dort, wo Upload-Limits eine Rolle spielen.",
    sections: [
      {
        heading: "Wann sich PNG in JPG lohnt",
        body: "Ist dein PNG ein Foto (und keine Grafik mit Transparenz oder scharfem Text), schrumpft die Datei durch die Umwandlung in JPG fast immer deutlich, ohne sichtbaren Qualitätsverlust. Das ist besonders nützlich bei E-Mail-Anhängen mit Größenbeschränkung, bei Webseiten, auf denen die Ladegeschwindigkeit zählt, oder bei jedem Upload-Formular, das große Dateien ablehnt.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst das PNG hoch, und ConvertBrio kodiert es in der Standardqualität als JPG neu, die eine kleine Dateigröße mit optischer Treue ausbalanciert. Da JPG keine Transparenz unterstützt, werden transparente Bereiche des ursprünglichen PNGs im Ergebnis mit einem einfarbigen Hintergrund gefüllt.",
      },
      {
        heading: "Was verloren geht (und was nicht)",
        body: "Die Umwandlung in JPG verwirft Transparenz und wendet verlustbehaftete Komprimierung an; für Logos oder Grafiken, die einen transparenten Hintergrund brauchen, ist sie daher nicht geeignet. Bei normalen Fotos fällt die Komprimierung kaum auf, und die Dateigröße sinkt meist erheblich – oft auf 50–80 % weniger als das ursprüngliche PNG.",
      },
    ],
    relatedTools: [
      { label: "JPG in PNG", href: "/de/tools/jpg-to-png" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
      { label: "Bildgröße ändern", href: "/de/tools/resize-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von PNG-Bildern in JPG.",
    faq: [
      {
        question: "Warum ist meine PNG-Datei so groß?",
        answer:
          "PNG nutzt verlustfreie Komprimierung, speichert also jedes Pixel exakt, statt Details zu verwerfen wie JPG. Das macht PNG ideal für Grafiken, aber bei normalen Fotos oft viel größer als nötig.",
      },
      {
        question: "Was passiert mit transparenten Bereichen bei der Umwandlung in JPG?",
        answer:
          "JPG unterstützt keine Transparenz, daher werden transparente Teile deines PNGs in der konvertierten Datei mit einer einfarbigen Fläche (meist Weiß) gefüllt.",
      },
      {
        question: "Wie viel kleiner wird das JPG?",
        answer:
          "Das hängt vom Bild ab, aber Fotos schrumpfen bei der Umwandlung von PNG in JPG in der Standardqualität typischerweise um 50–80 %, da die JPG-Komprimierung gezielt auf fotografische Inhalte abgestimmt ist.",
      },
    ],
  },

  "png-to-webp": {
    title: "PNG in WEBP umwandeln: Verlustfreundliche Komprimierung fürs Web",
    intro:
      "WEBP unterstützt sowohl verlustbehaftete als auch verlustfreie Komprimierung und kann daher PNG bei Grafiken mit Transparenz ersetzen und die Dateigröße dabei deutlich senken. Der PNG-in-WEBP-Konverter von ConvertBrio kodiert dein Bild in Sekunden neu und behält die Transparenz bei, wo das ursprüngliche PNG sie hatte.",
    sections: [
      {
        heading: "Warum WEBP bei der Dateigröße PNG schlägt",
        body: "Selbst im verlustfreien Modus komprimiert WEBP in der Regel effizienter als PNG und erzeugt aus demselben Ausgangsbild kleinere Dateien. Für Grafiken, Icons und Screenshots, die auf eine Website kommen, bedeutet das unmittelbar schnellere Ladezeiten, ohne auf Transparenz oder exakte Details zu verzichten.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst dein PNG hoch, und ConvertBrio wandelt es automatisch in WEBP um. Transparente Bereiche der Originaldatei bleiben im WEBP erhalten, sodass Logos und Icons mit Alphakanal sauber konvertiert werden, ohne dass du sie nachbearbeiten musst.",
      },
      {
        heading: "Wo du das Ergebnis einsetzen kannst",
        body: "WEBP wird von allen gängigen modernen Browsern nativ unterstützt und ist damit eine sichere Standardwahl für Website-Bilder, Favicons und UI-Grafiken. Brauchst du die Datei für den Druck, für ältere Software oder für eine Plattform mit unklarer WEBP-Unterstützung, bewahre das ursprüngliche PNG als Sicherung auf.",
      },
    ],
    relatedTools: [
      { label: "JPG in WEBP", href: "/de/tools/jpg-to-webp" },
      { label: "WEBP in PNG", href: "/de/tools/webp-to-png" },
      { label: "PNG in AVIF", href: "/de/tools/png-to-avif" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von PNG-Bildern in WEBP.",
    faq: [
      {
        question: "Bleibt die Transparenz erhalten, wenn ich PNG in WEBP umwandle?",
        answer:
          "Ja. WEBP unterstützt wie PNG einen Alphakanal, daher wird jeder transparente Hintergrund deiner Originaldatei in das konvertierte WEBP-Bild übernommen.",
      },
      {
        question: "Ist WEBP immer kleiner als PNG?",
        answer:
          "In der Regel ja: Auch im verlustfreien Modus komprimiert WEBP im Allgemeinen effizienter als PNG, sodass die meisten Bilder nach der Umwandlung spürbar schrumpfen.",
      },
      {
        question: "Kann ich das WEBP später wieder in PNG umwandeln?",
        answer:
          "Ja. Nutze jederzeit den WEBP-in-PNG-Konverter von ConvertBrio, wenn du die Datei wieder als PNG für Software brauchst, die WEBP nicht unterstützt.",
      },
    ],
  },

  "png-to-avif": {
    title: "PNG in AVIF umwandeln: Maximale Komprimierung für Grafiken",
    intro:
      "AVIF kann Grafiken und Fotos weit stärker komprimieren als PNG und unterstützt dabei weiterhin Transparenz – damit zählt es heute zu den platzsparendsten Formaten für Webbilder. Der PNG-in-AVIF-Konverter von ConvertBrio erledigt die Umwandlung sofort, ganz ohne Kodierungssoftware.",
    sections: [
      {
        heading: "Warum AVIF statt PNG",
        body: "Die verlustfreie Komprimierung von PNG hält Dateien für viele Einsatzzwecke größer als nötig. AVIF, das auf moderner Videocodec-Komprimierung beruht, kann dasselbe Bild drastisch verkleinern, manchmal um 80 % oder mehr, und bewahrt dabei Transparenz und Bildqualität – ein großer Gewinn für die Performance einer Website.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst deine PNG-Datei hoch, und ConvertBrio liefert eine AVIF-Version, die Transparenz und Auflösung beibehält. Die Konvertierung läuft automatisch auf den Servern unserer Hosting-Anbieter und ist bei typischen Bildgrößen in Sekunden abgeschlossen.",
      },
      {
        heading: "Hinweise zur Kompatibilität",
        body: "AVIF wird in allen aktuellen Versionen von Chrome, Firefox, Safari und Edge korrekt angezeigt. Einige ältere Werkzeuge, E-Mail-Programme und Design-Software unterstützen es womöglich noch nicht, daher eignet es sich am besten für den direkten Einsatz auf Websites und weniger für Dateien, die du an Drittsysteme mit unbekannter Kompatibilität weitergibst.",
      },
    ],
    relatedTools: [
      { label: "PNG in WEBP", href: "/de/tools/png-to-webp" },
      { label: "AVIF in PNG", href: "/de/tools/avif-to-png" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von PNG-Bildern in AVIF.",
    faq: [
      {
        question: "Unterstützt AVIF transparente Hintergründe?",
        answer:
          "Ja, AVIF unterstützt einen Alphakanal, daher wird die Transparenz deines ursprünglichen PNGs korrekt in die konvertierte AVIF-Datei übernommen.",
      },
      {
        question: "Wie viel kleiner wird meine AVIF-Datei?",
        answer:
          "Das Ergebnis hängt vom Bildinhalt ab, aber AVIF verkleinert PNG-Dateien häufig um 70–80 % oder mehr und ist damit eines der effizientesten Formate, die derzeit für das Web zur Verfügung stehen.",
      },
      {
        question: "Sollte ich für meine Website AVIF oder WEBP verwenden?",
        answer:
          "AVIF komprimiert meist besser, daher lohnt es sich überall dort, wo deine Plattform es unterstützt. WEBP bleibt eine solide, etwas breiter kompatible Alternative, falls du bei AVIF auf Upload-Beschränkungen stößt.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "WEBP in JPG umwandeln: WEBP-Bilder überall öffnen",
    intro:
      "WEBP-Bilder, die du von Websites herunterlädst, öffnen sich nicht immer sauber in älteren Fotobetrachtern, manchen Design-Tools oder Apps, die ein Standardformat erwarten. Der WEBP-in-JPG-Konverter von ConvertBrio macht aus jeder WEBP-Datei ein JPG, das überall aufgeht – ohne Rätselraten bei der Kompatibilität.",
    sections: [
      {
        heading: "Warum sich WEBP-Dateien manchmal nicht öffnen lassen",
        body: "WEBP ist ein relativ junges Format, und obwohl Browser es durchweg unterstützen, erkennen es manche Desktop-Fotobetrachter, ältere Versionen von Bildeditoren und bestimmte Apps noch immer nicht. Wenn du ein Bild von einer Website gespeichert hast und es sich dort nicht öffnen lässt, wo du es erwartest, ist die Umwandlung in JPG die schnellste Lösung.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst deine WEBP-Datei hoch, und ConvertBrio dekodiert sie und kodiert sie als JPG neu. Das Ergebnis öffnet sich in jedem Browser, Fotobetrachter und Bearbeitungsprogramm und ist damit das sicherste Format, um es breit zu teilen oder an eine E-Mail anzuhängen.",
      },
      {
        heading: "Was dich erwartet",
        body: "Hatte das ursprüngliche WEBP einen transparenten Hintergrund, wird die Transparenz im JPG mit einer einfarbigen Fläche gefüllt, da JPG keine Alphakanäle unterstützt. Bei normalen Fotos und Webbildern ohne Transparenz verläuft die Umwandlung optisch nahtlos.",
      },
    ],
    relatedTools: [
      { label: "WEBP in PNG", href: "/de/tools/webp-to-png" },
      { label: "JPG in WEBP", href: "/de/tools/jpg-to-webp" },
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von WEBP-Bildern in JPG.",
    faq: [
      {
        question: "Warum kann ich eine WEBP-Datei auf meinem Computer nicht öffnen?",
        answer:
          "Manche ältere Fotobetrachter, Bildeditoren und Betriebssystemversionen unterstützen WEBP nicht nativ, obwohl jeder moderne Browser es tut. Die Umwandlung in JPG löst das Problem sofort.",
      },
      {
        question: "Verliere ich bei WEBP in JPG die Transparenz?",
        answer:
          "Ja, JPG unterstützt keine Transparenz, daher erscheinen transparente Bereiche des ursprünglichen WEBPs in der konvertierten Datei als einfarbige Fläche. Nutze WEBP in PNG, wenn du die Transparenz behalten willst.",
      },
      {
        question: "Kann ich das konvertierte JPG bedenkenlos teilen oder hochladen?",
        answer:
          "Ja, JPG ist das am universellsten kompatible Bildformat, die konvertierte Datei lässt sich daher in praktisch jeder App, auf jedem Gerät und in jedem Upload-Formular öffnen.",
      },
    ],
  },

  "webp-to-png": {
    title: "WEBP in PNG umwandeln: Transparenz und Qualität bewahren",
    intro:
      "Hat ein WEBP-Bild einen transparenten Hintergrund – ein Logo, ein Icon oder eine exportierte Grafik –, kommt die Umwandlung in JPG nicht infrage. Der WEBP-in-PNG-Konverter von ConvertBrio bewahrt diese Transparenz und liefert eine verlustfreie Datei, die in Design-Tools, älterer Software und überall dort funktioniert, wo PNG erwartet wird.",
    sections: [
      {
        heading: "Wann PNG die bessere Wahl gegenüber JPG ist",
        body: "Enthält deine WEBP-Datei transparente oder halbtransparente Pixel, ist die Umwandlung in PNG genau richtig: Von den beiden gängigen Formaten ist es das einzige, das einen Alphakanal erhält. PNG ist auch die sicherere Wahl, wenn du das Bild weiter bearbeiten willst, da es keine Kompressionsartefakte einführt.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst die WEBP-Datei hoch, und ConvertBrio wandelt sie in ein verlustfreies PNG um, wobei Transparenz und Auflösung exakt so bleiben, wie sie waren. Das funktioniert unabhängig davon, ob das WEBP verlustbehaftet oder verlustfrei war: Das PNG bewahrt stets alle Details des dekodierten Bildes.",
      },
      {
        heading: "Überlegungen zur Dateigröße",
        body: "PNG-Dateien sind in der Regel größer als WEBP, weil die Komprimierung von WEBP effizienter ist. Bei Grafiken und Icons ist der Unterschied meist gering; bei großen Fotos kann das PNG spürbar größer sein – ein vertretbarer Kompromiss, wenn Transparenz oder verlustfreie Qualität Vorrang haben.",
      },
    ],
    relatedTools: [
      { label: "WEBP in JPG", href: "/de/tools/webp-to-jpg" },
      { label: "PNG in WEBP", href: "/de/tools/png-to-webp" },
      { label: "Bild zuschneiden", href: "/de/tools/crop-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von WEBP-Bildern in PNG.",
    faq: [
      {
        question: "Bleibt bei WEBP in PNG der transparente Hintergrund erhalten?",
        answer:
          "Ja. Hat deine WEBP-Datei Transparenz, bewahrt ConvertBrio sie im konvertierten PNG exakt, da beide Formate Alphakanäle unterstützen.",
      },
      {
        question: "Sollte ich für meine WEBP-Datei PNG oder JPG verwenden?",
        answer:
          "Wähle PNG, wenn das Bild Transparenz hat oder du es weiter bearbeiten willst. Wähle JPG, wenn es ein einfaches Foto ist und du die kleinstmögliche Datei zum Teilen brauchst.",
      },
      {
        question: "Ändert sich die Bildqualität?",
        answer:
          "Nein, PNG ist ein verlustfreies Format, daher gehen bei der Umwandlung von WEBP in PNG keine weiteren Details verloren, die nicht schon in der ursprünglichen WEBP-Datei fehlten.",
      },
    ],
  },

  "webp-to-avif": {
    title: "WEBP in AVIF umwandeln: Noch mehr Komprimierung herausholen",
    intro:
      "AVIF übertrifft WEBP bei der Komprimierungseffizienz häufig, sodass das erneute Kodieren eines vorhandenen WEBP-Bildes als AVIF es ohne sichtbaren Qualitätsverlust weiter verkleinern kann. Der WEBP-in-AVIF-Konverter von ConvertBrio nimmt diesen Wechsel in einem Schritt vor.",
    sections: [
      {
        heading: "Warum WEBP als AVIF neu kodieren",
        body: "Wenn du WEBP bereits für die Web-Performance nutzt, lohnt es sich, AVIF als nächsten Schritt auszuprobieren: Es komprimiert dasselbe Ausgangsbild meist besser, besonders bei Fotos und komplexen Grafiken. Am deutlichsten ist der Unterschied bei größeren, detailreichen Bildern.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst deine WEBP-Datei hoch, und ConvertBrio dekodiert sie und kodiert sie als AVIF neu, wobei eine vorhandene Transparenz erhalten bleibt. Das Ergebnis wird automatisch heruntergeladen und lässt sich überall verwenden, wo deine Plattform AVIF-Bilder akzeptiert.",
      },
      {
        heading: "Was du vor dem Umstieg prüfen solltest",
        body: "AVIF wird von allen aktuellen gängigen Browsern unterstützt, doch prüfe, ob dein Content-Management-System und alle Drittwerkzeuge in deinem Workflow AVIF-Uploads akzeptieren, bevor du WEBP auf der gesamten Website ersetzt. Bei privaten Projekten und modernen Websites verläuft der Umstieg meist reibungslos.",
      },
      {
        heading: "Limits und Datenschutz",
        body: "Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    relatedTools: [
      { label: "JPG in AVIF", href: "/de/tools/jpg-to-avif" },
      { label: "AVIF in WEBP", href: "/de/tools/avif-to-webp" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von WEBP-Bildern in AVIF.",
    faq: [
      {
        question: "Lohnt sich die Umwandlung von WEBP in AVIF?",
        answer:
          "Wenn dein Ziel die kleinstmögliche Dateigröße ist und deine Plattform AVIF unterstützt, ja: AVIF komprimiert dasselbe Bild oft besser als WEBP, vor allem bei Fotos.",
      },
      {
        question: "Bleibt die Transparenz bei der Umwandlung erhalten?",
        answer:
          "Ja, AVIF unterstützt Transparenz genau wie WEBP, daher bleibt jeder Alphakanal deiner Originaldatei im konvertierten Bild erhalten.",
      },
      {
        question: "Kann ich bei Bedarf zurück in WEBP umwandeln?",
        answer:
          "Ja, mit dem Bildkonverter von ConvertBrio kannst du jederzeit von AVIF zurück zu WEBP oder in jedes andere unterstützte Format wechseln.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "AVIF in JPG umwandeln: AVIF-Bilder überall öffnen",
    intro:
      "Die effiziente Komprimierung macht AVIF ideal für moderne Websites, doch viele Apps, ältere Geräte und Fototools können es noch immer nicht öffnen. Der AVIF-in-JPG-Konverter von ConvertBrio dekodiert das Bild und speichert es als JPG, das in praktisch jeder Software funktioniert, der du begegnest.",
    sections: [
      {
        heading: "Warum AVIF in JPG umwandeln",
        body: "Wenn sich eine AVIF-Datei in deinem Fotobetrachter, deiner Bearbeitungssoftware oder dem Upload-Formular einer Website nicht öffnen lässt, ist JPG der sicherste Ausweg: Es wird praktisch überall unterstützt, von jahrzehntealter Software bis zu den neuesten Geräten. Das ist der häufigste Grund, warum Menschen AVIF umwandeln.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst die AVIF-Datei hoch, ConvertBrio dekodiert sie und kodiert das Bild in voller Auflösung als JPG neu. Der Download steht nach wenigen Sekunden bereit und öffnet sich sofort in jedem Browser, Betrachter oder Bearbeitungsprogramm.",
      },
      {
        heading: "Was sich bei der Umwandlung ändert",
        body: "JPG unterstützt keine Transparenz; hatte die AVIF-Datei einen transparenten Hintergrund, wird er im Ergebnis mit einer einfarbigen Fläche gefüllt. Bei normalen Fotos ohne Transparenz ist das optische Ergebnis praktisch identisch mit der Quelle.",
      },
    ],
    relatedTools: [
      { label: "AVIF in PNG", href: "/de/tools/avif-to-png" },
      { label: "AVIF in WEBP", href: "/de/tools/avif-to-webp" },
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von AVIF-Bildern in JPG.",
    faq: [
      {
        question: "Warum lässt sich meine AVIF-Datei nicht öffnen?",
        answer:
          "AVIF ist ein neueres Format, und obwohl moderne Browser es unterstützen, tun das viele ältere Apps, Fotobetrachter und manche Bearbeitungsprogramme noch nicht. Die Umwandlung in JPG macht die Datei sofort überall öffnbar.",
      },
      {
        question: "Verliert das Bild bei der Umwandlung in JPG an Qualität?",
        answer:
          "Es gibt eine geringe Nachkomprimierung, da AVIF und JPG unterschiedliche Algorithmen nutzen, doch bei der Standardqualität von ConvertBrio ist sie im normalen Gebrauch nicht sichtbar.",
      },
      {
        question: "Kann ich AVIF stattdessen in PNG umwandeln?",
        answer:
          "Ja, nutze den AVIF-in-PNG-Konverter, wenn du eine verlustfreie Datei brauchst oder Transparenz erhalten willst, die ein JPG nicht speichern kann.",
      },
    ],
  },

  "avif-to-png": {
    title: "AVIF in PNG umwandeln: Verlustfrei und mit erhaltener Transparenz",
    intro:
      "Hat ein AVIF-Bild einen transparenten Hintergrund oder brauchst du pixelgenaue Genauigkeit für die weitere Bearbeitung, ist PNG das richtige Zielformat. Der AVIF-in-PNG-Konverter von ConvertBrio dekodiert deine Datei und erzeugt in Sekunden ein verlustfreies PNG, wobei jede Transparenz vollständig erhalten bleibt.",
    sections: [
      {
        heading: "Wann PNG die bessere Wahl ist",
        body: "Wähle PNG statt JPG, wenn das Quell-AVIF Transparenz, scharfen Text oder feine Details enthält, die durch verlustbehaftete Komprimierung nicht weicher werden sollen. Es ist außerdem das sicherere Zwischenformat, wenn du das Bild zur weiteren Bearbeitung in einem Design-Tool öffnen willst.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst deine AVIF-Datei hoch, und ConvertBrio dekodiert sie und kodiert sie als verlustfreies PNG neu, wobei Auflösung, Farbe und Transparenz exakt so erhalten bleiben, wie sie in der Originaldatei waren.",
      },
      {
        heading: "Zu erwartende Dateigröße",
        body: "Da PNG nicht so stark komprimiert wie AVIF, ist die konvertierte Datei in der Regel spürbar größer als die Quelle, oft um ein Vielfaches. Dieser Kompromiss ist zu erwarten und bringt dafür eine verlustfreie, breit kompatible Ausgabe.",
      },
      {
        heading: "Limits und Datenschutz",
        body: "Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    relatedTools: [
      { label: "AVIF in JPG", href: "/de/tools/avif-to-jpg" },
      { label: "PNG in AVIF", href: "/de/tools/png-to-avif" },
      { label: "Bildgröße ändern", href: "/de/tools/resize-image" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von AVIF-Bildern in PNG.",
    faq: [
      {
        question: "Bleibt bei AVIF in PNG die Transparenz erhalten?",
        answer:
          "Ja. Hat deine AVIF-Datei einen Alphakanal, übernimmt ConvertBrio diese Transparenz exakt in das konvertierte PNG.",
      },
      {
        question: "Warum ist meine PNG-Datei viel größer als das AVIF?",
        answer:
          "PNG ist ein verlustfreies Format und komprimiert nicht so effizient wie AVIF, daher ist eine größere Datei nach der Umwandlung normal und zu erwarten.",
      },
      {
        question: "Ist PNG ein gutes Format, um Bilder weiter zu bearbeiten?",
        answer:
          "Ja, da PNG keine verlustbehaftete Komprimierung anwendet, ist es ein sichereres Zwischenformat als JPG oder AVIF, wenn du eine Datei in einem Editor öffnen und mehrfach neu speichern willst.",
      },
    ],
  },

  "avif-to-webp": {
    title: "AVIF in WEBP umwandeln: Mehr Kompatibilität bei hoher Effizienz",
    intro:
      "WEBP wird in älteren Werkzeugen und auf älteren Plattformen etwas breiter unterstützt als AVIF und bietet dennoch eine starke Komprimierung – ein praktischer Mittelweg, wenn AVIF nicht überall funktioniert. Der AVIF-in-WEBP-Konverter von ConvertBrio erledigt den Wechsel sofort.",
    sections: [
      {
        heading: "Warum AVIF in WEBP umwandeln",
        body: "Wenn eine Plattform, ein Plugin oder eine Software AVIF-Uploads ablehnt, aber WEBP akzeptiert, ist die Umwandlung die schnellste Lösung: Du behältst den größten Teil des Effizienzvorteils von AVIF und gewinnst breitere Kompatibilität. Das kommt häufig bei älteren Content-Management-Systemen oder Integrationen von Drittanbietern vor.",
      },
      {
        heading: "So funktioniert die Umwandlung",
        body: "Du lädst deine AVIF-Datei hoch, und ConvertBrio dekodiert sie und kodiert sie als WEBP neu, wobei Transparenz und Auflösung erhalten bleiben. Der Vorgang ist in Sekunden abgeschlossen, und die Datei wird automatisch heruntergeladen.",
      },
      {
        heading: "Kompromisse bei der Komprimierung",
        body: "WEBP-Dateien sind bei gleicher optischer Qualität typischerweise etwas größer als das entsprechende AVIF, da die Komprimierung von AVIF im Allgemeinen fortschrittlicher ist. Der Unterschied ist meist so klein, dass sich der Gewinn an Kompatibilität für die meisten Einsatzzwecke lohnt.",
      },
      {
        heading: "Limits und Datenschutz",
        body: "Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    relatedTools: [
      { label: "WEBP in AVIF", href: "/de/tools/webp-to-avif" },
      { label: "AVIF in JPG", href: "/de/tools/avif-to-jpg" },
      { label: "Bildkonverter", href: "/de/tools/image-converter" },
    ],
    faqDescription: "Häufige Fragen zur Umwandlung von AVIF-Bildern in WEBP.",
    faq: [
      {
        question: "Warum sollte ich AVIF in WEBP umwandeln, statt AVIF zu behalten?",
        answer:
          "Manche Plattformen und älteren Werkzeuge akzeptieren WEBP, aber kein AVIF. Die Umwandlung verschafft dir breitere Kompatibilität und erhält dabei den größten Teil des Dateigrößenvorteils, mit dem AVIF angefangen hat.",
      },
      {
        question: "Wird die Datei nach der Umwandlung größer?",
        answer:
          "In den meisten Fällen etwas: Die Komprimierung von WEBP ist ein wenig weniger effizient als die von AVIF, rechne also mit einem moderaten, nicht mit einem dramatischen Größenzuwachs.",
      },
      {
        question: "Bleibt die Transparenz von AVIF in WEBP erhalten?",
        answer:
          "Ja, beide Formate unterstützen Alphakanäle, daher bleibt jede Transparenz deiner ursprünglichen AVIF-Datei im konvertierten WEBP erhalten.",
      },
    ],
  },

  "resize-image": {
    title: "Wie verkleinere ich die Pixelgröße eines Fotos?",
    intro: [
      "Gib die größte Breite und Höhe an, die du haben möchtest (in Pixeln), und ConvertBrio skaliert das Foto so herunter, dass es in diese Maße passt. Die Pixelgröße ist die Anzahl der Pixel in der Breite und Höhe eines Bildes (zum Beispiel 4000 × 3000). Wird sie verringert, erscheint das Bild auf dem Bildschirm kleiner, und auch die Dateigröße sinkt – ganz ohne Design-Software.",
      "Das Tool behält die Proportionen des Fotos bei, kann das Bild also weder strecken noch stauchen, und es verkleinert Bilder nur: Ein Foto wird nicht über seine Originalgröße hinaus vergrößert. Brauchst du eine exakte Breite und Höhe, die von der Form des Fotos abweicht, oder eine Höchstgröße in KB, nutze Foto & Unterschrift anpassen. Um ein kleines Foto zu vergrößern, nimm den KI-Hochskalierer.",
    ],
    howTo: [
      {
        step: "Bild hochladen",
        detail: "JPG, PNG, WEBP, HEIC, AVIF oder GIF, bis zu 100 MB.",
      },
      {
        step: "Breite, Höhe oder beides eingeben",
        detail:
          "Gib die gewünschte Pixelgröße ein. Du kannst auch nur einen Wert ausfüllen: Lässt du den anderen leer, wird er aus den Proportionen des Fotos berechnet. Füllst du beide aus, wird das Foto so skaliert, dass es in dieses Feld passt.",
      },
      {
        step: "Größe ändern und herunterladen",
        detail: "ConvertBrio skaliert das Bild herunter, und die Datei wird automatisch heruntergeladen.",
      },
      {
        step: "Ergebnis prüfen",
        detail:
          "Öffne die heruntergeladene Datei und sieh dir ihre Abmessungen an (unter Windows Rechtsklick > Eigenschaften, am Mac „Informationen“). Zoome auf 100 %, um zu prüfen, ob sie noch scharf aussieht.",
      },
    ],
    sections: [
      {
        heading: "Häufige Maße, auf die Nutzer verkleinern",
        body: "Wenn du nicht sicher bist, welche Größe du brauchst, findest du hier die Angaben, für die die meisten herkommen.",
        table: {
          headers: ["Verwendung", "Typische Größe (px)"],
          rows: [
            ["Instagram-Beitrag (quadratisch)", "1080 × 1080"],
            ["Instagram-Story / Reel", "1080 × 1920"],
            ["Auf Facebook / LinkedIn geteiltes Bild", "1200 × 630"],
            ["YouTube-Vorschaubild", "1280 × 720"],
            ["LinkedIn-Profilfoto", "400 × 400 (mindestens)"],
            ["Passfoto (2 × 2 Zoll bei 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Beispiel: von 4000 × 3000 auf 1200 × 900",
        body: "Ein typisches Handyfoto hat 4000 × 3000 Pixel (Seitenverhältnis 4:3). Um es auf 1200 Pixel Breite zu bringen, trägst du 1200 in das Breitenfeld ein und lässt die Höhe leer: Die Höhe wird mit 900 berechnet, das Ergebnis ist 1200 × 900. Gibst du stattdessen 1200 × 1200 ein, wird das Foto so skaliert, dass es in dieses Quadrat passt – das ergibt wieder 1200 × 900 und kein gestrecktes Quadrat. Die neue Datei hat 9-mal weniger Pixel und ist daher viel kleiner zu speichern und zu versenden.",
      },
      {
        heading: "Wie ändere ich die Bildgröße, ohne das Bild zu strecken?",
        body: [
          "Verzerrungen entstehen, wenn ein Tool ein Foto in einen Rahmen mit anderer Form zwingt, sodass ein Gesicht oder ein Kreis oval wird. Dieses Tool vermeidet das, indem es das ursprüngliche Seitenverhältnis (die Proportion von Breite zu Höhe) beibehält: Das Ergebnis passt in die eingegebene Breite und Höhe, und das jeweils andere Maß wird für dich berechnet.",
          "Das heißt, das Ergebnis kann in einer Richtung kleiner ausfallen als der eingegebene Rahmen. Verlangt ein Formular eine exakte Form wie 600 × 600, schneide das Foto zuerst mit dem Tool Bild zuschneiden quadratisch zu und ändere dann die Größe. Das Zuschneiden entfernt die Ränder; die reine Größenänderung tut das nie. Für exakte Breite und Höhe in einem Schritt, wahlweise mit Zuschnitt oder weißen Rändern, nutze Foto & Unterschrift anpassen.",
        ],
        table: {
          headers: ["Ausgangsgröße 4000 × 3000", "Ergebnis", "Sieht es richtig aus?"],
          rows: [
            ["Breite 1200, Höhe leer", "1200 × 900", "Ja: Proportionen bleiben erhalten"],
            ["Breite 1200, Höhe 1200", "1200 × 900", "Ja: passt in den Rahmen, nicht gestreckt"],
            ["Quadratisch zuschneiden, dann auf 1200 × 1200 verkleinern", "1200 × 1200", "Ja: Ränder abgeschnitten, nichts verzerrt"],
            ["1200 × 1200 ohne Zuschnitt erzwingen (andere Tools)", "1200 × 1200", "Nein: das Bild wird gestaucht"],
          ],
        },
      },
      {
        heading: "Ist weniger Pixel dasselbe wie weniger Dateigröße?",
        body: [
          "Beides hängt zusammen, ist aber nicht dasselbe. Die Pixelgröße gibt an, wie viele Pixel das Bild hat. Die Dateigröße gibt an, wie viele Bytes es belegt, und sie hängt von der Pixelanzahl und davon ab, wie stark das Bild komprimiert ist. Weniger Pixel bedeuten meist eine kleinere Datei, doch halbierst du beide Maße, wird die Datei nicht exakt auf ein Viertel kleiner, weil auch Komprimierung und Bildinhalt eine Rolle spielen.",
          "Entscheide nach deinem Ziel: Um ein Maß auf einer Seite oder die von einer Plattform geforderten Abmessungen zu erreichen, ändere die Größe. Um unter ein Upload-Limit in KB oder MB zu kommen, komprimiere – oder verkleinere zuerst und schicke das Bild dann für den letzten Feinschliff durch Bild komprimieren. Wenn du zuerst verkleinerst, muss der Kompressor weniger leisten, und die Qualität bleibt besser erhalten. Um eine exakte Pixelgröße und ein KB-Limit gleichzeitig zu erreichen, nutze Foto & Unterschrift anpassen.",
        ],
      },
      {
        heading: "Fehlerbehebung",
        list: [
          "Das Foto ist nicht größer geworden: Dieses Tool verkleinert nur. Zum Vergrößern nutze den KI-Hochskalierer.",
          "Das Ergebnis hat nicht genau die eingegebene Größe: Das Foto wurde so skaliert, dass es in deinen Rahmen passt, ohne seine Form zu ändern. Schneide zuerst zu oder nutze Foto & Unterschrift anpassen für exakte Maße.",
          "Die Datei ist in KB noch zu groß: Komprimiere sie nach dem Verkleinern oder lege in Foto & Unterschrift anpassen eine Zielgröße fest.",
          "Ein HEIC-Foto kam als JPG zurück: Das Tool kann HEIC nicht speichern und liefert deshalb ein JPG. Ein Foto von Kamera oder Handy behält seine aufrechte Ausrichtung.",
          "Das Foto wirkt weich: Ein stark verkleinertes Foto, das du dann vergrößert ansiehst, wirkt weich. Ändere die Größe auf das Maß, in dem du es tatsächlich anzeigen wirst.",
        ],
        body: "Entspricht das Ergebnis nicht deinen Erwartungen, prüfe zuerst diese Punkte.",
      },
      {
        heading: "Datenschutz und Limits",
        body: "Uploads werden bei der Übertragung verschlüsselt. Deine Originaldatei wird gelöscht, sobald sie für die Konvertierung gelesen wurde. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Ein Bild pro Upload, bis zu 100 MB, kostenlos, ohne Konto.",
      },
    ],
    relatedTools: [
      { label: "Bild zuschneiden", href: "/de/tools/crop-image" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
      { label: "KI-Hochskalierer", href: "/de/tools/ai-upscaler" },
      { label: "Bild drehen", href: "/de/tools/rotate-image" },
    ],
    faqDescription: "Häufige Fragen zum Ändern der Bildgröße auf exakte Abmessungen.",
    faq: [
      {
        question: "Wie ändere ich ein Bild auf exakte Pixelmaße?",
        answer:
          "Lade dein Bild in das Tool zur Größenänderung von ConvertBrio hoch, gib die gewünschte Breite und Höhe in Pixeln ein und lade die verkleinerte Datei herunter. Das funktioniert mit jedem Bildformat, das das Tool akzeptiert.",
      },
      {
        question: "Verzerrt die Größenänderung mein Bild?",
        answer:
          "Nur wenn die neue Breite und Höhe nicht zum ursprünglichen Seitenverhältnis passen. Um ein Strecken zu vermeiden, behalte dasselbe Verhältnis von Breite zu Höhe wie beim Ausgangsbild bei oder schneide das Bild zuerst auf die gewünschte Form zu.",
      },
      {
        question: "Verringert die Größenänderung auch die Dateigröße?",
        answer:
          "Ja, weniger Pixel bedeuten weniger Daten, daher schrumpft die Datei beim Verkleinern meist erheblich. Für das kleinstmögliche Ergebnis schließe an die Größenänderung noch das Tool Bild komprimieren an.",
      },
      {
        question: "Kann ich ein kleines Bild vergrößern, ohne dass es unscharf wird?",
        answer:
          "Nicht mit einer einfachen Größenänderung: Das Vergrößern verteilt vorhandene Pixel und macht das Bild weicher. Nutze stattdessen den KI-Hochskalierer, der Details mit einem trainierten Modell rekonstruiert und eine deutlich schärfere Vergrößerung liefert.",
      },
      {
        question: "Ändert sich das Dateiformat bei der Größenänderung?",
        answer:
          "Das Tool gibt das Bild in einem gängigen Webformat zurück. Brauchst du ein bestimmtes Ausgabeformat, schicke die verkleinerte Datei anschließend durch den Bildkonverter.",
      },
    ],
  },

  "crop-image": {
    title: "Bild zuschneiden: Auf den gewünschten Ausschnitt reduzieren",
    intro:
      "Manchmal willst du nicht das ganze Bild verkleinern, sondern alles außerhalb eines bestimmten Bereichs entfernen – etwa ein Motiv freistellen, unerwünschten Hintergrund abschneiden oder das Seitenverhältnis einer Plattform treffen. Mit dem Zuschneide-Tool von ConvertBrio gibst du einen exakten Bereich per Pixelkoordinaten an und erhältst genau diesen Ausschnitt zurück.",
    sections: [
      {
        heading: "So schneidest du ein Bild zu",
        body: "Lade dein Bild hoch und gib die linke und obere Koordinate an, ab der zugeschnitten werden soll, dazu die Breite und Höhe des Bereichs, den du behalten willst. ConvertBrio schneidet das Bild genau auf dieses Rechteck zu und verwirft alles außerhalb.",
      },
      {
        heading: "Die richtigen Koordinaten finden",
        body: "Koordinaten werden in Pixeln von der oberen linken Ecke des Bildes aus gemessen. Ein Bildeditor oder Vorschau-Programm, das die Pixelposition anzeigt, hilft dir dabei, den genauen Bereich vor dem Hochladen zu bestimmen. Willst du das gesamte Bild nur skalieren, statt einen Ausschnitt herauszuschneiden, nutze stattdessen Bildgröße ändern.",
      },
      {
        heading: "Typische Einsatzzwecke fürs Zuschneiden",
        body: "Zuschneiden eignet sich, um unerwünschten Hintergrund aus einem Foto zu entfernen, ein Motiv zu isolieren, das geforderte Seitenverhältnis für ein Profilbild oder Banner zu treffen oder einen Scan auf den reinen Inhaltsbereich zu reduzieren. Es ist die präzise Alternative zur Größenänderung, wenn es ums Wegnehmen statt ums Skalieren geht.",
      },
    ],
    relatedTools: [
      { label: "Bildgröße ändern", href: "/de/tools/resize-image" },
      { label: "Bild drehen", href: "/de/tools/rotate-image" },
      { label: "Bild komprimieren", href: "/de/tools/compress-image" },
    ],
    faqDescription: "Häufige Fragen zum Zuschneiden von Bildern auf einen bestimmten Bereich.",
    faq: [
      {
        question: "Wie schneide ich ein Bild auf einen bestimmten Bereich zu?",
        answer:
          "Lade dein Bild in das Zuschneide-Tool von ConvertBrio hoch und gib die linke und obere Startkoordinate sowie Breite und Höhe des Bereichs an, den du behalten willst, jeweils in Pixeln von der oberen linken Ecke aus gemessen.",
      },
      {
        question: "Was ist der Unterschied zwischen Zuschneiden und Größe ändern?",
        answer:
          "Beim Ändern der Größe wird das gesamte Bild auf neue Abmessungen skaliert, beim Zuschneiden wird nur ein bestimmter rechteckiger Bereich herausgeschnitten und behalten, alles andere wird verworfen. Schneide zu, wenn du einen Teil des Bildes entfernen willst, statt das Ganze zu verkleinern.",
      },
      {
        question: "Woher weiß ich, welche Pixelkoordinaten ich eingeben muss?",
        answer:
          "Öffne das Bild in einem Vorschau-Programm oder Editor, das die Pixelposition beim Überfahren anzeigt. So bestimmst du die Koordinaten des Bereichs, den du behalten willst, bevor du sie in ConvertBrio einträgst.",
      },
    ],
  },

  "rotate-image": {
    title: "Bild drehen: Seitliche oder auf dem Kopf stehende Fotos korrigieren",
    intro:
      "Fotos vom Handy oder von einem Drucker eingescannte Bilder landen manchmal falsch herum. Das Dreh-Tool von ConvertBrio dreht ein Bild mit einem Klick um 90, 180 oder 270 Grad und behebt Ausrichtungsprobleme, ohne dass du einen vollwertigen Fotoeditor öffnen musst.",
    sections: [
      {
        heading: "So drehst du ein Bild",
        body: "Lade das Bild hoch, wähle im Dropdown-Menü 90, 180 oder 270 Grad, und ConvertBrio wendet die Drehung an und gibt die korrigierte Datei zurück. Eine Drehung um 90 Grad richtet ein seitlich liegendes Bild auf, mit 180 Grad stellst du ein auf dem Kopf stehendes Bild wieder richtig herum.",
      },
      {
        heading: "Warum Fotos falsch gedreht sind",
        body: "Das passiert meist, wenn eine Kamera oder ein Scanner die korrekte Ausrichtungsangabe nicht einbettet oder diese Angabe beim Hochladen oder Übertragen verloren geht. Die Bilddaten selbst sind nicht betroffen: Das Bild wird lediglich in der falschen Richtung angezeigt, bis es gedreht wird.",
      },
      {
        heading: "Gescannte Dokumente drehen",
        body: "Seitlich oder auf dem Kopf in den Scanner eingelegte Seiten sind einer der häufigsten Anwendungsfälle für dieses Tool. Wenn du das Bild vor der weiteren Verarbeitung dreht, etwa bevor du es in ein PDF umwandelst oder OCR darüber laufen lässt, wird das fertige Dokument richtig gelesen.",
      },
    ],
    relatedTools: [
      { label: "Bild zuschneiden", href: "/de/tools/crop-image" },
      { label: "PDF drehen", href: "/de/tools/rotate-pdf" },
      { label: "JPG in PDF", href: "/de/tools/jpg-to-pdf" },
    ],
    faqDescription: "Häufige Fragen zum Drehen von Bildern online.",
    faq: [
      {
        question: "Wie drehe ich ein seitlich liegendes Foto?",
        answer:
          "Lade das Bild in das Dreh-Tool von ConvertBrio hoch und wähle 90 oder 270 Grad, je nachdem, in welche Richtung es gedreht werden muss, um richtig angezeigt zu werden.",
      },
      {
        question: "Warum steht mein Foto überhaupt auf dem Kopf oder liegt seitlich?",
        answer:
          "Meist liegt es an fehlenden oder falschen Ausrichtungsangaben der Kamera oder des Scanners, die das Bild aufgenommen haben: Der Bildinhalt ist in Ordnung, er muss nur gedreht werden, um richtig angezeigt zu werden.",
      },
      {
        question: "Kann ich das Bild eines gescannten Dokuments drehen, bevor ich es in ein PDF umwandle?",
        answer:
          "Ja, drehe das Bild zuerst mit diesem Tool und füge es dann mit JPG in PDF zu einem richtig ausgerichteten PDF-Dokument zusammen.",
      },
    ],
  },

  "rotate-pdf": {
    title: "PDF online drehen: Seitliche Seiten in jedem Dokument korrigieren",
    intro:
      "Dokumente, die falsch herum in den Scanner eingelegt wurden, kommen oft seitlich oder auf dem Kopf stehend heraus. Das Tool PDF drehen von ConvertBrio dreht jede Seite eines Dokuments in einem Durchgang um 90, 180 oder 270 Grad und korrigiert so die Ausrichtung der gesamten Datei auf einmal.",
    sections: [
      {
        heading: "So drehst du ein PDF",
        body: "Lade dein PDF hoch, wähle einen Drehwinkel – 90, 180 oder 270 Grad –, und ConvertBrio wendet ihn auf jede Seite des Dokuments an. Das Ergebnis wird als korrigiertes PDF mit demselben Inhalt heruntergeladen, nur eben richtig ausgerichtet.",
      },
      {
        heading: "Warum das bei gescannten Dokumenten passiert",
        body: "Seitliche oder auf dem Kopf stehende Seiten sind ein häufiger Nebeneffekt beim Scannen von Papierdokumenten, besonders wenn Seiten in einer anderen Ausrichtung als vorgesehen eingezogen werden. Das fertige PDF zu drehen geht schneller, als die Originalseiten neu zu scannen.",
      },
      {
        heading: "Nur einzelne Seiten drehen",
        body: "Das Dreh-Tool von ConvertBrio wendet dieselbe Drehung auf jede Seite der Datei an. Müssen nur einige Seiten korrigiert werden, teile das PDF zuerst mit PDF teilen, drehe die betroffenen Seiten einzeln und füge anschließend alles mit PDF zusammenfügen wieder zusammen.",
      },
    ],
    relatedTools: [
      { label: "PDF teilen", href: "/de/tools/split-pdf" },
      { label: "PDF zusammenfügen", href: "/de/tools/merge-pdf" },
      { label: "Bild drehen", href: "/de/tools/rotate-image" },
    ],
    faqDescription: "Häufige Fragen zum Drehen von PDF-Seiten online.",
    faq: [
      {
        question: "Wie drehe ich alle Seiten eines PDFs?",
        answer:
          "Lade dein Dokument in das Tool PDF drehen von ConvertBrio hoch und wähle einen Drehwinkel; im heruntergeladenen Ergebnis ist jede Seite der Datei um denselben Betrag gedreht.",
      },
      {
        question: "Kann ich nur eine Seite statt des ganzen Dokuments drehen?",
        answer:
          "Nicht direkt mit diesem Tool, da es alle Seiten gleichmäßig dreht. Um nur bestimmte Seiten zu drehen, teile das PDF zuerst, drehe die einzelnen Seiten, die du brauchst, und füge die Datei dann wieder zusammen.",
      },
      {
        question: "Warum kommen meine gescannten Seiten seitlich heraus?",
        answer:
          "Meist liegt es daran, dass Seiten in einer anderen Ausrichtung als vorgesehen in den Scanner eingezogen wurden. Das entstandene PDF zu drehen geht schneller, als das Originaldokument neu zu scannen.",
      },
    ],
  },

  "unlock-pdf": {
    title: "PDF entsperren: Einschränkungen durch Besitzerpasswort aufheben",
    intro:
      "Manche PDFs sind mit einem Besitzerpasswort gesperrt, das Drucken, Kopieren oder Bearbeiten einschränkt – selbst wenn du jedes Recht hast, das Dokument zu ändern. Das Tool PDF entsperren von ConvertBrio hebt diese Einschränkungen bei Dateien auf, die du bearbeiten darfst, und gibt dir die volle Kontrolle zurück.",
    sections: [
      {
        heading: "So entsperrst du ein PDF",
        body: "Lade das eingeschränkte PDF hoch, und ConvertBrio entfernt die Einschränkungen auf Besitzerebene, die Drucken, Kopieren und Bearbeiten blockieren. Die entsperrte Datei wird mit demselben Inhalt heruntergeladen, nur ohne die Berechtigungsbeschränkungen.",
      },
      {
        heading: "Besitzerpasswort und Öffnungspasswort",
        body: "Dieses Tool hebt Einschränkungen durch ein Besitzerpasswort auf: also solche, die festlegen, was du mit einer Datei tun darfst, die du bereits öffnen kannst. Es versucht nicht, ein Öffnungspasswort (Benutzerpasswort) zu umgehen, das das Anzeigen des PDFs ganz verhindert; dafür brauchst du das tatsächliche Passwort von demjenigen, der die Datei erstellt hat.",
      },
      {
        heading: "Wann du dieses Tool einsetzen solltest",
        body: "Das Entsperren ist sinnvoll bei Dokumenten, die du selbst erstellt hast oder ausdrücklich ändern darfst, die aber standardmäßig mit aktivierten Einschränkungen exportiert wurden, etwa Berichte aus bestimmter Software oder Formulare, bei denen das Bearbeiten unbeabsichtigt gesperrt wurde. Entsperre nur Dateien, die du rechtmäßig ändern darfst.",
      },
    ],
    relatedTools: [
      { label: "PDF komprimieren", href: "/de/tools/compress-pdf" },
      { label: "PDF zusammenfügen", href: "/de/tools/merge-pdf" },
      { label: "PDF in Word", href: "/de/tools/pdf-to-word" },
    ],
    faqDescription: "Häufige Fragen zum Aufheben von PDF-Passwortbeschränkungen.",
    faq: [
      {
        question: "Was ist der Unterschied zwischen Entsperren und Entschlüsseln eines PDFs?",
        answer:
          "Beim Entsperren werden Einschränkungen auf Besitzerebene für Drucken, Kopieren oder Bearbeiten bei einer Datei aufgehoben, die du bereits öffnen kannst. Ein Passwort, das schon zum bloßen Ansehen des Dokuments nötig ist, wird nicht umgangen: Dafür brauchst du das tatsächliche Passwort.",
      },
      {
        question: "Ist es legal, ein PDF zu entsperren?",
        answer:
          "Einschränkungen bei einem Dokument aufzuheben, das dir gehört oder das du ausdrücklich bearbeiten darfst, ist in Ordnung. Nutze dieses Tool nur für Dateien, die du rechtmäßig ändern darfst.",
      },
      {
        question: "Verändert das Entsperren den Inhalt meines PDFs?",
        answer:
          "Nein, das Tool entfernt nur die Berechtigungsbeschränkungen. Text, Bilder und Layout des Dokuments bleiben exakt gleich.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Seitenzahlen online zu einem PDF hinzufügen",
    intro:
      "Berichte, Handbücher und Verträge brauchen oft fortlaufende Seitenzahlen zur Orientierung und zum Nachschlagen. Das Tool Seitenzahlen hinzufügen von ConvertBrio setzt sie automatisch auf jede Seite deines PDFs, ohne dass du Desktop-Publishing-Software brauchst.",
    sections: [
      {
        heading: "So fügst du Seitenzahlen hinzu",
        body: "Lade dein PDF hoch, und ConvertBrio setzt auf jede Seite eine fortlaufende Nummer, beginnend mit der ersten Seite des Dokuments. Die nummerierte Datei wird heruntergeladen und ist bereit zum Drucken, Teilen oder Einreichen.",
      },
      {
        heading: "Warum Seitenzahlen wichtig sind",
        body: "Nummerierte Seiten erleichtern es Lesern erheblich, auf bestimmte Abschnitte zu verweisen, besonders in langen Verträgen, wissenschaftlichen Arbeiten oder Handbüchern, in denen man „Seite 14“ zitiert oder direkt zu einer bestimmten Stelle des Dokuments springen möchte.",
      },
      {
        heading: "In Kombination mit anderen PDF-Tools",
        body: "Wenn du ein Dokument aus mehreren Quellen zusammenstellst, füge die Dateien zuerst mit PDF zusammenfügen zusammen und ergänze die Seitenzahlen dann im Gesamtergebnis, damit die Nummerierung die endgültige Dokumentstruktur widerspiegelt und nicht jedes einzelne Teil.",
      },
      {
        heading: "Nummerierungsstil und Limits",
        body: "Die Zahlen werden auf jeder Seite unten mittig in einer schlichten serifenlosen Schrift gesetzt und beginnen bei 1: Derzeit gibt es keine Option, Position, Startnummer oder Format wie „Seite X von Y“ zu ändern. Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    relatedTools: [
      { label: "PDF zusammenfügen", href: "/de/tools/merge-pdf" },
      { label: "PDF komprimieren", href: "/de/tools/compress-pdf" },
      { label: "Word in PDF", href: "/de/tools/word-to-pdf" },
    ],
    faqDescription: "Häufige Fragen zum Hinzufügen von Seitenzahlen zu einem PDF.",
    faq: [
      {
        question: "Wie füge ich einem PDF Seitenzahlen hinzu?",
        answer:
          "Lade dein Dokument in das Tool Seitenzahlen hinzufügen von ConvertBrio hoch; es setzt automatisch eine fortlaufende Nummer auf jede Seite, bevor du das Ergebnis herunterlädst.",
      },
      {
        question: "Kann ich Position oder Startnummer ändern?",
        answer:
          "Derzeit nicht: Die Zahlen stehen immer unten mittig und beginnen bei 1. Brauchst du eine andere Position, eine andere Startnummer oder ein Format wie „Seite X von Y“, nutze eine PDF-Bearbeitungssoftware für volle Kontrolle.",
      },
      {
        question: "Nummeriert dieses Tool Seiten neu, die schon Nummern haben?",
        answer:
          "Es setzt auf jede Seite eine neue fortlaufende Nummer. Sind im Inhalt deines Dokuments bereits Nummern aufgedruckt, erscheinen beide; das Tool funktioniert daher am besten bei Dokumenten ohne vorhandene Seitenzahlen.",
      },
    ],
  },
};
