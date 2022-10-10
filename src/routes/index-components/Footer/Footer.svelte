<script>
  import logoCacic from '$lib/img/cacic.svg';
  import logoEjcomp from '$lib/img/ejcomp.svg';
  import logoUnesp from '$lib/img/unesp.svg';
  import logoDmc from '$lib/img/dmc.webp';
  import logoRubcube from '$lib/img/rubcube.svg';
  import logoRocketseat from '$lib/img/rocketseat.svg';
  import { Envelope, Telephone } from 'svelte-bootstrap-icons';
  import ImgLink from './ImgLink.svelte';
</script>

<footer class="text-white bg-dark" id="footer">
  <div class="container">
    <div class="row footer-row">
      <div class="col-md-4">
        <h3 class="fs-6 text-white">Patrocínio</h3>
        <ImgLink href="https://www.rubcube.com/" src={logoRubcube} size="xl" alt="Rubcube" marginBottom />

        <h3 class="fs-6 text-white" style="margin-top: 15px">Apoio</h3>
        <ImgLink marginX href="https://www.rocketseat.com.br/" size="xl" src={logoRocketseat} alt="Rocketseat" />
      </div>
      <div class="col-md-4">
        <h3 class="fs-6 text-white mb-3">Realização</h3>
        <div>
          <ImgLink
            href="https://cacic-fct.web.app/"
            src={logoCacic}
            alt="Centro Acadêmico de Ciência da Computação"
            marginBottom />
          <ImgLink marginX href="https://www.ejcomp.com.br/" src={logoEjcomp} alt="Empresa Júnior da Computação" />

          <br />
          <ImgLink href="https://www.fct.unesp.br" src={logoUnesp} alt="Unesp" />
          <ImgLink
            href="https://www.fct.unesp.br/#!/departamentos/matematica-e-computacao/"
            size="sm"
            src={logoDmc}
            alt="Departamento de Matemática e Computação"
            marginX
            marginBottom />
        </div>
        <p class="text-start fs-light small">
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
          <div class="mt-2">
            <a
              class="contact-button"
              id="contact-mail"
              aria-label="Entrar em contato por e-mail"
              href="mailto:cacic.fct@gmail.com?subject=Contato SECOMPP22">
              <Envelope color="white" width="24" height="24" />
            </a>
            <a
              class="contact-button"
              id="contact-phone"
              href="tel:1832295600"
              aria-label="Entrar em contato por telefone">
              <Telephone color="white" width="24" height="24" />
            </a>
          </div>
        </address>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @mixin transition {
    transition: 0.3s;
  }

  .contact-button {
    @include transition();
    &:hover {
      opacity: 0.75;
    }
  }

  #contact-mail {
    margin-right: 0.75rem;
  }

  #contact-phone {
    margin-left: 0.75rem;
  }

  .footer-row > .col-md-4 {
    margin-top: 20px;
  }

  footer {
    margin-bottom: 24px;
    margin-top: 32px;
  }

  b {
    font-weight: 500;
  }
</style>
