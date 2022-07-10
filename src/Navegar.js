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
            1.2.2 Método 'abre()' (Anima os elementos criados pelo cria())
            
*/
class Janela {
    // Atributos (elementos)
    // janela
    static bloco_janela;
    static repositorio;
    static pointers;
    static portas;
    // repositorio
    static imagem;
    static descricao;
    static botoes;



    // Método cria(): Constroi a janela, elemento por elemento, também inicializa os atributos.
    static cria() {
        // Elementos:
        const bloco_janela = $("<section>", { class: "bloco__janela" }).insertAfter(".query");
        {
            const browse_l = $("<div>", { class: "browse l" }).appendTo(".bloco__janela");
            {
                const browse_l_a1 = $("<a>", { text: "<" }).appendTo(".l");
            }
            const repositorio = $("<div>", { class: "repositorio off" }).insertAfter(".l");
            {
                const portas = $("<div>", { class: "portas" }).appendTo(".repositorio");
                {
                    const porta_l = $("<div>", { class: "porta" }).appendTo(".portas");
                    const porta_r = $("<div>", { class: "porta" }).appendTo(".portas");
                }
                const conteudo = $("<div>", { class: "conteudo" }).insertAfter(".portas");
                {
                    const imagem = $("<img>", { class: "repositorio__imagem" }).appendTo(".conteudo");
                    const descricao = $("<div>", { class: "repositorio__descricao" }).insertAfter(".repositorio__imagem")
                    const botoes = $("<div>", { class: "repositorio__botoes" }).insertAfter(".repositorio__descricao")
                    {
                        const botao_l = $("<button>", { class: "repositorio__botao" }).appendTo(".repositorio__botoes")
                        const botao_r = $("<button>", { class: "repositorio__botao" }).appendTo(".repositorio__botoes")
                    }
                }
            }
            const browse_r = $("<div>", { class: "browse r" }).insertAfter(".repositorio")
            {
                const browse_l_a2 = $("<a>", { text: ">" }).appendTo(".r");
            }
        }

        // Armazena o elementos criados nos atributos da classe:
        
        this.bloco_janela = document.querySelector(".bloco__janela");
        this.repositorio = document.querySelector(".repositorio");
        this.portas = document.querySelectorAll(".porta");

        this.imagem = document.querySelector(".repositorio__imagem");
        this.descricao = document.querySelector(".repositorio__descricao");
        this.botoes = document.querySelectorAll(".repositorio__botao");
        this.pointers = document.querySelectorAll(".browse");

        this.abre()
    }

    static abre(){
        // Largura da janela
        var largura_atual = 0;
        var largura_final = 630;
        // Altura da janela
        var altura_atual = 0;
        var altura_final = 652;
        // Abertura da janela
        var abertura = 0;
        // Loop com intervalo:
        var intervalo = setInterval(() => {
            if (largura_atual < largura_final){
                // Incrementa largura_atual + 5 a cada execução até 630
                largura_atual += 5
                // Aplica a nova largura a cada execução, animando a largura.
                this.repositorio.style.width = `${largura_atual}px`
            }else{
                // Quando a animação de largura termina, executa:
                // Marca o repositorio como ligado
                this.repositorio.classList.remove("off")
                if (altura_atual < altura_final){
                    // Incrementa + 4 na altura atual a cada execução até 652
                    altura_atual += 4
                    // Aplica a nova altura a cada execução, animando altura.
                    this.repositorio.style.height = `${altura_atual}px`
                }else{
                    // Quando terminar de animar altura chama abre_portas()
                    abre_portas()
                }
            }
            
            // Essa função serve para animar as portas, revelando o conteudo abaixo delas.
            function abre_portas(){
                // Enquanto não estiver aberto 100%...
                if (abertura < 100){
                    // Adiciona 0.5 por execução
                    abertura+= 0.5;
                    // Aplica o espaçamento na janela, abrindo-a.
                    Janela.portas[1].style.marginLeft = `${abertura}%`;
                    // console.log(Janela.portas)
                }else{
                    clearInterval(intervalo)
                }
            }
        }, 1);
    }
}