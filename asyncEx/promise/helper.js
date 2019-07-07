var controller={};
const fs=require('fs');

controller.readFileAsync=(filename, encoding)=>{
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

module.exports=controller;