var express = require('express'),
    router = express.Router();

var Message = require('../models/message');


router.get('/', function (req,res, next) {
    Message.find()
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

router.post('/', function (req, res, next) {
    var message = new Message({
    content: req.body.content
    });
    message.save(function (err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'saved message',
            obj: result
        });
    })
});
//patch only will update part of the record instead of put which will rewrite entire document
router.patch('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No Message found',
                error: {message: 'Message could not be found'}
            });
        }
        doc.content = req.body.content;
        doc.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: result
            })
            
        });
    })
});

router.delete('/:id', function (req, res, next) {
    Message.findById(req.params.id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'No Message found',
                error: {message: 'Message could not be found'}
            });
        }
        doc.remove(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: result
            })

        });
    })
});



module.exports = router;
