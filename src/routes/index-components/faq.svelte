<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';
</script>

<div class="container">
  <h1>Dúvidas</h1>
  <Accordion>
    <AccordionItem header="Quem pode participar?">
      Qualquer pessoa pode participar do evento, basta
      <a class="fw-bold" href="https://fct-pp.web.app/eventos/eventos" target="_blank">
        realizar a sua inscrição aqui
      </a>.
    </AccordionItem>
    <AccordionItem header="Como realizo a minha inscrição?">
      1. Faça login no site;
      <br />
      <br />
      2. Selecione até 3 minicursos.
      <br />
      Confira se não há choque de horário entre eles e clique no botão de confirmação ✓;
      <br />
      <br />
      3. Confira os minicursos selecionados e confirme;
      <br /> <br />
      4. Realize o pagamento conforme as instruções e envie o comprovante.
      <br />
      Não se esqueça de incluir o nome completo do participante no comentário do pix!;
      <br /> <br />
      5. Aguarde a confirmação do pagamento.
    </AccordionItem>
    <AccordionItem header="Como realizo o pagamento?">
      <!-- TODO: Preencher o fluxo de pagamento de acordo com o FCT App -->
      Após realizar a sua inscrição, você visualizará as instruções para o pagamento.
      <br />
      Para a sua comodidade, faça uma transferência utilizando a chave Pix ou os dados da conta bancária.
      <br />
      <br />
      <b>FUNDACTE - Fundação de Ciência Tecnologia e Ensino</b>
      <br />
      <b>Chave Pix (CNPJ):</b> 00.395.519/0001-16
      <br />
      <br />
      <b>Banco 033 - Santander</b>
      <br />
      <b>Agência:</b> 4299
      <br />
      <b>Conta corrente:</b> 13001302-0
      <br />
      <br />
      Anexe o comprovante do pagamento
      <a class="fw-bold" target="_blank" href="https://fct-pp.web.app/inscricoes/pagar/dViFyyJuepTPjcaZXfZa">no site</a
      >.
      <br />
    </AccordionItem>
    <AccordionItem header="Haverá certificado de participação?">
      Sim, tendo realizado a sua inscrição e efetuado o pagamento, haverá a emissão de certificados após a confirmação
      da sua presença nos minicursos ou palestras.
    </AccordionItem>
    <AccordionItem header="Há algum tipo de evento livre para participação?">
      Sim, todas as palestras são abertas ao público. No entanto, os certificados só serão gerados aos participantes
      pagantes.
    </AccordionItem>
    <AccordionItem header="Preciso trazer o notebook para os minicursos?">
      Recomenda-se trazer o próprio computador para a realização dos minicursos. Não se esqueça de instalar, com
      antecedência, os programas necessários!
      <br /><br />
      Caso você não tenha notebook, os computadores dos laboratórios estarão com os programas necessários instalados.
    </AccordionItem>
    <AccordionItem header="Haverá pausa para o café?">
      <!-- TODO: Preencher horário-->
      Sim, haverá uma pausa durante os intervalos dos minicursos.
    </AccordionItem>
    <AccordionItem header="Haverá intervalo para o almoço?">
      <!-- TODO: Preencher horário-->
      Sim, o intervalo será das 12:00 às 14:00.
    </AccordionItem>
  </Accordion>
</div>
