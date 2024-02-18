//// query selector gets the first in the doc even 
document.querySelector(".title").style.color = "green"
console.log(document.querySelector(".title"))

//// query Selector ALL 
console.log(document.querySelectorAll(".title-all"))

///// List node
let vH2 = document.querySelectorAll(".title-all")

//// for each for all elements in list nodes
for (let i = 0; i < 2 ; i++ ){
    vH2[i].style.color = "white"
    vH2[i].style.backgroundColor = "red"
};
// vH2.forEach(function (item){
//     item.style.color = "red"
// })

/// change the first one from 
let vH22 = document.querySelectorAll(".title-all2")

console.log(vH22[0]);
console.log(vH22.length);

vH22[0].style.backgroundColor = "blue";
vH22[1].style.border = "6px solid yellow";
vH22[1].style.fontSize = "100px";
vH22[0].style.marginTop = "100px";
vH22[0].style.height = "200px";

//// GetElementById() GetElementsByClassName()  GetElemetsBytagName() GetElementsByName()


/// get direct Body Head Title Cookie Script  