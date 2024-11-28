const { Sequelize } = require('sequelize');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Configuração da conexão com o banco de dados
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco de dados
  process.env.DB_USER, // Usuário do banco
  process.env.DB_PASSWORD, // Senha do banco
  {
    host: process.env.DB_HOST, // Endereço do banco
    dialect: 'postgres', // Dialeto utilizado
    logging: false, // Define se quer ver logs de SQL no console
  }
);

// Teste da conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

/*sequelize.sync({ alter: true }) // Ajusta as tabelas existentes sem apagar os dados
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });*/


module.exports = sequelize;
