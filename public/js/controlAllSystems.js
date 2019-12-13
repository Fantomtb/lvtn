var socket = io()

var canhBaoCao = $('#inputMucND').val()

// code dk xuong server
// nhiet do
$('#btnOnNhietDo').click(function () {
    $('#iconFan').addClass('fa-spin')
    socket.emit('nhietDoVS', '1')
})
$('#btnOffNhietDo').click(function () {
    $('#iconFan').removeClass('fa-spin')
    socket.emit('nhietDoVS', '0')
})
$('#btnSetMucND').click(function () {
    canhBaoCao = $('#inputMucND').val()
})

// anh sang
$('#btnOnAnhSang').click(function () {
    socket.emit('anhSangVS', '1')
})
$('#btnOffAnhSang').click(function () {
    socket.emit('anhSangVS', '0')
})
$('#btnOnDoAm').click(function () {
    socket.emit('doAmVS', '1')
})
$('#btnOffDoAm').click(function () {
    socket.emit('doAmVS', '0')
})
$('#btnOnQuat').click(function () {
    socket.emit('quatVS', '1')
})
$('#btnOffQuat').click(function () {
    socket.emit('quatVS', '0')
})
$('#btnOnQuat2').click(function () {
    socket.emit('quatVS2', '1')
})
$('#btnOffQuat2').click(function () {
    socket.emit('quatVS2', '0')
})
$('#btnOnDen1').click(function () {
    socket.emit('denVS1', '1')
})
$('#btnOffDen1').click(function () {
    socket.emit('denVS1', '0')
})
$('#btnOnDen2').click(function () {
    socket.emit('denVS2', '1')
})
$('#btnOffDen2').click(function () {
    socket.emit('denVS2', '0')
})
$('#btnOnMayBom1').click(function () {
    socket.emit('mayBomVS1', '1')
})
$('#btnOffMayBom1').click(function () {
    socket.emit('mayBomVS1', '0')
})
$('#btnOnMayBom2').click(function () {
    socket.emit('mayBomVS2', '1')
})
$('#btnOffMayBom2').click(function () {
    socket.emit('mayBomVS2', '0')
})
// code nhan data tu server
$('#imgCanhBao').hide()
$('#imgOnDinh').hide()
socket.on('nhietDoSV', function (data) {
    $('#nhietDo').text(data)
    if (parseFloat(data) > canhBaoCao) {
        $('#nhietDo').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data) <= canhBaoCao) {
        $('#nhietDo').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})

socket.on('setMucNDSV', function (data) {
    $('#setMucND').text(data)

})

socket.on('doDatSV', function (data) {
    $('#doAm').text(data)
})
socket.on('anhSangSV', function (data) {
    $('#anhSang').text(data)
    if (parseFloat(data) > canhBaoCao) {
        $('#anhSang').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data) <= canhBaoCao) {
        $('#anhSang').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})
socket.on('phSV', function (data) {
    $('#ph').text(data)
})
socket.on('quatSV', function (data) {
    $('#quat').text(data)
})
socket.on('quatSV2', function (data) {
    $('#quat2').text(data)
})
socket.on('denSV1', function (data) {
    $('#den1').text(data)
})
socket.on('denSV2', function (data) {
    $('#den2').text(data)
})
socket.on('mayBomSV1', function (data) {
    $('#maybom1').text(data)
})
socket.on('mayBomSV2', function (data) {
    $('#maybom2').text(data)
})

// Dùng cho table nhiet do
$('#loadingTableNhietDo').hide()
$('#btnShowDataNhietDo').click(function () {
    $('#tblNhietDo').html('')
    $.ajax({
        type: 'GET',
        url: `/nhietdo/lichsu?dayFrom=${$('#dayFrom').val()}&dayTo=${$('#dayTo').val()}`,
        beforeSend: function () {
            $('#loadingTableNhietDo').show()
        },
        success: function (data) {
            var dataSort = data.reverse()
            dataSort.forEach(row => {
                $('#tblNhietDo').append(`
                    <tr>
                        <th>${row.day}</th>
                        <th>${row.time}</th>
                        <th>${row.chiSo}</th>
                    </tr>
                `)
            })
        },
        error: function (err) {
            console.log(err)
        },
        complete: function () {
            $('#loadingTableNhietDo').hide()
        }
    })
})
// dung cho table anh sang
$('#loadingTableAnhSang').hide()
$('#btnShowDataAnhSang').click(function () {
    $('#tblAnhSang').html('')
    $.ajax({
        type: 'GET',
        url: `/anhsang/lichsu?dayFrom=${$('#dayFrom').val()}&dayTo=${$('#dayTo').val()}`,
        beforeSend: function () {
            $('#loadingTableAnhSang').show()
        },
        success: function (data) {
            var dataSort = data.reverse()
            var dataChart = []
            var labelsChart = []
            dataSort.forEach(row => {
                $('#tblAnhSang').append(`
                    <tr>
                        <th>${row.day}</th>
                        <th>${row.time}</th>
                        <th>${row.chiSo}</th>
                    </tr>
                `)
                dataChart.push(row.chiSo)
                labelsChart.push(row.time)
            })

            var myLineChart = new Chart($('#chartAnhSang'), {
                type: 'line',
                data: {
                    labels: labelsChart,
                    datasets: [{
                        label: "Sessions",
                        lineTension: 0.3,
                        backgroundColor: "rgba(2,117,216,0.2)",
                        borderColor: "rgba(2,117,216,1)",
                        pointRadius: 5,
                        pointBackgroundColor: "rgba(2,117,216,1)",
                        pointBorderColor: "rgba(255,255,255,0.8)",
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(2,117,216,1)",
                        pointHitRadius: 50,
                        pointBorderWidth: 2,
                        data: dataChart,
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            time: {
                                unit: 'date'
                            },
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: 7
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 300,
                                maxTicksLimit: 5
                            },
                            gridLines: {
                                color: "rgba(0, 0, 0, .125)",
                            }
                        }],
                    },
                    legend: {
                        display: false
                    }
                }
            })
        },
        error: function (err) {
            console.log(err)
            alert('FAIL')
        },
        complete: function () {
            $('#loadingTableAnhSang').hide()
        }
    })
})

// dung cho table do am