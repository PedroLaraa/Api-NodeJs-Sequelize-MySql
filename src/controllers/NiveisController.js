const db = require('../models');

class NiveisController {

    static async pegaTodosNiveis(req, res) {
        try{
            const todosNiveis = await db.Niveis.findAll();
            res.status(200).json(todosNiveis);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async pegaUmNivel(req, res) {
        const {id} = req.params;

        try{
            const umNivel = await db.Niveis.findOne({
                where: {
                    id:id
                }
            });
            res.status(200).json(umNivel);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async criaNovoNivel(req, res) {
        const dataToInsert = req.body;

        try{
            const todosNiveis = await db.Niveis.create(dataToInsert);
            res.status(200).json(todosNiveis);
        }catch(err){
            res.status(500).json(err.message);
        };
    };

    static async editaUmNivel(req, res) {
        const {id} = req.params;

        const dataToEdit = req.body;

        try{
            const dadosEditados = await db.Niveis.update(dataToEdit, {
                where: {
                    id:id
                }
            });
            res.status(200).send({message: 'Nível editado com sucesso!'})
        }catch(err){
            res.status(500).json(err.message)
        };
    };

    static async deletaUmNivel(req, res) {
        const {id} = req.params

        try{
            const dadosDeletados = await db.Niveis.destroy({
                where: {
                    id:id
                }
            });
            res.status(200).send({message: 'Nível deletado com sucesso!'})
        }catch(err){
            res.status(500).json(err.message)
        };
    };

};

module.exports = NiveisController;