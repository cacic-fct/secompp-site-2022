<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Localização</h1>
      <div class="map-container">
        <iframe
          title="Map"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCVY40T87ywPBvI98OCCNHrivvLlZM2n6k&region=BR&language=pt-BR&q=Faculdade de Ciências e Tecnologia - Câmpus de Presidente Prudente" />
      </div>
    </div>
    <div class="col-md-6">
      <h1>Inscrições</h1>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudantes da Unesp</td>
              <td aria-label="35 reais">R$ 35,00</td>
            </tr>
            <tr>
              <td>Estudantes externos</td>
              <td aria-label="35 reais">R$ 35,00</td>
            </tr>
            <tr>
              <td>Professores e profissionais</td>
              <td aria-label="50 reais">R$ 50,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .map-container {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  }
</style>
