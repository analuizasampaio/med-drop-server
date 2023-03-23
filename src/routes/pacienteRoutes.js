const express = require("express")
const router = express.Router()

const controller = require("../controllers/pacienteController")

router.get("/", controller.getAll)

router.post("/cadastrar", controller.create)


module.exports = router