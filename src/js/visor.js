/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  visor.js → Controla o funcionamento do visor
 *             (Janela física onde o conteúdo é mostrado)
 *  class Visor
 *  Índice
 *      Atributos
 *          1. elemento → Referência do elemento html ".visor" .
 *          2. elemento_animacao → Referência do elemento html ".visor_animacao-ligar".
 *      Métodos
 *          1. ligar() → Imita uma sequencia de boot de um terminal, inicialmente
 *                       faz uma animação de ligar, mostra o título 
 *                       "Portfólio • Fábio Veiga" e por fim trás os repositórios
 *          2. toggleAudio() → Função que controla o som de fundo da página (mute/unmute)
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Visor {
    static elemento = document.querySelector(".visor");
    static elemento_animacao = document.querySelector(".visor_animacao-ligar");
    static elemento_apresentacao = document.querySelector(".conteudo_titulo");
    static elemento_audio = document.querySelector(".visor_audio");
    static audio = new Audio('src/audio/boot.wav');

    static ligar() {
        // Adiciona classes para mostrar os elementos do visor e anima-los.
        Visor.elemento.style.display = 'flex';
        Visor.elemento_animacao.children[0].classList.add('open');
        Visor.elemento_animacao.children[1].classList.add('appear');
        Visor.elemento_animacao.children[2].classList.add('open');

        // Depois de 1.5s, remove os elementos temporarios de animação e estiliza visor definitivamente.
        setTimeout(() => {
            Visor.elemento.style.background = 'var(--terminalGreen)'
            Visor.elemento_animacao.remove();
            // Chama elementos de apresentação (tela "Repositório, Fábio Veiga")
            Conteudo.inicializar();
        }, 1500);

        // Depois de 5s, adiciona classes que fazem o elemento de apresentação desaparecer.
        setTimeout(() => {
            Visor.elemento_apresentacao.classList.add("fadeOut2");
        }, 5000)

        // Ao fim da animação de desaparecer, apaga os elementos de apresentação.
        Visor.elemento_apresentacao.addEventListener("animationend", () => {
            Visor.elemento_apresentacao.remove();
            Navegacao.inicializar();
        })
    }

    static toggleAudio(state) {
        // Caso não tenha argumentos, simplesmente alterna entre volume 0,1 e classes on,off.
        if (!state) {
            Visor.audio.volume = Visor.audio.volume == 1 ? 0 : 1;
            Visor.elemento_audio.children[0].children[0].classList.toggle("fa-volume-up")
            Visor.elemento_audio.children[0].children[0].classList.toggle("fa-volume-off")
        }
        // Caso tenha argumento, aplica, baseado nele, o volume (entre 0 e 1). Não alterna classes.
        else {
            if (state == 0) {
                Visor.audio.volume = 0;
            } else {
                Visor.audio.volume = 1;
            }
        }
    }
}