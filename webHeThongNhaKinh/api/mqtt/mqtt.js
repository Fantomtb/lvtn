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
        socket.on('phVS', function (data) {
            client.publish('phT', data, { qos: 2 })
        })

    })
    //#endregion listen from Client to Server and publish from Server to PLC

    //#region subscribe from STM to Server and emit from Server to View
    client.on('connect', function () {
        console.log('|-----|||||====== MQTT CONNECTED ====== |||||-----|')
        client.subscribe('nhietDoH')
        client.subscribe('doAmH')
        client.subscribe('anhSangH')
        client.subscribe('phH')

        // listen all message of all topic
        client.on('message', function (topic, dataClient) {
            if (topic == 'nhietDoH') {
                var dataSocket = dataClient.toString()
                // console.log(dataSocket)
                io.emit('nhietDoSV', dataSocket)
            }
            if (topic == 'doAmH') {
                var dataSocket = dataClient.toString()
                io.emit('doAmSV', dataSocket)
            }
            if (topic == 'anhSangH') {
                var dataSocket = dataClient.toString()
                console.log(dataSocket)
                io.emit('anhSangSV', dataSocket)
            }
            if (topic == 'phH') {
                var dataSocket = dataClient.toString()
                io.emit('phSV', dataSocket)
            }
        })
    })
    //#endregion subscribe from PLC to Server and emit from Server to Client
}