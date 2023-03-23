const db = require("../models");
const empresaModel = db.empresas;
// const Op = db.Sequelize.Op;

const create = (req, res) => {
  // Create a Pciente
  const empresa = {
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    senha: req.body.senha,
    cnpj: req.body.cnpj,
    categoria: req.body.categoria,
    endereco: req.body.endereco,
  };

  empresaModel.create(empresa)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the empresa.",
      });
    });
};



const getAll = (req, res) => {
    empresaModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving empresas."
      });
    });
}

const getById = (req, res) => {

    const id = req.params.id;

    empresaModel.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find empresa with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving empresa with id=" + id
        });
      });

}

const update = (req, res) => {

}

const deleteEmpresa = (req, res) => {

    const id = req.params.id;

    empresaModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `empresa with id=${id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete empresa with id=${id}. Maybe empresa was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete empresa with id=" + id
        });
      });

}

const deleteAll = (req, res) => {
    empresaModel.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} empresas were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all empresas."
          });
        });

}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteEmpresa,
    deleteAll
}