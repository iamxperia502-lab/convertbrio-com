import type { HubDoc, HubUiStrings } from "./types";

export const hubsEs: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "Herramientas PDF",
    h1: "Herramientas PDF: unir, dividir, organizar, comprimir y convertir",
    seoTitle: "Herramientas PDF Gratis: Unir, Dividir y Comprimir | ConvertBrio",
    description:
      "Une, divide, reordena, gira, desbloquea, comprime y convierte PDF online. Herramientas PDF gratuitas de ConvertBrio, sin registro y sin marca de agua.",
    intro: [
      "Los PDF están pensados para verse igual en todas partes, y eso mismo los hace incómodos de modificar. Estas herramientas cubren las tareas que de verdad surgen: juntar varios archivos, separar páginas, dejarlas en el orden correcto, reducir un archivo para que entre en el límite de una subida y convertir páginas en imágenes o imágenes en páginas.",
      "Cada herramienta funciona desde tu navegador, admite archivos de hasta 100 MB y no necesita cuenta. Tu archivo original se elimina justo después de leerlo para la conversión. El resultado convertido se borra con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. Elige la tarea que necesitas o sigue uno de los flujos si tu trabajo requiere varios pasos.",
    ],
    workflows: [
      {
        title: "Preparar un PDF para una subida con límite de tamaño",
        steps: [
          "Quita las páginas que no necesitas con el organizador visual.",
          "Reduce el archivo hasta el límite exacto que permite el formulario.",
        ],
      },
      {
        title: "Convertir fotos del móvil en un solo PDF",
        steps: [
          "Junta las fotos en un único PDF.",
          "Reduce el tamaño si es demasiado grande para enviarlo por correo.",
        ],
      },
      {
        title: "Armar un informe a partir de varios documentos",
        steps: [
          "Une los PDF por separado en el orden que quieras.",
          "Añade números de página al documento terminado.",
        ],
      },
    ],
    chooser: {
      heading: "¿Qué herramienta PDF debo usar?",
      body: "Usa Unir PDF para juntar archivos y Dividir PDF para separar cada página. Si solo quieres conservar algunas páginas, cambiar su orden o corregir una página girada, el Organizador de Páginas PDF te deja ver cada página antes de decidir. Para límites de tamaño, Comprimir PDF aplica un nivel estándar, mientras que Comprimir PDF a un Tamaño trabaja hacia un objetivo en KB o MB e indica el tamaño que consiguió.",
    },
  },
  image: {
    name: "Herramientas de Imagen",
    h1: "Herramientas de imagen: convierte, redimensiona, comprime y retoca fotos",
    seoTitle: "Herramientas de Imagen Gratis: Convertir y Comprimir | ConvertBrio",
    description:
      "Convierte HEIC, JPG, PNG, WEBP y AVIF, redimensiona a píxeles exactos, comprime a un tamaño en KB, recorta, gira y quita fondos. Gratis y sin registro.",
    intro: [
      "Casi todos los problemas con imágenes se reducen a tres: el formato no se acepta, las dimensiones en píxeles no son las correctas o el archivo pesa demasiado. Las herramientas de aquí resuelven cada caso de forma directa, tanto si preparas una foto de perfil, rellenas un formulario de solicitud o publicas imágenes en un sitio web.",
      "Las conversiones mantienen la resolución original y las herramientas de compresión trabajan hacia el tamaño que elijas. No se añade ninguna marca de agua. Tu archivo original se elimina justo después de leerlo para la conversión, y el resultado se borra con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
    ],
    workflows: [
      {
        title: "Preparar una foto para un formulario de solicitud",
        steps: [
          "Ajusta los píxeles exactos y el límite en KB que pide el formulario.",
          "Elimina los datos de ubicación y de la cámara antes de subirla.",
        ],
      },
      {
        title: "Abrir una foto de iPhone en cualquier parte",
        steps: [
          "Convierte la foto HEIC a JPG.",
          "Comprímela si el archivo sigue siendo demasiado grande para enviarlo.",
        ],
      },
      {
        title: "Optimizar un conjunto de imágenes para un sitio web",
        steps: [
          "Conviértelas a un formato moderno como WEBP.",
          "Comprime todo el conjunto a un mismo tamaño objetivo.",
        ],
      },
    ],
    chooser: {
      heading: "¿Qué herramienta de imagen debo usar?",
      body: "Usa el Convertidor de Imágenes cuando el problema sea el formato, Redimensionar Imagen para las dimensiones en píxeles y Comprimir Imagen cuando solo importe el peso del archivo. Redimensionar Foto y Firma ajusta los píxeles exactos y el límite en KB en un solo paso, que es lo que piden la mayoría de los formularios. Para varios archivos a la vez, usa el Compresor de Imágenes por Lotes.",
    },
  },
  document: {
    name: "Herramientas de Documentos",
    h1: "Herramientas de documentos: Word, Excel, PowerPoint, PDF y texto",
    seoTitle: "Herramientas de Documentos: Word, Excel, PowerPoint y PDF | ConvertBrio",
    description:
      "Convierte Word, Excel y PowerPoint a PDF y viceversa, comprime archivos de Office, extrae texto de escaneos y quita metadatos ocultos. Gratis y sin registro.",
    intro: [
      "Los documentos pasan entre personas que usan programas distintos. Estas herramientas traducen entre Word, Excel, PowerPoint y PDF, reducen los archivos de Office que pesan demasiado para el correo, extraen el texto de los escaneos y eliminan los datos de autor que los archivos llevan sin que te des cuenta.",
      "Cada herramienta explica qué conserva y qué no puede hacer; por ejemplo, que al volver a convertir un PDF en Word no siempre se reconstruyen a la perfección los diseños complejos. Los archivos se cifran durante la transferencia. Tu archivo original se elimina justo después de leerlo para la conversión, y el resultado se borra con una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
    ],
    workflows: [
      {
        title: "Enviar un documento de Word que no se pueda editar",
        steps: [
          "Conviértelo a PDF para que el diseño quede fijo.",
          "Si hace falta, borra antes los datos de autor y de empresa.",
        ],
      },
      {
        title: "Editar un documento que solo tienes escaneado",
        steps: [
          "Convierte el escaneo en un archivo de Word editable.",
          "Guarda la versión corregida como PDF.",
        ],
      },
      {
        title: "Enviar por correo una presentación pesada",
        steps: ["Comprime el PowerPoint hasta un tamaño que quepa en un correo."],
      },
    ],
    chooser: {
      heading: "¿PDF a Word o Escaneo a Word?",
      body: "Si puedes seleccionar las palabras de tu PDF, usa PDF a Word, que conserva el formato lo más fielmente posible. Si el PDF es la imagen de una página, no hay texto que convertir hasta que se reconozca, así que usa Escaneo a Word.",
    },
  },
  compress: {
    name: "Herramientas de Compresión",
    h1: "Herramientas de compresión: reduce el tamaño de PDF, imágenes y archivos de Office",
    seoTitle: "Compresión de Archivos Gratis: PDF, Imagen y Office | ConvertBrio",
    description:
      "Reduce PDF, fotos, archivos de Word y PowerPoint para cumplir el límite de un correo o de una subida, incluso con objetivos en KB y MB. Gratis y sin registro.",
    intro: [
      "Los formularios de subida, los sistemas de correo y los sitios web imponen límites de tamaño, y la forma correcta de reducir un archivo depende de lo que contiene. Las fotos se comprimen bajando la calidad o las dimensiones, los PDF se reducen sobre todo recodificando las imágenes que llevan dentro, y los archivos de Office guardan contenido multimedia incrustado que se puede reducir por separado.",
      "Cuando una herramienta trabaja hacia un objetivo, mide el resultado real y te dice el tamaño que consiguió, también cuando el objetivo no se puede alcanzar sin arruinar el archivo.",
    ],
    workflows: [
      {
        title: "Hacer que un PDF escaneado quepa en el límite de un portal",
        steps: [
          "Comprime el PDF al tamaño que permite el portal.",
          "Si sigue siendo demasiado grande, divídelo en partes.",
        ],
      },
      {
        title: "Reducir muchas fotos para una sola subida",
        steps: ["Comprime todo el lote a un único objetivo en KB."],
      },
    ],
    chooser: {
      heading: "¿Cuánto se puede reducir un archivo?",
      body: "Depende del contenido. Los PDF y las presentaciones de PowerPoint con muchas fotos se reducen bastante, mientras que los PDF de solo texto ya son compactos. Reducir a un objetivo muy pequeño cuesta calidad, así que empieza por el límite que realmente tienes y no por el número más bajo posible.",
    },
  },
  ocr: {
    name: "Herramientas OCR",
    h1: "Herramientas OCR: extrae texto de escaneos, fotos y PDF",
    seoTitle: "Herramientas OCR Gratis: Imagen a Texto y Escaneo a Word | ConvertBrio",
    description:
      "Usa OCR para copiar el texto de una imagen, convertir un escaneo en un archivo de Word editable o hacer que un PDF escaneado permita búsquedas. Gratis y sin registro.",
    intro: [
      "Un escaneo o una foto de un texto es solo una imagen. El reconocimiento óptico de caracteres (OCR) lee las letras y te devuelve texto real que se puede seleccionar. Qué herramienta usar depende de lo que quieras recibir: texto sin formato para copiar, un archivo de Word editable o el mismo PDF con búsqueda habilitada.",
      "El OCR es preciso con texto impreso nítido y en alta resolución, y mucho menos con escritura a mano, escaneos de baja calidad y tablas complejas. La página de cada herramienta explica qué esperar.",
    ],
    workflows: [
      {
        title: "Convertir una carta escaneada en un documento editable",
        steps: [
          "Convierte el escaneo a Word.",
          "Revisa el texto y guárdalo como PDF.",
        ],
      },
      {
        title: "Hacer que un archivo de escaneos permita búsquedas",
        steps: [
          "Aplica OCR para añadir una capa de texto a cada PDF.",
          "Reduce el PDF con búsqueda para guardarlo.",
        ],
      },
    ],
    chooser: {
      heading: "¿Qué herramienta OCR debo usar?",
      body: "Imagen a Texto sirve para una foto o una captura de pantalla cuando solo quieres las palabras: te las muestra en la página para copiarlas. Escaneo a Word genera un DOCX editable a partir de una página escaneada o de un PDF. OCR PDF conserva tus páginas exactamente como se ven y añade una capa de texto invisible para que el PDF permita búsquedas.",
    },
  },
  ai: {
    name: "Herramientas de IA",
    h1: "Herramientas de IA: mejora, amplía y recorta fotos",
    seoTitle: "Herramientas de IA Gratis: Mejorar, Ampliar y Quitar Fondo | ConvertBrio",
    description:
      "Mejora, amplía y recorta fotos con IA, o crea una foto de pasaporte. Gratis y sin registro, con notas sinceras sobre lo que cada herramienta puede y no puede hacer.",
    intro: [
      "Estas herramientas usan modelos de aprendizaje automático para tareas difíciles de hacer a mano: dar nitidez a una foto apagada, ampliar una imagen pequeña sin que se vuelva una mancha y separar a una persona de su fondo.",
      "Los resultados de la IA dependen de la imagen de partida. Una foto clara da un resultado claro, y nada de lo que hay aquí puede recuperar detalles que nunca se captaron. Cada página explica dónde funciona bien una herramienta y dónde no.",
    ],
    workflows: [
      {
        title: "Mejorar una foto pequeña y apagada",
        steps: [
          "Equilibra el color y la nitidez.",
          "Amplíala para imprimirla o verla en una pantalla más grande.",
        ],
      },
      {
        title: "Crear una imagen limpia de producto o de perfil",
        steps: [
          "Quita el fondo.",
          "Comprime el resultado para la web.",
        ],
      },
    ],
    chooser: {
      heading: "¿Mejorador o ampliador?",
      body: "Mejorar Imagen con IA corrige el color y la nitidez sin cambiar el tamaño. Ampliador con IA aumenta las dimensiones en píxeles. Si una foto es pequeña y además está apagada, mejórala primero y amplíala después.",
    },
  },
};

export const hubUiEs: HubUiStrings = {
  allTemplate: "Todas las {name}",
  workflows: "Flujos de trabajo recomendados",
  guides: "Guías",
  otherCategories: "Otras categorías de herramientas",
  allTools: "Todas las herramientas",
  home: "Inicio",
  toolLibrary: "Biblioteca de herramientas",
  allToolsIntro: "Todas las herramientas de ConvertBrio, organizadas por categoría. Se añaden herramientas nuevas con regularidad.",
  categoriesLabel: "Categorías de herramientas",
  categoryGuide: "Guía de la categoría",
  moreTools: "Más herramientas",
  moreToolsDesc: "Herramientas complementarias en otros sitios de ConvertBrio.",
  categoryDescs: {
    convert: "Cambia cualquier archivo de un formato a otro.",
    compress: "Reduce el tamaño de los archivos sin perder calidad.",
    pdf: "Une, divide, edita y protege documentos PDF.",
    image: "Convierte, redimensiona, recorta y retoca imágenes.",
    document: "Pasa contenido entre Word, Excel, PowerPoint y PDF.",
    ai: "Mejora y restaura imágenes con modelos de IA.",
  },
};
