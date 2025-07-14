export default class Route {
    constructor(url, title, pathHtml, autorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.autorize = autorize;
    }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs non connecté
["admin"] -> Réservé aux administrateurs
["utilisateur"] -> Réservé aux utilisateurs
["employé"] -> Réservé aux employés
["admin", "utilisateur", "employé"] -> Réservé aux administrateurs, utilisateurs et employés
*/