// Importation de la configuration de la base de données
const dbConfig = require("../config/db.config.js");

// Importation de Sequelize, un ORM pour gérer les bases de données SQL
const Sequelize = require("sequelize");

// Création d'une nouvelle instance de Sequelize avec la configuration de la base de données
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  // Configuration du pool de connexions à la base de données
  pool: {
    max: dbConfig.pool.max, // Nombre maximum de connexions dans le pool
    min: dbConfig.pool.min, // Nombre minimum de connexions dans le pool
    acquire: dbConfig.pool.acquire, // Durée maximale, en millisecondes, pendant laquelle cette pool essaiera d'obtenir la connexion avant de lancer une erreur
    idle: dbConfig.pool.idle, // Temps maximum, en millisecondes, qu'une connexion peut être inactive avant d'être libérée
  },
});

// Création d'un objet db pour regrouper tous les modèles
const db = {};

// Ajout de Sequelize et de l'instance sequelize à l'objet db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importation du modèle depense et ajout à l'objet db
db.depenses = require("./depense.model.js")(sequelize, Sequelize);

// Exportation de l'objet db pour qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = db;
