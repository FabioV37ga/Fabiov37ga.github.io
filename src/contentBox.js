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

function boxOpen(){
    var blocoConteudo = document.querySelector(".bloco__conteudo")

    blocoConteudo.classList.remove("hidden")
    blocoConteudo.classList.add("boxOpen")
    blocoConteudo.addEventListener("animationend", ()=>{
        animateBlock()
        blocoConteudo.classList.remove("boxOpen")
    })
}

var execucoes = 0
function animateBlock(){
    if (execucoes == 0){
        var conteudo = document.querySelector(".conteudo")
        
        conteudo.classList.add("openHeight")
        conteudo.addEventListener("animationend", () => {
            conteudo.style.height = '500px'
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
        windows[1].style.marginLeft = "582px"
    })
}

/*function addAnimationEnd(){
    
    var conteudoElement = document.querySelector(".bloco__conteudo")
    conteudoElement.addEventListener("animationend", () => {
        animateBlock();
        showBrowse();
    })
}
*/

function showBrowse(){
    
    
}
