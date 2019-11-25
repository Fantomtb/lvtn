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
$('#btnOnQuat').click(function(){
    socket.emit('quatVS','1')
})
$('#btnOffQuat').click(function(){
    socket.emit('quatVS','0')
})
$('#btnOnQuat2').click(function(){
    socket.emit('quatVS2','1')
})
$('#btnOffQuat2').click(function(){
    socket.emit('quatVS2','0')
})
$('#btnOnDen1').click(function(){
    socket.emit('denVS1','1')
})
$('#btnOffDen1').click(function(){
    socket.emit('denVS1','0')
})
$('#btnOnDen2').click(function(){
    socket.emit('denVS2','1')
})
$('#btnOffDen2').click(function(){
    socket.emit('denVS2','0')
})
$('#btnOnMayBom1').click(function(){
    socket.emit('mayBomVS1','1')
})
$('#btnOffMayBom1').click(function(){
    socket.emit('mayBomVS1','0')
})
$('#btnOnMayBom2').click(function(){
    socket.emit('mayBomVS2','1')
})
$('#btnOffMayBom2').click(function(){
    socket.emit('mayBomVS2','0')
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
socket.on('doDatSV', function (data) {
    $('#doAm').text(data)
})
socket.on('anhSangSV', function (data) {
    $('#anhSang').text(data)
})
socket.on('phSV', function (data) {
    $('#ph').text(data)
})
socket.on('quatSV', function (data){
    $('#quat').text(data)
})
socket.on('quatSV2', function (data){
    $('#quat2').text(data)
})
socket.on('denSV1', function (data){
    $('#den1').text(data)
})
socket.on('denSV2', function (data){
    $('#den2').text(data)
})
socket.on('mayBomSV1', function (data){
    $('#maybom1').text(data)
})
socket.on('mayBomSV2', function (data){
    $('#maybom2').text(data)
})