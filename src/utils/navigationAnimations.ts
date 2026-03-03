/**
 * ============================================================================
 * NAVIGATION ANIMATIONS
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface AnimationObject
 * 3. Classe NavigationAnimations
 *    3.1. shiftMarker - Move marcador para posição ativa
 *    3.2. spinMarkers - Gira marcadores continuamente
 *    3.3. stopSpinMarkers - Interrompe rotação dos marcadores
 *    3.4. shiftMarkerBack - Retorna marcador à posição inicial
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------
import { engine, animate, JSAnimation } from "animejs";

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;

import u from 'umbrellajs';


// ---------------------------
// 3. CLASSE NAVIGATIONANIMATIONS
// ---------------------------
class NavigationAnimations extends Animation {

    static shiftMarker: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            console.log("starting animation")
            NavigationAnimations.shiftMarker.isPlaying = true;
            return animate(element, {
                display: 'flex',
                marginLeft: ['-9px', '0px'],
                duration: 125,
                ease: 'easeInOutQuad',
                onComplete: () => {
                    NavigationAnimations.shiftMarker.isPlaying = false;
                }
            })
        }
    }

    static spinMarkers: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            NavigationAnimations.spinMarkers.isPlaying = true;
            // loop indefinitely using animejs loop option
            return animate(element, {
                display: 'flex',
                rotate: '360deg',
                duration: 1000,
                loop: true,
                ease: 'linear',
            });
        }
    }

    static stopSpinMarkers: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            NavigationAnimations.spinMarkers.isPlaying = false;
            NavigationAnimations.spinMarkers.animation(element).pause();
            
            NavigationAnimations.stopSpinMarkers.isPlaying = true;

            return animate(element, {
                rotate: '360deg',
                duration: 500,
                easing: 'linear',
                onComplete: () => {
                    NavigationAnimations.stopSpinMarkers.isPlaying = false;
                }
            })
        }
    }
    static shiftMarkerBack: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            NavigationAnimations.shiftMarkerBack.isPlaying = true;
            return animate(element, {
                display: 'flex',
                marginLeft: ['0px', '-9px'],
                duration: 125,
                ease: 'easeInOutQuad',
                onComplete: () => {
                    NavigationAnimations.shiftMarkerBack.isPlaying = false;
                }
            })
        }
    }
}

export default NavigationAnimations;