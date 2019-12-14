var NhietDos = require('../api/models/cbNdModel')
var AnhSangs = require('../api/models/cbAsModel')
var DoKhis = require('../api/models/cbDkModel')
var DoDats = require('../api/models/cbDdModel')
module.exports = function (app, passport) {

    app.get(['/', '/home'], function (req, res) {
        res.render('pages/home')
    })

    app.get('/nhietdo', function (req, res) {
        res.render('pages/nhietDo')
    })

    app.get('/anhsang', function (req, res) {
        res.render('pages/anhSang')
    })

    app.get('/dodat', function (req, res) {
        res.render('pages/doDat')
    })
    
    app.get('/dokhi', function (req, res) {
        res.render('pages/doKhi')
    })

    app.get('/login', function (req, res) {
        res.render('pages/login')
    })

    app.post('/login',
        passport.authenticate('local', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/home')
        }
    )

    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/login')
        })
    })

    app.get('/test', function (req, res) {
        res.render('test')
    })

    app.get('/nhietdo/lichsu', async function (req, res) {
        var temp_history = [];
        console.log('start')
        await NhietDos.find({ viTri: '1' }, function (err, results) {
            if (err) {
                throw err
            }
            console.log('end')
            results.forEach(function (row) {
                if (row.day >= req.query.dayFrom && row.day <= req.query.dayTo) {
                    temp_history.push({ 'day': row.day, 'time': row.time, 'chiSo': row.chiSo })
                }
            })
            res.status(200).send(temp_history)
        })
    })
    app.get('/anhsang/lichsu', async function (req, res) {
        var temp_history = [];
        await AnhSangs.find({ viTri: '1' }, function (err, results) {
            if (err) {
                throw err
            }
            results.forEach(function (row) {
                if (row.day >= req.query.dayFrom && row.day <= req.query.dayTo) {
                    temp_history.push({ 'day': row.day, 'time': row.time, 'chiSo': row.chiSo })
                }
            })
            res.status(200).send(temp_history)
        })
    })

    app.get('/dodat/lichsu', async function (req, res) {
        var temp_history = [];
        await DoDats.find({ viTri: '1' }, function (err, results) {
            if (err) {
                throw err
            }
            results.forEach(function (row) {
                if (row.day >= req.query.dayFrom && row.day <= req.query.dayTo) {
                    temp_history.push({ 'day': row.day, 'time': row.time, 'chiSo': row.chiSo })
                }
            })
            res.status(200).send(temp_history)
        })
    })
    app.get('/dokhi/lichsu', async function (req, res) {
        var temp_history = [];
        await DoKhis.find({ viTri: '1' }, function (err, results) {
            if (err) {
                throw err
            }
            results.forEach(function (row) {
                if (row.day >= req.query.dayFrom && row.day <= req.query.dayTo) {
                    temp_history.push({ 'day': row.day, 'time': row.time, 'chiSo': row.chiSo })
                }
            })
            res.status(200).send(temp_history)
        })
    })
}


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login')
}
function isLoggedInHome(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/introduction')
}
function isLoggedInStreetLight(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.render('pages/streetLightFake')
}
function isLoggedInTrafficLamp(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.render('pages/trafficLampFake')
}