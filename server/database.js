const { Pool } = require("pg");

require('dotenv').config() 
//console.log(process.env)  // remova isto depois de confirmar que está funcionando

const mainPool = new Pool({
  user: process.env.USER,
  password:  process.env.PASSWORD,
  host:  process.env.HOST,
  port:  process.env.PORT,
  database: "postgres", // Use o banco de dados "postgres" para criar o novo banco
});

const createDbQry = `CREATE DATABASE db_login_system`;
const createTblQry = `CREATE TABLE IF NOT EXISTS accounts (
  user_id serjial PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL);`;

(async () => {
  try {
    // Cria o banco de dados "db_login_system" se ele não existir
    await mainPool.query(createDbQry);
    console.log("Database created successfully.");

    // Agora, você pode criar um novo pool para se conectar ao banco de dados "db_login_system"
    const pool = new Pool({
      user: process.env.USER,
      password:  process.env.PASSWORD,
      host:  process.env.HOST,
      port:  process.env.PORT,
      database: "db_login_system",
    });

    // Cria a tabela "accounts" se ela não existir
    await pool.query(createTblQry);

    console.log("Tabela Criada com Sucesso.");
  } catch (error) {
    console.error("Erro:", error);
  }
})();
