const Usuario = require('../entities/Usuario');

module.exports = {
  async listar() {
    return await Usuario.findAll();
  },
  async buscarPorId(id) {
    return await Usuario.findByPk(id);
  },
  async criar(usuario) {
    return await Usuario.create(usuario);
  },
  async atualizar(id, novosDados) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuário não encontrado.');
    return await usuario.update(novosDados);
  },
  async deletar(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) throw new Error('Usuário não encontrado.');
    return await usuario.destroy();
  },
};

