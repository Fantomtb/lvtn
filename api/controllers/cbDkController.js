var CbDk = require('../models/cbDkModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    // ex: data = '125.5'
    //var viTri = data[0]
    //var chiSo = data.slice(1)
    var cbDk = new CbDk()
    cbDk.viTri = '1'
    cbDk.chiSo = data
    cbDk.day = today
    cbDk.time = (new Date()).toLocaleTimeString()
    cbDk.save(function (err) {
        if (err) {
            throw err
        }
    })
}