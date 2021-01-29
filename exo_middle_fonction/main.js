// EXO 1

let reverseNumber = (nombre) => {
    let tab = [];
    let nvxNombre = '';

    for (let i = 0; i < nombre.length; i++) {
        tab.push(nombre.charAt(i));
    }
    for (let i = 0; i < tab.length; i++) {
        nvxNombre = nvxNombre + tab[(tab.length-1 - i)];
    }
    
    return nvxNombre;
}

console.log(reverseNumber('853'));

// EXO 2

let estPair = (num) => {
    switch (num % 2) {
        case 0:
        return `Est pair`
            break;
        case 1:
        return `Est impair`
            break;
        default:
        return `C'est pas un nombre enflure`
            break;
    }
}

console.log(estPair('p'));

// EXO 3


let logIn = (mdp) => {
    let mdpp;
    do {
        mdpp = prompt(`Entrez votre mdp`);
    } while (mdpp != 'mahad');

    alert(`Vous êtes connecté`);
}


logIn();