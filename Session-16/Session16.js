let stagiare = {
    nom:'AIT',
    prenom: 'MOHAMED',
    age : 17,
    branche: 'dev',
    greet: function (){
        console.log(`I am ${this.nom} ${this.prenom}`)
    }
}

console.log(stagiare.nom)
console.log(stagiare.prenom)
console.log(stagiare.branche)
stagiare.greet()

// --Before EC6--
/// create class old 
function Stagiaire (nom, prenom,age,branche){
    this.nom = nom
    this.prenom = prenom
    this.age = age
    this.branche = branche
    this.moreInfo = ()=>{
        console.log(`Hello my name is ${this.name} ${this.prenom}.\n I am ${this.age} years old!.\nThe branche i chose is ${this.branche}`)
    }
}

const st1 = new Stagiaire('Anas', 'Mahfoud', 19, 'Developpement Digitale')

/// Show object
console.log(st1)
st1.moreInfo()

// obj achat prix libelle quantité code and method calcule tvA prix * quantité * 17%

// This a Constructor:
function Achat (code,libelle,quantité,prix, TVA){
    this.code = code;
    this.libelle = libelle;
    this.quantité = quantité;
    this.prix = prix;
    this.TVA = TVA;
    this.calculerTVA = ()=>{
    
        return(this.prix* this.quantité) + ((this.prix* this.quantité)* this.TVA)
    }
}

let achat1 = new Achat(1,"T-shirt", 5,10,(10/100) )
console.log("Your Total:")
console.log(achat1.calculerTVA())


// --After ES6--
class Order{
    constructor(id,article,prix,qte,TVA){
        this.id = id;
        this.article = article;
        this.prix = prix;
        this.qte = qte;
        this.TVA = TVA;
    }
    calcTVA(){
        return ((this.prix * this.qte)+ ((this.prix * this.qte) * this.TVA))
    }
}

let order1 = new Order(2,"Mouse",10,3,(10/100))
let order2 = new Order(3,"Pc",1000,1,(20/100))

console.log(`Your Order Total of id ${order1.id} :`)
console.log(order1.calcTVA())

console.log(`Your Order Total of id ${order2.id} :`)
console.log(order2.calcTVA())

/// String Methods 

let branche = "développement"
let grp = "DD105"
/// length
console.log(branche.length)
// charAt
console.log(branche.charAt(2))
// substring
console.log(grp.substring(2,5))
console.log(branche.substring(2,6))
 // toUpperCase
 
 let nom = "mohammed";

 console.log(nom.toUpperCase())


 // startsWith() BOOLEAN
 console.log(nom.startsWith('m'))

  // endsWith() BOOLEAN
 console.log(nom.endsWith('d'))


 /// Arrayfrom
let phrase = "It was a dark night"
 console.log(Array.from(nom))
 console.log(nom.split(""))
 console.log(phrase.split(" ").join("-----"))


 /// Date

 /// age
let mydate = new Date()
let otherdate = new Date('2006-02-24')
let age = Number(mydate.getFullYear()) - Number(otherdate.getFullYear())
console.log(age)

/// getFullYear()
console.log(mydate.getFullYear())

// getDate()
console.log(mydate.getDate())

// getDay()
console.log(mydate.getDay())

// getHours()
console.log(mydate.getHours())

// getMinutes()
console.log(mydate.getMinutes())

// custom Date

let yesterday = new Date('2024-03-03')
console.log(yesterday)

// setMonth
yesterday.setMonth(3)
console.log(yesterday)

// setUTCDate() utc


