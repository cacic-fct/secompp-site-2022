import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Duas perspectivas sobre acessibilidade digital: desenvolvedores e usuários',
    'Auditório',
    1,
    new Date('2022-10-17T20:00'),
    90,
    'Uma grande parcela da população brasileira e mundial possui algum tipo de deficiência e encontram barreiras para realizar as atividades do dia-a-dia, incluindo o acesso a sistemas de informação. A acessibilidade digital tem como objetivo eliminar as barreiras que impedem que os usuários percebam, compreendam e operem produtos e serviços digitais de forma plena, segura e autônoma, independentemente de suas condições físicas, mentais ou intelectuais. Nesta palestra, abordarei os conceitos fundamentais relacionados à acessibilidade digital e apresentarei os resultados de uma investigação realizada para entender como este requisito é tratado no contexto de desenvolvimento de aplicações móveis no Brasil. Adicionalmente, discuto os resultados de uma pesquisa realizada para entender como os usuários percebem e reportam questões relacionadas à acessibilidade dos aplicativos nas avaliações que submetem para as lojas de aplicativos.',
    'Acessibilidade digital em aplicativos e interface de usuário',
    [
      {
        name: 'Prof. Dr. Marcelo Medeiros Eler (EACH/USP)',
        description:
          'Marcelo Medeiros Eler possui graduação em Ciência da Computação pela Faculdade de Informática de Presidente Prudente (FIPP-UNOESTE); mestrado e doutorado em Ciência da Computação e Matemática Computacional pela Universidade de São Paulo (ICMC-USP); e fez pós-doutorado no Departamento de Ciência da Computação da Universidade de Sheffield, na Inglaterra.\nAtualmente, ele é professor associado da USP e coordenador do Programa de Pós-graduação em Sistemas de Informação da Escola de Artes, Ciências e Humanidades (EACH-USP).\n\nSua atuação acadêmica inclui atividades de ensino, pesquisa e extensão, além de consultorias especializadas na área de Engenharia e Teste de Software. Seus interesses de pesquisa atuais são nas áreas de Teste de Software e Acessibilidade Digital.',
      },
    ]
  ),
  createEvent(
    'Time de Dados da GC: como nos organizamos para gerar valor',
    'Auditório',
    1,
    new Date('2022-10-18T20:00'),
    90,
    'Empresas de todo mundo estão se organizando para extrair melhor valor de seus dados. A Gamers Club não é diferente. Nesta apresentação mostraremos como estamos trabalhando em nossa cultura de dados, seja na organização do nosso time, como também nas definições de tecnologias adotadas. Esperamos que seja útil para empresas, mas não somente, como também entusiastas de dados e acadêmicos interessados pelo assunto. Aproveitamos ainda para trazer alguns cases de resultados obtidos durante este caminho.',
    'Organização do time e tecnologias adotadas',
    [
      {
        name: 'Téo Calvo',
        description:
          'Téo Calvo é Bacharel em Estatística pela FCT-UNESP e pós-graduado em Data Science & Big Data pela Universidade Federal do Paraná. Atualmente é Head de Dados na Gamers Club, com alta experiência empresarial. Faz parte do corpo docente da escola ASN.Rocks, ministrando aulas de Introdução ao Python, Algoritmos Classificadores e Regressores. Além disso, tem um canal na Twitch (Téo Me Why), onde faz lives sobre Ciência de Dados, Machine Learning, Engenharia de Dados, etc.',
      },
    ]
  ),
  createEvent(
    'Quanto tempo tem o tempo?',
    'Auditório',
    1,
    new Date('2022-10-19T20:00'),
    60,
    'Esta palestra abordará como gerenciar o tempo e fazer um uso mais eficiente dela',
    'Gestão de tempo',
    [
      {
        name: 'Dinael Corrêa de Campos',
        description:
          'Professor assistente na Unesp no Campus de Bauru, vice-chefe do departamento de psicologia. Possui doutorado em psicologia pela Pontifícia Universidade Católica de Campinas.',
      },
    ]
  ),
  createEvent(
    'Mesa redonda',
    'Auditório',
    1,
    new Date('2022-10-20T20:00'),
    90,
    'O curso de Ciência da Computação na FCT completa 20 anos desde sua criação. Nossos convidados são egressos que compartilharão suas experiências acadêmicas e de mercado de trabalho, incluindo também o tema das startups.',
    'Mesa-redonda: Ciência da Computação na FCT - 20 anos: narrativas e experiências',
    [
      {
        name: 'Alisson Fernando Coelho do Carmo',
      },
      {
        name: 'Fabio Takaki',
      },
      {
        name: 'Cedryk Augusto dos Santos',
      },
      {
        name: 'Giovanna Carreira Marinho',
      },

      {
        name: "Phillipe Sant'Ana",
      },
      {
        name: 'Marco Antônio Piteri',
      },
    ]
  ),
];

export default ScheduleData;
