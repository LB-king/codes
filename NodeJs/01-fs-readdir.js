const fs = require('fs');
//异步
fs.readdir('./resource', function (err, data) {
    console.log(err);
    console.log(data); //[ 'css', 'index.html', 'js', 'lib' ]
})
//同步
let dir = fs.readdirSync('./resource')
console.log(dir); //[ 'css', 'index.html', 'js', 'lib' ]
