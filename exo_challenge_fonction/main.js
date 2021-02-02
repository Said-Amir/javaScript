// EXO 1

let codingSchool = [];

let addClass = (student, classe) => {
    if (classe.includes(student)) {
        console.log(`Cet élève est déjà dans al classe.`);
    }else{
        classe.push(student);
        console.log(student + ` entre dans la classe.`);
    }
}

let retClass = (student, classe) => {
    classe.forEach(element => {
        if (element.includes(student)) {
            classe.splice(classe.indexOf(student),1);
            console.log(`${student} sort de la classe.`)
        }else{
            console.log(`${student} n'est pas dans la classe.`)
        }
    });
}



// addClass('Antoine',codingSchool);
// addClass('Said',codingSchool);
// addClass('Abdel',codingSchool);
// addClass('Nathan',codingSchool);
// addClass('Yasmina',codingSchool);

// console.log(codingSchool);

// retClass('Abdel',codingSchool);
// addClass('Gauthier',codingSchool);
// retClass('Said',codingSchool);
// retClass('Yamina',codingSchool);

// console.log(codingSchool);

// EXO 2

// let estPremier = (nombre) => {

//     if (nombre<2) {
//       return "Le nombre n'est pas premier";
//     }

//     for (let i = 2; i < nombre; i++) {

//         if (nombre % i == 0) return "Le nombre n'est pas premier";

//     }
    
//     return "Le nombre est premier";
// }




// console.log(estPremier(prompt("Quel Nombre souhaitez-vous tester?")));