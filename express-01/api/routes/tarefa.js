import { Router } from "express";

const router = Router();

// LISTAR TODAS
router.get("/", async (req, res) => {
  try {
    const tarefas = await req.context.models.Tarefa.findAll();
    return res.json(tarefas);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
});

// BUSCAR POR ID
router.get("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);
    return res.json(tarefa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar tarefa" });
  }
});

// CRIAR
router.post("/", async (req, res) => {
  try {
    const novaTarefa = await req.context.models.Tarefa.create(req.body);
    return res.json(novaTarefa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar tarefa" });
  }
});

// ATUALIZAR
router.put("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);
    await tarefa.update(req.body);
    return res.json(tarefa);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
});

// DELETAR
router.delete("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);
    await tarefa.destroy();
    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
});

export default router;