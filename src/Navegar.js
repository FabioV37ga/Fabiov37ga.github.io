/*
    Esse documento é responsável por controlar a janela e o repositório

    1. Classe Janela
        1.1 Atributos
            1.1.1 Atributo 'imagem' (elemento)
            1.1.2 Atributo 'descricao' (elemento)
            1.1.3 Atributo 'botoes' (elemento)
            1.1.4 Atributo 'pointers' (elemento)
        1.2 Métodos
            1.2.1 Método 'cria()' (Cria os elementos da janela)
            
*/
class Janela {
    static imagem;
    static descricao;
    static botoes;
    static pointers;

    // Método cria(): Constroi a janela, elemento por elemento, também inicializa os atributos.
    static cria() {
        // Elementos:
        var bloco_janela = $("<section>", { class: "bloco__janela" }).insertAfter(".query");
        {
            var browse_l = $("<div>", { class: "browse l" }).appendTo(".bloco__janela");
            {
                var browse_l_a1 = $("<a>").appendTo(".l");
            }
            var repositorio = $("<div>", { class: "repositorio" }).insertAfter(".l");
            {
                var portas = $("<div>", { class: "portas" }).appendTo(".repositorio");
                {
                    var porta_l = $("<div>", { class: "porta" }).appendTo(".portas");
                    var porta_r = $("<div>", { class: "porta" }).appendTo(".portas");
                }
                var conteudo = $("<div>", { class: "conteudo" }).insertAfter(".portas");
                {
                    var imagem = $("<img>", { class: "repositorio__imagem" }).appendTo(".conteudo");
                    var descricao = $("<div>", { class: "repositorio__descricao" }).insertAfter(".repositorio__imagem")
                    var botoes = $("<div>", { class: "repositorio__botoes" }).insertAfter(".repositorio__descricao")
                    {
                        var botao_l = $("<button>", { class: "repositorio__botao" }).appendTo(".repositorio__botoes")
                        var botao_r = $("<button>", { class: "repositorio__botao" }).appendTo(".repositorio__botoes")
                    }
                }
            }
            var browse_r = $("<div>", { class: "browse r" }).insertAfter(".repositorio")
            {
                var browse_l_a2 = $("<a>").appendTo(".r");
            }
        }

        // Setter
        this.imagem = document.querySelector(".repositorio__imagem");
        this.descricao = document.querySelector(".repositorio__descricao");
        this.botoes = document.querySelectorAll(".repositorio__botao");
        this.pointers = document.querySelectorAll(".browse");
    }
}