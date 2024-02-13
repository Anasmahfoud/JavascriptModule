
/// select value
// console.log(document.querySelector(".nom").value);

// document.querySelector(".nom").value = "AHMED";


// console.log(typeof (document.querySelector(".age").value))


//// calculator


let n1 = Number(document.querySelector(".n1").value);
let n2 = Number(document.querySelector(".n2").value);
let result = n1 + n2;
document.querySelector(".result").value = result;
if (result< 20){
    document.querySelector(".result").style.backgroundColor = "green"
}else{
    document.querySelector(".result").style.backgroundColor = "red"
}


//// calculator button function




function sum(e){
    e.preventDefault();
    let n1 = Number(document.querySelector(".n3").value);
    let n2 = Number(document.querySelector(".n4").value);
    let result = n1 + n2;
    document.querySelector(".results").value = result; 
    if (result< 20){
        document.querySelector(".results").style.backgroundColor = "green";
    }else{
        document.querySelector(".results").style.backgroundColor = "red";
    }
}

// document.querySelector(".sum").addEventListener("click",sum)


// document.querySelector(".sum").addEventListener("click",(e) => {
//     e.prevetDefault()
//     let n1 = Number(document.querySelector(".n3").value);
//     let n2 = Number(document.querySelector(".n4").value);
//     let result = n1 + n2;
//     document.querySelector(".results").value = result; 
//     if (result< 20){
//         document.querySelector(".results").style.backgroundColor = "green";
//     }else{
//         document.querySelector(".results").style.backgroundColor = "red";
//     }
// })


document.querySelector(".sum").addEventListener("click", function(e){
    e.preventDefault();
    let n1 = Number(document.querySelector(".n3").value);
    let n2 = Number(document.querySelector(".n4").value);
    let result = n1 + n2;
    document.querySelector(".results").value = result; 
    if (result< 20){
        document.querySelector(".results").style.backgroundColor = "green";
    }else{
        document.querySelector(".results").style.backgroundColor = "red";
    }
})

document.querySelector(".click").addEventListener("click", (e) =>{
    e.preventDefault;
    window.alert("You clicked me!")
})


var h = document.head;
console.log(h);
var b = document.body;
console.log(b);


/// simple game
//// enter button
let toGuess;
let guess;

function main (e){
    e.preventDefault();
    toGuess = Number(document.querySelector(".main-display").value);
    document.querySelector(".main-button").style.display = "none";
    document.querySelector(".guess-button").style.display = "block";
    document.querySelector(".main-display").value = "";
}
document.querySelector(".main-button").addEventListener("click",main)


//// refresh function
function refresh(){
    a = 20;
    document.querySelector(".points").textContent = a + " pts"
    document.querySelector(".main-button").style.display = "block";
    document.querySelector(".guess-button").style.display = "none";
    document.querySelector(".main-display").value = "";
    document.querySelector(".points").style.backgroundColor = "green"
}
//// guess button

a= 20

function guessing(e){
    e.preventDefault();
    guess = Number(document.querySelector(".main-display").value)
    if (a > 0 && toGuess != guess ){
        a -= 1;
        document.querySelector(".points").textContent = a + " pts";
        if (guess < toGuess){
            document.querySelector(".status-text").textContent = "The number you entered is below the wanted number."
        }else if (guess > toGuess){
            document.querySelector(".status-text").textContent = "The number you entered is above the wanted number."
        }
        if (a <= 10 && a > 5){
            document.querySelector(".points").style.backgroundColor = "orange"
        }else if (a <= 5){
            document.querySelector(".points").style.backgroundColor = "red"
        }  
    }else if (toGuess == guess){
        document.querySelector(".status-text").textContent = `You Won! with ${20-a} tries!`;
        refresh()
    }
    else if (a == 0){
        document.querySelector(".status-text").textContent = "You lost! Try Again"
        refresh()
    }
}



document.querySelector(".guess-button").addEventListener("click", guessing)