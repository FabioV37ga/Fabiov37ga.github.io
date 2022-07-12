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
            1.2.3 Método 'fecha()' (Anima fechamento da janela e das portas)

    2. Classe Navega
        2.2 Métodos
            2.2.1 Método 'set()' (Seleciona os botões e coloca função no click)
            2.2.2 Método 'navegar()' (Click nos botões trocam de página)
                2.2.2.1 Função 'volta()' (Retrocede uma página)
                2.2.2.2 Função 'vai()' (Avança uma página)
            
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
    // Display
    static repositorio_atual;




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
                    var porta_l = $("<div>", { class: "porta" }).appendTo(".portas");
                    var porta_r = $("<div>", { class: "porta" }).appendTo(".portas");
                }
                const conteudo = $("<div>", { class: "conteudo" }).insertAfter(".portas");
                {
                    const imagem = $("<img>", { class: "repositorio__imagem" }).appendTo(".conteudo");
                    const descricao = $("<div>", { class: "repositorio__descricao" }).insertAfter(".repositorio__imagem")
                    {
                        const p = $("<p>").appendTo(".repositorio__descricao")
                    }
                    const botoes = $("<div>", { class: "repositorio__botoes" }).insertAfter(".repositorio__descricao")
                    {
                        const botao_l = $("<button>", { class: "repositorio__botao", text: "DOWNLOAD" }).appendTo(".repositorio__botoes")
                        const botao_r = $("<button>", { class: "repositorio__botao", text: "GITHUB" }).appendTo(".repositorio__botoes")
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
        this.descricao = document.querySelector(".repositorio__descricao").children[0];
        this.botoes = document.querySelectorAll(".repositorio__botao");
        this.pointers = document.querySelectorAll(".browse");

        this.abre(0)
        this.carrega_repo()
    }

    static abre(posicao) {
        // Largura da janela
        var largura_atual = 0;
        var largura_final = 592;
        // Altura da janela
        var altura_atual = 0;
        var altura_final = 652;
        // Abertura da janela
        var abertura = 0;
        // Loop com intervalo:
        if (posicao == 0) {
            var intervalo_1 = setInterval(() => {
                if (largura_atual < largura_final) {
                    // Incrementa largura_atual + 5 a cada execução até 630
                    largura_atual += 5
                    // Aplica a nova largura a cada execução, animando a largura.
                    this.repositorio.style.width = `${largura_atual}px`
                } else {
                    // Quando a animação de largura termina, executa:
                    // Marca o repositorio como ligado
                    Janela.repositorio.classList.remove("off")
                    if (altura_atual < altura_final) {
                        // Incrementa + 4 na altura atual a cada execução até 652
                        altura_atual += 4
                        // Aplica a nova altura a cada execução, animando altura.
                        this.repositorio.style.height = `${altura_atual}px`
                    } else {
                        // Quando terminar de animar altura chama abre_portas()
                        abre_portas()
                        clearInterval(intervalo_1)
                    }
                }
            }, 1);
        } else {
            abre_portas()
        }

        // Essa função serve para animar as portas, revelando o conteudo abaixo delas.
        function abre_portas() {
            Janela.mostra_repo()
            var intervalo_2 = setInterval(() => {

                // Enquanto não estiver aberto 100%...
                if (abertura < 100) {
                    // Adiciona 0.5 por execução
                    abertura += 0.5;
                    // Aplica o espaçamento na janela, abrindo-a.
                    Janela.portas[1].style.marginLeft = `${abertura}%`;
                } else {
                    // ao fim da animação, remove o elemento.
                    document.querySelector(".portas").remove()
                    // Chama navegacao.aparece()
                    Janela.pointers[0].style.opacity = "100%"
                    Janela.pointers[1].style.opacity = "100%"
                    // termina o loop
                    window.nav_block = 0;
                    clearInterval(intervalo_2)
                }
            }, 2);
        }
    }

    // Método fecha(): Responsável por fechar portas e a janela.
    static fecha(proximo) {

        // Cria portas para serem fechadas:
        const portas = $("<div>", { class: "portas" }).insertBefore(".conteudo");
        {
            var porta_l = $("<div>", { class: "porta" }).appendTo(".portas");
            var porta_r = $("<div>", { class: "porta", style: "margin-left: 100%" }).appendTo(".portas");
        }

        // 
        fecha_portas(proximo)

        // Essa função anima o fechamento das portas.
        function fecha_portas(proximo) {
            // Seleciona a porta criada anteriormente
            Janela.portas = document.querySelectorAll(".porta");
            // Define ela como já aberta
            var abertura = 100
            // Loop com intervalo 1ms
            var intervalo = setInterval(() => {
                // Enquanto a porta não estiver completamente fechada
                if (abertura > 0) {
                    // Diminua a % da abertura por 1 por execução
                    abertura--
                    // Atribua esse valor no espaçamento das portas:
                    Janela.portas[1].style.marginLeft = `${abertura}%`
                }
                else {
                    // Quando a porta terminar de fechar, execute:
                    // Escolhe se a janela vai abrir novamente, ou fechar por inteiro
                    switch (proximo) {
                        case 0:
                            // Fecha tudo
                            fecha_geral()
                            break;
                        case 1:
                            // Fecha e abre novamente
                            Janela.abre(1)
                            break;
                    }
                    // Para o loop
                    clearInterval(intervalo)
                }
            }, 1);
        }

        function fecha_geral() {
            window.nav_block = 0
            // Remove os botões de navegação '<' e '>'
            Janela.pointers[0].remove()
            Janela.pointers[1].remove()
            // Define dimensão atual da janela
            var largura_atual = 592;
            var altura_atual = 636;
            // Loop com intervalo 1ms.
            var intervalo = setInterval(() => {
                // Enquanto a altura for maior que 0...
                if (altura_atual > 0) {
                    // Diminui 4 por execução
                    altura_atual -= 4
                    // Aplica nova altura ao display
                    Janela.repositorio.style.height = `${altura_atual}px`
                } else {
                    // Quando a altura atingir 0, execute:
                    // Enquanto a largura for maior que 0...
                    if (largura_atual > 0) {
                        // Diminui 4 por execução
                        largura_atual -= 4;
                        // Aplica nova largura ao display
                        Janela.repositorio.style.width = `${largura_atual}px`
                    } else {
                        // Quando a largura atingir 0, execute:
                        // Remove a janela
                        Janela.bloco_janela.remove()
                        // Define a altura do INICIAR de volta para 45px
                        Iniciar.bloco_nav.style.height = '45px';
                        // Cria botão INICIAR
                        Iniciar.cria()
                        // Para o loop
                        clearInterval(intervalo);
                    }
                }
            }, 1);
        }
    }

    static carrega_repo() {
        var repositorios = [day_cycle_discord, lap_top_craft, wear_sell]
        for (let i = 0; i <= repositorios.length - 1; i++) {
            if (Navega.pagina_atual == repositorios[i].pagina)
            Janela.repositorio_atual = repositorios[i]
            Titulo.apaga(Janela.repositorio_atual.titulo)
        }
    }

    static mostra_repo() {

        this.imagem.src = Janela.repositorio_atual.imagem
        this.descricao.textContent = Janela.repositorio_atual.descricao
        // body
        // Chama Repositorio.fundo_aparece
        Repositorio.fundo_aparece()

    }

}

class Navega {
    // Atributos
    static pointers; // (Elemento)
    static pagina_atual = 0; // Marcador da página atual

    // Método set(): Define os atributos e coloca função nos botões de navegação.
    static set() {
        // Define o atributo 
        this.pointers = document.querySelectorAll(".browse");
        // Adiciona 'click = navegar()'
        // volta()
        this.pointers[0].children[0].addEventListener("click", () => { this.navegar('<') })
        // vai()
        this.pointers[1].children[0].addEventListener("click", () => { this.navegar('>') })
    }

    // Método navegar(): Decide a direção em que o usuário está navegando e redireciona para a página
    static navegar(direcao) {
        switch (direcao) {
            // Click no botão '<' volta...
            case '<':
                volta()
                break;
            // Click no botão '>' vai...
            case '>':
                vai()
                break
        }
        // Função volta()
        function volta() {
            if (window.nav_block == 0) {
                window.nav_block = 1
                // Se voltar fará o usuário cair na página 0, feche a janela por vez e digite o título home.
                if (Navega.pagina_atual == 1) Janela.fecha(0), Titulo.apaga("V37GA'S REPOSITORY");
                // Se voltar faz o usuário cair em um repositório, fecha a janela e torna a abri-la.
                // Diminui o contador de paginas em 1
                else Navega.pagina_atual--, Janela.carrega_repo(), Janela.fecha(1);
                Navega.pagina_atual--
                // Imprime a página atual no console
                console.log("Página: " + Navega.pagina_atual)
            }
        }

        function vai() {
            if (window.nav_block == 0 && Navega.pagina_atual < 3) {
                window.nav_block = 1
                Repositorio.fundo_some();
                // Se ainda há repositorios a frente, fecha a janela e torna a abri-la
                Janela.fecha(1);
                // Se não há mais repositórios a frente, não faz nada.
                // Incrementa o contador de paginas em 1
                Navega.pagina_atual++;
                console.log("Página: " + Navega.pagina_atual)
                Janela.carrega_repo();
                // Imprime a página atual no console
            }
        }
    }
}
