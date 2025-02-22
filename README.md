# Multiplication Test Suite

This repository contains test cases for verifying the correctness of a multiplication function using Jest.

## 🛠️ Setup Instructions

To run these tests, follow these steps:

1. Clone the repository:
   ```sh
   git clone <your-repository-url>
   cd <your-repository-name>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the tests:
   ```sh
   npm test
   ```

## 📜 Test Cases

### `index.test.js`

```javascript
const mltpl = require("./index");

// Test suite
test('2 and 5 multiply must be 10', async() => { 
    expect(mltpl(2,5)).toBe(10);
});
```

### `index.test2.js`

```javascript
const mltpl = require("./index");

// Test suite
test('2 and 5 multiply must be 10', async() => { 
    expect(mltpl(2,5)).not.toBe(5);
});

// Test suite
test('2 and 5 multiply must be 10', async() => { 
    expect(mltpl(2,5)).toBe(4); // ❌ Incorrect expectation (should be 10)
});
```

### ❌ Issue in the Code:
- The expectation `expect(mltpl(2,5)).toBe(4);` is incorrect.
- It should be `expect(mltpl(2,5)).toBe(10);`.

### ✅ Corrected Test:
```javascript
test('2 and 5 multiply must be 10', async() => { 
    expect(mltpl(2,5)).toBe(10); 
});
```

## 🚀 Technologies Used
- **Jest**: A JavaScript testing framework.

## 📌 Notes
- Ensure Jest is installed globally or as a dev dependency.
- Run `npm test` to execute the test cases.

---

### 🔗 Contributing
Feel free to submit issues or pull requests for improvements.

### 📜 License
This project is licensed under the MIT License.
