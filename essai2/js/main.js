let floor = parseInt(prompt("Entrez l'étage où l'ascenseur doit se rendre (de -2 à 30) :"));

if (floor == 0) {
    alert("vous vous trouvez déjà au rdc.");

} else if (-2 <= floor && floor <= 30) {
    alert("Direction l'étage numero : " + floor + " !");

} else {
    alert("L'étage n'existe pas.");
}