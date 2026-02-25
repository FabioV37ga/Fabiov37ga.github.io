import u from "umbrellajs"

import { Elements } from "../selectors/aboutSelector.js"

import AboutAnimations from "../utils/aboutAnimations.js";

class AboutView{
    elements: Elements;

    constructor(elements: Elements){
        this.elements = elements
    }

    showContent(){
        AboutAnimations.showAbout.animation(
            this.elements.about
        )
    }

    showParagraph(paragraph: HTMLElement, delay: number){
        AboutAnimations.slideInAboutItem.animation(
            paragraph,
            delay
        )
    }

    showSidebar(){
        AboutAnimations.showSidebar.animation(
            this.elements.sidebar
        )
    }

    hideContent(){
        AboutAnimations.hideAboutItems.animation(
            this.elements.about
        )
    }

}

export default AboutView