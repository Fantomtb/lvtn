$(function () {
    for (var i = 0; i < 12; i++) {
        streets[i][1].hide()
    }

    street1[0].click(function () {
        $('#showAllStreet').hide()
        street1[1].show()
        $.get(`/history?streetname=${street1[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet1').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street2[0].click(function () {
        $('#showAllStreet').hide()
        street2[1].show()
        $.get(`/history?streetname=${street2[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet2').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street3[0].click(function () {
        $('#showAllStreet').hide()
        street3[1].show()
        $.get(`/history?streetname=${street3[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet3').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street4[0].click(function () {
        $('#showAllStreet').hide()
        street4[1].show()
        $.get(`/history?streetname=${street4[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet4').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street5[0].click(function () {
        $('#showAllStreet').hide()
        street5[1].show()
        $.get(`/history?streetname=${street5[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet5').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street6[0].click(function () {
        $('#showAllStreet').hide()
        street6[1].show()
        $.get(`/history?streetname=${street6[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet6').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street7[0].click(function () {
        $('#showAllStreet').hide()
        street7[1].show()
        $.get(`/history?streetname=${street7[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet7').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street8[0].click(function () {
        $('#showAllStreet').hide()
        street8[1].show()
        $.get(`/history?streetname=${street8[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet8').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street9[0].click(function () {
        $('#showAllStreet').hide()
        street9[1].show()
        $.get(`/history?streetname=${street9[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet9').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street10[0].click(function () {
        $('#showAllStreet').hide()
        street10[1].show()
        $.get(`/history?streetname=${street10[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet10').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street11[0].click(function () {
        $('#showAllStreet').hide()
        street11[1].show()
        $.get(`/history?streetname=${street11[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet11').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })
    street12[0].click(function () {
        $('#showAllStreet').hide()
        street12[1].show()
        $.get(`/history?streetname=${street12[4]}`, function (response) {
            response.forEach(function (element) {
                $('#dataHistoryStreet12').append(function () {
                    return `<tr><td>${element.day}</td><td>${element.time}</td><td>${element.state}</td><td>${element.errorLights}</td></tr>`
                })
            })
        })
    })

    streets.forEach(function (street) {
        street[1].click(function () {
            $('#showAllStreet').show()
            $(this).hide()
            street[2].html(`<table class="table table-striped" border='4' id=${street[3]} cellspacing="0"><tr><th>Day</th><th>Time</th><th>State</th><th>Error Lights</th></tr></table>`)
        })
    })
})