let cssquery = (query) =>{
    return document.querySelector(query);
}

let Stagiares =[];
let nam = cssquery("#name");
let lastName = cssquery("#lastname");
let branche = cssquery("#branche");
let module = cssquery("#module");
let grade = cssquery("#grade");
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

let namev;
let lastNamev;
let branchev;
let modulev;
let gradev;
let signed ;
let indexs;
let obje;



cssquery("#sub").addEventListener("click", (e)=>{
    e.preventDefault();
    namev = nam.value;
    lastNamev = lastName.value;
    signed = false;
    branchev = branche.value;
    modulev = module.value;
    gradev = grade.value;
    Stagiares.map((item , index)=>{
        if (item.name == namev){
            signed = true;
            indexs = index;
        }
    })
    
    if(signed == true ){
     obje = Stagiares[indexs]
     let k = Object.values(obje)
    if(k.length <=6){
        let obj = Stagiares[indexs]
        obj[modulev] = gradev;
    }
       
    }
    else if (signed == false){
        
        let obj = {}
        obj["name"] = namev;
        obj["lastName"] = lastNamev ;
        obj["branche"] = branchev;
        obj[modulev] = gradev;
        Stagiares.push(obj)
    }
   
   
})
// modify
cssquery("#modify").addEventListener("click" , (e)=>{

    e.preventDefault();
    namev = nam.value;
    lastNamev = lastName.value;
    signed = false;
    branchev = branche.value;
    modulev = module.value;
    gradev = grade.value;
    Stagiares.map((item , index)=>{
        if (item.name == namev){
            signed = true;
            indexs = index;
        }})
    if (signed == true){
        let obj = Stagiares[indexs]
        obj["name"] = namev;
        obj["lastName"] = lastNamev ;
        obj["branche"] = branchev;
        obj[modulev] = gradev;
    }else if(signed == false){
        alert("This student doesn't exist.")
    }


})
// delete
cssquery("#delete").addEventListener("click", (e)=>{
    e.preventDefault();
    let Del= false ;
    let toDel;
    namev = nam.value
    Stagiares.forEach((item,index)=>{
        if (item.name == namev){
            Del = true;
            toDel =index;
        }
    })
    if (Del==true){
        Stagiares.splice(toDel,toDel);
    }
    else{
        alert("This student doesn't exist.")
    }


})



// search
cssquery("#search").addEventListener("click",(e)=>{
    e.preventDefault();
    namev = nam.value
    let found =false;
    Stagiares.forEach((item,index)=>{
        if (item.name == namev){
            console.log(item)
            let Skeys = Object.keys(item);
            let Svalues = Object.values(item);
            let text ="";
            Skeys.forEach((value,index)=>{
                text +=`-${value}: ${Svalues[index]} <br> `


            })

            cssquery("p").innerHTML= text;
            cssquery("p").style.display = "block"
            found = true
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