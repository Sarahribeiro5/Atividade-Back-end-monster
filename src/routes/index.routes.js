import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import personagensRouter from "./personagemRoutes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);

router.use("/personagens", personagensRouter);

// Rotas protegidas
router.use(authMiddleware);

export default router;
