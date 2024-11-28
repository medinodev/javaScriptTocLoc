const anfitriaoService = require('../services/anfitriaoService');

module.exports = {
  async listar(req, res) {
    try {
      const anfitrioes = await anfitriaoService.listar();
      res.json(anfitrioes);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao listar anfitriões.', error });
    }
  },

  async buscarPorId(req, res) {
    try {
      const { id } = req.params;
      const anfitriao = await anfitriaoService.buscarPorId(id);
      if (!anfitriao) return res.status(404).json({ message: 'Anfitrião não encontrado.' });
      res.json(anfitriao);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar anfitrião.', error });
    }
  },

  async criar(req, res) {
    try {
      const novoAnfitriao = await anfitriaoService.criar(req.body);
      res.status(201).json(novoAnfitriao);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar anfitrião.', error });
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const anfitriaoAtualizado = await anfitriaoService.atualizar(id, req.body);
      res.json(anfitriaoAtualizado);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar anfitrião.', error });
    }
  },

  async deletar(req, res) {
    try {
      const { id } = req.params;
      await anfitriaoService.deletar(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar anfitrião.', error });
    }
  },
};
