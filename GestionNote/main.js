// function to get elements by query
let cssquery = (query) =>{
    return document.querySelector(query);
}

/// intiialazing variables
let Stagiares =[];
let Stagiarespics = []
let CIN = cssquery("#cin");
let nam = cssquery("#name");
let lastName = cssquery("#lastname");
let branche = cssquery("#branche"); 
let module = cssquery("#module");
let grade = cssquery("#grade");
let search = cssquery("#searchInput")
let cM = module.children;
let p;
const branchList = [{code: "DD", libelle: "Developpement Digitale", 
                    module: [{code: "python" , libelle: "Python"},
                             {code: "php", libelle: "PHP"}
                            ]},
                  {code: "IR", libelle: "Infrastructure Digitale", module: [{code: "linux" , libelle: "Linux"},
                  {code: "networking" , libelle: "Networking"},
                  {code: "kali" , libelle: "KALI"}
                 ]},
                  {code: "GD", libelle: "Graphic Design",module: [{code: "color theory" , libelle: "Color Theory"},
                  {code: "principles" , libelle: "Principles"}
                 ] }
                ]


// get branche selected value
branche.addEventListener("change", (event) =>{
   p = branche.options[branche.selectedIndex].value;
    //console.log(p)
    let codeSelectedBranche = event.target.value;

    let selectedBranche = branchList.find((itemValue)=>{
        return itemValue.code === codeSelectedBranche ;
    })
    for (let i =(cM.length -1) ;i>=0 ; i-- ) {
        module.removeChild(cM[i])
    }
    selectedBranche.module.map((itemValue)=>{
        let option = document.createElement("option");
        option.innerHTML = itemValue.libelle;
        option.setAttribute("value",itemValue.code);
        module.append(option);
    }) 

    
})

document.addEventListener("DOMContentLoaded",()=>{
    branchList.map((itemValue)=>{
        let option = document.createElement("option");
        option.setAttribute("value",itemValue.code)
        option.innerHTML = itemValue.libelle
        branche.append(option)
    })
    branchList[0].module.forEach((itemValue)=>{
        let option = document.createElement("option");
        option.setAttribute("value",itemValue.code);
        option.innerHTML = itemValue.libelle;
        module.append(option)

    })
    
})



// functions to get values
function getVariables(){
    CINv = CIN.value;
    namev = nam.value;
    lastNamev = lastName.value;
    branchev = branche.value;
    modulev = module.value;
    gradev = grade.value;
    searchv = search.value;
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
        let text = "";
        if (signed == true ){
            text += "You CIN is not unique"
        }
        if(CINv.length != 8 ){
            text += "Your CIN is less than 8. "
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
    let goodGrade = true;
    if (gradev > 40){
        grade.classList.remove("success")
        
        grade.classList.add("fail")
        statusGrade.classList.add("failstatus")
        statusGrade.innerHTML = "can't be more than 40!"
        goodGrade = false;

    }
    if (gradev == undefined ){
        grade.classList.remove("success")
        
        grade.classList.add("fail")
        statusGrade.classList.add("failstatus")
        statusGrade.innerHTML = "can't leave this empty!"
        goodGrade = false;

    }
    if (gradev == ""){
        grade.classList.remove("success")
        
        grade.classList.add("fail")
        statusGrade.classList.add("failstatus")
        statusGrade.innerHTML = "can't leave this empty."
        goodGrade = false;

    }
    if(goodGrade == true){
        grade.classList.remove("fail")
        statusGrade.classList.remove("failstatus")
        
        grade.classList.add("success")

    }
    
    // get bool
    if(emptyimg == true && type == "submit"){
        alert("You need Picture.");
        return false
    }
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
        obj["module"] = {}
        obj["module"][modulev] = gradev;
        obj["img"] = img
        obj["avg"] = Math.round(Object.values(obj["module"]).reduce((total,itemValue)=>{return total + itemValue},0)/ Object.values(obj["module"]).length);

        Stagiares.push(obj)
        console.log(obj)
        statRefresh();
        emptyimg = true;
        

    }
    else{
        alert("Not submitted")
    }
   
})


// get file url
let emptyimg = true;
let img ;
let fileEL = cssquery("#fileread")
fileEL.addEventListener("change",()=> {
    let reader = new FileReader();
    
    reader.readAsDataURL(fileEL.files[0])
    
    reader.addEventListener("load",()=>{
        img = reader.result;
        emptyimg = false;
    })
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
        obj["module"][modulev] = gradev;
        obj["avg"] = Math.round((Object.values(Stagiares[indexs].module).reduce((total,itemValue)=>{return total + Number(itemValue)},0))/ Object.values(Stagiares[indexs].module).length)
        statRefresh();
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
        }
    })
    if (signed==true){
        if (indexs == 0){
            Stagiares.shift();
        }else{
            Stagiares.splice(indexs,indexs);
        }
        
        statRefresh();
    }
    else if(signed == false){
        alert("This student doesn't exist.")
    }
    


})

//Show filter
cssquery("fieldset:nth-of-type(2) a").addEventListener("click",(e)=>{
    e.preventDefault();
    cssquery(".filter").classList.toggle("hide");
})


// search
cssquery('#search').addEventListener("click",()=>{
    getVariables()

    let toShow;
    switch(cssquery("[name='searchType']:checked").value){
        case "cin":
            toShow = Stagiares.filter((itemValue=>{
                return Object.values(itemValue).includes(searchv) == true;
            }))
            break;
        case "branch":
            toShow = Stagiares.filter((itemValue=>{
                return Object.values(itemValue).includes(searchv) == true;
            }))
            console.log(toShow);
            break;
        case "avg":
            switch (cssquery("[name='sort']:checked").value){
                case 'eq':
                    toShow = Stagiares.filter((itemValue=>{
                        return itemValue.avg == searchv;
                       
                    }))
                    
                    break;
                case 'big':
                    toShow = Stagiares.filter((itemValue=>{
                        return itemValue.avg > searchv;
                        
                    }))
                    
                    break;
                case 'low':
                    toShow = Stagiares.filter((itemValue=>{
                        return itemValue.avg < searchv;
                        
                    }))
                    
                    break;
            }
            break;
    }
    /// create elements and add them
    let parent1 = cssquery(".pfield");
        parent1.innerHTML = "";
    toShow.forEach((itemValue)=>{
        
        let profile = document.createElement("div")
        profile.classList.add("profile")
        parent1.append(profile)

        let container = document.createElement("div")
        container.classList.add("container")
        profile.append(container)
        let pimg = document.createElement("img")
        pimg.setAttribute("src",itemValue.img)
        container.append(pimg);

        let info = document.createElement("div")
        info.classList.add("info")
        profile.append(info);
        let pcin = document.createElement("p")
        pcin.innerHTML =  `-CIN: ${itemValue.CIN}`
        info.append(pcin)
        let pname = document.createElement("p")
        pname.innerHTML = `-Name: ${itemValue.name}`
        info.append(pname)
        let plastName = document.createElement("p")
        plastName.innerHTML =  `-LastName: ${itemValue.lastName}`
        info.append(plastName)
        let pbranch = document.createElement("p")
        pbranch.innerHTML = `-Branche: ${itemValue.branche}` 
        info.append(pbranch)      


        let grades = document.createElement("div")
        grades.classList.add("grades")
        profile.append(grades);
        Object.entries(itemValue.module).forEach((items)=>{
            let pmodule = document.createElement("p")
            pmodule.innerHTML = `-${items[0]}: ${items[1]}`
            grades.append(pmodule)
        })
        let pavg = document.createElement("p");
        pavg.innerHTML = `-Average: ${itemValue.avg}`
        pavg.style.fontSize = "1.4vw"
        grades.append(pavg)
        
    })
})
    
     
    
    
// reset
cssquery("#res").addEventListener("click",(e) => {
    e.preventDefault();
    cssquery("form").reset();

})


let count = 0;

let avg = 0;

// stat refresh
function statRefresh(){
    if (count != Stagiares.length){
        count = Stagiares.length;
        
    }

        let sum = 0;
        Stagiares.forEach((item) =>{
            let Listtotal = Object.values(item.module)
            let total = 0;
            let mod = 0;
            Listtotal.forEach((value, num)=>{
                    total += Number(value);
            })
                total = total/Listtotal.length
                sum += total

           
            
        })

        avg = sum / count 
        cssquery("#count p:last-of-type").innerHTML = count;
        cssquery("#avg p:last-of-type").innerHTML = Math.round(avg);
}


