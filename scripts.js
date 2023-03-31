
var sec = 0

var min = 0


var interval

function start() {


    interval = setInterval(watch, 1000) //executa a função ou instrução várias vezes em um determinado intervalo de tempo


}

function pause() {
    clearInterval(interval) // Esta função pausa o cronômetro exatamento com os dígitos onde ele parou!
}

function stop() {  //Esta zera o cronômetro e acrescenta 00:00 no input

    clearInterval(interval)
    sec = 0
    min = 0

    document.getElementById('watch').innerHTML = '00:00'

}

function watch() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
    }
    document.getElementById('watch').innerHTML = min + ':' + sec // muda o html do h1 ou seja, 00:00 para o número do sec mais o número do min concatenado com ':'
    
}