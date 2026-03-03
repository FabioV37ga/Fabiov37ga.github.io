class Window {
    static type;
    static element = document.querySelector(".window");
    static dom = `
    <section class="window" style="background-color: rgb(13, 230, 13); height: 550px; width: 900px;">
            <div class="content">
                <div class="title">Portófolio</div>
            </div>
        </section>
        `
    static state = 0;

    static append() {
        console.log("appending.")
        $("main").append(Window.dom)
    }

    static remove() {
        $(".window").remove()
    }

    static select() {
        Window.element = document.querySelector(".window");
    }

    static setOn() {
        Window.select()
        if (Window.state == 0) {
            // Define state como 1, previnindo 2 execuções simultâneas
            Window.state = 1;

            // Valores de cor
            var r = 255;
            var g = 255;
            var b = 255;

            // Valores de dimensão
            var width = 0;
            var height = 0;

            Window.element.style.height = height + 'px'
            Window.element.style.width = width + 'px'

            // Intervalo de animação
            var intervalo = setInterval(() => {

                // Anima da cor branca até a verde no espectro rgb
                r - 2 >= 0 ? r -= 2 : null;
                g - 1 >= 230 ? g -= 1 : null;
                b - 2 >= 0 ? b -= 2 : null;
                // Estiliza conforme os valores a cada execução
                Window.element.style.backgroundColor = `rgb(${r},${g},${b})`

                // Anima a altura e largura até atingirem, respectivamente, 550 e 900.
                height + 4.575 <= 550 ? height += 4.575 : null;
                width + 7.5 <= 900 ? width += 7.5 : clear(); // Quando essa animação termina, chama clear()
                // Estiliza conforme os valores a cada execução
                Window.element.style.height = height + 'px'
                Window.element.style.width = width + 'px'

                // Função clear: limpa o intervalo e permite que a função seja executada novamente.
                function clear() {
                    clearInterval(intervalo);
                    // Define valores finais, no caso da animação terminar com um número decimal
                    height = 550;
                    width = 900;
                    // Define state como 0.
                    Window.state = 0;
                }
            }, 1);

        }
    }

    static setOff() {

    }
}