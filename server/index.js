const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/cadastrar', (req, res) => {
    const { email, password } = req.body;
    
    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
    
    res.json({ message: 'Usuário cadastrado com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
