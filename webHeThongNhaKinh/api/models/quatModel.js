var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var quatSchema = new Schema({
    state: String,
    day: String,
    time: String,
    viTri:String,
})

var quat = mongoose.model('quat', quatSchema)

module.exports = quat