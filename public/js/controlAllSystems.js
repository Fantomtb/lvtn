var socket = io()

var canhBaoCaoND = $('#inputMucND').val()
var canhBaoCaoDD = $('#inputMucDD').val()
var canhBaoCaoAS = $('#inputMucAS').val()
var canhBaoCaoDK = $('#inputMucDK').val()
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
    canhBaoCaoND = $('#inputMucND').val()
    socket.emit('setMucNDVS', canhBaoCaoND)
})

// anh sang
$('#btnOnAnhSang').click(function () {
    socket.emit('anhSangVS', '3')
})
$('#btnOffAnhSang').click(function () {
    socket.emit('anhSangVS', '2')
})
$('#btnSetMucAS').click(function(){
    canhBaoCaoAS = $('#inputMucAS').val()
    socket.emit('setMucASVS', canhBaoCaoAS)
})

// do am dat
$('#btnOnDoDat').click(function () {
    socket.emit('doDatVS', '5')
})
$('#btnOffDoDat').click(function () {
    socket.emit('doDatVS', '4')
})
$('#btnSetMucDD').click(function(){
    canhBaoCaoDD = $('#inputMucDD').val()
    socket.emit('setMucDDVS', canhBaoCaoDD)
})

// do am khong khi
$('#btnOnDoKhi').click(function(){
    socket.emit('doKhiVS','7')
})
$('#btnOffDoKhi').click(function(){
    socket.emit('doKhiVS','6')
})
$('#btnSetMucDK').click(function(){
    canhBaoCaoDK = $('#inputMucDK').val()
    socket.emit('setMucDKVS', canhBaoCaoDK)
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
    $('#nhietDo').text(`${data.slice(0, 2)}.${data.slice(2)}`)
    if (parseFloat(data) / 10 > canhBaoCaoND) {
        $('#nhietDo').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data) / 10 <= canhBaoCaoND) {
        $('#nhietDo').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})

socket.on('setMucNDSV', function (data) {
    $('#setMucND').text(data)

})

socket.on('doDatSV', function (data) {
    $('#doDat').text(data)
    if (parseFloat(data) > canhBaoCaoDD) {
        $('#doDat').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data) <= canhBaoCaoDD) {
        $('#doDat').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})

socket.on('setMucDDSV', function (data) {
    $('#setMucDD').text(data)

})

socket.on('anhSangSV', function (data) {
    $('#anhSang').text(data)
    if (parseFloat(data) > canhBaoCaoAS) {
        $('#anhSang').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data) <= canhBaoCaoAS) {
        $('#anhSang').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})

socket.on('setMucASSV', function (data) {
    $('#setMucAS').text(data)

})
socket.on('doKhiSV', function (data) {
    $('#doKhi').text(`${data.slice(0, 2)}.${data.slice(2)}`)
    if (parseFloat(data)/10 > canhBaoCaoDK) {
        $('#doKhi').css('color', 'red')
        $('#imgCanhBao').show()
        $('#imgOnDinh').hide()
    } else if (parseFloat(data)/10 <= canhBaoCaoDK) {
        $('#doKhi').css('color', 'green')
        $('#imgCanhBao').hide()
        $('#imgOnDinh').show()
    }
})

socket.on('setMucDKSV', function (data) {
    $('#setMucDK').text(data)

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
            var dataChart = []
            var labelsChart = []
            dataSort.forEach(row => {
                $('#tblNhietDo').append(`
                    <tr>
                        <th>${row.day}</th>
                        <th>${row.time}</th>
                        <th>${row.chiSo.slice(0, 2)}.${row.chiSo.slice(2)}</th>
                    </tr>
                `)
                dataChart.push(row.chiSo)
                labelsChart.push(row.time)
            })

            var myLineChart = new Chart($('#chartNhietDo'), {
                type: 'line',
                data: {
                    labels: labelsChart,
                    datasets: [{ label: "Sessions",
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

// dung cho table do dat
$('#loadingTableDoDat').hide()
$('#btnShowDataDoDat').click(function () {
    $('#tblDoDat').html('')
    $.ajax({
        type: 'GET',
        url: `/dodat/lichsu?dayFrom=${$('#dayFrom').val()}&dayTo=${$('#dayTo').val()}`,
        beforeSend: function () {
            $('#loadingTableDoDat').show()
        },
        success: function (data) {
            var dataSort = data.reverse()
            var dataChart = []
            var labelsChart = []
            dataSort.forEach(row => {
                $('#tblDoDat').append(`
                    <tr>
                        <th>${row.day}</th>
                        <th>${row.time}</th>
                        <th>${row.chiSo}</th>
                    </tr>
                `)
                dataChart.push(row.chiSo)
                labelsChart.push(row.time)
            })

            var myLineChart = new Chart($('#chartDoDat'), {
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
            $('#loadingTableDoDat').hide()
        }
    })
})
// dung cho table do khi
$('#loadingTableDoKhi').hide()
$('#btnShowDataDoKhi').click(function () {
    $('#tblDoKhi').html('')
    $.ajax({
        type: 'GET',
        url: `/dokhi/lichsu?dayFrom=${$('#dayFrom').val()}&dayTo=${$('#dayTo').val()}`,
        beforeSend: function () {
            $('#loadingTableDoKhi').show()
        },
        success: function (data) {
            var dataSort = data.reverse()
            var dataChart = []
            var labelsChart = []
            dataSort.forEach(row => {
                $('#tblDoKhi').append(`
                    <tr>
                        <th>${row.day}</th>
                        <th>${row.time}</th>
                        <th>${row.chiSo}</th>
                    </tr>
                `)
                dataChart.push(row.chiSo)
                labelsChart.push(row.time)
            })

            var myLineChart = new Chart($('#chartDoKhi'), {
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
            $('#loadingTableDoKhi').hide()
        }
    })
})