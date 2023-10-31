# API REST TodoList

<br/>
<br/>
<br/>

Este projeto é uma API REST que implementa um sistema de lista de tarefas (TodoList) com operações CRUD para usuários e tarefas, juntamente com autenticação usando JSON Web Tokens (JWT). A seguir, você encontrará informações detalhadas sobre o projeto, as tecnologias utilizadas e as rotas disponíveis.

## Sobre o Projeto

Este projeto fornece uma API para gerenciar tarefas e usuários. Ele inclui funcionalidades de autenticação para proteger as operações e é útil para criar e gerenciar uma lista de tarefas pessoal.

## Tecnologias Utilizadas

- **TypeScript**: Linguagem de programação usada para desenvolver a aplicação.
- **Nest.js**: Framework para construção de APIs em Node.js.
- **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **SQLite**: Banco de dados utilizado para armazenar os dados da aplicação.
- **JSON Web Tokens (JWT)**: Usado para autenticação e proteção das rotas.

## Rotas da API

### Autenticação

- **POST /login**: Realiza a autenticação de um usuário e gera um token JWT.

### Usuários

- **POST /user**: Cria um novo usuário.
- **GET /user**: Lista todos os usuários cadastrados.
- **GET /user/{id}**: Detalha as informações de um usuário específico.
- **PUT /user/{id}**: Atualiza as informações de um usuário específico.
- **DELETE /user/{id}**: Deleta um usuário específico.

### Tarefas

- **POST /tasks**: Cria uma nova tarefa.
- **GET /tasks**: Lista todas as tarefas cadastradas.
- **GET /tasks/{id}**: Detalha as informações de uma tarefa específica.
- **PUT /tasks/{id}**: Atualiza as informações de uma tarefa específica.
- **DELETE /tasks/{id}**: Deleta uma tarefa específica.

<br/>
<br/>
<br/>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


