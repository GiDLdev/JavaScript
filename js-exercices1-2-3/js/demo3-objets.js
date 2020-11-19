
/* Définition d'un Objet Person dans un tableau avec des paramètres (= propriétés) définies pour chaque élément (personne) individuellement

let myArray = ['Sébastien','Laurence','Ludovic','Pauline','Guillaume'];

let PersonArray = [ 
    {
    nick: 'Sébastien',
    age: 25,
    sex: 'm',
    parent: 'aîné',
    work: 'Développeur'
    },{
    nick: 'Laurence',
// ... // et ainsi de suite...
    },

];  

*/


// Définition de l’objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;       // ce sont les différentes propriétés (= paramètres) de l'objet Person
    this.age = age;
    this.sex = sex;
    this.parent = parent; 
    this.work = work;
    this.friends = friends;

    this.addFriend = function(nick, age, sex, parent, work, friends) // rajout du paramètre 'this.addFriends' avec la méthode 'addFriend = function()' au constructeur de l'objet Person
    {
        this.friends.push(new Person(nick, age, sex, parent, work, friends));  
    };
};
// On crée des variables qui vont contenir une instance de l’objet Person :
let seb = new Person('Sébastien', 25,'m','aîné','développeur',[]); // [] : représente un Array (tableau vide) pour désigner la structure 'friends'
let lau = new Person('Laurence', 19 ,'f','soeur','Sous-officier',[]); // new : mot-clé pour ajouter un nouvel objet à l'objet Person. Permet de faire une copie de l'objet Person

alert(seb.nick + ' et ' + lau.nick); // Affiche : « Sébastien » // concaténisation de 2 alert
alert(lau.nick); // Affiche : « Laurence »

seb.nick = 'Bastien'; // modifie la variable, on modifie le prénom
alert(seb.nick);



seb.friends.push(new Person('Johnatan','19','m','aîné','Développeur',[])); // on ajoute 3 amis à Seb avec la méthode push (mot-clé) ... méthode native de JS
seb.friends.push(new Person('Eric','20','m','aîné','Développeur',[]));
seb.friends.push(new Person('Thomas','20','m','aîné','Développeur',[]));
alert(seb.friends[2].nick);

seb.addFriend('William','19','m','aîné','Développeur',[]); // méthode défini par la méthode construite directement avec le constructeur de l'objet Person
alert(seb.friends[3].nick + ' a ' + seb.friends[3].age +' ans.'); // meilleur méthode pour l'ajout d'objet au tableau, qu'avec push, plus compréhensible

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Autre exemple de la construction du constructeur d'objet de tableau 

let fruitArray = []; // définition d'un tableau vide
fruitArray.push('Orange'); // on ajoute un fruit
alert(fruitArray[0]); // affiche : Orange

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Autre exemple de la construction du constructeur d'objet de tableau 

// On définit un objet Chien
function Chien(name, color, age, size){
    this.name = name;
    this.color = color;
    this.age = age;
    this.size = size;

    // this.addSize = function(size){    // ajout de la propriété (paramètre) SIZE dans le tableau (this.size=size) et on fait une fonction pour créer une méthode dans l'objet Chien pour "pusher" Size
    //     this.size.push(size);
    // };
}

Chien.prototype.addSize = function(size){ // méthode extérieur qui vient à remplacer la méthode addSize à l'intérieur du constructeur d'objet
        this.size.push(size);
    };

// On crée des variables qui vont contenir une instance de l’objet Chien :

let labrador = new Chien('Wil','sable',3,[]);
let patou = new Chien('Ben','blanc',2,[]);

alert(labrador.name + ' et ' + patou.name);// affiche Wil et Ben

labrador.addSize('15'); //première visite
labrador.addSize('17'); //deuxième visite
labrador.addSize('18'); //Troisième visite

labrador.size[0] = '14'; // pour connaître la taille de la 1ere visite le [0] => 1ere instance... [1] => 2e instance... [2] => 3e instance ... etc
                         // pour changer l'instance en supprimant la 1ere instance et en la remplaçant par 14. // affiche 14


labrador.age = '4'; 
alert(labrador.name + ' meure ' + labrador.size[0] + ' cm.'); // Affiche 14