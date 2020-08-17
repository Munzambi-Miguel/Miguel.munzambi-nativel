const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json()); // informar que passaremos a usar o json nas requisições
app.use(routes);


app.listen(3333); // port da requisição ouvinte


/**
 * Quanto aos tipos de parametro no react são:
 * - Post
 * - 
 */

 /**
  * SQL: MySQL, SQLite,PostgreSQL, Oracle, Microsoft SQL Server, MariaBD ... Permite maior controle da estrutura
  * NoSQL: MangoBD, CouchDB, etc.
  */