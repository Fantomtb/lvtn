var CbAs = require('../models/cbAsModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    // ex: data = '125.5'
    //var viTri = data[0]
    //var chiSo = data.slice(1)
    var cbAs = new CbAs()
    cbAs.viTri = '1'
    cbAs.chiSo = data
    cbAs.day = today
    cbAs.time = (new Date()).toLocaleTimeString()
    cbAs.save(function (err) {
        if (err) {
            throw err
        }
    })
}