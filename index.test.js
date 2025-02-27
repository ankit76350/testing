// before mocking this was falid

// const { calculate } = require("./app");
// const { add } = require("./mathUtils");

// describe("calculate", () => {
//   test('calls add function with parameter ', () => {
//     calculate(1, 2, "add");
//     expect(add).toHaveBeenCalled();  // fails
//     expect(add).toHaveBeenCalled(1, 2); // fails
//   }) 
// })


// now i have created __mocking__ folder and inside __mocking__ i have crated mathUtils folder.

jest.mock("./mathUtils")
const { calculate } = require("./app");
const { add } = require("./mathUtils");

describe("calculate", () => {
  test('calls add function with parameter ', () => {
    calculate(1, 2, "add");
    expect(add).toHaveBeenCalled();  // pass
    expect(add).toHaveBeenCalledWith(1, 2); // pass
  }) 
})
