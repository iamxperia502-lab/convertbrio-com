import type { ToolContentEntry } from "../toolContent";

// German (de) long-form tool content. Links point to the /de/ tool pages.

export const toolContentDe: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "PDF online komprimieren: Größe für E-Mail und Portale reduzieren",
    intro: [
      "Große PDFs – vor allem solche voller gescannter Seiten oder hochauflösender Fotos – überschreiten das Anhang-Limit von E-Mails, laden langsam hoch und werden von Portalen mit Größenbeschränkung abgelehnt. Der PDF-Kompressor von ConvertBrio kodiert die im Dokument eingebetteten Bilder mit effizienterer Qualität und Auflösung neu und entfernt unnötige Metadaten, sodass dieselben Seiten in einer kleineren Datei zurückkommen.",
      "Es ist kostenlos, läuft im Browser ohne Anmeldung und ohne Wasserzeichen. Die Komprimierung ist verlustfrei für Text und Vektorgrafiken – die bleiben scharf – und betrifft nur eingebettete Fotos und Scans, wo eine minimale, fast immer unsichtbare Qualitätsminderung einen großen Größenrückgang bringt.",
    ],
    howTo: [
      { step: "PDF hochladen", detail: "Ziehe die Datei in das Feld oder klicke zum Durchsuchen. Eine PDF pro Vorgang, bis zu 100 MB." },
      {
        step: "Auf Komprimieren klicken",
        detail:
          "ConvertBrio findet die eingebetteten Bilder, kodiert jedes mit effizienterer Qualität neu, verkleinert die, die größer als nötig sind, und entfernt ungenutzte Metadaten.",
      },
      {
        step: "Herunterladen und Größe prüfen",
        detail:
          "Die komprimierte PDF wird automatisch heruntergeladen. Öffne sie, um zu prüfen, ob die Seiten lesbar bleiben; ist sie noch über dem Limit, sieh dir die Tipps unten zu Scans und dem Aufteilen von Seiten an.",
      },
    ],
    sections: [
      {
        heading: "Wie die PDF-Komprimierung funktioniert",
        body: [
          "Die Größe einer PDF wird fast immer von einer Sache bestimmt: den eingebetteten Bildern. Text, Schriften und Vektorzeichnungen sind im Vergleich winzig. Deshalb setzt der Kompressor von ConvertBrio dort an, wo das Gewicht liegt: Er findet die fotografischen Bilder in der Datei, kodiert sie mit effizienterem JPEG neu und verkleinert jedes Bild, dessen Auflösung weit über dem liegt, was ein Bildschirm oder Drucker nutzen würde.",
          "Alles, was kein Foto ist, bleibt unangetastet: Der Text bleibt auswählbar und scharf, Logos und Vektorgrafiken behalten saubere Kanten und das Layout verschiebt sich nicht. Metadaten ohne Funktion werden verworfen, um etwas mehr Platz zu gewinnen.",
        ],
      },
      {
        heading: "Welche PDFs am stärksten schrumpfen",
        body: "Die Reduktion hängt komplett davon ab, was deine Datei groß macht.",
        table: {
          headers: ["PDF-Typ", "Typisches Ergebnis"],
          rows: [
            ["Gescanntes Dokument (Fotos der Seiten)", "Große Reduktion – oft 40–70 % kleiner"],
            ["Bericht mit eingebetteten Fotos oder Screenshots", "Moderate Reduktion, je nach Bildanzahl"],
            ["Als PDF exportierte Präsentation", "Moderate Reduktion, wenn die Folien Fotos enthalten"],
            ["Reine Text-PDF (Vertrag, E-Book, Rechnung)", "Kaum Veränderung – schon kompakt"],
            ["PDF mit Bildern in PNG oder CMYK", "Begrenzt – diese Bildtypen werden übersprungen, um Farben nicht zu verändern"],
          ],
        },
      },
      {
        heading: "Eine PDF ohne Qualitätsverlust komprimieren",
        body: "Für jede PDF, die fast nur aus Text besteht, ist die Komprimierung praktisch verlustfrei – du verlierst nichts Sichtbares. Bei gescannten oder bildlastigen PDFs werden die Bilder neu kodiert, es gibt also einen echten, aber kleinen Qualitätskompromiss. In der Praxis bleibt eine mit diesem Tool komprimierte gescannte Seite am Bildschirm gut lesbar und druckt sauber; der Unterschied zeigt sich nur, wenn du stark in ein Foto hineinzoomst.",
      },
      {
        heading: "Eine PDF unter eine bestimmte Größe bringen (100 KB, 500 KB, 2 MB)",
        body: [
          "Dieses Tool macht einen effizienten Komprimierungsdurchlauf, nicht mehrere Versuche bis zu einer exakten Zahl; es garantiert daher keinen präzisen Kilobyte-Wert. Aber einiges hilft, wenn das Limit hart ist:",
          "Wenn deine PDF ein gescanntes Dokument ist, sinkt sie oft in einem Durchlauf deutlich – probiere es zuerst. Ist sie noch drüber, teile sie mit dem Tool PDF teilen in weniger Seiten und komprimiere jeden Teil, oder exportiere nur die benötigten Seiten. Kommt das Gewicht von ein oder zwei riesigen Fotos, gibt das separate Komprimieren dieser Bilder mit Bild komprimieren (mit exakter Zielgröße) vor dem Neuaufbau der PDF die beste Kontrolle.",
        ],
      },
      {
        heading: "Komprimieren oder teilen",
        body: "Komprimieren reduziert das Gewicht jeder Seite. Teilen reduziert die Seitenanzahl. Wenn deine 30-MB-PDF 300 Textseiten hat, hilft Komprimieren wenig – sie mit PDF teilen in Abschnitte zu zerlegen ist die Antwort. Sind es 10 gescannte Seiten mit je 3 MB, ist Komprimieren genau das richtige Tool. Sie ergänzen sich.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Deine PDF wird beim Upload verschlüsselt, auf den Servern von ConvertBrio automatisch ohne menschliche Prüfung verarbeitet, und sowohl das Original als auch die komprimierte Kopie werden innerhalb von 24 Stunden gelöscht. Eine Datei pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Komprimieren der Größe einer PDF online.",
    faq: [
      {
        question: "Wie komprimiere ich eine PDF online kostenlos?",
        answer:
          "Lade das Dokument in das Tool PDF komprimieren von ConvertBrio und klicke auf Komprimieren. Es kodiert eingebettete Bilder neu und entfernt unnötige Metadaten, um die Datei zu verkleinern, die automatisch heruntergeladen wird – ohne Konto, ohne Wasserzeichen, ohne E-Mail.",
      },
      {
        question: "Kann man eine PDF ohne Qualitätsverlust komprimieren?",
        answer:
          "Text und Vektorinhalte werden nie verschlechtert – sie bleiben perfekt scharf. Nur Fotos und Scans werden neu kodiert, mit einer kleinen Qualitätsminderung, die bei normaler Ansichtsgröße meist unsichtbar ist.",
      },
      {
        question: "Wie mache ich eine PDF kleiner, um sie per E-Mail zu senden?",
        answer:
          "Lass sie einmal durch das Tool laufen. Die meisten E-Mail-Limits liegen bei 20–25 MB; ein gescanntes Dokument oder ein bildlastiger Bericht kommt meist deutlich darunter. Ist sie noch zu groß, teile sie mit PDF teilen in Teile.",
      },
      {
        question: "Kann ich eine PDF auf genau 100 KB oder 300 KB komprimieren?",
        answer:
          "Dieses Tool zielt nicht auf eine exakte Größe – es macht einen effizienten Durchlauf. Bei harten Limits komprimiere zuerst eine gescannte PDF hier, reduziere bei Bedarf die Seitenzahl mit PDF teilen, oder komprimiere die größten eingebetteten Bilder separat mit Bild komprimieren, das ein exaktes KB-Ziel akzeptiert.",
      },
      {
        question: "Warum ist meine PDF kaum kleiner geworden?",
        answer:
          "Sie ist vermutlich schon kompakt – eine fast reine Text-PDF hat sehr wenig zu entfernen. Dateien mit hochauflösenden Scans oder eingebetteten Fotos haben die größten Reduktionen.",
      },
      {
        question: "Ändert die Komprimierung das Layout oder den Text?",
        answer:
          "Nein. Seitenmaße, Textposition, Schriften und auswählbarer Text bleiben erhalten. Nur die Dateigröße ändert sich.",
      },
    ],
  },

  "compress-image": {
    title: "Bildkompressor: Größe reduzieren ohne Qualitätsverlust",
    intro: [
      "Ob du ein Upload-Limit erreichst, eine Website beschleunigst oder einfach den Speicher nicht mehr vollstopfen willst – der Bildkompressor von ConvertBrio reduziert die Dateigröße und hält das Bild scharf. Du steuerst das Ergebnis: Setze ein Qualitätsniveau oder gib eine exakte Zielgröße in Kilobyte an, und das Tool trifft sie.",
      "Dieser Zielgrößen-Modus ist der Grund, warum die meisten Leute hier landen. Visa-Portale, Behördenseiten, Uni-Bewerbungen und Ämter begrenzen ein Foto oder einen Scan oft auf 100 KB, 200 KB oder 50 KB. Statt in geratenen Qualitätsstufen zu exportieren, bis eine passt, tippst du das Limit einmal ein und lädst eine Datei darunter herunter.",
    ],
    howTo: [
      { step: "Bild hochladen", detail: "Ziehe ein JPG, PNG, WEBP, HEIC oder AVIF hinein, bis zu 100 MB. HEIC-Fotos vom iPhone werden direkt akzeptiert." },
      {
        step: "Zielgröße oder Qualitätsniveau festlegen",
        detail:
          "Gib die maximale Dateigröße in KB ein (zum Beispiel 100). Leer lassen, um den Qualitätsregler zu nutzen, bei dem niedrigere Werte kleinere Dateien ergeben.",
      },
      {
        step: "Komprimieren",
        detail:
          "ConvertBrio kodiert das Bild neu und passt im Ziel-Modus die Qualität an – dann die Abmessungen, falls die Qualität nicht reicht – bis die Datei unter dein Limit passt.",
      },
      { step: "Ergebnis herunterladen", detail: "Die komprimierte Datei wird automatisch heruntergeladen. Prüfe, ob sie akzeptabel ist; ist sie zu weich, erhöhe das Ziel und wiederhole." },
    ],
    sections: [
      {
        heading: "Wie die Bildkomprimierung funktioniert",
        body: [
          "JPG, WEBP und AVIF sind verlustbehaftete Formate: Sie verkleinern eine Datei, indem sie Bilddaten verwerfen, die das menschliche Auge am wenigsten vermisst – feine Farbverläufe, feine Textur in unruhigen Bereichen, hochfrequente Details. Niedrigere Qualität weist den Encoder an, mehr zu verwerfen, was eine kleinere Datei mit zunehmend sichtbarer Weichzeichnung und Artefakten ergibt.",
          "PNG ist verlustfrei und komprimiert anders – es kann die exakten Pixel nur effizienter packen, ein als PNG gespeichertes Foto schrumpft daher kaum. Wenn du ein PNG in den Kompressor lädst und eine echte Reduktion willst, bringt es weit mehr, es vorher (mit dem Bildkonverter) in JPG oder WEBP umzuwandeln, als jede PNG-Komprimierung.",
        ],
      },
      {
        heading: "Ein Bild auf eine exakte Größe reduzieren (wie 100 KB)",
        body: "Gib dein Limit in das Zielgrößen-Feld ein, und ConvertBrio arbeitet rückwärts: Es senkt die JPG/WEBP-Qualität stufenweise, prüft die Größe nach jedem Schritt und reduziert die Abmessungen nur, wenn die niedrigste sinnvolle Qualität noch überschreitet. Das Ergebnis ist die größte, schärfste Version deines Bildes, die noch unter die Grenze passt.",
        list: [
          "Visum- oder Passfoto – oft 100 KB, oder ein Bereich von 10 KB bis 240 KB",
          "Behörden- und Finanzamtsportale – üblich 100 KB oder 200 KB pro Scan",
          "Bewerbungs- und Prüfungsseiten – häufig 50 KB bis 500 KB für Foto oder Zeugnis",
          "Avatare in Foren und Marktplätzen – meist um 1–2 MB",
        ],
      },
      {
        heading: "Wie stark kann man komprimieren, bevor es auffällt?",
        body: "Die meisten Fotos verlieren 40–60 % ihrer Größe ohne sichtbaren Unterschied bei normaler Ansichtsgröße, weil die ersten Daten, die der Encoder verwirft, wirklich schwer zu sehen sind. Danach fangen flache Flächen wie Himmel an zu bänder, und Textkanten und feine Details werden grob. Die praktische Methode: nahe am oberen Ende des Qualitätsbereichs starten und schrittweise senken, während du das Bild ansiehst.",
      },
      {
        heading: "Komprimieren oder Größe ändern",
        body: "Komprimieren behält dieselben Pixelmaße und reduziert, was jedes Pixel kostet. Größe ändern reduziert die Pixelanzahl selbst. Bei einem Foto, das sowohl in den Maßen als auch im Gewicht groß ist, ergibt das Verkleinern auf die tatsächlich benötigte Größe – und dann Komprimieren – eine viel kleinere Datei mit weniger sichtbarem Verlust.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Jeder Upload wird verschlüsselt und innerhalb von 24 Stunden automatisch von den Servern von ConvertBrio gelöscht, ob heruntergeladen oder nicht. Dieses Tool komprimiert ein Bild pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto und ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Komprimieren und Verkleinern der Bildgröße.",
    faq: [
      {
        question: "Wie reduziere ich ein Bild auf unter 100 KB?",
        answer:
          "Lade das Bild in den Kompressor von ConvertBrio und setze die Zielgröße auf 100 KB. Das Tool senkt die Qualität – und bei Bedarf die Abmessungen – bis die Datei in dieses Limit passt, ideal für Formulare und Dokument-Uploads mit hartem Limit.",
      },
      {
        question: "Wird mein Bild durch Komprimieren schlechter?",
        answer:
          "Bei moderater Komprimierung sehen die meisten keinen Unterschied. Qualitätsverlust wird erst bei aggressiven Einstellungen sichtbar; es lohnt sich, das Ergebnis zu prüfen, statt standardmäßig auf die kleinstmögliche Größe zu komprimieren.",
      },
      {
        question: "Mein PNG ist kaum kleiner geworden – warum?",
        answer:
          "PNG ist verlustfrei, es gibt also wenig Spielraum, ein darin gespeichertes Foto zu komprimieren. Wandle das PNG zuerst mit dem Bildkonverter in JPG oder WEBP um; allein das reduziert die Größe oft um 70 % oder mehr.",
      },
      {
        question: "Behält der Kompressor die Bildmaße?",
        answer:
          "Ja, außer du nutzt den Zielgrößen-Modus und die Datei passt nach maximaler Qualitätsminderung noch nicht – dann verkleinert er als letztes Mittel auch die Abmessungen.",
      },
      {
        question: "Kann man mehrere Bilder auf einmal komprimieren?",
        answer:
          "Ein Bild pro Vorgang zu komprimieren ist kostenlos und ohne Konto. Dieses Tool verarbeitet noch nicht mehrere Bilder in einem Durchlauf.",
      },
    ],
  },

  "merge-pdf": {
    title: "PDF zusammenfügen online: mehrere PDFs zu einer Datei verbinden",
    intro: [
      "Gescannte Seiten, Rechnungen, Berichte oder Kapitel zu einem Dokument zusammenzufügen, erfordert meist Desktop-Software oder ein Abo. Das Zusammenfügen-Tool von ConvertBrio macht das im Browser, ohne Installation: Lade mehrere PDFs hoch, bring sie in die gewünschte Reihenfolge und lade in Sekunden eine kombinierte Datei herunter.",
      "Jede Seite jeder Datei bleibt genau so, wie sie ist: keine Neukomprimierung, kein Qualitätsverlust, kein Wasserzeichen. Die einzige Änderung: Aus getrennten Dateien wird eine.",
    ],
    howTo: [
      { step: "Zwei oder mehr PDFs hochladen", detail: "Ziehe alle gleichzeitig hinein oder wähle mehrere im Explorer aus. Jede Datei bis zu 100 MB." },
      {
        step: "In Reihenfolge bringen",
        detail: "Das kombinierte Dokument folgt der Reihenfolge der Dateiliste; ordne sie so an, wie die finale PDF gelesen werden soll – Deckblatt zuerst, Anhänge zuletzt.",
      },
      { step: "Zusammenfügen und herunterladen", detail: "Klicke auf Konvertieren. ConvertBrio hängt die Seiten jeder Datei nacheinander an und die kombinierte PDF wird automatisch heruntergeladen." },
    ],
    sections: [
      {
        heading: "Häufige Gründe, PDFs zusammenzufügen",
        body: "Es ist eine der meistgenutzten PDF-Operationen, meist für einen dieser Fälle:",
        list: [
          "Separat gescannte Seiten zu einem Dokument verbinden",
          "Einen mehrteiligen Bericht, Vertrag oder ein Angebot zusammenstellen",
          "Mehrere Rechnungen oder Belege für eine Abrechnung bündeln",
          "Kapitel eines Handbuchs, Buchs oder Skripts verbinden",
          "Ein Anschreiben als eine Datei an den Lebenslauf anhängen",
        ],
      },
      {
        heading: "Die Seitenreihenfolge richtig setzen",
        body: "Die Reihenfolge der kombinierten Datei bestimmt sich allein aus der Upload-Reihenfolge; ordne die Liste vor dem Konvertieren. Hat eine deiner Quell-PDFs eigene Seiten in falscher Reihenfolge, behebe das zuerst: Teile sie mit PDF teilen in Einzelseiten und füge dann alles in der gewünschten Reihenfolge zusammen.",
      },
      {
        heading: "Nach dem Zusammenfügen",
        body: "Ein kombiniertes Dokument ist oft der Moment, in dem du die Größe reduzieren möchtest, falls die Quellen bildlastig waren (PDF komprimieren). Das an der finalen Datei zu tun stellt sicher, dass die Komprimierung das ganze Dokument berücksichtigt.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Die Dateien werden beim Upload verschlüsselt, automatisch ohne menschliche Prüfung zusammengefügt, und alle – Quellen und Ergebnis – innerhalb von 24 Stunden gelöscht. Mehrere Dateien pro Zusammenführung, je bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Zusammenfügen mehrerer PDF-Dateien zu einer.",
    faq: [
      {
        question: "Wie füge ich PDF-Dateien online kostenlos zusammen?",
        answer:
          "Öffne das Tool PDF zusammenfügen von ConvertBrio, lade zwei oder mehr PDFs hoch, ordne sie in der gewünschten Reihenfolge an und lade die kombinierte Datei herunter – ohne Konto, ohne Software-Installation, ohne Wasserzeichen.",
      },
      {
        question: "Kann ich die Seitenreihenfolge in der kombinierten PDF steuern?",
        answer:
          "Ja: Die Dateien werden in der gelisteten Reihenfolge zusammengefügt, die Seiten jeder Datei erscheinen nacheinander. Ordne die Dateien vor dem Konvertieren.",
      },
      {
        question: "Reduziert das Zusammenfügen die Qualität meiner PDFs?",
        answer:
          "Nein. Die Seiten werden unverändert kopiert, ohne Neukomprimierung. Die kombinierte Datei ist etwa so groß wie die Summe der Originale.",
      },
      {
        question: "Kann ich Bilder und PDFs zusammenfügen?",
        answer:
          "Wandle die Bilder zuerst mit JPG in PDF um und füge diese PDF dann hier mit deinen anderen zusammen.",
      },
      {
        question: "Gibt es ein Limit, wie viele PDFs ich kombinieren kann?",
        answer:
          "Du kannst mehrere Dateien auf einmal zusammenfügen, je bis zu 100 MB. Sehr große Aufgaben gelingen besser in zwei Schritten.",
      },
    ],
  },

  "split-pdf": {
    title: "PDF teilen online: ein Dokument in einzelne Seiten trennen",
    intro: [
      "Du musst eine Seite aus einer größeren PDF ziehen oder ein mehrseitiges Dokument in separate Dateien zerlegen? Das Teilen-Tool von ConvertBrio trennt jede Seite deiner PDF in eine eigene Datei, bereit zum Herunterladen und unabhängigen Verwenden.",
      "Es ist kostenlos, läuft im Browser und ohne Wasserzeichen. Das Ergebnis kommt als ZIP mit einer Seite pro Datei.",
    ],
    howTo: [
      { step: "Deine PDF hochladen", detail: "Ziehe sie in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Teilen", detail: "ConvertBrio zerlegt das Dokument in einseitige Dateien, eine pro Seite des Originals." },
      { step: "ZIP herunterladen", detail: "Das Ergebnis kommt als ein ZIP mit jeder Seite als separater PDF, bereit zum Entpacken." },
    ],
    sections: [
      {
        heading: "Wann Teilen sinnvoll ist",
        body: "Häufige Fälle: eine Unterschriftsseite aus einem Vertrag ziehen, Kapitel eines gescannten Buchs trennen, eine Rechnung aus einem Stapel isolieren oder einen großen Bericht zum Teilen in kleinere Abschnitte zerlegen.",
      },
      {
        heading: "Die Seiten später wieder zusammenfügen",
        body: "Wenn du eine PDF teilst und danach einige oder alle Seiten in ein neues Dokument zurückbringen musst, fügt das Tool PDF zusammenfügen von ConvertBrio sie in der von dir gewählten Reihenfolge wieder zusammen.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Der Upload wird verschlüsselt, automatisch ohne menschliche Prüfung verarbeitet, und sowohl das Original als auch die entstandenen Seiten werden innerhalb von 24 Stunden von den Servern von ConvertBrio gelöscht. Limit 100 MB pro Datei.",
      },
    ],
    faqDescription: "Häufige Fragen zum Teilen einer PDF in einzelne Seiten.",
    faq: [
      {
        question: "Wie teile ich eine PDF in einzelne Seiten?",
        answer:
          "Lade deine PDF in das Tool PDF teilen von ConvertBrio, und es trennt jede Seite in eine eigene Datei, alle in einem ZIP-Download gebündelt.",
      },
      {
        question: "Kann ich nur eine Seite aus einer PDF extrahieren?",
        answer:
          "Ja: Das Teilen zerlegt das Dokument in einzelne Seiten in einem ZIP, du nimmst also die benötigte Seite und ignorierst den Rest.",
      },
      {
        question: "Kann ich die Seiten danach wieder zusammenfügen?",
        answer:
          "Ja, nutze das Tool PDF zusammenfügen von ConvertBrio, um die entstandenen Seiten in der gewünschten Reihenfolge zu einem neuen Dokument zu verbinden.",
      },
    ],
  },

  "pdf-to-word": {
    title: "PDF in Word umwandeln: aus einem PDF ein bearbeitbares Dokument machen",
    intro: [
      "Du musst den Text einer PDF bearbeiten, hast aber die Quelldatei nicht? Der PDF-in-Word-Konverter von ConvertBrio baut deine PDF als bearbeitbares DOCX neu auf – Absätze, Fett und Kursiv, Überschriften, einfache Tabellen und Bilder inklusive – das sich in Microsoft Word, Google Docs oder LibreOffice öffnet.",
      "Es ist kostenlos, ohne Anmeldung und ohne Wasserzeichen. Einfache Dokumente wandeln sauber um; je komplexer die Originalseite visuell ist, desto mehr passt du danach an.",
    ],
    howTo: [
      {
        step: "Prüfe, ob die PDF echten Text hat",
        detail:
          "Öffne sie und versuche, einen Satz mit dem Cursor zu markieren. Wenn das geht, weiter mit Schritt 2. Ist der Text ein gescanntes Bild, lass sie zuerst durch OCR für PDF laufen.",
      },
      { step: "PDF hochladen", detail: "Ziehe sie in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "In DOCX umwandeln", detail: "ConvertBrio baut den Inhalt als Word-Dokument neu auf – Text, Überschriften, einfache Tabellen und Bilder – und es wird automatisch heruntergeladen." },
      { step: "In Word öffnen und bearbeiten", detail: "Das DOCX öffnet sich in Word, Google Docs oder jedem kompatiblen Editor. Prüfe das Layout und passe an, was die Umwandlung nicht perfekt platziert hat." },
    ],
    sections: [
      {
        heading: "Was übernommen wird und was Nacharbeit braucht",
        body: "Das vorab zu wissen spart Zeit.",
        table: {
          headers: ["Element", "Umwandlungsergebnis"],
          rows: [
            ["Absätze, Fett, Kursiv", "Zuverlässig erhalten"],
            ["Überschriften und einfache Listen", "In den meisten Dokumenten erhalten"],
            ["Einfache Tabellen", "Erhalten; Rahmen und Abstände können Anpassung brauchen"],
            ["Inline- und vollbreite Bilder", "Erhalten und im Fluss platziert"],
            ["Mehrspaltige Layouts", "Auf eine Spalte reduziert – Neuaufbau einplanen"],
            ["Kopf-, Fußzeilen, Seitenzahlen", "Können in den Textkörper wandern oder wegfallen"],
          ],
        },
      },
      {
        heading: "Ein gescanntes Dokument in Word umwandeln",
        body: "Ist deine PDF ein Scan – ein Foto jeder Seite statt echtem Text – hat dieser Konverter keinen Text zum Extrahieren und erzeugt ein leeres oder nur bildhaftes Dokument. Lass den Scan zuerst durch das Tool OCR für PDF laufen: Es erkennt den gedruckten Text und fügt eine Textebene hinzu. Wandle dann diese OCR-PDF hier um, um ein bearbeitbares DOCX zu erhalten.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Die PDF wird beim Upload verschlüsselt, automatisch ohne menschliche Prüfung umgewandelt, und beide Dateien werden innerhalb von 24 Stunden gelöscht. Ein Dokument pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von PDF-Dateien in bearbeitbare Word-Dokumente.",
    faq: [
      {
        question: "Wie wandle ich eine PDF in ein bearbeitbares Word-Dokument um?",
        answer:
          "Lade deine PDF in das Tool PDF in Word von ConvertBrio, und es baut den Inhalt – Text, Überschriften, einfache Tabellen und Bilder – als DOCX neu auf, das du in Microsoft Word oder Google Docs öffnest und bearbeitest.",
      },
      {
        question: "Wie wandle ich ein gescanntes Dokument in Word um?",
        answer:
          "Lass den Scan zuerst durch OCR für PDF von ConvertBrio laufen, um den Text zu erkennen und eine Textebene hinzuzufügen. Wandle dann diese PDF hier um, um ein bearbeitbares DOCX zu erhalten. Ein reiner Scan hat keinen Text, den dieses Tool extrahieren kann.",
      },
      {
        question: "Werden komplexe Layouts und Bilder korrekt umgewandelt?",
        answer:
          "Absätze, Fett und Kursiv, Überschriften, einfache Tabellen und Bilder bleiben erhalten. Mehrspaltige Layouts und stark gestaltete Seiten werden reduziert und müssen neu aufgebaut werden.",
      },
      {
        question: "Ist die umgewandelte Datei ein echtes .docx?",
        answer:
          "Ja, ein Standard-.docx, das sich in Microsoft Word, Google Docs, LibreOffice und Pages öffnet.",
      },
      {
        question: "Fügt ihr ein Wasserzeichen hinzu?",
        answer: "Nein. Das DOCX ist sauber, ohne Wasserzeichen, Badge oder zusätzliche Metadaten.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Word in PDF umwandeln: die Formatierung für den Versand festhalten",
    intro: [
      "Ein Word-Dokument kann je nach Schriften, Word-Version oder Betriebssystem anders aussehen – ein echtes Problem, wenn ein Lebenslauf, Vertrag oder Bericht für alle Empfänger gleich aussehen soll. Der Word-in-PDF-Konverter von ConvertBrio verwandelt dein DOCX in ein druckfertiges PDF, das überall gleich aussieht und nicht versehentlich bearbeitet werden kann.",
      "Es ist kostenlos, läuft im Browser, braucht kein installiertes Microsoft Word und fügt kein Wasserzeichen hinzu.",
    ],
    howTo: [
      { step: "Dokument als .docx speichern", detail: "In Word: Datei → Speichern unter und Word-Dokument (.docx) wählen. Alte .doc-Dateien werden nicht akzeptiert." },
      { step: "Datei hochladen", detail: "Ziehe das .docx in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Umwandeln und herunterladen", detail: "ConvertBrio setzt das Dokument und erzeugt das PDF. Die Datei wird automatisch heruntergeladen, bereit zum Mailen, Drucken oder Hochladen." },
    ],
    sections: [
      {
        heading: "Warum vor dem Versand in PDF umwandeln",
        body: "PDF ist der Standard für fertige Dokumente, weil es auf jedem Gerät gleich aussieht, ohne dass der Empfänger Word oder die richtigen Schriften haben muss. Eine Word-Datei kann dagegen Absätze umbrechen, Seitenumbrüche verschieben oder Schriften ersetzen – genau das, was du nicht willst, wenn ein Recruiter deinen Lebenslauf öffnet.",
      },
      {
        heading: "Wie die Formatierung behandelt wird",
        body: "Text, Schriften, Überschriften, Listen, Tabellen, Inline-Bilder und Seitengröße bleiben erhalten. Sehr Word-spezifische Funktionen – eigene Kopf- und Fußzeilen, Fußnoten, Änderungsverfolgung – können leicht abweichen, weil das Dokument neu gesetzt wird, nicht von Word selbst.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Dein Dokument wird beim Upload verschlüsselt, automatisch ohne menschliche Prüfung umgewandelt, und beide Dateien werden innerhalb von 24 Stunden gelöscht. Ein .docx pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Word-Dokumenten in PDF.",
    faq: [
      {
        question: "Wie wandle ich ein Word-Dokument kostenlos in PDF um?",
        answer:
          "Lade dein .docx in das Tool Word in PDF von ConvertBrio, und es erzeugt ein formatiertes PDF zum Herunterladen – ohne installiertes Microsoft Word, ohne Konto, ohne Wasserzeichen.",
      },
      {
        question: "Bleibt meine Formatierung nach dem Umwandeln gleich?",
        answer:
          "Ja, bei Standard-Dokumenten: Layout, Schriften, Überschriften, Tabellen und Bilder bleiben erhalten, und anders als eine Word-Datei sieht das PDF auf jedem Gerät gleich aus.",
      },
      {
        question: "Funktioniert es mit .doc-Dateien?",
        answer:
          "Nur mit dem modernen Format .docx. Öffne eine alte .doc in Word und speichere sie als .docx (Datei → Speichern unter), dann umwandeln.",
      },
      {
        question: "Kann ich das PDF danach wieder in Word umwandeln?",
        answer:
          "Ja, nutze das Tool PDF in Word von ConvertBrio. Beachte, dass das Zurückführen eines fest gesetzten PDF in bearbeitbaren Text bei komplexen Layouts nur näherungsweise gelingt.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "PDF in JPG umwandeln: jede Seite als Bild exportieren",
    intro: [
      "Manchmal brauchst du eine PDF-Seite als Bild – für eine Folie, einen Social-Media-Post, einen Anhang dort, wo keine PDFs akzeptiert werden, oder um ein Diagramm aus einem langen Bericht zu ziehen. Der PDF-in-JPG-Konverter von ConvertBrio rendert jede Seite deiner Datei als separates JPG.",
      "Es ist kostenlos, ohne Anmeldung und ohne Wasserzeichen. Eine einseitige PDF liefert ein einzelnes JPG; eine mehrseitige liefert einen Satz Bilder, eines pro Seite.",
    ],
    howTo: [
      { step: "Deine PDF hochladen", detail: "Ziehe sie in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Umwandeln", detail: "ConvertBrio rendert jede Seite in ein hochauflösendes JPG. Längere Dokumente dauern etwas, weil jede Seite einzeln gerendert wird." },
      { step: "Bilder herunterladen", detail: "Eine einzelne Seite wird als JPG heruntergeladen; mehrere Seiten zusammen, sodass du das ganze Dokument als Bilder hast." },
    ],
    sections: [
      {
        heading: "Häufige Einsätze",
        body: "",
        list: [
          "Eine PDF-Seite in eine PowerPoint- oder Google-Slides-Folie einfügen",
          "Eine Seite oder ein Zertifikat in sozialen Medien oder einer Messaging-App posten",
          "Dokumentseiten in ein Formular hochladen, das nur Bilder akzeptiert",
          "Ein Schaubild, Diagramm oder eine Abbildung aus einem Bericht zur Wiederverwendung ziehen",
        ],
      },
      {
        heading: "JPG oder PNG?",
        body: "Wähle JPG für fotografische Seiten und die kleinste Dateigröße – der richtige Standard zum Teilen. Wähle PDF in PNG, wenn die Seite überwiegend Text, Tabellen oder Linien enthält und du sie gestochen scharf brauchst, oder wenn du einen transparenten Hintergrund brauchst.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Deine PDF wird beim Upload verschlüsselt, automatisch ohne menschliche Prüfung gerendert, und Upload wie Bilder werden innerhalb von 24 Stunden gelöscht. Eine Datei pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von PDF-Seiten in JPG-Bilder.",
    faq: [
      {
        question: "Wandelt PDF in JPG alle Seiten um?",
        answer:
          "Ja: Jede Seite deiner PDF wird als separates JPG gerendert, ein mehrseitiges Dokument erzeugt also ein Bild pro Seite.",
      },
      {
        question: "JPG oder PNG für eine Seite mit Text?",
        answer:
          "PNG hält Text und feine Linien schärfer, weil es verlustfrei ist; JPG erzeugt eine kleinere Datei mit etwas weicherem Detail. Nutze PNG, wenn die Textschärfe am wichtigsten ist.",
      },
      {
        question: "Kann ich die Bilder danach wieder in eine PDF umwandeln?",
        answer:
          "Ja, nutze das Tool JPG in PDF von ConvertBrio, um Bilder bei Bedarf zu einer einzigen PDF zu verbinden.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "JPG in PDF umwandeln: Bilder zu einem Dokument verbinden",
    intro: [
      "Ob du gescannte Seiten einreichst, ein einfaches Portfolio erstellst oder einen Stapel Belege in eine Datei verwandelst – das JPG-in-PDF-Tool von ConvertBrio verbindet ein oder mehrere Bilder zu einer einzigen PDF, in der von dir gewählten Reihenfolge, mit einem Bild pro Seite.",
      "So werden Papierfotos zu etwas, das man einreichen kann. Die meisten Portale wollen ein PDF, keinen Ordner voller JPGs – das löst es in einem Schritt, kostenlos und ohne Wasserzeichen.",
    ],
    howTo: [
      { step: "Bilder fotografieren oder sammeln", detail: "Bei Dokumentseiten frontal und bei gutem Licht fotografieren, damit der Text lesbar ist. JPG und PNG werden akzeptiert." },
      { step: "Alle gleichzeitig hochladen", detail: "Ziehe alle Bilder in das Feld oder wähle mehrere aus. Kombinierte Größe bis zu 100 MB." },
      { step: "Seitenreihenfolge festlegen", detail: "Die PDF folgt der Reihenfolge der gelisteten Bilder; ordne Seite 1, Seite 2 und so weiter." },
      { step: "Umwandeln und herunterladen", detail: "ConvertBrio platziert jedes Bild auf einer eigenen Seite und die fertige PDF wird automatisch heruntergeladen." },
    ],
    sections: [
      {
        heading: "Häufige Einsätze",
        body: "",
        list: [
          "Einen gescannten Ausweis, Pass oder ein Zeugnis einreichen",
          "Mehrere Beleg- oder Rechnungsfotos für eine Abrechnung verbinden",
          "Einen handunterschriebenen Vertrag als eine Datei zurücksenden",
          "Eine Reihe von Screenshots in ein teilbares Dokument verwandeln",
        ],
      },
      {
        heading: "Ein sauberes Dokument aus Handy-Fotos",
        body: "Für lesbare Ergebnisse den Bildausschnitt mit der Seite füllen, die Kamera parallel halten, um die Trapezform zu vermeiden, und gleichmäßiges Licht ohne Schatten über dem Text nutzen. Ist ein Foto gedreht, korrigiere es vor dem Umwandeln. Ist die PDF zu groß für ein Upload-Limit, lass sie danach durch PDF komprimieren laufen.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Die Bilder werden beim Upload verschlüsselt, automatisch ohne menschliche Prüfung verbunden, und Quellen wie fertige PDF werden innerhalb von 24 Stunden gelöscht. Mehrere Bilder pro Vorgang, 100 MB kombiniert, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von JPG-Bildern in eine PDF.",
    faq: [
      {
        question: "Kann ich mehrere Bilder zu einer PDF verbinden?",
        answer:
          "Ja: Lade so viele JPG- oder PNG-Bilder hoch wie nötig, und ConvertBrio verbindet sie zu einer PDF mit jedem Bild auf einer eigenen Seite, in der von dir gewählten Reihenfolge.",
      },
      {
        question: "Wie wandle ich das Foto eines Dokuments in PDF um?",
        answer:
          "Lade das Foto in JPG in PDF und es wird eine einseitige PDF, die du einreichen, drucken oder teilen kannst. Lade mehrere Fotos hoch, um ein mehrseitiges Dokument zu einer PDF zu machen.",
      },
      {
        question: "Meine PDF ist zu groß zum Versenden – was tun?",
        answer:
          "Handy-Fotos sind hochauflösend, die PDF kann also groß werden. Lass sie durch PDF komprimieren laufen; das kodiert die eingebetteten Bilder neu und reduziert die Größe meist deutlich.",
      },
    ],
  },

  "image-converter": {
    title: "Bildkonverter: online zwischen beliebigen Formaten umwandeln",
    intro: [
      "Der Bildkonverter von ConvertBrio wandelt ein Foto, eine Grafik oder einen Screenshot in einem Schritt zwischen JPG, PNG, WEBP, AVIF, HEIC und GIF um, direkt im Browser. Nichts zu installieren, kein Konto zu erstellen: Datei hochladen, Format wählen, Ergebnis in Sekunden herunterladen.",
      "Der häufigste Grund, ein Bild umzuwandeln, ist Kompatibilität: ein HEIC-iPhone-Foto, das Windows nicht öffnet, ein von einer Website gespeichertes WEBP, das ein Editor ablehnt, oder ein AVIF, das ein altes E-Mail-Programm nicht anzeigt.",
    ],
    howTo: [
      { step: "Dein Bild hochladen", detail: "Ziehe eine JPG-, PNG-, WEBP-, AVIF-, HEIC- oder GIF-Datei in das Feld oder klicke zum Durchsuchen. Bis zu 100 MB." },
      { step: "Ausgabeformat wählen", detail: "Wähle JPG, PNG, WEBP, AVIF oder GIF. Im Zweifel: JPG für Fotos, PNG für Grafiken mit Transparenz oder scharfem Text." },
      { step: "Umwandeln und herunterladen", detail: "Klicke auf Konvertieren. ConvertBrio dekodiert das Original und kodiert es im gewählten Format neu, und die Datei wird automatisch heruntergeladen." },
    ],
    sections: [
      {
        heading: "Das richtige Ausgabeformat wählen",
        body: "Es gibt kein bestes Bildformat – die richtige Wahl hängt davon ab, wohin die Datei geht.",
        table: {
          headers: ["Du willst…", "Umwandeln in", "Warum"],
          rows: [
            ["Ein Foto an eine E-Mail oder ein Formular anhängen", "JPG", "Öffnet sich überall, kleine Datei, kein Kompatibilitätsrisiko"],
            ["Einen transparenten Hintergrund behalten", "PNG oder WEBP", "JPG und altes GIF legen Transparenz auf eine Volltonfarbe"],
            ["Bilder auf der eigenen Website beschleunigen", "WEBP oder AVIF", "Viel kleiner als JPG/PNG bei gleicher Bildqualität"],
            ["Ein iPhone-Foto unter Windows öffnen", "JPG", "HEIC-Unterstützung unter Windows ist uneinheitlich; JPG ist garantiert"],
            ["Auf eine Website hochladen, die WEBP oder AVIF ablehnt", "JPG oder PNG", "Die zwei Formate, die jedes Upload-Formular akzeptiert"],
          ],
        },
      },
      {
        heading: "Was mit Transparenz und Animation passiert",
        body: "Transparenz bleibt erhalten, wenn beide Formate einen Alphakanal unterstützen (PNG, WEBP, AVIF). Ein transparentes Bild in JPG umzuwandeln füllt die transparenten Bereiche weiß. Animierte GIFs werden zu einem einzelnen Standbild.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Jeder Upload wird verschlüsselt und automatisch ohne menschliche Prüfung verarbeitet. Original wie umgewandeltes Bild werden innerhalb von 24 Stunden von den Servern von ConvertBrio gelöscht. Dateien bis zu 100 MB, kostenlos, ohne Konto und ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Bildkonverter von ConvertBrio.",
    faq: [
      {
        question: "Zwischen welchen Bildformaten kann ich umwandeln?",
        answer:
          "Der Konverter liest JPG, PNG, WEBP, AVIF, HEIC und GIF und exportiert nach JPG, PNG, WEBP, AVIF oder GIF. Das deckt praktisch alle Formate von Kameras, Handys, Screenshots und Design-Programmen ab.",
      },
      {
        question: "Reduziert das Umwandeln die Qualität meines Bildes?",
        answer:
          "Das Umwandeln zwischen verlustfreien Formaten wie PNG behält jedes Pixel. Das Umwandeln in ein verlustbehaftetes Format wie JPG oder WEBP wendet einmal Komprimierung an, aber bei Standardqualität ist der Unterschied selten sichtbar.",
      },
      {
        question: "Ändert das Umwandeln die Abmessungen des Bildes?",
        answer:
          "Nein. Der Konverter behält die exakte Breite und Höhe des Originals. Wenn du auch die Größe ändern musst, nutze danach ein Tool zum Ändern der Größe.",
      },
      {
        question: "Fügt ihr ein Wasserzeichen hinzu?",
        answer: "Nein. Die umgewandelte Datei ist sauber, in voller Auflösung, ohne Wasserzeichen oder Badge.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR für PDF: ein gescanntes Dokument durchsuchbar und bearbeitbar machen",
    intro: [
      "Eine gescannte Seite oder das Foto eines Dokuments ist für den Computer nur ein Bild: Du kannst nicht suchen, den Text nicht kopieren und das gescannte Dokument nicht in Word bringen, ohne jede Zeile neu zu tippen. Die optische Zeichenerkennung (OCR) löst das: Sie liest den Text im Bild und macht daraus echte, auswählbare Zeichen.",
      "Das ist das Tool, das Leute suchen, wenn sie suchen, wie man ein gescanntes Dokument in bearbeitbaren Text verwandelt. Scanne oder fotografiere die Seiten, speichere sie als PDF, lass sie hier durchlaufen und kopiere den Text – oder schicke die durchsuchbare PDF an das Tool PDF in Word.",
    ],
    howTo: [
      { step: "Dokument als PDF scannen oder fotografieren", detail: "Nutze einen Scanner oder eine Scan-App auf dem Handy (die direkt als PDF speichert). Gerade, plane, gut beleuchtete Seiten geben die beste Erkennung." },
      { step: "PDF an OCR für PDF hochladen", detail: "Eine Datei pro Vorgang, bis zu 100 MB. Mehrseitige Dokumente funktionieren: Jede Seite wird verarbeitet." },
      { step: "Erkennung starten", detail: "ConvertBrio liest jede Seite und baut eine Textebene hinter dem Originalbild auf. Größere Dokumente dauern länger, weil jede Seite einzeln durchläuft." },
      { step: "Text in Word bringen", detail: "Öffne die zurückgegebene PDF, wähle alles aus (Strg/Cmd+A) und füge es in Word ein – oder schicke die durchsuchbare PDF an PDF in Word für ein DOCX, das die Grundformatierung behält." },
    ],
    sections: [
      {
        heading: "Was OCR für PDF zurückgibt",
        body: "Eine PDF, die identisch mit der hochgeladenen ist – gleiche Seitenbilder, gleiches Layout – aber mit einer Textebene hinter dem Bild. Damit kannst du mit Strg+F suchen, Passagen markieren und kopieren und das ganze Dokument auswählen, um den Text an einen bearbeitbaren Ort zu bringen. Das Aussehen der Seite ändert sich nicht.",
      },
      {
        heading: "Ein gescanntes Dokument in Word bringen",
        body: [
          "Zwei Wege, je nachdem, wie viel Formatierung du behalten musst.",
          "Für reinen Text: OCR auf die PDF hier anwenden, öffnen und den Text direkt in ein leeres Word-Dokument kopieren. Schnell, und funktioniert für Briefe, Notizen und einspaltige Seiten.",
          "Für ein Dokument, das Überschriften, Absätze und einfache Tabellen behalten soll: Lass die OCR-PDF danach durch das Tool PDF in Word laufen. Es baut den erkannten Inhalt als bearbeitbares DOCX neu auf.",
        ],
      },
      {
        heading: "Die beste Genauigkeit erreichen",
        body: "Die OCR-Qualität folgt der Scan-Qualität. Saubere, kontrastreiche Seiten, mit 300 DPI gescannt oder frontal und gut beleuchtet fotografiert, werden fast perfekt erkannt. Die Genauigkeit sinkt bei Schräglage, Schatten, niedriger Auflösung oder ungewöhnlichen Schriften. Handschrift wird nicht zuverlässig erkannt.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Dein Dokument wird beim Upload verschlüsselt, automatisch ohne menschliche Prüfung verarbeitet, und Upload wie OCR-Ergebnis werden innerhalb von 24 Stunden gelöscht. Eine PDF pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto.",
      },
    ],
    faqDescription: "Häufige Fragen zu OCR auf einer PDF und dem Übernehmen von gescanntem Text in Word.",
    faq: [
      {
        question: "Wie bringe ich ein gescanntes Dokument in Word?",
        answer:
          "Speichere den Scan als PDF, lass ihn durch OCR für PDF laufen, um eine Textebene hinzuzufügen, und kopiere den Text dann direkt in Word – oder schicke die OCR-PDF an das Tool PDF in Word für ein bearbeitbares DOCX, das die Grundformatierung behält.",
      },
      {
        question: "Kann man ein Dokument kostenlos in bearbeitbaren Text scannen?",
        answer:
          "Ja. OCR für PDF ist kostenlos und ohne Konto. Es erkennt den Text jeder gescannten Seite, sodass du ihn auswählen, kopieren und wiederverwenden kannst.",
      },
      {
        question: "Ändert OCR das Aussehen meines Dokuments?",
        answer:
          "Nein. Das Originalseitenbild bleibt exakt erhalten; der erkannte Text wird als unsichtbare Ebene darüber hinzugefügt, visuell ändert sich also nichts.",
      },
      {
        question: "Erkennt es Handschrift?",
        answer: "Nicht zuverlässig. OCR ist für gedruckten und getippten Text gemacht. Handschriftliche Notizen werden bestenfalls teilweise erkannt.",
      },
      {
        question: "Meine PDF hat schon auswählbaren Text – brauche ich noch OCR?",
        answer:
          "Nein. Wenn du den Text bereits mit dem Cursor markieren kannst, hat die PDF eine echte Textebene und du kannst direkt zu PDF in Word gehen.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "PowerPoint online komprimieren: ein .pptx für die E-Mail verkleinern",
    intro: [
      "PowerPoint-Dateien wachsen schnell: ein paar Handy-Fotos, zwei Screenshots, ein exportiertes Diagramm, und ein .pptx überschreitet 40 MB und geht nicht per E-Mail. Das Tool PowerPoint komprimieren von ConvertBrio öffnet die Präsentation, kodiert die enthaltenen Bilder mit effizienter Qualität und Auflösung neu und gibt ein kleineres .pptx zurück, das voll bearbeitbar bleibt.",
      "Es ist kostenlos, läuft im Browser ohne Anmeldung und ohne Wasserzeichen. Folientext, Layout, Animationen, Diagramme und Notizen bleiben unangetastet – nur eingebettete Fotos und Screenshots werden neu kodiert.",
    ],
    howTo: [
      { step: "Präsentation als .pptx speichern", detail: "In PowerPoint: Datei → Speichern unter → PowerPoint-Präsentation (.pptx). Das alte .ppt-Format wird nicht akzeptiert." },
      { step: "Hochladen", detail: "Ziehe das .pptx in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Komprimieren", detail: "ConvertBrio findet jedes eingebettete Bild, verkleinert die, die größer sind als eine Folie zeigt, und kodiert sie neu. Text und Vektorinhalte bleiben unangetastet." },
      { step: "Kleineres .pptx herunterladen", detail: "Öffne es in PowerPoint, um zu prüfen, ob die Folien stimmen, dann per E-Mail senden oder hochladen." },
    ],
    sections: [
      {
        heading: "Warum PowerPoint-Dateien so groß werden",
        body: "Moderne Handys machen Fotos mit 12 bis 48 Megapixeln, je mehrere Megabyte. Klebe vier davon auf die Folien, und die Präsentation trägt ~20 MB Bilddaten, bevor ein einziges Wort Text da ist. PowerPoint behält jedes Bild in der vollen Auflösung des Einfügens, auch wenn die Folie nur eine kleine Version zeigt.",
      },
      {
        heading: "Was das Tool ändert und was nicht",
        body: "",
        list: [
          "Neu kodiert: eingebettete JPEG- und PNG-Bilder, verkleinert wenn über ~1800 px an der langen Seite",
          "Unangetastet: der gesamte Text, Schriften, Folienlayout, Animationen, Übergänge und Notizen",
          "Unangetastet: Diagramme, Tabellen, SmartArt und Vektorformen",
          "Die Datei bleibt ein normales, bearbeitbares .pptx – nichts wird reduziert",
        ],
      },
      {
        heading: "Wie viel kleiner wird sie?",
        body: "Das hängt davon ab, wie bildlastig die Präsentation ist. Eine Präsentation rund um hochauflösende Fotos und Screenshots sinkt oft um 40–70 %. Eine fast reine Textpräsentation mit einem Logo und ein paar kleinen Bildern ändert sich kaum.",
      },
      {
        heading: "Für eine noch kleinere Datei: in PDF umwandeln",
        body: "Ist die Präsentation fertig und muss der Empfänger sie nicht bearbeiten, ergibt das Umwandeln in PDF und anschließende Komprimieren dieses PDF oft die kleinste Datei von allen, und sie öffnet sich auf jedem Gerät ohne PowerPoint. Der Kompromiss: Es ist keine bearbeitbare Präsentation mehr.",
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Deine Präsentation wird beim Upload verschlüsselt, auf den Servern von ConvertBrio automatisch ohne menschliche Prüfung verarbeitet, und Upload wie komprimierte Kopie werden innerhalb von 24 Stunden gelöscht. Ein .pptx pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Verkleinern der Größe einer PowerPoint-Präsentation.",
    faq: [
      {
        question: "Wie komprimiere ich ein PowerPoint für die E-Mail?",
        answer:
          "Lade das .pptx in das Tool PowerPoint komprimieren von ConvertBrio. Es kodiert die eingebetteten Bilder neu und gibt eine kleinere, weiterhin bearbeitbare Präsentation zurück – kostenlos, ohne Anmeldung, ohne Wasserzeichen.",
      },
      {
        question: "Bleibt die komprimierte Datei bearbeitbar?",
        answer:
          "Ja. Die Ausgabe ist ein normales .pptx, das du in PowerPoint öffnest und bearbeitest. Nur die eingebetteten Bilder werden neu kodiert; Text, Layout, Animationen und Notizen ändern sich nicht.",
      },
      {
        question: "Verschlechtert die Komprimierung die Qualität meiner Folien?",
        answer:
          "Text und Vektorformen bleiben perfekt scharf. Fotos werden mit einer kleinen, fast immer unsichtbaren Qualitätsminderung neu kodiert; der Unterschied zeigt sich nur beim starken Hineinzoomen in ein Bild auf einem großen Bildschirm.",
      },
      {
        question: "Meine Präsentation ist kaum kleiner geworden – warum?",
        answer:
          "Sie ist wahrscheinlich schon schlank – eine fast reine Textpräsentation hat wenig Bilddaten zu entfernen.",
      },
      {
        question: "Funktioniert das mit .ppt-Dateien?",
        answer:
          "Nur das moderne Format .pptx. Öffne eine alte .ppt in PowerPoint und speichere sie als .pptx (Datei → Speichern unter), dann komprimieren.",
      },
    ],
  },

  "compress-word": {
    title: "Word-Dokument online komprimieren: ein .docx für die E-Mail verkleinern",
    intro: [
      "Ein Word-Dokument, das nicht per E-Mail geht, trägt fast immer Bilder in voller Auflösung. Ein einziges Handy-Foto in einem Bericht kann allein 5 MB wiegen; ein paar davon und ein fast reines Text-.docx überschreitet 30 MB. Das Tool Word-Dokument komprimieren von ConvertBrio öffnet das Dokument, kodiert die enthaltenen Bilder mit effizienter Qualität und Auflösung neu und gibt ein kleineres .docx zurück, das voll bearbeitbar bleibt.",
      "Es ist kostenlos, läuft im Browser ohne Anmeldung und ohne Wasserzeichen. Text, Überschriften, Tabellen, Formatvorlagen und Layout bleiben unangetastet – nur eingebettete Fotos und Screenshots werden neu kodiert.",
    ],
    howTo: [
      { step: "Dokument als .docx speichern", detail: "In Word: Datei → Speichern unter → Word-Dokument (.docx). Das alte .doc-Format wird nicht akzeptiert." },
      { step: "Hochladen", detail: "Ziehe das .docx in das Feld oder durchsuche. Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Komprimieren", detail: "ConvertBrio findet jedes eingebettete Bild, verkleinert die, die größer sind als eine Seite zeigt, und kodiert sie neu. Text und Vektorinhalte bleiben unangetastet." },
      { step: "Kleineres .docx herunterladen", detail: "Öffne es in Word, um zu prüfen, ob es stimmt, dann per E-Mail senden oder hochladen." },
    ],
    sections: [
      {
        heading: "Warum Word-Dateien so groß werden",
        body: "Word bettet jedes Bild in der Auflösung des Einfügens ein: Ein 24-Megapixel-Foto bleibt 24 Megapixel, auch wenn die Seite es zwei Zentimeter breit zeigt. Text ist im Vergleich winzig. Ein Word-Dokument zu komprimieren heißt also, die enthaltenen Bilder neu zu kodieren und zu verkleinern.",
      },
      {
        heading: "Was das Tool ändert und was nicht",
        body: "",
        list: [
          "Neu kodiert: eingebettete JPEG- und PNG-Bilder, verkleinert wenn über ~1800 px an der langen Seite",
          "Unangetastet: der gesamte Fließtext, Überschriften, Formatvorlagen, Listen und Tabellen",
          "Unangetastet: Seitenlayout, Kopf- und Fußzeilen, Fußnoten und Felder",
          "Die Datei bleibt ein normales, bearbeitbares .docx",
        ],
      },
      {
        heading: "Wenn sie noch zu groß ist",
        body: [
          "Für ein fertiges Dokument, das du versendest, ergibt Word in PDF gefolgt von PDF komprimieren oft die kleinste Datei, und sie kann nicht versehentlich bearbeitet werden.",
          "Ein Dokument, das trotz weniger Bilder groß ist, trägt womöglich Änderungsverfolgung und Versionsverlauf (alle Änderungen annehmen oder ablehnen und die Verfolgung ausschalten), eingebettete Schriften (Datei → Optionen → Speichern → Option „Schriftarten in die Datei einbetten“ deaktivieren), oder als Excel- oder Web-Objekte eingefügten Inhalt.",
        ],
      },
      {
        heading: "Datenschutz und Grenzen",
        body: "Dein Dokument wird beim Upload verschlüsselt, auf den Servern von ConvertBrio automatisch ohne menschliche Prüfung verarbeitet, und Upload wie komprimierte Kopie werden innerhalb von 24 Stunden gelöscht. Ein .docx pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Verkleinern der Größe eines Word-Dokuments.",
    faq: [
      {
        question: "Wie mache ich ein Word-Dokument kleiner für die E-Mail?",
        answer:
          "Lade das .docx in das Tool Word-Dokument komprimieren von ConvertBrio. Es kodiert die eingebetteten Bilder neu und gibt ein kleineres, weiterhin bearbeitbares Dokument zurück – kostenlos, ohne Anmeldung, ohne Wasserzeichen. Für die kleinste Datei in PDF umwandeln und dieses PDF komprimieren.",
      },
      {
        question: "Bleibt die komprimierte Datei bearbeitbar?",
        answer:
          "Ja. Die Ausgabe ist ein normales .docx, das du in Word, Google Docs oder LibreOffice öffnest und bearbeitest. Nur die eingebetteten Bilder werden neu kodiert.",
      },
      {
        question: "Ändert die Komprimierung meinen Text oder meine Formatierung?",
        answer: "Nein. Nur die Bilder sind betroffen. Text, Überschriften, Tabellen, Formatvorlagen und Seitenlayout ändern sich nicht.",
      },
      {
        question: "Mein Dokument ist fast reiner Text, aber trotzdem groß – warum?",
        answer:
          "Prüfe Änderungsverfolgung und Versionsverlauf, eingebettete Schriften oder als vollständige Excel-/Web-Objekte eingefügten Inhalt. Jedes kann unabhängig von den Bildern mehrere Megabyte hinzufügen.",
      },
      {
        question: "Funktioniert das mit alten .doc-Dateien?",
        answer: "Nur das moderne Format .docx. Öffne die .doc in Word und speichere sie als .docx (Datei → Speichern unter), dann komprimieren.",
      },
    ],
  },
};
