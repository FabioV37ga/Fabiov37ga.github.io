import { Technologies } from "../templates/technologiesTemplate.js";
import html from "nanohtml";

interface Project {
    title: string;
    technologies?: HTMLElement[];
    description?: HTMLElement;
    link?: string;
    github?: string;
}

const nutryo: Project = {
    title: "Nutryo",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.typescript,
        Technologies.react,
        Technologies.nodejs,
        Technologies.mongodb
    ],
    description: html`
    
        <span>
            Calendário nutricional desenvolvido para auxiliar usuários na organização de suas refeições
            diárias, promovendo hábitos alimentares saudáveis e facilitando o planejamento nutricional.
        </span>

        <span>
            Feito como projeto acadêmico na faculdade, para conclusão dos cursos "Usabilidade, desenvolvimento
            web, mobile e jogos" & "Sistemas Distribuídos e Mobile".
        </span>
    `,
    link: "https://FabioV37ga.github.io/nuTryo2",
    github: "https://github.com/FabioV37ga/nuTryo2"
}

const typeTap: Project = {
    title: "TypeTap",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: html`
    
        <span>
            Jogo de digitação onde o usuário deve digitar letras que aparecem na tela
            antes que elas atinjam o fundo. A cada letra digitada corretamente, o jogador ganha pontos.
        </span>

        <span>
            O jogador começa com 3 vidas e perde uma vida a cada letra digitada incorretamente.
        </span>

        <span>
            O jogo acaba quando o jogador perde todas as vidas, ou quando uma letra atinge o fundo da tela.
        </span>

        <span>
            Desenvolvido para estudo de manipulação do DOM e eventos de teclado.
        </span>
    `,
    link: "https://FabioV37ga.github.io/TypeTap",
    github: "https://github.com/FabioV37ga/TypeTap"
}

const sistemaSolar: Project = {
    title: "Sistema Solar",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: html`
    
        <span>
            Jogo educativo sobre o sistema solar, onde o usuário pode explorar os planetas e aprender
            curiosidades sobre cada um deles. Desenvolvido para estudo de programação orientada a objetos.
        </span>
    `,
    link: "https://FabioV37ga.github.io/Sistema-Solar",
    github: "https://github.com/FabioV37ga/Sistema-Solar"
}

const jsBridge: Project = {
    title: "JSBridge",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
    ],
    description: html`
    
        <span>
            Compilador funcional de uma linguagem de programação própria, usando JavaScript como
            linguagem alvo. Possui recursos como variáveis, funções, estruturas condicionais e loops.
            Desenvolvido como projeto acadêmico para a disciplina de Compiladores.
        </span>
    `,
    link: "https://FabioV37ga.github.io/JSBridge",
    github: "http://github.com/FabioV37ga/JSBridge"
}

const conviteAugusto: Project = {
    title: "Convite Augusto",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.googleSheets,
        Technologies.jquery
    ],
    description: html`
    
        <span>
            Convite de aniversário digital interativo, desenvolvido para facilitar o envio e
            gerenciamento dos convidados. Utiliza Google Sheets para armazenar as respostas.
        </span>

        <span>
            Temático de Rei Leão, com informações de local, data, horário e recomendações de presentes.
        </span>

        <span>
            Mobile-first e completamente responsivo.
        </span>
    `,
    link: "https://fabiov37ga.github.io/conviteAugusto",
    github: "https://github.com/FabioV37ga/conviteAugusto"

}

const conviteAlessandra: Project = {
    title: "Convite Alessandra",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.googleSheets,
        Technologies.jquery
    ],
    description: html`

        <span>
            Convite de aniversário digital interativo, desenvolvido para facilitar o envio e
            gerenciamento dos convidados. Utiliza Google Sheets para armazenar as respostas.
        </span>

        <span>
            Temático de Anos 70, com informações de local, data, horário, e dress code.
        </span>

        <span>
            Mobile-first e completamente responsivo.
        </span>
    `,
    link: "https://fabiov37ga.github.io/conviteAlessandra",
    github: "https://github.com/FabioV37ga/conviteAlessandra"
}

const birdGame: Project = {
    title: "BirdGame",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: html`
    
        <span>
            Remake completo de Flappy Bird.
        </span>

        <span>
            Jogo simples onde o jogador controla um pássaro que deve desviar de obstáculos.
            Desenvolvido para estudo de manipulação do DOM e eventos de teclado.
        </span>
    `,
    link: "https://FabioV37ga.github.io/birdGame",
    github: "https://github.com/FabioV37ga/birdGame"
}

const bounce: Project = {
    title: "Bounce",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
    ],
    description: html`
    
        <span>
            Estudo de lógica e física.
        </span>

        <span>
            Tela interativa onde o usuário joga uma bola que quica nas paredes.
        </span>
    `,
    link: "https://FabioV37ga.github.io/bounce",
    github: "https://github.com/FabioV37ga/bounce"

}

const wearSell: Project = {
    title: "WearSell",
    technologies: [
        Technologies.html5,
        Technologies.css3,
    ],
    description: html`
    
        <span>
            Protótipo de site estático para venda de roupas.
        </span>

        <span>
            Desenvolvido para estudo de design responsivo, layouts com CSS e consistência de campo.
        </span>
    `,
    link: "https://FabioV37ga.github.io/wearSellA3",
    github: "https://github.com/FabioV37ga/wearSellA3"
}

const driveGuide: Project = {
    title: "DriveGuide",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript
    ],
    description: html`
    
        <span>
            Protótipo de site estático para locadora de veículos.
        </span>
    `,
    link: "https://FabioV37ga.github.io/DriveGuide",
    github: "https://github.com/FabioV37ga/DriveGuide"
}

const Projects: Project[] = [
    nutryo,
    typeTap,
    sistemaSolar,
    jsBridge,
    conviteAugusto,
    conviteAlessandra,
    birdGame,
    bounce,
    wearSell,
    driveGuide,
];

export { Projects, Project };