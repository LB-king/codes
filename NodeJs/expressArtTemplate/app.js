const app = require('express')()
const bodyParser = require('body-parser')
let router = require('./router')
let path = require('path')
//配置模板引擎
app.engine('html',require('express-art-template'))

app.set('views',path.join(__dirname,'/views/'))
//配置中间件body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router);

app.listen(3000,function () {
    console.log('running 3000...');
})
