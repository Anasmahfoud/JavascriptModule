document.querySelector(".creer-titre").addEventListener("click",function(){
    // create parent
    const parent = document.querySelector(".section-01");
    // create element in memory 
    const titre = document.createElement("h1");
    titre.innerHTML = "This sis the first heading";
    titre.style.color= "green";
    const input = document.createElement("input");
    // add attribute
    input.setAttribute("placeholder","Enter...");
    /// append it to the parent so it can show up
    parent.prepend(titre);
    parent.append(input);
})


/// remove
document.querySelector(".btn-delete").addEventListener("click", function() {
    const removeThis = document.querySelector(".rmv");
    removeThis.remove();
    const parent = document.querySelector(".section-02");
    const goodJob = document.createElement("p");
    goodJob.innerHTML = "Good job you destroyed the Virus!"
    // "Good job you killed Hitler you saved alot of people!<br> You're cool man yuou're like a hero or something.<br/> What are you waiting for go there's nothing else to do."; //
    goodJob.style.color = "green";
    goodJob.style.fontSize= "50px"
    parent.append(goodJob);
    parent.removeChild(document.querySelector(".section-02 p"));
    parent.removeChild(document.querySelector(".section-02 button"));
})

// replace
    document.querySelector(".btn-replace").addEventListener("click", function(){
      const first =  document.querySelector("body h1:first-of-type");
      const second =   document.querySelector(".funny");
      document.body.replaceChild(first,second);
    })


/// Create container and add class
/// classList("") className = ""
/// the second and third got bg class="c1 c2 C3" he will take the first wich is c2
document.querySelector(".btn-create-container").addEventListener("click", function(){
    const vcontainer = document.createElement("div");
    vcontainer.classList.add("container");
    vcontainer.classList.add("encadrer");
    document.querySelector("body h1:first-of-type").classList.add("encadrer");
    document.body.append(vcontainer);
})

