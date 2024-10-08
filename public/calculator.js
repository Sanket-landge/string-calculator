
function add(numbers) {

    if (numbers === "") return 0;

    const delimiter = /,|\n/;
    
    const nums = numbers.split(delimiter).map((num) => parseInt(num));
    return nums.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

module.exports = add;
