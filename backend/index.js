const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (require, response) => {
    return response.json({
        nomeCompleto:"munzambi miguel",
        dataNascimento:"17-05-2020"
    })
});

app.listen(8000);