require("dotenv").config();

module.exports = Object.freeze({
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: process.env.DB_DIALECT,
  },
});
