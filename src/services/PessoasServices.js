const Services = require('./Services');
const db = require('../models');

class PessoasServices extends Services {
    constructor() {
        super('Pessoas');
        this.matriculas = new Services('Matriculas');
    };

    async pegaRegistrosAtivos(where = {}) {
        return db[this.nomeDoModelo].findAll({ where: { ...where } });
    };

    async pegaTodosOsRegistros(where = {}) {
        return db[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: { ...where } });
    };

    async cancelaPessoaEMatriculas(estudanteId) {
        return db.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao });
            await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao });
        });
    };

    async pegaMatriculasPorEstudante(where = {}) {
        const matriculas = await db[this.nomeDoModelo]
            .findOne({ where: { ...where } });
        return matriculas.getAulasMatriculadas();
    };
};

module.exports = PessoasServices;