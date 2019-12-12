var MayBom = require('../models/mayBomModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    console.log('mayBom: ' + data)
    // ex: data = '125.5'
    var viTri = data[0]
    var state = data.slice(1)
    var mayBom = new MayBom()
    mayBom.viTri = viTri
    mayBom.state = state
    mayBom.day = today
    mayBom.time = (new Date()).toLocaleTimeString()
    mayBom.save(function (err) {
        if (err) {
            throw err
        }
    })
}