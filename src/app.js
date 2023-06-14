const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

app.use(helmet()); //configuracion de middleware Helmet para la seguridad.

app.use(cors()); //configuracion de middleware CORS para permitir solicitudes de diferentes dominios.

app.use(morgan()); //configuracion de middleware MORGAN para registro de diferentes solicitudes.

app.use(express.json()); //configuracion de middleware para analizar el cuerpo de la solicitud como es JSON.

app.use("/", require("../routes/routes")); //configuracion de las rutas en el punto de entrada '/'.

app.listen(port, () => {
  console.log("Servidor ON"); //mensaje que se muestra cuando el servidor es inicializado correctamente.
});
