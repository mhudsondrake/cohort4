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


