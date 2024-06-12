
# Full-Stack Case

Este projeto é a principal API para a aplicação Full-Stack Case. Inclui um servidor Node.js baseado em Express e se conecta a um banco de dados MongoDB.

## Índice
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando a Aplicação](#executando-a-aplicação)
- [Executando a Aplicação com Docker](#executando-a-aplicação-com-docker)
- [Executando Testes](#executando-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Licença](#licença)

## Pré-requisitos

Certifique-se de ter o seguinte instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (se executar sem Docker)
- [Yarn](https://yarnpkg.com/) (se executar sem Docker)

## Instalação

1. Clone o repositório:

   ```sh
   git clone git@github.com:fernandomeddev/full-stack-case.git
   

## Executando a Aplicação
1. Instale as dependências:

   ```sh
   yarn install

2. Construa o projeto:

   ```sh
   yarn build

   ```sh
   yarn start

O servidor estará em execução em http://localhost:3000.


## Executando a Aplicação com Docker
3. Certifique-se de que o Docker e o Docker Compose estão instalados e em execução no seu sistema.

4. Construa e inicie os contêineres Docker:

   ```sh
   docker-compose up --build

Este comando irá construir a imagem Docker para a aplicação e iniciar os serviços da aplicação e do MongoDB.

5. Para parar e remover os contêineres:
   ```sh
   docker-compose down

6. A aplicação estará acessível em http://localhost:3000 e o MongoDB estará acessível em mongodb://localhost:27017/full-stack-case.



## Executando Testes
6. Para executar os testes usando Vitest, execute o seguinte comando:
   ```sh
   yarn test

## Estrutura do Projeto
   ```sh
   full-stack-case/
   ├── api-main-projects/
   │   ├── src/
   │   │   ├── dtos/
   │   │   ├── interfaces/
   │   │   ├── repository/
   │   │   ├── services/
   │   │   ├── validationSchemas/
   │   │   ├── server.ts
   │   ├── dist/
   │   ├── package.json
   │   ├── yarn.lock
   │   ├── Dockerfile
   │   ├── docker-compose.yml
   │   └── README.md

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
