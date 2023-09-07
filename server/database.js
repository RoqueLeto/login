const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "crtb@300419!",
  host: "localhost",
  port: 5432,
  database: "db_login_system",
});

const createDbQry = `CREATE DATABASE db_login_system`;
const createTblQry = `CREATE TABLE IF NOT EXISTS accounts (
  user_id serial PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL);`;

(async () => {
  try {

    // Verifica a existência do banco de dados
    const checkDbExistsQry = `SELECT 1 FROM pg_database WHERE datname = 'db_login_system'`;
    const result = await pool.query(checkDbExistsQry);
    const dbExists = result.rowCount > 0;

    if (!dbExists) {
      // Cria o banco de dados "db_login_system"
      await pool.query(createDbQry);
      console.log("Database created successfully.");
    } else {
      console.log("Database already existsBanco já Existe.");
    }

    // Conecta-se ao banco de dados "db_login_system"
    pool.database = "db_login_system";

    // Cria a tabela "accounts"
    await pool.query(createTblQry);

    console.log("Tabela Criada com Sucesso.");
  } catch (error) {
    console.error("Erro:", error);
  }
})();
