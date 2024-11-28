const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario'); // Importa a entidade Usuario
const LocalEsportivo = require('./LocalEsportivo'); // Importa a entidade LocalEsportivo

const Reserva = sequelize.define('Reserva', {
  dataReserva: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendente', // pendente, confirmada, cancelada
  },
}, {
  tableName: 'reservas',
  timestamps: true,
});

// Relacionamentos
Reserva.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' }); // Reserva pertence a um Usuário
Reserva.belongsTo(LocalEsportivo, { foreignKey: 'localEsportivoId', as: 'localEsportivo' }); // Reserva pertence a um Local Esportivo

module.exports = Reserva;

