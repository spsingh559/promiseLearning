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

let asyncFun = async function (){
    let val, err=await readFileAsync('../promise/demo154.txt', 'utf-8');
    console.log(val, err);
    console.log('print last');
    
}
console.log('before async');
asyncFun();
console.log('after async fun')
// --------------------Result
/*before async
after async fun
operation done
hi
print last
*/