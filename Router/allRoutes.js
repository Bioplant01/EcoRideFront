import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html"),
    new Route("/signin", "Connexion", "/Pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/Pages/auth/signup.html"),
    new Route("/account", "compte", "/Pages/account.html"),
    new Route("/carpooling", "Covoiturage", "/Pages/carpooling.html"),
    new Route("/editPassword", "Modifier mot de passe", "/Pages/auth/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "EcoRide";