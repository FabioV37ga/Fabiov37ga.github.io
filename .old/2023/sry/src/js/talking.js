var audio = new Audio("src/dialog.wav")
audio.volume = 0.2

document.querySelector(".startbtn").addEventListener("click", () => {
    document.querySelector(".start").classList.add("fadeout")
    setTimeout(() => {
        document.querySelector(".start").remove()
        iniciar()
    }, 500);
})


var char = document.querySelector(".char")
var chat = document.querySelector(".chat")
function iniciar() {
    char.classList.add("popin")
    chat.classList.add("popinreverse")

    setTimeout(() => {
        escrever(0)
    }, 1200);
}

var ordemFala = 0;
var falas = [
    [`Oiii Marcella! 
Eu sou a gatinha. 
Acho que você já me conhece por que o Fábio não para de tirar fotos minhas. 
Insuportável.`, 0],
    [`Enfim, ontem ele fez cagada e pediu para eu vir falar com você... 
Ele faz cagadas constantemente.`, 0],
    [`Mas ele ficou verdadeiramente arrependido de não ter jogado com você. 
Ele valoriza muito sua amizade, e ficou triste de não ter te dado atenção. 
Principalmente nessa semana que você ta cheia de coisas pra fazer.`, 0],
    [`OI EU SOU O GATINHO AAAAAAAAAAAAAAAAAAAAAAAAAAA
FOGO E DESTRUIÇÃO`, 1],
    [`O gatinho não tem modos. 
Mas o que ele quis dizer é que o Fábio ama muito você, e sua amizade 
é a coisa mais bonita e verdadeira que ele já construiu.`, 0],
    [`AAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAA
AAAAAAAAAAAAAAAAAAAAAA`, 1],
    [`continuando... 
Ele me disse que promete que dará toda atenção que você merece, principalmente
nessa semana que você ta cheia.`, 0],
    [`E outra coisa, e isso é minha opinião sincera: 
O Bernardo é muito feio e você ter considerado jogar com ele é um escarnio, menina.
Por favor, repense suas decisões.
Você é uma princesa, por favor, né?`, 0],
    [`Pra finalizar, ele me disse que você é a conexão mais sincera que ele já teve.
        Todos os momentos com você são incriveis, e você é a pessoa que ele mais confia.
        Todo dia ruim vira um dia bom quando você tá na call com ele.
        E a sensação de frio na barriga de te ver nunca passa.`, 0],
    [`É serio, Ontem mesmo ele chegou em casa em prantos todo felizinho de ter te dado
            meros selinhos. Acho que ele ta apaixonado.`, 0],
    [`Enfim, você aceita esse pedido de desculpas?
Vou repassar sua resposta para o dito cujo.`, 0],
    ['Discordo. Vou falar pra ele que você perdoou. Eu que mando. Saudades de você, traga whiskas na sua proxima visita.', 0],
    ['Pessima escolha. Eu não teria perdoado. Saudades de você, traga whiskas na sua proxima visita.', 0]

]

var textBox = document.querySelector(".textbox")
function escrever(falaAtual) {
    audio.currentTime = 0
    audio.play()
    console.log('exec')
    var character = document.querySelector(".char img")

    if (falas[falaAtual][1] == 0) {
        character.src = 'src/img/gatinha1.png'
    } else {
        character.src = 'src/img/gatinho1.png'
    }

    var indice = 0;

    var texto = '';
    var fala = falas[falaAtual][0];

    var intervalo = setInterval(() => {
        texto += falas[falaAtual][0][indice]
        indice++

        if (audio.currentTime == 6) {
            audio.currentTime = 1
        }
        if (indice == fala.length) {
            if (falaAtual < 11)
                showAnswer(falaAtual)
            else
                finalizar()
            clearInterval(intervalo)
            audio.pause()
        }
        textBox.textContent = texto
    }, 15);
}


var botaoA = document.querySelector(".buttonA")
var botaoB = document.querySelector(".buttonB")
function showAnswer(falaAtual) {
    if (falaAtual != 10) {
        botaoA.textContent = "Continuar"
        botaoA.style.display = "block"
    } else {
        botaoA.textContent = "Sim"
        botaoA.style.display = "block"
        botaoB.textContent = "Não"
        botaoB.style.display = "block"
    }
}

botaoA.addEventListener("click", () => {
    if (botaoA.textContent == 'Continuar') {
        botaoA.style.display = 'none'
        ordemFala++
        escrever(ordemFala)
    } else {
        botaoA.style.display = 'none'
        botaoB.style.display = 'none'
        escrever(12)
    }
})

botaoB.addEventListener("click", () => {
    botaoA.style.display = 'none'
    botaoB.style.display = 'none'
    escrever(11)
})


var botaoC = document.querySelector(".buttonC")

botaoC.addEventListener("click", () => {
    alert("Eu amo você. Você merece o mundo, e meu maior objetivo é te ver feliz. Obrigado por existir, e obrigado por ser você ❤")
    window.open('https://www.youtube.com/watch?v=ryigUw_Y8v0')
})

function finalizar() {
    botaoC.style.display = 'block'
}