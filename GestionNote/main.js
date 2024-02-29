// function to get elements by query
let cssquery = (query) =>{
    return document.querySelector(query);
}

/// intiialazing variables
let Stagiares =[];
let CIN = cssquery("#cin");
let nam = cssquery("#name");
let lastName = cssquery("#lastname");
let branche = cssquery("#branche"); 
let module = cssquery("#module");
let grade = cssquery("#grade");
let search = cssquery("#searchInput")
let cM = module.children;
let p;


// get branche selected value
branche.addEventListener("change", () =>{
   p = branche.options[branche.selectedIndex].value;
    //console.log(p)

    if (p=="DD"){
        cM[0].value = "Python"
        cM[0].innerHTML = "Python"
        cM[1].value = "Javascript"
        cM[1].innerHTML = "Javascript"
        cM[2].value = "PHP"
        cM[2].innerHTML = "PHP"
    }
    else if (p=="IR"){
        cM[0].value = "Linux"
        cM[0].innerHTML = "Linux"
        cM[1].value = "Networking"
        cM[1].innerHTML = "Networking"
        cM[2].value = "Cybersecurity"
        cM[2].innerHTML = "Cyber Security"
    }
    else  if (p=="GD"){
        cM[0].value = "Color Theory"
        cM[0].innerHTML = "Color"
        cM[1].value = "Principles"
        cM[1].innerHTML = "Principles"
        cM[2].value = "Typography"
        cM[2].innerHTML = "Typography"
    }
})

// functions to get values
function getVariables(){
    CINv = CIN.value;
    namev = nam.value;
    lastNamev = lastName.value;
    branchev = branche.value;
    modulev = module.value;
    gradev = grade.value;
}

// intitializing value variables
let CINv;
let namev;
let lastNamev;
let branchev;
let modulev;
let gradev;
let searchv;
let signed ;
let indexs;

let obje;

// Function to confirm user
function confirmUser(){
    Stagiares.forEach((item , index)=>{
        if (item.CIN == CINv){
            signed = true;
            indexs = index;
        }
    })
    return indexs
}


// function to validate form
function validateForm(type){
    getVariables()
    // all p variables
    let statuscin = cssquery("#statuscin")
    let statusName =cssquery("#statusname")
    let statusLastName = cssquery("#statuslastname")
    let statusBranch =cssquery("#statusbranche")
    let statusGrade =cssquery("#statusgrade")
    // all boolean
    

    // p and input 
    // validate CIN
    let checkCIN ;
    signed = false;
    confirmUser()
    checkCIN = true;
    
    if (CINv.length != 8 || signed == true && type == "submit"){
        let text = "Your CIN is less than 8. "
        if (signed == true ){
            text += "You CIN is not unique"
        }
        statuscin.innerHTML = text;
        statuscin.classList.add("failstatus")
        checkCIN = false;
        CIN.classList.remove("success")
        CIN.classList.add("fail")
    }else if (CINv.length != 8 && type != "submit" ){
        let text = "Your CIN is less than 8. "
        statuscin.innerHTML = text;
        statuscin.classList.add("failstatus")
        checkCIN = false;
        CIN.classList.remove("success")
        CIN.classList.add("fail")
    } 
    if (checkCIN== true){
        CIN.classList.add("success")
        
        CIN.classList.remove("fail")
        statuscin.classList.remove("failstatus")
    }
    // validate name
    if (namev.length < 4){
        nam.classList.remove("success")
        
        nam.classList.add("fail")
        statusName.classList.add("failstatus")
        statusName.innerHTML = "less than 4 characters";

    }else{
        nam.classList.remove("fail")
        statusName.classList.remove("failstatus")
        
        nam.classList.add("success")

    }

    // validate last name
    if (lastNamev.length < 4){
        lastName.classList.remove("success")
        
        lastName.classList.add("fail")
        statusLastName.classList.add("failstatus")
        statusLastName.innerHTML = "less than 4 characters"

    }else{
        lastName.classList.remove("fail")
        statusLastName.classList.remove("failstatus")
        
        lastName.classList.add("success")

    }
    // validate branche
    if (branchev == ""){
        branche.classList.remove("success")
        module.classList.remove("success")
        
        branche.classList.add("fail")
        module.classList.add("fail")
        statusBranch.classList.add("failstatus")
        statusBranch.innerHTML = "please select branch"

    }else{
        branche.classList.remove("fail")
        module.classList.remove("fail")

        statusBranch.classList.remove("failstatus")
        
        branche.classList.add("success")
        module.classList.add("success")


    }


    //validate grade
    if (gradev == undefined){
        grade.classList.remove("success")
        
        grade.classList.add("fail")
        statusGrade.classList.add("failstatus")
        statusGrade.innerHTML = "can't leave this empty!"

    }
    if (gradev == ""){
        grade.classList.remove("success")
        
        grade.classList.add("fail")
        statusGrade.classList.add("failstatus")
        statusGrade.innerHTML = "can't leave this empty."

    }else{
        grade.classList.remove("fail")
        statusGrade.classList.remove("failstatus")
        
        grade.classList.add("success")

    }
    
    // get bool
    if (checkCIN == false || namev.length < 4 || lastNamev.length < 4 || gradev > 40 || branchev == "" || gradev == ""){
        return false
    }else{
        return true
    }
}



// Submit
cssquery("#sub").addEventListener("click", (e)=>{
    e.preventDefault();
    getVariables()
    let checkval = validateForm("submit")
    if (checkval == true){
    
        let obj = {} 
        obj["CIN"] = CINv;
        obj["name"] = namev;
        obj["lastName"] = lastNamev ;
        obj["branche"] = branchev;
        obj[modulev] = gradev;
        Stagiares.push(obj)
    
    }
    else{
        alert("Not submitted")
    }
   
})
// modify
cssquery("#modify").addEventListener("click" , (e)=>{

    e.preventDefault();
    getVariables()
    signed = false;
    let checkval = validateForm("reset")
    if (checkval == true){
        indexs = confirmUser()
        if (signed == true){
        let obj = Stagiares[indexs]
        obj["CIN"] = CINv;
        obj["name"] = namev;
        obj["lastName"] = lastNamev ;
        obj["branche"] = branchev;
        obj[modulev] = gradev;
        }else if(signed == false){
        alert("This student doesn't exist.")
        }
    }else{
        alert("Not Modified")
    }


})
// delete
cssquery("#delete").addEventListener("click", (e)=>{
    e.preventDefault();
    let signed= false ;
    indexs = confirmUser()
    CINv = CIN.value;
    Stagiares.forEach((item,index)=>{
        if (item.CIN == CINv){
            signed = true;
            indexs =index;
            console.log(indexs);
            console.log(signed)
        }
    })
    if (signed==true){
        if (indexs == 0){
            Stagiares.shift();
        }else{
            Stagiares.splice(indexs,indexs);
        }
        
        console.log("spliced")
    }
    else if(signed == false){
        alert("This student doesn't exist.")
    }


})


let found;
// search
cssquery("#search").addEventListener("click",(e)=>{
    e.preventDefault();
    searchv = search.value;
    found =false;
    Stagiares.forEach((item,index)=>{
        if (item.CIN == searchv){
            console.log(item)
            let Skeys = Object.keys(item);
            let Svalues = Object.values(item);
            let text ="";
            Skeys.forEach((value,index)=>{
                text +=`-${value}: ${Svalues[index]} <br> `
            })

            found = true
            cssquery("#display").innerHTML= text;
            cssquery("#display").style.display = "block"
        }
        
    })
    if(found == false){
        alert("This Student doesn't exist.")
    }
})


cssquery("#res").addEventListener("click",(e) => {
    e.preventDefault();
    cssquery("form").reset();

})