const mltpl = require("./index")

//Test suite
describe("multible",()=>{
    it("2 and 5 mutiply equl to 10", async()=>{
        expect(mltpl(2,5)).toBe(10);
    })
    it("2 and 5 mutiply equl to 10", async()=>{
        expect(mltpl(2,5)).not.toBe(5);
    })
    it("2 and 5 mutiply equl to 10", async()=>{
        expect(mltpl(2,5)).not.toBe(11);
    })
})


test("2 and 5 mutiply equl to 10", async()=>{
        expect(mltpl(2,5)).toBe(10);
})


// this will pass
test("Object eqaul", async()=>{
    const data = {alpha : "A"};
   data["beta"] = "B";
    expect(data).toEqual({alpha:"A", beta:"B" });
})

// this will fail
test("Object eqaul", async()=>{
    const data = {alpha : "A"};
   data["beta"] = "B";
    expect(data).toBe({alpha:"A", beta:"B" }); // Deep equlity
})