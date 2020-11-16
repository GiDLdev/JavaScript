let drawer = parseInt(prompt('Choisissez le tirroir à ouvrir (1 à 4 : '));

switch(drawer) {
    case 1:
        alert("contient divers outils pour dessiner : papier, des crayons, etc");
        break;
    case 2:
        alert("contient du matériel informatique");
        break;
    case 3:
        alert("Ah ? ce tiroir est fermé à clé !");
        break;
    case 4:
        alert("aucune information");
        break;
    default:
        alert("le meuble ne contient que 4 tirroirs");
}