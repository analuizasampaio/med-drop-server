const express = require("express")
const router = express.Router()

const controller = require("../controllers/pacienteController")

router.get("/", controller.getAll)

router.get("/:id", controller.getById)

router.post("/cadastrar", controller.create)

router.put("/:id", controller.update)

router.delete("/:id", controller.deletePaciente);

router.delete("/", controller.deleteAll);


module.exports = router