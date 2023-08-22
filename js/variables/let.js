var x = 5;

function sum(a) {
    return console.log(a + x)
}

//sum(5)

function testLet() {
    let y = 10 
    if(true){
        let y = 5;
        console.log(" y in block :" + y)
    }
    console.log(x)
}
let i = "kjbdkjsbfkj"
for (let i = 0; i < 10 ; i++){
    console.log(i)
}

console.log(i)
testLet()