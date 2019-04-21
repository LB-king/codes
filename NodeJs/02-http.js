const http = require('http');
const fs = require('fs');
const url = require('url');

let r = url.parse('http://god.com:3001/admin/zhangsan?name=kobe&age=18',true);
console.log(r.query.name); //kobe
http.createServer(function (req,res) {
    console.log(url.parse(req.url));
    res.end('kk')
}).listen(3000,function () {
    console.log('running at port:3000');
})