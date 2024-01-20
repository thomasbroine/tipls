// Exportation d'une fonction qui prend l'application Express comme argument
module.exports = (app) => {
  // Importation du contrôleur des dépenses
  const depenses = require("../controllers/depense.controller.js");

  // Création d'un nouveau routeur Express
  var router = require("express").Router();

  // Création d'une nouvelle route POST pour créer une nouvelle dépense
  router.post("/", depenses.create);

  // Création d'une nouvelle route GET pour récupérer toutes les dépenses
  router.get("/", depenses.findAll);

  // Création d'une nouvelle route GET pour récupérer une dépense spécifique par son id
  router.get("/:id", depenses.findOne);

  // Création d'une nouvelle route PUT pour mettre à jour une dépense spécifique par son id
  router.put("/:id", depenses.update);

  // Création d'une nouvelle route DELETE pour supprimer une dépense spécifique par son id
  router.delete("/:id", depenses.delete);

  // Création d'une nouvelle route DELETE pour supprimer toutes les dépenses
  router.delete("/", depenses.deleteAll);

  // Ajout du routeur au middleware de l'application pour qu'il soit utilisé sur le chemin '/api/depenses'
  app.use("/api/depenses", router);
};
