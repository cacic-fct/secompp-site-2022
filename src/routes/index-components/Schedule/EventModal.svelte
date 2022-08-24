<script lang="ts">
  import { Modal, ModalBody, ModalHeader } from 'sveltestrap';

  import {
    getEventEnd,
    getEventStart,
    type ScheduleEvent,
  } from './ScheduleData';

  export let isOpen: boolean;
  export let toggle: () => void;
  export let event: ScheduleEvent;

  const type = event.type[0].toUpperCase() + event.type.slice(1);
</script>

<Modal {isOpen} {toggle}>
  <ModalHeader {toggle}>{event.eventName} - {type}</ModalHeader>
  <ModalBody>
    <div id="event-info">
      <p>
        <span class="modal-prop">Data:</span>
        {event.startTime.toLocaleDateString('pt-br')}
      </p>
      <p><span class="modal-prop">Início:</span>{getEventStart(event)}</p>
      <p><span class="modal-prop">Fim:</span>{getEventEnd(event)}</p>
      <p><span class="modal-prop">Local:</span>{event.place}</p>
    </div>
    {#if event.fullDescription !== ''}
      <br />
      {event.fullDescription}
    {:else if event.shortDescription !== ''}
      <br />
      {event.fullDescription}
    {/if}
    {#if event.ministers.length !== 0}
      <br />
      <br />
      <div id="ministers" class="d-inline-flex">
        <span class="modal-prop">Ministrando:</span>
        {#each event.ministers as minister}
          <div class="py-2 px-4 shadow mx-1 rounded">{minister.name}</div>
        {/each}
      </div>
    {/if}
  </ModalBody>
</Modal>

<style lang="scss">
  @use './styles';

  #event-info {
    p {
      margin-bottom: 0.25rem;
    }
  }

  #ministers {
    align-items: center;
    span {
      height: fit-content;
    }

    div {
      background: rgb(38, 39, 41);
      transition: 0.3s;
      &:hover {
        background: rgb(47, 49, 51);
        color: styles.$primary-color;
        cursor: pointer;
      }
    }
  }

  .modal-prop {
    font-weight: 600;
    margin-right: 0.75rem;
  }
</style>
