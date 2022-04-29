window.page = 1
// 1 = menu
// 2 = daycyclediscord
// 3 = laptopcraft
function showButton() {
    const button = document.querySelector(".iniciar")
    const pointers = document.querySelectorAll(".pointer")

    button.addEventListener("click", () => {
        window.page++
        createBlock();
        for (let i = 0; i <= pointers.length - 1; i++) {
            pointers[i].remove()
        }
        console.log("button.click")
    })

    button.addEventListener("animationend", function () {
        button.textContent = "INICIAR"
        button.style.padding = "10px 8.15px";
        button.style.marginLeft = "4px"
    })

    var i = 1
    var intervalo = setInterval(function () {
        if (i <= 6) {
            if (i == 1) {
                button.style.opacity = "100"
                button.classList.add("open")
            }
            if (pointers[0].style.opacity == "0") {
                pointers[0].style.opacity = "100"
                pointers[1].style.opacity = "100"
            } else {
                pointers[0].style.opacity = "0"
                pointers[1].style.opacity = "0"
            }
        } else {
            clearInterval(intervalo)
        } i++
    }, 250);
}

function hideButton() {
    const button = document.querySelector(".iniciar")
    button.textContent = ""
    button.classList.remove("open")
    button.classList.add("close")
    button.addEventListener("animationend", () => {
        openWidth();
        button.remove()
    })
}