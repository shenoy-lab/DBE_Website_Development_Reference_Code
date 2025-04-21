let newParagraph = document.createElement("p");
let newParagraph2 = document.createElement("p");


newParagraph.innerText = "This P was added with javascript";
newParagraph2.innerText = "This P was ALSO added with javascript";


const section1 = document.querySelector("section");

// section1.appendChild(newParagraph);

section1.append(newParagraph,newParagraph2,"This is random text","<span>tHIS IS ADDED Span</span>");

const ul = document.querySelector("ul");

const listItem1 = ul.firstElementChild;
const listItem2 = listItem1.nextElementSibling;

// listItem1.remove();

ul.insertBefore(document.createElement("p"),listItem2);


const adjacentList = document.querySelectorAll("#adjacent > li")

const la1p = document.createElement("p");
la1p.innerText = "added using before begin";

adjacentList[0].insertAdjacentElement("beforebegin",la1p);


const la2p = document.createElement("p");
la2p.innerText = "added using after begin";
adjacentList[1].insertAdjacentElement("afterbegin",la2p);


const la3p = document.createElement("p");
la3p.innerText = "added using after end";
adjacentList[2].insertAdjacentElement("afterend",la3p);



const la4p = document.createElement("p");
la4p.innerText = "added using before end";
adjacentList[3].insertAdjacentElement("beforeend",la4p);

