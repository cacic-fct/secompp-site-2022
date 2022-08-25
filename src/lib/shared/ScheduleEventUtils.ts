import type { EventMinister } from './EventMinister';
import type {
  ScheduleEvent,
  ScheduleEventGrid,
  ScheduleEventList,
  ScheduleEventRow,
} from './ScheduleEvent';

export function createEvent(
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

export function createScheduleGrid(schedule: ScheduleEventList) {
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
