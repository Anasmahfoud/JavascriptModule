// widow object
document.querySelector("#google").addEventListener('click',()=>{
    open("https://www.google.com/")
})


setTimeout
// sync async
// use callBack (fucntion inside argument) and Promise
// setTimeOut delay
let a = 5;
let b = 12;

let somme = a+b;

/* let i = 0;
setInterval(()=>{
    i++;
    console.log(i)
},1000) */

// async it doesn't stop execution
/* setTimeout(()=>{
    console.log("5 seconds done!")
},5000) */


// callback function
/* let Stagiares = getData((listStagiares)=>{
    console.log(listStagiares)
})


function getData(myCallBackFunction){
    (()=>{
        return myCallBackFunction(["ELKADIRI","FEYD","ELBATOULI"])
    },200)
    
} */

// DOM promise are in regional

/// promise Producteur et consommateur
//const Stagiares = getData().then(function) // result is promise ; Consume with method Call back function

/// promise has 3 status "Pending" ,[something]("Fullfiled","error") 
/// consume with .then() which is  callbackfunction
let found = true;
const Stagiares = getData().then((Response)=>{
    console.log(Response)
    return getNote(1)
}).then((Response)=>{
    console.log(Response)
})
.catch((error)=>{
    console.log(error)
})


console.log(Stagiares)

// promise returns new promise
// object got resolve and reject
/// function  producteur de promise

function getData(){

    return new Promise((resolve,reject)=>{
        if (found){
            resolve([{id:1,name:"ELAKADIRI"}, {id:2,name:"FEYD"}, {id:3,name:"ELABTOULI"}])
        }else{
            reject("data not found")
        }
        
    })
}




function getNote(id){
    let ListNote = [{id:1,note:30}, {id:2,note:40}, {id:3,note:35}]
    let stagiare = ListNote.find((itemValue)=>{
        return itemValue.id == id
    })
    return new Promise((resolve,reject)=>{
        if(stagiare != null){
            return resolve(stagiare.note)
        }else{
            return reject("Stagiare not found!")

        }
    })
}


//// async await

