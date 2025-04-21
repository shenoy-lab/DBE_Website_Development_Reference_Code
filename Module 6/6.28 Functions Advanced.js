// function add(x,y) {
//     let z = x+y;
//     return z;
// }

// let addition = add;

// let addition = function (x,y) {
//     let z = x+y;
//     return z;
// }

// console.log(addition(1,2));

// function randomNumbers () {
//     console.log(Math.floor(Math.random() * 100));
// }

// function executesXTimes(func,count) {
//     let i = 0;
//     while (i < count) {
//         func();
//         i++;
//     }
// }

// executesXTimes(randomNumbers,125);


// function multiplierFactory (multiplier) {
//     return function (value) {
//         return value * multiplier
//     }
// }

// let double = multiplierFactory(2);

// double(10);

// let triple = multiplierFactory(3);

// triple(10);


let nestedArray = [
    [1,[2.1,2.2,2.3],3],
    [4,[[5.11,5.12],[5.21,5.22]],6],
    [7,8,9]
];

// for (let i of nestedArray) {
//     console.log("Outer Array:",i);
//     for (let j of i) {
//         console.log("      Inner Element:",j);
//     }
// }

// let depthCounter = 0;

// function printNestedArray(nestArr,depthCount=0) {
//     for (let i of nestArr) {
//         if (Array.isArray(i)) {
//             let depth = depthCount+1;
//             printNestedArray(i, depth);
//         } else {
//             console.log("  >".repeat(depthCount),i);
//         }
//     }
// }

// printNestedArray(nestedArray);

// console.log("hi".toUpperCase());


let person = {
    name : "Govind",
    age : 120,
    isStudent : false,
    classes : ["Web Development", "Excel"],
    address : {
        city: "Bangalore",
        street: "Bannerghatta",
        pinCode : 123123
        },
    123 : "One twenty three",
    
    speak : function () {
        return `My Name is ${this.name}`      
    },

    greet() {
        return `My Name is ${this.name}, My age is ${this.age}, My city is ${this.address.city} `      
    }
}



