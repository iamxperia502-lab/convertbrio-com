// Portuguese (pt-BR) is a partial localisation focused on the PDF and
// compression tools, which is where nearly all of the site's Portuguese
// search demand sits. Anything not translated links back to the English
// page rather than 404ing.

export type Locale = "en" | "pt";

export const LOCALES: Locale[] = ["en", "pt"];
export const DEFAULT_LOCALE: Locale = "en";

/** The `<html lang>` value for each locale. */
export const HTML_LANG: Record<Locale, string> = { en: "en", pt: "pt-BR" };

/** Slugs that have a Portuguese tool page. Keep in sync with toolContentPt. */
export const PT_TOOL_SLUGS = [
  "compress-pdf",
  "compress-image",
  "merge-pdf",
  "split-pdf",
  "pdf-to-word",
  "word-to-pdf",
  "pdf-to-jpg",
  "jpg-to-pdf",
  "image-converter",
  "ocr-pdf",
  "compress-powerpoint",
  "compress-word",
] as const;

/** Prefix a root-relative path with the locale segment (no trailing slash). */
export function localePath(path: string, lang: Locale): string {
  if (lang === "en") return path;
  if (path === "/" || path === "") return "/pt";
  return `/pt${path}`;
}

/** The English path a localised page maps to (for hreflang / language switch). */
export function toDefaultPath(path: string): string {
  return path.replace(/^\/pt(?=\/|$)/, "") || "/";
}

interface ToolFormStrings {
  dropSingle: string;
  dropMultiple: string;
  sizeLimit: string;
  sizeLimitTotal: string;
  uploading: string;
  processing: string;
  chooseFirst: string;
  genericError: string;
  downloadResult: string;
  /** `{file}` is replaced with the filename. */
  doneTemplate: string;
  /** `{file}` is replaced with the filename. */
  downloadTemplate: string;
  /** `{n}` is replaced with the count. */
  filesSelectedTemplate: string;
  reupload: string;
  convert: string;
  replaceHint: string;
  convertTo: string;
  targetSizeKb: string;
  targetSizeHint: string;
  quality: string;
  qualityHint: string;
  width: string;
  height: string;
  left: string;
  top: string;
  rotate: string;
}

interface UIStrings {
  nav: {
    convert: string;
    compress: string;
    pdf: string;
    image: string;
    document: string;
    ai: string;
    allTools: string;
    blog: string;
    signIn: string;
    getStarted: string;
    dashboard: string;
    signOut: string;
    primaryLabel: string;
    mobileLabel: string;
    languageLabel: string;
  };
  footer: {
    tagline: string;
    convert: string;
    compress: string;
    tools: string;
    company: string;
    legal: string;
    about: string;
    blog: string;
    contact: string;
    privacy: string;
    terms: string;
    trust: string;
    rights: string;
    manageCookies: string;
  };
  tool: {
    eyebrowTool: string;
    eyebrowGuide: string;
    faqSuffix: string;
    relatedHeading: string;
    howToHeading: string;
    oneClickInDev: string;
    comingSoon: string;
    browseOtherTools: string;
    form: ToolFormStrings;
  };
}

export const ui: Record<Locale, UIStrings> = {
  en: {
    nav: {
      convert: "Convert",
      compress: "Compress",
      pdf: "PDF Tools",
      image: "Image Tools",
      document: "Document Tools",
      ai: "AI Tools",
      allTools: "All Tools",
      blog: "Blog",
      signIn: "Sign In",
      getStarted: "Get Started",
      dashboard: "Dashboard",
      signOut: "Sign Out",
      primaryLabel: "Primary",
      mobileLabel: "Mobile",
      languageLabel: "Language",
    },
    footer: {
      tagline: "Convert. Compress. Enhance.",
      convert: "Convert",
      compress: "Compress",
      tools: "Tools",
      company: "Company",
      legal: "Legal",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      trust: "Trust & Security",
      rights: "All rights reserved.",
      manageCookies: "Manage cookie preferences",
    },
    tool: {
      eyebrowTool: "Tool",
      eyebrowGuide: "Guide",
      faqSuffix: "FAQ",
      relatedHeading: "Related Tools",
      howToHeading: "How to use this tool",
      oneClickInDev: "One-click tool in development",
      comingSoon: "Coming soon",
      browseOtherTools: "Browse other tools",
      form: {
        dropSingle: "Drop a file here, or browse",
        dropMultiple: "Drop files here, or browse",
        sizeLimit: "Up to 100 MB",
        sizeLimitTotal: "Up to 100 MB total",
        uploading: "Uploading…",
        processing: "Processing…",
        chooseFirst: "Choose a file first.",
        genericError: "Something went wrong. Try again.",
        downloadResult: "Download result",
        doneTemplate: "Done — {file} downloaded. If it didn't start, use the button below.",
        downloadTemplate: "Download {file}",
        filesSelectedTemplate: "{n} files selected",
        reupload: "Reupload",
        convert: "Convert",
        replaceHint: "Drop or browse to replace",
        convertTo: "Convert to",
        targetSizeKb: "Target size (KB)",
        targetSizeHint:
          "We'll adjust quality — and dimensions if needed — to fit this limit. Leave blank to use the quality slider instead.",
        quality: "Quality (used if no target size)",
        qualityHint: "",
        width: "Width (px)",
        height: "Height (px)",
        left: "Left (px)",
        top: "Top (px)",
        rotate: "Rotate",
      },
    },
  },
  pt: {
    nav: {
      convert: "Converter",
      compress: "Comprimir",
      pdf: "Ferramentas PDF",
      image: "Ferramentas de imagem",
      document: "Ferramentas de documento",
      ai: "Ferramentas de IA",
      allTools: "Todas as ferramentas",
      blog: "Blog",
      signIn: "Entrar",
      getStarted: "Começar",
      dashboard: "Painel",
      signOut: "Sair",
      primaryLabel: "Principal",
      mobileLabel: "Móvel",
      languageLabel: "Idioma",
    },
    footer: {
      tagline: "Converta. Comprima. Melhore.",
      convert: "Converter",
      compress: "Comprimir",
      tools: "Ferramentas",
      company: "Empresa",
      legal: "Jurídico",
      about: "Sobre",
      blog: "Blog",
      contact: "Contato",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      trust: "Confiança e Segurança",
      rights: "Todos os direitos reservados.",
      manageCookies: "Gerenciar preferências de cookies",
    },
    tool: {
      eyebrowTool: "Ferramenta",
      eyebrowGuide: "Guia",
      faqSuffix: "Perguntas frequentes",
      relatedHeading: "Ferramentas relacionadas",
      howToHeading: "Como usar esta ferramenta",
      oneClickInDev: "Ferramenta automática em desenvolvimento",
      comingSoon: "Em breve",
      browseOtherTools: "Ver outras ferramentas",
      form: {
        dropSingle: "Solte um arquivo aqui ou procure",
        dropMultiple: "Solte os arquivos aqui ou procure",
        sizeLimit: "Até 100 MB",
        sizeLimitTotal: "Até 100 MB no total",
        uploading: "Enviando…",
        processing: "Processando…",
        chooseFirst: "Escolha um arquivo primeiro.",
        genericError: "Algo deu errado. Tente novamente.",
        downloadResult: "Baixar resultado",
        doneTemplate: "Pronto — {file} baixado. Se não começou, use o botão abaixo.",
        downloadTemplate: "Baixar {file}",
        filesSelectedTemplate: "{n} arquivos selecionados",
        reupload: "Reenviar",
        convert: "Converter",
        replaceHint: "Solte ou procure para substituir",
        convertTo: "Converter para",
        targetSizeKb: "Tamanho alvo (KB)",
        targetSizeHint:
          "Ajustamos a qualidade — e as dimensões, se necessário — para caber neste limite. Deixe em branco para usar o controle de qualidade.",
        quality: "Qualidade (usada se não houver tamanho alvo)",
        qualityHint: "",
        width: "Largura (px)",
        height: "Altura (px)",
        left: "Esquerda (px)",
        top: "Topo (px)",
        rotate: "Girar",
      },
    },
  },
};

/** Portuguese name / description / SEO overrides, by tool slug. */
export const toolI18nPt: Record<
  string,
  { name: string; description: string; seoTitle: string; seoDescription: string }
> = {
  "compress-pdf": {
    name: "Comprimir PDF",
    description: "Reduza o tamanho de um PDF re-codificando as imagens e removendo metadados.",
    seoTitle: "Comprimir PDF Online Grátis — Reduzir Tamanho de PDF | ConvertBrio",
    seoDescription:
      "Comprima PDF online de graça para reduzir o tamanho do arquivo e enviar por e-mail ou em portais. Sem cadastro, sem marca d'água, sem instalar nada.",
  },
  "compress-image": {
    name: "Comprimir Imagem",
    description: "Reduza uma imagem para um tamanho exato em KB — como 100 KB para um formulário ou visto.",
    seoTitle: "Comprimir Imagem para um Tamanho Exato (KB) | ConvertBrio",
    seoDescription:
      "Comprima uma imagem JPG, PNG, WEBP ou HEIC para um limite exato em KB — 100 KB para vistos, concursos e portais do governo. Grátis, sem cadastro.",
  },
  "merge-pdf": {
    name: "Juntar PDF",
    description: "Combine vários arquivos PDF em um só documento, na ordem que você quiser.",
    seoTitle: "Juntar PDF Online Grátis — Unir Arquivos PDF | ConvertBrio",
    seoDescription:
      "Junte vários PDFs em um único documento, na ordem que você escolher. Grátis, sem cadastro, sem marca d'água. Os arquivos são apagados automaticamente.",
  },
  "split-pdf": {
    name: "Dividir PDF",
    description: "Separe um PDF em páginas individuais para extrair ou reorganizar.",
    seoTitle: "Dividir PDF Online Grátis — Separar Páginas de PDF | ConvertBrio",
    seoDescription:
      "Divida um PDF em páginas individuais online, de graça. Extraia uma página ou separe o documento em vários arquivos, baixados em um ZIP. Sem cadastro.",
  },
  "pdf-to-word": {
    name: "PDF para Word",
    description: "Converta um PDF em um documento Word (DOCX) editável, mantendo o formato básico.",
    seoTitle: "Converter PDF para Word (DOCX Editável) Grátis | ConvertBrio",
    seoDescription:
      "Transforme um PDF em um documento Word editável — parágrafos, títulos, negrito, tabelas simples e imagens preservados. Grátis, sem cadastro.",
  },
  "word-to-pdf": {
    name: "Word para PDF",
    description: "Converta um documento Word (.docx) em um PDF pronto para impressão que abre em qualquer lugar.",
    seoTitle: "Converter Word para PDF Grátis Online — Sem Cadastro | ConvertBrio",
    seoDescription:
      "Converta um documento Word (.docx) em um PDF que preserva a formatação e abre igual em qualquer dispositivo. Grátis, sem conta, sem marca d'água.",
  },
  "pdf-to-jpg": {
    name: "PDF para JPG",
    description: "Exporte cada página do PDF como uma imagem JPG.",
    seoTitle: "PDF para JPG — Converter Páginas de PDF em Imagens Grátis | ConvertBrio",
    seoDescription:
      "Converta cada página de um PDF em uma imagem JPG online, de graça. Uma imagem por página, pronta para compartilhar ou publicar. Sem cadastro.",
  },
  "jpg-to-pdf": {
    name: "JPG para PDF",
    description: "Combine uma ou mais imagens em um único PDF, na ordem que você escolher.",
    seoTitle: "JPG para PDF — Juntar Imagens em um Único PDF Grátis | ConvertBrio",
    seoDescription:
      "Converta imagens JPG e PNG em um único PDF online, de graça. Junte várias fotos ou páginas digitalizadas em um documento, em ordem. Sem cadastro.",
  },
  "image-converter": {
    name: "Conversor de Imagem",
    description: "Converta imagens entre JPG, PNG, WEBP, AVIF, HEIC e GIF.",
    seoTitle: "Conversor de Imagem Online Grátis — JPG, PNG, WEBP, AVIF, HEIC | ConvertBrio",
    seoDescription:
      "Converta imagens entre JPG, PNG, WEBP, AVIF, HEIC e GIF no navegador. Grátis, sem cadastro, os arquivos são apagados automaticamente após a conversão.",
  },
  "ocr-pdf": {
    name: "OCR de PDF",
    description: "Torne um PDF digitalizado pesquisável e leve o texto para o Word.",
    seoTitle: "OCR de PDF Grátis — Documento Digitalizado para Texto e Word | ConvertBrio",
    seoDescription:
      "Aplique OCR em um PDF digitalizado para torná-lo pesquisável e levar o texto para o Word. Reconhecimento de texto online e grátis, sem cadastro.",
  },
  "compress-powerpoint": {
    name: "Comprimir PowerPoint",
    description: "Reduza o tamanho de uma apresentação PowerPoint re-codificando as imagens dos slides.",
    seoTitle: "Comprimir PowerPoint Online Grátis — Reduzir Tamanho de PPTX | ConvertBrio",
    seoDescription:
      "Comprima uma apresentação PowerPoint (.pptx) online, de graça. Re-codifica as imagens para reduzir o arquivo para e-mail, mantendo os slides editáveis.",
  },
  "compress-word": {
    name: "Comprimir Word",
    description: "Reduza o tamanho de um documento Word re-codificando as imagens embutidas.",
    seoTitle: "Comprimir Documento Word Online Grátis — Reduzir Tamanho de DOCX | ConvertBrio",
    seoDescription:
      "Comprima um documento Word (.docx) online, de graça. Re-codifica as imagens embutidas para reduzir o arquivo para e-mail, mantendo o texto intacto.",
  },
};
