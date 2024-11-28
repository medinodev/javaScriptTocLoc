const localEsportivoRepository = require('../repositories/localEsportivoRepository');

module.exports = {
  async listar() {
    return await localEsportivoRepository.listar();
  },
  async buscarPorId(id) {
    return await localEsportivoRepository.buscarPorId(id);
  },
  async criar(localEsportivo) {
    // Validações ou lógica adicional podem ser adicionadas aqui
    return await localEsportivoRepository.criar(localEsportivo);
  },
  async atualizar(id, novosDados) {
    return await localEsportivoRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await localEsportivoRepository.deletar(id);
  },
};

