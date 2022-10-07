import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução ao Rust: a linguagem perfeita?',
    'Laboratório central 5B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto. Pré-requisitos: Conhecimentos básicos de programação: variáveis, constantes, tipos de dados, laços, desvios condicionais, funções e arranjos. É recomendável (não obrigatório) ter noções de structs, classes e pattern matching. Materiais Necessários: Computador com a linguagem Rust (https://www.rust-lang.org/pt-BR/learn/get-started) instalada. Editor de texto/ambiente de programação, preferencialmente Visual Studio Code.',
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
    'Este minicurso irá ensinar utilizar o framework CSS Bootstrap. Pré-requisitos: conhecimento básico em HTML e CSS. Materiais Necessários: Visual Studio Code',
    'Introdução ao Bootstrap',
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
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto. Pré-requisitos: Conhecimentos básicos de programação: variáveis, constantes, tipos de dados, laços, desvios condicionais, funções e arranjos. É recomendável (não obrigatório) ter noções de structs, classes e pattern matching. Materiais Necessários: Computador com a linguagem Rust (https://www.rust-lang.org/pt-BR/learn/get-started) instalada. Editor de texto/ambiente de programação, preferencialmente Visual Studio Code.',
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
    'Este minicurso irá ensinar utilizar o framework CSS Bootstrap. Pré-requisitos: conhecimento básico em HTML e CSS. Materiais Necessários: Visual Studio Code',
    'Introdução ao Bootstrap',
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
    'Introdução ao básico sobre o gitHub e seus recursos. Pré-requisitos: Nenhum. Materiais Necessários: Git instalado na máquina, Visual Studio Code ou outro editor de escolha',
    'Introdução a plataforma GitHub',
    [
      {
        name: 'Vinicius Polachini Mayer Freitas De Jesus',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'vinicius.polachini@unesp.br',
      },
      {
        name: 'Hariã Othon Gomes Silva',
        description: ' ',
        // link: { path: 'https://github.com/', label: 'GitHub' },
        email: 'haria.othon@unesp.br',
      },
    ]
  ),
  createEvent(
    // DAY ONE RÉSUMÉ
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa.',
    'Laboratório central 5B',
    0,
    new Date('2022-10-18T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa. Pré-requisito: conhecimento em inglês. Materiais necessários: computador com acesso à internet',
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
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa. Pré-requisito: conhecimento em inglês. Materiais necessários: computador com acesso à internet',
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
