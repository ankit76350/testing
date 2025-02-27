function fetchData(shouldFails = false){
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (shouldFails) {
            reject("error occured")
        } else {
            resolve("chocolate")
        }
    },100)
 })
}
module.exports = fetchData