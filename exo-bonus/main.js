let a = 5;
let b = 4;

console.log(`La variable a vaut : ` + a + ` dans un premier temps.`);
console.log(`La variable b vaut : ` + b + ` dans un premier temps.`);

let tempA = a;

a = b;
b = tempA;

console.log(`La variable a vaut : ` + a + ` dans un second temps.`);
console.log(`La variable b vaut : ` + b + ` dans un second temps.`);