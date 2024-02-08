
/// normal functions

function somme(a,b){
    return a + b
}
console.log(somme(4,5))

/// fonction declaré

let sommes = function(a,b){
    return a + b 
}
let sm = sommes(3,7)
 console.log(sm)

 // fonction fléché Arrow functions

 let a = function(){
    return console.log("hello world!")
 }

 a()

 let greet = () => console.log("hello ifo")

 greet()

 let nomcomplet = (nom, prenom) => {
    let fullname = nom + " " + prenom;

    return fullname;
 }

 console.log(nomcomplet("Mahfoud", "Anas"));


 /// const modifier fonction

 const variable = (a) => {
    return a + " ma_variable"
 };

 console.log(variable(""))
 console.log(variable(12))

//  const variable = (a,b) => {
//     return a * b
//  };



/// les expressions lambda
/// .map() retourne un nouveau tableau / doesn't modify
/// anonym functions

let jours = ["Lundi", "Mardi", "Mercredi" , "jeudi"];
let i = 0;
jours.map(function(item){
    i++
    return console.log("hello " + i + " " + item);
})

b = 0
jours.map( (item) =>{
    if (item === "jeudi"){
        item += "* Jour férier"
    }
    b++
    return console.log("hi " + b + " " + item)
} )

jours.forEach((item) => {
    b++
    return console.log("hi " + b + " " + item)
})

console.log(jours)

const stagiares = [
    {nom: "Sidqui" , prenom: "Zakaria" , age: 24} , 
    {nom: "Marzoug" , prenom: "Khalid" , age: 22} ,
    {nom: "Hilmi" , prenom: "Ilyas" , age: 18} ,
    {nom: "Ouafik" , prenom: "Mohamed" , age: 18} 
];


stagiares.map((item)=> {
    console.log(item["nom"] + " " + item.prenom);
})

let nomStagiare ;

nomStagiare = stagiares.map((item)=> {
    let name = item.nom
    return name
});
console.log(nomStagiare);

let nomAgeStagiare;

nomAgeStagiare = stagiares.map((item)=> {
    let Names = item.nom;
    let Ages = item.age;
    return {nom: Names ,age: Ages} 
});

console.log(nomAgeStagiare);

nomAgeStagiare = stagiares.map((item)=> {
    let Names = item.nom;
    let Ages = item.age;
    return [Names , Ages]
});
console.log(nomAgeStagiare);


///. map() paramètre
// stagiares.map((item, index, arr) =>{
//      console.log(item);
//      console.log(index);
//      console.log(arr);
// });

let nameAge;

nameAge = stagiares.map((item, index)=>{
    let st = {...item,branche: "DD",id: (index+1)}
    return st;
})
console.log(nameAge)
 

let nameRe;

nameRe = stagiares.map((item, index)=>{
    let re = "";
    if (item.age >= 20 ){
        re= "Plus de 20 ans.";
    }else {
        re ="Moins de 20 ans.";
    };
    let st = {...item,branche: "DD",id: (index+1), remarque: re};
    return st;
});
console.log(nameRe);