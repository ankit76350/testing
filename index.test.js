const mltpl = require("./index")

//Test suite
test('2 and 5 multiply must be 10', async() => { 
    expect(mltpl(2,5)).toBe(5)
 })