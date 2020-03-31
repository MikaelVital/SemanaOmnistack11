const express = require("express"); //Invoca o express e o armazena em uma variável
const cors = require("cors");
const routes = require("./routes"); //Exporta as rotas para o index

const app = express(); // Criando a aplicação
app.use(cors());
app.use(express.json()); //Precisa-se dizer qual formato virá as requisições para o app
// no caso, o JSON

app.use(routes);

app.listen(3333); //A aplicação aparecerá disponível no local host com essa porta
