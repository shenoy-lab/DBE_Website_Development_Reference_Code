const canvas = document.querySelector(".container");
canvas.addEventListener("mouseover",colorFunction)

for (let i = 0; i<5000; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("id",i+1);
    pixel.setAttribute("class","pixel");
    // pixel.addEventListener("mouseover",colorFunction);
    canvas.append(pixel);
}

function colorFunction(e) {
    if (e.altKey) {
        let color = document.querySelector("input").value;
        e.target.style.backgroundColor = color;
    }

//     console.log("Target",e.target);
//     console.log("Current Target:",e.currentTarget);
}


