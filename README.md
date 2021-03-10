# Boas vindas ao repositório do Projeto TROCBEER!

Aqui serão encontrados os detalhes de como o projeto foi estruturado. #vqv 🚀


## Cenário fictício

TROCBEER está lançando uma nova plataforma de delivery de cerverja. Nesta plataforma, desejamos listar os produtos cadastrados para venda, com a possibilidade de utilizar cupons com valores fixos e percentuais.

Desenvolver um mini-admin protegido por usuário e senha para gerenciamento dos produtos e
cupons.

## Instruções para a instalação do projeto:

1. Clone o repositório
  * `git clone git@github.com:hleoc/Projeto-Trocbeer.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-Trocbeer`

2. Instale as dependências
  * `npm install`

3. Start o banco de dados mongoDB
  * `mongo`

4. Em uma aba do terminal rode o servidor do NodeJs
  * `node index.js ou dev`

5. Em outra aba do terminal renderize a aplicação do front-end
  * `npm start`


## O que foi desenvolvido

Foi desenvolvido uma plataforma utilizando a arquitetura MSC!

Nesse projeto é possível fazer o cadastramento e login de usuário, onde apenas esse usúario poderá Acessar, Criar, Listar, Editar, Visualizar um produto ou cupom de desconto(ou `CRUD`, para os mais íntimos 😜). 

Para realizar qualquer tipo de alteração no banco de dados como cadastro, edição ou exclusão de produtos ou cupom será necessário autenticar-se. 

A autenticação deverá ser feita via `JWT`.


### Data de Entrega

O projeto tem até a seguinte data para ser entregue: `15/03/2021`.


## Requisitos Obrigatórios:

O Projeto TROCBEER será realizado utilizando o mongoDB como banco de dados. 


### Conexão com o Banco:

A conexão do banco local deverá conter os seguintes parâmetros:

```javascript
const MONGO_DB_URL = 'mongodb://localhost:27017/Trocbeer';
const DB_NAME = 'Trocbeer';
```

### Tabelas

O banco terá três coleções: usuários, produtos e cupons.

A coleção de usuários terá o seguinte nome: `users`.

A coleção de produtos terá o seguinte nome: `products`.

A coleção de cupons terá o seguinte nome: `cupons`.

O projeto deve rodar na porta 3000, podendo ser acessado em http://localhost/3000 .


### Cobertura de testes unitários

- Foram cobertos alguns recursos do código com testes unitários com Jest


### Melhorias Futuras

- Adicionar dados sensíveis ao arquivo de ambiente(.env).
- Front-end e back-end desacoplado
- Criação de cupons que sejam válidos apenas para certas categorias ou marcas.
- Carrinho de compras
- Application build / pipeline
- Distribuições para DEV e PROD
- Database migrations
- Servidor backend online com a aplicação rodando (https://www.000webhost.com)