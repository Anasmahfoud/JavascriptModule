

document.addEventListener("keydown", ( event) =>{
    
    if (event.keyCode == 38){
        document.body.style.backgroundColor = "yellow"
    }
})


document.addEventListener("keydown", ( event) =>{
    
    if (event.keyCode == 37){
        document.body.style.backgroundColor = "green"
    }
})

document.addEventListener("keydown", ( event) =>{
    
    if (event.keyCode == 39){
        document.body.style.backgroundColor = "red"
    }
})

document.addEventListener("keydown", ( event) =>{
    
    if (event.keyCode == 40){
        document.body.style.backgroundColor = "blue"
    }
})

// when holdin btn it only shows keydown and key press oevr and over until you release it shows up keyup

// document.querySelector("#nom").addEventListener("keypress", (event ) =>{
//     if (event.keyCode == 39){
//         alert("stop it")
//     }
    
// })


document.addEventListener("keypress", (event) =>{
    if (event.keyCode == 39){
        console.log("left press")


    }
    
})


document.addEventListener("keyup", (event) =>{
    if (event.keyCode == 39){
        console.log("left up")


    }
    
})

document.addEventListener("keydown", (event) =>{
    if (event.keyCode == 39){
        console.log("left down")


    }
    
})


document.querySelector("#nom").addEventListener("keydown", (event ) =>{
    if (event.keyCode == 39){
        alert("next form")
    }
    
})

