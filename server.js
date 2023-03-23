const app = require("./src/app");

const PORT = process.env.PORT || 8080;

const db = require("./src/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.listen(PORT, () => {
  console.log(`Conectado na porta: ${PORT}`);
});
