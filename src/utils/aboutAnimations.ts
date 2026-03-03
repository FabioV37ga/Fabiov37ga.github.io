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

import {animate, JSAnimation, engine, cubicBezier} from "animejs"

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. CLASSE ABOUTANIMATIONS
// ---------------------------

class AboutAnimations extends Animation{

    static showAbout: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showAbout.isPlaying = true;
            return animate(element, {
                display: 'flex',
                opacity: [0,1],
                duration: 200 * 4,
                onComplete: ()=>{
                    AboutAnimations.showAbout.isPlaying = false
                }
            })
        }
    }

    static showSidebar: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement) => {
            AboutAnimations.showSidebar.isPlaying = true;
            return animate(element, {
                height: ['0%', '100%'],
                duration: 200,
                onComplete: ()=>{
                    AboutAnimations.showSidebar.isPlaying = false;
                }
            })
        }
    }

    static slideInAboutItem: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            AboutAnimations.slideInAboutItem.isPlaying = true;
            return animate(element, {
                display: 'flex',
                opacity: [0,1],
                translateX: ["20px", "0px"], 
                ease: 'easeOutCirc',
                duration: 250,
                delay: delay,
                onComplete: ()=>{
                    AboutAnimations.slideInAboutItem.isPlaying = false;
                }
            })    
        }
    }
    static hideAboutItems: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) => {
            AboutAnimations.hideAboutItems.isPlaying = true;
            return animate(element, {
                opacity: [1, 0],
                // translateX: ["0px", "20px"],
                duration: 250,
                onComplete: ()=>{
                    element.style.display = 'none';
                    AboutAnimations.hideAboutItems.isPlaying = false
                }
            })
        }
    }
}

export default AboutAnimations