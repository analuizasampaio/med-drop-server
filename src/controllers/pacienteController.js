const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
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
    endereco: req.body.endereco,

  };

  pacienteModel.create(paciente)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Paciente.",
      });
    });
};

const login = async (req, res) => {
  const { email, senha } = req.body;

   //find a user by their email
   const user = await pacienteModel.findOne({
     where: {
     email: email}
  });

  if (user){
    if(user.senha == senha ){
      token = jwt.sign({ "id" : user.id,"email" : user.email,"name":user.name },process.env.SECRET);
      res.status(200).send({ token : token, id: user.id, email:user.email, nome: user.nome});
      console.log(user)
    } else {
      res.status(500).send({
        message:
           "Senha ou email incorretos",
      });
    }

  }else{
    res.status(500).send({
      message:
         "Senha ou email incorretos",
    })
  }

}

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

    const id = req.params.id;

    pacienteModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Paciente with id=${id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete Paciente with id=${id}. Maybe Paciente was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Paciente with id=" + id
        });
      });

}

const deleteAll = (req, res) => {
    pacienteModel.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Pacientes were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Pacientes."
          });
        });

}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deletePaciente,
    deleteAll,
    login


    
}