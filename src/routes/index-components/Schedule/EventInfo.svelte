<script lang="ts">
  import type { ScheduleEvent } from '$lib/shared/ScheduleEvent';
  import { getEventEnd, getEventStart } from '$lib/shared/ScheduleEventUtils';

  export let event: ScheduleEvent;
</script>

<div id="event-info" class="container">
  <div class="row">
    <div class="col col-md-2">
      <span class="fw-bold">Data:</span>
    </div>
    <div class="col">
      {event.startTime.toLocaleDateString('pt-br')}
    </div>
  </div>
  <div class="row">
    <div class="col col-md-2">
      <span class="fw-bold">Início:</span>
    </div>
    <div class="col">
      {getEventStart(event)}
    </div>
  </div>
  <div class="row">
    <div class="col col-md-2">
      <span class="fw-bold">Fim:</span>
    </div>
    <div class="col">
      {getEventEnd(event)}
    </div>
  </div>
  <div class="row">
    <div class="col col-md-2">
      <span class="fw-bold">Local:</span>
    </div>
    <div class="col">
      {event.place}
    </div>
  </div>
  {#if event.fullDescription !== ''}
    <br />
    {event.fullDescription}
  {:else if event.shortDescription !== ''}
    <br />
    {event.shortDescription}
  {/if}
</div>
