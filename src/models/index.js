require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig")

  const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
      operatorsAliases: false,
      pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
      },
    }
  );

  const db = {};

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  db.pacientes = require("../models/pacienteModel")(sequelize,Sequelize,DataTypes, Model);
  db.empresas = require("../models/empresaModel")(sequelize,Sequelize,DataTypes, Model);
  db.produtos = require("../models/produtoModel")(sequelize,Sequelize,DataTypes, Model);
  db.profissionais = require("../models/profissionalModel")(sequelize,Sequelize,DataTypes, Model);



  module.exports = db;
