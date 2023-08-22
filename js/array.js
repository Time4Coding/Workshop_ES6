const array = [ 15, 9, 25, 9, 36, 7];

//const array1 = array.map(function(el){return el*2})
const element = []
for (let i = 0; i < array.length; i++) {
     element.push(array[i]*2)
    
}
const array1 = array.map(el => el*2)
const x = array.indexOf(9)
const find = array.findIndex(el => el > 15)
const array2 = array.filter(el => el >16)
console.log(array2)
// console.log(array1)
// console.log(element)

// const array5 = Array.of(1, 2, 3)

const person = {
    name : "foulen",
    age : 45,
    vill : "ghazela"
}

let {name, age} = person

const fullName = ({name, age }) => {
    return console.log(` my name is ${name} and i am ${age}`)
}

fullName(person)