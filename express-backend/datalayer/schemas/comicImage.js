const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ComicImageSchema = new Schema({
    filepath: {type: String, required: [true, 'The ComicImage filepath is required']},
});

const ComicImage = mongoose.model('comicImage', ComicImageSchema);

module.exports = ComicImage;