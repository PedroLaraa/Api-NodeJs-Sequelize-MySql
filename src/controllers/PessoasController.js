const { where } = require('sequelize');
const db = require('../models');

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try{
            const todasAsPessoas = await db.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(err){
            return res.status(500).json(err.message);
        };
    };

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;

        try{

            const umaPessoa = await db.Pessoas.findOne({
                where: {
                    id: id
                }
            });
            return res.status(200).json(umaPessoa)

        }catch(err){
            return res.status(500).json(err.message);

        };
    };

    static async cadastraUmaPessoa(req, res) {

        const dataToInsert = req.body

        try{

            const dataInsert = db.Pessoas.create(dataToInsert);
            return res.status(200).json(dataToInsert);

        }catch(err){
            return res.status(500).json(err.message);
        }

    }
};

module.exports = PessoaController;
