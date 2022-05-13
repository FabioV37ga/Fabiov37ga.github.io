function showBrowse() {

    const browses = document.querySelectorAll(".browse");

    var cBrowse1 = $("<a>", { class: "fadein", text: "<" }).appendTo(browses[0])
    var cBrowse2 = $("<a>", { class: "fadein", text: ">" }).appendTo(browses[1])

    browses[0].children[0].addEventListener("click", () => {
        execucoes = 0;
        blockBrowse(0)
        window.page--;
        reloadPage()
    })
    browses[1].children[0].addEventListener("click", () => {
        execucoes = 0;
        blockBrowse(1)
        window.page++;
        reloadPage()
    })
}
var x = 1;
function reloadPage() {
    switch (window.page) {
        case 1:
            console.log("page: 1 'home'");
            closeBox(1);
            if (x != 1){
                x = 1;
            }
            break
        case 2:
            console.log("page: 2 'dcd'");
            eraseText("Day Cycle Discord");
            if (x == 1){
                createBlockPH()
                x++
            }
            repo(1)
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

function blockBrowse(e){
    switch(window.page){
        case 2:
            if (e == 0){
                console.log("no-block!")
            }else{
                console.log("block!")
                var browseR = document.querySelectorAll(".browse")[0].children[0]
                //elementList[i].replaceWith(elementList[i].cloneNode(true))
            }
            break

        case 3:
            if (e==0){
                var browseL = document.querySelectorAll(".browse")[1].children[0]
                console.log("block!")
                //trava os 2
            }else{
                console.log("no-block")
            }
            break
    }
}
var rbt = 0;
function releaseBrowse(e){
    
    if (rbt <= 1){
        rbt++;
        
    }else if (rbt > 1){
        
        switch (window.page){  
            case 2:
            console.log("release!")
            break;
            case 3:
            console.log("release!")
            break;
        }       
    }
}