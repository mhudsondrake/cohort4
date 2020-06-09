let card = 0;

const functions = {
  buildNewCard: () => {
    // Create New Div

    const divNewCard = document.createElement("div");
    card++;
    const msg = "Hello " + card;
    const txtNode = document.createTextNode(msg);
    divNewCard.appendChild(txtNode);

    // Generate Buttons on Card

    const addBeforeBtn = document.createElement("button");
    addBeforeBtn.appendChild(document.createTextNode("Add Before"));
    addBeforeBtn.setAttribute("todo", "addBefore");
    divNewCard.appendChild(addBeforeBtn);

    const addAfterBtn = document.createElement("button");
    addAfterBtn.appendChild(document.createTextNode("Add After"));
    addAfterBtn.setAttribute("todo", "addAfter");
    divNewCard.appendChild(addAfterBtn);

    const deleteCardBtn = document.createElement("button");
    deleteCardBtn.appendChild(document.createTextNode("Delete"));
    deleteCardBtn.setAttribute("todo", "delete");
    divNewCard.appendChild(deleteCardBtn);

    divNewCard.classList.add("clCards");

    return divNewCard;
  },

  //Card Logic - Connects card to event listener

  addCardBefore: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    const div = functions.buildNewCard();
    group.insertBefore(div, card);
  },

  addCardAfter: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    const div = functions.buildNewCard();
    group.insertBefore(div, card.nextSibling);

  },

  deleteCard: (el) => {
    const card = el.parentElement;
    const group = card.parentElement;
    group.removeChild (card); 

  },
};

export default functions;
