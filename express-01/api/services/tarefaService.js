import models from "../models";

export const criarTarefa = async (dados) => {
  return await models.Tarefa.create(dados);
};

export const listarTarefas = async () => {
  try {
    return await models.Tarefa.findAll();
  } catch (error) {
    console.error("ERRO REAL LISTAR TAREFAS:");
    console.error("message:", error.message);
    console.error("name:", error.name);
    console.error("parent:", error.parent);
    console.error("original:", error.original);
    throw error;
  }
};

export const buscarPorId = async (objectId) => {
  return await models.Tarefa.findOne({ where: { objectId } });
};

export const atualizarTarefa = async (objectId, dados) => {
  const tarefa = await models.Tarefa.findOne({ where: { objectId } });

  if (!tarefa) return null;

  await tarefa.update(dados);
  return tarefa;
};

export const deletarTarefa = async (objectId) => {
  const tarefa = await models.Tarefa.findOne({ where: { objectId } });

  if (!tarefa) return null;

  await tarefa.destroy();
  return true;
};