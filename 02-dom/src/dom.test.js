import functions from "./domCards.js";

const arrTest = [
  { key: "mel", fname: "Melanie", lname: "Hudson", comp: "CPL" },
  { key: "jon", fname: "Jon", lname: "Drake", comp: "Lean ACL" },
  { key: "lof", fname: "Loafie", lname: "Hudson", comp: "Lovies" },
  { key: "das", fname: "Dashie", lname: "Hudson", comp: "Lovies" },
];

test("test plumbing", () => {
  // const p1 = people.createCard("Melanie", "p1");
  // expect(p1.textContent).toBe("Melanie");
  console.log("Hello world");
});

test("execute functions", () => {
    functions.hello();

  });

  test("create card", () => {
    const card = functions.buildNewCard();
    console.log(card);
    console.log(card.children);
    console.log(card.children.length);
    console.log(card.children[2].textContent);
    

  });
  
