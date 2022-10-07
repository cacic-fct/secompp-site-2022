import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao desenvolvimento mobile com Flutter',
    'Laboratório central 8B',
    0,
    new Date('2022-10-17T08:00'),
    240,
    'Introduzir o desenvolvimento de aplicativos mobile utilizando o framework cross-platform Flutter. Pré-requisitos: conhecimentos em POO; noções básicas de métodos HTTP (GET, POST). Materiais Necessários: Android Studio, XCode (Apenas para Mac), Flutter, Java.',
    'Desenvolvimento de aplicações mobile',
    [
      {
        name: 'Murilo Rocha Pereira',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'mr.pereira@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao desenvolvimento mobile com Flutter',
    'Laboratório central 8B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Introduzir o desenvolvimento de aplicativos mobile utilizando o framework cross-platform Flutter. Pré-requisitos: conhecimentos em POO; noções básicas de métodos HTTP (GET, POST). Materiais Necessários: Android Studio, XCode (Apenas para Mac), Flutter, Java.',
    'Desenvolvimento de aplicações mobile',
    [
      {
        name: 'Murilo Rocha Pereira',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'mr.pereira@unesp.br',
      },
    ]
  ),
  createEvent(
    'Construindo o primeiro portfólio: HTML, CSS e JavaScript básico',
    'Laboratório central 8B',
    0,
    new Date('2022-10-18T14:00'),
    240,
    'Introduzir alguns conceitos fundamentais do desenvolvimento web, com foco no frontend, e, desenvolver um portfólio simples, contendo os projetos hospedados no github do mesmo. Pré-requisitos: nenhum. Materiais Necessários: conta no GitHub e um editor de texto de sua preferência, sendo recomendado o Visual Studio Code ou Sublime Text.',
    'Construção de um site em HTML e CSS básico',
    [
      {
        name: 'Daniel Nunes Monteiro',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'daniel.n.monteiro@unesp.br',
      },
      {
        name: 'Gabriel Augusto Lima Silva',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'gabriel.a.silva@unesp.br',
      },
    ]
  ),
  createEvent(
    'Construindo o primeiro portfólio: HTML, CSS e JavaScript básico',
    'Laboratório central 8B',
    0,
    new Date('2022-10-19T14:00'),
    240,
    'Introduzir alguns conceitos fundamentais do desenvolvimento web, com foco no frontend, e, desenvolver um portfólio simples, contendo os projetos hospedados no github do mesmo. Pré-requisitos: nenhum. Materiais Necessários: conta no GitHub e um editor de texto de sua preferência, sendo recomendado o Visual Studio Code ou Sublime Text.',
    'Construção de um site em HTML e CSS básico',
    [
      {
        name: 'Daniel Nunes Monteiro',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'daniel.n.monteiro@unesp.br',
      },
      {
        name: 'Gabriel Augusto Lima Silva',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'gabriel.a.silva@unesp.br',
      },
    ]
  ),
];

export default ScheduleData;
