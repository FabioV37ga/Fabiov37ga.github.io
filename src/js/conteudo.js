/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  conteudo.js →
 *  
 *                   
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Conteudo {
    static elemento = document.querySelector(".visor_conteudo")
    static elementos_repositorio = document.querySelectorAll(".repositorio")
    static repPrincipal = document.querySelector("#a");
    static repAuxiliar = document.querySelector("#b");

    static inicializar() {
        Conteudo.elemento.style.display = 'flex'

        Navegacao.elementoVai.addEventListener("click", () => {
            if (Navegacao.coolDown == false) {
                Conteudo.avancar();
            }
        })

        Navegacao.elementoVolta.addEventListener("click", () => {
            if (Navegacao.coolDown == false) {
                Conteudo.recuar();
            }
        })

        for (let i = 1; i <= Navegacao.elemento_nav.children.length - 1; i++) {
            Navegacao.elemento_nav.children[i].addEventListener("click", function (event) {
                if (Navegacao.coolDown == false) {
                    if (parseInt(event.target.textContent) > Navegacao.pagina) {
                        Conteudo.avancar()
                    } else if (parseInt(event.target.textContent) < Navegacao.pagina) {
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