let numeroTimer = document.getElementById('numero-timer')
let contagemTimer = document.getElementById('contagem-timer')
let tempoTimer = document.getElementById('tempo-timer')
let botaoCancelar = document.getElementById('botao-cancelar')
let botaoPause = document.getElementById('botao-pause')
let botaoIniciar = document.getElementById('botao-iniciar')
let botaoRetomar = document.getElementById('botao-retomar')

let minutos = 10
let segundos = 0
let rodandoTimer = false



function timer() {
    if (rodandoTimer) {
        if (minutos != 0 && segundos != 0) {
            segundos--
        }
        if (minutos != 0 && segundos === 0) {
            minutos--
            segundos = 59
        }
        if (minutos == 0 && segundos == 0) {
            clearInterval(timer)
        }
    }
}
setInterval(function () {
    timer()
    teste()
}, 1000);

function teste() {
    let tempoSegundos = 0
    let tempoMin = 0
    let salvarTempo
    if (segundos <= 9) {
        tempoSegundos = formatarTempo(segundos)
    }
    if (minutos <= 9) {
        tempoMin = formatarTempo(minutos)
    }
    if (tempoMin && tempoSegundos) {
        salvarTempo = `${tempoMin}:${tempoSegundos}`
    }
    if (tempoMin && !tempoSegundos) {
        salvarTempo = `${tempoMin}:${segundos}`
    }
    if (tempoSegundos && !tempoMin) {
        salvarTempo = `${minutos}:${tempoSegundos}`
    }

    contagemTimer.innerText = salvarTempo
}

function formatarTempo(tempo) {
    return `0${tempo}`
}

botaoIniciar.addEventListener('click', function () {
    botaoIniciar.style.display = 'none'
    botaoCancelar.style.display = 'block'
    botaoPause.removeAttribute('disabled')
    rodandoTimer = true
})
botaoCancelar.addEventListener('click', function () {
    botaoIniciar.style.display = 'block'
    botaoCancelar.style.display = 'none'
    botaoPause.setAttribute('disabled', '')
    botaoPause.style.display = 'block'
    botaoRetomar.style.display = 'none'
    rodandoTimer = false
    minutos = 10
    segundos = 0
})

botaoPause.addEventListener('click', function () {
    botaoPause.style.display = 'none'
    botaoRetomar.style.display = 'block'
    rodandoTimer = false

})
botaoRetomar.addEventListener('click', function () {
    botaoPause.style.display = 'block'
    botaoRetomar.style.display = 'none'
    rodandoTimer = true
})




