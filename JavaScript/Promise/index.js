const fs = require('fs')
let fn = function (filePath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err)
                reject(err)
            resolve(data)
        })
    })
}

fn(__dirname + '/1.txt')
    .then(function (data) {
        console.log(data);
        return fn(__dirname + '/2.txt')
    })
    .then(function (data) {
        console.log(data);
        return fn(__dirname + '/3.txt')
    })
    .then(function (data) {
        console.log(data);
    })