import functions from "./domCards.js";

// Basic DOM - Adding List Items

display.addEventListener("click", () => {
  document.querySelectorAll("ol li").forEach((value) => {
    console.log(value.textContent);
  });
});

add.addEventListener("click", () => {
  let addbt = document.getElementById("showChild");
  let li = document.createElement("li");
  li.textContent = "Hellloooo";
  addbt.appendChild(li);
});

remove.addEventListener("click", () => {
  let addbt = document.getElementById("showChild");
  let liChild = addbt.getElementsByTagName("li");
  addbt.removeChild(liChild[liChild.length - 1]);
});

cardArea.addEventListener("click", onClick);

function onClick(e) {
  const el = e.target
  const todo = el.getAttribute("todo");
  // console.log(todo);
  
  if (todo === "addBefore") {
    functions.addCardBefore(el);
  }
  if (todo === "addAfter") {
    functions.addCardAfter(el);
  }
  if (todo === "delete") {
    functions.deleteCard(el);
  }
}

document.getElementById("initialButton").addEventListener("click", placeCard);

function placeCard() {
  let div = functions.buildNewCard();
  cardArea.appendChild(div);
}

// deleteCard.addEventListener("click", (e) =>{
//   const del = e.target.parentElement;
//   functions.deleteCard(del,"New Card");

// })

// addAfter.addEventListener("click", (e) =>{
//   const addAf = e.target.parentElement;
//   functions.addCardAfter(addAf,"New Card");

// })

// let counter = 3;
// let counting=0;

// idMstrCard.addEventListener("click", e => {
//       if (e.target.textContent === "Add Before"){
//         let div = document.createElement("div");
//         // functions.buildNewCard(div);
//         div.appendChild(div);
//       } else if (e.target.textContent === "Add After"){
//         functions.buildNewCard(div);
//         cardSec.insertBefore(div, event.target.parentNode.nextElementSibling);
//       } else if (e.target.textContent === "Delete"){
//         functions.deleteCard(e.target.parentElement);

//       };
// })

// let cardSec = document.getElementById("idMstrCard");

// idMstrCard.addEventListener("click", (e) => {
//   if (e.target.textContent === "Add Before") {
//     functions.addCardBefore(e.target.parentElement);
//   } else if (e.target.textContent === "Add After") {
//     functions.addCardAfter(e.target.parentElement);
//   } else if (e.target.textContent === "Delete") {
//     functions.deleteCard(e.target.parentElement);
//   }
// })

// Scrap Work
// console.log(functions);
// let addbf = document.getElementById("idMstrCrd");
// let liBefore = document.createElement("div");
// // liBefore.textContent = "Hellloooo";
// addbf.appendChild(li);

// let addbf = document.getElementById("idMstrCrd");
// let liBefore = document.createElement("div");
// // liAfter.textContent = "Hellloooo";
// addaf.appendChild(li);

// let del = document.getElementById("idMstrCrd");
// let liDel = document.createElement("div");
// // liAfter.textContent = "Hellloooo";
// del.removeChild(div);

// document.addEventListener("click", myfunction);  // add a click event to the <div> using a “addEventListener” in the JavaScript

// function myfunction(e) {
//   const el = e.target;
//   console.log("You clicked", e);  // show on the console the parameter passed to the event listener
//   const value = el.getAttribute("card");
//   if (value) {
//     console.log(value);
//   }
// }

// add an event on the show button that displays all the “Children” of the <ol> tag

// document.getElementById("showChild").addEventListener("click", showChildren);

// function showChildren() {
//   console.log(document.getElementById("showChild").childNodes);
// }

// add an event on the add button that will add a <li> tag to the end of the list

// document.getElementsByClassName("add").addEventListener("click", addItems)

// function addItems () {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(value));
//     ul.appendChild(li);
//     input.value = "";
//   }
