// create card1 in DOM
const functions = {

buildNewCard: (text) => {
    // console.log("Hi from the console");
    
// let card1 = document.getElementById("idMstrCrd"); //move to index.js? 
// let cardnum = 1;


// Create New Div

const divNewCard = document.createElement('div');
divNewCard.appendChild(document.createTextNode(text));

// Generate Buttons on Card


const addBeforeBtn = document.createElement('button');
addBeforeBtn.appendChild(document.createTextNode("Add Before"));
divNewCard.classList.add("button");
divNewCard.appendChild(addBeforeBtn);

const addAfterBtn = document.createElement('button');
addAfterBtn.appendChild(document.createTextNode("Add After"));
divNewCard.classList.add("button");
divNewCard.appendChild(addAfterBtn);

const deleteCardBtn = document.createElement('button');
deleteCardBtn.appendChild(document.createTextNode("Delete"));
divNewCard.classList.add("button");
divNewCard.appendChild(deleteCardBtn);

divNewCard.classList.add("clCards");

return divNewCard;

},

//Card Logic - Makes the card work

addCardBefore: (node, text) => {
    const div= functions.buildNewCard(text);
    node.parentElement.insertBefore (div,node);

},

addCardAfter: (node, text) => {
    const div = functions.buildNewCard(text);
    node.parentElement.appendChild(div,node);

},

deleteCard: (node, text) => {
    const div = functions.buildNewCard(text);
    node.parentNode.removeChild(div,node);
          }

}

// {
//     if (node.parentNode) {
//         node.parentNode.removeChild(node);
//           }


export default functions; 