<script lang="ts">
  import minicursosIcon from '$lib/img/minicursos.svg';
  import palestrasIcon from '$lib/img/palestras.svg';
  import Caption from './Caption.svelte';

  import ScheduleData from './ScheduleData';
  import ScheduleTableRow from './ScheduleTableRow.svelte';
</script>

<div class="container schedule-container">
  <h1>Programação</h1>
  <div class="table-responsive" style="--bs-secondary-rgb: 255, 255, 255">
    <table class="table">
      <thead style="color: #fefedf">
        <tr>
          <th />
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
        </tr>
      </thead>
      <tbody>
        {#each ScheduleData as schedule}
          <ScheduleTableRow {schedule} />
        {/each}
      </tbody>
    </table>
  </div>
  <Caption />
</div>

<style lang="scss">
  @use './styles';

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

  th:first-child {
    @include styles.cell-first-child();
    background: linear-gradient(45deg, black, 60%, transparent);
  }
</style>
