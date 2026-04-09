# Workshop

Projet workshop pour faire des signals store et un intercepteur http  
Il faut java pour lancer openapi-generator: `sudo apt install openjdk-11-jd`  
```bash
npm i  
npm run generate-client  
npm run start:dev
```

Il faut généré les routes d'api avec open api generator 


## Serveur spec

Pour essayer des codes 500, il faut changer le code de retour dans la spec du serveur `src/mock_serveur/server-spec.yml`  

## Exercice 1

Ajouter un intercepteur http pour catch l'erreur 500 de la route footballteams

## Exercice 2

Créer un signal store pour gérer l'état de footballteam / nflTeam / nbaTeam  
(pas obligé de garder l'overallstore, choisissez un nom qui vous convient)

## Exercice 3

Créer des steps (nouvelles pages dans le routeur), qui agissent par exemple sur le budget, pour gérer un l'état partagé et la logique entre chaque step grace au signal store  

### Todo:
Ajouter un exo pour l'utilisation de rxMethod et opérations rx
