# Project: Jest Spy Function Example

## Overview
This project demonstrates how to use Jest spies (`jest.spyOn`) to track function calls in unit testing. The main focus is testing the `myFunction` function in `spy.js` while verifying its execution using Jest.

The project consists of the following files:

- **spy.js**: Contains a function `myFunction`.
- **index.test.js**: Contains Jest test cases that spy on `myFunction`.

---

## File Explanations

### 1. `spy.js`
This file defines a simple function `myFunction` that logs a message to the console.

```js
function myFunction() {
    console.log("Org fn");
}

module.exports = { myFunction };
```

- `myFunction()`: A simple function that prints "Org fn" to the console.
- `module.exports = { myFunction }`: Exports the function for use in other files.

### 2. `index.test.js`
This file contains Jest test cases that spy on the `myFunction` to verify if it has been called.

```js
const myModule = require("./spy");

test("Should spy on function add check if it is called", () => {
  const spy = jest.spyOn(myModule, "myFunction");

  myModule.myFunction();

  expect(spy).toHaveBeenCalled();

  spy.mockRestore();
});
```

- `jest.spyOn(myModule, "myFunction")`: Creates a spy on `myFunction` to track its calls.
- `myModule.myFunction()`: Calls the function.
- `expect(spy).toHaveBeenCalled()`: Verifies that the function was called.
- `spy.mockRestore()`: Restores the original function to its initial state.

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
This project demonstrates how to use `jest.spyOn` to monitor function calls. Spying helps track function execution without modifying the original function, making it useful for unit testing.
