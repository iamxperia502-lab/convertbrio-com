import type { LocalePages, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsDe, hubUiDe } from "./de-hubs";

const privacy: StaticPageDoc = {
  seoTitle: "Datenschutzerklärung | ConvertBrio",
  title: "Datenschutzerklärung",
  description:
    "Wie ConvertBrio Ihre Daten und Dateien erhebt, verwendet und schützt, einschließlich der Frage, wie lange Uploads gespeichert und wann sie gelöscht werden.",
  eyebrow: "Zuletzt aktualisiert am 23. September 2026",
  heading: "Datenschutzerklärung",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio („wir“, „uns“ oder „unser“) bietet Online-Tools zum Konvertieren, Komprimieren und Verbessern von Dateien an. ConvertBrio wird unabhängig von Subham Sharma betrieben, mit Sitz in Indien. Diese Erklärung beschreibt, welche Informationen wir erheben, wie wir sie verwenden und welche Wahlmöglichkeiten Sie haben. Sie gilt für convertbrio.com und alle dortigen Tools.",
      ],
    },
    {
      heading: "1. Wer wir sind",
      paragraphs: [
        "ConvertBrio wird unabhängig von Subham Sharma aus Indien betrieben. Bei Fragen zum Datenschutz, Berichtigungen oder Anfragen zu Ihren Rechten wenden Sie sich an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oder nutzen Sie unsere <a href=\"/contact\">Kontaktseite</a>.",
      ],
    },
    {
      heading: "2. Welche Informationen wir erheben",
      paragraphs: ["Wir erheben:"],
      list: [
        "<strong>Kontoinformationen</strong>, die Sie uns mitteilen, etwa Ihren Namen und Ihre E-Mail-Adresse.",
        "<strong>Angaben im Kontaktformular</strong>, einschließlich der Nachricht und der Antwort-E-Mail-Adresse, die Sie uns nennen.",
        "<strong>Technische Daten</strong> wie IP-Adresse, Browsertyp, Gerätetyp und Betriebssystem, die automatisch erfasst werden, um den Dienst sicher zu betreiben und Probleme zu analysieren.",
        "<strong>Nutzungsdaten</strong>, etwa welche Tools und Seiten Sie besuchen und wie Sie damit interagieren.",
        "<strong>Sicherheitsprotokolle</strong>, mit denen wir Missbrauch erkennen, Anfragen begrenzen und den Dienst zuverlässig halten.",
      ],
    },
    {
      heading: "3. Dateien, die Sie hochladen",
      paragraphs: [
        "Hochgeladene Dateien werden über eine verschlüsselte Verbindung (HTTPS/TLS) übertragen. Ihre Originaldatei wird unmittelbar nach dem Einlesen für die Konvertierung gelöscht. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Das Ergebnis liegt bis dahin zum Download bereit, und zwar unabhängig davon, ob Sie es herunterladen. Wir prüfen, teilen oder nutzen den Inhalt Ihrer Dateien nicht manuell für andere Zwecke als die Lieferung des gewünschten Ergebnisses. Das gilt auch für KI-Tools wie den Bildverbesserer, den Hochskalierer und die Hintergrundentfernung: Hochgeladene Dateien dienen ausschließlich der Erstellung Ihres Ergebnisses und werden niemals zum Training oder zur Verbesserung eines Modells verwendet.",
      ],
    },
    {
      heading: "4. Wie wir Informationen verwenden",
      paragraphs: [
        "Wir verwenden die erhobenen Informationen, um ConvertBrio zu betreiben und zu verbessern, Support zu leisten, Missbrauch und Sicherheitsvorfälle zu überwachen, die Produktnutzung in aggregierter Form zu verstehen und gesetzliche Pflichten zu erfüllen. Wir verkaufen Ihre personenbezogenen Daten nicht.",
      ],
    },
    {
      heading: "5. Cookies und ähnliche Technologien",
      paragraphs: [
        "Wir und unsere Dienstleister verwenden Cookies und ähnliche Technologien (etwa den lokalen Speicher) für folgende Zwecke:",
        "Soweit erforderlich (auch für Besucher aus dem EWR, dem Vereinigten Königreich und der Schweiz), fragen wir vor dem Setzen nicht notwendiger Analyse- oder Werbe-Cookies Ihre Einwilligung über das Banner ein, das bei Ihrem ersten Besuch erscheint. Ihre Auswahl können Sie jederzeit über den Link „Cookie-Einstellungen verwalten“ in der Fußzeile jeder Seite ändern. Wenn Sie nicht notwendige Cookies ablehnen, können Sie die Tools von ConvertBrio trotzdem uneingeschränkt nutzen.",
      ],
      list: [
        "<strong>Notwendig</strong>: Damit Sie angemeldet bleiben und grundlegende Einstellungen wie das Farbschema gespeichert werden.",
        "<strong>Analyse</strong>: Wir verstehen die Nutzung in aggregierter Form über Google Analytics und Microsoft Clarity, damit wir wissen, welche Tools hilfreich sind und wo das Produkt Schwächen hat.",
        "<strong>Werbung</strong>: Sollten wir Werbung anzeigen (zum Beispiel über Google AdSense), verwenden Google und andere Drittanbieter Cookies, darunter das Google-Werbe-Cookie, um Anzeigen auf Grundlage Ihrer früheren Besuche dieser oder anderer Websites auszuspielen. Diese Cookies ermöglichen es Google und seinen Partnern, Ihnen personalisierte Werbung anzuzeigen. Personalisierte Werbung können Sie in den <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Google-Anzeigeneinstellungen</a> oder allgemein unter <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener noreferrer\">aboutads.info</a> deaktivieren.",
      ],
    },
    {
      heading: "6. Von uns eingesetzte Drittdienste",
      paragraphs: [
        "ConvertBrio nutzt die folgenden Dienstleister, die jeweils nur die Informationen erhalten, die sie für ihre Aufgabe benötigen:",
        "Wir verkaufen diese Informationen nicht und geben sie an keinen Anbieter weiter, soweit es für die genannte Funktion nicht erforderlich ist.",
      ],
      list: [
        "<strong>Vercel</strong>: Hostet die Website und führt die Dateikonvertierungen auf seinen Servern aus (die Konvertierung findet nicht lokal in Ihrem Browser statt). Die Originaldatei wird nur kurz gespeichert, bis sie für die Konvertierung eingelesen und gelöscht wird.",
        "<strong>Supabase</strong>: Speichert Konten und legt das konvertierte Ergebnis Ihrer Datei vorübergehend bis zur automatischen Löschung ab.",
        "<strong>Google Analytics &amp; Google Tag Manager</strong>: Aggregierte Nutzungsanalyse, abhängig von Ihrer Cookie-Einwilligung.",
        "<strong>Microsoft Clarity</strong>: Aggregierte Nutzungsanalyse und Einblicke in Sitzungen, abhängig von Ihrer Cookie-Einwilligung.",
        "<strong>Google AdSense</strong>: Werbung, sobald sie auf der Website aktiviert ist, abhängig von Ihrer Cookie-Einwilligung.",
      ],
    },
    {
      heading: "7. Rechtsgrundlagen und Ihre Rechte (EWR, Vereinigtes Königreich und Schweiz)",
      paragraphs: [
        "Soweit die DSGVO oder die britische UK GDPR gilt, verarbeiten wir Ihre Daten auf folgenden Grundlagen: zur Erfüllung unseres Vertrags mit Ihnen (Bereitstellung der von Ihnen genutzten Tools), aufgrund unserer berechtigten Interessen (Sicherheit, Betrugsprävention und Verbesserung des Dienstes) und aufgrund Ihrer Einwilligung (Analyse- und Werbe-Cookies). Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten sowie das Recht, diese in einem übertragbaren Format zu erhalten und Ihre Einwilligung jederzeit zu widerrufen, ohne dass die bis dahin erfolgte Verarbeitung dadurch unrechtmäßig wird. Außerdem haben Sie das Recht, sich bei Ihrer örtlichen Datenschutz-Aufsichtsbehörde zu beschweren. Um diese Rechte auszuüben, schreiben Sie an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "8. Datenschutzrechte in US-Bundesstaaten",
      paragraphs: [
        "Wenn Sie in einem US-Bundesstaat mit umfassendem Datenschutzgesetz wohnen (etwa Kalifornien, Colorado, Connecticut, Virginia oder andere), haben Sie möglicherweise das Recht, Auskunft über Ihre personenbezogenen Daten zu verlangen, sie einzusehen, zu löschen oder zu berichtigen sowie dem Verkauf oder der „Weitergabe“ (sharing) zu widersprechen, einschließlich der kontextübergreifenden verhaltensbasierten Werbung, als die manche Bundesstaaten Werbe-Cookies einstufen. Wir verkaufen keine personenbezogenen Daten. Sollten wir über Google AdSense Werbung anzeigen, kann dies nach manchen Landesgesetzen als „Weitergabe“ gelten. Sie können jederzeit widersprechen: über den Cookie-Link in der Fußzeile, über die Seite <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Google-Anzeigeneinstellungen</a> oder indem Ihr Browser ein Global-Privacy-Control-Signal (GPC) sendet, das wir als Widerspruch behandeln. Um diese Rechte auszuüben, schreiben Sie an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "9. Internationale Datenübermittlungen",
      paragraphs: [
        "ConvertBrio wird von Indien aus betrieben und nutzt Dienstleister (darunter Vercel und Supabase), die Daten möglicherweise auch in anderen Ländern verarbeiten, unter anderem in den USA. Wo wir personenbezogene Daten international übermitteln, verlassen wir uns auf die vertraglichen und technischen Schutzmaßnahmen dieser Anbieter, damit die Daten im Einklang mit dieser Erklärung geschützt bleiben.",
      ],
    },
    {
      heading: "10. Speicherdauer",
      paragraphs: [
        "Ihre Originaldatei wird unmittelbar nach dem Einlesen für die Konvertierung gelöscht. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden, unabhängig davon, ob Sie es herunterladen. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet. Kontoinformationen bewahren wir auf, solange Ihr Konto aktiv ist, und danach für einen begrenzten Zeitraum, um rechtlichen oder sicherheitsbezogenen Pflichten nachzukommen. Sicherheits- und Nutzungsprotokolle werden nur so lange gespeichert, wie es für die oben beschriebenen Zwecke nötig ist, und danach gelöscht oder anonymisiert.",
      ],
    },
    {
      heading: "11. Datenschutz für Kinder",
      paragraphs: [
        "ConvertBrio richtet sich an Nutzerinnen und Nutzer ab 18 Jahren und nicht an Kinder. Wir erheben wissentlich keine personenbezogenen Daten von Personen unter 18 Jahren. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, schreiben Sie an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>, und wir löschen diese.",
      ],
    },
    {
      heading: "12. Änderungen dieser Erklärung",
      paragraphs: [
        "Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Bei wesentlichen Änderungen passen wir das Datum „Zuletzt aktualisiert“ am Anfang dieser Seite an und informieren Sie, wo angemessen, zusätzlich.",
      ],
    },
    {
      heading: "13. Kontakt",
      paragraphs: [
        "Fragen zu dieser Erklärung oder Anfragen zur Ausübung Ihrer Datenschutzrechte richten Sie bitte an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oder über unsere <a href=\"/contact\">Kontaktseite</a>.",
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: "Nutzungsbedingungen | ConvertBrio",
  title: "Nutzungsbedingungen",
  description:
    "Die Bedingungen für die Nutzung der kostenlosen Dateitools und Dienste von ConvertBrio, einschließlich zulässiger Nutzung, Limits und Ihrer Pflichten.",
  eyebrow: "Zuletzt aktualisiert am 25. August 2026",
  heading: "Nutzungsbedingungen",
  blocks: [
    {
      paragraphs: [
        "Diese Nutzungsbedingungen („Bedingungen“) regeln den Zugang zu und die Nutzung von ConvertBrio. Mit der Nutzung unserer Tools erklären Sie sich mit diesen Bedingungen einverstanden.",
      ],
    },
    {
      heading: "1. Nutzung von ConvertBrio",
      paragraphs: [
        "Sie dürfen ConvertBrio nutzen, um Dateien zu konvertieren, zu komprimieren und zu verbessern, an denen Sie die Rechte besitzen oder zu deren Verarbeitung Sie berechtigt sind. Für die Nutzung des Dienstes müssen Sie mindestens 18 Jahre alt sein.",
      ],
    },
    {
      heading: "2. Zulässige Nutzung",
      paragraphs: [
        "Sie verpflichten sich, keine rechtswidrigen, rechtsverletzenden oder schädlichen Inhalte hochzuladen, den Dienst nicht zu stören und ohne unsere schriftliche Erlaubnis keine automatisierten Werkzeuge einzusetzen, um Nutzungslimits zu umgehen.",
      ],
    },
    {
      heading: "3. Ihre Inhalte",
      paragraphs: [
        "Alle Rechte an den von Ihnen hochgeladenen Dateien verbleiben bei Ihnen. Wir erheben keinen Eigentumsanspruch an Ihren Inhalten und verarbeiten sie nur, um die von Ihnen angeforderte Konvertierung oder Verbesserung zu liefern.",
      ],
    },
    {
      heading: "4. Kostenpflichtige Dienste",
      paragraphs: [
        "ConvertBrio bietet derzeit keine kostenpflichtigen Abonnements an. Sollten kostenpflichtige Dienste eingeführt werden, zeigen wir Preise, Abrechnungsintervall, Verlängerungsbedingungen und Kündigungsmodalitäten vor dem Kauf an. Diese Bedingungen werden aktualisiert, bevor kostenpflichtige Dienste verfügbar werden.",
      ],
    },
    {
      heading: "5. Verfügbarkeit des Dienstes",
      paragraphs: [
        "Wir bemühen uns, ConvertBrio verfügbar und zuverlässig zu halten, garantieren jedoch keinen unterbrechungsfreien Zugang. Wir können Funktionen mit angemessener Vorankündigung ändern oder einstellen.",
      ],
    },
    {
      heading: "6. Haftungsausschluss und Haftungsbeschränkung",
      paragraphs: [
        "ConvertBrio wird „wie besehen“ und ohne Gewährleistung jeglicher Art bereitgestellt. Soweit gesetzlich zulässig, haftet ConvertBrio nicht für mittelbare Schäden oder Folgeschäden, die aus Ihrer Nutzung des Dienstes entstehen.",
      ],
    },
    {
      heading: "7. Änderungen dieser Bedingungen",
      paragraphs: [
        "Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Wenn Sie ConvertBrio nach Inkrafttreten der Änderungen weiter nutzen, gelten die geänderten Bedingungen als akzeptiert.",
      ],
    },
    {
      heading: "8. Kontakt",
      paragraphs: [
        "Fragen zu diesen Bedingungen richten Sie bitte an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oder über unsere <a href=\"/contact\">Kontaktseite</a>.",
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: "Vertrauen & Sicherheit | ConvertBrio",
  title: "Vertrauen & Sicherheit",
  description:
    "Wie ConvertBrio mit Ihren Dateien umgeht, wie Sie Missbrauch oder Sicherheitsprobleme melden und wie wir Korrekturen an veröffentlichten Ratgebern behandeln.",
  eyebrow: "Zuletzt aktualisiert am 23. September 2026",
  heading: "Vertrauen & Sicherheit",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio wird unabhängig von Subham Sharma betrieben, mit Sitz in Indien. Diese Seite fasst zusammen, wie wir mit Ihren Dateien umgehen, wie Sie Missbrauch oder ein Sicherheitsproblem melden und wie wir Korrekturen an veröffentlichten Ratgebern behandeln. Die vollständigen rechtlichen Details finden Sie in unserer <a href=\"/privacy\">Datenschutzerklärung</a> und unseren <a href=\"/terms\">Nutzungsbedingungen</a>.",
      ],
    },
    {
      heading: "Wie mit Ihren Dateien umgegangen wird",
      paragraphs: [
        "Dateien werden über eine verschlüsselte Verbindung (HTTPS/TLS) übertragen. Jede Konvertierung läuft als automatisierter Vorgang: Niemand öffnet, prüft oder liest zu irgendeinem Zeitpunkt manuell den Inhalt Ihrer Datei. Das gilt auch für KI-Tools wie den Bildverbesserer, den Hochskalierer und die Hintergrundentfernung, bei denen Uploads ausschließlich der Erstellung Ihres Ergebnisses dienen und niemals zum Training oder zur Verbesserung eines Modells verwendet werden.",
        "Ihre Originaldatei wird unmittelbar nach dem Einlesen für die Konvertierung gelöscht. Das konvertierte Ergebnis wird durch eine tägliche Bereinigung gelöscht, in der Regel innerhalb von etwa 24 Stunden, unabhängig davon, ob Sie es herunterladen. Die Dateien werden automatisch und ohne menschliche Prüfung auf den Servern unserer Hosting-Anbieter (Vercel und Supabase) verarbeitet.",
      ],
    },
    {
      heading: "Missbrauch melden",
      paragraphs: [
        "Dienste für Datei-Uploads können missbraucht werden: etwa um Inhalte zu verarbeiten, an denen jemand keine Rechte hat, oder für andere Zwecke. Wenn Sie glauben, dass eine über ConvertBrio verarbeitete Datei illegale Inhalte, eine Urheberrechtsverletzung oder eine andere Form von Missbrauch betrifft, melden Sie dies über <a href=\"/contact\">unser Kontaktformular</a> oder an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>. Wir zeigen hochgeladene Dateinamen oder Ergebnisse nicht öffentlich an und prüfen Missbrauchsmeldungen persönlich statt über eine automatisierte Warteschlange.",
        "Tools wie PDF entsperren sind ausschließlich dafür gedacht, Beschränkungen auf Eigentümerebene aus Dokumenten zu entfernen, die Sie ohnehin bearbeiten dürfen. Was das genau umfasst und was nicht, erfahren Sie im <a href=\"/tools/unlock-pdf\">Tool PDF entsperren</a> und in unserem Ratgeber zu <a href=\"/blog/pdf-password-restrictions-explained\">PDF-Passwortbeschränkungen</a>. Sie sind weder dafür gebaut noch dafür gedacht, den Schutz von Dateien zu umgehen, die Ihnen nicht gehören oder die Sie nicht ändern dürfen.",
      ],
    },
    {
      heading: "Ein Sicherheitsproblem melden",
      paragraphs: [
        "Wenn Sie eine Sicherheitslücke in ConvertBrio finden, von einem Zugriffskontrollproblem bis hin zu einer Möglichkeit, Daten anderer Nutzer einzusehen, melden Sie sie bitte an <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> oder über <a href=\"/contact\">das Kontaktformular</a>, bevor Sie sie öffentlich machen. Als unabhängig betriebenes Projekt können wir nicht die Reaktionszeiten eines großen Sicherheitsteams bieten, aber jede Meldung wird gelesen und ernst genommen.",
      ],
    },
    {
      heading: "Korrekturen an Ratgebern und Artikeln",
      paragraphs: [
        "Die Artikel im <a href=\"/blog\">ConvertBrio-Blog</a> sollen korrekt und praxisnah sein und werden vor der Veröffentlichung geprüft. Wenn Ihnen ein sachlicher Fehler, eine veraltete Aussage oder etwas auffällt, das nicht mehr dazu passt, wie sich ein Tool tatsächlich verhält, teilen Sie es uns über <a href=\"/contact\">das Kontaktformular</a> mit. Korrekturen nehmen wir direkt im Artikel vor, nicht stillschweigend, und das angegebene Datum der Seite zeigt, wann sie zuletzt inhaltlich überarbeitet wurde.",
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: "Kontakt | ConvertBrio",
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit dem ConvertBrio-Team auf: für Support, Feedback oder Partnerschaftsanfragen.",
  eyebrow: "Kontakt",
  heading: "Schreiben Sie uns",
  intro: "Fragen, Feedback oder ein Tool-Wunsch? Wir lesen jede Nachricht.",
  supportHeading: "Allgemeiner Support",
  businessHeading: "Geschäftliches & Partnerschaften",
  responseNote: "In der Regel antworten wir innerhalb eines Werktags.",
  nameLabel: "Name",
  emailLabel: "E-Mail",
  subjectLabel: "Betreff",
  messageLabel: "Nachricht",
  sendLabel: "Nachricht senden",
};

const blogIndex: BlogIndexDoc = {
  seoTitle: "Ratgeber zu Dateien, Formaten und Konvertierung | ConvertBrio",
  title: "Blog",
  description:
    "Praktische Ratgeber zu Dateiformaten, PDFs, Bildern und Dokumentkonvertierung: wie sie funktionieren, was sie wirklich verkleinert oder kaputt macht und wie sich typische Probleme beheben lassen.",
  eyebrow: "Blog",
  heading: "Ratgeber zu Dateien, Formaten und Konvertierung",
  intro: "Praktische Antworten auf die Dateiprobleme, auf die Menschen tatsächlich stoßen, ohne Geschwafel und ohne Füllmaterial.",
  englishNote: "Unsere Ratgeber erscheinen derzeit auf Englisch.",
  empty: "Noch keine Beiträge, schauen Sie bald wieder vorbei.",
  dateLocale: "de-DE",
};

export const pagesDe: LocalePages | undefined = {
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsDe,
  hubUi: hubUiDe,
};
