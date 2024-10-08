
const add = require("../public/calculator.js");

describe("String Calculator", () => {

  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
  });

  test('should return the sum for comma-separated numbers', () => {
    expect(add("1, 5, 89")).toBe(95);
  });

  test('should return the sum for new line-separated numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('should return the sum for custom delimiters', () => {
    expect(add("//;\n9;7")).toBe(16);
  });

  test('should throw an error if any negative number is found in numbers string', () => {
    expect(() => add("1, -2, 3")).toThrow("negative numbers not allowed: -2");
  });

  test('should throw an error if multiple negative numbers are found in numbers string', () => {
    expect(() => add("-1, -2, 6, 8, -11")).toThrow("negative numbers not allowed: -1, -2, -11");
  });

});
