import { animate, JSAnimation, engine, cubicBezier } from "animejs"

import Animation from "./animation.js";

engine.pauseOnDocumentHidden = true;

interface AnimationObject {
    isPlaying: boolean;
    animation: (...args: any[]) => JSAnimation;
}

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
}

export default ContactAnimations;