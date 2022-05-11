function showBrowse(){
    console.log("page: "+ window.page)
    const browses = document.querySelectorAll(".browse");
    console.log(browses)

    var cBrowse1 = $("<a>", {class: "fadein", text: "<"}).appendTo(browses[0])
    var cBrowse1 = $("<a>", {class: "fadein", text: ">"}).appendTo(browses[1])

    browses[0].children[0].addEventListener("click", ()=>{
        execucoes = 0;
        window.page--;
        reloadPage()
    })
    browses[1].children[0].addEventListener("click", ()=>{
        execucoes = 0;
        window.page++;
        reloadPage()
    })
}

function reloadPage(){
    switch(window.page){
        case 1:
            console.log("1 - HOME");
            closeBox(1);
        break
        case 2:
            console.log("2 - DCD");
            repo(2);
        break;
        case 3:
            console.log("3 - LPC");
            repo(3);
        break;
    }
}
