const http = require('http');
const fs = require('fs');

fs.readFile('./01-fs.js',function (err,data) {
    console.log(err);
    // console.log(data.toString());
    // if(err){
    //     return res.end('404 Not Found.')
    // }
})

http.createServer(function(req,res){
    let url = req.url;
    if(url === '/'){
        fs.readFile('./test.txt',function (err,data) {
            console.log(err);
            console.log(data);
            // if(err){
            //     return res.end('404 Not Found.')
            // }
            res.end('data')
        })
    }
}).listen(3000,function () {
    console.log('running....');
})