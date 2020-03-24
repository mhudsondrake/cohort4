import functions from "./syntax.js";

//number

test("add five to number", () => {
  expect(functions.addFive(1)).toBe(6);
  expect(functions.addFive(4)).toBe(9);
  //   console.log("Hello world!");
});

//string

test("change to uppercase", () => {
  expect(functions.changeUpperCase("hello")).toBe("HELLO");
});

//boolean

test("statement a boolean operator", () => {
  expect(functions.greaterThanTen(2)).toBe(false);
  expect(functions.greaterThanTen(11)).toBe(true);
});

test("array of letters", () => {
  expect(functions.letterArray(["a", "b", "c", "d"])).toBe(4);
  expect(functions.letterArray(["a", "b", "c", "d", "e"])).toBe(5);
});

test("traits of person", () => {
  expect(
    functions.personTraits({
      eyeColour: "hazel",
      age: "28",
      race: "Black",
      profession: "doctor"
    })
  ).toBe("hazel");
  expect(
    functions.personTraits({
      eyeColour: "brown",
      age: "29",
      race: "Asian",
      profession: "scientist"
    })
  ).toBe("brown");
});

test("property is undefined", () => {
  expect(functions.undefinedProperty(0)).toBe(true);
  expect(functions.undefinedProperty(9)).toBe(false);

});

test("front of the list", () => {
    expect(functions.addFront(["a", "b", "c", "d"],"e")).toEqual(["e","a", "b", "c", "d"]);
    expect(functions.addFront(["a", "b", "c", "d"],"f")).toEqual(["f","a", "b", "c", "d"]);
  });

  test("back of the list", () => {
    expect(functions.addEnd(["a", "b", "c", "d"],"e")).toEqual(["a", "b", "c", "d","e"]);
    expect(functions.addEnd(["a", "b", "c", "d"],"f")).toEqual(["a", "b", "c", "d","f"]);
  });

  test("update values", () => {
    expect(functions.addEnd(["a", "b", "c", "d"],"e")).toEqual(["a", "b", "c", "d","e"]);
    
  });

  test("user dictionary", () => {
    // expect(functions.userDictionary([0]).toEqual([arr.values]);
    console.log("userDictionary");
    const val1 = functions.userDictionary("sk");
    console.log(val1);
    functions.userDictionary("ab");
  });
  
