
```md
# 🕵️‍♂️ Jest Spy - Testing Function Calls

This repository demonstrates how to use `jest.spyOn()` to track function calls in JavaScript. It ensures that a specific function is called within a module using Jest.

---

## 📂 Project Structure

```
/project-root
│── spy.js            # Module containing the function to be tested
│── index.test.js     # Jest test file for spying on function calls
│── package.json      # Dependencies & scripts (Jest setup)
```

---

## 🚀 Getting Started

### 📌 1. Install Jest

If you haven't installed Jest yet, run:

```sh
npm install --save-dev jest
```

---

## 📂 File Explanations

### 1️⃣ **spy.js** (Module to be tested)

This file defines a simple function `myFunction` that prints `"Org fn"` to the console.

```javascript
// spy.js
function myFunction() {
    console.log("Org fn");  // Original function that we will spy on
}

module.exports = { myFunction };
```

- The function `myFunction`:
  - Logs `"Org fn"` to the console when called.
  - Does **not** return any value.
  - Will be spied on in the test to check if it's called.

---

### 2️⃣ **index.test.js** (Jest Test File)

This file contains the **Jest test case** to spy on the function call.

```javascript
// index.test.js
const myModule = require("./spy");  // Import the module

test("Should spy on function and check if it is called", () => {
  const spy = jest.spyOn(myModule, "myFunction"); // Create a spy on myFunction

  myModule.myFunction();  // Call the function

  expect(spy).toHaveBeenCalled();  // Verify if the function was called

  spy.mockRestore();  // Restore original function implementation
});
```

#### 🔍 **How the test works:**
1. **`jest.spyOn(myModule, "myFunction")`**  
   - Creates a spy on `myFunction` from `myModule`.
   - Tracks if `myFunction` gets called.

2. **`myModule.myFunction();`**  
   - Calls the actual function.

3. **`expect(spy).toHaveBeenCalled();`**  
   - Verifies if `myFunction` was called at least once.

4. **`spy.mockRestore();`**  
   - Restores the original function, ensuring the spy does not affect other tests.

---

## ▶️ Running the Test

Run Jest with:

```sh
npx jest
```
or

```sh
npm test
```

---

## 🛠 Expected Output

If everything is working correctly, the test will pass:

```sh
PASS  ./index.test.js
✓ Should spy on function and check if it is called (Xms)
```

If the function was **not called**, Jest will throw an error.

---

## 🎯 Key Takeaways

- `jest.spyOn()` allows us to track if a function is being called.
- `expect(spy).toHaveBeenCalled()` asserts whether the function was executed.
- `mockRestore()` resets the function after testing to prevent side effects.

---

## 📌 Conclusion

This setup is useful for **unit testing** when you need to:
✔ Spy on function calls.  
✔ Verify interactions without modifying function behavior.  
✔ Keep tests isolated with `mockRestore()`.

---

### 🏆 Done! You have successfully implemented and tested Jest spies. 🎉  

