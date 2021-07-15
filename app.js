// addEventListener
// querySelector
var arr = []
var start = document.querySelectorAll('input')[0]
var end = document.querySelectorAll('input')[1]
var subDiv = document.querySelector('.sub-div')
var genBtn = document.querySelector('.gen')
var reload = document.querySelector('.reload')
var Print = document.querySelector('.print')
    // var resMain = document.querySelector('.result-text')
var resultNotifier = document.querySelector('.res-main')
var table = document.querySelector('table')
var count = 0

function main() {
    for (var i = Number(start.value); i <= Number(end.value); i++) {
        arr.push(i)
    }
    var arr2 = Array.from(arr)
    for (var j = 1; j <= arr.length; j++) {
        count++
        var tableRow = document.createElement('tr')
        var tableData1 = document.createElement('td')
        var tableData2 = document.createElement('td')

        var random = Math.floor(Math.random() * arr2.length)
        var text1 = document.createTextNode(count)
        var text2 = document.createTextNode(arr2[random])

        arr2.splice(random, 1)

        tableData1.appendChild(text1)
        tableData2.appendChild(text2)
        tableRow.appendChild(tableData1)
        tableRow.appendChild(tableData2)
        table.appendChild(tableRow)

        tableData1.classList.add('td')
        tableData2.classList.add('td')

        resultNotifier.innerHTML = (Number(end.value) - Number(start.value)) + 1

        start.disabled = true
        end.disabled = true
        setTimeout(function() {
            start.value = ''
            end.value = ''
        }, 10)
        genBtn.disabled = true
        genBtn.style.background = '#808080'
    }
    reload.style.display = 'inline-block'
    Print.style.visibility = 'visible'
}

function mainProgram() {
    if (start.value == '' && end.value == '') {
        alert('Please fill up two fields')
    } else if (start.value == '') {
        alert('Please type starting point')
    } else if (end.value == '') {
        alert('Please type ending point')
    } else if (Number(start.value) > Number(end.value)) {
        alert('Starting point value must be less than Ending point value')
        start.value = ''
        end.value = ''
    } else {
        main()
    }
}

reload.addEventListener('click', () => {
    window.location.reload()
})

Print.addEventListener('click', () => {
    window.print()
})

genBtn.addEventListener('click', () => {
    mainProgram()
})

window.addEventListener('keydown', function(key) {
    if (key.keyCode == '13') {
        mainProgram()
    }
})