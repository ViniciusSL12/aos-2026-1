import * as tarefaService from "../services/tarefaService.js";

export const criar = async (req, res) => {
  const { descricao, concluida } = req.body;

  if (!descricao) {
    return res.status(400).json({ erro: "Descrição é obrigatória" });
  }

  const tarefa = await tarefaService.criarTarefa({ descricao, concluida });
  return res.status(201).json(tarefa);
};

export const listar = async (req, res) => {
  const tarefas = await tarefaService.listarTarefas();
  return res.json(tarefas);
};

export const buscar = async (req, res) => {
  const { objectId } = req.params;
  const tarefa = await tarefaService.buscarPorId(objectId);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  return res.json(tarefa);
};

export const atualizar = async (req, res) => {
  const { objectId } = req.params;
  const tarefa = await tarefaService.atualizarTarefa(objectId, req.body);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  return res.json(tarefa);
};

export const deletar = async (req, res) => {
  const { objectId } = req.params;
  const sucesso = await tarefaService.deletarTarefa(objectId);

  if (!sucesso) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  return res.json({ mensagem: "Tarefa removida com sucesso" });
};