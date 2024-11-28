const Anfitriao = require('../entities/Anfitriao');

module.exports = {
  async listar() {
    return await Anfitriao.findAll();
  },
  async buscarPorId(id) {
    return await Anfitriao.findByPk(id);
  },
  async criar(anfitriao) {
    return await Anfitriao.create(anfitriao);
  },
  async atualizar(id, novosDados) {
    const anfitriao = await Anfitriao.findByPk(id);
    if (!anfitriao) throw new Error('Anfitrião não encontrado.');
    return await anfitriao.update(novosDados);
  },
  async deletar(id) {
    const anfitriao = await Anfitriao.findByPk(id);
    if (!anfitriao) throw new Error('Anfitrião não encontrado.');
    return await anfitriao.destroy();
  },
};
