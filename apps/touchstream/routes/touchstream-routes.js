var express = require('express'),
    router = express.Router();

router.get('/', function (req,res, next) {
    //all of the channel names touchtream is watching for us
    res.send('res containg channels names');
});

module.exports = router;