const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const Genre = require('./genre');
const Author = require('./author');
const ComicChapter = require('./comicChapter');
*/
var ComicSchema = new Schema({
    title: {type: String, required: true},
    authors: [{type: Schema.ObjectId, ref: 'Author', required: true}],
    summary: {type: String, required: true},
    chapters: [{ type: Schema.ObjectId, ref: 'ComicChapter'}],
    genres: [{type: Schema.ObjectId, ref: 'Genre'}]
});

const Comic = mongoose.model('comic', ComicSchema);

module.exports = Comic;