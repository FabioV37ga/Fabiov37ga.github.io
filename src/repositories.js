function createBlockPH() {
    var cConteudoRepo = $("<section>", { class: "conteudo__repo" }).appendTo(".conteudo");
    var cRepository = $("<div>", { class: "repository" }).appendTo(".conteudo__repo");
    var cImg = $("<img>", { src: "" }).appendTo(".repository");
    var cDesc = $("<div>", { class: "conteudo__repo-desc" }).appendTo(".repository");
    var cButtonSect = $("<div>", { class: "repo__button-sect" }).appendTo(".repository");
    var cButton1 = $("<button>", { class: "repo-button", text: "Download" }).appendTo(".repo__button-sect");
    var cButton2 = $("<button>", { class: "repo-button repo-2", text: "Git" }).appendTo(".repo__button-sect");


}
function showRepo() {
    var conteudoRepo = document.querySelector(".conteudo__repo")
    conteudoRepo.style.opacity = "100"

}
function hideRepo() {
    var conteudoRepo = document.querySelector(".conteudo__repo")
    conteudoRepo.style.opacity = "0"
}

class Repo {
    imagem;
    desc;
    download;
    github;

    select(img, des, dow, git) {
        this.imagem = img
        this.desc = des
        this.download = dow
        this.github = git
    }
}

var dcd = new Repo()
dcd.select("src/img/dcd.png", "DayCycleDiscord: Tema/Plugin para BetterDiscord.\n Troca o wallpaper do aplicativo baseado no horário.", "", "")

var lpc = new Repo()
lpc.select("src/img/lpc.png", "LapTopCraft: Pacote de Mods para Minecraft / Website.\n Modpack voltado para maquinaria, engenharia e programação.\n Website personalizado.", "", "")

var currentRepo = "";
function repo(e) {
    switch (e) {
        case 1:
            currentRepo = dcd;
            changeRepo()
            break;
        case 2:
            currentRepo = lpc;
            changeRepo()
            break;
    }
    function changeRepo(){
        var elementImagem = document.querySelector(".repository").children[0]
        var elementDesc = document.querySelector(".repository").children[1]

        elementImagem.src = currentRepo.imagem;
        elementDesc.textContent = currentRepo.desc;
    }

}

/*
appendTo(conteudo)>sect.conteudo__repo > div.repository > img

                    <section class="conteudo__repo">
                        <div class="repository">
                            <img src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="">
                        </div>
                        
                    </section>

 const cButton = $("<button>", {class: "nav__botao iniciar", style: "opacity: 0"}).appendTo(".btn_ph")



desc {
    margin-top: 13px;
    height: 160px;
    border: 4px solid rgb(51, 255, 0);
}


.buttonsect {
    background: red;
    margin: 10px auto;
    width: 358px;
    display:flex;
    justify-content:center;
}
.button{
    padding: 13px 35px;
    background: rgb(51, 255, 0);
    font-size: 18px;
    text-transform: uppercase;
}
.buttonsect.child[1]{
    padding: 13px 60px
}
*/
