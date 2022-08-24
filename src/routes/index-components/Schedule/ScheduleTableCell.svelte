<script lang="ts">
  import type { ScheduleEvent } from './ScheduleData';

  export let event: ScheduleEvent;
</script>

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

<style lang="scss">
  @use './styles' as *;

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

    &:not(:first-child) {
      min-width: 200px;
      color: $body-color;
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
