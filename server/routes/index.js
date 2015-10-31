/**
 * Created by danesmith on 10/30/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var add = require('./modules/add');
var subtract = require('./modules/subtract');
var multiply = require('./modules/multiply');
var divide = require('./modules/divide');



router.post('/add', function(req, res){
    res.send({
        math : add(req.body)
    });
});

router.post('/sub', function(req, res){
    res.send({
        math : subtract(req.body)
    });
});

router.post('/mlt', function(req, res){
    res.send({
        math : multiply(req.body)
    });
});

router.post('/div', function(req, res){
    res.send({
        math : divide(req.body)
    });
});


router.get('/*', function(req, res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
