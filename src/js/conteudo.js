/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  conteudo.js → Controla o funcionamento do conteúdo. Adiciona função aos inputs de navegação, 
 *                controle lógico das 2 janelas de repositorio, animações de avanço e recuo
 *                e define elementos dos repositórios
 *  
 *  class Conteudo
 *  índice
 *      atributos
 *          1. elemento → Referência do elemento html ".visor_conteudo" 
 *          2. elemento_repositorio →  Referência do elemento html ".repositorio"
 *          3. repPrincipal →  Referência do elemento html "#a"
 *          4. repAuxiliar →  Referência do elemento html "#a"
 *      métodos
 *          1. inicializar() → Inicializa conteúdo. Mostra elementos relacionados e adiciona
 *                             função nos botões de navegação.
 *          2. trocarElemento() → Alterna os IDS de repPrincipal e repAuxiliar entre '#a' de '#b'
 *          3. limparClasses() → Limpa classes relacionadas a animação
 *          4. avancar() → Avança visualmente a página, adiciona classes de animação.
 *          4. recuar() → Recua visualmente a página, adiciona classes de animação.
 *          5. defineRepositorio() → Define o valor dos elementos do repositório (repPrincipal) 
 *                                   a partir da página atual, que seleciona o repositório em
 *                                   Repositorio.repositorios
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Conteudo {
    static elemento = document.querySelector(".visor_conteudo")
    static elementos_repositorio = document.querySelectorAll(".repositorio")
    static repPrincipal = document.querySelector("#a");
    static repAuxiliar = document.querySelector("#b");


    static inicializar() {
        // Mostra elemento do visor
        Conteudo.elemento.style.display = 'flex'

        // Botão navegar [ → ]
        Navegacao.elementoVai.addEventListener("click", () => {
            if (Navegacao.coolDown == false) {
                Conteudo.avancar();
            }
        })

        // Botão navegar [ ← ]
        Navegacao.elementoVolta.addEventListener("click", () => {
            if (Navegacao.coolDown == false) {
                Conteudo.recuar();
            }
        })

        // Botões numéricos de navegação
        for (let i = 1; i <= Navegacao.elemento_nav.children.length - 1; i++) {
            Navegacao.elemento_nav.children[i].addEventListener("click", function (event) {
                if (Navegacao.coolDown == false) {
                    // Quando a página selecionada no click for maior que a página atual
                    if (parseInt(event.target.textContent) > Navegacao.pagina) {
                        // Avança
                        Conteudo.avancar()
                    }
                    // Quando a página selecionada no click for menor que a página atual
                    else if (parseInt(event.target.textContent) < Navegacao.pagina) {
                        // Recua
                        Conteudo.recuar()
                    }

                }
            })
        }
    }

    static trocarElemento() {
        Conteudo.repPrincipal =
            Conteudo.repPrincipal == document.querySelector("#a") ? document.querySelector("#b") : document.querySelector("#a")
        Conteudo.repAuxiliar =
            Conteudo.repAuxiliar == document.querySelector("#a") ? document.querySelector("#b") : document.querySelector("#a")
    }

    static limparClasses() {
        Conteudo.repAuxiliar.classList.remove("centerToRight")
        Conteudo.repAuxiliar.classList.remove("rightToCenter")

        Conteudo.repAuxiliar.classList.remove("centerToLeft")
        Conteudo.repAuxiliar.classList.remove("leftToCenter")
    }

    static avancar() {
        if (Navegacao.pagina < Repositorio.repositorios.length) {
            Conteudo.trocarElemento()
            Conteudo.limparClasses()

            Conteudo.repPrincipal.classList.add("rightToCenter")
            Conteudo.repAuxiliar.classList.add("centerToLeft")

            setTimeout(() => {
                Conteudo.limparClasses()
                Navegacao.coolDown = false;
            }, 1000);
        }
    }

    static recuar() {
        if (Navegacao.pagina > 1) {
            Conteudo.trocarElemento()
            Conteudo.limparClasses()

            Conteudo.repPrincipal.classList.add("leftToCenter")
            Conteudo.repAuxiliar.classList.add("centerToRight")

            setTimeout(() => {
                Conteudo.limparClasses()
                Navegacao.coolDown = false;
            }, 1000);
        }
    }

    static defineRepositorio() {
        console.log(Repositorio.repositorios[Navegacao.pagina - 1])
        var repositorio = Repositorio.repositorios[Navegacao.pagina - 1];

        var titulo = Conteudo.repPrincipal.children[0].children[0]
        var tools = Conteudo.repPrincipal.children[0].children[1]
        var linkPlay = Conteudo.repPrincipal.children[0].children[2].children[0]
        var linkGit = Conteudo.repPrincipal.children[0].children[2].children[1]
        var descricao = Conteudo.repPrincipal.children[2].children[1]
        var image = Conteudo.repPrincipal.children[1].children[1]

        titulo.textContent = repositorio.titulo;
        tools.textContent = repositorio.tools;
        linkPlay.setAttribute("href", repositorio.linkPlay)
        linkGit.setAttribute("href", repositorio.linkGit)
        descricao.textContent = repositorio.descricao;
        image.src = repositorio.imagem;

    }
}