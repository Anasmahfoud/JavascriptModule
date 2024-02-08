// write in document
document.write("to write in the document we use .write")
document.write("<ul><li>item 1</li> <li>item 2</li> <li>item 3</li> </ul>")
//window.print() to print page

//window.alert( ) to make pop up alert


// primitives types in JS:
    console.log(typeof(5));
    console.log(typeof(undefined));
    console.log(typeof("to be or not to be"));
    console.log(typeof(true))

// non-primitives types in JS -Composes-
    console.log(typeof(null))//object
    let numStagiaires = [1,2,3]
    console.log(typeof(numStagiaires)) //object array

    let cnumStagiaires = numStagiaires /// the same value wich is the memory adress

    cnumStagiaires.push(5)

    console.log(numStagiaires)
    console.log(cnumStagiaires)

    //when we edit in the copy , if we change in one of them , they change all

    // to avoid this  we concat an empty list  or use spraed operator:

    let xnumStagiaires = [].concat(numStagiaires)

    xnumStagiaires.push(10)

    console.log(numStagiaires)
    console.log(xnumStagiaires)

    
//  Type of object:
    console.log(Object.prototype.toString.call(5));
    console.log(Object.prototype.toString.call(null));
    console.log(Object.prototype.toString.call(undefined));
    console.log(Object.prototype.toString.call([1,2,3]));

// to see if it's an object of a class:
    console.log(Object(3) instanceof Number);

// spread operator (operation de propagation):
    let liste = [20,30,40]
    let cliste = [...liste]
    // [...[]]  {...{}}

    liste.push(80)

    console.log(cliste)
    console.log(liste)

//object :

   const  st = {
        id :1,
        nom:"Anas",
    }
    const cst = {...st,age : 19}
    console.log(st)
    console.log(cst)
    // [...[]]  {...{}}

//  object.assign(a,b)
    const course = {
        name: "WebDev",
        score: 17
    };
    const grade = {
        score: 12 //takes the last argument not both 
    };
    const comb = Object.assign(course,grade,{nom: "Anas"})
    console.log(comb);// references course

// add to object :
   //dot notation:
//    comb.name = "Webo";
//    comb.score = 20;
//    console.log("Course:");
//    console.log(course);   //course is changed

   //bracket notation:
//    comb["score"] = 10
//    console.log(comb)

// object.assign(a,b) copy
const copy = Object.assign({},course); 
copy.name = "Webo";
copy.score = 20;
console.log("Copy:");
console.log(copy);
console.log("Course:");
console.log(course);  /// doesn't change because it value

///// overwrite property name
function printName(options){
     const defaults = {firstName: "Steve" , lastName: "Bottle"};
     options = Object.assign(defaults,options);
     console.log(`${options.firstName} ${options.lastName}`);
}


printName({firstName:"Anas"})