export default (sequelize, DataTypes) => {
  const Tarefa = sequelize.define("Tarefa", {
    
    titulo: {
      type: DataTypes.STRING,
    },

    descricao: {
      type: DataTypes.STRING,
      allowNull: false, 
    },

    concluida: {
      type: DataTypes.BOOLEAN,
      defaultValue: false, 
    },

    objectId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }

  });

  return Tarefa;
};