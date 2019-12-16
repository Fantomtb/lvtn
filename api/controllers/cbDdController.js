var CbDd = require('../models/cbDdModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    // ex: data = '125.5'
    //var viTri = data[0]
    //var chiSo = data.slice(1)
    var cbDd = new CbDd()
    cbDd.viTri = '1'
    cbDd.chiSo = data
    cbDd.day = today
    cbDd.time = (new Date()).toLocaleTimeString()
    cbDd.save(function (err) {
        if (err) {
            throw err
        }
    })
}