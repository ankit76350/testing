# fetchData Testing Documentation

## Overview
This project contains test cases for the `fetchData` function, which simulates fetching data asynchronously using Promises. The tests validate both resolved and rejected states using Jest.

## Files Structure
- **`index.js`**: Contains the `fetchData` function that returns a Promise, resolving with a string (`"chocolate"`) or rejecting with an error (`"error occured"`).
- **`index.test.js`**: Contains Jest test cases to verify the behavior of `fetchData` using Promises, async/await, and Jest assertions.

---

## `index.js` - Implementation of `fetchData`
```javascript
function fetchData(shouldFails = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFails) {
        reject("error occured");
      } else {
        resolve("chocolate");
      }
    }, 100);
  });
}
module.exports = fetchData;
```

### Explanation
- **Function:** `fetchData(shouldFails = false)`
  - This function simulates an asynchronous operation using JavaScript's built-in `Promise` object.
  - It takes a boolean parameter `shouldFails` which determines if the Promise should resolve or reject.
  - Default value for `shouldFails` is `false`, meaning the Promise resolves successfully unless specified otherwise.
  - The function uses `setTimeout` to introduce a 100ms delay before resolving or rejecting the Promise.
  
- **Promise Behavior:**
  - If `shouldFails` is `false`, the function calls `resolve("chocolate")`, meaning the Promise resolves successfully with the string `"chocolate"`.
  - If `shouldFails` is `true`, the function calls `reject("error occured")`, meaning the Promise is rejected with the string `"error occured"`.
  
- **Export:** `module.exports = fetchData;`
  - This allows the function to be imported in other files, particularly in the test file.

---

## `index.test.js` - Jest Test Cases
```javascript
const fetchData = require(".");

test("the data is choco using promises", () => {
  return fetchData().then((data) => {
    expect(data).toBe("chocolate");
  });
});

test("the data is choco with .then", () => {
  return fetchData().then((data) => {
    expect(data).toBe("chocolate");
  });
});

test("the data is choco with .catch", () => {
  return fetchData(true).catch((data) => {
    expect(data).toBe("error occured");
  });
});

test("the data is choco using async/await", async () => {
  const data = await fetchData();
  expect(data).toBe("chocolate");
});

test("fetch fails", async () => {
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (error) {
    expect(error).toBe("error occured");
  }
});

test("ASYNC Test resolve", async () => {
  await expect(fetchData()).resolves.toBe("chocolate");
});

test("ASYNC Test reject", async () => {
  await expect(fetchData(true)).rejects.toMatch("error occured");
});
```

### Explanation of Test Cases
1. **Testing using `.then()` (Promise-based approach)**
   - The first two tests ensure that `fetchData()` resolves correctly to `"chocolate"` when no argument is passed.
   - Uses `.then()` to handle the resolved value of the Promise.

2. **Testing rejection using `.catch()`**
   - Calls `fetchData(true)`, which triggers rejection.
   - Uses `.catch()` to verify that the error message returned is `"error occured"`.

3. **Testing using `async/await`**
   - Uses `async/await` instead of `.then()`.
   - Ensures `fetchData()` resolves to `"chocolate"`.
   
4. **Testing rejection with `async/await`**
   - Uses `try/catch` to catch errors.
   - `expect.assertions(1);` ensures Jest verifies at least one assertion inside the `catch` block.

5. **Using Jest's `.resolves` matcher**
   - `await expect(fetchData()).resolves.toBe("chocolate")` verifies that `fetchData()` resolves successfully.

6. **Using Jest's `.rejects` matcher**
   - `await expect(fetchData(true)).rejects.toMatch("error occured")` verifies that `fetchData(true)` rejects as expected.

---

## Running the Tests
To run the test suite, install Jest (if not already installed):
```sh
npm install --save-dev jest
```
Then, execute the tests using:
```sh
npm test
```

## Conclusion
This project demonstrates how to test asynchronous functions using Jest. It covers different approaches like `.then()`, `.catch()`, `async/await`, and Jest matchers for handling resolved and rejected Promises effectively. This ensures robust testing of asynchronous JavaScript functions.
