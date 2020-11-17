/*
ÉNONCÉ EXERCICE 1 : Réaliser des scripts simples avec JavaScript. [facile]
a) Ecrire une page HTML contenant un script permettant d’afficher « Bonjour tout le monde »
b) Améliorer le script pour qu’il permette de demander le prénom de l’utilisateur 
(méthode prompt()) et afficher « Bonjour ‘votre prénom’».
*/



/* 
Exercice 1 A : Moi

document.write('bonjour tout le monde');
*/


/* 
Exercice 1 B : Moi

let hello = 'Bonjour ',
    name = '',
    result;
    name = prompt('Quel est votre prénom ?');
    result = hello + name;
    console.log(result);
    document.write(result); 
*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 2 : Somme de deux nombres. [facile]
Utiliser les méthodes JavaScript prompt() et alert() pour demander à l’utilisateur deux nombres 
puis afficher leur somme.
*/


/* 
Exercice 2 : Moi

number1 = parseInt(prompt('Choisissez un nombre entre : 1 et 5'));
alert(number1);

number2 = parseInt(prompt('Choisissez un nombre entre : 1 et 5'));
alert(number2);

result = number1 + number2;
console.log(result);
document.write(result); 
*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 3 : Réaliser des conditions (if/else). [moyen]
Ecrire un script demandant à l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré 
(si l’âge est erroné afficher un message d’erreur et redemander de saisir l’âge).
*/

/* 
//Exercice 3 :  // script qui se casse en rentrant la valeur 17 (et uniquement ce nombre), à 3 reprises simultanées

let age = parseInt(prompt("Quel est votre âge ?"));

if (age < 18) {
    alert("vous vous êtes trompés, vous devez être majeur"),
    newage = parseInt(prompt("Resaisissez votre âge :")); 

    for(newage=0; newage<18; newage++){
        alert("vous vous êtes trompés, vous devez être majeur"),
        newage = parseInt(prompt("Resaisissez votre âge :"));

        if (newage >= 18){  
            alert("Vous êtes majeur, vous pouvez rentrer");
        }
    } 

}else{
    alert("Vous êtes majeur, vous pouvez rentrer");
}
*/
//------------------------------------------------------------------------------------------------------------------------------
/* 

//Exercice 3 : Moi : nouveau script revu et qui fonctionne

let age = parseInt(prompt("Quel est votre âge ?"));
if (age < 18) {
    do{
        alert("vous vous êtes trompés, vous devez être majeur");
        newage = parseInt(prompt("Resaisissez votre âge :"));
    }while(newage<18)
    if (newage>=18){
            alert("Vous êtes majeur, vous pouvez rentrer");
    }
}else{
    alert("Vous êtes majeur, vous pouvez rentrer");
} 
*/

//Exercice 3 : Correction 
/*
let userage = parseInt(prompt("Entrer votre âge"));
			if ( (isNaN(userage)) || userage <= 0 || userage > 150) {
				alert("Age non valide");
				document.write("Voulez-vous saisir correctement votre âge ? <a href='index.html'>[ok]</a>" );	
			}
			else {
				alert(userage+ " est valide");
				document.write("Vous avez " +userage+ " ans." );	
			}

*/


//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 4 : boucle do while dans une boucle for, et en utilisant 3 variables. [difficile]
Ecrire une page HTML faisant apparaitre les nombres premiers compris entre 0 et 100.
*/


//moi
/* 
//Exercice 4

let i = nbrPremier;
let n = ;
    for(let i=2; i < n; i++){ 
        if(n%i === 0) return false;
        return n>1;
        do{
            if(return n>1) return true;
            document.write(i," ");
            
        }while(i<100)
    }
    console.log(nbrPremier(2));
*/

//------------------------------------------------------------------------------------------------------------------------------

/*
// Exercice 4, Correction Variante 1

document.write("Les nombres premiers compris entre 0 et 100 sont :<br>");
			//0 et 1 ne sont pas des nombres premiers 
			// On cherche les nombres premiers jusqu'à max
			var max = 100;

			for(i = 2; i <= max; i++) {

				// La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.	
				// La fonction Math.sqrt() renvoie la racine carrée d'un nombre.	
				var j = 1;
				var racine = Math.floor(Math.sqrt(i)); 

				do {
				j++;
				} while(j <= racine && i%j != 0); //Si une seule valeur vaut false alors la condition ne sera pas vérifiée

				if(j > racine) {

				// On affiche les nombres premiers trouvés
				document.write(i +"<br>");
				}

            }
*/
//------------------------------------------------------------------------------------------------------------------------------
 /*       
// Exercice 4, Correction Variante 2 différent de l'énoncé
let a=2;
do{
    res=true;
    for(i=2; i<=a/2;i++){
        if(a%i===0){
            res=false;
        }
    }
    if(res===true){
        document.write(a," ");
    }
    a++
} while(a<=100);
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
// Exercice 4, Correction Variante 3 différent de l'énoncé

for(a=2; a<=100; a++){  //a = un chiifre
    resultat=true;
    for(i=2;i<=a/2; i++){
        if(a%i===0){            //a%i===0 : le modulo de a identique à 0... le modulo est le reste de la divison de a par 2 (5/2 = il reste 1)... ce n'est donc pas un nbr premier
            resultat=false;
        }
    }
    if (resultat===true){       //si la division par 2 est vrai, le chiffre n'est pas un nombre premier
        document.write(a," ");
    }
}
*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 5 : boucle for (insertion des balises HTML dans les scripts). [moyen]
Ecrire une page HTML faisant apparaitre la table de multiplication pour les entiers 
compris entre 1 et 9 et présenter le résultat dans un tableau [10 x 10].
*/

/*
//Exercice 5, Correction Variante 1

document.write("<center>");
		//Mettre un titre pour la table
		document.write("<caption>Table de multiplication</caption>"); //La balise <caption> permet d'associer un commentaire à une table html.
		//créer la table
		document.write("<table border=1>");
		//créer la première ligne 
		document.write("<tr><td>","x","</td>");
		for(var i=1;i<=9;i++)
		document.write("<td>",i,"</td>");
	
		//créer les autres lignes 
		for(var i=1;i<10;i++)
		{
	    //Créer la ligne numéro i 
		document.write("<tr>");
		document.write("<td>",i,"</td>");
			for(var j=1;j<=9;j++)
			{
				//Créer la colonne numéro j 
				document.write("<td>",i*j,"</td>");
			}
		document.write("</tr>");
		}
        document.write("</table>");
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
//Exercice 5, Correction Variante 2, plus compliqué

var th = "<th>";
		var th_ = '</th>';
		var tr = '<tr>';
		var tr_ = '</tr>';
		var td = '<td>';
		var td_ = '</td>';

		document.write("<table border=1");

 		for (i=0;i<10;i++) {
   			document.write(tr)
   			for (j=0;j<10;j++) {
     			if (!j) {
       				document.write(th);
       				if (!i) {document.write('X');}
       				else {document.write(i);}
       				document.write(th_);
     			}
     			else {
       				if (!i) {
         				document.write(td);
         				document.write(j);
         				document.write(td_);
       				}
       				else {
         				document.write(td);
         				document.write(i*j);
         				document.write(td_);
       				}
     			}
   			}
   			document.write(tr_);
 		}
 		document.write('</table>');
*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 6 : (S’amuser avec un bouton). [facile]
Ecrire une page HTML contenant un formulaire. Ce formulaire contient un bouton. 
Le click sur le bouton engendre la modification de la couleur de l’arrière plan de la page. 
Utiliser la commande suivante : document.bgColor= "#fffggf".
*/

/*
//Exercice 6, Correction

function modif() {
    document.bgColor="#fffggf";
}

*/

//------------------------------------------------------------------------------------------------------------------------------