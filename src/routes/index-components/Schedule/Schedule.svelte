<script>
  import Caption from './Caption.svelte';
  import minicursosIcon from '$lib/img/minicursos.svg';
  import palestrasIcon from '$lib/img/palestras.svg';
</script>

<div class="container schedule-container">
  <h1>Programação</h1>
  <div class="table-responsive" style="--bs-secondary-rgb: 255, 255, 255">
    <table class="table m-0">
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
      <tbody id="schedule-table">
        <tr>
          <td>
            <div>
              <img
                src={minicursosIcon}
                alt="Minicursos"
                loading="lazy"
                class="table-icon" />
              15:00
            </div>
          </td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
        </tr>
        <tr>
          <td>
            <div>
              <img
                src={minicursosIcon}
                alt="Minicursos"
                loading="lazy"
                class="table-icon" />
              16:00
            </div>
          </td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
        </tr>
        <tr id="break1" class="table-break">
          <td />
          <td />
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr>
          <td>
            <div>
              <img
                src={palestrasIcon}
                alt="Palestras"
                loading="lazy"
                class="table-icon" />
              <span>18:00</span>
            </div>
          </td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Caption />
</div>

<style lang="scss">
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

  th:first-child,
  td:first-child {
    position: sticky;
    background-color: #000;
    left: 0px;

    /* 
      Buscando solução para esta gambiarra
      Na tela de celular o layout da tabela fica 
      "vazando" o conteúdo pra esquerda
    */
    @media (max-width: 574px) {
      left: -1px;
    }
  }

  tr.table-break > td {
    padding-top: 0px;
    padding-bottom: 1px;
    background: #dfdfdf;
  }

  #schedule-table > tr > td:not(:first-child) {
    min-width: 200px;
    color: #fefedf;
  }

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

  .table-icon {
    filter: invert(100%) sepia(64%) saturate(532%) hue-rotate(353deg)
      brightness(109%) contrast(99%);
    float: right;
    width: 24px;
  }
</style>
