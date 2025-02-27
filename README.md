# Project: Jest Setup and Teardown Example

## Overview
This project demonstrates the use of Jest's setup and teardown methods (`beforeAll`, `afterAll`, `beforeEach`, `afterEach`) in unit testing. The primary goal is to ensure that test cases execute in an isolated environment by properly initializing and cleaning up resources before and after tests.

The project consists of the following files:

- **arrayUtils.js**: Contains utility functions for array operations.
- **index.test.js**: Contains Jest test cases with setup and teardown functions.

---

## File Explanations

### 1. `arrayUtils.js`
This file defines three functions to manipulate arrays: adding, removing, and checking for an element.

```js
const addToArray = (array, item) => {
    array.push(item);
    return array;
};

const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
};

const arrayContains = (array, item) => {
    return array.includes(item);
};

module.exports = { addToArray, removeFromArray, arrayContains };
```

- `addToArray(array, item)`: Adds `item` to `array` and returns the updated array.
- `removeFromArray(array, item)`: Removes `item` from `array` if it exists and returns the updated array.
- `arrayContains(array, item)`: Returns `true` if `item` exists in `array`, otherwise `false`.

---

### 2. `index.test.js`
This file contains test cases using Jest's setup and teardown functions.

```js
const { addToArray } = require("./arrayUtils");

let testArray;

// Global setup and teardown (without describe)
beforeAll(() => {
    console.log("Before all test: initialize array");
    testArray = [];
});

afterAll(() => {
    console.log("After all test: clear");
    testArray = null;
});

beforeEach(() => {
    console.log("Before each test: clear array");
    testArray = [];
});

afterEach(() => {
    console.log("After each test: clear");
    console.log(testArray);
});

// Test without describe block
test('add item to array', () => {
    addToArray(testArray, "ritik");
    expect(testArray).toContain("ritik");
});

// Test with describe block
describe("SetUp and Teardown - 1", () => {
    beforeAll(() => {
        console.log("Before all test: initialize array");
        testArray = [];
    });
    
    afterAll(() => {
        console.log("After all test: clear");
        testArray = null;
    });
    
    beforeEach(() => {
        console.log("Before each test: clear array");
        testArray = [];
    });
    
    afterEach(() => {
        console.log("After each test: clear");
        console.log(testArray);
    });
    
    test('add item to array - 1', () => {
        addToArray(testArray, "ritik");
        expect(testArray).toContain("ritik");
    });
});

// Another describe block without setup and teardown
describe("SetUp and Teardown - 2", () => {
    test('add item to array - 2', () => {
        addToArray(testArray, "ritik");
        expect(testArray).toContain("ritik");
    });
});
```

### Explanation of Jest Setup and Teardown Functions:

- **`beforeAll()`**: Runs once before all test cases in the file.
- **`afterAll()`**: Runs once after all test cases in the file.
- **`beforeEach()`**: Runs before each test case, resetting the `testArray`.
- **`afterEach()`**: Runs after each test case, logging the `testArray` state.

### Key Observations:
1. The first test (without `describe`) uses global setup/teardown.
2. The `SetUp and Teardown - 1` describe block has its own setup/teardown that runs only for tests within that block.
3. The `SetUp and Teardown - 2` describe block does not have setup/teardown, so it does not get isolated.

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
This project illustrates the importance of Jest's setup and teardown functions for ensuring test isolation. Using `beforeAll`, `afterAll`, `beforeEach`, and `afterEach`, we can properly initialize and clean up data to maintain predictable test results.
