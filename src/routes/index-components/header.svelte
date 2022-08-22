<script>
  import logo from '$lib/img/secompp22-logo.svg';
</script>

<header class="header-bg">
  <div class="container">
    <div class="text-center intro-text">
      <div class="intro-lead-in intro-lead-in-padding">
        <img
          src={logo}
          width="100%"
          class="secompp-logo"
          alt="Logo SECOMPP 2022" />
      </div>
      <div class="text-center intro-heading">
        <span class="fs-3 fw-semibold"
          >19ª Semana do Curso de Ciência da Computação da FCT-Unesp</span>
      </div>
      <div class="text-center intro-heading">
        <span class="fs-4 fw-light">Junte-se a nós de 17 a 21 de outubro</span>
      </div>
      <!-- TODO: Alterar cor-->
      <!-- TODO: Usar elemento Button? -->
      <a
        class="btn btn-primary btn-enroll subscribe-btn"
        role="button"
        href="https://fct-pp.web.app">Inscrever-se</a>
    </div>
  </div>
</header>

<style lang="sass">
  .intro-lead-in-padding
    padding: 10px
    padding-bottom: 24px
    padding-top: 24px

  .subscribe-btn
    margin-top: 20px
    margin-bottom: 20px
    background: transparent
    padding-left: 16px
    padding-right: 16px
    padding-bottom: 8px
    padding-top: 8px

	.secompp-logo
	  max-width: 750px

	.header-bg
	  background: linear-gradient(0deg, black 0%, rgb(33, 32, 13) 100%)
    padding-top: 50px
</style>
