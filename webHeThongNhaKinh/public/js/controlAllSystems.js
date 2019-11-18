var socket = io()

// code dk xuong server
$('#btnOnNhietDo').click(function () {
    socket.emit('nhietDoVS', '1')
})
$('#btnOffNhietDo').click(function () {
    socket.emit('nhietDoVS', '0')
})
$('#btnOnAnhSang').click(function () {
    socket.emit('anhSangVS', '1')
})
$('#btnOffAnhSang').click(function () {
    socket.emit('anhSangVS', '0')
})
$('#btnOnDoAm').click(function(){
    socket.emit('doAmVS','1')
})
$('#btnOffDoAm').click(function(){
    socket.emit('doAmVS','0')
})
// code nhan data tu server
socket.on('nhietDoSV', function (data) {
    $('#nhietDo').text(data)
    if (parseFloat(data) > 30) {
        $('#nhietDo').css('color', 'red')
    } else {
        $('#nhietDo').css('color', 'black')
    }
})
socket.on('doAmSV', function (data) {
    $('#doAm').text(data)
})
socket.on('anhSangSV', function (data) {
    $('#anhSang').text(data)
})
socket.on('phSV', function (data) {
    $('#ph').text(data)
})
