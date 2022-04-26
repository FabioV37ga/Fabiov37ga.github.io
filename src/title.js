var initState = 0;
function init() {
    if (initState == 0) {
        showButton();
        initState = 1
    }
}

function blink() {
    const slider = document.querySelector(".slider")
    var intervalId = setInterval(function () {

        if (slider.style.opacity == 100) {
            slider.style.opacity = 0
        } else {
            slider.style.opacity = 100

        }
    }, 630);
}

typeText("v37ga's repository")
function typeText(text) {
    textUpper = text.toUpperCase();
    const titulo = document.querySelector(".titulo")
    const string = "> " + textUpper;
    const tituloSplit = string.split('');

    var i = 0
    finalString = ""
    var intervalo = setInterval(function () {
        finalString = finalString + tituloSplit[i]
        titulo.textContent = finalString
        i++;
        if (i == tituloSplit.length) {
            clearInterval(intervalo)
            init()
        }
    }, 50)

}

blink();

function eraseText(text) {
    const titulo = document.querySelector(".titulo")
    var currentText = titulo.textContent
    const tituloSplit = currentText.split('');

    var tamanho = tituloSplit.length
    var intervalo = setInterval(function () {
        var anterior = ""
        var texto = ""
        tamanho--
        for (let i = 0; i <= tamanho; i++) {

            titulo.textContent = tituloSplit[i]
            texto = anterior + tituloSplit[i]
            anterior = texto
        }
        titulo.textContent = anterior
        if (tamanho == 0) {
            clearInterval(intervalo)
            typeText(text)
        }

    }, 25)
}

const button = document.querySelector(".iniciar")
button.addEventListener("click", function () {
    eraseText("Day Cycle Discord")
    hideButton()
})