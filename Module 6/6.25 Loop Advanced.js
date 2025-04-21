// for (let i = 0; i < 2; i++) {
//     console.log("Outer Loop:",i);
//     for (let j = 0; j < 3; j++) {
//         console.log("      Inner Loop:",j);
//     }
// }

// let nestedArray = [
//     [1,2],
//     [3,4],
//     [7,6]
// ]

// for (let i = 0; i < nestedArray.length; i++) {
//     console.log("Outer Array:",nestedArray[i]);
//     for (let j = 0; j < nestedArray[i].length; j++) {
//         console.log("      Inner Loop:",nestedArray[i][j]);
//     }
// }

// for (let i of nestedArray) {
//     console.log("Outer Array:",i);
//     for (let j of i) {
//         console.log("      Inner Element:",j);
//     }
// }


// for (let i of "Hi My name is govind") {
//     console.log(i);
// }


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
    123 : "One twenty three"
}

// for (let i in person) {
//     console.log(i,":",person[i]);
// }

for (let i of Object.values(person)) {
    console.log(i)
}
