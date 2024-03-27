const Produits = []

function ajouter(){
    document.getElementById("field").style.display= "block"
}

function Annuler(){
    document.getElementById("field").style.display= "none"
}

function Sauvegarder(event){
    // Recuperation des données
    event.preventDefault();
    let code = document.getElementById("code_produit").value
    let titre = document.getElementById("titre").value
    let desc = document.getElementById("description").value
    let prix = document.getElementById("prix").value
    let categorie = document.getElementById("categorie").value

    let codeElement = document.getElementById("code_produit")
    let titreElement = document.getElementById("titre")
    let descElement = document.getElementById("description")
    let prixElement = document.getElementById("prix")
    let categorieElement = document.getElementById("categorie")
    // Validation
    let pass = true;
    codeElement.style.border = "2px solid green"
    titreElement.style.border = "2px solid green"
    descElement.style.border = "2px solid green"
    prixElement.style.border = "2px solid green"
    categorieElement.style.border = "2px solid green"
    // code
    if(/^\d+$/.test(code) == false || Produits.find((itemValue)=>{return itemValue.Code == code}) != null || code == ""){
        pass = false
        codeElement.style.border = "2px solid red"
    }
    // titre
    if(/^[a-zA-Z]+$/.test(titre) == false){
        pass = false
        titreElement.style.border = "2px solid red"
    }
    // description
    if(/^(\w|\s)+$/.test(desc) == false){
        pass = false
        descElement.style.border = "2px solid red"
    }
    // prix
    if( /^\d+$/.test(prix) == false || Produits.find((itemValue)=>{return itemValue.Prix == prix}) != null || prix== ""){
        pass = false
        prixElement.style.border = "2px solid red"
    }
    // categorie
    if(/^(\w|\s)+$/.test(categorie) == false){
        pass = false
        categorieElement.style.border = "2px solid red"
    }

    // insertion
    if(pass == true){

    
    let obj = {Code: code, Titre: titre, Description: desc, Prix: prix, Categorie: categorie}
    Produits.push(obj)
    let parent= document.getElementById("table")
    let row = document.createElement("tr")
    row.addEventListener("click",(event)=>{
        row.classList.toggle("selected")
    })
    parent.append(row)
    let objectKeys = Object.keys(obj)
    for (let i = 0;i<objectKeys.length;i++){
    let data = document.createElement("td")
    data.innerText = obj[objectKeys[i]]
    row.append(data)
    }
}else{
    alert("Not Submitted")
}

}

function Vider(){
    document.getElementById("form").reset()
}

function Supprimer (){
    let HTmlList = document.getElementsByClassName("selected")
    let numRemoved = HTmlList.length
    for(let i=numRemoved-1;i>=0;i--){
        let codeDelete = HTmlList[i].firstElementChild.value
        Produits.splice(Produits.findIndex((itemValue)=>{return itemValue.Code == codeDelete}),1)
        HTmlList[i].remove()
    }
    alert(`Removed ${numRemoved} elements!`)
}

let liste = document.getElementById("liste")
async function AfficherListe(){
    
    const data = await fetch("https://khalidmarzoug.pythonanywhere.com")
    const dataJson = await data.json()
    dataJson.data.forEach((itemValue)=>{
        let li = document.createElement("li")
        li.innerText = itemValue.titre
        liste.append(li)
    })
}



document.getElementById("ajouter").addEventListener("click", ajouter)
document.getElementById("annuler").addEventListener("click", Annuler)
document.getElementById("vider").addEventListener("click", Vider)
document.getElementById("sauvegarder").addEventListener("click", Sauvegarder)
document.getElementById("afficherListe").addEventListener("click", AfficherListe)
document.getElementById("supprimer").addEventListener("click", Supprimer)




// Class
class Produit{
    constructor(codeproduit,titre,description,prix,categorie){
        this.codeproduit = codeproduit
        this.titre = titre
        this.description = description
        this.prix = prix
        this.categorie = categorie
    }
}

let produit1 = new Produit(1,"Laptop","The best Hp laptop ever!",8000,"Electronics")
let produit2 = new Produit(2,"Mouse","The best Hp Mouse ever!",80,"Electronics")
console.log(produit1.titre , produit2.titre)