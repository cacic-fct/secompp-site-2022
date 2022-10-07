import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Boas práticas de desenvolvimeto',
    'Laboratório central 6B',
    0,
    new Date('2022-10-17T08:00'),
    240,
    'Introduzir o aluno à sintaxe da Linguagem de Programação Python e suas bibliotecas principais para análise de dados, Pandas e Matplotlib, além do ambiente Jupyter Notebook',
    'Introdução à linguagem de programação Python',
    [
      {
        name: 'Guilherme Eduardo Silva Batalhoti',
        description: ' ',
        email: 'guilherme.batalhoti@unesp.br',
      },
      {
        name: 'Lucas Vinícius Voltera',
        description: ' ',
        email: 'lucas.voltera@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução à Linguagem Python para Análise de Dados',
    'Laboratório central 6B',
    0,
    new Date('2022-10-18T08:00'),
    120,
    'Introduzir o aluno à sintaxe da Linguagem de Programação Python e suas bibliotecas principais para análise de dados, Pandas e Matplotlib, além do ambiente Jupyter Notebook',
    'Introdução à linguagem de programação Python',
    [
      {
        name: 'Guilherme Eduardo Silva Batalhoti',
        description: ' ',
        email: 'guilherme.batalhoti@unesp.br',
      },
      {
        name: 'Lucas Vinícius Voltera',
        description: ' ',
        email: 'lucas.voltera@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução à Linguagem Python para Análise de Dados',
    'Laboratório central 6B',
    0,
    new Date('2022-10-19T08:00'),
    120,
    'Introduzir o aluno à sintaxe da Linguagem de Programação Python e suas bibliotecas principais para análise de dados, Pandas e Matplotlib, além do ambiente Jupyter Notebook',
    'Introdução à linguagem de programação Python',
    [
      {
        name: 'Guilherme Eduardo Silva Batalhoti',
        description: ' ',
        email: 'guilherme.batalhoti@unesp.br',
      },
      {
        name: 'Lucas Vinícius Voltera',
        description: ' ',
        email: 'lucas.voltera@unesp.br',
      },
    ]
  ),
  createEvent(
    'Criando modelo de ML de maneira colaborativa - Uma aplicação com MLflow',
    'Laboratório central 6B',
    0,
    new Date('2022-10-20T08:00'),
    240,
    'Demonstrar o uso colaborativo do MLflow para implantar modelos de ' + 'Machine Learning com Databricks.',
    'Implantação de modelos de Machine Learning com Databricks.',
    [
      {
        name: 'Téo Calvo',
        description: ' ',
        email: 'teo.bcalvo@gmail.com',
      },
    ]
  ),
  createEvent(
    'Testes automatizados de software: vantagens, desafios e técnicas de escrita',
    'Laboratório central 6B',
    0,
    new Date('2022-10-21T08:00'),
    60,
    'Este minicurso irá apresentar os principais conceitos e práticas ' +
      'sobre a escrita de testes automatizados de software, abordando ' +
      'suas vantagens e desafios.',
    'Abordagem da prática de testes automatizados de software..',
    [
      {
        name: 'Thiago Aires Geraldo de Almeida',
        description: ' ',
        email: 'thiago.almeida@lambda3.com.br',
      },
    ]
  ),
  createEvent(
    'Desenvolvimento fullstack web com ReactJs e Express',
    'Laboratório central 6B',
    0,
    new Date('2022-10-17T14:00'),
    60,
    'Este minicurso irá apresentar os principais conceitos e práticas ' +
      'sobre a escrita de testes automatizados de software, abordando ' +
      'suas vantagens e desafios.',
    'Abordagem da prática de testes automatizados de software..',
    [
      {
        name: 'João Vitor Couto Oliveira',
        description: ' ',
        email: 'joao.couto@unesp.br',
      },
      {
        name: 'Rafael Nogueira Correia',
        description: ' ',
        email: 'rafael.n.correia@unesp.br',
      },
    ]
  ),
  createEvent(
    'Desenvolvimento fullstack web com ReactJs e Express',
    'Laboratório central 6B',
    0,
    new Date('2022-10-21T14:00'),
    60,
    'Este minicurso irá apresentar os principais conceitos e práticas ' +
      'sobre a escrita de testes automatizados de software, abordando ' +
      'suas vantagens e desafios.',
    'Abordagem da prática de testes automatizados de software..',
    [
      {
        name: 'João Vitor Couto Oliveira',
        description: ' ',
        email: 'joao.couto@unesp.br',
      },
      {
        name: 'Rafael Nogueira Correia',
        description: ' ',
        email: 'rafael.n.correia@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao ReactJs',
    'Laboratório central 6B',
    0,
    new Date('2022-10-19T14:00'),
    60,
    'Abordagem prática no desenvolvimento de interfaces',
    'Abordagem prática no desenvolvimento de interfaces',
    [
      {
        name: 'Gabriel Cecon Carlsen',
        description: ' ',
        email: 'cecon.carlsen@unesp.br',
      },
      {
        name: 'Guilherme de Aguiar Pacianotto',
        description: ' ',
        email: 'g.pacianotto@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao ReactJs',
    'Laboratório central 6B',
    0,
    new Date('2022-10-20T14:00'),
    60,
    'Abordagem prática no desenvolvimento de interfaces',
    'Abordagem prática no desenvolvimento de interfaces',
    [
      {
        name: 'Gabriel Cecon Carlsen',
        description: ' ',
        email: 'cecon.carlsen@unesp.br',
      },
      {
        name: 'Guilherme de Aguiar Pacianotto',
        description: ' ',
        email: 'g.pacianotto@unesp.br',
      },
    ]
  ),
];

export default ScheduleData;
