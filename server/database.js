const { Pool } = require("pg");

require('dotenv').config()

const mainPool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: "postgres", // Use o banco de dados "postgres" para criar o novo banco
});

//Scripts do banco de dados
const createDbScript = "CREATE DATABASE db_login_system";
const createTBScript = `CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(55) UNIQUE NOT NULL,
    "password" VARCHAR(100) NOT NULL
);`;

//const createDbQry = `CREATE DATABASE db_login_system`;
//const createTblQry = `CREATE TABLE IF NOT EXISTS accounts (
//  user_id serial PRIMARY KEY,
//  username VARCHAR(50) UNIQUE NOT NULL,
//  password VARCHAR(50) NOT NULL);`;

(async () => {
  try {
    // Verifica se o banco de dados "db_login_system" existe antes de tentar criá-lo
    let dbs = await mainPool.query("SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('db_login_system')");
    if (dbs.rows.length == 0) {
      await mainPool.query(createDbQry);
      console.log("Database created successfully.");
    }

    // Agora, você pode criar um novo pool para se conectar ao banco de dados "db_login_system"
    const pool = new Pool({
      user: process.env.USER,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: process.env.PORT,
      database: process.env.DATABASE,
    });

    // Cria a tabela "accounts" se ela não existir
    await pool.query(createTblQry);
    console.log("Tabela Criada com Sucesso.");
  } catch (error) {
    console.error("Erro:", error);
  }
})();
