module.exports = (sequelize, Sequelize, DataTypes, Model) => {
  class Produto extends Model {}

  Produto.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      priceId: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
      },
      categoria: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      valor:{
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "produto",
    }
  );
  return Produto;
};
