import type { ToolContentEntry } from "../toolContent";

// Portuguese (pt-BR) long-form tool content, slice A. Links point to the /pt/ tool pages.

export const toolContentPtMoreA: Record<string, ToolContentEntry> = {
  "heic-to-jpg": {
    title: "Conversor de HEIC para JPG: abra fotos do iPhone em qualquer lugar",
    intro: [
      "iPhones e iPads salvam as fotos em HEIC por padrão: um formato que comprime muito bem, mas que não abre em muitos programas do dia a dia, de PCs antigos com Windows a certos formulários de envio e editores de foto. O conversor de HEIC para JPG do ConvertBrio resolve isso na hora: você envia a foto e ela volta como um JPG comum, que abre em qualquer navegador, app ou aparelho, sem plugin nem pacote de codecs.",
      "Você não precisa mudar nenhuma configuração do celular nem instalar nada. A conversão mantém a foto na resolução original e preserva a orientação, para que fotos em retrato não saiam deitadas. O resultado é um JPG simples que você pode mandar por e-mail, enviar a um portal de emprego ou de órgão público, colocar em um documento ou abrir em qualquer editor de fotos.",
    ],
    howTo: [
      {
        step: "Passe o arquivo HEIC para o seu dispositivo",
        detail:
          "Envie a foto do iPhone por AirDrop, e-mail ou cabo, ou baixe-a do iCloud. O arquivo termina em .heic ou .heif.",
      },
      {
        step: "Envie para o conversor",
        detail: "Arraste o arquivo para a caixa de envio ou clique para procurá-lo. Uma foto por conversão, até 100 MB.",
      },
      {
        step: "Clique em Converter",
        detail:
          "O ConvertBrio decodifica a imagem HEIC e a codifica de novo como JPG na resolução total, corrigindo a rotação a partir da etiqueta de orientação embutida.",
      },
      {
        step: "Baixe o JPG",
        detail:
          "O arquivo convertido é baixado automaticamente e abre em qualquer navegador, visualizador, programa de e-mail ou formulário de envio.",
      },
    ],
    sections: [
      {
        heading: "Por que os arquivos HEIC dão problema",
        body: [
          "O HEIC (High Efficiency Image Container) guarda uma foto com cerca de metade do tamanho de um JPG equivalente na mesma qualidade, e foi por isso que a Apple o adotou como padrão do iOS em 2017. O preço é o alcance: o HEIC depende do codec HEVC, que muitos sites, versões antigas do Windows, aparelhos Android e apps de terceiros não conseguem decodificar ou tratam de forma irregular.",
          "Se você já enviou uma foto de iPhone para um formulário e recebeu o erro «tipo de arquivo não compatível», viu uma miniatura em branco ou ouviu de um colega que a imagem não abre, quase sempre o culpado é o HEIC. Converter para JPG elimina essa dependência de vez.",
        ],
      },
      {
        heading: "HEIC e JPG lado a lado",
        body: "Os dois formatos têm perda de qualidade, mas foram criados com 25 anos de diferença e não oferecem os mesmos recursos.",
        table: {
          headers: ["", "HEIC", "JPG"],
          rows: [
            ["Tamanho do arquivo", "Cerca de 50% menor na mesma qualidade", "Maior, mas entendido por todo mundo"],
            ["Compatibilidade", "Só dispositivos Apple e os navegadores/sistemas mais recentes", "Todo aparelho, navegador, app e formulário"],
            ["Transparência", "Compatível", "Não compatível"],
            ["Várias imagens / dados de profundidade", "Compatível (Live Photos, profundidade do modo retrato)", "Apenas uma imagem plana"],
            ["Ideal para", "Armazenamento em dispositivos Apple", "Compartilhar, enviar e editar em qualquer lugar"],
          ],
        },
      },
      {
        heading: "Converter faz perder qualidade?",
        body: "Há uma rodada de recompressão, porque HEIC e JPG usam matemáticas diferentes, mas na qualidade padrão de JPG do ConvertBrio a diferença não aparece no tamanho normal de visualização nem em uma impressão. A resolução da foto (a contagem de megapixels) não muda. Se você pretende editar bastante a foto depois, converta para PNG com o Conversor de Imagem, para não empilhar uma segunda passada com perda mais adiante.",
      },
      {
        heading: "Converter várias fotos do iPhone",
        body: "Esta ferramenta converte um arquivo HEIC por envio. Para um lote, o caminho mais rápido é configurar a câmera do iPhone para fotografar em JPG daqui para a frente (Ajustes → Câmera → Formatos → Mais Compatível) e usar este conversor nas fotos HEIC que já estão na sua biblioteca. Para reunir várias fotos do iPhone em um único arquivo depois de converter, o Imagem para PDF aceita HEIC diretamente e junta várias imagens em um só PDF.",
      },
      {
        heading: "Privacidade",
        body: "A foto é criptografada em trânsito. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter fotos HEIC do iPhone em JPG.",
    faq: [
      {
        question: "Por que a foto do meu iPhone não abre no computador?",
        answer:
          "Provavelmente ela está salva em HEIC, o formato de foto padrão da Apple desde o iOS 11. Muitos PCs com Windows, celulares Android, apps antigos e sites não são compatíveis com HEIC. Convertê-la para JPG com o ConvertBrio faz com que abra em qualquer lugar.",
      },
      {
        question: "Converter HEIC para JPG perde qualidade?",
        answer:
          "Há uma pequena recompressão ao codificar em JPG, já que HEIC e JPG usam métodos de compressão diferentes, mas na qualidade padrão do ConvertBrio ela não é visível a olho nu em uma visualização normal, e a resolução continua a mesma.",
      },
      {
        question: "Minha foto vai sair girada ou deitada?",
        answer:
          "Não. O ConvertBrio lê a etiqueta de orientação do arquivo HEIC e aplica a rotação correta no JPG, então fotos em retrato e em paisagem saem do lado certo.",
      },
      {
        question: "Posso converter HEIC para PNG em vez de JPG?",
        answer:
          "Pode. Use o Conversor de Imagem e escolha PNG como formato de saída se precisar de um arquivo sem perdas ou se for editar a imagem várias vezes e quiser evitar uma segunda compressão com perda.",
      },
      {
        question: "Como faço o iPhone parar de tirar fotos em HEIC?",
        answer:
          "No iPhone, abra Ajustes → Câmera → Formatos e escolha «Mais Compatível». As novas fotos serão salvas em JPG. As fotos que já estão na sua biblioteca continuam em HEIC e ainda precisam ser convertidas.",
      },
      {
        question: "HEIF é a mesma coisa que HEIC?",
        answer:
          "Para este fim, na prática sim. HEIF é o padrão do contêiner; HEIC é a implementação da Apple com compressão HEVC. Esta ferramenta aceita arquivos .heic e .heif.",
      },
    ],
  },

  "jpg-to-png": {
    title: "Conversor de JPG para PNG: ganhe transparência e detalhes sem perdas",
    intro:
      "O JPG é ótimo para fotos pequenas e fáceis de compartilhar, mas não guarda transparência e perde um pouco de qualidade a cada vez que é salvo de novo. O conversor de JPG para PNG do ConvertBrio transforma seu JPG em um PNG sem perdas em segundos, que é o formato certo antes de continuar editando a imagem, colocá-la sobre um fundo colorido ou usá-la como logo ou ícone.",
    sections: [
      {
        heading: "Quando converter JPG para PNG",
        body: "Converta para PNG sempre que precisar de um canal alfa (transparência), por exemplo para recortar um logo do fundo, ou quando for editar uma imagem várias vezes e quiser evitar a perda de geração que vem de salvar JPGs repetidamente. O PNG também é a escolha mais segura para capturas de tela, diagramas e qualquer coisa com texto nítido ou bordas definidas, já que a compressão do JPG pode causar desfoque e artefatos em volta de detalhes finos.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o JPG e o ConvertBrio o decodifica e o codifica de novo como PNG, preservando cada pixel exatamente. Como o JPG não guarda transparência desde o início, o PNG gerado terá fundo opaco, a menos que você remova o fundo separadamente: a conversão em si trata de formato e qualidade, não de remoção automática de fundo.",
      },
      {
        heading: "Tamanho de arquivo esperado",
        body: "Os arquivos PNG costumam ficar maiores que o JPG de origem, já que o PNG não descarta dados como a compressão com perda do JPG. Em fotos com muito detalhe ou textura, espere um PNG várias vezes maior que o JPG original: é a troca normal por qualidade sem perdas.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens JPG em PNG.",
    faq: [
      {
        question: "Converter JPG para PNG adiciona transparência automaticamente?",
        answer:
          "Não. Arquivos JPG não guardam transparência, então converter para PNG gera uma imagem opaca com a mesma aparência. O PNG apenas oferece um formato sem perdas para você trabalhar, como antes de editar ou de adicionar transparência em um editor de imagens.",
      },
      {
        question: "Por que meu PNG ficou tão maior que o JPG original?",
        answer:
          "O PNG usa compressão sem perdas, que preserva cada pixel em vez de descartar detalhes como o JPG. Essa precisão custa um arquivo maior: é esperado, não é sinal de problema.",
      },
      {
        question: "PNG é melhor que JPG?",
        answer:
          "Nenhum é melhor em todos os casos: o PNG é ideal para gráficos, logos e tudo que precise de transparência ou de detalhes sem perdas, enquanto o JPG é melhor para fotos em que um arquivo pequeno importa mais que a precisão pixel a pixel.",
      },
    ],
  },

  "jpg-to-webp": {
    title: "Conversor de JPG para WEBP: arquivos menores para sites mais rápidos",
    intro:
      "O WEBP foi criado pelo Google justamente para carregar páginas mais rápido, e costuma gerar arquivos de 25 a 35% menores que um JPG equivalente com a mesma qualidade visual. O conversor de JPG para WEBP do ConvertBrio recodifica sua foto em segundos, uma vitória rápida para quem otimiza imagens de um site, de uma newsletter ou de um app.",
    sections: [
      {
        heading: "Por que converter para WEBP",
        body: "Se a velocidade de carregamento importa, seja para SEO, para quem acessa pelo celular ou só para um site mais ágil, o WEBP é uma das melhorias mais fáceis. Ele oferece a mesma faixa de qualidade do JPG com arquivos visivelmente menores, e os navegadores modernos (Chrome, Firefox, Safari, Edge) o exibem nativamente, então hoje não há perda de compatibilidade para a maior parte do público.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o JPG e o ConvertBrio o converte para WEBP automaticamente, mantendo a mesma resolução e aplicando o algoritmo de compressão do WEBP no lugar do JPG. O download fica pronto em segundos e pode ir direto para a pasta de imagens do site ou para o sistema de gerenciamento de conteúdo.",
      },
      {
        heading: "Quando o JPG ainda pode ser a melhor escolha",
        body: "Se a imagem precisa funcionar em programas ou situações sem suporte a WEBP, como alguns clientes de e-mail antigos, certas ferramentas de design ou fluxos de impressão, guarde também uma versão em JPG. Para uso geral na web, porém, o WEBP é o padrão mais eficiente.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens JPG em WEBP.",
    faq: [
      {
        question: "Quanto menor o WEBP fica em relação ao JPG?",
        answer:
          "Os arquivos WEBP costumam ser de 25 a 35% menores que um JPG visualmente equivalente, e por isso viraram a escolha padrão para imagens de sites em que a velocidade de carregamento importa.",
      },
      {
        question: "Todos os navegadores são compatíveis com WEBP?",
        answer:
          "Sim, todos os principais navegadores modernos, incluindo Chrome, Firefox, Safari e Edge, exibem WEBP nativamente. Hoje ele é seguro para publicação geral na web.",
      },
      {
        question: "Minha imagem vai ficar diferente depois de converter para WEBP?",
        answer:
          "Nas configurações padrão do ConvertBrio, a diferença visual é desprezível na maioria das fotos. A compressão do WEBP é mais eficiente que a do JPG, então ele consegue manter a mesma qualidade com um arquivo menor.",
      },
    ],
  },

  "jpg-to-avif": {
    title: "Conversor de JPG para AVIF: compressão de imagem de nova geração",
    intro:
      "O AVIF é o formato de imagem mais eficiente com suporte amplo hoje, e muitas vezes reduz um JPG em 50% ou mais na mesma qualidade visual. O conversor de JPG para AVIF do ConvertBrio cuida da codificação por você, dando a donos de sites e desenvolvedores um jeito fácil de adotar o formato sem ferramentas de linha de comando nem pipelines de build.",
    sections: [
      {
        heading: "O que torna o AVIF diferente",
        body: "O AVIF é baseado na tecnologia de compressão de imagens do codec de vídeo AV1, bem mais avançada que a compressão usada pelo JPG. Na prática, isso significa arquivos AVIF muito menores que o JPG com a mesma aparência, o que é valioso para qualquer site que queira reduzir o peso das páginas e melhorar o tempo de carregamento.",
      },
      {
        heading: "Como converter JPG para AVIF",
        body: "Você envia o arquivo JPG e o ConvertBrio gera uma versão AVIF na mesma resolução. Não há nada para instalar, e o resultado é baixado automaticamente quando o processamento termina. Seu arquivo original é apagado logo depois de ser lido para a conversão, e o resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
      {
        heading: "Suporte em navegadores e programas",
        body: "Todos os principais navegadores modernos exibem AVIF, mas alguns programas antigos, editores de imagem e redes sociais ainda não o aceitam no envio. Se você vai publicar no seu próprio site, o AVIF em geral é seguro; se for enviar para um lugar de compatibilidade desconhecida, guarde uma alternativa em JPG ou WEBP.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens JPG em AVIF.",
    faq: [
      {
        question: "O AVIF é melhor que o WEBP?",
        answer:
          "O AVIF em geral comprime de forma mais eficiente que o WEBP, muitas vezes gerando arquivos menores na mesma qualidade. O WEBP tem um suporte um pouco mais amplo em sistemas antigos, mas nos navegadores modernos o AVIF costuma ser a melhor escolha em tamanho de arquivo.",
      },
      {
        question: "Qualquer site pode usar imagens AVIF?",
        answer:
          "Todos os principais navegadores modernos exibem AVIF, mas alguns sistemas de gerenciamento de conteúdo, redes de anúncios e ferramentas antigas ainda não aceitam envios em AVIF. Confira os requisitos da sua plataforma se tiver problemas no envio.",
      },
      {
        question: "Quanto menor meu arquivo vai ficar?",
        answer:
          "Os resultados variam conforme a imagem, mas o AVIF costuma reduzir o tamanho em 50% ou mais em relação a um JPG de mesma qualidade, o que o torna um dos formatos mais eficazes para diminuir o peso das páginas.",
      },
    ],
  },

  "png-to-jpg": {
    title: "Conversor de PNG para JPG: reduza imagens para web e e-mail",
    intro:
      "Arquivos PNG preservam cada pixel, o que é ótimo para gráficos, mas muitas vezes exagero para fotos: o resultado são arquivos bem maiores do que o necessário. O conversor de PNG para JPG do ConvertBrio comprime sua imagem em um JPG menor e mais fácil de compartilhar, ideal para anexos de e-mail, páginas da web e qualquer lugar em que o limite de tamanho de envio importe.",
    sections: [
      {
        heading: "Quando converter PNG para JPG",
        body: "Se o seu PNG é uma foto (e não um gráfico com transparência ou texto de bordas definidas), converter para JPG quase sempre reduz bastante o arquivo sem perda visível de qualidade. Isso ajuda principalmente em anexos de e-mail com limite de tamanho, em páginas da web em que a velocidade de carregamento importa ou em qualquer formulário que rejeite arquivos grandes.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o PNG e o ConvertBrio o recodifica como JPG na qualidade padrão, que equilibra um arquivo pequeno com a fidelidade visual. Como o JPG não aceita transparência, qualquer área transparente do PNG original será preenchida com um fundo sólido no resultado.",
      },
      {
        heading: "O que você perde (e o que não perde)",
        body: "Converter para JPG descarta a transparência e aplica compressão com perda, então não é a escolha certa para logos ou gráficos que precisam de fundo transparente. Em fotos comuns, a compressão mal é percebida e a redução de tamanho costuma ser grande, muitas vezes de 50 a 80% menor que o PNG original.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens PNG em JPG.",
    faq: [
      {
        question: "Por que meu arquivo PNG é tão grande?",
        answer:
          "O PNG usa compressão sem perdas, ou seja, guarda cada pixel exatamente em vez de descartar detalhes como o JPG. Isso torna o PNG ideal para gráficos, mas muitas vezes bem maior que o necessário para fotos comuns.",
      },
      {
        question: "O que acontece com as áreas transparentes ao converter para JPG?",
        answer:
          "O JPG não aceita transparência, então qualquer parte transparente do seu PNG será preenchida com uma cor sólida (normalmente branca) no arquivo convertido.",
      },
      {
        question: "Quanto menor o JPG vai ficar?",
        answer:
          "Depende da imagem, mas fotos costumam encolher de 50 a 80% ao passar de PNG para JPG na qualidade padrão, já que a compressão do JPG é ajustada justamente para conteúdo fotográfico.",
      },
    ],
  },

  "png-to-webp": {
    title: "Conversor de PNG para WEBP: compressão amiga da qualidade para a web",
    intro:
      "O WEBP aceita compressão com e sem perdas, então pode substituir o PNG em gráficos que precisam de transparência e ainda reduzir bastante o tamanho do arquivo. O conversor de PNG para WEBP do ConvertBrio recodifica sua imagem em segundos, mantendo a transparência onde o PNG original a tinha.",
    sections: [
      {
        heading: "Por que o WEBP vence o PNG em tamanho de arquivo",
        body: "Mesmo no modo sem perdas, o WEBP costuma comprimir de forma mais eficiente que o PNG e gera arquivos menores a partir da mesma imagem. Para gráficos, ícones e capturas de tela que vão para um site, isso se traduz direto em páginas mais rápidas, sem abrir mão da transparência nem do detalhe exato.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o PNG e o ConvertBrio o converte para WEBP automaticamente. As áreas transparentes do arquivo original são preservadas no WEBP, então logos e ícones com canal alfa são convertidos sem nenhuma edição manual.",
      },
      {
        heading: "Onde usar o resultado",
        body: "O WEBP é aceito nativamente por todos os principais navegadores modernos, o que o torna um padrão seguro para imagens de sites, favicons e elementos de interface. Se você precisa do arquivo para impressão, para programas antigos ou para uma plataforma com suporte incerto a WEBP, guarde o PNG original como reserva.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens PNG em WEBP.",
    faq: [
      {
        question: "Converter PNG para WEBP mantém a transparência?",
        answer:
          "Sim. O WEBP aceita canal alfa como o PNG, então qualquer fundo transparente do seu arquivo original passa para a imagem WEBP convertida.",
      },
      {
        question: "O WEBP é sempre menor que o PNG?",
        answer:
          "Em geral, sim: mesmo no modo sem perdas, a compressão do WEBP costuma ser mais eficiente que a do PNG, então a maioria das imagens encolhe de forma perceptível depois da conversão.",
      },
      {
        question: "Posso converter o WEBP de volta para PNG depois?",
        answer:
          "Pode. Use o conversor de WEBP para PNG do ConvertBrio sempre que precisar do arquivo de volta em PNG para programas que não aceitam WEBP.",
      },
    ],
  },

  "png-to-avif": {
    title: "Conversor de PNG para AVIF: compressão máxima para gráficos",
    intro:
      "O AVIF consegue comprimir gráficos e fotos de forma muito mais agressiva que o PNG, ainda com suporte a transparência, e por isso é um dos formatos mais econômicos em espaço para imagens da web hoje. O conversor de PNG para AVIF do ConvertBrio faz a conversão na hora, sem precisar de nenhum programa de codificação.",
    sections: [
      {
        heading: "Por que escolher AVIF em vez de PNG",
        body: "A compressão sem perdas do PNG deixa os arquivos maiores do que o necessário em muitos casos. O AVIF, construído sobre a tecnologia de compressão dos codecs de vídeo modernos, consegue reduzir a mesma imagem de forma drástica, às vezes em 80% ou mais, mantendo transparência e qualidade visual, o que é um grande ganho de desempenho para o site.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo PNG e o ConvertBrio gera uma versão AVIF, preservando transparência e resolução. A conversão termina em segundos para imagens de tamanho comum. Seu arquivo original é apagado logo depois de ser lido para a conversão, e o resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
      {
        heading: "Observações sobre compatibilidade",
        body: "O AVIF é exibido corretamente em todas as versões atuais de Chrome, Firefox, Safari e Edge. Algumas ferramentas, programas de e-mail e softwares de design mais antigos podem ainda não aceitá-lo, então ele é mais indicado para uso direto em sites do que para arquivos que você vai entregar a sistemas de terceiros de compatibilidade desconhecida.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens PNG em AVIF.",
    faq: [
      {
        question: "O AVIF aceita fundo transparente?",
        answer:
          "Sim, o AVIF aceita canal alfa, então a transparência do seu PNG original passa corretamente para o arquivo AVIF convertido.",
      },
      {
        question: "Quanto menor meu arquivo AVIF vai ficar?",
        answer:
          "Os resultados variam conforme o conteúdo da imagem, mas o AVIF costuma reduzir arquivos PNG em 70 a 80% ou mais, o que o torna um dos formatos mais eficientes disponíveis hoje para a web.",
      },
      {
        question: "Devo usar AVIF ou WEBP no meu site?",
        answer:
          "O AVIF geralmente comprime melhor, então vale usá-lo onde a sua plataforma for compatível. O WEBP continua sendo uma alternativa sólida e um pouco mais compatível se você esbarrar em restrições de envio com o AVIF.",
      },
    ],
  },

  "webp-to-jpg": {
    title: "Conversor de WEBP para JPG: abra imagens WEBP em qualquer lugar",
    intro:
      "Imagens WEBP baixadas de sites nem sempre abrem direito em visualizadores de fotos antigos, em algumas ferramentas de design ou em apps que esperam um formato padrão. O conversor de WEBP para JPG do ConvertBrio transforma qualquer arquivo WEBP em um JPG que abre em todo lugar, sem adivinhação de compatibilidade.",
    sections: [
      {
        heading: "Por que os arquivos WEBP às vezes não abrem",
        body: "O WEBP é um formato relativamente moderno e, embora os navegadores o aceitem de forma universal, alguns visualizadores de fotos para desktop, versões antigas de editores de imagem e certos apps ainda não o reconhecem. Se você salvou uma imagem de um site e ela não abre onde você esperava, convertê-la para JPG é a correção mais rápida.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo WEBP e o ConvertBrio o decodifica e o codifica de novo como JPG. O resultado abre em todo navegador, visualizador de fotos e ferramenta de edição, o que o torna o formato mais seguro para compartilhar com qualquer pessoa ou anexar a um e-mail.",
      },
      {
        heading: "O que esperar",
        body: "Se o WEBP original tinha fundo transparente, essa transparência será preenchida com uma cor sólida no JPG, já que o JPG não aceita canal alfa. Em fotos comuns e imagens da web sem transparência, a conversão é visualmente imperceptível.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens WEBP em JPG.",
    faq: [
      {
        question: "Por que não consigo abrir um arquivo WEBP no meu computador?",
        answer:
          "Alguns visualizadores de fotos, editores de imagem e versões de sistema operacional mais antigos não são compatíveis com WEBP de forma nativa, embora todo navegador moderno seja. Converter para JPG resolve o problema na hora.",
      },
      {
        question: "Vou perder a transparência ao converter WEBP para JPG?",
        answer:
          "Sim. O JPG não aceita transparência, então qualquer área transparente do WEBP original aparecerá como uma cor sólida no arquivo convertido. Use WEBP para PNG se precisar manter a transparência.",
      },
      {
        question: "O JPG convertido é seguro para compartilhar ou enviar?",
        answer:
          "Sim. O JPG é o formato de imagem de compatibilidade mais universal, então o arquivo convertido abre corretamente em praticamente qualquer app, aparelho ou formulário de envio.",
      },
    ],
  },

  "webp-to-png": {
    title: "Conversor de WEBP para PNG: preserve transparência e qualidade",
    intro:
      "Quando uma imagem WEBP tem fundo transparente, como um logo, um ícone ou um gráfico exportado, converter para JPG está fora de cogitação. O conversor de WEBP para PNG do ConvertBrio preserva essa transparência e gera um arquivo sem perdas que funciona em ferramentas de design, programas antigos e em qualquer lugar onde o PNG seja o formato esperado.",
    sections: [
      {
        heading: "Quando escolher PNG em vez de JPG",
        body: "Se o seu arquivo WEBP tem pixels transparentes ou semitransparentes, converter para PNG é a decisão certa: dos dois, é o único formato comum que mantém o canal alfa intacto. O PNG também é a escolha mais segura quando você pretende editar a imagem depois, pois não introduz artefatos de compressão.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo WEBP e o ConvertBrio o converte em um PNG sem perdas, mantendo transparência e resolução exatamente como estavam. Isso vale tanto para WEBP com perdas quanto sem perdas: o PNG gerado sempre preserva todo o detalhe da imagem decodificada.",
      },
      {
        heading: "Considerações sobre o tamanho do arquivo",
        body: "Os arquivos PNG costumam ser maiores que o WEBP, já que a compressão do WEBP é mais eficiente. Para gráficos e ícones a diferença geralmente é pequena; para fotos grandes, o PNG pode ficar bem maior, uma troca razoável quando a prioridade é a transparência ou a qualidade sem perdas.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens WEBP em PNG.",
    faq: [
      {
        question: "O WEBP para PNG mantém o fundo transparente?",
        answer:
          "Sim. Se o seu arquivo WEBP tem transparência, o ConvertBrio a preserva exatamente no PNG convertido, já que os dois formatos aceitam canal alfa.",
      },
      {
        question: "Devo usar PNG ou JPG para o meu arquivo WEBP?",
        answer:
          "Escolha PNG se a imagem tiver transparência ou se você pretende editá-la depois. Escolha JPG se for uma foto simples e você quiser o menor arquivo possível para compartilhar.",
      },
      {
        question: "A qualidade da imagem vai mudar?",
        answer:
          "Não. O PNG é um formato sem perdas, então converter de WEBP para PNG não descarta nenhum detalhe além do que o arquivo WEBP original já continha.",
      },
    ],
  },

  "webp-to-avif": {
    title: "Conversor de WEBP para AVIF: espremendo ainda mais a compressão",
    intro:
      "O AVIF costuma superar o WEBP em eficiência de compressão, então recodificar uma imagem WEBP existente como AVIF pode reduzi-la ainda mais, sem perda de qualidade visível. O conversor de WEBP para AVIF do ConvertBrio faz essa troca em uma única etapa.",
    sections: [
      {
        heading: "Por que recodificar WEBP como AVIF",
        body: "Se você já usa WEBP para melhorar o desempenho da web, vale testar o AVIF como próximo passo: ele costuma comprimir melhor a mesma imagem de origem, principalmente fotos e gráficos complexos. A diferença é mais notável em imagens maiores e cheias de detalhes.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo WEBP e o ConvertBrio o decodifica e o codifica de novo como AVIF, preservando a transparência, se houver. O resultado é baixado automaticamente e pode ser usado onde a sua plataforma aceitar imagens AVIF.",
      },
      {
        heading: "O que conferir antes de trocar",
        body: "O AVIF é aceito por todos os principais navegadores atuais, mas confirme se o seu sistema de gerenciamento de conteúdo e as ferramentas de terceiros do seu fluxo aceitam envios em AVIF antes de substituir o WEBP em todo o site. Em projetos pessoais e sites modernos, a troca costuma ser tranquila.",
      },
      {
        heading: "Limites e privacidade",
        body: "Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens WEBP em AVIF.",
    faq: [
      {
        question: "Vale a pena converter WEBP para AVIF?",
        answer:
          "Se o seu objetivo é o menor tamanho de arquivo possível e a sua plataforma aceita AVIF, sim: o AVIF costuma comprimir melhor que o WEBP na mesma imagem, principalmente em fotos.",
      },
      {
        question: "A conversão mantém a transparência?",
        answer:
          "Sim. O AVIF aceita transparência como o WEBP, então qualquer canal alfa do seu arquivo original é preservado na imagem convertida.",
      },
      {
        question: "Posso converter de volta para WEBP se precisar?",
        answer:
          "Pode. Use o conversor de imagem do ConvertBrio para voltar de AVIF para WEBP ou para qualquer outro formato compatível, a qualquer momento.",
      },
    ],
  },

  "avif-to-jpg": {
    title: "Conversor de AVIF para JPG: faça imagens AVIF abrirem em qualquer lugar",
    intro:
      "A compressão eficiente do AVIF o torna ótimo para sites modernos, mas muitos apps, aparelhos antigos e ferramentas de foto ainda não conseguem abri-lo. O conversor de AVIF para JPG do ConvertBrio decodifica a imagem e a salva de novo como um JPG que funciona em praticamente qualquer programa que você encontrar.",
    sections: [
      {
        heading: "Por que converter AVIF para JPG",
        body: "Se um arquivo AVIF não abre no seu visualizador de fotos, no programa de edição ou no formulário de envio de um site, o JPG é a alternativa mais segura: é aceito praticamente em todo lugar, de programas com décadas de idade aos aparelhos mais novos. Esse é o motivo mais comum para quem converte para fora do AVIF.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo AVIF e o ConvertBrio o decodifica e codifica a imagem de novo como JPG na resolução total. O download fica pronto em segundos e abre na hora em qualquer navegador, visualizador ou app de edição.",
      },
      {
        heading: "O que muda na conversão",
        body: "O JPG não aceita transparência, então, se o arquivo AVIF tinha fundo transparente, ele será preenchido com uma cor sólida no resultado. Em fotos comuns sem transparência, o resultado visual é praticamente idêntico ao original.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens AVIF em JPG.",
    faq: [
      {
        question: "Por que meu arquivo AVIF não abre?",
        answer:
          "O AVIF é um formato mais novo e, embora os navegadores modernos o aceitem, muitos apps antigos, visualizadores de fotos e algumas ferramentas de edição ainda não. Converter para JPG faz o arquivo abrir em qualquer lugar na hora.",
      },
      {
        question: "Converter para JPG faz perder qualidade de imagem?",
        answer:
          "Há uma pequena recompressão, já que AVIF e JPG usam algoritmos diferentes, mas na qualidade padrão do ConvertBrio ela não é visível no uso normal.",
      },
      {
        question: "Posso converter AVIF para PNG em vez disso?",
        answer:
          "Pode. Use o conversor de AVIF para PNG se precisar de um arquivo sem perdas ou de preservar a transparência, que o JPG não consegue guardar.",
      },
    ],
  },

  "avif-to-png": {
    title: "Conversor de AVIF para PNG: saída sem perdas com transparência preservada",
    intro:
      "Quando uma imagem AVIF tem fundo transparente ou você precisa de precisão pixel a pixel para continuar editando, o PNG é o formato de destino certo. O conversor de AVIF para PNG do ConvertBrio decodifica seu arquivo e gera um PNG sem perdas em segundos, mantendo qualquer transparência totalmente intacta.",
    sections: [
      {
        heading: "Quando o PNG é a melhor escolha",
        body: "Escolha PNG em vez de JPG sempre que o AVIF de origem tiver transparência, texto nítido ou detalhes finos que você não quer suavizar com compressão com perdas. Ele também é o formato intermediário mais seguro se você pretende abrir a imagem em uma ferramenta de design para editar mais.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo AVIF e o ConvertBrio o decodifica e o codifica de novo como PNG sem perdas, preservando resolução, cor e transparência exatamente como estavam no arquivo original.",
      },
      {
        heading: "Tamanho de arquivo esperado",
        body: "Como o PNG não comprime de forma tão agressiva quanto o AVIF, o arquivo convertido costuma ficar bem maior que o original, muitas vezes várias vezes maior. Essa troca é esperada e traz como benefício um resultado sem perdas e amplamente compatível.",
      },
      {
        heading: "Limites e privacidade",
        body: "Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens AVIF em PNG.",
    faq: [
      {
        question: "O AVIF para PNG preserva a transparência?",
        answer:
          "Sim. Se o seu arquivo AVIF tem canal alfa, o ConvertBrio leva essa transparência exatamente para o PNG convertido.",
      },
      {
        question: "Por que meu arquivo PNG é muito maior que o AVIF?",
        answer:
          "O PNG é um formato sem perdas e não comprime de forma tão eficiente quanto o AVIF, então um aumento de tamanho depois da conversão é normal e esperado.",
      },
      {
        question: "O PNG é um bom formato para continuar editando imagens?",
        answer:
          "Sim. Como o PNG não aplica compressão com perdas, ele é um formato intermediário mais seguro que o JPG ou o AVIF quando você pretende abrir um arquivo em um editor e salvá-lo várias vezes.",
      },
    ],
  },

  "avif-to-webp": {
    title: "Conversor de AVIF para WEBP: mais compatibilidade sem perder eficiência",
    intro:
      "O WEBP tem um suporte um pouco mais amplo que o AVIF em ferramentas e plataformas mais antigas e ainda oferece uma boa compressão, o que o torna um meio-termo prático quando o AVIF não é totalmente aceito. O conversor de AVIF para WEBP do ConvertBrio faz a troca na hora.",
    sections: [
      {
        heading: "Por que converter AVIF para WEBP",
        body: "Se uma plataforma, plugin ou programa rejeita envios em AVIF mas aceita WEBP, converter é a correção mais rápida: você mantém boa parte do ganho de eficiência do AVIF e ganha mais compatibilidade. Isso é comum ao trabalhar com sistemas de gerenciamento de conteúdo mais antigos ou com integrações de terceiros.",
      },
      {
        heading: "Como funciona a conversão",
        body: "Você envia o arquivo AVIF e o ConvertBrio o decodifica e o codifica de novo como WEBP, preservando transparência e resolução. O processo termina em segundos e o arquivo é baixado automaticamente.",
      },
      {
        heading: "O custo em compressão",
        body: "Os arquivos WEBP costumam ser um pouco maiores que o AVIF equivalente na mesma qualidade visual, já que a compressão do AVIF em geral é mais avançada. A diferença costuma ser pequena o bastante para que o ganho de compatibilidade valha a pena na maioria dos casos.",
      },
      {
        heading: "Limites e privacidade",
        body: "Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como converter imagens AVIF em WEBP.",
    faq: [
      {
        question: "Por que converter AVIF para WEBP em vez de manter o AVIF?",
        answer:
          "Algumas plataformas e ferramentas antigas aceitam WEBP mas não AVIF. Converter dá mais compatibilidade e mantém boa parte do ganho de tamanho com que o AVIF começou.",
      },
      {
        question: "O tamanho do arquivo vai aumentar depois de converter?",
        answer:
          "Um pouco, na maioria dos casos: a compressão do WEBP é um pouco menos eficiente que a do AVIF, então espere um aumento modesto, e não dramático.",
      },
      {
        question: "A transparência passa de AVIF para WEBP?",
        answer:
          "Sim. Os dois formatos aceitam canal alfa, então qualquer transparência do seu arquivo AVIF original é preservada no WEBP convertido.",
      },
    ],
  },

  "resize-image": {
    title: "Como reduzir o tamanho em pixels de uma foto?",
    intro: [
      "Digite a largura e a altura máximas que você quer, em pixels, e o ConvertBrio reduz a foto para caber nelas. O tamanho em pixels é o número de pixels na horizontal e na vertical de uma imagem (por exemplo, 4000 × 3000). Diminuí-lo deixa a imagem menor na tela e também reduz o tamanho do arquivo, sem precisar de nenhum programa de design.",
      "A ferramenta mantém as proporções da foto, então não consegue esticar nem achatar a imagem, e só deixa as imagens menores: ela não amplia uma foto além do tamanho original. Se você precisa de uma largura e uma altura exatas que não combinam com o formato da foto, ou de um tamanho máximo em KB, use o Redimensionar Foto e Assinatura. Para ampliar uma foto pequena, use o Ampliador com IA.",
    ],
    howTo: [
      {
        step: "Envie sua imagem",
        detail: "JPG, PNG, WEBP, HEIC, AVIF ou GIF, até 100 MB.",
      },
      {
        step: "Digite uma largura, uma altura ou as duas",
        detail:
          "Digite o tamanho em pixels que você quer. Dá para preencher só um: deixe o outro em branco e ele é calculado a partir das proporções da foto. Se preencher os dois, a foto é reduzida para caber dentro dessa caixa.",
      },
      {
        step: "Redimensione e baixe",
        detail: "O ConvertBrio reduz a imagem e o arquivo é baixado automaticamente.",
      },
      {
        step: "Confira o resultado",
        detail:
          "Abra o arquivo baixado e veja as dimensões dele (clique com o botão direito > Propriedades no Windows, Obter Informações no Mac). Aumente o zoom para 100% e confirme que a imagem continua nítida.",
      },
    ],
    sections: [
      {
        heading: "Dimensões comuns para as quais as pessoas redimensionam",
        body: "Se você não tem certeza de qual tamanho precisa, estas são as especificações que as pessoas mais procuram aqui.",
        table: {
          headers: ["Uso", "Tamanho típico (px)"],
          rows: [
            ["Post do Instagram (quadrado)", "1080 × 1080"],
            ["Stories / reels do Instagram", "1080 × 1920"],
            ["Imagem compartilhada no Facebook / LinkedIn", "1200 × 630"],
            ["Miniatura do YouTube", "1280 × 720"],
            ["Foto de perfil do LinkedIn", "400 × 400 (mín.)"],
            ["Foto de passaporte (2 × 2 pol. a 300 DPI)", "600 × 600"],
          ],
        },
      },
      {
        heading: "Exemplo: de 4000 × 3000 para 1200 × 900",
        body: "Uma foto típica de celular tem 4000 × 3000 pixels (formato 4:3). Para chegar a 1200 pixels de largura, digite 1200 na caixa de largura e deixe a altura em branco: a altura é calculada como 900, resultando em 1200 × 900. Se você digitar 1200 × 1200, a foto é reduzida para caber nesse quadrado, o que dá 1200 × 900 de novo, e não um quadrado esticado. O novo arquivo tem 9 vezes menos pixels, então é bem mais leve para guardar e enviar.",
      },
      {
        heading: "Como redimensionar uma imagem sem esticá-la?",
        body: [
          "A distorção acontece quando uma ferramenta força a foto dentro de uma caixa de formato diferente, e um rosto ou um círculo vira um oval. Esta ferramenta evita isso mantendo a proporção original (a relação entre largura e altura): o resultado cabe dentro da largura e da altura que você digitar, e a outra dimensão é calculada para você.",
          "Isso significa que o resultado pode ficar menor que a caixa digitada em uma das direções. Se um formulário exige um formato exato, como 600 × 600, recorte antes a foto em um quadrado com a ferramenta Recortar Imagem e depois redimensione. Recortar remove as bordas; só redimensionar nunca remove. Para largura e altura exatas em uma única etapa, com recorte ou com margens brancas, use o Redimensionar Foto e Assinatura.",
        ],
        table: {
          headers: ["Partindo de 4000 × 3000", "O que você obtém", "Fica certo?"],
          rows: [
            ["Largura 1200, altura em branco", "1200 × 900", "Sim: proporções mantidas"],
            ["Largura 1200, altura 1200", "1200 × 900", "Sim: cabe na caixa, sem esticar"],
            ["Recortar em um quadrado e depois redimensionar para 1200 × 1200", "1200 × 1200", "Sim: bordas recortadas, nada distorcido"],
            ["Forçar 1200 × 1200 sem recortar (outras ferramentas)", "1200 × 1200", "Não: a imagem fica achatada"],
          ],
        },
      },
      {
        heading: "Reduzir pixels é o mesmo que reduzir o tamanho do arquivo?",
        body: [
          "Estão relacionados, mas não são a mesma coisa. O tamanho em pixels é quantos pixels a imagem tem. O tamanho do arquivo é quantos bytes ela ocupa, e depende da quantidade de pixels e da intensidade da compressão. Menos pixels normalmente significa um arquivo menor, mas reduzir pela metade as duas dimensões não divide o arquivo exatamente por quatro, porque a compressão e o conteúdo da imagem também contam.",
          "Escolha de acordo com o objetivo: para ajustar um tamanho em uma página ou as dimensões exigidas por uma plataforma, redimensione. Para ficar abaixo de um limite de envio em KB ou MB, comprima, ou redimensione primeiro e depois passe pelo Comprimir Imagem para o ajuste final. Redimensionar antes faz o compressor trabalhar menos, e a qualidade se mantém melhor. Para atingir um tamanho exato em pixels e um limite em KB ao mesmo tempo, use o Redimensionar Foto e Assinatura.",
        ],
      },
      {
        heading: "Solução de problemas",
        list: [
          "A foto não ficou maior: esta ferramenta só reduz o tamanho. Use o Ampliador com IA para ampliar.",
          "O resultado não tem o tamanho exato que digitei: a foto foi reduzida para caber na sua caixa sem mudar o formato. Recorte antes ou use o Redimensionar Foto e Assinatura para dimensões exatas.",
          "O arquivo ainda está grande demais em KB: comprima depois de redimensionar, ou defina um alvo no Redimensionar Foto e Assinatura.",
          "Uma foto HEIC voltou como JPG: a ferramenta não consegue salvar HEIC, então devolve JPG. Uma foto de câmera ou celular mantém a orientação correta.",
          "A foto parece desfocada: reduzir muito uma foto e depois vê-la ampliada deixa a imagem com aspecto suave. Redimensione para o tamanho em que você realmente vai exibi-la.",
        ],
        body: "Se o resultado não for o que você esperava, confira primeiro estes pontos.",
      },
      {
        heading: "Privacidade e limites",
        body: "Os envios são criptografados em trânsito. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana. Uma imagem por envio, até 100 MB, grátis, sem conta.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como redimensionar imagens para dimensões exatas.",
    faq: [
      {
        question: "Como redimensionar uma imagem para dimensões exatas em pixels?",
        answer:
          "Envie sua imagem para a ferramenta de redimensionar do ConvertBrio, digite a largura e a altura de que você precisa em pixels e baixe o arquivo redimensionado. Funciona com qualquer formato de imagem que a ferramenta aceita.",
      },
      {
        question: "Redimensionar vai distorcer minha imagem?",
        answer:
          "Só se a nova largura e a nova altura não combinarem com a proporção original. Para evitar a distorção, mantenha a mesma proporção entre largura e altura da imagem de origem, ou recorte antes a imagem no formato de que você precisa.",
      },
      {
        question: "Redimensionar também reduz o tamanho do arquivo?",
        answer:
          "Sim. Menos pixels significam menos dados para guardar, então reduzir a imagem costuma diminuir bastante o arquivo. Para o menor resultado possível, faça a compressão com a ferramenta Comprimir Imagem depois de redimensionar.",
      },
      {
        question: "Posso aumentar uma imagem pequena sem que ela fique borrada?",
        answer:
          "Não com um redimensionamento simples: ampliar espalha os pixels existentes e deixa a imagem suave. Use o Ampliador com IA, que reconstrói os detalhes com um modelo treinado e produz uma ampliação bem mais nítida.",
      },
      {
        question: "O formato do arquivo muda quando eu redimensiono?",
        answer:
          "A ferramenta devolve a imagem em um formato padrão da web. Se você precisar de um formato de saída específico, passe o arquivo redimensionado pelo Conversor de Imagem depois.",
      },
    ],
  },

  "crop-image": {
    title: "Recortar Imagem: corte a imagem na região de que você precisa",
    intro:
      "Às vezes você não precisa reduzir a imagem inteira: precisa remover tudo que fica fora de uma área específica, seja para isolar um objeto, tirar um fundo indesejado ou ajustar a proporção exigida por uma plataforma. A ferramenta de recorte do ConvertBrio permite definir uma região exata por coordenadas em pixels e devolve só essa parte.",
    sections: [
      {
        heading: "Como recortar uma imagem",
        body: "Envie a imagem e digite as coordenadas à esquerda e no topo de onde o recorte deve começar, junto com a largura e a altura da região que você quer manter. O ConvertBrio corta a imagem exatamente nesse retângulo e descarta tudo que fica fora dele.",
      },
      {
        heading: "Como achar as coordenadas certas",
        body: "As coordenadas são medidas em pixels a partir do canto superior esquerdo da imagem, então um editor de imagens ou um visualizador que mostre a posição em pixels ajuda a identificar a região exata antes do envio. Se você só quer reduzir a imagem inteira, e não cortar uma parte, use o Redimensionar Imagem.",
      },
      {
        heading: "Usos comuns do recorte",
        body: "O recorte é útil para remover o fundo indesejado de uma foto, isolar um objeto, ajustar a proporção exigida para uma foto de perfil ou um banner, ou cortar um documento digitalizado só na área de conteúdo. É uma alternativa precisa ao redimensionamento quando o objetivo é subtrair, e não reduzir.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como recortar imagens em uma região específica.",
    faq: [
      {
        question: "Como recortar uma imagem em uma região específica?",
        answer:
          "Envie a imagem para a ferramenta de recorte do ConvertBrio e digite as coordenadas iniciais à esquerda e no topo, além da largura e da altura da área que você quer manter, medidas em pixels a partir do canto superior esquerdo.",
      },
      {
        question: "Qual a diferença entre recortar e redimensionar?",
        answer:
          "Redimensionar reduz a imagem inteira para novas dimensões, enquanto recortar corta e mantém só uma região retangular específica, descartando todo o resto. Use o recorte quando quiser remover uma parte da imagem em vez de encolher tudo.",
      },
      {
        question: "Como sei quais coordenadas em pixels digitar?",
        answer:
          "Abra a imagem em um visualizador ou editor que mostre a posição em pixels ao passar o mouse, o que ajuda a identificar as coordenadas da região que você quer manter antes de digitá-las no ConvertBrio.",
      },
    ],
  },

  "rotate-image": {
    title: "Girar Imagem: corrija fotos deitadas ou de cabeça para baixo",
    intro:
      "Fotos tiradas no celular ou digitalizadas em um scanner às vezes ficam viradas para o lado errado. A ferramenta de girar do ConvertBrio gira uma imagem em 90, 180 ou 270 graus com um clique, corrigindo a orientação sem precisar abrir um editor de fotos completo.",
    sections: [
      {
        heading: "Como girar uma imagem",
        body: "Envie a imagem, escolha 90, 180 ou 270 graus na lista, e o ConvertBrio aplica a rotação e devolve o arquivo corrigido. Uma rotação de 90 graus conserta uma imagem deitada, enquanto 180 graus coloca de pé uma imagem de cabeça para baixo.",
      },
      {
        heading: "Por que as fotos ficam giradas do jeito errado",
        body: "Isso costuma acontecer quando a câmera ou o scanner não grava os metadados de orientação corretos, ou quando esses metadados são removidos durante o envio ou a transferência. Os dados da imagem em si não são afetados: ela só aparece na direção errada até ser girada.",
      },
      {
        heading: "Girar documentos digitalizados",
        body: "Páginas colocadas de lado ou de cabeça para baixo no scanner são um dos casos mais comuns para esta ferramenta. Girar a imagem antes de continuar, como ao convertê-la em PDF ou rodar o OCR, garante que o documento final seja lido na posição certa.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como girar imagens online.",
    faq: [
      {
        question: "Como girar uma foto deitada?",
        answer:
          "Envie a imagem para a ferramenta de girar do ConvertBrio e escolha 90 ou 270 graus, conforme o lado para o qual ela precisa virar para aparecer corretamente.",
      },
      {
        question: "Por que minha foto está de cabeça para baixo ou deitada logo de início?",
        answer:
          "Isso geralmente é causado por metadados de orientação ausentes ou incorretos da câmera ou do scanner que a capturou: o conteúdo da imagem está certo, ela só precisa ser girada para aparecer na posição correta.",
      },
      {
        question: "Posso girar a imagem de um documento digitalizado antes de convertê-la em PDF?",
        answer:
          "Pode. Gire a imagem primeiro com esta ferramenta e depois use o JPG para PDF para montar um documento PDF com a orientação correta.",
      },
    ],
  },

  "rotate-pdf": {
    title: "Girar PDF online: corrija páginas deitadas em qualquer documento",
    intro:
      "Documentos digitalizados colocados no scanner do jeito errado costumam sair deitados ou de cabeça para baixo. A ferramenta Girar PDF do ConvertBrio gira todas as páginas de um documento em 90, 180 ou 270 graus de uma só vez, corrigindo a orientação do arquivo inteiro de uma vez.",
    sections: [
      {
        heading: "Como girar um PDF",
        body: "Envie o PDF, escolha um ângulo de rotação, 90, 180 ou 270 graus, e o ConvertBrio o aplica a todas as páginas do documento. O resultado é baixado como um PDF corrigido, com o mesmo conteúdo, só que na orientação certa.",
      },
      {
        heading: "Por que isso acontece com documentos digitalizados",
        body: "Páginas deitadas ou de cabeça para baixo são um efeito colateral comum de digitalizar documentos em papel, principalmente quando as folhas entram no scanner em uma orientação diferente da pretendida. Girar o PDF pronto é mais rápido do que digitalizar as páginas de novo.",
      },
      {
        heading: "Girar apenas algumas páginas",
        body: "A ferramenta de girar do ConvertBrio aplica a mesma rotação a todas as páginas do arquivo. Se só algumas páginas precisam de correção, divida antes o PDF com o Dividir PDF, gire individualmente as páginas afetadas e depois junte tudo de novo com o Juntar PDF.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como girar páginas de PDF online.",
    faq: [
      {
        question: "Como girar todas as páginas de um PDF?",
        answer:
          "Envie o documento para a ferramenta Girar PDF do ConvertBrio e escolha um ângulo de rotação: todas as páginas do arquivo são giradas na mesma medida no resultado baixado.",
      },
      {
        question: "Posso girar só uma página em vez do documento inteiro?",
        answer:
          "Não diretamente com esta ferramenta, já que ela gira todas as páginas de maneira uniforme. Para girar apenas algumas páginas, divida o PDF primeiro, gire as páginas de que precisa e depois junte o arquivo de novo.",
      },
      {
        question: "Por que minhas páginas digitalizadas saem deitadas?",
        answer:
          "Isso costuma acontecer quando as folhas entram no scanner em uma orientação diferente da pretendida. Girar o PDF resultante é mais rápido do que digitalizar o documento original de novo.",
      },
    ],
  },

  "unlock-pdf": {
    title: "Desbloquear PDF: remova as restrições da senha de proprietário",
    intro:
      "Alguns PDFs são protegidos por uma senha de proprietário que restringe a impressão, a cópia ou a edição, mesmo quando você tem todo o direito de modificar o documento. A ferramenta Desbloquear PDF do ConvertBrio remove essas restrições de arquivos que você tem autorização para editar e devolve o controle total a você.",
    sections: [
      {
        heading: "Como desbloquear um PDF",
        body: "Envie o PDF com restrições e o ConvertBrio remove as restrições de nível de proprietário que bloqueiam a impressão, a cópia e a edição. O arquivo desbloqueado é baixado com o mesmo conteúdo, só que sem as restrições de permissão.",
      },
      {
        heading: "Senha de proprietário e senha de abertura",
        body: "Esta ferramenta remove restrições de senha de proprietário: aquelas que limitam o que você pode fazer com um arquivo que já consegue abrir. Ela não tenta contornar uma senha de abertura (de usuário) que impede a visualização do PDF; para isso é preciso a senha de verdade, fornecida por quem criou o arquivo.",
      },
      {
        heading: "Quando usar esta ferramenta",
        body: "Desbloquear é útil para documentos que você criou ou que tem direitos explícitos de modificar, mas que foram exportados com restrições ativadas por padrão, como relatórios de certos programas ou formulários que bloquearam a edição sem querer. Desbloqueie apenas arquivos que você tem o direito legal de modificar.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como remover restrições de senha de PDF.",
    faq: [
      {
        question: "Qual a diferença entre desbloquear e descriptografar um PDF?",
        answer:
          "Desbloquear remove as restrições de nível de proprietário sobre impressão, cópia ou edição de um arquivo que você já consegue abrir. Não contorna uma senha exigida só para ver o documento: para isso é preciso a senha de verdade.",
      },
      {
        question: "É legal desbloquear um PDF?",
        answer:
          "Remover restrições de um documento que é seu, ou que você tem permissão explícita para editar, não tem problema. Use esta ferramenta apenas em arquivos que você tem o direito legal de modificar.",
      },
      {
        question: "Desbloquear vai mudar o conteúdo do meu PDF?",
        answer:
          "Não. A ferramenta só remove as restrições de permissão. O texto, as imagens e o layout do documento continuam exatamente iguais.",
      },
    ],
  },

  "add-page-numbers": {
    title: "Adicionar números de página a um PDF online",
    intro:
      "Relatórios, manuais e contratos muitas vezes precisam de numeração sequencial para consulta e navegação. A ferramenta Adicionar Números de Página do ConvertBrio coloca a numeração em todas as páginas do seu PDF automaticamente, sem exigir um programa de editoração.",
    sections: [
      {
        heading: "Como adicionar números de página",
        body: "Envie o PDF e o ConvertBrio carimba um número sequencial em cada página, a partir da primeira página do documento. O arquivo numerado é baixado pronto para imprimir, compartilhar ou entregar.",
      },
      {
        heading: "Por que a numeração de páginas importa",
        body: "Páginas numeradas facilitam muito para os leitores citar seções específicas, principalmente em contratos longos, trabalhos acadêmicos ou manuais em que as pessoas precisam citar a «página 14» ou ir direto a uma parte do documento.",
      },
      {
        heading: "Combinando com outras ferramentas de PDF",
        body: "Se você está montando um documento a partir de várias fontes, junte antes os arquivos com o Juntar PDF e só então adicione os números de página ao resultado combinado, para que a numeração reflita a estrutura final do documento, e não a de cada parte separada.",
      },
      {
        heading: "Estilo da numeração e limites",
        body: "Os números são carimbados na parte inferior central de cada página, em um estilo simples sem serifa, começando em 1: por ora não há opção para mudar a posição, o número inicial ou o formato, como «Página X de Y». Os envios são limitados a 100 MB. Seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática, sem revisão humana.",
      },
    ],
    faqDescription: "Perguntas comuns sobre como adicionar números de página a um PDF.",
    faq: [
      {
        question: "Como adicionar números de página a um PDF?",
        answer:
          "Envie o documento para a ferramenta Adicionar Números de Página do ConvertBrio, e ela carimba um número sequencial em cada página automaticamente antes de você baixar o resultado.",
      },
      {
        question: "Posso mudar a posição ou o número inicial?",
        answer:
          "Por ora não: os números ficam sempre na parte inferior central, começando em 1. Se precisar de outra posição, de outro número inicial ou do formato «Página X de Y», use um programa de edição de PDF para ter controle total.",
      },
      {
        question: "Esta ferramenta renumera páginas que já têm números?",
        answer:
          "Ela carimba um novo número sequencial em cada página. Se o seu documento já tem números impressos no próprio conteúdo, os dois vão aparecer, então funciona melhor em documentos sem numeração de página.",
      },
    ],
  },
};
