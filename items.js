var express = require('express')
var router = express.Router()


let items = [
    {id: 1,
    name: 'first'},
    {id: 2,
    name: 'second'}
    ]

router
    .get('/', function(req, res){
        res.send(items)
    })
    .get('/:id', function(req, res){
        res.send(items.find(item => item.id==req.params.id))
    })
    .put('/', function(req, res){
        if (!req.body) return res.sendStatus(400)
        items.push({id: 3, name: req.body.name})
        //items.find(item => item.id==req.params.id).name = req.params.name
        res.sendStatus(200)
    })

module.exports = router