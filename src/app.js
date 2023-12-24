const express = require("express");
const app = express();
const port = 3000;

const exampleController = require("./controllers/exampleController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de exemplo
app.get("/", exampleController.getIndex);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
