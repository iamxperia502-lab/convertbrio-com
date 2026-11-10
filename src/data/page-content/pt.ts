import type { LocalePages, AboutDoc, StaticPageDoc, ContactDoc, BlogIndexDoc } from "./types";
import { hubsPt, hubUiPt } from "./pt-hubs";

const about: AboutDoc = {
  seoTitle: "Sobre o ConvertBrio | ConvertBrio",
  title: "Sobre",
  description:
    "O ConvertBrio cria ferramentas de conversão de arquivos rápidas, privadas e simples para imagens, PDFs e documentos.",
  eyebrow: "Sobre o ConvertBrio",
  heading: "Ferramentas de arquivos que não atrapalham",
  intro:
    "O ConvertBrio nasceu de uma ideia simples: converter um arquivo não deveria exigir instalar programas, criar uma conta ou esperar em fila.",
  values: [
    {
      title: "Rápido por padrão",
      desc: "Todas as ferramentas foram feitas para processar arquivos em segundos, não em minutos, não importa o tamanho da fila.",
    },
    {
      title: "Privado desde o projeto",
      desc: "Os arquivos são criptografados e apagados automaticamente. Nunca vendemos nem analisamos os seus dados.",
    },
    {
      title: "IA realmente útil",
      desc: "Ferramentas de IA que resolvem problemas de verdade, como melhoria, restauração e limpeza de imagens, e não truques de marketing.",
    },
  ],
  blocks: [
    {
      heading: "Nossa abordagem",
      paragraphs: [
        "Focamos nas ferramentas que as pessoas realmente usam todos os dias, como conversão de imagens, edição de PDF, formatação de documentos e compressão, e fazemos de cada uma delas algo rápido, preciso e gratuito. Hoje, {liveToolCount} ferramentas estão no ar, e novas chegam com regularidade. Onde a IA realmente melhora o resultado, como ao aprimorar uma foto de baixa resolução, nós a usamos. Onde ela não ajudaria, deixamos de fora.",
        "O ConvertBrio é criado e mantido de forma independente por Subham Sharma. Se você tiver um comentário, uma preocupação de segurança ou quiser sugerir uma ferramenta, <a href=\"/contact\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700\">entre em contato</a> ou veja como tratamos os seus arquivos na nossa <a href=\"/privacy\" class=\"font-medium text-brand-600 underline underline-offset-2 hover:text-brand-700\">Política de Privacidade</a>.",
      ],
    },
  ],
};

const privacy: StaticPageDoc = {
  seoTitle: "Política de Privacidade | ConvertBrio",
  title: "Política de Privacidade",
  description:
    "Como o ConvertBrio coleta, usa e protege os seus dados e arquivos, incluindo por quanto tempo os uploads são mantidos e quando são apagados.",
  eyebrow: "Última atualização em 23 de setembro de 2026",
  heading: "Política de Privacidade",
  blocks: [
    {
      paragraphs: [
        "O ConvertBrio (“nós” ou “nosso”) oferece ferramentas online para converter, comprimir e melhorar arquivos. O ConvertBrio é operado de forma independente por Subham Sharma, com base na Índia. Esta política explica quais informações coletamos, como as usamos e quais escolhas você tem. Ela vale para o convertbrio.com e para todas as ferramentas do site.",
      ],
    },
    {
      heading: "1. Quem somos",
      paragraphs: [
        "O ConvertBrio é operado de forma independente por Subham Sharma, a partir da Índia. Para qualquer dúvida sobre privacidade, pedido de correção ou solicitação relacionada aos seus direitos, escreva para <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> ou use a nossa <a href=\"/contact\">página de contato</a>.",
      ],
    },
    {
      heading: "2. Informações que coletamos",
      paragraphs: ["Coletamos:"],
      list: [
        "<strong>Informações de conta</strong> que você fornece, como nome e endereço de e-mail.",
        "<strong>Mensagens enviadas pelo formulário de contato</strong>, incluindo o texto e o e-mail para resposta que você nos informa.",
        "<strong>Dados técnicos</strong>, como endereço IP, tipo de navegador, tipo de dispositivo e sistema operacional, coletados automaticamente para operar o serviço com segurança e diagnosticar problemas.",
        "<strong>Dados de uso</strong>, como as ferramentas e páginas que você visita e como interage com elas.",
        "<strong>Registros de segurança</strong>, usados para detectar abusos, limitar requisições e manter o serviço confiável.",
      ],
    },
    {
      heading: "3. Arquivos que você envia",
      paragraphs: [
        "Os arquivos enviados trafegam por uma conexão criptografada (HTTPS/TLS). O seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática e sem revisão humana. Não revisamos manualmente, não compartilhamos nem usamos o conteúdo dos seus arquivos para nenhuma finalidade além de entregar o resultado que você pediu. Isso vale também para as ferramentas de IA, como o melhorador de imagens, o ampliador e o removedor de fundo: os arquivos enviados são usados apenas para gerar o seu resultado e nunca para treinar ou aprimorar qualquer modelo.",
      ],
    },
    {
      heading: "4. Como usamos as informações",
      paragraphs: [
        "Usamos as informações coletadas para operar e melhorar o ConvertBrio, prestar suporte, monitorar abusos e incidentes de segurança, entender o uso agregado do produto e cumprir obrigações legais. Não vendemos as suas informações pessoais.",
      ],
    },
    {
      heading: "5. Cookies e tecnologias semelhantes",
      paragraphs: [
        "Nós e nossos prestadores de serviço usamos cookies e tecnologias semelhantes (como o armazenamento local do navegador) para as seguintes finalidades:",
      ],
      list: [
        "<strong>Essenciais</strong>: manter você conectado e lembrar preferências básicas, como o tema.",
        "<strong>Análise</strong>: entender o uso agregado por meio do Google Analytics e do Microsoft Clarity, para saber quais ferramentas são úteis e onde o produto falha.",
        "<strong>Publicidade</strong>: se e quando exibirmos anúncios (por exemplo, pelo Google AdSense), o Google e outros fornecedores terceiros usam cookies, incluindo o cookie de publicidade do Google, para exibir anúncios com base nas suas visitas anteriores a este e a outros sites. Esses cookies permitem que o Google e seus parceiros mostrem anúncios personalizados para você. Você pode desativar a publicidade personalizada nas <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Configurações de anúncios do Google</a> ou, de modo geral, em <a href=\"https://www.aboutads.info/choices/\" target=\"_blank\" rel=\"noopener noreferrer\">aboutads.info</a>.",
      ],
    },
    {
      paragraphs: [
        "Quando a lei exige (inclusive para visitantes do EEE, do Reino Unido e da Suíça), pedimos o seu consentimento antes de definir cookies não essenciais de análise ou publicidade, por meio do aviso de consentimento exibido na primeira visita. Você pode mudar a sua escolha a qualquer momento pelo link “Gerenciar preferências de cookies” no rodapé de todas as páginas. Recusar os cookies não essenciais não impede o uso das ferramentas do ConvertBrio.",
      ],
    },
    {
      heading: "6. Serviços de terceiros que usamos",
      paragraphs: [
        "O ConvertBrio conta com os prestadores de serviço abaixo, e cada um recebe apenas as informações necessárias para cumprir a sua função:",
      ],
      list: [
        "<strong>Vercel</strong>: hospeda o site, executa as conversões de arquivos nos seus servidores (as conversões não acontecem localmente no seu navegador) e guarda por pouco tempo o arquivo original enviado, em um armazenamento privado do Vercel Blob, até que ele seja lido para a conversão e apagado.",
        "<strong>Supabase</strong>: armazena contas e guarda temporariamente o resultado convertido do seu arquivo até a exclusão automática.",
        "<strong>Google Analytics e Google Tag Manager</strong>: análise de uso agregado, sujeita à sua escolha de consentimento de cookies.",
        "<strong>Microsoft Clarity</strong>: análise de uso agregado e informações sobre sessões, sujeitas à sua escolha de consentimento de cookies.",
        "<strong>Google AdSense</strong>: publicidade, quando for ativada no site, sujeita à sua escolha de consentimento de cookies.",
      ],
    },
    {
      paragraphs: [
        "Não vendemos nem compartilhamos essas informações com nenhum prestador além do necessário para que ele cumpra a função listada.",
      ],
    },
    {
      heading: "7. Base legal e seus direitos (EEE, Reino Unido e Suíça)",
      paragraphs: [
        "Quando o GDPR ou o GDPR do Reino Unido se aplica, tratamos as suas informações com base na execução do nosso contrato com você (fornecer as ferramentas que você usa), nos nossos interesses legítimos (segurança, prevenção de fraudes e melhoria do serviço) e no seu consentimento (cookies de análise e de publicidade). Você tem o direito de acessar, corrigir, apagar, restringir ou se opor ao tratamento das suas informações pessoais, de receber uma cópia delas em formato portátil e de retirar o consentimento a qualquer momento, sem afetar o tratamento feito antes da retirada. Você também tem o direito de apresentar uma reclamação à autoridade local de proteção de dados. Para exercer qualquer um desses direitos, escreva para <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a>.",
      ],
    },
    {
      heading: "8. Direitos de privacidade em estados dos EUA",
      paragraphs: [
        "Se você mora em um estado dos EUA com lei de privacidade abrangente (como Califórnia, Colorado, Connecticut, Virgínia ou outros), pode ter o direito de saber, acessar, apagar ou corrigir as suas informações pessoais e de recusar a venda ou o “compartilhamento” delas (inclusive para publicidade comportamental entre contextos, categoria em que alguns estados incluem os cookies de publicidade). Não vendemos informações pessoais. Se exibirmos publicidade pelo Google AdSense, isso pode ser considerado “compartilhamento” em algumas leis estaduais. Você pode recusar a qualquer momento pelo link de preferências de cookies no rodapé, pela página <a href=\"https://adssettings.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Configurações de anúncios do Google</a> ou enviando um sinal Global Privacy Control (GPC) pelo navegador, que respeitamos como um pedido de exclusão. Para exercer esses direitos, escreva para <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a>.",
      ],
    },
    {
      heading: "9. Transferências internacionais de dados",
      paragraphs: [
        "O ConvertBrio é operado a partir da Índia e usa prestadores de serviço (incluindo Vercel e Supabase) que podem tratar dados em outros países, entre eles os Estados Unidos. Quando transferimos informações pessoais para o exterior, contamos com as garantias contratuais e técnicas desses prestadores para protegê-las de forma coerente com esta política.",
      ],
    },
    {
      heading: "10. Retenção de dados",
      paragraphs: [
        "O seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido é apagado por uma limpeza diária, normalmente em cerca de 24 horas, independentemente de você baixá-lo ou não. As informações de conta são mantidas enquanto a conta estiver ativa, mais um período limitado depois disso para cumprir obrigações legais ou de segurança. Os registros de segurança e de uso são mantidos somente pelo tempo necessário para as finalidades descritas acima e, depois, são apagados ou anonimizados.",
      ],
    },
    {
      heading: "11. Privacidade de crianças",
      paragraphs: [
        "O ConvertBrio é destinado a usuários com 18 anos ou mais e não é direcionado a crianças. Não coletamos intencionalmente informações pessoais de menores de 18 anos. Se você acredita que uma criança nos forneceu informações pessoais, escreva para <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> e nós as apagaremos.",
      ],
    },
    {
      heading: "12. Alterações nesta política",
      paragraphs: [
        "Podemos atualizar esta política de tempos em tempos. Se fizermos mudanças relevantes, atualizaremos a data de “última atualização” no topo desta página e, quando apropriado, enviaremos um aviso adicional.",
      ],
    },
    {
      heading: "13. Fale conosco",
      paragraphs: [
        "Dúvidas sobre esta política ou pedidos para exercer os seus direitos de privacidade podem ser enviados para <a href=\"mailto:privacy@convertbrio.com\">privacy@convertbrio.com</a> ou pela nossa <a href=\"/contact\">página de contato</a>.",
      ],
    },
  ],
};

const terms: StaticPageDoc = {
  seoTitle: "Termos de Serviço | ConvertBrio",
  title: "Termos de Serviço",
  description:
    "Os termos que regem o uso das ferramentas e serviços gratuitos de arquivos do ConvertBrio, incluindo uso aceitável, limites e as suas responsabilidades.",
  eyebrow: "Última atualização em 25 de agosto de 2026",
  heading: "Termos de Serviço",
  blocks: [
    {
      paragraphs: [
        "Estes Termos de Serviço (“Termos”) regem o seu acesso e uso do ConvertBrio. Ao usar as nossas ferramentas, você concorda com estes Termos.",
      ],
    },
    {
      heading: "1. Como usar o ConvertBrio",
      paragraphs: [
        "Você pode usar o ConvertBrio para converter, comprimir e melhorar arquivos que sejam seus ou que você tenha o direito de processar. É preciso ter pelo menos 18 anos para usar o serviço.",
      ],
    },
    {
      heading: "2. Uso aceitável",
      paragraphs: [
        "Você concorda em não enviar conteúdo ilegal, que viole direitos de terceiros ou que seja malicioso, em não tentar prejudicar o funcionamento do serviço e em não usar ferramentas automatizadas para abusar dos limites de requisições sem a nossa autorização por escrito.",
      ],
    },
    {
      heading: "3. O seu conteúdo",
      paragraphs: [
        "Você mantém todos os direitos sobre os arquivos que envia. Não reivindicamos propriedade sobre o seu conteúdo e só o processamos para entregar a conversão ou a melhoria que você solicitou.",
      ],
    },
    {
      heading: "4. Serviços pagos",
      paragraphs: [
        "O ConvertBrio não oferece assinaturas pagas no momento. Se serviços pagos forem lançados, os preços, a frequência de cobrança, as condições de renovação e as regras de cancelamento serão exibidos antes da compra. Estes Termos serão atualizados antes de os serviços pagos ficarem disponíveis.",
      ],
    },
    {
      heading: "5. Disponibilidade do serviço",
      paragraphs: [
        "Buscamos manter o ConvertBrio disponível e confiável, mas não garantimos acesso ininterrupto. Podemos modificar ou descontinuar recursos mediante aviso razoável.",
      ],
    },
    {
      heading: "6. Isenção de responsabilidade e limitação de responsabilidade",
      paragraphs: [
        "O ConvertBrio é fornecido “no estado em que se encontra”, sem garantias de qualquer tipo. Na máxima extensão permitida por lei, o ConvertBrio não se responsabiliza por danos indiretos ou consequenciais decorrentes do uso do serviço.",
      ],
    },
    {
      heading: "7. Alterações nestes Termos",
      paragraphs: [
        "Podemos atualizar estes Termos de tempos em tempos. Continuar usando o ConvertBrio depois que as mudanças entrarem em vigor significa que você aceita os Termos revisados.",
      ],
    },
    {
      heading: "8. Fale conosco",
      paragraphs: [
        "Dúvidas sobre estes Termos podem ser enviadas para <a href=\"mailto:legal@convertbrio.com\">legal@convertbrio.com</a> ou pela nossa <a href=\"/contact\">página de contato</a>.",
      ],
    },
  ],
};

const trust: StaticPageDoc = {
  seoTitle: "Confiança e Segurança | ConvertBrio",
  title: "Confiança e Segurança",
  description:
    "Como o ConvertBrio trata os seus arquivos, como denunciar abusos ou problemas de segurança e como fazemos correções nos guias publicados.",
  eyebrow: "Última atualização em 23 de setembro de 2026",
  heading: "Confiança e Segurança",
  blocks: [
    {
      paragraphs: [
        "O ConvertBrio é operado de forma independente por Subham Sharma, com base na Índia. Esta página resume como tratamos os seus arquivos, como denunciar abusos ou um problema de segurança e como cuidamos das correções nos guias publicados. Para os detalhes jurídicos completos, consulte a nossa <a href=\"/privacy\">Política de Privacidade</a> e os <a href=\"/terms\">Termos de Serviço</a>.",
      ],
    },
    {
      heading: "Como os seus arquivos são tratados",
      paragraphs: [
        "Os arquivos trafegam por uma conexão criptografada (HTTPS/TLS). Cada conversão roda como um processo automatizado: ninguém abre, revisa ou lê manualmente o conteúdo do seu arquivo em nenhum momento, inclusive nas ferramentas de IA, como o melhorador de imagens, o ampliador e o removedor de fundo, em que os envios são usados apenas para gerar o seu resultado e nunca para treinar ou aprimorar qualquer modelo.",
        "O seu arquivo original é apagado logo depois de ser lido para a conversão. O resultado convertido fica em armazenamento temporário para que você possa baixá-lo e é apagado por uma limpeza diária, normalmente em cerca de 24 horas, independentemente de você baixá-lo ou não. Os arquivos são processados nos servidores dos nossos provedores de hospedagem (Vercel e Supabase), de forma automática e sem revisão humana.",
      ],
    },
    {
      heading: "Denunciar abuso ou mau uso",
      paragraphs: [
        "Serviços de envio de arquivos podem ser usados de forma indevida: para processar conteúdo sobre o qual a pessoa não tem direitos ou para outros abusos. Se você acredita que um arquivo processado pelo ConvertBrio envolve conteúdo ilegal, violação de direitos autorais ou outra forma de mau uso, denuncie pelo <a href=\"/contact\">nosso formulário de contato</a> ou por <a href=\"mailto:abuse@convertbrio.com\">abuse@convertbrio.com</a>. Não exibimos publicamente nomes de arquivos enviados nem resultados, e analisamos as denúncias de abuso diretamente, e não por meio de uma fila automatizada.",
        "Ferramentas como Desbloquear PDF foram criadas apenas para remover restrições de proprietário de documentos que você já tem o direito de editar. Veja a <a href=\"/tools/unlock-pdf\">ferramenta Desbloquear PDF</a> e o nosso guia sobre <a href=\"/blog/pdf-password-restrictions-explained\">restrições de senha em PDF</a> para saber exatamente o que isso cobre e o que não cobre. Elas não foram feitas, nem se destinam, a contornar a proteção de arquivos que não são seus ou que você não está autorizado a modificar.",
      ],
    },
    {
      heading: "Denunciar um problema de segurança",
      paragraphs: [
        "Se você encontrar uma vulnerabilidade de segurança no ConvertBrio, de um problema de controle de acesso a uma forma de ver os dados de outro usuário, avise por <a href=\"mailto:security@convertbrio.com\">security@convertbrio.com</a> ou pelo <a href=\"/contact\">formulário de contato</a> antes de divulgá-la publicamente. Por ser um projeto operado de forma independente, os prazos de resposta não se comparam aos da equipe de segurança de uma grande empresa, mas todo relato é lido e levado a sério.",
      ],
    },
    {
      heading: "Correções em guias e artigos",
      paragraphs: [
        "Os artigos do <a href=\"/blog\">blog do ConvertBrio</a> são escritos para ser corretos e práticos e são revisados antes de serem publicados. Se você encontrar um erro factual, uma informação desatualizada ou algo que não corresponde mais ao funcionamento real de uma ferramenta, avise pelo <a href=\"/contact\">formulário de contato</a>: as correções são feitas diretamente no artigo, sem alterações silenciosas, e a data exibida na página indica quando ela foi atualizada de forma substancial pela última vez.",
      ],
    },
  ],
};

const contact: ContactDoc = {
  seoTitle: "Contato | ConvertBrio",
  title: "Contato",
  description:
    "Fale com a equipe do ConvertBrio para suporte, comentários ou propostas de parceria.",
  eyebrow: "Contato",
  heading: "Entre em contato",
  intro: "Dúvidas, comentários ou o pedido de uma nova ferramenta? Lemos todas as mensagens.",
  supportHeading: "Suporte geral",
  businessHeading: "Negócios e parcerias",
  responseNote: "Normalmente respondemos em até um dia útil.",
  nameLabel: "Nome",
  emailLabel: "E-mail",
  subjectLabel: "Assunto",
  messageLabel: "Mensagem",
  sendLabel: "Enviar mensagem",
};

const blogIndex: BlogIndexDoc = {
  seoTitle: "Blog | ConvertBrio",
  title: "Blog",
  description:
    "Guias práticos sobre formatos de arquivo, PDFs, imagens e conversão de documentos: como funcionam, o que realmente reduz ou estraga um arquivo e como resolver os problemas mais comuns.",
  eyebrow: "Blog",
  heading: "Guias sobre arquivos, formatos e conversão",
  intro: "Respostas práticas para os problemas com arquivos que as pessoas realmente enfrentam, sem enrolação e sem encheção de linguiça.",
  englishNote: "Por enquanto, os nossos guias são publicados apenas em inglês.",
  empty: "Ainda não há artigos. Volte em breve.",
  dateLocale: "pt-BR",
};

export const pagesPt: LocalePages | undefined = {
  about,
  privacy,
  terms,
  trust,
  contact,
  blogIndex,
  hubs: hubsPt,
  hubUi: hubUiPt,
};
