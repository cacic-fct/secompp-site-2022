import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Duas perspectivas sobre acessibilidade digital: desenvolvedores e usuários',
    'Anfiteatro 1',
    1,
    new Date('2022-10-17T20:00'),
    90,
    'Uma grande parcela da população brasileira e mundial possui algum tipo de deficiência e encontram barreiras para realizar as atividades do dia-a-dia, incluindo o acesso a sistemas de informação. A acessibilidade digital tem como objetivo eliminar as barreiras que impedem que os usuários percebam, compreendam e operem produtos e serviços digitais de forma plena, segura e autônoma, independentemente de suas condições físicas, mentais ou intelectuais. Nesta palestra, abordarei os conceitos fundamentais relacionados à acessibilidade digital e apresentarei os resultados de uma investigação realizada para entender como este requisito é tratado no contexto de desenvolvimento de aplicações móveis no Brasil. Adicionalmente, discuto os resultados de uma pesquisa realizada para entender como os usuários percebem e reportam questões relacionadas à acessibilidade dos aplicativos nas avaliações que submetem para as lojas de aplicativos.',
    'Acessibilidade digital em aplicativos e interface de usuário',
    [
      {
        name: 'Prof. Dr. Marcelo Medeiros Eler (EACH/USP)',
        description:
          'Marcelo Medeiros Eler possui graduação em Ciência da Computação pela Faculdade de Informática de Presidente Prudente (FIPP-UNOESTE); mestrado e doutorado em Ciência da Computação e Matemática Computacional pela Universidade de São Paulo (ICMC-USP); e fez pós-doutorado no Departamento de Ciência da Computação da Universidade de Sheffield, na Inglaterra. Atualmente, ele é professor associado da USP e coordenador do Programa de Pós-graduação em Sistemas de Informação da Escola de Artes, Ciências e Humanidades (EACH-USP). Sua atuação acadêmica inclui atividades de ensino, pesquisa e extensão, além de consultorias especializadas na área de Engenharia e Teste de Software. Seus interesses de pesquisa atuais são nas áreas de Teste de Software e Acessibilidade Digital.',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        // email: '...',
      },
    ]
  ),
  createEvent(
    'Sistemas Conversacionais: Oportunidades e Desafios',
    'Anfiteatro 1',
    1,
    new Date('2022-10-18T20:00'),
    90,
    'Esta palestra endereça novas oportunidades e desafios em sistemas conversacionais depois de uma década de tremendo progresso científico e sucesso comercial. Explorarei alguns dos avanços recentes em Foundation Models e como eles estão trazendo novos desafios e oportunidades para o design e desenvolvimento de sistemas conversacionais. Mostrarei também resultados recentes de minha pesquisa sobre o uso de linguagem formal em chatbots , de forma a discutir algumas questões fundamentais e éticas no contexto de sistemas conversacionais.',
    'Abordagem de sistemas conversacionais após uma década de progresso.',
    [
      {
        name: 'Claudio Pinhanez',
        description:
          'Claudio Pinhanez é cientista, inovador e professor. É pesquisador da IBM Research desde 1999, e hoje lidera as pesquisas em Inteligência Conversacional do laboratório da IBM Research no Brasil. É também o vice-diretor do C4AI, o Centro de Pesquisas em Inteligência Artificial, uma parceria da IBM, USP e FAPESP. Claudio obteve seu doutorado no Media Lab do MIT em 1999, e é especialista em inteligência artificial, interação homem-máquina, sistemas conversacionais, e ciência de serviços. Cláudio tem mais de 150 artigos publicados em jornais e conferências científicas, e mais de 30 patentes outorgadas nos Estados Unidos, Europa e Japão',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        // email: '...',
      },
    ]
  ),
  createEvent(
    'Quanto tempo tem o tempo?',
    'Anfiteatro 1',
    1,
    new Date('2022-10-19T20:00'),
    60,
    'Esta palestra abordará como gerenciar o tempo e fazer um uso mais eficiente dela',
    'Gestão de tempo',
    [
      {
        name: 'Dinael Corrêa de Campos',
        description:
          'Professor assistente na Unesp no Campus de Bauru, vice chefe do departamento de psicologia. Possui doutorado em psicologia pela Pontifícia Universidade Católica de Campinas.',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        // email: '...',
      },
    ]
  ),
  createEvent('Mesa redonda', 'Anfiteatro 1', 1, new Date('2022-10-20T20:00'), 60, 'aa ', 'aa  ', [
    {
      name: 'Fabio Takaki',
      description:
        'Aluno formado em ciência da computação na FCT Unesp. Um dos fundadores da Rubcube em Presidente Prudente',
      // link: { path: 'https://github.com/', label: 'GitHub' },
      // email: '...',
    },
    {
      name: 'Cedryk Augusto dos Santos',
      description:
        'Aluno formado em ciência da computação na FCT Unesp. Um dos fundadores da Rubcube em Presidente Prudente',
      // link: { path: 'https://github.com/', label: 'GitHub' },
      // email: '...',
    },
  ]),
  // createEvent(
  //   'Confraternização e encerramento',
  //   'Unknown',
  //   1,
  //   new Date('2022-10-21T20:00'),
  //   60,
  //   'Esta palestra abordará alguns dos avanços atuais no design e ' +
  //     'desenvolvimento de sistemas conversacionais, tanto quanto ' +
  //     'resultados recentes da pesquisa de Claudio.',
  //   'Abordagem de sistemas conversacionais após uma década de progresso.',
  //   [
  //     {
  //       name: 'Claudio Pinhanez',
  //       description:
  //         'Pesquisador da IBM Research, vice-diretor do C4AI (Centro de ' +
  //         'Pesquisas em Inteligência Artificial), especialista em inteligência ' +
  //         'artificial, interação homem-máquina, sistemas conversacionais ' +
  //         'e ciência de serviços.',
  //       link: { path: 'https://github.com/', label: 'GitHub' },
  //       email: '...',
  //     },
  //   ]
  // ),
];

export default ScheduleData;
