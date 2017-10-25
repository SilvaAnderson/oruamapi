'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    name: {
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
    CPFCNPJ: {
    type: Number,
    require: true,
    unique: true
},
    email: {
    type: String,
    require: true,
    unique: true
},
    password: {
    type: Number,
    require: true
},
    user: {
    type: String,
    require: true,
    unique: true
},
    usertype: {
    type: String,
    require: true
},
    publicplace: {
    type: String,
    require: true
},
});

module.exports = mongoose.model('user', schema);

