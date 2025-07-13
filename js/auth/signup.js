//recuperation des éléments du DOM
const inputPseudo = document.getElementById("PseudoInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidatePassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-creercompte");

// Ajout d'un écouteur d'événement 
inputPseudo.addEventListener("keyup", validateForm); 
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidatePassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const pseudoOK = validateRequired(inputPseudo);
    const mailOK = validateMail(inputMail);
    const passwordOK = validatePassword(inputPassword);
    const passwordConfirmOK = validateConfirmationPassword(inputPassword, inputValidatePassword);
    
    
    if(pseudoOK && mailOK && passwordOK && passwordConfirmOK){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }    
}


//Function permettant de valider l'email
function validateMail(input){
    // Regex pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    // Vérification si l'email correspond au regex
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }  
}

//Function permettant de valider le mot de passe
function validatePassword(input){
    // Regex pour valider le mot de passe
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordUser = input.value;
    // Vérification si le mot de passe correspond au regex
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
//Function permettant de valider le mot de passe de confirmation
function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    // Vérification si le mot de passe de confirmation correspond au mot de passe
    if(inputPwd.value === inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
    }
}

 //Function permettant de valider les champs requis
function validateRequired(input){
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid"); 
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

