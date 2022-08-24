export type EventMinister = { name: string; description: string };
export type ScheduleEventType = 'minicurso' | 'palestra';
export type ScheduleEvent = {
  ministers: Array<EventMinister>;
  eventName: string;
  startTime: Date;
  endTime: Date;
  place: string;
  type: ScheduleEventType;
  shortDescription: string;
  fullDescription: string;
};
export type ScheduleEventList = Array<ScheduleEvent>;
export type ScheduleEventRow = Array<ScheduleEvent | null>;
export type ScheduleEventGrid = Array<ScheduleEventRow>;
export interface ScheduleEventClickHandler {
  (event: ScheduleEvent): void;
}

function createEvent(
  eventName: string,
  place: string,
  /**
   * 0 - minicurso
   * 1 - palestra
   */
  type: 0 | 1,
  startTime: Date,
  /**
   * duração em minutos
   */
  duration = 30,
  fullDescription = '',
  shortDescription = '',
  ministers: EventMinister[] = []
): ScheduleEvent {
  return {
    place,
    eventName,
    ministers,
    startTime,
    fullDescription,
    shortDescription,
    type: type === 0 ? 'minicurso' : 'palestra',
    endTime: new Date(startTime.valueOf() + duration * 60_000),
  };
}

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
    [{ name: 'Igor', description: 'Viciado em ECMAScript' }]
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
    [{ description: '', name: 'Renan' }]
  ),
  createEvent(
    'Inteligência Artificial',
    'Auditório',
    1,
    new Date('2022-10-12T18:00'),
    60,
    'Palestra explicativa sobre inteligência artificial, suas origens e áreas de aplicação',
    'Inteligência artificial, Machine Learning e Redes Neurais',
    [
      { description: '', name: 'Igor' },
      { description: '', name: 'Vinícius' },
    ]
  ),
  createEvent(
    'Arquitetura de Computadores',
    'Auditório',
    1,
    new Date('2022-10-13T18:00'),
    60
  ),
  createEvent(
    'Desenvolvimento Web',
    'Laboratório 6B',
    0,
    new Date('2022-10-14T16:00'),
    60
  ),
];

function putEvent(schedule: ScheduleEventRow, event: ScheduleEvent) {
  /* subtraindo 1 para não incluir domingo */
  const weekDay = event.startTime.getDay() - 1;
  schedule[weekDay] = event;
  return schedule;
}

export function findEvent(
  row: ScheduleEventRow,
  where?: (ev: ScheduleEvent) => boolean
) {
  return row.find(ev => ev != null && (where == undefined || where(ev))) as
    | ScheduleEvent
    | undefined;
}

export function getEventStart(event: ScheduleEvent | null | undefined) {
  return event?.startTime.toTimeString().slice(0, 5) ?? '00:00';
}

export function getEventEnd(event: ScheduleEvent | null | undefined) {
  return event?.endTime.toTimeString().slice(0, 5) ?? '00:00';
}

export function getEventType(event: ScheduleEvent | undefined) {
  return event?.type ?? 'minicurso';
}

function createScheduleRow(event: ScheduleEvent): ScheduleEventRow {
  const row: ScheduleEventRow = new Array(5).fill(null);
  return putEvent(row, event);
}

function findSameStartTimeRow(schedule: ScheduleEventGrid, ev: ScheduleEvent) {
  return schedule.find(row =>
    row.some(event => getEventStart(event) == getEventStart(ev))
  );
}

function createScheduleGrid(schedule: ScheduleEventList): ScheduleEventGrid {
  const scheduleGrid: ScheduleEventGrid = [];

  schedule.forEach(event => {
    let row = findSameStartTimeRow(scheduleGrid, event);

    if (row) {
      putEvent(row, event);
    } else {
      row = createScheduleRow(event);
      scheduleGrid.push(row);
    }
  });

  return scheduleGrid;
}

export default createScheduleGrid(ScheduleData);
