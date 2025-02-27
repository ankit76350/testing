const fetchData = require(".")

test("tha data is choco using promises",()=>{
  return fetchData().then((data) => {
    expect(data).toBe('chocolate');
  })
})

test("tha data is choco with .then",()=>{
  return fetchData().then((data) => {
    expect(data).toBe('chocolate');
  })
})
test("tha data is choco with .catch",()=>{
  return fetchData(true).catch((data) => {
    expect(data).toBe("error occured")
  })
})

test("tha data is choco using asyn await", async()=>{
  const data = await fetchData();
  expect(data).toBe('chocolate')
})

test("fetch fails", async()=>{
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (error) {
    expect(error).toBe('error occured')
  }
})

test("ASYNC Test resolve", async()=>{
    await expect(fetchData()).resolves.toBe("chocolate")
})

test("ASYNC Test reject", async()=>{
    await expect(fetchData(true)).rejects.toMatch("error occured")
})