//can immediatly return resolve or reject, if result in some cases is already known

let promise= Promise.resolve('done');
console.log('promise defined above');
promise.then(
    res=>console.log(res)
)


// let promise= Promise.reject('error');
// console.log('promise defined above');
// promise.then(
//     res=>console.log(res), // this module won't be called
//     err=>console.log(err)
// )


// No need to create instance of Promise
doAsync =()=>{
    return Promise.resolve("done")
}

doAsync().then(
    res=>console.log('message from promise function', res),
    err=>console.log(err)
)