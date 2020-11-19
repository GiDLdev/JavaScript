/* 

//EXERCICES DU COURS 1B -> DEMO (lundi 16nov matin)

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
//EXERCICES DU COURS 2A -> DEMO (lundi 16nov après-midi)

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

//EXERCICES DU COURS 2B -> DEMO 2  (mardi 17nov matin)

/*
ÉNONCÉ EXERCICE 1 : Modifier les styles avec un input de type range. [moyen]
1. Créer un document html contenant des champs de type range et un titre dans un tableau html (voir l'exemple sur la figure ci-dessous) :
2. Créer le script qui permet de changer les propriétés (background,padding,height,width,arrondi,rotation) 
du titre en milieu en changeant leurs valeurs via les inputs de type range.
*/
/*
function update(elem) {
    let p1=document.getElementById("text");

    if (elem.getAttribute("name") == "color") {
        p1.style.background = "rgb(" + elem.value + "," + elem.value + "," + elem.value + ")";
        let c= 255 - elem.value;
        p1.style.color = "rgb(" + c + "," + c + "," + c + ")";
    }
    else if (elem.getAttribute("name") == "padding") {
        p1.style.padding= elem.value  +"px";

    }
    else if (elem.getAttribute("name") == "height") {
        p1.style.height = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "width") {
        p1.style.width = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "radius") {
        p1.style.borderRadius = elem.value  +"px";
    }
    else if (elem.getAttribute("name") == "rotation") {
        p1.style.transform = "rotate(" + elem.value  + "deg)";
    }                

}

*/



//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 2 : soit le document html suivant : [facile]
1. Ecrire la fonction changer_style qui permet de modifier le style du paragraphe en cliquant sur le bouton par : 
un texte de couleur blanche.
un background rouge.
une bordure noire pointillée de 2px.
un retrait de 5px.
2. Définir les propriétés précédentes dans une classe "active" et modifier la fonction changer_style de telle façon qu'elle ajoute 
la classe "active" au paragraphe.
*/

/*
//2A :
function changer_style()
{
    let p = document.getElementById("p");
    p.style.color = "white";
    p.style.backgroundColor = "red";
    p.style.border = "2px dashed black";
    p.style.padding = "5px";
}

//2B :
function changer_style() {
    let p = document.getElementById("p");
    p.classList.toggle("active");
}

*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 3 : Créer un chronomètre composé d'un afficheur et 3 boutons :
un bouton "start" pour lancer le chronomètre , un bouton "stop" pour l’arrêter et un bouton "reset" pour le remettre à zéro. [moyen]
1. Créer une fonction "start" qui appelle d'une manière répétitive la fonction update_chrono via la fonction setInterval avec une cadence de 100 ms.
2. Créer une fonction "update_chrono()" qui permet d’incrémenter le nombre de millisecondes , secondes , minutes , et des heures.
3. Créer une fonction "stop" qui arrête le traitement de setInterval.
4 Créer une fonction "reset" qui remet les valeurs et l'affichage à 0.


let sp = document.getElementsByTagName("span");
let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let t;
let ms = 0, s = 0, mn = 0, h = 0;


// fonction start 

function start(){
    t = setInterval(update_chrono,100);
    btn_start.disabled = true; //désactive le bouton start
}   

// fonction update_chrono

function update_chrono() {
    ms+=1;

    if(ms==10){
        ms=1;
        s+=1;
    }
    if(s==60){
        s=0;
        mn+=1;
    }
    if(mn==60){
        mn=0;
        h+=1;
    }
    
    sp[0].innerHTML =h+" h";
    sp[1].innerHTML =mn+" min";
    sp[2].innerHTML =s+" s";
    sp[3].innerHTML =ms+" ms";
}

// fonction stop

function stop() {
    clearInterval(t); // Arrête le cadencement
    btn_start.disabled=true; //désactive le bouton start
}

// fonction reset 

function reset() {
    clearInterval(t); // Arrête le cadencement
    btn_start.disabled=false; //réactive le bouton start
    ms=0,s=0,mn=0,h=0;

    sp[0].innerHTML =h+" h";
    sp[1].innerHTML =mn+" min";
    sp[2].innerHTML =s+" s";
    sp[3].innerHTML =ms+" ms";

}


*/
//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 4 : Manipuler les chaines de caractères. [facile]
1. Créer une fonction qui permet de tester si une chaîne de caractère passée en paramètre commence par une lettre majuscule ou 
minuscule entre 'a' et 'd'.
2. Créer une fonction qui renvoie 'true' lorsque'une chaîne contient un seul caractère '@' sinon renvoie 'false'.
3. Créer une fonction qui renvoie 'true' lorsque'une chaîne contient au moins un chiffre sinon renvoie 'false'.
4. Créer une fonction qui remplace les chiffre par le caractère '*'.
5. Créer un script qui va utiliser ces fonctions.
*/

/*

function str_fisrt_letter(ch){
    //L'expression régulière qui ^[a-d] pour tester si la chaîne commence par une lettre entre a et le modificateur i pour ne pas faire de différence entre majuscules et minuscules   
	let pattern =/^[a-d]/i; // Expression régulière Regex
    let res = document.getElementById("res1");
	if(pattern.test(ch)){
		res.innerHTML=ch+" chaîne valide  commence par une lettre entre a et d ";
	}
	else {
		res.innerHTML=ch+" chaîne invalide ";
	}
}

function str_email(ch){
	let res = document.getElementById("res2");
	//La fonction split(@) transforme la chaîne en tableau de sous chaines à partir du caractère séparateur ici '@' .Si c.lenght=1 donc la chaîne ne contient pas @ et si c.lenght>2 alors il contient plusieurs '@' 
	var c =ch.split('@');
	if(c.length==2){
		res.innerHTML=ch+" chaîne valide : contient un seul caractère " + car;
	}
	else {
		res.innerHTML="chaîne invalide!";
	}
}


function str_number(ch){
    let res = document.getElementById("res3");
	let pattern =/\d/; // Expression régulière Regex
	 //La fonction search peut prendre en paramètre une expression régulière
   if(ch.search(pattern)!=-1){
	  res.innerHTML=ch+" chaîne valide : contient un chiffre  ";
   }
   else {
		res.innerHTML=ch+" chaîne invalide : ne contient pas un chiffre  ";
	}
}


function str_replace(ch){
   let res = document.getElementById("res4");
	 //La fonction replace peut prendre en paramètre une expression régulière ici le modificateur g pour un recherche globale afin de remplacer tous les chiffres de la chaîne
	 ch2=ch.replace(/\d/g,"*");
	 res.innerHTML=ch2;
   
}

*/

//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 5 : Tirage au sort des noms [facile]
Ecrire un script composé des fonctions suivante :
1. Une fonction qui remplit un tableau par des noms saisis par l'utilisateur via une boite de dialogue, cette fonction sera appelée 
au clic sur un bouton nommé "Ajouter_nom".
Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur clique sur le bouton "tirage au sort".
*/

/*

let tab = new Array(); // Objet tableau
//let tab = []; //tableau vide

function add_name(){
    tab.push(prompt("Saisir un nom"));
}

function random(){
    if(tab.length>0){
        let rand = Math.floor(Math.random()*tab.length); // Math.random() renvoie un nombre flottant pseudo-aléatoire compris dans l'intervalle [0, 1[
        alert("Le gagnant est :"+tab[rand]);
    }

    else alert("Ajouter 1 nom au minimum");
}




*/
//------------------------------------------------------------------------------------------------------------------------------

/*
ÉNONCÉ EXERCICE 6 : Afficher la table de multiplication d'un entier [facile]
1. Ecrire un script qui permet d'afficher la table de multiplication d'un nombre entier n:
La valeur de n sera demandée à l’utilisateur via une boite de dialogue.
En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur.
L'affichage de résultat doit être encadré par un tableau html.
2. Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10.
*/

/*
//6A :

let a;
		 do{
						a=prompt("Saisissez un nombre entier :"); // L'instruction est exécutée au moin une fois
		 }while(isNaN(a) || a%1!==0 || a==0); // isNaN(a) renvoie true si a est non numérique 
									  // a%1!==0 permet de tester si a est un nombre entier 
									  // a==0 permet de tester si a est différent de 0 
									  document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
									  document.write("<table border >");
							 
									  for(let i=1;i<=10;i++){
										 document.write("<tr>");
										 document.write("<td>"+a+" x "+i+" =</td>");
										 document.write("<td>"+a*i+"</td>");
										 document.write("</tr>");
									  }
									  document.write("</table>");

*/
/*
//6B :

for(let j=1;j<=10;j++){
    document.write("<h4>La table de multiplication du nombre : "+j+"</h4>")
    document.write("<table border>");
    for(let i=1;i<=10;i++){
        document.write("<tr>");
        document.write("<td>"+j+" x "+i+" =</td>");
        document.write("<td>"+j*i+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

*/
//------------------------------------------------------------------------------------------------------------------------------

//EXERCICES DU COURS 3 -> DEMO 3 (mercredi 18nov matin)

/*
ÉNONCÉ EXERCICE 1 : L’objet String - inverser un nombre [facile]
Ecrire une fonction javascript qui inverse un nombre.
Exemple : 2016 => résultat 6102
*/

/*
function reverse_a_number(number) {
    number = number + "";
    return number.split("").reverse().join("");
;}

document.write(reverse_a_number(2016));
ou
alert(reverse_a_number("2016"));
console.log

// let nbr,nbrFinal="",length;
//         nbr=prompt("Entré un nombre: ");
//         length=nbr.length-1;
//         for(i=1;i<=nbr.length;i++){
//             nbrFinal+=nbr.charAt(length);
//             length=length-1;
//         }
//         document.write(nbrFinal);


// function reversedString(stringToReverse) {
//     var string2Array = stringToReverse.split('');
//     var gnirts2Array = string2Array.reverse();
//     var reversedString = gnirts2Array.join("");
//     return reversedString; 
// }
// alert(reversedString("2016"));
// alert(reversedString("2019"));
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 2 : Les expressions régulières - palindrome [facile]
Ecrire une fonction javascript qui vérifie si une chaîne de caractères est un palindrome.
Vérifier si php, Éric notre valet alla te laver ton ciré et javascript se lisent dans les deux sens ( de droite à gauche ou de gauche à droite).
*/

/*
// Ecrire une fonction Javascript qui vérifie si une chaîne passée en argument est un palindrome.

function check_Palindrome(str_entry){
    // Changer la casse des caractères de la chaîne en minuscule et supprimer les caractères non-alphanumériques.  
    let chaine = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,''); 
    let nombrecar = 0;
    // alert(chaine);

    // Vérifier si la chaîne de caractères est vide.
    if (chaine===""){

        document.write("ceci n'est pas un palindrome"); 
        return false;
    }
            
    // Vérifier si la longueur de la chaîne de caractères est paire ou impaire. 
if ((chaine.length) % 2 === 0){
    nombrecar = (chaine.length) / 2;
    
}
else {
    // Si la longueur de la chaîne de caractères est 1 alors c'est un palindrome.	  
        if (chaine.length === 1){
            document.write(str_entry +"c'est un palindrome ");

            return true;
        }
        else {
    // Si la longueur de la chaîne de caractères est impaire ignorer le caractère du milieu
        nombrecar = (chaine.length-1) / 2	             
    }
}    
    // A partir du premier et du dernier caractère vérifier chacun des caractères suivants dans une boucle for.
    for (i=0 ; i<nombrecar ; i++){
    // Comparer les caractères et s'ils ne correspondent pas, ce n'est pas un palindrome
    
    if(chaine[i] != chaine.slice(-1-i)[0]) 	{
        document.write(str_entry +" : ce n'est pas un palindrome<br />");

        return false;
     }
}
document.write(str_entry +" : c'est un palindrome<br />");
return true;  
}

    check_Palindrome('php');
    check_Palindrome('éric notre valet alla te laver ton ciré');
    check_Palindrome('javascript');
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 3 : L’objet Math - toutes les combinaisons d'une chaîne de caractères [difficile]
Ecrire une fonction javascript qui génère toutes les combinaison de caractères d'une chaîne
Exemple : chat => résultat c h ch a ca ha cha t ct ht cht at cat hat chat
*/

/*
// Ecrire une fonction Javascript qui génère toutes les combinaisons d'une chaîne de caractères.  
function substrings(str1)  
{  
var array1 = [];  
  for (var x = 0, y = 1; x < str1.length; x++,y++)   
  {  
   array1[x]=str1.substring(x, y);  
    }  
var combi = [];  
var temp= "";  
var slent = Math.pow(2, array1.length);  
  
for (var i = 0; i < slent ; i++)  
{  
    temp= "";  
    for (var j = 0; j < array1.length ; j++) {  
        if ((i & Math.pow(2,j))){   
            temp += array1[j];  
        }  
    }  
    if (temp !== "")  
    {  
        combi.push(temp);  
    }  
}  
  console.log(combi.join("\n"));  
  document.write(combi.join("\n"));	
}  
  
substrings("chat"); 
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 4 : L’objet String - classer les lettres dans l'ordre alphabétique [facile]
Ecrire une fonction javascript qui retourne toutes les lettres d'une chaîne de caractères dans l'ordre alphabétique
Exemple : développeur => deeloppruvé
*/

/*
function alphabet_order(str) {
    return str.split("").sort().join("");
}

document.write(alphabet_order('développeur'));
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 5 : L’objet String - Mettre la première lettre d'un mot en majuscule [facile]
Ecrire une fonction qui met en majuscule la première lettre de chaque mot d'une phrase
Exemple : le corbeau et le renard => Le Corbeau Et Le Renard
*/

/*
function upperCase(str) {

    let array1 = str.split(' ');
    // let arraynew = [];
    let array2= new Array;

    for(let i=0; i<array1.length; i++){
        // array2[i]= array1[i].charAt(0).toUpperCase()+ array1[i].substr(1);
        
        array2.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));    
    }

    return array2.join(' ');
}

document.write(upperCase("le corbeau et le renard"));

// let myString=prompt("Entrée une chaine de caractère: ");
//let array=myString.split(" "),final="";
//for(i=0;i<array.length;i++){
//   final+=array[i].charAt(0).toUpperCase() +array[i].substring(1,array[i].length)+" ";[]
//}
//document.write(final);
*/
//------------------------------------------------------------------------------------------------------------------------------
/*
ÉNONCÉ EXERCICE 6 : Les expressions régulières - Trouver le plus grand mot [facile]
Ecrire une fonction qui retourne le plus grand mot d'une phrase
Exemple : Tutorial Développement Web => Développement
*/

/*
function find_longest_word(str)
{
  const regex = /\w[a-z\u00E0-\u00FC]{0,}/gi; // récupère les mots dans str
  //const regex = /[A-Z]/gi; // récupère les lettres
  let array1 = str.match(regex);
  let result = array1[0];
  //alert(array1);

  for(let x = 0 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
      result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Tutorial Développement Web'));
document.write(find_longest_word('Tutorial Développement Web'));
*/
//------------------------------------------------------------------------------------------------------------------------------
