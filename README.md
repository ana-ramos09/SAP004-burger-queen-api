# Burger Queen - API

## 1. Preâmbulo

O front-end da aplicação Burger Queen já está criado no projeto anterior, agora foi criado um back-end para manejar os dados da nossa hamburgueria.

O back-end neste caso, isso será feito através de uma _API rest_ que será compatível com as requisições vindas do front-end.

## 2. Resumo do projeto

Como back-end, nesse caso nos referimos a um _servidor web_, que é basicamente um programa que _ouve_ o que acontece na aplicação através de uma porta de rede, pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _manejar_ as requisições que chegam e devolver respostas a elas, que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_, isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa que faz requisições através de uma rede (por exemplo o navegador, o URL, etc) e o servidor é o programa que recebe essas requisições e as responde.

O [Node.js](https://nodejs.org/) nos permite criar servidores web super eficientes de maneira relativamente simples, tudo isso usando JavaScript!

Neste projeto partimos de um _boilerplate_ que já possuía a estrutura básica do projeto (para criar essa estrutura, utilizamos o comando para criação de _boilerplates_ básicos do Sequelize).
Neste projeto, foi utilizado os serviços de "containerização" do _Docker_. Um serviço de container, como _Docker_ ou _Kubernetes_, serve para, principalmente, garantir que os ambientes de desenvolvimento e produção sejam exatamente os mesmos, não importa em que sistemas operacional/versão funciona o computador da desenvolvedora. O _Docker_ cria uma máquina virtual onde podemos definir sistema operacional e versões de softwares, entre outras coisas, e é dentro de uma dessas máquinas que vamos testar e executar nossos projetos.

## 3. Objetivos de Aprendizagem

Neste projeto, foi configurado um servidor web que deverá _serve_ `JSON` através de uma conexão `HTTP`.

O objetivo de aprendizagem principal foi adquirir experiência com o **Node.js** como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série de outras ferramentas comumente utilizadas nesse contexto (Express para rotas, Sequelize para interface com o banco, PostgreSQL como banco de dados, etc).

Além disso, foi acompanhado através das orientações do mentor Ricardo Fukui, o processo de desenvolvimento de uma _API_ aplicando o modelo _rest_ e como integrar a API a um banco de dados relacional. Para isso, a aplicação seguiu o modelo de arquitetura **MVC** (Model View Controller), utilizando boas práticas de desenvolvimento web.

No final do projeto, foi possível estar familiarizada com conceitos como **rotas** (_routes_), **URLs**, **HTTP** (verbos, request, response, headers, body, status codes, etc), **JSON**, **conexão com uma base de dados** (PostgreSQL), **variáveis de ambiente**, **modelos de arquitetura**, entre outros.


## 4. Command Line Interface

### CLI

A aplicação deve subir através do comando `docker-compose up <ambiente>` (_dev_, _prod_ ou _test_), dentro da pasta do projeto.


## 5. Instalações, Dependências e Bibliotecas

### Dependências

1. Instalar o [Docker](https://www.docker.com/) localmente. Para windows 10 é recomendado a [Instalação do Docker com WSL 2](https://docs.docker.com/docker-for-windows/wsl/);
2. Faça o `git clone` do projeto;
3. Instale o projeto localmente com `npm install`;
4. Rode o comando `docker-compose up` para subir o _boilerplate_ do projeto na porta 3000. O banco de dados estará conectado na porta 5432.
5. Foi utilizado um [material](https://github.com/rfukui/do-excel-ao-sistema-complexo) utilizado como modelo/exemplo para a realização desse projeto, faça o clone deste repositório para utilizá-lo como exemplo, vai te ajudar a dar os primeiros passos para que depois você consiga seguir em frente.

### Bibliotecas Utilizadas, Plugins e Banco de Dados

1. [Express](https://expressjs.com/);
2. [Sequelize](https://sequelize.org);
3. [PostgreSQL](https://www.postgresql.org/docs/);
4. [Postman](https://www.getpostman.com);

***

## 6. Checklist da Aplicação

### HTTP API

#### `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

#### `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`

## 7.Autoria

Este projeto foi desenvolvido por Ana Carolina Ramos sob a orientação de [Ricardo Fukui](https://github.com/rfukui) no bootcamp da Laboratória.

