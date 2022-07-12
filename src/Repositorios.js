class Repositorio {
    pagina;
    imagem;
    descricao;
    botoes;
    titulo;

    definir(pagina, imagem, descricao, botoes, titulo) {
        this.pagina = pagina;
        this.imagem = imagem;
        this.descricao = descricao;
        this.botoes = botoes;
        this.titulo = titulo;
    }
}



var day_cycle_discord = new Repositorio()
day_cycle_discord.definir(1,
    "src/img/dcd.png",
    `DayCycleDiscord: Tema/Plugin para BetterDiscord.
    \n Troca o wallpaper do aplicativo baseado no horário.`,
    "",
    "1. Day Cycle Discord")

var lap_top_craft = new Repositorio()
lap_top_craft.definir(2,
    "src/img/lpc.png",
    `LapTopCraft: Pacote de Mods para Minecraft / Website.
    \n Modpack voltado para maquinaria, engenharia e programação.
    \n Website personalizado.`,
    "",
    "2. LapTop Craft")

var wear_sell = new Repositorio()
wear_sell.definir(3, "src/img/wrs.png",
    `Projeto final do primeiro semestre de Ciência da Computação.
    \nSistema de E-commerce em website.
    \nWebsite responsivo.`,
    "", 
    "3. WearSell")