var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var cbNdSchema = new Schema({
    chiSo: String,
    day: String,
    time: String,
})

var cbNd = mongoose.model('cbNd', cbNdSchema)

module.exports = cbNd