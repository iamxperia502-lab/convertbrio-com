import type { ToolContentEntry } from "../toolContent";

// Spanish (es) long-form tool content. Structure mirrors the English and
// Portuguese entries; links point to the /es/ tool pages.

export const toolContentEs: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "Comprimir PDF online: reduce el tamaño para correo y portales",
    intro: [
      "Los PDF grandes, sobre todo los llenos de páginas escaneadas o fotos de alta resolución, no pasan el límite de adjuntos del correo, tardan en subir y los rechazan los portales que limitan el tamaño del archivo. El compresor de PDF de ConvertBrio recodifica las imágenes incrustadas en el documento con una calidad y resolución más eficientes y elimina los metadatos innecesarios, para que las mismas páginas vuelvan en un archivo más pequeño.",
      "Es gratis, funciona sin registro y no añade marca de agua. La compresión es sin pérdidas para el texto y los gráficos vectoriales, siguen nítidos, y solo afecta a las fotos y los escaneos, donde una reducción de calidad pequeña y casi siempre invisible se traduce en una gran caída de tamaño.",
    ],
    howTo: [
      { step: "Sube el PDF", detail: "Arrastra el archivo a la caja o haz clic para examinar. Un PDF por vez, hasta 100 MB." },
      {
        step: "Haz clic en Comprimir",
        detail:
          "ConvertBrio localiza las imágenes incrustadas, recodifica cada una con una calidad más eficiente, reduce las que son más grandes de lo necesario y elimina metadatos sin uso.",
      },
      {
        step: "Descarga y comprueba el tamaño",
        detail:
          "El PDF comprimido se descarga automáticamente. Ábrelo para confirmar que las páginas siguen legibles; si aún supera el límite, mira los consejos de abajo sobre escaneos y división de páginas.",
      },
    ],
    sections: [
      {
        heading: "Cómo funciona la compresión de PDF",
        body: [
          "El tamaño de un PDF casi siempre lo domina una sola cosa: las imágenes incrustadas. El texto, las fuentes y los dibujos vectoriales son diminutos en comparación. Por eso el compresor de ConvertBrio actúa donde está el peso: encuentra las imágenes fotográficas dentro del archivo, las recodifica con un JPEG más eficiente y reduce la escala de cualquier imagen con una resolución muy por encima de lo que una pantalla o impresora usaría.",
          "Todo lo que no es una foto queda intacto: el texto sigue seleccionable y nítido, los logotipos y gráficos vectoriales mantienen los bordes limpios y el diseño no se mueve. Los metadatos sin función se descartan para recuperar un poco más de espacio.",
        ],
      },
      {
        heading: "Qué PDF se reducen más",
        body: "La reducción depende por completo de qué está haciendo grande tu archivo.",
        table: {
          headers: ["Tipo de PDF", "Resultado típico"],
          rows: [
            ["Documento escaneado (fotos de las páginas)", "Gran reducción: a menudo un 40–70% más pequeño"],
            ["Informe con fotos o capturas de pantalla", "Reducción moderada, varía con la cantidad de imágenes"],
            ["Presentación exportada a PDF", "Reducción moderada si las diapositivas llevan fotos"],
            ["PDF solo de texto (contrato, ebook, factura)", "Poco cambio: ya es compacto"],
            ["PDF con imágenes en PNG o CMYK", "Limitada: esos tipos se omiten para no alterar los colores"],
          ],
        },
      },
      {
        heading: "Comprimir un PDF sin perder calidad",
        body: "Para cualquier PDF que sea casi todo texto, la compresión es prácticamente sin pérdidas: no pierdes nada visible. Para PDF escaneados o con muchas imágenes, las imágenes se recodifican, así que hay un intercambio de calidad real pero pequeño. En la práctica, una página escaneada comprimida con esta herramienta sigue leyéndose bien en pantalla e imprime bien; la diferencia solo aparece si haces mucho zoom sobre una foto.",
      },
      {
        heading: "Dejar un PDF por debajo de un tamaño concreto (100 KB, 500 KB, 2 MB)",
        body: [
          "Esta herramienta hace una pasada de compresión eficiente, no varios intentos hasta un número exacto, así que no garantiza un valor preciso en kilobytes. Pero algunas cosas ayudan cuando el límite es estricto:",
          "Si tu PDF es un documento escaneado, suele bajar mucho en una sola pasada: pruébalo primero. Si aún supera el límite, divídelo en menos páginas con la herramienta Dividir PDF y comprime cada parte, o exporta solo las páginas que necesitas. Si el peso viene de una o dos fotos enormes, comprimir esas imágenes por separado con Comprimir Imagen (que tiene un objetivo exacto de tamaño) antes de rearmar el PDF da el mejor control.",
        ],
      },
      {
        heading: "Comprimir o dividir",
        body: "La compresión reduce el peso de cada página. La división reduce el número de páginas. Si tu PDF de 30 MB tiene 300 páginas de texto, la compresión ayudará poco: dividirlo en secciones con Dividir PDF es la respuesta. Si son 10 páginas escaneadas de 3 MB cada una, la compresión es exactamente la herramienta adecuada. Se complementan.",
      },
      {
        heading: "Privacidad y límites",
        body: "Tu PDF se cifra durante la subida. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un archivo por vez, hasta 100 MB, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo comprimir el tamaño de un PDF online.",
    faq: [
      {
        question: "¿Cómo comprimir un PDF online gratis?",
        answer:
          "Sube el documento a la herramienta Comprimir PDF de ConvertBrio y haz clic en Comprimir. Recodifica las imágenes incrustadas y elimina metadatos innecesarios para reducir el archivo, que se descarga automáticamente: sin cuenta, sin marca de agua y sin correo.",
      },
      {
        question: "¿Se puede comprimir un PDF sin perder calidad?",
        answer:
          "El texto y el contenido vectorial nunca se degradan: siguen perfectamente nítidos. Solo se recodifican las fotos y los escaneos, con una reducción de calidad pequeña que suele ser invisible al tamaño normal de visualización.",
      },
      {
        question: "¿Cómo dejar un PDF más pequeño para enviarlo por correo?",
        answer:
          "Pásalo una vez por la herramienta. La mayoría de límites de correo son de 20–25 MB; un documento escaneado o un informe con muchas imágenes suele quedar bastante por debajo. Si aún es demasiado grande, divídelo en partes con Dividir PDF.",
      },
      {
        question: "¿Puedo comprimir un PDF a exactamente 100 KB o 300 KB?",
        answer:
          "Esta herramienta no apunta a un tamaño exacto: hace una pasada eficiente. Para límites estrictos, comprime primero un PDF escaneado aquí, reduce el número de páginas con Dividir PDF si hace falta, o comprime las imágenes incrustadas más grandes por separado con Comprimir Imagen, que sí acepta un objetivo exacto en KB.",
      },
      {
        question: "¿Por qué mi PDF casi no se redujo?",
        answer:
          "Probablemente ya es compacto: un PDF casi todo de texto tiene muy poco que eliminar. Los archivos con escaneos de alta resolución o fotos incrustadas tienen las mayores reducciones.",
      },
      {
        question: "¿La compresión cambia el diseño o el texto?",
        answer:
          "No. Las dimensiones de la página, la posición del texto, las fuentes y el texto seleccionable se conservan. Solo cambia el tamaño del archivo.",
      },
    ],
  },

  "compress-image": {
    title: "Compresor de imágenes: reduce el tamaño sin perder calidad",
    intro: [
      "Ya sea para pasar un límite de subida, acelerar un sitio web o dejar de llenar el almacenamiento, el compresor de imágenes de ConvertBrio reduce el tamaño del archivo manteniendo la imagen nítida. Tú controlas el resultado: fijas un nivel de calidad o das un tamaño objetivo exacto en kilobytes y dejas que la herramienta llegue a él.",
      "Ese modo de tamaño objetivo es el motivo por el que la mayoría de la gente llega aquí. Los portales de visados, las webs de oposiciones, las solicitudes de universidad y los formularios del gobierno suelen limitar una foto o un escaneo a 100 KB, 200 KB o 50 KB. En lugar de exportar a calidades adivinadas hasta que una encaje, escribes el límite una vez y descargas un archivo por debajo de él.",
    ],
    howTo: [
      { step: "Sube la imagen", detail: "Arrastra un JPG, PNG, WEBP, HEIC o AVIF, hasta 100 MB. Se aceptan fotos HEIC de iPhone directamente." },
      {
        step: "Fija un tamaño objetivo o un nivel de calidad",
        detail:
          "Escribe el tamaño máximo en KB (por ejemplo, 100). Déjalo en blanco para usar el control de calidad, donde valores más bajos generan archivos más pequeños.",
      },
      {
        step: "Comprime",
        detail:
          "ConvertBrio recodifica la imagen y, en modo objetivo, ajusta la calidad, y luego las dimensiones si la calidad no basta, hasta que el archivo quepa por debajo de tu límite.",
      },
      { step: "Descarga el resultado", detail: "El archivo comprimido se descarga automáticamente. Comprueba que sea aceptable; si quedó muy borroso, sube el objetivo y repite." },
    ],
    sections: [
      {
        heading: "Cómo funciona la compresión de imágenes",
        body: [
          "JPG, WEBP y AVIF son formatos con pérdidas: reducen el archivo descartando datos de imagen que el ojo humano es menos probable que eche de menos: degradados de color sutiles, textura fina en zonas cargadas, detalle de alta frecuencia. Bajar la calidad hace que el codificador descarte más, generando un archivo más pequeño con un suavizado y artefactos cada vez más visibles.",
          "PNG es sin pérdidas y comprime de otra forma: solo puede empaquetar los píxeles exactos de manera más eficiente, así que una foto guardada en PNG apenas se reduce. Si subes un PNG al compresor y quieres una reducción de verdad, convertirlo a JPG o WEBP antes (con el Conversor de Imágenes) hace mucho más que cualquier compresión de PNG.",
        ],
      },
      {
        heading: "Reducir una imagen a un tamaño exacto (como 100 KB)",
        body: "Escribe tu límite en el campo de tamaño objetivo y ConvertBrio trabaja hacia atrás: busca la mayor calidad posible con una búsqueda binaria entre el 10 % y el 95 %, comprobando el tamaño tras cada intento, y solo reduce las dimensiones si ni siquiera el 10 % de calidad cabe: en ese caso reduce el ancho un 15 % cada vez, hasta seis veces. El resultado es la versión más grande y nítida de tu imagen que todavía cabe por debajo del tope.",
        list: [
          "Foto de visado o pasaporte: a menudo 100 KB, o un rango de 10 KB a 240 KB",
          "Portales del gobierno y de Hacienda: habitualmente 100 KB o 200 KB por escaneo",
          "Webs de oposiciones y solicitudes: con frecuencia de 50 KB a 500 KB para foto o certificado",
          "Avatares de foros y marketplaces: en general cerca de 1–2 MB",
        ],
      },
      {
        heading: "¿Cuánto se puede comprimir antes de que se note?",
        body: "La mayoría de las fotografías pierde un 40–60% del tamaño sin diferencia visible al tamaño normal de visualización, porque los primeros datos que descarta el codificador son realmente difíciles de ver. A partir de ahí, las zonas planas como los cielos empiezan a bandear y los bordes del texto y el detalle fino se vuelven ásperos. El método práctico es empezar cerca de la parte alta del rango de calidad y bajar poco a poco mirando la imagen.",
      },
      {
        heading: "Comprimir o redimensionar",
        body: "La compresión mantiene las mismas dimensiones en píxeles y reduce cuánto cuesta cada píxel. El redimensionado reduce la propia cantidad de píxeles. Para una foto que es grande en dimensiones y en peso, redimensionar al tamaño que realmente necesitas, y luego comprimir, genera un archivo mucho más pequeño con menos pérdida visible.",
      },
      {
        heading: "Privacidad y límites",
        body: "Cada subida se cifra. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Esta herramienta comprime una imagen por vez, hasta 100 MB, gratis, sin cuenta y sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre comprimir y reducir el tamaño de las imágenes.",
    faq: [
      {
        question: "¿Cómo reducir una imagen a menos de 100 KB?",
        answer:
          "Sube la imagen al compresor de ConvertBrio y fija el tamaño objetivo en 100 KB. La herramienta baja la calidad, y las dimensiones si hace falta, hasta que el archivo quepa en ese límite, ideal para formularios y subidas de documentos con tope estricto.",
      },
      {
        question: "¿Comprimir va a dejar la imagen peor?",
        answer:
          "Con una compresión moderada, la mayoría de la gente no nota diferencia. La pérdida de calidad solo se ve en ajustes agresivos, así que conviene comprobar el resultado en vez de comprimir al menor tamaño posible por defecto.",
      },
      {
        question: "Mi PNG casi no se redujo, ¿por qué?",
        answer:
          "PNG es sin pérdidas, así que hay poco margen para comprimir una fotografía guardada en él. Convierte el PNG a JPG o WEBP con el Conversor de Imágenes primero; solo eso suele recortar el tamaño un 70% o más.",
      },
      {
        question: "¿El compresor mantiene las dimensiones de la imagen?",
        answer:
          "Sí, salvo que uses el modo de tamaño objetivo y el archivo aún no quepa tras la reducción máxima de calidad, en cuyo caso también reduce las dimensiones como último recurso.",
      },
      {
        question: "¿Se pueden comprimir varias imágenes a la vez?",
        answer:
          "Comprimir una imagen por vez es gratis y sin cuenta. Esta herramienta todavía no procesa varias imágenes en una sola pasada.",
      },
    ],
  },

  "merge-pdf": {
    title: "Unir PDF online: combina varios PDF en un solo archivo",
    intro: [
      "Unir páginas escaneadas, facturas, informes o capítulos en un solo documento suele requerir un programa de escritorio o una suscripción de pago. La herramienta de unir de ConvertBrio lo hace en línea, sin instalar nada: sube varios PDF, ponlos en el orden que quieras y descarga un archivo combinado en segundos.",
      "Cada página de cada archivo se mantiene exactamente como está: sin recompresión, sin pérdida de calidad, sin marca de agua. El único cambio es que archivos separados pasan a ser uno.",
    ],
    howTo: [
      { step: "Sube dos o más PDF", detail: "Arrástralos todos a la vez o selecciona varios en el explorador. Cada archivo puede tener hasta 100 MB." },
      {
        step: "Ponlos en orden",
        detail: "El documento combinado sigue el orden de la lista de archivos, así que organízalos como debe leerse el PDF final: portada primero, anexos al final.",
      },
      { step: "Une y descarga", detail: "Haz clic en Convertir. ConvertBrio añade las páginas de cada archivo en secuencia y el PDF combinado se descarga automáticamente." },
    ],
    sections: [
      {
        heading: "Motivos comunes para unir PDF",
        body: "Es una de las operaciones más usadas con PDF, normalmente para uno de estos casos:",
        list: [
          "Combinar páginas escaneadas por separado en un solo documento",
          "Montar un informe, contrato o propuesta de varias partes",
          "Reunir varias facturas o recibos en una única presentación",
          "Unir capítulos de un manual, libro o apuntes",
          "Adjuntar una carta de presentación al currículum como un solo archivo",
        ],
      },
      {
        heading: "Acertar el orden de las páginas",
        body: "La secuencia del archivo combinado la define el orden en que subes los archivos, así que organiza la lista antes de convertir. Si uno de los PDF de origen tiene sus propias páginas en el orden equivocado, resuélvelo primero: divídelo en páginas sueltas con Dividir PDF y luego une todo en la secuencia que necesites.",
      },
      {
        heading: "Después de unir",
        body: "Un documento combinado suele ser el momento en que querrás reducir el tamaño si los orígenes tenían muchas imágenes (Comprimir PDF). Hacerlo en el archivo final garantiza que la compresión refleje el documento completo.",
      },
      {
        heading: "Privacidad y límites",
        body: "Los archivos se cifran al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Varios archivos por unión, hasta 100 MB cada uno, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre unir varios archivos PDF en uno solo.",
    faq: [
      {
        question: "¿Cómo unir archivos PDF online gratis?",
        answer:
          "Abre la herramienta Unir PDF de ConvertBrio, sube dos o más PDF, organízalos en el orden que quieras y descarga el archivo combinado: sin cuenta, sin instalar programas, sin marca de agua.",
      },
      {
        question: "¿Puedo controlar el orden de las páginas en el PDF combinado?",
        answer:
          "Sí: los archivos se unen en el orden en que aparecen listados, con las páginas de cada uno en secuencia. Organiza los archivos antes de convertir.",
      },
      {
        question: "¿Unir reduce la calidad de mis PDF?",
        answer:
          "No. Las páginas se copian tal cual, sin recompresión. El archivo combinado tiene aproximadamente el tamaño sumado de los originales.",
      },
      {
        question: "¿Se pueden unir imágenes y PDF?",
        answer:
          "Convierte las imágenes a PDF primero con JPG a PDF y luego únelas con tus otros PDF aquí.",
      },
      {
        question: "¿Hay un límite de cuántos PDF puedo combinar?",
        answer:
          "Puedes unir varios archivos de una vez, cada uno de hasta 100 MB. Los trabajos muy grandes quedan mejor hechos en dos etapas.",
      },
    ],
  },

  "split-pdf": {
    title: "Dividir PDF online: separa un documento en páginas individuales",
    intro: [
      "¿Necesitas sacar una página de un PDF más grande o partir un documento de varias páginas en archivos separados? La herramienta de dividir de ConvertBrio separa cada página de tu PDF en su propio archivo, listo para descargar y usar de forma independiente.",
      "Es gratis, funciona sin registro y no añade marca de agua. El resultado llega como un ZIP con una página por archivo.",
    ],
    howTo: [
      { step: "Sube tu PDF", detail: "Arrástralo a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Divide", detail: "ConvertBrio parte el documento en archivos de una página, uno por página del original." },
      { step: "Descarga el ZIP", detail: "El resultado llega como un único archivo ZIP con cada página como un PDF separado, listo para extraer." },
    ],
    sections: [
      {
        heading: "Cuándo tiene sentido dividir",
        body: "Casos comunes: sacar una página de firma de un contrato, separar capítulos de un libro escaneado, aislar una factura de un lote, o partir un informe grande en secciones más pequeñas para compartir.",
      },
      {
        heading: "Volver a unir las páginas después",
        body: "Si divides un PDF y luego necesitas recombinar algunas o todas las páginas en un nuevo documento, la herramienta Unir PDF de ConvertBrio las vuelve a juntar en el orden que elijas.",
      },
      {
        heading: "Privacidad y límites",
        body: "La subida se cifra. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Límite de 100 MB por archivo.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre dividir un PDF en páginas individuales.",
    faq: [
      {
        question: "¿Cómo dividir un PDF en páginas separadas?",
        answer:
          "Sube tu PDF a la herramienta Dividir PDF de ConvertBrio y separa cada página en un archivo individual, todos reunidos en una única descarga ZIP.",
      },
      {
        question: "¿Puedo extraer solo una página de un PDF?",
        answer:
          "Sí: la división parte el documento en páginas individuales dentro de un ZIP, así que coges la página que necesitas e ignoras el resto.",
      },
      {
        question: "¿Puedo volver a juntar las páginas después?",
        answer:
          "Sí, usa la herramienta Unir PDF de ConvertBrio para recombinar las páginas resultantes en un nuevo documento en el orden que necesites.",
      },
    ],
  },

  "pdf-to-word": {
    title: "Convertir PDF a Word: transforma un PDF en un documento editable",
    intro: [
      "¿Necesitas editar el texto de un PDF pero no tienes el archivo de origen? El conversor de PDF a Word de ConvertBrio reconstruye tu PDF como un DOCX editable, párrafos, negrita y cursiva, títulos, tablas simples e imágenes incluidos, que se abre en Microsoft Word, Google Docs o LibreOffice.",
      "Es gratis, no pide registro y no añade marca de agua. Los documentos sencillos se convierten bien; cuanto más compleja visualmente sea la página original, más ajustes harás después.",
    ],
    howTo: [
      {
        step: "Comprueba si el PDF tiene texto real",
        detail:
          "Ábrelo e intenta seleccionar una frase con el cursor. Si puedes, pasa al paso 2. Si el texto es una imagen escaneada, pásalo primero por OCR de PDF.",
      },
      { step: "Sube el PDF", detail: "Arrástralo a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Convierte a DOCX", detail: "ConvertBrio reconstruye el contenido como un documento Word, texto, títulos, tablas básicas e imágenes, y se descarga automáticamente." },
      { step: "Abre y edita en Word", detail: "El DOCX se abre en Word, Google Docs o cualquier editor compatible. Revisa el diseño y ajusta lo que la conversión no haya colocado a la perfección." },
    ],
    sections: [
      {
        heading: "Qué se conserva y qué hay que retocar",
        body: "Saberlo de antemano ahorra tiempo.",
        table: {
          headers: ["Elemento", "Resultado de la conversión"],
          rows: [
            ["Párrafos, negrita, cursiva", "Se conservan de forma fiable"],
            ["Títulos y listas básicas", "Se conservan en la mayoría de documentos"],
            ["Tablas simples", "Se conservan; bordes y espaciado pueden necesitar ajuste"],
            ["Imágenes en línea y a ancho completo", "Se conservan y se colocan en el flujo"],
            ["Diseños de varias columnas", "Se aplanan a una columna: cuenta con rehacer el diseño"],
            ["Encabezados, pies, números de página", "Pueden pasar al cuerpo o desaparecer"],
          ],
        },
      },
      {
        heading: "Convertir un documento escaneado a Word",
        body: "Si tu PDF es un escaneo, una foto de cada página en vez de texto real, este conversor no tiene texto que extraer y generará un documento vacío o solo con imágenes. Pasa el escaneo primero por la herramienta OCR de PDF: reconoce el texto impreso y añade una capa de texto. Luego convierte ese PDF con OCR aquí para obtener un DOCX editable.",
      },
      {
        heading: "Privacidad y límites",
        body: "El PDF se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un documento por vez, hasta 100 MB, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre convertir archivos PDF en documentos Word editables.",
    faq: [
      {
        question: "¿Cómo convertir un PDF en un documento Word editable?",
        answer:
          "Sube tu PDF a la herramienta PDF a Word de ConvertBrio, y reconstruye el contenido, texto, títulos, tablas simples e imágenes, en un DOCX que abres y editas en Microsoft Word o Google Docs.",
      },
      {
        question: "¿Cómo convertir un documento escaneado a Word?",
        answer:
          "Pasa el escaneo primero por el OCR de PDF de ConvertBrio para reconocer el texto y añadir una capa de texto. Luego convierte ese PDF aquí para obtener un DOCX editable. Un escaneo puro no tiene texto que esta herramienta pueda extraer.",
      },
      {
        question: "¿Los diseños complejos y las imágenes se convertirán bien?",
        answer:
          "Párrafos, negrita y cursiva, títulos, tablas simples e imágenes se conservan. Los diseños de varias columnas y las páginas muy diseñadas se aplanan y necesitarán rehacerse.",
      },
      {
        question: "¿El archivo convertido es un .docx de verdad?",
        answer:
          "Sí, un .docx estándar que se abre en Microsoft Word, Google Docs, LibreOffice y Pages.",
      },
      {
        question: "¿Añadís marca de agua?",
        answer: "No. El DOCX está limpio, sin marca de agua, sello ni metadatos añadidos.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Convertir Word a PDF: fija el formato para compartir",
    intro: [
      "Un documento Word puede verse distinto según las fuentes, la versión de Word o el sistema en el que se abre, un problema real cuando un currículum, contrato o informe tiene que verse igual para todo el que lo recibe. El conversor de Word a PDF de ConvertBrio transforma tu DOCX en un PDF listo para imprimir que se ve igual en cualquier sitio y no se puede editar por accidente.",
      "Es gratis, funciona sin registro, no necesita Microsoft Word instalado y no añade marca de agua.",
    ],
    howTo: [
      { step: "Guarda el documento como .docx", detail: "En Word, usa Archivo → Guardar como y elige Documento de Word (.docx). Los archivos .doc antiguos no se aceptan." },
      { step: "Sube el archivo", detail: "Arrastra el .docx a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Convierte y descarga", detail: "ConvertBrio maqueta el documento y genera el PDF. El archivo se descarga automáticamente, listo para enviar por correo, imprimir o subir." },
    ],
    sections: [
      {
        heading: "Por qué convertir a PDF antes de enviar",
        body: "PDF es el estándar para documentos terminados porque se ve igual en todos los dispositivos, sin depender de que el destinatario tenga Word o las fuentes correctas. Un archivo Word, en cambio, puede reorganizar párrafos, cambiar saltos de página o sustituir fuentes en la máquina de otra persona, justo lo que no quieres cuando un reclutador abre tu currículum.",
      },
      {
        heading: "Cómo se trata el formato",
        body: "Texto, fuentes, títulos, listas, tablas, imágenes en línea y tamaño de página se conservan. Funciones muy específicas de Word, encabezados y pies personalizados, notas al pie, control de cambios, pueden verse algo distintas porque el documento se maqueta de nuevo, no con el propio Word.",
      },
      {
        heading: "Privacidad y límites",
        body: "Tu documento se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un .docx por vez, hasta 100 MB, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre convertir documentos Word a PDF.",
    faq: [
      {
        question: "¿Cómo convertir un documento Word a PDF gratis?",
        answer:
          "Sube tu .docx a la herramienta Word a PDF de ConvertBrio y genera un PDF con formato listo para descargar: sin instalar Microsoft Word, sin cuenta, sin marca de agua.",
      },
      {
        question: "¿Mi formato seguirá igual después de convertir?",
        answer:
          "Sí, para documentos estándar: diseño, fuentes, títulos, tablas e imágenes se conservan, y a diferencia de un archivo Word el PDF se ve igual en cualquier dispositivo.",
      },
      {
        question: "¿Funciona con archivos .doc?",
        answer:
          "Solo con el formato moderno .docx. Abre un .doc antiguo en Word y guárdalo como .docx (Archivo → Guardar como), luego convierte.",
      },
      {
        question: "¿Puedo convertir el PDF de vuelta a Word después?",
        answer:
          "Sí, usa la herramienta PDF a Word de ConvertBrio. Ten en cuenta que pasar un PDF de diseño fijo de vuelta a texto editable es aproximado en diseños complejos.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "Convertir PDF a JPG: exporta cada página como imagen",
    intro: [
      "A veces necesitas una página del PDF como imagen: para meterla en una diapositiva, publicarla en redes, adjuntarla donde no se aceptan PDF o sacar un gráfico de un informe largo. El conversor de PDF a JPG de ConvertBrio renderiza cada página de tu archivo como un JPG separado.",
      "Es gratis, no pide registro y no añade marca de agua. Un PDF de una página devuelve un único JPG; uno de varias páginas devuelve un conjunto de imágenes, una por página.",
    ],
    howTo: [
      { step: "Sube tu PDF", detail: "Arrástralo a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Convierte", detail: "ConvertBrio renderiza cada página en un JPG de alta resolución. Los documentos más largos tardan un poco más porque cada página se renderiza individualmente." },
      { step: "Descarga las imágenes", detail: "Una sola página se descarga como un JPG; varias páginas se descargan juntas, así tienes el documento entero en imágenes." },
    ],
    sections: [
      {
        heading: "Usos comunes",
        body: "",
        list: [
          "Insertar una página de PDF en una diapositiva de PowerPoint o Google Slides",
          "Publicar una página o un certificado en redes sociales o en una app de mensajería",
          "Subir páginas de documento a un formulario que solo acepta imágenes",
          "Sacar un diagrama, gráfico o figura de un informe para reutilizarlo",
        ],
      },
      {
        heading: "¿JPG o PNG?",
        body: "Elige JPG para páginas fotográficas y para el menor tamaño de archivo: es el estándar adecuado para compartir. Elige PNG cuando la página es casi todo texto, tablas o líneas y la necesitas muy nítida, o cuando necesitas un fondo transparente.",
      },
      {
        heading: "Privacidad y límites",
        body: "Tu PDF se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un archivo por vez, hasta 100 MB, gratis, sin cuenta.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre convertir páginas de PDF en imágenes JPG.",
    faq: [
      {
        question: "¿PDF a JPG convierte todas las páginas?",
        answer:
          "Sí: cada página de tu PDF se renderiza como un JPG separado, así que un documento de varias páginas genera una imagen por página.",
      },
      {
        question: "¿Debo usar JPG o PNG para una página con texto?",
        answer:
          "PNG mantiene el texto y las líneas más nítidos por ser sin pérdidas; JPG genera un archivo más pequeño con un detalle algo más suave. Usa PNG cuando la nitidez del texto es lo más importante.",
      },
      {
        question: "¿Puedo convertir las imágenes de vuelta a PDF después?",
        answer:
          "Sí, usa la herramienta JPG a PDF de ConvertBrio para recombinar imágenes en un único PDF cuando lo necesites.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "Convertir JPG a PDF: une imágenes en un solo documento",
    intro: [
      "Ya sea para enviar páginas escaneadas, montar un portafolio sencillo o convertir un montón de recibos en un solo archivo, la herramienta JPG a PDF de ConvertBrio combina una o varias imágenes en un único PDF, en el orden que elijas, con una imagen por página.",
      "Es la forma estándar de convertir fotos de papel en algo que se puede enviar. La mayoría de los portales quieren un PDF, no una carpeta de JPG: esto lo resuelve en un paso, gratis y sin marca de agua.",
    ],
    howTo: [
      { step: "Fotografía o reúne las imágenes", detail: "Para páginas de documento, fotografía de frente y con buena luz para que el texto sea legible. Se aceptan JPG y PNG." },
      { step: "Súbelas todas a la vez", detail: "Arrastra todas las imágenes a la caja o selecciona varias. Tamaño combinado de hasta 100 MB." },
      { step: "Fija el orden de las páginas", detail: "El PDF sigue el orden en que aparecen las imágenes, así que organiza página 1, página 2 y así sucesivamente." },
      { step: "Convierte y descarga", detail: "ConvertBrio coloca cada imagen en su propia página y el PDF final se descarga automáticamente." },
    ],
    sections: [
      {
        heading: "Usos comunes",
        body: "",
        list: [
          "Enviar un documento, DNI, pasaporte o certificado escaneado",
          "Combinar varias fotos de recibo o factura en una presentación de gastos",
          "Devolver un contrato firmado a mano como un único archivo",
          "Convertir un conjunto de capturas de pantalla en un documento para compartir",
        ],
      },
      {
        heading: "Un documento limpio a partir de fotos del móvil",
        body: "Para resultados legibles, llena el encuadre con la página, mantén la cámara paralela para evitar la forma de trapecio y usa luz uniforme sin sombra sobre el texto. Si la foto sale girada, corrígela antes de convertir. Si el PDF resultante es demasiado grande para un límite de subida, pásalo por Comprimir PDF después.",
      },
      {
        heading: "Privacidad y límites",
        body: "Las imágenes se cifran al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Varias imágenes por vez, 100 MB combinados, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre convertir imágenes JPG en un PDF.",
    faq: [
      {
        question: "¿Se pueden combinar varias imágenes en un solo PDF?",
        answer:
          "Sí: sube todas las imágenes JPG o PNG que necesites de una vez, y ConvertBrio las combina en un PDF con cada imagen en su propia página, en el orden que organices.",
      },
      {
        question: "¿Cómo convertir la foto de un documento a PDF?",
        answer:
          "Sube la foto a JPG a PDF y se convierte en un PDF de una página que puedes enviar, imprimir o compartir. Sube varias fotos para convertir un documento de varias páginas en un solo PDF.",
      },
      {
        question: "Mi PDF salió demasiado grande para enviarlo, ¿qué hago?",
        answer:
          "Las fotos de móvil son de alta resolución, así que el PDF puede quedar grande. Pásalo por Comprimir PDF, que recodifica las imágenes incrustadas y suele recortar bastante el tamaño.",
      },
    ],
  },

  "image-converter": {
    title: "Conversor de imágenes: convierte entre cualquier formato online",
    intro: [
      "El conversor de imágenes de ConvertBrio mueve una foto, un gráfico o una captura de pantalla entre JPG, PNG, WEBP, AVIF, HEIC y GIF en un paso. No hay nada que instalar ni cuenta que crear: sube un archivo, elige el formato y descarga el resultado en segundos.",
      "El motivo más común para convertir una imagen es la compatibilidad: una foto HEIC de iPhone que Windows no abre, un WEBP guardado de una web que un editor rechaza, o un AVIF que un correo antiguo no muestra.",
    ],
    howTo: [
      { step: "Sube tu imagen", detail: "Arrastra un archivo JPG, PNG, WEBP, AVIF, HEIC o GIF a la caja, o haz clic para examinar. Hasta 100 MB." },
      { step: "Elige el formato de salida", detail: "Selecciona JPG, PNG, WEBP, AVIF o GIF. Si no estás seguro, JPG sirve para fotos y PNG para gráficos con transparencia o texto nítido." },
      { step: "Convierte y descarga", detail: "Haz clic en Convertir. ConvertBrio decodifica el original y lo recodifica en el formato elegido, y el archivo se descarga automáticamente." },
    ],
    sections: [
      {
        heading: "Elegir el formato de salida adecuado",
        body: "No existe un formato de imagen mejor: la elección adecuada depende de a dónde va el archivo.",
        table: {
          headers: ["Necesitas…", "Convertir a", "Motivo"],
          rows: [
            ["Adjuntar una foto a un correo o formulario", "JPG", "Se abre en todas partes, archivo pequeño, sin riesgo de incompatibilidad"],
            ["Mantener un fondo transparente", "PNG o WEBP", "JPG y el GIF antiguo aplanan la transparencia sobre un color sólido"],
            ["Acelerar las imágenes de tu propia web", "WEBP o AVIF", "Mucho más pequeños que JPG/PNG con la misma calidad visual"],
            ["Abrir una foto de iPhone en Windows", "JPG", "El soporte de HEIC en Windows es irregular; JPG está garantizado"],
            ["Subir a una web que rechaza WEBP o AVIF", "JPG o PNG", "Los dos formatos que acepta cualquier formulario de subida"],
          ],
        },
      },
      {
        heading: "Qué pasa con la transparencia y la animación",
        body: "La transparencia se conserva cuando ambos formatos admiten canal alfa (PNG, WEBP, AVIF). Convertir una imagen transparente a JPG rellena las zonas transparentes con blanco. Los GIF animados se convierten en un único fotograma.",
      },
      {
        heading: "Privacidad y límites",
        body: "Cada subida se cifra. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Archivos de hasta 100 MB, gratis, sin cuenta y sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre el conversor de imágenes de ConvertBrio.",
    faq: [
      {
        question: "¿Entre qué formatos de imagen puedo convertir?",
        answer:
          "El conversor lee JPG, PNG, WEBP, AVIF, HEIC y GIF, y exporta a JPG, PNG, WEBP, AVIF o GIF. Eso cubre prácticamente todos los formatos de cámaras, móviles, capturas de pantalla y programas de diseño.",
      },
      {
        question: "¿Convertir va a reducir la calidad de mi imagen?",
        answer:
          "Convertir entre formatos sin pérdidas como PNG mantiene cada píxel. Convertir a un formato con pérdidas como JPG o WEBP aplica compresión una vez, pero con la calidad por defecto la diferencia rara vez se nota.",
      },
      {
        question: "¿Convertir cambia las dimensiones de la imagen?",
        answer:
          "No. El conversor mantiene el ancho y el alto exactos del original. Si además necesitas cambiar el tamaño, usa una herramienta de redimensionado después.",
      },
      {
        question: "¿Añadís marca de agua?",
        answer: "No. El archivo convertido está limpio, a resolución completa, sin marca de agua ni sello.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR de PDF: haz que un documento escaneado sea buscable y editable",
    intro: [
      "Una página escaneada o la foto de un documento es solo una imagen para el ordenador: no puedes buscar, copiar el texto ni llevar el documento escaneado a Word sin volver a teclear cada línea. El reconocimiento óptico de caracteres (OCR) lo resuelve: lee el texto dentro de la imagen y lo convierte en caracteres de verdad, seleccionables.",
      "Es esta la herramienta que busca la gente cuando busca cómo convertir un documento escaneado en texto editable. Escanea o fotografía las páginas, guárdalas como PDF, pásalas por aquí y copia el texto, o envía el PDF buscable a la herramienta PDF a Word.",
    ],
    howTo: [
      { step: "Escanea o fotografía el documento como PDF", detail: "Usa un escáner o una app de escaneo del móvil (que guarda directamente en PDF). Páginas rectas, planas y bien iluminadas dan el mejor reconocimiento." },
      { step: "Sube el PDF a OCR de PDF", detail: "Un archivo por vez, hasta 100 MB. Los documentos de varias páginas funcionan: cada página se procesa." },
      { step: "Ejecuta el reconocimiento", detail: "ConvertBrio lee cada página y monta una capa de texto detrás de la imagen original. Los documentos más grandes tardan más porque cada página pasa individualmente." },
      { step: "Lleva el texto a Word", detail: "Abre el PDF devuelto, selecciona todo (Ctrl/Cmd+A) y pégalo en Word, o envía el PDF buscable a PDF a Word para un DOCX que mantiene el formato básico." },
    ],
    sections: [
      {
        heading: "Qué te devuelve el OCR de PDF",
        body: "Un PDF idéntico al que subiste, mismas imágenes de página, mismo diseño, pero con una capa de texto detrás de la imagen. Eso significa que puedes buscar con Ctrl+F, marcar y copiar pasajes, y seleccionar el documento entero para llevar el texto a un sitio editable. El aspecto de la página no cambia.",
      },
      {
        heading: "Llevar un documento escaneado a Word",
        body: [
          "Hay dos caminos, según cuánto formato necesites mantener.",
          "Para texto simple, haz el OCR del PDF aquí, ábrelo y copia el texto directamente a un documento en blanco en Word. Rápido, y funciona para cartas, notas y páginas de una sola columna.",
          "Para un documento que debe mantener títulos, párrafos y tablas simples, pasa el PDF con OCR por la herramienta PDF a Word después. Reconstruye el contenido reconocido como un DOCX editable.",
        ],
      },
      {
        heading: "Obtener la mejor precisión",
        body: "La calidad del OCR sigue a la calidad del escaneo. Páginas limpias, de alto contraste, escaneadas a 300 DPI o fotografiadas de frente y con buena luz se reconocen casi a la perfección. La precisión baja con la inclinación, las sombras, la baja resolución o las fuentes poco habituales. La escritura a mano no se reconoce de forma fiable.",
      },
      {
        heading: "Privacidad y límites",
        body: "Tu documento se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un PDF por vez, hasta 100 MB, gratis, sin cuenta.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre aplicar OCR a un PDF y llevar el texto escaneado a Word.",
    faq: [
      {
        question: "¿Cómo llevar un documento escaneado a Word?",
        answer:
          "Guarda el escaneo como PDF, pásalo por OCR de PDF para añadir una capa de texto y luego copia el texto directamente a Word, o envía el PDF con OCR a la herramienta PDF a Word para un DOCX editable que mantiene el formato básico.",
      },
      {
        question: "¿Se puede escanear un documento a texto editable gratis?",
        answer:
          "Sí. El OCR de PDF es gratis y sin cuenta. Reconoce el texto de cada página escaneada para que puedas seleccionar, copiar y reutilizarlo.",
      },
      {
        question: "¿El OCR cambia el aspecto de mi documento?",
        answer:
          "No. La imagen de la página original se conserva exactamente; el texto reconocido se añade como una capa invisible encima, así que visualmente nada cambia.",
      },
      {
        question: "¿Reconoce la escritura a mano?",
        answer: "No de forma fiable. El OCR está hecho para texto impreso y mecanografiado. Las notas a mano pueden reconocerse solo en parte.",
      },
      {
        question: "Mi PDF ya tiene texto seleccionable, ¿aún necesito OCR?",
        answer:
          "No. Si ya puedes marcar el texto con el cursor, el PDF tiene una capa de texto de verdad y puedes ir directamente a PDF a Word.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Comprimir PowerPoint online: reduce un .pptx para el correo",
    intro: [
      "Los archivos de PowerPoint crecen rápido: unas fotos del móvil, un par de capturas de pantalla, un gráfico exportado, y un .pptx pasa de 40 MB y no va por correo. La herramienta Comprimir PowerPoint de ConvertBrio abre la presentación, recodifica las imágenes de dentro con una calidad y resolución eficientes, y devuelve un .pptx más pequeño que sigue siendo totalmente editable.",
      "Es gratis, funciona sin registro y no añade marca de agua. El texto de las diapositivas, el diseño, las animaciones, los gráficos y las notas quedan intactos; solo se recodifican las fotos y capturas incrustadas.",
    ],
    howTo: [
      { step: "Guarda la presentación como .pptx", detail: "En PowerPoint, Archivo → Guardar como → Presentación de PowerPoint (.pptx). El formato .ppt antiguo no se acepta." },
      { step: "Súbela", detail: "Arrastra el .pptx a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Comprime", detail: "ConvertBrio encuentra cada imagen incrustada, reduce la escala de las más grandes de lo que una diapositiva muestra, y las recodifica. El texto y el contenido vectorial se dejan en paz." },
      { step: "Descarga el .pptx más pequeño", detail: "Ábrelo en PowerPoint para confirmar que las diapositivas siguen bien, luego envíalo por correo o súbelo." },
    ],
    sections: [
      {
        heading: "Por qué los archivos de PowerPoint se hacen tan grandes",
        body: "Los móviles modernos hacen fotos de 12 a 48 megapíxeles, varios megabytes cada una. Pega cuatro por las diapositivas y la presentación carga ~20 MB de imagen antes de una sola palabra de texto. PowerPoint guarda cada imagen a la resolución completa a la que se insertó, aunque la diapositiva solo muestre una versión pequeña.",
      },
      {
        heading: "Qué cambia la herramienta y qué no",
        body: "",
        list: [
          "Recodificado: imágenes JPEG y PNG incrustadas, con la escala reducida si son mayores de ~1800px en el lado largo",
          "Intacto: todo el texto, fuentes, diseño de las diapositivas, animaciones, transiciones y notas",
          "Intacto: gráficos, tablas, SmartArt y formas vectoriales",
          "El archivo sigue siendo un .pptx normal y editable; nada se aplana",
        ],
      },
      {
        heading: "¿Cuánto más pequeño va a quedar?",
        body: "Depende de cuántas imágenes tenga la presentación. Una presentación montada en torno a fotos y capturas de alta resolución suele bajar un 40–70%. Una casi toda de texto, con un logotipo y algunas imágenes pequeñas, no cambia mucho.",
      },
      {
        heading: "Para un archivo aún más pequeño: convierte a PDF",
        body: "Si la presentación está terminada y el destinatario no necesita editarla, convertirla a PDF y luego comprimir ese PDF suele generar el archivo más pequeño de todos, y se abre en cualquier dispositivo sin PowerPoint. El intercambio es que deja de ser una presentación editable.",
      },
      {
        heading: "Privacidad y límites",
        body: "Tu presentación se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un .pptx por vez, hasta 100 MB, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre reducir el tamaño de una presentación de PowerPoint.",
    faq: [
      {
        question: "¿Cómo comprimir un PowerPoint para enviarlo por correo?",
        answer:
          "Sube el .pptx a la herramienta Comprimir PowerPoint de ConvertBrio. Recodifica las imágenes incrustadas y devuelve una presentación más pequeña y aún editable: gratis, sin registro, sin marca de agua.",
      },
      {
        question: "¿El archivo comprimido sigue siendo editable?",
        answer:
          "Sí. La salida es un .pptx normal que abres y editas en PowerPoint. Solo se recodifican las imágenes incrustadas; texto, diseño, animaciones y notas no cambian.",
      },
      {
        question: "¿Comprimir va a bajar la calidad de mis diapositivas?",
        answer:
          "El texto y las formas vectoriales siguen perfectamente nítidos. Las fotos se recodifican con una reducción de calidad pequeña, casi siempre invisible; la diferencia solo aparece con mucho zoom sobre una imagen en una pantalla grande.",
      },
      {
        question: "Mi presentación casi no se redujo, ¿por qué?",
        answer:
          "Probablemente ya es ligera: una presentación casi toda de texto tiene pocos datos de imagen que eliminar.",
      },
      {
        question: "¿Funciona con archivos .ppt?",
        answer:
          "Solo el formato moderno .pptx. Abre un .ppt antiguo en PowerPoint y guárdalo como .pptx (Archivo → Guardar como), luego comprime.",
      },
    ],
  },

  "compress-word": {
    title: "Comprimir documento Word online: reduce un .docx para el correo",
    intro: [
      "Un documento Word que no va por correo casi siempre lleva imágenes a resolución completa. Una sola foto del móvil pegada en un informe puede pesar 5 MB por sí sola; unas cuantas y un .docx casi todo de texto pasa de 30 MB. La herramienta Comprimir Word de ConvertBrio abre el documento, recodifica las imágenes de dentro con una calidad y resolución eficientes, y devuelve un .docx más pequeño que sigue siendo totalmente editable.",
      "Es gratis, funciona sin registro y no añade marca de agua. Texto, títulos, tablas, estilos y diseño quedan intactos; solo se recodifican las fotos y capturas incrustadas.",
    ],
    howTo: [
      { step: "Guarda el documento como .docx", detail: "En Word, Archivo → Guardar como → Documento de Word (.docx). El formato .doc antiguo no se acepta." },
      { step: "Súbelo", detail: "Arrastra el .docx a la caja o examina. Un archivo por vez, hasta 100 MB." },
      { step: "Comprime", detail: "ConvertBrio encuentra cada imagen incrustada, reduce la escala de las más grandes de lo que una página muestra, y las recodifica. El texto y el contenido vectorial se dejan en paz." },
      { step: "Descarga el .docx más pequeño", detail: "Ábrelo en Word para confirmar que sigue bien, luego envíalo por correo o súbelo." },
    ],
    sections: [
      {
        heading: "Por qué los archivos de Word se hacen tan grandes",
        body: "Word incrusta cada imagen a la resolución a la que se añadió: una foto de 24 megapíxeles sigue teniendo 24 megapíxeles aunque la página la muestre con dos centímetros de ancho. El texto, en comparación, es diminuto. Así que comprimir un documento Word es, en realidad, recodificar y reducir la escala de las imágenes de dentro.",
      },
      {
        heading: "Qué cambia la herramienta y qué no",
        body: "",
        list: [
          "Recodificado: imágenes JPEG y PNG incrustadas, con la escala reducida si son mayores de ~1800px en el lado largo",
          "Intacto: todo el texto del cuerpo, títulos, estilos, listas y tablas",
          "Intacto: diseño de la página, encabezados y pies, notas al pie y campos",
          "El archivo sigue siendo un .docx normal y editable",
        ],
      },
      {
        heading: "Si aún es demasiado grande",
        body: [
          "Para un documento terminado que vas a enviar, Word a PDF seguido de Comprimir PDF suele generar el archivo más pequeño, y no se puede editar por accidente.",
          "Un documento grande a pesar de tener pocas imágenes puede llevar control de cambios e historial de revisiones (acepta o rechaza todos los cambios y desactiva el control), fuentes incrustadas (Archivo → Opciones → Guardar → desmarca «Incrustar fuentes en el archivo»), o contenido pegado como objetos de Excel o web.",
        ],
      },
      {
        heading: "Privacidad y límites",
        body: "Tu documento se cifra al subir. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Un .docx por vez, hasta 100 MB, gratis, sin cuenta, sin marca de agua.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre reducir el tamaño de un documento Word.",
    faq: [
      {
        question: "¿Cómo dejar un documento Word más pequeño para enviarlo por correo?",
        answer:
          "Sube el .docx a la herramienta Comprimir Word de ConvertBrio. Recodifica las imágenes incrustadas y devuelve un documento más pequeño y aún editable: gratis, sin registro, sin marca de agua. Para el archivo más pequeño, convierte a PDF y comprime ese PDF.",
      },
      {
        question: "¿El archivo comprimido sigue siendo editable?",
        answer:
          "Sí. La salida es un .docx normal que abres y editas en Word, Google Docs o LibreOffice. Solo se recodifican las imágenes incrustadas.",
      },
      {
        question: "¿Comprimir cambia mi texto o formato?",
        answer: "No. Solo se afectan las imágenes. Texto, títulos, tablas, estilos y diseño de la página no cambian.",
      },
      {
        question: "Mi documento es casi todo texto pero aún es grande, ¿por qué?",
        answer:
          "Comprueba el control de cambios e historial de revisiones, las fuentes incrustadas o el contenido pegado como objetos completos de Excel/web. Cada uno puede añadir varios megabytes independientemente de las imágenes.",
      },
      {
        question: "¿Funciona con archivos .doc antiguos?",
        answer: "Solo el formato moderno .docx. Abre el .doc en Word y guárdalo como .docx (Archivo → Guardar como), luego comprime.",
      },
    ],
  },
};
