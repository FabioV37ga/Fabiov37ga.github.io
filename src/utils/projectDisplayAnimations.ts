/**
 * ============================================================================
 * PROJECT DISPLAY ANIMATIONS
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Funções de Animação
 *    2.1. techFadeIn() - Anima entrada de badge de tecnologia
 *    2.2. typeDescription() - Anima digitação da descrição
 *    2.3. expandSpacer() - Anima expansão do espaçador
 *    2.4. showButtons() - Anima entrada dos botões
 *    2.5. hideProject() - Anima saída do projeto
 * 
 * DESCRIÇÃO:
 * Funções utilitárias para animar a exibição e ocultação de projetos
 * individuais, incluindo tecnologias, descrição e botões de ação.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Anime.js para animações
import { engine, animate, cubicBezier } from "animejs"

engine.pauseOnDocumentHidden = true;

// Importa o tipo Project dos dados
import { Project } from "../data/projects.js"

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";


// ---------------------------
// 2. FUNÇÕES DE ANIMAÇÃO
// ---------------------------


// ---------------------------
// 2.1. techFadeIn - Anima entrada de badge de tecnologia
// ---------------------------

const techFadeIn = (element: HTMLElement, delay: number) => {
    // Anima opacidade e posição vertical do badge
    animate(element, {
        opacity: [0, 1],
        translateY: ['-5x', '0px'],
        ease: "easeOutCirc",
        duration: 100,
        delay: delay
    })
}


// ---------------------------
// 2.2. typeDescription - Anima digitação da descrição
// ---------------------------

const typeDescription = (element: HTMLElement, project: Project, delay: number) => {

    // Seleciona todos os parágrafos (spans) dentro do elemento
    const paragraphs = u('.description-content span', element);
    const paragraphsArray: string[] = [];
    const paragraphsNodes: HTMLElement[] = [];

    var totalCharacters = 0;

    // Extrai o texto de cada parágrafo e limpa o conteúdo
    paragraphs.each((node: HTMLElement) => {
        totalCharacters += node.textContent?.length || 0;
        paragraphsArray.push(node.textContent || '');
        paragraphsNodes.push(node);
        node.textContent = '';
    })

    // Aguarda o delay antes de iniciar a digitação
    setTimeout(() => {
        var currentParagraph: number = 0
        var currentChar: number = 0;
        var currentText: string = '';

        // Intervalo que "digita" cada caractere
        var typeInterval = setInterval(() => {

            // Extrai substring até o caractere atual
            currentText = paragraphsArray[currentParagraph].substring(0, currentChar);
            paragraphsNodes[currentParagraph].textContent = currentText;
            currentChar++;

            // Verifica se terminou o parágrafo atual
            if (currentChar > paragraphsArray[currentParagraph].length) {
                currentParagraph++;
                currentChar = 0;
            }

            // Verifica se terminou todos os parágrafos
            if (currentParagraph >= paragraphsArray.length) {
                clearInterval(typeInterval);
            }
        }, 5); // 5ms entre cada caractere
    }, delay);

    // Retorna total de caracteres para cálculo de timing
    return totalCharacters;
}


// ---------------------------
// 2.3. expandSpacer - Anima expansão do espaçador
// ---------------------------
    // Anima a largura e opacidade do espaçador horizontal
const expandSpacer = (element: HTMLElement, delay: number) => {
    animate(element, {
        opacity: [0, 1],
        width: ['0%', '100%'],
        easing: cubicBezier(.5, .05, .1, .3),
        duration: 800,
        delay: delay
    })
}


// ---------------------------
// 2.4. showButtons - Anima entrada dos botões
// ---------------------------

const showButtons = (buttons: HTMLElement[], delay: number) => {
    // Itera sobre cada botão e anima com delay escalonado
    buttons.forEach((button, index) => {
        animate(button, {
            opacity: [0, 1],
            translateY: ['10px', '0px'],
            easing: "easeOutCirc",
            duration: 300,
            delay: delay + index * 200 // 200ms entre cada botão
        })
    })
}


// ---------------------------
// 2.5. hideProject - Anima saída do projeto
// ---------------------------

const hideProject = (project: HTMLElement) => {
    // Seleciona todos os filhos do container do projeto
    const projectElementChildren = u(project).children();
    var projectElementChildLength = u(project).children().length

    // Anima cada elemento filho em ordem reversa
    projectElementChildren.each((child: HTMLElement, index: number) => {
        const reverseIndex = projectElementChildLength - 1 - index;
        animate(child, {
            opacity: [1, 0],
            translateY: ['0px', '10px'],
            easing: "easeInCirc",
            duration: 200,
            delay: reverseIndex * 200, // Delay reverso para efeito cascata
            onComplete: () =>{
                // Remove o elemento filho do DOM após a animação
                u(child).remove();
            }
        })
    })
}

export { techFadeIn, typeDescription, expandSpacer, showButtons, hideProject };