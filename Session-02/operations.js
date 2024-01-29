// Concat with same type//

let texte1 ='OFPPT';
texte1 += " ";
let texte2 = 'en force';
let texte3 = texte1 + texte2;

console.log(texte3);


// Concat with different types //

let x = 1+1;
let y = '5' + 1;

console.log(y);


// compare values & compare values and types//

// case1//

let a = 10;
let b = '10';

if (a == b){
    console.log('Case1 done')
}else if (a != b){
    console.log('Case1 not done')
}

// Case2 //

let k = 10;
let j = '10';

if (k === j) {
    console.log('Case2 done')
}else if (k !== j) {
    console.log('Case2 not done')
}


// logic comparison operation//
let statut = 'etudiant';
let age =21;

if (statut= '')