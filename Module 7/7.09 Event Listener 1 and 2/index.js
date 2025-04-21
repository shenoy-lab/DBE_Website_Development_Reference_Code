const button = document.querySelector("button");

button.addEventListener("click", bgColorChange);

function bgColorChange(x) {
    document.body.classList.add("bgColor");
    console.log(x.currentTarget);
}
