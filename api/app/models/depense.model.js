// Ici on défini le modèle de la table depense avec les différents champs et leurs types qui seront utilisés dans la base de données
module.exports = (sequelize, Sequelize) => {
  // On utilise la méthode "define" de sequelize pour définir le modèle
  const Depense = sequelize.define("depense", {
    // Le champ "title" est de type STRING
    title: {
      type: Sequelize.STRING,
    },
    // Le champ "amount" est de type DECIMAL, ce qui signifie qu'il peut contenir des nombres à virgule
    amount: {
      type: Sequelize.DECIMAL,
    },
    // Le champ "date" est de type DATE
    date: {
      type: Sequelize.DATE,
    },
  });

  // On retourne le modèle défini pour qu'il puisse être utilisé dans d'autres parties de l'application
  return Depense;
};
