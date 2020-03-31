const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//Métodos HTTP:
// Get: Buscar uma informação do Back-End
// Post: Criar uma informação no Backend
// Put: Alterar uma informação no Backend
// Delete: Deletar uma informação no Backend

//Tipos de parametros:
// Query Params: Parametros enviados na rota (url), após o "?" e servem para filtros colocando
// o "&" para concatenar as informações que deseja buscar e como tambem paginações

// Route Params: Parametros utilizados para identificar recursos (que normalmente é uma
// entidade ou tabela do banco) usando /:[id = exemplo] e precisa ser estritamente igual ao que foi
//requisitado, não podendo conter coisas a mais do que não foi pedido

// Request Body: É o corpo da requisição, sua utilização é criar ou alterar recursos
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create); //Criando uma rota para o app que recebe uma função (uma requisição e resposta)

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.create);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);

routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes; //Importa as rotas para a variavel routes
