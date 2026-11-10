import type { HubDoc, HubUiStrings } from "./types";

export const hubsPt: Record<"pdf" | "image" | "document" | "compress" | "ocr" | "ai", HubDoc> = {
  pdf: {
    name: "Ferramentas de PDF",
    h1: "Ferramentas de PDF: juntar, dividir, organizar, comprimir e converter",
    seoTitle: "Ferramentas de PDF Grátis: Juntar, Dividir e Comprimir | ConvertBrio",
    description:
      "Junte, divida, reordene, gire, desbloqueie, comprima e converta PDFs online. Ferramentas de PDF grátis do ConvertBrio, sem cadastro.",
    intro: [
      "O PDF foi feito para ficar igual em qualquer lugar, e é justamente por isso que ele é chato de alterar. Estas ferramentas cobrem o que as pessoas realmente precisam fazer: juntar vários arquivos, separar páginas, colocar as páginas na ordem certa, reduzir um arquivo para caber no limite de um envio e transformar páginas em imagens (ou imagens em páginas).",
      "Todas aceitam arquivos de até 100 MB e não exigem conta. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana. Escolha a tarefa abaixo ou siga um dos fluxos se o seu trabalho tiver mais de uma etapa.",
    ],
    workflows: [
      {
        title: "Preparar um PDF para um envio com limite de tamanho",
        steps: [
          "Remova as páginas desnecessárias com o organizador visual.",
          "Reduza o arquivo até o limite exato que o formulário permite.",
        ],
      },
      {
        title: "Transformar fotos do celular em um único PDF",
        steps: [
          "Reúna as fotos em um só PDF.",
          "Diminua o tamanho se ele estiver grande demais para enviar por e-mail.",
        ],
      },
      {
        title: "Montar um relatório a partir de vários documentos",
        steps: [
          "Junte os PDFs separados na ordem certa.",
          "Adicione números de página ao documento final.",
        ],
      },
    ],
    chooser: {
      heading: "Qual ferramenta de PDF devo usar?",
      body: "Use Juntar PDF para unir arquivos e Dividir PDF para separar cada página. Se você precisa manter só algumas páginas, mudar a ordem delas ou corrigir uma página deitada, o Organizador de Páginas de PDF mostra cada página antes de você decidir. Para limites de tamanho, Comprimir PDF aplica um nível padrão, enquanto Comprimir PDF para um Tamanho trabalha em direção a uma meta em KB ou MB e informa o tamanho que conseguiu alcançar.",
    },
  },
  image: {
    name: "Ferramentas de Imagem",
    h1: "Ferramentas de imagem: converter, redimensionar, comprimir e retocar fotos",
    seoTitle: "Ferramentas de Imagem Grátis: Converter e Comprimir | ConvertBrio",
    description:
      "Converta HEIC, JPG, PNG, WEBP e AVIF, redimensione para pixels exatos, comprima até um tamanho em KB, recorte, gire e remova fundos. Grátis e sem cadastro.",
    intro: [
      "A maioria dos problemas com imagens se resume a três coisas: o formato não é aceito, o tamanho em pixels está errado ou o arquivo é grande demais. As ferramentas daqui resolvem cada um desses casos de forma direta, seja para preparar uma foto de perfil, preencher um formulário ou publicar imagens em um site.",
      "As conversões mantêm a resolução original e as ferramentas de compressão trabalham em direção ao tamanho que você escolher. Nada recebe marca d'água. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
    ],
    workflows: [
      {
        title: "Preparar uma foto para um formulário de inscrição",
        steps: [
          "Redimensione para os pixels e o limite em KB exatos que o formulário pede.",
          "Remova os dados de localização e da câmera antes de enviar.",
        ],
      },
      {
        title: "Abrir uma foto de iPhone em qualquer lugar",
        steps: [
          "Converta a foto HEIC para JPG.",
          "Comprima se o arquivo ainda estiver grande demais para enviar.",
        ],
      },
      {
        title: "Otimizar um conjunto de imagens para um site",
        steps: [
          "Converta para um formato moderno, como WEBP.",
          "Comprima o conjunto inteiro para um único tamanho-alvo.",
        ],
      },
    ],
    chooser: {
      heading: "Qual ferramenta de imagem devo usar?",
      body: "Use o Conversor de Imagens quando o problema for o formato, Redimensionar Imagem para as dimensões em pixels e Comprimir Imagem quando só o tamanho do arquivo importa. Redimensionar Foto e Assinatura resolve pixels exatos e limite em KB em uma só etapa, que é o que a maioria dos formulários exige. Para vários arquivos de uma vez, use o Compressor de Imagens em Lote.",
    },
  },
  document: {
    name: "Ferramentas de Documento",
    h1: "Ferramentas de documento: Word, Excel, PowerPoint, PDF e texto",
    seoTitle: "Ferramentas de Documento Grátis: Word, Excel, PowerPoint e PDF | ConvertBrio",
    description:
      "Converta Word, Excel e PowerPoint de e para PDF, comprima arquivos do Office, extraia texto de digitalizações e remova metadados ocultos. Grátis e sem cadastro.",
    intro: [
      "Documentos circulam entre pessoas que usam programas diferentes. Estas ferramentas fazem a ponte entre Word, Excel, PowerPoint e PDF, reduzem arquivos do Office grandes demais para o e-mail, extraem texto de digitalizações e removem os dados de autoria que os arquivos carregam sem que você perceba.",
      "Cada ferramenta explica o que mantém e o que não consegue manter, por exemplo, que converter um PDF de volta para Word não reconstrói perfeitamente layouts complexos. Os envios são criptografados durante a transferência. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
    ],
    workflows: [
      {
        title: "Enviar um documento Word que não possa ser editado",
        steps: [
          "Converta para PDF para que o layout fique fixo.",
          "Se for preciso, limpe antes os dados de autor e de empresa.",
        ],
      },
      {
        title: "Editar um documento que você só tem digitalizado",
        steps: [
          "Converta a digitalização em um arquivo Word editável.",
          "Salve a versão corrigida como PDF.",
        ],
      },
      {
        title: "Enviar por e-mail uma apresentação pesada",
        steps: ["Comprima o PowerPoint até um tamanho que caiba em um e-mail."],
      },
    ],
    chooser: {
      heading: "PDF para Word ou Digitalização para Word?",
      body: "Se dá para selecionar as palavras do seu PDF, use PDF para Word, que preserva a formatação o mais fielmente possível. Se o PDF é a imagem de uma página, não há texto para converter até que ele seja reconhecido; nesse caso, use Digitalização para Word.",
    },
  },
  compress: {
    name: "Ferramentas de Compressão",
    h1: "Ferramentas de compressão: reduza o tamanho de PDFs, imagens e arquivos do Office",
    seoTitle: "Compressão de Arquivos Grátis: PDF, Imagem e Office | ConvertBrio",
    description:
      "Reduza PDFs, fotos, arquivos Word e PowerPoint para caber em um e-mail ou no limite de um envio, inclusive com metas em KB e MB. Grátis e sem cadastro.",
    intro: [
      "Formulários de envio, sistemas de e-mail e sites impõem limites de tamanho, e a forma certa de reduzir um arquivo depende do que há dentro dele. Fotos diminuem reduzindo a qualidade ou as dimensões, PDFs encolhem principalmente ao recodificar as imagens que contêm, e arquivos do Office guardam mídias incorporadas que podem ser reduzidas separadamente.",
      "Quando uma ferramenta trabalha em direção a uma meta, ela mede o resultado real e informa o tamanho alcançado, inclusive quando não dá para atingir a meta sem estragar o arquivo.",
    ],
    workflows: [
      {
        title: "Fazer um PDF digitalizado caber no limite de um portal",
        steps: [
          "Comprima o PDF até o tamanho que o portal permite.",
          "Se ainda ficar grande, divida-o em partes.",
        ],
      },
      {
        title: "Reduzir várias fotos para um único envio",
        steps: ["Comprima o lote inteiro para uma única meta em KB."],
      },
    ],
    chooser: {
      heading: "Quanto um arquivo pode diminuir?",
      body: "Depende do conteúdo. PDFs e PowerPoints cheios de fotos diminuem bastante, enquanto PDFs só de texto já são compactos. Reduzir para uma meta muito pequena custa qualidade, então parta do limite que você realmente tem, e não do menor número possível.",
    },
  },
  ocr: {
    name: "Ferramentas de OCR",
    h1: "Ferramentas de OCR: extraia texto de digitalizações, fotos e PDFs",
    seoTitle: "OCR Grátis: Imagem para Texto, Digitalização para Word | ConvertBrio",
    description:
      "Use OCR para copiar o texto de uma imagem, transformar uma digitalização em um arquivo Word editável ou tornar um PDF digitalizado pesquisável. Grátis, sem cadastro.",
    intro: [
      "Uma digitalização ou a foto de um texto é só uma imagem. O reconhecimento óptico de caracteres (OCR) lê as letras nela e entrega texto de verdade, que dá para selecionar. A ferramenta certa depende do que você quer receber: texto simples para copiar, um arquivo Word editável ou o mesmo PDF tornado pesquisável.",
      "O OCR é preciso em texto impresso limpo e de alta resolução, e muito mais fraco com letra manuscrita, digitalizações de baixa qualidade e tabelas complexas. A página de cada ferramenta explica o que esperar.",
    ],
    workflows: [
      {
        title: "Transformar uma carta digitalizada em um documento editável",
        steps: [
          "Converta a digitalização para Word.",
          "Revise o texto e depois salve como PDF.",
        ],
      },
      {
        title: "Tornar pesquisável um arquivo de digitalizações",
        steps: [
          "Execute o OCR para adicionar uma camada de texto a cada PDF.",
          "Reduza o PDF pesquisável para guardá-lo.",
        ],
      },
    ],
    chooser: {
      heading: "Qual ferramenta de OCR devo usar?",
      body: "Imagem para Texto serve para uma foto ou captura de tela quando você só quer as palavras, e as mostra na página para copiar. Digitalização para Word gera um DOCX editável a partir de uma página digitalizada ou de um PDF. OCR de PDF mantém suas páginas exatamente como estão e acrescenta uma camada de texto invisível, deixando o PDF pesquisável.",
    },
  },
  ai: {
    name: "Ferramentas de IA",
    h1: "Ferramentas de IA: melhore, amplie e recorte fotos",
    seoTitle: "Ferramentas de IA para Fotos: Melhorar, Ampliar e Remover Fundo | ConvertBrio",
    description:
      "Melhore, amplie e recorte fotos com IA, ou faça uma foto de passaporte. Grátis, sem cadastro, com avisos honestos sobre o que cada ferramenta consegue ou não fazer.",
    intro: [
      "Estas ferramentas usam modelos de aprendizado de máquina para tarefas difíceis de fazer à mão: dar nitidez a uma foto sem graça, ampliar uma imagem pequena sem que ela vire uma mancha e separar uma pessoa do fundo.",
      "O resultado da IA depende do que você envia. Uma foto nítida dá um resultado nítido, e nenhuma ferramenta daqui recupera detalhes que nunca foram capturados. Cada página explica onde a ferramenta funciona bem e onde não funciona.",
    ],
    workflows: [
      {
        title: "Melhorar uma foto pequena e sem graça",
        steps: [
          "Equilibre cor e nitidez.",
          "Amplie para imprimir ou para exibir em uma tela maior.",
        ],
      },
      {
        title: "Fazer uma imagem limpa de produto ou de perfil",
        steps: [
          "Remova o fundo.",
          "Comprima o resultado para a web.",
        ],
      },
    ],
    chooser: {
      heading: "Melhorar ou ampliar?",
      body: "Melhorar Imagem com IA corrige cor e nitidez mantendo o mesmo tamanho. O Ampliador com IA aumenta as dimensões em pixels. Se a foto é pequena e sem graça ao mesmo tempo, melhore primeiro e depois amplie.",
    },
  },
};

export const hubUiPt: HubUiStrings = {
  allTemplate: "Todas as {name}",
  workflows: "Fluxos recomendados",
  guides: "Guias",
  otherCategories: "Outras categorias de ferramentas",
  allTools: "Todas as ferramentas",
  home: "Início",
  toolLibrary: "Biblioteca de ferramentas",
  allToolsIntro: "Todas as ferramentas do ConvertBrio, organizadas por categoria. Novas ferramentas são adicionadas com frequência.",
  categoriesLabel: "Categorias de ferramentas",
  categoryGuide: "Guia da categoria",
  moreTools: "Mais ferramentas",
  moreToolsDesc: "Ferramentas complementares em outros sites do ConvertBrio.",
  categoryDescs: {
    convert: "Mude qualquer arquivo de um formato para outro.",
    compress: "Reduza o tamanho do arquivo sem perder a qualidade.",
    pdf: "Junte, divida, edite e proteja documentos PDF.",
    image: "Converta, redimensione, recorte e retoque imagens.",
    document: "Passe conteúdo entre Word, Excel, PowerPoint e PDF.",
    ai: "Melhore e restaure imagens com modelos de IA.",
  },
};
