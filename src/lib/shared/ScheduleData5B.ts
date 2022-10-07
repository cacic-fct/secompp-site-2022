import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao Rust: a linguagem perfeita?',
    'Laboratório central 5B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto.',
    'Introdução a linguagem Rust',
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
    'Do zero ao bootstrap',
    'Laboratório central 5B',
    0,
    new Date('2022-10-18T14:00'),
    120,
    'Este minicurso irá ensinar utilizar o framework Bootstrap',
    'Este minicurso irá ensinar utilizar o framework Bootstrap',
    [
      {
        name: 'Lucas Gaspar Stumpf',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'lg.stumpf@unesp.br',
      },
      {
        name: 'Manoela Moreno Frattini',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'manoela.frattini@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao Rust: a linguagem perfeita?',
    'Laboratório central 5B',
    0,
    new Date('2022-10-19T14:00'),
    240,
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto.',
    'Introdução a linguagem Rust',
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
    'Do zero ao bootstrap',
    'Laboratório central 5B',
    0,
    new Date('2022-10-20T14:00'),
    120,
    'Este minicurso irá ensinar utilizar o framework Bootstrap',
    'Este minicurso irá ensinar utilizar o framework Bootstrap',
    [
      {
        name: 'Lucas Gaspar Stumpf',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'lg.stumpf@unesp.br',
      },
      {
        name: 'Manoela Moreno Frattini',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'manoela.frattini@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução a gitHub',
    'Laboratório central 5B',
    0,
    new Date('2022-10-21T14:00'),
    150,
    'Este minicurso irá ensinar como utilizar o GitHub e suas principais funcionalidades',
    'Introdução a plataforma GitHub',
    [
      {
        name: 'Lucas Gaspar Stumpf',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'lg.stumpf@unesp.br',
      },
      {
        name: 'Manoela Moreno Frattini',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'manoela.frattini@unesp.br',
      },
    ]
  ),
  createEvent(
    // DAY ONE RÉSUMÉ
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa.',
    'Unknown',
    0,
    new Date('2022-10-18T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Paula Tavares Pinto',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'paula.pinto@unesp.br',
      },
      {
        name: 'Maurício Araújo Dias',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'ma.dias@unesp.br',
      },
    ]
  ),
  createEvent(
    // DAY ONE RÉSUMÉ
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa.',
    'Unknown',
    0,
    new Date('2022-10-20T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Paula Tavares Pinto',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'paula.pinto@unesp.br',
      },
      {
        name: 'Maurício Araújo Dias',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'ma.dias@unesp.br',
      },
    ]
  ),
];

export default ScheduleData;
