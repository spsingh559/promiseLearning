const fs = require('fs');
const zlib = require('zlib');
const util = require('util');

var readFileAsync = util.promisify(fs.readFile);

zipFile=(data)=>{
    const pro = new Promise((resolve, reject)=>{
zlib.gzip(data, (err, result)=>{
if(err) reject(err);
resolve(result)
})

    })

    return pro;
}

readFileAsync('./demo.txt', 'utf-8').then(
    res=>{
console.log(res);
return res;
    },
    err=>{
console.log(err);
    }
).then(
    res=>{
console.log('res from readFileAsync to 2 chain', res)
zipFile(res).then(
    res=>{
        console.log(res);
    },
    err=>{
console.log(err)
    }
)
    },
    err=>{
        console.log('err2', err)
    }
)
