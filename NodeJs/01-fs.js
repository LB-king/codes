const http = require('http');
const fs = require('fs');
// let r = fs.readFileSync('./resource/index.html');
// console.log(r.toString());

http.createServer(function (req, res) {
    //异步读取
    fs.readFile('./resource/index.html', function (err, data) {
        if (err) {
            return res.send('404 Not Found.')
        }
        res.end(data)
    })
}).listen(3000, function () {
    console.log('running....');
})