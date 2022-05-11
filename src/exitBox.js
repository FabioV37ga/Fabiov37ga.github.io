function closeBox(e){
    
    var bloco = document.querySelector(".bloco");
    var blocoConteudo = document.querySelector(".bloco__conteudo");
    var conteudo = document.querySelector(".conteudo");
    var windows = document.querySelectorAll(".window")
    var browses = document.querySelectorAll(".browse");
    
    windows[1].classList.remove("goSide");
    browses[0].children[0].classList.remove("fadein");
    browses[1].children[0].classList.remove("fadein");
    
    switch(e){
        case 1:
            eraseText("V37GA'S REPOSITORY")
            // Remove todos os eventlisteners:

            replaceElements()
            function replaceElements(e){
                

                const elementList = [bloco,blocoConteudo,conteudo,browses,windows]
                for (let i = 0; i <= elementList.length-1; i++){
                    if (elementList[i].length > 1){
                        for (let x = 0; x < elementList[i].length-1; x++){
                            elementList[i][x].replaceWith(elementList[i][x].cloneNode(true))
                        }
                    }else{
                        elementList[i].replaceWith(elementList[i].cloneNode(true))
                    }
                    
                    
                }         
                if (e == 1){
                    closeHeight()
                    
                }else if(e == 2){
                    closeWidth()
                    
                }
            }

            // Inicia fechamento
            windows = document.querySelectorAll(".window");
            blocoConteudo = document.querySelector(".bloco__conteudo");
            browses = document.querySelectorAll(".browse")

            browses[0].classList.add("fadeout")
            browses[1].classList.add("fadeout")
            browses[0].addEventListener("animationend", ()=>{
                browses[0].children[0].remove()
                browses[1].children[0].remove()
            })

            windows[1].classList.add("backSide")
            windows[1].addEventListener("animationend", ()=>{
                windows[1].style.marginLeft = "";
                windows[1].classList.remove("backSide")

                replaceElements(1)
            })


            function closeHeight(){
                conteudo = document.querySelector(".conteudo");
                conteudo.classList.add("closeHeight")
                conteudo.addEventListener("animationend", ()=>{
                    conteudo.style.height = "0px"
                    conteudo.classList.remove("closeHeight")
                    replaceElements(2)
                })
            }

            var x = 0;
            function closeWidth(){
                blocoConteudo = document.querySelector(".bloco__conteudo");
                blocoConteudo.classList.add("closeWidth")
                blocoConteudo.addEventListener("animationend", ()=>{

                    x++;
                    if (x % 2 == 0){
                        blocoConteudo.style.width = "0px"
                        //blocoConteudo.remove()
                        x = 0;
                        //showButton(1)
                    }
                })
            }     
        break;
    }
}
//var.replaceWith(var.cloneNode(true));