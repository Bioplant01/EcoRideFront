import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/signin", "Connexion", "/Pages/auth/signin.html", ["disconnected"], "/JS/auth/signin.js",),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html", ["disconnected"], "/JS/auth/signup.js",),
    new Route("/account", "compte", "/Pages/account.html", ["utilisateur", "employé", "admin"], "/JS/account.js",),
    new Route("/carpooling", "Covoiturage", "/Pages/carpooling.html", [], "/JS/carpooling.js",),
    new Route("/editPassword", "Modifier mot de passe", "/Pages/auth/editPassword.html", ["utilisateur", "employé", "admin"]),
    new Route("/carpoolingDetails", "Détails du covoiturage", "/Pages/carpoolingDetails.html", [], "/JS/carpoolingDetails.js"),
    new Route("/employeeAccount", "Espace Employé", "/Pages/employeeAccount.html", ["employé","admin"],),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";