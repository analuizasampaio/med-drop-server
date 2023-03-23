const db = require("../models");
const pacienteModel = db.pacientes;
// const Op = db.Sequelize.Op;

const create = (req, res) => {
  // Create a Tutorial
  const paciente = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha,
    cpf: req.body.cpf,
  };

  pacienteModel.create(paciente)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Paciente.",
      });
    });
};

const getAll = (req, res) => {
    pacienteModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving pacientes."
      });
    });
}

const getById = (req, res) => {

    const id = req.params.id;

    pacienteModel.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Paciente with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Paciente with id=" + id
        });
      });

}

const update = (req, res) => {

}

const deletePaciente = (req, res) => {

}

const deleteAll = (req, res) => {

}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deletePaciente,
    deleteAll,


    
}