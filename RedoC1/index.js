const products = [{
                   nom:"laptop",
                   prix:3000,
                   qte:50
                  },
                  {
                   nom:"mouse",
                   prix:100,
                   qte:30
                  },
                  {
                   nom:"keyboard",
                   prix:300,
                   qte:100
                  },
]

const cart = []

function addToCart(event){
    event.preventDefault();
    let produit = document.getElementById("produit").value
    let stockProduct = products.find((itemValue)=>{
        return itemValue.nom == produit
    })
    if (stockProduct.qte >0){
        cart.push({name: produit , price: stockProduct.prix , quantity: 1})
        products[products.indexOf(stockProduct)].qte -= 1;
    }
    
}

function displayCart(event){
    event.preventDefault();
    let display = document.getElementById("display");
    display.innerHTML = ''
    let ul = document.createElement("ul");
    display.append(ul);
    cart.forEach((itemValue , index)=>{
        let li = document.createElement("li")
        li.innerHTML = `-Produit:${itemValue.name}; -Price:${itemValue.price}; -Quantity:${itemValue.quantity}`
        document.querySelector("#display ul").append(li)
        let del = document.createElement("button")
        del.innerHTML = "Supprimer"
        del.classList.add("supprimer")
        del.addEventListener("click",removeProduct) // err
        document.querySelector("#display ul").children[index].append(del) 
    })

    
}

function calculTotal(event){
    event.preventDefault();
    let total = 0;
    for(let i = 0;i<cart.length ;i++){
        total += cart[i].quantity * cart[i].price // error
    }
    console.log(total)
}

function removeProduct(event){
    let toRemove = event.target
    let toRemoveIndex = toRemove.parentElement.textContent // errror
    console.log(toRemoveIndex)
    let productRemove = toRemoveIndex.substring(toRemoveIndex.indexOf(":")+1,toRemoveIndex.indexOf(";"))
    console.log(productRemove)
    cart.splice(cart.findIndex((itemValue)=>{return itemValue.name == productRemove}),1)
}

document.getElementById("ajouter").addEventListener("click", addToCart)
document.getElementById("afficher").addEventListener("click", displayCart)
document.getElementById("calculer").addEventListener("click", calculTotal)


