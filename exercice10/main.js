function changerClasse() {
    var monElement = document.getElementById('Div1');

    // Vérifier la classe actuelle
    if (monElement.className == 'blanc') {
        // Si la classe actuelle est 'blanc', changer à 'noir'
        monElement.className = 'noir';
    } else {
        // Sinon, changer à 'blanc'
        monElement.className = 'blanc';
    }
}

function changerVisibilite() {
    var maDiv = document.getElementById('Div2');

    // Vérifier la visibilité actuelle
    if (maDiv.className == 'visible') {
      // Si la visibilité actuelle est 'visible', la rendre 'invisible'
      maDiv.className = 'secret';
    } else {
      // Sinon, la rendre 'visible'
      maDiv.className = 'visible';
    }
  }