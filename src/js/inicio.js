/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  inicio.js → Controla o funcionamento do inicio do portfólio
 *             (no caso, o botão de power on e a imagem "clique aqui!")
 *  Inicio
 *  Índice
 *      Atributos
 *          1. elemento → Referência do elemento html ".iniciar" .
 *          2. elemento_clickHere → Referência do elemento html ".clickhere" .
 *          3. audio → Audio de inicio.
 *      Métodos
 *          1. inicializar() → Atribui funções ao botão iniciar.
 *          2. iniciar() → Inicia visor, ponto de partida do sistema.
 *          3. desaparecer() → Transiciona e apaga os elementos do inicio
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Inicio {
    // Referência do elemento html
    static elemento = document.querySelector(".iniciar");
    static elemento_clickHere = document.querySelector(".clickhere")
    // Audio de inicio
    static audio = new Audio('src/audio/boot.wav');

    // #1 Método inicializar()
    static inicializar() {
        // State: só permite execução quando o usuário pressiona, não tira o ponteiro do elemento e depois solta o click
        var state = 0;

        // MOUSEDOWN → Quando o usuário pressiona o botão do mouse no elemento
        Inicio.elemento.addEventListener("mousedown", () => {
            // adiciona cor verde escura no botão
            Inicio.elemento.classList.add("buttonDown")
            // State = 1, o usuário pressionou o botão
            state = 1;
        })

        // MOUSELEAVE → Quando o usuário tira o ponteiro do mouse do elemento
        Inicio.elemento.addEventListener("mouseleave", () => {
            // adiciona dor verde clara no botão
            Inicio.elemento.classList.remove("buttonDown")
            // State = 0, o usuário tirou o ponteiro do elemento do botão
            state = 0;
        })

        // MOUSEUP → Quando o usuário solta o botão do mouse 
        Inicio.elemento.addEventListener("mouseup", () => {
            // Se o usuário pressionou o botão e não tirou o ponteiro do botão, executa:
            if (state == 1) {
                Inicio.elemento.classList.remove("buttonDown")
                Inicio.elemento.classList.add("buttonUp")
                // chama iniciar()
                Inicio.iniciar();
            }
        })
    }

    static iniciar() {
        // Da play no som de boot
        Inicio.audio.currentTime = 0.38
        Inicio.audio.play();

        // Intervalo para manter o loop do som
        setInterval(() => {
            if (Inicio.audio.currentTime >= 15) {
                Inicio.audio.currentTime = 11
            }
        }, 1000);

        // timeout para ligar o visor
        setTimeout(() => {
            console.log("beep!")
            Visor.ligar()
            // Esse tempo (ms) é relativo ao tempo de duração da animação no arquivo 'Visor.css'
        }, 3450);

        // chama desaparecer()
        Inicio.desaparecer();
    }


    static desaparecer() {
        // Adiciona listener para remover elementos ao fim da animação
        Inicio.elemento.addEventListener("animationend", () => {
            Inicio.elemento.remove()
            Inicio.elemento_clickHere.remove()
        })

        // (BOTÃO) troca classes, altera visual do botão e anima fade-out
        Inicio.elemento.classList.remove("inciar_off")
        Inicio.elemento.classList.add("iniciar_on")

        // (CLICKHERE) adiciona animação de fade-out
        Inicio.elemento_clickHere.classList.add('fadeOut')
    }
}