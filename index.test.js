
test("NUll Value", async()=>{
const value = null;
expect(value).toBeNull()
expect(value).toBeDefined()
expect(value).not.toBeUndefined()
expect(value).not.toBeTruthy()
expect(value).toBeFalsy()
})
test("NUll Value", async()=>{
const value = 0;
expect(value).not.toBeNull()
expect(value).toBeDefined()
expect(value).not.toBeUndefined()
expect(value).not.toBeTruthy()
expect(value).toBeFalsy()
})