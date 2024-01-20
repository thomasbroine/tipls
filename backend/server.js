// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");

// Création de l'application Express
const app = express();

// Configuration des options CORS
var corsOptions = {
  origin: "http://localhost:8081",
};

// Activation du middleware CORS avec les options définies
app.use(cors(corsOptions));

// Activation du middleware pour analyser les requêtes de type application/json
app.use(express.json());

// Activation du middleware pour analyser les requêtes de type application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Définition d'une route simple
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API de TIPLS." });
});

// Importation des modèles de la base de données
const db = require("./app/models");

// Synchronisation de la base de données
db.sequelize
  .sync()
  //.sync({force: true}) //Si on veut supprimer la base de données et la recréer lors du lancement du serveur
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// Importation des routes de l'API des dépenses et ajout à l'application
require("./app/routes/depense.routes")(app);

// Définition du port et démarrage du serveur
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
