module.exports = {
  // L'adresse du serveur de la base de données
  HOST: "postgresql.local",

  // Le nom d'utilisateur pour se connecter à la base de données
  USER: "postgres",

  // Le mot de passe pour se connecter à la base de données
  PASSWORD: "test",

  // Le nom de la base de données
  DB: "tiplsdb",

  // Le dialecte de la base de données. Dans ce cas, c'est PostgreSQL
  dialect: "postgres",

  // La configuration du pool de connexions à la base de données
  pool: {
    // Le nombre maximum de connexions dans le pool
    max: 5,

    // Le nombre minimum de connexions dans le pool
    min: 0,

    // Le temps maximum, en millisecondes, que cette pool essaiera d'obtenir la connexion avant de lancer une erreur
    acquire: 30000,

    // Le temps maximum, en millisecondes, qu'une connexion peut être inactive avant d'être libérée
    idle: 10000,
  },
};
