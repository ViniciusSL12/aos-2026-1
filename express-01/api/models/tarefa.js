export default (sequelize, DataTypes) => {
  const Tarefa = sequelize.define(
    "Tarefa",
    {
      objectId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      concluida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "tarefas",
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Tarefa;
};