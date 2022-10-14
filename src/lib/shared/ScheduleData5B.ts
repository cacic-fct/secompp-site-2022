import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Resumindo e desmistificando Clean Architecture.',
    'Laboratório central 5B',
    0,
    new Date('2022-10-20T08:00'),
    240,
    'Apresentar os principais conceitos sobre arquitetura multicamadas e os benefícios de Clean Architecture, como também desmistificar a complexidade da arquitetura proposta por Robert C. Martin.\n\nPré-requisitos: conceitos básicos de lógica e desenvolvimento de software, conceitos de programação orientada a objetos, desejável: conhecimento básico em Java.\n\nMateriais necessários: nenhum.',
    'Programação utilizando Clean Architecture',
    [
      {
        name: 'Bruno Vitorelli Tacca de Oliveira',
        email: 'bruno.tacca@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao Rust: a linguagem perfeita? - parte 1',
    'Laboratório central 5B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto. \n\nPré-requisitos: Conhecimentos básicos de programação: variáveis, constantes, tipos de dados, laços, desvios condicionais, funções e arranjos. É recomendável (não obrigatório) ter noções de structs, classes e pattern matching. \n\nMateriais necessários: Computador com a linguagem Rust (https://www.rust-lang.org/pt-BR/learn/get-started) instalada. Editor de texto/ambiente de programação, preferencialmente Visual Studio Code.',
    'Introdução à linguagem Rust',
    [
      {
        name: 'Daniel Henrique Serezane Pereira',
        email: 'daniel.serezane@unesp.br',
      },
      {
        name: 'Gustavo Becelli do Nascimento',
        email: 'gustavo.becelli@unesp.br',
      },
    ]
  ),
  createEvent(
    'Do zero ao bootstrap - parte 1',
    'Laboratório central 5B',
    0,
    new Date('2022-10-18T14:00'),
    120,
    'Este minicurso irá ensinar utilizar o framework CSS Bootstrap. \n\nPré-requisitos: conhecimento básico em HTML e CSS. \n\nMateriais necessários: Visual Studio Code',
    'Introdução ao Bootstrap',
    [
      {
        name: 'Lucas Gaspar Stumpf',
        email: 'lg.stumpf@unesp.br',
      },
      {
        name: 'Manoela Moreno Frattini',
        email: 'manoela.frattini@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao Rust: a linguagem perfeita? - parte 2',
    'Laboratório central 5B',
    0,
    new Date('2022-10-19T14:00'),
    240,
    'Apresentar a linguagem Rust, o contexto na qual é utilizada (principais aplicações no mercado) e o porquê de ser uma solução preferível em detrimento de outras, apoiando-se na criação de um projeto que exemplifique os diferenciais da linguagem. Durante a apresentação da linguagem, será demonstrada sua sintaxe, principais instruções, paradigmas de programação e o restante necessário para a construção do projeto. \n\nPré-requisitos: Conhecimentos básicos de programação: variáveis, constantes, tipos de dados, laços, desvios condicionais, funções e arranjos. É recomendável (não obrigatório) ter noções de structs, classes e pattern matching. \n\nMateriais necessários: Computador com a linguagem Rust (https://www.rust-lang.org/pt-BR/learn/get-started) instalada. Editor de texto/ambiente de programação, preferencialmente Visual Studio Code.',
    'Introdução à linguagem Rust',
    [
      {
        name: 'Daniel Henrique Serezane Pereira',
        email: 'daniel.serezane@unesp.br',
      },
      {
        name: 'Gustavo Becelli do Nascimento',
        email: 'gustavo.becelli@unesp.br',
      },
    ]
  ),
  createEvent(
    'Do zero ao bootstrap - parte 2',
    'Laboratório central 5B',
    0,
    new Date('2022-10-20T14:00'),
    120,
    'Este minicurso irá ensinar utilizar o framework CSS Bootstrap. \n\nPré-requisitos: conhecimento básico em HTML e CSS. \n\nMateriais necessários: Visual Studio Code.',
    'Introdução ao Bootstrap',
    [
      {
        name: 'Lucas Gaspar Stumpf',
        email: 'lg.stumpf@unesp.br',
      },
      {
        name: 'Manoela Moreno Frattini',
        email: 'manoela.frattini@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao GitHub',
    'Laboratório central 5B',
    0,
    new Date('2022-10-21T14:00'),
    150,
    'Introdução ao básico sobre o GitHub e seus recursos. \n\nPré-requisitos: Nenhum. \n\nMateriais necessários: Git instalado na máquina, Visual Studio Code ou outro editor de sua escolha.',
    'Introdução à plataforma GitHub',
    [
      {
        name: 'Vinicius Polachini Mayer Freitas De Jesus',
        email: 'vinicius.polachini@unesp.br',
      },
      {
        name: 'Hariã Othon Gomes Silva',
        email: 'haria.othon@unesp.br',
      },
    ]
  ),
  createEvent(
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa - parte 1',
    'Laboratório central 5B',
    0,
    new Date('2022-10-18T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa. Pré-requisito: conhecimento em inglês. \n\nMateriais necessários: computador com acesso à internet.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Paula Tavares Pinto',
        email: 'paula.pinto@unesp.br',
      },
      {
        name: 'Maurício Araújo Dias',
        email: 'ma.dias@unesp.br',
      },
    ]
  ),
  createEvent(
    'Job interview: como escrever um résumé e apresentar-se para um emprego ' + 'em língua inglesa - parte 2',
    'Laboratório central 5B',
    0,
    new Date('2022-10-20T16:00'),
    120,
    'Este minicurso irá ensinar como escrever um resumo curto (résumé) e se preparar para entrevistas em língua inglesa. Pré-requisito: conhecimento em inglês. \n\nMateriais necessários: computador com acesso à internet.',
    'Desenvolvimento de résumé e prática de entrevista.',
    [
      {
        name: 'Paula Tavares Pinto',
        email: 'paula.pinto@unesp.br',
      },
      {
        name: 'Maurício Araújo Dias',
        email: 'ma.dias@unesp.br',
      },
    ]
  ),
  createEvent('Confraternização e encerramento', 'Laboratórios centrais', 0, new Date('2022-10-21T16:30'), 270),
];

export default ScheduleData;
