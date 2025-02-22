# Jest Test Suite for Multiplication Function

This repository contains a Jest test suite for verifying the correctness of a multiplication function.

## Description

The test suite ensures that the `mltpl` function correctly multiplies two numbers and returns the expected result. It contains multiple test cases to verify different expected outputs.

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run tests:
   ```sh
   npm test
   ```

## Code Explanation

### Importing the Function

```js
const mltpl = require("./index");
```
This line imports the `mltpl` function from the `index.js` file, which is assumed to contain the multiplication logic.

### Test Suite

```js
describe("multible", () => {
```
- The `describe` function groups related test cases under the label `multible`.
- It helps in organizing tests and making outputs readable.

### Test Cases

```js
    it("2 and 5 multiply equal to 10", async () => {
        expect(mltpl(2,5)).toBe(10);
    });
```
- The `it` function defines an individual test case.
- It checks whether `mltpl(2,5)` correctly returns `10`.
- `expect(mltpl(2,5)).toBe(10);` ensures that the function output matches the expected value.

```js
    it("2 and 5 multiply not equal to 5", async () => {
        expect(mltpl(2,5)).not.toBe(5);
    });
```
- Ensures that `mltpl(2,5)` does not return `5`.

```js
    it("2 and 5 multiply not equal to 11", async () => {
        expect(mltpl(2,5)).not.toBe(11);
    });
```
- Ensures that `mltpl(2,5)` does not return `11`.

## Running the Tests

To execute the tests, run the following command:
```sh
npm test
```
Jest will execute all test cases and display the results in the terminal.

## Expected Output
If the `mltpl` function is implemented correctly, you should see an output similar to:
```
PASS  ./index.test.js
  multible
    ✓ 2 and 5 multiply equal to 10 (Xms)
    ✓ 2 and 5 multiply not equal to 5 (Xms)
    ✓ 2 and 5 multiply not equal to 11 (Xms)
```

## Conclusion
This test suite verifies the correctness of a multiplication function using Jest. It ensures that the function returns the expected results and does not return incorrect values.

## License
This project is open-source and available under the [MIT License](LICENSE).

