
var helper=require('./helper');

// readFileAsync=(filename, encoding)=>{

//     const promise= new Promise ((resolve, reject)=>{

//         fs.readFile(filename,encoding, (err, data)=>{
//             if(err){
//                 console.log('err in operation', err);
//                 reject(err);
//             }else{
//                 console.log('operation done');
//                 resolve(data);
//             }
//         })

//     })

//     return promise;

// }

helper.readFileAsync('demo.txt','utf-8').then(
    res=>{
console.log('success', res);
    },
    err=>{
console.log('error', err);
    }
)


