const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const AuthorSchema = new Schema({
    name: [{ type: String, required: [true, 'The Author name field is required']}],
    dob: { type: Date, default: Date.now },
    bio: String
});

// create model
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;