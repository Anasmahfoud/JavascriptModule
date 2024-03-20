document.getElementById("btn-load").addEventListener("click",loadTxt)

function loadTxt(){
    
    let request = new XMLHttpRequest

    request.open("GET","sample.txt",true)


    /* OPTIONAL
    request.onerror() = function(err){

    }

    request.onprogress() = function(){

    } */

    // first way
    request.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            console.log(request.responseText)
            document.getElementById("display").innerHTML = `<h1>${request.responseText}</h1>`
        }
        
       
    }
    // second way
    /*request.onload = function(){
        if( this.status == 200){
            document.getElementById("display").innerHTML = `<h1>${request.responseText}</h1>`
        }

    } */

    request.send()


    let request2 = new XMLHttpRequest

    request2.open("GET","Stagiaire.json",true)

    request2.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            const StagiaireList = JSON.parse(request2.responseText).Data
            console.log(StagiaireList)
            document.getElementById("display2").innerHTML = "<ul id='stage'> </ul> "
            StagiaireList.forEach((itemValue)=>{
                itemValue.toString = function(){return `Id: ${itemValue.id} ; Name: ${itemValue.name} ; Age: ${itemValue.age} ; Grade: ${itemValue.grade}`}
                document.getElementById("stage").innerHTML += `<li> ${itemValue} </li>`
            })
            
        }

    }
    request2.send()


}


/// JSON




