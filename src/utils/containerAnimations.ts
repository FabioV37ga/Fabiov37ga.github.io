/**
 * ============================================================================
 * CONTAINER ANIMATIONS
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e configuração do engine
 * 2. Classe ContainerAnimations
 *    2.1. fadeInContainer - animação de entrada do container
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E CONFIGURAÇÃO
// ---------------------------

import {animate, engine} from "animejs"

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;


// ---------------------------
// 2. CLASSE CONTAINERANIMATIONS
// ---------------------------

class ContainerAnimations extends Animation {

    // ---------------------------
    // 2.1. fadeInContainer - animação de entrada do container
    // ---------------------------
    static fadeInContainer: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            ContainerAnimations.fadeInContainer.isPlaying = true;
            return animate(element, {
                display: 'flex',
                opacity: [0, 1],
                duration: 500,
                onComplete: () => {
                    ContainerAnimations.fadeInContainer.isPlaying = false;
                }
            })
        }
    }
}

export default ContainerAnimations;