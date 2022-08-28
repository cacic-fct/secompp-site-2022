<script lang="ts">
  import minicursosIcon from '$lib/img/minicursos.svg';
  import palestrasIcon from '$lib/img/palestras.svg';
  import type {
    ScheduleEventClickHandler,
    ScheduleEventRow,
  } from '$lib/shared/ScheduleEvent';
  import {
    findEvent,
    getEventStart,
    getEventType,
  } from '$lib/shared/ScheduleEventUtils';
  import ScheduleTableCell from './ScheduleTableCell.svelte';

  export let schedule: ScheduleEventRow;
  export let onClickEvent: ScheduleEventClickHandler;

  const event = findEvent(schedule);

  const type = getEventType(event);
  const startTime = getEventStart(event);

  const icon = {
    minicurso: { desc: 'Minicursos', src: minicursosIcon },
    palestra: { desc: 'Palestras', src: palestrasIcon },
  };
</script>

<tr>
  <td>
    <div>
      <img
        src={icon[type].src}
        alt={icon[type].desc}
        loading="lazy"
        class="table-icon" />
      {startTime}
    </div>
  </td>
  {#each schedule as event}
    {#if event}
      <ScheduleTableCell {onClickEvent} {event} />
    {:else}
      <td aria-hidden="true" aria-disabled="true" />
    {/if}
  {/each}
</tr>

<style lang="scss">
  @use './styles';

  .table-icon {
    filter: invert(100%) sepia(64%) saturate(532%) hue-rotate(353deg)
      brightness(109%) contrast(99%);
    float: right;
    width: 24px;
  }

  td {
    padding: 8px;
    border-width: 0;
    outline: 0 solid transparent;

    &:first-child {
      @include styles.cell-first-child();
      background-color: #000;
      outline: 5px solid #000;

      div {
        @media (min-width: 574px) {
          display: flex;
          img {
            margin-right: 0.75rem;
          }
        }

        @media (max-width: 573px) {
          display: grid;
          justify-items: center;
          img {
            margin-bottom: 0.35rem;
          }
        }
      }
    }

    &:not(:first-child) {
      min-width: 200px;
      color: styles.$body-color;
    }

    &[aria-disabled] {
      min-width: 120px;
      border-width: 0;
    }
  }
</style>
