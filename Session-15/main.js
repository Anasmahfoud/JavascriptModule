const Cat = {
    size: 30 , age: 10 , type: "Cat",color:"gray"
}

Cat.size = 12
delete Cat.age;
console.log(Cat)


const stagiares = new Array("ANAS" , "KHALID" , "ZAKARIA", "OUAFIK" , "ANAS");
const arr = new Array(4)


// for each
stagiares.forEach((item , index , array)=>{
    console.log(item+index);
})

// map
let newStagiares = stagiares.map((item , index , array)=>{
    return item + "" + (index+10)
})

stagiares.push("ILYAS");
stagiares.indexOf("ILYAS");
// stagiares.indexOf("ILYAS" , 3); skip 3 
// unshift("ILYAS") add at first
//shift remove first
// stagiares.splice(1,3) removes from index 1 to 3
// splice(1,1) removes just at index 1
// sort
// reverse
// reduce



// value
let find = stagiares.find((item)=>{
    return item === "ANAS"
})
console.log(find)


// array
let filter = stagiares.filter((item)=>{
    return item === "ANAS"
})
console.log(filter)


// index
let index = stagiares.findIndex((item)=>{
    return item === "ANAS"
})
console.log(index)
