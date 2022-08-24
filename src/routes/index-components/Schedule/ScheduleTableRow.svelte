<script lang="ts">
  import minicursosIcon from '$lib/img/minicursos.svg';
  import palestrasIcon from '$lib/img/palestras.svg';
  import {
    findEvent,
    getEventStart,
    getEventType,
    type ScheduleEventRow,
  } from './ScheduleData';

  export let schedule: ScheduleEventRow;

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
      <td>
        {event?.eventName}
      </td>
    {:else}
      <td />
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

  tbody tr td div {
    @media (min-width: 574px) {
      display: flex;
      img {
        margin-right: 0.75rem;
      }
    }

    @media (max-width: 574px) {
      display: grid;
    }
  }

  td:first-child {
    @include styles.cell-first-child();
    background-color: #000;
  }

  tr > td:not(:first-child) {
    min-width: 200px;
    color: #fefedf;
  }
</style>
