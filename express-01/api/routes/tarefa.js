import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tarefas = await req.context.models.Tarefa.findAll();
    return res.json(tarefas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    return res.json(tarefa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const novaTarefa = await req.context.models.Tarefa.create(req.body);
    return res.json(novaTarefa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await tarefa.update(req.body);
    return res.json(tarefa);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const tarefa = await req.context.models.Tarefa.findByPk(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ error: "Tarefa não encontrada" });
    }

    await tarefa.destroy();
    return res.json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
});

export default router;