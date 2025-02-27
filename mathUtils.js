//mathUtils.js
// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
}

// Example usage:
module.exports = {add ,multiply,subtract,divide }