import type { ToolContentEntry } from "../toolContent";

// Portuguese (pt-BR) long-form tool content, slice B. Links point to the /pt/ tool pages.

export const toolContentPtMoreB: Record<string, ToolContentEntry> = {
  "pdf-to-png": {
    title: "Conversor de PDF para PNG: exporte páginas sem perder nitidez",
    intro:
      "Quando você precisa de uma página de PDF como imagem sem perder nenhuma nitidez, seja para diagramas, capturas de tela ou páginas cheias de texto, o PNG é um formato de exportação melhor que o JPG. O conversor de PDF para PNG do ConvertBrio transforma cada página em um arquivo de imagem sem perdas.",
    sections: [
      {
        heading: "Como converter PDF para PNG",
        body: "Envie o seu PDF e o ConvertBrio renderiza cada página como uma imagem PNG em qualidade máxima. PDFs com várias páginas geram um PNG por página, baixados juntos como o conjunto final.",
      },
      {
        heading: "Por que escolher PNG em vez de JPG",
        body: "A compressão sem perdas do PNG mantém texto pequeno, traços finos e bordas nítidas livres do leve embaçamento que a compressão do JPG pode causar. Isso faz mais diferença em páginas com letras miúdas, diagramas técnicos ou conteúdo que você pretende ampliar ou editar depois.",
      },
      {
        heading: "O que considerar sobre o tamanho do arquivo",
        body: "As exportações em PNG costumam ser maiores que as equivalentes em JPG, principalmente em páginas com muito detalhe visual. Se o tamanho do arquivo importa mais que a nitidez perfeita, por exemplo para compartilhar de forma informal ou publicar na internet, PDF para JPG pode ser a escolha mais prática.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter páginas de PDF em imagens PNG.",
    faq: [
      {
        question: "Por que usar PNG em vez de JPG para uma página de PDF?",
        answer:
          "O PNG é sem perdas, então mantém texto e detalhes finos mais nítidos que o JPG, cuja compressão pode suavizar um pouco letras pequenas e traços finos. Use PNG quando a clareza importar mais que o tamanho do arquivo.",
      },
      {
        question: "O PDF para PNG converte documentos com várias páginas?",
        answer: "Sim, cada página do PDF é renderizada como uma imagem PNG própria, então um documento com várias páginas gera uma imagem por página.",
      },
      {
        question: "Os arquivos PNG serão maiores que as exportações em JPG?",
        answer:
          "Em geral, sim, já que o PNG não descarta detalhes como a compressão com perdas do JPG. Para compartilhamento casual em que o tamanho pesa mais, PDF para JPG pode ser a melhor opção.",
      },
    ],
  },

  "image-to-pdf": {
    title: "Conversor de Imagem para PDF: junte fotos em um único documento",
    intro:
      "Seja para enviar páginas digitalizadas, montar um portfólio de fotos ou transformar recibos em um único arquivo para compartilhar, a ferramenta Imagem para PDF do ConvertBrio combina uma ou mais imagens (JPG, PNG, WEBP, HEIC, AVIF ou GIF) em um só documento PDF, na ordem que você escolher.",
    sections: [
      {
        heading: "Como converter imagens em PDF",
        body: "Envie uma ou mais imagens em qualquer formato comum, organize na ordem em que devem aparecer e o ConvertBrio as junta em um único PDF com uma imagem por página. O resultado é baixado pronto para compartilhar, imprimir ou enviar.",
      },
      {
        heading: "Usos comuns",
        body: "Esta é a forma padrão de enviar documentos de identidade digitalizados, juntar fotos HEIC de recibos ou contratos tiradas no iPhone em um único arquivo para uma solicitação, ou transformar um conjunto de imagens em um documento simples de compartilhar, sem precisar de programa de design ou de edição de PDF.",
      },
      {
        heading: "Combinando muitas imagens de uma vez",
        body: "Você pode enviar várias imagens de uma só vez, de graça e sem criar conta.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter imagens em PDF.",
    faq: [
      {
        question: "Posso juntar várias imagens em um único PDF?",
        answer:
          "Sim, envie quantas imagens precisar de uma só vez e o ConvertBrio as combina em um PDF, com cada imagem em uma página própria, na ordem que você definir.",
      },
      {
        question: "Funciona com fotos HEIC do iPhone?",
        answer:
          "Sim, o Imagem para PDF aceita fotos HEIC e HEIF diretamente, além de JPG, PNG, WEBP, AVIF e GIF, então você não precisa converter as fotos do iPhone antes.",
      },
      {
        question: "Quais formatos de imagem esta ferramenta aceita?",
        answer: "O Imagem para PDF aceita imagens JPG, PNG, WEBP, HEIC, HEIF, AVIF e GIF, todas combinadas em um único PDF.",
      },
    ],
  },

  "word-to-jpg": {
    title: "Conversor de Word para JPG: exporte as páginas do documento como imagens",
    intro:
      "Às vezes você precisa da página de um documento do Word como imagem, e não como arquivo editável: para uma miniatura de prévia, uma publicação em rede social ou para inserir numa ferramenta que não lida com documentos. O conversor de Word para JPG do ConvertBrio exporta cada página do seu arquivo DOCX como uma imagem JPG.",
    sections: [
      {
        heading: "Como converter Word para JPG",
        body: "Envie o seu arquivo DOCX e o ConvertBrio renderiza cada página como uma imagem JPG, preservando o layout e a formatação do documento como apareceriam na impressão. Documentos com várias páginas geram uma imagem por página.",
      },
      {
        heading: "Usos comuns",
        body: "É útil para criar uma prévia visual rápida de um documento, compartilhar uma única página como imagem em redes sociais ou aplicativos de mensagem, ou inserir uma página do documento em um site ou apresentação em que um arquivo ao vivo não é prático.",
      },
      {
        heading: "PNG para texto mais nítido",
        body: "Se a página exportada tem letras pequenas ou detalhes finos que você quer manter perfeitamente nítidos, use Word para PNG: o formato sem perdas do PNG evita o leve embaçamento que a compressão do JPG pode causar nas bordas do texto.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter documentos do Word em imagens JPG.",
    faq: [
      {
        question: "Como transformo a página de um documento do Word em imagem?",
        answer: "Envie o seu arquivo DOCX para a ferramenta Word para JPG do ConvertBrio e ela renderiza cada página do documento como uma imagem JPG que você pode baixar.",
      },
      {
        question: "Funciona para documentos com várias páginas?",
        answer: "Sim, cada página do documento é exportada como uma imagem JPG própria, então um arquivo com várias páginas gera um conjunto completo de imagens.",
      },
      {
        question: "Devo usar JPG ou PNG para um documento com letras pequenas?",
        answer:
          "O PNG mantém letras pequenas e detalhes finos mais nítidos por ser sem perdas. Use Word para PNG se texto nítido for mais importante que o arquivo menor que o JPG oferece.",
      },
    ],
  },

  "word-to-png": {
    title: "Conversor de Word para PNG: exporte páginas com clareza total",
    intro:
      "Quando a página de um documento do Word precisa virar imagem sem perder nenhuma nitidez, seja com diagramas detalhados, tabelas ou letras miúdas, o PNG é um formato de exportação melhor que o JPG. O conversor de Word para PNG do ConvertBrio renderiza cada página do seu arquivo DOCX como uma imagem PNG sem perdas.",
    sections: [
      {
        heading: "Como converter Word para PNG",
        body: "Envie o seu arquivo DOCX e o ConvertBrio renderiza cada página como uma imagem PNG em qualidade máxima, preservando detalhes finos e a nitidez do texto. Documentos com várias páginas geram um PNG por página.",
      },
      {
        heading: "Por que PNG para documentos com muito detalhe",
        body: "A compressão sem perdas do PNG evita o embaçamento em volta do texto e das linhas finas que a compressão do JPG pode causar. Isso pesa mais em páginas com tabelas, diagramas, letras miúdas ou conteúdo que você pretende ampliar.",
      },
      {
        heading: "Quando o JPG pode ser melhor",
        body: "Se o tamanho do arquivo importa mais que a nitidez perfeita, para compartilhar rápido ou fazer prévias informais, Word para JPG gera um arquivo menor, com só uma pequena diferença de qualidade visual na maioria dos documentos.",
      },
      {
        heading: "Layout, downloads e limites",
        body: "Seu DOCX é primeiro diagramado em uma página A4 padrão, então formatações complexas específicas do Word, como cabeçalhos e rodapés, notas de rodapé ou tamanhos de página incomuns, podem ficar um pouco diferentes do que no próprio Word. Um documento de uma página é baixado como um único PNG; documentos com várias páginas são baixados em um arquivo ZIP com um PNG por página. Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter documentos do Word em imagens PNG.",
    faq: [
      {
        question: "Por que escolher PNG em vez de JPG para a página de um documento?",
        answer:
          "O PNG é sem perdas, então mantém texto, tabelas e diagramas mais nítidos que o JPG, cuja compressão pode suavizar um pouco os detalhes finos. Escolha PNG quando a clareza for o mais importante.",
      },
      {
        question: "O Word para PNG aceita documentos com várias páginas?",
        answer:
          "Sim, cada página do seu arquivo DOCX é renderizada como uma imagem PNG separada. Um documento de uma página é baixado direto como PNG; várias páginas são baixadas juntas em um arquivo ZIP.",
      },
      {
        question: "A formatação exata do meu documento será preservada?",
        answer:
          "Texto, títulos, listas, tabelas e imagens são mantidos, mas layouts muito complexos específicos do Word (cabeçalhos e rodapés personalizados, tamanhos de página incomuns) podem ficar um pouco diferentes, já que a página é reconstruída em um layout A4 padrão, e não renderizada pelo próprio Word.",
      },
    ],
  },

  "excel-to-pdf": {
    title: "Conversor de Excel para PDF: fixe o layout da planilha para compartilhar",
    intro:
      "Uma planilha pode ter aparência diferente conforme a largura das colunas, as fontes ou a versão do programa em que é aberta, o que é um problema quando você precisa que um relatório financeiro, uma fatura ou uma tabela de dados fique exatamente igual em qualquer lugar. O conversor de Excel para PDF do ConvertBrio transforma sua planilha em um PDF fixo, pronto para imprimir, que aparece de forma idêntica em qualquer dispositivo ou programa.",
    sections: [
      {
        heading: "Como converter Excel para PDF",
        body: "Envie o seu arquivo .xls ou .xlsx e o ConvertBrio renderiza cada planilha como uma página (ou um conjunto de páginas) em um PDF, preservando os dados, a formatação das células e as células mescladas. O arquivo convertido é baixado automaticamente e fica pronto para enviar por e-mail, imprimir ou arquivar.",
      },
      {
        heading: "Por que converter para PDF antes de compartilhar",
        body: "O PDF é o formato padrão para documentos finalizados porque aparece de forma idêntica em qualquer dispositivo e sistema operacional, ao contrário de uma planilha, que pode se reorganizar ou ficar diferente conforme o que está instalado. Converter fixa o layout antes de um relatório, fatura ou tabela de dados sair das suas mãos, e evita que o destinatário precise ter o Excel instalado para abrir.",
      },
      {
        heading: "Casos de uso comuns",
        body: "A ferramenta costuma ser usada para compartilhar relatórios financeiros e faturas com quem não tem o Excel, arquivar uma versão fixa de uma planilha antes que ela mude de novo e preparar tabelas de dados para impressão ou distribuição oficial.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter planilhas do Excel em PDF.",
    faq: [
      {
        question: "Como converto um arquivo do Excel em PDF?",
        answer:
          "Envie o seu arquivo .xls ou .xlsx para a ferramenta Excel para PDF do ConvertBrio e ela gera uma versão em PDF formatada, pronta para baixar, sem precisar ter o Microsoft Excel instalado.",
      },
      {
        question: "A formatação e as fórmulas da minha planilha continuam iguais?",
        answer:
          "A formatação das células, as células mescladas e o layout são preservados. As fórmulas são convertidas no último valor calculado, e não continuam como fórmulas ativas, já que o PDF é um documento fixo e estático, e não uma planilha editável.",
      },
      {
        question: "E se a minha planilha tiver várias abas?",
        answer:
          "Cada aba da sua pasta de trabalho é convertida e colocada em uma página própria (ou em um conjunto de páginas) no PDF resultante, na mesma ordem em que aparecem no arquivo original.",
      },
    ],
  },

  "powerpoint-to-pdf": {
    title: "Conversor de PowerPoint para PDF: compartilhe slides sem precisar do PowerPoint",
    intro: [
      "Compartilhar uma apresentação com quem não tem o PowerPoint, travar a versão final antes de uma revisão ou reduzir uma apresentação enorme para que ela caiba num e-mail: tudo isso costuma começar convertendo o .pptx em PDF. O conversor de PowerPoint para PDF do ConvertBrio faz isso no navegador, de graça, com uma página por slide e sem marca d'água.",
      "Um PDF abre em qualquer dispositivo, não é editado por acidente e, em apresentações cheias de imagens, costuma ficar bem menor que o .pptx original depois de passar também pelo Comprimir PDF.",
    ],
    howTo: [
      {
        step: "Salve a apresentação como .pptx",
        detail: "No PowerPoint, vá em Arquivo → Salvar Como → Apresentação do PowerPoint (.pptx). O formato antigo .ppt não é aceito.",
      },
      { step: "Envie o arquivo", detail: "Arraste para a caixa ou procure no computador. Um arquivo por vez, até 100 MB." },
      { step: "Converta para PDF", detail: "O ConvertBrio renderiza cada slide como uma página inteira. O PDF é baixado automaticamente." },
      {
        step: "Se quiser, comprima",
        detail: "Se a apresentação tem muitas imagens e o PDF continua grande, passe-o pelo Comprimir PDF para re-codificar as imagens embutidas.",
      },
    ],
    sections: [
      {
        heading: "Por que converter para PDF antes de compartilhar",
        body: "Um .pptx precisa do PowerPoint ou de um visualizador compatível e pode aparecer de forma diferente conforme as fontes instaladas no computador de quem recebe: marcadores mudam de lugar, o texto transborda da caixa, uma fonte personalizada é trocada por uma genérica. O PDF é fixo: o que você envia é exatamente o que a pessoa vê, no celular, num Mac ou num notebook de trabalho bloqueado e sem Office.",
      },
      {
        heading: "Como deixar um PowerPoint menor",
        body: [
          "Uma ferramenta própria de Comprimir PowerPoint, que mantém o arquivo editável, ainda está em desenvolvimento. Enquanto isso, o caminho mais confiável para reduzir o tamanho de uma apresentação antes de enviar por e-mail é este, em duas etapas:",
          "Converta o .pptx em PDF aqui e depois passe o PDF pelo Comprimir PDF. Ele re-codifica cada foto e captura de tela com uma qualidade eficiente e reduz as imagens grandes demais, que é onde está quase todo o peso de uma apresentação pesada. O resultado é um arquivo fácil de compartilhar e que qualquer um consegue abrir, geralmente bem menor que o original. O porém é que a saída é um PDF, e não uma apresentação editável.",
        ],
      },
      {
        heading: "O que é mantido e o que não é",
        body: "Texto, imagens e layout dos slides são convertidos sem problemas. Animações e transições de slide não existem num PDF estático, então são descartadas. Gráficos, SmartArt e tabelas incorporadas são renderizados como aparecem no slide, mas não são interativos. Se a sua apresentação depende muito de efeitos e animações, confira o PDF antes de enviar para saber como ele se lê sem movimento.",
      },
      {
        heading: "Privacidade e limites",
        body: "O arquivo é criptografado em trânsito. Seu arquivo original é apagado logo depois de lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana. Um .pptx por vez, até 100 MB, grátis, sem conta e sem marca d'água.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter apresentações do PowerPoint em PDF.",
    faq: [
      {
        question: "Como converto um arquivo do PowerPoint em PDF de graça?",
        answer:
          "Envie o seu .pptx para a ferramenta PowerPoint para PDF do ConvertBrio e ela gera um PDF com uma página por slide, pronto para baixar: sem instalar o PowerPoint, sem conta e sem marca d'água.",
      },
      {
        question: "Como comprimo um PowerPoint para enviar por e-mail?",
        answer:
          "Converta o .pptx em PDF aqui e depois passe esse PDF pelo Comprimir PDF. Ele re-codifica as imagens embutidas, que respondem pela maior parte do tamanho de uma apresentação grande. O resultado fica bem menor, mas é um PDF, e não uma apresentação editável.",
      },
      {
        question: "As animações e transições são mantidas?",
        answer: "Não, o PDF é estático, então animações e transições são descartadas. Texto, imagens, gráficos e o layout dos slides são preservados como aparecem em cada slide.",
      },
      {
        question: "Funciona com arquivos .ppt antigos?",
        answer: "Só com o formato moderno .pptx. Abra o arquivo no PowerPoint e salve como .pptx (Arquivo → Salvar Como), depois converta.",
      },
      {
        question: "Posso colocar dois slides por página ou usar o layout de folheto?",
        answer: "No momento não, o conversor renderiza um slide inteiro por página. Para layouts de folheto, exporte direto pelo PowerPoint.",
      },
    ],
  },

  "merge-documents": {
    title: "Juntar Documentos: combine Word, Excel e PowerPoint em um único PDF",
    intro:
      "Combinar uma mistura de arquivos do Word, Excel e PowerPoint em um único PDF costuma significar converter cada um separadamente e depois juntar tudo à mão. A ferramenta Juntar Documentos do ConvertBrio faz o processo inteiro em uma só etapa.",
    sections: [
      {
        heading: "Como juntar documentos",
        body: "Envie vários arquivos, em qualquer mistura de Word, Excel, PowerPoint e PDF, e o ConvertBrio converte cada um para PDF e os combina em um único documento ordenado. O PDF final é baixado automaticamente, pronto para enviar por e-mail, imprimir ou arquivar.",
      },
      {
        heading: "Por que juntar em um só PDF",
        body: "Um único PDF é mais fácil de compartilhar, revisar e arquivar do que um monte de arquivos soltos em formatos diferentes, e garante que o destinatário veja tudo na ordem pretendida sem precisar ter Word, Excel ou PowerPoint instalado.",
      },
      {
        heading: "Mantendo a ordem dos documentos",
        body: "Os arquivos são combinados na ordem em que você os envia, então organize a seleção antes de enviar se o documento final precisar de uma sequência específica: por exemplo, uma capa, depois um relatório e depois os dados da planilha de apoio.",
      },
      {
        heading: "Limites e privacidade",
        body: "Você pode combinar até 25 arquivos, com tamanho total de 100 MB, de uma só vez. Seus arquivos originais são apagados logo depois de lidos para a conversão. O PDF final é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), e não no seu navegador, sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como juntar arquivos do Word, Excel e PowerPoint em um único PDF.",
    faq: [
      {
        question: "Quais tipos de arquivo posso combinar?",
        answer:
          "Qualquer mistura de arquivos Word (.docx), Excel (.xlsx, .xls), PowerPoint (.pptx) e PDF no mesmo envio: cada arquivo que não é PDF é convertido primeiro, e depois todos são juntados.",
      },
      {
        question: "Em que ordem meus arquivos são juntados?",
        answer: "Os arquivos são combinados na ordem em que você os envia. Organize a seleção antes, se precisar de uma sequência específica no documento final.",
      },
      {
        question: "Funciona com arquivos antigos .doc, .ppt e .xls?",
        answer:
          "Os formatos antigos .doc e .ppt não são aceitos: salve esses arquivos como .docx ou .pptx antes. Planilhas antigas .xls funcionam, pois a conversão de Excel do ConvertBrio lê esse formato nativamente.",
      },
    ],
  },

  "remove-background": {
    title: "Removedor de Fundo com IA: recortes transparentes automáticos",
    intro: [
      "Recortar um objeto do fundo normalmente exige um programa de design e uma máscara manual cuidadosa em volta de cada fio de cabelo. O removedor de fundo com IA do ConvertBrio faz isso automaticamente: envie uma foto e receba o objeto de volta sobre fundo transparente em segundos, como um PNG pronto para colocar em qualquer novo cenário.",
      "É grátis, não exige conta e não coloca marca d'água. Seu arquivo original é apagado logo depois de lido para o processamento, e o resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), automaticamente, sem revisão humana.",
    ],
    howTo: [
      { step: "Envie uma foto", detail: "JPG, PNG, WEBP, HEIC ou AVIF, até 100 MB. Funciona melhor com um objeto bem definido sobre um fundo razoavelmente simples." },
      { step: "Deixe o modelo processar", detail: "A IA detecta o objeto principal, seja uma pessoa, um produto ou um item, e apaga todo o resto." },
      {
        step: "Baixe o PNG transparente",
        detail: "O recorte é baixado como PNG com fundo transparente, que você pode colocar em um site, em uma arte ou sobre uma cor sólida.",
      },
    ],
    sections: [
      {
        heading: "O que você pode fazer com o recorte",
        body: "",
        list: [
          "Colocar a foto de um produto sobre um fundo branco limpo ou com a cor da marca, para o anúncio de uma loja",
          "Inserir um retrato em uma página de equipe, um crachá ou um slide",
          "Criar um adesivo, logo ou arte sem aquele fundo quadrado",
          "Montar o objeto em uma cena diferente",
          "Criar uma foto no estilo passaporte, embora o Criador de Foto 3x4 e Passaporte já faça o tamanho e o fundo branco para você em uma só etapa",
        ],
      },
      {
        heading: "Como conseguir bordas mais limpas",
        body: "Os resultados são melhores quando o objeto se destaca claramente do que está atrás dele: boa iluminação, fundo relativamente simples e contraste razoável nas bordas. O modelo pode ter dificuldade com fios de cabelo soltos e finos, objetos transparentes ou de vidro, limites de baixo contraste (um casaco cinza contra uma parede cinza) e fotos com várias pessoas sobrepostas. Se uma borda sair áspera, uma foto de origem mais limpa costuma resolver; para pequenos retoques, corte o resultado com a ferramenta Recortar Imagem.",
      },
      {
        heading: "Privacidade",
        body: "O modelo de remoção de fundo é de código aberto e roda na nossa própria infraestrutura: sua foto não é enviada a nenhuma API externa e nenhuma pessoa a vê. Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de lido para o processamento. O recorte é apagado por uma limpeza diária, normalmente em cerca de 24 horas, quer você o baixe ou não. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre o removedor de fundo com IA do ConvertBrio.",
    faq: [
      {
        question: "O removedor de fundo é grátis?",
        answer: "Sim, sem conta, sem marca d'água e sem limite de quantidade de fotos. Os envios podem ter até 100 MB.",
      },
      {
        question: "Em que formato recebo o resultado?",
        answer: "Um PNG com fundo transparente: o formato padrão sem perdas para imagens sem fundo sólido. Abra em qualquer editor para colocá-lo sobre um novo fundo.",
      },
      {
        question: "Funciona com qualquer tipo de foto?",
        answer:
          "Foi feito para assuntos comuns, como pessoas, produtos e objetos sobre um fundo razoavelmente claro. Cenas poluídas, objetos de vidro, cabelos finos e bordas de baixo contraste são mais difíceis e podem exigir uma foto de origem mais limpa.",
      },
      {
        question: "Funciona em fotos com vários objetos?",
        answer: "Ele é otimizado para um único objeto principal bem definido. Vários objetos sobrepostos podem ficar com bordas menos precisas.",
      },
      {
        question: "Minha foto é enviada para o serviço de IA de outra empresa?",
        answer:
          "Não. Seu arquivo original é apagado logo depois de lido para o processamento, e o resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), com software de código aberto e sem revisão humana.",
      },
    ],
  },

  "passport-photo-maker": {
    title: "Criador de Foto 3x4 e Passaporte: ferramenta online grátis para foto no tamanho de passaporte",
    intro: [
      "Uma foto de passaporte aceita exige fundo branco liso, o rosto centralizado e no tamanho certo e as dimensões físicas corretas, o que normalmente significa ir a uma farmácia ou a um estúdio fotográfico. O criador de fotos de passaporte do ConvertBrio faz as três coisas automaticamente: envie uma selfie ou qualquer retrato nítido e receba em segundos uma foto pronta para imprimir, com fundo branco limpo, em 2×2 polegadas ou 35×45 mm.",
      "É grátis, sem conta e sem marca d'água. Seu arquivo original é apagado logo depois de lido para o processamento, e o resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
    ],
    howTo: [
      {
        step: "Tire um retrato simples",
        detail: "De frente, expressão neutra, iluminação uniforme, cabeça e ombros no quadro com espaço em volta. Uma selfie de celular diante de uma parede clara serve.",
      },
      { step: "Envie a foto", detail: "Uma pessoa por foto, até 100 MB. Fotos em grupo e close-ups muito cortados não são processados." },
      {
        step: "Escolha o tamanho da foto",
        detail: "Escolha 2×2 polegadas (padrão dos EUA) ou 35×45 mm (o tamanho usado em muitos outros países). Confira qual dos dois o seu formulário ou órgão emissor pede.",
      },
      {
        step: "Deixe a ferramenta montar a foto",
        detail: "O ConvertBrio encontra o seu rosto, corta e centraliza nas proporções de passaporte do tamanho escolhido, remove o fundo e o preenche com branco sólido.",
      },
      {
        step: "Baixe e imprima",
        detail: "O formato 2×2 polegadas gera uma imagem de 1200×1200 pixels a 600 DPI; o de 35×45 mm gera uma de 413×531 pixels a 300 DPI. Imprima no tamanho físico correspondente.",
      },
    ],
    sections: [
      {
        heading: "Como funciona",
        body: "Envie uma foto e o ConvertBrio detecta o seu rosto, corta e centraliza nas proporções padrão de passaporte, remove o fundo original e o substitui por branco sólido. Em seguida gera o tamanho escolhido: 2×2 polegadas a 600 DPI (1200×1200 pixels) ou 35×45 mm a 300 DPI (413×531 pixels). A cabeça é dimensionada e posicionada separadamente para cada formato, então a foto de 35×45 mm é um corte de retrato de verdade, e não um quadrado aparado. Não há nada para posicionar ou ajustar manualmente.",
      },
      {
        heading: "Qual tamanho escolher",
        body: "A ferramenta oferece dois tamanhos. As regras de passaporte e visto variam conforme o país e até conforme o documento; confira sempre a exigência atual do órgão emissor antes de escolher ou enviar.",
        table: {
          headers: ["Tamanho", "Saída", "Uso mais comum"],
          rows: [
            ["2 × 2 pol. (51 × 51 mm)", "1200 × 1200 px a 600 DPI", "Passaportes e vistos dos Estados Unidos"],
            ["35 × 45 mm", "413 × 531 px a 300 DPI", "Passaportes e documentos de identidade do Reino Unido, de Schengen/UE e de muitos outros países"],
          ],
        },
      },
      {
        heading: "Como obter o melhor resultado",
        body: "Use uma foto bem iluminada, de frente, com a cabeça e os ombros inteiros visíveis e algum espaço em volta: uma selfie de celular diante de uma parede lisa funciona bem. Evite fotos em que a cabeça está colada nas bordas, pois a ferramenta precisa de espaço acima da cabeça e em volta dos ombros para calcular um corte nas proporções corretas. Uma pessoa por foto; fotos em grupo ou close-ups muito cortados não são processados corretamente.",
      },
      {
        heading: "O que esta ferramenta não garante",
        body: "Ela produz uma foto com aparência profissional, no tamanho certo e centralizada, com um fundo branco genuíno: não é uma verificação de conformidade certificada. Não confere a uniformidade da iluminação, a expressão, o reflexo nos óculos nem os demais critérios que uma análise oficial ICAO ou governamental faz manualmente. Para um pedido de passaporte com exigências rígidas de aceitação, trate o resultado como um ótimo ponto de partida e confirme os requisitos atuais de foto do seu país antes de enviar.",
      },
      {
        heading: "Privacidade",
        body: "A detecção de rosto e a remoção de fundo rodam com modelos de código aberto na nossa própria infraestrutura: sua foto não é enviada a nenhuma API de terceiros nem revisada por uma pessoa. Seu arquivo original é apagado logo depois de lido para o processamento. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre o criador de fotos de passaporte do ConvertBrio.",
    faq: [
      {
        question: "Que tamanho de foto ele gera?",
        answer: "Você escolhe entre dois tamanhos: 2×2 polegadas (1200×1200 pixels a 600 DPI) ou 35×45 mm (413×531 pixels a 300 DPI). Confira qual deles o seu formulário ou órgão emissor exige.",
      },
      {
        question: "É grátis?",
        answer: "Sim. Enviar uma foto e gerar uma foto no tamanho de passaporte com fundo branco não exige conta nem pagamento.",
      },
      {
        question: "Essa foto será com certeza aceita no meu pedido de passaporte?",
        answer:
          "Ela gera uma foto no tamanho certo, centralizada e com fundo branco genuíno, o que cobre os motivos de recusa mais comuns. Não faz uma verificação oficial completa de conformidade (iluminação, expressão, reflexo nos óculos), então confirme os requisitos atuais do seu país antes de enviar um pedido oficial.",
      },
      {
        question: "E se aparecer que nenhum rosto foi encontrado, ou mais de um rosto?",
        answer: "Use uma foto nítida, de frente, bem iluminada e com exatamente uma pessoa no quadro. Fotos em grupo, de perfil ou muito escuras ou borradas podem impedir a detecção do rosto.",
      },
      {
        question: "Por que apareceu que não há espaço suficiente em volta do rosto?",
        answer: "A ferramenta precisa de margem visível acima da cabeça e em volta dos ombros na foto original para calcular um corte nas proporções corretas. Se a sua foto já está cortada rente ao rosto, tire outra um pouco mais de longe.",
      },
    ],
  },

  "ai-image-enhancer": {
    title: "Melhorar Imagem com IA",
    intro:
      "Fotos sem contraste, subexpostas ou levemente desfocadas muitas vezes só precisam de um ajuste automático consistente, e não de edição manual. O melhorador de imagem do ConvertBrio equilibra automaticamente a exposição e as cores e realça os detalhes em uma só etapa, sem controles deslizantes.",
    sections: [
      {
        heading: "O que esta ferramenta faz",
        body: "O melhorador aplica à sua foto um conjunto fixo e automático de ajustes: amplia o contraste para usar toda a faixa de tons, eleva um pouco a saturação e o brilho e realça os detalhes, gerando um resultado consistentemente melhor sem que você precise regular cada configuração.",
      },
      {
        heading: "Como funciona",
        body: "Envie uma imagem e o ConvertBrio a passa por um fluxo automático de processamento (normalização de contraste, cor e nitidez) diretamente nos nossos servidores: um algoritmo determinístico, e não um modelo de IA generativa, e é por isso que os resultados são consistentes e o processamento é rápido.",
      },
      {
        heading: "O que ele não resolve",
        body: "É uma passada de melhoria, e não uma ferramenta de aumento de resolução ou de restauração: não recupera com nitidez detalhes de uma imagem de resolução muito baixa, não corrige desfoque de movimento nem fotos fora de foco e não reconstrói detalhes que faltam. Para aumentar a resolução com um modelo treinado de super-resolução, use o Ampliador com IA.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre o melhorador de imagem do ConvertBrio.",
    faq: [
      {
        question: "Que tipo de melhoria ele faz?",
        answer: "Ele amplia o contraste automaticamente, eleva um pouco a cor e o brilho e realça os detalhes: uma passada de ajuste fixa e consistente, em vez de edição manual foto a foto.",
      },
      {
        question: "Qual a diferença para o Ampliador com IA?",
        answer:
          "O Melhorar Imagem com IA aplica ajustes automáticos na mesma resolução, com um fluxo fixo de processamento de imagem. O Ampliador com IA é uma ferramenta à parte que usa um modelo treinado de super-resolução para aumentar a resolução da imagem e reconstruir detalhes.",
      },
      {
        question: "Existe limite de tamanho de arquivo?",
        answer:
          "Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de lido para o processamento. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
  },

  "ai-upscaler": {
    title: "Ampliador de Imagem com IA: aumente a resolução sem borrar",
    intro: [
      "Ampliar uma imagem pequena ou de baixa resolução com um redimensionamento comum apenas espalha os pixels existentes por uma área maior, deixando o resultado suave e quadriculado. O ampliador com IA do ConvertBrio usa um modelo treinado de super-resolução para aumentar a resolução em cerca de 4×, reconstruindo detalhes plausíveis (bordas, textura, estrutura fina) em vez de esticar o que já existe.",
    ],
    howTo: [
      { step: "Envie a imagem que quer ampliar", detail: "Fotos do mundo real funcionam melhor. JPG, PNG, WEBP, HEIC ou AVIF, até 100 MB." },
      {
        step: "Execute a ampliação",
        detail: "Um modelo de IA incluído reconstrói os detalhes a cerca de 4× a resolução da imagem enviada, trabalhando em blocos para controlar a memória. Leva alguns segundos a mais que uma conversão simples.",
      },
      { step: "Baixe o PNG", detail: "O resultado é sempre um PNG com 4× a resolução da imagem de entrada (possivelmente reduzida antes)." },
    ],
    sections: [
      {
        heading: "Ampliar ou redimensionar",
        body: "A ferramenta Redimensionar Imagem altera as dimensões em pixels com interpolação padrão: ótima para diminuir uma imagem, mas não consegue acrescentar detalhes que não estão no arquivo, então ampliar deixa tudo borrado. A ampliação com IA é a abordagem oposta: o modelo aprendeu como é o detalhe real de uma foto e pinta uma versão convincente em alta resolução. Use o redimensionamento para diminuir e o ampliador para aumentar.",
      },
      {
        heading: "Quando ajuda mais",
        body: "",
        list: [
          "Ampliar uma foto antiga, pequena ou de baixa resolução para imprimir",
          "Preparar uma imagem do tamanho da web para uma tela grande ou de alta densidade de pixels",
          "Recuperar um tamanho utilizável a partir de uma foto muito recortada",
          "Dar mais nitidez a uma imagem levemente suave (embora o Melhorar Imagem com IA seja melhor para ajustes no mesmo tamanho)",
        ],
      },
      {
        heading: "O que esperar",
        body: "Os resultados são mais fortes em fotografias naturais: pessoas, lugares, objetos. O modelo pode ter dificuldade com texto denso, desenhos de linha nítidos, capturas de tela e gráficos muito estilizados, às vezes inventando texturas que não existiam. Imagens de origem de resolução muito alta são reduzidas antes da ampliação para manter o processamento razoável, então enviar uma foto já grande não rende muito. É uma reconstrução, e não a recuperação do detalhe original verdadeiro.",
      },
      {
        heading: "Privacidade e limites",
        body: "O modelo roda na nossa própria infraestrutura, sem serviço de IA de terceiros. Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de lido para o processamento. O resultado ampliado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre o ampliador de imagem com IA do ConvertBrio.",
    faq: [
      {
        question: "Qual a diferença entre ampliar com IA e simplesmente redimensionar a imagem para maior?",
        answer: "O redimensionamento comum estica os pixels existentes, o que deixa o resultado borrado. A ampliação com IA reconstrói detalhes plausíveis com um modelo treinado, gerando uma ampliação bem mais nítida.",
      },
      {
        question: "Quanto maior a imagem fica?",
        answer: "Cerca de 4× a resolução da imagem enviada (que antes é reduzida, se for muito grande). A saída é um PNG.",
      },
      {
        question: "Funciona com texto ou capturas de tela?",
        answer: "Foi ajustado para fotografias. Texto denso, desenhos de linha e capturas de tela podem sair com detalhes inventados ou borrados: um redimensionamento simples costuma ser mais seguro nesses casos.",
      },
      {
        question: "Existe limite de tamanho de arquivo?",
        answer:
          "Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de lido para o processamento. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas.",
      },
      {
        question: "Por que o processamento demorou um pouco?",
        answer: "O modelo roda nos nossos servidores e processa imagens grandes em blocos para controlar a memória, então leva alguns segundos a mais que uma simples conversão de formato.",
      },
    ],
  },

  "compress-pdf-to-size": {
    title: "Comprimir um PDF para um tamanho específico em KB ou MB",
    intro: [
      "Portais de envio, candidaturas a vagas e sistemas de e-mail costumam recusar um PDF acima de um limite rígido: 200 KB, 500 KB, 2 MB. Esta ferramenta recebe esse limite como dado. Informe o tamanho máximo e o ConvertBrio comprime o seu PDF por etapas, medindo o tamanho real do arquivo após cada uma, até ele caber.",
      "Ao contrário de um compressor genérico, que só reduz o arquivo o máximo que consegue, esta ferramenta trabalha em direção ao seu número e diz a verdade sobre o resultado. Ela mostra o tamanho alcançado e, se o seu limite for pequeno demais para ser atingido sem estragar as páginas, avisa em vez de fingir.",
    ],
    howTo: [
      { step: "Envie o PDF", detail: "Um arquivo por vez, até 100 MB." },
      { step: "Informe o tamanho máximo", detail: "Digite o número que consta no formulário e escolha KB ou MB." },
      { step: "Comprima", detail: "Testamos configurações cada vez mais fortes e paramos no primeiro resultado que cabe abaixo do seu limite." },
      { step: "Confira o tamanho alcançado", detail: "A mensagem de resultado mostra o tamanho obtido. Baixe o arquivo ou tente um limite maior se a meta não foi atingida." },
    ],
    sections: [
      {
        heading: "Como funciona a busca pelo tamanho exato",
        body: "Uma única passada raramente cai num número específico, então a ferramenta percorre uma escada de configurações. Cada etapa re-codifica as fotos embutidas do seu arquivo original em resolução e qualidade menores que a anterior, começando suave e ficando mais forte. Depois de cada etapa, a saída real é medida. O primeiro resultado igual ou abaixo do seu limite é o que você recebe, o que significa que você mantém o máximo de qualidade que a sua meta permite.",
      },
      {
        heading: "Quando não é possível atingir a meta",
        body: "Alguns PDFs simplesmente não encolhem muito: arquivos feitos de gráficos vetoriais ou de texto puro já são pequenos, e um limite de 20 KB para uma digitalização de 40 páginas não é realista. Se até a configuração mais forte deixar o arquivo acima do seu limite, a ferramenta nunca informa sucesso. Ela devolve a menor versão que conseguiu fazer, mostra esse tamanho e sugere alternativas, como um limite maior ou dividir o PDF em partes.",
      },
      {
        heading: "O que é alterado",
        body: "As imagens JPEG embutidas são re-comprimidas e, se forem muito grandes, reduzidas, e propriedades do documento como título e autor são apagadas. Texto, fontes e layout de página não são tocados. PDFs digitalizados, feitos de fotos, são os que mais se beneficiam, enquanto tamanhos-alvo muito pequenos deixam as imagens visivelmente mais suaves.",
      },
      {
        heading: "Privacidade e limites",
        body: "Os arquivos são criptografados em trânsito. Seu arquivo original é apagado logo depois de lido para a compressão. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana. PDFs protegidos por senha não podem ser processados.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como comprimir um PDF para um tamanho máximo em KB ou MB.",
    faq: [
      {
        question: "Como comprimo um PDF para menos de 200 KB?",
        answer:
          "Envie o PDF, digite 200, escolha KB e comprima. A ferramenta testa configurações mais fortes até o arquivo caber, ou informa o menor tamanho que conseguiu se 200 KB não for realista para aquele documento.",
      },
      {
        question: "Ele sempre chega ao tamanho exato que eu pedi?",
        answer: "Não. Ele deixa o arquivo no limite ou abaixo dele quando isso é possível sem uma perda de qualidade inaceitável. Quando não é, você vê o menor tamanho alcançado em vez de um falso sucesso.",
      },
      {
        question: "O resultado termina exatamente no meu limite?",
        answer: "Ele termina no limite ou abaixo, geralmente um pouco abaixo, porque as configurações mudam em etapas e não de forma contínua.",
      },
      {
        question: "Por que meu PDF quase não diminuiu?",
        answer: "PDFs feitos principalmente de texto e formas vetoriais já são compactos. As maiores economias vêm de PDFs que contêm fotos ou páginas digitalizadas.",
      },
      {
        question: "Há diferença de qualidade em relação à ferramenta Comprimir PDF comum?",
        answer: "O Comprimir PDF aplica um único nível fixo. Esta ferramenta começa no mesmo nível e só fica mais forte se o seu limite exigir.",
      },
      {
        question: "Meu documento fica guardado?",
        answer:
          "Não. Seu arquivo original é apagado logo depois de lido para a compressão. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
  },

  "photo-signature-resizer": {
    title: "Redimensionar Foto e Assinatura: pixels exatos e tamanho máximo de arquivo",
    intro: [
      "Formulários de inscrição raramente aceitam uma foto do jeito que sai do celular. Eles pedem uma largura e uma altura específicas em pixels e um arquivo de no máximo certo número de KB. Este redimensionador entrega exatamente isso: informe as dimensões e o limite de tamanho do seu formulário e baixe um JPG que atende aos dois.",
      "Ele cuida de fotos e de assinaturas. Escolha uma proporção ou uma predefinição para preencher as dimensões, decida se quer cortar ou adicionar margens brancas quando a imagem tiver formato diferente e defina o máximo em KB. As dimensões que você informa nunca são alteradas para atender ao tamanho do arquivo: só a qualidade do JPEG é reduzida.",
    ],
    howTo: [
      { step: "Envie a foto ou a assinatura", detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF." },
      { step: "Defina o tamanho", detail: "Escolha uma predefinição ou informe largura e altura em pixels. Escolha uma proporção se o seu formulário indicar uma." },
      { step: "Informe o limite de tamanho do arquivo", detail: "Digite o máximo em KB ou deixe em branco para manter a qualidade alta." },
      {
        step: "Escolha cortar ou margens",
        detail: "Cortar preenche o tamanho exato; margens brancas mantêm a imagem inteira dentro dele, o que combina com assinaturas.",
      },
      { step: "Redimensione e confira o resultado", detail: "A mensagem de resultado confirma os pixels exatos e o tamanho final em KB." },
    ],
    sections: [
      {
        heading: "Dimensões exatas e, depois, o tamanho do arquivo",
        body: "Primeiro a imagem é redimensionada exatamente para a largura e a altura que você pediu. Depois a ferramenta procura a maior qualidade JPEG que mantém o arquivo abaixo do seu limite, de modo que as dimensões ficam fixas. Se o limite for pequeno demais até na menor qualidade, a ferramenta avisa e mostra o tamanho alcançado em vez de alegar sucesso. Nesse caso, tente dimensões um pouco menores.",
      },
      {
        heading: "Predefinições e valores personalizados",
        body: "As predefinições cobrem tamanhos em pixels que podem ser reproduzidos com precisão, como uma foto de passaporte de 35 × 45 mm a 300 DPI (413 × 531 px) ou uma foto de 2 × 2 polegadas a 300 DPI (600 × 600 px). Os portais variam, então compare sempre com as instruções do seu próprio formulário e use os campos personalizados se elas divergirem de uma predefinição.",
      },
      {
        heading: "Cortar ou preencher",
        body: "Quando a imagem não tem o mesmo formato do tamanho-alvo, cortar preenche o quadro e apara as bordas, focando na parte mais evidente da imagem. Preencher mantém tudo e completa o espaço que sobra com branco. Escolha preencher para assinaturas em papel, para que nenhum traço de tinta seja cortado.",
      },
      {
        heading: "Assinaturas",
        body: "Fotografe ou digitalize a sua assinatura em papel branco liso e com boa luz, envie e use a predefinição de assinatura 3:1 ou o seu próprio tamanho. Tinta preta sobre branco gera arquivos muito pequenos.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como redimensionar uma foto ou assinatura para um formulário online.",
    faq: [
      {
        question: "Como redimensiono uma foto para 200 × 230 pixels com menos de 20 KB?",
        answer: "Envie a foto, informe 200 de largura, 230 de altura e 20 de máximo em KB, e redimensione. A mensagem de resultado confirma o tamanho exato.",
      },
      {
        question: "Ele altera as dimensões para chegar ao limite em KB?",
        answer: "Não. As dimensões ficam exatamente como informadas e só a qualidade do JPEG é reduzida.",
      },
      {
        question: "E se não for possível atingir o limite?",
        answer: "Você verá uma mensagem com o menor tamanho alcançado. Tente dimensões menores ou um limite maior.",
      },
      {
        question: "A saída é sempre um JPG?",
        answer: "Sim, já que a maioria dos formulários exige JPG. O arquivo recebe as dimensões no nome para facilitar encontrá-lo.",
      },
      {
        question: "Posso manter o formato original da minha foto?",
        answer: "Sim. Escolha a opção de margens brancas e a imagem inteira cabe dentro do tamanho-alvo.",
      },
      {
        question: "Isso atende às regras do meu portal de concurso ou de visto?",
        answer: "Ele gera exatamente os pixels e o tamanho máximo que você informar. As exigências variam conforme o portal e podem mudar, então confirme os números no próprio portal.",
      },
    ],
  },

  "batch-image-compressor": {
    title: "Compressor de Imagens em Lote: comprima várias fotos para um mesmo tamanho",
    intro: [
      "Comprimir fotos uma a uma é lento quando um formulário, um anúncio ou um site precisa de vinte delas abaixo do mesmo limite. Envie o conjunto inteiro, informe um único tamanho-alvo em KB e o ConvertBrio comprime cada imagem para caber.",
      "Cada arquivo é tratado separadamente, então um arquivo com problema nunca bloqueia os demais. Você recebe um relatório por arquivo, downloads individuais de cada imagem e um ZIP com o lote inteiro.",
    ],
    howTo: [
      { step: "Selecione as imagens", detail: "Solte até 50 imagens de uma vez, com até 100 MB no total." },
      { step: "Informe o tamanho-alvo", detail: "Um único limite em KB vale para todas as imagens." },
      { step: "Comprima", detail: "Cada imagem é processada de forma independente: a qualidade é reduzida primeiro e as dimensões só diminuem se for preciso." },
      { step: "Baixe", detail: "Salve os arquivos individuais da lista ou baixe tudo em um ZIP." },
    ],
    sections: [
      {
        heading: "Resultado por arquivo, e não tudo ou nada",
        body: "A lista de resultados mostra cada arquivo, o tamanho que ele alcançou e se ficou dentro da meta. Se uma imagem não consegue ficar abaixo do limite sem uma perda extrema de qualidade, ela é sinalizada como acima da meta em vez de passar em silêncio. Um arquivo que não pode ser lido de jeito nenhum é informado como falho, enquanto os outros terminam normalmente.",
      },
      {
        heading: "Como cada imagem é comprimida",
        body: "Para cada imagem, a ferramenta procura a maior qualidade que cabe na sua meta, no mesmo formato (JPG continua JPG, WEBP continua WEBP). Se até a menor qualidade ainda for grande demais, ela reduz as dimensões em pequenos passos. Fotos HEIC de iPhones são convertidas em JPG, porque o HEIC não é um formato de saída aceito. GIFs animados mantêm apenas o primeiro quadro.",
      },
      {
        heading: "Quando usar o lote e quando usar o individual",
        body: "Use a ferramenta Comprimir Imagem para um único arquivo. Use o lote quando muitas imagens compartilham o mesmo limite, por exemplo ao enviar um conjunto de produtos, uma série de documentos a um portal ou fotos para um e-mail.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como comprimir várias imagens para o mesmo tamanho.",
    faq: [
      {
        question: "Quantas imagens posso comprimir de uma vez?",
        answer: "Até 50 imagens, desde que o total fique abaixo de 100 MB.",
      },
      {
        question: "Todas as imagens atingem a meta com certeza?",
        answer: "Não. Cada resultado é medido, e qualquer imagem que continue acima da meta é sinalizada para você saber quais precisam de atenção.",
      },
      {
        question: "Posso baixar os arquivos um por um?",
        answer: "Sim. Cada imagem processada com sucesso tem seu próprio link de download, e o ZIP também está disponível.",
      },
      {
        question: "O que acontece se um arquivo estiver corrompido?",
        answer: "Ele é informado como falho, enquanto os outros são processados normalmente.",
      },
      {
        question: "Ele muda o formato das minhas imagens?",
        answer: "Não, exceto nas fotos HEIC, que viram JPG.",
      },
      {
        question: "Minhas imagens ficam armazenadas?",
        answer:
          "Seus arquivos originais são apagados logo depois de lidos para a compressão. Os resultados são apagados por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
  },

  "image-to-text": {
    title: "Imagem para Texto: extraia o texto de uma foto ou captura de tela",
    intro: [
      "Fotos de documentos, capturas de tela, quadros brancos e placas guardam textos que você não consegue selecionar. O Imagem para Texto usa reconhecimento óptico de caracteres (OCR) para ler esse texto e devolvê-lo como caracteres que você pode copiar, pesquisar e editar.",
      "Envie uma imagem, escolha o idioma do texto e o texto reconhecido aparece na página, pronto para copiar. Um arquivo .txt simples é baixado ao mesmo tempo.",
    ],
    howTo: [
      { step: "Envie uma imagem", detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF. Uma foto nítida e reta funciona melhor." },
      { step: "Escolha o idioma", detail: "Selecione o idioma em que o texto está escrito para obter a melhor precisão." },
      { step: "Extraia o texto", detail: "O reconhecimento roda nos servidores do ConvertBrio." },
      { step: "Copie ou baixe", detail: "Selecione o texto na página, use Copiar texto ou abra o arquivo .txt baixado." },
    ],
    sections: [
      {
        heading: "O que você recebe",
        body: "O texto reconhecido como caracteres simples, na ordem de leitura e com as quebras de linha mantidas. É texto puro, então fontes, cores e layout não são preservados. Se você quer um documento editável com parágrafos, use Digitalização para Word.",
      },
      {
        heading: "Como obter resultados precisos",
        body: "A qualidade do reconhecimento acompanha a qualidade da imagem. Use uma foto nítida, bem iluminada e de frente de um texto impresso, em uma resolução em que as letras sejam claramente legíveis. Corte bordas e fundo e escolha o idioma correto.",
      },
      {
        heading: "Limitações a esperar",
        body: "Letra manuscrita não é reconhecida de forma confiável. Imagens de baixa resolução, desfoque, reflexo, inclinação e fontes decorativas reduzem a precisão. Tabelas e layouts de várias colunas podem sair numa ordem embaralhada, porque o OCR lê linha por linha. Revise sempre a saída antes de depender dela.",
      },
      {
        heading: "Privacidade",
        body: "As imagens são criptografadas em trânsito. Seu arquivo original é apagado logo depois de lido para o reconhecimento. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana. O texto reconhecido é mostrado só para você.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como extrair texto de imagens com OCR.",
    faq: [
      {
        question: "Como copio o texto de uma imagem?",
        answer: "Envie a imagem, execute a extração e use Copiar texto no resultado. O mesmo texto também é baixado como arquivo .txt.",
      },
      {
        question: "Funciona em capturas de tela?",
        answer: "Sim. Capturas de tela de texto impresso ou exibido na tela costumam ser reconhecidas com muita precisão.",
      },
      {
        question: "Ele lê letra manuscrita?",
        answer: "Não de forma confiável. O OCR foi feito para texto impresso e digitado.",
      },
      {
        question: "Quais idiomas são aceitos?",
        answer: "Inglês, português, espanhol, francês, alemão, italiano e indonésio.",
      },
      {
        question: "Por que meu texto saiu embaralhado?",
        answer: "Tabelas e páginas com várias colunas podem ser lidas na ordem errada. Corte a imagem para uma coluna de cada vez.",
      },
      {
        question: "E se for um PDF?",
        answer: "Use Digitalização para Word para um PDF digitalizado, ou OCR de PDF para torná-lo pesquisável.",
      },
    ],
  },

  "scan-to-word": {
    title: "Como converter um documento digitalizado em um arquivo do Word editável?",
    intro: [
      "Use o reconhecimento óptico de caracteres (OCR). Uma digitalização ou a foto de uma página é uma imagem, então o Word não tem texto para editar até que o OCR leia as letras da imagem. O Digitalização para Word faz isso e cria um documento real do Word (DOCX) com o texto reconhecido, que você pode então editar, formatar e salvar.",
      "Envie a foto de uma página ou um PDF digitalizado, escolha o idioma do texto e baixe o DOCX. A ferramenta serve para tirar as palavras de documentos em papel, como cartas, contratos e formulários impressos. Ela entrega o texto, e não uma cópia do visual da página, então prepare-se para revisar e reaplicar a formatação de que precisar.",
    ],
    howTo: [
      { step: "Digitalize ou fotografe a página", detail: "Plana, com luz uniforme e de frente dá o melhor resultado. Um aplicativo de digitalização do celular que salva em PDF ou JPG funciona bem." },
      { step: "Envie a imagem ou o PDF", detail: "JPG, PNG, WEBP, HEIC, AVIF, GIF ou PDF. Arquivos de até 100 MB; PDFs de até 50 páginas." },
      {
        step: "Escolha o idioma",
        detail: "Inglês, português, espanhol, francês, alemão, italiano ou indonésio. A escolha certa ajuda acentos e caracteres especiais a saírem corretos.",
      },
      { step: "Baixe o DOCX", detail: "Abra no Word, no Google Docs ou no LibreOffice, depois revise comparando com o original e corrija palavras lidas errado." },
    ],
    sections: [
      {
        heading: "Posso digitalizar direto para o Word?",
        body: [
          "Não em uma única etapa neste site, nem no próprio Word: o ConvertBrio não se conecta a um scanner, então você primeiro cria a digitalização com o scanner ou um aplicativo de celular e depois envia o arquivo aqui.",
          "Ajuda separar duas coisas diferentes. Inserir uma digitalização no Word (Inserir > Imagens) coloca a página no documento como imagem: ela aparece certinha, mas você não pode editar as palavras. Converter a digitalização com OCR, como esta ferramenta faz, lê os caracteres e entrega texto editável. Escolha a inserção se só precisa que a página apareça num documento; escolha a conversão se precisa alterar, copiar ou pesquisar as palavras.",
        ],
      },
      {
        heading: "Antes e depois: o que esperar",
        body: "Um exemplo da transformação, usando uma carta digitalizada:",
        table: {
          headers: ["", "Sua digitalização (antes)", "O arquivo do Word (depois)"],
          rows: [
            ["O que é", "Uma imagem de uma carta impressa", "Um DOCX com o texto da carta"],
            ["Selecionar uma frase", "Não é possível", "Funciona como qualquer texto do Word"],
            ["Pesquisar com Ctrl+F / Cmd+F", "Não encontra nada", "Encontra todas as ocorrências"],
            ["Layout", "Exatamente como impresso", "Parágrafos simples; uma página da digitalização segue a outra, com quebra de página entre elas"],
            ["Logo do papel timbrado, carimbos, fotos", "Visíveis", "Não incluídos"],
          ],
        },
      },
      {
        heading: "Como conferir e corrigir o resultado",
        body: "O OCR é preciso em texto impresso limpo, mas nunca perfeito, então revise antes de confiar no arquivo. Abra o DOCX ao lado da digitalização original e leia os dois.",
        list: [
          "Confira primeiro números, datas, valores e nomes: os dígitos são os caracteres mais lidos errado (0 e O, 1 e l, 5 e S).",
          "Procure palavras divididas ou unidas no lugar errado e símbolos soltos onde uma mancha ou dobra atravessou o texto.",
          "Passe o corretor ortográfico do Word: uma palavra sem sentido costuma indicar uma leitura errada.",
          "Reaplique à mão títulos, negrito, tabelas e colunas onde precisar.",
        ],
      },
      {
        heading: "O que o arquivo do Word contém",
        body: "O texto reconhecido, dividido em parágrafos, com uma página da digitalização seguindo a outra. É um documento de texto editável, e não uma cópia do visual da página. Fontes, colunas, imagens e tabelas do original não são reproduzidas.",
      },
      {
        heading: "Por que a formatação muda depois da conversão?",
        body: "Porque a ferramenta lê letras, e não layout. Ela reconstrói parágrafos a partir das linhas que encontra e não refaz o design da página. É por isso que você verá estas diferenças:",
        list: [
          "As tabelas saem como linhas de texto, e não como células. Recrie a tabela no Word e copie os valores.",
          "As colunas são lidas linha por linha, então o texto de duas colunas pode se misturar. Corte ou digitalize uma coluna de cada vez se a ordem importar.",
          "Fontes, tamanhos, cores e espaçamento são trocados pelos padrões do Word. Selecione o texto e refaça o estilo.",
          "Imagens, logos e assinaturas não são levados. Adicione-os de volta a partir do arquivo original.",
          "Uma digitalização torta, com sombra ou de baixa resolução gera mais erros. Digitalize de novo, plana e a cerca de 300 DPI, em vez de tentar consertar um resultado ruim.",
          "Uma página de lado ou de cabeça para baixo é lida mal. As fotos são endireitadas pela orientação que a câmera salvou, mas uma digitalização sem esse dado deve ser girada antes do envio.",
        ],
      },
      {
        heading: "Se aparecer um erro ou um resultado vazio",
        body: "Se a ferramenta não encontrar texto legível, ela avisa em vez de devolver um arquivo vazio. Nesse caso, tente uma imagem mais nítida e de maior resolução de texto impresso, endireite a página e confira se o idioma corresponde ao documento. PDFs com mais de 50 páginas são recusados; divida-os em partes antes com a ferramenta Dividir PDF.",
      },
      {
        heading: "Digitalização para Word ou PDF para Word",
        body: "O PDF para Word serve para PDFs que já contêm texto de verdade e tenta manter a formatação. O Digitalização para Word serve para imagens de texto, em que não há texto para converter até o OCR lê-lo. Se você consegue selecionar palavras no seu PDF, use o PDF para Word.",
      },
      {
        heading: "Limitações",
        body: "A precisão depende da digitalização. Letra manuscrita, digitalizações de baixa resolução ou tortas, impressão fraca e layouts complexos, como tabelas e colunas, costumam ser mal reconhecidos. Espere ter de revisar cada documento. Se a ferramenta não encontrar texto legível, ela avisa em vez de devolver um arquivo vazio.",
      },
      {
        heading: "Privacidade",
        body: "Os envios são criptografados em trânsito. Seu arquivo original é apagado logo depois de lido para o reconhecimento. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como converter digitalizações em documentos do Word editáveis.",
    faq: [
      {
        question: "Como converto um documento digitalizado em Word?",
        answer: "Envie a digitalização como imagem ou PDF, escolha o idioma e baixe o DOCX que a ferramenta cria. Revise comparando com o original, já que o OCR pode ler caracteres errado.",
      },
      {
        question: "Posso digitalizar um documento direto para o Word?",
        answer:
          "Não diretamente. Digitalize a página primeiro com um scanner ou um aplicativo de celular e depois envie o arquivo aqui. Inserir uma digitalização no Word como imagem a mantém não editável; convertê-la com OCR dá a você texto editável.",
      },
      {
        question: "Como converto várias fotos de páginas em um único arquivo do Word?",
        answer: "Junte as fotos em um PDF com o Imagem para PDF e depois envie esse PDF aqui. O texto de cada página segue o da anterior, até 50 páginas.",
      },
      {
        question: "Por que minha tabela ou o layout de colunas sumiu?",
        answer: "A ferramenta entrega o texto reconhecido como parágrafos simples, então tabelas e colunas não são reconstruídas. Recrie-as no Word a partir do texto.",
      },
      {
        question: "O arquivo do Word vai ficar parecido com a minha digitalização?",
        answer: "Não. Você recebe o texto reconhecido como parágrafos editáveis. Layout, fontes e imagens não são reproduzidos.",
      },
      {
        question: "Ele aceita PDFs com várias páginas?",
        answer: "Sim, até 50 páginas. O texto de cada página segue o da anterior.",
      },
      {
        question: "Ele lê letra manuscrita?",
        answer: "Não de forma confiável. Foi feito para texto impresso.",
      },
      {
        question: "Devo usar este ou o PDF para Word?",
        answer: "Use o Digitalização para Word quando o PDF for uma digitalização ou uma foto. Use o PDF para Word quando você já conseguir selecionar o texto.",
      },
      {
        question: "É grátis?",
        answer: "Sim, sem precisar de conta.",
      },
    ],
  },

  "pdf-page-organizer": {
    title: "Organizador de Páginas de PDF: reordene, gire e exclua páginas visualmente",
    intro: [
      "Reorganizar um PDF é mais fácil quando você enxerga as páginas. Envie um arquivo e cada página aparece como miniatura. Mude as páginas de ordem, gire as que foram digitalizadas de lado, remova as que não precisa e salve o resultado como um novo PDF.",
      "Tudo funciona tanto com botões quanto com arrastar e soltar, então você pode organizar as páginas pelo teclado ou pelo celular.",
    ],
    howTo: [
      { step: "Envie o PDF", detail: "As miniaturas de todas as páginas aparecem na tela." },
      { step: "Reordene", detail: "Arraste uma página para um novo lugar ou use os botões de seta embaixo dela." },
      {
        step: "Gire ou remova",
        detail: "Use o botão de girar para virar uma página no sentido horário. Use o botão de remover para descartá-la; você pode restaurá-la antes de salvar.",
      },
      { step: "Crie o novo PDF", detail: "Se você removeu páginas, será pedida uma confirmação. Seu arquivo original nunca é alterado." },
    ],
    sections: [
      {
        heading: "Veja antes de decidir",
        body: "As miniaturas são desenhadas no seu navegador, então você vê exatamente qual página é qual antes de qualquer coisa ser enviada para processamento. As páginas removidas continuam na tela, esmaecidas, e podem ser restauradas até você criar o arquivo.",
      },
      {
        heading: "Controles acessíveis",
        body: "Cada ação tem um botão com rótulo: mover para antes, mover para depois, girar e remover ou restaurar. Arrastar e soltar é um extra, e não uma exigência, então a ferramenta funciona com teclado e leitor de tela.",
      },
      {
        heading: "Excluindo páginas com segurança",
        body: "Antes de criar um PDF com páginas removidas, a ferramenta pede que você confirme quantas páginas serão descartadas. O novo arquivo é separado do original, que permanece intacto no seu dispositivo.",
      },
      {
        heading: "Limites",
        body: "Arquivos de até 100 MB. PDFs protegidos por senha não podem ser abertos. PDFs muito longos demoram mais para exibir a prévia, porque cada miniatura é renderizada em sequência.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como reordenar, girar e excluir páginas de PDF.",
    faq: [
      {
        question: "Como reordeno as páginas de um PDF?",
        answer: "Envie o arquivo, arraste as miniaturas para uma nova ordem ou use os botões de mover para antes e para depois, e crie o novo PDF.",
      },
      {
        question: "Dá para fazer isso sem mouse?",
        answer: "Sim. Cada ação tem um botão que você alcança e aciona pelo teclado.",
      },
      {
        question: "Posso desfazer a exclusão de uma página?",
        answer: "Sim. As páginas removidas continuam visíveis com um botão Restaurar até você criar o arquivo.",
      },
      {
        question: "Ele altera o meu arquivo original?",
        answer: "Não. Você recebe um novo PDF e o original continua como estava.",
      },
      {
        question: "Posso girar só uma página?",
        answer: "Sim. A rotação vale para a página individual que você escolher, 90 graus a cada clique.",
      },
      {
        question: "Por que meu PDF não carrega?",
        answer: "PDFs protegidos por senha e danificados não podem ser visualizados. Remova a senha primeiro.",
      },
    ],
  },

  "metadata-remover": {
    title: "Removedor de Metadados: apague dados ocultos de fotos, PDFs e arquivos do Office",
    intro: [
      "Os arquivos carregam informações que você não vê. Uma foto de celular pode registrar onde e quando foi tirada e com qual aparelho. Um PDF ou documento do Word pode guardar o nome do autor, a empresa e o programa usado. O Removedor de Metadados limpa esses dados ocultos antes de você compartilhar o arquivo.",
      "Ele funciona com fotos, PDFs e arquivos do Word, Excel e PowerPoint, e nunca muda o formato do arquivo: um JPG continua JPG, um DOCX continua DOCX.",
    ],
    howTo: [
      { step: "Envie um arquivo", detail: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX ou PPTX." },
      { step: "Veja o que será removido", detail: "As categorias de cada tipo de arquivo estão listadas na página." },
      { step: "Limpe o arquivo", detail: "Os metadados são removidos e a mensagem de resultado resume o que foi apagado." },
      { step: "Baixe a cópia limpa", detail: "Ela mantém o nome do seu arquivo com -clean no final." },
    ],
    sections: [
      {
        heading: "O que é removido",
        body: "Em fotos: detalhes EXIF, como o modelo da câmera e do celular, a data da captura e a localização GPS, além de dados XMP e IPTC. Em PDFs: título, autor, assunto, palavras-chave, criador, produtor, datas e metadados XMP. Em Word, Excel e PowerPoint: autor, última modificação por, título, empresa, datas e detalhes do aplicativo.",
      },
      {
        heading: "O que permanece",
        body: "O conteúdo visível não é tocado: a imagem, as páginas, o texto. Alguns dados estruturais são necessários para manter o arquivo válido e continuam lá. Conteúdo que você vê ou que fica dentro do corpo do documento, como comentários, alterações controladas, planilhas ocultas ou um nome escrito numa página, não é metadado e não é removido. Revise esses itens à parte.",
      },
      {
        heading: "As fotos mantêm orientação e cor",
        body: "As fotos são giradas para a orientação correta antes de a etiqueta de orientação ser removida, para não ficarem de lado. O perfil de cor é mantido para que as cores não mudem.",
      },
      {
        heading: "Privacidade",
        body: "Os arquivos são criptografados em trânsito. Seu arquivo original é apagado logo depois de lido para a limpeza. O resultado é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados automaticamente nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), sem revisão humana.",
      },
    ],
    faqDescription: "Dúvidas comuns sobre como remover metadados ocultos de arquivos.",
    faq: [
      {
        question: "Como removo a localização GPS de uma foto?",
        answer: "Envie a foto. A ferramenta apaga os dados EXIF, incluindo as coordenadas GPS, e devolve uma cópia limpa no mesmo formato.",
      },
      {
        question: "Remover metadados reduz a qualidade?",
        answer: "A imagem é re-codificada no próprio formato, então um JPG pode mudar uma quantidade bem pequena. Ela não é redimensionada nem convertida.",
      },
      {
        question: "Ele consegue remover o autor de um documento do Word?",
        answer: "Sim. Ele apaga o autor, a última modificação por, a empresa e o título guardados nas propriedades do documento.",
      },
      {
        question: "Fica algo para trás?",
        answer: "Os dados estruturais necessários para um arquivo válido permanecem, assim como o conteúdo visível e itens como comentários ou alterações controladas dentro de um documento.",
      },
      {
        question: "Quais formatos são aceitos?",
        answer: "JPG, PNG, WEBP, AVIF, TIFF, PDF, DOCX, XLSX e PPTX.",
      },
      {
        question: "Ele altera o meu arquivo original?",
        answer: "Não. Você baixa uma cópia limpa separada.",
      },
    ],
  },
};
