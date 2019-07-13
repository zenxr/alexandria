var express = require('express');
var router = express.Router();

var Author = require('../datalayer/schemas/author');

router.get('/', (req, res, err, next) => {
    try{
        Author.find({}, 'name')
        .then(data => {
            console.log(data);
            res.json(data)
        })    }
    catch (error){
        err => res.status(404).json({success: false});
    }
})

router.post('/', (req, res, next) => {
    if(req.body.name){
        Author.create(req.body)
        .then(data => res.json(data))
        .catch(next);
    }
    else{
        res.json({
            error: "The input field is empty"
        });
    }
});

router.get('/:id', (req, res, next) => {
    Author.findOne()
    .then(data => res.json(data))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Author.findOneAndDelete({"_id": req.params._id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;