var express = require('express'),
    router = express.Router(),
    jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user')


router.get('/', function (req,res, next) {
    Message.find()
        .populate('user')
        //dont execute this query immediately instead execute all queries
        .exec(function (err, docs) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Success',
                obj: docs
            })
        });
});

//
router.use('/', function(req, res, next) {
    console.log(req.query.token)
    jwt.verify(req.query.token, 'secret', function(err, decoded) {
        if (err) {
            return res.status(401).json({
                title: 'Server Authentication failed',
                error: err
            });
        }
        next();
    });
});

router.post('/', function (req, res, next) {
    //we know that the jwt is valid at this point because it made it past the above middleware
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: doc
        });
        message.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            doc.messages.push(result);
            doc.save();
            res.status(201).json({
                message: 'saved message',
                obj: result
            });
        })
    });
});
//patch only will update part of the record instead of put which will rewrite entire document
router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            });
        }
        console.log(doc.user);
        console.log(decoded.user);
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {message: 'Message created by other user'}
            });
        }
        doc.content = req.body.content;
        doc.save(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No message found',
                error: {message: 'Message could not be found'}
            });
        }
        if (doc.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Authorized',
                error: {message: 'Message created by other user'}
            });
        }
        doc.remove(function(err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: result
            });
        });
    });
});



module.exports = router;
