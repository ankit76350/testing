// index.test.js
// setup and teardown 
// we need to perform some operation in before and after test case pass

const { addToArray } = require("./arrayUtils");

let testArray
// without describe
beforeAll(() => {
    console.log("Before all test : inilializearray");
    testArray = []
})
afterAll(() => {
    console.log("After all test : clear");
    testArray = null
})
beforeEach(() => {
    console.log("Before each all test : clear");
    testArray = []
})
afterEach(() => {
    console.log("After each all test : clear");
    console.log(testArray);

})

test('add item to array', () => {
    addToArray(testArray, "ritik")
    expect(testArray).toContain("ritik")
})


// with describe
// all the function (beforeAll , afterAll , beforeEach ,afterEach) run for only this
describe("SetUp and Teardown - 1",()=>{
    beforeAll(() => {
        console.log("Before all test : inilializearray");
        testArray = []
    })
    afterAll(() => {
        console.log("After all test : clear");
        testArray = null
    })
    beforeEach(() => {
        console.log("Before each all test : clear");
        testArray = []
    })
    afterEach(() => {
        console.log("After each all test : clear");
        console.log(testArray);
    
    })
    
    test('add item to array - 1', () => {
        addToArray(testArray, "ritik")
        expect(testArray).toContain("ritik")
    })
    
})

// with describe
// all the function (beforeAll , afterAll , beforeEach ,afterEach) not run for this 
describe("SetUp and Teardown - 2",()=>{

    test('add item to array - 2', () => {
        addToArray(testArray, "ritik")
        expect(testArray).toContain("ritik")
    })
    
})