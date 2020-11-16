//let name = '';

//name = prompt('quel est votre prénom ?');

//document.write(name);



let start = 'Bonjour',
    //name = '', end = '!',
    name, end = '!', //même écriture que la ligne précédente
    result;//même résultat que ->  result; ou -> console.log(result);

    name = prompt('quel est votre prénom ?');
    result = start + ' ' + name + ' ' + end;
    alert(result); 

    onsole.log(result);

    document.open();      //-> écriture nécessaire pour safari
    document.write(result);
    document.close();     




