<script lang="ts">
  import type { ScheduleEvent } from '$lib/shared/ScheduleEvent';

  import { Modal, ModalBody, ModalHeader } from 'sveltestrap';
  import EventInfo from './EventInfo.svelte';
  import EventMinisterList from './EventMinisterList.svelte';

  export let isModalOpen: boolean;
  export let toggleModal: () => void;
  export let event: ScheduleEvent;

  $: type = event.type[0].toUpperCase() + event.type.slice(1);
</script>

<Modal isOpen={isModalOpen} toggle={toggleModal}>
  <ModalHeader toggle={toggleModal}>{event.eventName} - {type}</ModalHeader>
  <ModalBody>
    <EventInfo {event} />
    <EventMinisterList ministers={event.ministers} />
  </ModalBody>
</Modal>
