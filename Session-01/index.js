/* two lines
comments */

// one line comment//
let nombre1 = 3;
let nombre2 = 4;
let sum = nombre1 + nombre2; 

const PI = 3.14;



// Functions //
                // procedure //
function greet (name) {
  console.log("Hello mr "+ name)
}


greet('Anas');
greet('Nadir');
greet('Hamza');
    
      // functions that returns values //
function Sum(n1,n2){
     return n1 + n2
}

console.log(Sum(nombre1,nombre2));


// Global outside of function  and local is in, function or procedures//
// blocks //
// let is for block [use let a lot more]// 
// var is for the whole function scope//

function inscrire(){
    let nom = "AAAA";
    let prenom ="Samih";
    let age = 19;
    

    if (age == 19 ) {
       var statut = 'etudiant'
        console.log(age)
    }
    console.log(statut)
}

inscrire()


// variable type//
// when youdon't give a variable a value it remains undefined //
var test = true , tetsing = 5
console.log(test)
test = new Boolean(0)
test = 0
console.log(test)


//  for loops  //


// while loops //
let text="";
let i= 0;
while (i < 10) {
    text += "The number is " + i +"<br>";
    i++;
  }
document.body.innerHTML = text;
console.log(text);



