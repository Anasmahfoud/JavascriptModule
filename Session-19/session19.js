async function getCompanies(){
    const companiesjson = await fetch("https://fakerapi.it/api/v1/companies?_quantity=100")
    const CompanyList = await companiesjson.json()
    const list = document.createElement("ol")
    document.body.append(list)
    CompanyList.data.forEach((itemValue) => {
        const listItem = document.createElement("li")
        listItem.innerHTML = itemValue.name
        list.append(listItem)
    });
}
getCompanies()

// object 
const stagiares = {
    "id" : 1,
    "nom": "ANAS",
    "prenom": "MAHFOUD",
    "age": 19
}
/// object to json
const stagiaresjson = JSON.stringify(stagiares)

console.log(stagiaresjson)


// json to object
const stagiaresObject =JSON.parse(stagiaresjson)
console.log(stagiaresObject.nom)


// AJAX


