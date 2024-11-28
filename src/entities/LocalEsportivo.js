const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocalEsportivo = sequelize.define('LocalEsportivo', {
  nome: { type: DataTypes.STRING, allowNull: false },
  endereco: { type: DataTypes.STRING, allowNull: false },
  tipoEsporte: { type: DataTypes.STRING, allowNull: false },
  disponibilidade: { type: DataTypes.BOOLEAN, defaultValue: true },
}, {
  tableName: 'locais_esportivos',
  timestamps: true,
});

module.exports = LocalEsportivo;


