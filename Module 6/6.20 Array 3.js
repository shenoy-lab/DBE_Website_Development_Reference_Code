let playlist = ['Enter sandman','Nothing else matters','Fade to black','The Unforgiven'];

let fruits = ["banana", "apple", "peach"];

let veggies = ['tomato','cucumber','carrot'];

let returnValue;

// returnValue = veggies.concat(playlist);

// console.log(returnValue);
// console.log(veggies);
// console.log(fruits);


// returnValue = veggies.includes('car')

// console.log(returnValue);
// console.log(veggies);
// console.log(fruits);


// returnValue = veggies.indexOf('carrot')

// console.log(returnValue);
// console.log(veggies);
// console.log(fruits);


// returnValue = veggies.join("-govind-");

// console.log( typeof returnValue, returnValue);
// console.log(veggies);
// console.log(fruits);

// console.log(veggies);

// veggies.reverse();

// console.log(veggies);


// returnValue = veggies.concat(playlist).slice(-5);

// console.log( typeof returnValue, returnValue);
// console.log(playlist);
// console.log(veggies);

let splicingArray = veggies.concat(playlist,fruits);

console.log(splicingArray);

splicingArray.splice(1,2, 'govind');

console.log(splicingArray);
