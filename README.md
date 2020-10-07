# Main Main (Application Mobile)

Application mobile Main Main pour l'association La Parole aux sourds

## Table des matières

- [Technologies](#Technologies)
- [Prérequis](#Prérequis)
- [Lancement](#Lancement)
- [Fonctionnement](#Fonctionnement)
- [Déploiement](#Déploiement)

## Technologies

- [Node JS](https://nodejs.org/fr/about/)
- [Expo](https://expo.io/)
- [react native](https://reactnative.dev/)
- [lottie](https://lottiefiles.com/tag/reactnative)
- [redux](https://redux.js.org/)
- [typescript](https://www.typescriptlang.org/)

## Prérequis

- Node js à télécharger puis l'installer.
- React native à télécharger puis l'installer.
- Un éditeur de texte (ex: VScode).

## Lancement

1. Cloner le projet dans votre répertoire avec la commande `$ https://github.com/Arnaudlaurent/MainMainhttps://github.com/Arnaudlaurent/MainMain`. Si vous avez une erreur d'autorisation veuillez demander au propriétaire de vous ajouter au projet puis relancer la commande.
2. Lancer la commande `$ npm install` à partir de la racine du projet pour installer les dépendances.
3. Lancer la commande `$ npm start` à partir de la racine du projet pour lancer le serveur de l'application.
4. Lancer la commande `$ npm run android` dans un second terminal à partir de la racine du projet pour lancer l'application sur votre smartphone android ou votre émulateur android(L'utilisation de l'émulateur nécessite des configurations supplémentaires).

## Fonctionnement

![](./assets/fonctionnement.gif)

## Déploiement

Le déploiement peut se faire par la génération:

- d'apk signé à l'aide de la commande `$ ./gradlew assembleRelease` en étant positioné dans le dossier 'MainMain/android. L'apk sera généré dans le dossier 'MainMain/android/app/build/outputs/apk/release'
- de bundle signé à l'aide de la commande `$ ./gradlew bundleRelease` en étant positioné dans le dossier 'MainMain/android. L'apk sera généré dans le dossier 'MainMain/android/app/build/outputs/bundle/release'

NB: Les informations pour la signature de l'apk se trouve dans le dossier Keytool à la racine du projet
