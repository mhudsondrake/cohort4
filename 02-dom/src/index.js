import functions from './domCards.js'

// What do I need to do?

// Using css create a page that looks like the page shown. It can look better but no worse
// use “border: solid;” on the <div> so you can see where the <div> is
// add a click event to the <div> using a “addEventListener” in the JavaScript
// show on the console the parameter passed to the event listener
// notice that depending on where you click on the <div> you get different targets
// add an event on the show button that displays all the “Children” of the <ol> tag
// add an event on the add button that will add a <li> tag to the end of the list
// play lots; try adding to the start; try a delete

//Event Listeners - Presentation Logic

// Basic DOM - Adding List Items 

display.addEventListener("click", () =>{
  document.querySelectorAll('ol li').forEach(value => {
    console.log(value.textContent);
  })
})

add.addEventListener("click", () =>{
  let addbt = document.getElementById("showChild");
  let li = document.createElement("li");
  li.textContent = "Hellloooo";
  addbt.appendChild(li);

})

remove.addEventListener("click", () =>{
  let addbt = document.getElementById("showChild");
  let liChild = addbt.getElementsByTagName("li");
  addbt.removeChild(liChild[liChild.length-1]);
 
})

// New Cards

// idMstrCard.addEventListener("click", e => {

// })

addBefore.addEventListener("click", (e) =>{
  const addBef = e.target.parentElement;
  functions.addCardBefore(addBef,"New Card");
  
   
  // console.log(functions);
  // let addbf = document.getElementById("idMstrCrd");
  // let liBefore = document.createElement("div");
  // // liBefore.textContent = "Hellloooo";
  // addbf.appendChild(li);

})

addAfter.addEventListener("click", (e) =>{
  const addAf = e.target.parentElement;
  functions.addCardAfter(addAf,"New Card");
  // let addbf = document.getElementById("idMstrCrd");
  // let liBefore = document.createElement("div");
  // // liAfter.textContent = "Hellloooo";
  // addaf.appendChild(li);

})

deleteCard.addEventListener("click", (e) =>{
  const del = e.target.parentElement;
  functions.deleteCard(del,"New Card");
  
  // let del = document.getElementById("idMstrCrd");
  // let liDel = document.createElement("div");
  // // liAfter.textContent = "Hellloooo";
  // del.removeChild(div);
})


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
  

