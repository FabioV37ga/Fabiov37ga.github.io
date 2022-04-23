function showButton(){
    const button = document.querySelector(".iniciar")
    const pointers = document.querySelectorAll(".pointer")

    button.addEventListener("animationend", function(){
        button.textContent = "INICIAR"
        button.style.padding = "10px 8.15px";
        button.style.marginLeft = "4px"
    })

    var i = 1
    var intervalo = setInterval(function(){
        if (i <= 6){
            if (i == 1){
                button.style.opacity = "100"
                button.classList.add("open")
            }
            if (pointers[0].style.opacity == "0"){
                pointers[0].style.opacity = "100"
                pointers[1].style.opacity = "100"
            }else{
                pointers[0].style.opacity = "0"
                pointers[1].style.opacity = "0"
            }
        }else{
            clearInterval(intervalo)
        }i++
    },250);
}

window.page = 1
function hideButton(){
    const button = document.querySelector(".iniciar")
    button.textContent = ""
    button.classList.remove("open")
    button.classList.add("close")
    button.addEventListener("animationend", ()=>{
        button.remove()
        createBlock();
        
    })
}