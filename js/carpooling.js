
 
 function appliquerFiltres() {
    const prixMax = parseFloat(document.getElementById("prixMax").value) || Infinity;
    const dureeMax = parseFloat(document.getElementById("dureeMax").value) || Infinity;
    const noteMin = parseFloat(document.getElementById("noteMin").value) || 0;
    const ecoOnly = document.getElementById("ecoOnly").checked;

    const trajets = document.querySelectorAll(".trajet");

    trajets.forEach(trajet => {
      const prix = parseFloat(trajet.dataset.prix);
      const duree = parseFloat(trajet.dataset.duree);
      const note = parseFloat(trajet.dataset.note);
      const eco = trajet.dataset.eco === "true";

      const visible =
        prix <= prixMax &&
        duree <= dureeMax &&
        note >= noteMin &&
        (!ecoOnly || eco);

      trajet.style.display = visible ? "block" : "none";
    });
  }

  document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const depart = document.getElementById('villeDepart').value.trim().toLowerCase();
    const arrivee = document.getElementById('villeArrivee').value.trim().toLowerCase();
    const date = document.getElementById('dateVoyage').value;

    // Simulation : uniquement Paris → Lyon → aujourd’hui
    const today = new Date().toISOString().split("T")[0];
    const resultats = document.getElementById('resultats');
    const noResults = document.getElementById('noResults');
    const dateSuggestion = document.getElementById('dateSuggestion');

    if (depart === "paris" && arrivee === "lyon" && date === today) {
      resultats.classList.remove("d-none");
      noResults.classList.add("d-none");
    } else {
      resultats.classList.add("d-none");
      noResults.classList.remove("d-none");

      // Suggestion : date la plus proche = aujourd’hui
      dateSuggestion.textContent = today;
    }
  });
