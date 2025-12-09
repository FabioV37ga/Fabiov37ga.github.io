/**
 * ============================================================================
 * PROJECT LIST ANIMATIONS
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface de Animação
 * 3. Animações de Entrada
 *    3.1. slideDownProjectContainer - Anima descida do container
 *    3.2. showProjectItem - Anima entrada de item de projeto
 * 4. Animações de Saída
 *    4.1. slideUpProjectContainer - Anima subida do container
 *    4.2. hideProjectItem - Anima saída de item de projeto
 *    4.3. fadeOutProjectItem - Anima fade-out de item
 * 5. Animações de Seleção
 *    5.1. highlightProject - Realça projeto selecionado
 *    5.2. focusOnProject - Remove perspectiva 3D
 *    5.3. resetScrollPosition - Reseta scroll para o topo
 *    5.4. blurProject - Desfoca projeto após fechamento
 * 
 * DESCRIÇÃO:
 * Funções utilitárias para animar a lista de projetos, incluindo
 * entrada, saída e interações de seleção.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import { animate, JSAnimation, engine, cubicBezier } from "animejs"
import Animation from "./animation.js";

import ProjectListController from "../controllers/projectListController.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. INTERFACE DE ANIMAÇÃO
// ---------------------------

interface AnimationObject {
    isPlaying: boolean;
    animation: (...args: any[]) => JSAnimation;
}

// ---------------------------
// 3. ANIMAÇÕES DE ENTRADA
// ---------------------------

class projectListAnimations extends Animation {

    // ---------------------------
    // 3.1. slideDownProjectContainer - Anima descida do container
    // ---------------------------
    static slideDownProjectContainer: AnimationObject = {
        isPlaying: false,
        animation: (container: HTMLElement, delay: number) => {
            const duration = ProjectListController.getListAnimationTime(); 
            projectListAnimations.slideDownProjectContainer.isPlaying = true;
            return animate(container, {
                translateY: ["-100%", "0%"],
                opacity: [0, 1],
                duration: duration,
                overflowY: 'scroll',
                delay: delay,
                ease: cubicBezier(0.155, 0.812, 0.755, 1.01),
                onComplete: () => {
                    projectListAnimations.slideDownProjectContainer.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 3.2. showProjectItem - Anima entrada de item de projeto
    // ---------------------------
    static showProjectItem: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement, delay: number) => {
            projectListAnimations.showProjectItem.isPlaying = true;
            return animate(project, {
                keyframes: [
                    {
                        perspective: 500,
                        translateY: '-50%',
                        rotateY: -90,
                        opacity: 0,
                        duration: 0,
                        delay: delay
                    }, {
                        opacity: 0.5,
                        duration: 400
                    }, {
                        translateY: '0%',
                        rotateY: 0,
                        opacity: 1,
                        duration: 600,
                    }
                ],
                ease: "easeInCirc",
                onComplete: () => {
                    projectListAnimations.showProjectItem.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 4. ANIMAÇÕES DE SAÍDA
    // ---------------------------

    // ---------------------------
    // 4.1. slideUpProjectContainer - Anima subida do container
    // ---------------------------
    static slideUpProjectContainer: AnimationObject = {
        isPlaying: false,
        animation: (container: HTMLElement, delay?: number) => {
            var duration = ProjectListController.getListAnimationTime();
            delay = delay || 0;
            projectListAnimations.slideUpProjectContainer.isPlaying = true;
            return animate(container, {
                translateY: ["0%", "-100%"],
                opacity: [1, 0],
                duration: duration,
                ease: cubicBezier(0.652, 0.263, 0.574, 0.614),
                delay: delay,
                onComplete: () => {
                    projectListAnimations.slideUpProjectContainer.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 4.2. hideProjectItem - Anima saída de item de projeto
    // ---------------------------
    static hideProjectItem: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement, delay: number) => {
            projectListAnimations.hideProjectItem.isPlaying = true;
            return animate(project, {
                keyframes: [
                    {
                        perspective: 500,
                        translateY: '0%',
                        rotateY: 0,
                        opacity: 1,
                        duration: 0
                    }, {
                        opacity: 0.3,
                        duration: 400
                    },
                    {
                        translateY: '-100%',
                        rotateY: -90,
                        opacity: 0,
                        duration: 1000
                    }
                ],
                delay: delay,
                ease: "easeInCirc",
                onComplete: () => {
                    projectListAnimations.hideProjectItem.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 4.3. fadeOutProjectItem - Anima fade-out de item
    // ---------------------------
    static fadeOutProjectItem: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement) => {
            projectListAnimations.fadeOutProjectItem.isPlaying = true;
            return animate(project, {
                opacity: [1, 0],
                duration: 500,
                ease: "easeInCirc",
                onComplete: () => {
                    projectListAnimations.fadeOutProjectItem.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 5. ANIMAÇÕES DE SELEÇÃO
    // ---------------------------

    // ---------------------------
    // 5.1. highlightProject - Realça projeto selecionado
    // ---------------------------
    static highlightProject: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement, margin: number) => {
            projectListAnimations.highlightProject.isPlaying = true;
            return animate(project, {
                y: `-${margin}px`,
                duration: 1200,
                ease: cubicBezier(0.111, 0.473, 0.444, 0.989),
                delay: 300,
                onComplete: () => {
                    projectListAnimations.highlightProject.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 5.2. focusOnProject - Remove perspectiva 3D
    // ---------------------------
    static focusOnProject: AnimationObject = {
        isPlaying: false,
        animation: (container: HTMLElement) => {
            projectListAnimations.focusOnProject.isPlaying = true;
            return animate(container, {
                rotateX: ["-12deg", "0deg"],
                rotateY: ["-33deg", "0deg"],
                ease: "easeInOutCirc",
                duration: 1000,
                onComplete: () => {
                    projectListAnimations.focusOnProject.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 5.3. resetScrollPosition - Reseta scroll para o topo
    // ---------------------------
    static resetScrollPosition: AnimationObject = {
        isPlaying: false,
        animation: (container: HTMLElement) => {
            projectListAnimations.resetScrollPosition.isPlaying = true;
            return animate(container, {
                scrollTop: 0,
                duration: 1200,
                ease: cubicBezier(0.111, 0.473, 0.444, 0.989),
                overflowY: 'hidden',
                delay: 300,
                onComplete: () => {
                    projectListAnimations.resetScrollPosition.isPlaying = false;
                }
            })
        }
    }

    // ---------------------------
    // 5.4. blurProject - Desfoca projeto após fechamento
    // ---------------------------
    static blurProject: AnimationObject = {
        isPlaying: false,
        animation: (project: HTMLElement) => {
            projectListAnimations.blurProject.isPlaying = true;
            return animate(project, {
                opacity: [1, 0],
                duration: 200,
                onComplete: () => {
                    // Obtém a lista de projetos (elemento pai)
                    var project_list = project.parentElement as HTMLElement;
                    // Restaura a transformação 3D original da lista
                    project_list.style.transform = "rotateX(-12deg) rotateY(-33deg)";
                    projectListAnimations.blurProject.isPlaying = false;
                }
            })
        }
    }

}

export default projectListAnimations;