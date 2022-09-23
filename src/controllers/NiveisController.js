const NiveisServices = require('../services/NiveisServices.js');

const niveisServices = new NiveisServices('Niveis');
class NiveisController {

    static async pegaTodosNiveis(req, res) {
        try {
            const todosNiveis = await niveisServices.pegaTodosOsRegistros();
            res.status(200).json(todosNiveis);

        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async pegaUmNivel(req, res) {
        const { id } = req.params;

        try {
            const umNivel = await niveisServices.pegaUmRegistro({ id });
            res.status(200).json(umNivel);

        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async criaNovoNivel(req, res) {
        const dataToInsert = req.body;

        try {
            const todosNiveis = await niveisServices.criaRegistro(dataToInsert);
            res.status(200).json(todosNiveis);

        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async editaUmNivel(req, res) {
        const { id } = req.params;

        const dataToEdit = req.body;

        try {
            await niveisServices.atualizaRegistro(dataToEdit, id);
            res.status(200).send({ message: 'Nível editado com sucesso!' });

        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async deletaUmNivel(req, res) {
        const { id } = req.params;

        try {
            await niveisServices.apagaRegistro(id);
            res.status(200).send({ message: 'Nível deletado com sucesso!' });

        } catch (err) {
            res.status(500).json(err.message);
        };
    };

    static async restauraNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.restauraRegistro(id);
            return res.status(200).json({ mensagem: `id ${id} restaurado` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

};

module.exports = NiveisController;