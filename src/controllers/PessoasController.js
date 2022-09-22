const db = require('../models');

class PessoaController {

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await db.Pessoas.scope('todos').findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async pegaAsPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await db.Pessoas.findAll();
            return res.status(200).json(pessoasAtivas);
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params;

        try {

            const umaPessoa = await db.Pessoas.findOne({
                where: {
                    id: id
                }
            });
            return res.status(200).json(umaPessoa);

        } catch (err) {
            return res.status(500).json(err.message);

        };
    };

    static async cadastraUmaPessoa(req, res) {
        const dataToInsert = req.body;

        try {
            const dataInsert = await db.Pessoas.create(dataToInsert);
            return res.status(200).json(dataToInsert);

        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async deletaUmaPessoa(req, res) {
        const { id } = req.params;

        try {
            const dataToDelete = await db.Pessoas.destroy({ where: { id: id } });
            return res.status(200).send({ message: 'Deletado com sucesso!!!' });

        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async atualizaUmaPessoa(req, res) {
        const { id } = req.params;

        try {
            const dataToUpdate = await db.Pessoas.update(req.body, {
                where: {
                    id: id
                }
            });
            return res.status(200).send({ message: 'Editado com sucesso!!!' });
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async pegaMatriculaDeUmaPessoa(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            const matriculaRecuperada = await db.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(matriculaRecuperada)
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async cadastraUmaMatricula(req, res) {
        const { estudanteId } = req.params

        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            const matriculaCriada = await db.Matriculas.create(novaMatricula);
            return res.status(200).json(matriculaCriada);

        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async atualizaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        const novasInfos = req.body

        try {
            const dataToUpdate = await db.Matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).send({ message: 'Editado com sucesso!!!' });
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async deletaUmaMatricula(req, res) {
        const { idMatricula } = req.params

        try {
            const matriculaDeletada = await db.Matriculas.destroy({ where: { id: idMatricula } })
            return res.status(200).send({ message: `Id ${idMatricula} deletado com sucesso!` })
        } catch (err) {
            return res.status(500).send({ message: `Falha ao deletar!` })
        }
    }

    static async restauraPessoa(req, res) {
        const { idPessoa } = req.params

        try {
            await db.Pessoas.restore({ where: { id: idPessoa } });
            return res.status(200).json({ message: 'Registro restaurado com sucesso!' });
        } catch (err) {
            return res.status(500).send({ message: `Falha ao retornar registro!` });
        };
    };

    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;

        try {
            await database.Matriculas.restore({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} restaurado` });
        } catch (error) {
            return res.status(500).json(error.message);
        };
    };

    static async pegaMatriculaDoEstudante(req, res) {
        const { idEstudante } = req.params;

        try {
            const umaPessoa = await db.Pessoas.findOne({ where: { id: idEstudante } });
            const matriculas = await umaPessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (err) {
            return res.status(500).json(err.message);
        };
    };

    static async pegaMatriculaPorTurma(req, res) {
        const { turmaId } = req.params

        try {
            const todasAsMatriculas = await db.Matriculas.findAndCountAll({
                where: {
                    turma_id: turmaId,
                    status: 'confirmado'
                },
                limit: 1,
                order: [['estudante_id', 'ASC']]
            });
            return res.status(200).json(todasAsMatriculas)
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

};

module.exports = PessoaController;
