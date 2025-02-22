# Jest Test Cases for Null, Zero, Number, and Array Values

This repository contains Jest test cases that demonstrate how JavaScript handles different types of values using Jest matchers. These tests help in understanding comparisons, truthy/falsy values, and array matchers.

## Prerequisites
Make sure you have Jest installed before running the tests:

```sh
npm install --save-dev jest
```

## Running the Tests
To run the tests, execute the following command:

```sh
npm test
```

## Test Case 1: Checking `null` Value

```javascript
test("Null Value", async () => {
  const value = null;
  expect(value).toBeNull();         // ✅ Passes: value is explicitly null
  expect(value).toBeDefined();      // ✅ Passes: value is defined (not undefined)
  expect(value).not.toBeUndefined();// ✅ Passes: value is not undefined
  expect(value).not.toBeTruthy();   // ✅ Passes: null is considered a falsy value
  expect(value).toBeFalsy();        // ✅ Passes: null is falsy
});
```

### Failing Case:
```javascript
expect(value).toBeTruthy();  // ❌ Fails because null is falsy
```

---

## Test Case 2: Checking `0` (Zero) Value

```javascript
test("Zero Value", async () => {
  const value = 0;
  expect(value).not.toBeNull();     // ✅ Passes: 0 is not null
  expect(value).toBeDefined();      // ✅ Passes: 0 is defined
  expect(value).not.toBeUndefined();// ✅ Passes: 0 is not undefined
  expect(value).not.toBeTruthy();   // ✅ Passes: 0 is falsy
  expect(value).toBeFalsy();        // ✅ Passes: 0 is a falsy value
});
```

### Failing Case:
```javascript
expect(value).toBeTruthy();  // ❌ Fails because 0 is falsy
```

---

## Test Case 3: Number Comparisons

```javascript
test("Number Comparison", async () => {
  const value = 3 + 3;
  expect(value).toBeGreaterThan(5);        // ✅ Passes: 6 > 5
  expect(value).toBeGreaterThanOrEqual(5); // ✅ Passes: 6 >= 5
  expect(value).toBeLessThan(7);           // ✅ Passes: 6 < 7
  expect(value).toBeLessThanOrEqual(6);    // ✅ Passes: 6 <= 6
  expect(value).toBe(6);                   // ✅ Passes: 6 === 6
  expect(value).toEqual(6);                // ✅ Passes: 6 == 6

  const floatValue = 0.2 + 0.1;
  expect(floatValue).toBeCloseTo(0.3, 5);  // ✅ Passes: 0.2 + 0.1 ≈ 0.3 (floating-point precision)
});
```

### Failing Cases:
```javascript
expect(floatValue).toBe(0.3);  // ❌ Fails due to floating-point precision issues
expect("Developer").not.toMatch(/e/); // ❌ Fails because "Developer" contains 'e'
```

---

## Test Case 4: Array Matchers

```javascript
test("Array Matchers", () => {
  const todoList = ["Love", "Death", "and", "Robot", "Coding"];
  expect(todoList).toContain("Death");  // ✅ Passes: "Death" exists in the array
});

test.only("Array Matchers", () => {
  const todoList = ["Love", "Death", "and", "Robot", "Coding"];
  expect(todoList).toContain("Death");  // ✅ Passes: "Death" exists in the array
});
```

### Failing Case:
```javascript
expect(todoList).toContain("Life");  // ❌ Fails because "Life" is not in the array
```

---

## Summary
- **`null`** is explicitly `null`, falsy, and defined.
- **`0`** is not `null`, but it is still falsy.
- **Number matchers help compare values correctly, including floating-point calculations.**
- **String matchers validate patterns inside text.**
- **Array matchers check if specific elements exist in an array.**
- **Floating-point arithmetic can cause unexpected failures in strict equality tests.**

These test cases ensure that your application correctly differentiates between different values and behaviors.

## License
This project is open-source and available under the [MIT License](LICENSE).

