/*
    Esse arquivo é responsável por controlar o início da página: O titulo e o botão inciar.

    1. Classe Titulo
        1.1 Atributos
            1.1.1 Atributo 'bloco_titulo' (elemento)
            1.1.2 Atributo 'titulo' (elemento)
            1.1.3 Atributo 'slider' (elemento)
        1.2 Métodos
            1.2.1 Método 'cria()' (Cria elementos com jquery)
            1.2.2 Método 'digita()' (Digita um texto no campo titulo.)
            1.2.3 Método 'apaga()' (Apaga um texto no campo titulo.)
            1.2.4 Método 'pisca()' (Pisca o slider, para efeito de digitação)
    2. Classe Iniciar
        2.1 Atributos
            2.1.1 Atributo 'Pointers' (elemento)
            2.1.2 Atributo 'botao_placeholder' (elemento)
            2.1.3 Atributo 'botao' (elemento)
        2.2 Métodos
            2.2.1 Método 'aparece()' (Mostra o botão inciar com uma animação)
            2.2.2 Método 'pisca()' (Pisca '>' e "<" 3 vezes)
            2.2.3 Método 'some()' (Esconde o botão iniciar com uma animação)

*/

class Titulo {
    // Atributos (elementos)
    static bloco_titulo = document.querySelector(".bloco__titulo");
    static titulo = document.querySelector(".titulo");
    static slider = document.querySelector(".slider");

    // Método digita(): digita um texto no campo do título.
    static digita(texto, estado) {
        // Cria array com os caracteres do texto.
        texto = texto.split("");
        // Inicializa texto_final
        var texto_final = "";
        // Loop com intervalo, usa a variavel caractere como limitadora.
        var caractere = 0;
        var intervalo = setInterval(() => {
            // Adiciona o proximo caractere ao texto final
            texto_final += texto[caractere];
            // Troca o textContent = texto_final
            this.titulo.textContent = "> " + texto_final;
            // Incrementa variavel limitadora
            caractere++;
            // Quando terminar de digitar, execute:
            if (caractere == texto.length) {
                // Limpa o intervalo quando o texto terminar de ser digitado.
                clearInterval(intervalo);
                // Permite que uma nova digitação comece
                window.block = 0;
                if (estado == 0) {
                    Iniciar.cria()
                    Titulo.pisca()
                }
            }
        }, 50);
    }

    // Método apaga(): apaga o texto no campo do título, aceita como parâmetro um novo texto a ser digitado
    static apaga(texto) {
        // Cria array com os caracteres do texto.
        var texto_inicial = this.titulo.textContent.split("");
        // Quantidade de caracteres no array
        var tamanho_texto = texto_inicial.length - 1;
        // Loop com intervalo, usa a variavel tamanho_texto como limitadora.
        var intervalo = setInterval(() => {
            // Inicializa texto_final
            var texto_final = "";
            // Loop for, utiliza a variavel caractere como limitadora.
            // Responsável por diminir um caractere de cada vez, apagando o texto
            var caractere = 0;
            for (caractere = 0; caractere <= tamanho_texto; caractere++) {
                texto_final += texto_inicial[caractere];
            }
            // Diminui por 1 o alcance do loop a cada execução do loop intevalo.
            tamanho_texto--
            // Troca o texto, apagando o caractere anterior.
            this.titulo.textContent = texto_final;
            if (tamanho_texto == 0) {
                // Limpa o intervalo quando o texto terminar de ser apagado.
                clearInterval(intervalo);
                // Digita o novo texto, se existir.
                this.digita(texto);
            }
        }, 25);
    }

    // Método pisca(): pisca o caractere '|', para dar efeito de digitação.
    static pisca() {
        // Intervalo 600ms
        var intervalo = setInterval(function () {
            // Troca a opacidade entre os valores '0' e '100' a cada execução.
            if (Titulo.slider.style.opacity == 100) {
                Titulo.slider.style.opacity = 0;
            } else {
                Titulo.slider.style.opacity = 100;
            }
        }, 600);
    }
}


class Iniciar {
    // Atributos (elementos)
    static pointers;
    static botao;
    static botao_placeholder = ".btn_ph";

    // Método cria(): Utilizando jquery, cria os elementos que serão manipulados. Ponto de partida.
    static cria() {
        // Cria elementos:
        const botao = $("<button>", { class: "iniciar nav__botao", style: "opacity: 0" }).appendTo(this.botao_placeholder)
        const pointer_l = $("<span>", { class: "pointer", style: "opacity: 0", text: "> " }).insertBefore(this.botao_placeholder)
        const pointer_r = $("<span>", { class: "pointer", style: "opacity: 0", text: " <" }).insertAfter(this.botao_placeholder)
        // Métodos setter
        this.pointers = document.querySelectorAll(".pointer");
        this.botao = document.querySelector(".iniciar");
        // Chama função aparece(), para mostrar os elementos criados com uma animação.
        this.aparece()
        // Quando o botão criado for clicado, executa:
        this.botao.addEventListener("click", () => {
            // Se não houver uma animação de digitação ocorrendo...
            if (window.block == 0) {
                window.block = 1;
                // Chama função Titulo.apaga()
                Titulo.apaga("1. Day Cycle Discord");
                // Chama função Iniciar.some()
                Iniciar.some();
            }
        })
    }

    // Método aparece(): Faz o botão aparecer, com uma animação de abrir.
    static aparece() {
        // Altura e largura do botão:
        var largura = 0; // até 103
        var altura = 0; // até 41
        // Loop com intervalo, responsável pela animação de abrir.
        var intervalo = setInterval(() => {
            // Define a altura e a largura atual do loop a cada execução.
            this.botao.style.width = `${largura}px`;
            this.botao.style.height = `${altura}px`;
            // Sessão responsável por incrementar os valores da largura e altura e finalizar o loop
            if (altura < 41) {
                // Incrementa altura até 41px
                altura++
                // if responsável por mostrar o botão somente no incio do animação, evita um bug no display do botão.
                if (altura == 2) {
                    this.botao.style.opacity = 100
                }
            } else {
                if (largura < 103) {
                    // Incrementa largura até 103px
                    largura++;
                } else {
                    // Quando animação terminar executa:
                    // Mostra o texto "INICIAR"
                    this.botao.textContent = "INICIAR"
                    // Reseta o estilo
                    this.botao.style = ""
                    // Troca a classe para ativo
                    this.botao.classList.remove("nav__botao")
                    this.botao.classList.add("nav__botao_on")
                    // Chama a função pisca()
                    Iniciar.pisca()
                    // por fim, para o loop.
                    clearInterval(intervalo)
                }
            }
        }, 1);
    }

    // Método pisca(): Faz os caracteres '>' e '<' piscarem 3 vezes.
    static pisca() {
        // Conta o número de execuções do loop.
        var execucoes = 0;
        // Loop com intervalo, responsável por piscar os caracteres.
        var intervalo = setInterval(() => {
            // Alterna a opacidade dos caracteres entre '0' e '100' a cada execução
            if (this.pointers[0].style.opacity == 0) {
                // 100
                this.pointers[0].style.opacity = 100
                this.pointers[1].style.opacity = 100
            } else {
                // 0
                this.pointers[0].style.opacity = 0
                this.pointers[1].style.opacity = 0
            }
            // Incrementa execucoes;
            execucoes++
            // Quando piscar 3 vezes (6 execuções):
            if (execucoes == 6) {
                // Para o loop
                clearInterval(intervalo)
            }
        }, 280);
    }

    // Método some(): Faz o botão desaparecer com uma animação.
    static some() {
        // Remove texto do botão
        this.botao.textContent = "";
        // Cancela animação dos pointers
        this.pointers[0].remove()
        this.pointers[1].remove()
        // Altura e largura do botão:
        var largura = 103;
        var altura = 41;
        // Loop com intervalo, responsável por animar o fechamento do botão
        var intervalo = setInterval(() => {
            // Define a altura e a largura atual do loop a cada execução.
            this.botao.style.width = `${largura}px`;
            this.botao.style.height = `${altura}px`;
            if (largura > 0) {
                // Largura 103 -> 0
                largura--;
            } else {
                // Quando largura = 0:
                if (altura > 0) {
                    // Altura 41 -> 0
                    altura--;
                } else {
                    // Quando altura = 0:
                    // Remove o botão
                    this.botao.remove()
                    // Para o loop
                    this.cria()
                    clearInterval(intervalo)
                }
            }
        }, 1);
    }

}