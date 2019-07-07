

Async1=()=>{

    let pro = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log('async1 work completed');
            // can return only one value, if need to return more than one, create object;
            // resolve({a:"done",b:msg})
            resolve('done');
        }, 1000)
        
    })

    return pro;
}

Async2=()=>{

    let pro = new Promise((resolve, reject)=>{

        setTimeout(()=>{
            console.log('async2 work completed');
            // can return only one value, if need to return more than one, create object;
            // resolve({a:"done",b:msg})
            resolve('done2');
        }, 1000)
        
    })

    return pro;
}

Async1().then(
    res=>{
    console.log('result from promise is', res);
    // --------------******** return is mandatory, unless next chain won't get any result-------********
    return res
    },
    err=>{
        console.log('err', err)
    }
).then(
    res=>{
        console.log('result to second chain passed from first', res)
        if(res=="done"){
            Async2().then(
                res=>{
                    console.log('response of async2', res)
                },
                err=>{
                    console.log('err from async2', err)
                }
            )
        }
    },
    err=>{
        console.log('err in chain2', err)   
    }
)

console.log('last line to print');

// forking a chain means create separate instance of then, instead from parent one.