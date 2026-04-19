export default (sequelize, DataTypes) => {
  const Tarefa = sequelize.define("tarefa", {
    titulo: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
  });

  return Tarefa;
};