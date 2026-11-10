import type { ToolContentEntry } from "../toolContent";

// German (de) long-form tool content, slice B. Links point to the /de/ tool pages.

export const toolContentDeMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "PDF in PNG umwandeln: Seiten verlustfrei als Bild exportieren",
    intro:
      "Wenn du eine PDF-Seite als Bild brauchst und keine Schärfe verlieren willst – bei Diagrammen, Screenshots oder textlastigen Seiten –, ist PNG das bessere Exportformat als JPG. Der Konverter PDF in PNG von ConvertBrio macht aus jeder Seite eine verlustfreie Bilddatei.",
    sections: [
      {
        heading: "So wandelst du PDF in PNG um",
        body: "Lade deine PDF hoch, und ConvertBrio rendert jede Seite in voller Qualität als PNG-Bild. Mehrseitige PDFs ergeben ein PNG pro Seite, die zusammen als fertiges Set heruntergeladen werden.",
      },
      {
        heading: "Warum PNG statt JPG",
        body: "Die verlustfreie Komprimierung von PNG hält feinen Text, Strichzeichnungen und scharfe Kanten frei von der Weichzeichnung, die die JPG-Komprimierung verursachen kann. Das zählt vor allem bei Seiten mit kleiner Schrift, technischen Diagrammen oder Inhalten, in die du hineinzoomen oder die du weiterbearbeiten willst.",
      },
      {
        heading: "Hinweise zur Dateigröße",
        body: "PNG-Exporte sind in der Regel größer als vergleichbare JPGs, besonders bei Seiten mit vielen Bilddetails. Wenn die Dateigröße wichtiger ist als pixelgenaue Schärfe, etwa beim beiläufigen Teilen oder Posten im Netz, ist PDF in JPG vielleicht die praktischere Wahl.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von PDF-Seiten in PNG-Bilder.",
    faq: [
      {
        question: "Warum sollte ich für eine PDF-Seite PNG statt JPG verwenden?",
        answer:
          "PNG ist verlustfrei und hält Text und feine Details schärfer als JPG, dessen Komprimierung kleine Schrift und Strichzeichnungen leicht weichzeichnen kann. Nimm PNG, wenn Klarheit wichtiger ist als die Dateigröße.",
      },
      {
        question: "Wandelt PDF in PNG auch mehrseitige Dokumente um?",
        answer:
          "Ja, jede Seite der PDF wird als eigenes PNG-Bild gerendert, ein mehrseitiges Dokument ergibt also ein Bild pro Seite.",
      },
      {
        question: "Sind die PNG-Dateien größer als JPG-Exporte?",
        answer:
          "In der Regel ja, denn PNG verwirft keine Details wie die verlustbehaftete JPG-Komprimierung. Zum beiläufigen Teilen, wo es auf die Größe ankommt, ist PDF in JPG oft die bessere Option.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Bild in PDF umwandeln: Fotos zu einem Dokument zusammenfassen",
    intro:
      "Ob du gescannte Seiten einreichst, eine Foto-Mappe zusammenstellst oder Belege zu einer einzigen teilbaren Datei machst: Das Tool Bild in PDF von ConvertBrio fasst ein oder mehrere Bilder – JPG, PNG, WEBP, HEIC, AVIF oder GIF – in der von dir gewählten Reihenfolge zu einem PDF-Dokument zusammen.",
    sections: [
      {
        heading: "So wandelst du Bilder in PDF um",
        body: "Lade ein oder mehrere Bilder in einem gängigen Format hoch, bringe sie in die gewünschte Reihenfolge, und ConvertBrio fügt sie zu einer einzigen PDF mit einem Bild pro Seite zusammen. Das Ergebnis lässt sich direkt teilen, drucken oder einreichen.",
      },
      {
        heading: "Typische Einsatzzwecke",
        body: "So reichst du gescannte Ausweisdokumente ein, fasst HEIC-Fotos vom iPhone von Belegen oder Verträgen für eine Bewerbung zu einer Datei zusammen oder machst aus einer Bilderserie ein einfaches, teilbares Dokument – ganz ohne Design- oder PDF-Bearbeitungsprogramm.",
      },
      {
        heading: "Viele Bilder auf einmal zusammenfügen",
        body: "Du kannst mehrere Bilder in einem Durchgang hochladen – kostenlos und ohne Konto.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Bildern in PDF.",
    faq: [
      {
        question: "Kann ich mehrere Bilder zu einer PDF zusammenfassen?",
        answer:
          "Ja, lade so viele Bilder hoch, wie du brauchst. ConvertBrio fügt sie zu einer PDF zusammen, in der jedes Bild in der von dir gewählten Reihenfolge auf einer eigenen Seite steht.",
      },
      {
        question: "Funktioniert das mit HEIC-Fotos vom iPhone?",
        answer:
          "Ja, Bild in PDF akzeptiert HEIC und HEIF direkt, ebenso JPG, PNG, WEBP, AVIF und GIF. Du musst deine iPhone-Fotos also nicht vorher umwandeln.",
      },
      {
        question: "Welche Bildformate akzeptiert dieses Tool?",
        answer:
          "Bild in PDF akzeptiert JPG, PNG, WEBP, HEIC, HEIF, AVIF und GIF und fügt sie alle zu einer einzigen PDF zusammen.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Word in JPG umwandeln: Dokumentseiten als Bilder exportieren",
    intro:
      "Manchmal brauchst du die Seite eines Word-Dokuments als Bild statt als bearbeitbare Datei: für eine Vorschau, einen Social-Media-Beitrag oder zum Einbetten in ein Tool, das keine Dokumente verarbeitet. Der Konverter Word in JPG von ConvertBrio exportiert jede Seite deiner DOCX-Datei als JPG-Bild.",
    sections: [
      {
        heading: "So wandelst du Word in JPG um",
        body: "Lade deine DOCX-Datei hoch, und ConvertBrio rendert jede Seite als JPG-Bild, wobei Layout und Formatierung so erhalten bleiben, wie sie im Ausdruck aussehen würden. Mehrseitige Dokumente ergeben ein Bild pro Seite.",
      },
      {
        heading: "Typische Einsatzzwecke",
        body: "Praktisch, um schnell eine visuelle Vorschau eines Dokuments zu erstellen, eine einzelne Seite als Bild in sozialen Netzwerken oder in einer Chat-App zu teilen oder eine Dokumentseite in eine Website oder Präsentation einzubetten, wo eine echte Datei unpraktisch ist.",
      },
      {
        heading: "PNG für schärferen Text",
        body: "Enthält die exportierte Seite kleine Schrift oder feine Details, die gestochen scharf bleiben sollen, nimm stattdessen Word in PNG: Das verlustfreie PNG-Format vermeidet die leichte Weichzeichnung, die die JPG-Komprimierung an Textkanten verursachen kann.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Word-Dokumenten in JPG-Bilder.",
    faq: [
      {
        question: "Wie mache ich aus einer Word-Seite ein Bild?",
        answer:
          "Lade deine DOCX-Datei in das Tool Word in JPG von ConvertBrio hoch. Es rendert jede Seite des Dokuments als JPG-Bild, das du herunterladen kannst.",
      },
      {
        question: "Funktioniert das auch bei mehrseitigen Dokumenten?",
        answer:
          "Ja, jede Seite des Dokuments wird als eigenes JPG-Bild exportiert, eine mehrseitige Datei ergibt also einen vollständigen Satz Bilder.",
      },
      {
        question: "Sollte ich bei einem Dokument mit kleiner Schrift JPG oder PNG nehmen?",
        answer:
          "PNG hält kleine Schrift und feine Details schärfer, da es verlustfrei ist. Nimm Word in PNG, wenn gestochen scharfer Text wichtiger ist als die kleinere Dateigröße von JPG.",
      },
    ],
  },

  "word-to-png": {
    title: "Word in PNG umwandeln: Seiten mit verlustfreier Klarheit exportieren",
    intro:
      "Soll eine Word-Seite ohne Schärfeverlust zum Bild werden – bei detailreichen Diagrammen, Tabellen oder Kleingedrucktem –, ist PNG das bessere Exportformat als JPG. Der Konverter Word in PNG von ConvertBrio rendert jede Seite deiner DOCX-Datei als verlustfreies PNG-Bild.",
    sections: [
      {
        heading: "So wandelst du Word in PNG um",
        body: "Lade deine DOCX-Datei hoch, und ConvertBrio rendert jede Seite in voller Qualität als PNG-Bild, wobei feine Details und Textschärfe erhalten bleiben. Mehrseitige Dokumente ergeben ein PNG pro Seite.",
      },
      {
        heading: "Warum PNG bei Dokumenten mit vielen Details",
        body: "Die verlustfreie Komprimierung von PNG vermeidet die Weichzeichnung um Text und feine Linien, die die JPG-Komprimierung verursachen kann. Das ist vor allem bei Seiten mit Tabellen, Diagrammen, Kleingedrucktem oder Inhalten wichtig, in die du hineinzoomen willst.",
      },
      {
        heading: "Wann JPG besser sein kann",
        body: "Wenn die Dateigröße wichtiger ist als pixelgenaue Schärfe – etwa beim schnellen Teilen oder für beiläufige Vorschauen –, liefert Word in JPG eine kleinere Datei, bei den meisten Dokumenten mit nur geringem Qualitätsunterschied.",
      },
      {
        heading: "Layout, Downloads und Limits",
        body: "Deine DOCX-Datei wird zunächst auf einer Standardseite im Format A4 gesetzt. Komplexe Word-spezifische Formatierungen wie Kopf- und Fußzeilen, Fußnoten oder ungewöhnliche Seitenformate werden daher möglicherweise etwas anders dargestellt als in Word selbst. Ein einseitiges Dokument wird als einzelnes PNG heruntergeladen, mehrseitige Dokumente als ZIP-Datei mit einem PNG pro Seite. Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Umwandlung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Word-Dokumenten in PNG-Bilder.",
    faq: [
      {
        question: "Warum PNG statt JPG für eine Dokumentseite?",
        answer:
          "PNG ist verlustfrei und hält Text, Tabellen und Diagramme schärfer als JPG, dessen Komprimierung feine Details leicht weichzeichnen kann. Wähle PNG, wenn es auf Klarheit ankommt.",
      },
      {
        question: "Unterstützt Word in PNG mehrseitige Dokumente?",
        answer:
          "Ja, jede Seite deiner DOCX-Datei wird als eigenes PNG-Bild gerendert. Ein einseitiges Dokument wird direkt als PNG heruntergeladen, mehrere Seiten zusammen als ZIP-Datei.",
      },
      {
        question: "Bleibt die genaue Formatierung meines Dokuments erhalten?",
        answer:
          "Text, Überschriften, Listen, Tabellen und Bilder werden übernommen. Sehr komplexe Word-spezifische Layouts (eigene Kopf- und Fußzeilen, ungewöhnliche Seitenformate) können jedoch etwas anders aussehen, da die Seite auf einem Standard-A4-Layout neu aufgebaut und nicht von Word selbst gerendert wird.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Excel in PDF umwandeln: Tabellenlayout für den Versand festhalten",
    intro:
      "Eine Tabelle kann je nach Spaltenbreite, Schriftarten oder Softwareversion anders aussehen – ein Problem, wenn ein Finanzbericht, eine Rechnung oder eine Datentabelle überall gleich aussehen muss. Der Konverter Excel in PDF von ConvertBrio macht aus deiner Tabelle ein festes, druckfertiges PDF, das auf jedem Gerät und in jeder Software identisch angezeigt wird.",
    sections: [
      {
        heading: "So wandelst du Excel in PDF um",
        body: "Lade deine .xls- oder .xlsx-Datei hoch, und ConvertBrio rendert jedes Tabellenblatt als Seite (oder Seitengruppe) in einer PDF, wobei deine Daten, die Zellformatierung und verbundene Zellen erhalten bleiben. Die umgewandelte Datei wird automatisch heruntergeladen und ist bereit zum Mailen, Drucken oder Archivieren.",
      },
      {
        heading: "Warum vor dem Teilen in PDF umwandeln",
        body: "PDF ist das Standardformat für fertige Dokumente, weil es auf jedem Gerät und in jedem Betriebssystem identisch angezeigt wird – anders als eine Tabelle, die je nach installierter Software umbrechen oder anders aussehen kann. Die Umwandlung hält dein Layout fest, bevor ein Bericht, eine Rechnung oder eine Datentabelle das Haus verlässt, und der Empfänger braucht kein Excel, um sie anzusehen.",
      },
      {
        heading: "Typische Anwendungsfälle",
        body: "Das Tool wird häufig genutzt, um Finanzberichte und Rechnungen an Personen ohne Excel zu schicken, einen festen Stand einer Tabelle zu archivieren, bevor sie sich weiter ändert, und Datentabellen für Druck oder offizielle Verteilung vorzubereiten.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Excel-Tabellen in PDF.",
    faq: [
      {
        question: "Wie wandle ich eine Excel-Datei in PDF um?",
        answer:
          "Lade deine .xls- oder .xlsx-Datei in das Tool Excel in PDF von ConvertBrio hoch. Es erzeugt eine formatierte PDF-Version zum Herunterladen – ganz ohne installiertes Microsoft Excel.",
      },
      {
        question: "Bleiben Formatierung und Formeln meiner Tabelle gleich?",
        answer:
          "Zellformatierung, verbundene Zellen und Layout bleiben erhalten. Formeln werden in ihren zuletzt berechneten Wert umgewandelt, statt als Formeln aktiv zu bleiben, denn eine PDF ist ein festes, statisches Dokument und keine bearbeitbare Tabelle.",
      },
      {
        question: "Was ist, wenn meine Tabelle mehrere Blätter hat?",
        answer:
          "Jedes Blatt deiner Arbeitsmappe wird umgewandelt und landet in derselben Reihenfolge wie in der Originaldatei auf einer eigenen Seite (oder Seitengruppe) der PDF.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "PowerPoint in PDF umwandeln: Folien ohne PowerPoint teilen",
    intro: [
      "Eine Präsentation an jemanden schicken, der kein PowerPoint hat, vor der Prüfung eine finale Version festhalten oder eine riesige Präsentation so verkleinern, dass sie sich überhaupt mailen lässt – all das beginnt meist damit, die .pptx in PDF umzuwandeln. Der Konverter PowerPoint in PDF von ConvertBrio erledigt das im Browser, kostenlos, mit einer Seite pro Folie und ohne Wasserzeichen.",
      "Eine PDF öffnet sich auf jedem Gerät, lässt sich nicht versehentlich bearbeiten und ist bei bildlastigen Präsentationen oft deutlich kleiner als die ursprüngliche .pptx, wenn du sie zusätzlich durch PDF komprimieren schickst.",
    ],
    howTo: [
      {
        step: "Präsentation als .pptx speichern",
        detail: "In PowerPoint: Datei → Speichern unter → PowerPoint-Präsentation (.pptx). Das alte .ppt-Format wird nicht unterstützt.",
      },
      {
        step: "Datei hochladen",
        detail: "Ziehe sie in das Feld oder klicke zum Durchsuchen. Eine Datei pro Vorgang, bis zu 100 MB.",
      },
      {
        step: "In PDF umwandeln",
        detail: "ConvertBrio rendert jede Folie als ganze Seite. Die PDF wird automatisch heruntergeladen.",
      },
      {
        step: "Bei Bedarf komprimieren",
        detail: "Ist die Präsentation bildlastig und die PDF noch groß, schicke sie durch PDF komprimieren, um die eingebetteten Bilder neu zu kodieren.",
      },
    ],
    sections: [
      {
        heading: "Warum vor dem Teilen in PDF umwandeln",
        body: "Eine .pptx braucht PowerPoint oder einen kompatiblen Viewer und kann je nach installierten Schriftarten des Empfängers anders aussehen: Aufzählungspunkte verrutschen, Text läuft aus dem Feld, eine besondere Schrift wird durch eine allgemeine ersetzt. Eine PDF ist fest: Was du schickst, sieht der Empfänger genau so – auf dem Handy, dem Mac oder einem gesperrten Firmenlaptop ohne Office.",
      },
      {
        heading: "Eine PowerPoint verkleinern",
        body: [
          "Ein eigenes Tool zum Komprimieren von PowerPoint, das die Datei bearbeitbar lässt, ist noch in Entwicklung. Bis dahin ist dieser zweistufige Weg der zuverlässigste, um eine Präsentation für den E-Mail-Versand zu verkleinern:",
          "Wandle die .pptx hier in PDF um und schicke die PDF dann durch PDF komprimieren. Dabei wird jedes eingebettete Foto und jeder Screenshot mit effizienter Qualität neu kodiert und zu große Bilder werden verkleinert – dort steckt fast das gesamte Gewicht einer schweren Präsentation. Das Ergebnis ist eine teilbare, überall lesbare Datei, meist nur ein Bruchteil der Originalgröße. Der Haken: Die Ausgabe ist eine PDF, keine bearbeitbare Präsentation.",
        ],
      },
      {
        heading: "Was erhalten bleibt und was nicht",
        body: "Text, Bilder und Folienlayout werden sauber umgewandelt. Animationen und Folienübergänge gibt es in einer statischen PDF nicht, daher entfallen sie. Diagramme, SmartArt und eingebettete Tabellen werden so dargestellt, wie sie auf der Folie erscheinen, sind aber nicht interaktiv. Setzt deine Präsentation stark auf Einblendungen und Animationen, prüfe die PDF vor dem Versand, damit du weißt, wie sie ohne Bewegung wirkt.",
      },
      {
        heading: "Datenschutz und Limits",
        body: "Die Datei wird verschlüsselt übertragen. Deine Originaldatei wird gelöscht, sobald sie für die Umwandlung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Eine .pptx pro Vorgang, bis zu 100 MB, kostenlos, ohne Konto, ohne Wasserzeichen.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von PowerPoint-Präsentationen in PDF.",
    faq: [
      {
        question: "Wie wandle ich eine PowerPoint-Datei kostenlos in PDF um?",
        answer:
          "Lade deine .pptx in das Tool PowerPoint in PDF von ConvertBrio hoch. Es erzeugt eine PDF mit einer Seite pro Folie zum Herunterladen – ohne installiertes PowerPoint, ohne Konto, ohne Wasserzeichen.",
      },
      {
        question: "Wie komprimiere ich eine PowerPoint, um sie per E-Mail zu schicken?",
        answer:
          "Wandle die .pptx hier in PDF um und schicke die PDF dann durch PDF komprimieren. Dabei werden die eingebetteten Bilder neu kodiert, aus denen der Großteil der Größe einer umfangreichen Präsentation stammt. Das Ergebnis ist deutlich kleiner, allerdings eine PDF und keine bearbeitbare Präsentation.",
      },
      {
        question: "Bleiben Animationen oder Übergänge erhalten?",
        answer:
          "Nein, eine PDF ist statisch, daher entfallen Animationen und Übergänge. Text, Bilder, Diagramme und Folienlayout bleiben so erhalten, wie sie auf jeder Folie erscheinen.",
      },
      {
        question: "Funktioniert das auch mit alten .ppt-Dateien?",
        answer:
          "Nur mit dem modernen .pptx-Format. Öffne die Datei in PowerPoint, speichere sie als .pptx (Datei → Speichern unter) und wandle sie dann um.",
      },
      {
        question: "Kann ich zwei Folien pro PDF-Seite oder ein Handout-Layout bekommen?",
        answer:
          "Derzeit nicht, der Konverter rendert eine ganze Folie pro Seite. Für Handout-Layouts exportiere direkt aus PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Dokumente zusammenführen: Word, Excel und PowerPoint zu einer PDF",
    intro:
      "Wer Word-, Excel- und PowerPoint-Dateien zu einer einzigen PDF kombinieren will, muss meist jede einzeln umwandeln und dann von Hand zusammenfügen. Das Tool Dokumente zusammenführen von ConvertBrio erledigt den ganzen Ablauf in einem Schritt.",
    sections: [
      {
        heading: "So führst du Dokumente zusammen",
        body: "Lade mehrere Dateien hoch – beliebig gemischt aus Word, Excel, PowerPoint und PDF –, und ConvertBrio wandelt jede in PDF um und fügt sie zu einem geordneten Dokument zusammen. Die zusammengeführte PDF wird automatisch heruntergeladen und ist bereit zum Mailen, Drucken oder Archivieren.",
      },
      {
        heading: "Warum zu einer PDF zusammenführen",
        body: "Eine einzelne PDF lässt sich leichter teilen, prüfen und archivieren als ein Wust an Dateien in verschiedenen Formaten. Außerdem sieht der Empfänger garantiert alles in der vorgesehenen Reihenfolge, ohne dass Word, Excel oder PowerPoint installiert sein müssen.",
      },
      {
        heading: "Reihenfolge der Dokumente",
        body: "Die Dateien werden in der Reihenfolge zusammengefügt, in der du sie hochlädst. Ordne deine Auswahl also vorher, wenn das fertige Dokument eine bestimmte Abfolge braucht – zum Beispiel erst ein Deckblatt, dann ein Bericht, dann die zugehörigen Tabellendaten.",
      },
      {
        heading: "Limits und Datenschutz",
        body: "Du kannst in einem Durchgang bis zu 25 Dateien mit zusammen höchstens 100 MB kombinieren. Jede Datei wird auf dem Server umgewandelt und verarbeitet, nicht in deinem Browser. Deine Originaldateien werden gelöscht, sobald sie für die Umwandlung gelesen wurden. Das zusammengeführte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum Zusammenführen von Word-, Excel- und PowerPoint-Dateien zu einer PDF.",
    faq: [
      {
        question: "Welche Dateitypen kann ich kombinieren?",
        answer:
          "Beliebig gemischte Word- (.docx), Excel- (.xlsx, .xls), PowerPoint- (.pptx) und PDF-Dateien im selben Upload: Jede Nicht-PDF-Datei wird zuerst in PDF umgewandelt, danach werden alle zusammengefügt.",
      },
      {
        question: "In welcher Reihenfolge werden meine Dateien zusammengeführt?",
        answer:
          "Die Dateien werden in der Reihenfolge kombiniert, in der du sie hochlädst. Ordne deine Dateiauswahl vorher, wenn das fertige Dokument eine bestimmte Abfolge braucht.",
      },
      {
        question: "Funktioniert das mit alten .doc-/.ppt-/.xls-Dateien?",
        answer:
          "Die alten Formate .doc und .ppt werden nicht unterstützt: Speichere diese Dateien zuerst als .docx oder .pptx. Alte .xls-Tabellen funktionieren, da die Excel-Umwandlung von ConvertBrio dieses Format direkt liest.",
      },
    ],
  },

  "remove-background": {
    title: "KI-Hintergrundentferner: automatisch transparente Freisteller",
    intro: [
      "Ein Motiv vom Hintergrund freizustellen bedeutet meist Designsoftware und mühsames Maskieren um jede Haarsträhne. Der KI-Hintergrundentferner von ConvertBrio erledigt das automatisch: Lade ein Foto hoch und erhalte das Motiv in Sekunden auf transparentem Hintergrund zurück – als PNG, das du auf jeden neuen Hintergrund legen kannst.",
      "Das Tool ist kostenlos, braucht kein Konto und setzt kein Wasserzeichen. Das Modell ist Open Source und läuft in der eigenen Verarbeitung von ConvertBrio, dein Foto wird also nicht an einen KI-Dienst eines Drittanbieters geschickt.",
    ],
    howTo: [
      {
        step: "Foto hochladen",
        detail: "JPG, PNG, WEBP, HEIC oder AVIF, bis zu 100 MB. Am besten funktioniert ein klares Motiv vor einem einigermaßen schlichten Hintergrund.",
      },
      {
        step: "Das Modell arbeiten lassen",
        detail: "Die KI erkennt das Hauptmotiv – eine Person, ein Produkt oder einen Gegenstand – und löscht alles andere.",
      },
      {
        step: "Transparentes PNG herunterladen",
        detail: "Der Freisteller wird als PNG mit transparentem Hintergrund heruntergeladen. Du kannst ihn auf einer Website, in einem Entwurf oder auf einer einfarbigen Fläche platzieren.",
      },
    ],
    sections: [
      {
        heading: "Was du mit dem Freisteller machen kannst",
        body: "",
        list: [
          "Ein Produktfoto auf einen sauberen weißen oder markenfarbenen Hintergrund für ein Shop-Listing setzen",
          "Ein Porträt in eine Teamseite, einen Ausweis oder eine Folie einsetzen",
          "Einen Sticker, ein Logo oder eine Grafik ohne eckigen Hintergrund erstellen",
          "Ein Motiv in eine andere Szene einfügen",
          "Ein Passfoto erstellen – der Passfoto-Ersteller übernimmt das Format und den weißen Hintergrund aber in einem Schritt für dich",
        ],
      },
      {
        heading: "Saubere Kanten erzielen",
        body: "Die Ergebnisse sind am besten, wenn sich das Motiv deutlich von dem abhebt, was dahinter liegt: gutes Licht, ein halbwegs schlichter Hintergrund und ordentlicher Kontrast an den Rändern. Schwer tut sich das Modell mit feinen abstehenden Haaren, transparenten oder gläsernen Objekten, kontrastarmen Grenzen (ein grauer Mantel vor einer grauen Wand) und Fotos mit mehreren sich überlappenden Personen. Wird eine Kante rau, hilft meist ein sauberes Ausgangsfoto; für kleine Korrekturen schneide das Ergebnis mit dem Tool Bild zuschneiden zu.",
      },
      {
        heading: "Datenschutz",
        body: "Das Modell zur Hintergrundentfernung ist quelloffen und läuft in der eigenen Verarbeitung von ConvertBrio: Dein Foto wird weder an eine externe API geschickt noch von einem Menschen angesehen. Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Verarbeitung gelesen wurde. Der Freisteller wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum KI-Hintergrundentferner von ConvertBrio.",
    faq: [
      {
        question: "Ist der Hintergrundentferner kostenlos?",
        answer:
          "Ja, ohne Konto, ohne Wasserzeichen und ohne Begrenzung der Fotoanzahl. Uploads können bis zu 100 MB groß sein.",
      },
      {
        question: "Welches Ausgabeformat bekomme ich?",
        answer:
          "Ein PNG mit transparentem Hintergrund – das übliche verlustfreie Format für Bilder ohne festen Hintergrund. Öffne es in einem beliebigen Editor, um es auf einen neuen Hintergrund zu legen.",
      },
      {
        question: "Funktioniert es bei jeder Art von Foto?",
        answer:
          "Es ist für gängige Motive wie Personen, Produkte und Gegenstände vor einem halbwegs klaren Hintergrund gedacht. Unruhige Szenen, gläserne Objekte, feine Haare und kontrastarme Kanten sind schwieriger und brauchen unter Umständen ein saubereres Ausgangsfoto.",
      },
      {
        question: "Funktioniert es bei Fotos mit mehreren Motiven?",
        answer:
          "Es ist auf ein klares Hauptmotiv optimiert. Bei mehreren sich überlappenden Motiven können die Kanten ungenauer werden.",
      },
      {
        question: "Wird mein Foto an den KI-Dienst eines anderen Unternehmens geschickt?",
        answer:
          "Nein. Das Modell läuft mit Open-Source-Software in der eigenen Verarbeitung von ConvertBrio. Dein Originalfoto wird gelöscht, sobald es gelesen wurde, das Ergebnis durch eine tägliche Bereinigung in der Regel innerhalb von etwa 24 Stunden.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Passfoto-Ersteller: kostenloses Passbild online im richtigen Format",
    intro: [
      "Ein vorschriftsmäßiges Passfoto braucht einen schlichten weißen Hintergrund, ein zentriertes Motiv in der richtigen Größe und die passenden physischen Maße – normalerweise ein Gang zur Drogerie oder zum Fotostudio. Der Passfoto-Ersteller von ConvertBrio erledigt alle drei Punkte automatisch: Lade ein Selfie oder ein beliebiges klares Porträt hoch und erhalte in Sekunden ein druckfertiges Foto im Format 2×2 Zoll mit sauberem weißem Hintergrund.",
      "Das Tool ist kostenlos, ohne Konto und ohne Wasserzeichen. Gesichtserkennung und Hintergrundentfernung laufen in der eigenen Verarbeitung von ConvertBrio, dein Foto wird also nicht an einen externen Dienst geschickt.",
    ],
    howTo: [
      {
        step: "Ein schlichtes Porträt aufnehmen",
        detail:
          "Frontal, neutraler Ausdruck, gleichmäßiges Licht, Kopf und Schultern im Bild mit etwas Platz drumherum. Ein Handy-Selfie vor einer hellen Wand reicht.",
      },
      {
        step: "Hochladen",
        detail: "Eine Person pro Foto, bis zu 100 MB. Gruppenfotos und sehr eng beschnittene Nahaufnahmen werden nicht verarbeitet.",
      },
      {
        step: "Das Tool das Foto erstellen lassen",
        detail:
          "ConvertBrio erkennt dein Gesicht, schneidet es passfototauglich zu und zentriert es, entfernt den Hintergrund und füllt ihn einfarbig weiß.",
      },
      {
        step: "Herunterladen und in 2×2 Zoll drucken",
        detail:
          "Du erhältst ein Bild mit 1200×1200 Pixeln bei 600 DPI: das Format 2×2 Zoll, das für Pass- und Visumfotos in den USA und in Indien verwendet wird.",
      },
    ],
    sections: [
      {
        heading: "So funktioniert es",
        body: "Lade ein Foto hoch, und ConvertBrio erkennt dein Gesicht, schneidet es auf übliche Passfoto-Proportionen zu und zentriert es, entfernt den ursprünglichen Hintergrund und ersetzt ihn durch reines Weiß. Ausgegeben wird ein Foto im Format 2×2 Zoll bei 600 DPI (1200×1200 Pixel), das für Pass- und Visumfotos in den USA und in Indien gilt. Du musst nichts von Hand positionieren oder anpassen.",
      },
      {
        heading: "Passfoto-Größen nach Land",
        body: "Das Tool gibt das Format 2×2 Zoll (51×51 mm) aus. Für manche Länder ist das genau die Vorgabe, für andere eine brauchbare Ausgangsbasis, die du zuschneiden kannst – prüfe immer die aktuelle Vorgabe deiner Behörde, bevor du etwas einreichst.",
        table: {
          headers: ["Land", "Geforderte Größe", "Passt die 2×2-Zoll-Ausgabe?"],
          rows: [
            ["USA", "2 × 2 Zoll (51 × 51 mm)", "Ja, direkt"],
            ["Indien", "2 × 2 Zoll (51 × 51 mm)", "Ja, direkt"],
            ["Vereinigtes Königreich", "35 × 45 mm", "Aus der 2×2-Ausgabe zuschneiden"],
            ["Schengen / EU", "35 × 45 mm", "Aus der 2×2-Ausgabe zuschneiden"],
            ["Kanada", "50 × 70 mm", "Neu zuschneiden; andere Proportionen"],
            ["Australien", "35 × 45 mm", "Aus der 2×2-Ausgabe zuschneiden"],
          ],
        },
      },
      {
        heading: "So gelingt das beste Ergebnis",
        body: "Nimm ein gut ausgeleuchtetes, frontales Foto, auf dem Kopf und Schultern vollständig zu sehen sind und etwas Platz drumherum bleibt: Ein Handy-Selfie vor einer schlichten Wand funktioniert gut. Vermeide Fotos, bei denen der Kopf an den Rändern eng angeschnitten ist, denn das Tool braucht Raum über dem Kopf und um die Schultern, um einen korrekt proportionierten Ausschnitt zu berechnen. Eine Person pro Foto; Gruppenfotos oder stark beschnittene Nahaufnahmen werden nicht richtig verarbeitet.",
      },
      {
        heading: "Was dieses Tool nicht garantiert",
        body: "Es erzeugt ein professionell wirkendes, richtig dimensioniertes und zentriertes Foto mit echtem weißem Hintergrund – keine zertifizierte Konformitätsprüfung. Es prüft weder gleichmäßige Ausleuchtung noch Gesichtsausdruck, Brillenreflexe oder die übrigen Kriterien, die eine offizielle ICAO- oder Behördenprüfung von Hand kontrolliert. Betrachte es bei einem Passantrag mit strengen Annahmekriterien als gute Ausgangsbasis und gleiche es vor dem Einreichen mit den aktuellen Fotovorgaben deines Landes ab.",
      },
      {
        heading: "Datenschutz",
        body: "Gesichtserkennung und Hintergrundentfernung nutzen quelloffene Modelle und laufen in der eigenen Verarbeitung von ConvertBrio: Dein Foto wird weder an eine API eines Drittanbieters geschickt noch von einem Menschen angesehen. Dein Originalfoto wird gelöscht, sobald es für die Verarbeitung gelesen wurde. Das erzeugte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum Passfoto-Ersteller von ConvertBrio.",
    faq: [
      {
        question: "Welche Fotogröße entsteht?",
        answer:
          "Ein Foto mit 2×2 Zoll (1200×1200 Pixel) bei 600 DPI: die Standardgröße für Pass- und Visumfotos in den USA und in Indien.",
      },
      {
        question: "Ist das kostenlos?",
        answer:
          "Ja. Ein Foto hochzuladen und ein Passfoto mit weißem Hintergrund zu erzeugen, erfordert weder Konto noch Zahlung.",
      },
      {
        question: "Wird dieses Foto für meinen Passantrag auf jeden Fall akzeptiert?",
        answer:
          "Es liefert ein richtig dimensioniertes, zentriertes Foto mit echtem weißem Hintergrund und deckt damit die häufigsten Ablehnungsgründe ab. Eine vollständige offizielle Konformitätsprüfung (Licht, Gesichtsausdruck, Brillenreflexe) führt es nicht durch. Gleiche es daher vor einem offiziellen Antrag mit den aktuellen Anforderungen deines Landes ab.",
      },
      {
        question: "Was ist, wenn es meldet, es sei kein Gesicht oder mehr als ein Gesicht gefunden worden?",
        answer:
          "Nimm ein klares, frontales, gut ausgeleuchtetes Foto mit genau einer Person im Bild. Gruppenfotos, Profilaufnahmen oder sehr dunkle bzw. unscharfe Bilder können die Gesichtserkennung beeinträchtigen.",
      },
      {
        question: "Warum heißt es, um das Gesicht sei nicht genug Platz?",
        answer:
          "Das Tool braucht im Originalfoto sichtbaren Rand über dem Kopf und um die Schultern, um einen korrekt proportionierten Ausschnitt zu berechnen. Ist dein Foto schon eng aufs Gesicht beschnitten, mache ein neues aus etwas größerem Abstand.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "KI-Bildverbesserer",
    intro:
      "Flache, unterbelichtete oder leicht unscharfe Fotos brauchen oft nur eine gleichmäßige automatische Korrektur statt manueller Bearbeitung. Der Bildverbesserer von ConvertBrio gleicht Belichtung und Farbe automatisch aus und schärft Details in einem Schritt – ganz ohne Regler.",
    sections: [
      {
        heading: "Was dieses Tool macht",
        body: "Der Bildverbesserer wendet auf dein Foto einen festen, automatischen Satz an Anpassungen an: Er dehnt den Kontrast über den gesamten Tonwertbereich, hebt Sättigung und Helligkeit leicht an und schärft Details. So entsteht ein durchgehend verbessertes Ergebnis, ohne dass du einzelne Einstellungen justieren musst.",
      },
      {
        heading: "So funktioniert es",
        body: "Lade ein Bild hoch, und ConvertBrio schickt es direkt auf unseren Servern durch eine automatische Bildverarbeitung (Kontrastnormalisierung, Farbe und Schärfung): ein deterministischer Algorithmus statt eines generativen KI-Modells – deshalb sind die Ergebnisse gleichmäßig und die Verarbeitung schnell.",
      },
      {
        heading: "Was er nicht beheben kann",
        body: "Das ist ein Verbesserungsdurchlauf, kein Werkzeug zur Auflösungserhöhung oder Restaurierung: Er holt aus einem sehr niedrig aufgelösten Bild keine Details zurück, behebt keine Bewegungsunschärfe oder verfehlten Schärfe und rekonstruiert keine fehlenden Details. Für eine höhere Auflösung mit einem trainierten Super-Resolution-Modell nimm stattdessen den KI-Hochskalierer.",
      },
    ],
    faqDescription: "Häufige Fragen zum Bildverbesserer von ConvertBrio.",
    faq: [
      {
        question: "Welche Verbesserungen nimmt er vor?",
        answer:
          "Er dehnt automatisch den Kontrast, hebt Farbe und Helligkeit leicht an und schärft Details: ein fester, gleichmäßiger Anpassungsdurchlauf statt manueller Bearbeitung jedes einzelnen Fotos.",
      },
      {
        question: "Worin unterscheidet sich das vom KI-Hochskalierer?",
        answer:
          "Der Bildverbesserer wendet über eine feste Bildverarbeitung automatische Anpassungen bei gleicher Auflösung an. Der KI-Hochskalierer ist ein eigenes Tool, das mit einem trainierten Super-Resolution-Modell die Auflösung eines Bildes erhöht und Details rekonstruiert.",
      },
      {
        question: "Gibt es eine Dateigrößenbegrenzung?",
        answer:
          "Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Verarbeitung gelesen wurde. Das verbesserte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
  },

  "ai-upscaler": {
    title: "KI-Bild-Hochskalierer: Auflösung erhöhen ohne Unschärfe",
    intro: [
      "Ein kleines oder niedrig aufgelöstes Bild mit einer gewöhnlichen Größenänderung zu vergrößern, verteilt nur die vorhandenen Pixel auf mehr Fläche – das Ergebnis wird weich und blockig. Der KI-Hochskalierer von ConvertBrio nutzt ein trainiertes Super-Resolution-Modell, um die Auflösung auf etwa das Vierfache zu erhöhen, und rekonstruiert dabei plausible Details – Kanten, Texturen, feine Strukturen –, statt das Vorhandene nur zu strecken.",
    ],
    howTo: [
      {
        step: "Das Bild hochladen, das vergrößert werden soll",
        detail: "Am besten funktioniert ein echtes Foto. JPG, PNG, WEBP, HEIC oder AVIF, bis zu 100 MB.",
      },
      {
        step: "Hochskalierung starten",
        detail:
          "Ein integriertes KI-Modell rekonstruiert Details bei etwa der 4-fachen Auflösung der Eingabe und arbeitet in Kacheln, um den Speicher zu schonen. Das dauert einige Sekunden länger als eine einfache Umwandlung.",
      },
      {
        step: "Das PNG herunterladen",
        detail: "Das Ergebnis ist immer ein PNG mit der 4-fachen Auflösung der (gegebenenfalls verkleinerten) Eingabe.",
      },
    ],
    sections: [
      {
        heading: "Hochskalieren oder Größe ändern",
        body: "Das Tool Bildgröße ändern verändert die Pixelmaße mit gewöhnlicher Interpolation: ideal, um ein Bild zu verkleinern, aber es kann keine Details hinzufügen, die nicht in der Datei stecken – beim Vergrößern wirkt das Bild daher unscharf. KI-Hochskalierung geht den umgekehrten Weg: Das Modell hat gelernt, wie echte Foto-Details aussehen, und malt eine überzeugende hochauflösende Version hinein. Zum Verkleinern nimm die Größenänderung, zum Vergrößern den Hochskalierer.",
      },
      {
        heading: "Wann es am meisten hilft",
        body: "",
        list: [
          "Ein altes, kleines oder niedrig aufgelöstes Foto für den Druck vergrößern",
          "Ein Bild in Webgröße für ein großes Display oder einen hochauflösenden Bildschirm vorbereiten",
          "Aus einem stark beschnittenen Foto wieder eine brauchbare Größe herausholen",
          "Ein leicht unscharfes Bild schärfen (für Korrekturen in gleicher Größe eignet sich der KI-Bildverbesserer allerdings besser)",
        ],
      },
      {
        heading: "Was du erwarten kannst",
        body: "Am stärksten sind die Ergebnisse bei natürlichen Fotos: Menschen, Orte, Gegenstände. Mit dichtem Text, scharfen Strichzeichnungen, Screenshots und stark stilisierten Grafiken tut sich das Modell schwerer und erfindet mitunter Texturen, die es gar nicht gab. Sehr hoch aufgelöste Quellbilder werden vor dem Hochskalieren verkleinert, damit die Verarbeitung vertretbar bleibt – ein ohnehin schon großes Foto gewinnt also kaum. Es ist eine Rekonstruktion, keine Wiederherstellung der wahren Originaldetails.",
      },
      {
        heading: "Datenschutz und Limits",
        body: "Das Modell läuft in der eigenen Verarbeitung von ConvertBrio, ohne KI-Dienst eines Drittanbieters. Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie für die Verarbeitung gelesen wurde. Das hochskalierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum KI-Bild-Hochskalierer von ConvertBrio.",
    faq: [
      {
        question: "Worin unterscheidet sich KI-Hochskalierung vom einfachen Vergrößern eines Bildes?",
        answer:
          "Eine gewöhnliche Größenänderung streckt vorhandene Pixel, wodurch das Ergebnis unscharf wird. KI-Hochskalierung rekonstruiert mit einem trainierten Modell plausible Details und liefert eine deutlich schärfere Vergrößerung.",
      },
      {
        question: "Wie viel größer wird das Bild?",
        answer:
          "Etwa auf das Vierfache der Auflösung der Eingabe (die bei sehr großen Bildern zuerst verkleinert wird). Die Ausgabe ist ein PNG.",
      },
      {
        question: "Funktioniert es bei Text oder Screenshots?",
        answer:
          "Es ist auf Fotografien abgestimmt. Dichter Text, Strichzeichnungen und Screenshots können mit erfundenen oder verschmierten Details herauskommen: Hier ist eine einfache Größenänderung oft sicherer.",
      },
      {
        question: "Gibt es eine Dateigrößenbegrenzung?",
        answer:
          "Uploads sind auf 100 MB begrenzt. Deine Originaldatei wird gelöscht, sobald sie gelesen wurde, das Ergebnis durch eine tägliche Bereinigung in der Regel innerhalb von etwa 24 Stunden.",
      },
      {
        question: "Warum hat die Verarbeitung etwas gedauert?",
        answer:
          "Das Modell läuft auf den Servern von ConvertBrio und verarbeitet große Bilder in Kacheln, um den Speicher zu schonen, daher dauert es einige Sekunden länger als eine einfache Formatumwandlung.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "PDF auf eine bestimmte Größe in KB oder MB komprimieren",
    intro: [
      "Upload-Portale, Bewerbungsformulare und E-Mail-Systeme lehnen eine PDF oft ab, wenn sie ein hartes Limit überschreitet: 200 KB, 500 KB, 2 MB. Dieses Tool nimmt genau dieses Limit als Eingabe. Gib die maximale Größe ein, und ConvertBrio komprimiert deine PDF schrittweise und misst nach jedem Schritt die tatsächliche Dateigröße, bis sie passt.",
      "Anders als ein allgemeiner Kompressor, der eine Datei einfach so stark wie möglich schrumpft, arbeitet dieses Tool auf deine Zahl hin und sagt dir ehrlich, was dabei herauskam. Es zeigt die erreichte Größe an, und wenn dein Limit sich nicht erreichen lässt, ohne die Seiten zu ruinieren, sagt es das, statt etwas vorzutäuschen.",
    ],
    howTo: [
      { step: "PDF hochladen", detail: "Eine Datei pro Vorgang, bis zu 100 MB." },
      { step: "Maximale Größe eingeben", detail: "Tippe die Zahl aus dem Formular ein und wähle dann KB oder MB." },
      { step: "Komprimieren", detail: "Wir probieren nacheinander stärkere Einstellungen aus und stoppen beim ersten Ergebnis, das unter dein Limit passt." },
      { step: "Erreichte Größe prüfen", detail: "Die Ergebnismeldung zeigt die erreichte Größe. Lade die Datei herunter oder probiere ein größeres Limit, falls das Ziel nicht erreicht wurde." },
    ],
    sections: [
      {
        heading: "Wie die Suche nach der genauen Größe funktioniert",
        body: "Ein einzelner Durchgang trifft selten eine bestimmte Zahl, deshalb durchläuft das Tool eine Stufenleiter von Einstellungen. Jeder Schritt kodiert die eingebetteten Fotos aus deiner Originaldatei mit geringerer Auflösung und Qualität neu als der vorherige – erst sanft, dann stärker. Nach jedem Schritt wird das tatsächliche Ergebnis gemessen. Das erste Ergebnis, das auf oder unter deinem Limit liegt, bekommst du. So behältst du so viel Qualität, wie dein Ziel erlaubt.",
      },
      {
        heading: "Wenn sich ein Ziel nicht erreichen lässt",
        body: "Manche PDFs schrumpfen einfach kaum: Dateien aus Vektorgrafiken oder reinem Text sind schon klein, und ein Limit von 20 KB für einen Scan mit 40 Seiten ist unrealistisch. Bleibt die Datei selbst mit der stärksten Einstellung über deinem Limit, meldet das Tool nie einen Erfolg. Es liefert die kleinste Version, die es erzeugen konnte, zeigt deren Größe und schlägt Alternativen vor, etwa ein größeres Limit oder das Aufteilen der PDF in Teile.",
      },
      {
        heading: "Was verändert wird",
        body: "Eingebettete JPEG-Bilder werden neu komprimiert und, wenn sie sehr groß sind, verkleinert; Dokumenteigenschaften wie Titel und Autor werden gelöscht. Text, Schriften und Seitenlayout bleiben unberührt. Gescannte PDFs aus Fotos profitieren am meisten, während sehr kleine Zielgrößen Bilder sichtbar weicher machen.",
      },
      {
        heading: "Datenschutz und Limits",
        body: "Dateien werden verschlüsselt übertragen. Deine Originaldatei wird gelöscht, sobald sie für die Komprimierung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Passwortgeschützte PDFs lassen sich nicht verarbeiten.",
      },
    ],
    faqDescription: "Häufige Fragen zum Komprimieren einer PDF auf eine maximale Größe in KB oder MB.",
    faq: [
      { question: "Wie komprimiere ich eine PDF auf unter 200 KB?", answer: "Lade die PDF hoch, gib 200 ein, wähle KB und starte die Komprimierung. Das Tool probiert stärkere Einstellungen aus, bis die Datei passt, oder nennt dir die kleinste erreichbare Größe, falls 200 KB für dieses Dokument unrealistisch sind." },
      { question: "Trifft es immer genau meine Größe?", answer: "Nein. Es bringt die Datei auf oder unter dein Limit, wenn das ohne inakzeptablen Qualitätsverlust möglich ist. Wenn nicht, siehst du die kleinste erreichte Größe statt eines vorgetäuschten Erfolgs." },
      { question: "Landet das Ergebnis genau bei meinem Limit?", answer: "Es landet auf oder unter dem Limit, meist etwas darunter, weil sich die Einstellungen in Stufen und nicht stufenlos ändern." },
      { question: "Warum ist meine PDF kaum kleiner geworden?", answer: "PDFs, die hauptsächlich aus Text und Vektorformen bestehen, sind schon kompakt. Die größten Einsparungen gibt es bei PDFs mit Fotos oder gescannten Seiten." },
      { question: "Gibt es einen Qualitätsunterschied zum normalen Tool PDF komprimieren?", answer: "PDF komprimieren wendet eine feste Stufe an. Dieses Tool beginnt auf derselben Stufe und wird nur stärker, wenn dein Limit es verlangt." },
      { question: "Wird mein Dokument aufbewahrt?", answer: "Deine Originaldatei wird gelöscht, sobald sie für die Komprimierung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Verarbeitung erfolgt automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase)." },
    ],
  },

  "photo-signature-resizer": {
    title: "Foto & Unterschrift anpassen: exakte Pixel und maximale Dateigröße",
    intro: [
      "Antragsformulare akzeptieren selten ein Foto so, wie es vom Handy kommt. Sie verlangen eine bestimmte Breite und Höhe in Pixeln und eine Datei von höchstens einer bestimmten Anzahl KB. Dieses Tool liefert genau das: Gib die Maße und das Größenlimit aus deinem Formular ein und lade ein JPG herunter, das beides erfüllt.",
      "Es eignet sich für Fotos und für Unterschriften. Wähle ein Seitenverhältnis oder eine Vorgabe, um die Maße einzutragen, entscheide, ob beschnitten oder mit weißen Rändern aufgefüllt werden soll, wenn dein Bild eine andere Form hat, und lege die maximalen KB fest. Die eingegebenen Maße werden nie verändert, um die Dateigröße zu erreichen: Es wird nur die JPEG-Qualität gesenkt.",
    ],
    howTo: [
      { step: "Foto oder Unterschrift hochladen", detail: "JPG, PNG, WEBP, HEIC, AVIF oder GIF." },
      { step: "Größe festlegen", detail: "Wähle eine Vorgabe oder gib Breite und Höhe in Pixeln ein. Wähle ein Seitenverhältnis, wenn dein Formular eines vorschreibt." },
      { step: "Dateigrößenlimit eintragen", detail: "Gib die maximalen KB ein oder lass das Feld leer, um hohe Qualität zu behalten." },
      { step: "Zuschneiden oder Ränder wählen", detail: "Zuschneiden füllt die exakte Größe; weiße Ränder halten das ganze Bild darin, was sich für Unterschriften eignet." },
      { step: "Größe ändern und Ergebnis prüfen", detail: "Die Ergebnismeldung bestätigt die exakten Pixel und die endgültigen KB." },
    ],
    sections: [
      {
        heading: "Erst exakte Maße, dann die Dateigröße",
        body: "Das Bild wird zuerst auf genau die verlangte Breite und Höhe gebracht. Danach sucht das Tool die höchste JPEG-Qualität, bei der die Datei unter deinem Limit bleibt, sodass die Maße fest bleiben. Ist das Limit selbst bei niedrigster Qualität zu klein, sagt das Tool das und zeigt die erreichte Größe, statt einen Erfolg zu behaupten. Probiere dann etwas kleinere Maße.",
      },
      {
        heading: "Vorgaben und eigene Werte",
        body: "Die Vorgaben decken Pixelgrößen ab, die sich exakt reproduzieren lassen, etwa ein Passfoto von 35 × 45 mm bei 300 DPI (413 × 531 px) oder ein Foto von 2 × 2 Zoll bei 300 DPI (600 × 600 px). Portale unterscheiden sich, vergleiche also immer mit den Anweisungen deines Formulars und nutze die eigenen Felder, falls sie von einer Vorgabe abweichen.",
      },
      {
        heading: "Zuschneiden oder auffüllen",
        body: "Hat dein Bild nicht die Form des Ziels, füllt das Zuschneiden den Rahmen und kürzt die Ränder, wobei der markanteste Teil des Bildes im Fokus bleibt. Das Auffüllen behält alles und füllt den übrigen Platz mit Weiß. Wähle das Auffüllen für Unterschriften auf Papier, damit keine Tinte abgeschnitten wird.",
      },
      {
        heading: "Unterschriften",
        body: "Fotografiere oder scanne deine Unterschrift auf schlichtem weißem Papier bei gutem Licht, lade sie hoch und nutze die Unterschrift-Vorgabe 3:1 oder deine eigene Größe. Schwarze Tinte auf Weiß ergibt sehr kleine Dateien.",
      },
    ],
    faqDescription: "Häufige Fragen zum Anpassen eines Fotos oder einer Unterschrift für ein Online-Formular.",
    faq: [
      { question: "Wie bringe ich ein Foto auf 200 × 230 Pixel unter 20 KB?", answer: "Lade das Foto hoch, gib 200 als Breite, 230 als Höhe und 20 als maximale KB ein und starte die Anpassung. Die Ergebnismeldung bestätigt die exakte Größe." },
      { question: "Ändert es die Maße, um das KB-Limit zu erreichen?", answer: "Nein. Die Maße bleiben genau wie eingegeben, es wird nur die JPEG-Qualität gesenkt." },
      { question: "Was ist, wenn sich das Limit nicht erreichen lässt?", answer: "Du siehst eine Meldung mit der kleinsten erreichten Größe. Probiere kleinere Maße oder ein höheres Limit." },
      { question: "Ist die Ausgabe immer ein JPG?", answer: "Ja, da die meisten Formulare JPG verlangen. Die Datei trägt ihre Maße im Namen, damit du sie leicht wiederfindest." },
      { question: "Kann ich die ursprüngliche Form meines Fotos behalten?", answer: "Ja. Wähle die Option mit weißen Rändern, dann passt das ganze Bild in die Zielgröße." },
      { question: "Erfüllt das die Regeln meines Prüfungs- oder Visumportals?", answer: "Es liefert genau die Pixel und die maximale Größe, die du eingibst. Die Anforderungen unterscheiden sich je nach Portal und können sich ändern, prüfe die Zahlen also auf dem Portal selbst." },
    ],
  },

  "batch-image-compressor": {
    title: "Bilder-Stapelkompression: viele Fotos auf eine Zielgröße bringen",
    intro: [
      "Fotos einzeln zu komprimieren dauert, wenn ein Formular, ein Inserat oder eine Website zwanzig davon unter demselben Limit braucht. Lade den ganzen Satz hoch, gib eine einzige Zielgröße in KB ein, und ConvertBrio komprimiert jedes Bild so, dass es passt.",
      "Jede Datei wird für sich bearbeitet, sodass eine Problemdatei nie die übrigen blockiert. Du erhältst einen Bericht pro Datei, einzelne Downloads für jedes Bild und eine ZIP-Datei mit dem gesamten Stapel.",
    ],
    howTo: [
      { step: "Bilder auswählen", detail: "Lege bis zu 50 Bilder auf einmal ab, insgesamt bis zu 100 MB." },
      { step: "Zielgröße eingeben", detail: "Ein Limit in KB gilt für jedes Bild." },
      { step: "Komprimieren", detail: "Jedes Bild wird unabhängig verarbeitet: Zuerst wird die Qualität gesenkt, die Maße schrumpfen nur bei Bedarf." },
      { step: "Herunterladen", detail: "Speichere einzelne Dateien aus der Liste oder lade alles als ZIP herunter." },
    ],
    sections: [
      {
        heading: "Ergebnisse pro Datei statt alles oder nichts",
        body: "Die Ergebnisliste zeigt jede Datei, die erreichte Größe und ob sie innerhalb des Ziels geblieben ist. Lässt sich ein Bild nicht ohne extremen Qualitätsverlust unter das Limit bringen, wird es als über dem Ziel markiert, statt stillschweigend durchzugehen. Eine Datei, die gar nicht gelesen werden kann, wird als fehlgeschlagen gemeldet, während die anderen normal fertig werden.",
      },
      {
        heading: "Wie jedes Bild komprimiert wird",
        body: "Für jedes Bild sucht das Tool im selben Format die höchste Qualität, die zu deinem Ziel passt (JPG bleibt JPG, WEBP bleibt WEBP). Ist selbst die niedrigste Qualität zu groß, verkleinert es die Maße in kleinen Schritten. HEIC-Fotos vom iPhone werden in JPG umgewandelt, da HEIC kein unterstütztes Ausgabeformat ist. Animierte GIFs behalten nur ihr erstes Bild.",
      },
      {
        heading: "Wann Stapel, wann einzeln",
        body: "Nutze für eine einzelne Datei das Tool Bild komprimieren. Nutze den Stapel, wenn viele Bilder dasselbe Limit teilen, etwa beim Hochladen eines Produktsatzes, einer Reihe von Dokumenten in ein Portal oder von Fotos für eine E-Mail.",
      },
    ],
    faqDescription: "Häufige Fragen zum Komprimieren mehrerer Bilder auf dieselbe Größe.",
    faq: [
      { question: "Wie viele Bilder kann ich auf einmal komprimieren?", answer: "Bis zu 50 Bilder, solange die Gesamtgröße unter 100 MB liegt." },
      { question: "Erreichen garantiert alle Bilder das Ziel?", answer: "Nein. Jedes Ergebnis wird gemessen, und jedes Bild, das über dem Ziel bleibt, wird markiert, damit du weißt, welche Aufmerksamkeit brauchen." },
      { question: "Kann ich Dateien einzeln herunterladen?", answer: "Ja. Jedes erfolgreiche Bild hat einen eigenen Download-Link, und die ZIP-Datei gibt es ebenfalls." },
      { question: "Was passiert, wenn eine Datei beschädigt ist?", answer: "Sie wird als fehlgeschlagen gemeldet, während die anderen normal verarbeitet werden." },
      { question: "Ändert es das Format meiner Bilder?", answer: "Nein, außer bei HEIC-Fotos, die zu JPG werden." },
      { question: "Werden meine Bilder gespeichert?", answer: "Deine Originalbilder werden gelöscht, sobald sie für die Komprimierung gelesen wurden. Die Ergebnisse werden durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Verarbeitung erfolgt automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase)." },
    ],
  },

  "image-to-text": {
    title: "Bild in Text: Text aus einem Foto oder Screenshot auslesen",
    intro: [
      "Fotos von Dokumenten, Screenshots, Whiteboards und Schildern enthalten Text, den du nicht markieren kannst. Bild in Text liest diesen Text per optischer Zeichenerkennung (OCR) aus und gibt ihn als Zeichen zurück, die du kopieren, durchsuchen und bearbeiten kannst.",
      "Lade ein Bild hoch, wähle die Sprache des Textes, und der erkannte Text erscheint kopierbereit auf der Seite. Gleichzeitig wird eine einfache .txt-Datei heruntergeladen.",
    ],
    howTo: [
      { step: "Bild hochladen", detail: "JPG, PNG, WEBP, HEIC, AVIF oder GIF. Am besten funktioniert ein scharfes, gerades Foto." },
      { step: "Sprache wählen", detail: "Wähle die Sprache, in der der Text geschrieben ist, für die beste Genauigkeit." },
      { step: "Text auslesen", detail: "Die Erkennung läuft auf den Servern von ConvertBrio." },
      { step: "Kopieren oder herunterladen", detail: "Markiere den Text auf der Seite, nutze „Text kopieren“ oder öffne die heruntergeladene .txt-Datei." },
    ],
    sections: [
      {
        heading: "Was du bekommst",
        body: "Den erkannten Text als einfache Zeichen in Lesereihenfolge, mit erhaltenen Zeilenumbrüchen. Es ist reiner Text, Schriften, Farben und Layout bleiben also nicht erhalten. Wenn du ein bearbeitbares Dokument mit Absätzen willst, nutze stattdessen Scan in Word.",
      },
      {
        heading: "Genaue Ergebnisse erzielen",
        body: "Die Erkennungsqualität folgt der Bildqualität. Nimm ein scharfes, gut ausgeleuchtetes Foto von gedrucktem Text, aufgenommen von vorn, in einer Auflösung, in der die Buchstaben klar lesbar sind. Schneide Ränder und Hintergrund weg und wähle die richtige Sprache.",
      },
      {
        heading: "Zu erwartende Einschränkungen",
        body: "Handschrift wird nicht zuverlässig erkannt. Niedrige Auflösung, Unschärfe, Blendung, Schräglage und Zierschriften verringern die Genauigkeit. Tabellen und mehrspaltige Layouts können in durcheinandergeratener Reihenfolge herauskommen, weil die OCR Zeile für Zeile liest. Prüfe das Ergebnis immer auf Fehler, bevor du dich darauf verlässt.",
      },
      {
        heading: "Datenschutz",
        body: "Bilder werden verschlüsselt übertragen. Dein Originalbild wird gelöscht, sobald es für die Erkennung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Der erkannte Text wird nur dir angezeigt.",
      },
    ],
    faqDescription: "Häufige Fragen zum Auslesen von Text aus Bildern per OCR.",
    faq: [
      { question: "Wie kopiere ich Text aus einem Bild?", answer: "Lade das Bild hoch, starte die Erkennung und nutze „Text kopieren“ beim Ergebnis. Derselbe Text wird auch als .txt-Datei heruntergeladen." },
      { question: "Funktioniert es bei Screenshots?", answer: "Ja. Screenshots von gedrucktem oder am Bildschirm dargestelltem Text werden meist sehr genau erkannt." },
      { question: "Kann es Handschrift lesen?", answer: "Nicht zuverlässig. Die OCR ist für gedruckten und getippten Text gemacht." },
      { question: "Welche Sprachen werden unterstützt?", answer: "Englisch, Portugiesisch, Spanisch, Französisch, Deutsch, Italienisch und Indonesisch." },
      { question: "Warum ist mein Text durcheinander?", answer: "Tabellen und mehrspaltige Seiten können in falscher Reihenfolge gelesen werden. Schneide das Bild so zu, dass jeweils nur eine Spalte zu sehen ist." },
      { question: "Und bei einer PDF?", answer: "Nutze Scan in Word für eine gescannte PDF oder OCR für PDF, um sie durchsuchbar zu machen." },
    ],
  },

  "scan-to-word": {
    title: "Wie wandle ich ein gescanntes Dokument in eine bearbeitbare Word-Datei um?",
    intro: [
      "Mit optischer Zeichenerkennung (OCR). Ein Scan oder ein Foto einer Seite ist ein Bild, Word hat also keinen Text zum Bearbeiten, bis die OCR die Buchstaben im Bild liest. Scan in Word tut genau das und baut ein echtes Word-Dokument (DOCX) mit dem erkannten Text, das du anschließend bearbeiten, formatieren und speichern kannst.",
      "Lade ein Foto einer Seite oder eine gescannte PDF hoch, wähle die Sprache des Textes und lade das DOCX herunter. Das Tool soll die Wörter aus Papierdokumenten wie Briefen, Verträgen und gedruckten Formularen herausholen. Du bekommst den Text, nicht eine Kopie des Seitendesigns – plane also Korrekturlesen ein und wende nötige Formatierungen neu an.",
    ],
    howTo: [
      { step: "Seite scannen oder fotografieren", detail: "Flach, gleichmäßig ausgeleuchtet und von vorn ergibt das beste Ergebnis. Eine Scan-App fürs Handy, die als PDF oder JPG speichert, funktioniert gut." },
      { step: "Bild oder PDF hochladen", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF oder eine PDF. Dateien bis zu 100 MB; PDFs bis zu 50 Seiten." },
      { step: "Sprache wählen", detail: "Englisch, Portugiesisch, Spanisch, Französisch, Deutsch, Italienisch oder Indonesisch. Die richtige Wahl hilft, dass Akzente und Sonderzeichen korrekt erkannt werden." },
      { step: "DOCX herunterladen", detail: "Öffne es in Word, Google Docs oder LibreOffice, vergleiche es mit dem Original und korrigiere falsch gelesene Wörter." },
    ],
    sections: [
      {
        heading: "Kann ich direkt in Word scannen?",
        body: [
          "Nicht in einem Schritt auf dieser Seite und auch nicht in Word selbst: ConvertBrio verbindet sich nicht mit einem Scanner. Du erstellst den Scan also zuerst mit deinem Scanner oder einer Handy-App und lädst die Datei dann hier hoch.",
          "Es hilft, zwei Dinge zu trennen. Einen Scan in Word einzufügen (Einfügen > Bilder) platziert die Seite als Bild im Dokument: Sie sieht richtig aus, doch die Wörter lassen sich nicht bearbeiten. Den Scan per OCR umzuwandeln, wie es dieses Tool tut, liest die Zeichen und liefert bearbeitbaren Text. Wähle das Einfügen, wenn die Seite nur im Dokument erscheinen soll; wähle die Umwandlung, wenn du die Wörter ändern, kopieren oder durchsuchen willst.",
        ],
      },
      {
        heading: "Vorher und nachher: was dich erwartet",
        body: "Ein Beispiel für die Umwandlung anhand eines gescannten Briefs:",
        table: {
          headers: ["", "Dein Scan (vorher)", "Die Word-Datei (nachher)"],
          rows: [
            ["Was es ist", "Ein Bild eines gedruckten Briefs", "Ein DOCX mit dem Text des Briefs"],
            ["Einen Satz markieren", "Nicht möglich", "Funktioniert wie bei jedem Word-Text"],
            ["Suche mit Strg+F / Cmd+F", "Findet nichts", "Findet jeden Treffer"],
            ["Layout", "Genau wie gedruckt", "Einfache Absätze; eine Seite des Scans folgt auf die andere, dazwischen ein Seitenumbruch"],
            ["Logo im Briefkopf, Stempel, Fotos", "Sichtbar", "Nicht enthalten"],
          ],
        },
      },
      {
        heading: "So prüfst und korrigierst du das Ergebnis",
        body: "OCR ist bei sauberem Druck genau, aber nie perfekt. Lies also Korrektur, bevor du dich auf die Datei verlässt. Öffne das DOCX neben dem Original-Scan und lies beide.",
        list: [
          "Prüfe zuerst Zahlen, Daten, Beträge und Namen: Ziffern werden am häufigsten falsch gelesen (0 und O, 1 und l, 5 und S).",
          "Achte auf Wörter, die an falscher Stelle getrennt oder zusammengezogen wurden, und auf verirrte Zeichen dort, wo ein Fleck oder Knick den Text kreuzte.",
          "Lass die Rechtschreibprüfung von Word laufen: Ein sinnloses Wort markiert oft ein falsch gelesenes.",
          "Wende Überschriften, Fettdruck, Tabellen und Spalten von Hand neu an, wo du sie brauchst.",
        ],
      },
      {
        heading: "Was die Word-Datei enthält",
        body: "Den erkannten Text, in Absätze gegliedert, wobei eine Seite des Scans auf die andere folgt. Es ist ein bearbeitbares Textdokument, keine Kopie des Seitenbilds. Schriften, Spalten, Bilder und Tabellen des Originals werden nicht nachgebildet.",
      },
      {
        heading: "Warum ändert sich die Formatierung nach der Umwandlung?",
        body: "Weil das Tool Buchstaben liest, kein Layout. Es setzt Absätze aus den gefundenen Zeilen zusammen und baut das Seitendesign nicht nach. Deshalb siehst du diese Unterschiede:",
        list: [
          "Tabellen erscheinen als Textzeilen, nicht als Zellen. Erstelle die Tabelle in Word neu und kopiere die Werte hinein.",
          "Spalten werden Zeile für Zeile gelesen, sodass sich Text aus zwei Spalten vermischen kann. Schneide zu oder scanne jeweils eine Spalte, wenn die Reihenfolge wichtig ist.",
          "Schriften, Größen, Farben und Abstände werden durch die Standardwerte von Word ersetzt. Markiere den Text und formatiere ihn neu.",
          "Bilder, Logos und Unterschriften werden nicht übernommen. Füge sie aus der Originaldatei wieder ein.",
          "Ein schiefer, verschatteter oder niedrig aufgelöster Scan führt zu mehr Fehlern. Scanne ihn lieber noch einmal flach mit etwa 300 DPI, statt ein schlechtes Ergebnis zu reparieren.",
          "Eine seitlich liegende oder auf dem Kopf stehende Seite wird schlecht gelesen. Fotos werden anhand der von deiner Kamera gespeicherten Ausrichtung gerade gestellt; ein Scan ohne diese Daten sollte vor dem Hochladen gedreht werden.",
        ],
      },
      {
        heading: "Bei einem Fehler oder leerem Ergebnis",
        body: "Findet das Tool keinen lesbaren Text, sagt es das, statt eine leere Datei zu liefern. Probiere dann ein schärferes, höher aufgelöstes Bild von gedrucktem Text, richte die Seite gerade aus und achte darauf, dass die Sprache zum Dokument passt. PDFs mit mehr als 50 Seiten werden abgelehnt; teile sie vorher mit dem Tool PDF teilen in Teile auf.",
      },
      {
        heading: "Scan in Word oder PDF in Word",
        body: "PDF in Word ist für PDFs, die bereits echten Text enthalten, und versucht die Formatierung beizubehalten. Scan in Word ist für Bilder von Text, bei denen es keinen Text zum Umwandeln gibt, bis die OCR ihn liest. Kannst du in deiner PDF Wörter markieren, nimm stattdessen PDF in Word.",
      },
      {
        heading: "Einschränkungen",
        body: "Die Genauigkeit hängt vom Scan ab. Handschrift, niedrig aufgelöste oder schiefe Scans, blasser Druck und komplexe Layouts wie Tabellen und Spalten werden oft schlecht erkannt. Rechne damit, jedes Dokument Korrektur zu lesen. Findet das Tool keinen lesbaren Text, teilt es dir das mit, statt eine leere Datei zu liefern.",
      },
      {
        heading: "Datenschutz",
        body: "Uploads werden verschlüsselt übertragen. Deine Originaldatei wird gelöscht, sobald sie für die Erkennung gelesen wurde. Das Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umwandeln von Scans in bearbeitbare Word-Dokumente.",
    faq: [
      { question: "Wie wandle ich ein gescanntes Dokument in Word um?", answer: "Lade den Scan als Bild oder PDF hoch, wähle die Sprache und lade das vom Tool erstellte DOCX herunter. Gleiche es mit dem Original ab, da die OCR Zeichen falsch lesen kann." },
      { question: "Kann ich ein Dokument direkt in Word einscannen?", answer: "Nicht direkt. Scanne die Seite zuerst mit einem Scanner oder einer Handy-App und lade die Datei dann hier hoch. Ein Scan, der als Bild in Word eingefügt wird, bleibt unbearbeitbar; die Umwandlung per OCR liefert bearbeitbaren Text." },
      { question: "Wie wandle ich mehrere Fotos von Seiten in eine Word-Datei um?", answer: "Fasse die Fotos mit Bild in PDF zu einer PDF zusammen und lade diese PDF dann hier hoch. Der Text jeder Seite folgt auf den der vorherigen, bis zu 50 Seiten." },
      { question: "Warum fehlt das Layout meiner Tabelle oder Spalten?", answer: "Das Tool gibt den erkannten Text als einfache Absätze aus, Tabellen und Spalten werden also nicht nachgebaut. Erstelle sie in Word anhand des Textes neu." },
      { question: "Sieht die Word-Datei aus wie mein Scan?", answer: "Nein. Du bekommst den erkannten Text als bearbeitbare Absätze. Layout, Schriften und Bilder werden nicht nachgebildet." },
      { question: "Kommt es mit mehrseitigen PDFs zurecht?", answer: "Ja, bis zu 50 Seiten. Der Text jeder Seite folgt auf den der vorherigen." },
      { question: "Liest es Handschrift?", answer: "Nicht zuverlässig. Es ist für gedruckten Text gebaut." },
      { question: "Soll ich dieses Tool oder PDF in Word nehmen?", answer: "Nimm Scan in Word, wenn die PDF ein Scan oder Foto ist. Nimm PDF in Word, wenn du den Text bereits markieren kannst." },
      { question: "Ist es kostenlos?", answer: "Ja, ohne Konto." },
    ],
  },

  "pdf-page-organizer": {
    title: "PDF-Seitenorganisator: Seiten visuell umsortieren, drehen und löschen",
    intro: [
      "Eine PDF umzuordnen fällt leichter, wenn man die Seiten sieht. Lade eine Datei hoch, und jede Seite erscheint als Vorschaubild. Verschiebe Seiten in eine neue Reihenfolge, drehe die seitlich gescannten, entferne die, die du nicht brauchst, und speichere das Ergebnis als neue PDF.",
      "Alles funktioniert mit Schaltflächen ebenso wie per Drag-and-drop, sodass du Seiten auch per Tastatur oder am Handy organisieren kannst.",
    ],
    howTo: [
      { step: "PDF hochladen", detail: "Vorschaubilder jeder Seite erscheinen auf der Seite." },
      { step: "Umsortieren", detail: "Ziehe eine Seite an eine neue Stelle oder nutze die Pfeilschaltflächen darunter." },
      { step: "Drehen oder entfernen", detail: "Mit der Dreh-Schaltfläche drehst du eine Seite im Uhrzeigersinn. Mit der Entfernen-Schaltfläche lässt du sie weg; vor dem Speichern kannst du sie wiederherstellen." },
      { step: "Neue PDF erstellen", detail: "Wenn du Seiten entfernt hast, wirst du um Bestätigung gebeten. Deine Originaldatei wird nie verändert." },
    ],
    sections: [
      {
        heading: "Vorschau, bevor du dich festlegst",
        body: "Die Vorschaubilder werden in deinem Browser gezeichnet, du siehst also genau, welche Seite welche ist, bevor irgendetwas zur Verarbeitung hochgeladen wird. Entfernte Seiten bleiben abgedunkelt auf dem Bildschirm und lassen sich wiederherstellen, bis du die Datei erstellst.",
      },
      {
        heading: "Barrierefreie Bedienung",
        body: "Jede Aktion hat eine beschriftete Schaltfläche: früher verschieben, später verschieben, drehen sowie entfernen oder wiederherstellen. Drag-and-drop ist ein Extra, keine Voraussetzung, sodass das Tool mit Tastatur und Screenreader funktioniert.",
      },
      {
        heading: "Seiten sicher löschen",
        body: "Bevor eine PDF mit entfernten Seiten erstellt wird, bittet dich das Tool zu bestätigen, wie viele Seiten wegfallen. Die neue Datei ist von deinem Original getrennt, das unberührt auf deinem Gerät bleibt.",
      },
      {
        heading: "Limits",
        body: "Dateien bis zu 100 MB. Passwortgeschützte PDFs lassen sich nicht öffnen. Sehr lange PDFs brauchen für die Vorschau länger, weil jedes Vorschaubild nacheinander gerendert wird.",
      },
    ],
    faqDescription: "Häufige Fragen zum Umsortieren, Drehen und Löschen von PDF-Seiten.",
    faq: [
      { question: "Wie ändere ich die Seitenreihenfolge in einer PDF?", answer: "Lade sie hoch, ziehe die Vorschaubilder in eine neue Reihenfolge oder nutze die Schaltflächen für früher und später und erstelle dann die neue PDF." },
      { question: "Geht das auch ohne Maus?", answer: "Ja. Jede Aktion hat eine Schaltfläche, die du per Tastatur erreichen und betätigen kannst." },
      { question: "Kann ich eine gelöschte Seite zurückholen?", answer: "Ja. Entfernte Seiten bleiben mit einer Schaltfläche „Wiederherstellen“ sichtbar, bis du die Datei erstellst." },
      { question: "Ändert es meine Originaldatei?", answer: "Nein. Du erhältst eine neue PDF, das Original bleibt, wie es war." },
      { question: "Kann ich nur eine einzelne Seite drehen?", answer: "Ja. Die Drehung gilt für die einzelne Seite, die du wählst, pro Klick um 90 Grad." },
      { question: "Warum lädt meine PDF nicht?", answer: "Passwortgeschützte und beschädigte PDFs lassen sich nicht als Vorschau anzeigen. Entferne zuerst das Passwort." },
    ],
  },

  "metadata-remover": {
    title: "Metadaten-Entferner: versteckte Daten aus Fotos, PDFs und Office-Dateien löschen",
    intro: [
      "Dateien tragen Informationen, die du nicht siehst. Ein Handyfoto kann festhalten, wo und wann es aufgenommen wurde und mit welchem Gerät. Eine PDF oder ein Word-Dokument kann den Namen des Autors, die Firma und die verwendete Software speichern. Der Metadaten-Entferner löscht diese versteckten Daten, bevor du die Datei weitergibst.",
      "Er funktioniert bei Fotos, PDFs sowie Word-, Excel- und PowerPoint-Dateien und ändert nie das Format der Datei: Ein JPG bleibt ein JPG, ein DOCX bleibt ein DOCX.",
    ],
    howTo: [
      { step: "Datei hochladen", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX oder PPTX." },
      { step: "Prüfen, was entfernt wird", detail: "Die Kategorien für jeden Dateityp sind auf der Seite aufgelistet." },
      { step: "Datei bereinigen", detail: "Die Metadaten werden entfernt, und die Ergebnismeldung fasst zusammen, was gelöscht wurde." },
      { step: "Bereinigte Kopie herunterladen", detail: "Sie behält deinen Dateinamen mit angehängtem -clean." },
    ],
    sections: [
      {
        heading: "Was entfernt wird",
        body: "Bei Fotos: EXIF-Angaben wie Kamera- und Handymodell, Aufnahmedatum und GPS-Standort sowie XMP- und IPTC-Daten. Bei PDFs: Titel, Autor, Thema, Schlüsselwörter, Ersteller, Produzent, Datumsangaben und XMP-Metadaten. Bei Word, Excel und PowerPoint: Autor, zuletzt geändert von, Titel, Firma, Datumsangaben und Anwendungsdetails.",
      },
      {
        heading: "Was bleibt",
        body: "Der sichtbare Inhalt bleibt unberührt: das Bild, die Seiten, der Text. Manche Strukturdaten sind nötig, damit eine Datei gültig bleibt, und bleiben bestehen. Inhalte, die du sehen kannst oder die im Dokumenttext stecken, etwa Kommentare, nachverfolgte Änderungen, ausgeblendete Tabellenblätter oder ein auf eine Seite geschriebener Name, sind keine Metadaten und werden nicht entfernt. Prüfe diese gesondert.",
      },
      {
        heading: "Fotos behalten Ausrichtung und Farbe",
        body: "Fotos werden in ihre richtige Ausrichtung gedreht, bevor das Ausrichtungs-Tag entfernt wird, damit sie nicht seitlich liegen. Das Farbprofil bleibt erhalten, damit sich die Farben nicht verschieben.",
      },
      {
        heading: "Datenschutz",
        body: "Dateien werden verschlüsselt übertragen. Deine Originaldatei wird gelöscht, sobald sie für die Bereinigung gelesen wurde. Die bereinigte Kopie wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      },
    ],
    faqDescription: "Häufige Fragen zum Entfernen versteckter Metadaten aus Dateien.",
    faq: [
      { question: "Wie entferne ich den GPS-Standort aus einem Foto?", answer: "Lade das Foto hoch. Das Tool entfernt die EXIF-Daten einschließlich der GPS-Koordinaten und liefert eine bereinigte Kopie im selben Format." },
      { question: "Verringert das Entfernen von Metadaten die Qualität?", answer: "Das Bild wird in seinem eigenen Format neu kodiert, ein JPG kann sich also minimal verändern. Es wird weder skaliert noch umgewandelt." },
      { question: "Kann es den Autor aus einem Word-Dokument entfernen?", answer: "Ja. Es löscht Autor, zuletzt geändert von, Firma und Titel aus den Dokumenteigenschaften." },
      { question: "Bleibt etwas zurück?", answer: "Strukturdaten, die für eine gültige Datei nötig sind, bleiben bestehen, ebenso sichtbarer Inhalt und Dinge wie Kommentare oder nachverfolgte Änderungen im Dokument." },
      { question: "Welche Formate werden unterstützt?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX und PPTX." },
      { question: "Ändert es meine Originaldatei?", answer: "Nein. Du lädst eine separate bereinigte Kopie herunter." },
    ],
  },
};
