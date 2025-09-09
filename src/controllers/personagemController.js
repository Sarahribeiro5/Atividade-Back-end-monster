import PersonagemModel from "../models/personagemModel.js";

class PersonagemController {
  // GET /personagens
  async getAllPersonagens(req, res) {
    try {
      const personagens = await PersonagemModel.findAll();
      res.json(personagens);
    } catch (error) {
      console.error("Erro ao buscar os personagens:", error);
      res.status(500).json({ error: "Erro ao buscar os personagens" });
    }
  }

  // GET /personagens/:id
  async getPersonagemById(req, res) {
    try {
      const { id } = req.params;

      const personagem = await PersonagemModel.findById(id);

      if (!personagem) {
        return res.status(404).json({ error: "Personagem não encontrado!" });
      }

      res.json(personagem);
    } catch (error) {
      console.error("Erro ao buscar personagem:", error);
      res.status(500).json({ error: "Erro ao buscar personagem!" });
    }
  }

  // POST /personagens
  async createPersonagem(req, res) {
    try {
      // Validação básica
      const { nome, idade, características } = req.body;

      // Verifica se todos os campos obrigatórios foram fornecidos
      if (!nome || !idade || !características) {
        return res.status(400).json({
          error: "Os campos nome, idade e características são obrigatórios",
        });
      }

      // Criar o novo personagem
      const newPersonagem = await PersonagemModel.create(
        nome,
        idade,
        características
      );

      if (!newPersonagem) {
        return res.status(400).json({ error: "Erro ao criar personagem" });
      }

      res.status(201).json({
        message: "Personagem criado com sucesso",
        newPersonagem,
      });
    } catch (error) {
      console.error("Erro ao criar personagem:", error);
      res.status(500).json({ error: "Erro ao criar personagem" });
    }
  }

  // PUT /personagens/:id
  async updatePersonagem(req, res) {
    try {
      const { id } = req.params;
      const { nome, idade, características } = req.body;

      // Atualizar o personagem
      const updatedPersonagem = await PersonagemModel.update(
        id,
        nome,
        idade,
        características
      );

      if (!updatedPersonagem) {
        return res.status(404).json({ error: "Personagem não encontrado" });
      }

      res.json(updatedPersonagem);
    } catch (error) {
      console.error("Erro ao atualizar personagem:", error);
      res.status(500).json({ error: "Erro ao atualizar personagem!" });
    }
  }

  // DELETE /personagens/:id
  async deletePersonagem(req, res) {
    try {
      const { id } = req.params;

      // Remover o personagem
      const result = await PersonagemModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Personagem não encontrado!" });
      }

      res.status(200).json({
        message: "Personagem removido com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover personagem:", error);
      res.status(500).json({ error: "Erro ao remover personagem!" });
    }
  }
}

export default new PersonagemController();