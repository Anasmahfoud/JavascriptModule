

function cssquery(query){
    return document.querySelector(query)
}

cssquery("#submit").addEventListener("click",(e) =>{
    e.preventDefault()
    let Username = cssquery('#username').value
    let Email = cssquery('#email').value
    let Password = cssquery('#password').value
    let Confirm = cssquery('#confirm').value
    let bad = ""
    let bad2 = ""
    let badb = false;
    let badb2 = false;


    if(Password == Confirm && Password.length > 4){
        cssquery('#password').className = "success"
        cssquery('#confirm').className = "success"
        cssquery('#status3').style.display = "none"

    }else if (Password != Confirm){
        badb = true;
        bad = "doesn't match"
    }
    if(Password.length <= 4){
        badb2 = true;
        bad2 = "is smaller than 4."
        
    }

    if (badb == true || badb2 == true){
        cssquery('#password').className = "fail"
        cssquery('#confirm').className = "fail"
        cssquery('#status3').innerHTML = "The password " + bad2 + " "  + bad
        cssquery('#status3').style.display = "block"
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
    cssquery("form").submit()
}
)

cssquery("#Reset").addEventListener("click",(e) =>{
    e.preventDefault();
    
    cssquery('#password').className = ""
    cssquery('#confirm').className = ""
    cssquery('#username').className = ""
    cssquery('#email').className = ""
    cssquery('#password').className = ""
    for ( para of document.querySelectorAll('p')){
        para.style.display = "none"
    }
    cssquery("form").reset()
})

/* setInterval(()=>{
    let Username = cssquery('#username').value
    let Email = cssquery('#email').value
    let Password = cssquery('#password').value
    let Confirm = cssquery('#confirm').value
    let bad = ""
    let bad2 = ""
    let badb = false;
    let badb2 = false;


    if(Password == Confirm && Password.length > 4){
        cssquery('#password').className = "success"
        cssquery('#confirm').className = "success"
        cssquery('#status3').style.display = "none"

    }else if (Password != Confirm){
        badb = true;
        bad = "doesn't match"
    }
    if(Password.length <= 4){
        badb2 = true;
        bad2 = "is smaller than 4."
        
    }

    if (badb == true || badb2 == true){
        cssquery('#password').className = "fail"
        cssquery('#confirm').className = "fail"
        cssquery('#status3').innerHTML = "The password " + bad2 + " "  + bad
        cssquery('#status3').style.display = "block"
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

    
 */