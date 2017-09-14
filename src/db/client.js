const dbConfig = require('./../config/db');

const isDev = process.env.NODE_ENV ? !(process.env.NODE_ENV === 'production') : true;
const env = isDev ? 'dev' : 'prd';
const mysqlConfig = dbConfig.mysql[env] || dbConfig.mysql.dev;

const client = require('knex')({
  client: 'mysql2',
  debug: isDev,
  connection: {
    host: mysqlConfig.host,
    user: process.env.DB_USER || mysqlConfig.user,
    password: process.env.DB_PWD || mysqlConfig.password,
    database: mysqlConfig.database,
    supportBigNumbers: true,
    bigNumberStrings: true,
  },
  pool: { min: 0, max: 7 },
});

module.exports = client;
