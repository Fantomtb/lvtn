var User = require('../models/userModel')

module.exports = function (app) {
    app.get('/api/setupuser', function (req, res) {
        var listUser = [
            {
                email: 'giathinh1228@gmail.com',
                password: '123456tb'
            }
        ]
        User.create(listUser, function (err, result) {
            res.send(result)
        })
    })
}