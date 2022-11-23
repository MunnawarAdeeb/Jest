const functions = require("./functions.js");
test("add Matcher 2+2=4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("add Matcher 2+2=!5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
test("To be Null Matcher", () => {
  expect(functions.isNull()).toBeNull();
});
test("To be falsy Matcher", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});
test("To be Equal to Munnawar Adeeb", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Munnawar",
    lastName: "Adeeb",
  });
});
test("Numbers", () => {
  const a = 100;
  const b = 900;
  expect(a + a + b).toBeGreaterThan(1000);
  expect(a + b).toBeGreaterThanOrEqual(1000);
  expect(b - a).toBeLessThan(1000);
  expect(a + b).toBeLessThanOrEqual(1000);
});
test("Array Should Contain Color Name", () => {
  const Colors = ["Blue", "Red", "Yellow", "Orange"];
  expect(Colors).toContain("Blue");
});

test("The Data Should Contain name Ervin Howell", () => {
  expect.assertions(1);
  return functions
    .fetchData()
    .then(data => {expect(data.name).toEqual("Ervin Howell")});
});
