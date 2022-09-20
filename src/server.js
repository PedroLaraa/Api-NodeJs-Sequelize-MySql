const express = require('express');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3030;

routes(app);

app.listen(port, () => {
    console.log('Server rodando na porta:', port);
});
