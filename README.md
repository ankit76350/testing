# Jest Test Cases

This file contains Jest test cases that demonstrate error handling and function mocking using Jest.

## Table of Contents
- [Exceptional Error Handling Test](#exceptional-error-handling-test)
- [Mock Function Test](#mock-function-test)

## Exceptional Error Handling Test

```javascript
 test("Exceptional Error",()=>{
  function openInvalidFile(){
    throw new Error("file not found");
  }

  expect(()=>openInvalidFile()).toThrow(); // Checks if the function throws an error
  expect(()=>openInvalidFile()).toThrow(Error); // Checks if the thrown error is an instance of `Error`
  expect(()=>openInvalidFile()).toThrow("file not found"); // Checks if the error message matches exactly
  expect(()=>openInvalidFile()).toThrow(/not found/); // Uses regex to check if the error message contains "not found"

  // Uncommenting these lines would fail because the function does throw an error
  // expect(()=>openInvalidFile()).not.toThrow();
  // expect(()=>openInvalidFile()).not.toThrow(Error);
  // expect(()=>openInvalidFile()).not.toThrow("file not found");
  // expect(()=>openInvalidFile()).not.toThrow(/not found/);
 })
```

### Explanation:
- The `openInvalidFile` function throws an error with the message "file not found".
- The Jest `expect().toThrow()` method ensures that an error is indeed thrown.
- Different variations of `toThrow()` are used:
  - Checking if any error is thrown.
  - Checking if an `Error` type is thrown.
  - Checking for an exact error message.
  - Using regex to match error messages dynamically.

## Mock Function Test

```javascript
 test("Drinks return",()=>{
    const drink = jest.fn(()=>true); // Mock function returning true
    // const drink = jest.fn(()=>false); // Alternative: returning false
    // const drink = jest.fn(()=>{}); // Alternative: returning an empty object
    
    drink();
    
    expect(drink).toHaveReturned(); // Checks if the function has returned any value
    expect(drink).toHaveReturnedWith(true); // Checks if the function specifically returned true
    expect(drink).toHaveReturnedWith(false); // This will fail unless the function returns false
    expect(drink).toHaveReturnedWith({}); // This will fail unless the function returns an empty object
 })
```

### Explanation:
- `jest.fn()` is used to create a mock function.
- The mock function can return different values based on setup (true, false, empty object, etc.).
- `drink()` is called to execute the function.
- Various Jest matchers are used to verify function return values:
  - `.toHaveReturned()`: Checks if the function returned anything.
  - `.toHaveReturnedWith(value)`: Checks if the function returned a specific value.

## Jest Global Keywords
Jest provides global methods for writing test cases without requiring explicit imports in every file. 
Some important global keywords used in this file:
- `expect()`: Assertion method to check test conditions.
- `jest.fn()`: Creates mock functions for testing.
- `.toThrow()`: Checks if a function throws an error.
- `.toHaveReturned()`: Checks if a function returned any value.

---
### What is Mocking?
Mocking is a technique used in testing where a function's actual implementation is replaced with a simulated version. This helps isolate functions and test behavior without executing the real code.

Example:
```javascript
const sum = (a, b) => a + b;
expect(sum(2,2)).toBe(4); // This is a real function test (not a mock)
```

In contrast, `jest.fn()` is used to create a mock function that mimics behavior without actual implementation.
