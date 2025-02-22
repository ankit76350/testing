
test("Number Compariosn", async()=>{
const value = 3+3;
expect(value).toBeGreaterThan(5)
expect(value).toBeGreaterThanOrEqual(5)
expect(value).toBeLessThan(7)
expect(value).toBeLessThanOrEqual(6)
expect(value).toBe(6)
expect(value).toEqual(6)

const floatValue = 0.2 + 0.1;
expect(floatValue).toBeCloseTo(0.3 , 5);
// expect(floatValue).toBeCloseTo(0.356 , 5); // Fail

expect("Developer").not.toMatch(/I/); 
// expect("Developeri").not.toMatch(/i/); // fail 
expect("Developer").toMatch(/Dev/);
})


test("Array Matchers",()=>{
    const todoList = [
        "Love",
        "Death",
        "and",
        "Robot",
        "Coding"
    ]
    expect(todoList).toContain("Death")
})

test.only("Array Matchers",()=>{
    const todoList = [
        "Love",
        "Death",
        "and",
        "Robot",
        "Coding"
    ]
    expect(todoList).toContain("Death")
})
