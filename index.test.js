// this will fail
test("NUll Value", async()=>{
const value = null;
expect(value).toBeNull()
expect(value).toBeDefined()
expect(value).not.toBeUndefined()
expect(value).not.toBeTruthy()
expect(value).toBeFalsy()
})