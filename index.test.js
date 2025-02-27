// index.test.js
// spy


const myModule =  require("./spy")

test("Should spy on function add check if it is called", ()=>{
  const spy  = jest.spyOn(myModule , "myFunction");

  myModule.myFunction();

  expect(spy).toHaveBeenCalled();

  spy.mockRestore()
})