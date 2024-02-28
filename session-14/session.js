// document.querySelector("button").addEventListener("click", function getStatus(e){
//     e.preventDefault()
//     let Username = document.querySelector("#username").value
//     let Email = document.querySelector("#email").value
//     let Password = document.querySelector("#password").value
//     let Confirm = document.querySelector("#confirm").value

//     if(Password == Confirm){
//         document.querySelector("#password").className = "success"
//         document.querySelector("#confirm").className = "success"
//         document.querySelector("#status3").style.display = "none"

//     }else{
//         document.querySelector("#password").className = "fail"
//         document.querySelector("#confirm").className = "fail"
//         document.querySelector("#status3").style.display = "block"
//     }
//     var pattern = /^([a-zA-Z0-9]{5,})+@gmail.com/;

//     var result = pattern.test(Email)

//     if (result == true){
//         document.querySelector("#email").className = "success"
//         document.querySelector("#status2").style.display = "none"

//     }else{
//         document.querySelector("#email").className = "fail"
//         document.querySelector("#status2").style.display = "block"
//     }
   



//     if (Username.length > 3 && Username.length < 25){
//         document.querySelector("#username").className = "success"
//         document.querySelector("#status1").style.display = "none"
//     }else{
//         document.querySelector("#username").className = "fail"
//         document.querySelector("#status1").style.display = "block"
//     }

    


// })

setInterval(()=>{
    let Username = document.querySelector("#username").value
    let Email = document.querySelector("#email").value
    let Password = document.querySelector("#password").value
    let Confirm = document.querySelector("#confirm").value
    let bad = ""
    let bad2 = ""
    let badb = false;
    let badb2 = false;


    if(Password == Confirm && Password.length > 4){
        document.querySelector("#password").className = "success"
        document.querySelector("#confirm").className = "success"
        document.querySelector("#status3").style.display = "none"

    }else if (Password != Confirm){
        badb = true;
        bad = "doesn't match"
    }
    if(Password.length <= 4){
        badb2 = true;
        bad2 = "is smaller than 4."
        
    }

    if (badb == true || badb2 == true){
        document.querySelector("#password").className = "fail"
        document.querySelector("#confirm").className = "fail"
        document.querySelector("#status3").innerHTML = "The password " + bad2 + " "  + bad
        document.querySelector("#status3").style.display = "block"
    }
   

    var pattern = /^([a-zA-Z0-9]{5,})+@gmail.com/;

    var result = pattern.test(Email)

    if (result == true){
        document.querySelector("#email").className = "success"
        document.querySelector("#status2").style.display = "none"

    }else{
        document.querySelector("#email").className = "fail"
        document.querySelector("#status2").style.display = "block"
    }
   



    if (Username.length > 3 && Username.length < 25){
        document.querySelector("#username").className = "success"
        document.querySelector("#status1").style.display = "none"
    }else{
        document.querySelector("#username").className = "fail"
        document.querySelector("#status1").style.display = "block"
    }

    

},10)

    
