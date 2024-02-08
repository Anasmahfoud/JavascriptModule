
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