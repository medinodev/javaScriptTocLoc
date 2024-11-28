const usuarioService = require('../services/usuarioService');

module.exports = {
  async listar(req, res) {
    try {
      const usuarios = await usuarioService.listar();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar usuários.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.buscarPorId(id);
      if (!usuario) return res.status(404).json({ message: 'Usuário não encontrado.' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuário.', error });
    }
  },

  async criar(req, res) {
    try {
      const novoUsuario = await usuarioService.criar(req.body);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const usuarioAtualizado = await usuarioService.atualizar(id, req.body);
      res.json(usuarioAtualizado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário.', error });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await usuarioService.deletar(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar usuário.', error });
    }
  },
};


