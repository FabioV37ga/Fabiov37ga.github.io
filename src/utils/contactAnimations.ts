/**
 * ============================================================================
 * CONTACT ANIMATIONS
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface AnimationObject
 * 3. Classe ContactAnimations
 *    3.1. displayContact - Exibe container de contato sem animação
 *    3.2. showTitles - Animação de exibição de títulos
 *    3.3. showCards - Animação de exibição de cartões
 *    3.4. expandDivisor - Animação de expansão do divisor
 *    3.5. hideCards - Animação de ocultação dos cartões
 *    3.6. hideTitle - Animação de ocultação dos títulos
 *    3.7. retractDivisor - Animação de retração do divisor
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------
import { animate, engine } from "animejs"

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 3. CLASSE CONTACTANIMATIONS
// ---------------------------
class ContactAnimations extends Animation {

    static displayContact: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            ContactAnimations.displayContact.isPlaying = true;
            return animate(element, {
                display: 'flex',
                duration: 1,
                onComplete: () => {
                    ContactAnimations.displayContact.isPlaying = false;
                }
            })
        }
    }

    static showTitles: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ContactAnimations.showTitles.isPlaying = true;
            return animate(element, {
                display: 'flex',
                opacity: [0, 1],
                duration: 400,
                delay: delay,
                onComplete: () => {
                    ContactAnimations.showTitles.isPlaying = false;
                }
            })
        }
    }

    static showCards: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ContactAnimations.showCards.isPlaying = true;
            return animate(element, {
                opacity: [0, 1],
                display: 'flex',
                duration: 350,
                delay: delay,
                onComplete: () => {
                    ContactAnimations.showCards.isPlaying = false;
                }
            })
        }
    }

    static expandDivisor: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            ContactAnimations.expandDivisor.isPlaying = true;
            return animate(element, {
                display: 'flex',
                height: ['0%', '100%'],
                margin: ['112px 0 0 0', '0px 0 0 0'],
                duration: 500,
                onComplete: () => {
                    ContactAnimations.expandDivisor.isPlaying = false;
                }
            })
        }
    }

    static hideCards: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ContactAnimations.hideCards.isPlaying = true;
            return animate(element, {
                opacity: [1, 0],
                duration: 350,
                delay: delay,
                onComplete: () => {
                    ContactAnimations.hideCards.isPlaying = false;
                }
            })
        }
    }

    static hideTitle: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            ContactAnimations.hideTitle.isPlaying = true;
            return animate(element, {
                opacity: [1, 0],
                duration: 400,
                delay: delay,
                onComplete: () => {
                    ContactAnimations.hideTitle.isPlaying = false;
                }
            })
        }
    }

    static retractDivisor: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            ContactAnimations.retractDivisor.isPlaying = true;
            return animate(element, {
                height: ['100%', '0%'],
                margin: ['0px 0 0 0', '112px 0 0 0'],
                duration: 500,
                onComplete: () => {
                    ContactAnimations.retractDivisor.isPlaying = false;
                }
            })
        }
    }
}

export default ContactAnimations;