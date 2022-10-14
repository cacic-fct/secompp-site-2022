import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao desenvolvimento mobile com Flutter - parte 1',
    'Laboratório central 8B',
    0,
    new Date('2022-10-17T08:00'),
    240,
    'Introduzir o desenvolvimento de aplicativos mobile utilizando o framework cross-platform Flutter. \n\nPré-requisitos: conhecimentos em programação orientado a objeto; noções básicas de métodos HTTP (GET, POST). \n\nMateriais necessários: Android Studio, XCode (Apenas para Mac), Flutter, Java.',
    'Desenvolvimento de aplicações mobile',
    [
      {
        name: 'Murilo Rocha Pereira',
        email: 'mr.pereira@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao desenvolvimento mobile com Flutter - parte 2',
    'Laboratório central 8B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Introduzir o desenvolvimento de aplicativos mobile utilizando o framework cross-platform Flutter. \n\nPré-requisitos: conhecimentos em programação orientado a objeto; noções básicas de métodos HTTP (GET, POST). \n\nMateriais necessários: Android Studio, XCode (Apenas para Mac), Flutter, Java.',
    'Desenvolvimento de aplicações mobile',
    [
      {
        name: 'Murilo Rocha Pereira',
        email: 'mr.pereira@unesp.br',
      },
    ]
  ),
  createEvent(
    'Construindo o primeiro portfólio: HTML, CSS e JavaScript básico - parte 1',
    'Laboratório central 8B',
    0,
    new Date('2022-10-18T14:00'),
    240,
    'Introduzir alguns conceitos fundamentais do desenvolvimento web, com foco no frontend, e, desenvolver um portfólio simples, contendo os projetos hospedados no github do mesmo. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: conta no GitHub e um editor de texto de sua preferência, sendo recomendado o Visual Studio Code ou Sublime Text.',
    'Construção de um site em HTML e CSS básico.',
    [
      {
        name: 'Daniel Nunes Monteiro',
        email: 'daniel.n.monteiro@unesp.br',
      },
      {
        name: 'Gabriel Augusto Lima Silva',
        email: 'gabriel.a.silva@unesp.br',
      },
    ]
  ),
  createEvent(
    'Construindo o primeiro portfólio: HTML, CSS e JavaScript básico - parte 2',
    'Laboratório central 8B',
    0,
    new Date('2022-10-19T14:00'),
    240,
    'Introduzir alguns conceitos fundamentais do desenvolvimento web, com foco no frontend, e, desenvolver um portfólio simples, contendo os projetos hospedados no github do mesmo. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: conta no GitHub e um editor de texto de sua preferência, sendo recomendado o Visual Studio Code ou Sublime Text.',
    'Construção de um site em HTML e CSS básico.',
    [
      {
        name: 'Daniel Nunes Monteiro',
        email: 'daniel.n.monteiro@unesp.br',
      },
      {
        name: 'Gabriel Augusto Lima Silva',
        email: 'gabriel.a.silva@unesp.br',
      },
    ]
  ),
  createEvent(
    'Guia de sobrevivência do estudante de exatas: as ferramentas que simplificam a matemática do seu dia a dia',
    'Laboratório central 8B',
    0,
    new Date('2022-10-20T14:00'),
    240,
    'Apresentar algumas ferramentas que auxiliam no estudo diário da matemática de um curso de graduação em exatas, com o propósito de que o participante tenha conhecimento sobre a existência e certo domínio a respeito das mesmas. \n\nPré-requisitos: noções básicas de fundamentos da Matemática. \n\nMateriais necessários: calculadora científica, caso possua.',
    'Como utilizar ferramentas que ajudam em exatas.',
    [
      {
        name: 'Daniel Nunes Monteiro',
        email: 'daniel.n.monteiro@unesp.br',
      },
      {
        name: 'Gabriel Augusto Lima Silva',
        email: 'gabriel.a.silva@unesp.br',
      },
    ]
  ),
  createEvent('Confraternização e encerramento', 'Laboratórios centrais', 0, new Date('2022-10-21T16:30'), 270),
];

export default ScheduleData;
