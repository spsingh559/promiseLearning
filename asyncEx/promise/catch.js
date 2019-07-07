//catch error at any level
const fs=require('fs');


readFileAsync=(filename, encoding)=>{

    const promise= new Promise ((resolve, reject)=>{

        fs.readFile(filename,encoding, (err, data)=>{
            if(err){
                console.log('err in operation', err);
                reject(err);
            }else{
                console.log('operation done');
                resolve(data);
            }
        })

    })

    return promise;

}

readFileAsync('demo1.txt','utf-8').then(
    res=>{
console.log('success', res);
    }
//     ,
//     err=>{
// console.log('error', err);
//     }
).catch(err=>console.log('err in catch', err)) // if err block is not handle by any promise, catch will take care of it.
// no need to explicitely use err block for each promise

// .finally(_ =>console.log('cleaning up')); // available above 10 node version

// called when you want to do cleanup, after any operation 



