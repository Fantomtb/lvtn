var quat = require('../models/quatModel')

module.exports = function (app) {
    app.get('/api/setup', function (req, res) {
        var listquat = [
            {
                state: 'On',
                day: '1-1-1',
                time: '00:00',
                viTri:'2',
            }
        ]
        quat.create(listquat, function (err, result) {
            res.send(result)
        })
    })
}