
# Tipls

Bienvenue sur le repository de Tipls. 

Ce projet est structuré en deux parties principales : un `backend` et un `frontend`. Pour que l'application fonctionne correctement, il est essentiel d'initialiser ces deux composants.

## Configuration du Backend

Le backend de Tipls est développé avec NodeJS et Express, et il utilise une base de données Postgresql.

### Prérequis

- Node.js
- NPM
- Postgresql

### Configuration de la base de données

1. **Configuration de la base de données :** Avant de lancer le backend, assurez-vous de configurer votre base de données. Pour cela, éditez le fichier `backend/app/config/db.config.js` avec les détails de votre base de données :

   - HOST: L'adresse de votre serveur de base de données.
   - USER: Votre identifiant utilisateur pour la base de données.
   - PASSWORD: Votre mot de passe pour la base de données.
   - DB: Le nom de votre base de données.

### Lancement du Backend

2. **Installation des dépendances :** Accédez au dossier `backend` et exécutez la commande suivante pour installer les dépendances nécessaires :
   ```bash
   cd /backend
   npm install
   ```

3. **Démarrage du serveur :** Lancez le serveur backend avec la commande suivante :
   ```bash
   node server.js
   ```
   Cette commande démarre le serveur backend sur le port par défaut, permettant ainsi au backend de traiter les requêtes.

## Configuration du Frontend

Le frontend de Tipls est développé avec Angular 17.

### Prérequis

- Angular CLI

### Installation et lancement

1. **Installation des dépendances :** Accédez au dossier `frontend` et exécutez la commande suivante :
   ```bash
   cd /frontend
   npm install
   ```

2. **Démarrage du frontend :** Pour que le frontend communique avec le backend, lancez-le sur le port 8081 avec la commande suivante :
   ```bash
   ng serve --port 8081
   ```

   Cette commande lance le serveur de développement Angular et ouvre le frontend sur le port 8081.

### Accès à l'application

Une fois le frontend lancé, ouvrez votre navigateur et allez à l'adresse suivante : [http://localhost:8081](http://localhost:8081). Vous devriez maintenant avoir accès à l'interface utilisateur de Tipls.
