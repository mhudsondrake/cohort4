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
   expect(functions.isBoolean(2)).toBe(false);
 });
