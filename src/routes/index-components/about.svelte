<script>
  import logoSquare from '$lib/img/secomp22-logo-square.svg';
  import unespLogo from '$lib/img/unesp-square.svg';
</script>

<div class="container">
  <hr class="my-5" />
  <div class="row">
    <div class="col-md-8 col-xl-6 mx-auto p-4">
      <div
        class="d-flex align-items-center align-items-md-start align-items-xl-center">
        <div class="row">
          <div class="col-auto col-md-2" aria-hidden="true">
            <img
              src={logoSquare}
              class="logo-about"
              loading="lazy"
              alt="Miniatura da logo da SECOMPP" />
          </div>
          <div class="col-md-10">
            <div>
              <h4>O evento</h4>
              <p>
                As Semanas de Curso são uma tradição em nossa universidade, que
                a cada ano se consolida como uma referência junto à comunidade
                regional, que cada vez mais se interessa pelas atividades
                acadêmicas, científicas e culturais promovidas pela FCT, nos
                prestigiando com a sua presença e participação. A XIX SECOMPP –
                Semana da Computação de Presidente Prudente oferecerá
                minicursos, palestras e mais!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="d-flex align-items-center align-items-md-start align-items-xl-center pt-4">
        <div class="row">
          <div class="col-auto col-md-2" aria-hidden="true">
            <img
              src={unespLogo}
              class="logo-about"
              loading="lazy"
              alt="Logo da Unesp" />
          </div>
          <div class="col-md-10">
            <div>
              <h4>A universidade</h4>
              <p>
                A Faculdade de Ciências e Tecnologia (FCT) faz parte da
                Universidade Estadual Paulista "Júlio de Mesquita Filho"
                (Unesp), que é uma das maiores e mais importantes instituições
                de ensino superior do país. A Unesp é uma das três Universidades
                do Estado de São Paulo, ao lado da USP e Unicamp. A FCT-Unesp
                atua nas três grandes áreas do conhecimento, oferecendo doze
                cursos de graduação, sete programas em nível de pós-graduação e
                diversos cursos de especialização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</div>

<style lang="sass">
  .logo-about
    width: 48px
    padding-bottom: 10px
</style>
