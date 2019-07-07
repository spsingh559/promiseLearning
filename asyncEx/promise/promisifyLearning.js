const fs= require('fs');
const util= require('util');

// used when convert node js inbuilt function to promise, no need to manually write promise
const read = util.promisify(fs.readFile);

read('demo.txt', 'utf-8').then(
res=>console.log(res),
err=>console.log(err)
)