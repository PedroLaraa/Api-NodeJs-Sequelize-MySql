const { Router } = require ("express");

const PessoaController = require("../controllers/PessoasController");

const router = Router();
router
    .get('/pessoas', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/ativas', PessoaController.pegaAsPessoasAtivas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatriculaDeUmaPessoa)
    .get('/pessoas/:idEstudante/matriculas', PessoaController.pegaMatriculaDoEstudante)
    .post('/pessoas', PessoaController.cadastraUmaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.cadastraUmaMatricula)
    .post('/pessoas/:idPessoa/restaura', PessoaController.restauraPessoa)
    .put('/pessoas/:id', PessoaController.atualizaUmaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaUmaMatricula)
    .delete('/pessoas/:id', PessoaController.deletaUmaPessoa)
    .delete('/pessoas/matricula/:idMatricula', PessoaController.deletaUmaMatricula)

module.exports = router
