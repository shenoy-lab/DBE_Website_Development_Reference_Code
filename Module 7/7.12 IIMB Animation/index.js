let sentences = ["Lay the foundation to web development","The best institute in the world","Learn to live your life happily and be curious"];


const cursor = document.querySelector("#cursor");

const animatedSpan = document.querySelector("#animated");

// for (let i of sentences) {
//     console.log(i);
//     for (let j of i) {
//         console.log(j)
//     }
// }

document.addEventListener("DOMContentLoaded",animation);

function animation() {
    setInterval(blinkerFunction,500);
    addCharacters();
}

let sentenceCounter = 0;
let characterCounter = 0;

function addCharacters() {
    if (characterCounter<sentences[sentenceCounter].length) {
        animatedSpan.textContent += sentences[sentenceCounter][characterCounter]
        characterCounter++;
        setTimeout(addCharacters,100);
    } else {
        setTimeout(removeCharacter,2000);
    }
}


function removeCharacter() {
    if(characterCounter>=0) {
        animatedSpan.textContent = animatedSpan.textContent.slice(0,characterCounter);
        characterCounter--;
        setTimeout(removeCharacter,20);
    } else {
        characterCounter = 0;
        sentenceCounter = (sentenceCounter + 1) % sentences.length;
        setTimeout(addCharacters,100);
    }
}


function blinkerFunction() {
    cursor.classList.toggle("hidden")
}
