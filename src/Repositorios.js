class Repositorio {
    pagina;
    imagem;
    descricao;
    botoes;
    titulo;

    // static body = document.querySelector(".bloco__titulo").parentElement.parentElement.parentElement;

    definir(pagina, imagem, descricao, botoes, titulo) {
        this.pagina = pagina;
        this.imagem = imagem;
        this.descricao = descricao;
        this.botoes = botoes;
        this.titulo = titulo;
    }

    // static fundo_some(){
    // }
    
    // static fundo_aparece() {
    //     console.log("t")
    //     this.body.style.setProperty('--body-color','rgba(0,0,0,0.5)')
    //     this.body.style.backgroundImage = `url(${Janela.repositorio_atual.imagem})`;

    // }
}



var day_cycle_discord = new Repositorio()
day_cycle_discord.definir(1,
    "src/img/dcd.png",
    `DayCycleDiscord: Tema/Plugin para BetterDiscord.
    \n Troca o wallpaper do aplicativo baseado no horário.`,
    "",
    "1. Day Cycle Discord")

var wear_sell = new Repositorio()
wear_sell.definir(2, "src/img/wrs.png",
    `Projeto final do primeiro semestre de Ciência da Computação.
        \nSistema de E-commerce em website.
        \nWebsite responsivo.`,
    "",
    "2. WearSell")

var lap_top_craft = new Repositorio()
lap_top_craft.definir(3,
    "src/img/lpc.png",
    `LapTopCraft: Pacote de Mods para Minecraft / Website.\n
    \n Modpack voltado para maquinaria, engenharia e programação.
    \n Website personalizado.`,
    "",
    "3. LapTop Craft")
