## Description de l'application

L'application permet aux étudiants de s'auto-évaluer sur les technologies et d'enregistrer ses données.

## Stack Technique

Node js 18+ et npm

## Features

- Next : framework open-source basé sur React pour le développement web, simplifie la création d'applications web évolutives avec des fonctionnalités avancées comme le rendu côté serveur et le routage dynamique.
- ESLint : assurez-vous que votre code suit les meilleures pratiques et détecte les erreurs courantes.
- React : Une bibliothèque JavaScript déclarative, efficace et flexible pour créer des interfaces utilisateur.
- Material-UI (MUI) : composants React qui implémentent le Material Design de Google.
- React Query : bibliothèque de récupération de données performante et puissante pour React.
- Iconify : incluez facilement des icônes dans votre projet à partir de plusieurs jeux d'icônes.
- date-fns : bibliothèque d'utilitaires de date JavaScript moderne.
- aggrid : outils puissants pour créer des onglets et des filtres faciles
- chartjs : bons outils pour créer un graphique.
- Tailwind CSS
- Supabase : plateforme open source qui combine les avantages d’une base de données PostgreSQL avec des fonctionnalités en temps réel et une API RESTful pour simplifier l’interaction avec la base de données.

Lien pour le doc Mui : 

Tri List Mui :
- https://mui.com/material-ui/react-transfer-list/
  
Chip Mui :
- https://mui.com/material-ui/react-select/
  
Saisie semi-automatique :
- https://mui.com/material-ui/react-autocomplete/

## Installation
```bash
npm install
```
## Lancement du serveur
```bash
npm run dev
```
- http://localhost:3000
- si vous n'êtes pas connectés : http://localhost:3000/auth :

![image](https://cdn.discordapp.com/attachments/827572267420483615/1207683159832010822/image.png?ex=65e08996&is=65ce1496&hm=4f10d67efdf20b18cd1de64b927bfac25f4c681d923c95feb4ab63529deb988d&)

Vous arriverez ensuite sur la page d'accueil :

![image](https://cdn.discordapp.com/attachments/827572267420483615/1207713289988083763/screencapture-localhost-5173-2024-02-15-16_41_31.png?ex=65e0a5a6&is=65ce30a6&hm=55f8fc67a6ce50cf1965078cd1aa8690f0caac89f41d4ba376dbb8c4a169ef33&)

En cliquant sur une des technologies, vous arriverez à une autre page qui vous permettra de vous auto-évaluer :

![image](https://cdn.discordapp.com/attachments/827572267420483615/1207714641124401232/screencapture-localhost-5173-details-React-2024-02-15-16_47_01.png?ex=65e0a6e8&is=65ce31e8&hm=743b0a51b9773c5a9e994c5486e567ee15e3d1b396cab8cb5cf70fb9ba2a1da7&)

L'application fera une moyenne des résultats puis l'enregistrera dans la base de données.
