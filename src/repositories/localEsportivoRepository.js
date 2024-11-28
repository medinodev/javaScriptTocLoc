const LocalEsportivo = require('../entities/LocalEsportivo');

module.exports = {
  async listar() {
    return await LocalEsportivo.findAll();
  },
  async buscarPorId(id) {
    return await LocalEsportivo.findByPk(id);
  },
  async criar(localEsportivo) {
    return await LocalEsportivo.create(localEsportivo);
  },
  async atualizar(id, novosDados) {
    const localEsportivo = await LocalEsportivo.findByPk(id);
    if (!localEsportivo) throw new Error('Local Esportivo não encontrado.');
    return await localEsportivo.update(novosDados);
  },
  async deletar(id) {
    const localEsportivo = await LocalEsportivo.findByPk(id);
    if (!localEsportivo) throw new Error('Local Esportivo não encontrado.');
    return await localEsportivo.destroy();
  },
};

