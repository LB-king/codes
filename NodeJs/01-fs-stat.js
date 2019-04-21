const fs = require('fs');
//文件夹则返回true 文件返回false
let stat = fs.lstatSync('./resource/index.html')

console.log(stat);
console.log(stat.atime);

