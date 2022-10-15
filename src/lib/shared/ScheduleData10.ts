import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao LaTeX - parte 1',
    'Laboratório 10',
    0,
    new Date('2022-10-18T10:00'),
    120,
    'Introdução à linguagem LaTeX para desenvolvimento de trabalhos e pesquisas científicas. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: possuir o MiKTEX, GhostScript e GhostView instalados \n\nOpcional: um editor, se desejar.',
    'Introdução ao processador de texto LaTeX',
    [
      {
        name: 'Prof. Dr. Rogério Eduardo Garcia',
        email: 'rogerio.garcia@unesp.br',
      },
      {
        name: 'Willian Yoshio Murayama',
        email: 'willian.murayama@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao LaTeX - parte 2',
    'Laboratório 10',
    0,
    new Date('2022-10-19T10:00'),
    120,
    'Introdução à linguagem LaTeX para desenvolvimento de trabalhos e pesquisas científicas. \n\nPré-requisitos: nenhum. \n\nMateriais necessários: possuir o MiKTEX, GhostScript e GhostView instalados \n\nOpcional: um editor, se desejar.',
    'Introdução ao processador de texto LaTeX',
    [
      {
        name: 'Prof. Dr. Rogério Eduardo Garcia',
        email: 'rogerio.garcia@unesp.br',
      },
      {
        name: 'Willian Yoshio Murayama',
        email: 'willian.murayama@unesp.br',
      },
    ]
  ),
];

export default ScheduleData;
