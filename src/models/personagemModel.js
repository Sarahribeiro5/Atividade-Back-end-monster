import prisma from "../../prisma/prisma.js";

class PersonagemModel {
  // Obter todos os personagens
  async findAll() {
    const personagens = await prisma.personagem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return personagens;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const personagem = await prisma.personagem.findUnique({
      where: {
        id: Number(id),
      },
    });

    return personagem;
  }

  // Criar um novo personagem
  async create(nome, idade, caracteristicas) {
    const novoPersonagem = await prisma.personagem.create({
      data: {
        nome,
        idade,
        características: caracteristicas,
        imagem,
      },
    });

    return novoPersonagem;
  }

  // Atualizar um personagem
  async update(id, nome, idade, caracteristicas) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    const personagemAtualizado = await prisma.personagem.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: nome !== undefined ? nome : personagem.nome,
        idade: idade !== undefined ? idade : personagem.idade,
        características: caracteristicas !== undefined ? caracteristicas : personagem.características,
        imagem: imagem !== undefined ? imagem : personagem.imagem,
      },
    });

    return personagemAtualizado;
  }

  // Remover um personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.personagem.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new PersonagemModel();