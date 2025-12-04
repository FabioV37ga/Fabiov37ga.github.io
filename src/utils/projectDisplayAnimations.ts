import { animate, cubicBezier } from "animejs"
import { Project } from "../data/projects.js"

import u from "umbrellajs";

const techFadeIn = (element: HTMLElement, delay: number) => {
    animate(element, {
        opacity: [0, 1],
        translateY: ['-5x', '0px'],
        ease: "easeOutCirc",
        duration: 100,
        delay: delay
    })
}

const typeDescription = (element: HTMLElement, project: Project, delay: number) => {

    const paragraphs = u('.description-content span', element);
    const paragraphsArray: string[] = [];
    const paragraphsNodes: HTMLElement[] = [];

    var totalCharacters = 0;

    paragraphs.each((node: HTMLElement) => {
        totalCharacters += node.textContent?.length || 0;
        paragraphsArray.push(node.textContent || '');
        paragraphsNodes.push(node);
        node.textContent = '';
    })

    setTimeout(() => {
        var currentParagraph: number = 0
        var currentChar: number = 0;
        var currentText: string = '';
    
        var typeInterval = setInterval(() => {
    
            currentText = paragraphsArray[currentParagraph].substring(0, currentChar);
            paragraphsNodes[currentParagraph].textContent = currentText;
            currentChar++;
    
            if (currentChar > paragraphsArray[currentParagraph].length) {
                currentParagraph++;
                currentChar = 0;
            }
    
            if (currentParagraph >= paragraphsArray.length) {
                clearInterval(typeInterval);
            }
        }, 5);
    }, delay);

    return totalCharacters;
}

const expandSpacer = (element: HTMLElement, delay: number) => {
    animate(element, {
        opacity: [0, 1],
        width: ['0%', '100%'],
        easing: cubicBezier(.5, .05, .1, .3),
        duration: 1000,
        delay: delay
    })
}

export { techFadeIn, typeDescription, expandSpacer };