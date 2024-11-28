require('dotenv').config(); // Carrega as variáveis de ambiente do .env
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Importar rotas
const anfitriaoRoutes = require('./routes/anfitriaoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const localEsportivoRoutes = require('./routes/localEsportivoRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();

// Configurar middlewares
app.use(cors()); // Habilita CORS para todas as rotas
app.use(bodyParser.json()); // Faz o parsing do JSON enviado nas requisições
//app.use(bodyParser.urlencoded({ extended: true })); //tirar

/*app.use((req, res, next) => { // tirar
  console.log('Body recebido:', req.body);
  next();
});*/

// Configurar rotas
app.use('/api/anfitrioes', anfitriaoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/locais-esportivos', localEsportivoRoutes);
app.use('/api/reservas', reservaRoutes);

// Sincronizar com o banco de dados
sequelize.sync({ force: false }) // `force: true` recria as tabelas sempre que o servidor reinicia
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

// Inicializar o servidor
const PORT = process.env.PORT || 8080; // Porta configurada no .env ou 8080 como padrão
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
