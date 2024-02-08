
let todaysDate = new Date().getDay()

console.log(todaysDate)

switch (todaysDate){
    case 0:
        jour="Dimanche";
        break;
    case 1:
        jour="Lundi";
        break;
    case 2:
        jour="Mardi"
        break;
    case 3:
        jour="Mercredi";
        break;
    case 4:
        jour="Jeudi";
        break;
    case 5:
        jour="Vendredi"
        break;
    case 6:
        jour="Samedi";
        break;

}

console.log(jour)


let dAbrev = "ID"

switch (dAbrev){
    case "DD":
        filiere = "Developpement Digitale";
        break;
    case "ID":
        filiere = "Infrastructure Digitale";
        break;
    case "WD": 
    filiere = "Web Design";
        break;
    default:
        filiere = "Cette filière n'éxiste pas"
}

console.log(filiere)

/// Use Switch case instead of multiple elifs


/// iteration

jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

for (i=0; i<=5; i++) {
    console.log(jours[i])
}

Jours = {
    0:"Lundi",
    1: "Mardi",
    2: "Mercredi",
    3: "Jeudi",
    4: "Vendredi",
    5: "Samedi",
    6: "Dimanche"
}

for (i=0; i<=5; i++) {
    console.log(Jours[i])
}

for (item in jours){
    console.log(jours[item])
}

for (jour of jours){
    console.log(jour)
}

/// JIT compilation /// foreach(function)

let text = "";
let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);


 
function myFunction(item, index) {
  text += index + ": " + item + "\n" ;
}

console.log(text);

/// while
let n =  10;
while (n<=0){
    n -= 1;
}

console.log(n);

// do while excutes atleast on time 

do {
    
    n = n-1
    console.log(n);
} 
while (n > 10 )

/// break and continue
let txt = "HI"
for (let i =0 ; i<10; i++)
{
    if (i === 3) {
        continue; // ignored the rest of this if statement
        txt += "The number is" + i + "\n"
    }
    txt += "The name is" + i + "\n"
}
console.log(txt)

/// break get out when enters a condition