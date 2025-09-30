import express from "express";
import FilmeController from "../controllers/filmeController.js";

const filmesRouter = express.Router();

// Rotas de Filmes
// GET /filmes - Listar todos os Filmes
filmesRouter.get("/", FilmeController.getAllFilmes);

// GET /filmes/:id - Obter um Filme pelo ID
filmesRouter.get("/:id", FilmeController.getFilmeById);

// POST /filmes - Criar um novo Filme
filmesRouter.post("/", FilmeController.createFilme);

// PUT /filmes/:id - Atualizar um Filme
filmesRouter.put("/:id", FilmeController.updateFilme);

// DELETE /filmes/:id - Remover um Filme
filmesRouter.delete("/:id", FilmeController.deleteFilme);

export default filmesRouter;