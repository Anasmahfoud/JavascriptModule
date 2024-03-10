let found = true;

let StagaireNoteListe = []
const Stagiare= getData().then((Response)=>{
    console.log(Response)
    return getNote()
})
.then((Response)=>{
     console.log(Response)
     StagaireNoteListe= [...Response]
})
.catch((error)=>{
    console.log(error)
})


function getData(){

    return new Promise((resolve,reject)=>{
        if (found){
            resolve([{id:1,name:"ELAKADIRI"}, {id:2,name:"FEYD"}, {id:3,name:"ELABTOULI"}])
        }else{
            reject("data not found")
        }
        
    })
}





function getNote(){
    
    return new Promise((resolve,reject)=>{
        
        return resolve([
            {id: 1, module: "JAVASCRIPT", note: "14"},
            {id: 1, module: "HTML", note: "15"},
            {id: 1, module: "POO", note: "10"},
            {id: 2, module: "JAVASCRIPT", note: "9"},
            {id: 2, module: "HTML", note: "11"},
            {id: 2, module: "POO", note: "13"},
            {id: 3, module: "JAVASCRIPT", note: "10"},
            {id: 3, module: "HTML", note: "14"},
            {id: 3, module: "POO", note: "15"}
            
        ])
        
    })
}

document.querySelector("#afficher").addEventListener('click',()=>{
    console.log(StagaireNoteListe.filter((itemValue)=>{
        return itemValue.id == 1
    }))
})




document.querySelector("#api").addEventListener('click',()=>{
    let dogA = fetch("https://dog.ceo/api/breeds/image/random").then((Response)=>{
        return Response.json();
    }).then((data)=>{
       document.querySelector("img").setAttribute('src',data.message)
    })
})
