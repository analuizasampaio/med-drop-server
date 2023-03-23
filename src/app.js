const express = require("express");
const cors = require("cors")

const index = require("./routes/index");
const paciente = require("./routes/pacienteRoutes")
const produto = require("./routes/produtoRoutes")
const profissional = require("./routes/profissionalRoutes")
const empresa = require("./routes/empresaRoutes")

const app = express();

app.use(cors())
app.use(express.json());

app.use("/", index);
app.use("/paciente/v1", paciente);
app.use("/produto/v1", produto);
app.use("/profissional/v1", profissional);
app.use("/empresa/v1", empresa);

app.all("*", (request, response) => {
  response.status(404).send({
    status: "Error",
    message: `Route: ${request.originalUrl} does not exist on this server`,
  });
});



module.exports = app;
