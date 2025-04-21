// let i = 0;
// while (i<10) {
//     console.log(i);
//     i++;
// }

let password = "ASD123";

let inputPassword = prompt("Please enter your password");

while (true) {
    if (password===inputPassword) {
        alert("Succesfully Logged In");
        break;
    } else{
        inputPassword = prompt("Incorrect! Please enter your correct password");
    }
    
}

// let guessNumber = 123;

// let inputGuess = parseInt(prompt("Please enter your guess number"));

// console.log(typeof inputGuess)

// while (guessNumber !== inputGuess) {
//     if (inputGuess > guessNumber ) {
//         inputGuess = prompt("Incorrect! Your guess is higher");
//     } else {
//         inputGuess = prompt("Incorrect! Your guess is lower");
//     }
    
// }

// alert(`Congrats you entered the correct number ${guessNumber}`);

