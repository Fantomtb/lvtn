var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var cbDkSchema = new Schema({
    chiSo: String,
    day: String,
    time: String,
})

var cbDk = mongoose.model('cbDk', cbDkSchema)

module.exports = cbDk