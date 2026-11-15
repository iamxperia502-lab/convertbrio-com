import type { Locale } from "./i18n";

// ─────────────────────────────────────────────────────────────────────────
// CONTENT ONLY SUBHAM CAN SUPPLY. Fill these in once; they apply to the About
// page in every language. Each section appears on the live page only once its
// value is set, so no placeholder text ever shows to visitors. In `astro dev`
// a banner on the English About page lists what is still missing.
// ─────────────────────────────────────────────────────────────────────────

export const founderName = "Subham Sharma";

// TODO: photo — put a square image (at least 400×400 px) in /public/about/
// and set the path here, e.g. "/about/subham-sharma.jpg".
export const founderPhoto: string | null = null;

// TODO: 2–3 sentences about your developer background, one string per
// paragraph. Do not include a city or country of residence. Add English first;
// a language without an entry simply shows no bio paragraph (so a page never
// mixes languages). Ask for the other languages to be translated once the
// English text is final, e.g. { en: ["…", "…"] }.
export const founderBio: Partial<Record<Locale, string[]>> = {
  en: [
    "Subham Sharma is a business consultant, media strategist, and full-stack developer. He builds ConvertBrio's tools and leads ConvertBrio, a development and media management team based in India that works with clients worldwide.",
    "He co-founded ConvertBrio with Kaibalya Vilash, a full-stack developer, social media manager, and content and video producer. The team's approach is to diagnose the problem before choosing a stack, and to keep the work useful, clear, maintainable, and measurable.",
  ],
  pt: [
    "Subham Sharma é consultor de negócios, estrategista de mídia e desenvolvedor full-stack. Ele cria as ferramentas do ConvertBrio e lidera o ConvertBrio, uma equipe de desenvolvimento e gestão de mídia sediada na Índia que atende clientes no mundo todo.",
    "Ele fundou o ConvertBrio com Kaibalya Vilash, desenvolvedor full-stack, social media e produtor de conteúdo e vídeo. A abordagem da equipe é diagnosticar o problema antes de escolher a tecnologia e manter o trabalho útil, claro, de fácil manutenção e mensurável.",

  ],
  es: [
    "Subham Sharma es consultor de negocios, estratega de medios y desarrollador full-stack. Crea las herramientas de ConvertBrio y dirige ConvertBrio, un equipo de desarrollo y gestión de medios con base en la India que trabaja con clientes de todo el mundo.",
    "Fundó ConvertBrio junto con Kaibalya Vilash, desarrollador full-stack, community manager y productor de contenido y vídeo. El enfoque del equipo es diagnosticar el problema antes de elegir la tecnología y mantener el trabajo útil, claro, mantenible y medible.",

  ],
  fr: [
    "Subham Sharma est consultant d'entreprise, stratège média et développeur full-stack. Il conçoit les outils de ConvertBrio et dirige ConvertBrio, une équipe de développement et de gestion des médias basée en Inde qui travaille avec des clients du monde entier.",
    "Il a cofondé ConvertBrio avec Kaibalya Vilash, développeur full-stack, community manager et producteur de contenu et de vidéo. L'approche de l'équipe : diagnostiquer le problème avant de choisir la technologie, et garder un travail utile, clair, maintenable et mesurable.",

  ],
  de: [
    "Subham Sharma ist Unternehmensberater, Medienstratege und Full-Stack-Entwickler. Er baut die Tools von ConvertBrio und leitet ConvertBrio, ein Entwicklungs- und Media-Management-Team mit Sitz in Indien, das mit Kunden weltweit arbeitet.",
    "Er hat ConvertBrio gemeinsam mit Kaibalya Vilash gegründet, einem Full-Stack-Entwickler, Social-Media-Manager sowie Content- und Videoproduzenten. Der Ansatz des Teams: erst das Problem diagnostizieren, dann den Tech-Stack wählen – und die Arbeit nützlich, klar, wartbar und messbar halten.",

  ],
  it: [
    "Subham Sharma è consulente aziendale, stratega dei media e sviluppatore full-stack. Realizza gli strumenti di ConvertBrio e guida ConvertBrio, un team di sviluppo e gestione dei media con sede in India che lavora con clienti in tutto il mondo.",
    "Ha cofondato ConvertBrio con Kaibalya Vilash, sviluppatore full-stack, social media manager e produttore di contenuti e video. L'approccio del team è diagnosticare il problema prima di scegliere la tecnologia e mantenere il lavoro utile, chiaro, manutenibile e misurabile.",

  ],
  id: [
    "Subham Sharma adalah konsultan bisnis, ahli strategi media, dan pengembang full-stack. Ia membangun alat-alat ConvertBrio dan memimpin ConvertBrio, tim pengembangan dan manajemen media yang berbasis di India dan melayani klien di seluruh dunia.",
    "Ia mendirikan ConvertBrio bersama Kaibalya Vilash, pengembang full-stack, social media manager, serta produser konten dan video. Pendekatan tim: mendiagnosis masalah sebelum memilih teknologi, dan menjaga hasil kerja tetap berguna, jelas, mudah dirawat, dan terukur.",

  ],
};

// TODO: registration details, e.g.
// [{ label: { en: "Business name", pt: "Razão social" }, value: "…" }].
// Only list what is true and what you are happy to publish. Provide a label for
// every language you want the section shown in (English is the fallback).
export const businessDetails: { label: Partial<Record<Locale, string>>; value: string }[] = [];

// TODO: personal LinkedIn URL, e.g. "https://www.linkedin.com/in/…".
export const personalLinkedIn: string | null = "https://www.linkedin.com/in/subham-sharma7745";
