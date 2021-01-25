// ********************** Exo 1 *******************************

let mot = prompt(`Entrez un mot`);
let retrait = prompt(`Entrez la lettre que vous voulez retirer du mot : `);
let indexRetrait = mot.indexOf(retrait);

alert((mot.slice(0,indexRetrait))+(mot.slice(indexRetrait+1)));

// ********************** Exo 2 *******************************

let mot = prompt(`Entrez un mot`);
let indexAleatoire = Math.floor(Math.random()*mot.length);
alert((mot.slice(0,indexAleatoire))+(mot.slice(indexAleatoire+1,mot.length)));

// ********************** Exo 3 *******************************

// Déclaration des variables
let prenom = prompt(`Entrez votre prénom`);
let longueurMax = prenom.length;
let nom = prompt(`Entrez votre nom`);
let age = prompt(`Entrez votre age`);
let taille = prompt(`Entrez votre taille (en mètre)`);

// Première consigne
let indexAleatoire = Math.round(Math.random()*nom.length);
let indexAleatoire2 = Math.round(Math.random()*nom.length);

nom = nom.replace(nom.charAt(indexAleatoire),nom.charAt(indexAleatoire).toUpperCase());
nom = nom.replace(nom.charAt(indexAleatoire2),nom.charAt(indexAleatoire2).toUpperCase());

// Deuxième consigne
let premiereLettre = prenom.charAt(0);
let premiereLettreUpper = premiereLettre.toUpperCase()

prenom = prenom.replace(premiereLettre,premiereLettreUpper);

let indexAleatoire3 = Math.floor((Math.random()*prenom.length)+1);
let lettreSupp = prenom.charAt(indexAleatoire3);

prenom = prenom.replace(lettreSupp, ``);

// Troisième consigne
let indexAleatoire4 = Math.floor((Math.random()*prenom.length-1)+1);
let lettreSupp2 = prenom.charAt(indexAleatoire4);
prenom = prenom.replace(lettreSupp2, ``);

// Quatrième consigne
let ageEnMois = age*12;

// Cinquième consigne
let tailleEnCm = taille*100;

// Résultat final
alert(
    `Bonjour ` 
    + prenom 
    + ` ` 
    + nom 
    + `, Ton prénom comporte normalement ` 
    + longueurMax 
    + ` lettres, mais 2 ont été perdues en chemin, tu es agé de `
    + ageEnMois 
    + ` mois et tu fais `
    + tailleEnCm
    + ` cm.`
    );

