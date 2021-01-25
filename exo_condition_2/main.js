// Exo 1 
// let nb1 = prompt(`Entrez un premier nombre : `);
// let nb2 = prompt(`Entrez un second nombre : `);

// alert(nb1 == nb2);
// alert(`Le nombre `+nb1 + `est-il égal au second nombre `+ nb2 + `? Voici la réponse : ` + (nb1 == nb2));

// Exo 2 
// let nb1 = prompt(`Entrez un premier nombre : `);
// let nb2 = prompt(`Entrez un second nombre : `);

// if (isNaN(nb1) || isNaN(nb2)) {
//     alert(`Une des deux valeur n'est pas un nombre`);
// } else if (nb1 > nb2) {
//     alert(`${nb1} est plus grand que ${nb2}.`);
// }else {
//     alert(`${nb1} est plus petit que ${nb2}.`);
// }

// Exo 3
// let nb1 = prompt(`Entrez un premier nombre : `);
// let nb2 = prompt(`Entrez un second nombre : `);
// let nb3 = prompt(`Entrez un troisième nombre : `);

// if (isNaN(nb1) || isNaN(nb2) || isNaN(nb3)) {
//     alert(`Une des trois valeur n'est pas un nombre`);
// } else if ((nb1 + nb2)>nb3){
//     alert(`La somme de ${nb1} + ${nb2} est plus grande que ${nb3}`)
// }else{
//     alert(`La somme de ${nb1} + ${nb2} n'est pas plus grande que ${nb3}`)
// }

// Exo 4
// let phrase = prompt(`Entrez une phrase `);
// let nbWord = prompt(`Estimez le nombre de lettres dans cette phrase `);

// let diff = nbWord - phrase.length
// diff = Math.abs(diff);

// if (isNaN(nbWord)) {
//     alert(`Votre estimation n'est pas un nombre`)
// }else if (diff == 0) {
//     alert(`Bravo ! Vous avez trouvé`);
// }else{
//     alert(`Faux, vous étiez à ${diff} unités de la réponse`);
// }

// Exo 5
// let nb1 = parseInt(prompt(`Entrez un premier nombre : `));
// let nb2 = parseInt(prompt(`Entrez un second nombre : `));

// if (isNaN(nb1) || isNaN(nb2)) {
//     alert(`Au moins une des deux entrée n'est pas un nombre`);
// }else if (nb1 >= nb2) {
//     alert(nb1 - nb2);
// } else {
//     alert(nb2 - nb1);
// }

// // Exo 6
// let nb1 = prompt(`Entrez un premier nombre : `);
// let nb2 = prompt(`Entrez un second nombre : `);
// let nb3 = prompt(`Entrez un troisième nombre : `);

// if (isNaN(nb1) || isNaN(nb2)) {
//     alert(`Au moins une des deux entrée n'est pas un nombre`);
// } else {
//     let max = Math.max(nb1,nb2,nb3);
//     alert(`Entre ${nb1},${nb2} et ${nb3}, ${max} est le plus grand.`);
// }

// Exo 5 (part2)
// let prenom = prompt(`Quel est votre prénom ? `);

// if (prenom.length == 0) {
//     prenom = prompt(`Vous n'avez pas entré votre prénom, entrez le svp : `);
//     alert(`Bonjour ${prenom}`);
// } else {
//     alert(`Bonjour ${prenom}`);
// }

// Exo 6 (part2)
// if(confirm(`Souhaitez-vous vous abonner ? `)){

//     let formule = prompt('Quelle formule désirez souscrire ? ( Luxe ou normale )');
//     formule = formule.toLowerCase();

//     if (formule == "luxe") {

//         alert(`Félicitation pour votre abonnement à la formule Luxe !`);

//     }else if (formule == "normale") {
//         alert(`Merci pour votre abonnement.`);
//     }else {
//         let formule = prompt('Choisissez une formule qui existe svp : ( Luxe ou normale )');
//         formule = formule.toLowerCase();

//         if (formule == "luxe") {

//             alert(`Félicitation pour votre abonnement à la formule Luxe !`);

//         }else if (formule == "normale") {
//             alert(`Merci pour votre abonnement.`);
//         }
//     }

// } else{
//     if (confirm(`Etes-vous sûr ? `)) {
//         alert(`Je suis très déçu de vous ...`);
//     }else{
//         let formule = prompt('Quelle formule désirez souscrire ? ( Luxe ou normale )');
//         formule = formule.toLowerCase();

//         if (formule == "luxe") {

//             alert(`Félicitation pour votre abonnement à la formule Luxe !`);

//         }else if (formule == "normale") {
//             alert(`Merci pour votre abonnement.`);
//         }
//     }
// }

// Exo 7
// let reponse = prompt(`Que produit l'abeille ?`);
// let reponse2 = prompt(`Quel fleuve traverse l'Egypte ? `);

// reponse = reponse.toLowerCase();
// reponse2 = reponse2.toLowerCase();

// let bonneReponse = `miel`;
// let bonneReponse2 = `nil`;

// if (reponse != bonneReponse && reponse2 != bonneReponse2) {
//     alert(`Vous avez échoué...`);
// }else if (reponse != bonneReponse || reponse2 != bonneReponse2) {
//     if (reponse != bonneReponse) {
//         alert(`Vous y êtes presque la réponse à la premiere question était ${bonneReponse}`);
//     } else{
//         alert(`Vous y êtes presque la réponse à la deuxième question était ${bonneReponse2}`);
//     }
// }else{
//     alert(`Bravo vous avez réussi !`);
// }

// Exo 8

// let age = prompt(`Quel est votre âge ? `);

// if (age > 18) {
//     alert(`vous êtes majeur, vous pouvez réserver.`);
// }else if (age < 0) {
//     alert(`Revenez quand vous serez né !`);
// }
// else if (age == 18) {
//     alert(`Réservez mais attention, c'est tout juste et ce film peut être choquant !`);
// }else if (isNaN(age)) {
//     alert(`Vu que vous ne savez pas lire une instruction, je présume que vous n'avez pas l'âge.`);
// }else {
//     alert(`vous êtes mineur, revenez plus tard.`);
// }

// Exo 9

// let q1 = prompt(`Voulez-vous partir en vacances ? (oui / non)`);
// let q2 = prompt(`Est-ce que vous êtes riche ? (oui / non)`);
// let q3 = prompt(`Est-ce que vous avez un chat ? (oui / non)`);

// if (q1 == 'non') {

//     alert(`Pas de problème, ne partez pas en vacances.`);
//     if (q2 == 'non' || q3 == 'oui') {
//         alert(`Même si vous le vouliez, vous ne pouriez pas partir...`);
//     }else if (q2 == 'oui' && q3 == 'non') {
//         alert(`Vous pourriez partir en vacance si vous le vouliez.`);
//     }

// }else if ((q1 == 'oui')) {

//     if (q2 == 'oui' && q3 == 'non') {
//         alert(`Tout est parfait, partez en vacance !`);
//     }else if (q2 == 'non' || q3 == 'oui') {
//         alert(`Vous ne pouvez malheureusement pas partir en vacance ...`);
//     }

// } else if ((q1 != 'oui' &&  q1 != 'non') || (q2 != 'oui' &&  q2 != 'non') || (q3 != 'oui' &&  q3 != 'non')){
//     alert(`Vous n'avez pas répondu par oui ou non à au moins une des questions, réessayez :`);

//     q1 = prompt(`Voulez-vous partir en vacances ? (oui / non)`);
//     q2 = prompt(`Est-ce que vous êtes riche ? (oui / non)`);
//     q3 = prompt(`Est-ce que vous avez un chat ? (oui / non)`);

//     if (q1 == 'non') {

//         alert(`Pas de problème, ne partez pas en vacances.`);
//         if (q2 == 'non' || q3 == 'oui') {
//             alert(`Même si vous le vouliez, vous ne pouriez pas partir...`);
//         }else if (q2 == 'oui' && q3 == 'non') {
//             alert(`Vous pourriez partir en vacance si vous le vouliez.`);
//         }

//     }else if ((q1 == 'oui')) {

//         if (q2 == 'oui' && q3 == 'non') {
//             alert(`Tout est parfait, partez en vacance !`);
//         }else if (q2 == 'non' || q3 == 'oui') {
//             alert(`Vous ne pouvez malheureusement pas partir en vacance ...`);
//         }
//     }
// }