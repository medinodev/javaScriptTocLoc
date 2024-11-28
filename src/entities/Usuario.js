const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome não pode estar vazio.' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'O email deve ser válido.' },
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: { args: [6, 100], msg: 'A senha deve ter pelo menos 6 caracteres.' },
    },
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
});

module.exports = Usuario;



