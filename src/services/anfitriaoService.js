const anfitriaoRepository = require('../repositories/anfitriaoRepository');

module.exports = {
  async listar() {
    return await anfitriaoRepository.listar();
  },
  async buscarPorId(id) {
    return await anfitriaoRepository.buscarPorId(id);
  },
  async criar(anfitriao) {
    // Validações ou lógica de negócio podem ser adicionadas aqui
    return await anfitriaoRepository.criar(anfitriao);
  },
  async atualizar(id, novosDados) {
    return await anfitriaoRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await anfitriaoRepository.deletar(id);
  },
};
