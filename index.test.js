
test("Exceptional Error",()=>{
  function openInvalidFile(){
    throw new Error("file not found");
  }

  expect(()=>openInvalidFile()).toThrow()
  expect(()=>openInvalidFile()).toThrow(Error)
  expect(()=>openInvalidFile()).toThrow("file not found")
  expect(()=>openInvalidFile()).toThrow(/not found/) // regex

//   expect(()=>openInvalidFile()).not.toThrow()
//   expect(()=>openInvalidFile()).not.toThrow(Error)
//   expect(()=>openInvalidFile()).not.toThrow("file not found")
//   expect(()=>openInvalidFile()).not.toThrow(/not found/) // regex
})


//here jest global keyword which is come from the jest
//what does mocking? (2+2==4 true)


test("Drinks return",()=>{
    const drink = jest.fn(()=>true)
    // const drink = jest.fn(()=>false)
    // const drink = jest.fn(()=>{})
    drink();
    expect(drink).toHaveReturned()
    expect(drink).toHaveReturnedWith(true)
    expect(drink).toHaveReturnedWith(false)
    expect(drink).toHaveReturnedWith({})
})