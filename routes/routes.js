const express = require("express");

const routes = express.Router();

const funciones = require("../controllers/server");

routes.get("/", funciones.getVista);

routes.post("/", funciones.postVista);

routes.put("/", funciones.putVista);

routes.delete("/", funciones.deleteVista);

modules.exports = routes;
