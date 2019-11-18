var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var mayBomSchema = new Schema({
    state: String,
    day: String,
    time: String,
    viTri:String,
})

var mayBom = mongoose.model('mayBom', mayBomSchema)

module.exports = mayBom