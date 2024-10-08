
/**
 * Adds numbers from a string, separated by a delimiter (default: commas or newlines).
 * 
 * The function can handle:
 * - Empty strings (returns 0).
 * - Numbers separated by commas or newlines.
 * - Custom delimiters specified in the format: "//[delimiter]\n[numbers]".
 * - Throws an error if any negative numbers are encountered, listing the negative numbers.
 *
 * @param {string} numbers - A string containing numbers separated by a delimiter.
 * @returns {number} The sum of the numbers in the string. Invalid numbers (non-parsable) are treated as 0.
 * @throws {Error} If negative numbers are found in the string, throws an error listing them.
 */
function add(numbers) {
    // If the input string is empty, return 0
    if (numbers === "") return 0;

    // Default delimiter is a comma or newline
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2); // Split the string into two parts: delimiter and actual numbers
        delimiter = new RegExp(parts[0][2]);  // Create a regular expression for the custom delimiter (it starts at index 2 of the first part)
        numbers = parts[1]; // Assign the part containing the numbers to `numbers`
    }
    
    const nums = numbers.split(delimiter).map(num => parseInt(num));

    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = add;
