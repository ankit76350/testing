# Project: Jest Mocking Example

## Overview
This project demonstrates how to use Jest for unit testing with function mocking. The main focus is testing the `calculate` function in `app.js` while mocking the `add` function from `mathUtils.js`. The project structure consists of the following files:

- **mathUtils.js**: Contains basic arithmetic functions.
- **app.js**: Implements the `calculate` function, which performs arithmetic operations.
- **index.test.js**: Contains Jest test cases for the `calculate` function.
- **__mocks__/mathUtils.js**: Provides a mocked version of the `add` function for testing.

---

## File Explanations

### 1. `mathUtils.js`
This file defines four mathematical operations: addition, subtraction, multiplication, and division.

```js
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

module.exports = { add, multiply, subtract, divide };
```

### 2. `app.js`
This file implements the `calculate` function, which takes two numbers and an operation type as input and performs the respective arithmetic operation.

```js
const { add, multiply, subtract, divide } = require("./mathUtils");

function calculate(num1, num2, operation) {
    switch (operation) {
        case "add":
            return add(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            return new Error("Invalid operation");
    }
}

module.exports = { calculate };
```

### 3. `__mocks__/mathUtils.js`
This file provides a mocked version of the `add` function using Jest.

```js
const add = jest.fn((a, b) => a + b);
module.exports = { add };
```

- `jest.fn((a, b) => a + b)`: This creates a mock function that simulates the behavior of `add`, but allows Jest to track calls and arguments.

### 4. `index.test.js`
This file contains Jest test cases for the `calculate` function. Initially, the tests failed because the `add` function was not mocked. After creating the `__mocks__` folder and providing a mocked version of `add`, the tests pass successfully.

#### Before Mocking (Tests Failed)
```js
const { calculate } = require("./app");
const { add } = require("./mathUtils");

describe("calculate", () => {
    test('calls add function with parameter', () => {
        calculate(1, 2, "add");
        expect(add).toHaveBeenCalled();  // fails
        expect(add).toHaveBeenCalledWith(1, 2); // fails
    });
});
```
- The test failed because Jest could not track calls to the original `add` function.

#### After Mocking (Tests Pass)
```js
jest.mock("./mathUtils");
const { calculate } = require("./app");
const { add } = require("./mathUtils");

describe("calculate", () => {
    test('calls add function with parameter', () => {
        calculate(1, 2, "add");
        expect(add).toHaveBeenCalled();  // pass
        expect(add).toHaveBeenCalledWith(1, 2); // pass
    });
});
```

- `jest.mock("./mathUtils")`: This tells Jest to use the mocked version of `mathUtils.js` from the `__mocks__` folder.
- `expect(add).toHaveBeenCalled()`: Verifies that `add` was called.
- `expect(add).toHaveBeenCalledWith(1, 2)`: Ensures `add` was called with the correct arguments.

---

## Running the Tests
To execute the test cases, run the following command:

```sh
npm test
```

or

```sh
jest
```

---

## Conclusion
This project demonstrates how Jest can be used to test function calls using mocks. By creating a `__mocks__` folder and using `jest.mock()`, we were able to successfully track function calls and validate expected behaviors.
