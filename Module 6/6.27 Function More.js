// function greet(name="Guest",age=25) {
//     console.log("Hello World!",name,`Wow you are ${age} years old!!`);
//     return `Wow you are ${age} years old!!`;
// }

// greet("Raj",99);

// let returnedValue = greet();


// function add(x,y) {
//     let z = x+y;
//     return z;
// }


// function add(x,y) {
//     console.log("Before Expression");
//     let z = x+y;
//     console.log("Before returns statement");
//     return z;
//     console.log("After returns statement");
// }

// result=add(3,4);

// console.log("Outside fFUNCTION", result);

// console.log("a","b","c","d")


function add(firstNumber,...numbers) {
    let sum = firstNumber;
    console.log(firstNumber,numbers);
    for (let i of numbers) {
        sum += i;
    }
    return sum
}

let result = add(1,2,3,4,5,6,7,8,9);

console.log(result);