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

let searchKey = "123";

// console.log(person.name);
// console.log(person.age);

// console.log(person.classes);

// console.log(person['123']);

// console.log(person['name']);

console.log(person[searchKey]);

person[searchKey] = 'Raj';

console.log(person[searchKey]);

person.name = "Simran";
person.isStudent = true;

person.ethnicity = 'Indian';
person["fatherName"] = "Shah Rukh";
