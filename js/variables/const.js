const x = 10 ;

//x = 30

console.log(x)

const obj = {
    name : "foulen"
}


const obj1 = obj 

obj1.age = 30

console.log("old object ",obj)
console.log("new object ",obj1)

const arr = [1,2,3,'a']

const arr1 = arr
arr1.push("b")

console.log(arr, arr1)

const a = function() {
    alert("hello ")
}

a()