require('dotenv').config();


module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    port: process.env.DB_PORT || 3306,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    seederStorage: 'sequelize',
    port: process.env.DB_PORT || 3306,
  },
};
