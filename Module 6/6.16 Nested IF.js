let age = parseInt(prompt("What is your age?"));
let isMember = prompt("Are you a member? Type 'Y' for Yes and 'N' for No.")

console.log(age);
console.log(isMember);

if (age) {
    if (age>18) {
        if (isMember === 'Y') {
            alert("Your ticket price is 200")
        } else {
            alert("Your ticket price is 300")

        }
    } else {
        if (isMember === 'Y') {
            alert("Your ticket price is 50")
        } else {
            alert("Your ticket price is 100")
        }
    }
} else {
    alert("Please enter valid age");
}

