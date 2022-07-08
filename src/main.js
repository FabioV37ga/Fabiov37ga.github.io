/*
    Ponto de entrada.
    Esse arquivo é responsável por chamar as classes e seus métodos
    quando a página for carregada.
*/

// Digita o texto "V37GA'S REPOSITORY"
Titulo.digita("V37GA'S REPOSITORY", 0)
// Faz o slider piscar
Titulo.pisca()

// Sessão responsável por impedir 2 execuções simultâneas da função digita/apaga.
window.block = 0;
// Troca o titulo quando o botão 'iniciar' for pressionado
document.querySelector(".iniciar").addEventListener("click", () => {
    if (window.block == 0) {
        Titulo.apaga("1. Day Cycle Discord")
        window.block = 1;
    }
})