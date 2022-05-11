function showBrowse() {
    
    const browses = document.querySelectorAll(".browse");


    var cBrowse1 = $("<a>", { class: "fadein", text: "<" }).appendTo(browses[0])
    var cBrowse1 = $("<a>", { class: "fadein", text: ">" }).appendTo(browses[1])

    browses[0].children[0].addEventListener("click", () => {
        execucoes = 0;
        window.page--;
        reloadPage()
    })
    browses[1].children[0].addEventListener("click", () => {
        execucoes = 0;
        window.page++;
        reloadPage()
    })
}

function reloadPage() {
    switch (window.page) {
        case 1:
            console.log("page: 1 'home'");
            closeBox(1);
            break
        case 2:
            console.log("page: 2 'dcd'");
            eraseText("Day Cycle Discord");
            repo(1);
            break;
        case 3:
            console.log("page: 3 'lpc'");
            eraseText("LapTop Craft");
            repo(2);
            break;
        case 4:
            window.page = 3;
            break
    }
}
