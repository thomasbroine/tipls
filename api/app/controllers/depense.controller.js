// Importation des modèles de la base de données
const db = require("../models");
const Depense = db.depenses;
const Op = db.Sequelize.Op;

// Création d'une nouvelle dépense
exports.create = (req, res) => {
  // Validation de la requête
  if (!req.body.title) {
    res.status(400).send({
      message: "Le contenu ne peut pas être vide !",
    });
    return;
  }

  // Création de l'objet dépense
  const depense = {
    title: req.body.title,
    amount: req.body.amount,
    date: req.body.date,
  };

  // Enregistrement de la dépense dans la base de données
  Depense.create(depense)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur est survenue lors de la création de la dépense.",
      });
    });
};

// Récupération de toutes les dépenses
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Depense.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur est survenue lors de la récupération des dépenses.",
      });
    });
};

// Récupération d'une dépense spécifique par son id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Depense.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible de trouver la dépense avec l'id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la récupération de la dépense avec l'id=" + id,
      });
    });
};

// Mise à jour d'une dépense spécifique par son id
exports.update = (req, res) => {
  const id = req.params.id;

  Depense.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La dépense a été mise à jour avec succès.",
        });
      } else {
        res.send({
          message: `Impossible de mettre à jour la dépense avec l'id=${id}. Peut-être que la dépense n'a pas été trouvée ou que le corps de la requête est vide !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erreur lors de la mise à jour de la dépense avec l'id=" + id,
      });
    });
};

// Suppression d'une dépense spécifique par son id
exports.delete = (req, res) => {
  const id = req.params.id;

  Depense.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "La dépense a été supprimée avec succès !",
        });
      } else {
        res.send({
          message: `Impossible de supprimer la dépense avec l'id=${id}. Peut-être que la dépense n'a pas été trouvée !`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Impossible de supprimer la dépense avec l'id=" + id,
      });
    });
};

// Suppression de toutes les dépenses
exports.deleteAll = (req, res) => {
  Depense.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} dépenses ont été supprimées avec succès !`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Une erreur est survenue lors de la suppression de toutes les dépenses.",
      });
    });
};
