import FilmeModel from "../models/filmeModel.js";

class FilmeController {
  // GET /filmes
  async getAllFilmes(req, res) {
    try {
      const filmes = await FilmeModel.findAll();
      res.json(filmes);
    } catch (error) {
      console.error("Erro ao buscar os filmes:", error);
      res.status(500).json({ error: "Erro ao buscar os filmes" });
    }
  }

  // GET /filmes/:id
  async getFilmeById(req, res) {
    try {
      const { id } = req.params;
      const filme = await FilmeModel.findById(id);

      if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado!" });
      }

      res.json(filme);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      res.status(500).json({ error: "Erro ao buscar filme!" });
    }
  }

  // POST /filmes
  async createFilme(req, res) {
    try {
      const { titulo, sinopse, personagensPrincipais, dataLancamento, imagem } = req.body;

      if (!titulo || !sinopse || !personagensPrincipais || !dataLancamento || !imagem) {
        return res.status(400).json({
          error: "Os campos titulo, sinopse, personagensPrincipais, dataLancamento e imagem são obrigatórios",
        });
      }

      const newFilme = await FilmeModel.create(titulo, sinopse, personagensPrincipais, dataLancamento, imagem);

      res.status(201).json({
        message: "Filme criado com sucesso",
        newFilme,
      });
    } catch (error) {
      console.error("Erro ao criar filme:", error);
      res.status(500).json({ error: "Erro ao criar filme" });
    }
  }

  // PUT /filmes/:id
  async updateFilme(req, res) {
    try {
      const { id } = req.params;
      const { titulo, sinopse, personagensPrincipais, dataLancamento, imagem } = req.body;

      const updatedFilme = await FilmeModel.update(id, titulo, sinopse, personagensPrincipais, dataLancamento, imagem);

      if (!updatedFilme) {
        return res.status(404).json({ error: "Filme não encontrado" });
      }

      res.json(updatedFilme);
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
      res.status(500).json({ error: "Erro ao atualizar filme!" });
    }
  }

  // DELETE /filmes/:id
  async deleteFilme(req, res) {
    try {
      const { id } = req.params;

      const result = await FilmeModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Filme não encontrado!" });
      }

      res.status(200).json({
        message: "Filme removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover filme:", error);
      res.status(500).json({ error: "Erro ao remover filme!" });
    }
  }
}

export default new FilmeController();