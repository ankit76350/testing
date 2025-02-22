# Jest Test Cases for Null and Zero Values

This repository contains Jest test cases that demonstrate how JavaScript handles `null` and `0` using different Jest matchers. These tests help in understanding truthy and falsy values in JavaScript.

## Prerequisites
Make sure you have Jest installed before running the tests:

```sh
npm install -D jest
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

### Explanation:
- **`toBeNull()`**: Ensures that the variable is exactly `null`.
- **`toBeDefined()`**: Ensures the variable is not `undefined`.
- **`not.toBeUndefined()`**: Ensures the variable is not `undefined`.
- **`not.toBeTruthy()`**: Ensures the value is not truthy (non-empty string, non-zero number, `true`, etc.).
- **`toBeFalsy()`**: Ensures the value is falsy (`null`, `undefined`, `false`, `0`, `NaN`, or `""`).

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

### Explanation:
- **`not.toBeNull()`**: Ensures the variable is not `null` (0 is a number, not `null`).
- **`toBeDefined()`**: Ensures the variable is not `undefined`.
- **`not.toBeUndefined()`**: Ensures the variable is not `undefined`.
- **`not.toBeTruthy()`**: Ensures the variable is not a truthy value (since `0` is falsy in JavaScript).
- **`toBeFalsy()`**: Ensures that `0` is considered falsy.

---

## Summary
- **`null`** is explicitly `null`, falsy, and defined.
- **`0`** is not `null`, but it is still falsy.
- **Both values are defined and not `undefined`.

These test cases ensure that your application correctly differentiates between `null`, `0`, `undefined`, and truthy/falsy values.

## License
This project is open-source and available under the [MIT License](LICENSE).

