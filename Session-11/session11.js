//// People Table

const UserList = []

document.querySelector("#btn-ajouter").addEventListener("click", function(e){
    e.preventDefault();
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let age = document.querySelector("#age").value;
    const UserInfo = {};
    UserInfo.noms = nom ;
    UserInfo.prenoms = prenom ;
    UserInfo.ages = age ;
    UserList.push(UserInfo);

    
})

let created = false;
let printed = 0;
document.querySelector("#btn-afficher").addEventListener("click" , (e) =>{
    console.log(UserList);
        UserList.map((item , index , array) => {
        console.log(item); 
        });

    e.preventDefault();
    if (created == false){
        
        
        const table = document.createElement("table");
        document.body.append(table);

        const tr = document.createElement("tr");
        document.querySelector("table").append(tr);

        let title = ["Nom", "Prenom", "Age"]
        for (let k=0 ; k <= 2 ; k++){
        let th = document.createElement("th");
        th.innerHTML = title[k];
        th.style.border = "2px solid black"
        document.querySelector("tr").append(th);
        }
        UserList.map(function(item,index,array){
            const tr = document.createElement("tr");
            document.querySelector("table").append(tr);
            let Keys = ["noms", "prenoms", "ages"]
            
            for ( let i = 0 ;i<= 2 ; i++){
                let td = document.createElement("td");
                td.innerHTML = item[Keys[i]];
                td.style.border = "2px solid black"
                document.querySelector("tr:last-of-type").append(td);
                created = true;
            }
            printed = printed + 1;
        })
    }else if (created == true){
        UserList.map(function(item,index,array){
            if ( printed-1 < index ){
                const tr = document.createElement("tr");
                document.querySelector("table").append(tr); 
                let Keys = ["noms", "prenoms", "ages"]
                for (let i = 0 ; i<= 2  ; i++ ){
                   let td = document.createElement("td");
                   td.innerHTML = item[Keys[i]];
                   td.style.border = "2px solid black"
                   document.querySelector("tr:last-of-type").append(td);
                   created = true;
                }
                printed = printed +1;
            }
        })
    }    
})
