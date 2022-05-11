function createBlock(){
    
    //sect.bloco__conteudo
    var blocoConteudo = $("<section>", {class: "bloco__conteudo hidden"}).appendTo(".bloco")

//      ["<"]
        var back = $("<div>", {class: "browse"}).appendTo(".bloco__conteudo")

        //div.conteudo
        var conteudo = $("<div>", {class: "conteudo"}).appendTo(".bloco__conteudo")
            var windowbox = $("<div>", {class: "windowbox"}).appendTo(".conteudo")
                var window1 = $("<div>", {class: "window"}).appendTo(".windowbox")
                var window2 = $("<div>", {class: "window"}).appendTo(".windowbox")
            //
        //
//      ["<"]   
        var forward = $("<div>", {class: "browse"}).appendTo(".bloco__conteudo");
  
}

function openWidth(){
    var blocoConteudo = document.querySelector(".bloco__conteudo")

    blocoConteudo.classList.remove("hidden")
    blocoConteudo.classList.add("openWidth")
    blocoConteudo.addEventListener("animationend", ()=>{
        openHeight()
        blocoConteudo.classList.remove("openWidth")
    })
}

var execucoes = 0
function openHeight(){
    if (execucoes == 0){
        var conteudo = document.querySelector(".conteudo")

        conteudo.classList.add("openHeight")
        conteudo.addEventListener("animationend", () => {
            conteudo.style.height = '650px'
            conteudo.classList.remove("openHeight")
            openWindow()
        })
        execucoes++
    }
}

function openWindow(){
    var windows = document.querySelectorAll(".window")

    windows[1].classList.remove("goSide")
    windows[1].classList.add("goSide")
    windows[1].addEventListener("animationend", () => {
        windows[1].style.marginLeft = "628px"
        showBrowse()
    })
}
//conteudo, .conteudo
//blocoConteudo, .bloco__conteudo
//windows[1], .window (direita)