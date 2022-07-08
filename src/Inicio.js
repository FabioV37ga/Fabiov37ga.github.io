/*
    Esse arquivo é responsável por controlar o início da página: O titulo e o botão inciar.

    1. Classe Titulo
        1.1 Atributos
            1.1.1 Atributo 'bloco_titulo' (elemento)
            1.1.2 Atributo 'titulo' (elemento)
            1.1.3 Atributo 'slider' (elemento)
        1.2 Métodos
            1.2.1 Método 'digita()' (Digita um texto no campo titulo.)
            1.2.2 Método 'apaga()' (Apaga um texto no campo titulo.)
            1.2.3 Método 'pisca()' (Pisca o slider, para efeito de digitação)
    2. Classe Iniciar
        2.1 Atributos
            2.1.1 
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
                console.log("1")
                if (estado == 0){
                    console.log("2")
                    Iniciar.aparece()
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
    static pisca(status) {
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

class Iniciar{
    // Atributos (elementos)
    static pointers = document.querySelectorAll(".pointer");
    static botao_placeholder = document.querySelector("btn_ph");
    static botao = document.querySelector(".iniciar");

    // Método aparece(): Faz o botão aparecer, com uma animação de abrir.
    static aparece(){
        // Altura e largura do botão:
        var largura = 0;
        var altura = 0;
        // Loop com intervalo, responsável pela animação de abrir.
        var intervalo = setInterval(() => {
            // Define a altura e a largura atual do loop a cada execução.
            this.botao.style.width = `${largura}px`;
            this.botao.style.height = `${altura}px`;
            // Sessão responsável por incrementar os valores da largura e altura e finalizar o loop
            if(altura < 41){
                // Incrementa altura até 41px
                altura++
                // if responsável por mostrar o botão somente no incio do animação, evita um bug no display do botão.
                if (altura == 2){
                    this.botao.style.opacity = 100
                }
            }else{
                if (largura < 103){
                    // Incrementa largura até 103px
                    largura++;
                }else{
                    // Quando chegar em 103, mostra o texto "INICIAR"
                    this.botao.textContent ="INICIAR"
                    // também para o loop.
                    clearInterval(intervalo)
                }
            }
        }, 1);
    }
}