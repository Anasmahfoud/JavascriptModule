/// Numbers

let nombre = -5.4;


/// abs
console.log(Math.abs(nombre))


/// ceil
console.log(Math.ceil(nombre))


/// floor Observe this.
console.log(Math.floor(nombre))

/// trunc removes dot
console.log(Math.trunc(nombre))


/// random num between 0-0.99
console.log(Math.random())


/// sqrt
console.log(Math.sqrt(25))

// acos(), asin() , atan()

// pow()
console.log(Math.pow(2,2))

//log()



// exp()


/// max
let nombres= [12,45,10,34]
console.log(Math.max(12,14,6,9))
console.log(Math.max(...nombres))

/// Stagiares
const Stagiares = [{id:1,nom: "ELKADIRI",note:12},
{id:2,nom: "FEYD",note:15},
{id:3,nom: "ELFAKIRI",note:11},
{id:4,nom: "MOUMNI",note:10},
]

let ListeNotes = Stagiares.map((itemValue)=>{
    return itemValue.note
})


let maxNote = Math.max(...ListeNotes)

let bestGradeStudents = Stagiares.filter((itemValue)=>{
    return itemValue.note == maxNote
})


console.log(bestGradeStudents)


/// round with range
console.log(Math.round(Math.random()*20))