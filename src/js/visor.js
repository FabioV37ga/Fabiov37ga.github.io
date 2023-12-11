/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  visor.js → Controla o funcionamento do visor
 *             (Janela física onde o conteúdo é mostrado)
 *  Visor
 *  Índice
 *      Atributos
 *          1. elemento → Referência do elemento html ".visor" .
 *          2. elemento_animacao → Referência do elemento html ".visor_animacao-ligar".
 *      Métodos
 *          1. ligar() → Imita uma sequencia de boot de um terminal, inicialmente
 *                       faz uma animação de ligar, mostra o título 
 *                       "Portfólio • Fábio Veiga" e por fim trás os repositórios
 *                    
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Visor {
    static elemento = document.querySelector(".visor");
    static elemento_animacao = document.querySelector(".visor_animacao-ligar");
    static elemento_apresentacao = document.querySelector(".conteudo_titulo");

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
            Conteudo.repPrincipal.classList.add("rightToCenter");
            Navegacao.inicializar();
            Conteudo.defineRepositorio();
        })
    }


}