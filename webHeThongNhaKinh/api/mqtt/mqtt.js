var cbAsController = require('../controllers/cbAsController')
var cbDdController = require('../controllers/cbDdController')
var cbDkController = require('../controllers/cbDkController')
var cbNdController = require('../controllers/cbNdController')
var denController = require('../controllers/denController')
var mayBomController = require('../controllers/mayBomController')
var quatController = require('../controllers/quatController')


module.exports = function (io, client) {

    //#region Listen from View to Server and publish from Server to STM
    io.on('connection', function (socket) {
        socket.on('nhietDoVS', function (data) {
            client.publish('nhietDoT', data, { qos: 2 })
        })
        socket.on('doAmVS', function (data) {
            client.publish('doAmT', data, { qos: 2 })
        })
        socket.on('anhSangVS', function (data) {
            client.publish('anhSangT', data, { qos: 2 })
        })
        socket.on('denVS', function (data) {
            client.publish('denT', data, { qos: 2 })
        })
        socket.on('mayBomVS', function (data) {
            client.publish('mayBomT', data, { qos: 2 })
        })
        socket.on('quatVS', function (data) {
            client.publish('quatT', data, { qos: 2 })
        })
    })
    //#endregion listen from Client to Server and publish from Server to PLC

    //#region subscribe from STM to Server and emit from Server to View
    client.on('connect', function () {
        console.log('|-----|||||====== MQTT CONNECTED ====== |||||-----|')
        client.subscribe('nhietDoH')
        client.subscribe('doDatH')
        client.subscribe('anhSangH')
        client.subscribe('doKhiH')
        client.subscribe('denH')
        client.subscribe('mayBomH')
        client.subscribe('quatH')

        // listen all message of all topic
        client.on('message', function (topic, dataClient) {
            if (topic == 'nhietDoH') {
                var dataSocket = dataClient.toString()
                cbNdController(dataSocket)
                // console.log(dataSocket)
                io.emit('nhietDoSV', dataSocket)
            }
            if (topic == 'doDatH') {
                var dataSocket = dataClient.toString()
                cbDdController(dataSocket)
                io.emit('doDatSV', dataSocket)
            }
            if (topic == 'quatH') {
                var dataSocket = dataClient.toString()
                cbDdController(dataSocket)
                io.emit('quatSV', dataSocket)
            }
            if (topic == 'anhSangH') {
                var dataSocket = dataClient.toString()
                cbAsController(dataSocket)
                console.log(dataSocket)
                io.emit('anhSangSV', dataSocket)
            }
            if (topic == 'doKhiH') {
                var dataSocket = dataClient.toString()
                cbDkController(dataSocket)
                io.emit('doKhiSV', dataSocket)
            }
            if (topic == 'denH') {
                var dataSocket = dataClient.toString()
                denController(dataSocket)
                io.emit('denSV', dataSocket)
            }
            if (topic == 'mayBomH') {
                var dataSocket = dataClient.toString()
                mayBomController(dataSocket)
                io.emit('mayBomSV', dataSocket)
            }
        })
    })
    //#endregion subscribe from PLC to Server and emit from Server to Client
}