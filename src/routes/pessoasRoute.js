const { Router } = require ("express");

const PessoaController = require("../controllers/PessoasController");

const router = Router();
router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .post('/pessoas', PessoaController.cadastraUmaPessoa)
    .delete('/pessoas/:id', PessoaController.deletaUmaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaDeUmaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.cadastraUmaMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaUmaMatricula)
    .delete('/pessoas/matricula/:idMatricula', PessoaController.deletaUmaMatricula)

module.exports = router
