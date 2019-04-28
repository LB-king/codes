const express = require('express')
const bodyParser = require('body-parser')
let app = express()
let router = require('./router')
//配置模板引擎
app.engine('html',require('express-art-template'))

//配置中间件body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router);

app.listen(3000,function () {
    console.log('running 3000...');
})
