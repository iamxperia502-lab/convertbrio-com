import type { HubDoc, HubUiStrings } from "./types";

export const hubsDe: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "PDF-Tools",
    h1: "PDF-Tools: zusammenfügen, teilen, ordnen, komprimieren und konvertieren",
    seoTitle: "Kostenlose PDF-Tools: Zusammenfügen, Teilen & Komprimieren | ConvertBrio",
    description:
      "PDFs online zusammenfügen, teilen, neu ordnen, drehen, entsperren, komprimieren und konvertieren. Kostenlose PDF-Tools von ConvertBrio ohne Anmeldung.",
    intro: [
      "PDFs sollen überall gleich aussehen, und genau deshalb lassen sie sich so schwer verändern. Diese Tools decken die Aufgaben ab, die im Alltag wirklich anfallen: mehrere Dateien kombinieren, Seiten herauslösen, in die richtige Reihenfolge bringen, eine Datei auf ein Upload-Limit verkleinern sowie Seiten in Bilder oder Bilder in Seiten verwandeln.",
      "Jedes Tool läuft in Ihrer Browsersitzung auf den Servern von ConvertBrio, verarbeitet Dateien bis 100 MB und braucht kein Konto. Wählen Sie unten die passende Aufgabe oder folgen Sie einem der Abläufe, wenn Ihr Vorhaben aus mehreren Schritten besteht.",
    ],
    workflows: [
      {
        title: "Ein PDF für einen Upload mit Größenlimit vorbereiten",
        steps: [
          "Nicht benötigte Seiten mit dem visuellen Organizer entfernen.",
          "Die Datei auf exakt das Limit verkleinern, das das Formular erlaubt.",
        ],
      },
      {
        title: "Handyfotos in ein einziges PDF verwandeln",
        steps: [
          "Die Fotos zu einem einzigen PDF zusammenfassen.",
          "Die Größe reduzieren, falls die Datei für eine E-Mail zu groß ist.",
        ],
      },
      {
        title: "Einen Bericht aus mehreren Dokumenten zusammenstellen",
        steps: [
          "Die einzelnen PDFs in der richtigen Reihenfolge zusammenfügen.",
          "Dem fertigen Dokument Seitenzahlen hinzufügen.",
        ],
      },
    ],
    chooser: {
      heading: "Welches PDF-Tool passt zu mir?",
      body: "Mit „PDF zusammenfügen“ verbinden Sie Dateien, mit „PDF teilen“ trennen Sie jede einzelne Seite ab. Wenn Sie nur bestimmte Seiten behalten, die Reihenfolge ändern oder eine gekippte Seite korrigieren möchten, zeigt Ihnen der PDF-Seitenorganisator jede Seite vorab. Bei Größenlimits wendet „PDF komprimieren“ eine feste Standardstufe an, während „PDF auf Zielgröße komprimieren“ auf einen Wert in KB oder MB hinarbeitet und die erreichte Größe anzeigt.",
    },
  },
  image: {
    name: "Bild-Tools",
    h1: "Bild-Tools: Fotos konvertieren, skalieren, komprimieren und bereinigen",
    seoTitle: "Kostenlose Bild-Tools: Fotos konvertieren, skalieren & komprimieren | ConvertBrio",
    description:
      "HEIC, JPG, PNG, WEBP und AVIF konvertieren, pixelgenau skalieren, auf eine Ziel-KB-Größe komprimieren, zuschneiden, drehen und Hintergründe entfernen. Ohne Anmeldung.",
    intro: [
      "Die meisten Bildprobleme laufen auf drei Dinge hinaus: Das Format wird nicht akzeptiert, die Pixelgröße stimmt nicht oder die Datei ist zu groß. Die Tools hier lösen jedes dieser Probleme direkt, ob Sie ein Profilfoto vorbereiten, ein Bewerbungsformular ausfüllen oder Bilder auf einer Website veröffentlichen.",
      "Konvertierungen behalten die Originalauflösung bei, und die Komprimierungs-Tools arbeiten auf eine von Ihnen gewählte Größe hin. Nichts wird mit einem Wasserzeichen versehen, und hochgeladene Dateien werden innerhalb von etwa 24 Stunden gelöscht.",
    ],
    workflows: [
      {
        title: "Ein Foto für ein Bewerbungsformular vorbereiten",
        steps: [
          "Auf die genauen Pixel und das KB-Limit verkleinern, die das Formular verlangt.",
          "Vor dem Hochladen Standort- und Kameradaten entfernen.",
        ],
      },
      {
        title: "Ein iPhone-Foto überall öffnen",
        steps: [
          "Das HEIC-Foto in JPG umwandeln.",
          "Es komprimieren, falls die Datei zum Versenden noch zu groß ist.",
        ],
      },
      {
        title: "Mehrere Bilder für eine Website optimieren",
        steps: [
          "In ein modernes Format wie WEBP konvertieren.",
          "Den gesamten Satz auf eine einheitliche Zielgröße komprimieren.",
        ],
      },
    ],
    chooser: {
      heading: "Welches Bild-Tool passt zu mir?",
      body: "Nutzen Sie den Bildkonverter, wenn das Format das Problem ist, „Bildgröße ändern“ für Pixelmaße und „Bild komprimieren“, wenn nur die Dateigröße zählt. „Foto & Unterschrift anpassen“ erledigt exakte Pixel und KB-Limit in einem Schritt, was die meisten Antragsformulare verlangen. Für mehrere Dateien gleichzeitig eignet sich die Bilder-Stapelkompression.",
    },
  },
  document: {
    name: "Dokument-Tools",
    h1: "Dokument-Tools: Word, Excel, PowerPoint, PDF und Text",
    seoTitle: "Kostenlose Dokument-Tools: Word, Excel, PowerPoint & PDF | ConvertBrio",
    description:
      "Word, Excel und PowerPoint in PDF und zurück umwandeln, Office-Dateien komprimieren, Text aus Scans auslesen und versteckte Metadaten entfernen. Ohne Anmeldung.",
    intro: [
      "Dokumente wandern zwischen Menschen, die unterschiedliche Software nutzen. Diese Tools übersetzen zwischen Word, Excel, PowerPoint und PDF, verkleinern Office-Dateien, die für eine E-Mail zu groß sind, lesen Text aus Scans aus und entfernen die Autorendaten, die Dateien unbemerkt mit sich tragen.",
      "Jedes Tool nennt offen, was es erhält und was nicht – zum Beispiel, dass die Rückumwandlung eines PDFs in Word komplexe Layouts nicht perfekt nachbauen kann. Hochgeladene Dateien werden verschlüsselt übertragen und innerhalb von etwa 24 Stunden gelöscht.",
    ],
    workflows: [
      {
        title: "Ein Word-Dokument versenden, das sich nicht bearbeiten lässt",
        steps: [
          "In PDF umwandeln, damit das Layout fest bleibt.",
          "Bei Bedarf vorher Autoren- und Firmenangaben löschen.",
        ],
      },
      {
        title: "Ein Dokument bearbeiten, das nur als Scan vorliegt",
        steps: [
          "Den Scan in eine bearbeitbare Word-Datei umwandeln.",
          "Die korrigierte Fassung als PDF speichern.",
        ],
      },
      {
        title: "Eine umfangreiche Präsentation per E-Mail verschicken",
        steps: ["Die PowerPoint-Datei auf eine Größe komprimieren, die in eine E-Mail passt."],
      },
    ],
    chooser: {
      heading: "PDF in Word oder Scan in Word?",
      body: "Wenn sich die Wörter in Ihrem PDF markieren lassen, nehmen Sie „PDF in Word“; es übernimmt die Formatierung so genau wie möglich. Ist das PDF dagegen das Bild einer Seite, gibt es keinen Text zum Konvertieren, solange er nicht erkannt wurde. Verwenden Sie dann „Scan in Word“.",
    },
  },
  compress: {
    name: "Komprimierungs-Tools",
    h1: "Komprimierungs-Tools: PDF-, Bild- und Office-Dateien verkleinern",
    seoTitle: "Kostenlose Dateikomprimierung: PDF, Bild & Office | ConvertBrio",
    description:
      "PDFs, Fotos, Word- und PowerPoint-Dateien verkleinern, damit sie in eine E-Mail oder unter ein Upload-Limit passen, auch mit Zielgrößen in KB und MB. Kostenlos, ohne Anmeldung.",
    intro: [
      "Upload-Formulare, E-Mail-Systeme und Websites setzen alle Größenlimits, und der richtige Weg zur Verkleinerung hängt vom Inhalt ab. Fotos werden durch geringere Qualität oder Abmessungen kleiner, PDFs schrumpfen vor allem durch das erneute Kodieren ihrer Bilder, und Office-Dateien enthalten eingebettete Medien, die sich separat reduzieren lassen.",
      "Wo ein Tool auf ein Ziel hinarbeitet, misst es das tatsächliche Ergebnis und nennt die erreichte Größe, auch dann, wenn sich das Ziel nicht erreichen lässt, ohne die Datei zu ruinieren.",
    ],
    workflows: [
      {
        title: "Ein gescanntes PDF unter das Limit eines Portals bringen",
        steps: [
          "Das PDF auf die vom Portal erlaubte Größe komprimieren.",
          "Ist es immer noch zu groß, in mehrere Teile aufteilen.",
        ],
      },
      {
        title: "Viele Fotos für einen Upload verkleinern",
        steps: ["Den gesamten Stapel auf ein einheitliches KB-Ziel komprimieren."],
      },
    ],
    chooser: {
      heading: "Wie stark lässt sich eine Datei verkleinern?",
      body: "Das hängt vom Inhalt ab. PDFs und PowerPoint-Dateien mit vielen Fotos schrumpfen deutlich, reine Text-PDFs sind dagegen schon kompakt. Eine sehr kleine Zielgröße kostet Qualität. Gehen Sie daher vom tatsächlich geltenden Limit aus und nicht von der kleinstmöglichen Zahl.",
    },
  },
  ocr: {
    name: "OCR-Tools",
    h1: "OCR-Tools: Text aus Scans, Fotos und PDFs auslesen",
    seoTitle: "Kostenlose OCR-Tools: Bild in Text, Scan in Word, OCR-PDF | ConvertBrio",
    description:
      "Mit OCR Text aus einem Bild kopieren, einen Scan in eine bearbeitbare Word-Datei verwandeln oder ein gescanntes PDF durchsuchbar machen. Kostenlos, mit ehrlichen Hinweisen zur Genauigkeit.",
    intro: [
      "Ein Scan oder ein Foto von Text ist zunächst nur ein Bild. Die optische Zeichenerkennung (OCR) liest die Buchstaben darin und liefert echten, markierbaren Text. Welches Tool passt, hängt davon ab, was Sie zurückbekommen möchten: reinen Text zum Kopieren, eine bearbeitbare Word-Datei oder dasselbe PDF, nur durchsuchbar.",
      "OCR arbeitet bei sauberem, hochauflösendem Drucktext genau, bei Handschrift, schlechten Scans und komplexen Tabellen dagegen deutlich schwächer. Auf jeder Tool-Seite steht, was Sie erwarten können.",
    ],
    workflows: [
      {
        title: "Einen gescannten Brief in ein bearbeitbares Dokument verwandeln",
        steps: [
          "Den Scan in Word umwandeln.",
          "Korrekturlesen und anschließend als PDF speichern.",
        ],
      },
      {
        title: "Ein Archiv aus Scans durchsuchbar machen",
        steps: [
          "OCR ausführen, um jedem PDF eine Textebene hinzuzufügen.",
          "Das durchsuchbare PDF für die Ablage verkleinern.",
        ],
      },
    ],
    chooser: {
      heading: "Welches OCR-Tool passt zu mir?",
      body: "„Bild in Text“ ist für ein Foto oder einen Screenshot gedacht, wenn Sie nur die Wörter brauchen; der Text erscheint zum Kopieren auf der Seite. „Scan in Word“ erzeugt aus einer gescannten Seite oder einem PDF eine bearbeitbare DOCX-Datei. „OCR-PDF“ belässt Ihre Originalseiten exakt so, wie sie aussehen, und ergänzt eine unsichtbare Textebene, sodass das PDF durchsuchbar wird.",
    },
  },
  ai: {
    name: "KI-Tools",
    h1: "KI-Tools: Fotos verbessern, hochskalieren und freistellen",
    seoTitle: "Kostenlose KI-Foto-Tools: Verbessern, Hochskalieren, Freistellen | ConvertBrio",
    description:
      "Fotos mit KI verbessern, hochskalieren und freistellen oder ein Passfoto erstellen. Kostenlos, ohne Anmeldung, mit ehrlichen Hinweisen, was jedes Tool kann und was nicht.",
    intro: [
      "Diese Tools setzen Modelle des maschinellen Lernens für Aufgaben ein, die sich von Hand nur schwer erledigen lassen: ein flaues Foto schärfen, ein kleines Bild vergrößern, ohne dass es zu Brei wird, und eine Person vom Hintergrund trennen.",
      "KI-Ergebnisse hängen von der Vorlage ab. Ein klares Foto liefert ein klares Ergebnis, und kein Tool hier kann Details wiederherstellen, die nie aufgenommen wurden. Jede Seite erklärt, wo ein Tool gut funktioniert und wo nicht.",
    ],
    workflows: [
      {
        title: "Ein kleines, flaues Foto aufwerten",
        steps: [
          "Farbe und Schärfe ausbalancieren.",
          "Es für den Druck oder eine größere Darstellung vergrößern.",
        ],
      },
      {
        title: "Ein sauberes Produkt- oder Profilbild erstellen",
        steps: [
          "Den Hintergrund entfernen.",
          "Das Ergebnis für das Web komprimieren.",
        ],
      },
    ],
    chooser: {
      heading: "Bildverbesserer oder Hochskalierer?",
      body: "Der KI-Bildverbesserer korrigiert Farbe und Schärfe bei gleicher Größe. Der KI-Hochskalierer erhöht die Pixelmaße. Ist ein Foto sowohl klein als auch flau, verbessern Sie es zuerst und skalieren es danach hoch.",
    },
  },
};

export const hubUiDe: HubUiStrings = {
  allTemplate: "Alle {name}",
  workflows: "Empfohlene Abläufe",
  guides: "Ratgeber",
  otherCategories: "Weitere Tool-Kategorien",
  allTools: "Alle Tools",
  home: "Startseite",
  toolLibrary: "Tool-Bibliothek",
  allToolsIntro: "Alle ConvertBrio-Tools, nach Kategorie geordnet. Regelmäßig kommen weitere Tools hinzu.",
  categoriesLabel: "Tool-Kategorien",
  categoryGuide: "Kategorie-Ratgeber",
  moreTools: "Weitere Tools",
  moreToolsDesc: "Begleit-Tools auf anderen ConvertBrio-Angeboten.",
  categoryDescs: {
    convert: "Jede Datei von einem Format in ein anderes umwandeln.",
    compress: "Dateigröße verringern, ohne die Qualität zu opfern.",
    pdf: "PDF-Dokumente zusammenfügen, teilen, bearbeiten und schützen.",
    image: "Bilder konvertieren, skalieren, zuschneiden und bereinigen.",
    document: "Inhalte zwischen Word, Excel, PowerPoint und PDF übertragen.",
    ai: "Bilder mit KI-Modellen verbessern und wiederherstellen.",
  },
};
