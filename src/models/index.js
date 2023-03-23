
const Sequelize = require('sequelize');
const dbConfig = require("../config/dbConfig.js");

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);


module.exports = db;
