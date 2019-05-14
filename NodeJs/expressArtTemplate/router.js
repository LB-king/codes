const express = require('express')
const fs = require('fs')
const path = require('path')
let router = express.Router()

let filePath = path.join(__dirname,'./data/persons.json')
console.log(filePath)
//初始页面
router.get('/', function (req, res) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return res.render('404.html')
        }
        let persons = JSON.parse(data).persons
        res.render('home.html', {
            persons: persons
        })
    })
})
//添加页面
router.get('/toAdd', function (req, res) {
    res.render('add.html')
})
//向数据中添加一条
router.post('/addPerson', function (req, res) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return res.render('404.html')
        }
        let persons = JSON.parse(data).persons
        let param = req.body
        param.id = parseInt(persons[persons.length - 1].id + 1)
        persons.push(param)
        let newP = JSON.stringify({persons: persons})
        fs.writeFile(filePath, newP, function (err) {
            if (err) {
                return res.render('404.html')
            }
            res.redirect('/')
        })
    })
})
//编辑数据页面
router.get('/edit', function (req, res) {
    let id = parseInt(req.query.id)
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return res.render('404.html')
        }
        let persons = JSON.parse(data).persons
        let person = persons.find(function (item) {
            return item.id === id
        })
        res.render('edit.html', {
            person: person
        })
    })
})
//修改一条数据
router.post('/editPerson', function (req, res) {
    let param = req.body
    param.id = parseInt(param.id)
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return res.render('404.html')
        }
        let persons = JSON.parse(data).persons
        let person = persons.find(function (item) {
            return item.id === param.id
        })
        for (let i in param) {
            person[i] = param[i]
        }
        let newP = JSON.stringify({persons:persons})
        fs.writeFile(filePath, newP, function (err) {
            if (err) {
                return res.render('404.html')
            }
            res.redirect('/')
        })
    })
})
//删除一条数据
router.get('/delete', function (req, res) {
    let param = req.query
    param.id = parseInt(param.id)
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return res.render('404.html')
        }
        let persons = JSON.parse(data).persons
        let personIndex = persons.findIndex(function (item) {
            return item.id === param.id
        })
        persons.splice(personIndex,1)
        let newP = JSON.stringify({persons:persons})
        fs.writeFile(filePath, newP, function (err) {
            if (err) {
                return res.render('404.html')
            }
            res.redirect('/')
        })
    })
})
module.exports = router