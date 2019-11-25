var Den = require('../models/denModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    // ex: data = '125.5'
    var viTri = data[0]
    var state = data.slice(1)
    var den = new Den()
    den.viTri = viTri
    den.state = state
    den.day = today
    den.time = (new Date()).toLocaleTimeString()
    den.save(function (err) {
        if (err) {
            throw err
        }
    })
}