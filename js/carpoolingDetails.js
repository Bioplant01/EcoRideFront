
// === Profils conducteurs simulée ===
  const profils = {
    JeanEcolo: {
      nom: "JeanEcolo",
      note: 4.8,
      avis: ["Très sympa, ponctuel", "Voiture propre"],
      voiture: {
        modele: "Zoe",
        marque: "Renault",
        energie: "Électrique",
        couleur: "Blanc",
        places: 2,
        immat: "AA-123-ZZ"
      },
      preferences: ["🐶 Animaux acceptés", "🚭 Non-fumeur", "🎶 Musique autorisée"],
      img: "https://via.placeholder.com/80?text=Jean",
      trajet: {
        depart: "Paris",
        heureDepart: "08h00",
        arrivee: "Lyon",
        heureArrivee: "11h00",
        placesRestantes: 2,
        prix: 20,
        durée: "3h",
        voyageEcologique: true
      }
    },
    LauraConfort: {
      nom: "LauraConfort",
      note: 4.2,
      avis: ["Conduite agréable", "Ponctuelle et sympa"],
      voiture: {
        modele: "208",
        marque: "Peugeot",
        energie: "Essence",
        couleur: "Bleu",
        places: 1,
        immat: "BB-456-YY"
      },
      preferences: ["❌ Animaux non acceptés", "🚭 Non-fumeur", "🔇 Préfère le silence"],
      img: "https://via.placeholder.com/80?text=Laura",
      trajet: {
        depart: "Paris",
        heureDepart: "09h30",
        arrivee: "Lyon",
        heureArrivee: "13h00",
        placesRestantes: 1,
        prix: 22,
        durée: "3h30",
        voyageEcologique: false
      }
    },
    SarahGreen: {
      nom: "SarahGreen",
      note: 5.0,
      avis: ["Conduite agréable", "Ponctuelle et sympa"],
      voiture: {
        modele: "Model S",
        marque: "tesla",
        energie: "Electrique",
        couleur: "Noir",
        places: 1,
        immat: "GA-888-YY"
      },
      preferences: ["❌ Animaux non acceptés", "🚭 Non-fumeur", "🔇 Préfère le silence"],
      img: "https://via.placeholder.com/80?text=Sarah",
      trajet: {
        depart: "Marseille",
        heureDepart: "10h00",
        arrivee: "Nice",
        heureArrivee: "12h30",
        placesRestantes: 3,
        prix: 18,
        durée: "2h30",
        voyageEcologique: true
      }
    }
  };

  // === Utilisateur simulé ===
  let isConnected = true;
  let userCredits = 5;
  let placesRestantes = 2;

  // === Récupération du conducteur depuis l’URL ===
  function getParam(nom) {
    return new URLSearchParams(window.location.search).get(nom);
  }
 
  const conducteurId = getParam("conducteur") || "JeanEcolo";
  const profil = profils[conducteurId];

  // === Remplir la page avec les infos du profil ===
  document.getElementById("nomConducteur").innerText = profil.nom;
  document.getElementById("noteConducteur").innerText = profil.note;
  document.getElementById("noteConducteur2").innerText = profil.note;
  document.getElementById("photoConducteur").src = profil.img;


// Infos trajet
  document.getElementById("heureDepart").innerText = `${profil.trajet.depart} à ${profil.trajet.heureDepart}`;
  document.getElementById("heureArrivee").innerText = `${profil.trajet.arrivee} à ${profil.trajet.heureArrivee}`;
  document.getElementById("placesRestantes").innerText = profil.trajet.placesRestantes;
  document.getElementById("prix").innerText = `${profil.trajet.prix} €`;
  document.getElementById("duree").innerText = profil.trajet.duree;
  document.getElementById("eco").innerText = profil.trajet.voyageEcologique ? "✅" : "❌";



  // Véhicule
  const vehiculeHTML = `
    <li><strong>Modèle :</strong> ${profil.voiture.modele}</li>
    <li><strong>Marque :</strong> ${profil.voiture.marque}</li>
    <li><strong>Énergie :</strong> ${profil.voiture.energie}</li>
    <li><strong>Couleur :</strong> ${profil.voiture.couleur}</li>
    <li><strong>Immatriculation :</strong> ${profil.voiture.immat}</li>
  `;
  document.getElementById("infosVehicule").innerHTML = vehiculeHTML;

  // Préférences
  document.getElementById("preferencesConducteur").innerHTML =
    profil.preferences.map(p => `<li>${p}</li>`).join("");

  // Avis
  document.getElementById("avisConducteur").innerHTML =
    profil.avis.map(avis => `
      <div class="border rounded p-3 mb-2"><p>${avis}</p></div>
    `).join("");

  // === Gérer la participation ===
  document.getElementById("btnParticiper").addEventListener("click", () => {
    const feedback = document.getElementById("feedback");
    feedback.innerText = "";

    if (!isConnected) {
      feedback.innerHTML = `
        Vous devez vous <a href="#">vous connecter</a> ou <a href="#">créer un compte</a> pour participer.
      `;
      return;
    }

    if (placesRestantes <= 0) {
      feedback.innerText = "Ce trajet est complet.";
      return;
    }

    if (userCredits < 2) {
      feedback.innerText = "Vous n’avez pas assez de crédits pour participer.";
      return;
    }

    if (confirm("Ce trajet nécessite 2 crédits. Confirmez-vous votre participation ?")) {
      userCredits -= 2;
      placesRestantes -= 1;
      document.getElementById("placesRestantes").innerText = placesRestantes;
      feedback.classList.remove("text-danger");
      feedback.classList.add("text-primary");
      feedback.innerText = "Participation confirmée. Un email a été envoyé au conducteur.";
      document.getElementById("btnParticiper").disabled = true;
    }
  });
