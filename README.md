# String Calculator

A simple yet powerful string calculator that accepts comma-separated numbers (or custom delimiters) and calculates their sum. The application also handles negative numbers, newline-separated values, and offers a user-friendly interface.

## Features

- **Basic Functionality**: Accepts an input string of numbers and returns their sum.
- **Custom Delimiters**: Supports different delimiters by specifying them in the input string.
- **Error Handling**: Throws an error for negative numbers and displays a list of all negative numbers in the input.
- **User Interface**: A clean and simple web interface for users to enter numbers and view results dynamically.
- **Responsive Design**: Works well on various screen sizes with integrated Bootstrap styling.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Bootstrap
- **Backend**: Node.js, Express
- **Testing**: Jest for unit tests
- **deployment**: netlify

## Requirements

- **Node.js**: Ensure that you have Node.js installed on your machine.
- **npm**: Comes bundled with Node.js. Used to manage project dependencies.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sanket-landge/string-calculator.git
   cd string-calculator


2. Install the dependencies:
    
    ```bash
    npm install


3. Run the application:

    ```bash
    npm start

4. Open your browser and navigate to http://localhost:3000 to see the application in action.


## Usage
1. Enter your numbers in the input box. You can use:
    * Comma-separated values (e.g., 1,2,3)
    * Newline-separated values (e.g., 1\n2\n3)
    * Custom delimiters (e.g., //;\n1;2 for 1 and 2)
2. Click the Calculate button to see the result.
3. If negative numbers are entered, an error message will display the negative values

## Examples
    * Input: "" → Output: 0
    * Input: "1" → Output: 1
    * Input: "1,5" → Output: 6
    * Input: "1\n2,3" → Output: 6
    * Input: "//;\n1;2" → Output: 3
    * Input: "1,-2" → Output: Error: negative numbers not allowed: -2

## Testing
The project can be tested using Jest or any other JavaScript testing framework. To run tests, ensure you have your test scripts defined in the package.json, and execute:

    ```bash
    npm test