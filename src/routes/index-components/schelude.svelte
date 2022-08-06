<div class="container" id="schedule-container">
  <h1>Programação</h1>
  <div class="table-responsive" style="--bs-secondary-rgb: 255, 255, 255">
    <table class="table">
      <thead style="color: #fefedf">
        <tr>
          <th style="width: 10px" />
          <th>Segunda</th>
          <th>Terça</th>
          <th>Quarta</th>
          <th>Quinta</th>
          <th>Sexta</th>
        </tr>
      </thead>
      <tbody id="schedule-table" style="color: #fefedf">
        <tr>
          <td>15:00</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
          <td>Minicurso<br />Introdução à coisas estranhas</td>
        </tr>
        <tr>
          <td>16:00</td>
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
          <td>18:00</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
          <td>Cell 4</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<p id="swipe-left" style="text-align: center; color: var(--bs-gray-700); margin-bottom: 0px">
  Arraste para esquerda para visualizar mais eventos.<br />
</p>
<p style="text-align: center; color: var(--bs-gray-700)">
  Clique ou toque no evento para visualizar mais informações.<br />
</p>

<style lang="scss">
  th:first-child,
  td:first-child {
    position: sticky;
    left: 0px;
    background-color: #000;
  }

  tr.table-break > td {
    padding-top: 0px;
    padding-bottom: 1px;
    background: #dfdfdf;
  }

  #schedule-table > tr > td:not(:first-child) {
    min-width: 200px;
  }

  @media (min-width: 1200px) {
    #swipe-left {
      display: none;
    }
  }

  #schedule-container {
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
  }
</style>
