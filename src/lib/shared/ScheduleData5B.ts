import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    // DAY ONE RÉSUMÉ
    'Introdução ao Rust: a linguagem perfeita?',
    'Unknown',
    0,
    new Date('2022-10-17T14:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Daniel Henrique Serezane Pereira',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'daniel.serezane@unesp.br',
      },
      {
        name: 'Gustavo Becelli do Nascimento',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'gustavo.becelli@unesp.br',
      },
    ]
  ),
  createEvent(
    // DAY TWO RÉSUMÉ
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa.',
    'Unknown',
    0,
    new Date('2022-10-19T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se ' +
      'preparar para entrevistas em língua inglesa.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Paula Tavares Pinto',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'paula.pinto@unesp.br',
      },
      {
        name: 'Maurício Araújo Dias',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'ma.dias@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao Rust: a lunguagem perfeita?',
    'Unknown',
    0,
    new Date('1970-01-01T00:00'),
    60,
    'Este minicurso apresentará a linguagem Rust, junto com o contexto ' +
      'de sua utilização e suas principais aplicações no mercado e o ' +
      'desenvolvimento um projeto.',
    'Abordagem e desenvolvimento de um projeto em Rust.',
    [
      {
        name: 'Daniel Henrique Serezane Pereira',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'daniel.serezane@unesp.br',
      },
      {
        name: 'Gustavo Becelli do Nacimento',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'gustavo.becelli@unesp.br',
      },
    ]
  ),
  createEvent(
    'GENERIC-TITLE-AUTOMATED-TESTING',
    'Unknown',
    0,
    new Date('1970-01-01T00:00'),
    60,
    'Este minicurso irá apresentar os principais conceitos e práticas ' +
      'sobre a escrita de testes automatizados de software, abordando ' +
      'suas vantagens e desafios.',
    'Abordagem da prática de testes automatizados de software..',
    [
      {
        name: 'Thiago Aires Geraldo de Almeida',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'thiago.almeida@lambda3.com.br',
      },
    ]
  ),
  createEvent(
    'Criando modelo de ML de maneira colaborativa - Uma aplicação com MLflow',
    'Uknown',
    0,
    new Date('2022-10-20T08:00'),
    240,
    'Demonstrar o uso colaborativo do MLflow para implantar modelos de ' + 'Machine Learning com Databricks.',
    'Implantação de modelos de Machine Learning com Databricks.',
    [
      {
        name: 'Téo Calvo',
        description: '...',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'teo.bcalvo@gmail.com',
      },
    ]
  ),
  createEvent(
    'Sistemas Conversacionais: Oportunidades e Desafios',
    'Unknown',
    1,
    new Date('2022-10-17T20:00'),
    60,
    'Esta palestra abordará alguns dos avanços atuais no design e ' +
      'desenvolvimento de sistemas conversacionais, tanto quanto ' +
      'resultados recentes da pesquisa de Claudio.',
    'Abordagem de sistemas conversacionais após uma década de progresso.',
    [
      {
        name: 'Claudio Pinhanez',
        description:
          'Pesquisador da IBM Research, vice-diretor do C4AI (Centro de ' +
          'Pesquisas em Inteligência Artificial), especialista em inteligência ' +
          'artificial, interação homem-máquina, sistemas conversacionais ' +
          'e ciência de serviços.',
        link: { path: 'https://github.com/', label: 'GitHub' },
        email: '...',
      },
    ]
  ),
];

export default ScheduleData;
