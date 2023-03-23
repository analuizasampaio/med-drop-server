const express = require("express")
const router = express.Router()

router.get("/api/healthchecker", (request, response)=>{
    console.log("Build CRUD API with Node.js and Sequelize")
    response.status(200).json({
        "titulo": "Med Drop",
        "version": "1.0.0",
        "status": "success",
        "message": "Build CRUD API with Node.js and Sequelize",
    })
})



module.exports = router