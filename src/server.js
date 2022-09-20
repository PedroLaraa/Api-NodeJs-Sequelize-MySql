const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3030;

app.use(bodyParser.json()); // Avisa o Express que o body parser vai pegar os dados e converter em JSON

app.get('/teste', (req, res) => {
    res.status(200).send({message: 'Funcionando!'});
});

app.listen(port, () => {
    console.log('Server rodando na porta:', port);
});
