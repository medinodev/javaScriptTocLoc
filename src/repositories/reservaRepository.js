const Reserva = require('../entities/Reserva');

module.exports = {
  async listar() {
    return await Reserva.findAll();
  },
  async buscarPorId(id) {
    return await Reserva.findByPk(id);
  },
  async criar(reserva) {
    return await Reserva.create(reserva);
  },
  async atualizar(id, novosDados) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) throw new Error('Reserva não encontrada.');
    return await reserva.update(novosDados);
  },
  async deletar(id) {
    const reserva = await Reserva.findByPk(id);
    if (!reserva) throw new Error('Reserva não encontrada.');
    return await reserva.destroy();
  },
};


