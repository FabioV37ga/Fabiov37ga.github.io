// ---------------------------
// 1. IMPORTS E INTERFACE
// ---------------------------

import {animate, JSAnimation, engine, cubicBezier} from "animejs"

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;

class ContainerAnimations extends Animation {

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