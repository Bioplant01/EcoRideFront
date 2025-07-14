
 
// Fonction pour basculer l'affichage du formulaire de véhicule et de trajet
  function toggleVehicleForm() {
    
    const role = document.getElementById('roleSelector').value;
    const demarrerBtn = document.getElementById('demarrerBtn');
    const validationSection = document.getElementById('validationSection');
    const vehicleForm = document.getElementById('vehicleForm');
    const tripForm = document.getElementById('tripForm');

    if (role === 'chauffeur') {
      demarrerBtn.classList.remove('hidden');
      validationSection.classList.add('hidden');
    } else if (role === 'passager') {
      demarrerBtn.classList.add('hidden');
      validationSection.classList.remove('hidden');
    } else if (role === 'les-deux') {
      demarrerBtn.classList.remove('hidden');
      validationSection.classList.remove('hidden');
    }
   

    if (role === 'passager') {
      vehicleForm.classList.add('d-none');
      tripForm.classList.add('d-none');
    } else {
      vehicleForm.classList.remove('d-none');
      tripForm.classList.remove('d-none');
    }

    // Cacher la section de validation par défaut
    validationSection.classList.add('hidden');
  }

  // Lancer une fois au chargement pour cacher/afficher correctement
  document.addEventListener("DOMContentLoaded", toggleVehicleForm);




// Gestion de la modale pour ajouter un nouveau véhicule
  const vehiculeSelect = document.getElementById('vehiculeSelect');
  const newVehicleForm = document.getElementById('newVehicleForm');

  // Ouvre la modale si "Ajouter un nouveau véhicule" est sélectionné
  vehiculeSelect.addEventListener('change', function () {
    if (this.value === "new") {
      const modal = new bootstrap.Modal(document.getElementById('addVehicleModal'));
      modal.show();
    }
  });

  // Gère la soumission du nouveau véhicule
  newVehicleForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const marque = document.getElementById("nv_marque").value;
    const modele = document.getElementById("nv_modele").value;

    // Crée une nouvelle option
    const newOption = new Option(`${modele} - ${marque}`, `${modele}-${marque}`);
    newOption.selected = true;

    // Ajoute au select
    vehiculeSelect.add(newOption);

    // Ferme la modale
    const modal = bootstrap.Modal.getInstance(document.getElementById('addVehicleModal'));
    modal.hide();

    // Reset les champs
    newVehicleForm.reset();
  });


  // Gestion des crédits utilisateur
  let userCredit = 20;

  // Fonction pour mettre à jour l'affichage des crédits
  function annulerCovoiturage(button, isDriver) {
    if (!confirm("Es-tu sûr de vouloir annuler ce covoiturage ?")) return;

    const row = button.closest('tr');
    const creditsUsed = parseInt(row.querySelector('.credits').textContent);
    const placesCell = row.querySelector('.places');

    // Mise à jour crédit
    userCredit += creditsUsed;
    document.getElementById("userCredit").textContent = userCredit;

    // Mise à jour places (simulé : on ajoute 1 place)
    const placesRestantes = parseInt(placesCell.textContent) + 1;
    placesCell.textContent = placesRestantes;

    // Notification simulée
    if (isDriver) {
      alert("🚨 En tant que conducteur, vous avez annulé ce trajet. Un mail a été envoyé aux passagers.");
    } else {
      alert("✅ Votre participation a été annulée.");
    }

    // Suppression de la ligne
    row.remove();
  }


    // Gestion des trajets
  let chauffeurCredit = 10;

  function demarrerTrajet(btn) {
    const row = btn.closest('tr');
    const statusCell = row.querySelector('.status');

    // Passage en mode "en cours"
    statusCell.textContent = 'En cours';
    btn.textContent = 'Arriver à destination';
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-success');
    btn.onclick = function() { terminerTrajet(btn); };
  }
  
  // Fonction pour terminer le trajet
  function terminerTrajet(btn) {
    const row = btn.closest('tr');
    const statusCell = row.querySelector('.status');
    const role = document.getElementById("roleSelector").value;

    statusCell.textContent = 'Terminé';
    btn.disabled = true;
    btn.textContent = 'Terminé';
   
    // Montrer la validation uniquement si l'utilisateur est passager
    if (role === "passager" || role === "les-deux") {
    document.getElementById('validationSection').classList.remove('hidden');

    alert("✉️ Une notification a été envoyée aux passagers pour qu'ils valident le trajet.");
  }
}

    // Fonction pour afficher la section d'avis ou de problème
  function toggleAvis() {
    const choix = document.getElementById('trajetStatus').value;
    document.getElementById('avisSection').classList.add('hidden');
    document.getElementById('problemeSection').classList.add('hidden');

    if (choix === 'ok') {
      document.getElementById('avisSection').classList.remove('hidden');
    } else if (choix === 'probleme') {
      document.getElementById('problemeSection').classList.remove('hidden');
    }
  }

  // Fonction pour valider le trajet
  function validerTrajet() {
    const statut = document.getElementById('trajetStatus').value;

    if (statut === 'ok') {
      const note = document.getElementById('note').value;
      alert(`⭐ Merci pour votre note de ${note}/5. L'avis sera soumis à validation.`);
      chauffeurCredit += 5; // exemple
      document.getElementById('creditChauffeur').textContent = chauffeurCredit;
    } else if (statut === 'probleme') {
      const pb = document.getElementById('problemeCommentaire').value;
      if (!pb.trim()) {
        alert("Veuillez décrire le problème.");
        return;
      }
      alert("🚨 Votre signalement a été transmis à un employé. Le crédit du chauffeur est temporairement suspendu.");
    }

    // Réinitialiser le formulaire
    document.getElementById('validationSection').classList.add('hidden');
  }

 // Fonction pour annuler un covoiturage
  function annulerCovoiturage(btn, isDriver) {
    const row = btn.closest('tr');
    row.remove();
    alert(isDriver ? "Le trajet a été annulé par le conducteur." : "Votre réservation a été annulée.");
  }