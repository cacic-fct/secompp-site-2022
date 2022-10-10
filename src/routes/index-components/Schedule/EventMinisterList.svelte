<script lang="ts">
  import type { EventMinister } from '$lib/shared/EventMinister';
  import EventMinisterInfo from './EventMinisterInfo.svelte';

  export let ministers: EventMinister[];
</script>

{#if ministers.length !== 0}
  <br />
  <div id="ministers">
    {#each ministers as minister (minister.name)}
      <EventMinisterInfo {minister} />
    {/each}
  </div>
{/if}

<style lang="scss">
  #ministers {
    @media (min-width: 574px) {
      display: inline-flex;
    }
  }
</style>
