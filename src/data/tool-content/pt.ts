import type { ToolContentEntry } from "../toolContent";

// Portuguese (pt-BR) long-form tool content. Links point to the /pt/ tool pages.

export const toolContentPt: Record<string, ToolContentEntry> = {
  "compress-pdf": {
    title: "Comprimir PDF online: reduza o tamanho para e-mail e envio",
    intro: [
      "PDFs grandes, principalmente os cheios de páginas digitalizadas ou fotos em alta resolução, não passam no limite de anexo do e-mail, travam em uploads lentos e são recusados por portais que limitam o tamanho do arquivo. O compressor de PDF do ConvertBrio re-codifica as imagens embutidas no documento com qualidade e resolução mais eficientes e remove metadados desnecessários, para que as mesmas páginas voltem em um arquivo menor.",
      "É grátis, roda no navegador sem cadastro e não coloca marca d'água. A compressão é sem perdas para texto e gráficos vetoriais, eles continuam nítidos, e só afeta as fotos e digitalizações embutidas, onde uma redução pequena e quase sempre invisível de qualidade rende uma grande queda no tamanho.",
    ],
    howTo: [
      { step: "Envie o PDF", detail: "Arraste o arquivo para a caixa ou clique para procurar. Um PDF por vez, até 100 MB." },
      {
        step: "Clique em Comprimir",
        detail:
          "O ConvertBrio localiza as imagens embutidas, re-codifica cada uma com qualidade mais eficiente, reduz as que estão maiores do que o necessário e remove metadados sem uso.",
      },
      {
        step: "Baixe e confira o tamanho",
        detail:
          "O PDF comprimido é baixado automaticamente. Abra para conferir se as páginas continuam legíveis: se ainda estiver grande, veja as dicas abaixo sobre digitalizações e divisão de páginas.",
      },
    ],
    sections: [
      {
        heading: "Como funciona a compressão de PDF",
        body: [
          "O tamanho de um PDF quase sempre é dominado por uma coisa só: as imagens embutidas. Texto, fontes e desenhos vetoriais são minúsculos em comparação. Por isso o compressor do ConvertBrio age onde está o peso: ele encontra as imagens fotográficas dentro do arquivo, re-codifica com um JPEG mais eficiente e reduz a escala de qualquer imagem com resolução muito acima do que uma tela ou impressora usaria.",
          "Tudo o que não é foto fica intacto: o texto continua selecionável e nítido, logos e gráficos vetoriais mantêm as bordas limpas e o layout não se mexe. Metadados sem função são descartados para recuperar mais um pouco de espaço.",
        ],
      },
      {
        heading: "Quais PDFs encolhem mais",
        body: "A redução depende inteiramente do que está deixando o seu arquivo grande.",
        table: {
          headers: ["Tipo de PDF", "Resultado típico"],
          rows: [
            ["Documento digitalizado (fotos das páginas)", "Grande redução: muitas vezes 40–70% menor"],
            ["Relatório com fotos ou capturas de tela", "Redução moderada, varia com a quantidade de imagens"],
            ["Apresentação exportada para PDF", "Redução moderada se os slides tiverem fotos"],
            ["PDF só de texto (contrato, e-book, nota fiscal)", "Pouca mudança: já é compacto"],
            ["PDF com imagens em PNG ou CMYK", "Limitada: esses tipos são ignorados para não alterar cores"],
          ],
        },
      },
      {
        heading: "Comprimir um PDF sem perder qualidade",
        body: "Para qualquer PDF que seja quase todo texto, a compressão é praticamente sem perdas: você não perde nada visível. Para PDFs digitalizados ou cheios de imagens, as imagens são re-codificadas, então há uma troca de qualidade real, mas pequena. Na prática, uma página digitalizada comprimida com esta ferramenta continua legível na tela e imprime bem; a diferença só aparece se você der muito zoom em uma foto.",
      },
      {
        heading: "Deixar um PDF abaixo de um tamanho específico (100 KB, 500 KB, 2 MB)",
        body: [
          "Esta ferramenta faz uma passada de compressão eficiente, e não várias tentativas até um número exato, então ela não garante um valor preciso em kilobytes. Mas algumas coisas ajudam quando o limite é rígido:",
          "Se o seu PDF for um documento digitalizado, ele costuma cair muito em uma única passada, teste primeiro. Se ainda passar do limite, divida em menos páginas com a ferramenta Dividir PDF e comprima cada parte, ou exporte só as páginas de que você precisa. Se o peso vier de uma ou duas fotos enormes, comprimir essas imagens à parte com Comprimir Imagem (que tem alvo exato de tamanho) antes de remontar o PDF dá o melhor controle.",
        ],
      },
      {
        heading: "Comprimir ou dividir",
        body: "A compressão reduz o peso de cada página. A divisão reduz o número de páginas. Se o seu PDF de 30 MB tem 300 páginas de texto, a compressão vai ajudar pouco: dividir em seções com o Dividir PDF é a resposta. Se são 10 páginas digitalizadas de 3 MB cada, a compressão é exatamente a ferramenta certa. Elas se complementam.",
      },
      {
        heading: "Privacidade e limites",
        body: "Seu PDF é criptografado durante o envio, processado automaticamente nos servidores do ConvertBrio sem revisão humana, e tanto o original quanto a cópia comprimida são apagados em até 24 horas. Um arquivo por vez, até 100 MB, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Dividir PDF", href: "/pt/tools/split-pdf" },
      { label: "Juntar PDF", href: "/pt/tools/merge-pdf" },
      { label: "Comprimir Imagem", href: "/pt/tools/compress-image" },
      { label: "PDF para Word", href: "/pt/tools/pdf-to-word" },
    ],
    faqDescription: "Perguntas comuns sobre como comprimir o tamanho de um PDF online.",
    faq: [
      {
        question: "Como comprimir um PDF online de graça?",
        answer:
          "Envie o documento para a ferramenta Comprimir PDF do ConvertBrio e clique em Comprimir. Ela re-codifica as imagens embutidas e remove metadados desnecessários para reduzir o arquivo, que é baixado automaticamente: sem conta, sem marca d'água e sem e-mail.",
      },
      {
        question: "Dá para comprimir um PDF sem perder qualidade?",
        answer:
          "O texto e o conteúdo vetorial nunca são degradados: continuam perfeitamente nítidos. Só as fotos e digitalizações são re-codificadas, com uma redução pequena de qualidade que costuma ser invisível no tamanho normal de visualização.",
      },
      {
        question: "Como deixar um PDF menor para enviar por e-mail?",
        answer:
          "Passe uma vez pela ferramenta. A maioria dos limites de e-mail é de 20–25 MB; um documento digitalizado ou relatório com muitas imagens costuma ficar bem abaixo disso. Se ainda estiver grande, divida em partes com o Dividir PDF.",
      },
      {
        question: "Consigo comprimir um PDF para exatamente 100 KB ou 300 KB?",
        answer:
          "Esta ferramenta não mira um tamanho exato: ela faz uma passada eficiente. Para limites rígidos, comprima primeiro um PDF digitalizado aqui, reduza o número de páginas com o Dividir PDF se precisar, ou comprima as maiores imagens embutidas à parte com o Comprimir Imagem, que aceita um alvo exato em KB.",
      },
      {
        question: "Por que meu PDF quase não diminuiu?",
        answer:
          "Provavelmente ele já é compacto: um PDF quase todo de texto tem muito pouco a remover. Arquivos com digitalizações em alta resolução ou fotos embutidas têm as maiores reduções.",
      },
      {
        question: "A compressão muda o layout ou o texto?",
        answer:
          "Não. Dimensões da página, posição do texto, fontes e texto selecionável são todos preservados. Só o tamanho do arquivo muda.",
      },
    ],
  },

  "compress-image": {
    title: "Compressor de imagem: reduza o tamanho sem perder qualidade",
    intro: [
      "Seja para passar num limite de upload, deixar um site mais rápido ou só parar de encher o armazenamento, o compressor de imagem do ConvertBrio reduz o tamanho do arquivo mantendo a imagem nítida. Você controla o resultado: define um nível de qualidade ou dá um tamanho alvo exato em kilobytes e deixa a ferramenta chegar nele.",
      "Esse modo de tamanho alvo é o motivo de a maioria das pessoas chegar aqui. Portais de visto, sites de concurso, inscrições de faculdade e formulários do governo costumam limitar uma foto ou digitalização a 100 KB, 200 KB ou 50 KB. Em vez de exportar em várias qualidades até uma caber, você digita o limite uma vez e baixa um arquivo abaixo dele.",
    ],
    howTo: [
      { step: "Envie a imagem", detail: "Arraste um JPG, PNG, WEBP, HEIC ou AVIF, até 100 MB. Fotos HEIC de iPhone são aceitas direto." },
      {
        step: "Defina um tamanho alvo ou um nível de qualidade",
        detail:
          "Digite o tamanho máximo em KB (por exemplo, 100). Deixe em branco para usar o controle de qualidade, onde valores menores geram arquivos menores.",
      },
      {
        step: "Comprima",
        detail:
          "O ConvertBrio re-codifica a imagem e, no modo alvo, ajusta a qualidade, e depois as dimensões, se a qualidade não bastar, até o arquivo caber abaixo do seu limite.",
      },
      { step: "Baixe o resultado", detail: "O arquivo comprimido é baixado automaticamente. Confira se está aceitável; se ficou muito borrado, aumente o alvo e refaça." },
    ],
    sections: [
      {
        heading: "Como funciona a compressão de imagem",
        body: [
          "JPG, WEBP e AVIF são formatos com perdas: eles reduzem o arquivo descartando dados de imagem que o olho humano tem menos chance de sentir falta: gradientes de cor sutis, textura fina em áreas movimentadas, detalhe de alta frequência. Abaixar a qualidade manda o codificador descartar mais, gerando um arquivo menor com um amolecimento e artefatos cada vez mais visíveis.",
          "PNG é sem perdas e comprime de outro jeito: só consegue empacotar os pixels exatos de forma mais eficiente, então uma foto salva em PNG quase não encolhe. Se você envia um PNG para o compressor e quer uma redução de verdade, converter para JPG ou WEBP antes (com o Conversor de Imagem) faz muito mais do que qualquer compressão de PNG.",
        ],
      },
      {
        heading: "Reduzir uma imagem para um tamanho exato (como 100 KB)",
        body: "Digite o seu limite no campo de tamanho alvo e o ConvertBrio trabalha de trás para frente: ele abaixa a qualidade do JPG/WEBP em etapas, reconferindo o tamanho a cada passo, e só reduz as dimensões se a menor qualidade razoável ainda ultrapassar. O resultado é a maior e mais nítida versão da sua imagem que ainda cabe abaixo do teto.",
        list: [
          "Foto de visto ou passaporte: muitas vezes 100 KB, ou uma faixa de 10 KB a 240 KB",
          "Portais do governo e da Receita: comumente 100 KB ou 200 KB por digitalização",
          "Sites de inscrição e concurso: frequentemente 50 KB a 500 KB para foto ou certidão",
          "Avatares de fóruns e marketplaces: em geral perto de 1–2 MB",
        ],
      },
      {
        heading: "Quanto dá para comprimir antes de aparecer?",
        body: "A maioria das fotografias perde 40–60% do tamanho sem diferença visível no tamanho normal de visualização, porque os primeiros dados que o codificador descarta são realmente difíceis de ver. Depois disso, áreas planas como céus começam a fazer faixas e as bordas de texto e detalhes finos ficam ásperas. O método prático é começar perto do topo da faixa de qualidade e descer aos poucos observando a imagem.",
      },
      {
        heading: "Comprimir ou redimensionar",
        body: "A compressão mantém as mesmas dimensões em pixels e reduz quanto cada pixel custa. O redimensionamento reduz a própria quantidade de pixels. Para uma foto que é grande em dimensões e em peso, redimensionar para o tamanho que você realmente precisa, e depois comprimir, gera um arquivo bem menor, com menos perda visível.",
      },
      {
        heading: "Privacidade e limites",
        body: "Todo envio é criptografado e apagado automaticamente dos servidores do ConvertBrio em até 24 horas, baixado ou não. Esta ferramenta comprime uma imagem por vez, até 100 MB, grátis, sem conta e sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Redimensionar Imagem", href: "/pt/tools/image-converter" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
      { label: "Conversor de Imagem", href: "/pt/tools/image-converter" },
    ],
    faqDescription: "Perguntas comuns sobre comprimir e reduzir o tamanho de imagens.",
    faq: [
      {
        question: "Como reduzir uma imagem para menos de 100 KB?",
        answer:
          "Envie a imagem para o compressor do ConvertBrio e defina o tamanho alvo em 100 KB. A ferramenta abaixa a qualidade, e as dimensões, se necessário, até o arquivo caber nesse limite, ideal para formulários e uploads de documento com teto rígido.",
      },
      {
        question: "Comprimir vai deixar a imagem pior?",
        answer:
          "Em compressão moderada, a maioria das pessoas não percebe diferença. A perda de qualidade só fica visível em ajustes agressivos, então vale conferir o resultado em vez de comprimir para o menor tamanho possível por padrão.",
      },
      {
        question: "Meu PNG quase não diminuiu, por quê?",
        answer:
          "PNG é sem perdas, então há pouco espaço para comprimir uma fotografia guardada nele. Converta o PNG para JPG ou WEBP com o Conversor de Imagem primeiro; só isso costuma cortar o tamanho em 70% ou mais.",
      },
      {
        question: "O compressor mantém as dimensões da imagem?",
        answer:
          "Sim, a não ser que você use o modo de tamanho alvo e o arquivo ainda não caiba após a redução máxima de qualidade: nesse caso ele também reduz as dimensões como último recurso.",
      },
      {
        question: "Dá para comprimir várias imagens de uma vez?",
        answer:
          "Comprimir uma imagem por vez é grátis e sem conta. Esta ferramenta ainda não processa várias imagens em uma única passada.",
      },
    ],
  },

  "merge-pdf": {
    title: "Juntar PDF online: combine vários PDFs em um só arquivo",
    intro: [
      "Unir páginas digitalizadas, notas fiscais, relatórios ou capítulos em um único documento normalmente exige programa de computador ou assinatura paga. A ferramenta de juntar do ConvertBrio faz isso do navegador, sem instalar nada: envie vários PDFs, coloque na ordem que quiser e baixe um arquivo combinado em segundos.",
      "Cada página de cada arquivo é mantida exatamente como está: sem recompressão, sem perda de qualidade, sem marca d'água. A única mudança é que arquivos separados viram um só.",
    ],
    howTo: [
      { step: "Envie dois ou mais PDFs", detail: "Arraste todos de uma vez ou selecione vários no navegador. Cada arquivo pode ter até 100 MB." },
      {
        step: "Coloque na ordem",
        detail: "O documento combinado segue a ordem da lista de arquivos, então organize do jeito que o PDF final deve ser lido: capa primeiro, anexos por último.",
      },
      { step: "Junte e baixe", detail: "Clique em Converter. O ConvertBrio acrescenta as páginas de cada arquivo em sequência e o PDF combinado é baixado automaticamente." },
    ],
    sections: [
      {
        heading: "Motivos comuns para juntar PDFs",
        body: "É uma das operações mais usadas em PDF, geralmente para um destes casos:",
        list: [
          "Combinar páginas digitalizadas separadamente em um só documento",
          "Montar um relatório, contrato ou proposta de várias partes",
          "Reunir várias notas fiscais ou recibos em uma única prestação de contas",
          "Juntar capítulos de um manual, livro ou apostila",
          "Anexar uma carta de apresentação ao currículo como um só arquivo",
        ],
      },
      {
        heading: "Acertar a ordem das páginas",
        body: "A sequência do arquivo combinado é definida pela ordem em que você envia os arquivos, então organize a lista antes de converter. Se um dos PDFs de origem tiver as próprias páginas na ordem errada, resolva isso primeiro: divida em páginas soltas com o Dividir PDF e depois junte tudo na sequência que precisar.",
      },
      {
        heading: "Depois de juntar",
        body: "Um documento combinado costuma ser o momento em que você vai querer reduzir o tamanho, se as origens tinham muitas imagens (Comprimir PDF). Fazer isso no arquivo final garante que a compressão reflita o documento inteiro.",
      },
      {
        heading: "Privacidade e limites",
        body: "Os arquivos são criptografados no envio, combinados automaticamente sem revisão humana, e todos, origens e resultado, são apagados em até 24 horas. Vários arquivos por junção, até 100 MB cada, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Dividir PDF", href: "/pt/tools/split-pdf" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
      { label: "JPG para PDF", href: "/pt/tools/jpg-to-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre juntar vários arquivos PDF em um só.",
    faq: [
      {
        question: "Como juntar arquivos PDF online de graça?",
        answer:
          "Abra a ferramenta Juntar PDF do ConvertBrio, envie dois ou mais PDFs, organize na ordem que quiser e baixe o arquivo combinado: sem conta, sem instalar programa, sem marca d'água.",
      },
      {
        question: "Consigo controlar a ordem das páginas no PDF combinado?",
        answer:
          "Sim: os arquivos são unidos na ordem em que estão listados, com as páginas de cada um aparecendo em sequência. Organize os arquivos antes de converter.",
      },
      {
        question: "Juntar reduz a qualidade dos meus PDFs?",
        answer:
          "Não. As páginas são copiadas como estão, sem recompressão. O arquivo combinado tem aproximadamente o tamanho somado dos originais.",
      },
      {
        question: "Dá para juntar imagens e PDFs?",
        answer:
          "Converta as imagens para PDF primeiro com o JPG para PDF e depois junte esse PDF com os outros aqui.",
      },
      {
        question: "Há um limite de quantos PDFs posso combinar?",
        answer:
          "Você pode juntar vários arquivos de uma vez, cada um com até 100 MB. Trabalhos muito grandes ficam melhores feitos em duas etapas.",
      },
    ],
  },

  "split-pdf": {
    title: "Dividir PDF online: separe um documento em páginas individuais",
    intro: [
      "Precisa tirar uma página de um PDF maior ou quebrar um documento de várias páginas em arquivos separados? A ferramenta de dividir do ConvertBrio separa cada página do seu PDF em um arquivo próprio, pronto para baixar e usar de forma independente.",
      "É grátis, roda no navegador e não coloca marca d'água. O resultado vem como um ZIP com uma página por arquivo.",
    ],
    howTo: [
      { step: "Envie o seu PDF", detail: "Arraste para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Divida", detail: "O ConvertBrio quebra o documento em arquivos de uma página, um por página do original." },
      { step: "Baixe o ZIP", detail: "O resultado vem como um único arquivo ZIP com cada página como um PDF separado, pronto para extrair." },
    ],
    sections: [
      {
        heading: "Quando dividir faz sentido",
        body: "Casos comuns: tirar uma página de assinatura de um contrato, separar capítulos de um livro digitalizado, isolar uma nota fiscal de um lote, ou quebrar um relatório grande em seções menores para compartilhar mais fácil.",
      },
      {
        heading: "Juntar as páginas de novo depois",
        body: "Se você dividiu um PDF e depois precisa recombinar algumas ou todas as páginas em um novo documento, a ferramenta Juntar PDF do ConvertBrio coloca tudo de volta na ordem que você escolher.",
      },
      {
        heading: "Privacidade e limites",
        body: "O envio é criptografado, processado automaticamente sem revisão humana, e tanto o original quanto as páginas resultantes são apagados dos servidores do ConvertBrio em até 24 horas. Limite de 100 MB por arquivo.",
      },
    ],
    relatedTools: [
      { label: "Juntar PDF", href: "/pt/tools/merge-pdf" },
      { label: "PDF para JPG", href: "/pt/tools/pdf-to-jpg" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre dividir um PDF em páginas individuais.",
    faq: [
      {
        question: "Como dividir um PDF em páginas separadas?",
        answer:
          "Envie o seu PDF para a ferramenta Dividir PDF do ConvertBrio, e ela separa cada página em um arquivo individual, todos reunidos em um único download ZIP.",
      },
      {
        question: "Consigo extrair só uma página de um PDF?",
        answer:
          "Sim: a divisão quebra o documento em páginas individuais dentro de um ZIP, então você pega a página que precisa e ignora o resto.",
      },
      {
        question: "Dá para juntar as páginas de novo depois?",
        answer:
          "Sim, use a ferramenta Juntar PDF do ConvertBrio para recombinar as páginas em um novo documento na ordem que precisar.",
      },
    ],
  },

  "pdf-to-word": {
    title: "Conversor de PDF para Word: transforme um PDF em documento editável",
    intro: [
      "Precisa editar o texto de um PDF mas não tem o arquivo de origem? O conversor de PDF para Word do ConvertBrio remonta o seu PDF como um DOCX editável, parágrafos, negrito e itálico, títulos, tabelas simples e imagens incluídos, que abre no Microsoft Word, no Google Docs ou no LibreOffice.",
      "É grátis, não pede cadastro e não coloca marca d'água. Documentos simples convertem bem; quanto mais visualmente complexa a página original, mais ajustes você fará depois.",
    ],
    howTo: [
      {
        step: "Verifique se o PDF tem texto de verdade",
        detail:
          "Abra e tente selecionar uma frase com o cursor. Se conseguir, vá para o passo 2. Se o texto for uma imagem digitalizada, passe primeiro pelo OCR de PDF.",
      },
      { step: "Envie o PDF", detail: "Arraste para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Converta para DOCX", detail: "O ConvertBrio remonta o conteúdo como um documento Word, texto, títulos, tabelas básicas e imagens, e ele é baixado automaticamente." },
      { step: "Abra e edite no Word", detail: "O DOCX abre no Word, no Google Docs ou em qualquer editor compatível. Revise o layout e ajuste o que a conversão não posicionou perfeitamente." },
    ],
    sections: [
      {
        heading: "O que é preservado e o que precisa de ajuste",
        body: "Saber disso de antemão economiza tempo.",
        table: {
          headers: ["Elemento", "Resultado da conversão"],
          rows: [
            ["Parágrafos, negrito, itálico", "Preservados de forma confiável"],
            ["Títulos e listas básicas", "Preservados na maioria dos documentos"],
            ["Tabelas simples", "Preservadas; bordas e espaçamento podem precisar de ajuste"],
            ["Imagens no texto e em largura total", "Preservadas e posicionadas no fluxo"],
            ["Layouts de várias colunas", "Achatados em uma coluna: espere refazer o layout"],
            ["Cabeçalhos, rodapés, números de página", "Podem entrar no corpo ou sumir"],
          ],
        },
      },
      {
        heading: "Converter um documento digitalizado para Word",
        body: "Se o seu PDF é uma digitalização, uma foto de cada página em vez de texto real, este conversor não tem texto para extrair e vai gerar um documento vazio ou só com imagens. Passe a digitalização pelo OCR de PDF primeiro: ele reconhece o texto impresso e adiciona uma camada de texto. Depois converta esse PDF com OCR aqui para obter um DOCX editável.",
      },
      {
        heading: "Privacidade e limites",
        body: "O PDF é criptografado no envio, convertido automaticamente sem revisão humana, e os dois arquivos são apagados em até 24 horas. Um documento por vez, até 100 MB, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Word para PDF", href: "/pt/tools/word-to-pdf" },
      { label: "OCR de PDF", href: "/pt/tools/ocr-pdf" },
      { label: "PDF para JPG", href: "/pt/tools/pdf-to-jpg" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre converter arquivos PDF em documentos Word editáveis.",
    faq: [
      {
        question: "Como converter um PDF em um documento Word editável?",
        answer:
          "Envie o seu PDF para a ferramenta PDF para Word do ConvertBrio, e ela remonta o conteúdo, texto, títulos, tabelas simples e imagens, em um DOCX que você abre e edita no Microsoft Word ou no Google Docs.",
      },
      {
        question: "Como converter um documento digitalizado para Word?",
        answer:
          "Passe a digitalização primeiro pelo OCR de PDF do ConvertBrio para reconhecer o texto e adicionar uma camada de texto. Depois converta esse PDF aqui para obter um DOCX editável. Uma digitalização pura não tem texto para esta ferramenta extrair.",
      },
      {
        question: "Layouts complexos e imagens vão converter certo?",
        answer:
          "Parágrafos, negrito e itálico, títulos, tabelas simples e imagens são preservados. Layouts de várias colunas e páginas muito desenhadas são achatados e vão precisar de novo layout.",
      },
      {
        question: "O arquivo convertido é um .docx de verdade?",
        answer:
          "Sim: um .docx padrão que abre no Microsoft Word, no Google Docs, no LibreOffice e no Pages.",
      },
      {
        question: "Vocês colocam marca d'água?",
        answer: "Não. O DOCX é limpo, sem marca d'água, selo ou metadados adicionados.",
      },
    ],
  },

  "word-to-pdf": {
    title: "Conversor de Word para PDF: trave a formatação para compartilhar",
    intro: [
      "Um documento Word pode ficar diferente dependendo das fontes, da versão do Word ou do sistema em que é aberto: um problema real quando um currículo, contrato ou relatório precisa parecer igual para todo mundo que recebe. O conversor de Word para PDF do ConvertBrio transforma o seu DOCX em um PDF pronto para impressão que aparece igual em qualquer lugar e não pode ser editado por acidente.",
      "É grátis, roda no navegador, não precisa do Microsoft Word instalado e não coloca marca d'água.",
    ],
    howTo: [
      { step: "Salve o documento como .docx", detail: "No Word, use Arquivo → Salvar Como e escolha Documento do Word (.docx). Arquivos .doc antigos não são aceitos." },
      { step: "Envie o arquivo", detail: "Arraste o .docx para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Converta e baixe", detail: "O ConvertBrio faz o layout do documento e gera o PDF. O arquivo é baixado automaticamente, pronto para enviar por e-mail, imprimir ou fazer upload." },
    ],
    sections: [
      {
        heading: "Por que converter para PDF antes de enviar",
        body: "PDF é o padrão para documentos finalizados porque aparece igual em todo dispositivo, sem depender de o destinatário ter o Word ou as fontes certas. Um arquivo Word, por outro lado, pode reorganizar parágrafos, mudar quebras de página ou trocar fontes na máquina de outra pessoa: exatamente o que você não quer quando um recrutador abre o seu currículo.",
      },
      {
        heading: "Como a formatação é tratada",
        body: "Texto, fontes, títulos, listas, tabelas, imagens no texto e tamanho da página são preservados. Recursos muito específicos do Word, cabeçalhos e rodapés personalizados, notas de rodapé, controle de alterações, podem aparecer um pouco diferentes porque o documento é montado de novo, e não pelo próprio Word.",
      },
      {
        heading: "Privacidade e limites",
        body: "Seu documento é criptografado no envio, convertido automaticamente sem revisão humana, e os dois arquivos são apagados em até 24 horas. Um .docx por vez, até 100 MB, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "PDF para Word", href: "/pt/tools/pdf-to-word" },
      { label: "Juntar PDF", href: "/pt/tools/merge-pdf" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre converter documentos Word em PDF.",
    faq: [
      {
        question: "Como converter um documento Word para PDF de graça?",
        answer:
          "Envie o seu .docx para a ferramenta Word para PDF do ConvertBrio e ela gera um PDF formatado pronto para baixar: sem instalar o Microsoft Word, sem conta, sem marca d'água.",
      },
      {
        question: "Minha formatação vai continuar igual depois de converter?",
        answer:
          "Sim, para documentos padrão: layout, fontes, títulos, tabelas e imagens são preservados, e ao contrário de um arquivo Word o PDF aparece igual em qualquer dispositivo.",
      },
      {
        question: "Funciona com arquivos .doc?",
        answer:
          "Só com o formato moderno .docx. Abra um .doc antigo no Word e salve como .docx (Arquivo → Salvar Como), depois converta.",
      },
      {
        question: "Dá para converter o PDF de volta para Word depois?",
        answer:
          "Sim: use a ferramenta PDF para Word do ConvertBrio. Note que voltar um PDF de layout fixo para texto editável é aproximado em layouts complexos.",
      },
    ],
  },

  "pdf-to-jpg": {
    title: "Conversor de PDF para JPG: exporte cada página como imagem",
    intro: [
      "Às vezes você precisa de uma página do PDF como imagem: para colocar num slide, publicar nas redes, anexar onde PDFs não são aceitos ou tirar um gráfico de um relatório longo. O conversor de PDF para JPG do ConvertBrio renderiza cada página do seu arquivo como um JPG separado.",
      "É grátis, não pede cadastro e não coloca marca d'água. Um PDF de uma página retorna um único JPG; um de várias páginas retorna um conjunto de imagens, uma por página.",
    ],
    howTo: [
      { step: "Envie o seu PDF", detail: "Arraste para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Converta", detail: "O ConvertBrio renderiza cada página em um JPG de alta resolução. Documentos mais longos demoram um pouco mais porque cada página é renderizada individualmente." },
      { step: "Baixe as imagens", detail: "Uma página baixa como um JPG; várias páginas baixam juntas, para você ter o documento inteiro em imagens." },
    ],
    sections: [
      {
        heading: "Usos comuns",
        body: "",
        list: [
          "Incorporar uma página de PDF em um slide do PowerPoint ou Google Apresentações",
          "Publicar uma página ou certificado nas redes sociais ou num aplicativo de mensagens",
          "Enviar páginas de documento para um formulário que só aceita imagens",
          "Tirar um diagrama, gráfico ou figura de um relatório para reaproveitar",
        ],
      },
      {
        heading: "JPG ou PNG?",
        body: "Escolha JPG para páginas fotográficas e para o menor tamanho de arquivo: é o padrão certo para compartilhar. Escolha PNG quando a página é quase toda texto, tabelas ou traço e você precisa dela bem nítida, ou quando precisa de fundo transparente.",
      },
      {
        heading: "Privacidade e limites",
        body: "Seu PDF é criptografado no envio, renderizado automaticamente sem revisão humana, e tanto o envio quanto as imagens são apagados em até 24 horas. Um arquivo por vez, até 100 MB, grátis, sem conta.",
      },
    ],
    relatedTools: [
      { label: "JPG para PDF", href: "/pt/tools/jpg-to-pdf" },
      { label: "Dividir PDF", href: "/pt/tools/split-pdf" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre converter páginas de PDF em imagens JPG.",
    faq: [
      {
        question: "O PDF para JPG converte todas as páginas?",
        answer:
          "Sim: cada página do seu PDF é renderizada como um JPG separado, então um documento de várias páginas gera uma imagem por página.",
      },
      {
        question: "Devo usar JPG ou PNG para uma página com texto?",
        answer:
          "PNG mantém texto e traços mais nítidos por ser sem perdas; JPG gera um arquivo menor com detalhe um pouco mais suave. Use PNG quando a nitidez do texto for o mais importante.",
      },
      {
        question: "Dá para converter as imagens de volta para PDF depois?",
        answer:
          "Sim: use a ferramenta JPG para PDF do ConvertBrio para recombinar imagens em um único PDF quando precisar.",
      },
    ],
  },

  "jpg-to-pdf": {
    title: "Conversor de JPG para PDF: junte imagens em um só documento",
    intro: [
      "Seja para enviar páginas digitalizadas, montar um portfólio simples ou transformar uma pilha de recibos em um arquivo só, a ferramenta JPG para PDF do ConvertBrio combina uma ou mais imagens em um único PDF, na ordem que você escolher, com uma imagem por página.",
      "É a forma padrão de transformar fotos de papel em algo que dá para enviar. A maioria dos portais quer um PDF, não uma pasta de JPGs: isso resolve em um passo, grátis e sem marca d'água.",
    ],
    howTo: [
      { step: "Fotografe ou reúna as imagens", detail: "Para páginas de documento, fotografe de frente e com boa luz para o texto ficar legível. JPG e PNG são aceitos." },
      { step: "Envie tudo de uma vez", detail: "Arraste todas as imagens para a caixa ou selecione várias. Tamanho combinado de até 100 MB." },
      { step: "Defina a ordem das páginas", detail: "O PDF segue a ordem em que as imagens estão listadas, então organize página 1, página 2 e assim por diante." },
      { step: "Converta e baixe", detail: "O ConvertBrio coloca cada imagem em uma página própria e o PDF final é baixado automaticamente." },
    ],
    sections: [
      {
        heading: "Usos comuns",
        body: "",
        list: [
          "Enviar um documento, RG, passaporte ou certidão digitalizado",
          "Combinar várias fotos de recibo ou nota fiscal em uma prestação de contas",
          "Devolver um contrato assinado à mão como um único arquivo",
          "Transformar um conjunto de capturas de tela em um documento compartilhável",
        ],
      },
      {
        heading: "Um documento limpo a partir de fotos do celular",
        body: "Para resultados legíveis, preencha o quadro com a página, mantenha a câmera paralela para evitar formato de trapézio e use luz uniforme sem sombra sobre o texto. Se a foto ficar girada, corrija antes de converter. Se o PDF resultante ficar grande demais para um limite de upload, passe pelo Comprimir PDF depois.",
      },
      {
        heading: "Privacidade e limites",
        body: "As imagens são criptografadas no envio, combinadas automaticamente sem revisão humana, e tanto as origens quanto o PDF final são apagados em até 24 horas. Várias imagens por vez, 100 MB combinados, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "PDF para JPG", href: "/pt/tools/pdf-to-jpg" },
      { label: "Juntar PDF", href: "/pt/tools/merge-pdf" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre converter imagens JPG em um PDF.",
    faq: [
      {
        question: "Dá para combinar várias imagens em um só PDF?",
        answer:
          "Sim: envie quantas imagens JPG ou PNG precisar de uma vez, e o ConvertBrio combina em um PDF com cada imagem em sua própria página, na ordem que você organizar.",
      },
      {
        question: "Como converter a foto de um documento para PDF?",
        answer:
          "Envie a foto para o JPG para PDF e ela vira um PDF de uma página que você pode enviar, imprimir ou compartilhar. Envie várias fotos para transformar um documento de várias páginas em um só PDF.",
      },
      {
        question: "Meu PDF ficou grande demais para enviar, o que faço?",
        answer:
          "Fotos de celular são de alta resolução, então o PDF pode ficar grande. Passe pelo Comprimir PDF, que re-codifica as imagens embutidas e costuma cortar bastante o tamanho.",
      },
    ],
  },

  "image-converter": {
    title: "Conversor de imagem: converta entre qualquer formato online",
    intro: [
      "O conversor de imagem do ConvertBrio move uma foto, gráfico ou captura de tela entre JPG, PNG, WEBP, AVIF, HEIC e GIF em um passo, direto no navegador. Não há nada para instalar nem conta para criar: envie um arquivo, escolha o formato e baixe o resultado em segundos.",
      "O motivo mais comum de converter uma imagem é a compatibilidade: uma foto HEIC de iPhone que o Windows não abre, um WEBP salvo de um site que um editor recusa, ou um AVIF que um e-mail antigo não exibe.",
    ],
    howTo: [
      { step: "Envie a sua imagem", detail: "Arraste um arquivo JPG, PNG, WEBP, AVIF, HEIC ou GIF para a caixa, ou clique para procurar. Até 100 MB." },
      { step: "Escolha o formato de saída", detail: "Selecione JPG, PNG, WEBP, AVIF ou GIF. Na dúvida, JPG serve para fotos e PNG para gráficos com transparência ou texto nítido." },
      { step: "Converta e baixe", detail: "Clique em Converter. O ConvertBrio decodifica o original e re-codifica no formato escolhido, e o arquivo é baixado automaticamente." },
    ],
    sections: [
      {
        heading: "Escolhendo o formato de saída certo",
        body: "Não existe um formato de imagem melhor: a escolha certa depende de para onde o arquivo vai.",
        table: {
          headers: ["Você precisa…", "Converter para", "Motivo"],
          rows: [
            ["Anexar uma foto a um e-mail ou formulário", "JPG", "Abre em todo lugar, arquivo pequeno, sem risco de incompatibilidade"],
            ["Manter um fundo transparente", "PNG ou WEBP", "JPG e GIF antigo achatam a transparência sobre uma cor sólida"],
            ["Acelerar as imagens do seu próprio site", "WEBP ou AVIF", "Bem menores que JPG/PNG na mesma qualidade visual"],
            ["Abrir uma foto de iPhone no Windows", "JPG", "O suporte a HEIC no Windows é inconsistente; JPG é garantido"],
            ["Enviar para um site que recusa WEBP ou AVIF", "JPG ou PNG", "Os dois formatos que todo formulário de upload aceita"],
          ],
        },
      },
      {
        heading: "O que acontece com transparência e animação",
        body: "A transparência é preservada quando os dois formatos aceitam canal alfa (PNG, WEBP, AVIF). Converter uma imagem transparente para JPG preenche as áreas transparentes com branco. GIFs animados convertem para um único quadro.",
      },
      {
        heading: "Privacidade e limites",
        body: "Todo envio é criptografado e processado automaticamente sem revisão humana. Tanto o original quanto a imagem convertida são apagados dos servidores do ConvertBrio em até 24 horas. Arquivos de até 100 MB, grátis, sem conta e sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Comprimir Imagem", href: "/pt/tools/compress-image" },
      { label: "JPG para PDF", href: "/pt/tools/jpg-to-pdf" },
      { label: "PDF para JPG", href: "/pt/tools/pdf-to-jpg" },
    ],
    faqDescription: "Perguntas comuns sobre o conversor de imagem do ConvertBrio.",
    faq: [
      {
        question: "Entre quais formatos de imagem consigo converter?",
        answer:
          "O conversor lê JPG, PNG, WEBP, AVIF, HEIC e GIF, e exporta para JPG, PNG, WEBP, AVIF ou GIF. Isso cobre praticamente todo formato de câmeras, celulares, capturas de tela e programas de design.",
      },
      {
        question: "Converter vai reduzir a qualidade da minha imagem?",
        answer:
          "Converter entre formatos sem perdas como PNG mantém cada pixel. Converter para um formato com perdas como JPG ou WEBP aplica compressão uma vez, mas na qualidade padrão a diferença raramente é visível.",
      },
      {
        question: "Converter muda as dimensões da imagem?",
        answer:
          "Não. O conversor mantém a largura e a altura exatas do original. Se você também precisa mudar o tamanho, use uma ferramenta de redimensionamento depois.",
      },
      {
        question: "Vocês colocam marca d'água?",
        answer: "Não. O arquivo convertido vem limpo, em resolução total, sem marca d'água ou selo.",
      },
    ],
  },

  "ocr-pdf": {
    title: "OCR de PDF: torne um documento digitalizado pesquisável e editável",
    intro: [
      "Uma página digitalizada ou a foto de um documento é só uma imagem para o computador: você não consegue pesquisar, copiar o texto nem levar o documento digitalizado para o Word sem redigitar cada linha. O reconhecimento óptico de caracteres (OCR) resolve isso: ele lê o texto dentro da imagem e o transforma em caracteres de verdade, selecionáveis.",
      "É esta a ferramenta que as pessoas procuram quando pesquisam como transformar um documento digitalizado em texto editável. Digitalize ou fotografe as páginas, salve como PDF, passe aqui e copie o texto, ou mande o PDF pesquisável para a ferramenta PDF para Word.",
    ],
    howTo: [
      { step: "Digitalize ou fotografe o documento como PDF", detail: "Use um scanner ou um aplicativo de digitalização do celular (que salva direto em PDF). Páginas retas, planas e bem iluminadas dão o melhor reconhecimento." },
      { step: "Envie o PDF para o OCR de PDF", detail: "Um arquivo por vez, até 100 MB. Documentos de várias páginas funcionam: cada página é processada." },
      { step: "Rode o reconhecimento", detail: "O ConvertBrio lê cada página e monta uma camada de texto por trás da imagem original. Documentos maiores demoram mais porque cada página passa individualmente." },
      { step: "Leve o texto para o Word", detail: "Abra o PDF retornado, selecione tudo (Ctrl/Cmd+A) e cole no Word, ou mande o PDF pesquisável pelo PDF para Word para um DOCX que mantém a formatação básica." },
    ],
    sections: [
      {
        heading: "O que o OCR de PDF devolve",
        body: "Um PDF idêntico ao que você enviou, mesmas imagens de página, mesmo layout, mas com uma camada de texto por trás da imagem. Isso significa que você pode pesquisar com Ctrl+F, marcar e copiar trechos, e selecionar o documento inteiro para levar o texto a um lugar editável. A aparência da página não muda.",
      },
      {
        heading: "Levando um documento digitalizado para o Word",
        body: [
          "Há dois caminhos, conforme quanta formatação você precisa manter.",
          "Para texto simples, faça o OCR do PDF aqui, abra e copie o texto direto para um documento em branco no Word. Rápido, e funciona para cartas, anotações e páginas de coluna única.",
          "Para um documento que deve manter títulos, parágrafos e tabelas simples, passe o PDF com OCR pela ferramenta PDF para Word depois. Ela remonta o conteúdo reconhecido como um DOCX editável.",
        ],
      },
      {
        heading: "Obtendo a melhor precisão",
        body: "A qualidade do OCR segue a qualidade da digitalização. Páginas limpas, de alto contraste, digitalizadas a 300 DPI ou fotografadas de frente e com boa luz são reconhecidas quase perfeitamente. A precisão cai com inclinação, sombras, baixa resolução ou fontes incomuns. Escrita à mão não é reconhecida de forma confiável.",
      },
      {
        heading: "Privacidade e limites",
        body: "Seu documento é criptografado no envio, processado automaticamente sem revisão humana, e tanto o envio quanto o resultado com OCR são apagados em até 24 horas. Um PDF por vez, até 100 MB, grátis, sem conta.",
      },
    ],
    relatedTools: [
      { label: "PDF para Word", href: "/pt/tools/pdf-to-word" },
      { label: "PDF para JPG", href: "/pt/tools/pdf-to-jpg" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
    ],
    faqDescription: "Perguntas comuns sobre rodar OCR em um PDF e levar o texto digitalizado para o Word.",
    faq: [
      {
        question: "Como levar um documento digitalizado para o Word?",
        answer:
          "Salve a digitalização como PDF, passe pelo OCR de PDF para adicionar uma camada de texto e depois copie o texto direto para o Word, ou mande o PDF com OCR pela ferramenta PDF para Word para um DOCX editável que mantém a formatação básica.",
      },
      {
        question: "Dá para digitalizar um documento em texto editável de graça?",
        answer:
          "Sim. O OCR de PDF é grátis e sem conta. Ele reconhece o texto de cada página digitalizada para você selecionar, copiar e reaproveitar.",
      },
      {
        question: "O OCR muda a aparência do meu documento?",
        answer:
          "Não. A imagem da página original é preservada exatamente; o texto reconhecido é adicionado como uma camada invisível por cima, então visualmente nada muda.",
      },
      {
        question: "Ele reconhece escrita à mão?",
        answer: "Não de forma confiável. O OCR é feito para texto impresso e digitado. Anotações à mão podem ser reconhecidas apenas em parte.",
      },
      {
        question: "Meu PDF já tem texto selecionável, ainda preciso de OCR?",
        answer:
          "Não. Se você já consegue marcar o texto com o cursor, o PDF tem uma camada de texto de verdade e você pode ir direto para o PDF para Word.",
      },
    ],
  },

  "compress-powerpoint": {
    title: "Comprimir PowerPoint online: reduza um .pptx para e-mail",
    intro: [
      "Arquivos do PowerPoint crescem rápido: algumas fotos de celular, duas capturas de tela, um gráfico exportado, e um .pptx passa de 40 MB e não vai por e-mail. A ferramenta Comprimir PowerPoint do ConvertBrio abre a apresentação, re-codifica as imagens de dentro dela com qualidade e resolução eficientes, e devolve um .pptx menor que continua totalmente editável.",
      "É grátis, roda no navegador sem cadastro e não coloca marca d'água. O texto dos slides, o layout, as animações, os gráficos e as anotações ficam intactos: só as fotos e capturas de tela embutidas são re-codificadas.",
    ],
    howTo: [
      { step: "Salve a apresentação como .pptx", detail: "No PowerPoint, Arquivo → Salvar Como → Apresentação do PowerPoint (.pptx). O formato .ppt antigo não é aceito." },
      { step: "Envie", detail: "Arraste o .pptx para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Comprima", detail: "O ConvertBrio encontra cada imagem embutida, reduz a escala das que estão maiores do que um slide exibe, e re-codifica. Texto e conteúdo vetorial ficam intocados." },
      { step: "Baixe o .pptx menor", detail: "Abra no PowerPoint para conferir que os slides continuam certos, depois envie por e-mail ou faça upload." },
    ],
    sections: [
      {
        heading: "Por que arquivos do PowerPoint ficam tão grandes",
        body: "Celulares modernos tiram fotos de 12 a 48 megapixels: vários megabytes cada. Cole quatro delas nos slides e a apresentação carrega ~20 MB de imagem antes de uma única palavra de texto. O PowerPoint guarda cada imagem na resolução total em que foi inserida, mesmo que o slide mostre só uma versão pequena.",
      },
      {
        heading: "O que a ferramenta muda e o que não muda",
        body: "",
        list: [
          "Re-codificado: imagens JPEG e PNG embutidas, com escala reduzida se maiores que ~1800px no lado maior",
          "Intocado: todo o texto, fontes, layout dos slides, animações, transições e anotações",
          "Intocado: gráficos, tabelas, SmartArt e formas vetoriais",
          "O arquivo continua um .pptx normal e editável: nada é achatado",
        ],
      },
      {
        heading: "Quanto menor vai ficar?",
        body: "Depende de quantas imagens a apresentação tem. Uma apresentação feita em torno de fotos e capturas em alta resolução costuma cair 40–70%. Uma quase toda de texto, com um logo e algumas imagens pequenas, não muda muito.",
      },
      {
        heading: "Para um arquivo ainda menor: converta para PDF",
        body: "Se a apresentação está finalizada e o destinatário não precisa editar, converter para PDF e depois comprimir esse PDF costuma gerar o menor arquivo de todos, e ele abre em qualquer dispositivo sem PowerPoint. A troca é que deixa de ser uma apresentação editável.",
      },
      {
        heading: "Privacidade e limites",
        body: "Sua apresentação é criptografada no envio, processada automaticamente nos servidores do ConvertBrio sem revisão humana, e tanto o envio quanto a cópia comprimida são apagados em até 24 horas. Um .pptx por vez, até 100 MB, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Comprimir Word", href: "/pt/tools/compress-word" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
      { label: "Comprimir Imagem", href: "/pt/tools/compress-image" },
    ],
    faqDescription: "Perguntas comuns sobre reduzir o tamanho de uma apresentação do PowerPoint.",
    faq: [
      {
        question: "Como comprimir um PowerPoint para enviar por e-mail?",
        answer:
          "Envie o .pptx para a ferramenta Comprimir PowerPoint do ConvertBrio. Ela re-codifica as imagens embutidas e devolve uma apresentação menor e ainda editável: grátis, sem cadastro, sem marca d'água.",
      },
      {
        question: "O arquivo comprimido continua editável?",
        answer:
          "Sim. A saída é um .pptx normal que você abre e edita no PowerPoint. Só as imagens embutidas são re-codificadas; texto, layout, animações e anotações não mudam.",
      },
      {
        question: "Comprimir vai piorar a qualidade dos slides?",
        answer:
          "Texto e formas vetoriais continuam perfeitamente nítidos. As fotos são re-codificadas com uma redução pequena de qualidade, quase sempre invisível: a diferença só aparece com muito zoom em uma imagem numa tela grande.",
      },
      {
        question: "Minha apresentação quase não diminuiu, por quê?",
        answer:
          "Provavelmente ela já é enxuta: uma apresentação quase toda de texto tem poucos dados de imagem para remover.",
      },
      {
        question: "Funciona com arquivos .ppt?",
        answer:
          "Só o formato moderno .pptx. Abra um .ppt antigo no PowerPoint e salve como .pptx (Arquivo → Salvar Como), depois comprima.",
      },
    ],
  },

  "compress-word": {
    title: "Comprimir documento Word online: reduza um .docx para e-mail",
    intro: [
      "Um documento Word que não vai por e-mail quase sempre carrega imagens em resolução total. Uma única foto de celular colada em um relatório pode ter 5 MB sozinha; algumas delas e um .docx quase todo de texto passa de 30 MB. A ferramenta Comprimir Word do ConvertBrio abre o documento, re-codifica as imagens de dentro dele com qualidade e resolução eficientes, e devolve um .docx menor que continua totalmente editável.",
      "É grátis, roda no navegador sem cadastro e não coloca marca d'água. Texto, títulos, tabelas, estilos e layout ficam intactos: só as fotos e capturas de tela embutidas são re-codificadas.",
    ],
    howTo: [
      { step: "Salve o documento como .docx", detail: "No Word, Arquivo → Salvar Como → Documento do Word (.docx). O formato .doc antigo não é aceito." },
      { step: "Envie", detail: "Arraste o .docx para a caixa ou procure. Um arquivo por vez, até 100 MB." },
      { step: "Comprima", detail: "O ConvertBrio encontra cada imagem embutida, reduz a escala das que estão maiores do que uma página exibe, e re-codifica. Texto e conteúdo vetorial ficam intocados." },
      { step: "Baixe o .docx menor", detail: "Abra no Word para conferir que continua certo, depois envie por e-mail ou faça upload." },
    ],
    sections: [
      {
        heading: "Por que arquivos do Word ficam tão grandes",
        body: "O Word embute cada imagem na resolução em que foi adicionada: uma foto de 24 megapixels continua com 24 megapixels mesmo que a página a mostre com dois centímetros de largura. O texto, em comparação, é minúsculo. Então comprimir um documento Word é, na verdade, re-codificar e reduzir a escala das imagens de dentro dele.",
      },
      {
        heading: "O que a ferramenta muda e o que não muda",
        body: "",
        list: [
          "Re-codificado: imagens JPEG e PNG embutidas, com escala reduzida se maiores que ~1800px no lado maior",
          "Intocado: todo o texto do corpo, títulos, estilos, listas e tabelas",
          "Intocado: layout da página, cabeçalhos e rodapés, notas de rodapé e campos",
          "O arquivo continua um .docx normal e editável",
        ],
      },
      {
        heading: "Se ainda estiver grande demais",
        body: [
          "Para um documento finalizado que você vai enviar, Word para PDF seguido de Comprimir PDF costuma gerar o menor arquivo, e ele não pode ser editado por acidente.",
          "Um documento grande apesar de poucas imagens pode carregar controle de alterações e histórico de revisões (aceite ou rejeite todas as alterações e desligue o controle), fontes embutidas (Arquivo → Opções → Salvar → desmarque \"Inserir fontes no arquivo\"), ou conteúdo colado como objetos do Excel ou da web.",
        ],
      },
      {
        heading: "Privacidade e limites",
        body: "Seu documento é criptografado no envio, processado automaticamente nos servidores do ConvertBrio sem revisão humana, e tanto o envio quanto a cópia comprimida são apagados em até 24 horas. Um .docx por vez, até 100 MB, grátis, sem conta, sem marca d'água.",
      },
    ],
    relatedTools: [
      { label: "Word para PDF", href: "/pt/tools/word-to-pdf" },
      { label: "Comprimir PDF", href: "/pt/tools/compress-pdf" },
      { label: "Comprimir PowerPoint", href: "/pt/tools/compress-powerpoint" },
    ],
    faqDescription: "Perguntas comuns sobre reduzir o tamanho de um documento Word.",
    faq: [
      {
        question: "Como deixar um documento Word menor para enviar por e-mail?",
        answer:
          "Envie o .docx para a ferramenta Comprimir Word do ConvertBrio. Ela re-codifica as imagens embutidas e devolve um documento menor e ainda editável: grátis, sem cadastro, sem marca d'água. Para o menor arquivo, converta para PDF e comprima esse PDF.",
      },
      {
        question: "O arquivo comprimido continua editável?",
        answer:
          "Sim. A saída é um .docx normal que você abre e edita no Word, no Google Docs ou no LibreOffice. Só as imagens embutidas são re-codificadas.",
      },
      {
        question: "Comprimir muda meu texto ou formatação?",
        answer: "Não. Só as imagens são afetadas. Texto, títulos, tabelas, estilos e layout da página não mudam.",
      },
      {
        question: "Meu documento é quase todo texto mas ainda é grande, por quê?",
        answer:
          "Verifique controle de alterações e histórico de revisões, fontes embutidas ou conteúdo colado como objetos completos do Excel/web. Cada um pode adicionar vários megabytes independentemente das imagens.",
      },
      {
        question: "Funciona com arquivos .doc antigos?",
        answer: "Só o formato moderno .docx. Abra o .doc no Word e salve como .docx (Arquivo → Salvar Como), depois comprima.",
      },
    ],
  },
};
