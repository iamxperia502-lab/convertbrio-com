import type { Locale } from "./i18n";

// Text for the compress-image benchmark section (components/CompressImageBenchmark.astro).
// The measured numbers live in the component and are identical in every
// language; only the words change. `{target}`, `{achieved}` and `{ratio}` are
// replaced with the measured values.
export interface BenchmarkText {
  heading: string;
  intro: string;
  methodologyLabel: string;
  methodologyBefore: string;
  methodologyAfter: string;
  beforeAfterHeading: string;
  originalLabel: string;
  originalAlt: string;
  targetLabel: string;
  achievedLabel: string;
  compressedAlt: string;
  resultsHeading: string;
  thTarget: string;
  thAchieved: string;
  thDimensions: string;
  thRatio: string;
  thHit: string;
  unchanged: string;
  widthReduced: string;
  smaller: string;
  yes: string;
  kb: string;
  bytes: string;
  resultsNote: string;
  formatHeading: string;
  formatBody: string;
  matrixHeading: string;
  thInput: string;
  thOutput: string;
  thNotes: string;
  na: string;
  /** Notes for the six matrix rows in order: JPEG, PNG, WEBP, AVIF, GIF, HEIC/HEIF. */
  matrixNotes: [string, string, string, string, string, string];
  howHeading: string;
  howBefore: string;
  howAfter: string;
  limitsHeading: string;
  limits: [string, string, string, string, string];
}

const en: BenchmarkText = {
  heading: "Real compression results, not estimates",
  intro:
    "Every number on this page came from actually uploading a file to ConvertBrio's live compressor and measuring what came back, the same endpoint your browser calls when you use the tool above. Nothing here is simulated.",
  methodologyLabel: "Methodology",
  methodologyBefore:
    "The test file is a 2000 × 1500, 814.8 KB synthetic JPEG we generated ourselves: a soft gradient portrait composition with photographic-grain noise layered on top, built to compress like a real phone photo without using anyone's actual photo (for privacy) or a downloaded stock image (for licensing). We ran it through ",
  methodologyAfter:
    " with each target size below and recorded the exact response. Tested in Chrome on macOS: conversion runs entirely on ConvertBrio's servers, so the result is identical regardless of which browser or device sends the request.",
  beforeAfterHeading: "Before / after at each target size",
  originalLabel: "Original",
  originalAlt: "Original test image before compression, 814.8 KB",
  targetLabel: "{target} target",
  achievedLabel: "{achieved} achieved",
  compressedAlt: "Compressed to a {target} target, achieved {achieved}",
  resultsHeading: "Measured results",
  thTarget: "Target",
  thAchieved: "Achieved",
  thDimensions: "Dimensions",
  thRatio: "Compression ratio",
  thHit: "Hit target?",
  unchanged: "(unchanged)",
  widthReduced: "(−15% width)",
  smaller: "{ratio} smaller",
  yes: "Yes",
  kb: "KB",
  bytes: "bytes",
  resultsNote:
    "The 200–50 KB targets were all hit on quality reduction alone, at full original resolution. The 20 KB target needed one downscale step (2000px → 1700px wide, −15%) because quality reduction alone couldn't fit that far below the original: visible detail loss starts to show at this level; see limitations below.",
  formatHeading: "Format matters: JPEG vs. PNG at the same target",
  formatBody:
    "We ran the identical test image through the same 100 KB target twice: once saved as JPEG, once as a lossless PNG re-encode of the same pixels (6.35 MB original). JPEG hit the target at full 2000×1500 resolution. PNG needed to drop to 887×665 (44% of the original width) and fall back to 256-color palette quantization, which introduces visible dithering speckle. If your source format is flexible, JPEG or WEBP will preserve more detail at the same target size than PNG.",
  matrixHeading: "Supported format matrix",
  thInput: "Input format",
  thOutput: "Output format",
  thNotes: "Notes",
  na: "N/A",
  matrixNotes: [
    "",
    "Uses palette quantization to hit small targets: see limitations below",
    "",
    "",
    "Only the first frame is kept: animation isn't preserved",
    "HEIC/HEIF aren't supported output formats, so iPhone photos convert to JPEG",
  ],
  howHeading: "How target-size compression actually works",
  howBefore: "Processing runs server-side using ",
  howAfter:
    " (built on libvips). When you set a target size, ConvertBrio binary-searches JPEG/WEBP/AVIF quality between 10% and 95%, re-encoding and measuring the actual output at each step, until it finds the highest quality that still fits your target, typically in 6–7 attempts. PNG targets add palette quantization to that same search, since plain PNG quality settings barely change file size on their own. If the target still can't be hit at the 10% quality floor, the tool falls back to shrinking the image's dimensions by 15% at a time (up to 6 steps) and retries, rather than pushing quality below a usable threshold.",
  limitsHeading: "Limitations and edge cases",
  limits: [
    "Very aggressive targets relative to the source (well under the 20 KB case tested above) can require dropping dimensions to a fraction of the original before the file fits: there's a real quality floor, not just a size floor.",
    "PNG compresses far less efficiently than JPEG/WEBP for photographic content (see the format comparison above) because it relies on palette quantization rather than true lossy encoding.",
    "Animated GIFs are compressed as a single still frame: we tested this directly with a 3-frame GIF and confirmed the output keeps only the first frame.",
    "HEIC/HEIF photos (the default format on recent iPhones) always come back as JPEG, since HEIC isn't a supported output format: expect a different file extension than what you uploaded.",
    "Uploads are capped at 100 MB on the free tier.",
  ],
};

const pt: BenchmarkText = {
  heading: "Resultados reais de compressão, não estimativas",
  intro:
    "Cada número desta página vem de um arquivo realmente enviado ao compressor ao vivo do ConvertBrio, medindo o que voltou, no mesmo endpoint que o seu navegador chama quando você usa a ferramenta acima. Nada aqui é simulado.",
  methodologyLabel: "Metodologia",
  methodologyBefore:
    "O arquivo de teste é um JPEG sintético de 2000 × 1500 e 814,8 KB que nós mesmos geramos: uma composição de retrato em degradê suave com ruído de grão fotográfico por cima, feita para comprimir como uma foto real de celular sem usar a foto de ninguém (por privacidade) nem uma imagem de banco de imagens (por licenciamento). Enviamos o arquivo para ",
  methodologyAfter:
    " com cada tamanho-alvo abaixo e registramos a resposta exata. Testado no Chrome, em macOS: a conversão roda inteiramente nos servidores do ConvertBrio, então o resultado é idêntico, seja qual for o navegador ou dispositivo que envia a requisição.",
  beforeAfterHeading: "Antes / depois em cada tamanho-alvo",
  originalLabel: "Original",
  originalAlt: "Imagem de teste original antes da compressão, 814,8 KB",
  targetLabel: "Alvo de {target}",
  achievedLabel: "{achieved} alcançados",
  compressedAlt: "Comprimida para um alvo de {target}, alcançou {achieved}",
  resultsHeading: "Resultados medidos",
  thTarget: "Alvo",
  thAchieved: "Alcançado",
  thDimensions: "Dimensões",
  thRatio: "Taxa de compressão",
  thHit: "Atingiu o alvo?",
  unchanged: "(inalteradas)",
  widthReduced: "(largura −15%)",
  smaller: "{ratio} menor",
  yes: "Sim",
  kb: "KB",
  bytes: "bytes",
  resultsNote:
    "Os alvos de 200 a 50 KB foram todos atingidos só com redução de qualidade, na resolução original completa. O alvo de 20 KB exigiu uma etapa de redução de dimensões (2000 px → 1700 px de largura, −15%), porque a redução de qualidade sozinha não chegava tão abaixo do original: a perda visível de detalhes começa a aparecer nesse nível; veja as limitações abaixo.",
  formatHeading: "O formato importa: JPEG x PNG com o mesmo alvo",
  formatBody:
    "Passamos a mesma imagem de teste duas vezes pelo mesmo alvo de 100 KB: uma salva como JPEG e outra como uma recodificação PNG sem perdas dos mesmos pixels (original de 6,35 MB). O JPEG atingiu o alvo na resolução completa de 2000×1500. O PNG precisou cair para 887×665 (44% da largura original) e recorrer à quantização de paleta de 256 cores, que introduz um granulado de dithering visível. Se o formato de origem for flexível, JPEG ou WEBP preservam mais detalhes do que PNG no mesmo tamanho-alvo.",
  matrixHeading: "Matriz de formatos compatíveis",
  thInput: "Formato de entrada",
  thOutput: "Formato de saída",
  thNotes: "Observações",
  na: "N/D",
  matrixNotes: [
    "",
    "Usa quantização de paleta para atingir alvos pequenos: veja as limitações abaixo",
    "",
    "",
    "Só o primeiro quadro é mantido: a animação não é preservada",
    "HEIC/HEIF não são formatos de saída compatíveis, então fotos de iPhone são convertidas para JPEG",
  ],
  howHeading: "Como a compressão por tamanho-alvo realmente funciona",
  howBefore: "O processamento roda no servidor usando ",
  howAfter:
    " (baseado no libvips). Quando você define um tamanho-alvo, o ConvertBrio faz uma busca binária da qualidade de JPEG/WEBP/AVIF entre 10% e 95%, recodificando e medindo o resultado real a cada etapa, até encontrar a maior qualidade que ainda cabe no alvo, em geral em 6 a 7 tentativas. Alvos em PNG somam a quantização de paleta a essa mesma busca, já que o ajuste de qualidade do PNG comum quase não altera o tamanho do arquivo. Se o alvo ainda não for atingido no piso de 10% de qualidade, a ferramenta passa a reduzir as dimensões da imagem em 15% por vez (até 6 etapas) e tenta de novo, em vez de levar a qualidade abaixo de um limite utilizável.",
  limitsHeading: "Limitações e casos extremos",
  limits: [
    "Alvos muito agressivos em relação à origem (bem abaixo do caso de 20 KB testado acima) podem exigir reduzir as dimensões a uma fração do original até o arquivo caber: existe um piso real de qualidade, não apenas de tamanho.",
    "O PNG comprime de forma muito menos eficiente que JPEG/WEBP em conteúdo fotográfico (veja a comparação de formatos acima), porque depende de quantização de paleta em vez de uma compressão com perdas de verdade.",
    "GIFs animados são comprimidos como um único quadro estático: testamos isso diretamente com um GIF de 3 quadros e confirmamos que o resultado mantém só o primeiro quadro.",
    "Fotos HEIC/HEIF (o formato padrão dos iPhones recentes) sempre voltam como JPEG, já que HEIC não é um formato de saída compatível: espere uma extensão diferente da do arquivo enviado.",
    "Os envios são limitados a 100 MB no plano gratuito.",
  ],
};

const es: BenchmarkText = {
  heading: "Resultados reales de compresión, no estimaciones",
  intro:
    "Cada cifra de esta página proviene de subir de verdad un archivo al compresor en vivo de ConvertBrio y medir lo que devolvió, el mismo endpoint al que llama tu navegador cuando usas la herramienta de arriba. Nada aquí está simulado.",
  methodologyLabel: "Metodología",
  methodologyBefore:
    "El archivo de prueba es un JPEG sintético de 2000 × 1500 y 814,8 KB que generamos nosotros mismos: una composición de retrato con degradado suave y ruido de grano fotográfico encima, pensada para comprimirse como una foto real de móvil sin usar la foto de nadie (por privacidad) ni una imagen de stock descargada (por licencias). Lo enviamos a ",
  methodologyAfter:
    " con cada tamaño objetivo de abajo y registramos la respuesta exacta. Probado en Chrome en macOS: la conversión se ejecuta por completo en los servidores de ConvertBrio, así que el resultado es idéntico sea cual sea el navegador o dispositivo que envía la solicitud.",
  beforeAfterHeading: "Antes / después con cada tamaño objetivo",
  originalLabel: "Original",
  originalAlt: "Imagen de prueba original antes de comprimir, 814,8 KB",
  targetLabel: "Objetivo de {target}",
  achievedLabel: "{achieved} logrados",
  compressedAlt: "Comprimida a un objetivo de {target}, se logró {achieved}",
  resultsHeading: "Resultados medidos",
  thTarget: "Objetivo",
  thAchieved: "Logrado",
  thDimensions: "Dimensiones",
  thRatio: "Relación de compresión",
  thHit: "¿Alcanzó el objetivo?",
  unchanged: "(sin cambios)",
  widthReduced: "(ancho −15%)",
  smaller: "{ratio} más pequeño",
  yes: "Sí",
  kb: "KB",
  bytes: "bytes",
  resultsNote:
    "Los objetivos de 200 a 50 KB se alcanzaron todos solo reduciendo la calidad, a la resolución original completa. El objetivo de 20 KB necesitó un paso de reducción de dimensiones (2000 px → 1700 px de ancho, −15%) porque bajar solo la calidad no llegaba tan por debajo del original: la pérdida visible de detalle empieza a notarse a este nivel; consulta las limitaciones más abajo.",
  formatHeading: "El formato importa: JPEG frente a PNG con el mismo objetivo",
  formatBody:
    "Pasamos la misma imagen de prueba dos veces por el mismo objetivo de 100 KB: una guardada como JPEG y otra como una recodificación PNG sin pérdidas de los mismos píxeles (original de 6,35 MB). El JPEG alcanzó el objetivo a la resolución completa de 2000×1500. El PNG tuvo que bajar a 887×665 (el 44 % del ancho original) y recurrir a la cuantización de paleta de 256 colores, que introduce un granulado de dithering visible. Si tu formato de origen es flexible, JPEG o WEBP conservan más detalle que PNG con el mismo tamaño objetivo.",
  matrixHeading: "Matriz de formatos compatibles",
  thInput: "Formato de entrada",
  thOutput: "Formato de salida",
  thNotes: "Notas",
  na: "N/D",
  matrixNotes: [
    "",
    "Usa cuantización de paleta para alcanzar objetivos pequeños: consulta las limitaciones más abajo",
    "",
    "",
    "Solo se conserva el primer fotograma: la animación no se mantiene",
    "HEIC/HEIF no son formatos de salida compatibles, así que las fotos de iPhone se convierten a JPEG",
  ],
  howHeading: "Cómo funciona realmente la compresión por tamaño objetivo",
  howBefore: "El procesamiento se ejecuta en el servidor con ",
  howAfter:
    " (basado en libvips). Al fijar un tamaño objetivo, ConvertBrio hace una búsqueda binaria de la calidad de JPEG/WEBP/AVIF entre el 10 % y el 95 %, recodificando y midiendo el resultado real en cada paso, hasta encontrar la mayor calidad que aún cabe en tu objetivo, normalmente en 6–7 intentos. Los objetivos en PNG suman la cuantización de paleta a esa misma búsqueda, ya que el ajuste de calidad del PNG normal apenas cambia el tamaño del archivo. Si el objetivo sigue sin alcanzarse con la calidad mínima del 10 %, la herramienta pasa a reducir las dimensiones de la imagen un 15 % cada vez (hasta 6 pasos) y vuelve a intentarlo, en lugar de bajar la calidad por debajo de un umbral utilizable.",
  limitsHeading: "Limitaciones y casos límite",
  limits: [
    "Los objetivos muy agresivos respecto al original (muy por debajo del caso de 20 KB probado arriba) pueden exigir reducir las dimensiones a una fracción del original hasta que el archivo quepa: hay un límite real de calidad, no solo de tamaño.",
    "El PNG comprime mucho peor que JPEG/WEBP con contenido fotográfico (consulta la comparación de formatos de arriba) porque se apoya en la cuantización de paleta en lugar de una compresión con pérdida real.",
    "Los GIF animados se comprimen como un único fotograma fijo: lo probamos directamente con un GIF de 3 fotogramas y confirmamos que el resultado conserva solo el primero.",
    "Las fotos HEIC/HEIF (el formato por defecto de los iPhone recientes) siempre se devuelven como JPEG, ya que HEIC no es un formato de salida compatible: espera una extensión distinta a la del archivo que subiste.",
    "Las subidas están limitadas a 100 MB en el plan gratuito.",
  ],
};

const fr: BenchmarkText = {
  heading: "De vrais résultats de compression, pas des estimations",
  intro:
    "Chaque chiffre de cette page vient d'un fichier réellement envoyé au compresseur en production de ConvertBrio, dont nous avons mesuré le résultat, sur le même endpoint que celui appelé par votre navigateur quand vous utilisez l'outil ci-dessus. Rien n'est simulé.",
  methodologyLabel: "Méthodologie",
  methodologyBefore:
    "Le fichier de test est un JPEG synthétique de 2000 × 1500 et 814,8 Ko que nous avons généré nous-mêmes : une composition de portrait en dégradé doux avec du grain photographique en surcouche, conçue pour se compresser comme une vraie photo de téléphone sans utiliser la photo de qui que ce soit (pour la confidentialité) ni une image de banque d'images téléchargée (pour les licences). Nous l'avons envoyé à ",
  methodologyAfter:
    " avec chacune des tailles cibles ci-dessous et noté la réponse exacte. Testé dans Chrome sous macOS : la conversion s'exécute entièrement sur les serveurs de ConvertBrio, le résultat est donc identique quel que soit le navigateur ou l'appareil qui envoie la requête.",
  beforeAfterHeading: "Avant / après pour chaque taille cible",
  originalLabel: "Original",
  originalAlt: "Image de test originale avant compression, 814,8 Ko",
  targetLabel: "Cible de {target}",
  achievedLabel: "{achieved} atteints",
  compressedAlt: "Compressée pour une cible de {target}, {achieved} atteints",
  resultsHeading: "Résultats mesurés",
  thTarget: "Cible",
  thAchieved: "Atteint",
  thDimensions: "Dimensions",
  thRatio: "Taux de compression",
  thHit: "Cible atteinte ?",
  unchanged: "(inchangées)",
  widthReduced: "(largeur −15 %)",
  smaller: "{ratio} plus petit",
  yes: "Oui",
  kb: "Ko",
  bytes: "octets",
  resultsNote:
    "Les cibles de 200 à 50 Ko ont toutes été atteintes par la seule réduction de qualité, à la pleine résolution d'origine. La cible de 20 Ko a nécessité une étape de réduction des dimensions (2000 px → 1700 px de large, −15 %), car la réduction de qualité seule ne permettait pas de descendre aussi bas : la perte de détails visible commence à apparaître à ce niveau ; voir les limites ci-dessous.",
  formatHeading: "Le format compte : JPEG et PNG avec la même cible",
  formatBody:
    "Nous avons passé la même image de test deux fois avec la même cible de 100 Ko : une fois enregistrée en JPEG, une fois en réencodage PNG sans perte des mêmes pixels (original de 6,35 Mo). Le JPEG a atteint la cible à la pleine résolution de 2000×1500. Le PNG a dû descendre à 887×665 (44 % de la largeur d'origine) et recourir à la quantification de palette à 256 couleurs, ce qui introduit un grain de tramage visible. Si votre format source est flexible, le JPEG ou le WEBP conservent plus de détails que le PNG à taille cible égale.",
  matrixHeading: "Matrice des formats pris en charge",
  thInput: "Format d'entrée",
  thOutput: "Format de sortie",
  thNotes: "Remarques",
  na: "N/A",
  matrixNotes: [
    "",
    "Utilise la quantification de palette pour atteindre de petites cibles : voir les limites ci-dessous",
    "",
    "",
    "Seule la première image est conservée : l'animation n'est pas préservée",
    "HEIC/HEIF ne sont pas des formats de sortie pris en charge, les photos d'iPhone sont donc converties en JPEG",
  ],
  howHeading: "Comment fonctionne réellement la compression par taille cible",
  howBefore: "Le traitement s'exécute côté serveur avec ",
  howAfter:
    " (basé sur libvips). Lorsque vous fixez une taille cible, ConvertBrio effectue une recherche dichotomique de la qualité JPEG/WEBP/AVIF entre 10 % et 95 %, en réencodant et en mesurant le résultat réel à chaque étape, jusqu'à trouver la qualité la plus élevée qui respecte encore votre cible, généralement en 6 à 7 essais. Pour les cibles PNG, la quantification de palette s'ajoute à cette même recherche, car le réglage de qualité d'un PNG ordinaire ne change presque pas la taille du fichier. Si la cible n'est toujours pas atteinte au plancher de qualité de 10 %, l'outil réduit les dimensions de l'image de 15 % à la fois (jusqu'à 6 étapes) et réessaie, plutôt que de faire descendre la qualité sous un seuil utilisable.",
  limitsHeading: "Limites et cas particuliers",
  limits: [
    "Des cibles très agressives par rapport à la source (bien en dessous du cas de 20 Ko testé plus haut) peuvent obliger à réduire les dimensions à une fraction de l'original avant que le fichier ne rentre : il existe un vrai plancher de qualité, pas seulement de taille.",
    "Le PNG se compresse bien moins efficacement que le JPEG/WEBP pour du contenu photographique (voir la comparaison des formats ci-dessus), car il repose sur la quantification de palette plutôt que sur un véritable encodage avec perte.",
    "Les GIF animés sont compressés comme une seule image fixe : nous l'avons testé directement avec un GIF de 3 images et confirmé que le résultat ne conserve que la première.",
    "Les photos HEIC/HEIF (le format par défaut des iPhone récents) ressortent toujours en JPEG, car HEIC n'est pas un format de sortie pris en charge : attendez-vous à une extension différente de celle du fichier envoyé.",
    "Les envois sont limités à 100 Mo avec l'offre gratuite.",
  ],
};

const de: BenchmarkText = {
  heading: "Echte Kompressionsergebnisse, keine Schätzungen",
  intro:
    "Jede Zahl auf dieser Seite stammt aus einer tatsächlich hochgeladenen Datei im Live-Kompressor von ConvertBrio, deren Ergebnis wir gemessen haben, über denselben Endpunkt, den dein Browser aufruft, wenn du das Tool oben benutzt. Nichts davon ist simuliert.",
  methodologyLabel: "Methodik",
  methodologyBefore:
    "Die Testdatei ist ein synthetisches JPEG mit 2000 × 1500 Pixeln und 814,8 KB, das wir selbst erzeugt haben: ein Porträt mit weichem Farbverlauf und darübergelegtem fotografischem Filmkorn, gebaut, um sich wie ein echtes Handyfoto zu komprimieren, ohne das Foto einer realen Person (aus Datenschutzgründen) oder ein heruntergeladenes Stockbild (aus Lizenzgründen) zu verwenden. Wir haben sie mit jeder der folgenden Zielgrößen an ",
  methodologyAfter:
    " geschickt und die genaue Antwort festgehalten. Getestet in Chrome unter macOS: Die Konvertierung läuft vollständig auf den Servern von ConvertBrio, das Ergebnis ist also unabhängig davon, welcher Browser oder welches Gerät die Anfrage sendet.",
  beforeAfterHeading: "Vorher / nachher bei jeder Zielgröße",
  originalLabel: "Original",
  originalAlt: "Originales Testbild vor der Kompression, 814,8 KB",
  targetLabel: "Ziel {target}",
  achievedLabel: "{achieved} erreicht",
  compressedAlt: "Auf das Ziel {target} komprimiert, {achieved} erreicht",
  resultsHeading: "Gemessene Ergebnisse",
  thTarget: "Ziel",
  thAchieved: "Erreicht",
  thDimensions: "Abmessungen",
  thRatio: "Kompressionsverhältnis",
  thHit: "Ziel erreicht?",
  unchanged: "(unverändert)",
  widthReduced: "(Breite −15 %)",
  smaller: "{ratio} kleiner",
  yes: "Ja",
  kb: "KB",
  bytes: "Bytes",
  resultsNote:
    "Die Ziele von 200 bis 50 KB wurden allein durch Qualitätsreduzierung in voller Originalauflösung erreicht. Für das Ziel von 20 KB war ein Verkleinerungsschritt nötig (2000 px → 1700 px Breite, −15 %), weil die Qualitätsreduzierung allein nicht so weit unter das Original reichte: Auf dieser Stufe wird der Detailverlust sichtbar; siehe die Einschränkungen unten.",
  formatHeading: "Das Format zählt: JPEG und PNG bei gleichem Ziel",
  formatBody:
    "Wir haben dasselbe Testbild zweimal mit demselben Ziel von 100 KB verarbeitet: einmal als JPEG gespeichert, einmal als verlustfreie PNG-Neukodierung derselben Pixel (Original 6,35 MB). Das JPEG erreichte das Ziel in voller Auflösung von 2000×1500. Das PNG musste auf 887×665 sinken (44 % der ursprünglichen Breite) und auf eine Palettenquantisierung mit 256 Farben zurückgreifen, die sichtbares Dithering-Rauschen erzeugt. Wenn dein Ausgangsformat flexibel ist, behalten JPEG oder WEBP bei gleicher Zielgröße mehr Details als PNG.",
  matrixHeading: "Matrix der unterstützten Formate",
  thInput: "Eingabeformat",
  thOutput: "Ausgabeformat",
  thNotes: "Hinweise",
  na: "k. A.",
  matrixNotes: [
    "",
    "Nutzt Palettenquantisierung, um kleine Ziele zu erreichen: siehe die Einschränkungen unten",
    "",
    "",
    "Nur das erste Bild wird behalten: Die Animation bleibt nicht erhalten",
    "HEIC/HEIF sind keine unterstützten Ausgabeformate, daher werden iPhone-Fotos in JPEG umgewandelt",
  ],
  howHeading: "Wie die Kompression auf eine Zielgröße wirklich funktioniert",
  howBefore: "Die Verarbeitung läuft serverseitig mit ",
  howAfter:
    " (auf Basis von libvips). Wenn du eine Zielgröße festlegst, sucht ConvertBrio per binärer Suche die JPEG/WEBP/AVIF-Qualität zwischen 10 % und 95 %, kodiert bei jedem Schritt neu und misst das tatsächliche Ergebnis, bis die höchste Qualität gefunden ist, die noch in dein Ziel passt, meist nach 6–7 Versuchen. Bei PNG-Zielen kommt die Palettenquantisierung zu derselben Suche hinzu, denn die Qualitätseinstellung bei normalem PNG verändert die Dateigröße kaum. Wird das Ziel bei der Qualitätsuntergrenze von 10 % immer noch nicht erreicht, verkleinert das Tool die Bildabmessungen jeweils um 15 % (bis zu 6 Schritte) und versucht es erneut, statt die Qualität unter eine brauchbare Schwelle zu drücken.",
  limitsHeading: "Einschränkungen und Sonderfälle",
  limits: [
    "Sehr aggressive Ziele im Verhältnis zum Original (deutlich unter dem oben getesteten Fall von 20 KB) können erfordern, die Abmessungen auf einen Bruchteil des Originals zu senken, bevor die Datei passt: Es gibt eine echte Qualitätsuntergrenze, nicht nur eine Größenuntergrenze.",
    "PNG komprimiert bei fotografischen Inhalten deutlich weniger effizient als JPEG/WEBP (siehe den Formatvergleich oben), weil es auf Palettenquantisierung statt auf echter verlustbehafteter Kodierung beruht.",
    "Animierte GIFs werden als einzelnes Standbild komprimiert: Wir haben das direkt mit einem GIF aus 3 Bildern getestet und bestätigt, dass das Ergebnis nur das erste Bild behält.",
    "HEIC/HEIF-Fotos (das Standardformat neuerer iPhones) kommen immer als JPEG zurück, da HEIC kein unterstütztes Ausgabeformat ist: Rechne mit einer anderen Dateiendung als bei der hochgeladenen Datei.",
    "Uploads sind im kostenlosen Tarif auf 100 MB begrenzt.",
  ],
};

const it: BenchmarkText = {
  heading: "Risultati di compressione reali, non stime",
  intro:
    "Ogni numero di questa pagina deriva da un file davvero caricato nel compressore live di ConvertBrio, di cui abbiamo misurato il risultato, sullo stesso endpoint che il tuo browser chiama quando usi lo strumento qui sopra. Nulla è simulato.",
  methodologyLabel: "Metodologia",
  methodologyBefore:
    "Il file di test è un JPEG sintetico di 2000 × 1500 e 814,8 KB che abbiamo generato noi: una composizione di ritratto con sfumatura morbida e rumore di grana fotografica sovrapposto, pensata per comprimersi come una vera foto da smartphone senza usare la foto di nessuno (per la privacy) né un'immagine di stock scaricata (per le licenze). L'abbiamo inviato a ",
  methodologyAfter:
    " con ciascuna delle dimensioni obiettivo qui sotto e registrato la risposta esatta. Testato in Chrome su macOS: la conversione avviene interamente sui server di ConvertBrio, quindi il risultato è identico qualunque sia il browser o il dispositivo che invia la richiesta.",
  beforeAfterHeading: "Prima / dopo per ogni dimensione obiettivo",
  originalLabel: "Originale",
  originalAlt: "Immagine di test originale prima della compressione, 814,8 KB",
  targetLabel: "Obiettivo {target}",
  achievedLabel: "{achieved} raggiunti",
  compressedAlt: "Compressa per un obiettivo di {target}, raggiunti {achieved}",
  resultsHeading: "Risultati misurati",
  thTarget: "Obiettivo",
  thAchieved: "Raggiunto",
  thDimensions: "Dimensioni",
  thRatio: "Rapporto di compressione",
  thHit: "Obiettivo raggiunto?",
  unchanged: "(invariate)",
  widthReduced: "(larghezza −15%)",
  smaller: "{ratio} più piccolo",
  yes: "Sì",
  kb: "KB",
  bytes: "byte",
  resultsNote:
    "Gli obiettivi da 200 a 50 KB sono stati tutti raggiunti con la sola riduzione della qualità, alla piena risoluzione originale. L'obiettivo da 20 KB ha richiesto un passaggio di riduzione delle dimensioni (2000 px → 1700 px di larghezza, −15%), perché la sola riduzione della qualità non arrivava così sotto l'originale: a questo livello la perdita di dettaglio diventa visibile; vedi le limitazioni più sotto.",
  formatHeading: "Il formato conta: JPEG e PNG con lo stesso obiettivo",
  formatBody:
    "Abbiamo fatto passare la stessa immagine di test due volte con lo stesso obiettivo da 100 KB: una volta salvata come JPEG, una volta come ricodifica PNG senza perdita degli stessi pixel (originale da 6,35 MB). Il JPEG ha raggiunto l'obiettivo alla piena risoluzione di 2000×1500. Il PNG ha dovuto scendere a 887×665 (il 44% della larghezza originale) e ricorrere alla quantizzazione della palette a 256 colori, che introduce un granulo di dithering visibile. Se il formato di partenza è flessibile, JPEG o WEBP conservano più dettagli del PNG a parità di dimensione obiettivo.",
  matrixHeading: "Matrice dei formati supportati",
  thInput: "Formato di input",
  thOutput: "Formato di output",
  thNotes: "Note",
  na: "N/D",
  matrixNotes: [
    "",
    "Usa la quantizzazione della palette per raggiungere obiettivi piccoli: vedi le limitazioni più sotto",
    "",
    "",
    "Viene mantenuto solo il primo fotogramma: l'animazione non viene preservata",
    "HEIC/HEIF non sono formati di output supportati, quindi le foto dell'iPhone vengono convertite in JPEG",
  ],
  howHeading: "Come funziona davvero la compressione a dimensione obiettivo",
  howBefore: "L'elaborazione avviene lato server con ",
  howAfter:
    " (basato su libvips). Quando imposti una dimensione obiettivo, ConvertBrio esegue una ricerca binaria della qualità JPEG/WEBP/AVIF tra il 10% e il 95%, ricodificando e misurando il risultato reale a ogni passaggio, finché trova la qualità più alta che rientra ancora nell'obiettivo, di solito in 6–7 tentativi. Per gli obiettivi PNG la quantizzazione della palette si aggiunge alla stessa ricerca, perché l'impostazione di qualità del PNG semplice cambia a malapena la dimensione del file. Se l'obiettivo non viene raggiunto nemmeno al minimo di qualità del 10%, lo strumento riduce le dimensioni dell'immagine del 15% alla volta (fino a 6 passaggi) e riprova, invece di spingere la qualità sotto una soglia utilizzabile.",
  limitsHeading: "Limitazioni e casi limite",
  limits: [
    "Obiettivi molto aggressivi rispetto all'originale (ben al di sotto del caso da 20 KB testato sopra) possono richiedere di ridurre le dimensioni a una frazione dell'originale prima che il file rientri: esiste un vero limite di qualità, non solo di dimensione.",
    "Il PNG comprime in modo molto meno efficiente di JPEG/WEBP con contenuti fotografici (vedi il confronto tra formati sopra), perché si basa sulla quantizzazione della palette invece che su una vera codifica con perdita.",
    "Le GIF animate vengono compresse come un unico fotogramma fisso: l'abbiamo verificato direttamente con una GIF di 3 fotogrammi e confermato che il risultato mantiene solo il primo.",
    "Le foto HEIC/HEIF (il formato predefinito degli iPhone recenti) tornano sempre come JPEG, perché HEIC non è un formato di output supportato: aspettati un'estensione diversa da quella del file caricato.",
    "I caricamenti sono limitati a 100 MB nel piano gratuito.",
  ],
};

const id: BenchmarkText = {
  heading: "Hasil kompresi nyata, bukan perkiraan",
  intro:
    "Setiap angka di halaman ini berasal dari file yang benar-benar diunggah ke kompresor langsung ConvertBrio lalu hasilnya kami ukur, melalui endpoint yang sama dengan yang dipanggil browser Anda saat memakai alat di atas. Tidak ada yang disimulasikan.",
  methodologyLabel: "Metodologi",
  methodologyBefore:
    "File uji adalah JPEG sintetis berukuran 2000 × 1500 dan 814,8 KB yang kami buat sendiri: komposisi potret dengan gradasi lembut dan derau butiran fotografis di atasnya, dirancang agar terkompresi seperti foto ponsel sungguhan tanpa memakai foto milik siapa pun (demi privasi) atau gambar stok unduhan (demi lisensi). Kami mengirimkannya ke ",
  methodologyAfter:
    " dengan tiap ukuran target di bawah ini dan mencatat respons persisnya. Diuji di Chrome pada macOS: konversi berjalan sepenuhnya di server ConvertBrio, sehingga hasilnya sama apa pun browser atau perangkat yang mengirim permintaan.",
  beforeAfterHeading: "Sebelum / sesudah pada tiap ukuran target",
  originalLabel: "Asli",
  originalAlt: "Gambar uji asli sebelum kompresi, 814,8 KB",
  targetLabel: "Target {target}",
  achievedLabel: "{achieved} tercapai",
  compressedAlt: "Dikompresi ke target {target}, tercapai {achieved}",
  resultsHeading: "Hasil terukur",
  thTarget: "Target",
  thAchieved: "Tercapai",
  thDimensions: "Dimensi",
  thRatio: "Rasio kompresi",
  thHit: "Target tercapai?",
  unchanged: "(tidak berubah)",
  widthReduced: "(lebar −15%)",
  smaller: "{ratio} lebih kecil",
  yes: "Ya",
  kb: "KB",
  bytes: "byte",
  resultsNote:
    "Target 200–50 KB semuanya tercapai hanya dengan menurunkan kualitas, pada resolusi asli penuh. Target 20 KB membutuhkan satu langkah pengecilan dimensi (lebar 2000 px → 1700 px, −15%) karena penurunan kualitas saja tidak cukup untuk turun sejauh itu dari ukuran asli: hilangnya detail mulai terlihat pada tingkat ini; lihat batasan di bawah.",
  formatHeading: "Format itu penting: JPEG vs. PNG pada target yang sama",
  formatBody:
    "Kami menjalankan gambar uji yang sama dua kali dengan target 100 KB yang sama: sekali disimpan sebagai JPEG, sekali sebagai penyandian ulang PNG tanpa kehilangan dari piksel yang sama (aslinya 6,35 MB). JPEG mencapai target pada resolusi penuh 2000×1500. PNG harus turun ke 887×665 (44% dari lebar asli) dan beralih ke kuantisasi palet 256 warna, yang menimbulkan bintik dithering yang terlihat. Jika format sumber Anda fleksibel, JPEG atau WEBP mempertahankan lebih banyak detail daripada PNG pada ukuran target yang sama.",
  matrixHeading: "Matriks format yang didukung",
  thInput: "Format input",
  thOutput: "Format output",
  thNotes: "Catatan",
  na: "T/A",
  matrixNotes: [
    "",
    "Memakai kuantisasi palet untuk mencapai target kecil: lihat batasan di bawah",
    "",
    "",
    "Hanya bingkai pertama yang dipertahankan: animasi tidak dipertahankan",
    "HEIC/HEIF bukan format output yang didukung, jadi foto iPhone dikonversi ke JPEG",
  ],
  howHeading: "Cara kerja kompresi ke ukuran target yang sebenarnya",
  howBefore: "Pemrosesan berjalan di sisi server menggunakan ",
  howAfter:
    " (berbasis libvips). Saat Anda menetapkan ukuran target, ConvertBrio melakukan pencarian biner kualitas JPEG/WEBP/AVIF antara 10% dan 95%, menyandikan ulang dan mengukur hasil sebenarnya di setiap langkah, sampai menemukan kualitas tertinggi yang masih memenuhi target, biasanya dalam 6–7 percobaan. Untuk target PNG, kuantisasi palet ditambahkan ke pencarian yang sama, karena pengaturan kualitas PNG biasa nyaris tidak mengubah ukuran file. Jika target masih belum tercapai pada batas bawah kualitas 10%, alat ini mengecilkan dimensi gambar 15% setiap kali (hingga 6 langkah) lalu mencoba lagi, alih-alih menurunkan kualitas di bawah ambang yang layak.",
  limitsHeading: "Batasan dan kasus khusus",
  limits: [
    "Target yang sangat agresif dibandingkan sumbernya (jauh di bawah kasus 20 KB yang diuji di atas) dapat mengharuskan dimensi dikecilkan hingga sebagian kecil dari aslinya sebelum file muat: ada batas kualitas yang nyata, bukan hanya batas ukuran.",
    "PNG terkompresi jauh kurang efisien daripada JPEG/WEBP untuk konten fotografis (lihat perbandingan format di atas) karena bergantung pada kuantisasi palet, bukan penyandian lossy yang sebenarnya.",
    "GIF animasi dikompresi sebagai satu bingkai diam: kami mengujinya langsung dengan GIF 3 bingkai dan memastikan hasilnya hanya mempertahankan bingkai pertama.",
    "Foto HEIC/HEIF (format bawaan iPhone terbaru) selalu dikembalikan sebagai JPEG, karena HEIC bukan format output yang didukung: harap ekstensinya berbeda dari file yang Anda unggah.",
    "Unggahan dibatasi 100 MB pada paket gratis.",
  ],
};

export const benchmarkText: Record<Locale, BenchmarkText> = { en, pt, es, fr, de, it, id };
