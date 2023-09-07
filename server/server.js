const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: process.env.USER,
  password:  process.env.PASSWORD,
  host:  process.env.HOST,
  port:  process.env.PORT,
  database: "db_login_system", // Verifique o nome do seu banco de dados
});

app.post("/adduser", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verifica se o nome de usuário já existe na tabela 'accounts'
    const checkUserQuery = "SELECT username FROM accounts WHERE username = $1";
    const existingUser = await pool.query(checkUserQuery, [username]);

    if (existingUser.rows.length > 0) {
      // Nome de usuário já existe, retorne uma resposta apropriada
      return res.status(400).json({ error: "Username already exists" });
    }

    // Se o nome de usuário não existe, insira o novo registro
    const insertQuery = "INSERT INTO accounts (username, password) VALUES ($1, $2)";
    await pool.query(insertQuery, [username, password]);

    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(4000, () => console.log("Server on localhost:4000"));
