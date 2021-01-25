// # Les conditions - Exercice 1

// ### 1. Via un console.log() vérifiez l'egalité entre 1 et "1"
// console.log(1 == "1");

// ### 2. Via un console.log() vérifiez l'egalité STRICTE entre 1 et "1"
// console.log(1 === "1");

// ### 3. Créez un programme qui demande le prénom d'une personne, si le prénom de la personne comporte moins de 5 caractères, affichez une alerte avec comme message " Ton nom est trop court "
// let prenom = prompt(`Quel est votre prénom ? `);

// if (prenom.length < 5) {
//     alert(`Ton nom est trop court.`);
// } else{
//     alert(`Ton nom est assez long`);
// }

// ### 4. Affichez une addition a l'utilisateur et demande lui de résoudre l'addition, si il répond juste, félicitez le, sinon dite lui que c'est incorrect.
// let resultatAddition = prompt(`Que vaut le résultat de l'addition suivante : 5 + 4 `);
// if (resultatAddition == 9) {
//     alert(`Félicitation c'est juste ! `);
// } else{
//     alert(`C'est faux trou du cul ! `);
// }

// ### 5. Affichez une multiplication à l'utilisateur et demande lui de la résoudre, si il répond juste félicitez le "la réponse était bien xx" sinon dites lui à combien d'unités il était de la réponse.
// ## ex: si la réponse etait 35 et qu'il répond 40 affichez lui une alerte avec "C'est dommage, tu n'étais qu'a 5 unité de la bonne réponse"
// let resultatMultiplication = prompt(`Que vaut le résultat de la multiplication suivante : 2 x 4 `);

// if (resultatMultiplication == 2*4) {
//     alert(`Félicitation c'est juste ! `);
// } else{
//     let diffReponse = Math.abs(resultatMultiplication - (2*4));
//     alert(`C'est faux trou du cul ! T'es à  ${diffReponse} unités de la réponse.`);
// }

// ### 6. Créez un programme qui permet d'ajouter des éléments dans un tableau via des prompts. Quand le tableau contient 3 éléments, affichez une alerte avec le contenu du tableau, tant que le tableau contient moins de 3 éléments, affichez une alerte indiquant combien il manque d'éléments pour être à 3.

// let tableau = [];

// if(tableau.length < 3 ){

//     alert(`Entrez 3 éléments dans le tableau`);
//     tableau[0] = prompt(`Entrez un élément dans le tableau : `);

// } else {
//     alert(`Voici les contenu de votre tableau : ${tableau}`);
// }

// if(tableau.length < 3 ){

//     alert(`Il manque ${3 - tableau.length} éléments pour être à 3`);
//     tableau[1] = prompt(`Entrez un élément dans le tableau : `);

// } else {
//     alert(`Voici les contenu de votre tableau : ${tableau}`);
// }

// if(tableau.length < 3 ){

//     alert(`Il manque ${3 - tableau.length} éléments pour être à 3`);
//     tableau[2] = prompt(`Entrez un élément dans le tableau : `);

// } else {
//     alert(`Voici les contenu de votre tableau : ${tableau}`);
// }

// if(tableau.length < 3 ){

//     alert(`Il manque ${3 - tableau.length} éléments pour être à 3`);
//     tableau[2] = prompt(`Entrez un élément dans le tableau : `);

// } else {
//     alert(`Voici les contenu de votre tableau : ${tableau}`);
// }

// ### 7. Créez un programme qui permet a l'utilisateur de mettre des chiffres dans des "bacs", si le chiffre est plus grand ou égal à 12 il va dans le bac "grandNombres" si il est plus petit que 12 il va dans le bac "petitNombres". Affichez ensuite une seule alerte avec le contenu des deux bacs.
let petitBac = [];
let grandBac = [];

let nombre1 = prompt(`Entrez un nombre :`);
if (nombre1<12) {
    petitBac.push(nombre1);
}else{
    grandBac.push(nombre1);
}

let nombre2 = prompt(`Entrez un nombre :`);
if (nombre2<12) {
    petitBac.push(nombre2);
}else{
    grandBac.push(nombre2);
}

let nombre3 = prompt(`Entrez un nombre :`);
if (nombre3<12) {
    petitBac.push(nombre3);
}else{
    grandBac.push(nombre3);
}

let nombre4 = prompt(`Entrez un nombre :`);
if (nombre4<12) {
    petitBac.push(nombre4);
}else{
    grandBac.push(nombre4);
}

let nombre5 = prompt(`Entrez un nombre :`);
if (nombre5<12) {
    petitBac.push(nombre5);
}else{
    grandBac.push(nombre5);
}

let nombre6 = prompt(`Entrez un nombre :`);
if (nombre6<12) {
    petitBac.push(nombre6);
}else{
    grandBac.push(nombre6);
}

alert(`Le grand bac contient ceci : ${grandBac} et Le petit bac contient cela : ${petitBac}`);

// ### 8. Inventez un exercice avec ce que vous avez appris en Javascript jusqu'à maintenant en incluant des conditions. N'hésitez pas à le poster dans #exercices pour le partager aux autres.

// Créez un programme qui demande à l'utilisateur son poids et sa taille

//     - calcul son IMC via la formule suivante : poids(en kg)/taille²(en mètres).
//     - En fonction de son IMC lui renvoie l'une des valeur suivante :
//                 -Si son Imc est inférieur à 18.5 : Maigreur 
//                 -Si son Imc est compris entre 18.5 et 24.9 : Normal 
//                 -Si son Imc est compris entre 24.9 et 29.9 : Surpoids 
//                 -Si son Imc est compris entre 29.9 et 40 : Obésité 
//                 -Si son Imc est supérieur à 40 : Obésité Massive