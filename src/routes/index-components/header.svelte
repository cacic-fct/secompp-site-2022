<script>
  import logo from '$lib/img/secompp22-logo.svg';
  import { Button } from 'sveltestrap';
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
      <Button outline class="my-3" size="lg" href="https://fct-pp.web.app">
        Inscrever-se
      </Button>
    </div>
  </div>
</header>

<style lang="scss">
  .intro-lead-in-padding {
    padding: 10px;
    padding-bottom: 24px;
    padding-top: 24px;
  }

  .secompp-logo {
    max-width: 750px;
  }

  .header-bg {
    background: linear-gradient(0deg, black 0%, rgb(33, 32, 13) 100%);
    padding-top: 50px;
  }
</style>
