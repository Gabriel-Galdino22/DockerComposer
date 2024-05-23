const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// Middleware para permitir o parsing do corpo das requisições como JSON
app.use(bodyParser.json());

// Configuração da conexão com o MongoDB
const uri = 'mongodb://mongo:27017'; // Usaremos "mongo" como hostname, que será o nome do serviço no Docker Compose
const client = new MongoClient(uri);

// Endpoint para obter todas as tarefas
app.get('/tasks', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('todo');
    const collection = db.collection('tasks');
    const tasks = await collection.find({}).toArray();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter tarefas' });
  } finally {
    await client.close();
  }
});

// Endpoint para adicionar uma nova tarefa
app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body;
    await client.connect();
    const db = client.db('todo');
    const collection = db.collection('tasks');
    await collection.insertOne({ task });
    res.status(201).json({ message: 'Tarefa adicionada com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar tarefa' });
  } finally {
    await client.close();
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor está ouvindo na porta ${port}`);
});
