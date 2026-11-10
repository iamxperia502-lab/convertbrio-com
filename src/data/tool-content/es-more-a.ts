import type { ToolContentEntry } from "../toolContent";

// Spanish (es) long-form tool content, slice A.

export const toolContentEsMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "Conversor de HEIC a JPG: abre las fotos del iPhone en cualquier parte",
    intro: [
      "Los iPhone y los iPad guardan las fotos en HEIC por defecto: un formato que comprime de maravilla, pero que muchos programas de uso diario no logran abrir, desde PC antiguos con Windows hasta ciertos formularios de carga y editores de fotos. El conversor de HEIC a JPG de ConvertBrio lo arregla al instante: subes la foto y te la devuelve como un JPG estándar que se abre en cualquier navegador, app o dispositivo, sin plugins ni paquetes de códecs.",
      "No tienes que cambiar ningún ajuste del teléfono ni instalar nada. La foto conserva su resolución original y mantiene la orientación, así que las fotos verticales no salen de lado. El resultado es un JPG normal que puedes enviar por correo, subir a un portal de empleo o de trámites, insertar en un documento o abrir en cualquier editor de fotos.",
    ],
    howTo: [
      {
        step: "Pasa el archivo HEIC a tu dispositivo",
        detail:
          "Envía la foto desde tu iPhone por AirDrop, correo o cable, o descárgala desde iCloud. El archivo terminará en .heic o .heif.",
      },
      {
        step: "Súbelo al conversor",
        detail: "Arrastra el archivo a la caja de carga o búscalo en tu equipo. Una foto por conversión, hasta 100 MB.",
      },
      {
        step: "Haz clic en Convertir",
        detail:
          "ConvertBrio decodifica la imagen HEIC y la vuelve a codificar como JPG a resolución completa, corrigiendo la rotación a partir de la etiqueta de orientación incrustada.",
      },
      {
        step: "Descarga el JPG",
        detail:
          "El archivo convertido se descarga automáticamente y se abre en cualquier navegador, visor, cliente de correo o formulario de carga.",
      },
    ],
    sections: [
      {
        heading: "Por qué los archivos HEIC dan problemas",
        body: [
          "HEIC (High Efficiency Image Container) guarda una foto con aproximadamente la mitad del tamaño de un JPG equivalente con la misma calidad, y por eso Apple lo adoptó como formato predeterminado de iOS en 2017. La contrapartida es el alcance: HEIC depende del códec HEVC, que muchos sitios web, versiones antiguas de Windows, dispositivos Android y aplicaciones de terceros no pueden decodificar o gestionan de forma irregular.",
          "Si alguna vez subiste una foto del iPhone a un formulario y te salió el error «tipo de archivo no admitido», viste una miniatura en blanco o un compañero te dijo que la imagen no se abre, casi seguro la causa es HEIC. Al convertirla a JPG, esa dependencia desaparece por completo.",
        ],
      },
      {
        heading: "HEIC y JPG de un vistazo",
        body: "Los dos formatos son con pérdida, pero se diseñaron con veinticinco años de diferencia y no admiten lo mismo.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Tamaño del archivo", "~50% más pequeño con la misma calidad", "Más grande, pero lo entiende todo el mundo"],
            ["Compatibilidad", "Solo dispositivos Apple y navegadores/sistemas recientes", "Todos los dispositivos, navegadores, apps y formularios"],
            ["Transparencia", "Admitida", "No admitida"],
            ["Varias imágenes / datos de profundidad", "Admitido (Live Photos, profundidad del modo retrato)", "Solo una imagen plana"],
            ["Ideal para", "Almacenar en dispositivos Apple", "Compartir, subir y editar en cualquier parte"],
          ],
        },
      },
      {
        heading: "¿Se pierde calidad al convertir?",
        body: "Hay una pasada de recompresión, porque HEIC y JPG usan métodos matemáticos distintos, pero con la calidad JPG predeterminada de ConvertBrio la diferencia no se nota a tamaño normal de visualización ni en una impresión. La resolución de la foto (los megapíxeles) no cambia. Si piensas editar mucho la foto después, conviértela a PNG con el Conversor de Imágenes para no sumar una segunda pasada con pérdida más adelante.",
      },
      {
        heading: "Convertir varias fotos del iPhone",
        body: "Esta herramienta convierte un archivo HEIC por carga. Para un lote, lo más rápido es configurar la cámara del iPhone para que dispare en JPG a partir de ahora (Ajustes → Cámara → Formatos → Más compatible) y usar este conversor con las fotos HEIC que ya tienes en la biblioteca. Para reunir varias fotos del iPhone en un solo archivo después de convertirlas, Imagen a PDF acepta HEIC directamente y combina varias imágenes en un único PDF.",
      },
      {
        heading: "Privacidad",
        body: "La foto viaja cifrada. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir fotos HEIC del iPhone a JPG.",
    faq: [
      {
        question: "¿Por qué no se abre la foto de mi iPhone en el ordenador?",
        answer:
          "Probablemente está guardada en HEIC, el formato de foto predeterminado de Apple desde iOS 11. Muchos PC con Windows, teléfonos Android, aplicaciones antiguas y sitios web no admiten HEIC. Si la conviertes a JPG con ConvertBrio, se podrá abrir en todas partes.",
      },
      {
        question: "¿Se pierde calidad al convertir HEIC a JPG?",
        answer:
          "Hay una pequeña recompresión al codificar de nuevo como JPG, porque HEIC y JPG usan métodos de compresión distintos, pero con la calidad predeterminada de ConvertBrio no se aprecia a simple vista en una visualización normal, y la resolución no cambia.",
      },
      {
        question: "¿Mi foto saldrá girada o de lado?",
        answer:
          "No. ConvertBrio lee la etiqueta de orientación del archivo HEIC y aplica la rotación correcta al JPG, de modo que las fotos verticales y horizontales salen en la posición adecuada.",
      },
      {
        question: "¿Puedo convertir HEIC a PNG en lugar de JPG?",
        answer:
          "Sí. Usa el Conversor de Imágenes y elige PNG como formato de salida si necesitas un archivo sin pérdida, o si vas a editar la imagen varias veces y quieres evitar una segunda compresión con pérdida.",
      },
      {
        question: "¿Cómo evito que mi iPhone tome fotos en HEIC?",
        answer:
          "En tu iPhone, abre Ajustes → Cámara → Formatos y elige «Más compatible». Las fotos nuevas se guardarán como JPG. Las que ya están en tu biblioteca siguen siendo HEIC y aún hay que convertirlas.",
      },
      {
        question: "¿HEIF es lo mismo que HEIC?",
        answer:
          "En la práctica, sí. HEIF es el estándar del contenedor; HEIC es la implementación de Apple con compresión HEVC. Esta herramienta acepta archivos .heic y .heif.",
      },
    ],
  },

  "jpg-to-png": {
    title: "Conversor de JPG a PNG: transparencia y detalle sin pérdida",
    intro:
      "JPG es ideal para fotos pequeñas y fáciles de compartir, pero no admite transparencia y pierde un poco de calidad cada vez que se vuelve a guardar. El conversor de JPG a PNG de ConvertBrio convierte tu JPG en un PNG sin pérdida en segundos, que es el formato que necesitas antes de seguir editando una imagen, colocarla sobre un fondo de color o usarla como logotipo o icono.",
    sections: [
      {
        heading: "Cuándo convertir de JPG a PNG",
        body: "Convierte a PNG cuando necesites un canal alfa (transparencia), por ejemplo para recortar un logotipo de su fondo, o cuando vayas a editar una imagen varias veces y quieras evitar la pérdida de generación que provoca volver a guardar JPG. PNG también es la opción más segura para capturas de pantalla, diagramas y cualquier cosa con texto nítido o bordes definidos, porque la compresión de JPG puede introducir desenfoque y artefactos alrededor de los detalles finos.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu JPG y ConvertBrio lo decodifica y lo vuelve a codificar como PNG, conservando cada píxel exactamente. Como JPG no guarda transparencia desde el principio, el PNG resultante tendrá un fondo opaco a menos que lo quites por separado: la conversión se ocupa del formato y la calidad, no de quitar el fondo automáticamente.",
      },
      {
        heading: "Tamaño de archivo esperado",
        body: "Los archivos PNG suelen ser más grandes que el JPG del que proceden, porque PNG no descarta datos como lo hace la compresión con pérdida de JPG. En fotos con mucho detalle o textura, calcula que el PNG pese varias veces más que el JPG original: es el intercambio normal a cambio de calidad sin pérdida.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes JPG a PNG.",
    faq: [
      {
        question: "¿JPG a PNG añade transparencia automáticamente?",
        answer:
          "No. Los archivos JPG no guardan transparencia, así que al convertir a PNG obtienes una imagen opaca con el mismo aspecto. PNG simplemente te da un formato sin pérdida sobre el que trabajar, por ejemplo antes de editar o de añadir transparencia en un editor de imágenes.",
      },
      {
        question: "¿Por qué mi PNG pesa mucho más que el JPG original?",
        answer:
          "PNG usa compresión sin pérdida, que conserva cada píxel en lugar de descartar detalle como hace JPG. Esa exactitud se paga con un archivo más grande: es lo esperable y no indica ningún problema.",
      },
      {
        question: "¿PNG es mejor que JPG?",
        answer:
          "Ninguno es mejor en todos los casos: PNG es lo ideal para gráficos, logotipos y todo lo que necesite transparencia o detalle sin pérdida, mientras que JPG va mejor para fotos en las que importa más un archivo pequeño que la exactitud al píxel.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "Conversor de JPG a WEBP: archivos más pequeños para sitios web más rápidos",
    intro:
      "Google creó WEBP específicamente para que las páginas web carguen más rápido: suele generar archivos entre un 25 y un 35% más pequeños que un JPG equivalente con la misma calidad visual. El conversor de JPG a WEBP de ConvertBrio recodifica tu foto en segundos, una mejora rápida para quien optimiza imágenes de un sitio web, un boletín por correo o una app.",
    sections: [
      {
        heading: "Por qué convertir a WEBP",
        body: "Si la velocidad de carga importa, ya sea por SEO, por los usuarios móviles o simplemente para tener un sitio más ágil, WEBP es una de las mejoras más sencillas. Admite el mismo rango de calidad que JPG con archivos claramente más pequeños, y los navegadores modernos (Chrome, Firefox, Safari, Edge) lo muestran de forma nativa, así que hoy no hay inconveniente de compatibilidad para la mayoría del público.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu JPG y ConvertBrio lo convierte a WEBP automáticamente, manteniendo la misma resolución y aplicando el algoritmo de compresión de WEBP en lugar del de JPG. La descarga está lista en segundos y puedes colocarla directamente en la carpeta de imágenes de tu sitio o en tu sistema de gestión de contenidos.",
      },
      {
        heading: "Cuándo JPG puede seguir siendo mejor opción",
        body: "Si tu imagen tiene que funcionar en programas o contextos que no admiten WEBP, como algunos clientes de correo antiguos, ciertas herramientas de diseño o flujos de impresión, conserva también una versión en JPG. Para el uso web en general, en cambio, WEBP es la opción predeterminada más eficiente.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes JPG a WEBP.",
    faq: [
      {
        question: "¿Cuánto más pequeño es WEBP que JPG?",
        answer:
          "Los archivos WEBP suelen ser entre un 25 y un 35% más pequeños que un JPG visualmente equivalente, y por eso se ha convertido en una opción habitual para las imágenes de sitios web donde importa la velocidad de carga.",
      },
      {
        question: "¿Todos los navegadores admiten WEBP?",
        answer:
          "Sí. Todos los navegadores modernos importantes, como Chrome, Firefox, Safari y Edge, muestran WEBP de forma nativa. Hoy es seguro usarlo para publicar contenido web en general.",
      },
      {
        question: "¿Mi imagen se verá distinta después de convertirla a WEBP?",
        answer:
          "Con los ajustes predeterminados de ConvertBrio, la diferencia visual es insignificante en la mayoría de las fotos. La compresión de WEBP es más eficiente que la de JPG, así que puede igualar la misma calidad con un archivo más pequeño.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "Conversor de JPG a AVIF: compresión de imágenes de nueva generación",
    intro:
      "AVIF es el formato de imagen más eficiente de los que ya cuentan con amplio soporte, y a menudo reduce un JPG un 50% o más con la misma calidad visual. El conversor de JPG a AVIF de ConvertBrio se encarga de la codificación por ti, y da a quienes tienen un sitio web o desarrollan una forma fácil de adoptar el formato sin herramientas de línea de comandos ni flujos de compilación.",
    sections: [
      {
        heading: "Qué hace diferente a AVIF",
        body: "AVIF se basa en la tecnología de compresión de imágenes del códec de vídeo AV1, mucho más avanzada que la compresión que usa JPG. En la práctica, esto significa que los archivos AVIF pueden ser muchísimo más pequeños que un JPG y verse igual de bien, algo valioso para cualquier sitio que quiera reducir el peso de sus páginas y mejorar los tiempos de carga.",
      },
      {
        heading: "Cómo convertir de JPG a AVIF",
        body: "Subes tu archivo JPG y ConvertBrio genera una versión AVIF con la misma resolución. No tienes que instalar ningún programa, y el resultado se descarga automáticamente cuando termina el procesamiento. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
      {
        heading: "Compatibilidad con navegadores y programas",
        body: "Todos los navegadores modernos importantes pueden mostrar AVIF, pero algunos programas antiguos, editores de imágenes y redes sociales todavía no lo aceptan para subir archivos. Si publicas en tu propio sitio web, AVIF suele ser seguro; si subes la imagen a un lugar de compatibilidad desconocida, ten a mano un JPG o WEBP de respaldo.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes JPG a AVIF.",
    faq: [
      {
        question: "¿AVIF es mejor que WEBP?",
        answer:
          "En general, AVIF comprime con más eficiencia que WEBP y suele producir archivos más pequeños con la misma calidad. WEBP tiene un soporte algo más amplio en entornos antiguos, pero para los navegadores modernos AVIF suele ser la mejor opción en cuanto a tamaño de archivo.",
      },
      {
        question: "¿Cualquier sitio web puede usar imágenes AVIF?",
        answer:
          "Todos los navegadores modernos importantes pueden mostrar AVIF, pero algunos sistemas de gestión de contenidos, redes publicitarias y herramientas antiguas aún no aceptan cargas en AVIF. Si tienes problemas al subir archivos, revisa los requisitos de tu plataforma.",
      },
      {
        question: "¿Cuánto más pequeño será mi archivo?",
        answer:
          "Los resultados varían según la imagen, pero AVIF suele reducir el tamaño un 50% o más frente a un JPG de la misma calidad, lo que lo convierte en uno de los formatos más eficaces para reducir el peso de las páginas.",
      },
    ],
  },

  "png-to-jpg": {
    title: "Conversor de PNG a JPG: reduce imágenes para la web y el correo",
    intro:
      "Los archivos PNG conservan cada píxel, algo estupendo para gráficos pero a menudo excesivo para fotos: el resultado son archivos mucho más grandes de lo necesario. El conversor de PNG a JPG de ConvertBrio comprime tu imagen en un JPG más pequeño y fácil de compartir, ideal para archivos adjuntos de correo, páginas web y cualquier lugar donde importen los límites de tamaño de carga.",
    sections: [
      {
        heading: "Cuándo convertir de PNG a JPG",
        body: "Si tu PNG es una foto (y no un gráfico con transparencia o texto de bordes definidos), convertirlo a JPG casi siempre reduce mucho el archivo sin pérdida de calidad visible. Es especialmente útil para adjuntos de correo con límite de tamaño, páginas web donde importa la velocidad de carga o cualquier formulario de carga que rechace archivos grandes.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes el PNG y ConvertBrio lo recodifica como JPG con la calidad predeterminada, que equilibra un archivo pequeño con la fidelidad visual. Como JPG no admite transparencia, las zonas transparentes del PNG original se rellenarán con un fondo sólido en el resultado.",
      },
      {
        heading: "Qué pierdes (y qué no)",
        body: "Al convertir a JPG se descarta la transparencia y se aplica compresión con pérdida, así que no es la opción adecuada para logotipos o gráficos que necesitan un fondo transparente. En fotos normales, la compresión apenas se nota y la reducción de tamaño suele ser considerable, a menudo entre un 50 y un 80% menos que el PNG original.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes PNG a JPG.",
    faq: [
      {
        question: "¿Por qué mi archivo PNG pesa tanto?",
        answer:
          "PNG usa compresión sin pérdida, es decir, guarda cada píxel exactamente en lugar de descartar detalle como hace JPG. Eso lo hace ideal para gráficos, pero a menudo mucho más grande de lo necesario para fotos normales.",
      },
      {
        question: "¿Qué pasa con las zonas transparentes al convertir a JPG?",
        answer:
          "JPG no admite transparencia, así que las partes transparentes de tu PNG se rellenan con un color sólido (normalmente blanco) en el archivo convertido.",
      },
      {
        question: "¿Cuánto más pequeño será el JPG?",
        answer:
          "Depende de la imagen, pero las fotos suelen reducirse entre un 50 y un 80% al pasar de PNG a JPG con la calidad predeterminada, porque la compresión de JPG está pensada específicamente para contenido fotográfico.",
      },
    ],
  },

  "png-to-webp": {
    title: "Conversor de PNG a WEBP: compresión amable con la calidad para la web",
    intro:
      "WEBP admite compresión con y sin pérdida, así que puede sustituir a PNG en gráficos que necesitan transparencia y aun así reducir bastante el tamaño del archivo. El conversor de PNG a WEBP de ConvertBrio recodifica tu imagen en segundos y mantiene intacta la transparencia donde el PNG original la tenía.",
    sections: [
      {
        heading: "Por qué WEBP supera a PNG en tamaño de archivo",
        body: "Incluso en modo sin pérdida, WEBP suele comprimir con más eficiencia que PNG y genera archivos más pequeños a partir de la misma imagen. Para gráficos, iconos y capturas de pantalla destinados a un sitio web, eso se traduce directamente en páginas que cargan más rápido sin renunciar a la transparencia ni al detalle exacto.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu PNG y ConvertBrio lo convierte a WEBP automáticamente. Las zonas transparentes del archivo original se conservan en el resultado WEBP, de modo que los logotipos e iconos con canal alfa se convierten sin necesidad de retocarlos a mano.",
      },
      {
        heading: "Dónde usar el resultado",
        body: "Todos los navegadores modernos importantes admiten WEBP de forma nativa, por lo que es una opción segura para imágenes de sitios web, favicons y gráficos de interfaz. Si necesitas el archivo para imprimir, para programas antiguos o para una plataforma cuyo soporte de WEBP no está claro, guarda el PNG original como respaldo.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes PNG a WEBP.",
    faq: [
      {
        question: "¿Al convertir PNG a WEBP se conserva la transparencia?",
        answer:
          "Sí. WEBP admite un canal alfa igual que PNG, así que cualquier fondo transparente de tu archivo original pasa a la imagen WEBP convertida.",
      },
      {
        question: "¿WEBP siempre es más pequeño que PNG?",
        answer:
          "Normalmente sí. Incluso en modo sin pérdida, la compresión de WEBP suele ser más eficiente que la de PNG, así que la mayoría de las imágenes se reducen de forma notable tras la conversión.",
      },
      {
        question: "¿Puedo volver a convertir el WEBP a PNG más adelante?",
        answer:
          "Sí. Usa el conversor de WEBP a PNG de ConvertBrio cuando necesites recuperar el archivo en formato PNG para programas que no admiten WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "Conversor de PNG a AVIF: compresión máxima para gráficos",
    intro:
      "AVIF puede comprimir gráficos y fotos mucho más que PNG sin dejar de admitir transparencia, lo que lo convierte en uno de los formatos que más espacio ahorran hoy para imágenes web. El conversor de PNG a AVIF de ConvertBrio hace la conversión al instante, sin software de codificación.",
    sections: [
      {
        heading: "Por qué elegir AVIF en lugar de PNG",
        body: "La compresión sin pérdida de PNG deja los archivos más grandes de lo necesario en muchos casos. AVIF, basado en la tecnología de compresión de los códecs de vídeo modernos, puede reducir la misma imagen de forma drástica, a veces un 80% o más, conservando la transparencia y la calidad visual, una gran ventaja para el rendimiento del sitio.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu archivo PNG y ConvertBrio genera una versión AVIF que conserva la transparencia y la resolución. La conversión termina en segundos para imágenes de tamaño habitual.",
      },
      {
        heading: "Notas de compatibilidad",
        body: "AVIF se muestra correctamente en todas las versiones actuales de Chrome, Firefox, Safari y Edge. Algunas herramientas antiguas, clientes de correo y programas de diseño quizá todavía no lo admitan, así que conviene más para uso directo en un sitio web que para archivos que vayas a entregar a sistemas de terceros con compatibilidad desconocida.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes PNG a AVIF.",
    faq: [
      {
        question: "¿AVIF admite fondos transparentes?",
        answer:
          "Sí. AVIF admite un canal alfa, por lo que la transparencia de tu PNG original pasa correctamente al archivo AVIF convertido.",
      },
      {
        question: "¿Cuánto más pequeño será mi archivo AVIF?",
        answer:
          "Los resultados varían según el contenido de la imagen, pero AVIF suele reducir los archivos PNG un 70-80% o más, y es uno de los formatos más eficientes disponibles hoy para la web.",
      },
      {
        question: "¿Debo usar AVIF o WEBP en mi sitio web?",
        answer:
          "AVIF suele comprimir mejor, así que conviene usarlo donde tu plataforma lo admita. WEBP sigue siendo una alternativa sólida y algo más compatible si te encuentras con restricciones de carga con AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "Conversor de WEBP a JPG: abre imágenes WEBP en cualquier parte",
    intro:
      "Las imágenes WEBP descargadas de sitios web no siempre se abren bien en visores de fotos antiguos, en algunas herramientas de diseño o en aplicaciones que esperan un formato estándar. El conversor de WEBP a JPG de ConvertBrio convierte cualquier archivo WEBP en un JPG que se abre en todas partes, sin adivinar compatibilidades.",
    sections: [
      {
        heading: "Por qué a veces los archivos WEBP no se abren",
        body: "WEBP es un formato relativamente moderno y, aunque los navegadores lo admiten de forma universal, algunos visores de fotos de escritorio, versiones antiguas de editores de imágenes y ciertas aplicaciones aún no lo reconocen. Si guardaste una imagen de un sitio web y no se abre donde esperabas, convertirla a JPG es la solución más rápida.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu archivo WEBP y ConvertBrio lo decodifica y lo vuelve a codificar como JPG. El resultado se abre en cualquier navegador, visor de fotos y herramienta de edición, por lo que es el formato más seguro para compartir con todo el mundo o adjuntar a un correo.",
      },
      {
        heading: "Qué esperar",
        body: "Si el WEBP original tenía un fondo transparente, esa transparencia se rellenará con un color sólido en el JPG, ya que JPG no admite canales alfa. En fotos normales e imágenes web sin transparencia, la conversión es visualmente imperceptible.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes WEBP a JPG.",
    faq: [
      {
        question: "¿Por qué no puedo abrir un archivo WEBP en mi ordenador?",
        answer:
          "Algunos visores de fotos, editores de imágenes y versiones de sistema operativo antiguos no admiten WEBP de forma nativa, aunque todos los navegadores modernos sí. Al convertirlo a JPG, el problema se resuelve de inmediato.",
      },
      {
        question: "¿Perderé la transparencia al convertir WEBP a JPG?",
        answer:
          "Sí. JPG no admite transparencia, así que las zonas transparentes del WEBP original aparecerán como un color sólido en el archivo convertido. Usa WEBP a PNG si necesitas conservar la transparencia.",
      },
      {
        question: "¿Es seguro compartir o subir el JPG convertido?",
        answer:
          "Sí. JPG es el formato de imagen con mayor compatibilidad universal, así que el archivo convertido se abrirá correctamente en prácticamente cualquier app, dispositivo o formulario de carga.",
      },
    ],
  },

  "webp-to-png": {
    title: "Conversor de WEBP a PNG: conserva la transparencia y la calidad",
    intro:
      "Cuando una imagen WEBP tiene fondo transparente, como un logotipo, un icono o un gráfico exportado, convertirla a JPG no es una opción. El conversor de WEBP a PNG de ConvertBrio conserva esa transparencia y genera un archivo sin pérdida que funciona en herramientas de diseño, programas antiguos y en cualquier lugar donde se espere PNG.",
    sections: [
      {
        heading: "Cuándo elegir PNG en lugar de JPG",
        body: "Si tu archivo WEBP tiene píxeles transparentes o semitransparentes, convertir a PNG es la decisión correcta: de los dos, es el único formato común que mantiene intacto el canal alfa. PNG también es más seguro si vas a seguir editando la imagen, porque no introduce artefactos de compresión.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes el archivo WEBP y ConvertBrio lo convierte en un PNG sin pérdida, manteniendo la transparencia y la resolución exactamente como estaban. Funciona tanto si el WEBP era con pérdida como sin ella: el PNG resultante siempre conserva todo el detalle de la imagen decodificada.",
      },
      {
        heading: "Qué tamaño de archivo esperar",
        body: "Los archivos PNG suelen ser más grandes que los WEBP, porque la compresión de WEBP es más eficiente. En gráficos e iconos la diferencia suele ser pequeña; en fotos grandes el PNG puede pesar bastante más, un intercambio razonable cuando lo prioritario es la transparencia o la calidad sin pérdida.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes WEBP a PNG.",
    faq: [
      {
        question: "¿WEBP a PNG conserva el fondo transparente?",
        answer:
          "Sí. Si tu archivo WEBP tiene transparencia, ConvertBrio la conserva exactamente en el PNG convertido, ya que ambos formatos admiten canales alfa.",
      },
      {
        question: "¿Debo usar PNG o JPG para mi archivo WEBP?",
        answer:
          "Elige PNG si la imagen tiene transparencia o si piensas seguir editándola. Elige JPG si es una foto sencilla y quieres el archivo más pequeño posible para compartir.",
      },
      {
        question: "¿Cambiará la calidad de la imagen?",
        answer:
          "No. PNG es un formato sin pérdida, así que al convertir de WEBP a PNG no se descarta más detalle del que ya tenía el archivo WEBP original.",
      },
    ],
  },

  "webp-to-avif": {
    title: "Conversor de WEBP a AVIF: exprime aún más la compresión",
    intro:
      "AVIF suele superar a WEBP en eficiencia de compresión, así que recodificar una imagen WEBP existente como AVIF puede reducirla todavía más sin una pérdida de calidad visible. El conversor de WEBP a AVIF de ConvertBrio hace ese cambio en un solo paso.",
    sections: [
      {
        heading: "Por qué recodificar WEBP como AVIF",
        body: "Si ya usas WEBP para mejorar el rendimiento web, vale la pena probar AVIF como siguiente paso: normalmente comprime mejor la misma imagen de origen, sobre todo en fotos y gráficos complejos. La diferencia se nota más en imágenes grandes y con mucho detalle.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu archivo WEBP y ConvertBrio lo decodifica y lo vuelve a codificar como AVIF, conservando la transparencia si la hay. El resultado se descarga automáticamente y puedes usarlo en cualquier lugar donde tu plataforma acepte imágenes AVIF.",
      },
      {
        heading: "Qué comprobar antes de cambiar",
        body: "Todos los navegadores importantes actuales admiten AVIF, pero antes de reemplazar WEBP en todo el sitio, confirma que tu sistema de gestión de contenidos y las herramientas de terceros de tu flujo de trabajo aceptan cargas en AVIF. Para proyectos personales y sitios web modernos, el cambio suele ser transparente.",
      },
      {
        heading: "Límites y privacidad",
        body: "Las cargas están limitadas a 100 MB. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes WEBP a AVIF.",
    faq: [
      {
        question: "¿Vale la pena convertir WEBP a AVIF?",
        answer:
          "Si tu objetivo es el menor tamaño de archivo posible y tu plataforma admite AVIF, sí: AVIF suele comprimir mejor que WEBP la misma imagen, sobre todo las fotos.",
      },
      {
        question: "¿La conversión conserva la transparencia?",
        answer:
          "Sí. AVIF admite transparencia igual que WEBP, así que cualquier canal alfa de tu archivo original se conserva en la imagen convertida.",
      },
      {
        question: "¿Puedo volver a WEBP si lo necesito?",
        answer:
          "Sí. Usa el conversor de imágenes de ConvertBrio para pasar de AVIF a WEBP o a cualquier otro formato admitido en cualquier momento.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "Conversor de AVIF a JPG: haz que las imágenes AVIF se abran en cualquier parte",
    intro:
      "La compresión eficiente de AVIF lo hace excelente para sitios web modernos, pero muchas aplicaciones, dispositivos antiguos y herramientas de fotos todavía no pueden abrirlo. El conversor de AVIF a JPG de ConvertBrio decodifica la imagen y la guarda de nuevo como un JPG que funciona en prácticamente cualquier programa que te encuentres.",
    sections: [
      {
        heading: "Por qué convertir de AVIF a JPG",
        body: "Si un archivo AVIF no se abre en tu visor de fotos, en tu programa de edición o en el formulario de carga de un sitio web, JPG es el recurso más seguro: lo admite prácticamente todo, desde programas de hace décadas hasta los dispositivos más nuevos. Es el motivo más común por el que la gente deja AVIF.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes el archivo AVIF y ConvertBrio lo decodifica y luego vuelve a codificar la imagen como JPG a resolución completa. La descarga está lista en segundos y se abre de inmediato en cualquier navegador, visor o aplicación de edición.",
      },
      {
        heading: "Qué cambia en la conversión",
        body: "JPG no admite transparencia, así que si el archivo AVIF tenía un fondo transparente, se rellenará con un color sólido en el resultado. En fotos normales sin transparencia, el resultado visual es prácticamente idéntico al original.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes AVIF a JPG.",
    faq: [
      {
        question: "¿Por qué no se abre mi archivo AVIF?",
        answer:
          "AVIF es un formato más reciente y, aunque los navegadores modernos lo admiten, muchas aplicaciones antiguas, visores de fotos y algunas herramientas de edición todavía no. Al convertirlo a JPG, el archivo se puede abrir en todas partes de inmediato.",
      },
      {
        question: "¿Se pierde calidad de imagen al convertir a JPG?",
        answer:
          "Hay una pequeña recompresión, porque AVIF y JPG usan algoritmos distintos, pero con la calidad predeterminada de ConvertBrio no se nota en el uso normal.",
      },
      {
        question: "¿Puedo convertir AVIF a PNG en su lugar?",
        answer:
          "Sí. Usa el conversor de AVIF a PNG si necesitas un archivo sin pérdida o si debes conservar la transparencia, que JPG no puede guardar.",
      },
    ],
  },

  "avif-to-png": {
    title: "Conversor de AVIF a PNG: salida sin pérdida y con la transparencia intacta",
    intro:
      "Cuando una imagen AVIF tiene fondo transparente o necesitas exactitud al píxel para seguir editándola, PNG es el formato de destino adecuado. El conversor de AVIF a PNG de ConvertBrio decodifica tu archivo y genera un PNG sin pérdida en segundos, conservando por completo cualquier transparencia.",
    sections: [
      {
        heading: "Cuándo PNG es la mejor opción",
        body: "Elige PNG en lugar de JPG siempre que el AVIF de origen tenga transparencia, texto nítido o detalles finos que no quieras que la compresión con pérdida suavice. También es el formato intermedio más seguro si vas a abrir la imagen en una herramienta de diseño para seguir editándola.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu archivo AVIF y ConvertBrio lo decodifica y lo vuelve a codificar como un PNG sin pérdida, conservando la resolución, el color y la transparencia exactamente como aparecían en el archivo original.",
      },
      {
        heading: "Tamaño de archivo esperado",
        body: "Como PNG no comprime tanto como AVIF, el archivo convertido suele ser bastante más grande que el original, a menudo varias veces. Es un intercambio previsible, y a cambio obtienes un resultado sin pérdida y ampliamente compatible.",
      },
      {
        heading: "Límites y privacidad",
        body: "Las cargas están limitadas a 100 MB. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes AVIF a PNG.",
    faq: [
      {
        question: "¿AVIF a PNG conserva la transparencia?",
        answer:
          "Sí. Si tu archivo AVIF tiene un canal alfa, ConvertBrio traslada esa transparencia exactamente al PNG convertido.",
      },
      {
        question: "¿Por qué mi archivo PNG es mucho más grande que el AVIF?",
        answer:
          "PNG es un formato sin pérdida y no comprime con tanta eficiencia como AVIF, así que es normal y esperable que el tamaño aumente tras la conversión.",
      },
      {
        question: "¿PNG es un buen formato para seguir editando imágenes?",
        answer:
          "Sí. Como PNG no aplica compresión con pérdida, es un formato intermedio más seguro que JPG o AVIF cuando piensas abrir un archivo en un editor y volver a guardarlo varias veces.",
      },
    ],
  },

  "avif-to-webp": {
    title: "Conversor de AVIF a WEBP: más compatibilidad sin perder eficiencia",
    intro:
      "WEBP tiene un soporte algo más amplio que AVIF en herramientas y plataformas antiguas y sigue ofreciendo una compresión potente, lo que lo hace un punto intermedio práctico cuando AVIF no está del todo admitido. El conversor de AVIF a WEBP de ConvertBrio hace el cambio al instante.",
    sections: [
      {
        heading: "Por qué convertir de AVIF a WEBP",
        body: "Si una plataforma, un plugin o un programa rechaza las cargas en AVIF pero acepta WEBP, convertir es la solución más rápida: conservas la mayor parte de la ventaja de eficiencia de AVIF y ganas compatibilidad. Es habitual cuando se trabaja con sistemas de gestión de contenidos antiguos o integraciones de terceros.",
      },
      {
        heading: "Cómo funciona la conversión",
        body: "Subes tu archivo AVIF y ConvertBrio lo decodifica y lo vuelve a codificar como WEBP, conservando la transparencia y la resolución. El proceso termina en segundos y el archivo se descarga automáticamente.",
      },
      {
        heading: "Qué se cede en compresión",
        body: "Los archivos WEBP suelen ser algo más grandes que el AVIF equivalente con la misma calidad visual, porque la compresión de AVIF es en general más avanzada. La diferencia suele ser lo bastante pequeña como para que la ganancia de compatibilidad valga la pena en la mayoría de los casos.",
      },
      {
        heading: "Límites y privacidad",
        body: "Las cargas están limitadas a 100 MB. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo convertir imágenes AVIF a WEBP.",
    faq: [
      {
        question: "¿Por qué convertir AVIF a WEBP en lugar de quedarme con AVIF?",
        answer:
          "Algunas plataformas y herramientas antiguas aceptan WEBP pero no AVIF. Convertir te da más compatibilidad y conserva la mayor parte de la ventaja de tamaño con la que partía AVIF.",
      },
      {
        question: "¿Aumentará el tamaño del archivo después de convertir?",
        answer:
          "Ligeramente, en la mayoría de los casos. La compresión de WEBP es algo menos eficiente que la de AVIF, así que espera un aumento moderado de tamaño y no uno drástico.",
      },
      {
        question: "¿La transparencia pasa de AVIF a WEBP?",
        answer:
          "Sí. Ambos formatos admiten canales alfa, así que cualquier transparencia de tu archivo AVIF original se conserva en el WEBP convertido.",
      },
    ],
  },

  "resize-image": {
    title: "¿Cómo reduzco el tamaño en píxeles de una foto?",
    intro: [
      "Escribe el ancho y el alto máximos que quieres, en píxeles, y ConvertBrio reduce la foto para que quepa dentro de ellos. El tamaño en píxeles es la cantidad de píxeles de ancho y de alto de una imagen (por ejemplo, 4000 × 3000). Al reducirlo, la imagen se ve más pequeña en pantalla y también pesa menos, sin necesidad de software de diseño.",
      "La herramienta mantiene las proporciones de la foto, así que no puede estirar ni aplastar la imagen, y solo hace las imágenes más pequeñas: no agranda una foto por encima de su tamaño original. Si necesitas un ancho y un alto exactos que no coinciden con la forma de la foto, o un tamaño máximo en KB, usa Redimensionar Foto y Firma. Para ampliar una foto pequeña, usa el Ampliador con IA.",
    ],
    howTo: [
      {
        step: "Sube tu imagen",
        detail: "JPG, PNG, WEBP, HEIC, AVIF o GIF, hasta 100 MB.",
      },
      {
        step: "Escribe un ancho, un alto o ambos",
        detail:
          "Indica el tamaño en píxeles que quieres. Puedes rellenar solo uno: deja el otro en blanco y se calcula a partir de las proporciones de la foto. Si rellenas ambos, la foto se reduce para que quepa dentro de esa caja.",
      },
      {
        step: "Redimensiona y descarga",
        detail: "ConvertBrio reduce la imagen y el archivo se descarga automáticamente.",
      },
      {
        step: "Revisa el resultado",
        detail:
          "Abre el archivo descargado y mira sus dimensiones (clic derecho > Propiedades en Windows, Obtener información en Mac). Amplía al 100% para comprobar que sigue viéndose nítido.",
      },
    ],
    sections: [
      {
        heading: "Dimensiones habituales para las que se redimensiona",
        body: "Si no estás seguro de qué tamaño necesitas, estas son las especificaciones por las que más gente viene aquí.",
        table: {
          headers: ["Uso", "Tamaño típico (px)"],
          rows: [
            ["Publicación de Instagram (cuadrada)", "1080 × 1080"],
            ["Historia / reel de Instagram", "1080 × 1920"],
            ["Imagen compartida en Facebook / LinkedIn", "1200 × 630"],
            ["Miniatura de YouTube", "1280 × 720"],
            ["Foto de perfil de LinkedIn", "400 × 400 (mín.)"],
            ["Foto de pasaporte (2 × 2 pulg. a 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Ejemplo: de 4000 × 3000 a 1200 × 900",
        body: "Una foto típica de teléfono mide 4000 × 3000 píxeles (proporción 4:3). Para dejarla en 1200 píxeles de ancho, escribe 1200 en el ancho y deja el alto en blanco: el alto se calcula como 900 y el resultado es 1200 × 900. Si escribes 1200 × 1200, la foto se reduce para que quepa en ese cuadrado, lo que da otra vez 1200 × 900, no un cuadrado estirado. El archivo nuevo tiene 9 veces menos píxeles, así que ocupa mucho menos para guardar y enviar.",
      },
      {
        heading: "¿Cómo redimensiono una imagen sin deformarla?",
        body: [
          "La deformación ocurre cuando una herramienta fuerza la foto a entrar en una caja de otra forma, y una cara o un círculo acaban ovalados. Esta herramienta lo evita manteniendo la relación de aspecto original (la proporción entre ancho y alto): el resultado cabe dentro del ancho y el alto que escribes y la dimensión restante se calcula por ti.",
          "Eso significa que el resultado puede quedar más pequeño que la caja que indicaste en una de las direcciones. Si un formulario exige una forma exacta como 600 × 600, primero recorta la foto a un cuadrado con la herramienta Recortar Imagen y luego redimensiónala. Recortar elimina los bordes; redimensionar por sí solo nunca lo hace. Para obtener un ancho y un alto exactos en un solo paso, con recorte o con márgenes blancos, usa Redimensionar Foto y Firma.",
        ],
        table: {
          headers: ["Partiendo de 4000 × 3000", "Lo que obtienes", "¿Se ve bien?"],
          rows: [
            ["Ancho 1200, alto en blanco", "1200 × 900", "Sí: se mantienen las proporciones"],
            ["Ancho 1200, alto 1200", "1200 × 900", "Sí: cabe dentro de la caja, sin estirarse"],
            ["Recortar a un cuadrado y luego redimensionar a 1200 × 1200", "1200 × 1200", "Sí: se recortan los bordes, nada se deforma"],
            ["Forzar 1200 × 1200 sin recortar (otras herramientas)", "1200 × 1200", "No: la imagen queda aplastada"],
          ],
        },
      },
      {
        heading: "¿Reducir píxeles es lo mismo que reducir el tamaño del archivo?",
        body: [
          "Están relacionados, pero no son lo mismo. El tamaño en píxeles es cuántos píxeles tiene la imagen. El tamaño del archivo es cuántos bytes ocupa, y depende de la cantidad de píxeles y de cuánto se comprime la imagen. Menos píxeles suele significar un archivo más pequeño, pero reducir a la mitad ambas dimensiones no divide el archivo exactamente por cuatro, porque también influyen la compresión y el contenido de la imagen.",
          "Elige según tu objetivo: para ajustar un tamaño en una página o las dimensiones que exige una plataforma, redimensiona. Para quedar por debajo de un límite de carga en KB o MB, comprime, o redimensiona primero y pasa después el resultado por Comprimir Imagen para el último ajuste. Si redimensionas antes, el compresor no tiene que trabajar tanto y la calidad se mantiene mejor. Para lograr a la vez un tamaño exacto en píxeles y un límite en KB, usa Redimensionar Foto y Firma.",
        ],
      },
      {
        heading: "Solución de problemas",
        list: [
          "La foto no se hizo más grande: esta herramienta solo reduce el tamaño. Usa el Ampliador con IA para agrandar.",
          "El resultado no tiene el tamaño exacto que escribí: la foto se redujo para caber dentro de tu caja sin cambiar su forma. Recorta primero o usa Redimensionar Foto y Firma para obtener dimensiones exactas.",
          "El archivo sigue pesando demasiado en KB: comprímelo después de redimensionar o fija un objetivo en Redimensionar Foto y Firma.",
          "Una foto HEIC volvió como JPG: la herramienta no puede guardar HEIC, así que se devuelve como JPG. Una foto de cámara o teléfono conserva su orientación vertical correcta.",
          "La foto se ve borrosa: si reduces mucho una foto y luego la miras ampliada, se verá suave. Redimensiona al tamaño en que realmente la vas a mostrar.",
        ],
        body: "Si el resultado no es el que esperabas, revisa primero estos puntos.",
      },
      {
        heading: "Privacidad y límites",
        body: "Las cargas viajan cifradas. Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Una imagen por carga, hasta 100 MB, gratis y sin cuenta.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo redimensionar imágenes a dimensiones exactas.",
    faq: [
      {
        question: "¿Cómo redimensiono una imagen a dimensiones exactas en píxeles?",
        answer:
          "Sube tu imagen a la herramienta de redimensionado de ConvertBrio, escribe el ancho y el alto que necesitas en píxeles y descarga el archivo redimensionado. Funciona con cualquier formato de imagen que la herramienta acepte.",
      },
      {
        question: "¿Redimensionar deformará mi imagen?",
        answer:
          "Solo si el nuevo ancho y alto no coinciden con la relación de aspecto original. Para evitar el estiramiento, mantén la misma proporción entre ancho y alto que tu imagen de origen, o recorta antes la imagen con la forma que necesitas.",
      },
      {
        question: "¿Redimensionar también reduce el tamaño del archivo?",
        answer:
          "Sí. Menos píxeles significan menos datos que almacenar, así que reducir las dimensiones suele disminuir bastante el archivo. Para obtener el resultado más pequeño posible, después del redimensionado usa la herramienta Comprimir Imagen.",
      },
      {
        question: "¿Puedo agrandar una imagen pequeña sin que se vea borrosa?",
        answer:
          "No con un redimensionado simple: ampliar reparte los píxeles existentes y suaviza la imagen. Usa en su lugar el Ampliador con IA, que reconstruye el detalle con un modelo entrenado y produce una ampliación mucho más nítida.",
      },
      {
        question: "¿Cambiará el formato del archivo al redimensionar?",
        answer:
          "La herramienta devuelve la imagen en un formato web estándar. Si necesitas un formato de salida concreto, pasa después el archivo redimensionado por el Conversor de Imágenes.",
      },
    ],
  },

  "crop-image": {
    title: "Recortador de imágenes: deja solo la zona que necesitas",
    intro:
      "A veces no necesitas reducir toda la imagen, sino quitar todo lo que queda fuera de una zona concreta, ya sea para aislar un sujeto, eliminar fondo no deseado o ajustarte a la relación de aspecto que pide una plataforma. La herramienta de recorte de ConvertBrio te permite indicar una región exacta mediante coordenadas en píxeles y obtener solo esa sección.",
    sections: [
      {
        heading: "Cómo recortar una imagen",
        body: "Sube tu imagen e indica las coordenadas izquierda y superior donde debe empezar el recorte, junto con el ancho y el alto de la región que quieres conservar. ConvertBrio corta la imagen exactamente a ese rectángulo y descarta todo lo que queda fuera.",
      },
      {
        heading: "Cómo encontrar las coordenadas correctas",
        body: "Las coordenadas se miden en píxeles desde la esquina superior izquierda de la imagen, así que un editor de imágenes o una herramienta de vista previa que muestre la posición en píxeles te ayudará a identificar la región exacta antes de subirla. Si lo que quieres es reducir toda la imagen y no cortar una sección, usa Redimensionar Imagen.",
      },
      {
        heading: "Usos habituales del recorte",
        body: "Recortar sirve para quitar el fondo no deseado de una foto, aislar un sujeto, ajustarse a la relación de aspecto exigida para una foto de perfil o un banner, o reducir un documento escaneado a su área de contenido. Es una alternativa precisa al redimensionado cuando el objetivo es quitar y no escalar.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo recortar imágenes a una región concreta.",
    faq: [
      {
        question: "¿Cómo recorto una imagen a una región concreta?",
        answer:
          "Sube tu imagen a la herramienta de recorte de ConvertBrio e indica las coordenadas iniciales izquierda y superior, además del ancho y el alto de la zona que quieres conservar, medidos en píxeles desde la esquina superior izquierda.",
      },
      {
        question: "¿Cuál es la diferencia entre recortar y redimensionar?",
        answer:
          "Redimensionar escala toda la imagen a nuevas dimensiones, mientras que recortar corta y conserva solo una región rectangular, descartando el resto. Usa el recorte cuando quieras quitar una parte de la imagen en lugar de reducirla entera.",
      },
      {
        question: "¿Cómo sé qué coordenadas en píxeles debo escribir?",
        answer:
          "Abre la imagen en una herramienta de vista previa o un editor que muestre la posición en píxeles al pasar el cursor, lo que te ayudará a identificar las coordenadas de la región que quieres conservar antes de introducirlas en ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Girar imágenes: arregla fotos de lado o boca abajo",
    intro:
      "Las fotos tomadas con el teléfono o escaneadas desde una impresora a veces quedan giradas en la dirección equivocada. La herramienta de giro de ConvertBrio rota una imagen 90, 180 o 270 grados con un clic, y corrige los problemas de orientación sin tener que abrir un editor de fotos completo.",
    sections: [
      {
        heading: "Cómo girar una imagen",
        body: "Sube la imagen, elige 90, 180 o 270 grados en el menú desplegable y ConvertBrio aplica el giro y te devuelve el archivo corregido. Un giro de 90 grados arregla una imagen de lado, mientras que 180 grados endereza una imagen que está boca abajo.",
      },
      {
        heading: "Por qué las fotos acaban giradas de forma incorrecta",
        body: "Normalmente ocurre cuando una cámara o un escáner no incrusta los metadatos de orientación correctos, o cuando esos metadatos se pierden durante la carga o la transferencia. Los datos de la imagen en sí no se alteran: simplemente se muestra en la dirección equivocada hasta que se gira.",
      },
      {
        heading: "Girar documentos escaneados",
        body: "Las páginas que se introducen de lado o boca abajo en un escáner son uno de los casos más comunes para esta herramienta. Girar la imagen antes de seguir procesándola, por ejemplo al convertirla a PDF o aplicarle OCR, garantiza que el documento final se lea correctamente.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo girar imágenes online.",
    faq: [
      {
        question: "¿Cómo giro una foto que está de lado?",
        answer:
          "Sube la imagen a la herramienta de giro de ConvertBrio y elige 90 o 270 grados, según hacia qué lado deba girar para mostrarse correctamente.",
      },
      {
        question: "¿Por qué mi foto está boca abajo o de lado desde el principio?",
        answer:
          "Suele deberse a metadatos de orientación ausentes o incorrectos en la cámara o el escáner que la capturó: el contenido de la imagen está bien, solo hay que girarla para que se vea como debe.",
      },
      {
        question: "¿Puedo girar la imagen de un documento escaneado antes de convertirla a PDF?",
        answer:
          "Sí. Gira primero la imagen con esta herramienta y luego usa JPG a PDF para combinarla en un documento PDF con la orientación correcta.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Girar PDF online: arregla páginas de lado en cualquier documento",
    intro:
      "Los documentos escaneados que se introdujeron al revés en el escáner suelen salir de lado o boca abajo. La herramienta Girar PDF de ConvertBrio rota todas las páginas de un documento 90, 180 o 270 grados de una sola vez, y corrige la orientación en todo el archivo a la vez.",
    sections: [
      {
        heading: "Cómo girar un PDF",
        body: "Sube tu PDF, elige un ángulo de giro (90, 180 o 270 grados) y ConvertBrio lo aplica a todas las páginas del documento. El resultado se descarga como un PDF corregido, con el mismo contenido pero bien orientado.",
      },
      {
        heading: "Por qué pasa esto con los documentos escaneados",
        body: "Las páginas de lado o boca abajo son un efecto secundario habitual de escanear documentos en papel, sobre todo cuando las hojas entran al escáner con una orientación distinta de la prevista. Girar el PDF ya terminado es más rápido que volver a escanear las páginas originales.",
      },
      {
        heading: "Girar solo algunas páginas",
        body: "La herramienta de giro de ConvertBrio aplica la misma rotación a todas las páginas del archivo. Si solo algunas páginas necesitan corrección, divide primero el PDF con Dividir PDF, gira individualmente las páginas afectadas y luego vuelve a juntarlo todo con Unir PDF.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo girar páginas de PDF online.",
    faq: [
      {
        question: "¿Cómo giro todas las páginas de un PDF?",
        answer:
          "Sube tu documento a la herramienta Girar PDF de ConvertBrio, elige un ángulo de giro y todas las páginas del archivo se rotarán la misma cantidad en el resultado descargado.",
      },
      {
        question: "¿Puedo girar solo una página en lugar de todo el documento?",
        answer:
          "No directamente con esta herramienta, ya que rota todas las páginas por igual. Para girar solo páginas concretas, divide primero el PDF, gira las páginas que necesites y luego vuelve a unir el archivo.",
      },
      {
        question: "¿Por qué mis páginas escaneadas salen de lado?",
        answer:
          "Suele ocurrir cuando las hojas entran al escáner con una orientación distinta de la prevista. Girar el PDF resultante es más rápido que volver a escanear el documento original.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Desbloquear PDF: quita las restricciones de la contraseña de propietario",
    intro:
      "Algunos PDF están bloqueados con una contraseña de propietario que restringe imprimir, copiar o editar, incluso cuando tienes todo el derecho a modificar el documento. La herramienta Desbloquear PDF de ConvertBrio quita esas restricciones de los archivos que estás autorizado a editar, y te devuelve el control total.",
    sections: [
      {
        heading: "Cómo desbloquear un PDF",
        body: "Sube el PDF restringido y ConvertBrio elimina las restricciones de nivel propietario que impiden imprimir, copiar y editar. El archivo desbloqueado se descarga con el mismo contenido, pero sin las restricciones de permisos.",
      },
      {
        heading: "Contraseñas de propietario y contraseñas de apertura",
        body: "Esta herramienta quita las restricciones de la contraseña de propietario: las que limitan lo que puedes hacer con un archivo que ya puedes abrir. No intenta saltarse una contraseña de apertura (de usuario) que impide ver el PDF por completo; para eso hace falta la contraseña real de quien creó el archivo.",
      },
      {
        heading: "Cuándo usar esta herramienta",
        body: "Desbloquear es útil para documentos que creaste o que tienes derecho expreso a modificar, pero que se exportaron con restricciones activadas por defecto, como informes de ciertos programas o formularios que bloquearon la edición sin querer. Desbloquea solo archivos que tengas derecho legal a modificar.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo quitar las restricciones de contraseña de un PDF.",
    faq: [
      {
        question: "¿Cuál es la diferencia entre desbloquear y descifrar un PDF?",
        answer:
          "Desbloquear quita las restricciones de nivel propietario sobre imprimir, copiar o editar de un archivo que ya puedes abrir. No se salta una contraseña necesaria solo para ver el documento: para eso hace falta la contraseña real.",
      },
      {
        question: "¿Es legal desbloquear un PDF?",
        answer:
          "Quitar las restricciones de un documento que es tuyo o que tienes permiso expreso para editar no supone ningún problema. Usa esta herramienta solo con archivos que tengas derecho legal a modificar.",
      },
      {
        question: "¿Desbloquear cambiará el contenido de mi PDF?",
        answer:
          "No. La herramienta solo quita las restricciones de permisos. El texto, las imágenes y el diseño del documento se mantienen exactamente igual.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Añadir números de página a un PDF online",
    intro:
      "Los informes, manuales y contratos suelen necesitar páginas numeradas para poder consultarlos y desplazarse por ellos. La herramienta Añadir Números de Página de ConvertBrio los estampa automáticamente en todas las páginas de tu PDF, sin necesidad de software de autoedición.",
    sections: [
      {
        heading: "Cómo añadir números de página",
        body: "Sube tu PDF y ConvertBrio estampa un número correlativo en cada página, empezando por la primera del documento. El archivo numerado se descarga listo para imprimir, compartir o presentar.",
      },
      {
        heading: "Por qué importan los números de página",
        body: "Las páginas numeradas facilitan mucho que los lectores se refieran a secciones concretas, sobre todo en contratos largos, trabajos académicos o manuales donde hay que citar la «página 14» o ir directamente a una parte determinada del documento.",
      },
      {
        heading: "Combinar con otras herramientas de PDF",
        body: "Si estás armando un documento con varias fuentes, une primero los archivos con Unir PDF y luego añade los números de página al resultado combinado, para que la numeración refleje la estructura final del documento y no la de cada pieza por separado.",
      },
      {
        heading: "Estilo de numeración y límites",
        body: "Los números se estampan abajo y al centro de cada página, con un estilo sencillo sin serifa, empezando en 1: por ahora no hay opción para cambiar la posición, el número inicial ni el formato, como «Página X de Y». Las cargas están limitadas a 100 MB. Tu archivo original se elimina justo después de leerse para la conversión. El resultado se elimina con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      },
    ],
    faqDescription: "Preguntas frecuentes sobre cómo añadir números de página a un PDF.",
    faq: [
      {
        question: "¿Cómo añado números de página a un PDF?",
        answer:
          "Sube tu documento a la herramienta Añadir Números de Página de ConvertBrio, que estampa automáticamente un número correlativo en cada página antes de que descargues el resultado.",
      },
      {
        question: "¿Puedo cambiar la posición o el número inicial?",
        answer:
          "Por ahora no. Los números siempre se colocan abajo y al centro, empezando en 1. Si necesitas otra posición, otro número inicial o un formato «Página X de Y», usa un programa de edición de PDF para tener control total.",
      },
      {
        question: "¿Esta herramienta vuelve a numerar páginas que ya tienen número?",
        answer:
          "Estampa un número correlativo nuevo en cada página. Si tu documento ya tiene números impresos en el propio contenido, aparecerán ambos, así que funciona mejor con documentos que no tienen numeración previa.",
      },
    ],
  },
};
