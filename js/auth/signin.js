
const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");
const signinForm = document.getElementById("signinForm");

btnSignin.addEventListener("click", checkCredentials);

function normalizeRole(rawRole) {
    return rawRole?.toLowerCase().replace("role_", "") || "";
}


// Fonction pour vérifier les identifiants via l'API
async function checkCredentials() {
    const email = mailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch(apiUrl+"login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error("Identifiants incorrects");
        }

        const data = await response.json();

        // Stockage du token et des infos utilisateur en cookies
        setCookie("token", data.token, 7);
        setCookie("role", normalizeRole(data.role), 7);
        setCookie("user_id", data.id, 7);

        // Redirection vers la page d’accueil
        window.location.href = "/";
    } catch (error) {
        console.error("Erreur de connexion :", error);
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}