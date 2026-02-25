import {animate, JSAnimation, engine, cubicBezier} from "animejs"

import Animation from "./animation.js";

engine.pauseOnDocumentHidden = true;

interface AnimationObject{
    isPlaying: boolean;
    animation: (...args: any[]) => JSAnimation;
}

class AboutAnimations extends Animation{

    static showAbout: AnimationObject = {
        isPlaying: false,
        animation: (element:HTMLElement) =>{
            AboutAnimations.showAbout.isPlaying = true;
            return animate(element, {
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
                translateX: ["0px", "20px"],
                duration: 250,
                onComplete: ()=>{
                    AboutAnimations.hideAboutItems.isPlaying = false
                }
            })
        }
    }
}

export default AboutAnimations