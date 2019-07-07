

// Creating Promoise function

 doAsyncTask=(msg)=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('async work completed');
            // can return only one value, if need to return more than one, create object;
            // resolve({a:"done",b:msg})
            resolve('done');
        }, 1000)
    })

    return promise;
}

doAsyncTask("hi").then(
    (res)=>console.log('task completed', res),
    ()=>console.log('task error')
);