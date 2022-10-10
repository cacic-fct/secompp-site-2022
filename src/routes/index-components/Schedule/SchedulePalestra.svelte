<script lang="ts">
  import ScheduleData from '$lib/shared/ScheduleDataPalestra';

  import type { ScheduleEvent, ScheduleEventClickHandler } from '$lib/shared/ScheduleEvent';
  import { createScheduleGrid } from '$lib/shared/ScheduleEventUtils';

  const ScheduleGrid = createScheduleGrid(ScheduleData);

  import Caption from './Caption.svelte';
  import CaptionPalestra from './CaptionPalestra.svelte';
  import EventModal from './EventModal.svelte';
  import ScheduleTableRow from './ScheduleTableRow.svelte';

  let isOpen = false;
  let event: ScheduleEvent | null;
  const toggle = () => (isOpen = !isOpen);
  const onClickEvent: ScheduleEventClickHandler = ev => {
    isOpen = true;
    event = ev;
  };
</script>

<div class="container schedule-container">
  <h1>Palestras</h1>
  <div class="table-responsive" style="--bs-secondary-rgb: 255, 255, 255">
    <table class="table">
      <thead>
        <tr>
          <th class="bw-0" />
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
        </tr>
      </thead>
      <tbody>
        {#each ScheduleGrid as schedule}
          <ScheduleTableRow {onClickEvent} {schedule} />
        {/each}
      </tbody>
    </table>
  </div>
  <CaptionPalestra />
  {#if event}
    <EventModal {event} isModalOpen={isOpen} toggleModal={toggle} />
  {/if}
</div>

<style lang="scss">
  @use './styles' as *;

  .schedule-container {
    @media (min-width: 576px) {
      max-width: 767px;
    }
    @media (min-width: 768px) {
      max-width: 991px;
      padding: 24px;
    }
    @media (min-width: 992px) {
      max-width: 1199px;
      padding: 24px;
    }
    padding-bottom: 0px;
  }

  th {
    &:first-child {
      @include cell-first-child();
      background: linear-gradient(45deg, rgba(0, 0, 0, 0.6), 45%, rgba(0, 0, 0, 0));
    }
    border: 0;
  }

  table {
    border-collapse: separate;
    border-spacing: 8px;
  }
</style>
