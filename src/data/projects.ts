/**
 * ============================================================================
 * PROJECTS DATA
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Project
 * 3. Definição dos Projetos
 *    3.1. nutryo - Calendário nutricional
 *    3.2. typeTap - Jogo de digitação
 *    3.3. sistemaSolar - Jogo educativo
 *    3.4. jsBridge - Compilador de linguagem própria
 *    3.5. conviteAugusto - Convite digital temático Rei Leão
 *    3.6. conviteAlessandra - Convite digital temático Anos 70
 *    3.7. birdGame - Remake de Flappy Bird
 *    3.8. bounce - Estudo de física
 *    3.9. wearSell - Protótipo de e-commerce
 *    3.10. driveGuide - Protótipo de locadora
 * 4. Array de Projetos e Exports
 * 
 * DESCRIÇÃO:
 * Define todos os dados dos projetos do portfólio, incluindo título,
 * tecnologias utilizadas, descrição em parágrafos e links.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa os templates de tecnologias (badges)
import { Technologies } from "../templates/technologiesTemplate.js";

// Importa o template de parágrafo
import { paragraph } from "../templates/paragraphTemplate.js";


// ---------------------------
// 2. INTERFACE PROJECT
// ---------------------------

// Define a estrutura de dados de um projeto
interface Project {
    title: string;                  // Título do projeto
    technologies?: HTMLElement[];   // Array de badges de tecnologias
    description?: HTMLElement[];    // Array de parágrafos de descrição
    link?: string;                  // URL para acessar o projeto
    github?: string;                // URL do repositório GitHub
}


// ---------------------------
// 3. DEFINIÇÃO DOS PROJETOS
// ---------------------------


// ---------------------------
// 3.1. nutryo - Calendário nutricional
// ---------------------------

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
    description: [
        paragraph(`Calendário nutricional desenvolvido para auxiliar usuários na organização de suas refeições
                diárias, promovendo hábitos alimentares saudáveis e facilitando o planejamento nutricional.`),
        paragraph(`Feito como projeto acadêmico na faculdade, para conclusão dos cursos "Usabilidade, desenvolvimento
                web, mobile e jogos" & "Sistemas Distribuídos e Mobile".`)
    ],
    link: "https://FabioV37ga.github.io/nuTryo2",
    github: "https://github.com/FabioV37ga/nuTryo2"
}


// ---------------------------
// 3.2. typeTap - Jogo de digitação
// ---------------------------

const typeTap: Project = {
    title: "TypeTap",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: [
        paragraph(`Jogo de digitação onde o usuário deve digitar letras que aparecem na tela antes que elas atinjam
                o fundo. A cada letra digitada corretamente, o jogador ganha pontos.`),
        paragraph(`O jogador começa com 3 vidas e perde uma vida a cada letra digitada incorretamente.`),
        paragraph(`O jogo acaba quando o jogador perde todas as vidas, ou quando uma letra atinge o fundo da tela.`),
        paragraph(`Desenvolvido para estudo de manipulação do DOM e eventos de teclado.`)
    ],
    link: "https://FabioV37ga.github.io/TypeTap",
    github: "https://github.com/FabioV37ga/TypeTap"
}


// ---------------------------
// 3.3. sistemaSolar - Jogo educativo
// ---------------------------

const sistemaSolar: Project = {
    title: "Sistema Solar",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: [
        paragraph(`Jogo educativo sobre o sistema solar, onde o usuário pode explorar os planetas e aprender
                curiosidades sobre cada um deles. Desenvolvido para estudo de programação orientada a objetos.`)
    ],
    link: "https://FabioV37ga.github.io/Sistema-Solar",
    github: "https://github.com/FabioV37ga/Sistema-Solar"
}


// ---------------------------
// 3.4. jsBridge - Compilador de linguagem própria
// ---------------------------

const jsBridge: Project = {
    title: "JSBridge",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
    ],
    description: [
        paragraph(`Compilador funcional de uma linguagem de programação própria, usando JavaScript como linguagem
                alvo. Possui recursos como variáveis, funções, estruturas condicionais e loops. Desenvolvido como projeto
                acadêmico para a disciplina de Compiladores.`)
    ],
    link: "https://FabioV37ga.github.io/JSBridge",
    github: "http://github.com/FabioV37ga/JSBridge"
}


// ---------------------------
// 3.5. conviteAugusto - Convite digital temático Rei Leão
// ---------------------------

const conviteAugusto: Project = {
    title: "Convite Augusto",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.googleSheets,
        Technologies.jquery
    ],
    description: [
        paragraph(`Convite de aniversário digital interativo, desenvolvido para facilitar o envio e gerenciamento dos 
                convidados. Utiliza Google Sheets para armazenar as respostas.`),
        paragraph(`Temático de Rei Leão, com informações de local, data, horário e recomendações de presentes.`),
        paragraph(`Mobile-first e completamente responsivo.`)
    ],
    link: "https://fabiov37ga.github.io/conviteAugusto",
    github: "https://github.com/FabioV37ga/conviteAugusto"

}


// ---------------------------
// 3.6. conviteAlessandra - Convite digital temático Anos 70
// ---------------------------

const conviteAlessandra: Project = {
    title: "Convite Alessandra",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.googleSheets,
        Technologies.jquery
    ],
    description: [
        paragraph(`Convite de aniversário digital interativo, desenvolvido para facilitar o envio e gerenciamento dos
                convidados. Utiliza Google Sheets para armazenar as respostas.`),
        paragraph(`Temático de Anos 70, com informações de local, data, horário, e dress code.`),
        paragraph(`Mobile-first e completamente responsivo.`)
    ],
    link: "https://fabiov37ga.github.io/conviteAlessandra",
    github: "https://github.com/FabioV37ga/conviteAlessandra"
}


// ---------------------------
// 3.7. birdGame - Remake de Flappy Bird
// ---------------------------

const birdGame: Project = {
    title: "BirdGame",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
        Technologies.jquery
    ],
    description: [
        paragraph(`Remake completo de Flappy Bird.`),
        paragraph(`Jogo simples onde o jogador controla um pássaro que deve desviar de obstáculos. Desenvolvido para
                estudo de manipulação do DOM e eventos de teclado.`)
    ],
    link: "https://FabioV37ga.github.io/birdGame",
    github: "https://github.com/FabioV37ga/birdGame"
}


// ---------------------------
// 3.8. bounce - Estudo de física
// ---------------------------

const bounce: Project = {
    title: "Bounce",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript,
    ],
    description: [
        paragraph(`Estudo de lógica e física.`),
        paragraph(`Tela interativa onde o usuário joga uma bola que quica nas paredes.`)
    ],
    link: "https://FabioV37ga.github.io/bounce",
    github: "https://github.com/FabioV37ga/bounce"

}


// ---------------------------
// 3.9. wearSell - Protótipo de e-commerce
// ---------------------------

const wearSell: Project = {
    title: "WearSell",
    technologies: [
        Technologies.html5,
        Technologies.css3,
    ],
    description: [
        paragraph(`Protótipo de site estático para venda de roupas.`),
        paragraph(`Desenvolvido para estudo de design responsivo, layouts com CSS e consistência de campo.`)
    ],
    link: "https://FabioV37ga.github.io/wearSellA3",
    github: "https://github.com/FabioV37ga/wearSellA3"
}


// ---------------------------
// 3.10. driveGuide - Protótipo de locadora
// ---------------------------

const driveGuide: Project = {
    title: "DriveGuide",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript
    ],
    description: [
        paragraph(`Protótipo de site estático para locadora de veículos.`)
    ],
    link: "https://FabioV37ga.github.io/DriveGuide",
    github: "https://github.com/FabioV37ga/DriveGuide"
}
// ---------------------------
// 3.10. driveGuide - Protótipo de locadora
// ---------------------------

const driveGuide2: Project = {
    title: "DriveGuide",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript
    ],
    description: [
        paragraph(`Protótipo de site estático para locadora de veículos.`)
    ],
    link: "https://FabioV37ga.github.io/DriveGuide",
    github: "https://github.com/FabioV37ga/DriveGuide"
}
// ---------------------------
// 3.10. driveGuide - Protótipo de locadora
// ---------------------------

const driveGuide3: Project = {
    title: "DriveGuide",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript
    ],
    description: [
        paragraph(`Protótipo de site estático para locadora de veículos.`)
    ],
    link: "https://FabioV37ga.github.io/DriveGuide",
    github: "https://github.com/FabioV37ga/DriveGuide"
}
// ---------------------------
// 3.10. driveGuide - Protótipo de locadora
// ---------------------------

const driveGuide4: Project = {
    title: "DriveGuide",
    technologies: [
        Technologies.html5,
        Technologies.css3,
        Technologies.javascript
    ],
    description: [
        paragraph(`Protótipo de site estático para locadora de veículos.`)
    ],
    link: "https://FabioV37ga.github.io/DriveGuide",
    github: "https://github.com/FabioV37ga/DriveGuide"
}


// ---------------------------
// 4. ARRAY DE PROJETOS E EXPORTS
// ---------------------------

// Array contendo todos os projetos do portfólio
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
    // driveGuide2,
    // driveGuide3,
    // driveGuide4
];

export { Projects, Project };