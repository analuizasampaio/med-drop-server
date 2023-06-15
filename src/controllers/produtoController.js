const db = require("../models");
const produtoModel = db.produtos;
// const Op = db.Sequelize.Op;

const create = (req, res) => {
  // Create a Pciente
  const produto = {
    nome: req.body.nome,
    priceId: req.body.priceId,
    categoria: req.body.categoria,
    descricao: req.body.descricao,
    valor: req.body.valor,
    quantidade: req.body.quantidade,
    endereco: req.body.endereco,

  };

  produtoModel.create(produto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the produto.",
      });
    });
};

const getAll = (req, res) => {
    produtoModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produtos."
      });
    });
}

const getById = (req, res) => {

    const id = req.params.id;

    produtoModel.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find produto with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving produto with id=" + id
        });
      });

}

const update = (req, res) => {

}

const deleteProduto = (req, res) => {

    const id = req.params.id;

    produtoModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `produto with id=${id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete produto with id=${id}. Maybe produto was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete produto with id=" + id
        });
      });

}

const deleteAll = (req, res) => {
    produtoModel.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} produtos foram dleetados com sucesso!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all produtos."
          });
        });

}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteProduto,
    deleteAll,    
}