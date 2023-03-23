module.exports = (sequelize, Sequelize, DataTypes, Model) => {
  class Empresa extends Model {}

  Empresa.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    categoria: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
    },
    endereco: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: false,
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
  }, {
    sequelize,
    modelName: "empresa"
  });
  return Empresa
};