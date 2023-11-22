// Récupérer la div par son ID
var maDiv = document.getElementById("maDiv");

// Faire quelque chose avec la div, par exemple changer son contenu
if (maDiv) {
  maDiv.innerHTML = "Nouveau contenu de ma div";
} else {
  console.error("La div n'a pas été trouvée");
}