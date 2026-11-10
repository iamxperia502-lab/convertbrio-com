import type { ToolContentEntry } from "../toolContent";

// Spanish (es) tool content, slice B.

export const toolContentEsMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "Conversor de PDF a PNG: exporta páginas con detalle sin pérdidas",
    intro:
      "Cuando necesitas una página de PDF como imagen sin perder nitidez, ya sea para diagramas, capturas o páginas llenas de texto, PNG es mejor formato de exportación que JPG. El conversor de PDF a PNG de ConvertBrio convierte cada página en un archivo de imagen sin pérdidas.",
    sections: [
      {
        heading: "Cómo convertir PDF a PNG",
        body: "Sube tu PDF y ConvertBrio renderiza cada página como imagen PNG a calidad completa. Los PDF de varias páginas generan un PNG por página, y se descargan juntos como el conjunto final.",
      },
      {
        heading: "Por qué elegir PNG en lugar de JPG",
        body: "La compresión sin pérdidas de PNG mantiene el texto fino, los dibujos de línea y los bordes nítidos, sin el ligero suavizado que puede introducir la compresión de JPG. Importa sobre todo en páginas con texto pequeño, diagramas técnicos o contenido que piensas ampliar o seguir editando.",
      },
      {
        heading: "Qué tener en cuenta sobre el tamaño del archivo",
        body: "Las exportaciones en PNG suelen pesar más que las equivalentes en JPG, sobre todo en páginas con mucho detalle visual. Si el tamaño del archivo te importa más que la nitidez al píxel, por ejemplo para compartir de manera informal o publicar en línea, PDF a JPG puede ser la opción más práctica.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir páginas de PDF en imágenes PNG.",
    faq: [
      {
        question: "¿Por qué usar PNG en lugar de JPG para una página de PDF?",
        answer:
          "PNG no tiene pérdidas, así que conserva el texto y el detalle fino con más nitidez que JPG, cuya compresión puede suavizar un poco el texto pequeño y los dibujos de línea. Usa PNG cuando la claridad importe más que el tamaño del archivo.",
      },
      {
        question: "¿PDF a PNG convierte documentos de varias páginas?",
        answer:
          "Sí, cada página del PDF se renderiza como una imagen PNG propia, así que un documento de varias páginas genera una imagen por página.",
      },
      {
        question: "¿Los archivos PNG serán más grandes que las exportaciones en JPG?",
        answer:
          "Por lo general sí, porque PNG no descarta detalle como lo hace la compresión con pérdidas de JPG. Para compartir de forma informal, cuando el tamaño pesa más, PDF a JPG puede ser mejor opción.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Conversor de Imagen a PDF: reúne tus fotos en un solo documento",
    intro:
      "Ya sea que envíes páginas escaneadas, armes un portafolio de fotos o quieras reunir recibos en un único archivo para compartir, la herramienta Imagen a PDF de ConvertBrio combina una o más imágenes (JPG, PNG, WEBP, HEIC, AVIF o GIF) en un solo documento PDF, en el orden que elijas.",
    sections: [
      {
        heading: "Cómo convertir imágenes a PDF",
        body: "Sube una o más imágenes en cualquier formato habitual, ordénalas como quieres que aparezcan y ConvertBrio las combina en un solo PDF con una imagen por página. El resultado se descarga listo para compartir, imprimir o enviar.",
      },
      {
        heading: "Usos habituales",
        body: "Es la forma más común de enviar documentos de identidad escaneados, de juntar en un solo archivo las fotos HEIC de recibos o contratos hechas con un iPhone para un trámite, o de convertir un conjunto de imágenes en un documento sencillo de compartir, sin necesidad de software de diseño ni de edición de PDF.",
      },
      {
        heading: "Combinar muchas imágenes a la vez",
        body: "Puedes subir varias imágenes de una sola vez, gratis y sin crear una cuenta.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes a PDF.",
    faq: [
      {
        question: "¿Puedo combinar varias imágenes en un solo PDF?",
        answer:
          "Sí, sube todas las imágenes que necesites de una vez y ConvertBrio las combina en un único PDF, con cada imagen en su propia página y en el orden en que las organices.",
      },
      {
        question: "¿Funciona con las fotos HEIC del iPhone?",
        answer:
          "Sí, Imagen a PDF acepta fotos HEIC y HEIF directamente, además de JPG, PNG, WEBP, AVIF y GIF, así que no necesitas convertir antes tus fotos del iPhone.",
      },
      {
        question: "¿Qué formatos de imagen acepta esta herramienta?",
        answer:
          "Imagen a PDF acepta imágenes JPG, PNG, WEBP, HEIC, HEIF, AVIF y GIF, todas combinadas en un solo PDF.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Conversor de Word a JPG: exporta las páginas del documento como imágenes",
    intro:
      "A veces necesitas la página de un documento de Word como imagen y no como archivo editable: para una miniatura de vista previa, una publicación en redes sociales o una herramienta que no admite documentos. El conversor de Word a JPG de ConvertBrio exporta cada página de tu archivo DOCX como una imagen JPG.",
    sections: [
      {
        heading: "Cómo convertir Word a JPG",
        body: "Sube tu archivo DOCX y ConvertBrio renderiza cada página como una imagen JPG, conservando el diseño y el formato del documento tal como se vería impreso. Los documentos de varias páginas generan una imagen por página.",
      },
      {
        heading: "Usos habituales",
        body: "Sirve para crear una vista previa rápida de un documento, compartir una sola página como imagen en redes sociales o en una app de mensajería, o incrustar la página de un documento en un sitio web o una presentación donde un archivo en vivo no resulta práctico.",
      },
      {
        heading: "PNG para un texto más nítido",
        body: "Si la página que exportas tiene texto pequeño o detalles finos que quieres mantener perfectamente nítidos, usa Word a PNG: el formato sin pérdidas de PNG evita el ligero suavizado que la compresión de JPG puede introducir en los bordes del texto.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir documentos de Word en imágenes JPG.",
    faq: [
      {
        question: "¿Cómo convierto una página de un documento de Word en una imagen?",
        answer:
          "Sube tu archivo DOCX a la herramienta Word a JPG de ConvertBrio y esta renderiza cada página del documento como una imagen JPG que puedes descargar.",
      },
      {
        question: "¿Funciona con documentos de varias páginas?",
        answer:
          "Sí, cada página del documento se exporta como su propia imagen JPG, así que un archivo de varias páginas genera un conjunto completo de imágenes.",
      },
      {
        question: "¿Conviene usar JPG o PNG en un documento con texto pequeño?",
        answer:
          "PNG mantiene más nítidos el texto pequeño y los detalles finos, porque no tiene pérdidas. Usa Word a PNG si te importa más el texto nítido que el menor tamaño de archivo que ofrece JPG.",
      },
    ],
  },

  "word-to-png": {
    title: "Conversor de Word a PNG: exporta páginas con claridad sin pérdidas",
    intro:
      "Cuando la página de un documento de Word debe convertirse en imagen sin perder nitidez, ya sea por diagramas detallados, tablas o letra pequeña, PNG es mejor formato de exportación que JPG. El conversor de Word a PNG de ConvertBrio renderiza cada página de tu archivo DOCX como una imagen PNG sin pérdidas.",
    sections: [
      {
        heading: "Cómo convertir Word a PNG",
        body: "Sube tu archivo DOCX y ConvertBrio renderiza cada página como una imagen PNG a calidad completa, conservando el detalle fino y la nitidez del texto. Los documentos de varias páginas generan un PNG por página.",
      },
      {
        heading: "Por qué PNG para documentos con detalle",
        body: "La compresión sin pérdidas de PNG evita el suavizado alrededor del texto y de las líneas finas que puede introducir la compresión de JPG, algo que importa sobre todo en páginas con tablas, diagramas, letra pequeña o contenido que piensas ampliar.",
      },
      {
        heading: "Cuándo puede convenir más JPG",
        body: "Si el tamaño del archivo te importa más que la nitidez al píxel, por ejemplo para compartir rápido o para vistas previas informales, Word a JPG genera un archivo más pequeño, con solo una diferencia mínima de calidad visual en la mayoría de los documentos.",
      },
      {
        heading: "Diseño, descargas y límites",
        body: "Tu DOCX se maqueta primero en una página A4 estándar, así que el formato muy específico de Word, como encabezados y pies de página, notas al pie o tamaños de página poco habituales, puede verse algo distinto que en el propio Word. Un documento de una sola página se descarga como un PNG; los de varias páginas se descargan como un archivo ZIP con un PNG por página. Las subidas tienen un límite de 100 MB. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir documentos de Word en imágenes PNG.",
    faq: [
      {
        question: "¿Por qué elegir PNG en lugar de JPG para la página de un documento?",
        answer:
          "PNG no tiene pérdidas, así que mantiene el texto, las tablas y los diagramas más nítidos que JPG, cuya compresión puede suavizar un poco el detalle fino. Elige PNG cuando la claridad sea lo más importante.",
      },
      {
        question: "¿Word a PNG admite documentos de varias páginas?",
        answer:
          "Sí, cada página de tu archivo DOCX se renderiza como una imagen PNG independiente. Un documento de una sola página se descarga directamente como PNG; varias páginas se descargan juntas en un archivo ZIP.",
      },
      {
        question: "¿Se conservará el formato exacto de mi documento?",
        answer:
          "El texto, los títulos, las listas, las tablas y las imágenes se mantienen, pero los diseños muy específicos de Word (encabezados y pies de página personalizados, tamaños de página poco habituales) pueden verse algo distintos, porque la página se reconstruye sobre un formato A4 estándar y no la renderiza el propio Word.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Conversor de Excel a PDF: fija el diseño de tu hoja de cálculo para compartirla",
    intro:
      "Una hoja de cálculo puede verse distinta según el ancho de las columnas, las fuentes o la versión del programa con que se abra, y eso es un problema cuando necesitas que un informe financiero, una factura o una tabla de datos se vean exactamente igual en todas partes. El conversor de Excel a PDF de ConvertBrio convierte tu hoja de cálculo en un PDF fijo y listo para imprimir, que se muestra igual en cualquier dispositivo o programa.",
    sections: [
      {
        heading: "Cómo convertir Excel a PDF",
        body: "Sube tu archivo .xls o .xlsx y ConvertBrio renderiza cada hoja como una página (o un conjunto de páginas) de un PDF, conservando tus datos, el formato de las celdas y las celdas combinadas. El archivo convertido se descarga automáticamente y queda listo para enviar por correo, imprimir o archivar.",
      },
      {
        heading: "Por qué convertir a PDF antes de compartir",
        body: "El PDF es el formato estándar de los documentos terminados porque se ve igual en cualquier dispositivo y sistema operativo, a diferencia de una hoja de cálculo, que puede reajustarse o verse distinta según lo que tenga instalado cada persona. Convertir fija el diseño antes de que un informe, una factura o una tabla de datos salga de tus manos, y evita que el destinatario necesite Excel para verlo.",
      },
      {
        heading: "Casos de uso habituales",
        body: "Esta herramienta se usa a menudo para compartir informes financieros y facturas con personas que no tienen Excel, para archivar una copia fija de una hoja de cálculo antes de que siga cambiando y para preparar tablas de datos para su impresión o distribución oficial.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir hojas de cálculo de Excel a PDF.",
    faq: [
      {
        question: "¿Cómo convierto un archivo de Excel a PDF?",
        answer:
          "Sube tu archivo .xls o .xlsx a la herramienta Excel a PDF de ConvertBrio y esta genera una versión en PDF con formato, lista para descargar, sin necesidad de tener Microsoft Excel instalado.",
      },
      {
        question: "¿El formato y las fórmulas de mi hoja de cálculo seguirán igual?",
        answer:
          "El formato de las celdas, las celdas combinadas y el diseño se conservan. Las fórmulas se convierten en su último valor calculado y dejan de ser fórmulas activas, porque un PDF es un documento fijo y estático, no una hoja de cálculo editable.",
      },
      {
        question: "¿Y si mi hoja de cálculo tiene varias hojas?",
        answer:
          "Cada hoja de tu libro se convierte y se coloca en su propia página (o conjunto de páginas) del PDF resultante, en el mismo orden en que aparecen en el archivo original.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "Conversor de PowerPoint a PDF: comparte diapositivas sin PowerPoint",
    intro: [
      "Compartir una presentación con alguien que no tiene PowerPoint, fijar la versión final antes de una revisión o reducir una presentación enorme para que pueda enviarse por correo: casi todo esto empieza por convertir el .pptx a PDF. El conversor de PowerPoint a PDF de ConvertBrio lo hace en el navegador, gratis, con una página por diapositiva y sin marca de agua.",
      "Un PDF se abre en cualquier dispositivo, no se puede editar por accidente y, en presentaciones con muchas imágenes, suele pesar mucho menos que el .pptx original si además lo pasas por Comprimir PDF.",
    ],
    howTo: [
      {
        step: "Guarda tu presentación como .pptx",
        detail: "En PowerPoint, Archivo → Guardar como → Presentación de PowerPoint (.pptx). El antiguo formato .ppt no es compatible.",
      },
      {
        step: "Sube el archivo",
        detail: "Arrástralo a la caja o búscalo en tu dispositivo. Un archivo por vez, hasta 100 MB.",
      },
      {
        step: "Convierte a PDF",
        detail: "ConvertBrio renderiza cada diapositiva como una página completa. El PDF se descarga automáticamente.",
      },
      {
        step: "Comprímelo si lo necesitas",
        detail: "Si la presentación tiene muchas imágenes y el PDF sigue siendo grande, pásalo por Comprimir PDF para recodificar las imágenes incrustadas.",
      },
    ],
    sections: [
      {
        heading: "Por qué convertir a PDF antes de compartir",
        body: "Un .pptx necesita PowerPoint o un visor compatible, y puede verse distinto según las fuentes que tenga instaladas quien lo recibe: las viñetas se desplazan, el texto se sale de su cuadro, una fuente personalizada se sustituye por otra genérica. Un PDF es fijo: lo que envías es exactamente lo que ve la otra persona, en un móvil, en un Mac o en un portátil de trabajo bloqueado y sin Office.",
      },
      {
        heading: "Cómo hacer más pequeña una presentación de PowerPoint",
        body: [
          "Una herramienta específica para comprimir PowerPoint que mantenga el archivo editable sigue en desarrollo. Mientras tanto, la forma más fiable de reducir el tamaño de una presentación para enviarla por correo es esta ruta de dos pasos:",
          "Convierte aquí el .pptx a PDF y luego pasa el PDF por Comprimir PDF. Así se recodifican todas las fotos y capturas incrustadas con una calidad eficiente y se reducen las imágenes demasiado grandes, que es donde está casi todo el peso de una presentación pesada. El resultado es un archivo fácil de compartir y visible en cualquier sitio, normalmente una fracción del tamaño original. A cambio, el resultado es un PDF y no una presentación editable.",
        ],
      },
      {
        heading: "Qué se conserva y qué no",
        body: "El texto, las imágenes y el diseño de las diapositivas se convierten sin problemas. Las animaciones y las transiciones no existen en un PDF estático, así que se pierden. Los gráficos, SmartArt y tablas incrustadas se renderizan tal como aparecen en la diapositiva, pero no son interactivos. Si tu presentación depende mucho de efectos y animaciones, revisa el PDF antes de enviarlo para saber cómo se lee sin movimiento.",
      },
      {
        heading: "Privacidad y límites",
        body: "El archivo viaja cifrado. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un .pptx por vez, hasta 100 MB, gratis, sin cuenta y sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir presentaciones de PowerPoint a PDF.",
    faq: [
      {
        question: "¿Cómo convierto gratis un archivo de PowerPoint a PDF?",
        answer:
          "Sube tu .pptx a la herramienta PowerPoint a PDF de ConvertBrio y esta genera un PDF con una página por diapositiva, listo para descargar: sin instalar PowerPoint, sin cuenta y sin marca de agua.",
      },
      {
        question: "¿Cómo comprimo una presentación de PowerPoint para enviarla por correo?",
        answer:
          "Convierte aquí el .pptx a PDF y luego pasa ese PDF por Comprimir PDF. Se recodifican las imágenes incrustadas, que es de donde viene la mayor parte del tamaño de una presentación grande. El resultado es mucho más pequeño, aunque es un PDF y no una presentación editable.",
      },
      {
        question: "¿Se conservarán las animaciones o las transiciones?",
        answer:
          "No, un PDF es estático, así que las animaciones y las transiciones se pierden. El texto, las imágenes, los gráficos y el diseño de las diapositivas se conservan tal como aparecen en cada una.",
      },
      {
        question: "¿Funciona con archivos .ppt antiguos?",
        answer:
          "Solo con el formato moderno .pptx. Abre el archivo en PowerPoint y guárdalo como .pptx (Archivo → Guardar como), y luego conviértelo.",
      },
      {
        question: "¿Puedo poner dos diapositivas por página de PDF o usar un diseño de folleto?",
        answer:
          "Por ahora no, el conversor renderiza una diapositiva completa por página. Para diseños de tipo folleto, exporta directamente desde PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Unir Documentos: combina Word, Excel y PowerPoint en un solo PDF",
    intro:
      "Combinar una mezcla de archivos de Word, Excel y PowerPoint en un solo PDF suele implicar convertir cada uno por separado y unirlos a mano. La herramienta Unir Documentos de ConvertBrio hace todo el proceso en un solo paso.",
    sections: [
      {
        heading: "Cómo unir documentos",
        body: "Sube varios archivos, en cualquier combinación de Word, Excel, PowerPoint y PDF, y ConvertBrio convierte cada uno a PDF y los combina en un único documento ordenado. El PDF unido se descarga automáticamente, listo para enviar por correo, imprimir o archivar.",
      },
      {
        heading: "Por qué unir todo en un solo PDF",
        body: "Un único PDF es más fácil de compartir, revisar y archivar que un conjunto disperso de archivos en distintos formatos, y garantiza que quien lo reciba vea todo en el orden previsto sin necesitar Word, Excel ni PowerPoint instalados.",
      },
      {
        heading: "Cómo mantener el orden de los documentos",
        body: "Los archivos se combinan en el orden en que los subes, así que organiza tu selección antes de subirlos si el documento final necesita una secuencia concreta: por ejemplo, una portada, luego un informe y después los datos de apoyo de una hoja de cálculo.",
      },
      {
        heading: "Límites y privacidad",
        body: "Puedes combinar hasta 25 archivos, con un tamaño total de 100 MB, en una sola pasada. Cada archivo se convierte y se procesa en el servidor, no en tu navegador. Tus archivos originales se eliminan justo después de leerlos para la conversión. El resultado unido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo unir archivos de Word, Excel y PowerPoint en un solo PDF.",
    faq: [
      {
        question: "¿Qué tipos de archivo puedo combinar?",
        answer:
          "Cualquier mezcla de archivos de Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx) y PDF en la misma subida: cada archivo que no sea PDF se convierte primero a PDF y después todos se unen.",
      },
      {
        question: "¿En qué orden se unen mis archivos?",
        answer:
          "Los archivos se combinan en el orden en que los subes. Organiza antes tu selección si necesitas una secuencia concreta en el documento final.",
      },
      {
        question: "¿Funciona con archivos antiguos .doc/.ppt/.xls?",
        answer:
          "Los formatos antiguos .doc y .ppt no son compatibles: guarda esos archivos como .docx o .pptx antes. Las hojas de cálculo antiguas .xls sí funcionan, porque la conversión de Excel de ConvertBrio lee ese formato de forma nativa.",
      },
    ],
  },

  "remove-background": {
    title: "Quitar fondo con IA: recortes transparentes automáticos",
    intro: [
      "Recortar un sujeto de su fondo suele exigir software de diseño y un enmascarado manual cuidadoso alrededor de cada mechón de pelo. El quitafondos con IA de ConvertBrio lo hace automáticamente: sube una foto y en segundos recibes al sujeto sobre fondo transparente, en un PNG listo para colocarlo sobre cualquier otro fondo.",
      "Es gratis, no necesita cuenta y no añade marca de agua. El modelo es de código abierto y funciona de forma automática, sin enviar tu foto a ningún servicio de IA externo.",
    ],
    howTo: [
      {
        step: "Sube una foto",
        detail: "JPG, PNG, WEBP, HEIC o AVIF, hasta 100 MB. Funciona mejor con un sujeto claro sobre un fondo razonablemente liso.",
      },
      {
        step: "Deja que el modelo la procese",
        detail: "La IA detecta el sujeto principal, ya sea una persona, un producto o un objeto, y borra todo lo demás.",
      },
      {
        step: "Descarga el PNG transparente",
        detail: "El recorte se descarga como un PNG con fondo transparente, que puedes colocar en un sitio web, un diseño o sobre un color liso.",
      },
    ],
    sections: [
      {
        heading: "Qué puedes hacer con el recorte",
        body: "",
        list: [
          "Poner la foto de un producto sobre un fondo blanco limpio o con los colores de tu marca para la ficha de una tienda",
          "Insertar una foto de retrato en la página de un equipo, un carné o una diapositiva",
          "Crear un sticker, un logotipo o un gráfico sin fondo rectangular",
          "Integrar un sujeto en una escena distinta",
          "Crear una foto tipo pasaporte, aunque el Creador de Foto de Pasaporte se encarga del tamaño y del fondo blanco en un solo paso",
        ],
      },
      {
        heading: "Cómo conseguir los bordes más limpios",
        body: "Los resultados son mejores cuando el sujeto destaca con claridad de lo que tiene detrás: buena iluminación, un fondo bastante liso y un contraste razonable en los bordes. El modelo puede tener dificultades con el pelo fino y suelto, los objetos transparentes o de cristal, los límites de bajo contraste (un abrigo gris frente a una pared gris) y las fotos con varias personas superpuestas. Si un borde sale áspero, normalmente se arregla con una foto de origen más limpia; para pequeños retoques, recorta el resultado con la herramienta Recortar Imagen.",
      },
      {
        heading: "Privacidad",
        body: "El modelo de eliminación de fondo es de código abierto y se ejecuta de forma automática, así que tu foto no se envía a una API externa ni la ve ninguna persona. Las subidas tienen un límite de 100 MB. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre el quitafondos con IA de ConvertBrio.",
    faq: [
      {
        question: "¿El quitafondos es gratis?",
        answer:
          "Sí, sin cuenta, sin marca de agua y sin límite en el número de fotos. Las subidas pueden ser de hasta 100 MB.",
      },
      {
        question: "¿Qué formato de salida obtendré?",
        answer:
          "Un PNG con fondo transparente: el formato estándar sin pérdidas para imágenes sin fondo sólido. Ábrelo en cualquier editor para colocarlo sobre un fondo nuevo.",
      },
      {
        question: "¿Funcionará con cualquier tipo de foto?",
        answer:
          "Está pensado para sujetos habituales como personas, productos y objetos sobre un fondo razonablemente claro. Las escenas recargadas, los objetos de cristal, el pelo fino y los bordes de bajo contraste son más difíciles y pueden requerir una foto de origen más limpia.",
      },
      {
        question: "¿Funciona con fotos de varios sujetos?",
        answer:
          "Está optimizado para un único sujeto principal claro. Si hay varios sujetos superpuestos, los bordes pueden quedar menos precisos.",
      },
      {
        question: "¿Mi foto se envía al servicio de IA de otra empresa?",
        answer:
          "No. El modelo es de código abierto y funciona de forma automática, sin revisión humana. Tu archivo original se elimina justo después de leerlo y el resultado se elimina mediante una limpieza diaria, normalmente en unas 24 horas.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Creador de Foto de Pasaporte: herramienta gratuita en línea para fotos tamaño pasaporte",
    intro: [
      "Una foto de pasaporte válida necesita un fondo blanco liso, el sujeto centrado y con el tamaño correcto, y las dimensiones físicas adecuadas, algo que normalmente implica ir a una farmacia o a un estudio fotográfico. El creador de fotos de pasaporte de ConvertBrio hace las tres cosas automáticamente: sube un selfie o cualquier retrato nítido y en segundos recibes una foto de 2×2 pulgadas lista para imprimir, con un fondo blanco limpio.",
      "Es gratis, sin cuenta y sin marca de agua, y cada paso, la detección del rostro y la eliminación del fondo, se ejecuta de forma automática con modelos de código abierto, sin enviar tu foto a ningún servicio externo de IA.",
    ],
    howTo: [
      {
        step: "Toma un retrato sencillo",
        detail:
          "De frente, con expresión neutra, iluminación uniforme y cabeza y hombros dentro del encuadre, con espacio alrededor. Un selfie del móvil frente a una pared clara sirve.",
      },
      {
        step: "Súbela",
        detail: "Una persona por foto, hasta 100 MB. Las fotos de grupo y los primeros planos muy recortados no se procesan.",
      },
      {
        step: "Deja que la herramienta construya la foto",
        detail:
          "ConvertBrio encuentra tu rostro, lo recorta y lo centra con las proporciones de un pasaporte, elimina el fondo y lo rellena de blanco liso.",
      },
      {
        step: "Descarga e imprime a 2×2 pulgadas",
        detail:
          "Obtienes una imagen de 1200×1200 píxeles a 600 DPI: el tamaño de 2×2 pulgadas que se usa en las fotos de pasaporte y visado de Estados Unidos y de la India.",
      },
    ],
    sections: [
      {
        heading: "Cómo funciona",
        body: "Sube una foto y ConvertBrio detecta tu rostro, lo recorta y lo centra con las proporciones estándar de un pasaporte, elimina el fondo original y lo sustituye por blanco liso. Después genera una foto de 2×2 pulgadas a 600 DPI (1200×1200 píxeles), el tamaño que se usa tanto en las fotos de pasaporte y visado de Estados Unidos como de la India. No hay nada que colocar ni ajustar a mano.",
      },
      {
        heading: "Tamaños de foto de pasaporte por país",
        body: "La herramienta genera el formato de 2×2 pulgadas (51×51 mm). Es el requisito exacto de algunos países y un buen punto de partida que puedes recortar para otros; comprueba siempre las especificaciones vigentes de tu gobierno antes de presentar la foto.",
        table: {
          headers: ["País", "Tamaño exigido", "¿Sirve la salida de 2×2 in?"],
          rows: [
            ["Estados Unidos", "2 × 2 in (51 × 51 mm)", "Sí, directamente"],
            ["India", "2 × 2 in (51 × 51 mm)", "Sí, directamente"],
            ["Reino Unido", "35 × 45 mm", "Recorta a partir de la salida de 2×2"],
            ["Schengen / UE", "35 × 45 mm", "Recorta a partir de la salida de 2×2"],
            ["Canadá", "50 × 70 mm", "Vuelve a recortar; las proporciones son distintas"],
            ["Australia", "35 × 45 mm", "Recorta a partir de la salida de 2×2"],
          ],
        },
      },
      {
        heading: "Cómo conseguir el mejor resultado",
        body: "Usa una foto bien iluminada, de frente y con la cabeza y los hombros completos a la vista, con algo de espacio alrededor: un selfie del móvil frente a una pared lisa funciona bien. Evita las fotos en las que la cabeza está recortada justo en los bordes, ya que la herramienta necesita espacio sobre la cabeza y alrededor de los hombros para calcular un recorte con las proporciones correctas. Una persona por foto; las fotos de grupo o los primeros planos muy recortados no se procesarán bien.",
      },
      {
        heading: "Lo que esta herramienta no garantiza",
        body: "Esta herramienta genera una foto de aspecto profesional, con el tamaño correcto, centrada y con un auténtico fondo blanco, pero no es una comprobación certificada de cumplimiento. No verifica la uniformidad de la luz, la expresión, el reflejo de las gafas ni los demás criterios que revisa a mano un control oficial ICAO o gubernamental. Si tu solicitud de pasaporte tiene requisitos de aceptación estrictos, considérala un buen punto de partida y confirma los requisitos vigentes de tu país antes de presentarla.",
      },
      {
        heading: "Privacidad",
        body: "La detección del rostro y la eliminación del fondo se ejecutan de forma automática con modelos de código abierto: tu foto no se envía a una API de terceros ni la revisa ninguna persona. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre el creador de fotos de pasaporte de ConvertBrio.",
    faq: [
      {
        question: "¿Qué tamaño de foto genera?",
        answer:
          "Una foto de 2x2 pulgadas (1200x1200 píxeles) a 600 DPI: el tamaño estándar de las fotos de pasaporte y visado de Estados Unidos y de la India.",
      },
      {
        question: "¿Es gratis?",
        answer:
          "Sí. Subir una foto y generar una foto tamaño pasaporte con fondo blanco no requiere cuenta ni pago.",
      },
      {
        question: "¿Esta foto será aceptada con seguridad para mi solicitud de pasaporte?",
        answer:
          "Genera una foto con el tamaño correcto, centrada y con un auténtico fondo blanco, lo que cubre los motivos de rechazo más comunes. No realiza una comprobación oficial completa (iluminación, expresión, reflejo de las gafas), así que confirma los requisitos vigentes de tu país antes de presentar una solicitud oficial.",
      },
      {
        question: "¿Y si dice que no se encontró ningún rostro, o que hay más de uno?",
        answer:
          "Usa una foto nítida, de frente y bien iluminada, con exactamente una persona en el encuadre. Las fotos de grupo, de perfil o muy oscuras o borrosas pueden impedir que la detección del rostro funcione correctamente.",
      },
      {
        question: "¿Por qué dice que no hay suficiente espacio alrededor del rostro?",
        answer:
          "La herramienta necesita margen visible sobre la cabeza y alrededor de los hombros en la foto original para calcular un recorte con las proporciones correctas. Si tu foto ya está muy recortada sobre el rostro, toma una nueva desde un poco más lejos.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "Mejorar Imagen con IA",
    intro:
      "Las fotos apagadas, subexpuestas o ligeramente borrosas muchas veces solo necesitan un ajuste automático uniforme, no una edición manual. El mejorador de imágenes de ConvertBrio equilibra automáticamente la exposición y el color y afina el detalle en un solo paso, sin controles deslizantes.",
    sections: [
      {
        heading: "Qué hace esta herramienta",
        body: "El mejorador de imágenes aplica a tu foto un conjunto fijo y automático de ajustes: estira el contraste para aprovechar todo el rango tonal, sube ligeramente la saturación y el brillo y afina el detalle, con un resultado mejorado y coherente sin que tengas que ajustar cada parámetro.",
      },
      {
        heading: "Cómo funciona",
        body: "Sube una imagen y ConvertBrio la pasa por un proceso automático de tratamiento de imagen (normalización del contraste, color y nitidez) en los servidores de nuestros proveedores de alojamiento: un algoritmo determinista, no un modelo de IA generativa, y por eso los resultados son coherentes y el procesamiento es rápido.",
      },
      {
        heading: "Lo que no puede arreglar",
        body: "Es un pase de mejora, no una herramienta para aumentar la resolución ni para restaurar: no recupera con nitidez el detalle de una imagen de muy baja resolución, no corrige el desenfoque por movimiento ni las fotos fuera de foco, y no reconstruye el detalle que falta. Para aumentar la resolución con un modelo entrenado de superresolución, usa Ampliador con IA.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre el mejorador de imágenes de ConvertBrio.",
    faq: [
      {
        question: "¿Qué tipo de mejoras hace?",
        answer:
          "Estira automáticamente el contraste, sube ligeramente el color y el brillo y afina el detalle: un pase de ajuste fijo y coherente en lugar de una edición manual foto por foto.",
      },
      {
        question: "¿En qué se diferencia de Ampliador con IA?",
        answer:
          "El mejorador aplica ajustes automáticos con la misma resolución, mediante un proceso fijo de tratamiento de imagen. Ampliador con IA es una herramienta aparte que usa un modelo entrenado de superresolución para aumentar la resolución de una imagen y reconstruir detalle.",
      },
      {
        question: "¿Hay un límite de tamaño de archivo?",
        answer:
          "Las subidas tienen un límite de 100 MB. Tu archivo original se elimina justo después de leerlo y el resultado se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
  },

  "ai-upscaler": {
    title: "Ampliador de imágenes con IA: aumenta la resolución sin desenfoque",
    intro: [
      "Ampliar una imagen pequeña o de baja resolución con un redimensionado normal solo reparte los píxeles existentes sobre una superficie mayor y deja el resultado borroso y pixelado. El ampliador con IA de ConvertBrio usa un modelo de superresolución entrenado para aumentar la resolución aproximadamente 4×, reconstruyendo detalle verosímil (bordes, texturas, estructuras finas) en lugar de estirar lo que ya hay.",
    ],
    howTo: [
      {
        step: "Sube la imagen que quieres ampliar",
        detail: "Funciona mejor con una foto de la vida real. JPG, PNG, WEBP, HEIC o AVIF, hasta 100 MB.",
      },
      {
        step: "Ejecuta la ampliación",
        detail:
          "Un modelo de IA incluido reconstruye el detalle a una resolución de aproximadamente 4× la de la entrada, trabajando por teselas para controlar la memoria. Tarda unos segundos más que una conversión simple.",
      },
      {
        step: "Descarga el PNG",
        detail: "El resultado es siempre un PNG con 4× la resolución de la entrada (reducida previamente si era necesario).",
      },
    ],
    sections: [
      {
        heading: "Ampliar con IA frente a redimensionar",
        body: "La herramienta Redimensionar Imagen cambia las dimensiones en píxeles con interpolación estándar: es perfecta para reducir una imagen, pero no puede añadir detalle que no está en el archivo, así que al ampliar se ve borrosa. La ampliación con IA es el enfoque opuesto: el modelo ha aprendido cómo es el detalle real de una foto y dibuja una versión convincente en alta resolución. Usa el redimensionado para reducir y el ampliador para agrandar.",
      },
      {
        heading: "Cuándo ayuda más",
        body: "",
        list: [
          "Ampliar una foto antigua, pequeña o de baja resolución para imprimirla",
          "Preparar una imagen del tamaño de la web para una pantalla grande o de alta densidad de píxeles",
          "Recuperar un tamaño utilizable de una foto muy recortada",
          "Afinar una imagen ligeramente borrosa (aunque Mejorar Imagen con IA es mejor para una limpieza al mismo tamaño)",
        ],
      },
      {
        heading: "Qué esperar",
        body: "Los resultados son mejores en fotografías naturales: personas, lugares, objetos. El modelo puede tener problemas con texto denso, dibujos de línea nítidos, capturas de pantalla y gráficos muy estilizados, y a veces inventa texturas que no estaban. Las imágenes de origen de muy alta resolución se reducen antes de ampliarlas para mantener un procesamiento razonable, así que subir una foto que ya es grande no aportará mucho. Es una reconstrucción, no una recuperación del detalle original verdadero.",
      },
      {
        heading: "Privacidad y límites",
        body: "El modelo se ejecuta de forma automática, sin servicio de IA de terceros. Las subidas tienen un límite de 100 MB. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado ampliado se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre el ampliador de imágenes con IA de ConvertBrio.",
    faq: [
      {
        question: "¿En qué se diferencia la ampliación con IA de simplemente redimensionar una imagen a un tamaño mayor?",
        answer:
          "El redimensionado normal estira los píxeles existentes, lo que desenfoca el resultado. La ampliación con IA reconstruye detalle verosímil con un modelo entrenado y produce una ampliación mucho más nítida.",
      },
      {
        question: "¿Cuánto más grande deja la imagen?",
        answer:
          "Aproximadamente 4× la resolución de la entrada (que antes se reduce si es muy grande). La salida es un PNG.",
      },
      {
        question: "¿Funcionará con texto o capturas de pantalla?",
        answer:
          "Está ajustado para fotografías. El texto denso, los dibujos de línea y las capturas pueden salir con detalle inventado o difuminado: para ellos, un redimensionado normal suele ser más seguro.",
      },
      {
        question: "¿Hay un límite de tamaño de archivo?",
        answer:
          "Las subidas tienen un límite de 100 MB. Tu archivo original se elimina justo después de leerlo y el resultado se elimina mediante una limpieza diaria, normalmente en unas 24 horas.",
      },
      {
        question: "¿Por qué tardó un poco el procesamiento?",
        answer:
          "El modelo se ejecuta de forma automática en el servidor y procesa las imágenes grandes por teselas para controlar la memoria, así que tarda unos segundos más que una simple conversión de formato.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "Comprimir un PDF a un tamaño concreto en KB o MB",
    intro: [
      "Los portales de carga, las solicitudes de empleo y los sistemas de correo suelen rechazar un PDF que supere un límite estricto: 200 KB, 500 KB, 2 MB. Esta herramienta toma ese límite como dato de entrada. Indica el tamaño máximo y ConvertBrio comprime tu PDF por etapas, midiendo el tamaño real del archivo después de cada una, hasta que cabe.",
      "A diferencia de un compresor general que simplemente reduce el archivo todo lo que puede, esta herramienta trabaja hacia tu cifra y te dice la verdad sobre el resultado. Muestra el tamaño alcanzado y, si tu límite es demasiado pequeño para lograrlo sin estropear las páginas, lo dice en lugar de fingir.",
    ],
    howTo: [
      { step: "Sube tu PDF", detail: "Un archivo por vez, hasta 100 MB." },
      { step: "Indica el tamaño máximo", detail: "Escribe el número que figura en el formulario y elige KB o MB." },
      { step: "Comprime", detail: "Probamos ajustes cada vez más fuertes y nos detenemos en el primer resultado que cabe bajo tu límite." },
      { step: "Comprueba el tamaño alcanzado", detail: "El mensaje del resultado muestra el tamaño obtenido. Descarga el archivo o prueba con un límite mayor si no se alcanzó el objetivo." },
    ],
    sections: [
      {
        heading: "Cómo funciona la búsqueda del tamaño exacto",
        body: "Una sola pasada rara vez da con una cifra concreta, así que la herramienta recorre una escalera de ajustes. Cada paso recodifica las fotos incrustadas de tu archivo original con menos resolución y calidad que el anterior, empezando suave y yendo a más. Tras cada paso se mide el resultado real. Se te entrega el primer resultado que queda en tu límite o por debajo, lo que significa que conservas toda la calidad que tu objetivo permite.",
      },
      {
        heading: "Cuando no se puede alcanzar un objetivo",
        body: "Algunos PDF sencillamente no se reducen mucho: los archivos formados por gráficos vectoriales o texto simple ya son pequeños, y un límite de 20 KB para un escaneo de 40 páginas no es realista. Si incluso el ajuste más fuerte deja el archivo por encima de tu límite, la herramienta nunca da el resultado por logrado. Devuelve la versión más pequeña que pudo crear, muestra ese tamaño y sugiere opciones como un límite mayor o dividir el PDF en partes.",
      },
      {
        heading: "Qué se modifica",
        body: "Las imágenes JPEG incrustadas se recomprimen y, si son muy grandes, se reducen de tamaño, y se borran las propiedades del documento, como el título y el autor. El texto, las fuentes y el diseño de página no se tocan. Los PDF escaneados formados por fotos son los que más se benefician, mientras que los tamaños objetivo muy pequeños harán que las imágenes se vean claramente más suaves.",
      },
      {
        heading: "Privacidad y límites",
        body: "Los archivos viajan cifrados. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Los PDF protegidos con contraseña no se pueden procesar.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo comprimir un PDF a un tamaño máximo en KB o MB.",
    faq: [
      { question: "¿Cómo comprimo un PDF para que pese menos de 200 KB?", answer: "Sube el PDF, escribe 200, elige KB y comprime. La herramienta prueba ajustes más fuertes hasta que el archivo cabe, o te indica el tamaño más pequeño que pudo alcanzar si 200 KB no es realista para ese documento." },
      { question: "¿Siempre alcanzará mi tamaño exacto?", answer: "No. Deja el archivo en tu límite o por debajo cuando es posible sin una pérdida de calidad inaceptable. Cuando no lo es, verás el tamaño más pequeño alcanzado en lugar de un falso éxito." },
      { question: "¿El resultado queda exactamente en mi límite?", answer: "Queda en el límite o por debajo, normalmente algo por debajo, porque los ajustes cambian por etapas y no de forma continua." },
      { question: "¿Por qué mi PDF casi no se redujo?", answer: "Los PDF formados sobre todo por texto y formas vectoriales ya son compactos. Los mayores ahorros se logran con PDF que contienen fotos o páginas escaneadas." },
      { question: "¿Hay diferencia de calidad con la herramienta Comprimir PDF normal?", answer: "Comprimir PDF aplica un único nivel fijo. Esta herramienta empieza en ese mismo nivel y solo se vuelve más fuerte si tu límite lo exige." },
      { question: "¿Se guarda mi documento?", answer: "No. Tu archivo original se elimina justo después de leerlo y el resultado se elimina mediante una limpieza diaria, normalmente en unas 24 horas. El procesamiento es automático y sin revisión humana." },
    ],
  },

  "photo-signature-resizer": {
    title: "Redimensionar Foto y Firma: píxeles exactos y un tamaño máximo de archivo",
    intro: [
      "Los formularios de solicitud rara vez aceptan una foto tal como sale del móvil. Piden un ancho y un alto concretos en píxeles y un archivo que no supere cierto número de KB. Este redimensionador produce justo eso: indica las dimensiones y el límite de tamaño de tu formulario y descarga un JPG que cumple ambos.",
      "Sirve tanto para fotos como para firmas. Elige una proporción o un preajuste para rellenar las dimensiones, decide si recortar o añadir márgenes blancos cuando tu imagen tiene otra forma y fija los KB máximos. Las dimensiones que introduces nunca se modifican para cumplir el tamaño de archivo: solo se baja la calidad del JPEG.",
    ],
    howTo: [
      { step: "Sube tu foto o firma", detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF." },
      { step: "Define el tamaño", detail: "Elige un preajuste o escribe el ancho y el alto en píxeles. Elige una proporción si tu formulario la indica." },
      { step: "Añade el límite de tamaño de archivo", detail: "Escribe los KB máximos, o déjalo en blanco para mantener la calidad alta." },
      { step: "Elige recortar o márgenes", detail: "Recortar llena el tamaño exacto; los márgenes blancos mantienen toda la imagen dentro, algo adecuado para firmas." },
      { step: "Redimensiona y comprueba el resultado", detail: "El mensaje del resultado confirma los píxeles exactos y los KB finales." },
    ],
    sections: [
      {
        heading: "Dimensiones exactas y después el tamaño de archivo",
        body: "Primero la imagen se redimensiona exactamente al ancho y alto que pediste. Después la herramienta busca la calidad JPEG más alta que mantenga el archivo por debajo de tu límite, de modo que las dimensiones se mantienen fijas. Si el límite es demasiado pequeño incluso con la calidad más baja, la herramienta lo indica y muestra el tamaño alcanzado en lugar de dar el resultado por logrado. En ese caso, prueba con dimensiones algo menores.",
      },
      {
        heading: "Preajustes y valores personalizados",
        body: "Los preajustes cubren tamaños en píxeles que se pueden reproducir con exactitud, como una foto de pasaporte de 35 × 45 mm a 300 DPI (413 × 531 px) o una foto de 2 × 2 pulgadas a 300 DPI (600 × 600 px). Los portales difieren, así que compara siempre con las instrucciones de tu propio formulario y usa los campos personalizados si no coinciden con un preajuste.",
      },
      {
        heading: "Recortar o rellenar",
        body: "Cuando tu imagen no tiene la misma forma que el tamaño de destino, recortar llena el encuadre y elimina los bordes, centrándose en la parte más destacada de la imagen. Rellenar lo conserva todo y completa el espacio sobrante con blanco. Elige rellenar para firmas sobre papel, de modo que no se corte nada de tinta.",
      },
      {
        heading: "Firmas",
        body: "Fotografía o escanea tu firma sobre papel blanco liso con buena luz, súbela y usa el preajuste de firma 3:1 o tu propio tamaño. La tinta negra sobre blanco se comprime en archivos muy pequeños.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo redimensionar una foto o una firma para un formulario en línea.",
    faq: [
      { question: "¿Cómo redimensiono una foto a 200 × 230 píxeles con menos de 20 KB?", answer: "Sube la foto, escribe 200 de ancho, 230 de alto y 20 de KB máximos, y redimensiona. El mensaje del resultado confirma el tamaño exacto." },
      { question: "¿Cambia las dimensiones para llegar al límite de KB?", answer: "No. Las dimensiones se mantienen exactamente como las introdujiste y solo se baja la calidad del JPEG." },
      { question: "¿Qué pasa si no se puede alcanzar el límite?", answer: "Verás un mensaje con el tamaño más pequeño logrado. Prueba con dimensiones menores o con un límite más alto." },
      { question: "¿La salida es siempre un JPG?", answer: "Sí, porque la mayoría de los formularios exigen JPG. El archivo se nombra con sus dimensiones para que lo encuentres con facilidad." },
      { question: "¿Puedo mantener la forma original de mi foto?", answer: "Sí. Elige la opción de márgenes blancos y toda la imagen cabe dentro del tamaño de destino." },
      { question: "¿Cumple las reglas de mi portal de exámenes o de visados?", answer: "Produce exactamente los píxeles y el tamaño máximo que indiques. Los requisitos varían según el portal y pueden cambiar, así que confirma las cifras en el propio portal." },
    ],
  },

  "batch-image-compressor": {
    title: "Compresor de Imágenes por Lotes: comprime muchas fotos a un mismo tamaño objetivo",
    intro: [
      "Comprimir las fotos una por una es lento cuando un formulario, un anuncio o un sitio web necesita veinte de ellas bajo el mismo límite. Sube todo el conjunto, indica un único tamaño objetivo en KB y ConvertBrio comprime cada imagen hasta que cabe.",
      "Cada archivo se trata por separado, así que un archivo problemático nunca bloquea al resto. Obtienes un informe por archivo, descargas individuales de cada imagen y un ZIP de todo el lote.",
    ],
    howTo: [
      { step: "Selecciona tus imágenes", detail: "Suelta hasta 50 imágenes a la vez, con un máximo de 100 MB en total." },
      { step: "Indica el tamaño objetivo", detail: "Un único límite en KB se aplica a todas las imágenes." },
      { step: "Comprime", detail: "Cada imagen se procesa de forma independiente: primero se baja la calidad y las dimensiones solo se reducen si hace falta." },
      { step: "Descarga", detail: "Guarda archivos sueltos de la lista o descarga todo como un ZIP." },
    ],
    sections: [
      {
        heading: "Resultados por archivo, no todo o nada",
        body: "La lista de resultados muestra cada archivo, el tamaño alcanzado y si quedó dentro del objetivo. Si una imagen no puede bajar del límite sin una pérdida extrema de calidad, se marca como por encima del objetivo en lugar de pasar sin avisar. Un archivo que no se puede leer en absoluto se indica como fallido, mientras que los demás se completan con normalidad.",
      },
      {
        heading: "Cómo se comprime cada imagen",
        body: "Para cada imagen, la herramienta busca la calidad más alta que cabe en tu objetivo, en el mismo formato (JPG sigue siendo JPG, WEBP sigue siendo WEBP). Si incluso la calidad más baja es demasiado grande, reduce las dimensiones en pequeños pasos. Las fotos HEIC de los iPhone se convierten a JPG porque HEIC no es un formato de salida compatible. Los GIF animados conservan solo su primer fotograma.",
      },
      {
        heading: "Cuándo usar el lote y cuándo una sola imagen",
        body: "Usa la herramienta individual Comprimir Imagen para un solo archivo. Usa el lote cuando muchas imágenes comparten el mismo límite, por ejemplo al subir un conjunto de productos, un grupo de documentos a un portal o fotos para un correo.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo comprimir varias imágenes al mismo tamaño.",
    faq: [
      { question: "¿Cuántas imágenes puedo comprimir a la vez?", answer: "Hasta 50 imágenes, siempre que el total sea menor de 100 MB." },
      { question: "¿Se garantiza que todas las imágenes alcancen el objetivo?", answer: "No. Cada resultado se mide y cualquier imagen que quede por encima del objetivo se marca para que sepas cuáles requieren atención." },
      { question: "¿Puedo descargar los archivos uno por uno?", answer: "Sí. Cada imagen procesada con éxito tiene su propio enlace de descarga, y también está disponible el ZIP." },
      { question: "¿Qué pasa si un archivo está dañado?", answer: "Se indica como fallido mientras los demás se procesan con normalidad." },
      { question: "¿Cambia el formato de mis imágenes?", answer: "No, salvo las fotos HEIC, que pasan a JPG." },
      { question: "¿Se guardan mis imágenes?", answer: "Tus archivos originales se eliminan justo después de leerlos y los resultados se eliminan mediante una limpieza diaria, normalmente en unas 24 horas. El procesamiento es automático y sin revisión humana." },
    ],
  },

  "image-to-text": {
    title: "Imagen a Texto: extrae el texto de una foto o una captura de pantalla",
    intro: [
      "Las fotos de documentos, las capturas de pantalla, las pizarras y los carteles contienen texto que no se puede seleccionar. Imagen a Texto usa el reconocimiento óptico de caracteres (OCR) para leer ese texto y devolvértelo como caracteres que puedes copiar, buscar y editar.",
      "Sube una imagen, elige el idioma del texto y el texto reconocido aparece en la página, listo para copiar. Al mismo tiempo se descarga un archivo .txt de texto plano.",
    ],
    howTo: [
      { step: "Sube una imagen", detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF. Una foto nítida y recta funciona mejor." },
      { step: "Elige el idioma", detail: "Elige el idioma en el que está escrito el texto para lograr la mayor precisión." },
      { step: "Extrae el texto", detail: "El reconocimiento se ejecuta de forma automática en el servidor." },
      { step: "Copia o descarga", detail: "Selecciona el texto en la página, usa Copiar texto o abre el archivo .txt descargado." },
    ],
    sections: [
      {
        heading: "Qué obtienes",
        body: "El texto reconocido como caracteres simples, en orden de lectura y con los saltos de línea conservados. Es texto plano, así que no se conservan las fuentes, los colores ni el diseño. Si quieres un documento editable con párrafos, usa Escaneo a Word.",
      },
      {
        heading: "Cómo lograr resultados precisos",
        body: "La calidad del reconocimiento depende de la calidad de la imagen. Usa una foto nítida, bien iluminada y tomada de frente de un texto impreso, con una resolución en la que las letras se lean con claridad. Recorta los bordes y el fondo y elige el idioma correcto.",
      },
      {
        heading: "Limitaciones que debes esperar",
        body: "La letra manuscrita no se reconoce de forma fiable. Las imágenes de baja resolución, el desenfoque, los reflejos, la inclinación y las fuentes decorativas reducen la precisión. Las tablas y los diseños de varias columnas pueden salir en un orden revuelto, porque el OCR lee línea por línea. Revisa siempre el resultado antes de fiarte de él.",
      },
      {
        heading: "Privacidad",
        body: "Las imágenes viajan cifradas. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. El texto reconocido solo se te muestra a ti.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo extraer texto de imágenes con OCR.",
    faq: [
      { question: "¿Cómo copio el texto de una imagen?", answer: "Sube la imagen, ejecuta la extracción y usa Copiar texto en el resultado. El mismo texto también se descarga como archivo .txt." },
      { question: "¿Funciona con capturas de pantalla?", answer: "Sí. Las capturas de texto impreso o de texto en pantalla suelen reconocerse con muy buena precisión." },
      { question: "¿Puede leer letra manuscrita?", answer: "No de forma fiable. El OCR está diseñado para texto impreso y mecanografiado." },
      { question: "¿Qué idiomas admite?", answer: "Inglés, portugués, español, francés, alemán, italiano e indonesio." },
      { question: "¿Por qué mi texto sale revuelto?", answer: "Las tablas y las páginas de varias columnas pueden leerse en el orden equivocado. Recorta la imagen para quedarte con una columna cada vez." },
      { question: "¿Y si es un PDF?", answer: "Usa Escaneo a Word para un PDF escaneado, o OCR de PDF para hacerlo buscable." },
    ],
  },

  "scan-to-word": {
    title: "¿Cómo convierto un documento escaneado en un archivo de Word editable?",
    intro: [
      "Usa el reconocimiento óptico de caracteres (OCR). Un escaneo o la foto de una página es una imagen, así que Word no tiene texto que editar hasta que el OCR lee las letras de la imagen. Escaneo a Word hace justamente eso y crea un documento de Word (DOCX) real con el texto reconocido, que después puedes editar, formatear y guardar.",
      "Sube la foto de una página o un PDF escaneado, elige el idioma del texto y descarga el DOCX. Está pensado para extraer las palabras de documentos en papel, como cartas, contratos y formularios impresos. Te da el texto, no una copia del diseño de la página, así que cuenta con revisarlo y volver a aplicar el formato que necesites.",
    ],
    howTo: [
      { step: "Escanea o fotografía la página", detail: "Plana, con luz uniforme y de frente da el mejor resultado. Sirve una app de escaneo del móvil que guarde un PDF o un JPG." },
      { step: "Sube la imagen o el PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF o un PDF. Archivos de hasta 100 MB; PDF de hasta 50 páginas." },
      { step: "Elige el idioma", detail: "Inglés, portugués, español, francés, alemán, italiano o indonesio. Elegir bien ayuda a que los acentos y los caracteres especiales salgan correctamente." },
      { step: "Descarga el DOCX", detail: "Ábrelo en Word, Google Docs o LibreOffice y revísalo con el original para corregir las palabras mal leídas." },
    ],
    sections: [
      {
        heading: "¿Puedo escanear directamente a Word?",
        body: [
          "No en un solo paso en este sitio, ni tampoco en el propio Word: ConvertBrio no se conecta a un escáner, así que primero creas el escaneo con tu escáner o una app del móvil y luego subes aquí el archivo.",
          "Conviene distinguir dos cosas distintas. Insertar un escaneo en Word (Insertar > Imágenes) coloca la página en el documento como imagen: se ve bien, pero no puedes editar las palabras. Convertir el escaneo con OCR, como hace esta herramienta, lee los caracteres y te da texto editable. Elige insertar si solo necesitas que la página aparezca en un documento; elige convertir si necesitas cambiar, copiar o buscar las palabras.",
        ],
      },
      {
        heading: "Antes y después: qué esperar",
        body: "Un ejemplo de la transformación, con una carta escaneada:",
        table: {
          headers: ["", "Tu escaneo (antes)", "El archivo de Word (después)"],
          rows: [
            ["Qué es", "Una imagen de una carta impresa", "Un DOCX con el texto de la carta"],
            ["Seleccionar una frase", "No es posible", "Funciona como cualquier texto de Word"],
            ["Buscar con Ctrl+F / Cmd+F", "No encuentra nada", "Encuentra todas las coincidencias"],
            ["Diseño", "Exactamente como se imprimió", "Párrafos simples; una página del escaneo sigue a otra, con un salto de página entre ellas"],
            ["Logotipo del membrete, sellos, fotos", "Visibles", "No se incluyen"],
          ],
        },
      },
      {
        heading: "Cómo revisar y corregir el resultado",
        body: "El OCR es preciso con texto impreso limpio, pero nunca perfecto, así que revisa el archivo antes de fiarte de él. Abre el DOCX junto al escaneo original y lee ambos.",
        list: [
          "Comprueba primero los números, las fechas, los importes y los nombres: los dígitos son los caracteres que más se leen mal (0 y O, 1 y l, 5 y S).",
          "Busca palabras separadas o unidas donde no corresponde, y símbolos sueltos donde una mancha o un doblez cruzó el texto.",
          "Pasa el corrector ortográfico de Word: una palabra sin sentido suele señalar una mal leída.",
          "Vuelve a aplicar a mano títulos, negritas, tablas y columnas donde los necesites.",
        ],
      },
      {
        heading: "Qué contiene el archivo de Word",
        body: "El texto reconocido, dividido en párrafos, con una página del escaneo a continuación de otra. Es un documento de texto editable, no una copia del aspecto de la página. No se reproducen las fuentes, las columnas, las imágenes ni las tablas del original.",
      },
      {
        heading: "¿Por qué cambia el formato tras la conversión?",
        body: "Porque la herramienta lee letras, no diseño. Reconstruye los párrafos a partir de las líneas que encuentra y no rehace el diseño de la página. Por eso verás estas diferencias:",
        list: [
          "Las tablas salen como líneas de texto, no como celdas. Vuelve a crear la tabla en Word y copia los valores.",
          "Las columnas se leen línea por línea, así que el texto de dos columnas puede mezclarse. Recorta o escanea una columna cada vez si el orden importa.",
          "Las fuentes, los tamaños, los colores y el espaciado se sustituyen por los valores predeterminados de Word. Selecciona el texto y dale estilo de nuevo.",
          "Las imágenes, los logotipos y las firmas no se trasladan. Añádelos de nuevo desde el archivo original.",
          "Un escaneo torcido, con sombras o de baja resolución produce más errores. Vuelve a escanearlo plano a unos 300 DPI en lugar de intentar reparar un mal resultado.",
          "Una página de lado o boca abajo se lee mal. Las fotos se enderezan con la orientación que guardó tu cámara, pero un escaneo sin ese dato debe girarse antes de subirlo.",
        ],
      },
      {
        heading: "Si obtienes un error o un resultado vacío",
        body: "Si la herramienta no encuentra texto legible, lo dice en lugar de devolver un archivo vacío. En ese caso, prueba con una imagen más nítida y de mayor resolución de texto impreso, endereza la página y asegúrate de que el idioma coincide con el del documento. Los PDF de más de 50 páginas se rechazan; divídelos antes en partes con la herramienta Dividir PDF.",
      },
      {
        heading: "Escaneo a Word frente a PDF a Word",
        body: "PDF a Word es para PDF que ya contienen texto real, e intenta conservar el formato. Escaneo a Word es para imágenes de texto, donde no hay texto que convertir hasta que el OCR lo lee. Si puedes seleccionar palabras en tu PDF, usa PDF a Word.",
      },
      {
        heading: "Limitaciones",
        body: "La precisión depende del escaneo. La letra manuscrita, los escaneos de baja resolución o torcidos, la impresión tenue y los diseños complejos como tablas y columnas suelen reconocerse mal. Cuenta con revisar cada documento. Si la herramienta no encuentra texto legible, te lo dice en lugar de devolver un archivo vacío.",
      },
      {
        heading: "Privacidad",
        body: "Las subidas viajan cifradas. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir escaneos en documentos de Word editables.",
    faq: [
      { question: "¿Cómo convierto un documento escaneado a Word?", answer: "Sube el escaneo como imagen o PDF, elige el idioma y descarga el DOCX que crea la herramienta. Revísalo con el original, porque el OCR puede leer mal algunos caracteres." },
      { question: "¿Puedo escanear un documento directamente a Word?", answer: "No directamente. Escanea primero la página con un escáner o una app del móvil y luego sube aquí el archivo. Insertar un escaneo en Word como imagen lo mantiene no editable; convertirlo con OCR te da texto editable." },
      { question: "¿Cómo convierto varias fotos de páginas en un solo archivo de Word?", answer: "Combina las fotos en un único PDF con Imagen a PDF y sube ese PDF aquí. El texto de cada página sigue al de la anterior, hasta 50 páginas." },
      { question: "¿Por qué desapareció el diseño de mi tabla o de mis columnas?", answer: "La herramienta entrega el texto reconocido como párrafos simples, por lo que las tablas y las columnas no se reconstruyen. Vuelve a crearlas en Word a partir del texto." },
      { question: "¿El archivo de Word se verá como mi escaneo?", answer: "No. Obtienes el texto reconocido como párrafos editables. El diseño, las fuentes y las imágenes no se reproducen." },
      { question: "¿Puede manejar PDF de varias páginas?", answer: "Sí, hasta 50 páginas. El texto de cada página sigue al de la anterior." },
      { question: "¿Lee letra manuscrita?", answer: "No de forma fiable. Está pensado para texto impreso." },
      { question: "¿Debo usar esta herramienta o PDF a Word?", answer: "Usa Escaneo a Word cuando el PDF es un escaneo o una foto. Usa PDF a Word cuando ya puedes seleccionar el texto." },
      { question: "¿Es gratis?", answer: "Sí, y no requiere cuenta." },
    ],
  },

  "pdf-page-organizer": {
    title: "Organizador de Páginas PDF: reordena, gira y elimina páginas de forma visual",
    intro: [
      "Reorganizar un PDF es más fácil cuando puedes ver las páginas. Sube un archivo y cada página aparece como miniatura. Cambia las páginas de orden, gira las que se escanearon de lado, quita las que no necesitas y guarda el resultado como un PDF nuevo.",
      "Todo funciona tanto con botones como arrastrando y soltando, así que puedes organizar las páginas con el teclado o desde un móvil.",
    ],
    howTo: [
      { step: "Sube tu PDF", detail: "Aparecen en la página las miniaturas de todas las páginas." },
      { step: "Reordena", detail: "Arrastra una página a su nueva posición o usa los botones de flecha que hay debajo." },
      { step: "Gira o quita", detail: "Usa el botón de girar para voltear una página en sentido horario. Usa el botón de quitar para descartarla; puedes restaurarla antes de guardar." },
      { step: "Crea el PDF nuevo", detail: "Si quitaste páginas, se te pedirá que lo confirmes. Tu archivo original nunca se modifica." },
    ],
    sections: [
      {
        heading: "Vista previa antes de confirmar",
        body: "Las miniaturas se dibujan en tu navegador, así que ves exactamente qué página es cuál antes de que se suba nada para procesarlo. Las páginas quitadas siguen en pantalla, atenuadas, y se pueden restaurar hasta que crees el archivo.",
      },
      {
        heading: "Controles accesibles",
        body: "Cada acción tiene un botón con su etiqueta: mover antes, mover después, girar y quitar o restaurar. Arrastrar y soltar es un extra, no un requisito, así que la herramienta funciona con teclado y lector de pantalla.",
      },
      {
        heading: "Eliminar páginas con seguridad",
        body: "Antes de crear un PDF con páginas quitadas, la herramienta te pide que confirmes cuántas páginas se descartarán. El archivo nuevo es independiente del original, que queda intacto en tu dispositivo.",
      },
      {
        heading: "Límites",
        body: "Archivos de hasta 100 MB. Los PDF protegidos con contraseña no se pueden abrir. Los PDF muy largos tardan más en mostrar la vista previa, porque cada miniatura se genera por turnos.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo reordenar, girar y eliminar páginas de un PDF.",
    faq: [
      { question: "¿Cómo reordeno las páginas de un PDF?", answer: "Súbelo, arrastra las miniaturas a un nuevo orden o usa los botones de mover antes y después, y crea el PDF nuevo." },
      { question: "¿Puedo hacerlo sin ratón?", answer: "Sí. Cada acción tiene un botón al que puedes llegar y que puedes pulsar con el teclado." },
      { question: "¿Puedo deshacer la eliminación de una página?", answer: "Sí. Las páginas quitadas siguen visibles con un botón Restaurar hasta que crees el archivo." },
      { question: "¿Modifica mi archivo original?", answer: "No. Obtienes un PDF nuevo y el original queda como estaba." },
      { question: "¿Puedo girar solo una página?", answer: "Sí. El giro se aplica a la página individual que elijas, de 90 grados por clic." },
      { question: "¿Por qué no se carga mi PDF?", answer: "Los PDF protegidos con contraseña o dañados no se pueden previsualizar. Quita primero la contraseña." },
    ],
  },

  "metadata-remover": {
    title: "Eliminador de Metadatos: borra los datos ocultos de fotos, PDF y archivos de Office",
    intro: [
      "Los archivos llevan información que no ves. Una foto del móvil puede registrar dónde y cuándo se tomó y con qué dispositivo. Un PDF o un documento de Word puede guardar el nombre del autor, la empresa y el programa usado. El Eliminador de Metadatos borra esos datos ocultos antes de que compartas el archivo.",
      "Funciona con fotos, PDF y archivos de Word, Excel y PowerPoint, y nunca cambia el formato del archivo: un JPG sigue siendo JPG y un DOCX sigue siendo DOCX.",
    ],
    howTo: [
      { step: "Sube un archivo", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX o PPTX." },
      { step: "Revisa qué se va a eliminar", detail: "Las categorías de cada tipo de archivo se enumeran en la página." },
      { step: "Limpia el archivo", detail: "Se eliminan los metadatos y el mensaje del resultado resume lo que se borró." },
      { step: "Descarga la copia limpia", detail: "Conserva el nombre de tu archivo con -clean añadido." },
    ],
    sections: [
      {
        heading: "Qué se elimina",
        body: "En las fotos: los datos EXIF, como el modelo de cámara o de móvil, la fecha de captura y la ubicación GPS, además de los datos XMP e IPTC. En los PDF: título, autor, asunto, palabras clave, creador, productor, fechas y metadatos XMP. En Word, Excel y PowerPoint: autor, última modificación por, título, empresa, fechas y datos de la aplicación.",
      },
      {
        heading: "Qué permanece",
        body: "El contenido visible no se toca: la imagen, las páginas, el texto. Algunos datos estructurales son necesarios para que el archivo siga siendo válido y se mantienen. El contenido que puedes ver o que está dentro del cuerpo del documento, como comentarios, cambios con seguimiento, hojas ocultas o un nombre escrito en una página, no son metadatos y no se eliminan. Revísalos por separado.",
      },
      {
        heading: "Las fotos conservan su orientación y su color",
        body: "Las fotos se giran a su orientación correcta antes de quitar la etiqueta de orientación, para que no queden de lado. El perfil de color se conserva para que los colores no cambien.",
      },
      {
        heading: "Privacidad",
        body: "Los archivos viajan cifrados. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo eliminar los metadatos ocultos de los archivos.",
    faq: [
      { question: "¿Cómo elimino la ubicación GPS de una foto?", answer: "Sube la foto. La herramienta borra los datos EXIF, incluidas las coordenadas GPS, y devuelve una copia limpia en el mismo formato." },
      { question: "¿Eliminar los metadatos reduce la calidad?", answer: "La imagen se recodifica en su propio formato, por lo que un JPG puede cambiar en una cantidad mínima. No se redimensiona ni se convierte." },
      { question: "¿Puede quitar el autor de un documento de Word?", answer: "Sí. Borra el autor, la última modificación por, la empresa y el título guardados en las propiedades del documento." },
      { question: "¿Queda algo?", answer: "Permanecen los datos estructurales necesarios para un archivo válido, y también el contenido visible y elementos como los comentarios o los cambios con seguimiento dentro de un documento." },
      { question: "¿Qué formatos admite?", answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX y PPTX." },
      { question: "¿Modifica mi archivo original?", answer: "No. Descargas una copia limpia aparte." },
    ],
  },
};
