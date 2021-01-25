// EXO 1  ToDo

// let day = prompt(`Entrez un jour de la semaine : `);
// day = day.trim().toLowerCase;

// switch (day) {
//     case `lundi`:
//         alert(`On est ${day} Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `mardi`:
//         alert(`On est ${day} Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `mercredi`:
//         alert(`On est ${day} Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `jeudi`:
//         alert(`On est ${day} Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `vendredi`:
//         alert(`On est ${day} Tu as cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `samedi`:
//         alert(`On est ${day} Tu n'as pas cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     case `dimanche`:
//         alert(`On est ${day} Tu n'as pas cours sur le Discord MolenGeek puis tu dois jouer à Among Us.`);
//         break;

//     default:
//         alert(`Tu n'as pas entré un jour de la semaine`);
//         break;
// }


// EXO 2 Sortez couverts

// let meteo = prompt(`Entrez un type de météo : `);
// meteo = meteo.trim().toLowerCase();

// switch (meteo) {
//     case 'ensoleillé':
//         alert(`Il fait beau. je peux mettre un t-shirt.`);
//         break;

//     case 'pluvieux':
//         alert(`Il pleut. J'ai besoin d'un parapluie.`);
//         break;

//     case 'sec':
//         alert(`Il fait sec. Je n'ai aps besoin d'une veste contre la pluie.`)
//         break;

//     case 'enneigé':
//         alert(`Il neige. Je dois m'habiller chaudement.`)
//     break;

//     default:
//         alert(`Vous n'avez pas entré un type de météo `)
//         break;
// }

// EXO 3 Les 2 font la pair

let nombre = parseInt(prompt(`Entrez un nombre : `));
if (!isNaN(nombre)) {
    nombre = nombre%2;

    switch (nombre) {
    case 0:
        alert(`Votre nombre est paire`)
        break;
    default:
        alert(`Votre nombre est impaire`)
        break;
    }
    
} else{
    alert(`Vous n'avez pas entré un nombre.`);
}



// EXO 4 Maths "avancée"

let nb1 = prompt(`Entrez un premier nombre`);
let operation = prompt(`Entrez une opération mathématique : (* - + / )`);
let nb2 = prompt(`Entrez un second nombre`);
if (isNaN(nb1) || isNaN(nb2)) {
    alert(`Une des deux entrées n'est pas un nombre.`);
}else{

    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2);

    switch (operation) {
        case `*`:
            alert(`${nb1} * ${nb2} = ${nb1*nb2}`)
            break;

        case `-`:
            alert(`${nb1} - ${nb2} = ${nb1-nb2}`)
            break;

        case `+`:
            alert(`${nb1} + ${nb2} = ${nb1+nb2}`)
            break;

        case `/`:
            alert(`${nb1} / ${nb2} = ${nb1/nb2}`)
            break;
        default:
            alert(`Vous n'avez pas entré une opération mathématiques valide : (* - + / )`)
            break;
    }

}