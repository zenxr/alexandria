const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const GenreSchema = new Schema({
    name: [{ type: String, required: [true, 'The genre name field is required']}],
});

// create model
const Genre = mongoose.model('genre', GenreSchema);

module.exports = Genre;