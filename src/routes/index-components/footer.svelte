<script>
  import logoCacic from '$lib/img/cacic.svg';
  import logoEjcomp from '$lib/img/ejcomp.svg';
  import logoUnesp from '$lib/img/unesp.svg';
  import logoDmc from '$lib/img/dmc.webp';
</script>

<footer class="text-white bg-dark" id="footer">
  <div class="container">
    <div class="row footer-row">
      <div class="col-md-4">
        <h3 class="fs-6 text-white">Patrocinadores</h3>
        <!-- TODO: Incluir ícones dos patrocinadores -->
      </div>
      <div class="col-md-4">
        <h3 class="fs-6 text-white">Realização</h3>
        <img
          class="d-inline-block img-100 mr-2 mb-1"
          src={logoCacic}
          style="margin-right: 15px;"
          loading="lazy"
          alt="Centro Acadêmico de Ciência da Computação" />
        <img
          class="d-inline-block img-100"
          src={logoEjcomp}
          loading="lazy"
          alt="Empresa Júnior da Computação" />
        <br />
        <img
          class="d-inline-block img-100"
          src={logoUnesp}
          style="margin-right: 15px;"
          loading="lazy"
          alt="Unesp" />
        <img
          class="d-inline-block img-70"
          src={logoDmc}
          loading="lazy"
          alt="Departamento de Matemática e Computação" />
        <p class="text-start fs-light" style="font-size: 14px">
          <b>PROEC</b> - Pró-Reitoria de Extensão Universitária e Cultura<br />
          <b>CLAE</b> - Centro Local de Apoio à Extensão<br />
          <b>Fundunesp</b> - Fundação para o Desenvolvimento da&nbsp;Unesp<br />
        </p>
      </div>
      <div class="col-md-4">
        <address>
          <h3 class="fs-6 text-white">
            FCT – Faculdade de Ciências e Tecnologia<br />
          </h3>
          <span class="fw-light small">
            Universidade Estadual Paulista "Júlio de Mesquita Filho"<br />
            Rua Roberto Simonsen, 305<br />
            Presidente Prudente - SP<br />
            19060-900
          </span>
          <br />
          <a role="button" href="mailto:dmc@fct.unesp.br?subject=SECOMPP-2022">
            <i class="bi bi-envelope fs-4" />
          </a>
          &nbsp;
          <a role="button" href="tel:1832295600">
            <i class="bi bi-telephone fs-4" />
          </a>
        </address>
      </div>
    </div>
  </div>
</footer>

<style lang="sass">
	.footer-row > .col-md-4 
		margin-top: 20px
	
	footer 
		margin-bottom: 24px
		margin-top: 32px
	
	b 
		font-weight: 500
	
	.img-100 
		width: 100px
	
	.img-70 
		width: 70px

	address > a		
		color: white
</style>
