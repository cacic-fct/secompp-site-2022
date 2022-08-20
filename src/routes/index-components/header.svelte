<script>
  import logo from '$lib/img/secompp22-logo.svg';
</script>

<header
  style="background: linear-gradient(0deg, black 0%, rgb(33, 32, 13) 100%); padding-top: 50px">
  <div class="container">
    <div class="text-center intro-text">
      <div
        class="intro-lead-in"
        style="padding: 10px; padding-bottom: 24px; padding-top: 24px">
        <img
          src={logo}
          width="100%"
          style="max-width: 750px"
          alt="Logo SECOMPP 2022" />
      </div>
      <div class="text-center intro-heading">
        <span class="fs-3" style="font-weight: 600"
          >19ª Semana do Curso de Ciência da Computação da FCT‑Unesp</span>
      </div>
      <div class="text-center intro-heading" style="font-weight: 300">
        <span class="fs-4">Junte-se a nós de 17 a 21 de outubro</span>
      </div>
      <!-- TODO: Usar elemento Button? -->
      <a
        class="btn btn-primary btn-enroll"
        role="button"
        href="https://fct-pp.web.app"
        style="
                margin-top: 20px;
                margin-bottom: 20px;
                background: transparent;
                padding-left: 16px;
                padding-right: 16px;
                padding-bottom: 8px;
                padding-top: 8px;
              ">Inscrever‑se</a>
    </div>
  </div>
</header>
