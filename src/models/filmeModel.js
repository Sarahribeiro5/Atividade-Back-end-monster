import prisma from "../../prisma/prisma.js";

class FilmeModel {
  // Obter todos os filmes
  async findAll() {
    const filmes = await prisma.filme.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return filmes;
  }

  // Obter um filme pelo ID
  async findById(id) {
    const filme = await prisma.filme.findUnique({
      where: {
        id: Number(id),
      },
    });
    return filme;
  }

  // Criar um novo filme
  async create(titulo, sinopse, personagensPrincipais, dataLancamento, imagem) {
    const novoFilme = await prisma.filme.create({
      data: {
        titulo,
        sinopse,
        personagensPrincipais,
        dataLancamento,
        imagem,
      },
    });
    return novoFilme;
  }

  // Atualizar um filme
  async update(id, titulo, sinopse, personagensPrincipais, dataLancamento, imagem) {
    const filme = await this.findById(id);
    if (!filme) {
      return null;
    }

    const filmeAtualizado = await prisma.filme.update({
      where: {
        id: Number(id),
      },
      data: {
        titulo: titulo !== undefined ? titulo : filme.titulo,
        sinopse: sinopse !== undefined ? sinopse : filme.sinopse,
        personagensPrincipais: personagensPrincipais !== undefined ? personagensPrincipais : filme.personagensPrincipais,
        dataLancamento: dataLancamento !== undefined ? dataLancamento : filme.dataLancamento,
        imagem: imagem !== undefined ? imagem : filme.imagem,
      },
    });
    return filmeAtualizado;
  }

  // Remover um filme
  async delete(id) {
    const filme = await this.findById(id);
    if (!filme) {
      return null;
    }

    await prisma.filme.delete({
      where: {
        id: Number(id),
      },
    });
    return true;
  }
}

export default new FilmeModel();