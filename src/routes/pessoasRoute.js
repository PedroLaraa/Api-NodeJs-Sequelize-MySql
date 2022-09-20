const { Router } = require ("express");

const PessoaController = require("../controllers/PessoasController");

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.cadastraUmaPessoa);


module.exports = router
