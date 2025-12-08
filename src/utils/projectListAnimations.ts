/**
 * ============================================================================
 * PROJECT LIST ANIMATIONS
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Animações de Entrada
 *    2.1. slideDownProjectContainer() - Anima descida do container
 *    2.2. showProjectItem() - Anima entrada de item de projeto
 * 3. Animações de Saída
 *    3.1. slideUpProjectContainer() - Anima subida do container
 *    3.2. hideProjectItem() - Anima saída de item de projeto
 * 4. Animações de Seleção
 *    4.1. highlightProject() - Realça projeto selecionado
 *    4.2. focusOnProject() - Remove perspectiva 3D
 *    4.3. resetScrollPosition() - Reseta scroll para o topo
 *    4.4. blurProject() - Desfoca projeto após fechamento
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

// Importa Anime.js para animações
import { engine, animate, cubicBezier } from "animejs"

import Animation from "./animation.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. ANIMAÇÕES DE ENTRADA
// ---------------------------


// ---------------------------
// 2.1. slideDownProjectContainer - Anima descida do container
// ---------------------------

const slideDownProjectContainer = (container: HTMLElement, duration: number, delay: number) => {
    // Anima a entrada do container de cima para baixo
    return animate(container, {
        translateY: ["-100%", "0%"],
        opacity: [0, 1],
        duration: duration,
        overflowY: 'scroll',
        delay: delay,
        ease: cubicBezier(0.155, 0.812, 0.755, 1.01),
        onComplete: () => {
            Animation.projectListCooldown = false;
        }
    })
}


// ---------------------------
// 2.2. showProjectItem - Anima entrada de item de projeto
// ---------------------------

const showProjectItem = (project: HTMLElement, delay: number) => {
    // Anima item com rotação 3D e fade-in
    animate(project, {
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
        ease: "easeInCirc"
    })
}



// ---------------------------
// 3. ANIMAÇÕES DE SAÍDA
// ---------------------------


// ---------------------------
// 3.1. slideUpProjectContainer - Anima subida do container
// ---------------------------

const slideUpProjectContainer = (container: HTMLElement, duration: number, delay?: number) => {
    delay = delay || 0;
    // Anima a saída do container de baixo para cima
    animate(container, {
        translateY: ["0%", "-100%"],
        opacity: [1, 0],
        duration: duration,
        ease: cubicBezier(0.652, 0.263, 0.574, 0.614),
        delay: delay
    })
}


// ---------------------------
// 3.2. hideProjectItem - Anima saída de item de projeto
// ---------------------------

const hideProjectItem = (project: HTMLElement) => {
    // Anima item com rotação 3D reversa e fade-out
    animate(project, {
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
        ease: "easeInCirc"
    })
}

const fadeOutProjectItem = (project: HTMLElement) => {
    // Anima o fade-out do item de projeto
    animate(project, {
        opacity: [1, 0],
        duration: 500,
        ease: "easeInCirc"
    }
    )
}


// ---------------------------
// 4. ANIMAÇÕES DE SELEÇÃO
// ---------------------------


// ---------------------------
// 4.1. highlightProject - Realça projeto selecionado
// ---------------------------

const highlightProject = (project: HTMLElement, margin: number) => {
    // Move o projeto para cima baseado na margem calculada
    animate(project, {
        y: `-${margin}px`,
        duration: 1200,
        ease: cubicBezier(0.111, 0.473, 0.444, 0.989),
        delay: 300
    })
}


// ---------------------------
// 4.2. focusOnProject - Remove perspectiva 3D
// ---------------------------

const focusOnProject = (container: HTMLElement) => {
    // Remove a rotação 3D do container para foco direto
    animate(container, {
        rotateX: ["-12deg", "0deg"],
        rotateY: ["-33deg", "0deg"],
        ease: "easeInOutCirc",
        duration: 1000
    })
}


// ---------------------------
// 4.3. resetScrollPosition - Reseta scroll para o topo
// ---------------------------

const resetScrollPosition = (container: HTMLElement) => {
    // Anima o scroll do container de volta ao topo
    animate(container, {
        scrollTop: 0,
        duration: 1200,
        ease: cubicBezier(0.111, 0.473, 0.444, 0.989),
        overflowY: 'hidden',
        delay: 300
    })
}


// ---------------------------
// 4.4. blurProject - Desfoca projeto após fechamento
// ---------------------------

const blurProject = (project: HTMLElement) => {
    // Anima o fade-out do projeto e restaura a perspectiva 3D da lista
    animate(project, {
        opacity: [1, 0],
        duration: 200,
        onComplete: () => {
            // Obtém a lista de projetos (elemento pai)
            var project_list = project.parentElement as HTMLElement;
            // Restaura a transformação 3D original da lista
            project_list.style.transform = "rotateX(-12deg) rotateY(-33deg)";
        }
    })
}

export {
    slideDownProjectContainer, showProjectItem, // Animações de entrada
    slideUpProjectContainer, hideProjectItem, fadeOutProjectItem, // Animação de saída
    highlightProject, focusOnProject, resetScrollPosition, // Animações de seleção
    blurProject // Animação de desfoque
}