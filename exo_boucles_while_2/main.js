// ************************* EXO 1 Boucles simples ****************

// let valeur ;

// do {
//     valeur = prompt(`Entrez un valeur :`);
// } while (valeur.trim()==``);

// let chiffre ;

// do {
//     chiffre = prompt(`Entrez un chiffre supérieur à 10 :`);
// } while (chiffre<10);

// let i = 0;
// while (i==10) {
//     console.log(i);
//     i++
// }

// let i = 3;
// while (i<=6) {
//     console.log(i);
// //     i++
// }

// let i = 0;
// while (i<=10) {
//     console.log(i);
//     i+=2;
// }

// ************************* EXO 2 ***************************

// let legumes = [`courgette`,`broccoli`,`salade`,`salsifi`];
// let caisseLegume = [];

// while (legumes.length > 0) {
//     caisseLegume.push(legumes.shift());
// }

// console.log(`Tableau légumes : ${legumes}`);
// console.log(`Tableau caisse : ${caisseLegume}`);

// ************************* EXO 4 ***************************

// let reponseUser = prompt(`Que produisent les abeilles ? `).toLowerCase();
// let reponse = 'miel';

// while (reponseUser != reponse) {
//     reponseUser = prompt(`Que produisent les abeilles ? `).toLowerCase();
// }

// alert(`Bien joué zebi`);

// ************************* EXO 5 ***************************

// let reponseUser;
// let reponse = 'miel';

// do {
//     reponseUser = prompt(`Que produisent les abeilles ? `).toLowerCase();
// } while (reponseUser != reponse);

// alert(`Bien joué zebi`);

// ************************* EXO 6 ***************************

// let dateActuelle = new Date();
// let annee = dateActuelle.getFullYear();
// let randomYear = Math.floor(Math.random() * (annee - 1970) + 1970);
// let essai = 0;
// let bonneReponse = annee-randomYear;
// let reponse;
// while (essai < 3 && reponse!=bonneReponse) {
//     reponse = prompt(`Si je suis né(e) en ${randomYear}, quel âge ai-je aujourd’hui ? ${bonneReponse}`);
//     essai++;
// }

// if (essai<=3) {
//     alert(`Bravo ! c'est juste `);
// } else {
//     alert(`Tu n'as plus aucune chance, dommage `);
// }

// ************************** EXO 7 **************************

// let fruits = [];
// while (fruits.length<3) {
//     let nvxFruit = prompt(`Entrez un fruit : `);
//     fruits.push(nvxFruit.charAt(0).toUpperCase() + nvxFruit.slice(1));
// }
// let i = 0;
// do {
//     i = 0;
//     let retrait = prompt(`Désirez vous retirer un fruit ? ${fruits}`)
//     retrait = retrait.charAt(0).toUpperCase() + retrait.slice(1);
//     fruits.forEach(element => {
//         if (element === ) {
//             fruits.splice(fruits.indexOf(retrait),1);
//             i++
//         }
//     });
// } while (i>=1)
// alert(`Voici votre panier : ${fruits}`);