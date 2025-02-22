const mltpl = require("./index")


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