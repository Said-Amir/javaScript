// EXO 1

// let multiplicateur = prompt(`Entrez un nombre : `);

// if (!isNaN(multiplicateur)) {
//     console.log(`Table de 5 :`);
//     for (let i = 0; i <= 10; i++) {

//         parseInt(multiplicateur);
//         let resultat = 5*i;
//         console.log(`${multiplicateur} x ${i} = ${resultat}`);

//     }
// } else {
//     console.log(`Vous n'avez pas entré un nombre`);
// }



// EXO 2

// let multiplicateur = 5;
// console.log(`Table de 5 :`);
// for (let i = 0; i <= 10; i+=2) {
//     let resultat = 5*i;
//     console.log(`${multiplicateur} x ${i} = ${resultat}`);
// }

// EXO 3

// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// }

// EXO 4

// let classe = ["Mohammed", "Yasmina", "Amine", "Salim", "Abdel", "Majda", "Bilal", "Laurie", "Yahya", "Mahad", "Nghia", "Saïd", "Camille", "Antoine", "Ayoub", "Yassin", "Cem", "Gauthier"];

// let longPrenoms = [];

// classe.forEach(element => {
//     if (element.length>5) {
//         longPrenoms.push(element);
//     }
// });

// console.log(`Longs prenoms : ${longPrenoms}`);
// console.log(`prenoms courts : ${classe}`);

// EXO 5

// let sommes = [7,78,9,76,5,45,2,3,742];
// let grossesSommes = [];

// sommes.forEach(element => {
//     if (element>60) {
//         grossesSommes.push(element);
//         sommes.splice(sommes.indexOf(element),1);
//     }
// });

// console.log(`grands nombres : ${grossesSommes}`);
// console.log(`petits nombres : ${sommes}`);

// EXO 6

// let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
// console.log(donnees);

// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for (let i = donnees.length; i>0; i--) {
//     switch (typeof donnees[0]) {
//         case `string`:
//             typeString.push(donnees[0]);
//             donnees.splice(0,1);
//             alert(donnees);
//             break;
//         case `number`:
//             typeNumber.push(donnees[0]);
//             donnees.splice(0,1);
//             alert(donnees);
//             break;
//         case `object`:
//             typeObject.push(donnees[0]);
//             donnees.splice(0,1);
//             alert(donnees);
//             break;
//         default:
//             typeAutre.push(donnees[0]);
//             donnees.splice(0,1);
//             alert(donnees); 
//             break;
//     }
// }

// console.log(`type string :`,typeString);
// console.log(`type autre :`,typeAutre);
// console.log(`type number :`,typeNumber);
// console.log(`type object :`,typeObject);
// console.log(`tableau de base :`,donnees);