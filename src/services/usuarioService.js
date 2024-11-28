const usuarioRepository = require('../repositories/usuarioRepository');

module.exports = {
  async listar() {
    return await usuarioRepository.listar();
  },
  async buscarPorId(id) {
    return await usuarioRepository.buscarPorId(id);
  },
  async criar(usuario) {
    // Validações ou lógica adicional podem ser adicionadas aqui
    return await usuarioRepository.criar(usuario);
  },
  async atualizar(id, novosDados) {
    return await usuarioRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await usuarioRepository.deletar(id);
  },
};

