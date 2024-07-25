--------------------------------------------

# Maui_Blazor_Angular
Appli de départ pour une interop Maui Blazor avec Angular

Pour que tout fonctionne bien : 
- installer chocolatey sur la machine (si execution sur Windows)
https://chocolatey.org/install

- installer nodejs :  cf : 
https://community.chocolatey.org/packages/nodejs.install
depuis un powershell

une fois installé, toujours dans le powershell tapez 
>npm

si il y a une erreur faites ceci :
https://stackoverflow.com/questions/63423584/how-to-fix-error-nodemon-ps1-cannot-be-loaded-because-running-scripts-is-disabl

- tapez 
> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser 
(en cas d'erreur seulement)

- Puis installez angular : 
https://angular.dev/tools/cli/setup-local

> npm install -g @angular/cli


Installez VSCode si ce n'est pas déjà fait : 
https://code.visualstudio.com/

Une fois vscode installé, vous pouvez récupérer le projet et l'ouvrir depuis VSCode

Le but va être de développer la partie js depuis VSCode et toute la partie plus orientée C# et Blazor/Maui depuis Visual Studio

Lorsque la partie js semble OK, on peut ensuite faire une commande dans le terminal de vscode pour vérifier que tout est OK (dans la barre d'outils en haut de VScode : Terminal -> New Terminal, ou bien ctrl+shift+ù)

- taper 
> npm i
(à taper dans la racine du projet, indiquée par un ./ dans mes explications)

cela installera les dépendances du projet pour Angular

- puis taper 
> npm start

cela va lancer le serveur en local sur le port 4200

pour tester le site si votre navigateur n'a pas automatiquement ouvert la page cliquer ici : 
- localhost:4200
(Accès au site)

Une fois que les modifications vous conviennent : 

- taper 
> ng build

Cela va générer automatiquement des fichiers .js qui sont issus des fichiers présents dans ./src/app/app.component (/.css, /.html, /.spec.ts, /.ts)
Ce sont ces 4 fichiers qui vont être traités par le index.html qui contient la Webview de Blazor !

récupérer les documents générés par le build dans : ./dist/maui-po-csynapse/browser
copier uniquement les main-XXXXX.js , les poyfills-XXX.js et les styles-XXXX.css ainsi que les runtimes-XXX s'il y en a.

Collez les dans ./wwwroot 

puis allez dans le fichier index.html et changez les référence des scripts du fichier avec les nouvelles clés XXX des fichiers récupérés.
Si les noms sont identiques aux anciens récupérez quand même les fichiers car les fichiers .ts ont quand même été mis à jour.



Infos pratiques :

Partie js => à générer depuis le répertoire ./src/ et à build depuis VSCode (l'intéropérabilité entre JS et MAUI se fait dans le fichier ./wwwroot/mauiinterop.js 
jsMethods.checkNumber (méthode js à appeler côté .ts/.js) 
Dedans on fait cette ligne là : DotNet.invokeMethodAsync("MauiPoCSynapse", "CheckNumber", parseInt(number))
qui va aller appeler la méthode CheckNumber en .Net Maui du projet MauiPoCSynapse et lui passer le paramètre int

partie C# => côté MAUI/Blazor du code, se trouve dans : ./App.xaml.cs (pour cet exemple) : 
Il faut absolument avoir le using suivant pour que l'intéropérabilité fonctionne : 
using Microsoft.JSInterop;

puis mettre le tag suivant devant les méthodes censées être appelées par le JS : 
   [JSInvokable]
   
--------------------------------------


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.  




