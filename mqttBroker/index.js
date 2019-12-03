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

var clientSTM = mqtt.connect('mqtt://10.128.129.78')

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
    clientServer.subscribe('quatT2')
    clientServer.subscribe('denT1')
    clientServer.subscribe('denT2')
    clientServer.subscribe('mayBomT1')
    clientServer.subscribe('mayBomT2')
    clientServer.subscribe('setMucNDT')
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
    if (topic == 'denT1') {
        clientSTM.publish('denT1', data)
    }
    if (topic == 'denT2') {
        clientSTM.publish('denT2',data)
    }
    if (topic == 'quatT') {
        clientSTM.publish('quatT', data)
    }
    if (topic == 'quatT2') {
        clientSTM.publish('quatT2', data)
    }
    if (topic == 'mayBomT1') {
        clientSTM.publish('mayBomT1',data)
    }
    if (topic == 'mayBomT2') {
        clientSTM.publish('mayBomT2',data)
    }
    if (topic == 'setMucNDT') {
        clientSTM.publish('setMucND',data)
    }
})

// STM
clientSTM.on('connect', function () {
    console.log('connected to STM')
    clientSTM.subscribe('nhietDoH')
    clientSTM.subscribe('doDatH')
    clientSTM.subscribe('anhSangH')
    clientSTM.subscribe('mayBomH1')
    clientSTM.subscribe('mayBomH2')
    clientSTM.subscribe('denH1')
    clientSTM.subscribe('denH2')
    clientSTM.subscribe('quatH')
    clientSTM.subscribe('quatH2')
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
    if (topic == 'mayBomH1') {
        clientServer.publish('mayBomH1', data)
    }
    if (topic == 'mayBomH2') {
        clientServer.publish('mayBomH2', data)
    }
    if (topic == 'denH1') {
        clientServer.publish('denH1', data)
    }
    if (topic == 'denH2') {
        clientServer.publish('denH2', data)
    }
    if (topic == 'quatH') {
        clientServer.publish('quatH', data)
    }
    if (topic == 'quatH2') {
        clientServer.publish('quatH2', data)
    }
})