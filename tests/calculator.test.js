/**
 * Unit tests for the `add` function in the String Calculator.
 * 
 * The tests cover the following scenarios:
 * - Empty input string returns 0.
 * - Single number input returns the number itself.
 * - Comma-separated numbers return their sum.
 * - Newline-separated numbers (mixed with commas) return their sum.
 * - Custom delimiters specified in the format "//[delimiter]\n[numbers]" work correctly.
 * - Errors are thrown when negative numbers are present, listing all negative numbers found.
 */

const add = require("../public/calculator.js");

describe("String Calculator", () => {

  /**
   * Test that an empty string returns 0.
   * The calculator should handle the base case of an empty input.
   */
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  /**
   * Test that a single number string returns that number.
   * Example: "1" should return 1.
   */
  test('should return the number for a single number', () => {
    expect(add("1")).toBe(1);
  });

  /**
   * Test that a string of comma-separated numbers returns their sum.
   * Example: "1, 5, 89" should return 95.
   */
  test('should return the sum for comma-separated numbers', () => {
    expect(add("1, 5, 89")).toBe(95);
  });

  /**
   * Test that a string with newline and comma-separated numbers returns their sum.
   * Example: "1\n2,3" should return 6.
   */
  test('should return the sum for new line-separated numbers', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  /**
   * Test that a string with custom delimiters returns the sum of the numbers.
   * Example: "//;\n9;7" should return 16, using ";" as a custom delimiter.
   */
  test('should return the sum for custom delimiters', () => {
    expect(add("//;\n9;7")).toBe(16);
  });

  /**
   * Test that the function throws an error when any negative number is encountered.
   * Example: "1, -2, 3" should throw an error mentioning the negative number.
   */
  test('should throw an error if any negative number is found in numbers string', () => {
    expect(() => add("1, -2, 3")).toThrow("negative numbers not allowed: -2");
  });

  /**
   * Test that the function throws an error listing all negative numbers found.
   * Example: "-1, -2, 6, 8, -11" should throw an error mentioning all negative numbers.
   */
  test('should throw an error if multiple negative numbers are found in numbers string', () => {
    expect(() => add("-1, -2, 6, 8, -11")).toThrow("negative numbers not allowed: -1, -2, -11");
  });

});
