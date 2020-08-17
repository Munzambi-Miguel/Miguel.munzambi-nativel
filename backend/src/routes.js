const express = require('express');


const routes = express.Router();
routes.post('/users',(require, response)=>{
  return  response.json(
    {
      eventos:'semana OminiSteck 11',
      aluno: 'munzambi ntemo miguel'
    }
  );
});

module.exports = routes;