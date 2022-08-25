import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Bagulhos Sinistros',
    'Laboratório 10B',
    0,
    new Date('2022-10-10T14:00'),
    30,
    'Minicurso destinado a ensinar sobre tecnologias das\
 profundezas da esquisitice como JavaScript',
    'Tecnologias sinistras e sem sentido',
    [
      {
        name: 'Igor',
        description: 'Cara estranho viciado em ECMAScript',
        link: { path: 'https://github.com/Igor-MPereira', label: 'GitHub' },
        email: 'igor@gargantas.org',
      },
    ]
  ),
  createEvent(
    'Introdução à POO',
    'Anfiteatro 1',
    0,
    new Date('2022-10-10T16:00'),
    60,
    'Minicurso destinado ao ensino das bases da programação orientada a objetos,\
 paradigma de muitas linguagens como Java, C++, C#, etc.',
    'Bases da Programação Orientada a Objeto',
    [{ name: 'Renan' }]
  ),
  createEvent(
    'Inteligência Artificial',
    'Auditório',
    1,
    new Date('2022-10-12T18:00'),
    60,
    'Palestra explicativa sobre inteligência artificial, suas origens e áreas de aplicação',
    'Inteligência artificial, Machine Learning e Redes Neurais',
    [{ name: 'Igor' }, { name: 'Vinícius' }]
  ),
  createEvent(
    'Arquitetura de Computadores',
    'Auditório',
    1,
    new Date('2022-10-13T18:00'),
    60,
    '',
    '',
    [{ name: 'Vinícius', link: { path: 'https://github.com/ViniCastilho' } }]
  ),
  createEvent(
    'Desenvolvimento Web',
    'Laboratório 6B',
    0,
    new Date('2022-10-14T16:00'),
    60,
    'Aprendendo sobre estrutura de uma página web e programação básica em JavaScript',
    'Introdução à Desenvolvimento Web'
  ),
];

export default ScheduleData;
