const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: "db_login_system",
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', async (req, res) => {
  const { email, name, password } = req.body;
  
  try {
    await pool.query(`INSERT INTO accounts(username, password) VALUES($1, $2)`, [name, password]);
    res.send('Cadastro realizado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao realizar cadastro.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
