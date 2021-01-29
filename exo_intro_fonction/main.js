// EXO 1

// let somme = (nb1, nb2) => {
//     return nb1+nb2;
// }

// console.log(somme(5,15));

// EXO 2

// let diff = (nb1, nb2) => {
//     return nb1-nb2;
// }

// console.log(diff(15,5));

// EXO 3

// let mult = (nb1, nb2) => {
//     return nb1*nb2;
// }

// console.log(mult(15,5));

// EXO 4

// let div = (nb1, nb2) => {
//     return nb1/nb2;
// }

// console.log(div(15,5));

// EXO 5

// let mod = (nb1, nb2) => {
//     return nb1%nb2;
// }

// console.log(mod(15,5));

// EXO 6

// let carre = (nb1) => {
//     return nb1*nb1;
// }

// console.log(carre(5));

// EXO 7

// let exp = (nb1, nb2) => {
//     return Math.pow(nb1,nb2);
// }

// console.log(exp(5,4));

// EXO 8

// let capitalize = (string) => {
//     return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
// }

// console.log(capitalize(`SalUT`));

// // EXO 9

let calcul = (nb1,nb2,operator) => {

    switch (operator) {
        case '+':
        return nb1 + nb2;
            break;
        case '*':
        return nb1 * nb2;
        break;
        case '-':
        return nb1 - nb2;
        break;
        case '/':
        return nb1 / nb2;
        break;
        default:
            break;
    }
}

console.log(calcul(5,8,'-'));