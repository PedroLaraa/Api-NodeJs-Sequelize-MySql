const { Router } = require('express')

const TurmaController = require('../controllers/TurmaController.js')

const router = Router()

router
    .get('/turmas', TurmaController.pegaTodasTurmas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .post('/turmas', TurmaController.criaNovaTurma)
    .put('/turmas/:id', TurmaController.editaUmaTurma)
    .delete('/turmas/:id', TurmaController.deletaUmaTurma)

module.exports = router;