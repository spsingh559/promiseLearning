const fs= require('fs');
const util= require('util');

// used when convert node js inbuilt function to promise, no need to manually write promise
const read = util.promisify(fs.readFile);

const files=['demo.txt', 'demo1.txt'];


let promises=files.map(name=>read(name,"utf-8"));

//can execute multiple promise and when all of them execute then only return result
Promise.all(promises).then(
    values=>{
    console.log(values)
    }
).catch(err=>console.error('-----------',err)); //will catch error in case of any promise error
