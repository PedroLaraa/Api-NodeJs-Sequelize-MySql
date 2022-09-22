const db = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
class TurmaController {

    static async pegaTodasTurmas(req, res) {
        const {data_inicial, data_final} = req.query;
        
        const where = {};

        data_inicial || data_final ? where.data_inicio = {} : null

        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final ?  where.data_inicio[Op.lte] = data_final : null

        try {
            const todasTurmas = await db.Turmas.findAll({where});
            res.status(200).json(todasTurmas);
        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async pegaUmaTurma(req, res) {
        const { id } = req.params;

        try {
            const umaTurma = await db.Turmas.findOne({
                where: {
                    id: id
                }
            });
            res.status(200).json(umaTurma);
        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async criaNovaTurma(req, res) {
        const dataToInsert = req.body;

        try {
            const todasTurmas = await db.Turmas.create(dataToInsert);
            res.status(200).json(todasTurmas);
        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async editaUmaTurma(req, res) {
        const { id } = req.params;

        const dataToEdit = req.body;

        try {
            const dadosEditados = await db.Turmas.update(dataToEdit, {
                where: {
                    id: id
                }
            });
            res.status(200).send({ message: 'Turma editada com sucesso!' })
        } catch (err) {
            res.status(500).json(err.message)
        };
    };

    static async deletaUmaTurma(req, res) {
        const { id } = req.params

        try {
            const dadosDeletados = await db.Turmas.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).send({ message: 'Turma deletada com sucesso!' })
        } catch (err) {
            res.status(500).json(err.message)
        };
    };

    static async restauraTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.restore({ where: { id: Number(id) } });
            return res.status(200).json({ mensagem: `id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };
};

module.exports = TurmaController;
