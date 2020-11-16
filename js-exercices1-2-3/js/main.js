/* Exercice 1 A :

document.write('bonjour tout le monde');
*/


/* Exercice 1 B :

let hello = 'Bonjour ',
    name = '',
    result;
    name = prompt('Quel est votre prénom ?');
    result = hello + name;
    console.log(result);
    document.write(result); 
*/

     
/* Exercice 2 : 

number1 = parseInt(prompt('Choisissez un nombre entre : 1 et 5'));
alert(number1);

number2 = parseInt(prompt('Choisissez un nombre entre : 1 et 5'));
alert(number2);

result = number1 + number2;
console.log(result);
document.write(result); 
*/


//Exercice 3 :

let age = parseInt(prompt("Quel est votre âge ?"));

if (age < 18) {
    alert("vous vous êtes trompés, vous devez être majeur"),
    newage = parseInt(prompt("Resaisissez votre âge :"));

    for(let newage=0; newage<18; newage++){
        alert("vous vous êtes trompés, vous devez être majeur"),
        newage = parseInt(prompt("Resaisissez votre âge :"));

        if (newage >= 18){  
            alert("Vous êtes majeur, vous pouvez rentrer");
        }
    }

}else{
    alert("Vous êtes majeur, vous pouvez rentrer");
}