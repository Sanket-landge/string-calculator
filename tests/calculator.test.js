
const add = require("../public/calculator.js");

describe("String Calculator", () => {

  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return 1 for an non-empty string", () => {
    expect(add("999")).toBe(1);
  });
  
});
