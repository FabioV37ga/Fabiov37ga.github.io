// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------
import { animate, JSAnimation, engine, cubicBezier } from "animejs"

import Animation from "./animation.js";

engine.pauseOnDocumentHidden = true;

// ---------------------------
// 2. INTERFACE ANIMATIONOBJECT
// ---------------------------
interface AnimationObject {
    isPlaying: boolean;
    animation: (...args: any[]) => JSAnimation;
}

// ---------------------------
// 3. CLASSE WELCOMEANIMATIONS
// ---------------------------
class WelcomeAnimations extends Animation {
    static fadeOutWelcome: AnimationObject = {
        isPlaying: false,
        animation: (element: HTMLElement, delay: number) => {
            this.fadeOutWelcome.isPlaying = true;
            return animate(element, {
                opacity: [1, 0],
                duration: 500,
                easing: 'easeInOutQuad',
                delay: delay,
                onComplete: () => {
                    this.fadeOutWelcome.isPlaying = false;
                    // element.style.display = 'none';
                }
            })
        }
    }
}

export default WelcomeAnimations;