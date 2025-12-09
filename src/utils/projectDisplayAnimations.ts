/**
 * ============================================================================
 * PROJECT DISPLAY ANIMATIONS
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface de Animação
 * 3. Animações de Exibição
 *    3.1. techFadeIn - Anima entrada de badge de tecnologia
 *    3.2. typeDescription - Anima digitação da descrição
 *    3.3. expandSpacer - Anima expansão do espaçador
 *    3.4. showButtons - Anima entrada dos botões
 *    3.5. styleButtons - Anima estilização dos botões
 * 4. Animações de Ocultação
 *    4.1. hideProject - Anima saída do projeto
 * 5. Utilitários
 *    5.1. delay - Aguarda tempo específico com animação placeholder
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
import { engine, animate, cubicBezier, JSAnimation } from "animejs"

engine.pauseOnDocumentHidden = true;

// Importa o tipo Project dos dados
import { Project } from "../data/projects.js"

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";

import Animation from "./animation.js";

// ---------------------------
// 2. INTERFACE DE ANIMAÇÃO
// ---------------------------

interface AnimationObject {
    isPlaying: boolean;
    animation: (...args: any[]) => JSAnimation | Promise<number> | void;
}

// ---------------------------
// 3. ANIMAÇÕES DE EXIBIÇÃO
// ---------------------------

class ProjectDisplayAnimations extends Animation {

    // ---------------------------
    // 3.1. techFadeIn - Anima entrada de badge de tecnologia
    // ---------------------------
    static techFadeIn: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ProjectDisplayAnimations.techFadeIn.isPlaying = true;
            return animate(element, {
                opacity: [0, 1],
                translateY: ['-5x', '0px'],
                ease: "easeOutCirc",
                duration: 100,
                delay: delay,
                onComplete: () => {
                    ProjectDisplayAnimations.techFadeIn.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 3.2. typeDescription - Anima digitação da descrição
    // ---------------------------
    static typeDescription: AnimationObject = {
        isPlaying: false,
        animation: async (element: HTMLElement, delay: number) => {
            ProjectDisplayAnimations.typeDescription.isPlaying = true;

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
            await ProjectDisplayAnimations.delay.animation(
                element,
                delay
            );

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
                    ProjectDisplayAnimations.typeDescription.isPlaying = false;
                }
            }, 5); // 5ms entre cada caractere

            // Retorna total de caracteres para cálculo de timing
            return totalCharacters;
        }
    }

    // ---------------------------
    // 3.3. expandSpacer - Anima expansão do espaçador
    // ---------------------------
    static expandSpacer: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ProjectDisplayAnimations.expandSpacer.isPlaying = true;
            return animate(element, {
                opacity: [0, 1],
                width: ['0%', '100%'],
                easing: cubicBezier(.5, .05, .1, .3),
                duration: 800,
                delay: delay,
                onComplete: () => {
                    ProjectDisplayAnimations.expandSpacer.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 3.4. showButtons - Anima entrada dos botões
    // ---------------------------
    static showButtons: AnimationObject = {
        isPlaying: false,
        animation: (buttons: HTMLElement[], delay: number) => {
            ProjectDisplayAnimations.showButtons.isPlaying = true;
            let completedCount = 0;

            // Itera sobre cada botão e anima com delay escalonado
            buttons.forEach((button, index) => {
                animate(button, {
                    opacity: [0, 1],
                    translateY: ['10px', '0px'],
                    easing: "easeOutCirc",
                    duration: 300,
                    delay: delay + index * 200, // 200ms entre cada botão
                    onComplete: () => {
                        completedCount++;
                        if (completedCount === buttons.length) {
                            ProjectDisplayAnimations.showButtons.isPlaying = false;
                        }
                    }
                })
            })
        }
    }

    // ---------------------------
    // 3.5. styleButtons - Anima estilização dos botões
    // ---------------------------
    static styleButtons: AnimationObject = {
        isPlaying: false,
        animation: (buttons: HTMLElement[], delay: number) => {
            ProjectDisplayAnimations.styleButtons.isPlaying = true;
            let completedCount = 0;

            // Itera sobre cada botão e anima com delay escalonado
            buttons.forEach((button, index) => {
                var background = button.children[1]
                animate(background, {
                    rotate: ['45eg', "45deg"],
                    translateX: ["0%", "100%"],
                    easing: "easeInCirc",
                    duration: 500,
                    delay: delay + index * 200 // 200ms entre cada botão
                })

                var animationBlock = button.children[0]
                animate(animationBlock, {
                    "--btn-animation-block": ['-30%', '170%'],
                    easing: cubicBezier(0.155, 0.812, 0.755, 1.01),
                    duration: 100,
                    delay: delay + index * 200 + 100, // 200ms entre cada botão
                    onComplete: () => {
                        completedCount++;
                        if (completedCount === buttons.length) {
                            ProjectDisplayAnimations.styleButtons.isPlaying = false;
                        }
                    }
                })
            })
        }
    }

    // ---------------------------
    // 4. ANIMAÇÕES DE OCULTAÇÃO
    // ---------------------------

    // ---------------------------
    // 4.1. hideProject - Anima saída do projeto
    // ---------------------------
    static hideProject: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement) => {
            ProjectDisplayAnimations.hideProject.isPlaying = true;

            // Seleciona todos os filhos do container do projeto
            const projectElementChildren = u(project).children();
            var projectElementChildLength = u(project).children().length
            let completedCount = 0;

            // Anima cada elemento filho em ordem reversa
            projectElementChildren.each((child: HTMLElement, index: number) => {
                const reverseIndex = projectElementChildLength - 1 - index;
                animate(child, {
                    opacity: [1, 0],
                    translateY: ['0px', '10px'],
                    easing: "easeInCirc",
                    duration: 200,
                    delay: reverseIndex * 200, // Delay reverso para efeito cascata
                    onComplete: () => {
                        // Remove o elemento filho do DOM após a animação
                        u(child).remove();
                        completedCount++;
                        if (completedCount === projectElementChildLength) {
                            ProjectDisplayAnimations.hideProject.isPlaying = false;
                        }
                    }
                })
            })
        }
    }

    // ---------------------------
    // 5. UTILITÁRIOS
    // ---------------------------

    // ---------------------------
    // 5.1. delay - Aguarda tempo específico com animação placeholder
    // ---------------------------
    static delay: AnimationObject = {
        isPlaying: false,
        animation: (placeholder: HTMLElement, duration: number) => {
            ProjectDisplayAnimations.delay.isPlaying = true;
            return animate(placeholder,{
                opacity: [1, 1],
                duration: duration,
                onComplete: () => {
                    ProjectDisplayAnimations.delay.isPlaying = false;
                }
            })
        }
    }
}

export default ProjectDisplayAnimations;
