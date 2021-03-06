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
        socket.on('setMucNDVS',function(data){
            console.log(data)
            client.publish('setMucNDT',data,{qos:2})
        })
        socket.on('doAmVS', function (data) {
            client.publish('doAmT', data, { qos: 2 })
        })
        socket.on('anhSangVS', function (data) {
            client.publish('anhSangT', data, { qos: 2 })
        })
        socket.on('denVS1', function (data) {
            client.publish('denT1', data, { qos: 2 })
        })
        socket.on('denVS2', function (data) {
            client.publish('denT2', data, { qos: 2 })
        })
        socket.on('mayBomVS1', function (data) {
            client.publish('mayBomT1', data, { qos: 2 })
        })
        socket.on('mayBomVS2', function (data) {
            client.publish('mayBomT2', data, { qos: 2 })
        })
        socket.on('quatVS', function (data) {
            client.publish('quatT', data, { qos: 2 })
        })
        socket.on('quatVS2', function (data) {
            client.publish('quatT2', data, { qos: 2 })
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
        client.subscribe('denH1')
        client.subscribe('denH2')
        client.subscribe('mayBomH1')
        client.subscribe('mayBomH2')
        client.subscribe('quatH')
        client.subscribe('quatH2')
        

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
            if (topic == 'quatH2') {
                var dataSocket = dataClient.toString()
                cbDdController(dataSocket)
                io.emit('quatSV2', dataSocket)
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
            if (topic == 'denH1') {
                var dataSocket = dataClient.toString()
                denController(dataSocket)
                io.emit('denSV1', dataSocket)
            }
            if (topic == 'denH2') {
                var dataSocket = dataClient.toString()
                denController(dataSocket)
                io.emit('denSV2', dataSocket)
            }
            if (topic == 'mayBomH1') {
                var dataSocket = dataClient.toString()
                mayBomController(dataSocket)
                io.emit('mayBomSV1', dataSocket)
            }
            if (topic == 'mayBomH2') {
                var dataSocket = dataClient.toString()
                mayBomController(dataSocket)
                io.emit('mayBomSV2', dataSocket)
            }
        })
    })
    //#endregion subscribe from STM to Server and emit from Server to Client
}