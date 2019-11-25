var mqtt = require('mqtt')

var options = {
    port: 14523,
    host:'mqtt://m14.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'jkoevake',
    password: 'QdfBdhSrwmdK',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
}
var clientServer = mqtt.connect('mqtt://m14.cloudmqtt.com', options)

var clientSTM = mqtt.connect('mqtt://192.168.1.78')

// server
clientServer.on('connect', function () {
    console.log('connected to cloud')
    clientServer.subscribe('nhietDoT')
    clientServer.subscribe('doDatT')
    clientServer.subscribe('anhSangT')
    clientServer.subscribe('phT')
    clientServer.subscribe('denT')
    clientServer.subscribe('mayBomT')
    clientServer.subscribe('quatT')
})

clientServer.on('message', function (topic, data) {
    if (topic == 'nhietDoT') {
        clientSTM.publish('nhietDoT', data)
    }
    if (topic == 'doDatT') {
        clientSTM.publish('doDatT', data)}
    if (topic == 'anhSangT') {
        clientSTM.publish('anhSangT', data)}
    if (topic == 'mayBomT') {
        clientSTM.publish('mayBomT', data)
    }
    if (topic == 'denT') {
        clientSTM.publish('denT', data)
    }
    if (topic == 'quatT') {
        clientSTM.publish('quatT', data)
    }
})

// STM
clientSTM.on('connect', function () {
    console.log('connected to STM')
    clientSTM.subscribe('nhietDoH')
    clientSTM.subscribe('doDatH')
    clientSTM.subscribe('anhSangH')
    clientSTM.subscribe('mayBomH')
    clientSTM.subscribe('denH')
    clientSTM.subscribe('quatH')
})

clientSTM.on('message', function (topic, data) {
    if (topic == 'nhietDoH') {
        clientServer.publish('nhietDoH', data)
    }
    if (topic == 'doDatH') {
        clientServer.publish('doDatH', data)
    }
    if (topic == 'anhSangH') {
        clientServer.publish('anhSangH', data)
    }
    if (topic == 'mayBomH') {
        clientServer.publish('mayBomH', data)
    }
    if (topic == 'denH') {
        clientServer.publish('denH', data)
    }
    if (topic == 'quatH') {
        clientServer.publish('quatH', data)
    }
})