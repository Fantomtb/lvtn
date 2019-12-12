var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var denSchema = new Schema({
    state: String,
    day: String,
    time: String,
    viTri:String,
})

var den = mongoose.model('den', denSchema)

module.exports = den