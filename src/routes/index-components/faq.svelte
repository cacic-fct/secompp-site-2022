<script lang="ts">
  import { Accordion, AccordionItem } from 'sveltestrap';
</script>

<div class="container">
  <h1>Dúvidas</h1>
  <Accordion>
    <AccordionItem header="Quem pode participar?">
      Qualquer pessoa pode participar do evento, basta
      <a class="fw-bold" href="https://fct-pp.web.app/" target="_blank">
        realizar a sua inscrição aqui
      </a>.
    </AccordionItem>
    <AccordionItem header="Como realizo a minha inscrição?">
      <!-- TODO: Passo a passo do processo de inscrição no FCT App -->
    </AccordionItem>
    <AccordionItem header="Como realizo o pagamento?">
      <!-- TODO: Preencher o fluxo de pagamento de acordo com o FCT App -->
      Após realizar a sua inscrição, você visualizará as instruções para o pagamento.
      <br />
      Para a sua comodidade, faça uma transferência utilizando a chave Pix ou os
      dados da conta bancária.
      <br />
      <br />
      <b>Fundação de Ciência Tecnologia e Ensino</b>
      <br />
      <b>Chave Pix (CNPJ):</b> 00.395.519/0001-16
      <br />
      <br />
      <b>Banco Santander</b>
      <br />
      <b>Agência:</b> 4299
      <br />
      <b>Conta corrente:</b> 13001302-0
      <br />
      <br />
      Anexe o comprovante do pagamento em xxxxxxx
      <br />
      Caso prefira, você pode realizar o pagamento presencialmente na sede da FUNDACTE,
      nas dependências da FCT-Unesp.
    </AccordionItem>
    <AccordionItem header="Haverá certificado de participação?">
      Sim, tendo realizado a sua inscrição e efetuado o pagamento, haverá a
      emissão de certificados após a confirmação da sua presença nos minicursos
      ou palestras.
    </AccordionItem>
    <AccordionItem header="Há algum tipo de evento livre para participação?">
      Sim, todas as palestras são abertas ao público. No entanto, os
      certificados só serão gerados aos participantes pagantes.
    </AccordionItem>
    <AccordionItem header="Haverá pausa para o café (coffee break)?">
      <!-- TODO: Preencher horário-->
      Sim, haverá <i>coffee break</i> durante os intervalos dos minicursos nos períodos
      da manhã e tarde.
    </AccordionItem>
    <AccordionItem header="Haverá intervalo para o almoço?">
      <!-- TODO: Preencher horário-->
      Sim, o intervalo será das 00:00 às 00:00.
    </AccordionItem>
  </Accordion>
</div>
