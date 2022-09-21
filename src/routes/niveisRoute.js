const {Router} = require('express');

const NiveisController = require('../controllers/NiveisController.js');

const router = Router();

router
    .get('/niveis', NiveisController.pegaTodosNiveis)
    .get('/niveis/:id', NiveisController.pegaUmNivel)
    .post('/niveis', NiveisController.criaNovoNivel)
    .put('/niveis/:id', NiveisController.editaUmNivel)
    .delete('/niveis/:id', NiveisController.deletaUmNivel)


module.exports = router;
