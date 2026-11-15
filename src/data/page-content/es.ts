import type { LocalePages, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsEs, hubUiEs } from "./es-hubs";

const privacy: StaticPageDoc = {
  seoTitle: "Política de privacidad | ConvertBrio",
  title: "Política de privacidad",
  description:
    "Cómo ConvertBrio recopila, usa y protege tus datos y archivos, incluido cuánto tiempo se conservan las subidas y cuándo se eliminan.",
  eyebrow: "Última actualización: 23 de septiembre de 2026",
  heading: "Política de privacidad",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio («nosotros» o «nuestro») ofrece herramientas en línea para convertir, comprimir y mejorar archivos. ConvertBrio está gestionado de forma independiente por Subham Sharma, con sede en la India. Esta política explica qué información recopilamos, cómo la usamos y qué opciones tienes. Se aplica a convertbrio.com y a todas sus herramientas.",
      ],
    },
    {
      heading: "1. Quiénes somos",
      paragraphs: [
        "ConvertBrio es gestionado de forma independiente por Subham Sharma desde la India. Para cualquier duda sobre privacidad, corrección de datos o solicitud de derechos, escribe a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o usa nuestra <a href=\"/contact\">página de contacto</a>.",
      ],
    },
    {
      heading: "2. Información que recopilamos",
      paragraphs: ["Recopilamos:"],
      list: [
        "<strong>Información de cuenta</strong> que nos facilitas, como tu nombre y tu correo electrónico.",
        "<strong>Envíos del formulario de contacto</strong>, incluidos el mensaje y el correo de respuesta que nos indicas.",
        "<strong>Datos técnicos</strong> como la dirección IP, el tipo de navegador, el tipo de dispositivo y el sistema operativo, recogidos automáticamente para operar el servicio de forma segura y diagnosticar problemas.",
        "<strong>Datos de uso</strong>, como las herramientas y páginas que visitas y cómo interactúas con ellas.",
        "<strong>Registros de seguridad</strong> que sirven para detectar abusos, limitar solicitudes y mantener el servicio fiable.",
      ],
    },
    {
      heading: "3. Archivos que subes",
      paragraphs: [
        "Los archivos que subes se transmiten mediante una conexión cifrada (HTTPS/TLS). Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. No revisamos manualmente, compartimos ni usamos el contenido de tus archivos para ningún fin distinto de entregarte el resultado que pediste. Esto incluye las herramientas de IA, como el mejorador de imágenes, el ampliador y el eliminador de fondo: los archivos subidos se usan únicamente para generar tu resultado y nunca para entrenar ni mejorar ningún modelo.",
      ],
    },
    {
      heading: "4. Cómo usamos la información",
      paragraphs: [
        "Usamos la información recopilada para operar y mejorar ConvertBrio, prestar atención al cliente, vigilar abusos e incidentes de seguridad, entender el uso agregado del producto y cumplir obligaciones legales. No vendemos tu información personal.",
      ],
    },
    {
      heading: "5. Cookies y tecnologías similares",
      paragraphs: [
        "Nosotros y nuestros proveedores de servicios usamos cookies y tecnologías similares (como el almacenamiento local) con los siguientes fines:",
      ],
      list: [
        "<strong>Esenciales</strong>: mantener tu sesión iniciada y recordar preferencias básicas como el tema.",
        "<strong>Analítica</strong>: entender el uso agregado mediante Google Analytics y Microsoft Clarity, para saber qué herramientas resultan útiles y dónde falla el producto.",
        "<strong>Publicidad</strong>: si en algún momento mostramos anuncios (por ejemplo, a través de Google AdSense), Google y otros proveedores externos usan cookies, incluida la cookie publicitaria de Google, para mostrar anuncios basados en tus visitas anteriores a este u otros sitios web. Estas cookies permiten a Google y a sus socios mostrarte anuncios personalizados. Puedes rechazar la publicidad personalizada en <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Configuración de anuncios de Google</a>, o de forma general en <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener noreferrer\">aboutads.info</a>.",
      ],
    },
    {
      paragraphs: [
        "Cuando es obligatorio (incluidos los visitantes del EEE, el Reino Unido y Suiza), te pedimos el consentimiento antes de instalar cookies no esenciales de analítica o publicidad, mediante el banner de consentimiento que aparece en tu primera visita. Puedes cambiar tu decisión en cualquier momento con el enlace «Gestionar preferencias de cookies» del pie de cada página. Rechazar las cookies no esenciales no te impide usar las herramientas de ConvertBrio.",
      ],
    },
    {
      heading: "6. Servicios de terceros que utilizamos",
      paragraphs: [
        "ConvertBrio se apoya en los siguientes proveedores de servicios, y cada uno recibe solo la información necesaria para cumplir su función:",
      ],
      list: [
        "<strong>Vercel</strong>: aloja el sitio y ejecuta las conversiones de archivos en sus servidores (las conversiones no se realizan localmente en tu navegador). Tu archivo original se elimina justo después de leerse para la conversión.",
        "<strong>Supabase</strong>: almacena las cuentas y guarda temporalmente el resultado convertido de tu archivo hasta su eliminación automática, que se hace mediante una limpieza diaria, normalmente en unas 24 horas.",
        "<strong>Google Analytics y Google Tag Manager</strong>: analítica de uso agregada, sujeta a tu decisión sobre las cookies.",
        "<strong>Microsoft Clarity</strong>: analítica de uso agregada y datos sobre las sesiones, sujetos a tu decisión sobre las cookies.",
        "<strong>Google AdSense</strong>: publicidad, una vez habilitada en el sitio, sujeta a tu decisión sobre las cookies.",
      ],
    },
    {
      paragraphs: [
        "No vendemos ni compartimos esta información con ningún proveedor más allá de lo necesario para que cumpla la función indicada.",
      ],
    },
    {
      heading: "7. Base jurídica y tus derechos (EEE, Reino Unido y Suiza)",
      paragraphs: [
        "Cuando se aplica el RGPD o el RGPD del Reino Unido, tratamos tu información sobre la base de: la ejecución de nuestro contrato contigo (ofrecerte las herramientas que usas), nuestros intereses legítimos (seguridad, prevención del fraude y mejora del servicio) y tu consentimiento (cookies de analítica y publicidad). Tienes derecho a acceder a tus datos personales, rectificarlos, suprimirlos, limitar su tratamiento u oponerte a él, a recibir una copia en formato portable y a retirar tu consentimiento en cualquier momento sin que ello afecte al tratamiento realizado antes de la retirada. También tienes derecho a presentar una reclamación ante la autoridad de protección de datos de tu zona. Para ejercer cualquiera de estos derechos, escribe a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "8. Derechos de privacidad en estados de EE. UU.",
      paragraphs: [
        "Si resides en un estado de EE. UU. con una ley integral de privacidad (como California, Colorado, Connecticut, Virginia u otros), puedes tener derecho a conocer, acceder, eliminar o corregir tu información personal, y a oponerte a su venta o a su «uso compartido» (incluida la publicidad conductual entre contextos, en la que algunos estados incluyen las cookies publicitarias). No vendemos información personal. Si mostramos publicidad a través de Google AdSense, esto puede considerarse «uso compartido» según algunas leyes estatales; puedes rechazarlo en cualquier momento con el enlace de preferencias de cookies del pie de página, la página de <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Configuración de anuncios de Google</a> o enviando una señal de Global Privacy Control (GPC) desde tu navegador, que tratamos como una solicitud de exclusión. Para ejercer estos derechos, escribe a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>.",
      ],
    },
    {
      heading: "9. Transferencias internacionales de datos",
      paragraphs: [
        "ConvertBrio opera desde la India y utiliza proveedores de servicios (entre ellos Vercel y Supabase) que pueden tratar datos en otros países, incluido Estados Unidos. Cuando transferimos información personal a nivel internacional, confiamos en las garantías contractuales y técnicas de esos proveedores para protegerla de forma coherente con esta política.",
      ],
    },
    {
      heading: "10. Conservación de datos",
      paragraphs: [
        "Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas, tanto si lo descargas como si no. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana. La información de la cuenta se conserva mientras tu cuenta esté activa, más un periodo limitado posterior para cumplir obligaciones legales o de seguridad. Los registros de seguridad y de uso se conservan solo el tiempo necesario para los fines descritos arriba y después se eliminan o se anonimizan.",
      ],
    },
    {
      heading: "11. Privacidad de los menores",
      paragraphs: [
        "ConvertBrio está pensado para personas de 18 años o más y no se dirige a menores. No recopilamos a sabiendas información personal de nadie menor de 18 años. Si crees que un menor nos ha facilitado información personal, escribe a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> y la eliminaremos.",
      ],
    },
    {
      heading: "12. Cambios en esta política",
      paragraphs: [
        "Podemos actualizar esta política de vez en cuando. Si hacemos cambios importantes, modificaremos la fecha de «última actualización» que aparece al principio de esta página y, cuando corresponda, daremos un aviso adicional.",
      ],
    },
    {
      heading: "13. Contacto",
      paragraphs: [
        "Las preguntas sobre esta política o las solicitudes para ejercer tus derechos de privacidad pueden enviarse a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o a través de nuestra <a href=\"/contact\">página de contacto</a>.",
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: "Términos del servicio | ConvertBrio",
  title: "Términos del servicio",
  description:
    "Los términos que rigen el uso de las herramientas y servicios gratuitos de ConvertBrio, incluidos el uso aceptable, los límites y tus responsabilidades.",
  eyebrow: "Última actualización: 25 de agosto de 2026",
  heading: "Términos del servicio",
  blocks: [
    {
      paragraphs: [
        "Estos Términos del servicio («Términos») regulan tu acceso a ConvertBrio y su uso. Al usar nuestras herramientas, aceptas estos Términos.",
      ],
    },
    {
      heading: "1. Uso de ConvertBrio",
      paragraphs: [
        "Puedes usar ConvertBrio para convertir, comprimir y mejorar archivos que te pertenezcan o que tengas derecho a procesar. Debes tener al menos 18 años para usar el servicio.",
      ],
    },
    {
      heading: "2. Uso aceptable",
      paragraphs: [
        "Te comprometes a no subir contenido ilegal, que infrinja derechos o que sea malicioso, a no intentar perturbar el servicio y a no usar herramientas automatizadas para abusar de los límites de uso sin nuestro permiso por escrito.",
      ],
    },
    {
      heading: "3. Tu contenido",
      paragraphs: [
        "Conservas todos los derechos sobre los archivos que subes. No reclamamos ninguna propiedad sobre tu contenido y solo lo procesamos para entregarte la conversión o mejora que solicitas.",
      ],
    },
    {
      heading: "4. Servicios de pago",
      paragraphs: [
        "Actualmente ConvertBrio no ofrece suscripciones de pago. Si se introducen servicios de pago, sus precios, la frecuencia de facturación, las condiciones de renovación y las de cancelación se mostrarán antes de la compra. Actualizaremos estos Términos antes de que los servicios de pago estén disponibles.",
      ],
    },
    {
      heading: "5. Disponibilidad del servicio",
      paragraphs: [
        "Procuramos que ConvertBrio esté disponible y funcione de forma fiable, pero no garantizamos un acceso ininterrumpido. Podemos modificar o retirar funciones con un aviso razonable.",
      ],
    },
    {
      heading: "6. Exención de garantías y limitación de responsabilidad",
      paragraphs: [
        "ConvertBrio se ofrece «tal cual», sin garantías de ningún tipo. En la máxima medida permitida por la ley, ConvertBrio no es responsable de daños indirectos o consecuentes derivados del uso del servicio.",
      ],
    },
    {
      heading: "7. Cambios en estos Términos",
      paragraphs: [
        "Podemos actualizar estos Términos de vez en cuando. Seguir usando ConvertBrio después de que los cambios entren en vigor supone la aceptación de los Términos revisados.",
      ],
    },
    {
      heading: "8. Contacto",
      paragraphs: [
        "Las preguntas sobre estos Términos pueden enviarse a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o a través de nuestra <a href=\"/contact\">página de contacto</a>.",
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: "Confianza y seguridad | ConvertBrio",
  title: "Confianza y seguridad",
  description:
    "Cómo trata ConvertBrio tus archivos, cómo denunciar abusos o problemas de seguridad y cómo se corrigen las guías publicadas.",
  eyebrow: "Última actualización: 23 de septiembre de 2026",
  heading: "Confianza y seguridad",
  blocks: [
    {
      paragraphs: [
        "ConvertBrio es gestionado de forma independiente por Subham Sharma, con sede en la India. Esta página resume cómo tratamos tus archivos, cómo denunciar un abuso o un problema de seguridad y cómo gestionamos las correcciones de las guías publicadas. Para el detalle jurídico completo, consulta nuestra <a href=\"/privacy\">Política de privacidad</a> y los <a href=\"/terms\">Términos del servicio</a>.",
      ],
    },
    {
      heading: "Cómo se tratan tus archivos",
      paragraphs: [
        "Los archivos se transmiten mediante una conexión cifrada (HTTPS/TLS). Cada conversión se ejecuta como un proceso automatizado: nadie abre, revisa ni lee manualmente el contenido de tu archivo en ningún momento, tampoco en las herramientas de IA como el mejorador de imágenes, el ampliador y el eliminador de fondo, donde las subidas se usan únicamente para generar tu resultado y nunca para entrenar ni mejorar ningún modelo.",
        "Tu archivo original se elimina justo después de leerse para la conversión. El resultado convertido se elimina mediante una limpieza diaria, normalmente en unas 24 horas, tanto si lo descargas como si no. Los archivos se procesan en los servidores de nuestros proveedores de alojamiento (Vercel y Supabase), de forma automática y sin revisión humana.",
      ],
    },
    {
      heading: "Denunciar abusos o usos indebidos",
      paragraphs: [
        "Los servicios de subida de archivos pueden usarse de forma indebida: para procesar contenido sobre el que alguien no tiene derechos o para otros abusos. Si crees que un archivo procesado a través de ConvertBrio implica contenido ilegal, una infracción de derechos de autor u otro tipo de uso indebido, infórmanos mediante <a href=\"/contact\">nuestro formulario de contacto</a> o escribiendo a <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a>. No mostramos públicamente los nombres de los archivos subidos ni sus resultados, y revisamos las denuncias de abuso directamente, no mediante una cola automatizada.",
        "Herramientas como Desbloquear PDF están diseñadas únicamente para quitar restricciones de propietario de documentos que ya tienes derecho a editar; consulta la <a href=\"/tools/unlock-pdf\">herramienta Desbloquear PDF</a> y nuestra guía sobre las <a href=\"/blog/pdf-password-restrictions-explained\">restricciones de contraseña en PDF</a> para saber exactamente qué cubre y qué no. No están pensadas ni destinadas a eludir la protección de archivos que no te pertenecen o que no estás autorizado a modificar.",
      ],
    },
    {
      heading: "Informar de un problema de seguridad",
      paragraphs: [
        "Si encuentras una vulnerabilidad de seguridad en ConvertBrio, desde un problema de control de acceso hasta una forma de ver los datos de otro usuario, infórmanos en <a href=\"mailto:subhamsharma@convertbrio.com\">subhamsharma@convertbrio.com</a> o a través del <a href=\"/contact\">formulario de contacto</a> antes de divulgarla públicamente. Al ser un proyecto gestionado de forma independiente, los tiempos de respuesta no igualarán los del equipo de seguridad de una gran empresa, pero cada informe se lee y se toma en serio.",
      ],
    },
    {
      heading: "Correcciones de guías y artículos",
      paragraphs: [
        "Los artículos del <a href=\"/blog\">blog de ConvertBrio</a> se escriben para ser precisos y prácticos, y se revisan antes de publicarse. Si detectas un error factual, una afirmación desactualizada o algo que ya no coincide con el comportamiento real de una herramienta, avísanos mediante el <a href=\"/contact\">formulario de contacto</a>: las correcciones se hacen directamente en el artículo, no en silencio, y la fecha indicada en la página refleja cuándo se actualizó por última vez de forma sustancial.",
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: "Contacto | ConvertBrio",
  title: "Contacto",
  description:
    "Ponte en contacto con el equipo de ConvertBrio para soporte, comentarios o consultas de colaboración.",
  eyebrow: "Contacto",
  heading: "Ponte en contacto",
  intro: "¿Tienes preguntas, comentarios o quieres pedir una herramienta? Leemos todos los mensajes.",
  supportHeading: "Soporte general",
  businessHeading: "Negocios y colaboraciones",
  responseNote: "Normalmente respondemos en un día hábil.",
  nameLabel: "Nombre",
  emailLabel: "Correo electrónico",
  subjectLabel: "Asunto",
  messageLabel: "Mensaje",
  sendLabel: "Enviar mensaje",
};

const blogIndex: BlogIndexDoc = {
  seoTitle: "Guías sobre archivos, formatos y conversión | ConvertBrio",
  title: "Blog",
  description:
    "Guías prácticas sobre formatos de archivo, PDF, imágenes y conversión de documentos: cómo funcionan, qué los reduce o los rompe de verdad y cómo resolver los problemas más comunes.",
  eyebrow: "Blog",
  heading: "Guías sobre archivos, formatos y conversión",
  intro: "Respuestas prácticas a los problemas con archivos que la gente se encuentra de verdad, sin rodeos ni relleno.",
  englishNote: "Por ahora, nuestras guías se publican en inglés.",
  empty: "Todavía no hay artículos; vuelve pronto.",
  dateLocale: "es",
};

export const pagesEs: LocalePages | undefined = {
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsEs,
  hubUi: hubUiEs,
};
