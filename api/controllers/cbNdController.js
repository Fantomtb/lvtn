var CbNd = require('../models/cbNdModel')

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0')
var yyyy = today.getFullYear()
today = yyyy + '-' + mm + '-' + dd

module.exports = function (data) {
    // ex: data = '125.5'
    //var viTri = data[0]
    //var chiSo = data.slice(1)
    var cbNd = new CbNd()
    cbNd.viTri = '1'
    cbNd.chiSo = data
    cbNd.day = today
    cbNd.time = (new Date()).toLocaleTimeString()
    cbNd.save(function (err) {
        if (err) {
            throw err
        }
    })
}