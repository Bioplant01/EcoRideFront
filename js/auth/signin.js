
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

// Fonction pour vérifier les identifiants
function checkCredentials() {
    // Ici, il faudra appeler l'API pour vérifier les credentials en BDD
    if (mailInput.value == "test@mail.com" && passwordInput.value === "123") {
        // Il faudra récupérer le brai token 
        const token = "sfgsdgsdgsdgsgjklmlokjbhfojhholoh"// Simuler un token reçu de l'API
        setToken(token); // Stocker le token en cookie
        // Simuler un rôle d'admin
        setCookie(roleCookieName, "admin", 7); 
        // Redirection vers la page d'accueil 
        window.location.href = "/"; // Remplacez par l'URL de votre page

    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");

    }
}