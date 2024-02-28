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
// fill 

// reduce loop on array
const Prices = [1,5,9,6]
Prices.reduce((total,item)=>{
   console.log("Total " +total)
   console.log("Item " + item)
   return total+ item
},0)
// at(index) 
//fill(1)
//join("_")
//includes(5) true false
// every() returns true or false 
let res = Prices.every((item , index , array)=>{
    return item > 1;
})

console.log(res);


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
