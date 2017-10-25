'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    music: {
    type: String,
    require: true,
    trim: true
},
    slug: {
    type: String,
    require: true,
    trim: true,
    index: true,
    unique: true
},
    artist: {
    type: String,
    require: true,
    unique: true
}
});

module.exports = mongoose.model('playlist', schema);

