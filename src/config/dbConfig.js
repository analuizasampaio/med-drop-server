require("dotenv").config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "meddrop_database_development",
    host: DB_HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  // test: {
  //   username: DB_USERNAME,
  //   password: DB_PASSWORD,
  //   database: "meddrop_database_test",
  //   host: DB_HOST,
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000,
  //   },
  // },
  // production: {
  //   username: DB_USERNAME,
  //   password: DB_PASSWORD,
  //   database: "meddrop_database_production",
  //   host: DB_HOST,
  //   dialect: "postgres",
  //   pool: {
  //     max: 5,
  //     min: 0,
  //     acquire: 30000,
  //     idle: 10000,
  //   },
  // },
};
