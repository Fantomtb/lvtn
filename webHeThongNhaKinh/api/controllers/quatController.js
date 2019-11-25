var Quat = require('../models/quatModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    console.log('quat: ' + data)
    // ex: data = '125.5'
    var viTri = data[0]
    var state = data.slice(1)
    var quat = new Quat()
    quat.viTri = viTri
    quat.state = state
    quat.day = today
    quat.time = (new Date()).toLocaleTimeString()
    quat.save(function (err) {
        if (err) {
            throw err
        }
    })
}