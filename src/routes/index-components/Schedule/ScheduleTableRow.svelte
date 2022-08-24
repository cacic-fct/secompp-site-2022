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
      <td tabindex="0" role="button" class="shadow-sm">
        <div class="d-block">
          <span class="fw-bold">{event.eventName}</span>
          {#if event.shortDescription}
            <br />
            <span class="smaller lh-sm">
              {event.shortDescription}
            </span>
          {/if}
        </div>
      </td>
    {:else}
      <td aria-hidden="true" aria-disabled="true" />
    {/if}
  {/each}
</tr>

<style lang="scss">
  @use './styles' as *;
  $transition-duration: 0.3s;
  $border-radius: 6px;

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

    span {
      transition: $transition-duration;
      &:not(:first-child) {
        color: var(--bs-gray-500);
      }
    }

    &:first-child {
      @include cell-first-child();
      background-color: #000;
      border-width: 1px;
      border-left-width: 0;
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
      // border-color: $primary-color;

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
      color: $body-color;
    }

    &[aria-disabled] {
      min-width: 120px;
      border-width: 0;
    }

    &:not([aria-disabled], :first-child) {
      padding: 8px;
      border-radius: $border-radius;
      transition: $transition-duration;
      box-shadow: 0 0.125rem 0.25rem hsla(0, 3%, 60%, 0.336) !important;

      &:hover,
      &:focus {
        background: rgba(52, 58, 64, 0.4);
        outline: 1px solid $primary-color;
        box-shadow: 0 0.125rem 0.25rem rgb(253 189 0 / 45%) !important;

        span {
          color: $body-color;

          &:first-child {
            color: $primary-color;
          }
        }
      }
    }
  }
</style>
