const express = require("express")

const index = require("./routes/index")


const app = express()

app.use(express.json())


app.use("/", index)

app.all("*", (request, response) => {
    response.status(404).send({
      status: "Error",
      message: `Route: ${request.originalUrl} does not exist on this server`,
    });
  });

module.exports = app
