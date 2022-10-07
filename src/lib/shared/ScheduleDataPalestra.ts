import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Sistemas Conversacionais: Oportunidades e Desafios',
    'Unknown',
    1,
    new Date('2022-10-17T20:00'),
    60,
    'Esta palestra abordará alguns dos avanços atuais no design e ' +
      'desenvolvimento de sistemas conversacionais, tanto quanto ' +
      'resultados recentes da pesquisa de Claudio.',
    'Abordagem de sistemas conversacionais após uma década de progresso.',
    [
      {
        name: 'Claudio Pinhanez',
        description:
          'Pesquisador da IBM Research, vice-diretor do C4AI (Centro de ' +
          'Pesquisas em Inteligência Artificial), especialista em inteligência ' +
          'artificial, interação homem-máquina, sistemas conversacionais ' +
          'e ciência de serviços.',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: '...',
      },
    ]
  ),
];

export default ScheduleData;
