import type { ScheduleEventList } from './ScheduleEvent';
import { createEvent } from './ScheduleEventUtils';

const ScheduleData: ScheduleEventList = [
  createEvent(
    'Introdução à Linguagem Python para Análise de Dados - parte 1',
    'Laboratório central 6B',
    0,
    new Date('2022-10-18T08:00'),
    240,
    'Introduzir o aluno à sintaxe da Linguagem de Programação Python e suas bibliotecas principais para análise de dados, Pandas e Matplotlib, além do ambiente Jupyter Notebook. \n\nPré-requisitos: lógica de programação. \n\nMateriais necessários: computador, Anaconda ou Google Colab e acesso a internet.',
    'Introdução à linguagem de programação Python',
    [
      {
        name: 'Prof. Dr. Ronaldo Celso Messias Correia',
        email: 'ronaldo.correia@unesp.br',
      },
      {
        name: 'Guilherme Eduardo Silva Batalhoti',
        email: 'guilherme.batalhoti@unesp.br',
      },
      {
        name: 'Lucas Vinícius Voltera',
        email: 'lucas.voltera@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução à Linguagem Python para Análise de Dados - parte 2',
    'Laboratório central 6B',
    0,
    new Date('2022-10-19T08:00'),
    240,
    'Introduzir o aluno à sintaxe da Linguagem de Programação Python e suas bibliotecas principais para análise de dados, Pandas e Matplotlib, além do ambiente Jupyter Notebook. \n\nPré-requisitos: lógica de programação. \n\nMateriais necessários: computador, Anaconda ou Google Colab e acesso a internet.',
    'Introdução à linguagem de programação Python',
    [
      {
        name: 'Prof. Dr. Ronaldo Celso Messias Correia',
        email: 'ronaldo.correia@unesp.br',
      },
      {
        name: 'Guilherme Eduardo Silva Batalhoti',
        email: 'guilherme.batalhoti@unesp.br',
      },
      {
        name: 'Lucas Vinícius Voltera',
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
    'Demonstrar o uso colaborativo do MLflow para implantar modelos de ' +
      'Machine Learning com Databricks. \n\nPré-requisitos: possuir conhecimento sobre Python, estatística básica, análise de dados. \n\nMateriais necessários: acesso a internet, navegador web e conta no GitHub.',
    'Implantação de modelos de Machine Learning com Databricks.',
    [
      {
        name: 'Téo Calvo',
        email: 'teo.bcalvo@gmail.com',
      },
    ]
  ),
  createEvent(
    'Testes automatizados de software: vantagens, desafios e técnicas de escrita',
    'Laboratório central 6B',
    0,
    new Date('2022-10-21T08:00'),
    240,
    'Este minicurso irá apresentar os principais conceitos e práticas ' +
      'sobre a escrita de testes automatizados de software, abordando ' +
      'suas vantagens e desafios. \n\nPré-requisitos: é desejável que a pessoa interessada tenha conhecimentos iniciais em: programação orientado a objetos, alguma linguagem de programação, as atividades práticas serão passadas em C# porém os conceitos podem ser transferidos para qualquer linguagem da preferência da pessoa interessada. \n\nMateriais necessários: de preferência Visual Studio 2019 com a versão 5.0 do .net. Caso a pessoa queira realizar a atividade prática em outra linguagem a pessoa será responsável por ter uma IDE ou editor de texto de sua preferência já instalada.',
    'Abordagem da prática de testes automatizados de software..',
    [
      {
        name: 'Thiago Aires Geraldo de Almeida',
        email: 'thiago.almeida@lambda3.com.br',
      },
    ]
  ),
  createEvent(
    'Desenvolvimento fullstack web com ReactJs e Express - parte 1',
    'Laboratório central 6B',
    0,
    new Date('2022-10-17T14:00'),
    240,
    'Desenvolver um website básico com back-end em Express e front-end em ReactJs. \n\nPré-requisitos: conhecimento básico de JavaScript. \n\nMateriais necessários: computador com acesso à internet para o desenvolvimento prático.',
    'Desenvolvimento de um website com a framework React',
    [
      {
        name: 'João Vitor Couto Oliveira',
        email: 'joao.couto@unesp.br',
      },
      {
        name: 'Rafael Nogueira Correia',
        email: 'rafael.n.correia@unesp.br',
      },
    ]
  ),
  createEvent(
    'Desenvolvimento fullstack web com ReactJs e Express - parte 2',
    'Laboratório central 6B',
    0,
    new Date('2022-10-21T14:00'),
    240,
    'Desenvolver um website básico com back-end em Express e front-end em ReactJs. \n\nPré-requisitos: conhecimento básico de JavaScript. \n\nMateriais necessários: computador com acesso à internet para o desenvolvimento prático.',
    'Desenvolvimento de um website com a framework React',
    [
      {
        name: 'João Vitor Couto Oliveira',
        email: 'joao.couto@unesp.br',
      },
      {
        name: 'Rafael Nogueira Correia',
        email: 'rafael.n.correia@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao ReactJs - parte 1',
    'Laboratório central 6B',
    0,
    new Date('2022-10-19T14:00'),
    240,
    'Abordagem prática no desenvolvimento de interfaces. \n\nPré-requisitos: conhecimentos básico em HTML5, CSS3 e JavaScript. \n\nMateriais necessários: Node LTS e VSCode.',
    'Abordagem prática no desenvolvimento de interfaces',
    [
      {
        name: 'Gabriel Cecon Carlsen',
        email: 'cecon.carlsen@unesp.br',
      },
      {
        name: 'Guilherme de Aguiar Pacianotto',
        email: 'g.pacianotto@unesp.br',
      },
    ]
  ),
  createEvent(
    'Introdução ao ReactJs - parte 2',
    'Laboratório central 6B',
    0,
    new Date('2022-10-20T14:00'),
    240,
    'Abordagem prática no desenvolvimento de interfaces. \n\nPré-requisitos: conhecimentos básico em HTML5, CSS3 e JavaScript. \n\nMateriais necessários: Node LTS e VSCode.',
    'Abordagem prática no desenvolvimento de interfaces',
    [
      {
        name: 'Gabriel Cecon Carlsen',
        email: 'cecon.carlsen@unesp.br',
      },
      {
        name: 'Guilherme de Aguiar Pacianotto',
        email: 'g.pacianotto@unesp.br',
      },
    ]
  ),
  createEvent('Confraternização e encerramento', 'Laboratórios centrais', 0, new Date('2022-10-21T16:30'), 270),
];

export default ScheduleData;
