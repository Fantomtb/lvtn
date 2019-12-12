var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var cbAsSchema = new Schema({
    chiSo: String,
    day: String,
    time: String,
    viTri:String,
})

var cbAs = mongoose.model('cbAs', cbAsSchema)

module.exports = cbAs