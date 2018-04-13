var express = require('express')
var bodyParser = require('body-parser')
var app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var items = require('./items')
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('main page')
})


app.use('/items', items)


app.listen(3000, () => console.log('Example app listening on port 3000!'))