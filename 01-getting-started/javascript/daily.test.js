import functions from './daily'

test("convert to farenheit", () => {
  expect(functions.convertFarenheit(0)).toBe(32);
  expect(functions.convertFarenheit(10)).toBe(50);
});

