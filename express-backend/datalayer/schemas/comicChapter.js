const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ComicChapterSchema = new Schema({
    number: {type: Number, required: [true, 'The Chapter number field is required']},
    images: [{type: Schema.ObjectId, ref: 'ComicImage'}]
});

const ComicChapter = mongoose.model('comicChapter', ComicChapterSchema);

module.exports = ComicChapter;