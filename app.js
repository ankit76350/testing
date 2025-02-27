const { add, multiply, subtract, divide } = require("./mathUtils");

function calculate(num1, num2, operation) {
    switch (operation) {
        case "add":
            return add(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "subtract":
            return subtract(num1 , num2);
        case "divide":
            return divide(num1, num2);
        default:
            return new Error("Invalid operation");
    }
}


module.exports = {calculate}