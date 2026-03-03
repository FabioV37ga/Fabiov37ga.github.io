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

    static expandContainer: AnimationObject = {
        isPlaying:false,
        animation: (element: HTMLElement) =>{
            AboutAnimations.expandContainer.isPlaying = true;
            return animate(element, {
                display: 'flex',
                translateX: ['-228px', '0px'],
                translateY: ['136px', '0px'],
                width: ['0px', '456px'],
                height: ['0px', '272px'],
                opacity: 1,
                duration: 500,
                ease: cubicBezier(0.015, 0.065,0.189,0.971),
                onComplete: ()=>{
                    AboutAnimations.expandContainer.isPlaying = false
                }
            })
        }
    }



    static showTitle: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showTitle.isPlaying = true;
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

    static showAbout: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showAbout.isPlaying = true;
            return animate(element, {
                // display: 'flex',
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
                    element.style.opacity = '0';
                    element.style.display = 'none';
                    AboutAnimations.hideAboutItems.isPlaying = false
                }
            })
        }
    }
}

export default AboutAnimations