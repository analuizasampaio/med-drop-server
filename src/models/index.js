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

  db.pacientes = require("../models/pacienteModel")(
    sequelize,
    Sequelize,
    DataTypes,
    Model
  );

  module.exports = db;
