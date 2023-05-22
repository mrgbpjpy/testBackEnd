const mongoose = require('mongoose');

//Define Schema
const Schema = mongoose.Schema;
const Postings = new Schema({
    name: String,
    description: String
})

//create a Model from Schema


const PostModel = mongoose.model('PostModel', Postings)

module.exports = PostModel