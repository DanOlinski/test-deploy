//Create a connection with Postgres using pool module
const { Pool } = require('pg');
require('dotenv').config() 

const dbParams = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

const db = new Pool(dbParams);

//db can be required from anywhere within this app, it is used for creating javascript functions that query data to and from the Postgres database.
db.connect();

module.exports = db;
