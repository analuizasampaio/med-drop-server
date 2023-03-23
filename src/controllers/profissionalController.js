const db = require("../models");
const profissionalModel = db.profissionais;
// const Op = db.Sequelize.Op;

const create = (req, res) => {
  // Create a Pciente
  const profissional = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha,
    cpf: req.body.cpf,
    categoria: req.body.categoria,
    empresa: req.body.empresa,
    endereco: req.body.endereco,

  };

  profissionalModel.create(profissional)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the profissional.",
      });
    });
};

const getAll = (req, res) => {
    profissionalModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving profissionals."
      });
    });
}

const getById = (req, res) => {

    const id = req.params.id;

    profissionalModel.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find profissional with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving profissional with id=" + id
        });
      });

}

const update = (req, res) => {

}

const deleteProfissional = (req, res) => {

    const id = req.params.id;

    profissionalModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `profissional with id=${id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete profissional with id=${id}. Maybe profissional was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete profissional with id=" + id
        });
      });

}

const deleteAll = (req, res) => {
    profissionalModel.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} profissionals were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all profissionals."
          });
        });

}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteProfissional,
    deleteAll,


    
}