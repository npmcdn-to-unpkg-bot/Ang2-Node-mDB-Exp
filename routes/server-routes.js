var express = require('express');
var router = express.Router();

// var r = require('request').defaults({
//     json: true
// });

var async = require('async');

router.get('/', function (req, res, next) {
    res.render('index');
});


module.exports = router;
