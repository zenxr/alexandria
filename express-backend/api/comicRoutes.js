var express = require('express');
var router = express.Router();

var Comic = require('../datalayer/schemas/comic');
var Chapters = require('../datalayer/schemas/comicChapter');

router.get('/', (req, res, next) => {
    Comic.find({}, 'title')
    .then(data => res.json(data))
    .catch(next);
});

router.post('/', (req, res, next) => {
    //todo: upload a comic
});

router.get('/:id', (req, res, next) => {
    Comic.findOne().populate("authors").populate("genres")
    .then(data => res.json(data))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    Comic.findOneAndDelete({"_id": req.params._id})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/:id/chapters', (req, res, next) => {
    Comic.findById(req.params.id).populate("chapters")
    .then(comic => res.json(comic.chapters))
    .catch(err => res.status(404).json({success: false}))
});

router.get('/')

module.exports = router;