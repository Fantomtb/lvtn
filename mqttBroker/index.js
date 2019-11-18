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

var clientSTM = mqtt.connect('mqtt://192.168.43.23')

// server
clientServer.on('connect', function () {
    console.log('connected to cloud')
    clientServer.subscribe('nhietDoT')
    clientServer.subscribe('doAmT')
    clientServer.subscribe('anhSangT')
    clientServer.subscribe('phT')
})

clientServer.on('message', function (topic, data) {
    if (topic == 'nhietDoT') {
        clientSTM.publish('nhietDoT', data)
    }
    if (topic == 'doAmT') {
        clientSTM.publish('doAmT', data)}
    if (topic == 'anhSangT') {
        clientSTM.publish('anhSangT', data)}
    if (topic == 'phT') {
        clientSTM.publish('phT', data)
    }
})

// STM
clientSTM.on('connect', function () {
    console.log('connected to STM')
    clientSTM.subscribe('nhietDoH')
    clientSTM.subscribe('doAmH')
    clientSTM.subscribe('anhSangH')
    clientSTM.subscribe('phH')
})

clientSTM.on('message', function (topic, data) {
    if (topic == 'nhietDoH') {
        clientServer.publish('nhietDoH', data)
    }
    if (topic == 'doAmH') {
        clientServer.publish('doAmH', data)
    }
    if (topic == 'anhSangH') {
        clientServer.publish('anhSangH', data)
    }
    if (topic == 'phH') {
        clientServer.publish('phH', data)
    }
})