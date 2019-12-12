var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var cbDdSchema = new Schema({
    chiSo: String,
    day: String,
    time: String,
    viTri: String,
})

var cbDd = mongoose.model('cbDd', cbDdSchema)

module.exports = cbDd