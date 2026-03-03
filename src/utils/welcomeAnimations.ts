// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------
import { animate, JSAnimation, engine, cubicBezier } from "animejs"

import {Animation, AnimationObject} from "./animation.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 3. CLASSE WELCOMEANIMATIONS
// ---------------------------
class WelcomeAnimations extends Animation {
    static fadeOutWelcomeText: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            this.fadeOutWelcomeText.isPlaying = true;
            return animate(element, {
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInOutQuad',
                delay: delay,
                onComplete: () => {
                    this.fadeOutWelcomeText.isPlaying = false;
                    // element.style.display = 'none';
                }
            })
        }
    }
}

export default WelcomeAnimations;