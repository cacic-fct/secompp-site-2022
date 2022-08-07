<script>
  import logoCacic from "$lib/img/cacic.svg";
  import logoEjcomp from "$lib/img/ejcomp.svg";
  import logoUnesp from "$lib/img/unesp.svg";
  import logoDmc from "$lib/img/dmc.webp";
</script>

<footer class="text-white bg-dark">
  <div class="container">
    <div class="row footer-row">
      <div class="col-md-4">
        <h3 class="fs-6 text-white">Patrocinadores</h3>
        <!-- TODO: Incluir ícones dos patrocinadores -->
      </div>
      <div class="col-md-4">
        <h3 class="fs-6 text-white">Realização</h3>
        <img
          class="d-inline-block"
          src={logoCacic}
          style="width: 100px;margin-right: 15px; margin-bottom: 5px;"
          alt="Centro Acadêmico de Ciência da Computação"
        /><img class="d-inline-block" src={logoEjcomp} style="width: 100px;" alt="Empresa Júnior da Computação" /><br
        /><img class="d-inline-block" src={logoUnesp} style="width: 100px;margin-right: 15px;" alt="Unesp" /><img
          class="d-inline-block"
          src={logoDmc}
          style="width: 70px;"
          alt="Departamento de Matemática e Computação"
        />
        <p style="text-align: left;font-size: 14px; font-weight: 200;">
          <strong>PROEC</strong>&nbsp;- Pró-Reitoria de Extensão Universitária e Cultura<br /><strong>CLAE</strong> -
          Centro Local de Apoio à Extensão<br /><strong>Fundunesp</strong> - Fundação para o Desenvolvimento
          da&nbsp;Unesp<br />
        </p>
      </div>
      <div class="col-md-4">
        <h3 class="fs-6 text-white">FCT – Faculdade de Ciências e Tecnologia<br /></h3>
        <span style="font-weight: 200; font-size: 14px;"
          >Universidade Estadual Paulista "Júlio de Mesquita Filho"<br />Rua Roberto Simonsen, 305<br />Presidente
          Prudente - SP<br />19060-900</span
        >
      </div>
    </div>
  </div>
</footer>

<style>
  .footer-row > .col-md-4 {
    margin-top: 20px;
  }

  footer {
    margin-bottom: 24px;
  }

  strong {
    font-weight: 500;
  }
</style>
