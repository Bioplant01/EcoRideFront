
const tokenCookieName = "accesstoken";
const roleCookieName = "role";
const signoutBtn = document.getElementById("signout-btn");


signoutBtn.addEventListener("click", signout);

function getRole() {
    return getCookie(roleCookieName);
}

// Fonction pour déconnecter l'utilisateur
function signout() {
    eraseCookie(tokenCookieName); // Effacer le cookie du token
    eraseCookie(roleCookieName); // Effacer le cookie du rôle
    window.location.reload(); // Recharger la page pour mettre à jour l'état de connexion
}

// Fonction pour envoyer une requête de connexion
function setToken(token){
    setCookie(tokenCookieName, token, 7);
}

// Fonction pour récupérer le token depuis le cookie
function getToken(){
    return getCookie(tokenCookieName);
}

// Fonction pour définir un cookie
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Fonction pour récupérer un cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Fonction pour effacer un cookie
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// Fonction pour vérifier si l'utilisateur est connecté
function isConnected(){
    if(getToken() == null || getToken == undefined){
        return false;
    }
    else{
        return true;
    }
}
   
/*
disconnected
connected (admin, utilisateur, employé)
    admin
    utilisateur
    employé
*/

// Fonction pour afficher ou masquer des éléments en fonction du rôle de l'utilisateur
function showAndHideElementsForRoles(){
    const userConnected = isConnected();
    const role = getRole();

    let allElementsToEdit = document.querySelectorAll('[data-show]');

    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected': 
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected': 
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin': 
                if(!userConnected || role != "admin"){
                    element.classList.add("d-none");
                }
                break;
            case 'utilisateur': 
                if(!userConnected || role != "utilisateur"){
                    element.classList.add("d-none");
                }
                break;
            case 'employé': 
                if(!userConnected || role != "employé"){
                    element.classList.add("d-none");
                }
                break;                
        }
    })
}


