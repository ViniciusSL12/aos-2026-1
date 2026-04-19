import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController.js";

const router = Router();

router.get("/", tarefaController.listar);
router.get("/:objectId", tarefaController.buscar);
router.post("/", tarefaController.criar);
router.put("/:objectId", tarefaController.atualizar);
router.delete("/:objectId", tarefaController.deletar);

export default router;