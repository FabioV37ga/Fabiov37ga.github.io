/**
 * ============================================================================
 * ABOUT ANIMATIONS
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Interface AnimationObject
 * 2. Classe AboutAnimations
 *    2.1. showAbout - Animação de exibição da seção About
 *    2.2. slideInAboutItem - Animação de entrada dos itens
 *    2.3. hideAboutItems - Animação de ocultação dos itens
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E INTERFACE
// ---------------------------

import {animate, engine, cubicBezier} from "animejs"

import {Animation, AnimationObject} from "./animation.js";
import AboutController from "../controllers/aboutController.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. CLASSE ABOUTANIMATIONS
// ---------------------------

class AboutAnimations extends Animation{

    static showTitle: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showTitle.isPlaying = true;
            element.style.display = 'flex'
            return animate(element, {
                // display: 'flex',
                delay: 200,
                opacity: [0,1],
                duration: 200,
                onComplete: ()=>{
                    AboutAnimations.showTitle.isPlaying = false
                }
            })
        }
    }

    static showAboutItem: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            AboutAnimations.showAboutItem.isPlaying = true;
            return animate(element, {
                display: 'flex',
                opacity: [0,1],
                ease: 'easeOutCirc',
                duration: 250,
                onComplete: ()=>{
                    AboutAnimations.showAboutItem.isPlaying = false;
                }
            })    
        }
    }

    static hideAboutItem: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) => {
            AboutAnimations.hideAboutItem.isPlaying = true;
            AboutController.isPlaying = true
            return animate(element, {
                opacity: [1, 0],
                // translateX: ["0px", "20px"],
                duration: 200,
                onComplete: ()=>{
                    element.style.opacity = '0';
                    element.style.display = 'none';
                    AboutController.isPlaying = false
                    AboutAnimations.hideAboutItem.isPlaying = false
                }
            })
        }
    }
}

export default AboutAnimations