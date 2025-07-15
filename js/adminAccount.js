    //recuperation des éléments du DOM
const inputNom = document.getElementById("NomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const btnValidation = document.getElementById("btn-creercompte");

// Ajout d'un écouteur d'événement 
inputNom.addEventListener("keyup", validateForm); 
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
    
    
    
    
    const ctx1 = document.getElementById('ridesChart').getContext('2d');
    const ridesChart = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['04/07', '05/07', '06/07', '07/07', '08/07'],
        datasets: [{
          label: 'Covoiturages',
          data: [12, 18, 10, 25, 19],
          backgroundColor: 'rgba(25, 135, 84, 0.2)',
          borderColor: '#198754',
          borderWidth: 2
        }]
      }
    });

    const ctx2 = document.getElementById('creditsChart').getContext('2d');
    const creditsChart = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['04/07', '05/07', '06/07', '07/07', '08/07'],
        datasets: [{
          label: 'Crédits gagnés',
          data: [24, 36, 20, 50, 38],
          backgroundColor: '#0d6efd'
        }]
      }
    })

    
//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOK = validateRequired(inputNom);
    const mailOK = validateMail(inputMail);
    const passwordOK = validatePassword(inputPassword);
    
    
    if(nomOK && mailOK && passwordOK){
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
