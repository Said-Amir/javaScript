let phrase = `Bonjour tout le monde`; //1)

console.log(phrase.length); //2)

phrase = phrase.trim(); //3)

console.log(phrase.length); //4)

console.log(phrase.charAt(phrase.length-1)); //5)

phrase = phrase.slice(0,7); //6)
console.log(phrase);

phrase = phrase.substr(7); //7)
console.log(phrase);

phrase = `Bonjour`.concat(phrase); //8)
console.log(phrase);

phrase = phrase.replace(`Bonjour`,`Salut`)//9)
console.log(phrase);

let chiffre = Math.round(Math.random()*1111111000); //10)
console.log(chiffre);

let nombre = 8.9;

nombre = parseInt;

console.log(nombre);