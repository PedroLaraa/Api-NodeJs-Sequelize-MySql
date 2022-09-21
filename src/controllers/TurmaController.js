const db = require('../models');

class TurmaController {
    static async pegaTodasTurmas(req, res) {
        try{
            const todasTurmas = await db.Turmas.findAll();
            res.status(200).json(todasTurmas);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async pegaUmaTurma(req, res) {
        const {id} = req.params;

        try{
            const umaTurma = await db.Turmas.findOne({
                where: {
                    id:id
                }
            });
            res.status(200).json(umaTurma);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async criaNovaTurma(req, res) {
        const dataToInsert = req.body;

        try{
            const todasTurmas = await db.Turmas.create(dataToInsert);
            res.status(200).json(todasTurmas);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async editaUmaTurma(req, res) {
        const {id} = req.params;

        const dataToEdit = req.body;

        try{
            const dadosEditados = await db.Turmas.update(dataToEdit, {
                where: {
                    id:id
                }
            });
            res.status(200).send({message: 'Turma editada com sucesso!'})
        }catch(err){
            res.status(500).json(err.message)
        };
    };

    static async deletaUmaTurma(req, res) {
        const {id} = req.params

        try{
            const dadosDeletados = await db.Turmas.destroy({
                where: {
                    id:id
                }
            });
            res.status(200).send({message: 'Turma deletada com sucesso!'})
        }catch(err){
            res.status(500).json(err.message)
        };
    };
};

module.exports = TurmaController;
