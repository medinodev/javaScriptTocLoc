const localEsportivoService = require('../services/localEsportivoService');

module.exports = {
  async listar(req, res) {
    try {
      const locais = await localEsportivoService.listar();
      res.json(locais);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar locais esportivos.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const local = await localEsportivoService.buscarPorId(id);
      if (!local) return res.status(404).json({ message: 'Local Esportivo não encontrado.' });
      res.json(local);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar local esportivo.', error });
    }
  },

  async criar(req, res) {
    try {
      const novoLocal = await localEsportivoService.criar(req.body);
      res.status(201).json(novoLocal);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar local esportivo.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const localAtualizado = await localEsportivoService.atualizar(id, req.body);
      res.json(localAtualizado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar local esportivo.', error });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await localEsportivoService.deletar(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar local esportivo.', error });
    }
  },
};
