// MD 1

// EXO 1

// let prenom = prompt(`Entrez un prénom`);

// alert(prenom.charAt(0));

// EXO 2

// let prenom = prompt(`Entrez un prénom`);

// alert(prenom.slice(1));

// EXO 3

// let prenom = prompt(`Entrez un prénom`);

// if (prenom.length >= 5) {
//     alert(prenom.charAt(4));
// } else {
//     alert(`Votre prénom est trop court`);
// }

// EXO 4

// let prenom = prompt(`Entrez un prénom`);

// if (prenom.length >= 5) {
//     alert(prenom.charAt(4));
// } else {
//     alert(' Votre prénom était trop court, voici la dernière lettre : '+prenom.charAt(prenom.length-1));
// }

// EXO 5

// let mot = prompt(`Entrez un mot : `);

// alert(mot.toLowerCase());
// alert(mot.toUpperCase());
// alert(mot.charAt(0).toUpperCase()+mot.slice(1).toLowerCase());

// MD 2

// EXO 1

// let myArray = ['salut','gauthier','bg','mahad','gauthier'];

// console.log(myArray[2]);

// EXO 2

// console.log(myArray[2],myArray[4]);

// EXO 3

// console.log(myArray[1].slice(0,myArray[1].length-1).toUpperCase()+myArray[1].charAt(myArray[1].length-1));

// EXO 4

// console.log(myArray[3].charAt(0));

// EXO 5

// console.log(myArray[4].slice(1));

// EXO 6

// console.log(myArray[0].charAt(0).toLowerCase() + myArray[0].charAt(1).toUpperCase());

// EXO 7

// console.log(myArray[0]+myArray[2]);

// EXO 8

// console.log(myArray[1].slice(0,(Math.round(tab[1].length)/2)) + myArray[3].slice((myArray[3].length)/2));

// EXO 9

// console.log(myArray[2].slice(0,2).toUpperCase() + myArray[4].toLowerCase());

// EXO 10

// let twoFirst = [];

// myArray.forEach(element => {
//     element = element.charAt(0)+element.charAt(1);
//     twoFirst.push(element);
// });

// twoFirst = twoFirst.join('');

// console.log(twoFirst);

// MD 3

// EXO 1

// let prenoms = [`Said`,`Gauthier`,`Mahad`,`Cem`,`Antoine`,`Mufasa`,`Abdel`,`Amine`,`Salim`];



// EXO 2

// prenoms.forEach(element => {
//     console.log(element);
// });

// EXO 3

// tab.forEach(element => {
//     console.log(element.charAt(0));
// });

// EXO 4

// prenoms.forEach(element => {
//     console.log(element.charAt(1));
// });

// EXO 5

// prenoms.forEach(element => {
//     console.log(element.charAt(1) + element);
// });

// EXO 6
// prenoms.forEach((element, index) => {
//     if (index % 2 == 0) {
//         console.log(element);
//     }
// });

// MD 4

// EXO 1

// let prenoms = [`said`,`gauthier`,`mahad`,`cem`,`antoine`,`mufasa`,`abdel`,`amine`,`salim`];

// EXO 2

// prenoms.forEach((element, index) => {
//     if (index % 2 == 1) {
//         console.log(element.toUpperCase());
//     }
// });

// EXO 3

// prenoms.forEach((element, index) => {
//     if (index % 2 == 0) {
//         console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
//     }
// });

// EXO 4

// prenoms.forEach((element, index) => {
//     if (index % 2 == 1 && element.length > 4 ) {
//         console.log(element);
//     }
// });

// EXO 5

// prenoms.forEach((element, index) => {
//     if (index % 2 == 0 && element.length > 4 ) {
//         console.log(element.charAt(0).toUpperCase());
//     }
// });

// EXO 6

// prenoms.forEach((element) => {
//     switch (element.charAt(0)) {
//         case 'a':
//             console.log(element)
//             break;
//         case 'e':
//             console.log(element)
//             break;
//         case 'm':
//             console.log(element)
//             break;
//         case 'f':
//             console.log(element)
//             break;
//         case 'y':
//             console.log(element)
//             break;
//         case 'n':
//             console.log(element)
//             break;
//         default:
//             break;
//     }
// });

// EXO 7

// prenoms.forEach((element) => {
//     switch (element.charAt(0)) {
//         case 'a':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         case 'e':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         case 'm':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         case 'f':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         case 'y':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         case 'n':
//             if (element.length > 5) {
//                 console.log(element);
//             }
//             break;
//         default:
//             break;
//     }
// });

// MD 5

// EXO 1

// let prenoms = [`said`,`gauthier`,`mahad`,`cem`,`antoine`,`mufasa`,`abdel`,`amine`,`salim`];

// EXO 2

// prenoms.forEach((element) => {
//     switch (element.charAt(0)) {
//         case 'a':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         case 'e':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         case 'm':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         case 'f':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         case 'y':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         case 'n':
//             if (element.length <= 5) {
//                 console.log(element.charAt(0).toUpperCase()+element.slice(1));
//             }
//             break;
//         default:
//             break;
//     }
// });

// EXO2 14

// prenoms.forEach(element => {
//     if ((
//          element.length > 4 &&

//          (element.charAt(0) == 'k' || element.charAt(0) == 'c' || element.charAt(0) == 'm' || element.charAt(0) == 'f' || element.charAt(0) == 'y' || element.charAt(0) == 'n' || element.charAt(0) == 'a' || element.charAt(0) == 'e' || element.charAt(0) == 'p' || element.charAt(0) == 'o' )
//          )&& 

//          prenoms.indexOf(element)%2 == 1) {
//         console.log(element)
//     }
// });

// EXO 3

// prenoms.forEach(e=>{
    
//     if (
//         (
//             (e.charAt(0)=='k' || e.charAt(0)=='c' || e.charAt(0)=='m' || e.charAt(0)=='f' || e.charAt(0)=='y' || e.charAt(0)=='n' || e.charAt(0)=='a' || e.charAt(0)=='e' || e.charAt(0)=='p' || e.charAt(0)=='o')

//             && e.length>5)
//             && prenoms.indexOf(e)%2 == 0) {

//                 console.log(e.charAt(0).toLowerCase()+e.slice(1,2).toUpperCase()+e.slice(2,e.length -1)+e.charAt(e.length -1 ).toUpperCase());

//     }

//   });

// EXO 4

// let nvxTab = [];
// prenoms.forEach(e=>{
    
//     if (
//         (
//             (e.charAt(0)=='k' || e.charAt(0)=='c' || e.charAt(0)=='m' || e.charAt(0)=='f' || e.charAt(0)=='y' || e.charAt(0)=='n' || e.charAt(0)=='a' || e.charAt(0)=='e' || e.charAt(0)=='p' || e.charAt(0)=='o')

//             && e.length < 7)
//             && prenoms.indexOf(e)%2 == 0 ) {

//                 nvxTab.push(e.charAt(0).toLowerCase() + e.charAt(1).toUpperCase());
                
//             }           
// });

// nvxTab = nvxTab.join('');
// console.log(nvxTab);

// MD 6

// let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];


// EXO 1
// leTableau.forEach(e => {
//     switch (typeof(e)) {
//         case 'string':
//             console.log(`${e} est un string`);
//             break;

//         case 'boolean':
//             console.log(`${e} est un boolean`);
//             break;

//         case 'number':
//             console.log(`${e} est un number`);
//             break;

//         case 'object':
//             console.log(`${e} est un object`);
//             break;

//         default:
//             break;
//     }
// });

// EXO 2

// let lesIntegers = []
// let lesStrings = []
// let lesAutres = []

// leTableau.forEach(e => {
//   switch (typeof(e)) {

//       case "number":
//         lesIntegers.push(e)
//       break;
//       case "string":
//         lesStrings.push(e)
//       break;

//     default: 
//     lesAutres.push(e)
//       break;
//   }
// });

// console.table(lesIntegers);
// console.table(lesStrings);
// console.table(lesAutres);

// EXO 3

// let lesGrandsIntegers = []
// let lesPetitsIntegers = []
// let lesPetitsStrings = []
// let lesGrandsString = []


// leTableau.forEach(e => {
//  if (typeof(e)=="number" && e<100) {
//   lesPetitsIntegers.push(e)
//  } else if (typeof(e)=="number" && e>=100) {
//   lesGrandsIntegers.push(e)
//  } else if (typeof(e)=="string" && e.length<6) {
//   lesPetitsStrings.push(e)
//  } else if (typeof(e)=="string" && e.length>=6){
//   lesGrandsString.push(e)
//  } 
// });

// console.table(lesGrandsIntegers);
// console.table(lesPetitsIntegers);
// console.table(lesPetitsStrings);
// console.table(lesGrandsString);

// EXO 4

// let pot1 = []
// let pot2 = []
// let i = 0
// while ( i <11 ) {
//   let question = parseInt(prompt("donne moi un nombre"))
//  if (question<=100 && question > 0 ) {
//    i++
//     pot1.push(question)
//   }else if( question < 0) {
//     alert("t'es foutu");
//   } else{
//     i++
//     pot2.push(question)
//   }
// }
 
// console.table(pot1);
// console.table(pot2);

// EXO 5

// let panier = [];

// for (let i = 0; i < 8; i++) {
//     prompt
// }

// EXO 6

let affaires = ['chaussure classique','t-shirt super héro','pull col roulé'];
let vetements = [];
let sousVetements = [];
let chaussures = [];
let tailleVetement = affaires.length;
let i = 0;

alert(`Vous allez pouvoir trier vos affaires parmis les choix suivants : vetement, sous-vetement ou chaussure`);

do {
    let reponse = prompt(`Où souhaite-tu ranger : ${affaires[0]} : vetement, sous-vetement ou chaussure`);

    if (reponse == 'chaussure') {
        chaussures.push(affaires.shift());
    } else if(reponse == 'sous-vetement'){
        sousVetements.push(affaires.shift());
    }  else if(reponse == 'vetement'){
        vetements.push(affaires.shift());
        
    } else{
        i--;
    }

    i++;
} while (i < tailleVetement);

console.table(affaires);
console.table(vetements);
console.table(sousVetements);
console.table(chaussures);