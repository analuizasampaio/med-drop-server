const express = require("express");
const cors = require("cors")

const index = require("./routes/index");
const paciente = require("./routes/pacienteRoutes")

const app = express();

app.use(cors())
app.use(express.json());

app.use("/", index);
app.use("/paciente/v1", paciente);

app.all("*", (request, response) => {
  response.status(404).send({
    status: "Error",
    message: `Route: ${request.originalUrl} does not exist on this server`,
  });
});



module.exports = app;
