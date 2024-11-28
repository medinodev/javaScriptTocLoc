const reservaRepository = require('../repositories/reservaRepository');

module.exports = {
  async listar() {
    return await reservaRepository.listar();
  },
  async buscarPorId(id) {
    return await reservaRepository.buscarPorId(id);
  },
  async criar(reserva) {
    // Aqui você pode adicionar validações ou lógica adicional, se necessário
    return await reservaRepository.criar(reserva);
  },
  async atualizar(id, novosDados) {
    return await reservaRepository.atualizar(id, novosDados);
  },
  async deletar(id) {
    return await reservaRepository.deletar(id);
  },
};
