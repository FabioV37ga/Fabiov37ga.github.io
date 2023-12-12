/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 *
 *  repositorio.js → Classe modelo dos repositorios, aceita entrada referente a
 *                   titulo, links, descricao, imagem, etc...
 *                   Também lista cada instância de repositório no objeto do0
 *                   atributo estático 'Repositorio.repositorios'.
 * 
 * class Repositorio
 * Índice 
 *      Atributos
 *          1. static repositorios → Atributo que armazena as instâncias de repositório em objeto
 *          2. objeto → Armazena um objeto criado a partir dos valores a seguir ↓
 *          3...8  → Atributos que armazenam as informações do repositorio
 *      Métodos
 *          1. listar() → Utiliza os valores passados como parâmetro na criação da instância
 *                        para criar um objeto, em seguida faz um push em Repositorio.repositorios()
 * Instâncias
 * Índice
 *      ... → Abaixo da classe repositorio estão suas instâncias, cada uma se refere a um repositório,
 *            precisam ser inseridos manualmente, basta criar uma instância da classe Repositorio
 *                                                ex → 'var meuRepositorio = new Repositorio(PARÂMETROS)'
 *            passando os parâmetros de titulo, tools, links, descrição e imagem.
 *      
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


class Repositorio {
    static repositorios = Repositorio.repositorios ? Repositorio.repositorios : [];
    objeto;
    titulo;
    tools;
    linkPlay;
    linkGit;
    descricao;
    imagem;


    constructor(titulo, tools, linkPlay, linkGit, descricao, imagem) {

        this.titulo = titulo
        this.tools = tools
        this.linkPlay = linkPlay
        this.linkGit = linkGit
        this.descricao = descricao
        this.imagem = imagem

        this.listar();
    }

    listar() {
        var objeto =
        {
            "titulo": this.titulo,
            "tools": this.tools,
            "linkPlay": this.linkPlay,
            "linkGit": this.linkGit,
            "descricao": this.descricao,
            "imagem": this.imagem,
        }

        Repositorio.repositorios.push(objeto)
    }
}


// Instâncias:

var portfolio20 =
    new Repositorio(
        "Portfólio 2.0",
        "html + css + js",
        "https://fabiov37ga.github.io/",
        "https://github.com/FabioV37ga/Fabiov37ga.github.io",
        "Remake do meu portfólio depois de 3 anos de estudos na área.",
        "src/img/repositorios/portfolio.png"
    )

var sistemaSolar =
    new Repositorio(
        "Sistema Solar",
        "html + css + js + jquery",
        "https://fabiov37ga.github.io/Sistema-Solar",
        "https://github.com/FabioV37ga/Sistema-Solar",
        "Jogo educativo sobre o sistema solar com sistema de fases, inimigos que atiram e curiosidades sobre os planetas.",
        "src/img/repositorios/sistemaSolar.png"
    )

var openStreetMap =
    new Repositorio(
        "OpenTourism Map",
        "html + css + js + api's...",
        "https://github.com/AnotherLyat/Open-Tourism-Map",
        "https://github.com/AnotherLyat/Open-Tourism-Map",
        "[front-end] Sistema de mapa com waypoints, marcadores de inclusão e comentários. Projeto final do quarto semestre de ciência da computação. Feito em grupo (vide repositório no github).",
        "src/img/repositorios/openTourismMap.png"
    )

var nutryo =
    new Repositorio(
        "nuTryo",
        "html + css + js + jquery",
        "https://fabiov37ga.github.io/nuTryo/",
        "https://github.com/FabioV37ga/nuTryo",
        "(wip) Diário nutricional com sistema de calendário. Permite o usuário salvar alimentos individuais para montar refeições. Contagem de calorias e macro-nutrientes. Salvamento local.",
        "src/img/repositorios/nutryo.png"
    )

var BirdGame =
    new Repositorio(
        "BirdGame",
        "html + css + js + jquery",
        "https://fabiov37ga.github.io/birdGame/",
        "https://github.com/FabioV37ga/birdGame",
        "Remake do zero de flappy bird, estudo de POO.",
        "src/img/repositorios/birdGame.png"
    )

var Bounce =
    new Repositorio(
        "Bounce",
        "html + css + js",
        "https://fabiov37ga.github.io/bounce/",
        "https://github.com/FabioV37ga/bounce",
        "Estudo de lógica, POO, um pouco de física.",
        "src/img/repositorios/bounce.png"
    )

var wearSell =
    new Repositorio(
        "WearSell",
        "html + css + js",
        "https://fabiov37ga.github.io/wearSellA3/",
        "https://github.com/FabioV37ga/wearSellA3",
        "Projeto final do primeiro semestre de ciência da computação. Front-end de uma loja virtual de roupas. Website responsivo (desktop / mobile), lógica de consistência de campos.",
        "src/img/repositorios/wearSell.png"
    )

var driveGuide =
    new Repositorio(
        "driveGuide",
        "html + css + js",
        "https://fabiov37ga.github.io/DriveGuide/",
        "https://github.com/FabioV37ga/DriveGuide",
        "Guia com estética de um jogo sobre cloud computing no tema google drive. Introdução simples ao conceito e tutorial de uso.",
        "src/img/repositorios/driveGuide.png"
    )

var dayCycleDiscord =
    new Repositorio(
        "dayCycle Discord",
        "js + betterDiscord api",
        "https://github.com/FabioV37ga/DayCycleDiscord",
        "https://github.com/FabioV37ga/DayCycleDiscord",
        "(descontinuado) Sistema de wallpaper para discord. Altera o wallpaper baseado no tempo real entre manhã, tarde e noite.",
        "src/img/repositorios/dayCycleDiscord.png"
    )
