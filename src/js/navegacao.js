/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  navegacao.js →
 *  
 *                   
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Navegacao {
    static elemento_nav = document.querySelector(".navegacao");
    static elementoVolta = document.querySelector(".navegacao_retroceder")
    static elementoVai = document.querySelector(".navegacao_prosseguir")
    static pagina;
    static coolDown = false;

    static inicializar() {
        Navegacao.pagina = 1;

        Navegacao.elemento_nav.style = 'display: flex;';
        Navegacao.elemento_nav.classList.add("intro")

        Navegacao.elementoVai.addEventListener("click", () => {
            if (Navegacao.coolDown == false && Navegacao.pagina < Repositorio.repositorios.length) {
                Navegacao.coolDown = true;
                Navegacao.avancar()
            }
        })

        Navegacao.elementoVolta.addEventListener("click", () => {
            if (Navegacao.coolDown == false && Navegacao.pagina > 1) {
                Navegacao.recuar()
                Navegacao.coolDown = true;
            }
        })

        for (let i = 1; i <= Navegacao.elemento_nav.children.length - 2; i++) {
            Navegacao.elemento_nav.children[i].addEventListener("click", function (event) {
                if (event.target.textContent != '...') {
                    if (Navegacao.coolDown == false && parseInt(event.target.textContent) != Navegacao.pagina) {
                        Navegacao.pularPara(event.target)
                        Navegacao.coolDown = true;
                    }
                }
            })
        }
    }

    static avancar() {

        if (Navegacao.pagina < Repositorio.repositorios.length) {
            Navegacao.pagina++
            console.log(Navegacao.pagina)
            if (Navegacao.pagina < 4) {
                Navegacao.selecionar('direita')
            } else {
                if (Navegacao.pagina + 2 <= Repositorio.repositorios.length)
                    Navegacao.mover("direita")
                else {
                    Navegacao.selecionar('direita')
                }
            }
        }
        Conteudo.defineRepositorio()
    }

    static recuar() {

        if (Navegacao.pagina > 1) {
            Navegacao.pagina--;
            console.log(Navegacao.pagina)
            if (Navegacao.pagina > (Repositorio.repositorios.length - 3)) {
                Navegacao.selecionar('esquerda')
            } else {
                if (Navegacao.pagina - 2 >= 1)
                    Navegacao.mover("esquerda")
                else {
                    Navegacao.selecionar('esquerda')
                }
            }
        }
        Conteudo.defineRepositorio()
    }

    static pularPara(pagina) {
        var paginaNumero = parseInt(pagina.textContent)
        if (paginaNumero <= Repositorio.repositorios.length) {
            var paginaAnterior = Navegacao.pagina
            Navegacao.pagina = paginaNumero
            if (Navegacao.pagina > 3 && Navegacao.pagina < (Repositorio.repositorios.length - 1)) {
                if (paginaAnterior < Navegacao.pagina) {
                    Navegacao.mover('direita')
                }
            }
            if (Navegacao.pagina >= 3 && Navegacao.pagina < (Repositorio.repositorios.length - 2)) {
                if (paginaAnterior > Navegacao.pagina) {
                    Navegacao.mover('esquerda')
                }
            }
            Navegacao.selecionar()
            paginaAnterior != Navegacao.pagina ? Conteudo.defineRepositorio() : null
            console.log(Navegacao.pagina)
        }
    }

    static selecionar(target) {
        for (let i = 0; i <= 5; i++) {
            Navegacao.elemento_nav.children[i].classList.remove("item-selecionado")
        }
        for (let i = 0; i <= 5; i++) {
            if (parseInt(Navegacao.elemento_nav.children[i].textContent) == Navegacao.pagina) {
                Navegacao.elemento_nav.children[i].classList.add("item-selecionado")
            }
        }
    }

    static mover(sentido) {
        switch (sentido) {
            case "direita":
                Navegacao.elemento_nav.children[1].textContent = '...'
                for (let i = 2; i < 5; i++) {
                    Navegacao.elemento_nav.children[i].textContent =
                        parseInt(Navegacao.elemento_nav.children[i].textContent) + 1
                    if (parseInt(Navegacao.elemento_nav.children[4].textContent) + 1 == Repositorio.repositorios.length) {
                        Navegacao.elemento_nav.children[5].textContent = Repositorio.repositorios.length
                    }
                }
                break;
            case "esquerda":
                Navegacao.elemento_nav.children[5].textContent = '...'
                for (let i = 2; i < 5; i++) {
                    Navegacao.elemento_nav.children[i].textContent =
                        parseInt(Navegacao.elemento_nav.children[i].textContent) - 1
                    if (parseInt(Navegacao.elemento_nav.children[2].textContent) == 2) {
                        Navegacao.elemento_nav.children[1].textContent = 1
                    }
                }
        }
    }

    static defineRepositorio() {
        console.log("carregar repositorio!")
    }
}