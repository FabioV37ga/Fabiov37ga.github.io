/*
    Esse documento é reponsável por controlar o conteúdo dos repositórios, separados em instâncias.

    1. Classe Repositorio
        1.1 Atributos
            1.1.1 Atributo 'pagina'
            1.1.2 Atributo 'imagem'
            1.1.3 Atributo 'descricao'
            1.1.4 Atributo 'botoes'
            1.1.5 Atributo 'titulo'
            1.1.6 Atributo 'body' (elemento)
            1.1.7 Atributo 'background' (elemento)
        1.2 Métodos
            1.2.1 Método 'definir()' (Define os atributos de uma instância)
            1.2.2 Método 'fundo_some()' (Faz o background escurecer)
            1.2.3 Método 'fundo_aparece()' (Faz o background aparecer)

*/

class Repositorio {
    // Atributos (conteúdo)
    pagina;
    imagem;
    descricao;
    botoes;
    titulo;
    // Atributos (elementos)
    static body = document.querySelector(".bloco__titulo").parentElement.parentElement.parentElement;
    static background = document.getElementsByTagName("main")[0];

    // Método definir(): É chamado para definir os atributos de uma instância
    definir(pagina, imagem, descricao, botoes, titulo) {
        this.pagina = pagina;
        this.imagem = imagem;
        this.descricao = descricao;
        this.botoes = botoes;
        this.titulo = titulo;
    }

    // Método fundo_some(): 
    static fundo_some() {
        var opacidade = 800
        var intervalo = setInterval(() => {
            if (opacidade < 1000) {
                Repositorio.background.style.backgroundColor = `rgba(0,0,0,0.${opacidade})`
                opacidade += 2
            } else {
                clearInterval(intervalo)
            }

        }, 1);
    }

    static fundo_aparece() {
        this.body.style.backgroundImage = `url(${Janela.repositorio_atual.imagem})`;
        var opacidade = 999
        var intervalo = setInterval(() => {
            if (opacidade > 800) {
                Repositorio.background.style.backgroundColor = `rgba(0,0,0,0.${opacidade})`
                opacidade -= 2
            } else {
                clearInterval(intervalo)
            }

        }, 1);
    }
}


var sistema_solar = new Repositorio()
sistema_solar.definir(1,
    "src/img/sis.png",
    `Sistema Solar: Jogo educativo sobre o sistema solar. \n
    \n Possui Inimigos, fases e informações sobre os planetas.`,
    "https://fabiov37ga.github.io/Sistema-Solar/&https://github.com/FabioV37ga/Sistema-Solar",
    "1. Sistema solar")

var nutryo = new Repositorio()
nutryo.definir(2,
    "src/img/nut.png",
    `nuTryo: Sistema de contagem de nutrientes.
        \n Permite o usuário acompanhar os valores de sua dieta.`,
    "https://fabiov37ga.github.io/nuTryo/&https://fabiov37ga.github.io/nuTryo/",
    "2. nuTryo (WIP)")

var birdGame = new Repositorio()
birdGame.definir(3,
    "src/img/brg.png",
    `birdGame: Clone de flappy bird utilizando HTML, CSS e JS.`, 
    "https://fabiov37ga.github.io/birdGame/&https://github.com/FabioV37ga/birdGame",
    "3. birdGame")

var day_cycle_discord = new Repositorio()
day_cycle_discord.definir(6,
    "src/img/dcd.png",
    `DayCycleDiscord: Tema/Plugin para BetterDiscord.
    \n Troca o wallpaper do aplicativo baseado no horário.`,
    "https://github.com/Fabiov37ga/DayCycleDiscord/raw/main/download/Day%20Cycle%20Discord.rar&https://github.com/FabioV37ga/DayCycleDiscord",
    "6. Day Cycle Discord")

var wear_sell = new Repositorio()
wear_sell.definir(4, "src/img/wrs.png",
    `Projeto final do primeiro semestre de Ciência da Computação.
        \nSistema de E-commerce em website.
        \nWebsite responsivo.`,
    "https://github.com/FabioV37ga/wearSellA3&https://github.com/FabioV37ga/wearSellA3",
    "4. WearSell")

var drive_guide = new Repositorio()
drive_guide.definir(5,
    "src/img/dvg.png",
    `Drive guide: Guia educacional de cloud utilizando Google Drive.
        \nExplicação do conceito de nuvem.
        \nPasso a passo para fazer upload e download de arquivos`,
    "https://fabiov37ga.github.io/DriveGuide/&https://github.com/FabioV37ga/DriveGuide",
    "5. Drive guide")

// var lap_top_craft = new Repositorio()
// lap_top_craft.definir(6,
//     "src/img/lpc.png",
//     `LapTopCraft: Pacote de Mods para Minecraft / Website.\n
//     \n Modpack voltado para maquinaria, engenharia e programação.
//     \n Website personalizado.`,
//     "https://v37ga.github.io/37/laptopcraft/&https://github.com/v37ga/LapTopCraft",
//     "6. LapTop Craft")
